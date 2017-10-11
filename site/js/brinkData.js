// use audioZones array to store audio zone data objects
	// points - the latitude and longitude of points defining zones
	// id - internal identifier
	// audio - the associated zone audio file, currently a single mp3 but may need to be an array of file formats
	// description - zone description intended to be rendered to the user interface
var audioZones = [
{points:[[51.855787, 0.9458971],
[51.856082, 0.946744],
[51.855701, 0.947158],
[51.855423, 0.946380]], 
id:'zone1',audio:'sounds/zone1.mp3',
description:'Short description about zone 1 audio.'},
{points:[[51.856503, 0.947614],
[51.856109, 0.947828],
[51.855980, 0.947083],
[51.856351, 0.946879]], 
id:'zone2',audio:'sounds/zone2.mp3',
description:'Short description about zone 2 audio.'},
{points:[[51.856517, 0.947683],
[51.856649, 0.948622],
[51.856301, 0.948654],
[51.856212, 0.947785]], 
id:'zone3',audio:'sounds/zone3.mp3',
description:'Short description about zone 3 audio.'}
];
// style object used to style POIs, ie Lefalet marker styling options
// create more as required 
var purpleIcon = L.icon({
    iconUrl: 'imgs/poi-purple.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
});
// use poiList array to store POI (point of interest) data objects
var poiList = [
{point: [51.855939, 0.946536], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/BnPyCRy.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'The Fairy Glade',
	cDescription:"Description about the Fairy Glade"
	}
},	{point: [51.856354, 0.948879 ], icon: purpleIcon, vo :{
		variant:'iframe', 
		src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/iLtS5dc.jpg&amp;autoLoad=true", 
		cType: '360 Image',
		cTitle:'The Jetty',
		cDescription:"Description about the Jetty"
		}
	}
];