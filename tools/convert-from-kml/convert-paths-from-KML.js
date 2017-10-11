var tj = require('@mapbox/togeojson'), fs = require('fs'), DOMParser = require('xmldom').DOMParser;
//var obj = JSON.parse(fs.readFileSync('in/story-zones.geojson', 'utf8'));
// using togeojson in nodejs


    

var kml = new DOMParser().parseFromString(fs.readFileSync('in/story-path.kml', 'utf8'));

var obj = tj.kml(kml);

fs.writeFile('out/intermediate.json', JSON.stringify(obj, null, 4), function (err) {
		if (err) return console.log(err);
		console.log('obj > intermediate.json');
	});

zoneData=[];
poiData =[];
//filter by specific date
obj.features.forEach(function(feature) {
	


	
    points=[]
	
	if (feature.geometry.type == "LineString"){
		feature.geometry.coordinates.forEach(function(latlng){
				points.push([latlng[1],latlng[0]]);
				
		});
		


		
		zoneData.push({
		points : points,
		id : feature.properties.name
		});
		
	} 
	

	
	
	console.log(feature);
	
	
	
});
console.log(zoneData);

zoneData.push(poiData);

fs.writeFile('out/story-paths.json', JSON.stringify(zoneData, null, 4), function (err) {
		if (err) return console.log(err);
		console.log('zoneData > story-paths.json');
	});