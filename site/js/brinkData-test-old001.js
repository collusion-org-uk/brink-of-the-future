// use audioZones array to store audio zone data objects
	// points - the latitude and longitude of points defining zones
	// id - internal identifier
	// audio - the associated zone audio file, currently a single mp3 but may need to be an array of file formats
	// description - zone description intended to be rendered to the user interface
var audioZones = [
    {
        points: [
            [
                52.6639557,
                0.1609299
            ],
            [
                52.6638515,
                0.1612437
            ],
            [
                52.6639996,
                0.1613671
            ],
            [
                52.6641085,
                0.161013
            ],
            [
                52.6639557,
                0.1609299
            ]
        ],
        id: "Zone0",
        audio: "sounds/rh-zone0.mp3",
        description: "Zone 0: At this point the clients set up their devices and find out how it works."
    },
    {
        points: [
            [
                52.6641655,
                0.1610156
            ],
            [
                52.6644307,
                0.1608146
            ],
            [
                52.6645543,
                0.1602996
            ],
            [
                52.6644794,
                0.1597577
            ],
            [
                52.6644014,
                0.1596504
            ],
            [
                52.6645673,
                0.1592025
            ],
            [
                52.6647267,
                0.1586741
            ],
            [
                52.6646323,
                0.1584917
            ],
            [
                52.6645542,
                0.1583657
            ],
            [
                52.6643916,
                0.1587948
            ],
            [
                52.6642728,
                0.1594305
            ],
            [
                52.6642745,
                0.1596236
            ],
            [
                52.6642501,
                0.1598382
            ],
            [
                52.6643672,
                0.1599723
            ],
            [
                52.6644193,
                0.1601387
            ],
            [
                52.6643997,
                0.1603639
            ],
            [
                52.6639638,
                0.1608896
            ],
            [
                52.6641655,
                0.1610156
            ]
        ],
        id: "Zone1",
        audio: "sounds/rh-zone1.mp3",
        description: "Zone 1: The Brink story commences, we find out where we are, what year it is and who the characters are."
    },
    {
        points: [
            [
                52.6646649,
                0.1585454
            ],
            [
                52.6648536,
                0.1583791
            ],
            [
                52.6647397,
                0.1580036
            ],
            [
                52.6646616,
                0.1583254
            ],
            [
                52.6646649,
                0.1585454
            ]
        ],
        id: "Zone2",
        audio: "sounds/rh-zone2.mp3",
        description: "Zone 2: The monument, a key part of the story is imparted to us. We are asked to look up and around. What can we see and we are then transported into the future of Wisbech. [CROSS CAREFULLY, IT IS A BUSY ROAD]"
    },
    {
        points: [
            [
                52.6650944,
                0.155729
            ],
            [
                52.664826,
                0.1558525
            ],
            [
                52.6649317,
                0.1576602
            ],
            [
                52.6653025,
                0.1575959
            ],
            [
                52.6650944,
                0.155729
            ]
        ],
        id: "Zone3",
        audio: "sounds/rh-zone3.mp3",
        description: "We are now on The Brink (of the future)"
    },
    {
        points: [
            [
                52.6649625,
                0.1551967
            ],
            [
                52.6644452,
                0.1537859
            ],
            [
                52.6642728,
                0.1539736
            ],
            [
                52.6647315,
                0.1553361
            ],
            [
                52.6649625,
                0.1551967
            ]
        ],
        id: "Zone4",
        audio: "sounds/rh-zone4.mp3",
        description: "Zone 4"
    },
    {
        points: [
            [
                52.6641639,
                0.1527169
            ],
            [
                52.6632529,
                0.1508877
            ],
            [
                52.6630609,
                0.151349
            ],
            [
                52.6638646,
                0.1529798
            ],
            [
                52.6641639,
                0.1527169
            ]
        ],
        id: "Zone5",
        audio: "sounds/rh-zone5.mp3",
        description: "Zone 5"
    },
    {
        points: [
            [
                52.6557952,
                0.1443028
            ],
            [
                52.6594656,
                0.1391745
            ],
            [
                52.6592704,
                0.1381445
            ],
            [
                52.6553266,
                0.1437235
            ],
            [
                52.6557952,
                0.1443028
            ]
        ],
        id: "Zone8",
        audio: "sounds/rh-zone6.mp3",
        description: "Zone 8"
    },
    {
        points: [
            [
                52.6628299,
                0.1504183
            ],
            [
                52.6627063,
                0.1509708
            ],
            [
                52.6630089,
                0.1512498
            ],
            [
                52.6631846,
                0.1508421
            ],
            [
                52.6628299,
                0.1504183
            ]
        ],
        id: "Zone6",
        audio: "sounds/rh-zone6.mp3",
        description: "Zone 6: A shorter story section"
    },
    {
        points: [
            [
                52.6626412,
                0.1502144
            ],
            [
                52.6623809,
                0.1503485
            ],
            [
                52.6620914,
                0.1504612
            ],
            [
                52.6615773,
                0.150944
            ],
            [
                52.6612324,
                0.1507562
            ],
            [
                52.6610404,
                0.1512659
            ],
            [
                52.6611348,
                0.1514161
            ],
            [
                52.6615122,
                0.1514858
            ],
            [
                52.6620914,
                0.1510566
            ],
            [
                52.6626152,
                0.1509118
            ],
            [
                52.6626412,
                0.1502144
            ]
        ],
        id: "Zone7",
        audio: "sounds/rh-zone7.mp3",
        description: "<img src=\"https://lh4.googleusercontent.com/rDHOldLkm3NCOtX65R9zcYN0SCfmwO1iKJKZx8iry0eSvOKXUDrXVrkS25u-5NsSCXkR6EPpuxVkMj2eNZ1S-1lUuQ2GzzFZR9iPZoSeKDByRr4BGN65dh_0iXeSCkg\" height=\"200\" width=\"auto\" /><br><br>The culmination of the story"
    }
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
{point: [52.66406944444444,0.16084166666666666], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/S22XBa7.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'The Castle',
	cDescription:"Here begins our journey"
	}
},	
{point: [52.66441388888889,0.15965833333333332], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/WCpZN2e.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'The Crescent',
	cDescription:"getting into the story"
	}
},	
{point: [52.664736, 0.158252], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/5oultK1.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'The Clarkson Monument',
	cDescription:"Slavery etc"
	}
},	
{point: [52.665102777777776,0.15758055555555556], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/s5zZpo9.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'Passageway',
	cDescription:"Passageway"
	}
},	
{point: [52.665077, 0.157029], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/pzYn6Ou.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'The Brink',
	cDescription:"Here we are on the Brink"
	}
},	
{point: [52.66513611111111,0.1571138888888889], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/JtEy6m5.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'Lloyds',
	cDescription:"Lloyds"
	}
},	
{point: [52.665124999999996,0.15544166666666667], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/JtEy6m5.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'Peckover',
	cDescription:"Peckover"
	}
},	
{point: [52.66457777777778,0.15395555555555554], icon: purpleIcon, vo :{
	variant:'iframe', 
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/yBjt4ml.jpg&amp;autoLoad=true", 
	cType: '360 Image',
	cTitle:'Tower',
	cDescription:"Tower"
	}
}	
];