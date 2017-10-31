var tj = require('@mapbox/togeojson'), fs = require('fs'), DOMParser = require('xmldom').DOMParser;
//var obj = JSON.parse(fs.readFileSync('in/story-zones.geojson', 'utf8'));
// using togeojson in nodejs


    

var kml = new DOMParser().parseFromString(fs.readFileSync('in/story-zones.kml', 'utf8'));

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
	
	if (feature.geometry.type == "Polygon"){
		feature.geometry.coordinates.forEach(function(latlnglist) {
			latlnglist.forEach(function(latlng){
				points.push([latlng[1],latlng[0]]);
				});
		});
		


		
		zoneData.push({
		points : points,
		id : feature.properties.name,
		audio : "sounds"+feature.properties.webm,
		description : feature.properties.description.split("<br>")[1]
		});
		
	} else {
		if (feature.geometry.type == "Point"){
					points = [feature.geometry.coordinates[1],feature.geometry.coordinates[0]];
			
		
		poiData.push({			
			point: points, icon: 'purpleIcon', vo :{
				variant : 'iframe', 
				src : "https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/S22XBa7.jpg&amp;autoLoad=true", 
				cType : '360 Image',
				cTitle : feature.properties.name,
				cDescription : feature.properties.description
			}
		});
		}
	}
	

	
	
	console.log(feature);
	
	
	
});
console.log(zoneData);

zoneData.push(poiData);

fs.writeFile('out/story-zones.json', JSON.stringify(zoneData, null, 4), function (err) {
		if (err) return console.log(err);
		console.log('zoneData > story-zones.json');
	});