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
        "id":"B04",
        "title": "Railcar and Depot, and Truck Stand Transfer Operations"
    },
    "content":{
        "sections":[
            {
                "title":"Operate Rail Tank Car",
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
                                "url":"assets/media/narration/B04_0010.mp3",
                                "text":"Welcome to the next lesson in the Petroleum Supply Specialist online training."
                            }
                        ],
                        "content":{
                            "title_text": "Railcar and Depot, and Truck Stand Transfer Operations",
                            "title_background": "assets/media/images/B-04/B04_0020_01.jpg",
                            "images":[
                                {
                                    "url":"assets/media/images/B-04/B04_0010_01.png",
                                    "alt":"Image of a tank rail car"
                                },
                                {
                                    "url":"assets/media/images/B-04/B04_0010_02.png",
                                    "alt":"Image of a storage tank"
                                }
                            ]
                        }
                    },
                    {
                        "id":"0020",
                        "title":"Introduction",
                        "temp":2,
                        "elo":0,
                        "layout":"half-horizontal",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0020.mp3",
                                "text":"The military’s ability to move and fight depends upon its supply of fuel. When rail facilities are available, tank cars may be used along with the pipeline to transport petroleum products. Any interruption in the flow of fuel could have a devastating effect on the military’s ability to dominate the conflict."
                            }
                        ],
                        "content":{
                            "instruction": "Select each button to view relevant information prior to starting the course content. When you have viewed all required information, select the BEGIN MISSION button in the lower right-hand corner to begin.",
                            "complete_text": "Select the BEGIN MISSION button in the lower right-hand corner to begin.",
                            "images":[
                                {
                                    "url":"assets/media/images/B-04/B04_0020_01.jpg",
                                    "alt":"Image of rail tank car at petroleum training facility"
                                }
                            ],
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
                                                        "url":"assets/media/images/B-04/B04_0030_01.png",
                                                        "alt":"Image of the dome of a tank rail car"
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
                                                        "url":"assets/media/images/B-04/B04_0010_01.png",
                                                        "alt":"tender vessel"
                                                    },
                                                    "title":"Enabling Learning Objective",
                                                    "description":"Operate Rail Tank Car",
                                                    "action":"Operate Rail Tank Car.",
                                                    "conditions":"Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction, with consideration for the operational environment, IAW ATP 4-43, givenmultimedia instruction, virtual rail tank car, pump, fuel source, safety equipment, safety requirements, environmental considerations, checklist, and practical exercise.",
                                                    "standard":"Conduct service procedures for a rail tank car accurately and completely, adhering to all safety procedures, without damage to equipment or injury to personnel."
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0040",
                                        "title":"Learning Step Activities",
                                        "temp":6,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0040.mp3",
                                                "text":"Please take a moment to review the learning steps for this training."
                                            }
                                        ],
                                        "branching":"0020",
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0040_01.png",
                                                "alt":"image of tank car lower outlet connected to hose via elbow"
                                            },
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
                                                    "url":"assets/media/images/B-04/B04_0040_01.png",
                                                    "alt":"Image of tank car lower outlet connected to hose via elbow."
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
                                                        "Aisles are to kept clear for hasty exits.",
                                                        "Identify and point out primary and alternative fire exits.",
                                                        "Observe all routine safety procedures.",
                                                        "Observe all applicable environmental considerations.",
                                                        "In the event of a fire, exit the classroom from the nearest exit.",
                                                        "Proceed to the parking lot outside and hold a formation.",
                                                        "The class president or their representative will take attendance and report to the instructor.",
                                                        "Do not enter the building until told to do so by an instructor."
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
                                                "url":"assets/media/narration/B04_0060.mp3",
                                                "text":[
                                                    "This training is assigned a risk level of low.",
                                                    "Whenever you are performing a petroleum operation you are required to use a drip pan under any equipment that could develop a leak. If a leak occurs, it will be cleaned up immediately. The spill will be reported to the first instructor seen. The spill will be cleaned in accordance with the division spill contingency plan."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0060_01.png",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
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
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":"0070",
                        "title":"Scenario",
                        "temp":6,
                        "elo":0,
                        "layout":"full",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0070.mp3",
                                "text":[
                                    "You and your unit have been deployed and tasked with operating a terminal in a friendly nation. Today, you will be preparing the site to receive rail tank cars."
                                ]
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-04/B04_0100_01.png",
                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                            },
                            "text_elements":[
                                {
                                    "tag":"h6",
                                    "content":"Scenario"
                                },
                                {
                                    "tag":"p",
                                    "content": "You and your unit have been deployed and tasked with operating a terminal in a friendly nation. Today, you will be preparing the site to receive rail tank cars."
                                }
                            ]
                        }
                    },
                    {
                        "id":"0080",
                        "title":"Mission Brief",
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
                            "background": {
                                "url":"assets/media/images/B-04/B04_0100_01.png",
                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                            },
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor.jpg",
                                        "alt":"Female Ementor"
                                    },
                                    "text": [
                                        {
                                            "tag":"p",
                                            "content":"We’ve got a lot of ground to cover today. We will be preparing the site for arriving rail cars and performing loading and unloading operations. Are you ready to get started?"
                                        },
                                    ] 
                                }
                            ],
                            "response":{
                                "title":"Ready to Go!",
                                "location":"0090"
                            },
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
                        "title":"LSA Menu",
                        "temp":2.2,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0090_Incomplete.mp3",
                                "text":"Select a topic area."
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-04/B04_0020_01.jpg",
                                "alt":"alt goes here"
                            },
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor.jpg",
                                        "alt":"This guy looks like he would steal from his mother"
                                    },
                                    "text": [
                                        {
                                            "tag":"p",
                                            "content":"We will be preparing the site for arriving rail cars and performing loading and unloading operations",
                                            "timing": 0
                                        }
                                    ] 
                                }
                            ],
                            "instruction": "Select a topic area.",
                            "text":"Select a topic area.",
                            "complete_text": "Congratulations, you have completed the core segments of this training and earned enough coins to proceed to the final mission. Select the button to begin.",
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
                                }
                            ],
                            "trigger_button":{
                                "title":"Summary",
                                "location":"0450"
                            }
                        },
                        "sections": [
                            {
                                "title":"Identify Tank Car Components",
                                "id":"0090-0",
                                "pages":[
                                    {
                                        "id":"0100",
                                        "title":"LSA 1 Page 1",
                                        "temp":4,
                                        "elo":0,
                                        "layout":"third-bottom",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0100.mp3",
                                                "text":[
                                                    "Tank cars vary in capacity and design. A tank car is a cylindrical metal tank mounted on an under frame. This frame is fitted with axles and wheels and runs on railroad rails. The tank cars used for petroleum products range in capacity from 6,000 to 16,000 gallons. Some cars may have more than one compartment to carry more than one type of product. They are mainly used for land transportation of finished products where pipelines or waterways do not exist."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-04/B04_0100_01.png",
                                                    "alt":"A Tank Car"
                                                }
                                            ],
                                            "text_elements":[
                                                {
                                                    "tag":"ul",
                                                    "content":[
                                                        "Capacity: 6,000 to 16,000 gallons",
                                                        "Some cars will have multiple compartments to carry multiple products",
                                                        "Used to transport finished products where pipelines or waterways do not exist"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0110",
                                        "title":"LSA 1 Page 2",
                                        "temp":7.1,
                                        "elo":0,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0110.mp3",
                                                "text":" Please read over the safety requirements for this training."
                                            }
                                        ],
                                        "layout":"third-left",
                                        "content":{
                                            "text_elements":[
                                                {
                                                    "tag":"p",
                                                    "content":"Use the arrows to scroll through the images."
                                                },
                                            ],
                                            "slides":[
                                                {
                                                    "url":"assets/media/images/B-04/B04_0110_04.png",
                                                    "alt":"Dome",
                                                    "title":"Dome",
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0110_01.mp3",
                                                            "text":[
                                                                "Each tank car has a dome to allow space for product expansion. The dome has a manhole where the tank compartment may be loaded, unloaded, inspected, cleaned and repaired. The dome also permits the tank car to be filled to full-shell capacity.",
                                                                "The dome cover may be hinged and bolted on or screwed on. Most domes have vents and safety valves to let out vapors."
                                                            ]
                                                        }
                                                    ],
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Each tank car has a dome to allow space for product expansion.",
                                                                "Domes have manholes so the tank compartment may be loaded, unloaded, inspected, cleaned, and repaired.",
                                                                "Domes also permit tank cars to be filled to full-shell capacity.",
                                                                "Dome covers may be hinged and bolted on or screwed on."
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0110_01.png",
                                                    "alt":"Shell",
                                                    "title":"Shell",
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0110_02.mp3",
                                                            "text":"The tank car shell is the actual tank compartment where the fuel is held."
                                                        }
                                                    ],
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Tank car shell is the actual tank compartment where fuel is held."
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0110_02.png",
                                                    "alt":"Bottom Outlet",
                                                    "title":"Bottom Outlet",
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0110_03.mp3",
                                                            "text":"Each tank car has a bottom outlet and is usually loaded and unloaded through it. The outlet valve is controlled by a valve rod handle or valve rod hand wheel. The outlets on cars used in the U.S. are five inches in diameter, while cars used overseas are generally four inches in diameter. All outlets have male threads. A tank car elbow assembly is used to adapt a pump suction line to the five-inch outlet. A five-inch to four-inch adapter, called a Gossler Coupling, must be installed between the elbow assembly and the tank car five-inch outlet."
                                                        }
                                                    ],
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Used to load and unload product from the tank car.","Controlled by a valve rod handle or valve rod hand wheel","U.S. cars have a 5-inch diameter outlet; Overseas cars generally have a 4-inch outlet",
                                                                "Use a Gossler Coupler to adapt from 5-inch to 4-inch"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0110_03.png",
                                                    "alt":"Safety Valve",
                                                    "title":"Safety Valve",
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0110_04.mp3",
                                                            "text":"The safety valve used on most tank cars consists of a spring-loaded poppet valve which opens at a preset pressure. As pressure in the dome builds up to a point above the pressure setting of the valve, the valve is forced off the valve seat. This lets the excess vapors escape. The spring closes the valve automatically when the pressure drops to a level equal with the valve setting."
                                                        }
                                                    ],
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "A preset pressure relief valve that allows excessive pressure to escape",
                                                                "As pressure builds past pressure setting, the valve is forced off the valve seat, allowing vapor to escape",
                                                                "When the pressure drops to a level equal to the valve setting, the valve closes"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0120",
                                        "title":"LSA 1 Page 3",
                                        "temp":19,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0120.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
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
                                                            "content":"Which of these components allows for expansion of the product in the tank rail car? Select the best answer to the question. Then, select Submit."
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "text":"",
                                            "options":[
                                                {
                                                    "url":"assets/media/images/B-04/B04_0110_04.png",
                                                    "alt":"Dome",
                                                    "answer":true
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0110_01.png",
                                                    "alt":"Shell",
                                                    "answer":false
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0110_02.png",
                                                    "alt":"Bottom Outlet",
                                                    "answer":false
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0110_03.png",
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
                                        "title":"LSA 1 Page 4",
                                        "temp":21.1,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0130.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content": {
                                            "image":{
                                                "url":"assets/media/images/B-04/B04_0130.png",
                                                "alt":"MV Wheeler-Multi-Mission Vessel"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Select the best answer to the question. Then, select Submit."
                                                        },
                                                    ] 
                                                }
                                            ],
                                            "questions": [
                                                {
                                                    "type": "tf",
                                                    "prompt": "Fort Lee, Virginia",
                                                    "options":["Gossler Coupling", "Standard Coupling"],
                                                    "label": "Location:",
                                                    "shape":"circle",
                                                    "coords":[
                                                        600,
                                                        440,
                                                        80,
                                                        80
                                                    ],
                                                    "answer": 1
                                                },
                                                {
                                                    "type": "tf",
                                                    "prompt": "USAG Ansbach, Germany",
                                                    "options":["Gossler Coupling", "Standard Coupling"],
                                                    "label": "Location:",
                                                    "shape":"circle",
                                                    "coords":[
                                                        900,
                                                        420,
                                                        80,
                                                        80
                                                    ],
                                                    "answer": 0
                                                },
                                                {
                                                    "type": "tf",
                                                    "prompt": "Fort Sill, Oklahoma",
                                                    "options":["Gossler Coupling", "Standard Coupling"],
                                                    "label": "Location:",
                                                    "shape":"circle",
                                                    "coords":[
                                                        520,
                                                        460,
                                                        80,
                                                        80
                                                    ],
                                                    "answer": 1
                                                },
                                                {
                                                    "type": "tf",
                                                    "prompt": "USAG Humphreys, SK",
                                                    "options":["Gossler Coupling", "Standard Coupling"],
                                                    "label": "Location:",
                                                    "shape":"circle",
                                                    "coords":[
                                                        1420,
                                                        320,
                                                        80,
                                                        80
                                                    ],
                                                    "answer": 0
                                                },
                                                {
                                                    "type": "tf",
                                                    "prompt": "Fort Bliss, TX",
                                                    "options":["Gossler Coupling", "Standard Coupling"],
                                                    "label": "Location:",
                                                    "shape":"circle",
                                                    "coords":[
                                                        440,
                                                        460,
                                                        80,
                                                        80
                                                    ],
                                                    "answer": 1
                                                },
                                            ],
                                            "correct":"Nice job!",
                                            "incorrect":"This answer is incorrect.",
                                            "feedback": "You got X out of 5 right."
                                        }
                                    },
                                    {
                                        "id":"0140",
                                        "title":"LSA 1 Page 5",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "achievement": true,
                                        "branching":"0090",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0140.mp3",
                                                "text":[
                                                    "That concludes our identification of tank car components. Select on the Return button to see what other sections remain for you to complete."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0100_01.png",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"That concludes our identification of tank car components. Select on the Return button to see what other sections remain for you to complete."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    }
                                ]
                            },
                            {
                                "title":"Discuss Site Loading and Unloading Considerations and Procedures",
                                "id":"0090-1",
                                "pages":[
                                    {
                                        "id":"0150",
                                        "title":"LSA 2 Page 1",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0150.mp3",
                                                "text":"Select on each of the icons below to learn more."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on each of the icons below to learn more.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                    "alt":"alt goes here"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            15,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"When loading or unloading tank cars, you will need a spur track or a bypass railroad line."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0150_01.mp3",
                                                                "text":"When loading or unloading tank cars, you will need a spur track or a bypass railroad line."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            150,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Select a level track so the product will be an even depth throughout the tank car compartments."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0150_02.mp3",
                                                                "text":"Select a level track so the product will be an even depth throughout the tank car compartments."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            285,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "The optimal site will be at least 100 feet from any building and have adequate drainage."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0150_03.mp3",
                                                                "text":"The optimal site will be at least 100 feet from any building and have adequate drainage."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            420,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"To unload a tank car by gravity, select a site that is elevated to produce positive flow at the receiving point."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0150_04.mp3",
                                                                "text":"To unload a tank car by gravity, select a site that is elevated to produce positive flow at the receiving point."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            555,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 5",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"If loading tank cars by gravity is necessary, choose a site lower than the source."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0150_05.mp3",
                                                                "text":"If loading tank cars by gravity is necessary, choose a site lower than the source."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            690,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 6",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Whenever possible, ensure you have two radios on hand."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0150_06.mp3",
                                                                "text":"Whenever possible, ensure you have two radios on hand."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            825,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 7",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"US tank cars bottom loading point is 5 inches in diameter, and overseas has a 4-inch diameter bottom loading point."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0150_07.mp3",
                                                                "text":"Select on each of the icons below to learn more."
                                                            }
                                                        ],
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0160",
                                        "title":"LSA 2 Page 2",
                                        "temp":15.1,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0160.mp3",
                                                "text":"This rail tank car is going to need to be unloaded by gravity. Which of the three tanks would you do to accomplish this? Select the correct tank by selecting it."
                                            }
                                        ],
                                        "content":{
                                            "image": {
                                                "url":"assets/media/images/B-04/B04_0160_01.jpg",
                                                "alt":"alt goes here"
                                            },
                                            "prompt":"Which of the following has the primary use of carrying items such as CONEXES and other palletized cargo?",
                                            "options":[
                                                {
                                                    "text":"Storage Tank 1",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"Storage Tank 2",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Storage Tank 3",
                                                    "answer": false
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is the lowest tank can be used.",
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
                                        "id":"0170",
                                        "title":"LSA 2 Page 3",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "achievement": true,
                                        "branching":"0090",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0170.mp3",
                                                "text":[
                                                    "That concludes our discussion of Site Loading and Unloading considerations. Select on the Return button to see what other sections remain for you to complete."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"That concludes our discussion of Site Loading and Unloading considerations. Select on the Return button to see what other sections remain for you to complete."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    }
                                ]
                            },
                            {
                                "title":"Review Loading and Unloading Operations",
                                "id":"0090-2",
                                "pages":[
                                    {
                                        "id":"0180",
                                        "title":"LSA 3 Page 1",
                                        "temp":19.1,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0180.mp3",
                                                "text":[
                                                    "We will begin by preparing the rail tank car for bottom loading. Before beginning the loading operation, you must first ensure that all equipment is properly bonded and grounded. Attach a permanent bonding and ground-cable between the track rails and ground.",
                                                    "If you are using a loading rack, ensure the rack has a grounding cable attached to the ground permanently. Always attach the bonding cable from the loading tube or hose to the shell for proper bonding, while ensuring metal to metal contact at all times.",
                                                    "In each of the examples, select on the two points to deploy the grounding cables."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female eMentor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"In each of the examples, select on the two points to deploy the grounding cables."
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "instructions":"In each of the examples, select on the two points to deploy the grounding cables.",
                                            "options":[
                                                {
                                                    "url":"assets/media/images/B-04/B04_0180_01.png",
                                                    "alt":"Dome",
                                                    "answer":true,
                                                    "hotspots": [
                                                        {
                                                            "shape":"circle",
                                                            "coords":[
                                                                95,
                                                                850,
                                                                120,
                                                                120
                                                            ]
                                                        },
                                                        {
                                                            "shape":"circle",
                                                            "coords":[
                                                                1650,
                                                                850,
                                                                120,
                                                                120
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0180_02.png",
                                                    "alt":"Shell",
                                                    "answer":false,
                                                    "hotspots": [
                                                        {
                                                            "shape":"circle",
                                                            "coords":[
                                                                1095,
                                                                285,
                                                                120,
                                                                120
                                                            ]
                                                        },
                                                        {
                                                            "shape":"circle",
                                                            "coords":[
                                                                365,
                                                                790,
                                                                120,
                                                                120
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0180_03.png",
                                                    "alt":"Bottom Outlet",
                                                    "answer":false,
                                                    "hotspots": [
                                                        {
                                                            "shape":"circle",
                                                            "coords":[
                                                                1210,
                                                                880,
                                                                120,
                                                                120
                                                            ]
                                                        },
                                                        {
                                                            "shape":"circle",
                                                            "coords":[
                                                                595,
                                                                360,
                                                                120,
                                                                120
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-04/B04_0180_04.png",
                                                    "alt":"Safety Valve",
                                                    "answer":false,
                                                    "hotspots": [
                                                        {
                                                            "shape":"circle",
                                                            "coords":[
                                                                425,
                                                                820,
                                                                120,
                                                                120
                                                            ]
                                                        },
                                                        {
                                                            "shape":"circle",
                                                            "coords":[
                                                                1305,
                                                                185,
                                                                120,
                                                                120
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is Lighter Amphibious Resupply Cargo (LARC)"
                                        }
                                    },
                                    {
                                        "id":"0190",
                                        "title":"LSA 3 Page 2",
                                        "temp":15,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0190.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"alt goes here"
                                            },
                                            "prompt":"If you are using a loading rack, which of the following pairs would you NOT attach grounding and bonding wires?",
                                            "options":[
                                                {
                                                    "text":"Track to Ground",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Rack to Pump",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"Track to Track",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Rack to Shell",
                                                    "answer":false
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is Rack to Pump.",
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
                                        "id":"0200",
                                        "title":"LSA 3 Page 3",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0200.mp3",
                                                "text":"Select on each of the icons below to learn more."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on each of the icons below to learn more.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0200_01.png",
                                                    "alt":"alt goes here"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            15,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Place two carbon dioxide fire extinguishers within five to ten feet of the activity."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0200_01.mp3",
                                                                "text":"Place two carbon dioxide fire extinguishers within five to ten feet of the activity."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            150,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Set the hand brake and chock the tank car wheels."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0200_02.mp3",
                                                                "text":"Set the hand brake and chock the tank car wheels."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            285,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "Place signs reading ‘tank car connected’ at least 25 feet ahead and behind of the tank cars. A distance of 50 feet is preferred, but 25 is the minimum."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0200_03.mp3",
                                                                "text":"Place signs reading ‘tank car connected’ at least 25 feet ahead and behind of the tank cars. A distance of 50 feet is preferred, but 25 is the minimum."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            420,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Ground yourself by placing a hand on the shell of the tank or by holding the rack ladder."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0200_04.mp3",
                                                                "text":"Ground yourself by placing a hand on the shell of the tank or by holding the rack ladder."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0210",
                                        "title":"LSA 3 Page 4",
                                        "temp":17,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0210.mp3",
                                                "text":"Select on each of the icons below to learn more."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on each of the icons below to learn more.",
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Select each of the buttons below as we continue preparing the site for bottom loading.",
                                                            "timing": 0
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "correct": "Congratulations!",
                                            "feedback": "Incorrect. Place the warning signs and fire extinguishers in their required places.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0210_01.png",
                                                    "alt":"alt goes here"
                                                },
                                                "droppables":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            140,
                                                            585,
                                                            220,
                                                            220
                                                        ],
                                                        "image_size":[
                                                            150,
                                                            150,
                                                            -83
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1525,
                                                            575,
                                                            220,
                                                            220
                                                        ],
                                                        "image_size":[
                                                            150,
                                                            150,
                                                            -83
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            245,
                                                            685,
                                                            220,
                                                            220
                                                        ],
                                                        "image_size":[
                                                            150,
                                                            150,
                                                            -83
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1437,
                                                            685,
                                                            220,
                                                            220
                                                        ],
                                                        "image_size":[
                                                            150,
                                                            150,
                                                            -83
                                                        ]
                                                    }
                                                ],
                                                "draggables":[
                                                    {
                                                        "title": "this is draggable 2",
                                                        "url": "assets/media/images/B-04/B04_0210_04.png"
                                                    },
                                                    {
                                                        "title": "this is draggable 3",
                                                        "url": "assets/media/images/B-04/B04_0210_04.png"
                                                    },
                                                    {
                                                        "title": "this is draggable 4",
                                                        "url": "assets/media/images/B-04/B04_0210_03.png"
                                                    },
                                                    {
                                                        "title": "this is draggable 4",
                                                        "url": "assets/media/images/B-04/B04_0210_03.png"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0220",
                                        "title":"LSA 3 Page 5",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0220.mp3",
                                                "text":"Select on each of the icons below to learn more."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on each of the icons below to learn more.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0220_01.png",
                                                    "alt":"alt goes here"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            15,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Clean all dirt from around the opening."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0220_01.mp3",
                                                                "text":"Clean all dirt from around the opening."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            150,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Raise the safety valve to release internal pressure. Open the dome cover by standing on the windward side of the dome."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0220_02.mp3",
                                                                "text":"Raise the safety valve to release internal pressure. Open the dome cover by standing on the windward side of the dome."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            285,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "If you are working with a tank car with a screw-type cover, place a bar between the cover lug and the dome knob and unscrew the cover two complete turns or until the vent opens."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0220_03.mp3",
                                                                "text":"If you are working with a tank car with a screw-type cover, place a bar between the cover lug and the dome knob and unscrew the cover two complete turns or until the vent opens."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            420,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"If you have a tank with a hinge-and-bolt cover, loosen the nuts enough to let out the pressure."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0220_04.mp3",
                                                                "text":"If you have a tank with a hinge-and-bolt cover, loosen the nuts enough to let out the pressure."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0230",
                                        "title":"LSA 3 Page 6",
                                        "temp":6.1,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0230.mp3",
                                                "text":"As stated earlier, the size of the loading point differs between domestic tank cars produced in CONUS and tank cars in use overseas. A Gossler coupler adapter is needed to allow a tank car to be connected at any North Atlantic Treaty Organization (NATO) facility for loading and unloading purposes."
                                            }
                                        ],
                                        "content":{
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-04/B04_0230_01.png",
                                                    "alt":"An assembled Gossler coupler adapter."
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0240",
                                        "title":"LSA 3 Page 7",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0240.mp3",
                                                "text":"Select on each of the icons below to learn more."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on each of the icons below to learn more.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0240_01.png",
                                                    "alt":"Diagram of Bottom Outlet Loading Procedure"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            820,
                                                            300,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Make sure the outlet valve is seated before removing the bottom cap. Remove cap with tank car wrench and let any product in the outlet chamber drain into spill container. Open outlet valve to drain any residual product into the tub, then close the valve, but do not replace the cap until the car is fully loaded."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0240_01.mp3",
                                                                "text":"Make sure the outlet valve is seated before removing the bottom cap. Remove cap with tank car wrench and let any product in the outlet chamber drain into spill container. Open outlet valve to drain any residual product into the tub, then close the valve, but do not replace the cap until the car is fully loaded."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            510,
                                                            710,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Place a pumping unit at least 50 feet from the tank car"
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0240_02.mp3",
                                                                "text":"Place a pumping unit at least 50 feet from the tank car"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            640,
                                                            320,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "Make sure the pumping unit is properly grounded."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0240_03.mp3",
                                                                "text":"Make sure the pumping unit is properly grounded."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            60,
                                                            780,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Make sure that the storage tank is properly grounded and vented."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0240_04.mp3",
                                                                "text":"Make sure that the storage tank is properly grounded and vented."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            320,
                                                            870,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 5",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Make sure the hoseline connections are not laid on the ground without a dust cap or plug."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0240_05.mp3",
                                                                "text":"Make sure the hoseline connections are not laid on the ground without a dust cap or plug."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            150,
                                                            950,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 6",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Connect the pump suction line to the outlet of the storage tank."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0240_06.mp3",
                                                                "text":"Connect the pump suction line to the outlet of the storage tank."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            995,
                                                            260,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 7",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Attach the tank car elbow or Gossler coupling to the tank car outlet. Connect the pump discharge hose to either the elbow or coupling."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0240_07.mp3",
                                                                "text":"Attach the tank car elbow or Gossler coupling to the tank car outlet. Connect the pump discharge hose to either the elbow or coupling."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0250",
                                        "title":"LSA 3 Page 8",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0250.mp3",
                                                "text":"Select on the buttons to continue stepping through the precautions and procedures for loading a tank car through the bottom outlet."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on the buttons to continue stepping through the precautions and procedures for loading a tank car through the bottom outlet.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0250_01.png",
                                                    "alt":"Diagram of Bottom Outlet Loading Procedure"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            820,
                                                            120,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Station someone on the windward side of the dome to signal when the full mark is reached."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0250_01.mp3",
                                                                "text":"Station someone on the windward side of the dome to signal when the full mark is reached."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            15,
                                                            945,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Open outlet valve of the storage tank."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0250_02.mp3",
                                                                "text":"Open outlet valve of the storage tank."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            220,
                                                            490,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "Open any pump valves necessary to permit flow through the pump."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0250_03.mp3",
                                                                "text":"Open any pump valves necessary to permit flow through the pump."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            990,
                                                            310,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Open tank car bottom outlet valve."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0250_04.mp3",
                                                                "text":"Open tank car bottom outlet valve."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            745,
                                                            945,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 5",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Open manifold valves, when a manifold is used."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0250_05.mp3",
                                                                "text":"Open manifold valves, when a manifold is used."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            500,
                                                            600,
                                                            100,
                                                            100
                                                        ],
                                                        "title":"Step 6",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Start the pump."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0250_06.mp3",
                                                                "text":"Start the pump."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0260",
                                        "title":"LSA 3 Page 9",
                                        "temp":11,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0260.mp3",
                                                "text":"While conducting loading procedures, be aware of the following potential issues. Use the arrows to examine these possible situations."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"While conducting loading procedures, be aware of the following potential issues. Use the arrows to examine these possible situations.",
                                            "items":[
                                                {
                                                    "shape":"circle",
                                                    "title":"Spills",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0260_01.png",
                                                        "alt": "hourglass"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Stop pump",
                                                                "Cover area with blanket of foam from a foam fire extinguisher",
                                                                "If there is no foam extinguisher in the area, cover the spill with sand or dry earth",
                                                                "Remove contaminated earth and dispose of it according to current regulations"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Sparks",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0260_02.png",
                                                        "alt": "Guaging"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Stop pumps at once",
                                                                "Check all bonding and grounding connections for bare metal-to-metal contact",
                                                                "If no bad connection found, check the power equipment in the area for stray current. Correct any faulty condition"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Enemy Attack, Electrical Storm, Site Fire",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0260_03.png",
                                                        "alt": "Draining Water"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Stop transfer operation",
                                                                "Disconnect pump discharge hose and tank car elbow",
                                                                "Replace bottom outlet",
                                                                "If time permits, move tank car out of the danger zone, set brakes, and ground the car"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Dome Fire",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0260_04.png",
                                                        "alt": "Paperwork"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "If hinged dome, stop loading and close the dome",
                                                                "If screw dome, throw a wet tarpaulin or blanket over the dome or use a carbon dioxide or foam fire extinguisher"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Miscellaneous",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0260_05.png",
                                                        "alt": "Dome"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"If the loading operation must be stopped for any reason, disconnect the pump discharge hose."
                                                        }
                                                    ]
                                                }
                                            ] 
                                        }
                                    },
                                    {
                                        "id":"0270",
                                        "title":"LSA 3 Page 10",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0270.mp3",
                                                "text":[
                                                    "As we continue the loading operation, check the contents of the tank often to avoid overfilling. However, never put your head in the dome."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"As we continue the loading operation, check the contents of the tank often to avoid overfilling. However, never put your head in the dome."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    },
                                    {
                                        "id":"0280",
                                        "title":"LSA 3 Page 11",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0280.mp3",
                                                "text":[
                                                    "Continuing the loading operation. When the product level is near the full mark in the tank car, the spotter should signal the pump operator to reduce pump speed and get ready to stop the pump. When a loading system that has a control valve is used, reduce the product flow by partially closing the valve. If the tank does not have a full mark, load the tank until the product reaches the top of the shell. When the tank is full, stop the pump, close the valves and disconnect the pump discharge hose."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Continuing the loading operation. When the product level is near the full mark in the tank car, the spotter should signal the pump operator to reduce pump speed and get ready to stop the pump. When a loading system that has a control valve is used, reduce the product flow by partially closing the valve. If the tank does not have a full mark, load the tank until the product reaches the top of the shell. When the tank is full, stop the pump, close the valves and disconnect the pump discharge hose."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    },
                                    {
                                        "id":"0290",
                                        "title":"LSA 3 Page 12",
                                        "temp":14,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0290.mp3",
                                                "text":"Drag the soldier to the proper position for spotting the fuel level inside of the rail tank car."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select the correct area the proper position for spotting the fuel level inside of the rail tank car.",
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Select the correct area the proper position for spotting the fuel level inside of the rail tank car.",
                                                            "timing": 0
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "correct": "That’s right!",
                                            "incorrect": "That is not quite right. Try again.",
                                            "feedback": "Still not right. The spotter should be positioned atop the tank car to the windward side of the dome.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0290_01.png",
                                                    "alt":"Diagram of Bottom Outlet Loading Procedure"
                                                },
                                                "correctImage":{
                                                    "url":"assets/media/images/B-04/B04_0290_02.png",
                                                    "alt":"Diagram of Bottom Outlet Loading Procedure"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            430,
                                                            440,
                                                            100,
                                                            100
                                                        ],
                                                        "answer": false
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            910,
                                                            150,
                                                            100,
                                                            100
                                                        ],
                                                        "answer": true
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1000,
                                                            440,
                                                            100,
                                                            100
                                                        ],
                                                        "answer": false
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1520,
                                                            600,
                                                            100,
                                                            100
                                                        ],
                                                        "answer": false
                                                    },
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0300",
                                        "title":"LSA 3 Page 13",
                                        "temp":11,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0300.mp3",
                                                "text":"Select on each of the icons below to learn more."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on each of the icons below to learn more.",
                                            "items":[
                                                {
                                                    "shape":"circle",
                                                    "title":"Time",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0300_01.png",
                                                        "alt": "hourglass"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Allow the product to stand for at least 15 minutes so suspended water or sediment can settle."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0300_01.mp3",
                                                            "text":"Allow the product to stand for at least 15 minutes so suspended water or sediment can settle."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Guaging",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0300_02.png",
                                                        "alt": "Guaging"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Gauge and sample the contents of the tank. Take the temperature of the product, volume correct the quantity, and record the data. Keep the sample for reference until the tank is delivered."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0300_02.mp3",
                                                            "text":"Gauge and sample the contents of the tank. Take the temperature of the product, volume correct the quantity, and record the data. Keep the sample for reference until the tank is delivered."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Draining Water",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0300_03.png",
                                                        "alt": "Draining Water"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content": "Drain any water or sediment from the tank."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0300_03.mp3",
                                                            "text":"Drain any water or sediment from the tank."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Paperwork",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0300_04.png",
                                                        "alt": "Paperwork"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Compare the amount of the product issued from storage tanks with the amount loaded on the tank cars after the daily closing gauges are taken. Report excessive loss to the proper authority."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0300_04.mp3",
                                                            "text":"Compare the amount of the product issued from storage tanks with the amount loaded on the tank cars after the daily closing gauges are taken. Report excessive loss to the proper authority."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Dome",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0300_05.png",
                                                        "alt": "Dome"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Replace the bottom outlet cap. Close and lock the dome cover when the tank car is full of product."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0300_05.mp3",
                                                            "text":"Replace the bottom outlet cap. Close and lock the dome cover when the tank car is full of product."
                                                        }
                                                    ]
                                                }
                                            ] 
                                        }
                                    },
                                    {
                                        "id":"0310",
                                        "title":"LSA 3 Page 14",
                                        "temp":11,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0310.mp3",
                                                "text":"Select on each icon to uncover the rest of the follow-up procedures."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on each icon to uncover the rest of the follow-up procedures.",
                                            "items":[
                                                {
                                                    "shape":"circle",
                                                    "title":"Identification Seal",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0310_01.png",
                                                        "alt": "hourglass"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Place an approved identification seal on the dome cover. If the seal is in place, the receiver is assured that no one has tampered with the car. Record the seal marking on all shipping papers."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0310_01.mp3",
                                                            "text":"Place an approved identification seal on the dome cover. If the seal is in place, the receiver is assured that no one has tampered with the car. Record the seal marking on all shipping papers."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Remove Drainage",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0310_02.png",
                                                        "alt": "Remove Drainage"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Remove the drainage from under the bottom outlet. Properly dispose of any product that is in the tub."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0310_02.mp3",
                                                            "text":"Remove the drainage from under the bottom outlet. Properly dispose of any product that is in the tub."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Remove Signs",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0310_03.png",
                                                        "alt": "Remove Signs"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content": "Remove any DANGEROUS-EMPTY signs from the car and replace them with FLAMMABLE signs."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0310_03.mp3",
                                                            "text":"Remove any DANGEROUS-EMPTY signs from the car and replace them with FLAMMABLE signs."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Disconnect from the tank car",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0310_04.png",
                                                        "alt": "Disconnect from the tank car"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Disconnect the grounding wire from the tank car. Remove the derails, if used, and remove the TANK CAR CONNECTED signs."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0310_04.mp3",
                                                            "text":"Disconnect the grounding wire from the tank car. Remove the derails, if used, and remove the TANK CAR CONNECTED signs."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Release the Brakes",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0310_05.png",
                                                        "alt": "Release the Brakes"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Release the brakes, and move the car from the transfer area."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0310_05.mp3",
                                                            "text":"Release the brakes, and move the car from the transfer area."
                                                        }
                                                    ]
                                                }
                                            ] 
                                        }
                                    },
                                    {
                                        "id":"0320",
                                        "title":"LSA 3 Page 15",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0320.mp3",
                                                "text":"Certain procedures must be followed before tank cars can be unloaded. First, you should conduct an inspection of the receiving containers. Select each of the icons to uncover more."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Certain procedures must be followed before tank cars can be unloaded. First, you should conduct an inspection of the receiving containers. Select each of the icons to uncover more.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0320_01.png",
                                                    "alt":"alt goes here"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            15,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"If the product in the tank car is to be transferred to a tank truck or semitrailer, inspect the vehicle tanks as you would tank car tanks."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0320_01.mp3",
                                                                "text":"If the product in the tank car is to be transferred to a tank truck or semitrailer, inspect the vehicle tanks as you would tank car tanks."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            150,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"If the product in the tank car is to be transferred to storage tanks, make sure the storage tanks are suitable to receive the assigned product."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0320_02.mp3",
                                                                "text":"If the product in the tank car is to be transferred to storage tanks, make sure the storage tanks are suitable to receive the assigned product."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            285,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "If a receiving tank already has product in it, gauge and sample the tank contents. Make sure there is enough outage in the tank to receive the new product."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0320_03.mp3",
                                                                "text":"If a receiving tank already has product in it, gauge and sample the tank contents. Make sure there is enough outage in the tank to receive the new product."
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            420,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Visually inspect the sample to make sure the product in the receiving tank is the same as the product in the tank car. If there is any doubt, have tests made to verify the grade and quality of the product before mixing it with a new product. Gauge the tank again and record the data."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0320_04.mp3",
                                                                "text":"Visually inspect the sample to make sure the product in the receiving tank is the same as the product in the tank car. If there is any doubt, have tests made to verify the grade and quality of the product before mixing it with a new product. Gauge the tank again and record the data"
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            555,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 5",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Make sure the receiving tank is properly grounded and vented."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0320.mp3",
                                                                "text":"Make sure the receiving tank is properly grounded and vented."
                                                            }
                                                        ],
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0330",
                                        "title":"LSA 3 Page 16",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0330.mp3",
                                                "text":"Continuing the unloading process. After completing your inspection of the receiving tanks you will conduct an inspection of the unloading equipment. Inspect all pumps, hoses, pipelines and manifolds to ensure that they are clean and in good operating condition. When possible, use equipment to handle only one product. If more than one product must be handled by the same equipment, make sure that all previous product in it is thoroughly drained before new product is pumped."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Continuing the unloading process. After completing your inspection of the receiving tanks you will conduct an inspection of the unloading equipment. Inspect all pumps, hoses, pipelines and manifolds to ensure that they are clean and in good operating condition. When possible, use equipment to handle only one product. If more than one product must be handled by the same equipment, make sure that all previous product in it is thoroughly drained before new product is pumped."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    },
                                    {
                                        "id":"0340",
                                        "title":"LSA 3 Page 17",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0340.mp3",
                                                "text":[
                                                    "Make sure the tank car is in the right place by comparing the car and seal numbers with those on the shipping papers. Make sure the seals and locks are intact. Notify the proper authority if cars arrive with broken seals or locks. If there is an emergency and the tank car is needed immediately, unload the car but do not use the product until it has been tested.",
                                                    "Pry the seals loose and remove the dome cover. If the safety valve is not working, high pressure may develop in the tank car in hot weather. If time permits, relieve the pressure by letting the car cool overnight. Relieving the pressure by venting allows product to vaporize. It also causes a fire hazard."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Make sure the tank car is in the right place by comparing the car and seal numbers with those on the shipping papers. Make sure the seals and locks are intact. Notify the proper authority if cars arrive with broken seals or locks. If there is an emergency and the tank car is needed immediately, unload the car but do not use the product until it has been tested."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"Pry the seals loose and remove the dome cover. If the safety valve is not working, high pressure may develop in the tank car in hot weather. If time permits, relieve the pressure by letting the car cool overnight. Relieving the pressure by venting allows product to vaporize. It also causes a fire hazard."
                                                        }
                                                    ] 
                                                }
                                            ],
                                        }
                                    },
                                    {
                                        "id":"0350",
                                        "title":"LSA 3 Page 18",
                                        "temp":6.1,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0350.mp3",
                                                "text":[
                                                    "Inspect the tank car for leaks through the shell and the bottom outlet. If there are any signs the car is leaking, schedule it to be unloaded at once. Place containers to catch leaking product and clean any spills.",
                                                    "Gauge and sample the contents of the tank car and check the sample for appearance and color. Take the temperature of the product, volume correct the quantity and record the data. Slowly drain any water in the tank through the bottom outlet. After the water is removed, gauge the contents again, volume correct and record the data. Fuel that is cloudy or off color may be contaminated. Any questionable product should be thoroughly tested before it is unloaded.",
                                                    "Make sure the bottom outlet chamber is in good condition and the outlet valve is working properly. In cold weather, water in the tank may freeze around the outlet valve. To free the frozen valve, apply steam, hot water, or hot cloths to the outlet chamber. A hot air duct tent heater or a slave kit may be used by trained personnel, when authorized, to thaw the outlet. Let the valve thaw in the warm part of the day, when possible."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-04/B04_0350_01.png",
                                                    "alt":"Underside of rail tank car"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0360",
                                        "title":"LSA 3 Page 19",
                                        "temp":8.3,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0360.mp3",
                                                "text":"Time now to begin the actual unloading process. Select on each of the indicated areas for more detailed instructions."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Time now to begin the actual unloading process. Select on each of the indicated areas for more detailed instructions.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0360_01.png",
                                                    "alt":"alt goes here"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            15,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Place the pump at least 50 feet from the tank car. Ground the pump."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0360_02.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0360_01.mp3",
                                                                "text":"Place the pump at least 50 feet from the tank car. Ground the pump."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            150,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Measure the diameter of the bottom outlet of the tank to make sure the connection can be made with available adapters."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0360_03.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0360_02.mp3",
                                                                "text":"Measure the diameter of the bottom outlet of the tank to make sure the connection can be made with available adapters."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            285,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "Turn the valve rod handle or hand wheel clockwise to make sure the outlet valve is seated. Place a spill container under the bottom outlet, and leave it there until the operation is completed."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0360_04.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0360_03.mp3",
                                                                "text":"Turn the valve rod handle or hand wheel clockwise to make sure the outlet valve is seated. Place a spill container under the bottom outlet, and leave it there until the operation is completed."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            420,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Loosen the bottom outlet cap one or two turns. This permits product trapped in the outlet chamber to run into the spill container. If the cap does not unscrew easily, use a wooden mallet or a block – tap lightly in an upward direction and try again."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0360_05.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0360_04.mp3",
                                                                "text":"Loosen the bottom outlet cap one or two turns. This permits product trapped in the outlet chamber to run into the spill container. If the cap does not unscrew easily, use a wooden mallet or a block – tap lightly in an upward direction and try again."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            555,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 5",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Attach the tank car elbow or Gossler coupling to the tank car outlet."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0360_06.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0360_05.mp3",
                                                                "text":"Attach the tank car elbow or Gossler coupling to the tank car outlet."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            690,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 6",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Connect the pump discharge line to the inlet of the receiving container."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0360_07.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0360_06.mp3",
                                                                "text":"Connect the pump discharge line to the inlet of the receiving container."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0370",
                                        "title":"LSA 3 Page 20",
                                        "temp":8.3,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0370.mp3",
                                                "text":"Time now to begin the actual unloading process. Select on each of the indicated areas for more detailed instructions."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Time now to begin the actual unloading process. Select on each of the indicated areas for more detailed instructions.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-04/B04_0370_01.png",
                                                    "alt":"alt goes here"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            15,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Dispose of drainage collected in the spill container then replace the tub."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0370_02.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0370_01.mp3",
                                                                "text":"Dispose of drainage collected in the spill container then replace the tub."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            150,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Place the dome cover over the manhole by propping it up with a block of wood under the edge."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0370_03.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0370_02.mp3",
                                                                "text":"Place the dome cover over the manhole by propping it up with a block of wood under the edge."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            285,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "Open the bottom outlet valve when all connections are secure."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0370_04.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0370_03.mp3",
                                                                "text":"Open the bottom outlet valve when all connections are secure."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            420,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 4",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Open the proper valves in the line, then start the pump."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0370_05.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0370_04.mp3",
                                                                "text":"Open the proper valves in the line, then start the pump."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            555,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 5",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Watch for leaks around all connections when the product starts to flow. If there are leaks, stop the pump and make repairs before starting the pump again."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0370_06.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0370_05.mp3",
                                                                "text":"Watch for leaks around all connections when the product starts to flow. If there are leaks, stop the pump and make repairs before starting the pump again."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            690,
                                                            945,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 6",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Wait until the entire product has been unloaded from the tank. Let the pump drain the suction line and then stop the pump."
                                                            }
                                                        ],
                                                        "image":{
                                                            "url":"assets/media/images/B-04/B04_0370_07.png",
                                                            "alt":"alt goes here"
                                                        },
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0370_06.mp3",
                                                                "text":"Wait until the entire product has been unloaded from the tank. Let the pump drain the suction line and then stop the pump."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0380",
                                        "title":"LSA 3 Page 21",
                                        "temp":11,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0380.mp3",
                                                "text":"Select on each icon to uncover the rest of the follow-up procedures."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Select on each icon to uncover the rest of the follow-up procedures.",
                                            "items":[
                                                {
                                                    "shape":"circle",
                                                    "title":"Check Tank",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0380_01.png",
                                                        "alt": "Tank"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Make sure the tank car is completely empty."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0380_01.mp3",
                                                            "text":"Make sure the tank car is completely empty."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Gauge",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0380_02.png",
                                                        "alt": "Gauge"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Gauge and sample the product in the receiving tank, volume correct the quantity, and record the data. Compare the amount of the product delivered to the receiving tank with the amount of the product taken from the tank car. Report excessive loss to the proper authority. Allow enough time for water and particles to settle in the receiving tank, then drain the water from the receiving tank, gauge the contents again and record the data."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0380_02.mp3",
                                                            "text":"Gauge and sample the product in the receiving tank, volume correct the quantity, and record the data. Compare the amount of the product delivered to the receiving tank with the amount of the product taken from the tank car. Report excessive loss to the proper authority. Allow enough time for water and particles to settle in the receiving tank, then drain the water from the receiving tank, gauge the contents again and record the data."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Remove hose or tube",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0380_03.png",
                                                        "alt": "Remove Signs"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content": "Remove the unloading hose or drop tube from the tank car."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0380_03.mp3",
                                                            "text":"Remove the unloading hose or drop tube from the tank car."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Close the dome cover",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0380_04.png",
                                                        "alt": "Close the dome cover"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Close and unlock the dome cover. Remove the spill container and discard any product in the tub. Replace any FLAMMABLE signs with DANGEROUS EMPTY signs. Disconnect the ground wire from the tank car and remove the derails, if used."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0380_04.mp3",
                                                            "text":"Close and unlock the dome cover. Remove the spill container and discard any product in the tub. Replace any FLAMMABLE signs with DANGEROUS EMPTY signs. Disconnect the ground wire from the tank car and remove the derails, if used."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Remove Signs",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0380_05.png",
                                                        "alt": "Remove Signs"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Remove the TANK CAR CONNECTED signs."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0380_05.mp3",
                                                            "text":"Remove the TANK CAR CONNECTED signs."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "shape":"circle",
                                                    "title":"Release the Brakes",
                                                    "image": {
                                                        "url": "assets/media/images/B-04/B04_0380_06.png",
                                                        "alt": "Release the Brakes"
                                                    },
                                                    "body":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Release the brakes and move the car from the transfer area."
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B04_0380_06.mp3",
                                                            "text":"Release the brakes and move the car from the transfer area."
                                                        }
                                                    ]
                                                }
                                            ] 
                                        }
                                    },
                                    {
                                        "id":"0390",
                                        "title":"LSA 3 Page 23",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "achievement": true,
                                        "branching":"0090",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0170.mp3",
                                                "text":[
                                                    "That concludes our review of Loading and Unloading operations. Select on the Return button to see what other sections remain for you to complete."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"That concludes our review of Loading and Unloading operations. Select on the Return button to see what other sections remain for you to complete."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    }
                                ]
                            },
                            {
                                "title":"Describe Long and Short Stick Gauging Methods",
                                "id":"0090-3",
                                "pages":[
                                    {
                                        "id":"0400",
                                        "title":"LSA 4 Page 1",
                                        "temp":2.3,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0400.mp3",
                                                "text":[
                                                    "Gauging is used to determine the amount of product on hand and the amount of water in storage tanks. In addition, it is used to detect leaks or unauthorized withdrawals and to determine free space in the tank for receiving shipments.",
                                                    "We will be reviewing two methods for gauging a rail tank car today. Pick a gauging method by selecting one of the images on screen now."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "instruction": "We will be reviewing two methods for gauging a rail tank car today. Pick a gauging method by selecting one of the images on screen now.",
                                            "complete_text": "Select the BEGIN MISSION button in the lower right-hand corner to begin.",
                                            "images":[
                                                
                                            ],
                                            "menu_items":[
                                                {
                                                    "title":"Long Stick",
                                                    "location":"0410",
                                                    "image": {
                                                        "url":"assets/media/images/B-04/B04_0400_01.png",
                                                        "alt":"Long Stick"
                                                    }
                                                },
                                                {
                                                    "title":"Short Stick",
                                                    "location":"0420",
                                                    "image": {
                                                        "url":"assets/media/images/B-04/B04_0400_02.png",
                                                        "alt":"Long Stick"
                                                    }
                                                }
                                            ]
                                        },
                                        "sections": [
                                            {
                                                "title":"Gauging Methods",
                                                "id":"0400-0",
                                                "pages":[
                                                    {
                                                        "id":"0410",
                                                        "title":"LSA 4 Page 1 Subpage 1",
                                                        "temp":7.1,
                                                        "elo":0,
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0410.mp3",
                                                                "text":" Please read over the safety requirements for this training."
                                                            }
                                                        ],
                                                        "layout":"third-left",
                                                        "branching": "0400",
                                                        "content":{
                                                            "text_elements":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"Use the arrows to scroll through the images."
                                                                },
                                                            ],
                                                            "slides":[
                                                                {
                                                                    "url":"assets/media/images/B-04/B04_0410_01.png",
                                                                    "alt":"Long gaging stick",
                                                                    "title":"Long gaging stick",
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B04_0410.mp3",
                                                                            "text":"This illustration shows the long stick correctly placed inside the tank shell."
                                                                        }
                                                                    ],
                                                                    "content":[
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "The long gaging stick is made of hardwood or other material and is graduated in one/eighth inch divisions from the bottom upward. The bottom of the stick usually has a hard metal tip. The stick is about ten feet long and is used to measure product and bottom sediment and water in the tank shell only. Use the arrows to see more about the Long Stick gauging method."
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "url":"assets/media/images/B-04/B04_0410_02.jpg",
                                                                    "alt":"Long gaging stick",
                                                                    "title":"Long gaging stick",
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B04_0410_01.mp3",
                                                                            "text":"Ground yourself to the car and stand on the upwind side of the dome cover. Apply a thin coat of water indicating paste from bottom of the stick three inches up. Apply a thin coat of fuel indicating paste or chalk where fuel leaves a wet mark. Lower stick straight to get an accurate gage. Keep the stick in fuel for 30 seconds. Remove stick and record fuel and water cut to the nearest 1/8 inch. Clean gage stick and repeat until you get two identical readings."
                                                                        }
                                                                    ],
                                                                    "content":[
                                                                        {
                                                                            "tag":"ul",
                                                                            "content":[
                                                                                "Ground yourself to the car and stand on the upwind side of the dome cover",
                                                                                "Apply a thin coat of water indicating paste from bottom of the stick three inches up",
                                                                                "Apply a thin coat of fuel indicating paste or chalk where fuel leaves a wet mark",
                                                                                "Lower stick straight to get an accurate gage. Keep the stick in fuel for 30 seconds",
                                                                                "Remove stick and record fuel and water cut to the nearest 1/8 inch.",
                                                                                "Clean gage stick and repeat until you get two identical readings."
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "url":"assets/media/images/B-04/B04_0410_03.png",
                                                                    "alt":"Illustration",
                                                                    "title":"Illustration",
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B04_0410_02.mp3",
                                                                            "text":"This illustration shows the long stick correctly placed inside the tank shell."
                                                                        }
                                                                    ],
                                                                    "content":[
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "This illustration shows the long stick correctly placed inside the tank shell."
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "id":"0420",
                                                        "title":"LSA 4 Page 1 Subpage 2",
                                                        "temp":7.1,
                                                        "elo":0,
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B04_0420.mp3",
                                                                "text":[
                                                                    "The short gaging stick is 36 inches long. It has two scales with a common zero – 12 inches from the lower end and 24 inches from the top and is graduated upward and downward in 1/8-inch divisions. A brass angle is attached at the zero mark on the gage stick. Use the arrows to see more about the Short Stick gauging method.",
                                                                    "Ground yourself to the car and stand on the upwind side of the dome cover. Apply fuel indicating paste and insert the gage stick, with the short end down, through the dome hatch. Place the brass angle on the lip of the reference point.",
                                                                    "Record the cut as Shell Outage if the product cut is below the zero mark. Record it as Dome Innage if the product cut is above the zero mark. Record all readings to the nearest one eighth inch. Clean the stick and repeat procedure until two identical readings are achieved."
                                                                ]
                                                            }
                                                        ],
                                                        "layout":"third-left",
                                                        "branching": "0400",
                                                        "content":{
                                                            "text_elements":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":"Use the arrows to scroll through the images."
                                                                },
                                                            ],
                                                            "slides":[
                                                                {
                                                                    "url":"assets/media/images/B-04/B04_0420_01.png",
                                                                    "alt":"Short Gaging Stick",
                                                                    "title":"Short Gaging Stick",
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B04_0420.mp3",
                                                                            "text":"The short gaging stick is 36 inches long. It has two scales with a common zero – 12 inches from the lower end and 24 inches from the top and is graduated upward and downward in 1/8-inch divisions. A brass angle is attached at the zero mark on the gage stick. Use the arrows to see more about the Short Stick gauging method."
                                                                        }
                                                                    ],
                                                                    "content":[
                                                                        {
                                                                            "tag":"p",
                                                                            "content":"The short gaging stick is 36 inches long. It has two scales with a common zero – 12 inches from the lower end and 24 inches from the top and is graduated upward and downward in 1/8-inch divisions. A brass angle is attached at the zero mark on the gage stick. Use the arrows to see more about the Short Stick gauging method."
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "url":"assets/media/images/B-04/B04_0420_04.jpg",
                                                                    "alt":"Method 1",
                                                                    "title":"Method 1",
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B04_0420_01.mp3",
                                                                            "text":"Ground yourself to the car and stand on the upwind side of the dome cover. Apply fuel indicating paste and insert the gage stick, with the short end down, through the dome hatch. Place the brass angle on the lip of the reference point."
                                                                        }
                                                                    ],
                                                                    "content":[
                                                                        {
                                                                            "tag":"ul",
                                                                            "content":[
                                                                                "Ground yourself to the car and stand on the upwind side of the dome cover",
                                                                                "Apply fuel indicating paste and insert the gage stick, with the short end down, through the dome hatch",
                                                                                "Place the brass angle on the lip of the reference point"
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "url":"assets/media/images/B-04/B04_0420_03.png",
                                                                    "alt":"Method 2",
                                                                    "title":"Method 2",
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B04_0420_02.mp3",
                                                                            "text":"Record the cut as Shell Outage if the product cut is below the zero mark. Record it as Dome Innage if the product cut is above the zero mark. Record all readings to the nearest one eighth inch. Clean the stick and repeat procedure until two identical readings are achieved."
                                                                        }
                                                                    ],
                                                                    "content":[
                                                                        {
                                                                            "tag":"ul",
                                                                            "content":[
                                                                                "Record the cut as <strong>Shell Outage</strong> if the product cut is below the zero mark",
                                                                                "Record the cut as <strong>Dome Innage</strong> if the product is above the zero mark",
                                                                                "Record all readings to the nearest 1/8-inch. Clean the stick and repeat the procedure until two identical readings are achieve"
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id":"0430",
                                        "title":"LSA 4 Page 2",
                                        "temp":18,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0430.mp3",
                                                "text":"Select the Correct Answer”."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"alt goes here"
                                            },
                                            "prompt":"You are sampling a newly loaded tank car using the Short Stick gaging method. The product cut comes in above the Short Stick’s zero mark. How do you record this?",
                                            "options":[
                                                {
                                                    "text":"Shell Outage",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Dome Innage",
                                                    "answer":true
                                                }
                                            ],
                                            "answer": 1,
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is Dome Innage.",
                                        }
                                    },
                                    {
                                        "id":"0440",
                                        "title":"LSA 4 Page 3",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "achievement": true,
                                        "branching":"0090",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B04_0440.mp3",
                                                "text":[
                                                    "That concludes our review of Long and Short Stick Gauging Methods. Select on the Return button to see what other sections remain for you to complete."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-04/B04_0150_01.jpg",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"That concludes our review of Long and Short Stick Gauging Methods. Select on the Return button to see what other sections remain for you to complete."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":"0450",
                        "title":"Summary",
                        "temp":22,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B04_0460.mp3",
                                "text":[
                                    "Congratulations! You completed the module. Let’s see how many challenge coins you earned. Nice job.",
                                    "You have reached the end of the Railcar and Depot, and Truck Stand Transfer Operations lesson. During this lesson we covered a lot of important information that you will need to carry with you throughout your career. Good luck in the remainder of your training."
                                ]
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-04/B04_0460_01.png",
                                "alt":"alt goes here"
                            },
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor.jpg",
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
                                            "content":"You have reached the end of the Railcar and Depot, and Truck Stand Transfer Operations lesson. During this lesson we covered a lot of important information that you will need to carry with you throughout your career. Good luck in the remainder of your training.",
                                            "timing": 15
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
                                        "content":"You have reached the end of the Railcar and Depot, and Truck Stand Transfer Operations lesson. During this lesson we covered a lot of important information that you will need to carry with you throughout your career. Good luck in the remainder of your training."
                                    }
                                ],
                                "tasks":[
                                    {
                                        "text": "Identify Tank Car Components",
                                        "timing": 0
                                    },
                                    {
                                        "text": "Discuss Site Loading and Unloading Considerations and Procedures",
                                        "timing": 0
                                    },
                                    {
                                        "text": "Review Loading and Unloading Operations",
                                        "timing": 0,
                                    },
                                    {
                                        "text": "Describe Long and Short Stick Gauging Methods",
                                        "timing": 0,
                                    },
                                    {
                                        "text": "Conduct Rail Tank Car Operations",
                                        "timing": 0,
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
                        },
                        "graphic":{
                            "url":"url goes here",
                            "alt":"alt goes here"
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
var imiName = "92F10-" + modJSON.module.id;
// store lesson data locally
if(sessionStorage){
  sessionStorage.setItem(imiName, JSON.stringify(modJSON));
  modJSON = null;
} else {
  // lesson data will just stay as modJSON
}
