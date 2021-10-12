/*
* --------------------------------------------------------------------------
*   content.js - v2.0
*   author: Advancia Technologies
*   created: 9/1/2019
*   last edited: 2/20/2021
*   Copyright 2021, Advancia Technologies, All rights reserved.
* --------------------------------------------------------------------------
*/
var modJSON = {
    "course": {
        "id": "92F10",
        "title": "U.S. Army CASCOM 92F10 Flash Rebuild"
    },
    "module": {
        "id": "B03_PE",
        "title": "Manifolds, Pipes, Valves and Fittings Practical Exercise"
    },
    "content":{
        "sections":[
            {
                "title":"Manifolds, Pipes, Valves and Fittings Practical Exercise",
                "id":"0000-0",
                "pages": [
                    {
                        "id": "0010",
                        "title": "Practical Exercise Introduction",
                        "temp": 26,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0000.mp3",
                                "text": "Welcome to the Waterfront Operations and Offshore Petroleum Discharge System (OPDS) lesson."
                            }
                        ],
                        "content": {
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0000.mp3",
                                            "ementor_narration_text": "Welcome to the Manifolds, Pipes, Valves and Fittings Practical Exercise. In this exercise you will be given a sample pumping order. You must use the Terminal Tank Schematic to route the product from the starting location to the endpoint. You will do this by selecting the valves that must be opened in order to establish the route, then Selecting the Submit button. Select the Start Exercise button when you are ready to begin."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Select the valves that must be opened in order to establish the route, then select the Submit button."
                                        },
                                        {
                                            "tag": "p",
                                            "content": "Select the \"Start Exercise\" button when you are ready to begin."
                                        }
                                    ]
                                }
                            ],
                            "image": {
                                "url": "assets/media/images/B-03/B03_0010_01.jpg",
                                "alt": "alt goes here"
                            },
                            "trigger_button": {
                                "title": "Start Exercise",
                                "location": "0020"
                            }
                        }
                    },
                    {
                        "id": "0120",
                        "title": "Practical Exercise Restart",
                        "temp": 26,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0030.mp3",
                                "text": "What happened? There's product all over the terminal! Fortunately, this is just a simulation - imagine the cleanup if that had been the real world. But do not get discouraged, try again."
                            }
                        ],
                        "content": {
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0030.mp3",
                                            "ementor_narration_text": "What happened? There's product all over the terminal! Fortunately, this is just a simulation - imagine the cleanup if that had been the real world. But do not get discouraged, try again."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "What happened? There's product all over the terminal! Fortunately, this is just a simulation - imagine the cleanup if that had been the real world. But do not get discouraged, try again."
                                        },
                                        {
                                            "tag": "p",
                                            "content": "Select the \"Restart Exercise\" button when you are ready to start over."
                                        }
                                    ]
                                }
                            ],
                            "image": {
                                "url": "assets/media/images/B-03/B03_0010_01.jpg",
                                "alt": "alt goes here"
                            },
                            "trigger_button": {
                                "title": "Restart Exercise",
                                "location": "0010"
                            }
                        }
                    },
                    {
                        "id": "0130",
                        "title": "Practical Exercise Matching Exercise",
                        "temp": 25,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0020.mp3",
                                "text": "You’ve got two strikes! One more and you’re out! But you can buy back one of those strikes if you can correctly identify these items."
                            }
                        ],
                        "content": {
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "Female E-mentor"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0020.mp3",
                                            "ementor_narration_text": "You’ve got two strikes! One more and you’re out! But you can buy back one of those strikes if you can correctly identify these items."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "You’ve got two strikes! One more and you’re out! But you can buy back one of those strikes if you can correctly identify the pictured items."
                                        },
                                    ]
                                }
                            ],
                            "slides": [
                                {
                                    "type": "mc",
                                    "prompt": "Identify the pictured item.",
                                    "answers": "1_mc",
                                    "image": {
                                        "url": "assets/media/images/B-03/B03_PE_0020_02.png",
                                        "alt": "Check Valve"
                                    },
                                    "alternatives": [
                                        {
                                            "text": "Ball Valve",
                                        },
                                        {
                                            "text": "Check Valve",
                                        },
                                        {
                                            "text": "Non Rising Gate Valve",
                                        },
                                        {
                                            "text": "Globe Valve",
                                        },
                                        {
                                            "text": "Rising Gate Valve",
                                        },
                                        {
                                            "text": "Pressure Relief Valve",
                                        },
                                        {
                                            "text": "Thermal Relief Valve",
                                        }
                                    ],
                                },
                                {
                                    "type": "mc",
                                    "prompt": "Identify the pictured item.",
                                    "answers": "4_mc",
                                    "image": {
                                        "url": "assets/media/images/B-03/B03_PE_0020_05.png",
                                        "alt": "Rising Gate Valve"
                                    },
                                    "alternatives": [
                                        {
                                            "text": "Ball Valve",
                                        },
                                        {
                                            "text": "Check Valve",
                                        },
                                        {
                                            "text": "Non Rising Gate Valve",
                                        },
                                        {
                                            "text": "Globe Valve",
                                        },
                                        {
                                            "text": "Rising Gate Valve",
                                        },
                                        {
                                            "text": "Pressure Relief Valve",
                                        },
                                        {
                                            "text": "Thermal Relief Valve",
                                        }
                                    ],
                                },
                                {
                                    "type": "mc",
                                    "prompt": "Identify the pictured item.",
                                    "answers": "0_mc",
                                    "image": {
                                        "url": "assets/media/images/B-03/B03_PE_0020_01.png",
                                        "alt": "Ball Valve"
                                    },
                                    "alternatives": [
                                        {
                                            "text": "Ball Valve",
                                        },
                                        {
                                            "text": "Check Valve",
                                        },
                                        {
                                            "text": "Non Rising Gate Valve",
                                        },
                                        {
                                            "text": "Globe Valve",
                                        },
                                        {
                                            "text": "Rising Gate Valve",
                                        },
                                        {
                                            "text": "Pressure Relief Valve",
                                        },
                                        {
                                            "text": "Thermal Relief Valve",
                                        }
                                    ],
                                },
                                {
                                    "type": "mc",
                                    "prompt": "Identify the pictured item.",
                                    "answers": "3_mc",
                                    "image": {
                                        "url": "assets/media/images/B-03/B03_PE_0020_04.png",
                                        "alt": "Globe Valve"
                                    },
                                    "alternatives": [
                                        {
                                            "text": "Ball Valve",
                                        },
                                        {
                                            "text": "Check Valve",
                                        },
                                        {
                                            "text": "Non Rising Gate Valve",
                                        },
                                        {
                                            "text": "Globe Valve",
                                        },
                                        {
                                            "text": "Rising Gate Valve",
                                        },
                                        {
                                            "text": "Pressure Relief Valve",
                                        },
                                        {
                                            "text": "Thermal Relief Valve",
                                        }
                                    ],
                                },
                                {
                                    "type": "mc",
                                    "prompt": "Identify the pictured item.",
                                    "answers": "6_mc",
                                    "image": {
                                        "url": "assets/media/images/B-03/B03_PE_0020_07.png",
                                        "alt": "Thermal Relief Valve"
                                    },
                                    "alternatives": [
                                        {
                                            "text": "Ball Valve",
                                        },
                                        {
                                            "text": "Check Valve",
                                        },
                                        {
                                            "text": "Non Rising Gate Valve",
                                        },
                                        {
                                            "text": "Globe Valve",
                                        },
                                        {
                                            "text": "Rising Gate Valve",
                                        },
                                        {
                                            "text": "Pressure Relief Valve",
                                        },
                                        {
                                            "text": "Thermal Relief Valve",
                                        }
                                    ],
                                },
                                {
                                    "type": "mc",
                                    "prompt": "Identify the pictured item.",
                                    "answers": "2_mc",
                                    "image": {
                                        "url": "assets/media/images/B-03/B03_PE_0020_03.png",
                                        "alt": "Non Rising Gate Valve"
                                    },
                                    "alternatives": [
                                        {
                                            "text": "Ball Valve",
                                        },
                                        {
                                            "text": "Check Valve",
                                        },
                                        {
                                            "text": "Non Rising Gate Valve",
                                        },
                                        {
                                            "text": "Globe Valve",
                                        },
                                        {
                                            "text": "Rising Gate Valve",
                                        },
                                        {
                                            "text": "Pressure Relief Valve",
                                        },
                                        {
                                            "text": "Thermal Relief Valve",
                                        }
                                    ],
                                },
                                {
                                    "type": "mc",
                                    "prompt": "Identify the pictured item.",
                                    "answers": "5_mc",
                                    "image": {
                                        "url": "assets/media/images/B-03/B03_PE_0020_06.png",
                                        "alt": "Pressure Relief Valve"
                                    },
                                    "alternatives": [
                                        {
                                            "text": "Ball Valve",
                                        },
                                        {
                                            "text": "Check Valve",
                                        },
                                        {
                                            "text": "Non Rising Gate Valve",
                                        },
                                        {
                                            "text": "Globe Valve",
                                        },
                                        {
                                            "text": "Rising Gate Valve",
                                        },
                                        {
                                            "text": "Pressure Relief Valve",
                                        },
                                        {
                                            "text": "Thermal Relief Valve",
                                        }
                                    ],
                                }
                            ],
                        }
                    },
                    {
                        "id": "0020",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_01.mp3",
                                "text": "You receive an order to move product from storage tank number 1 in Tank Farm C to storage tank number 5, using the tank farm’s pump number 1."
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_01.mp3",
                                            "ementor_narration_text": "You receive an order to move product from storage tank number 1 in Tank Farm C to storage tank number 5, using the tank farm’s pump number 1."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Transfer product from tank farm-C tank #1 to tank #5 using pump #1."
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "1-1",
                                    "1-3",
                                    "CPS-1",
                                    "CPD-2",
                                    "5-4",
                                    "5-1"
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label" : "1-1",
                                        "shape": "square",
                                        "coords": [
                                            340,
                                            290,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label" : "1-3",
                                        "shape": "square",
                                        "coords": [
                                            350,
                                            130,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label" : "CPS-1",
                                        "shape": "square",
                                        "coords": [
                                            650,
                                            175,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label" : "CPD-2",
                                        "shape": "square",
                                        "coords": [
                                            700,
                                            100,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label" : "5-4",
                                        "shape": "square",
                                        "coords": [
                                            550,
                                            135,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label" : "5-1",
                                        "shape": "square",
                                        "coords": [
                                            500,
                                            330,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },

                                    
                                ]
                                
                            }
                        }
                    },
                    {
                        "id": "0030",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_02.mp3",
                                "text": "You receive an order to issue product to the main line from storage tank number 8 in Tank Farm A, using the tank farm’s pump number 1."
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_02.mp3",
                                            "ementor_narration_text": "You receive an order to issue product to the main line from storage tank number 8 in Tank Farm A, using the tank farm’s pump number 1."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Issue product to main line from tank farm-A tank #8 using pump #1."
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "8-1",
                                    "8-2",
                                    "APS-1",
                                    "APD-2",
                                    "A-6",
                                    "A-7",
                                    "A-8",
                                    "A-9",
                                    "ML-10",
                                    "ML-11",
                                    "ML-12",
                                    "ML-1"
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label": "8-1",
                                        "shape": "square",
                                        "coords": [
                                            1330,
                                            135,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "8-2",
                                        "shape": "square",
                                        "coords": [
                                            1430,
                                            135,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "APS-1",
                                        "shape": "square",
                                        "coords": [
                                            1385,
                                            320,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "APD-2",
                                        "shape": "square",
                                        "coords": [
                                            1480,
                                            375,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-6",
                                        "shape": "square",
                                        "coords": [
                                            1490,
                                            260,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-7",
                                        "shape": "square",
                                        "coords": [
                                            1385,
                                            220,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-8",
                                        "shape": "square",
                                        "coords": [
                                            1035,
                                            630,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 7",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-9",
                                        "shape": "square",
                                        "coords": [
                                            1035,
                                            730,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 8",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-10",
                                        "shape": "square",
                                        "coords": [
                                            1135,
                                            750,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 9",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-11",
                                        "shape": "square",
                                        "coords": [
                                            1155,
                                            650,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-12",
                                        "shape": "square",
                                        "coords": [
                                            1350,
                                            760,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 11",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-1",
                                        "shape": "square",
                                        "coords": [
                                            1375,
                                            850,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 12",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    }
                                ]

                            }
                        }
                    },
                    {
                        "id": "0040",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_03.mp3",
                                "text": "You receive an order to receive product from the dock to storage tank number 5 in Tank Farm C, using the tank farm’s pump number 1."
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_03.mp3",
                                            "ementor_narration_text": "You receive an order to receive product from the dock to storage tank number 5 in Tank Farm C, using the tank farm’s pump number 1."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Receive product from dock to tank farm-C tank #5 using pump #1."
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "D-2",
                                    "ML-9",
                                    "C-1",
                                    "C-3",
                                    "C-4",
                                    "C-5",
                                    "4-2",
                                    "4-3",
                                    "CPS-1",
                                    "CPD-2",
                                    "5-4",
                                    "5-1"
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label": "D-2",
                                        "shape": "square",
                                        "coords": [
                                            1135,
                                            840,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "ML-9",
                                        "shape": "square",
                                        "coords": [
                                            1135,
                                            750,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "C-1",
                                        "shape": "square",
                                        "coords": [
                                            850,
                                            790,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "C-3",
                                        "shape": "square",
                                        "coords": [
                                            850,
                                            650,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "C-4",
                                        "shape": "square",
                                        "coords": [
                                            570,
                                            270,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "C-5",
                                        "shape": "square",
                                        "coords": [
                                            570,
                                            170,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "4-2",
                                        "shape": "square",
                                        "coords": [
                                            470,
                                            210,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 7",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "4-3",
                                        "shape": "square",
                                        "coords": [
                                            470,
                                            110,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 8",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "CPS-1",
                                        "shape": "square",
                                        "coords": [
                                            670,
                                            185,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 9",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "CPD-2",
                                        "shape": "square",
                                        "coords": [
                                            700,
                                            100,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "5-4",
                                        "shape": "square",
                                        "coords": [
                                            550,
                                            105,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 11",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "5-1",
                                        "shape": "square",
                                        "coords": [
                                            500,
                                            330,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 12",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    }
                                ]

                            }
                        }
                    },
                    {
                        "id": "0050",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_04.mp3",
                                "text": "You receive an order to issue product to a ship at dock from storage tank number 10 in Tank Farm B, using the tank farm’s pump number 1."
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_04.mp3",
                                            "ementor_narration_text": "You receive an order to issue product to a ship at dock from storage tank number 10 in Tank Farm B, using the tank farm’s pump number 1."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Issue product from tank farm-B tank #10 using pump #1."
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "10-1",
                                    "10-2",
                                    "BPS-1",
                                    "BPD-2",
                                    "B-6",
                                    "B-7",
                                    "B-8",
                                    "B-9",
                                    "ML-7",
                                    "D-1"
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label": "10-1",
                                        "shape": "square",
                                        "coords": [
                                            840,
                                            180,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "10-2",
                                        "shape": "square",
                                        "coords": [
                                            840,
                                            80,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "BPS-1",
                                        "shape": "square",
                                        "coords": [
                                            1030,
                                            120,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "BPD-2",
                                        "shape": "square",
                                        "coords": [
                                            1050,
                                            20,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-6",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            50,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-7",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            150,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-8",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            625,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 7",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-9",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            725,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 8",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-7",
                                        "shape": "square",
                                        "coords": [
                                            1080,
                                            715,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 9",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "D-1",
                                        "shape": "square",
                                        "coords": [
                                            1080,
                                            830,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    }
                                ]

                            }
                        }
                    },
                    {
                        "id": "0060",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_05.mp3",
                                "text": "You receive an order to issue unfiltered product to a Rail Tank Car that is waiting to be loaded. You will issue from storage tank number 7 in Tank Farm A, using pump number 1 "
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_05.mp3",
                                            "ementor_narration_text": "You receive an order to issue unfiltered product to a Rail Tank Car that is waiting to be loaded. You will issue from storage tank number 7 in Tank Farm A, using pump number 1 "
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Issue unfiltered product to middle Rail Tank Car from tank farm-A Tank #7 using Pump #1."
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "7-1",
                                    "7-2",
                                    "APS-1",
                                    "APD-2",
                                    "A-6",
                                    "A-7",
                                    "A-8",
                                    "A-9",
                                    "RL-1",
                                    "RL-3"
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label": "7-1",
                                        "shape": "square",
                                        "coords": [
                                            1330,
                                            120,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "7-2",
                                        "shape": "square",
                                        "coords": [
                                            1430,
                                            120,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "APS-1",
                                        "shape": "square",
                                        "coords": [
                                            1400,
                                            320,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "APD-2",
                                        "shape": "square",
                                        "coords": [
                                            1500,
                                            350,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-6",
                                        "shape": "square",
                                        "coords": [
                                            1500,
                                            250,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-7",
                                        "shape": "square",
                                        "coords": [
                                            1360,
                                            220,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-8",
                                        "shape": "square",
                                        "coords": [
                                            1050,
                                            630,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 7",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-9",
                                        "shape": "square",
                                        "coords": [
                                            1050,
                                            730,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 8",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "RL-1",
                                        "shape": "square",
                                        "coords": [
                                            780,
                                            730,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 9",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "RL-3",
                                        "shape": "square",
                                        "coords": [
                                            440,
                                            700,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    }
                                ]

                            }
                        }
                    },
                    {
                        "id": "0070",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_06.mp3",
                                "text": "You receive an order to receive product from the mainline and issue filtered product to a ship at dock using the Main Pipeline Pump Station Pump."
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_06.mp3",
                                            "ementor_narration_text": "You receive an order to receive product from the mainline and issue filtered product to a ship at dock using the Main Pipeline Pump Station Pump."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Receive product from main line and issue filtered product to ship using the Main Pipeline Pump Station Pump."
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "ML-1",
                                    "ML-2",
                                    "ML-3",
                                    "ML-5",
                                    "ML-6",
                                    "D-1",
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label": "ML-1",
                                        "shape": "square",
                                        "coords": [
                                            1350,
                                            880,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "ML-2",
                                        "shape": "square",
                                        "coords": [
                                            1430,
                                            810,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-3",
                                        "shape": "square",
                                        "coords": [
                                            1450,
                                            740,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-5",
                                        "shape": "square",
                                        "coords": [
                                            1430,
                                            675,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-6",
                                        "shape": "square",
                                        "coords": [
                                            1150,
                                            600,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "D-1",
                                        "shape": "square",
                                        "coords": [
                                            1075,
                                            830,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    }
                                ]

                            }
                        }
                    },
                    {
                        "id": "0080",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_07.mp3",
                                "text": "You receive an order to issue product to the main line from storage tank number 10 in Tank Farm B, using pump number 1. While you are doing this, you must also transfer product from tank number 1 in Tank Farm C to tank number 5 in Tank Farm C, using pump number 1."
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_07.mp3",
                                            "ementor_narration_text": "You receive an order to issue product to the main line from storage tank number 10 in Tank Farm B, using pump number 1. While you are doing this, you must also transfer product from tank number 1 in Tank Farm C to tank number 5 in Tank Farm C, using pump number 1."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Issue product to main line from Tank #10 using pump #1. At the same time, transfer product from tank #1 to Tank #5 using pump #1."
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "10-1",
                                    "10-2",
                                    "BPS-1",
                                    "BPD-2",
                                    "B-6",
                                    "B-7",
                                    "B-8",
                                    "B-9",
                                    "ML-10",
                                    "ML-11",
                                    "ML-12",
                                    "ML-1",
                                    "1-1",
                                    "1-3",
                                    "CPS-1",
                                    "CPD-2",
                                    "5-4",
                                    "5-1"
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label": "10-1",
                                        "shape": "square",
                                        "coords": [
                                            840,
                                            180,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "10-2",
                                        "shape": "square",
                                        "coords": [
                                            840,
                                            80,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "BPS-1",
                                        "shape": "square",
                                        "coords": [
                                            1030,
                                            120,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "BPD-2",
                                        "shape": "square",
                                        "coords": [
                                            1050,
                                            20,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-6",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            50,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-7",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            150,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-8",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            625,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 7",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-9",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            725,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 8",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-10",
                                        "shape": "square",
                                        "coords": [
                                            1120,
                                            735,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 9",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-11",
                                        "shape": "square",
                                        "coords": [
                                            1150,
                                            670,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-12",
                                        "shape": "square",
                                        "coords": [
                                            1330,
                                            815,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "ML-1",
                                        "shape": "square",
                                        "coords": [
                                            1380,
                                            880,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "1-1",
                                        "shape": "square",
                                        "coords": [
                                            340,
                                            290,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "1-3",
                                        "shape": "square",
                                        "coords": [
                                            350,
                                            130,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "CPS-1",
                                        "shape": "square",
                                        "coords": [
                                            650,
                                            175,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "CPD-2",
                                        "shape": "square",
                                        "coords": [
                                            700,
                                            100,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "5-4",
                                        "shape": "square",
                                        "coords": [
                                            550,
                                            135,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "5-1",
                                        "shape": "square",
                                        "coords": [
                                            500,
                                            330,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    }
                                ]

                            }
                        }
                    },
                    {
                        "id": "0090",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_08.mp3",
                                "text": "You receive an order to issue product to a truck parked at TL-7 in the Truck Fill Stand through the filter separator from tank number 9 in Tank Farm B, using pump number 1."
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_08.mp3",
                                            "ementor_narration_text": "You receive an order to issue product to a truck parked at TL-7 in the Truck Fill Stand through the filter separator from tank number 9 in Tank Farm B, using pump number 1."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Issue product from tank #9 to a truck parked at TL-7 in the Truck Fill Stand through filter separator using pump #1."
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "9-1",
                                    "9-2",
                                    "BPS-1",
                                    "BPD-2",
                                    "B-6",
                                    "B-7",
                                    "B-8",
                                    "B-10",
                                    "TL-1",
                                    "TL-2",
                                    "TL-4",
                                    "TL-5",
                                    "TL-7"
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label": "9-1",
                                        "shape": "square",
                                        "coords": [
                                            840,
                                            180,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "9-2",
                                        "shape": "square",
                                        "coords": [
                                            840,
                                            80,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "BPS-1",
                                        "shape": "square",
                                        "coords": [
                                            1030,
                                            120,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "BPD-2",
                                        "shape": "square",
                                        "coords": [
                                            1050,
                                            20,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-6",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            50,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-7",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            150,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-8",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            625,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 7",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "B-10",
                                        "shape": "square",
                                        "coords": [
                                            940,
                                            780,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 8",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "TL-1",
                                        "shape": "square",
                                        "coords": [
                                            780,
                                            795,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 9",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "TL-2",
                                        "shape": "square",
                                        "coords": [
                                            550,
                                            775,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "TL-4",
                                        "shape": "square",
                                        "coords": [
                                            550,
                                            875,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "TL-5",
                                        "shape": "square",
                                        "coords": [
                                            615,
                                            940,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 10",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "TL-7",
                                        "shape": "square",
                                        "coords": [
                                            485,
                                            940,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    }
                                ]

                            }
                        }
                    },
                    {
                        "id": "0100",
                        "title": "Pumping Order Exercise",
                        "temp": 24,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0050_09.mp3",
                                "text": "A ship has arrived at the dock and will be transferring product to storage tank number 8 in Tank Farm A, using the ship’s pump."
                            }
                        ],
                        "content": {
                            "trigger_button": {
                                "title": "Start Exercise",
                                "buybacklocation": "0130",
                                "restartlocation": "0120"
                            },
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0050_09.mp3",
                                            "ementor_narration_text": "A ship has arrived at the dock and will be transferring product to storage tank number 8 in Tank Farm A, using the ship’s pump."
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Transfer product from ship’s pump to tank farm-A into tank #8"
                                        }
                                    ]
                                }
                            ],
                            "hotspot": {
                                "answerseqeunce": [
                                    "D-2",
                                    "ML-10",
                                    "A-2",
                                    "A-3",
                                    "A-4",
                                    "A-5",
                                    "8-3",
                                    "8-1",
                                ],
                                "image": {
                                    "url": "assets/media/images/B-03/B03_PE_0010.jpg",
                                    "alt": "alt goes here"
                                },
                                "items": [
                                    {
                                        "hotspot_label": "D-2",
                                        "shape": "square",
                                        "coords": [
                                            1150,
                                            830,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 1",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 1 pulls the right content."
                                            }
                                        ],
                                    },
                                    {
                                        "hotspot_label": "ML-10",
                                        "shape": "square",
                                        "coords": [
                                            1150,
                                            760,
                                            130,
                                            60
                                        ],
                                        "title": "hotspot 2",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 2 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-2",
                                        "shape": "square",
                                        "coords": [
                                            1000,
                                            760,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 3",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 3 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-3",
                                        "shape": "square",
                                        "coords": [
                                            1000,
                                            640,
                                            100,
                                            100
                                        ],
                                        "title": "hotspot 4",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 4 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-4",
                                        "shape": "square",
                                        "coords": [
                                            1350,
                                            230,
                                            100,
                                            60
                                        ],
                                        "title": "hotspot 5",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 5 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "A-5",
                                        "shape": "square",
                                        "coords": [
                                            1480,
                                            230,
                                            100,
                                            60
                                        ],
                                        "title": "hotspot 6",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "8-3",
                                        "shape": "square",
                                        "coords": [
                                            1480,
                                            170,
                                            100,
                                            60
                                        ],
                                        "title": "hotspot 7",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    },
                                    {
                                        "hotspot_label": "8-1",
                                        "shape": "square",
                                        "coords": [
                                            1350,
                                            170,
                                            100,
                                            60
                                        ],
                                        "title": "hotspot 8",
                                        "body": [
                                            {
                                                "tag": "p",
                                                "content": "This is a test to see if Item 6 pulls the right content."
                                            }
                                        ]
                                    }
                                ]

                            }
                        }
                    },
                    {
                        "id": "0110",
                        "title": "Practical Exercise Finish",
                        "temp": 26,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B03_PE_0040.mp3",
                                "text": "Well done! You managed to process the majority of the pumping orders and routed product to the correct destinations. Select the Restart Exercise button to go through the exercise again. "
                            }
                        ],
                        "content": {
                            "ementors": [
                                {
                                    "graphic": {
                                        "url": "assets/media/images/ementor_female.jpg",
                                        "alt": "This guy looks like he would steal from his mother"
                                    },
                                    "narrations": [
                                        {
                                            "ementor_narration_url": "assets/media/narration/B03_PE_0040.mp3",
                                            "ementor_narration_text": "Well done! You managed to process the majority of the pumping orders and routed product to the correct destinations. Select the Restart Exercise button to go through the exercise again. "
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Well done! You managed to process the majority of the pumping orders and routed product to the correct destinations. Select the Restart Exercise button to go through the exercise again."
                                        },
                                        {
                                            "tag": "p",
                                            "content": "Select the \"Restart Exercise\" button when you are ready to start over."
                                        }
                                    ]
                                }
                            ],
                            "image": {
                                "url": "assets/media/images/B-03/B03_0010_01.jpg",
                                "alt": "alt goes here"
                            },
                            "trigger_button": {
                                "title": "Restart Exercise",
                                "location": "0020"
                            }
                        }
                    }
                    
                ]
            }
        ],
        "images":[
            {
                "url":"assets/media/0030.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/1010.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/1020.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/1070.mp4",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/2010.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/2020.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/2070.mp4",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/3010.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/3020.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/3070.mp4",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/4010.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            },
            {
                "url":"assets/media/4020.jpg",
                "file":"Original File Name Here",
                "title":"Image Title Here",
                "src":"Image Source Here",
                "author":"Image Author Here",
                "date":"Image Date Here",
                "desc":"Image Description Here."
            }
        ]
    }
};
// define lesson name
var imiName = "92F10-" + modJSON.module.id;
// store lesson data locally
if(sessionStorage){
  sessionStorage.setItem(imiName, JSON.stringify(modJSON));
  modJSON = null;
} else {
  // lesson data will just stay as modJSON
}
