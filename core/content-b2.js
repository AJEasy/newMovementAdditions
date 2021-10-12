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
    "course":{
        "id": "92F10",
        "title": "U.S. Army CASCOM 92F10 Flash Rebuild"
    },
    "module":{
        "id":"B02",
        "title": "Waterfront Operations And Offshore Petroleum Discharge System (OPDS)"
    },
    "content":{
        "sections":[
            {
                "title":"Identify the Major Components of the Offshore Petroleum Discharge System",
                "id":"0000-0",
                "pages":[
                    {
                        "id":"0010",
                        "title":"Welcome",
                        "temp":0,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B02_0010.mp3",
                                "text":"Welcome to the Waterfront Operations and Offshore Petroleum Discharge System (OPDS) lesson."
                            }
                        ],
                        "content":{
                            "title_text": "Waterfront Operations And Offshore Petroleum Discharge System (OPDS)",
                            "title_background": "assets/media/images/B-02/B02_0020_01.jpg",
                            "images":[
                                {
                                    "url":"assets/media/images/B-02/B02_0010_01.jpg",
                                    "alt":"MV VADM Wheeler ship-to-shore fuel transporter"
                                },
                                {
                                    "url":"assets/media/images/B-02/B02_0010_02.jpg",
                                    "alt":"MV VADM Wheeler ship-to-shore fuel transporter with Lighter Amphibious Resupply Cargo (LARC)"
                                },
                                {
                                    "url":"assets/media/images/B-02/B02_0010_03.jpg",
                                    "alt":"Line deployment to pull flexible pipe ashore"
                                },
                                {
                                    "url":"assets/media/images/B-02/B02_0010_04.jpg",
                                    "alt":"Tender vessel pulling line with flexible pipe"
                                }
                            ]
                        }
                    },
                    {
                        "id":"0020",
                        "title":"Introduction",
                        "temp":2.1,
                        "elo":0,
                        "layout":"half-horizontal",
                        "narration":[
                            {
                                "url":"assets/media/narration/B02_0020.mp3",
                                "text":"The military's ability to move and fight depends upon its fuel supply. Your mission is to provide the user with fuel that meets specifications by the most effective, efficient, and safest method available. Any interruption in the flow of fuel could have a devastating effect on the military's ability to dominate the conflict.<br>Select each option to view relevant information prior to starting the course. When you have viewed all the required information, select the BEGIN MISSION button to begin."
                            }
                        ],
                        "content":{
                            "instruction": "Select each option to view relevant information prior to starting the course. When you have viewed all the required information, select the BEGIN MISSION button to begin.",
                            "text":"The <strong>Offshore Petroleum Discharge System (OPDS)</strong> has special equipment that facilitates the operation to push petroleum from the sea to the inland high-water mark.",
                            "complete_text": "Select the BEGIN MISSION button in the lower right-hand corner to begin.",
                            "animation": {
                                "start": "start",
                                "type": "sequential",
                                "items": [
                                    {
                                        "start_time": "start",
                                        "end_time": "end",
                                        "type": "image",
                                        "content": {
                                            "url": "assets/media/images/B-02/B02_0020_01.jpg",
                                            "alt": "MV Wheeler"
                                        } 
                                    },
                                    {
                                        "start_time": 10,
                                        "end_time": "end",
                                        "type": "image",
                                        "content": {
                                            "url": "assets/media/images/B-02/B02_0020_02.jpg",
                                            "alt": "LARC and bulldozers on the beach"
                                        }
                                    },
                                    {
                                        "start_time": 15,
                                        "end_time": "end",
                                        "type": "image",
                                        "content": {
                                            "url": "assets/media/images/B-02/B02_0020_03.jpg",
                                            "alt": "Tender vessel"
                                        }
                                    }
                                ]
                            },
                            "menu_items":[
                                {
                                    "title":"Objectives",
                                    "location":"0030"
                                },
                                {
                                    "title":"Learning Step Activities",
                                    "location":"0040"
                                },
                                {
                                    "title":"Safety Requirements",
                                    "location":"0050"
                                },
                                {
                                    "title":"Risk Assessment and Environmental Considerations",
                                    "location":"0060"
                                }
                            ],
                            "trigger_button":{
                                "title":"BEGIN MISSION",
                                "location":"0070"
                            }
                        },
                        "sections": [
                            {
                                "title":"Introduction",
                                "id":"0020-0",
                                "pages":[
                                    {
                                        "id":"0030",
                                        "title":"Objectives",
                                        "temp":3,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0040.mp3",
                                                "text":"Please take a moment to review the objectives for this training."
                                            }
                                        ],
                                        "branching":"0020",
                                        "content":{
                                            "objectives":[
                                                {
                                                    "type":"tlo",
                                                    "image":{
                                                        "url":"assets/media/images/B-02/B02_0040_01.jpg",
                                                        "alt":"MV VADM Wheeler ship-to-shore fuel transporter"
                                                    },
                                                    "title":"Terminal Learning Objective (TLO):",
                                                    "description":"Apply Tactical Petroleum Operations.",
                                                    "action":"Apply Tactical Petroleum Operations.",
                                                    "conditions":"Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction, with consideration for the operational environment, given Interactive Multimedia Instruction and all appropriate resources.",
                                                    "standard":"Apply Tactical Petroleum Operations with an 80% tolerance for accuracy."
                                                },
                                                {
                                                    "type":"elo",
                                                    "image":{
                                                        "url":"assets/media/images/B-02/B02_0040_02.jpg",
                                                        "alt":"tender vessel"
                                                    },
                                                    "title":"Enabling Learning Objective (ELO):",
                                                    "description":"Identify the Major Components of the Offshore Petroleum Discharge System.",
                                                    "action":"Identify the Major Components of the Offshore Petroleum Discharge System.",
                                                    "conditions":"Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction with consideration for the operational environment, given, student workbook, student notes, safety requirements, and interactive multimedia instruction.",
                                                    "standard":"Identify the Major Components of the Offshore Petroleum Discharge System by identifying the correct and incorrect execution of the MV Wheeler with no more than two errors."
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0040",
                                        "title":"Learning Step Activities",
                                        "temp":5,
                                        "elo":0,
                                        "layout":"half-horizontal",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0050.mp3",
                                                "text":"Please take a moment to review the learning step activities for this training."
                                            }
                                        ],
                                        "branching":"0020",
                                        "content":{
                                            "text_elements":[
                                                {
                                                    "tag":"h6",
                                                    "content":"Learning Step Activities (LSA):"
                                                },
                                                {
                                                    "tag":"ul",
                                                    "content":[
                                                        "Identify the Role of the Offshore Petroleum Discharge System (OPDS) and MV Wheeler",
                                                        "Identify the Components of the OPDS",
                                                        "Discuss the Concept of Operations",
                                                        "Identify the Deployment Procedures for the OPDS"
                                                    ]
                                                }
                                            ],
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-02/B02_0050.jpg",
                                                    "alt":"Offshore Petroleum Discharge System (OPDS)"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0050",
                                        "title":"Safety Requirements",
                                        "temp":1,
                                        "elo":0,
                                        "layout":"third-top",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0060.mp3",
                                                "text":"Please read over the safety requirements for this training."
                                            }
                                        ],
                                        "branching":"0020",
                                        "content":{
                                            "text_elements":[
                                                {
                                                    "tag":"p",
                                                    "content":"These are the safety precautions you must follow during this training:"
                                                },
                                                {
                                                    "tag":"ol",
                                                    "content":[
                                                        "Aisles are to be kept clear for hasty exits.",
                                                        "Identify and point out primary and alternate fire exits.",
                                                        "Observe all routine safety procedures.",
                                                        "Observe all applicable environmental considerations.",
                                                        "In the event of a fire, you will exit the classroom from the nearest exit.",
                                                        "You will proceed to the parking lot outside and hold a formation.",
                                                        "The class president or their representative will take attendance and report to the instructor.",
                                                        "You will not enter the building until told to do so by the instructor."
                                                    ]
                                                }
                                            ],
                                            "graphics":[
                                                {
                                                    "url":"assets/media/images/mission.png",
                                                    "alt":"Black background with gold text that reads Army Safe is Army Strong."
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0060",
                                        "title":"Risk Assessment / Environmental Considerations",
                                        "temp":6,
                                        "elo":0,
                                        "layout":"full",
                                        "branching":"0020",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0070.mp3",
                                                "text":[
                                                    "This lesson is assigned a risk level of low and there are no environmental considerations."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-02/B02_0070.jpg",
                                                "alt":"Offshore Petroleum Discharge System (OPDS)"
                                            },
                                            "text_elements":[
                                                {
                                                    "tag":"h6",
                                                    "content":"Risk Assessment/Environmental Considerations"
                                                },
                                                {
                                                    "tag":"p",
                                                    "content":"This training is assigned a Risk Level of Low."
                                                },
                                                {
                                                    "tag":"p",
                                                    "content":"No danger to the environment exists during this block of instruction."
                                                }
                                            ]
                                        }
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        "id":"0070",
                        "title":"LSA Menu",
                        "temp":2.2,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B02_0030.mp3",
                                "text":[
                                    "There is crucial information you need to know about Waterfront Operations and Offshore Petroleum Discharge System (OPDS).",
                                    "During this module you will have a chance to earn challenge coins. You will do this by completing activities. Each time you complete an activity correctly; you will receive a coin.",
                                    "We will let you know during the module when you have a chance to earn them. At the end of the module, you will see how many you have earned. Good Luck!"
                                ]
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-02/B02_0070.jpg",
                                "alt":"Offshore Petroleum Discharge System (OPDS)"
                            },
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor_female.jpg",
                                        "alt":"This guy looks like he would steal from his mother"
                                    },
                                    "text": [
                                        {
                                            "tag":"p",
                                            "content":"There is crucial information you need to know about Waterfront Operations and Offshore Petroleum Discharge System (OPDS).",
                                            "timing": 0
                                        },
                                        {
                                            "tag":"p",
                                            "content":"During this module you will have a chance to earn challenge coins. You will do this by completing activities. Each time you complete an activity correctly; you will receive a coin.",
                                            "timing": 7
                                        },
                                        {
                                            "tag":"p",
                                            "content":"I will let you know during the module when you have a chance to earn them. At the end of the module, you will see how many you have earned. Good Luck!",
                                            "timing": 18
                                        }
                                    ] 
                                }
                            ],
                            "instruction": "Select each option to view the required information.",
                            "text":"TODO Insert Instruction Text here",
                            "images":[
                                {
                                    "url":"https://via.placeholder.com/900x900.png",
                                    "alt":"this is a branching image"
                                }
                            ],
                            "menu_items":[
                                {
                                    "title":"Role of the Offshore Petroleum Discharge System (OPDS) and MV Wheeler",
                                    "location":"0080"
                                },
                                {
                                    "title":"Components of the OPDS",
                                    "location":"0110"
                                },
                                {
                                    "title":"Concept of Operations",
                                    "location":"0140"
                                },
                                {
                                    "title":"Deployment Procedures for the OPDS System",
                                    "location":"0170"
                                }
                            ],
                            "trigger_button":{
                                "title":"Summary",
                                "location":"0260"
                            }
                        },
                        "sections": [
                            {
                                "title":"Role of the Offshore Petroleum Discharge System (OPDS) and MV Wheeler",
                                "id":"0070-0",
                                "pages":[
                                    {
                                        "id":"0080",
                                        "title":"LSA 1 Page 1",
                                        "temp":7.2,
                                        "elo":0,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0080.mp3",
                                                "text":["The Offshore Petroleum Discharge System (OPDS) was designed by and for the United States Navy, for use with the Army’s Inland Petroleum Distribution System (IPDS) or the Marine Corps’ tactical fuel system (TFS). The OPDS is the responsibility of the U.S. Navy.",
                                                "The bulk petroleum distribution system is the compilation of equipment needed to provide bulk fuel directly from an offshore tanker to a Beach Termination Unit (BTU) located immediately inland from the high watermark.",
                                                "The OPDS consists of a support vessel, embarked tender vessel, and other watercraft including a lighter, amphibious, resupply cargo, which will deploy the OPDS conduit and BTU."]
                                            }
                                        ],
                                        "layout":"third-left",
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"The Offshore Petroleum Discharge System (OPDS) was designed by and for the United States Navy, for use with the Army’s inland petroleum distribution system (IPDS) or the Marine Corps’ tactical fuel system (TFS). The OPDS is the responsibility of the U.S. Navy.",
                                                            "timing": 0
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"The bulk petroleum distribution system is the compilation of equipment needed to provide bulk fuel directly from an offshore tanker to a beach termination unit (BTU) located immediately inland from the high watermark.",
                                                            "timing": 15
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"The OPDS consists of a support vessel, embarked tender vessel, and other watercraft including a lighter, amphibious, resupply cargo, which will deploy the OPDS conduit and BTU.",
                                                            "timing": 28
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "slides":[
                                                {
                                                    "url":"assets/media/images/B-02/B02_0080_02.jpg",
                                                    "alt":"Slide 1",
                                                    "title":"Process Flow – Offshore Petroleum Discharge System",
                                                    "timing": "0",
                                                    "narration":{
                                                        "url":"Narration Url",
                                                        "text":"The Offshore Petroleum Discharge System (OPDS) was designed by and for the United States Navy, for use with the Army’s inland petroleum distribution system (IPDS) or the Marine Corps’ tactical fuel system (TFS). The OPDS is the responsibility of the U.S. Navy."
                                                    },
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "The Offshore Petroleum Discharge System (OPDS) was designed by and for the United States Navy, for use with the Army’s inland petroleum distribution system (IPDS) or the Marine Corps’ tactical fuel system (TFS). The OPDS is the responsibility of the U.S. Navy."
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-02/B02_0080_02.jpg",
                                                    "alt":"Slide 2",
                                                    "title":"Shell",
                                                    "timing": "20",
                                                    "narration":{
                                                        "url":"Narration Url",
                                                        "text":"The bulk petroleum distribution system is the compilation of equipment needed to provide bulk fuel directly from an offshore tanker to a beach termination unit (BTU) located immediately inland from the high watermark."
                                                    },
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "The bulk petroleum distribution system is the compilation of equipment needed to provide bulk fuel directly from an offshore tanker to a beach termination unit (BTU) located immediately inland from the high watermark."
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-02/B02_0080_03.jpg",
                                                    "alt":"Slide 3",
                                                    "title":"Bottom Outlet",
                                                    "timing": "25",
                                                    "narration":{
                                                        "url":"Narration Url",
                                                        "text":"The Offshore Petroleum Discharge System consists of an OPDS support vessel,"
                                                    },
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "The Offshore Petroleum Discharge System consists of an OPDS support vessel,"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-02/B02_0080_04.jpg",
                                                    "alt":"Slide 4",
                                                    "title":"Safety Valve",
                                                    "timing": "30",
                                                    "narration":{
                                                        "url":"Narration Url",
                                                        "text":"an embarked tender vessel,"
                                                    },
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "an embarked tender vessel,"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-02/B02_0080_05.jpg",
                                                    "alt":"Slide 5",
                                                    "timing": "32",
                                                    "title":"Safety Valve",
                                                    "narration":{
                                                        "url":"Narration Url",
                                                        "text":"and other watercraft including a lighter, amphibious, resupply cargo and"
                                                    },
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "and other watercraft including a lighter, amphibious, resupply cargo and"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-02/B02_0080_06.jpg",
                                                    "alt":"Slide 6",
                                                    "timing": "35",
                                                    "title":"Safety Valve",
                                                    "narration":{
                                                        "url":"Narration Url",
                                                        "text":"which will deploy the OPDS conduit and BTU. The Navy is responsible for the operation of the BTU."
                                                    },
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "which will deploy the OPDS conduit and BTU. The Navy is responsible for the operation of the BTU."
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0090",
                                        "title":"LSA 1 Page 2",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0090.mp3",
                                                "text":"Select each hotspot to learn more about the MV Wheeler."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select each hotspot to reveal more information about the MV Wheeler-Multi-Mission Vessel.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-02/B02_0090.jpg",
                                                    "alt":"MV Wheeler-Multi-Mission Vessel"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            100,
                                                            580,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"MV Wheeler-Multi-Mission Vessel",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Capable of providing 1.7 million gallons per day from up to eight miles offshore in all bottom conditions and in significantly higher sea states than the old system."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            320,
                                                            560,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"MV Wheeler-Multi-Mission Vessel",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Capable of open ocean tow of vessels up to 6,300 tons."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            620,
                                                            560,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"MV Wheeler-Multi-Mission Vessel",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Uses dynamic positioning, which requires no anchoring system. The vessel can maintain ship position within two meters using thrusters and screws."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            900,
                                                            520,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"MV Wheeler-Multi-Mission Vessel",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"In less than 48 hours, the crew can run the full length of conduit ashore from the ship's bow, run a float hose to a tanker from the ship's stern, and be ready to begin pumping fuel."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1280,
                                                            425,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"MV Wheeler-Multi-Mission Vessel",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The system is installed by MSC civilian crews with the assistance of naval support personnel."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1680,
                                                            410,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"MV Wheeler-Multi-Mission Vessel",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Provides the hose and pumping capability for a separate fuel tanker, which provides petroleum product for transfer to shore from commercial or military tankers."
                                                            }
                                                        ],
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0100",
                                        "title":"LSA 1 Page 3",
                                        "temp":13,
                                        "elo":0,
                                        "layout":"third-left",
                                        "achievement": true,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0100.mp3",
                                                "text":"Spin the wheel to reveal a statement. Select whether the statement is True or False. Once you have chosen, select Submit to see if you earned a challenge coin. Select Spin to begin."
                                            }
                                        ],
                                        "branching":"0070",
                                        "content": {
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Spin the wheel to reveal a statement. Select whether the statement is True or False. Once you have chosen, select Submit to see if you earned a challenge coin. Select Spin to begin."
                                                        },
                                                    ] 
                                                }
                                            ],
                                            "questions": [
                                                {
                                                    "type": "tf",
                                                    "prompt": "The MV Wheeler requires anchoring to maintain its position.",
                                                    "answer": 0
                                                },
                                                {
                                                    "type": "tf",
                                                    "prompt": "The OPDS is the responsibility of the U.S. Navy.",
                                                    "answer": 1
                                                },
                                                {
                                                    "type": "tf",
                                                    "prompt": "The Army is responsible for the operation of the BTU.",
                                                    "answer": 0
                                                },
                                                {
                                                    "type": "tf",
                                                    "prompt": "In less than 48 hours, the crew can run the full length of conduit ashore from the ship's bow, run a float hose to a tanker from the ship's stern, and be ready to begin pumping fuel.",
                                                    "answer": 1
                                                }
                                            ],
                                            "correct":"Nice job!",
                                            "incorrect":"This answer is incorrect."
                                        }
                                    }
                                ]
                            },
                            {
                                "title":"Components of the OPDS",
                                "id":"0070-1",
                                "pages":[
                                    {
                                        "id":"0110",
                                        "title":"LSA 2 Page 1",
                                        "temp":10,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0110.mp3",
                                                "text":"Select each image card to reveal the component of the Offshore Petroleum Discharge System. Select the cards as many times as you like to remember the information for an upcoming activity."
                                            }
                                        ],
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Select each image card to reveal the component of the Offshore Petroleum Discharge System. Select the cards as many times as you like to remember the information for an upcoming activity."
                                                        },
                                                    ] 
                                                }
                                            ],
                                            "tiles":[
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_01.jpg",
                                                        "alt":"Rigid hull inflatable boat being deployed into the sea"
                                                    },
                                                    "back":[
                                                        {
                                                            "tag": "h2",
                                                            "content": "Rigid Hull Inflatable Boat"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"A Rigid Hull Inflatable Boat, or RHIB, performs short-range insertion and extraction of coastal resupply, and coastal surveillance missions."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"The rugged, seaworthy, versatile 36-foot RHIB has a 200 nautical miles range at 32 knots, with a 45-knot top speed."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"It can carry eight passengers or 3,200 lbs. payload and is C-130 transportable."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_02.jpg",
                                                        "alt":"Lighter Amphibious Resupply Cargo (LARC) with grader onboard"
                                                    },
                                                    "back":[
                                                        {
                                                            "tag": "h2",
                                                            "content": "Amphibious Resupply Cargo (LARC XV)"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"An amphibious vehicle used primarily to carry items such as CONEXES and other palletized cargo. The LARC XV is a 45-foot aluminum hulled vehicle, with a weight capacity of 15 tons and a ramp capacity of 9,000 pounds"
                                                        },
                                                        {
                                                            "tag":"dl",
                                                            "content":[
                                                                {
                                                                    "dt": "Weight (dry)",
                                                                    "dd": "45,000 lbs."
                                                                },
                                                                {
                                                                    "dt": "Weight (fully loaded)",
                                                                    "dd": "75,000 lbs."
                                                                },
                                                                {
                                                                    "dt": "Overall length",
                                                                    "dd": "45 ft."
                                                                },
                                                                {
                                                                    "dt": "Overall width",
                                                                    "dd": "14 ft. 8 in."
                                                                },
                                                                {
                                                                    "dt": "Overall height",
                                                                    "dd": "15 ft. 4 in."
                                                                },
                                                                {
                                                                    "dt": "Cargo bay",
                                                                    "dd": "23 ft.-11 in. X 11 ft.-11 in."
                                                                },
                                                                {
                                                                    "dt": "Ramp width",
                                                                    "dd": "9 ft."
                                                                },
                                                                {
                                                                    "dt": "Ramp capacity",
                                                                    "dd": "9,000 lbs."
                                                                },
                                                                {
                                                                    "dt": "Weight Capacity",
                                                                    "dd": "15 Tons"
                                                                },
                                                                {
                                                                    "dt": "Power",
                                                                    "dd": "One 600HP CAT Diesel"
                                                                },
                                                                {
                                                                    "dt": "Hull Material",
                                                                    "dd": "Aluminum"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_03.jpg",
                                                        "alt":"Tender vessel"
                                                    },
                                                    "back":[
                                                        {
                                                            "tag":"h2",
                                                            "content":"OPDS Tender Vessel"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"A Tender vessel supports the OPDS operation by towing flexible pipe."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"Beach personnel will maintain contact with the MV Wheeler and military personnel operating the terminal equipment at all times during refueling operations."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"<strong>NOTE</strong>: Civilian personnel (Ship personnel) will be on site throughout the operation."
                                                        },
                                                        {
                                                            "tag":"ul",
                                                            "content": [
                                                                "160 ft. Length",
                                                                "30 ft. Beam",
                                                                "12.5 ft. draft",
                                                                "28 Knots",
                                                                "600 Tons"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_04.jpg",
                                                        "alt":"MV Wheeler"
                                                    },
                                                    "back":[
                                                        {
                                                            "tag":"h2",
                                                            "content":"MV Wheeler"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"Capable of providing 1.7 million gallons per day from up to eight miles offshore in all bottom conditions in significantly higher sea states than the old system. The new OPDS ship utilizes dynamic positioning, which requires no anchoring system. The vessel can maintain ship position within two meters using thrusters and screws. In less than 48 hours, the crew can run the full length of conduit ashore from the ship's bow, run a float hose to a tanker from the ship's stern, and be ready to begin pumping fuel. The system is installed by MSC civilian crews with the assistance of naval support personnel."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"The MV Wheeler provides the hose and pumping capability for a separate fuel tanker, which provides petroleum product for transfer to shore."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_05.jpg",
                                                        "alt":"Flexible pipe"
                                                    },
                                                    "back":[
                                                        {
                                                            "tag":"h2",
                                                            "content":"Flexible Pipe"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"Flexible pipe delivers fuel from the fuel tanker to the beach through the water."
                                                        },
                                                        {
                                                            "tag":"dl",
                                                            "content":[
                                                                {
                                                                    "dt": "Diameter",
                                                                    "dd": "Inside- 5.7 inches <br>Outside- 8.11 inches"
                                                                },
                                                                {
                                                                    "dt": "Weight",
                                                                    "dd": "Air- 36.30 <br>Seawater- 13.62"
                                                                },
                                                                {
                                                                    "dt": "Pressure",
                                                                    "dd": "Bursting- 10,587 psi <br>Working- 5,000 psi"
                                                                },
                                                                {
                                                                    "dt": "Pull",
                                                                    "dd": "351,762"
                                                                },
                                                                {
                                                                    "dt": "Bending Radius",
                                                                    "dd": "4.40 feet"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0120",
                                        "title":"LSA 2 Page 2",
                                        "temp":10.5,
                                        "elo":0,
                                        "layout":"third-left",
                                        "achievement": true,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0120.mp3",
                                                "text":"It’s time for a challenge coin. Select the statement, then select the image of the component being described. When you are finished, select Submit to see if you earned a challenge coin. Good luck!"
                                            }
                                        ],
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Select the statement, then select the image of the component being described. When you are finished, select Submit to see if you earned a challenge coin."
                                                        },
                                                    ] 
                                                }
                                            ],
                                            "statements":[
                                                {
                                                    "text": "Utilizes dynamic positioning, which requires no anchoring system.",
                                                    "answer": 3
                                                },
                                                {
                                                    "text": "Performs short-range insertion and extraction of coastal resupply.",
                                                    "answer": 0
                                                },
                                                {
                                                    "text": "Tows flexible pipe.",
                                                    "answer": 2
                                                },
                                                {
                                                    "text": "Delivers fuel from the fuel tanker to the beach.",
                                                    "answer": 4
                                                },
                                                {
                                                    "text": "Amphibious vehicle used primarily to carry items.",
                                                    "answer": 1
                                                }
                                            ],
                                            "tiles":[
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_01.jpg",
                                                        "alt":"Rigid hull inflatable boat being deployed into the sea"
                                                    }
                                                },
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_02.jpg",
                                                        "alt":"Lighter Amphibious Resupply Cargo (LARC) with grader onboard"
                                                    }
                                                },
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_03.jpg",
                                                        "alt":"Tender vessel"
                                                    }
                                                },
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_04.jpg",
                                                        "alt":"MV Wheeler"
                                                    }
                                                },
                                                {
                                                    "front":{
                                                        "url":"assets/media/images/B-02/B02_0110_05.jpg",
                                                        "alt":"Flexible pipe"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0130",
                                        "title":"LSA 2 Page 3",
                                        "temp":15,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0130.mp3",
                                                "text":"Select the best answer to the question. Then select submit."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-02/B02_0130_01.jpg",
                                                "alt":"Offshore Petroleum Discharge System (OPDS)"
                                            },
                                            "prompt":"Which of the following has the primary use of carrying items such as CONEXES and other palletized cargo?",
                                            "options":[
                                                {
                                                    "text":"MV VADM Wheeler",
                                                    "answer":false
                                                },
                                                {
                                                    "text":" Rigid Hull Inflatable Boat",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Lighter Amphibious Resupply Cargo (LARC)",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"OPDS Tender Vessel",
                                                    "answer":false
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is Lighter Amphibious Resupply Cargo (LARC)"
                                        }
                                    } 
                                ]
                            },
                            {
                                "title":"Concept of Operations",
                                "id":"0070-2",
                                "pages":[
                                    {
                                        "id":"0140",
                                        "title":"LSA 3 Page 1",
                                        "temp":7.2,
                                        "elo":0,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0140.mp3",
                                                "text":["The Offshore Petroleum Discharge System (OPDS) consists of an OPDS support vessel, an embarked tender vessel, and other watercraft including a lighter, amphibious, resupply cargo, which will deploy the OPDS conduit and BTU. The Navy is responsible for the operation of the BTU. Once the conduit is deployed, the support vessel will use dynamic positioning to hold the tanker supplying the fuel in place.",
                                                "The steps are as follows:",
                                                "The MV Wheeler will approach the beach as water depth allows and deploy the LARC. The LARC will land the beach grader which will use special fittings to insert helical auger anchors into the sand to a depth of approximately 4 feet."]
                                            }
                                        ],
                                        "layout":"third-left",
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"The Offshore Petroleum Discharge System (OPDS) consists of an OPDS support vessel, an embarked tender vessel, and other watercraft including a lighter, amphibious, resupply cargo, which will deploy the OPDS conduit and BTU. The Navy is responsible for the operation of the BTU. Once the conduit is deployed, the support vessel will use dynamic positioning to hold the tanker supplying the fuel in place.",
                                                            "timing": 0
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"The steps are as follows: <br> <br>The MV Wheeler will approach the beach as water depth allows and deploy the LARC. The LARC will land the beach grader which will use special fittings to insert helical auger anchors into the sand to a depth of approximately 4 feet.",
                                                            "timing": 15
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "slides":[
                                                {
                                                    "url":"assets/media/images/B-02/B02_0140_01.jpg",
                                                    "alt":"MV Wheeler",
                                                    "title":"MV Wheeler",
                                                    "timing": "0"
                                                },
                                                {
                                                    "url":"assets/media/images/B-02/B02_0140_02.jpg",
                                                    "alt":"MV wheeler and LARC",
                                                    "title":"MV wheeler and LARC",
                                                    "timing": "20"
                                                },
                                                {
                                                    "url":"assets/media/images/B-02/B02_0140_03.jpg",
                                                    "alt":"LARC approaching shore with beach grader",
                                                    "title":"LARC approaching shore with beach grader",
                                                    "timing": "25"
                                                },
                                                {
                                                    "url":"assets/media/images/B-02/B02_0140_04.jpg",
                                                    "alt":"Beach grader with auger anchor",
                                                    "title":"Beach grader with auger anchor",
                                                    "timing": "30"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0150",
                                        "title":"LSA 3 Page 2",
                                        "temp":7.2,
                                        "elo":0,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0150.mp3",
                                                "text":["This graphic depicts the beach configuration for the OPDS. The beach unit will maintain contact with ship and military fuels personnel at all times during pumping operations.",
                                                "The 160-foot tender vessel will tow the flexible pipe to the 3-meter (3.3 yards) depth mark. The LARC will then tow the pipe to the Beach Termination Unit, (BTU)."]
                                            }
                                        ],
                                        "layout":"third-left",
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"This graphic depicts the beach configuration for the OPDS. The beach unit will maintain contact with ship and military fuels personnel at all times during pumping operations.",
                                                            "timing": 0
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"The 160-foot tender vessel will tow the flexible pipe to the 3-meter (3.3 yards) depth mark. The LARC will then tow the pipe to the Beach Termination Unit, (BTU).",
                                                            "timing": 12
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "slides":[
                                                {
                                                    "url":"assets/media/images/B-02/B02_0150_01.png",
                                                    "alt":"Slide 1",
                                                    "title":"Process Flow – Offshore Petroleum Discharge System",
                                                    "timing": "0",
                                                    "narration":{
                                                        "url":"Narration Url",
                                                        "text":"The Offshore Petroleum Discharge System (OPDS) was designed by and for the United States Navy, for use with the Army’s inland petroleum distribution system (IPDS) or the Marine Corps’ tactical fuel system (TFS). The OPDS is the responsibility of the U.S. Navy."
                                                    },
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "The Offshore Petroleum Discharge System (OPDS) was designed by and for the United States Navy, for use with the Army’s inland petroleum distribution system (IPDS) or the Marine Corps’ tactical fuel system (TFS). The OPDS is the responsibility of the U.S. Navy."
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0160",
                                        "title":"LSA 3 Page 3",
                                        "temp":16,
                                        "elo":0,
                                        "layout":"third-left-graphic",
                                        "achievement": true,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0160.mp3",
                                                "text":"It’s time for a challenge coin. Select the statement, then select the image of the component being described. When you are finished, select Submit to see if you earned a challenge coin. Good luck!"
                                            }
                                        ],
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Here is a chance for a challenge coin. Place the steps in the correct sequence by selecting on the statement and then selecting the ordered box. When you are finished, select submit to see if you earned a coin."
                                                        },
                                                    ] 
                                                }
                                            ],
                                            "draggables":[
                                                {
                                                    "content":"The MV Wheeler will approach the beach as water depth allows."
                                                },
                                                {
                                                    "content":"The MV Wheeler will deploy the LARC."
                                                },
                                                {
                                                    "content":"The LARC will land the beach grader."
                                                },
                                                {
                                                    "content":"The beach grader will use special fittings to insert helical auger anchors into the sand to a depth of approximately 4 feet."
                                                },
                                                {
                                                    "content":"The 160-foot tender vessel will tow the flexible pipe to the 3-meter (3.3 yards) depth mark. The LARC will then tow the pipe to the Beach Termination Unit, (BTU)."
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"Incorrect",
                                            "feedback":"Incorrect"
                                        }
                                    }
                                ]
                            },
                            {
                                "title":"Deployment Procedures for the OPDS System",
                                "id":"0070-3",
                                "pages":[
                                    {
                                        "id":"0170",
                                        "title":"LSA 4 Page 1",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0170.mp3",
                                                "text":"Select each number to reveal the pipe deployment process."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select each number to reveal the pipe deployment process.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-02/B02_0170.jpg",
                                                    "alt":"PDS vessel."
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            300,
                                                            750,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The tender crew boat will attach a line to the bitter end of the Technip flexible pipe"
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            850,
                                                            700,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The crew boat will pull the pipe as the inflatable buoys are installed for the first 1000 feet."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1120,
                                                            450,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"img",
                                                                "content":{
                                                                    "source":"assets/media/images/B-02/B02_0170_01.png",
                                                                    "alt": "inflatable buoys"
                                                                } 
                                                            },
                                                            {
                                                                "tag":"ol",
                                                                "content":[
                                                                    "The crew on the OPDS vessel will attach inflatable buoys prior to over boarding the pipe. This will be done to reduce friction and make it easier to winch the pipe ashore.",
                                                                    "<strong>NOTE:</strong> Without the Inflatable buoys, the flexible pipe is a (Sink-sink) Hose, designed to sink immediately."
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0180",
                                        "title":"LSA 4 Page 2",
                                        "temp":17,
                                        "elo":0,
                                        "layout":"third-left",
                                        "achievement": true,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0180.mp3",
                                                "text":["It’s time for a challenge coin. Using the pipes, buoys and vehicles pieces, place each piece on the puzzle board to show which vessel does the following:",
                                                "• Attach inflatable buoys prior to over boarding the pipe.",
                                                "• Tow the flexible pipe to the 3-meter (3.3 yards) depth mark.",
                                                "• Tow the pipe to the Beach Termination Unit (BTU).",
                                                "When you are finished, select Submit to see if you earned a challenge coin. Good luck!."]
                                            }
                                        ],
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Using the pipes, buoys and vehicles below, place each piece on the puzzle board to show which vessel does the following:",
                                                            "timing": 0
                                                        },
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "attach inflatable buoys prior to over boarding the pipe",
                                                                "tow the flexible pipe to the 3-meter (3.3 yards) depth mark",
                                                                "tow the pipe to the Beach Termination Unit (BTU)."
                                                            ],
                                                            "timing": 12
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "correct": "Congratulations!",
                                            "feedback": "This answer is incorrect.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-02/B02_0180_01.png",
                                                    "alt":"Beach Scene for Vessel process"
                                                },
                                                "droppables":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1405,
                                                            378,
                                                            490,
                                                            490
                                                        ],
                                                        "title":"hotspot 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"This is a test to see if Item 1 pulls the right content."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            706,
                                                            403,
                                                            490,
                                                            490
                                                        ],
                                                        "title":"hotspot 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"This is a test to see if Item 2 pulls the right content."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1043,
                                                            429,
                                                            490,
                                                            490
                                                        ],
                                                        "title":"hotspot 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"This is a test to see if Item 3 pulls the right content."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            482,
                                                            483,
                                                            490,
                                                            490
                                                        ],
                                                        "title":"hotspot 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"This is a test to see if Item 4 pulls the right content."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            200,
                                                            439,
                                                            490,
                                                            490
                                                        ],
                                                        "title":"hotspot 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"This is a test to see if Item 4 pulls the right content."
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "draggables":[
                                                    {
                                                        "title": "this is draggable 2",
                                                        "url": "assets/media/images/B-02/B02_0180_03-icon.png"
                                                    },
                                                    {
                                                        "title": "this is draggable 3",
                                                        "url": "assets/media/images/B-02/B02_0180_04-icon.png"
                                                    },
                                                    {
                                                        "title": "this is draggable 4",
                                                        "url": "assets/media/images/B-02/B02_0180_05-icon.png"
                                                    },
                                                    {
                                                        "title": "this is draggable 4",
                                                        "url": "assets/media/images/B-02/B02_0180_06-icon.png"
                                                    },
                                                    {
                                                        "title": "this is draggable 1",
                                                        "url": "assets/media/images/B-02/B02_0180_02-icon.png"
                                                    }
                                                ]
                                            },
                                            "draggables":[
                                                {
                                                    "content":"The MV Wheeler will approach the beach as water depth allows."
                                                },
                                                {
                                                    "content":"The MV Wheeler will deploy the LARC."
                                                },
                                                {
                                                    "content":"The LARC will land the beach grader."
                                                },
                                                {
                                                    "content":"The beach grader will use special fittings to insert helical auger anchors into the sand to a depth of approximately 4 feet."
                                                },
                                                {
                                                    "content":"The 160-foot tender vessel will tow the flexible pipe to the 3-meter (3.3 yards) depth mark. The LARC will then tow the pipe to the Beach Termination Unit (BTU)."
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0190",
                                        "title":"LSA 4 Page 3",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0190.mp3",
                                                "text":"Select each number to reveal the next steps of pipe deployment."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select each number to reveal the next steps of pipe deployment.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-02/B02_0190_01.jpg",
                                                    "alt":"Deployment Procedures for the OPDS"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            900,
                                                            750,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The tender vessel will tow the flexible pipe to the 3-meter depth mark."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            600,
                                                            680,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The LARC passes its winch line to the tender vessel and heads to the beach paying out the winch line. In a high current scenario, it may be necessary for the tender vessel to hold the pipe and winch line until the LARC gets to the beach, sets their anchors and ready’s the winch."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1250,
                                                            750,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Deploying the flexible pipe to the beach with a 1:300 gradient is a worst-case scenario. At 1:300 the 10-meter curve is 9000 feet from the beach and the 3-meter curve is 3000 feet."
                                                            },
                                                            {
                                                                "tag":"p",
                                                                "content":"<strong>NOTE:<strong> A meter curve is a curve caused by current or rough water. 1:300 gradients represent a 300 feet drop/slope per one mile."
                                                            },
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0200",
                                        "title":"LSA 4 Page 4",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0200.mp3",
                                                "text":"Select each number to reveal the next steps of pipe deployment."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select each number to reveal the next steps of pipe deployment.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-02/B02_0200_01.jpg",
                                                    "alt":"Deployment Procedures for the OPDS"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            550,
                                                            690,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Once the LARC is on station ashore, the tender vessel, or crew boat, attaches the LARC’s winch line to the flexible pipe’s end fitting and the LARC will winch the pipe to the beach."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            350,
                                                            500,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"When the flexible pipe is safely at the high-water mark, the relief valve, beach terminal unit or BTU, hookup hose and BTU anchors will be installed."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1000,
                                                            590,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Air will be removed from the pontoons by the RHIB and the rest of the pipe will sink to the ocean floor."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1600,
                                                            760,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Now the OPDS ship can begin to pay out the remaining flexible pipe."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0210",
                                        "title":"LSA 4 Page 5",
                                        "temp":4,
                                        "elo":0,
                                        "layout":"third-bottom",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0210.mp3",
                                                "text":[
                                                    "The OPDS (MV Wheeler) rendezvous with tanker, passes Hauser and proceeds with the tanker to the offload point. The tender vessel will assist, as necessary.",
                                                    "The tender vessel will remain in the area to assist and be prepared to prevent the OPDS vessel and the Tanker from making contact each other.",
                                                    "The seaward end of the flexible pipe will be temporarily detached and buoyed until the tanker and OPDS vessel are safely connected."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-02/B02_0210_01.jpg",
                                                    "alt":"Black background with gold text that reads Army Safe is Army Strong."
                                                }
                                            ],
                                            "text_elements":[
                                                {
                                                    "tag":"p",
                                                    "content":"The OPDS (MV Wheeler) rendezvous with tanker, passes Hauser and proceeds with the tanker to the offload point. The tender vessel will assist as necessary."
                                                },
                                                {
                                                    "tag":"p",
                                                    "content":"The tender vessel will remain in the area to assist and be prepared to prevent the OPDS vessel and the Tanker from making contact each other."
                                                },
                                                {
                                                    "tag":"p",
                                                    "content":"The seaward end of the flexible pipe will be temporarily detached and buoyed until the tanker and OPDS vessel are safely connected."
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0220",
                                        "title":"LSA 4 Page 6",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0220.mp3",
                                                "text":"Select each number to reveal the next steps of pipe deployment."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select each number to reveal the next steps of pipe deployment.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-02/B02_0220_01.jpg",
                                                    "alt":"graphic showing OPDS vessel, tender vessel, tanker and float hose"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1700,
                                                            890,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"OPDS vessel will recover the flexible pipe and make the connection; then deploy the scraper to the Beach Terminal Unit (BTU)."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1350,
                                                            900,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The OPDS vessel will deploy the float hose to the tanker."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            750,
                                                            790,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The tanker will hook-up and pump to the OPDS vessel holding tank."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            2450,
                                                            1020,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The OPDS vessel will then transfer fuel via Horse Power (HP) Pump to the flexible pipe and onto the BTU at 1.7 million gallons per 20 hour day, completing refueling operations within 48 hours."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1900,
                                                            890,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 5",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"The OPDS vessel will maintain the tanker position using Deep Position II System (DPII) and the tender vessel."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0230",
                                        "title":"LSA 4 Page 7",
                                        "temp":5,
                                        "elo":0,
                                        "layout":"half-horizontal",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0230.mp3",
                                                "text":"All of the components of the Offshore Petroleum Discharge System or OPDS support the Inshore Petroleum Discharge System or IPDS, which is used to move bulk fuel as far forward in the theater as practical."
                                            }
                                        ],
                                        "content":{
                                            "text_elements":[
                                                {
                                                    "tag":"img",
                                                    "content":{
                                                        "source":"assets/media/images/B-02/B02_0230_01.jpg",
                                                        "alt": "Inshore Petroleum Discharge System schematic"
                                                    }
                                                }
                                            ],
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-02/B02_0230_02.jpg",
                                                    "alt":"Pump with flexible pipe on the shore"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0240",
                                        "title":"LSA 4 Page 8",
                                        "temp":15,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0240.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-02/B02_0240_01.jpg",
                                                "alt":"Tender Vessel"
                                            },
                                            "prompt":"The __________ prevents the OPDS vessel and the Tanker from colliding?",
                                            "options":[
                                                {
                                                    "text":"Tender Vessel",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"Lighter Amphibious Resupply Cargo (LARC)",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Rigid Hull Inflatable Boat (RHIB)",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"MV Wheeler Multi Mission Vessel",
                                                    "answer":false
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is Tender Vessel"
                                        }
                                    },
                                    {
                                        "id":"0250",
                                        "title":"LSA 4 Page 9",
                                        "temp":20,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0250.mp3",
                                                "text":"Select the checkmark, for all the statements that are true about the MV Wheeler, select the X if the statement is not true. When you are finished, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"When looking over the OPORD for your upcoming mission, you notice that in paragraph 3, Execution, there are some mistakes made regarding the MV Wheeler. You need to mark these items before approaching your NCOIC."
                                                        },
                                                    ] 
                                                }
                                            ],
                                            "instructions":"Select the checkmark, for all the statements that are true about the MV Wheeler, select the X if the statement is not true. When you are finished, select Submit.",
                                            "options":[
                                                {
                                                    "text":"capable of pumping fuel at a rate of 1.7 million gallons",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"prevents collision with tanker",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"deploys float hose",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"attaches the LARC's winch line to the flexible pipe's end fitting",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"tows the flexible pipe to the 3-meter depth mark",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"attaches inflatable buoys prior to over boarding the pipe",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"tows the pipe to the Beach Termination Unit (BTU)",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"deploy the LARC",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"carries palletized cargo",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"has a 30' beam",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"transfers fuel ashore",
                                                    "answer":true
                                                },
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answers are"
                                        }
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        "id":"0260",
                        "title":"Summary",
                        "temp":22,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B02_0260.mp3",
                                "text":[
                                    "Congratulations! You completed the module. Let’s see how many challenge coins you earned. Nice job.",
                                    "This module described how the Offshore Petroleum Discharge System provides bulk transfer of petroleum directly from an offshore tanker to a beach termination unit that is located immediately inland from the high watermark. The bulk petroleum is then, either transported inland, or stored in the beach support area.",
                                    "You should now be able to: Identify the Role of the Offshore Petroleum Discharge System (OPDS) and MV Wheeler, Identify the Components of the OPDS, Discuss the Concept of Operations and Identify the Deployment Procedures for the OPDS Systems."
                                ]
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-02/B02_0070.jpg",
                                "alt":"Offshore Petroleum Discharge System"
                            },
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor_female.jpg",
                                        "alt":"Female eMentor icon"
                                    },
                                    "text": [
                                        {
                                            "tag":"p",
                                            "content":"Congratulations! You completed the module. Let’s see how many challenge coins you earned. Nice job.",
                                            "timing": 0
                                        },
                                        {
                                            "tag":"p",
                                            "content":"This module described how the Offshore Petroleum Discharge System provides bulk transfer of petroleum directly from an offshore tanker to a beach termination unit that is located immediately inland from the high watermark. The bulk petroleum is then, either transported inland, or stored in the beach support area.",
                                            "timing": 10
                                        },
                                        {
                                            "tag":"p",
                                            "content":"You should now be able to: Identify the Role of the Offshore Petroleum Discharge System (OPDS) and MV Wheeler, Identify the Components of the OPDS, Discuss the Concept of Operations and Identify the Deployment Procedures for the OPDS Systems.",
                                            "timing": 27
                                        }
                                    ] 
                                }
                            ],
                            
                            "completed_content":{
                                "text": [
                                    {
                                        "tag":"h6",
                                        "content":"Objective:"
                                    },
                                    {
                                        "tag": "hr",
                                        "content": ""
                                    },
                                    {
                                        "tag":"p",
                                        "content":"This module described how the <strong>Offshore Petroleum Discharge System</strong> provides bulk transfer of petroleum directly from an offshore tanker to a beach termination unit located immediately inland from the high watermark. Bulk petroleum then is either transported inland or stored in the beach support area."
                                    }
                                ],
                                "tasks":[
                                    {
                                        "text": "Identify the Role of the Offshore Petroleum Discharge System (OPDS) and MV Wheeler",
                                        "timing": 0
                                    },
                                    {
                                        "text": "Identify the Components of the OPDS",
                                        "timing": 10
                                    },
                                    {
                                        "text": "Discuss the Concept of Operations",
                                        "timing": 20,
                                    },
                                    {
                                        "text": "Identify the Deployment Procedures for the OPDS Systems",
                                        "timing": 30,
                                    }
                                ],
                            },
                            "achievements": [
                                {
                                    "tag":"h6",
                                    "content":"Challenge Coins:"
                                },
                                {
                                    "tag": "hr",
                                    "content": ""
                                },
                                {
                                    "tag":"p",
                                    "content":"Congratulations! You completed the module. Let’s see how many challenge coins you earned."
                                }
                            ],
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
        ],
        "status":[
            {
                "0010":0
            },
            {
                "0020":{
                    "c":0,
                    "p":{
                        "0030":0,
                        "0040":0,
                        "0050":0,
                        "0060":0
                    }
                }
            },
            {
                "0070":{
                    "c":0,
                    "p":[
                        {
                            "0080":0,
                            "0090":0,
                            "0100":0
                        },
                        {
                            "0110":0,
                            "0120":0,
                            "0130":0
                        },
                        {
                            "0140":0,
                            "0150":0,
                            "0160":0
                        },
                        {
                            "0170":0,
                            "0180":0,
                            "0190":0,
                            "0200":0,
                            "0210":0,
                            "0220":0,
                            "0230":0,
                            "0240":0,
                            "0250":0
                        }
                    ]
                }
            },
            {
                "0260":0
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
