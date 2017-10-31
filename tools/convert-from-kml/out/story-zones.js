// use audioZones array to store audio zone data objects
// points - the latitude and longitude of points defining zones
// id - internal identifier
// audio - the associated zone audio file, currently a single mp3 but may need to be an array of file formats
// description - zone description intended to be rendered to the user interface
var route = {
    "id": "route",
    "path": [
        [
            52.6639703,
            0.1612329
        ],
        [
            52.6640468,
            0.160962
        ],
        [
            52.6640533,
            0.160895
        ],
        [
            52.6639427,
            0.1607716
        ],
        [
            52.6638971,
            0.160557
        ],
        [
            52.6638857,
            0.1603934
        ],
        [
            52.6639069,
            0.1602405
        ],
        [
            52.6640045,
            0.1599348
        ],
        [
            52.6641371,
            0.1597698
        ],
        [
            52.6642452,
            0.1596987
        ],
        [
            52.6643217,
            0.1596679
        ],
        [
            52.6643428,
            0.1596397
        ],
        [
            52.6644323,
            0.1593447
        ],
        [
            52.6644648,
            0.159342
        ],
        [
            52.6645153,
            0.1591676
        ],
        [
            52.6645689,
            0.1590443
        ],
        [
            52.66466,
            0.1587144
        ],
        [
            52.6646747,
            0.1585266
        ],
        [
            52.6646828,
            0.1583228
        ],
        [
            52.6647219,
            0.1581725
        ],
        [
            52.6647723,
            0.1582155
        ],
        [
            52.6648032,
            0.1583549
        ],
        [
            52.6647772,
            0.1584247
        ],
        [
            52.6647381,
            0.1584595
        ],
        [
            52.6646877,
            0.1584864
        ],
        [
            52.6646975,
            0.1583254
        ],
        [
            52.6647349,
            0.1582208
        ],
        [
            52.6647755,
            0.1581806
        ],
        [
            52.6647463,
            0.1580867
        ],
        [
            52.6648227,
            0.1580143
        ],
        [
            52.6647983,
            0.1578534
        ],
        [
            52.665026,
            0.1576978
        ],
        [
            52.6650635,
            0.1576817
        ],
        [
            52.6650602,
            0.1574484
        ],
        [
            52.6651106,
            0.157451
        ],
        [
            52.6651025,
            0.1573008
        ],
        [
            52.6650895,
            0.1571533
        ],
        [
            52.6650814,
            0.1567644
        ],
        [
            52.6650716,
            0.1565203
        ],
        [
            52.6650667,
            0.1562575
        ],
        [
            52.6650293,
            0.1559946
        ],
        [
            52.6649154,
            0.1555896
        ],
        [
            52.6647869,
            0.1552141
        ],
        [
            52.6646763,
            0.1549405
        ],
        [
            52.6646096,
            0.1547769
        ],
        [
            52.6645364,
            0.1545408
        ],
        [
            52.6644535,
            0.1542753
        ],
        [
            52.6644339,
            0.1541787
        ],
        [
            52.6643461,
            0.1537925
        ],
        [
            52.6642338,
            0.1533794
        ],
        [
            52.6641964,
            0.1531031
        ],
        [
            52.6642086,
            0.1530522
        ],
        [
            52.6641883,
            0.1529047
        ],
        [
            52.664146,
            0.1528591
        ],
        [
            52.6640614,
            0.1528242
        ],
        [
            52.6639199,
            0.1524943
        ],
        [
            52.6638142,
            0.1522717
        ],
        [
            52.6637523,
            0.1521322
        ],
        [
            52.6636873,
            0.1520008
        ],
        [
            52.6636271,
            0.1518828
        ],
        [
            52.6635539,
            0.1517567
        ],
        [
            52.6634481,
            0.1516065
        ],
        [
            52.6633619,
            0.1514697
        ],
        [
            52.6632871,
            0.151349
        ],
        [
            52.663248,
            0.1512873
        ],
        [
            52.6631667,
            0.1510969
        ],
        [
            52.6631,
            0.1509869
        ],
        [
            52.6628039,
            0.1505792
        ],
        [
            52.6627421,
            0.1505953
        ],
        [
            52.662586,
            0.1506141
        ],
        [
            52.6623257,
            0.1506221
        ],
        [
            52.6621874,
            0.1506919
        ],
        [
            52.6621191,
            0.1507214
        ],
        [
            52.6619808,
            0.1508367
        ],
        [
            52.6617628,
            0.1510486
        ],
        [
            52.6616815,
            0.1511505
        ],
        [
            52.6615692,
            0.1511988
        ],
        [
            52.661457,
            0.1512176
        ],
        [
            52.6614016,
            0.1512229
        ],
        [
            52.6612104,
            0.1511304
        ],
        [
            52.6610974,
            0.1510191
        ],
        [
            52.6609087,
            0.1508367
        ],
        [
            52.6607558,
            0.1506865
        ],
        [
            52.6606622,
            0.1505685
        ],
        [
            52.6605166,
            0.1503834
        ],
        [
            52.6603377,
            0.1501581
        ],
        [
            52.6602433,
            0.1500334
        ],
        [
            52.6602498,
            0.1499328
        ]
    ]
};
var audioZones = [
    {
        "id": "Story Zone - INTRO",
        "name": "Introduction",
        "audio": [
            "sounds/webm-96k/zone-00.webm",
            "sounds/mp3-128k/zone-00.mp3"
        ],
        "description": "Standing in front of Museum. Introduction to narrator (Pipp, a girl aged 15). Year is 2117. Description of museum and surroundings. Discusses invention of power. Mentions it is running out. Hope your phone is fully charged because you can’t recharge it in Wisbech at the moment. ",
        "howl": null,
        "polygon": [
            [
                52.6638849,
                0.1610425
            ],
            [
                52.6637832,
                0.1612973
            ],
            [
                52.6640451,
                0.1615227
            ],
            [
                52.664093,
                0.1612169
            ],
            [
                52.6639898,
                0.1611311
            ],
            [
                52.6638849,
                0.1610425
            ]
        ],
        "path": [
            [
                52.663967,
                0.1612329
            ],
            [
                52.664037,
                0.1609996
            ]
        ]
    },
    {
        "id": "Story Zone - 1",
        "name": "The Crescent",
        "audio": [
            "sounds/webm-96k/zone-01.webm",
            "sounds/mp3-128k/zone-01.mp3"
        ],
        "description": "Pipp guides us along right side of crescent. Reference to dome over marketplace as way to mark bearings. Reference to Ghost Passage and presence of ghosts in Wisbech. \n\nPower suddenly drained from plant yesterday. She is retracing her steps. She may have let something escape from the memory bank. Something that is draining all the power. Reference to sound of dog growling, ghosts.",
        "howl": null,
        "polygon": [
            [
                52.6642175,
                0.1607019
            ],
            [
                52.6640141,
                0.1605101
            ],
            [
                52.664106,
                0.1601171
            ],
            [
                52.6642404,
                0.1599482
            ],
            [
                52.6644095,
                0.1598946
            ],
            [
                52.6646145,
                0.1592803
            ],
            [
                52.6643632,
                0.1590442
            ],
            [
                52.6642208,
                0.1593661
            ],
            [
                52.6639442,
                0.159637
            ],
            [
                52.6638068,
                0.1598476
            ],
            [
                52.6637344,
                0.1601064
            ],
            [
                52.6636807,
                0.1604471
            ],
            [
                52.6639735,
                0.1608815
            ],
            [
                52.6639552,
                0.1609426
            ],
            [
                52.6640995,
                0.1610761
            ],
            [
                52.6642175,
                0.1607019
            ]
        ],
        "path": [
            [
                52.66405,
                0.160895
            ],
            [
                52.6639394,
                0.1607716
            ],
            [
                52.6638938,
                0.160557
            ],
            [
                52.6638824,
                0.1603934
            ],
            [
                52.6639036,
                0.1602405
            ],
            [
                52.6639459,
                0.160093
            ],
            [
                52.6640012,
                0.1599348
            ],
            [
                52.6640524,
                0.1598583
            ],
            [
                52.6641338,
                0.1597698
            ],
            [
                52.6642419,
                0.1596987
            ],
            [
                52.6643184,
                0.1596679
            ],
            [
                52.6643395,
                0.1596397
            ],
            [
                52.6644843,
                0.1591596
            ]
        ]
    },
    {
        "id": "Story Zone - 2",
        "name": "The Memorial",
        "audio": [
            "sounds/webm-96k/zone-02.webm",
            "sounds/mp3-128k/zone-02.mp3"
        ],
        "description": "Description of monument and Wisbech.",
        "howl": null,
        "polygon": [
            [
                52.6645901,
                0.1587679
            ],
            [
                52.6649675,
                0.1585293
            ],
            [
                52.6646926,
                0.1579097
            ],
            [
                52.6646129,
                0.1581135
            ],
            [
                52.66459,
                0.1584488
            ],
            [
                52.6645901,
                0.1587679
            ]
        ],
        "path": [
            [
                52.6646128,
                0.1587251
            ],
            [
                52.6647625,
                0.1581538
            ]
        ]
    },
    {
        "id": "Story Zone - 3",
        "name": "The Brink of The Future",
        "audio": [
            "sounds/webm-96k/zone-03.webm",
            "sounds/mp3-128k/zone-03.mp3"
        ],
        "description": "We look over the river. Pipp talks about the tidal changes of the river. You can see boats arriving in a high speed river link. They dock at a stop on the North Brink. In the distance you can glimpse the power plant. There is an information super highway in the water which imports information to be stored in the town and exports power from the plant and outwards. Pipp references the fact that at Spring Tide the water can reach the top of the bridge and that she throws a penny into the water for good luck. \n\nThe river is glowing. You can see all the power draining away.\n",
        "howl": null,
        "polygon": [
            [
                52.6647576,
                0.1577033
            ],
            [
                52.6648439,
                0.1581108
            ],
            [
                52.6651155,
                0.1578641
            ],
            [
                52.6649772,
                0.1575744
            ],
            [
                52.6647576,
                0.1577033
            ]
        ],
        "path": [
            [
                52.664795,
                0.1578534
            ],
            [
                52.6650227,
                0.1576978
            ]
        ]
    },
    {
        "id": "Story Zone - 4",
        "name": "Data Banks",
        "audio": [
            "sounds/webm-96k/zone-04.webm",
            "sounds/mp3-128k/zone-04.mp3"
        ],
        "description": "Pipp describes the repurposing of the old bank buildings, now used as memory banks for information and data storage and run by robots. She describes a friend who works there who is a robot. She discusses the fact that this is where she found the portal and opened it - a doorway into the past from a hundred years ago.\n\nShe opened it because she was curious about Wisbech before the flooding and the power plant. She thinks something came out of the doorway or something escaped into it because the power started draining away at that point.\n\nShe describes the Brink as Georgian and references the fact that King George has just died. \n",
        "howl": null,
        "polygon": [
            [
                52.6650212,
                0.1567804
            ],
            [
                52.6649073,
                0.1567564
            ],
            [
                52.6649512,
                0.157451
            ],
            [
                52.6650847,
                0.157451
            ],
            [
                52.6652017,
                0.1574564
            ],
            [
                52.6651237,
                0.1567483
            ],
            [
                52.6650212,
                0.1567804
            ]
        ],
        "path": [
            [
                52.6651073,
                0.157451
            ],
            [
                52.6650862,
                0.1571372
            ],
            [
                52.6650781,
                0.1567644
            ]
        ]
    },
    {
        "id": "Story Zone - 5",
        "name": "The Institute of Discovery",
        "audio": [
            "sounds/webm-96k/zone-05.webm",
            "sounds/mp3-128k/zone-05.mp3"
        ],
        "description": "Caleb appears to contribute to description of Wisbech - high speed river link. Superhighway in the river that exports energy and imports memory data.\n\nDescribes the boats arriving and carrying people (geeks, creative engineers and digital innovators) who are arriving from Cambridge to work at the famous Wisbech Institute of Discovery.\n\nPipp talks about the introduction of plasma power and references how cars used to be powered by fossil fuel and the noise and smell. Compares it to burning witches. Reminds Caleb about sound of dog growling at the bank.",
        "howl": null,
        "polygon": [
            [
                52.6652065,
                0.156511
            ],
            [
                52.6652236,
                0.1561697
            ],
            [
                52.6651431,
                0.1557103
            ],
            [
                52.6650057,
                0.1551384
            ],
            [
                52.6648747,
                0.1547113
            ],
            [
                52.6644233,
                0.1533903
            ],
            [
                52.6642939,
                0.1530939
            ],
            [
                52.6640222,
                0.1533379
            ],
            [
                52.6642215,
                0.1540608
            ],
            [
                52.6644387,
                0.1547595
            ],
            [
                52.6646144,
                0.1552557
            ],
            [
                52.6648161,
                0.1559208
            ],
            [
                52.6648975,
                0.1565485
            ],
            [
                52.6652065,
                0.156511
            ]
        ],
        "path": [
            [
                52.6650683,
                0.1565203
            ],
            [
                52.6650634,
                0.1562575
            ],
            [
                52.6650211,
                0.1559731
            ],
            [
                52.6649121,
                0.1555896
            ],
            [
                52.6647836,
                0.1552141
            ],
            [
                52.6647169,
                0.1550424
            ],
            [
                52.6646063,
                0.1547769
            ],
            [
                52.6644502,
                0.1542753
            ],
            [
                52.6644306,
                0.1541787
            ]
        ]
    },
    {
        "id": "Story Zone - 6",
        "name": "Footprints or pawprints",
        "audio": [
            "sounds/webm-96k/zone-06.webm",
            "sounds/mp3-128k/zone-06.mp3"
        ],
        "description": "Pipp sees footprints along the Brink. \nNotes that since the black shuck escaped the power has drained.\n\nPipp talks about flooding. Her mother’s memories of the floods. Rescue by black dog. References the fact that her friends live on houses on stilts so these are likely to be seen in some views. She talks about what the scene looked like when it was underwater and people paddle boarded between the upper stories of houses.\n",
        "howl": null,
        "polygon": [
            [
                52.6642485,
                0.1528738
            ],
            [
                52.6639016,
                0.1520156
            ],
            [
                52.6633619,
                0.1510876
            ],
            [
                52.6631406,
                0.151471
            ],
            [
                52.6635995,
                0.1521819
            ],
            [
                52.6640029,
                0.1531716
            ],
            [
                52.6642485,
                0.1528738
            ]
        ],
        "path": [
            [
                52.664198,
                0.1529288
            ],
            [
                52.6640581,
                0.1528242
            ],
            [
                52.6638662,
                0.1523709
            ],
            [
                52.6637734,
                0.152159
            ],
            [
                52.6636091,
                0.1518506
            ],
            [
                52.6633977,
                0.151526
            ],
            [
                52.6632447,
                0.1512873
            ]
        ]
    },
    {
        "id": "Story Zone - 7",
        "name": "The black dog",
        "audio": [
            "sounds/webm-96k/zone-07.webm",
            "sounds/mp3-128k/zone-07.mp3"
        ],
        "description": "Discussion of Black Shuck. Connection between power surge and appearance of black dog. Caleb captures an image of black dog. Destroys phone. Mends the grid.",
        "howl": null,
        "polygon": [
            [
                52.6626754,
                0.1502761
            ],
            [
                52.6622671,
                0.1503647
            ],
            [
                52.6619726,
                0.1505752
            ],
            [
                52.6619142,
                0.1506356
            ],
            [
                52.6618587,
                0.1506919
            ],
            [
                52.6619254,
                0.1511317
            ],
            [
                52.6623631,
                0.150834
            ],
            [
                52.6627828,
                0.1508126
            ],
            [
                52.6626754,
                0.1502761
            ]
        ],
        "path": [
            [
                52.6627388,
                0.1505953
            ],
            [
                52.662529,
                0.1506194
            ],
            [
                52.6623224,
                0.1506221
            ],
            [
                52.6621158,
                0.1507214
            ],
            [
                52.6619596,
                0.1508394
            ],
            [
                52.6618945,
                0.1508984
            ]
        ]
    },
    {
        "id": "Story Zone - 8",
        "name": "Conclusion",
        "audio": [
            "sounds/webm-96k/zone-08.webm",
            "sounds/mp3-128k/zone-08.mp3"
        ],
        "description": "Final view of the town. See the power plant up and running again, plant and river brightly lit and power restored to town. Description of beauty of the power plant which is seen clearly from here.",
        "howl": null,
        "polygon": [
            [
                52.6617074,
                0.1508608
            ],
            [
                52.661374,
                0.1510217
            ],
            [
                52.6602954,
                0.1498578
            ],
            [
                52.660166,
                0.150252
            ],
            [
                52.6612032,
                0.1514214
            ],
            [
                52.6615627,
                0.1514469
            ],
            [
                52.661836,
                0.1513033
            ],
            [
                52.6617074,
                0.1508608
            ]
        ],
        "path": [
            [
                52.6617595,
                0.1510486
            ],
            [
                52.6616782,
                0.1511505
            ],
            [
                52.6615448,
                0.1512042
            ],
            [
                52.6613983,
                0.1512229
            ],
            [
                52.6612071,
                0.1511304
            ],
            [
                52.6608704,
                0.1507978
            ],
            [
                52.6606589,
                0.1505685
            ],
            [
                52.66024,
                0.1500334
            ]
        ]
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
    {
        "point": [
            52.664033,
            0.1612598
        ],
        "icon": "purpleIcon",
        "vo": {
            "variant": "iframe",
            "zone": "Story Zone - INTRO",
            "type": "augment",
            "launchAt": "",
            "launchType": "",
            "augmentSrc": "augments/marker-pip.html",
            "i360Src": "augments/marker-pip.html",
            "imageSrc": "augments/marker-pip.html",
            "unlocked": false,
            "launched": false,
            "cType": "augment",
            "cTitle": "TEST",
            "cDescription": "You are about to enter Wisbech in 100 years time. Please read the following instructions before taking the journey into The Brink of the Future.\n\nPlease use headphones to gain the full effect of the story. Please be aware that there are road crossings ahead through the town. Cross safely at all times. The audio is designed to match a clear route marked on your map.\n\nEach part of the story will unfold as you walk into the story zones, as long as you have GPS activated on your phone. If you’re not sure about activation click here for a guide on how to set up LOCATION services on an Android or iOS (iPhone) device.\n\nIf you do not have a smart phone you can listen to the MP3 files by following this link - \n",
            "marker": null
        }
    },
    {
        "point": [
            52.6647494,
            0.1583469
        ],
        "icon": "purpleIcon",
        "vo": {
            "variant": "iframe",
            "zone": "Story Zone - 2",
            "type": "augment",
            "launchAt": "0:36",
            "launchType": "audio",
            "augmentSrc": "augments/owlAugment.html",
            "i360Src": "augments/owlAugment.html",
            "imageSrc": "augments/owlAugment.html",
            "unlocked": false,
            "launched": false,
            "cType": "augment",
            "cTitle": "Augment - 1",
            "cDescription": "Clarkson Memorial\nhttps://en.wikipedia.org/wiki/Clarkson_Memorial - Thomas Clarkson - a central figure in the campaign against the slave trade in \nthe British empire, and a former native of Wisbech.\n",
            "marker": null
        }
    },
    {
        "point": [
            52.6649121,
            0.1577729
        ],
        "icon": "purpleIcon",
        "vo": {
            "variant": "iframe",
            "zone": "Story Zone - 3",
            "type": "augment",
            "launchAt": "0:15",
            "launchType": "audio",
            "augmentSrc": "augments/bridge360.html",
            "i360Src": "augments/bridge360.html",
            "imageSrc": "augments/bridge360.html",
            "unlocked": false,
            "launched": false,
            "cType": "augment",
            "cTitle": "Augment - 2",
            "cDescription": "Brink of the Future - view over river.",
            "marker": null
        }
    },
    {
        "point": [
            52.6647283,
            0.1549593
        ],
        "icon": "purpleIcon",
        "vo": {
            "variant": "imageLoader",
            "zone": "Story Zone - 5",
            "type": "augment",
            "launchAt": "1:24",
            "launchType": "audio",
            "augmentSrc": "augments/images/Institute-small.jpg",
            "i360Src": "augments/images/Institute-small.jpg",
            "imageSrc": "augments/images/Institute-small.jpg",
            "unlocked": false,
            "launched": false,
            "cType": "augment",
            "cTitle": "Augment - 3",
            "cDescription": "Across the river - The Institute of Discovery",
            "marker": null
        }
    },
    {
        "point": [
            52.6641752,
            0.1528564
        ],
        "icon": "purpleIcon",
        "vo": {
            "variant": "imageLoader",
            "zone": "Story Zone - 6",
            "type": "augment",
            "launchAt": "0:18",
            "launchType": "audio",
            "augmentSrc": "augments/images/cables-small.jpg",
            "i360Src": "augments/images/cables-small.jpg",
            "imageSrc": "augments/images/cables-small.jpg",
            "unlocked": false,
            "launched": false,
            "cType": "augment",
            "cTitle": "Augment - 4",
            "cDescription": "view through the floor (Pipp is talking about taking a photo paw prints - maybe we need some here)",
            "marker": null
        }
    },
    {
        "point": [
            52.663274,
            0.1511827
        ],
        "icon": "purpleIcon",
        "vo": {
            "variant": "iframe",
            "zone": "Story Zone - 6",
            "type": "augment",
            "launchAt": "4:33",
            "launchType": "audio",
            "augmentSrc": "augments/tower.html",
            "i360Src": "augments/tower.html",
            "imageSrc": "augments/tower.html",
            "unlocked": false,
            "launched": false,
            "cType": "augment",
            "cTitle": "Augment - 5",
            "cDescription": "Second Tower - motto enhanced: Be not weary in well doing. ",
            "marker": null
        }
    },
    {
        "point": [
            52.6618311,
            0.150842
        ],
        "icon": "purpleIcon",
        "vo": {
            "variant": "iframe",
            "zone": "Story Zone - 7",
            "type": "augment",
            "launchAt": "2:33",
            "launchType": "audio",
            "augmentSrc": "augments/lightning2.html",
            "i360Src": "augments/lightning2.html",
            "imageSrc": "augments/lightning2.html",
            "unlocked": false,
            "launched": false,
            "cType": "augment",
            "cTitle": "Augment - 6",
            "cDescription": "Elgood's Courtyard - damage to wall from lightning strike. Black Shuck sighting.",
            "marker": null
        }
    },
    {
        "point": [
            52.6603588,
            0.1500884
        ],
        "icon": "purpleIcon",
        "vo": {
            "variant": "iframe",
            "zone": "Story Zone - 8",
            "type": "augment",
            "launchAt": "3:45",
            "launchType": "audio",
            "augmentSrc": "augments/end360-2.html",
            "i360Src": "augments/end360-2.html",
            "imageSrc": "augments/end360-2.html",
            "unlocked": false,
            "launched": false,
            "cType": "augment",
            "cTitle": "Augment - 7",
            "cDescription": "View back up river of Power Invest Plasma Plant up and running again.",
            "marker": null
        }
    },
    {
        "point": [
            52.6639565,
            0.1612705
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - INTRO",
            "type": "instruction",
            "launchAt": "0:00",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "THE START",
            "cDescription": "The Brink is a digital media project developed with Wisbech and environs artists and creative industries. The outcome is an augmented reality series of interlinking stories to be experienced by visitors to the North Brink area of Wisbech. This is on the north bank of the River Nene, an area that contains historic buildings and has good pedestrian access.\n \nNOTES - congregation point outside the museum.\nAt this point we get people briefed and technically sorted (iPhone, Android, mp3, curated, self initiated)",
            "marker": null
        }
    },
    {
        "point": [
            52.6644843,
            0.1591034
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 1",
            "type": "instruction",
            "launchAt": "0:50",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 1",
            "cDescription": "Turn left and walk towards the Post Office sign. Look right, and cross carefully to be in front of Evisons.",
            "marker": null
        }
    },
    {
        "point": [
            52.6645966,
            0.1590443
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 1",
            "type": "instruction",
            "launchAt": "end",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 2",
            "cDescription": "Turn towards the Clarkson Memorial, and cross carefully up to the steps.",
            "marker": null
        }
    },
    {
        "point": [
            52.664756,
            0.158127
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 2",
            "type": "instruction",
            "launchAt": "end",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 3",
            "cDescription": "Cross over the two roads that will take you to the Bridge and then cross over to the other side to face up the North Brink, making sure to use the pedestrian crossings and to take care of traffic, which is particularly heavy here.",
            "marker": null
        }
    },
    {
        "point": [
            52.6650227,
            0.1576978
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 3",
            "type": "instruction",
            "launchAt": "end",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 4",
            "cDescription": "Now walk across the Bridge towards the North Brink. Make your way to Lloyds National Provincial Bank, taking care of any traffic. Cross the road to the benches and face Lloyds.",
            "marker": null
        }
    },
    {
        "point": [
            52.6650585,
            0.1568932
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 4",
            "type": "instruction",
            "launchAt": "0:15",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 5",
            "cDescription": "Walk across back to the other side of the road, and onto the pavement. Follow the path until further instruction.",
            "marker": null
        }
    },
    {
        "point": [
            52.6642468,
            0.1531085
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 5",
            "type": "instruction",
            "launchAt": "end",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 6",
            "cDescription": "Cross the pedestrian crossing carefully and wait on the other side until further instruction.",
            "marker": null
        }
    },
    {
        "point": [
            52.6641574,
            0.1528376
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 6",
            "type": "instruction",
            "launchAt": "0:00",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 7",
            "cDescription": "Continue walking along the Brink to meet Caleb, and look up at the Tower.",
            "marker": null
        }
    },
    {
        "point": [
            52.6632205,
            0.1511036
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 6",
            "type": "instruction",
            "launchAt": "end",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 8",
            "cDescription": "Continue walking down the road until you meet the intersection. Cross carefully and follow the path continuing on the North Brink.",
            "marker": null
        }
    },
    {
        "point": [
            52.6618294,
            0.1509574
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 7",
            "type": "instruction",
            "launchAt": "end",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "Instruction - 9",
            "cDescription": "Continue walking.",
            "marker": null
        }
    },
    {
        "point": [
            52.6611576,
            0.1509172
        ],
        "icon": "purpleIcon",
        "vo": {
            "src": "#",
            "zone": "Story Zone - 8",
            "type": "instruction",
            "launchAt": "end",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "instruction",
            "cTitle": "THE END (Instruction - 10)",
            "cDescription": "You have reached the end of the story, we hope you enjoyed the Brink of the Future, rest a while on the benches if you need to.\n\nPlease complete the survey about the project by following the link. On your way back, listen to the Wisbech people’s memories and stories by clicking on the memory link on the navigation bar above. \n\nThank you for taking the time to do this, please tell your friends and family to come and listen to the story. If you have an elderly or infirm relative, the story can be listened to at home by following the link above.",
            "marker": null
        }
    },
    {
        "point": [
            52.6640923,
            0.1607421
        ],
        "icon": "purpleIcon",
        "vo": {
            "zone": "Story Zone - 1",
            "type": "sight",
            "colour": "red",
            "heartbeat": "1",
            "launchAt": "0:33",
            "stopAt": "0:40",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "sight",
            "cTitle": "Castle",
            "cDescription": "",
            "marker": null
        }
    },
    {
        "point": [
            52.6638743,
            0.1600984
        ],
        "icon": "purpleIcon",
        "vo": {
            "zone": "Story Zone - 1",
            "type": "sight",
            "colour": "red",
            "heartbeat": "1",
            "launchAt": "0:49",
            "stopAt": "0:55",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "sight",
            "cTitle": "Ghost Passage",
            "cDescription": "",
            "marker": null
        }
    },
    {
        "point": [
            52.6649117,
            0.1577675
        ],
        "icon": "purpleIcon",
        "vo": {
            "zone": "Story Zone - 2",
            "type": "sight",
            "colour": "red",
            "heartbeat": "1",
            "launchAt": "1:24",
            "stopAt": "1:35",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "sight",
            "cTitle": "View of the Nene",
            "cDescription": "",
            "marker": null
        }
    },
    {
        "point": [
            52.6650557,
            0.1574792
        ],
        "icon": "purpleIcon",
        "vo": {
            "zone": "Story Zone - 3",
            "type": "sight",
            "colour": "red",
            "heartbeat": "1",
            "launchAt": "1:28",
            "stopAt": "1:26",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "sight",
            "cTitle": "benches opposite Lloyds",
            "cDescription": "",
            "marker": null
        }
    },
    {
        "point": [
            52.6642533,
            0.1553616
        ],
        "icon": "purpleIcon",
        "vo": {
            "zone": "Story Zone - 5",
            "type": "sight",
            "colour": "red",
            "heartbeat": "1",
            "launchAt": "1:03",
            "stopAt": "2:19",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "sight",
            "cTitle": "Institute of Discovery",
            "cDescription": "",
            "marker": null
        }
    },
    {
        "point": [
            52.6641883,
            0.1529047
        ],
        "icon": "purpleIcon",
        "vo": {
            "zone": "Story Zone - 5",
            "type": "sight",
            "colour": "red",
            "heartbeat": "1",
            "launchAt": "5:12",
            "stopAt": "5:20",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "sight",
            "cTitle": "intersection with chapel road",
            "cDescription": "",
            "marker": null
        }
    },
    {
        "point": [
            52.6632578,
            0.1512283
        ],
        "icon": "purpleIcon",
        "vo": {
            "zone": "Story Zone - 6",
            "type": "sight",
            "colour": "red",
            "heartbeat": "1",
            "launchAt": "1:21",
            "stopAt": "4:30",
            "launchType": "audio",
            "unlocked": false,
            "launched": false,
            "cType": "sight",
            "cTitle": "The tower",
            "cDescription": "",
            "marker": null
        }
    }
];
