// use audioZones array to store audio zone data objects
	// points - the latitude and longitude of points defining zones
	// id - internal identifier
	// audio - the associated zone audio file, currently a single mp3 but may need to be an array of file formats
	// description - zone description intended to be rendered to the user interface
var audioZones = [
    {
        "points": [
            [
                52.6638515,
                0.1612437
            ],
            [
                52.6639996,
                0.1613671
            ],
            [
                52.664063,
                0.1611632
            ],
            [
                52.6639149,
                0.1610532
            ],
            [
                52.6638515,
                0.1612437
            ]
        ],
        "id": "Introduction",
        "audio": "sounds/introduction-comp.mp3",
        "description": "At this point the clients set up their devices and find out how it works."
    },
    {
        "points": [
            [
                52.6641288,
                0.1609487
            ],
            [
                52.6640272,
                0.1601869
            ],
            [
                52.6644274,
                0.1596933
            ],
            [
                52.6645836,
                0.1591998
            ],
            [
                52.664385,
                0.159047
            ],
            [
                52.664242,
                0.1595431
            ],
            [
                52.6641427,
                0.1596075
            ],
            [
                52.6639638,
                0.1597845
            ],
            [
                52.6638207,
                0.1600743
            ],
            [
                52.6638759,
                0.1609915
            ],
            [
                52.6640582,
                0.1611203
            ],
            [
                52.6641288,
                0.1609487
            ]
        ],
        "id": "Storyzone 1 - the short walk to the memorial",
        "audio": "sounds/StoryZone1.mp3",
        "description": "The Brink story commences, we find out where we are, what year it is and who the characters are."
    },
    {
        "points": [
            [
                52.6646405,
                0.1586205
            ],
            [
                52.6648642,
                0.1584073
            ],
            [
                52.6647922,
                0.1582309
            ],
            [
                52.6647373,
                0.1579888
            ],
            [
                52.6647011,
                0.1580753
            ],
            [
                52.6646559,
                0.1582865
            ],
            [
                52.6646405,
                0.1586205
            ]
        ],
        "id": "Storyzone 2",
        "audio": "sounds/StoryZone-2.mp3",
        "description": "The monument, a key part of the story is imparted to us. We are asked to look up and around. What can we see and we are then transported into the future of Wisbech. [CROSS CAREFULLY, IT IS A BUSY ROAD]"
    },
    {
        "points": [
            [
                52.6650162,
                0.1576924
            ],
            [
                52.6649935,
                0.1575261
            ],
            [
                52.6647462,
                0.1576924
            ],
            [
                52.6648048,
                0.1579392
            ],
            [
                52.665039,
                0.157789
            ],
            [
                52.6650162,
                0.1576924
            ]
        ],
        "id": "Story Zone 3",
        "audio": "sounds/StoryZone-3(bridge).mp3",
        "description": "We are now on The Brink (of the future)"
    },
    {
        "points": [
            [
                52.6651902,
                0.1572835
            ],
            [
                52.6651301,
                0.1559182
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
                52.6649365,
                0.1560925
            ],
            [
                52.664982,
                0.1573102
            ],
            [
                52.6651902,
                0.1572835
            ]
        ],
        "id": "Story Zone 4",
        "audio": "sounds/StoryZone-4.mp3",
        "description": "Now we're on North Brink.."
    },
    {
        "points": [
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
        "id": "Story Zone 5",
        "audio": "sounds/Story-Zone-5.mp3",
        "description": "The port still trades..."
    },
    {
        "points": [
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
        "id": "Story Zone - 6",
        "audio": "sounds/StoryZone-6.mp3",
        "description": "Rogue dogs.."
    },
    {
        "points": [
            [
                52.6626217,
                0.1503592
            ],
            [
                52.6619547,
                0.1504827
            ],
            [
                52.6615252,
                0.1508474
            ],
            [
                52.661304,
                0.1508662
            ],
            [
                52.6611478,
                0.1507562
            ],
            [
                52.6601375,
                0.149627
            ],
            [
                52.6599537,
                0.1501072
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
                52.6617953,
                0.1513463
            ],
            [
                52.6626136,
                0.1508421
            ],
            [
                52.6626217,
                0.1503592
            ]
        ],
        "id": "Story Zone - 7",
        "audio": "sounds/StoryZone-7.mp3",
        "description": "The culmination of the story"
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
	src:"https://cdn.pannellum.org/2.3/pannellum.htm?panorama=https://i.imgur.com/JzBuH5s.jpg&amp;autoLoad=true", 
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