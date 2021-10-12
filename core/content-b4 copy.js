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
    "module":"B04",
    "content":{
        "mod":"Railcar and Depot and Truck Stand Transfer Operations",
        "sections":[
            {
                "title":"Introduction",
                "id":"0000",
                "pages":[
                    {
                        "id":"0010",
                        "title":"Module Introduction",
                        "temp":0,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0010.mp3",
                                "text":"Welcome to the next lesson in the Petroleum Supply Specialist online training."
                            }
                        ],
                        "content":{
                            "title_text": "Railcar and Depot and Truck Stand Transfer Operations",
                            "title_background": "assets/media/images/B04_0020_01.jpg",
                            "images":[
                                {
                                    "url":"assets/media/images/B04_0010_01.png",
                                    "alt":"Image of a tank rail car"
                                },
                                {
                                    "url":"assets/media/images/B04_0010_02.png",
                                    "alt":"Image of a storage tank"
                                }
                            ]
                        }
                    },
                    {
                        "id":"0020",
                        "title":"Branching",
                        "temp":2,
                        "elo":0,
                        "layout":"half-horizontal",
                        "branching": ['0030','0040','0050','0060','0070', '0080'],
                        "trigger": '0080',
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0020.mp3",
                                "text":"The military’s ability to move and fight depends upon its supply of fuel. When rail facilities are available, tank cars may be used along with the pipeline to transport petroleum products. Any interruption in the flow of fuel could have a devastating effect on the military’s ability to dominate the conflict."
                            }
                        ],
                        "content":{
                            "text":"Select each button to view relevant information prior to starting the course content. When you have viewed all required information, select the BEGIN MISSION button in the lower right-hand corner to begin.",
                            "complete_text": "Select the BEGIN MISSION button in the lower right-hand corner to begin.",
                            "images":[
                                {
                                    "url":"assets/media/images/B04_0020_01.jpg",
                                    "alt":"Image of rail tank car at petroleum training facility"
                                }
                            ],
                            "menu_items":[
                                {
                                    "title":"TLO/ELO",
                                    "location":"0030"
                                },
                                {
                                    "title":"LSAs",
                                    "location":"0040"
                                },
                                {
                                    "title":"Safety",
                                    "location":"0050"
                                },
                                {
                                    "title":"Risk/Environment",
                                    "location":"0060"
                                },
                                {
                                    "title":"Scenario",
                                    "location":"0070"
                                },
                                {
                                    "title":"BEGIN MISSION",
                                    "trigger": true,
                                    "location":"0080"
                                }
                            ]
                        }
                    },
                    {
                        "id":"0030",
                        "title":"Objectives",
                        "temp":3,
                        "elo":0,
                        "layout":"full",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0030.mp3",
                                "text":"Please take a moment to review the objectives for this training."
                            }
                        ],
                        "branching":"0020",
                        "content":{
                            "objectives":[
                                {
                                    "type":"tlo",
                                    "image":{
                                        "url":"https://via.placeholder.com/640x360.png",
                                        "alt":"alt goes here"
                                    },
                                    "title":"Terminal Learning Objective",
                                    "description":"Apply Tactical Petroleum Operations.",
                                    "action":"Apply Tactical Petroleum Operations.",
                                    "conditions":"Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction, with consideration for the operational environment, given Interactive Multimedia Instruction and all appropriate resources.",
                                    "standard":"Apply Petroleum Logistics Fundamentals with an 80% tolerance for accuracy."
                                },
                                {
                                    "type":"elo",
                                    "image":{
                                        "url":"https://via.placeholder.com/640x360.png",
                                        "alt":"alt goes here"
                                    },
                                    "title":"Enabling Learning Objective",
                                    "description":"Operate Rail Tank Car",
                                    "action":"Operate Rail Tank Car.",
                                    "conditions":"Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction, with consideration for the operational environment, IAW ATP 4-43, givenmultimedia instruction, virtual rail tank car, pump, fuel source, safety equipment, safety requirements, environmental considerations, checklist, and practical exercise.",
                                    "standard":"Conductservice procedures for a rail tank car accurately and completely, adhering to all safety procedures, without damage to equipment or injury to personnel."
                                }
                            ]
                        }
                    },
                    {
                        "id":"0040",
                        "title":"Learning Step Activities (LSA)",
                        "temp":4,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0040.mp3",
                                "text":"Please take a moment to review the learning steps for this training."
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
                                        "Identify Tank Car Components",
                                        "Discuss Site Loading and Unloading Considerations and Procedures",
                                        "Review Loading and Unloading Operations",
                                        "Describe Long and Short Stick Gauging Methods",
                                        "Conduct Rail Tank Car Operations"
                                    ]
                                }
                            ],
                            "images":[
                                {
                                    "url":"assets/media/images/B04_0040_01.png",
                                    "alt":"Image of tank car lower outlet connected to hose via elbow."
                                }
                            ]
                        }
                    },
                    {
                        "id":"0050",
                        "title":"Mission",
                        "temp":1,
                        "elo":0,
                        "layout":"third-top",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0050.mp3",
                                "text":"Please read over the safety requirements for this training."
                            }
                        ],
                        "branching":"0020",
                        "content":{
                            "text_elements":[
                                {
                                    "tag":"p",
                                    "content":"Classroom Training Safety Considerations:"
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
                        "title":"Risk Assessment/Environmental Considerations",
                        "temp":6,
                        "elo":0,
                        "layout":"full",
                        "branching":"0020",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0060.mp3",
                                "text":[
                                    "This training is assigned a risk level of low.",
                                    "Whenever you are performing a petroleum operation you are required to use a drip pan under any equipment that could develop a leak. If a leak occurs, it will be cleaned up immediately. The spill will be reported to the first instructor seen. The spill will be cleaned in accordance with the division spill contingency plan."
                                ]
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B04_0060.png",
                                "alt":"alt goes here"
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
                                    "content":"Petroleum Operations require the use of a drip pan under any equipment that could develop a leak."
                                },
                                {
                                    "tag":"p",
                                    "content":"Spills should be cleaned in accordance with the division spill contingency plan."
                                }
                            ],
                            "images":[
                                {
                                    "url":"https://via.placeholder.com/900x900.png",
                                    "alt":"alt goes here"
                                }
                            ]
                        }
                    },
                    {
                        "id":"0070",
                        "title":"Scenario",
                        "temp":5,
                        "elo":0,
                        "layout":"half-horizontal",
                        "branching":"0020",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0070.mp3",
                                "text":[
                                    "This training is assigned a risk level of low.",
                                    "Whenever you are performing a petroleum operation you are required to use a drip pan under any equipment that could develop a leak. If a leak occurs, it will be cleaned up immediately. The spill will be reported to the first instructor seen. The spill will be cleaned in accordance with the division spill contingency plan."
                                ]
                            }
                        ],
                        "content":{
                            "text_elements":[
                                {
                                    "tag":"h6",
                                    "content":"Scenario"
                                },
                                {
                                    "tag":"p",
                                    "content": "You and your unit have been deployed and tasked with operating a terminal in a friendly nation. Today, you will be preparing the site to receive rail tank cars."
                                }
                            ],
                            "images":[
                                {
                                    "url":"https://via.placeholder.com/900x900.png",
                                    "alt":"alt goes here"
                                }
                            ]
                        }
                    },
                    {
                        "id":"0080",
                        "title":"Full Screen Narration",
                        "temp":7,
                        "elo":0,
                        "layout":"full",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0080.mp3",
                                "text":"We’ve got a lot of ground to cover today. We will be preparing the site for arriving rail cars and performing loading and unloading operations. Are you ready to get started?"
                            }
                        ],
                        "content":{ 
                            "ementors":[
                                {
                                    "graphic":{
                                        "url": "https://via.placeholder.com/250x250.png",
                                        "alt": "image of instructor"
                                    },
                                    "text": [
                                        {
                                            "tag":"p",
                                            "content":"We’ve got a lot of ground to cover today. We will be preparing the site for arriving rail cars and performing loading and unloading operations. Are you ready to get started?"
                                        },
                                    ] 
                                }
                            ],
                            "menu_items":[
                                {
                                    "title":"Menu Item Title goes here",
                                    "branch_location":"Branch Location goes here",
                                    "completion":false
                                }
                            ]
                        }
                    },
                    {
                        "id":"0090",
                        "title":"Branching",
                        "temp":2,
                        "elo":0,
                        "layout":"half-horizontal",
                        "branching": ['0100','0150','0180','0400','0450'],
                        "trigger": '0450',
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0020.mp3",
                                "text":"The military’s ability to move and fight depends upon its supply of fuel. When rail facilities are available, tank cars may be used along with the pipeline to transport petroleum products. Any interruption in the flow of fuel could have a devastating effect on the military’s ability to dominate the conflict."
                            }
                        ],
                        "content":{
                            "text":"Select a topic area.",
                            "complete_text": "Congratulations, you have completed the core segments of this training and earned enough coins to proceed to the final mission. Select the button to begin.",
                            "images":[
                                {
                                    "url":"https://via.placeholder.com/900x900.png",
                                    "alt":"Petroleum Supply Specialist"
                                }
                            ],
                            "menu_items":[
                                {
                                    "title":"Identify Tank Car Components",
                                    "location":"0100"
                                },
                                {
                                    "title":"Discuss Site Loading and Unloading Considerations and Procedures",
                                    "location":"0150"
                                },
                                {
                                    "title":"Review Loading and Unloading Operations",
                                    "location":"0180"
                                },
                                {
                                    "title":"Describe Long and Short Stick Gauging Methods",
                                    "location":"0400"
                                },
                                {
                                    "title":"Conduct Tank Rail Car Operations",
                                    "trigger": true,
                                    "location":"0450"
                                }
                            ]
                        }
                    },
                    {
                        "id":"0100",
                        "title":"Flip Cards",
                        "temp":10,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"Narration Url",
                                "text":"Narration Text"
                            }
                        ],
                        "content":{
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor.jpg",
                                        "alt":"This guy looks like he would steal from his mother"
                                    },
                                    "text": [
                                        {
                                            "tag":"p",
                                            "content":"This an ementor test"
                                        },
                                    ] 
                                }
                            ],
                            "tiles":[
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Army Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Provides management of overland petroleum support to land-based forces from all DOD components."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Army Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Provides necessary force structure to install, operate, and protect tactical petroleum storage and distribution systems, including pipeline. "
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Army Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"In theater, provides a system that transports bulk petroleum inland from the high-water mark of the designated ocean beach (IPDS/OPDS operations)."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Marine Corps Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Maintains a capability to provide bulk petroleum support to U.S. Marine Corps units."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Marine Corps Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"May be tasked to provide petroleum support to any joint force and/or MNF, as directed by the JFC. "
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Air Force Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"USAF maintains the capability to provide tactical support to the USA units at improved and austere locations."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Air Force Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Provides distribution of bulk petroleum products by air where immediate support is needed at remote locations."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Navy Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Provides seaward and over-the-shore bulk petroleum products to the high-water mark for US sea-based and land-based forces of all DOD components."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Navy Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Maintains the capability to provide bulk petroleum support to naval forces afloat and ashore."
                                        },
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "id":"0110",
                        "title":"Flip Cards Select",
                        "temp":10.5,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"Narration Url",
                                "text":"Narration Text"
                            }
                        ],
                        "content":{
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor.jpg",
                                        "alt":"This guy looks like he would steal from his mother"
                                    }
                                }
                            ],
                            "statements":[
                                {
                                    "text": "Provides necessary force structure to install, operate, and protect tactical petroleum storage and distribution systems, including pipeline.",
                                    "answer": 0
                                },
                                {
                                    "text": "May be tasked to provide petroleum support to any joint force and/or MNF, as directed by the JFC.",
                                    "answer": 4
                                },
                                {
                                    "text": "Provides distribution of bulk petroleum products by air where immediate support is needed at remote locations.",
                                    "answer": 6
                                },
                                {
                                    "text": "Provides seaward and over-the-shore bulk petroleum products to the high-water mark for US sea-based and land-based forces of all DOD components",
                                    "answer": 7
                                }
                            ],
                            "tiles":[
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Army Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Provides management of overland petroleum support to land-based forces from all DOD components."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Army Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Provides necessary force structure to install, operate, and protect tactical petroleum storage and distribution systems, including pipeline. "
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Army Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"In theater, provides a system that transports bulk petroleum inland from the high-water mark of the designated ocean beach (IPDS/OPDS operations)."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Marine Corps Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Maintains a capability to provide bulk petroleum support to U.S. Marine Corps units."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Marine Corps Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"May be tasked to provide petroleum support to any joint force and/or MNF, as directed by the JFC. "
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Air Force Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"USAF maintains the capability to provide tactical support to the USA units at improved and austere locations."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Air Force Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Provides distribution of bulk petroleum products by air where immediate support is needed at remote locations."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Navy Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Provides seaward and over-the-shore bulk petroleum products to the high-water mark for US sea-based and land-based forces of all DOD components."
                                        },
                                    ]
                                },
                                {
                                    "front":{
                                        "url":"https://via.placeholder.com/300x300.png",
                                        "alt":"Official Navy Seal"
                                    },
                                    "back":[
                                        {
                                            "tag":"p",
                                            "content":"Maintains the capability to provide bulk petroleum support to naval forces afloat and ashore."
                                        },
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "id":"0120",
                        "title":"COL Image Select",
                        "temp":19,
                        "elo":0,
                        "layout":"full",
                        "narration":[
                            {
                                "url":"Narration Url",
                                "text":"Narration Text"
                            }
                        ],
                        "content":{
                            "text":"Which of these components allows for expansion of the product in the tank rail car? Select the best answer to the question. Then, select Submit.",
                            "options":[
                                {
                                    "url":"https://via.placeholder.com/640x360.png",
                                    "alt":"Dome",
                                    "answer":true
                                },
                                {
                                    "url":"https://via.placeholder.com/640x360.png",
                                    "alt":"Shell",
                                    "answer":false
                                },
                                {
                                    "url":"https://via.placeholder.com/640x360.png",
                                    "alt":"Bottom Outlet",
                                    "answer":false
                                },
                                {
                                    "url":"https://via.placeholder.com/640x360.png",
                                    "alt":"Safety Valve",
                                    "answer":false
                                }
                            ],
                            "correct":"Great job!",
                            "incorrect":"This answer is incorrect; please try again",
                            "feedback":"The correct answer is Lighter Amphibious Resupply Cargo (LARC)"
                        }
                    },
                    {
                        "id":"0130",
                        "title":"COL Multiple Choice",
                        "temp":15,
                        "elo":0,
                        "layout":"third-left-graphic",
                        "narration_url":"Narration Url",
                        "narration_text":"Narration Text",
                        "content":{
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
                            "feedback":"The correct answer is Lighter Amphibious Resupply Cargo (LARC)",
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"url goes here",
                                        "alt":"alt goes here"
                                    },
                                    "narrations":[
                                        {
                                            "ementor_narration_url":"E-mentor Narration Url goes here",
                                            "ementor_narration_text":"E-mentor Narration Text goes here"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "id":"0140",
                        "title":"COL Matching Drag and Drop",
                        "temp":16,
                        "elo":0,
                        "layout":"third-left-graphic",
                        "narration_url":"Narration Url",
                        "narration_text":"Narration Text",
                        "content":{
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor.jpg",
                                        "alt":"This guy looks like he would steal from his mother"
                                    },
                                    "narrations":[
                                        {
                                            "ementor_narration_url":"E-mentor Narration Url goes here",
                                            "ementor_narration_text":"Here is a chance for a challenge coin. Place the steps in the correct sequence by clicking on the statement and then selecting the ordered box. When you are finished, select submit to see if you earned a coin."
                                        }
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
                            ]
                        }
                    },
                    {
                        "id":"0150",
                        "title":"COL Hotspot Drag and Drop",
                        "temp":17,
                        "elo":0,
                        "layout":"full",
                        "narration_url":"Narration Url",
                        "narration_text":"Narration Text",
                        "content":{
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor.jpg",
                                        "alt":"This guy looks like he would steal from his mother"
                                    },
                                    "narrations":[
                                        {
                                            "ementor_narration_url":"E-mentor Narration Url goes here",
                                            "ementor_narration_text":"Place the warning signs and fire extinguishers in their required places."
                                        }
                                    ]
                                }
                            ],
                            "text_elements":[
                                {
                                    "tag":"p",
                                    "content":"Place the warning signs and fire extinguishers in their required places. Drag the objects from the bottom of the screen to the correct spots on the image."
                                }
                            ],
                            "hotspot":{
                                "image":{
                                    "url":"assets/media/images/B04_0210.png",
                                    "alt":"alt goes here"
                                },
                                "droppables":[
                                    {
                                        "shape":"circle",
                                        "coords":[
                                            100,
                                            585,
                                            150,
                                            150
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
                                            427,
                                            733,
                                            150,
                                            150
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
                                            1660,
                                            535,
                                            150,
                                            150
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
                                            1675,
                                            380,
                                            150,
                                            150
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
                                        "title": "this is draggable 1",
                                        "url": "assets/media/images/Icon_TankCarConnected.png"
                                    },
                                    {
                                        "title": "this is draggable 2",
                                        "url": "assets/media/images/Icon_FireExtinguisher.png"
                                    },
                                    {
                                        "title": "this is draggable 3",
                                        "url": "assets/media/images/Icon_FireExtinguisher.png"
                                    },
                                    {
                                        "title": "this is draggable 4",
                                        "url": "assets/media/images/Icon_TankCarConnected.png"
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
                                    "content":"The 160-foot tender vessel will tow the flexible pipe to the 3-meter (3.3 yards) depth mark. The LARC will then tow the pipe to the Beach Termination Unit, (BTU)."
                                }
                            ]
                        }
                    },
                    {
                        "id":"0160",
                        "title":"PE Drag and Drop",
                        "temp":22,
                        "elo":0,
                        "layout":"full",
                        "content":{
                            "hotspot":{
                                "image":{
                                    "url":"assets/media/images/B04_0210.png",
                                    "alt":"alt text goes here"
                                },
                            },
                            "stages" : [
                                {
                                    "template": "briefing",
                                    "screen" : "0010",
                                    "image" : {
                                        "url" : "assets/media/images/B04_0210.png",
                                        "alt" : "this is where alt goes",
                                    },
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0010.mp3", //location of narration file
                                        "cc" : "Welcome to the Railcar and Depot, and Truck Stand Transfer Operations Practical Exercise. In this exercise you will be loading and unloading a Rail Tank Car. For each phase of the Rail Tank Car operations, use the equipment and tools provided in your tool kit to complete all steps before moving on. Select the Start Exercise button when you are ready to begin.", //closed caption of narration
                                    },
                                },
                                {
                                    "template": "tasking",
                                    "screen" : "0020",
                                    "image" : {
                                        "url" : "assets/media/images/B04_0210.png",
                                        "alt" : "this is where alt goes",
                                    },
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0020.mp3", //location of narration file
                                        "cc" : "Your first task is to prepare this tank car for loading. The product has already been sampled and gauged and the tank car and your equipment has been properly inspected to ensure everything is in good working condition. The track has been properly grounded, track to track and track to ground. You are not using a loading rack. Use the prompt located at the top of the screen to work through the steps required to get the tank car prepared for loading.", //closed caption of narration
                                    },
                                    "tasks" : [
                                        {
                                            /*
                                            "narration" : {
                                                "url" : "assets/media/narration/B04_PE_0020.mp3", //location of narration file
                                                "cc" : "This is first stage, first task narration", //closed caption of narration
                                            },
                                            */
                                            "promptText" : "Make sure the track rails are properly bonded and grounded. Find the correct item in your tool kit and use it on the grounding points.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactable" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url" : "assets/media/images/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                100,
                                                                585,
                                                                150,
                                                                150,
                                                            ],
                                                            "title":"hotspot 1",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                        {
                                                            "correct" : true,
                                                            "shape":"circle",
                                                            "coords":[
                                                                427,
                                                                733,
                                                                150,
                                                                150
                                                            ],
                                                            "title":"hotspot 2",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 2 pulls the right content."
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "altUrl" : "", //source of image for if something toggles state
                                                },
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url" : "assets/media/images/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                900,
                                                                985,
                                                                150,
                                                                150,
                                                            ],
                                                            "title":"hotspot 1",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                        {
                                                            "correct" : true,
                                                            "shape":"circle",
                                                            "coords":[
                                                                927,
                                                                333,
                                                                150,
                                                                150
                                                            ],
                                                            "title":"hotspot 2",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 2 pulls the right content."
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "altUrl" : "", //source of image for if something toggles state
                                                },
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                100,
                                                                185,
                                                                150,
                                                                150,
                                                            ],
                                                            "title":"hotspot 1",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                            "dialog" : { //this is left out if not needing dialog popup
                                                                "image" : "imageHere",
                                                                "text" : "textHere",
                                                            },
                                                            "toggleOffUrl" : "assets/media/images/Icon_TankCarConnected.png", //source for image of object
                                                            "toggleOnUrl" : "assets/media/images/Icon_FireExtinguisher.png", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        {
                                            "promptText" : "Task 2", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactable" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url" : "assets/media/images/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                430,
                                                                935,
                                                                150,
                                                                150,
                                                            ],
                                                            "title":"hotspot 1",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                    ],
                                                    "altUrl" : "", //source of image for if something toggles state
                                                },
                                            ], 
                                        },
                                        {
                                            "promptText" : "Task 3", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactable" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url" : "assets/media/images/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1230,
                                                                635,
                                                                150,
                                                                150,
                                                            ],
                                                            "title":"hotspot 1",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                    ],
                                                    "altUrl" : "", //source of image for if something toggles state
                                                },
                                            ], 
                                        }
                                    ]
                                },
                                {
                                    "template": "tasking",
                                    "screen" : "0030",
                                    "image" : {
                                        "url" : "assets/media/images/B04_0210.png",
                                        "alt" : "this is where alt goes",
                                    },
                                    "tasks" : [
                                        {
                                            "narration" : {
                                                "url" : "assets/media/narration/B04_PE_0030.mp3", //location of narration file
                                                "cc" : "This is second stage, first task narration", //closed caption of narration
                                            },
                                            "promptText" : "Stage 2 Task 1", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactable" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url" : "assets/media/images/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                100,
                                                                585,
                                                                150,
                                                                150,
                                                            ],
                                                            "title":"hotspot 1",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                        {
                                                            "correct" : true,
                                                            "shape":"circle",
                                                            "coords":[
                                                                427,
                                                                733,
                                                                150,
                                                                150
                                                            ],
                                                            "title":"hotspot 2",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 2 pulls the right content."
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "altUrl" : "", //source of image for if something toggles state
                                                },
                                            ], 
                                        },
                                        {
                                            "narration" : {
                                                "url" : "assets/media/narration/B04_PE_0040.mp3", //location of narration file
                                                "cc" : "This is second stage, second task narration", //closed caption of narration
                                            },
                                            "promptText" : "Task 2", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactable" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url" : "assets/media/images/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                430,
                                                                935,
                                                                150,
                                                                150,
                                                            ],
                                                            "title":"hotspot 1",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                    ],
                                                    "altUrl" : "", //source of image for if something toggles state
                                                },
                                            ], 
                                        },
                                        {
                                            "promptText" : "Task 3", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactable" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url" : "assets/media/images/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1230,
                                                                635,
                                                                150,
                                                                150,
                                                            ],
                                                            "title":"hotspot 1",
                                                            "body":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                    ],
                                                    "altUrl" : "", //source of image for if something toggles state
                                                },
                                            ], 
                                        }
                                    ]
                                },
                            ]
                        }
                    },
                    {
                        "id":"170",
                        "title":"Summary",
                        "temp":19,
                        "elo":0,
                        "narration_url":"Narration Url",
                        "narration_text":"Narration Text",
                        "content":{
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"url goes here",
                                        "alt":"alt goes here"
                                    },
                                    "narrations":[
                                        {
                                            "ementor_narration_url":"E-mentor Narration Url goes here",
                                            "ementor_narration_text":"E-mentor Narration Text goes here"
                                        }
                                    ]
                                }
                            ]
                        },
                        "graphic":{
                            "url":"url goes here",
                            "alt":"alt goes here"
                        }
                    }
                ]
            }
        ],
        "instructions":{
            "ins1":{
                "en":"Note: It could take approximately XX hours to complete this module and the associated assessment. However, you need not complete all in one work session. By using the Bookmark function to mark your place, you can exit at any time and return later to continue the course."
            },
            "ins3":{
                "tl":"Instruction or information text goes here.",
                "en":"Instruction or information text goes here."
            },
            "ins4":{
                "types":[
                    {
                        "tl":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ante et justo pretium, ac gravida nisl varius. Curabitur euismod facilisis lacus, sit amet tincidunt ante commodo ut.",
                        "en":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ante et justo pretium, ac gravida nisl varius. Curabitur euismod facilisis lacus, sit amet tincidunt ante commodo ut."
                    },
                    {
                        "tl":"ड्राप डाउन बॉक्सेज़ का उपयोग करके बाएं स्तंभ में दिए गए प्रत्येक शब्द को दाएं स्तंभ में दी गयीं परिभाषाओं से मिलायें।",
                        "en":"Use the dropdown boxes to match each term in the left column with its definition in the right column."
                    },
                    {
                        "tl":"ड्राप डाउन बॉक्सेज़ का उपयोग करके बाएं स्तंभ में दिए गए प्रत्येक शब्द को दाएं स्तंभ में दिए गए उनके पर्यायवाची शब्द से मिलायें।",
                        "en":"Use the dropdown boxes to match each term in the left column with its synonym in the right column."
                    },
                    {
                        "tl":"प्रत्येक वाक्य को पूरा करने के लिए ड्राप-डाउन मेन्यू से सही शब्द या वाक्यांश का चयन करें।",
                        "en":"Select the word or phrase from the dropdown menu to correctly complete each sentence."
                    }
                ]
            },
            "ins5":{
                "types":[
                    {
                        "tl":"पाठ की पुनः जांच करने के लिए “View Reading” बटन का चयन करें। प्रत्येक प्रश्न को पढ़ें और सबसे सही जवाब का चयन करें।",
                        "en":"Select the “View Reading” button to re-examine the text. Read each question and select the best answer(s)."
                    },
                    {
                        "tl":"मीडिया को देखने के लिए बटनों का उपयोग करें। प्रत्येक प्रश्न को पढ़ें और सबसे सही जवाब का चयन करें।",
                        "en":"Use the controls to review the media. Read each question and select the best answer(s)."
                    }
                ]
            },
            "ins6":{
                "types":[
                    {
                        "tl":"लेख में चर्चा किए गए विचारों के बीच संबंधों को व्यवस्थित करने के लिए इस अवधारणा मानचित्र को पूरा करें। पाठ को फिर से जांचने के लिए “View Reading” बटन का उपयोग करें।<ul><li>कॉलम में अवधारणाओं का समर्थन करने वाले एक उपयुक्त विचार का चयन करने के लिए प्रत्येक विषय के तहत “+ Add supporting idea” का चयन करें।</li><li>किसी सहायक विचार को हटाने या संशोधित करने के लिए, उसे चुनें, फिर आइकन से चुनें या तो हटाएं या अपना चयन बदलें या किसी भी परिवर्तन को रद्द करें।</li><li>एक बार जब आप अपना नक्शा पूरा कर लेते हैं, तो सुझाए गए समाधान के खिलाफ अपने नक्शे का मूल्यांकन करने के लिए “Compare” बटन का चयन करें। यदि आवश्यक हो, तो पाठ को फिर से जांचने के लिए “View Reading” बटन का उपयोग करें।</li></ul>",
                        "en":"Complete this concept map to organize the relationships among ideas discussed in the article. Use the “View Reading” button to re-examine the text.<br><ul><li>Select “+ Add supporting idea” under each topic to choose an appropriate idea which supports the concepts in the column.</li><li>To delete or modify a supporting idea, select it, then select from the icons to either delete or replace your selection or to cancel any changes.</li><li>Once you have completed your map, select the “Compare” button to evaluate your map against the suggested solution. If necessary, use the “View Reading” button to re-examine the text.</li><ul>"
                    },
                    {
                        "tl":"मीडिया को देखने के लिए बटनों का उपयोग करें। प्रत्येक वाक्य को पढ़ें और निर्धारित करें की वह वाक्य सही है या गलत।",
                        "en":"Complete this concept map to organize the relationships between ideas discussed in the audio/video.  Select the â€œ+â€ symbol under each topic covered to choose an appropriate supporting idea. To delete or modify a supporting idea, select it, then select from the icons to either delete or modify your selection or to cancel any changes.  Select the â€œCompareâ€ button to evaluate your map against the suggested solution.   Use the â€œView Mediaâ€ button to re-examine the audio/video."
                    }
                ]
            },
            "ins7":{
                "types":[
                    {
                        "tl":"पाठ की पुनः जांच करने के लिए “View Reading” बटन का चयन करें। प्रश्न को पढ़ें, और दिए गए स्थान पर अपना उत्तर हिंदी में दें। अपने उत्तर को जांचने के लिए “Compare Answer” बटन का उपयोग करें।",
                        "en":"Select the “View Reading” button to re-examine the text. Read the question. Type your answer in Hindi in the box provided. Then select “Compare Answer” to evaluate your answer."
                    },
                    {
                        "tl":"मीडिया को देखने के लिए बटनों का उपयोग करें। प्रश्न को पढ़ें, और दिए गए स्थान पर अपना उत्तर हिंदी में दें। अपने उत्तर को जांचने के लिए “Compare Answer” बटन का उपयोग करें।",
                        "en":"Use the controls to review the media. Read the question. Type your answer in Hindi in the box provided. Then select “Compare Answer“ to check your answer."
                    }
                ]
            },
            "ins8":{
                "tl":"वीडियो को देखने के लिए बटनों का उपयोग करें। वीडियो देखने के बाद उस से सम्बंधित दिए गए कार्यों को पूरा कीजिये।",
                "en":"Use the controls to watch the video. When you are finished, continue to complete a series of activities related to the material."
            },
            "ins9":{
                "tl":"मीडिया क्लिप को देखने के लिए बटनों का उपयोग करें। अनुच्छेद को पूरा करने के लिए ड्राप-डाउन मेन्यू से सही शब्दों या वाक्यांशों का चयन करें|",
                "en":"Use the controls to review the media clip. Select the correct words/phrases from the dropdown menu to complete the paragraph.\t"
            },
            "ins10":{
                "types":[
                    {
                        "tl":"पाठ की पुनः जांच करने के लिए “View Reading” बटन का चयन करें। प्रत्येक वाक्य को पढ़ें और निर्धारित करें की वह वाक्य सही है या गलत।",
                        "en":"Select the “View Reading” button to re-examine the text. Read each statement and determine whether it is true or false.\t"
                    },
                    {
                        "tl":"मीडिया को देखने के लिए बटनों का उपयोग करें। प्रत्येक वाक्य को पढ़ें और निर्धारित करें की वह वाक्य सही है या गलत।",
                        "en":"Use the controls to review the media. Read each statement and determine whether it is true or false."
                    }
                ]
            },
            "ins11":{
                "tl":"TEST TL",
                "en":"This practical exercise provides an opportunity for you to apply terms and concepts introduced in this section of the course, in the context of a scenario relevant to the module topic. The exercise may take up to 30 - 45 minutes to complete. If you need to exit before completing it, your progress will be saved so you can resume where you left off.<br><br>After launching this exercise, you will be able to access exercise Help. Please review the Help information if you have not already done so. It includes instructions on how to navigate within the 3D interactive environment in the first phase of the exercise. You can also access Help again as needed while completing exercise activities.<br><br>The exercise will function as intended on common desktop/laptop web browsers including Chrome, Safari, Firefox, and Edge; Internet Explorer (IE v11 or previous) is not supported. If you are currently using IE, please exit the course now and re-open it one of the supported browsers. You will be able to resume from the screen where you exited.<br><br>Select <strong>Launch PE</strong> to begin this exercise."
            },
            "ins12":{
                "tl":"You are now able to:",
                "en":"You are now able to:"
            },
            "ins13":{
                "en":"To access the enrichment materials, select “View Materials” below. You will be redirected to the listings."
            }
        },
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
                "0070":0
            },
            {
                "0080":0
            },
            {
                "0090":{
                    "c":0,
                    "p":[
                        {
                            "0100":0,
                            "0110":0,
                            "0120":0,
                            "0130":0,
                            "0140":0
                        },
                        {
                            "0150":0,
                            "0160":0,
                            "0170":0
                        },
                        {
                            "0180":0,
                            "0190":0,
                            "0200":0,
                            "0210":0,
                            "0220":0,
                            "0230":0,
                            "0240":0,
                            "0250":0,
                            "0260":0,
                            "0270":0,
                            "0280":0,
                            "0290":0,
                            "0300":0,
                            "0310":0,
                            "0320":0,
                            "0330":0,
                            "0340":0,
                            "0350":0,
                            "0360":0,
                            "0370":0,
                            "0380":0,
                            "0390":0
                        },
                        {
                            "0400":{
                                "c":0,
                                "p":{
                                    "0410":0,
                                    "0420":0
                                }
                            },
                            "0430":0,
                            "0440":0
                        }
                    ]
                }
            },
            {
                "0450":0
            }
        ]
    }
};
// define lesson name
var imiName = "92F10-" + modJSON.module;
// store lesson data locally
if(sessionStorage){
  sessionStorage.setItem(imiName, JSON.stringify(modJSON));
  modJSON = null;
} else {
  // lesson data will just stay as modJSON
}
