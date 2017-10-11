var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('in/story-zones.geojson', 'utf8'));

zoneData=[];
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
		id : feature.properties.Name,
		audio : "sounds/"+feature.properties.Name+".mp3",
		description : feature.properties.description
		});
		
	}
	
	
	console.log(feature);
	
	
	
});
console.log(zoneData);

fs.writeFile('out/story-zones.json', JSON.stringify(zoneData, null, 4), function (err) {
		if (err) return console.log(err);
		console.log('zoneData > story-zones.json');
	});