var globalID = 'the brink';
var version = 0.1;
var map = L.map('map',{zoomControl: false}).fitWorld();
var zoomFactor = 18;
// the primary marker signifying the user
// if browser geolocation is deemed too inaccurate it may be necessary to hide the me marker from view or adapt the representation ...
// in any case, even if hidden, it is needed to manage interaction 
var me;
// flags to manage audio playback and prevent concurrent narration 
var zoneAudioPlaying = false;
var narrationPlaying = false;
var nextNarration = "";
var previousNarration = "";
// whether in debug mode i.e. with URL query string defined starting point
var debugMode = false;
// reference for interval used to check whether a sound is actually playing
var playCheckTimer;
// the interval time in ms to wait before checking that a sound is actually playing, may need to be tweaked!
var playCheckInterval = 1000;
// use polys to store polygon shapes created from audio zone points
// in the final user experience polys may be rendered invisibily and just used to detect whether a user has entered a given audio zone
var polys = [];
// store zone interaction history - perhaps can be used to create breadcrumbs, to unlock an Easter egg when all zones have been visited or just for analytics
var zoneHistory = [];


// use contentMarkers to store markers created from poiList
var contentMarkers = [];

// hide content and control layers
$("#content-overlay").toggle();
$("#control-overlay").toggle();
// assign functionality to content close button
$("#content-close").click(function(){
    closeDetailOverlay();
});
// create map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: zoomFactor,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(map);

// are we in debug mode? e.g if the URL ends like this ?lat=51.856&lng=0.946
// the map will be centred to the given point, the 'me' marker will  be draggable and the browser geolocation API not invoked
var qLat = getParameterByName('lat');
var qLong = getParameterByName('lng');
if (qLat != null && qLong != null) {
	debugMode = true;
	// we're in debug mode with preset positioning and dragging enabled
	// uncomment the following lines to log initial debug position 
	//console.log("qLong = "+qLong);
	//console.log("qLat = "+qLat);
	me = L.marker([qLat, qLong]).addTo(map);
	map.setView([qLat, qLong], zoomFactor);
	me.dragging.enable();
	// re-centre the map when dragging finishes
	// this can cause problems if a Bootstrap modal is shown at the same time 
	// TODO - monitor whether or not a significant issue
	me.on('moveend', function(){
		// uncomment to trace coords if needed
		//	console.log(me.getLatLng());
		map.setView(me.getLatLng(), zoomFactor);
		manageZones(me);
	})
} else {
	// by default locate the map using the browser geolocation API (invoked discreetly by leaflet.js)
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	locateGPSMap()
	map.setZoom(zoomFactor);
}
// create polygons from zones and add to polys array
var polygonStyle = {fillOpacity: 0};
var poly;
for(var i = 0; i < audioZones.length; i++){
	poly = L.polygon(audioZones[i].points, polygonStyle).addTo(map);
	polys.push(poly);
}
// create markers from poiList and add to contentMarkers array
var contentMarker;
var link;
var vo;
for(var i = 0; i < poiList.length; i++){
	contentMarker = L.marker(poiList[i].point, {icon: poiList[i].icon}).addTo(map);
	vo = poiList[i].vo;
	// define HTML element before binding as Leaflet Popup content, otherwise no event propagation! 
	 link = $('<a href="#" id="'+i+'" class="content-link">'+vo.cType+': '+vo.cTitle+'</a>').click(function() {
		// any var referenced here will probably be incorrect 
		// use the html id attribute instead
	   showDetailOverlay($(this).attr("id"));
	})[0];
	contentMarker.bindPopup(link);
	contentMarkers.push(contentMarker);
}
function showDetailOverlay(i){
	// i is the index of the poi and content marker
	// if user clicks the content link we want the Leaflet popup to close (otherwise will still be open when they come back to the map)
	 contentMarkers[i].closePopup();
	var v = poiList[i].vo;
	// hide map
	 $("#map").toggle();
	// show content
	$("#content-overlay").toggle();
	// populate control label
	$("#content-close").text('Close '+v.cType);
	// show control
	$("#control-overlay").toggle();
	if(v.variant == 'iframe'){
		$("#content-overlay").html('<iframe width="100%" height="100%" allowfullscreen style="border-style:none;" src="'+v.src+'"></iframe>');
	}
	// disable update geolocation call 
	map.stopLocate();
}
function closeDetailOverlay(){

	// hide content
	$("#content-overlay").toggle();
	// empty content
	$("#content-overlay").empty();
	// hide control
	$("#control-overlay").toggle();
	// show map
	 $("#map").toggle();
	// re-enable update geolocation call
	if(!debugMode){
		locateGPSMap();
	}
}
// geolocation functions
// RH 2017/08/18 enabled high accuracy
function locateGPSMap(){
	map.locate({
		setView: true,
		maxZoom: zoomFactor,
		enableHighAccuracy: true,
		maximumAge: 10000,
		watch: true
	});
}

function onLocationError(e) {
	// TODO handle error in a better way
	alert(e.message);
}
// this function is likely to be called repeatedly throughout the user experience
// the exact frequency depends on the browser
function onLocationFound(e) {
	
	if (!me) {
		//instantiate
		me = L.marker(e.latlng).addTo(map);
	} else {
		// update
		me.setLatLng(e.latlng);
	}
	manageZones(me);
}
// TODO!! Need to keep an eye on performance if checking a large number of complex zones
// Probably best to stress test this is advance with benchmark devices to check where the fallover point is
function manageZones(m){
	// test to see if marker is within any audio zones
	var poly;
	for(var i = 0; i < polys.length; i++){
		poly = polys[i];
		if (isMarkerInsidePolygon(m, poly)){
			activateAudioZone(i);
			break;
		}
	}
}
// audio zone management
function activateAudioZone(z){
	// have we just been in this zone ? Could be an inadvertant repetition...
	// this could be changed to allow each zone to be experienced only once.... 
	var id = audioZones[z].id;
	var repeat = false;
	if(zoneHistory.length > 0){
		// is new zone the same as the last one?
		if(zoneHistory[zoneHistory.length -1] == id){			
			repeat = true;
		}
	}
	// if already been here, do nothing, otherwise... 
	if(!repeat){
		zoneHistory.push(id);
		// for testing purposes
	//	me.bindPopup("welcome to "+id).openPopup();
		// cue or play zone audio
		cueNarration(audioZones[z]);
	}
}
// audio management 	
function cueNarration(zone) {
	// check has not already played
	if (zone == previousNarration) {
		// do nothing because we just heard it or it is currently being played back
	} else {
		// if system not already in zone playback
		// narrationPlaying denotes that a sound 'should' be playing
		if (!narrationPlaying) {
			narrationPlaying = true
			if (zone == nextNarration) {
				// will occur if this was cued up while the last sound was playing
				nextNarration = "";
			}
			// create and add the zoneSound propery to the audio zone object if not already done
			if(zoneSound in zone){
				// sound already created
			}else{
				// only set up the zone sound and end listener once
				var zoneSound = new Howl({
					src: [zone.audio],
					volume: 1.0
				});
				zoneSound.on('play', function() {
				//	console.log('zone sound playing')
					zoneAudioPlaying = true;
				});
				zoneSound.on('end', function() {
				//	console.log('zone sound ended')
					zoneAudioPlaying = narrationPlaying = false;
					if (nextNarration != "") {
						cueNarration(nextNarration);
					}
				});
				zone.zoneSound = zoneSound;
			}
			// TODO!!		
			// playing here by invoking the sound's play method directly...
			// is problematic with neither Blackberry nor iPhone seemingly able to subsequently detect whether play has started or not
			// iOS requires a user prompt to play but then sometimes plays the original as well as a copy which sounds weird
			// the safest approach is to present a modal requiring user interaction to play the audio in all cases
			// this may be addressed in future versions
			promptPlayBack(zone);
			previousNarration = zone;
		} else {
			nextNarration = zone;
		}
	}
}
function promptPlayBack(zone){
	var audioModal = $('#audioZoneModal');
	audioModal.modal('show');
	audioModal.find('.modal-body').text(zone.description);
	// remove any other click function before assigning new one!
	$('#audio-prompt').unbind('click').click(function(){
		zone.zoneSound.play();
		audioModal.modal('hide');	
	});
}
// geometric functions

function isMarkerInsidePolygon(marker, poly) {
	var inside = false;
	var x = marker.getLatLng().lat,
		y = marker.getLatLng().lng;
	for (var ii = 0; ii < poly.getLatLngs().length; ii++) {
		var polyPoints = poly.getLatLngs()[ii];
		for (var i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
			var xi = polyPoints[i].lat,
				yi = polyPoints[i].lng;
			var xj = polyPoints[j].lat,
				yj = polyPoints[j].lng;
			var intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
			if (intersect) inside = !inside;
		}
	}
	return inside;
};
// core functions

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}