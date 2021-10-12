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
        "id":"B03",
        "title": "Manifolds, Pipes, Valves, and Fittings"
    },
    "content":{
        "sections":[
            {
                "title":"Perform Transfer Operations",
                "id":"0000-0",
                "pages":[
                    { //0010
                        "id":"0010",
                        "title":"Welcome",
                        "temp":0,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B03_0010.mp3",
                                "text":"Welcome to the Manifolds, Pipes, Valves and Fittings lesson."
                            }
                        ],
                        "content":{
                            "title_text": "Manifolds, Pipes, Valves, and Fittings",
                            "title_background": "assets/media/images/B-03/B03_0020_01.jpg",
                            "images":[
                                {
                                    "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                    "alt":"Image of a manifold"
                                },
                                {
                                    "url":"assets/media/images/B-03/B03_0010_02.jpg",
                                    "alt":"Image of a pipeline"
                                },
                                {
                                    "url":"assets/media/images/B-03/B03_0010_03.jpg",
                                    "alt":"Image of fuel lines connected to vehicles"
                                }
                            ]
                        }
                    },
                    { //0020 with branching
                        "id":"0020",
                        "title":"Introduction",
                        "temp":2,
                        "elo":0,
                        "layout":"half-horizontal",
                        "narration":[
                            {
                                "url":"assets/media/narration/B03_0020.mp3",
                                "text":"Today’s military consumes large quantities of petroleum products in support of combat operations. To carry out the petroleum mission, specific channels of responsibility have been established to ensure an uninterrupted supply of petroleum."
                            }
                        ],
                        "content":{
                            "instruction": "Select each button to view relevant information prior to starting the course content. When you have viewed all required information, select the BEGIN MISSION button in the lower right-hand corner to begin.",
                            "complete_text": "Select the BEGIN MISSION button in the lower right-hand corner to begin.",
                            "images":[
                                {
                                    "url":"assets/media/images/B-03/B03_0020_01.jpg",
                                    "alt":"Image of a manifold"
                                }
                            ],
                            "menu_items":[
                                {
                                    "title":"Learning Objectives",
                                    "location":"0030"
                                },
                                {
                                    "title":"LSA",
                                    "location":"0040"
                                },
                                {
                                    "title":"Safety Requirements",
                                    "location":"0050"
                                },
                                {
                                    "title":"Risk Assessment / Environmental Considerations",
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
                                    { //0030
                                        "id":"0030",
                                        "title":"Objectives",
                                        "temp":3,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0030.mp3",
                                                "text":"Please take a moment to review the objectives for this training."
                                            }
                                        ],
                                        "branching":"0020",
                                        "content":{
                                            "objectives":[
                                                {
                                                    "type":"tlo",
                                                    "image":{
                                                        "url":"assets/media/images/B-03/B03_0030_01.jpg",
                                                        "alt":"Image of the dome of a tank rail car"
                                                    },
                                                    "title":"Terminal Learning Objective",
                                                    "description":"Apply Tactical Petroleum Operations",
                                                    "action":"Apply Tactical Petroleum Operations",
                                                    "conditions":"Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction, with consideration for the operational environment, given Interactive Multimedia Instruction and all appropriate resources.",
                                                    "standard":"Apply Petroleum Logistics Fundamentals with an 80% tolerance for accuracy."
                                                },
                                                {
                                                    "type":"elo",
                                                    "image":{
                                                        "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                                        "alt":"tender vessel"
                                                    },
                                                    "title":"Enabling Learning Objective",
                                                    "description":"Perform Transfer Operations",
                                                    "action":"Perform Transfer Operations.",
                                                    "conditions":"Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction, with consideration for the operational environment, given terminal diagram, student notes, interactive multimedia instruction, safety gear, checklist, and practical exercise.",
                                                    "standard":"Conduct loading and unloading transfer operation procedures accurately and in the correct sequence, adhering to all safety procedures, with no harm caused to the equipment or personnel."
                                                }
                                            ]
                                        }
                                    },
                                    { //0040
                                        "id":"0040",
                                        "title":"Learning Step Activities (LSA)",
                                        "temp":6,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0040.mp3",
                                                "text":"Please take a moment to review the objectives for this training."
                                            }
                                        ],
                                        "branching":"0020",
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0040_01.jpg",
                                                "alt":"92F Training Ground"
                                            },
                                            "text_elements":[
                                                {
                                                    "tag":"h6",
                                                    "content":"Learning Step Activities (LSA):"
                                                },
                                                {
                                                    "tag":"ul",
                                                    "content":[
                                                        "Identify Types and Attributes of Manifolds",
                                                        "Describe Manifold Numbering, Maintenance, and Operation",
                                                        "Identify Types of Connections and Fittings",
                                                        "Identify Types and Maintenance Procedures of Pressure Valves",
                                                        "Conduct Transfer Operations",
                                                    ]
                                                }
                                            ],
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0040_01.jpg",
                                                    "alt":"92F Training Ground"
                                                }
                                            ]
                                        }
                                    },
                                    { //0050
                                        "id":"0050",
                                        "title":"Safety Requirements",
                                        "temp":1,
                                        "elo":0,
                                        "layout":"third-top",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0050.mp3",
                                                "text":"Please take a moment to review the objectives for this training."
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
                                                        "You will proceed to the parking lot outside and a formation will be held.",
                                                        "The class president or his/her representative will take attendance and report to the instructor.",
                                                        "You will not re-enter the building until told to do so by the instructor."
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
                                    { //0060
                                        "id":"0060",
                                        "title":"Risk Assessment / Environmental Considerations",
                                        "temp":6,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0060.mp3",
                                                "text":"Please take a moment to review the objectives for this training."
                                            }
                                        ],
                                        "branching":"0020",
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0060_01.jpg",
                                                "alt":"Safety"
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
                                                },
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    { //0070
                        "id":"0070",
                        "title":"Scenario",
                        "temp":6,
                        "elo":0,
                        "layout":"full",
                        "narration":[
                            {
                                "url":"assets/media/narration/B03_0070.mp3",
                                "text":"You have arrived at Hunter Army Air Field and have been assigned as a Petroleum Supply Specialist. As part of your duties, you will routinely be tasked with performing Preventive Maintenance Checks and Services on the Inland Petroleum Distribution System. Your instructor for the day will be accompanying you as you begin your familiarization with the terminal."
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                            },
                            "text_elements":[
                                {
                                    "tag":"h6",
                                    "content":"Scenario"
                                },
                                {
                                    "tag":"p",
                                    "content": "You have arrived at Hunter Army Air Field and have been assigned as a Petroleum Supply Specialist. As part of your duties, you will routinely be tasked with performing Preventive Maintenance Checks and Services on the Inland Petroleum Distribution System. Your instructor for the day will be accompanying you as you begin your familiarization with the terminal."
                                }
                            ]
                        }
                    },
                    { //0080
                        "id":"0080",
                        "title":"Mission Brief",
                        "temp":7,
                        "elo":0,
                        "narration":[
                            {
                                "url":"assets/media/narration/B03_0080.mp3",
                                "text":" Please read over the safety requirements for this training."
                            }
                        ],
                        "layout":"full",
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-03/B03_0020_01.jpg",
                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                            },
                            "ementors":[
                                {
                                    "graphic":{
                                        "url":"assets/media/images/ementor_female.jpg",
                                        "alt":"Female Ementor"
                                    },
                                    "text": [
                                        {
                                            "tag":"p",
                                            "content":"Good morning, soldier. Ready to get your hands dirty?"
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
                    { //0090 with branching, 90% of course here
                        "id":"0090",
                        "title":"LSA Menu",
                        "temp":2.2,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B03_0090.mp3",
                                "text":"Select a topic area to begin."
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-03/B03_0020_01.jpg",
                                "alt":"alt goes here"
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
                                            "content":"Good to hear! Today we are going to be focusing on identifying parts of the IPDS and reviewing maintenance procedures. There’s a lot to cover so I’m going to let you pick where to start.",
                                            "timing": 0
                                        }
                                    ] 
                                }
                            ],
                            "instruction": "Select a topic area to begin.",
                            "complete_text": "Select the BEGIN MISSION button in the lower right-hand corner to begin.",
                            "menu_items":[
                                {
                                    "title":"Manifold Types",
                                    "location":"0100"
                                },
                                {
                                    "title":"Manifold Numbering",
                                    "location":"0240"
                                },
                                {
                                    "title":"Connection Types",
                                    "location":"0310"
                                },
                                {
                                    "title":"Pressure Valves",
                                    "location":"0370"
                                },
                            ],
                            "trigger_button":{
                                "title":"Summary",
                                "location":"0500"
                            }
                        },
                        "sections": [
                            {
                                "title":"Identify Types and Attributes of Manifolds",
                                "id":"0090-0",
                                "pages":[
                                    { //0100
                                        "id":"0100",
                                        "title":"LSA 1 Page 1",
                                        "temp":2,
                                        "elo":0,
                                        "layout":"half-horizontal",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0100.mp3",
                                                "text":"A Manifold is a piping arrangement which permits a stream of liquid or gas to be divided into two or more streams or which permits several streams to be collected into one. Manifolds direct the flow of fuel. When we talk about manifolds, there are four potential types of manifolds that may be in use. Which one do you want to examine first?"
                                            }
                                        ],
                                        "branching":"0090",
                                        "content":{
                                            "instruction": "A Manifold is a piping arrangement which permits a stream of liquid or gas to be divided into two or more streams or which permits several streams to be collected into one. Manifolds direct the flow of fuel. When we talk about manifolds, there are four potential types of manifolds that may be in use. Which one do you want to examine first?",
                                            "complete_text": "Select the BEGIN MISSION button in the lower right-hand corner to begin.",
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0020_01.jpg",
                                                    "alt":"Image of a manifold"
                                                }
                                            ],
                                            "menu_items":[
                                                {
                                                    "title":"Switching Manifold",
                                                    "location":"0110"
                                                },
                                                {
                                                    "title":"Tanker-Truck Receipt Manifold",
                                                    "location":"0120"
                                                },
                                                {
                                                    "title":"Fuel Unit Manifold",
                                                    "location":"0130"
                                                },
                                            ],
                                            "trigger_button":{
                                                "title":"Terminal Facilities",
                                                "location":"0150"
                                            }
                                        },
                                        "sections": [
                                            {
                                                "title":"Manifold Types",
                                                "id":"0100-0",
                                                "pages":[
                                                    { //0110
                                                        "id":"0110",
                                                        "title": "LSA 1 Page 1 Subpage 1",
                                                        "temp": 7.2,
                                                        "elo": 0,
                                                        "narration": [
                                                            {
                                                                "url": "assets/media/narration/B03_0110.mp3",
                                                                "text": [
                                                                    "The switching manifold controls the flow of fluids from the pipeline to the fuel units and contaminated fuel module, and from the fuel units to the pipeline. Switching manifolds consist of two assemblies: the receipt manifold and the return manifold.",
                                                                    "Receipt manifolds transfer fuel from the pipeline to either fuel units or to the contaminated fuel module. Receipt manifolds contain pressure-regulator valves used to reduce the pressure of incoming fluids to the lower working pressure used in fuel units or the Tactical Petroleum Terminals.",
                                                                    "Receipt manifolds also include fuel sampling and meter skid assemblies that allow for the incoming fluid to be checked for contaminants and measured for volume and flow rate.",
                                                                    "Return manifolds transfer fuel from the fuel units or TPT to the pipeline. Like the receipt manifold, the return manifold contains a meter skid assembly to measure fuel volume and flow rate."
                                                                ]
                                                            }
                                                        ],
                                                        "layout": "third-left",
                                                        "branching": "0100",
                                                        "content": {
                                                            "ementors": [
                                                                {
                                                                    "graphic": {
                                                                        "url": "assets/media/images/ementor_female.jpg",
                                                                        "alt": "Female eMentor icon"
                                                                    },
                                                                    "text": [
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "The switching manifold controls the flow of fluids from the pipeline to the fuel units and contaminated fuel module, and from the fuel units to the pipeline. Switching manifolds consist of two assemblies: the receipt manifold and the return manifold.",
                                                                            "timing": 0
                                                                        },
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "Receipt manifolds transfer fuel from the pipeline to either fuel units or to the contaminated fuel module. Receipt manifolds contain pressure-regulator valves used to reduce the pressure of incoming fluids to the lower working pressure used in fuel units or the Tactical Petroleum Terminals.",
                                                                            "timing": 15
                                                                        },
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "Receipt manifolds also include fuel sampling and meter skid assemblies that allow for the incoming fluid to be checked for contaminants and measured for volume and flow rate.",
                                                                            "timing": 32
                                                                        },
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "Return manifolds transfer fuel from the fuel units or TPT to the pipeline. Like the receipt manifold, the return manifold contains a meter skid assembly to measure fuel volume and flow rate.",
                                                                            "timing": 43
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "slides": [
                                                                {
                                                                    "url": "assets/media/images/B-03/B03_0110_01.jpg",
                                                                    "alt": "Slide 1",
                                                                    "title": "Switching Manifold",
                                                                    "timing": 0,
                                                                    "narration": [
                                                                        {
                                                                            "url": "assets/media/narration/B03_0110.mp3",
                                                                            "text": [
                                                                                "The switching manifold controls the flow of fluids from the pipeline to the fuel units and contaminated fuel module, and from the fuel units to the pipeline. Switching manifolds consist of two assemblies: the receipt manifold and the return manifold.",
                                                                                "Receipt manifolds transfer fuel from the pipeline to either fuel units or to the contaminated fuel module. Receipt manifolds contain pressure-regulator valves used to reduce the pressure of incoming fluids to the lower working pressure used in fuel units or the Tactical Petroleum Terminals.",
                                                                                "Receipt manifolds also include fuel sampling and meter skid assemblies that allow for the incoming fluid to be checked for contaminants and measured for volume and flow rate.",
                                                                                "Return manifolds transfer fuel from the fuel units or TPT to the pipeline. Like the receipt manifold, the return manifold contains a meter skid assembly to measure fuel volume and flow rate."
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0120
                                                        "id":"0120",
                                                        "title": "LSA 1 Page 1 Subpage 2",
                                                        "temp": 7.2,
                                                        "elo": 0,
                                                        "narration": [
                                                            {
                                                                "url": "assets/media/narration/B03_0120.mp3",
                                                                "text": [
                                                                    "The Tanker-Truck Receipt Manifold provides the Tactical Petroleum Terminal with valves, hoselines and fittings to allow the offloading of petroleum products from four military or commercial tanker-truck vehicles if required.",
                                                                    "A 600 gallon per minute hoseline pump from the TPT support assembly is used with each manifold with various valves, hoses and fittings."
                                                                ]
                                                            }
                                                        ],
                                                        "layout": "third-left",
                                                        "branching": "0100",
                                                        "content": {
                                                            "ementors": [
                                                                {
                                                                    "graphic": {
                                                                        "url": "assets/media/images/ementor_female.jpg",
                                                                        "alt": "Female eMentor icon"
                                                                    },
                                                                    "text": [
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "The Tanker-Truck Receipt Manifold provides the Tactical Petroleum Terminal with valves, hoselines and fittings to allow the offloading of petroleum products from four military or commercial tanker-truck vehicles if required.",
                                                                            "timing": 0
                                                                        },
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "A 600 gallon per minute hoseline pump from the TPT support assembly is used with each manifold with various valves, hoses and fittings. ",
                                                                            "timing": 12
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "slides": [
                                                                {
                                                                    "url": "assets/media/images/B-03/B03_0120_01.jpg",
                                                                    "alt": "Slide 1",
                                                                    "title": "Switching Manifold",
                                                                    "timing": 0,
                                                                    "narration": [
                                                                        {
                                                                            "url": "assets/media/narration/B03_0120.mp3",
                                                                            "text": [
                                                                                "The Tanker-Truck Receipt Manifold provides the Tactical Petroleum Terminal with valves, hoselines and fittings to allow the offloading of petroleum products from four military or commercial tanker-truck vehicles if required.",
                                                                                "A 600 gallon per minute hoseline pump from the TPT support assembly is used with each manifold with various valves, hoses and fittings."
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0130
                                                        "id":"0130",
                                                        "title": "LSA 1 Page 1 Subpage 3",
                                                        "temp": 7.2,
                                                        "elo": 0,
                                                        "narration": [
                                                            {
                                                                "url": "assets/media/narration/B03_0130.mp3",
                                                                "text": "The fuel unit inlet manifold directs fuel into the storage container, while the outlet manifold is used to issue fuel from the storage tank."
                                                            }
                                                        ],
                                                        "layout": "third-left",
                                                        "branching": "0100",
                                                        "content": {
                                                            "ementors": [
                                                                {
                                                                    "graphic": {
                                                                        "url": "assets/media/images/ementor_female.jpg",
                                                                        "alt": "Female eMentor icon"
                                                                    },
                                                                    "text": [
                                                                        {
                                                                            "tag": "p",
                                                                            "content": "The fuel unit inlet manifold directs fuel into the storage container, while the outlet manifold is used to issue fuel from the storage tank.",
                                                                            "timing": 0
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "slides": [
                                                                {
                                                                    "url": "assets/media/images/B-03/B03_0130_01.jpg",
                                                                    "alt": "Slide 1",
                                                                    "title": "The fuel unit inlet manifold",
                                                                    "timing": 0,
                                                                    "narration": [
                                                                        {
                                                                            "url": "assets/media/narration/B03_0120.mp3",
                                                                            "text": "The fuel unit inlet manifold directs fuel into the storage container, while the outlet manifold is used to issue fuel from the storage tank."
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    { //0150
                                        "id":"0150",
                                        "title":"LSA 1 Page 2",
                                        "temp":8.2,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0150.mp3",
                                                "text":"Next, let us talk about terminal facilities. Manifolds are located within terminal facilities and there are three basic types: Base Terminals, Intermediate Terminals, and Head Terminals. Select the buttons below to see more information on each one."
                                            }
                                        ],
                                        "content": {
                                            "instructions": "Next, let us talk about terminal facilities. Manifolds are located within terminal facilities and there are three basic types: Base Terminals, Intermediate Terminals, and Head Terminals. Select the buttons below to see more information on each one.",
                                            "hotspot": {
                                                "image": {
                                                    "url": "assets/media/images/B-03/B03_0160_01.jpg",
                                                    "alt": "alt goes here"
                                                },
                                                "items": [
                                                    {
                                                        "shape": "square",
                                                        "coords": [
                                                            15,
                                                            945,
                                                            500,
                                                            120
                                                        ],
                                                        "title": "Base Terminal",
                                                        "body": [
                                                            {
                                                                "tag": "ul",
                                                                "content": [
                                                                    "Functions as port of entry",
                                                                    "Provide initial storage of petroleum products",
                                                                    "Can be substituted by a Tactical Marine",
                                                                    "Terminal in areas where permanent facilities have not been established",
                                                                    "Can receive and issue fuel at the same time"
                                                                    ]
                                                            }
                                                        ],
                                                        "narration": [
                                                            {
                                                                "url": "assets/media/narration/B03_0150_01.mp3",
                                                                "text": "Base terminals function as ports of entry and provide initial storage of petroleum products from ship to shore operations. Base terminals are usually found in rear areas or could be used at theater of operations. A tactical marine terminal may server as a base terminal where permanent facilities have not been established. Base terminals should have the capacity to receive or issue fuel at the same time."
                                                            }
                                                        ],
                                                        "buttonText": "Base Terminal"
                                                    },
                                                    {
                                                        "shape": "square",
                                                        "coords": [
                                                            715,
                                                            945,
                                                            500,
                                                            120
                                                        ],
                                                        "title": "Intermediate Terminal",
                                                        "body": [
                                                            {
                                                                "tag": "ul",
                                                                "content": [
                                                                    "Serve dual purpose as reserve storage and dispensing installations",
                                                                    "Located along the pipeline"
                                                                ]
                                                            }
                                                        ],
                                                        "narration": [
                                                            {
                                                                "url": "assets/media/narration/B03_0150_02.mp3",
                                                                "text": "Located between the Base and Head terminals, Intermediate terminals have a dual purpose by serving as reserve storage installations and dispensing installations. Intermediate terminals are located along the pipeline to server users to the best advantage."
                                                            }
                                                        ],
                                                        "buttonText": "Intermediate Terminal"
                                                    },
                                                    {
                                                        "shape": "square",
                                                        "coords": [
                                                            1400,
                                                            945,
                                                            500,
                                                            120
                                                        ],
                                                        "title": "Head Terminal",
                                                        "body": [
                                                            {
                                                                "tag": "ul",
                                                                "content": [
                                                                    "May be in service area of independent Corps or Field Army",
                                                                    "Fuel storage capacity may be fixed or portable depending on troop needs, plans for advancement and location of terminal"
                                                                ]
                                                            }
                                                        ],
                                                        "narration": [
                                                            {
                                                                "url": "assets/media/narration/B03_0150_03.mp3",
                                                                "text": "The last terminal in the pipeline, Head terminals are sometimes called pipe head terminals. Bulk storage is also maintained at this terminal. The head terminal may be located in the service area of an independent corps or field army. Fuel storage capacity at these terminals may be fixed or portable depending on troop needs, plans for advancement, and location of the terminal itself."
                                                            }
                                                        ],
                                                        "buttonText": "Head Terminal"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    { //0160
                                        "id":"0160",
                                        "title":"LSA 1 Page 3",
                                        "temp":5,
                                        "elo":0,
                                        "layout":"half-horizontal",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0160.mp3",
                                                "text":"The manifold system can be used to transfer all types of petroleum products in the liquid form. The volume of the product that can flow through the manifold is determined by many factors, including pump size, pump pressure controlled by pump revolutions per minute, pipeline size, valve size, and overall maintenance conditions. When designing a manifold, consideration should be given to the size of the terminal and the number of storage tanks that will be built. Pipeline must be builtconnecting each storage tank to the manifold in order to transfer product to and from the storage tanks. The number of pipelines connected to the manifold system will depend on the type of terminals such as the base terminal, where pipeline goes to and from the dock. In general, one multi-product pipeline will usually run between terminals. Terminals are usually built on level ground to facilitate quick and easy access to all areas. However, storage tanks within the terminals may be located on small hills and valleys for better camouflage. Terminals should be built to allow for future expansion."
                                            }
                                        ],
                                        "content":{
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0160_01.jpg",
                                                    "alt":"Manifold"
                                                }
                                            ],
                                            "text_elements":[
                                                {
                                                    "tag":"p",
                                                    "content":[
                                                        "The manifold system can be used to transfer all types of petroleum products in the liquid form."
                                                    ]
                                                },
                                                {
                                                    "tag":"p",
                                                    "content":[
                                                        "The volume of the product that can flow through the manifold is determined by many factors, including pump size, pump pressure controlled by pump revolutions per minute, pipeline size, valve size, and overall maintenance conditions."
                                                    ]
                                                },
                                                {
                                                    "tag":"p",
                                                    "content":[
                                                        "When designing a manifold, consideration should be given to the size of the terminal and the number of storage tanks that will be built. Pipeline must be built connecting each storage tank to the manifold in order to transfer product to and from the storage tanks."
                                                    ]
                                                },
                                                {
                                                    "tag":"p",
                                                    "content":[
                                                        "The number of pipelines connected to the manifold system will depend on the type of terminals such as the base terminal, where pipeline goes to and from the dock. In general, one multi-product pipeline will usually run between terminals."
                                                    ]
                                                },
                                                {
                                                    "tag":"p",
                                                    "content":[
                                                        "Terminals are usually built on level ground to facilitate quick and easy access to all areas. However, storage tanks within the terminals may be located on small hills and valleys for better camouflage. Terminals should be built to allow for future expansion."
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    { //0170
                                        "id":"0170",
                                        "title":"LSA 1 Page 4",
                                        "temp":17,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0170.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"Identify the following locations by dragging the correct label to each site: Base Terminal, Intermediate Terminal, Head Terminal. Select the submit button when you have finished to continue.",
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor icon"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Identify the following locations by dragging the correct label to each site: Base Terminal, Intermediate Terminal, Head Terminal. Select the submit button when you have finished to continue.",
                                                            "timing": 0
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "correct": "Great job!",
                                            "feedback": "That’s not it. Try again.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-03/B03_0170_01.jpg",
                                                    "alt":"alt goes here"
                                                },
                                                "droppables":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            985,
                                                            461,
                                                            120,
                                                            120
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
                                                            840,
                                                            360,
                                                            120,
                                                            120
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
                                                            960,
                                                            122,
                                                            120,
                                                            120
                                                        ],
                                                        "image_size":[
                                                            150,
                                                            150,
                                                            -83
                                                        ]
                                                    },
                                                ],
                                                "draggables":[
                                                    {
                                                        "icon": true,
                                                        "title": "this is draggable 2",
                                                        "url": "assets/media/images/B-04/B04_0210_04.png"
                                                    },
                                                    {
                                                        "icon": true,
                                                        "title": "this is draggable 3",
                                                        "url": "assets/media/images/B-04/B04_0210_04.png"
                                                    },
                                                    {
                                                        "icon": true,
                                                        "title": "this is draggable 4",
                                                        "url": "assets/media/images/B-04/B04_0210_03.png"
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    { //0180
                                        "id":"0180",
                                        "title":"LSA 1 Page 5",
                                        "temp":15,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0180.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                                "alt":"alt goes here"
                                            },
                                            "prompt":"Which is the best description of a manifold?",
                                            "options":[
                                                {
                                                    "text":"A storage system for containing petroleum products",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"The primary part of a pump",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"A system that strains petroleum products of impurities",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"A piping arrangement which permits a stream of liquid or gas to be divided into multiple streams, or which permits multiple streams to be collected into one",
                                                    "answer":true
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"Please try again.",
                                            "feedback":"The correct answer is a piping arrangement which permits a stream of liquid or gas to be divided into multiple streams, or which permits multiple streams to be collected into one."
                                        }
                                    },
                                    { // 0190
                                        "id":"0190",
                                        "title":"LSA 1 Page 6",
                                        "temp":7.3,
                                        "elo":0,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0190.mp3",
                                                "text": "Gate valves are used in the pipeline to allow maximum flow of fuel and minimum resistance. Completely raising the wedge and disks allows fuel to flow freely and scrapers to pass through the valves. Gate valves may have rising stems or non-rising stems. Both types lower a gate slowly into the fuel stream. Use the arrows to view the differences between Rising Stem and Non-Rising Stem gate valves."
                                            }
                                        ],
                                        "layout":"full",
                                        "content":{
                                            "text_elements":[
                                                {
                                                    "tag":"p",
                                                    "content":"Use the arrows to scroll through the images."
                                                },
                                            ],
                                            "instructions": "Steel gate valves are used in the pipeline about every mile as isolation valves and in the pump stations to block in pumps. The TPT uses aluminum four-inch and six-inch gate valves. There are two types of Gate Valves – Rising Stem Gate Valves and Non-Rising Stem Gate Valves. Use the arrows to view a description along with the advantages and disadvantages of each type.",
                                            "slides":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0190_01_crop.png",
                                                    "alt":"Rising Stem Gate Valve",
                                                    "title":"Rising Stem Gate Valve",
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Hand-wheel does not move",
                                                                "Turn counterclockwise to open, stem sticks out when open",
                                                                "Turn clockwise to close, stem is level with the wheel when closed",
                                                                "Used in pump station as isolation block valves",
                                                                "Used in pipeline at approximately 1-mile intervals",
                                                                "Supplied with pump stations and 5-mile pipeline sets",
                                                                "Skid mounted 6-inch ANSI Class 300 steel valves; flanged to IPDS single groove adapters",
                                                                "Stem protectors for pipeline; no stem protectors for pump stations."
                                                            ]
                                                        }
                                                    ],
                                                    "additional_content":[
                                                        {
                                                            "tag":"h6",
                                                            "content":"Advantages:"
                                                        },
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Position of stem shows if valve is open or closed",
                                                                "Easy to maintain",
                                                                "Allows scraper through",
                                                                "Provides maximum flow of fuel"
                                                            ]
                                                        },
                                                        {
                                                            "tag":"h6",
                                                            "content":"Disadvantages:"
                                                        },
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Easily sabotaged",
                                                                "Requires a lot of headroom",
                                                                "Takes time to open and close"
                                                            ]
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B03_0190_01.mp3",
                                                            "text": "When a gate vale has a rising stem, the hand-wheel remains at the same height as it is turned. Turning the wheel counterclockwise causes a threaded stem in the center to rise bringing the gate up with it. Turning the wheel clockwise causes the stem to move down, lowering the gate in place. The stem sticks out above the wheel when the valve is open, and it is level with the wheel when the valve is closed. Rising stem gate valve assemblies are used in pump stations as isolation block valves and in the pipeline at approximately one-mile intervals. They are supplied with the pump stations and 5-mile pipeline sets. The gate valves are skid mounted 6-inch ANSI Class 300 steel valves with flanged to IPDS single groove adapters. The assemblies supplied for the pipeline have stem protectors. The assemblies supplied for the pump stations do not."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-03/B03_0190_02_crop.png",
                                                    "alt":"Non-Rising Stem Gate Valve",
                                                    "title":"Non-Rising Stem Gate Valve",
                                                    "content":[
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Stem does not move up or down",
                                                                "Gate moves as wheel is turned",
                                                                "6-inch valves with flanged to double groove ends",
                                                                "4-inch valves with flanged to cam-lock ends",
                                                                "Valves are low pressure, maximum working pressure of 150 PSI",
                                                                "Valves are supplied throughout the TPT"
                                                            ]
                                                        }
                                                    ],
                                                    "additional_content":[
                                                        {
                                                            "tag":"h6",
                                                            "content":"Advantages:"
                                                        },
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Less headroom required",
                                                                "Harder to sabotage",
                                                                "Allows scraper through",
                                                                "Provides maximum fuel flow"
                                                            ]
                                                        },
                                                        {
                                                            "tag":"h6",
                                                            "content":"Disadvantages:"
                                                        },
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Cannot tell if the valve is open or closed without actually turning the valve"
                                                            ]
                                                        }
                                                    ],
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B03_0190_02.mp3",
                                                            "text": "When a gate has a non-rising stem, the stem does not move up or down. As the hand-wheel is turned, the gate moves up or down on the threaded stem. The non-rising stem gate valves are 6-inch aluminum valves, with flanged to double groove ends and 4-inch aluminum valves, with flanged to cam-lock ends. These valves are low pressure with a maximum working pressure of 150 PSI. The valves are supplied throughout the TPT."
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    { //0200
                                        "id":"0200",
                                        "title":"LSA 1 Page 7",
                                        "temp":8,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0200.mp3",
                                                "text":"To perform maintenance on gate valves, select each maintenance wrench icon on the screen."
                                            }
                                        ],
                                        "content":{
                                            "instructions":"To perform maintenance on gate valves, select each maintenance wrench icon on the screen.",
                                            "hotspot":{
                                                "image":{
                                                    "url":"assets/media/images/B-03/B03_0200_01.png",
                                                    "alt":"alt goes here"
                                                },
                                                "items":[
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            695,
                                                            650,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 1",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"Ensure that the pack nut is properly tightened when a gate valve is first installed. The nut is not tightened during storage."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0200_01.mp3",
                                                                "text":"Ensure that the pack nut is properly tightened when a gate valve is first installed. The nut is not tightened during storage."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            1075,
                                                            285,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 2",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content":"A gate valve should be operated either in the completely open or completely shut position. It should not be used to slow or throttle fuel by half closing the gate valve. Doing so will cause wear on the disk and it will no longer form a tight seal in the closed position."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0200_02.mp3",
                                                                "text":"A gate valve should be operated either in the completely open or completely shut position. It should not be used to slow or throttle fuel by half closing the gate valve. Doing so will cause wear on the disk and it will no longer form a tight seal in the closed position."
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "shape":"circle",
                                                        "coords":[
                                                            240,
                                                            200,
                                                            120,
                                                            120
                                                        ],
                                                        "title":"Step 3",
                                                        "body":[
                                                            {
                                                                "tag":"p",
                                                                "content": "Operators should back off on the hand-wheel a quarter of a turn to prevent freezing."
                                                            }
                                                        ],
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0200_03.mp3",
                                                                "text":"Operators should back off on the hand-wheel a quarter of a turn to prevent freezing."
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        "id":"0210",
                                        "title":"LSA 1 Page 8",
                                        "temp": 5.3,
                                        "elo": 0,
                                        "layout": "half-horizontal",
                                        "narration": [
                                            {
                                                "url": "assets/media/narration/B03_0210.mp3",
                                                "text": "The following precautions will prolong the life of gate valves. Select each item to view notes on maintenance precautions."
                                            }
                                        ],
                                        "content": {
                                            "instructionleft": "Rising Stem Gate Valves",
                                            "instructionright": "Non-Rising Stem Gate Valves",
                                            "col1selections": [
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Lubricate threads on the rising stem."
                                                        }
                                                    ],
                                                    "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_01.mp3",
                                                            "text": "Lubricate threads on the rising stem. Do this when the valve is open. Use a fine film of motor oil, which is nom-soluble in water. Lubricate mainline gates every six months. Lubricate pump station valves once a month or more."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Tighten the packing nut with even tension if the valve is leaking around the stem."
                                                        }
                                                    ],
                                                    "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                    {
                                                        "url": "assets/media/narration/B03_0210_02.mp3",
                                                        "text": "Tighten the packing nut with even tension if the valve is leaking around the stem."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Repack the valve if tightening the packing nut does not stop the lead."
                                                        }
                                                    ],
                                                    "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_03.mp3",
                                                            "text": "Repack the valve if tightening the packing nut does not stop the lead. "
                                                        }
                                                    ]
                                                }
                                            ],
                                            "col2selections": [
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Close the valve completely to keep fuel in the line."
                                                        }
                                                    ],
                                                    "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_04.mp3",
                                                            "text": "Repack the valve if tightening the packing nut does not stop the lead."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Remove the hand-wheel nut and hand-wheel on the non-rising stem gate valve."
                                                        }
                                                    ],
                                                    "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_05.mp3",
                                                            "text": "Remove the hand-wheel nut and hand-wheel on the non-rising stem gate valve."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Remove the packing nut, packing flange, and gland."
                                                        }
                                                    ]
                                                    , "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_06.mp3",
                                                            "text": "Remove the packing nut, packing flange, and gland."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Remove the old packing from the stuffing box with a packing tool and clean the stuffing box."
                                                        }
                                                    ]
                                                    , "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_07.mp3",
                                                            "text": "Remove the old packing from the stuffing box with a packing tool and clean the stuffing box."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Insert preformed packing into stuffing box. Force packing down firmly into place."
                                                        }
                                                    ]
                                                    , "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_08.mp3",
                                                            "text": "Insert preformed packing into stuffing box. Force packing down firmly into place."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Put gland, packing flange and packing nut back in place. Tighten nut until it is a little more than hand tight."
                                                        }
                                                    ]
                                                    , "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_09.mp3",
                                                            "text": "Put gland, packing flange and packing nut back in place. Tighten nut until it is a little more than hand tight."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "body": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Open valve and check for leaks. If necessary, adjust packing nut to stop the leak."
                                                        }
                                                    ]
                                                    , "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration": [
                                                        {
                                                            "url": "assets/media/narration/B03_0210_10.mp3",
                                                            "text": "Open valve and check for leaks. If necessary, adjust packing nut to stop the leak."
                                                        }
                                                    ]
                                                }
                                            ],
                                            "text_elements": [
                                                {
                                                    "tag": "h6",
                                                    "content": "Terminal Operations"
                                                },
                                                {
                                                    "tag": "ul",
                                                    "content": [
                                                        "Daily Pumping Orders are a timetable showing what fuels are pumped and what action each manifold should take",
                                                        "Pumping Orders are issued from the operator’s office",
                                                        "Review Orders to determine what tanks will be used and what types of operations may be conducted",
                                                        "Operations will include receiving product, issuing product and conducting transfers",
                                                        "Afteroperations valves should be closed in accordance with the Pumping Order and completion should be reported to the operator’s office"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    { //0220
                                        "id":"0220",
                                        "title":"LSA 1 Page 9",
                                        "temp":5.2,
                                        "elo":0,
                                        "layout":"half-horizontal",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0220.mp3",
                                                "text": "Select the buttons below to reveal more information."
                                            }
                                        ],
                                        "content":{
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0220_01.png",
                                                    "alt":"image of IPDS single groove pipe"
                                                }
                                            ],
                                            "instruction": "Select the buttons below to reveal more information.",
                                            "selections": [
                                                {
                                                    "body" : [
                                                        {
                                                            "tag":"p",
                                                            "content": "Check valves are used on the discharge side of pumps and in tank farm manifolds to prevent the backflow of fuel"
                                                        }
                                                    ],
                                                    "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B03_0220_01.mp3",
                                                            "text": "Check valves are used on the discharge side of pumps and in tank farm manifolds to prevent the backflow of fuel."
                                                        }
                                                    ],
                                                },
                                                {
                                                    "body" : [
                                                        {
                                                            "tag":"p",
                                                            "content": "An arrow on top or side of the valve points to the direction in which fuel must flow to open the valve"
                                                        }
                                                    ],
                                                    "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B03_0220_02.mp3",
                                                            "text": "An arrow on top or side of the valve points to the direction in which fuel must flow to open the valve."
                                                        }
                                                    ],
                                                },
                                                {
                                                    "body" : [
                                                        {
                                                            "tag":"p",
                                                            "content": "Check valves are self-operating and need little maintenance other than tightening the cover nuts regularly"
                                                        }
                                                    ],
                                                    "image":
                                                    {
                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                    },
                                                    "narration":[
                                                        {
                                                            "url":"assets/media/narration/B03_0220_03.mp3",
                                                            "text": "Check valves are self-operating and need little maintenance other than tightening the cover nuts regularly."
                                                        }
                                                    ],
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0230",
                                        "title":"LSA 1 Page 10",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "achievement": true,
                                        "branching":"0090",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0230.mp3",
                                                "text":[
                                                    "That concludes our examination of manifolds and terminals. Select the Return button to see what other sections remain for you to complete."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                                "alt":"Pipes"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"That concludes our examination of manifolds and terminals. Select the Return button to see what other sections remain for you to complete."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    }
                                ]
                            },
                            {
                                "title":"Describe Manifold Numbering, Maintenance, and Operation",
                                "id":"0090-1",
                                "pages":[
                                    { //0240
                                        "id":"0240",
                                        "title":"LSA 2 Page 1",
                                        "temp":2,
                                        "elo":0,
                                        "layout":"third-left",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0240.mp3",
                                                "text":"The key to success in operating a manifold is opening and closing the plug values in the manifold in proper sequence to obtain a correct flow pattern. To make valve changes, the operator must always know where the product is to go. Valves must be opened to set up a new flow path before closing any valves in the old flow path. The operation of the manifold is a complex, precise job, which requires that the operator be able to quickly identify which valves need to be opened or closed. The physical layout of the manifold can take some getting used to, as sometimes the correct path will rise and cross over other parts of the manifold. Use the diagram to familiarize yourself with the locations and sequence of valves, but do not lose sight of the physical aspect of the manifold."
                                            }
                                        ],
                                        "branching":"0090",
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0020_01.jpg",
                                                "alt":"alt goes here"
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
                                                            "content":"The operation of the manifold is a complex, precise job, which requires that the operator be able to quickly identify which valves need to be opened or closed.",
                                                            "timing": 0
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "instruction": "Select a topic area to begin.",
                                            "complete_text": "Select the BEGIN MISSION button in the lower right-hand corner to begin.",
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0020_01.jpg",
                                                    "alt":"Image of a manifold"
                                                }
                                            ],
                                            "menu_items":[
                                                {
                                                    "title":"Tanks",
                                                    "location":"0250"
                                                },
                                                {
                                                    "title":"Valves",
                                                    "location":"0260"
                                                },
                                                {
                                                    "title":"Pumps",
                                                    "location":"0270"
                                                }
                                            ],
                                            "trigger_button":{
                                                "title":"Pressure Valves",
                                                "location":"0280"
                                            }
                                        },
                                        "sections": [
                                            {
                                                "title":"Manifold Numbering",
                                                "id":"0240-0",
                                                "pages":[
                                                    {
                                                        "id":"0250",
                                                        "title":"LSA 2 Page 1 Subpage 1",
                                                        "temp":19.3,
                                                        "elo":0,
                                                        "layout":"full",
                                                        "branching": "0240",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0250.mp3",
                                                                "text":[
                                                                    "The first digit or digits in a valve number indicate the tank number. The second digit is the number of the feeder line.",
                                                                    "For example, the storage tank you see here is designated Tank 1. The valves in the feeder line from Tank 1 are numbered from the tank to the manifold in a sequence as follows: 1-1, 1-2, 1-3, etc."
                                                                ]
                                                            }
                                                        ],
                                                        "content":{
                                                            "ementors":[
                                                                {
                                                                    "graphic":{
                                                                        "url":"assets/media/images/ementor_female.jpg",
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
                                                            "instructions":"The first digit or digits in a valve number indicate the tank number. The second digit is the number of the feeder line.<br><br>For example, the storage tank you see here is designated Tank 1. The valves in the feeder line from Tank 1 are numbered from the tank to the manifold in a sequence as follows: 1-1, 1-2, 1-3, etc.",
                                                            "options":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0250_01.png",
                                                                    "alt":"image of a storage tank",
                                                                    "caption":"Storage Tank 1",
                                                                    "timing":12,
                                                                    
                                                                },
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0250_02.jpg",
                                                                    "alt":"image of a valve",
                                                                    "caption":"Valve 1-1",
                                                                    "timing":19,
                                                                    
                                                                },
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0250_03.jpg",
                                                                    "alt":"image of another valve",
                                                                    "caption":"Valve 1-2",
                                                                    "timing":20,
                                                                    
                                                                },
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0250_04.jpg",
                                                                    "alt":"Safety Valve",
                                                                    "timing":0,
                                                                    
                                                                }
                                                            ]                                
                                                        }
                                                    },
                                                    { //0260
                                                        "id":"0260",
                                                        "title":"LSA 2 Page 1 Subpage 2",
                                                        "temp":5,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0260.mp3",
                                                                "text":"Main lines – or line valves – in a manifold system are identified by the letter designation of the line and an assigned valve number. The numbers are assigned in sequence based on direction of flow, except for lines to and from the dock. The valves in these lines are numbered in sequence from the dock."
                                                            }
                                                        ],
                                                        "branching":"0240",
                                                        "content":{
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0260_01.png",
                                                                    "alt":"Manifold"
                                                                }
                                                            ],
                                                            "text_elements":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":[
                                                                        "Main lines – or line valves – in a manifold system are identified by the letter designation of the line and an assigned valve number. The numbers are assigned in sequence based on direction of flow, except for lines to and from the dock. The valves in these lines are numbered in sequence from the dock."
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0270
                                                        "id":"0270",
                                                        "title":"LSA 2 Page 1 Subpage 3",
                                                        "temp":5,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0270.mp3",
                                                                "text":[
                                                                    "Transfer pump valves are identified by a letter/number code. The codes are assigned to valves according to the direction of flow of product through the pump.",
                                                                    "For example, if you had two pumps, the valves for pump number one would be PS1 and PD1. Pump number two would have valves designated PS2 and PD2."
                                                                ]
                                                            }
                                                        ],
                                                        "branching":"0240",
                                                        "content":{
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0270_01.jpg",
                                                                    "alt":"Transfer Pump"
                                                                }
                                                            ],
                                                            "text_elements":[
                                                                {
                                                                    "tag":"p",
                                                                    "content":[
                                                                        "Transfer pump valves are identified by a letter/number code. The codes are assigned to valves according to the direction of flow of product through the pump."
                                                                    ]
                                                                },
                                                                {
                                                                    "tag":"p",
                                                                    "content":[
                                                                        "For example, if you had two pumps, the valves for pump number one would be PS1 and PD1. Pump number two would have valves designated PS2 and PD2."
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
                                        "id":"0280",
                                        "title":"LSA 2 Page 2",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0280.mp3",
                                                "text":[
                                                    "All unpainted surfaces should be painted to prevent rust from forming.",
                                                    "Manifolds should be periodically inspected for leakage and possible tampering. Any discrepancies will be immediately reported to the terminal NCOIC."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0280_01.png",
                                                "alt":"Pipes"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Let’s take a moment to talk about manifold maintenance."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"All unpainted surfaces should be painted to prevent rust from forming."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"Manifolds should be periodically inspected for leakage and possible tampering. Any discrepancies will be immediately reported to the terminal NCOIC."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    },
                                    { //0290
                                        "id":"0290",
                                        "title":"LSA 2 Page 3",
                                        "temp":5.1,
                                        "elo":0,
                                        "layout":"half-horizontal",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0290.mp3",
                                                "text": [
                                                    "Terminal manifolds are operated in accordance with daily pumping orders. The chief dispatcher sends out a daily pumping order which is essentially a timetable showing what fuels are pumped and what action each terminal manifold should take.",
                                                    "Once the pumping order is received from the operator’s office, review the pumping order to determine what tanks will be used and what types of operations may be conducted in a terminal manifold. Operations will include receiving product, issuing product, and conducting intra-terminal transfers.",
                                                    "After all operations, valves should be closed in accordance with the pumping order and completion of operations should be reported to the operations office."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0290_01.jpg",
                                                    "alt":"sample pumping order"
                                                }
                                            ],
                                            "text_elements":[
                                                {
                                                    "tag":"h6",
                                                    "content":"Terminal Operations"
                                                },
                                                {
                                                    "tag":"ul",
                                                    "content":[
                                                        "Daily Pumping Orders are a timetable showing what fuels are pumped and what action each manifold should take",
                                                        "Pumping Orders are issued from the operator’s office",
                                                        "Review Orders to determine what tanks will be used and what types of operations may be conducted",
                                                        "Operations will include receiving product, issuing product and conducting transfers",
                                                        "Afteroperations valves should be closed in accordance with the Pumping Order and completion should be reported to the operator’s office"
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id":"0300",
                                        "title":"LSA 2 Page 4",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "achievement": true,
                                        "branching":"0090",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0300.mp3",
                                                "text":[
                                                    "You should now be able to identify the manifold numbering system. You can also identify necessary maintenance requirements for the manifold and explain how daily pump operations work. Select on the return button to see what other sections remain for you to complete."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                                "alt":"Pipes"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"You should now be able to identify the manifold numbering system. You can also identify necessary maintenance requirements for the manifold and explain how daily pump operations work. Select on the return button to see what other sections remain for you to complete."
                                                        },
                                                    ] 
                                                }
                                            ],
                                        }
                                    }
                                ]
                            },
                            {
                                "title":"Identify Types of Connections and Fittings",
                                "id":"0090-2",
                                "pages":[
                                    { //0310
                                        "id":"0310",
                                        "title":"LSA 3 Page 1",
                                        "temp":2.3,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B02_0310.mp3",
                                                "text":"Next, we are going to look at the types of connections used within the manifolds."
                                            }
                                        ],
                                        "content":{
                                            "instruction": "Select an image below to look at the types of connections used within the manifolds.",
                                            "menu_items":[
                                                {
                                                    "title":"Single-Groove Connection",
                                                    "location":"0320",
                                                    "image": {
                                                        "url":"assets/media/images/B-03/B03_0310_01.png",
                                                        "alt":"Single-Groove Connection"
                                                    }
                                                },
                                                {
                                                    "title":"Double-Groove Connection",
                                                    "location":"0330",
                                                    "image": {
                                                        "url":"assets/media/images/B-03/B03_0310_02.png",
                                                        "alt":"Double-Groove Connection"
                                                    }
                                                },
                                                {
                                                    "title":"Cam-Lock Couplings",
                                                    "location":"0340",
                                                    "image": {
                                                        "url":"assets/media/images/B-03/B03_0310_03.jpg",
                                                        "alt":"Y assembly with Cam-Locks"
                                                    }
                                                },
                                            ],
                                            "trigger_button":{
                                                "title":"Pressure Valves",
                                                "location":"0350"
                                            }
                                        },
                                        "sections": [
                                            {
                                                "title":"Connection Types",
                                                "id":"0310-0",
                                                "pages":[
                                                    { //0320
                                                        "id":"0320",
                                                        "title":"LSA 3 Page 1 Subpage 1",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "branching": "0310",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0320.mp3",
                                                                "text": "Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "content":{
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0320_01.png",
                                                                    "alt":"image of IPDS single groove pipe"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "IPDS pipes have special single-groove design"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Single groove is wider than the standard commercial groove used with most pipelines around the world."
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "IPDS and the standard commercial groove are NOT interchangeable"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Single groove connections are found on high-pressure pipeline and pump stations"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Working pressure is 740 PSI"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                }
                                                            ],
                                                            "text_elements":[
                                                                {
                                                                    "tag":"h6",
                                                                    "content":"Terminal Operations"
                                                                },
                                                                {
                                                                    "tag":"ul",
                                                                    "content":[
                                                                        "Daily Pumping Orders are a timetable showing what fuels are pumped and what action each manifold should take",
                                                                        "Pumping Orders are issued from the operator’s office",
                                                                        "Review Orders to determine what tanks will be used and what types of operations may be conducted",
                                                                        "Operations will include receiving product, issuing product and conducting transfers",
                                                                        "Afteroperations valves should be closed in accordance with the Pumping Order and completion should be reported to the operator’s office"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0330
                                                        "id":"0330",
                                                        "title":"LSA 3 Page 1 Subpage 2",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "branching": "0310",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0330.mp3",
                                                                "text": "Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "content":{
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0330_01.png",
                                                                    "alt":"Image of a double groove end connection"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Two grooves for valve or hose end connections."
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "First groove is compatible with standard commercial pipe."
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "The double groove is for low pressure, used in Tactical Petroleum Terminals. The working pressure used in the TPT is 150 PSI."
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Interchangeable with the double groove coupling."
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                }
                                                            ],
                                                            "text_elements":[
                                                                {
                                                                    "tag":"h6",
                                                                    "content":"Terminal Operations"
                                                                },
                                                                {
                                                                    "tag":"ul",
                                                                    "content":[
                                                                        "Daily Pumping Orders are a timetable showing what fuels are pumped and what action each manifold should take",
                                                                        "Pumping Orders are issued from the operator’s office",
                                                                        "Review Orders to determine what tanks will be used and what types of operations may be conducted",
                                                                        "Operations will include receiving product, issuing product and conducting transfers",
                                                                        "Afteroperations valves should be closed in accordance with the Pumping Order and completion should be reported to the operator’s office"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0340
                                                        "id":"0340",
                                                        "title":"LSA 3 Page 1 Subpage 3",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "branching": "0310",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0340.mp3",
                                                                "text": "Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "content":{
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0340_01.jpg",
                                                                    "alt":"Image of a double groove end connection"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Cam-Lock couplings are quick disconnect fittings."
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Cam-Locks are found on valves and hoses in the Tactical Petroleum Terminal."
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Working pressure is 150 PSI"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    }
                                                                }
                                                            ],
                                                            "text_elements":[
                                                                {
                                                                    "tag":"h6",
                                                                    "content":"Terminal Operations"
                                                                },
                                                                {
                                                                    "tag":"ul",
                                                                    "content":[
                                                                        "Daily Pumping Orders are a timetable showing what fuels are pumped and what action each manifold should take",
                                                                        "Pumping Orders are issued from the operator’s office",
                                                                        "Review Orders to determine what tanks will be used and what types of operations may be conducted",
                                                                        "Operations will include receiving product, issuing product and conducting transfers",
                                                                        "Afteroperations valves should be closed in accordance with the Pumping Order and completion should be reported to the operator’s office"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    { //0350
                                        "id": "0350",
                                        "title": "LSA 3 Page 2",
                                        "temp": 19,
                                        "elo": 0,
                                        "layout": "third-left",
                                        "narration": [
                                            {
                                                "url": "assets/media/narration/B03_0350.mp3",
                                                "text": "We are deploying to support new humanitarian efforts in a country within CENTCOM. As part of the effort, we will be constructing a new IPDS to tank farms further in country. Using what you have learned about connector types, which connector will you use throughout the new IPDS lines?"
                                            }
                                        ],
                                        "content": {
                                            "ementors": [
                                                {
                                                    "graphic": {
                                                        "url": "assets/media/images/ementor_female.jpg",
                                                        "alt": "This guy looks like he would steal from his mother"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag": "p",
                                                            "content": "Which of these components allows for expansion of the product in the tank rail car? Select the best answer to the question. Then, select Submit."
                                                        }
                                                    ]
                                                }
                                            ],
                                            "text": "",
                                            "options": [
                                                {
                                                    "url": "assets/media/images/B-03/B03_0350_02.png",
                                                    "alt": "Double Groove Adapter",
                                                    "answer": false
                                                },
                                                {
                                                    "url": "assets/media/images/B-03/B03_0350_01.png",
                                                    "alt": "Single Groove Adapter",
                                                    "answer": true
                                                },
                                                {
                                                    "url": "assets/media/images/B-03/B03_0350_03.jpg",
                                                    "alt": "Cam Lock Coupling",
                                                    "answer": false
                                                }
                                            ],
                                            "correct": "Great job!",
                                            "incorrect": "That is not it. Remember, the IPDS uses high pressure lines. You will not use a connector that has a low PSI value.",
                                            "feedback": "The correct choice is the single-groove connector."
                                        }
                                    },
                                    { //0355
                                        "id": "0355",
                                        "title": "LSA 3 Page 3",
                                        "temp": 15,
                                        "elo": 0,
                                        "layout": "full",
                                        "narration": [
                                            {
                                                "url": "assets/media/narration/B03_0355.mp3",
                                                "text": "We are deploying to support new humanitarian efforts in a country within CENTCOM. As part of the effort, we will be constructing a new IPDS to tank farms further in country. Using what you have learned about connector types, which connector will you use throughout the new IPDS lines?"
                                            }
                                        ],
                                        "content": {
                                            "background": {
                                                "url": "assets/media/images/B-03/B03_0355_01.png",
                                                "alt": "alt goes here"
                                            },
                                            "prompt": "What are the two “Y” Assembly configurations?",
                                            "options": [
                                                {
                                                    "text": "Single Groove Adapter",
                                                    "answer": false
                                                },
                                                {
                                                    "text": "Double Groove Adapter",
                                                    "answer": true
                                                },
                                                {
                                                    "text": "Cam-Lock Coupling",
                                                    "answer": false
                                                },
                                            ],
                                            "correct": "Great job!",
                                            "incorrect": "That is not it. Remember, the TPT is a low pressure area. You should choose the connector that has a low PSI value.",
                                            "feedback": "The correct choice was the double-groove connector.",
                                            "ementors": [
                                                {
                                                    "graphic": {
                                                        "url": "assets/media/images/ementor_female.jpg",
                                                        "alt": "This guy looks like he would steal from his mother"
                                                    },
                                                    "narrations": [
                                                        {
                                                            "ementor_narration_url": "E-mentor Narration Url goes here",
                                                            "ementor_narration_text": "E-mentor Narration Text goes here"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    { // 0356
                                        "id":"0356",
                                        "title":"LSA 3 Page 4",
                                        "temp":7.3,
                                        "elo":0,
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_365.mp3",
                                                "text": "Now, we are going to review fittings that are used throughout the Tactical Petroleum Terminal and the IPDS. Use the arrows to navigate through the images."
                                            }
                                        ],
                                        "layout":"full",
                                        "content":{
                                            "text_elements":[
                                                {
                                                    "tag":"p",
                                                    "content":"Use the arrows to scroll through the images."
                                                },
                                            ],
                                            "instructions": "Now, we are going to review fittings that are used throughout the Tactical Petroleum Terminal and the IPDS. Use the arrows to navigate through the images.",
                                            "slides":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0356_01.jpg",
                                                    "alt":"“T” Assembly",
                                                    "title":"“T” Assembly",
                                                    "content":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Tees are used to provide side outlets in the TPT. Six-inch double-grooved tees are used throughout the TPT (in the switching manifold, fuel dispensing assembly, tanker truck receipt manifold and other places)."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"There are 4-inch cam-lock tees of different configurations, which are also used in the TPT."
                                                        }
                                                        
                                                    ],
                                                    "additional_content":[
                                                        {
                                                            "tag":"h6",
                                                            "content":"Notes:"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"To perform maintenance, tighten 4-inch cam-lock tee’s nut and bolt at the flanges."
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"If leak does not stop, remove nut and bolt at the flange and replace gasket."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-03/B03_0356_02.png",
                                                    "alt":"Reducer",
                                                    "title":"Reducer",
                                                    "content":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Tees are used to provide side outlets in the TPT. Six-inch double-grooved tees are used throughout the TPT (in the switching manifold, fuel dispensing assembly, tanker truck receipt manifold and other places)."
                                                        }
                                                    ],
                                                    "additional_content":[
                                                        {
                                                            "tag":"h6",
                                                            "content":"Notes:"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"There are no notes for this item"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-03/B03_0356_03.jpg",
                                                    "alt":"6” Double Groove Clamps",
                                                    "title":"6” Double Groove Clamps",
                                                    "content":[
                                                        {
                                                            "tag":"p",
                                                            "content":"6-inch double groove malleable iron coupling clamps are used in the TPT."
                                                        }
                                                    ],
                                                    "additional_content":[
                                                        {
                                                            "tag":"h6",
                                                            "content":"Notes:"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"There are no notes for this item"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-03/B03_0356_04.png",
                                                    "alt":"Single Groove Clamps",
                                                    "title":"Single Groove Clamps",
                                                    "content":[
                                                        {
                                                            "tag":"p",
                                                            "content":"Single groove malleable iron coupling clamps may be used throughout the TPT. The single groove clamps are compatible with double groove connections – they fit into only the first groove of the double groove components. The gasket is exactly the same as the double groove coupling."
                                                        }
                                                        
                                                    ],
                                                    "additional_content":[
                                                        {
                                                            "tag":"h6",
                                                            "content":"Notes:"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"4-inch single groove couplings are Victaulic style and used in the fuel dispensing assembly and in the tanker truck receipt manifold."
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-03/B03_0356_05.jpg",
                                                    "alt":"“Y” Assembly",
                                                    "title":"“Y” Assembly",
                                                    "content":[
                                                        {
                                                            "tag":"p",
                                                            "content":"The “Y” Assembly 4-inch cam-lock is used in the 50,000 gallon TPT optional tank configuration and can come in a MALE/MALE/FEMALE issue or a FEMALE/FEMALE/MALE issue."
                                                        }
                                                        
                                                    ],
                                                    "additional_content":[
                                                        {
                                                            "tag":"h6",
                                                            "content":"Notes:"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"There are no notes for this item"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "url":"assets/media/images/B-03/B03_0356_06.jpg",
                                                    "alt":"Adapter Assembly",
                                                    "title":"Adapter Assembly",
                                                    "content":[
                                                        {
                                                            "tag":"p",
                                                            "content":"There are several Adapter Assemblies used throughout the IPDS and TPT. These include:"
                                                        },
                                                        {
                                                            "tag":"ul",
                                                            "content":[
                                                                "Cam-Lock male by double groove, 6-inch. This adapter is used in the tank farm assembly. It is connected to the inlet hose going to the elbow coupler on top of the tank.",
                                                                "Coupling adapter assembly, cam-lock female by double groove, 6-inch. This adapter is used in the tank farm assembly. It is connected to the gate valve on the suction line leading from the 5,000 barrel collapsible fabric tanks.",
                                                                "Adapter Assembly, Water Detection Kit. This is found in the fuel dispensing assembly and is located on the outgoing line of the filter separator. It is used to take fuel samples after fuel has passed through the filter separator."
                                                            ]
                                                        }
                                                    ],
                                                    "additional_content":[
                                                        {
                                                            "tag":"h6",
                                                            "content":"Notes:"
                                                        },
                                                        {
                                                            "tag":"p",
                                                            "content":"There are no notes for this item"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    { //0357
                                        "id":"0357",
                                        "title":"LSA 3 Page 5",
                                        "temp":15,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0357.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0355_01.png",
                                                "alt":"alt goes here"
                                            },
                                            "prompt":"What are the two “Y” Assembly configurations?",
                                            "options":[
                                                {
                                                    "text":"M/M and M/F",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"F/F/F and M/M/M",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"M/F/M and F/M/F",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"M/M/F and F/F/M",
                                                    "answer":true
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is M/M/F and F/F/M.",
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
                                    { //0360
                                        "id": "0360",
                                        "title": "LSA 3 Page 6",
                                        "temp": 7,
                                        "elo": 0,
                                        "layout": "full",
                                        "achievement": true,
                                        "branching": "0090",
                                        "narration": [
                                            {
                                                "url": "assets/media/narration/B03_0360.mp3",
                                                "text": [
                                                    "You should now be able to identify connection types used throughout the manifold. Select the return button to see what other sections remain for you to complete."
                                                ]
                                            }
                                        ],
                                        "content": {
                                            "background": {
                                                "url": "assets/media/images/B-03/B03_0355_01.png",
                                                "alt": "Pipes"
                                            },
                                            "ementors": [
                                                {
                                                    "graphic": {
                                                        "url": "assets/media/images/ementor_female.jpg",
                                                        "alt": "Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag": "p",
                                                            "content": "You should now be able to identify connection types used throughout the manifold. Select the return button to see what other sections remain for you to complete."
                                                        },
                                                    ]
                                                }
                                            ],
                                        }
                                    },
                                ]
                            },
                            {
                                "title":"Identify Types and Maintenance Procedures of Pressure Valves",
                                "id":"0090-3",
                                "pages":[
                                    { //0370 with branching
                                        "id":"0370",
                                        "title":"LSA 4 Page 1",
                                        "temp":2,
                                        "elo":0,
                                        "layout":"half-horizontal",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0370.mp3",
                                                "text":[
                                                    "In this segment, we will be looking at Pressure Valves. We will cover identifying each of the valves you will encounter and touch upon maintenance tasks you will need to perform.",
                                                    "There are several valves to cover, where do you want to start?"
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "instruction": "In this segment, we will be looking at Pressure Valves. We will cover identifying each of the valves you will encounter and touch upon maintenance tasks you will need to perform.<br><br>There are several valves to cover, where do you want to start?",
                                            "images":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                                    "alt":"Image of rail tank car at petroleum training facility"
                                                }
                                            ],
                                            "menu_items":[
                                                {
                                                    "title":"Pressure Relief Valve",
                                                    "location":"0380"
                                                },
                                                {
                                                    "title":"Thermal Relief Valve",
                                                    "location":"0390"
                                                },
                                                {
                                                    "title":"Pressure Regulating Valve",
                                                    "location":"0400"
                                                },
                                                {
                                                    "title":"Ball Valve",
                                                    "location":"0410"
                                                },
                                                {
                                                    "title":"Globe Valve",
                                                    "location":"0420"
                                                },
                                                {
                                                    "title":"Pressure Control Valve",
                                                    "location":"0430"
                                                },
                                            ],
                                            "trigger_button":{
                                                "title":"Pressure Valves",
                                                "location":"0440"
                                            }
                                        },
                                        "sections": [
                                            {
                                                "title":"Pressure Valves",
                                                "id":"0370-0",
                                                "pages":[
                                                    { //0380
                                                        "id":"0380",
                                                        "title":"LSA 4 Page 1 Subpage 1",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0380.mp3",
                                                                "text":"Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "branching":"0370",
                                                        "content":{ //half-horizontal
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0380_01.png",
                                                                    "alt":"image of pressure relief valve"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Used to release pressure when it has built up to such a point that a rupture might occur in a line or tank"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0380_01.mp3",
                                                                            "text": "Used to release pressure when it has built up to such a point that a rupture might occur in a line or tank."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Valves can be set to open at a certain pressure"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0380_02.mp3",
                                                                            "text": "Valves can be set to open at a certain pressure."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Pressure Relief Valves need little maintenance"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0380_03.mp3",
                                                                            "text": "Pressure Relief Valves need little maintenance."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Valves should be tested yearly using a reliable pressure gauge"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0380_03.mp3",
                                                                            "text": "Valves should be tested yearly using a reliable pressure gauge."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Valves are factory set and should not need adjusting"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0380_03.mp3",
                                                                            "text": "Valves are factory set and should not need adjusting."
                                                                        }
                                                                    ],
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0390
                                                        "id":"0390",
                                                        "title":"LSA 4 Page 1 Subpage 2",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0390.mp3",
                                                                "text":"Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "branching":"0370",
                                                        "content":{ //half-horizontal
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0390_01.png",
                                                                    "alt":"image of pressure relief valve"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Used to relieve pressure buildup from within the pipeline by thermal expansion of product"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0390_01.mp3",
                                                                            "text": "Used to relieve pressure buildup from within the pipeline by thermal expansion of product."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Discharges small quantities of fuel through the drain hose to relieve the pipeline of pressure buildup"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0390_02.mp3",
                                                                            "text": "Discharges small quantities of fuel through the drain hose to relieve the pipeline of pressure buildup."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Set to open at approximately 900 PSI. Can be adjusted downward"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0390_03.mp3",
                                                                            "text": "Set to open at approximately 900 PSI. Can be adjusted downward."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Located on the launcher and receiver assembly"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0390_03.mp3",
                                                                            "text": "Located on the launcher and receiver assembly."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Thermal Relief Valves should be removed, serviced, and tested routinely every six months"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0390_03.mp3",
                                                                            "text": "Thermal Relief Valves should be removed, serviced, and tested routinely every six months."
                                                                        }
                                                                    ],
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0400
                                                        "id":"0400",
                                                        "title":"LSA 4 Page 1 Subpage 3",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0400.mp3",
                                                                "text":"Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "branching":"0370",
                                                        "content":{ //half-horizontal
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0400_01.png",
                                                                    "alt":"image of pressure regulating valve"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Used to reduce the pressure of the incoming pipeline fluid to below the 150 PSI working pressure of the fuel unit or TPT"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0400_01.mp3",
                                                                            "text": "Used to reduce the pressure of the incoming pipeline fluid to below the 150 PSI working pressure of the fuel unit or TPT."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "The PRV is a dual control valve that will not open unless upstream pressure is 50 PSI or above and downstream pressure is 125 PSI or less"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0400_02.mp3",
                                                                            "text": "The PRV is a dual control valve that will not open unless upstream pressure is 50 PSI or above and downstream pressure is 125 PSI or less."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Located at the TPT’s End of the Line or Head Terminals to limit pressure into the TPT Switching Manifold to below 125 PSI and to maintain a line pressure of 50 PSI or above during operations and shutdown"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0400_03.mp3",
                                                                            "text": "Located at the TPT’s End of the Line or Head Terminals to limit pressure into the TPT Switching Manifold to below 125 PSI and to maintain a line pressure of 50 PSI or above during operations and shutdown."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Pressure Regulating Valves are generally maintenance free"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0400_03.mp3",
                                                                            "text": "Pressure Regulating Valves are generally maintenance free."
                                                                        }
                                                                    ],
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0410
                                                        "id":"0410",
                                                        "title":"LSA 4 Page 1 Subpage 4",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0410.mp3",
                                                                "text":"Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "branching":"0370",
                                                        "content":{ //half-horizontal
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0410_01.png",
                                                                    "alt":"image of ball valve"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "A ball valve is a quick acting valve with a rotating ball with a hole through it that lest fuel flow straight through when the valve is in the open position"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0410_01.mp3",
                                                                            "text": "A ball valve is a quick acting valve with a rotating ball with a hole through it that lest fuel flow straight through when the valve is in the open position."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Ball valves are not used in the mainline pipe system due to scraper size"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0410_02.mp3",
                                                                            "text": "Ball valves are not used in the mainline pipe system due to scraper size."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "The blue paint seen is used to prevent thermal pressure buildup"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0410_03.mp3",
                                                                            "text": "The blue paint seen is used to prevent thermal pressure buildup."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Replace the packing in the valve when it is too compressed to lubricate the valve adequately and tightening the packing nut no longer stops a leak around the valve stern"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0410_03.mp3",
                                                                            "text": "Replace the packing in the valve when it is too compressed to lubricate the valve adequately and tightening the packing nut no longer stops a leak around the valve stern."
                                                                        }
                                                                    ],
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0420
                                                        "id":"0420",
                                                        "title":"LSA 4 Page 1 Subpage 5",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0420.mp3",
                                                                "text":"Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "branching":"0370",
                                                        "content":{ //half-horizontal
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0420_01.jpg",
                                                                    "alt":"image of pressure globe valve"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Globe valves are used in tank farm manifolds to regulate or throttle the flow of fuel"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0420_01.mp3",
                                                                            "text": "Globe valves are used in tank farm manifolds to regulate or throttle the flow of fuel."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Turning the handwheel clockwise will limit the flow of fuel through the valve and slow the speed of the stream"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0420_02.mp3",
                                                                            "text": "Turning the handwheel clockwise will limit the flow of fuel through the valve and slow the speed of the stream."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Glove valves are not used in mainline pipeline systems because scrapers cannot pass through them"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0420_03.mp3",
                                                                            "text": "Glove valves are not used in mainline pipeline systems because scrapers cannot pass through them."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Replace the packing in the valve when it is too compressed to lubricate the valve adequately and tightening the packing nut no longer stops a leak around the valve stern"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0420_03.mp3",
                                                                            "text": "Replace the packing in the valve when it is too compressed to lubricate the valve adequately and tightening the packing nut no longer stops a leak around the valve stern."
                                                                        }
                                                                    ],
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    { //0430
                                                        "id":"0430",
                                                        "title":"LSA 4 Page 1 Subpage 6",
                                                        "temp":5.2,
                                                        "elo":0,
                                                        "layout":"half-horizontal",
                                                        "narration":[
                                                            {
                                                                "url":"assets/media/narration/B03_0430.mp3",
                                                                "text":"Select the buttons below to reveal more information."
                                                            }
                                                        ],
                                                        "branching":"0370",
                                                        "content":{ //half-horizontal
                                                            "images":[
                                                                {
                                                                    "url":"assets/media/images/B-03/B03_0430_01.jpg",
                                                                    "alt":"image of pressure control valve"
                                                                }
                                                            ],
                                                            "instruction": "Select the buttons below to reveal more information.",
                                                            "selections": [
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "The Pressure Control Valve is a back-pressure relief/regulator. Back-pressure controllers are installed to maintain dispensing pressure of 30 PSI"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0420_01.mp3",
                                                                            "text": "The Pressure Control Valve is a back-pressure relief/regulator. Back-pressure controllers are installed to maintain dispensing pressure of 30 PSI."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Inspect the small strainer on the pilot tube at least every 3 months; clean the strainer when necessary"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0420_02.mp3",
                                                                            "text": "Inspect the small strainer on the pilot tube at least every 3 months; clean the strainer when necessary."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Remove the diaphragm and inspect it once a year for wear and breaks in the synthetic rubber material; in the event of a rupture or break, the valve will close automatically – remove and replace the valve"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0420_03.mp3",
                                                                            "text": "Remove the diaphragm and inspect it once a year for wear and breaks in the synthetic rubber material; in the event of a rupture or break, the valve will close automatically – remove and replace the valve."
                                                                        }
                                                                    ],
                                                                },
                                                                {
                                                                    "body" : [
                                                                        {
                                                                            "tag":"p",
                                                                            "content": "Tighten the nuts if the valve is leaking at the top or at the flange adapter"
                                                                        }
                                                                    ],
                                                                    "image": {
                                                                        "url": "assets/media/images/icons/Icon_Wrench.png"
                                                                    },
                                                                    "narration":[
                                                                        {
                                                                            "url":"assets/media/narration/B03_0420_03.mp3",
                                                                            "text": "Tighten the nuts if the valve is leaking at the top or at the flange adapter."
                                                                        }
                                                                    ],
                                                                }
                                                            ]
                                                        }
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        "id":"0440",
                                        "title":"LSA 4 Page 2",
                                        "temp":19.2,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0440.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female eMentor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"Which of these components allows for expansion of the product in the tank rail car? Select the best answer to the question. Then, select Submit."
                                                        }
                                                    ] 
                                                }
                                            ],
                                            "instructions":"Use the drop-down box to select the correct maintenance intervals. Then press submit to continue.",
                                            "options":[
                                                {
                                                    "url":"assets/media/images/B-03/B03_0440_01.jpg",
                                                    "alt":"Pressure relief valve",
                                                    "answer": 3
                                                },
                                                {
                                                    "url":"assets/media/images/B-03/B03_0440_02.png",
                                                    "alt":"Thermal relief valve",
                                                    "answer": 2
                                                },
                                                {
                                                    "url":"assets/media/images/B-03/B03_0440_03.jpg",
                                                    "alt":"Pressure control valve",
                                                    "answer": 1
                                                }
                                            ],
                                            "dropdown": [
                                                "Monthly",
                                                "Every three months",
                                                "Every six months",
                                                "Yearly"
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"Something is not quite right. Try again.",
                                            "feedback":"The correct answers are shown below."
                                        }
                                    },
                                    { //0450
                                        "id":"0450",
                                        "title":"LSA 4 Page 3",
                                        "temp":15,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0450.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                                "alt":"alt goes here"
                                            },
                                            "prompt":"Which of these valves is NOT used in the mainline pipe system?",
                                            "options":[
                                                {
                                                    "text":"Pressure Control Valve",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Pressure Relief Valve",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Ball Valve",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"Thermal Relief Valve",
                                                    "answer":false
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is Ball Valve.",
                                        }
                                    },
                                    { //0460
                                        "id":"0460",
                                        "title":"LSA 4 Page 4",
                                        "temp":15,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0460.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                                "alt":"alt goes here"
                                            },
                                            "prompt":"What kind of valves are designed to open when a certain pressure is reached?",
                                            "options":[
                                                {
                                                    "text":"Pressure-Relief Valve",
                                                    "answer":true
                                                },
                                                {
                                                    "text":"Pressure Control Valve",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Pressure Monitor Valve",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Pressure Vent Valve",
                                                    "answer":false
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is Pressure-Relief Valve"
                                        }
                                    },
                                    { //0470
                                        "id":"0470",
                                        "title":"LSA 4 Page 5",
                                        "temp":15,
                                        "elo":0,
                                        "layout":"full",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0470.mp3",
                                                "text":"Select the best answer to the question. Then, select Submit."
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0010_01.jpg",
                                                "alt":"alt goes here"
                                            },
                                            "prompt":"Which valve discharges small quantities of fuel through a drain hose to relieve the pipeline of pressure buildup?",
                                            "options":[
                                                {
                                                    "text":"Check Valve",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Pressure Regulator Valve",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Ball Valve",
                                                    "answer":false
                                                },
                                                {
                                                    "text":"Thermal Relief Valve",
                                                    "answer":true
                                                }
                                            ],
                                            "correct":"Great job!",
                                            "incorrect":"This answer is incorrect; please try again",
                                            "feedback":"The correct answer is Thermal Relief Valve"
                                        }
                                    },
                                    { // 0480
                                        "id":"0480",
                                        "title":"LSA 4 Page 6",
                                        "temp":7,
                                        "elo":0,
                                        "layout":"full",
                                        "achievement": true,
                                        "branching":"0090",
                                        "narration":[
                                            {
                                                "url":"assets/media/narration/B03_0480.mp3",
                                                "text":[
                                                    "You should now be able to identify types and maintenance procedures of pressure valves. Select the return button to see what other sections remain for you to complete."
                                                ]
                                            }
                                        ],
                                        "content":{
                                            "background": {
                                                "url":"assets/media/images/B-03/B03_0020_01.jpg",
                                                "alt":"Image of underside of tank rail car -that outlet needs a spill container!"
                                            },
                                            "ementors":[
                                                {
                                                    "graphic":{
                                                        "url":"assets/media/images/ementor_female.jpg",
                                                        "alt":"Female Ementor"
                                                    },
                                                    "text": [
                                                        {
                                                            "tag":"p",
                                                            "content":"You should now be able to identify types and maintenance procedures of pressure valves. Select the return button to see what other sections remain for you to complete."
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
                        "id":"0500",
                        "title":"Summary",
                        "temp":22,
                        "elo":0,
                        "layout":"third-left",
                        "narration":[
                            {
                                "url":"assets/media/narration/B03_0500.mp3",
                                "text":[
                                    "Congratulations! You completed the module. Let’s see how many challenge coins you earned. Nice job.",
                                    "You have reached the end of the Railcar and Depot, and Truck Stand Transfer Operations lesson. During this lesson we covered a lot of important information that you will need to carry with you throughout your career. Good luck in the remainder of your training."
                                ]
                            }
                        ],
                        "content":{
                            "background": {
                                "url":"assets/media/images/B-03/B03_0500_01.png",
                                "alt":"alt goes here"
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
                                            "content":"You have completed this lesson. During this lesson, you covered the topics listed on the screen. Good luck in the remainder of your training.",
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
                                        "content":"You have completed this lesson. During this lesson, you covered the topics listed on the screen. Good luck in the remainder of your training."
                                    }
                                ],
                                "tasks":[
                                    {
                                        "text": "Types and Attributes of Manifolds",
                                        "timing": 0
                                    },
                                    {
                                        "text": "Manifold Numbering, Maintenance and Operation",
                                        "timing": 0
                                    },
                                    {
                                        "text": "Types of Connections and Fittings",
                                        "timing": 0,
                                    },
                                    {
                                        "text": "Types and Maintenance Procedures of Pressure Valves",
                                        "timing": 0,
                                    },
                                    {
                                        "text": "Transfer Operations",
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
