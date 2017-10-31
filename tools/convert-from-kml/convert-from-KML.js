var tj = require('@mapbox/togeojson'), fs = require('fs'), DOMParser = require('xmldom').DOMParser;
//var obj = JSON.parse(fs.readFileSync('in/story-zones.geojson', 'utf8'));
// using togeojson in nodejs


    

var kml = new DOMParser().parseFromString(fs.readFileSync('in/Brink Of The Future - PRODUCTION.kml', 'utf8'));

var obj = tj.kml(kml);

fs.writeFile('out/intermediate.json', JSON.stringify(obj, null, 4), function (err) {
		if (err) return console.log(err);
		console.log('obj > intermediate.json');
	});

zoneData=[];
poiData =[];
route = null;


//Zones

obj.features.forEach(function(feature) {
	


	
    points=[]
	
	if (feature.geometry.type == "Polygon"){
		feature.geometry.coordinates.forEach(function(latlnglist) {
			latlnglist.forEach(function(latlng){
				points.push([latlng[1],latlng[0]]);
				});
		});
		

		var obj = zoneData.find(function (obj) { return obj.id === feature.properties.name; });
		
		if (obj != null){
			//extend the object
			
			obj.audio = ["sounds"+feature.properties.webm,"sounds"+feature.properties.mp3],
			obj.description = feature.properties.description,
			obj.howl = null,
			obj.polygon = points
		} else {
			
			zoneData.push({
			id : feature.properties.name,
			name: feature.properties.displayName,
			audio : ["sounds"+feature.properties.webm,"sounds"+feature.properties.mp3],
			description : feature.properties.description,
			howl : null,
			polygon : points
		});
		}
		
	} else {
		if (feature.geometry.type == "LineString"){
		feature.geometry.coordinates.forEach(function(latlng){
				points.push([latlng[1],latlng[0]]);
				
		});
		
		var obj = zoneData.find(function (obj) { return obj.id === feature.properties.name; });
		if (obj != null){
			//extend the object
			obj.path= points
		} else {
		    if (feature.properties.name == "route") {
				route = {
				id : feature.properties.name,
				path : points
				};
			} else {			
				zoneData.push({
					id : feature.properties.name,
					path : points
				});
			}
		}
		} else {
			if (feature.geometry.type == "Point"){
				points = [feature.geometry.coordinates[1],feature.geometry.coordinates[0]];
			
				var purpleIcon
		
				poiData.push({			
					point: points, icon: 'purpleIcon', vo :{
						variant : feature.properties.variant, 
						src : feature.properties.source, 
						zone : feature.properties.zone,
						type : feature.properties.type,
						colour :feature.properties.colour,
						heartbeat :feature.properties.heartbeat,
						launchAt : feature.properties.launchAt,
						stopAt : feature.properties.stopAt,
						launchType : feature.properties.launchType,
						augmentSrc : feature.properties.augmentSrc,
						i360Src : feature.properties.i360Src,
						imageSrc : feature.properties.imageSrc,
						unlocked : false,
						launched : false,
						cType : feature.properties.type,
						cTitle : feature.properties.name,
						cDescription : feature.properties.description,
						marker : null
					}
				});
			}
		}
	}
	

	
	
	console.log(feature);
	
	
	
});











console.log(zoneData);



fs.writeFile('out/story-zones.js', "// use audioZones array to store audio zone data objects\r\n// points - the latitude and longitude of points defining zones\r\n// id - internal identifier\r\n// audio - the associated zone audio file, currently a single mp3 but may need to be an array of file formats\r\n// description - zone description intended to be rendered to the user interface\r\nvar route = "+JSON.stringify(route, null, 4)+";\r\nvar audioZones = "+JSON.stringify(zoneData, null, 4)+";\r\n// style object used to style POIs, ie Lefalet marker styling options\r\n// create more as required\r\nvar purpleIcon = L.icon({\r\n    iconUrl: 'imgs/poi-purple.png',\r\n    iconSize:     [32, 32], // size of the icon\r\n    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location\r\n    popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor\r\n});\r\n// use poiList array to store POI (point of interest) data objects\r\n\r\nvar poiList = "+JSON.stringify(poiData, null, 4)+";\r\n", function (err) {
		if (err) return console.log(err);
		console.log('zoneData > story-zones.js');
	});