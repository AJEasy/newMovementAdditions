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
        "id": "B01",
        "title": "Petroleum Theater of Operations"
    },
    "content": {
        "sections": [{
            "title": "Describe Petroleum Support in a Developed or Undeveloped Theater of Operations",
            "id": "0000-0",
            "pages": [{
                    "id": "0010",
                    "title": "Welcome",
                    "temp": 0,
                    "elo": 0,
                    "layout": "third-left",
                    "narration": [{
                        "url": "assets/media/narration/B01_0010.mp3",
                        "text": "Welcome to the Petroleum Theater of Operations lesson."
                    }],
                    "content": {
                        "title_text": "Petroleum Theater of Operations",
                        "title_background": "assets/media/backgrounds/background_1.jpg",
                        "images": [{
                                "url": "assets/media/images/B-01/B01_0010_01.jpg",
                                "alt": "Naval ship conducting an Off-Shore Petroleum Distribution System exercise"
                            },
                            {
                                "url": "assets/media/images/B-01/B01_0010_02.jpg",
                                "alt": "Ocean viewing inland to beach"
                            }
                        ]
                    }
                },
                {
                    "id": "0020",
                    "title": "Mission Statement",
                    "temp": 6,
                    "elo": 0,
                    "layout": "full",
                    "narration": [{
                        "url": "assets/media/narration/B01_0020.mp3",
                        "text": "The distribution and storing of bulk petroleum presents a significant logistical challenge to the joint force. Providing forces with the right fuel, in the right place, and at the right time requires planning to determine peacetime and wartime requirements, arrange for bulk storage, move products forward to and within the theater, ensure quality control, issue and account for the fuel, and maintain distribution equipment and facilities."
                    }],
                    "content": {
                        "background": {
                            "url": "assets/media/images/B-01/B01_0020_01.jpg",
                            "alt": "Mission Image"
                        },
                        "text_elements": [{
                                "tag": "h6",
                                "content": "Mission:"
                            },
                            {
                                "tag": "ol",
                                "content": [
                                    "Provide forces the right fuel",
                                    "Provide fuel at the right place",
                                    "Provide fuel at the right time"
                                ]
                            }
                        ],

                        "graphics": [{
                            "url": "assets/media/images/B-01/B01_0020_01.jpg",
                            "alt": "Mission Image"
                        }],
                    },

                },
                {
                    "id": "0030",
                    "title": "Introduction",
                    "temp": 2,
                    "elo": 0,
                    "layout": "half-horizontal",
                    "narration": [{
                        "url": "assets/media/narration/B01_0030.mp3",
                        "text": " Please read over the safety requirements for this training."
                    }],
                    "content": {
                        "instruction": "Please select an area to begin.",
                        "text": "TODO Insert Instruction Text here",
                        "images": [{
                            "url": "assets/media/images/B-01/B01_0030_01.jpg",
                            "alt": "this is a branching image"
                        }],
                        "menu_items": [{
                                "title": "Objectives",
                                "location": "0040",
                                "completion": false
                            },
                            {
                                "title": "Learning Step Activities",
                                "location": "0050",
                                "completion": false
                            },
                            {
                                "title": "Safety Requirements",
                                "location": "0060",
                                "completion": false
                            },
                            {
                                "title": "Risk Assessment / Environmental Considerations",
                                "location": "0070",
                                "completion": false
                            }
                        ],
                        "trigger_button": {
                            "title": "Scenario",
                            "location": "0080"
                        }
                    },
                    "sections": [{
                        "title": "Introduction",
                        "id": "0020-0",
                        "pages": [{
                                "id": "0040",
                                "title": "Objectives",
                                "temp": 3,
                                "elo": 0,
                                "layout": "full",
                                "branching": "0030",
                                "narration": [{
                                    "url": "assets/media/narration/B01_0040.mp3",
                                    "text": " Please read over the safety requirements for this training."
                                }],
                                "content": {
                                    "objectives": [{
                                            "type": "tlo",
                                            "image": {
                                                "url": "assets/media/images/B-01/B01_0040_01.jpg",
                                                "alt": "alt goes here"
                                            },
                                            "title": "Terminal Learning Objective",
                                            "description": "Apply Tactical Petroleum Operations",
                                            "action": "Apply Tactical Petroleum Operations",
                                            "conditions": "Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction, with consideration for the operational environment, given Interactive Multimedia Instruction and all appropriate resources.",
                                            "standard": "Apply petroleum logistics fundamentals with an 80% tolerance for accuracy."
                                        },
                                        {
                                            "type": "elo",
                                            "image": {
                                                "url": "assets/media/images/B-01/B01_0040_02.jpg",
                                                "alt": "alt goes here"
                                            },
                                            "title": "Enabling Learning Objective",
                                            "description": "Describe Petroleum Support in a Developed or Undeveloped Theater of Operations",
                                            "action": "Describe Each Military Branches Role in Providing Fuel Support in a Developed and Undeveloped Theater of Operations",
                                            "conditions": "Acting as a Petroleum Supply Specialist, during Interactive Multimedia Instruction with consideration for the operational environment, given, safety requirements, and interactive multimedia instructions",
                                            "standard": "Describe each military branches role in providing fuel support in a developed and undeveloped theater by identifying the correct flow of fuel in a given scenario accurately and without error."
                                        }
                                    ]
                                }
                            },
                            {
                                "id": "0050",
                                "title": "Learning Step Activities",
                                "temp": 5,
                                "elo": 0,
                                "narration": [{
                                    "url": "assets/media/narration/B01_0050.mp3",
                                    "text": "Please read over the safety requirements for this training."
                                }],
                                "layout": "half-vertical",
                                "branching": "0030",
                                "content": {
                                    "text_elements": [{
                                            "tag": "h6",
                                            "content": "Learning Step Activities (LSA):"
                                        },
                                        {
                                            "tag": "ul",
                                            "content": [
                                                "LSA 1-Describe the Petroleum Operating Concept",
                                                "LSA 2-Discuss the Role of Each service Branch in Petroleum Operations",
                                                "LSA 3-Review the Steps Associated with Petroleum Product from Arrival to End User",
                                                "LSA 4-Review the Army Inland Distribution Systems"
                                            ]
                                        }
                                    ],
                                    "images": [{
                                        "url": "assets/media/images/B-01/B01_0050_01.jpg",
                                        "alt": "alt goes here"
                                    }]
                                }
                            },
                            {
                                "id": "0060",
                                "title": "Safety Requirements",
                                "temp": 1,
                                "elo": 0,
                                "layout": "third-top",
                                "branching": "0030",
                                "narration": [{
                                    "url": "assets/media/narration/B01_0060.mp3",
                                    "text": " Please read over the safety requirements for this training."
                                }],
                                "content": {
                                    "text_elements": [{
                                            "tag": "p",
                                            "content": "These are the safety precautions you must follow during this training:"
                                        },
                                        {
                                            "tag": "ol",
                                            "content": [
                                                "While in the classroom you must be aware of the possibility of a fire.",
                                                "If a fire occurs, exit the building, and form up in the student staging area.",
                                                "The class President/Vice-president will take attendance and report to the instructor.",
                                                "You will not re-enter the building until told to do so by the Instructor. "
                                            ]
                                        }
                                    ],
                                    "graphics": [{
                                        "url": "assets/media/images/mission.png",
                                        "alt": "Black background with gold text that reads Army Safe is Army Strong."
                                    }]
                                }
                            },
                            {
                                "id": "0070",
                                "title": "Risk Assessment / Environmental Considerations",
                                "temp": 5,
                                "elo": 0,
                                "narration": [{
                                    "url": "assets/media/narration/B01_0070.mp3",
                                    "text": " Please read over the safety requirements for this training."
                                }],
                                "layout": "half-vertical",
                                "branching": "0030",
                                "content": {
                                    "text_elements": [{
                                        "tag": "ul",
                                        "content": [
                                            "This training is assigned a Risk Level of Low.",
                                            "No danger to the environment exists during this block of instruction."
                                        ]
                                    }],
                                    "images": [{
                                        "url": "assets/media/images/B-01/B01_0070_01.jpg",
                                        "alt": "alt goes here"
                                    }]
                                }
                            }
                        ]
                    }]
                },
                {
                    "id": "0080",
                    "title": "LSA Menu",
                    "temp": 2.2,
                    "elo": 0,
                    "layout": "third-left",
                    "narration": [{
                        "url": "assets/media/narration/B01_0080.mp3",
                        "text": [
                            "Welcome, Soldier. Before you begin any task or mission, there is important information you need to know about Joint Petroleum Distribution.",
                            "As you work through the information you will have a chance to earn challenge coins. You will do this by completing assigned activities correctly. Each time you get it correct; you will receive a coin.",
                            "We will alert you throughout the module, so you know when you have a chance to earn one. At the end of the module, you will see how many you have successfully earned.",
                            "We are counting on you to be ready for the upcoming tasks and assignments. Good luck!"
                        ]
                    }],
                    "content": {
                        "background": {
                            "url": "assets/media/images/B-01/B01_0020_01.jpg",
                            "alt": "alt goes here"
                        },
                        "ementors": [{
                            "graphic": {
                                "url": "assets/media/images/ementor_female.jpg",
                                "alt": "This guy looks like he would steal from his mother"
                            },
                            "text": [{
                                    "tag": "p",
                                    "content": "Welcome, Soldier. Before you begin any task or mission, there is important information you need to know about Joint Petroleum Distribution.",
                                    "timing": 0
                                },
                                {
                                    "tag": "p",
                                    "content": "As you work through the information you will have a chance to earn challenge coins. You will do this by completing assigned activities correctly. Each time you get it correct; you will receive a coin.",
                                    "timing": 9
                                },
                                {
                                    "tag": "p",
                                    "content": "You will be alerted throughout the module, so you know when you have a chance to earn one. At the end of the module, you will see how many you have successfully earned.",
                                    "timing": 21
                                },
                                {
                                    "tag": "p",
                                    "content": "We are counting on you to be ready for the upcoming tasks and assignments. Good luck!",
                                    "timing": 31
                                }
                            ]
                        }],
                        "instruction": "Select each option to view the required information.",
                        "menu_items": [{
                                "title": "Petroleum Operating Concept",
                                "location": "0090",
                                "completion": false
                            },
                            {
                                "title": "Role of Each Branch in Petroleum Operations",
                                "location": "0140",
                                "completion": false
                            },
                            {
                                "title": "Steps from Arrival to End User",
                                "location": "0120",
                                "completion": false
                            },
                            {
                                "title": "Inland Petroleum Distribution System",
                                "location": "0160",
                                "completion": false
                            },
                            {
                                "title": "Developed Versus Undeveloped Theaters",
                                "location": "0100",
                                "completion": false
                            }
                        ],
                        "trigger_button": {
                            "title": "Final Exercise",
                            "location": "0180"
                        }
                    },
                    "sections": [{
                            "title": "Petroleum Operating Concept",
                            "id": "0080-0",
                            "pages": [{
                                "id": "0090",
                                "title": "LSA 1 Page 1",
                                "temp": 21.01,
                                "elo": 0,
                                "narration": [{
                                    "url": "assets/media/narration/B01_0090.mp3",
                                    "text": " Please read over the safety requirements for this training."
                                }],
                                "layout": "full",
                                "branching": "0080",
                                "content": {
                                    "text_elements": [{
                                        "tag": "p",
                                        "content": "Use the arrows to scroll through the images."
                                    }, ],
                                    "slides": [{
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 1",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "The primary mission of the petroleum operating concept is to keep storage tanks full."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "The primary mission of the petroleum operating concept is to keep storage tanks full.",
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 2",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "Providing the right fuel at the right place and time is a key logistics consideration."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "Providing the right fuel at the right place and time is a key logistics consideration."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 3",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "Bulk Petroleum support to joint operations requires the Services to develop complementary tactical distribution systems and trained personnel to meet combatant command (CCMD) requirements."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "Bulk Petroleum support to joint operations requires the Services to develop complementary tactical distribution systems and trained personnel to meet combatant command (CCMD) requirements."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 4",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "The Defense Logistics Agency (DLA) is required to provide fuel to all Service component missions. "
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "The Defense Logistics Agency (DLA) is required to provide fuel to all Service component missions."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 5",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "The nature of joint bulk petroleum support will vary depending on the theater environment, capabilities, and whether force employment is single-Service, Joint, or multinational."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "The nature of joint bulk petroleum support will vary depending on the theater environment, capabilities, and whether force employment is single-Service, Joint, or multinational."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 6",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "Bulk petroleum requires special handling and storage and has a demand significantly larger than other supply classes."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "Bulk petroleum requires special handling and storage and has a demand significantly larger than other supply classes."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 7",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "For these reasons any viable support concept should incorporate the principles of standardization, flexibility, and interoperability."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "For these reasons any viable support concept should incorporate the principles of standardization, flexibility, and interoperability."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 8",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "Standardization- DOD components should minimize the types of bulk petroleum products that must be stocked and distributed, plan to use fuels readily available worldwide, and minimize the military-unique characteristics of DOD fuels."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "Standardization- DOD components should minimize the types of bulk petroleum products that must be stocked and distributed, plan to use fuels readily available worldwide, and minimize the military-unique characteristics of DOD fuels."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 9",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "Flexibility- In operational Environments that might not support single-fuel operations, forces need to have equipment that can operate with available products."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "Flexibility- In operational Environments that might not support single-fuel operations, forces need to have equipment that can operate with available products."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 10",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "Interoperability- Interoperable fuel-handling equipment and connectors between components and when possible, multinational forces allow for more timely distribution and support with greater efficiency."
                                            },
                                            "content": [{
                                                "tag": "p",
                                                "content": [
                                                    "Interoperability- Interoperable fuel-handling equipment and connectors between components and when possible, multinational forces allow for more timely distribution and support with greater efficiency."
                                                ]
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 11",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "What is considered a key logistical consideration for Petroleum Operations?"
                                            },
                                            "content": [{
                                                "tag": "question",
                                                "content": {
                                                    "prompt": "What is considered a key logistical consideration for Petroleum Operations?",
                                                    "type": "mc",
                                                    "answers": "2_mc",
                                                    "alternatives": [{
                                                            "text": "Keep storage tanks full.",
                                                        },
                                                        {
                                                            "text": "Develop tactical distribution system and trained personnel.",
                                                        },
                                                        {
                                                            "text": "Providing the right fuel at the right place and right time.",
                                                        }
                                                    ],
                                                    "correct": "Correct!",
                                                    "incorrect": "This answer is incorrect; please try again",
                                                }
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 12",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "What is the primary mission of the petroleum operating concept?"
                                            },
                                            "content": [{
                                                "tag": "question",
                                                "content": {
                                                    "prompt": "What is the primary mission of the petroleum operating concept?",
                                                    "type": "mc",
                                                    "answers": "1_mc",
                                                    "alternatives": [{
                                                            "text": "To provide general support to other services.",
                                                        },
                                                        {
                                                            "text": "To keep storage tanks full.",
                                                        },
                                                        {
                                                            "text": "To determine the theater of operation needs.",
                                                        }
                                                    ],
                                                    "correct": "Correct!",
                                                    "incorrect": "This answer is incorrect; please try again",
                                                }
                                            }]
                                        },
                                        {
                                            "url": "assets/media/images/B-01/B01_0090_01.png",
                                            "alt": "Slide 13",
                                            "title": "",
                                            "narration": {
                                                "url": "Narration Url",
                                                "text": "A viable support concept should incorporate the principles of "
                                            },
                                            "content": [{
                                                "tag": "question",
                                                "content": {
                                                    "prompt": "A viable support concept should incorporate the principles of _________",
                                                    "type": "mc",
                                                    "answers": "0_mc",
                                                    "alternatives": [{
                                                            "text": "Standardization, flexibility, and interoperability.",
                                                        },
                                                        {
                                                            "text": "Standardization, mobilization, and interoperability.",
                                                        },
                                                        {
                                                            "text": "Standardization, flexibility, and sustainment.",
                                                        }
                                                    ],
                                                    "correct": "Correct!",
                                                    "incorrect": "This answer is incorrect; please try again",
                                                }
                                            }]
                                        }
                                    ]
                                }
                            }]
                        },
                        {
                            "title": "Role of Each Branch in Petroleum Operations",
                            "id": "0080-1",
                            "pages": [{
                                    "id": "0140",
                                    "title": "LSA 2 Page 1",
                                    "temp": 10,
                                    "elo": 0,
                                    "layout": "third-left",
                                    "narration": [{
                                        "url": "assets/media/narration/B01_0140.mp3",
                                        "text": "Select each service seal to reveal the information. Select the cards as many times as you like to remember the information."
                                    }],
                                    "content": {
                                        "ementors": [{
                                            "graphic": {
                                                "url": "assets/media/images/ementor_female.jpg",
                                                "alt": "Female E-Mentor"
                                            },
                                            "text": [{
                                                "tag": "p",
                                                "content": "Select each service seal to reveal the information. Select the cards as many times as you like to remember the information."
                                            }, ]
                                        }],
                                        "tiles": [{
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_01.png",
                                                    "alt": "Army Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Army"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "Provides management of overland petroleum support to land-based forces from all DOD components."
                                                    }
                                                ]
                                            }, {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_03.png",
                                                    "alt": "Air Force Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Air Force"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "USAF maintains the capability to provide tactical support to the USA units at improved and austere locations."
                                                    }
                                                ]
                                            },

                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_02.png",
                                                    "alt": "Marine Corps Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Marine Corps"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "Maintains a capability to provide bulk petroleum support to U.S. Marine Corps units."
                                                    }
                                                ]
                                            },

                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_02.png",
                                                    "alt": "Marine Corps Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Marine Corps"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "May be tasked to provide petroleum support to any joint force and/or MNF, as directed by the JFC."
                                                    }
                                                ]
                                            },

                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_01.png",
                                                    "alt": "Army Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Army"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "Provides necessary force structure to install, operate, and protect tactical petroleum storage and distribution systems, including pipeline."
                                                    }
                                                ]
                                            },
                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_04.png",
                                                    "alt": "Navy Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Navy"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "Provides seaward and over-the-shore bulk petroleum products to the high-water mark for US sea-based and land-based forces of all DOD components."
                                                    }
                                                ]
                                            },
                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_03.png",
                                                    "alt": "Air Force Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Air Force"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "Provides distribution of bulk petroleum products by air where immediate support is needed at remote locations."
                                                    }
                                                ]
                                            }, {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_04.png",
                                                    "alt": "Navy Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Navy"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "Maintains the capability to provide bulk petroleum support to naval forces afloat and ashore."
                                                    }
                                                ]
                                            },
                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0140_01.png",
                                                    "alt": "Army Seal Card"
                                                },
                                                "back": [{
                                                        "tag": "h2",
                                                        "content": "Army"
                                                    },
                                                    {
                                                        "tag": "p",
                                                        "content": "In theater, provides a system that transports bulk petroleum inland from the high-water mark of the designated ocean beach (IPDS/OPDS operations)."
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": "0150",
                                    "title": "LSA 2 Page 2",
                                    "temp": 10.5,
                                    "elo": 0,
                                    "layout": "third-left",
                                    "achievement": true,
                                    "branching": "0080",
                                    "narration": [{
                                        "url": "assets/media/narration/B01_0150.mp3",
                                        "text": "Select the statement, then select the exact seal the information is located under. When you are finished, select Submit to see if you earned a challenge coin.  "
                                    }],
                                    "content": {
                                        "ementors": [{
                                            "graphic": {
                                                "url": "assets/media/images/ementor_female.jpg",
                                                "alt": "Female E-Mentor"
                                            },
                                            "text": [{
                                                "tag": "p",
                                                "content": "Select the statement, then select the exact seal the information is located under. When you are finished, select Submit to see if you earned a challenge coin.  "
                                            }, ]
                                        }],
                                        "statements": [{
                                                "text": "May be tasked to provide petroleum support to any joint force and/or MNF, as directed by the JFC.",
                                                "answer": 0
                                            },
                                            {
                                                "text": "Provides distribution of bulk petroleum products by air where immediate support is needed at remote locations.",
                                                "answer": 2
                                            },
                                            {
                                                "text": "Provides necessary force structure to install, operate, and protect tactical petroleum storage and distribution systems, including pipeline.",
                                                "answer": 3
                                            },
                                            {
                                                "text": "Provides seaward and over-the-shore bulk petroleum products to the high-water mark for US sea-based and land-based forces of all DOD components.",
                                                "answer": 1
                                            }
                                        ],
                                        "tiles": [{
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0150_02.png",
                                                    "alt": "Marine Seal"
                                                }
                                            },
                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0150_04.png",
                                                    "alt": "Navy Seal"
                                                }
                                            },
                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0150_03.png",
                                                    "alt": "Air Force Seal"
                                                }
                                            },
                                            {
                                                "front": {
                                                    "url": "assets/media/images/B-01/B01_0150_01.png",
                                                    "alt": "Army Seal"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Steps from Arrival to End User",
                            "id": "0080-2",
                            "pages": [{
                                    "id": "0120",
                                    "title": "LSA 3 Page 1",
                                    "temp": 7.2,
                                    "elo": 0,
                                    "narration": [{
                                        "url": "assets/media/narration/B01_0120.mp3",
                                        "text": ["Actual procedures to accomplish the delivery of products to the end user depend on the sources of product and conditions in the operational environment. Let’s take a look at one way fuel arrives and is transferred to the end user. Fuel moved from the Fuel Source to Bulk Storage.",
                                            "Next, the fuel can be transferred to Bulk Storage in the field. This is done by truck, pipeline, barge, or railcar.",
                                            "Then, it can be moved one of two ways: Fuel can be transferred to collapsible tanks in the field with fuel being transferred to a truck to the end user or trucks can fill directly from the fixed storage tanks or collapsible tanks.",
                                            "From there, fuel is moved directly to the end user."
                                        ]
                                    }],
                                    "layout": "third-left",
                                    "content": {
                                        "ementors": [{
                                            "graphic": {
                                                "url": "assets/media/images/ementor_female.jpg",
                                                "alt": "Female eMentor icon"
                                            },
                                            "text": [{
                                                    "tag": "p",
                                                    "content": "Actual procedures to accomplish the delivery of products to the end user depend on the sources of product and conditions in the operational environment. Let’s take a look at one way fuel arrives and is transferred to the end user. Fuel moved from the Fuel Source to Bulk Storage.",
                                                    "timing": 0
                                                },
                                                {
                                                    "tag": "p",
                                                    "content": "Next, the fuel can be transferred to Bulk Storage in the field. This is done by truck, pipeline, barge, or railcar.",
                                                    "timing": 17
                                                },
                                                {
                                                    "tag": "p",
                                                    "content": "Then, it can be moved one of two ways: Fuel can be transferred to collapsible tanks in the field with fuel being transferred to a truck to the end user or trucks can fill directly from the fixed storage tanks or collapsible tanks.",
                                                    "timing": 26
                                                },
                                                {
                                                    "tag": "p",
                                                    "content": "Then, it can be moved one of two ways: Fuel can be transferred to collapsible tanks in the field with fuel being transferred to a truck to the end user or trucks can fill directly from the fixed storage tanks or collapsible tanks.",
                                                    "timing": 34
                                                },
                                                {
                                                    "tag": "p",
                                                    "content": "From there, fuel is moved directly to the end user.",
                                                    "timing": 39
                                                }
                                            ]
                                        }],
                                        "slides": [{
                                                "url": "assets/media/images/B-01/B01_0120_01.png",
                                                "alt": "Slide 1",
                                                "title": "Fuel Source to Bulk Storage",
                                                "timing": "0",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "Actual procedures to accomplish the delivery of products to the end user depend on the sources of product and conditions in the operational environment. Let’s take a look at one way fuel arrives and is transferred to the end user. Fuel moved from the Fuel Source to Bulk Storage."
                                                },
                                                "content": [{
                                                    "tag": "ul",
                                                    "content": [
                                                        "Actual procedures to accomplish the delivery of products to the end user depend on the sources of product and conditions in the operational environment. Let’s take a look at one way fuel arrives and is transferred to the end user. Fuel moved from the Fuel Source to Bulk Storage."
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0120_02.png",
                                                "alt": "Slide 2",
                                                "title": "Bulk Storage in Field",
                                                "timing": "14",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "Next, the fuel can be transferred to Bulk Storage in the field. This is done by truck, pipeline, barge, or railcar."
                                                },
                                                "content": [{
                                                    "tag": "ul",
                                                    "content": [
                                                        "Next, the fuel can be transferred to Bulk Storage in the field. This is done by truck, pipeline, barge, or railcar."
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0120_03.png",
                                                "alt": "Slide 3",
                                                "title": "Fuel Movement pt. 1",
                                                "timing": "18",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "Then, it can be moved one of two ways: Fuel can be transferred to collapsible tanks in the field with fuel being transferred to a truck to the end user or trucks can fill directly from the fixed storage tanks or collapsible tanks."
                                                },
                                                "content": [{
                                                    "tag": "ul",
                                                    "content": [
                                                        "Then, it can be moved one of two ways: Fuel can be transferred to collapsible tanks in the field with fuel being transferred to a truck to the end user or trucks can fill directly from the fixed storage tanks or collapsible tanks."
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0120_04.png",
                                                "alt": "Slide 4",
                                                "title": "Fuel Movement pt. 2",
                                                "timing": "34",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "Then, it can be moved one of two ways: Fuel can be transferred to collapsible tanks in the field with fuel being transferred to a truck to the end user or trucks can fill directly from the fixed storage tanks or collapsible tanks."
                                                },
                                                "content": [{
                                                    "tag": "ul",
                                                    "content": [
                                                        "Then, it can be moved one of two ways: Fuel can be transferred to collapsible tanks in the field with fuel being transferred to a truck to the end user or trucks can fill directly from the fixed storage tanks or collapsible tanks."
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0120_06.png",
                                                "alt": "Slide 5",
                                                "title": "End User",
                                                "timing": "39",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "From there, fuel is moved directly to the end user."
                                                },
                                                "content": [{
                                                    "tag": "ul",
                                                    "content": [
                                                        "From there, fuel is moved directly to the end user."
                                                    ]
                                                }]
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": "0130",
                                    "title": "LSA 3 Page 2",
                                    "temp": 17,
                                    "elo": 0,
                                    "layout": "third-left",
                                    "achievement": true,
                                    "narration": [{
                                        "url": "assets/media/narration/B01_0130.mp3",
                                        "text": ["It is time to earn a challenge coin. Select each icon, then select the area it goes within the diagram to depict the flow of fuel from arrival to end user.",
                                            "When you are finished, select Submit to see if you earned a challenge coin."
                                        ]
                                    }],
                                    "content": {
                                        "ementors": [{
                                            "graphic": {
                                                "url": "assets/media/images/ementor_female.jpg",
                                                "alt": "Female eMentor icon"
                                            },
                                            "text": [{
                                                "tag": "p",
                                                "content": "It is time to earn a challenge coin. Select each icon, then select the area it goes within the diagram to depict the flow of fuel from arrival to end user. When you are finished, select Submit to see if you earned a challenge coin.",
                                                "timing": 0
                                            }]
                                        }],
                                        "correct": "Congratulations!",
                                        "feedback": "This answer is incorrect.",
                                        "hotspot": {
                                            "image": {
                                                "url": "assets/media/images/B-01/B01_0130_10.png",
                                                "alt": "alt goes here"
                                            },
                                            "droppables": [{
                                                    "shape": "circle",
                                                    "coords": [
                                                        40,
                                                        150,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 1",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 1 pulls the right content."
                                                    }],
                                                },
                                                {
                                                    "shape": "circle",
                                                    "coords": [
                                                        465,
                                                        130,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 2",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 2 pulls the right content."
                                                    }]
                                                },
                                                {
                                                    "shape": "circle",
                                                    "coords": [
                                                        790,
                                                        327,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 3",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 3 pulls the right content."
                                                    }]
                                                },
                                                {
                                                    "shape": "circle",
                                                    "coords": [
                                                        1078,
                                                        164,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 4",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 4 pulls the right content."
                                                    }]
                                                },
                                                {
                                                    "shape": "circle",
                                                    "coords": [
                                                        1091,
                                                        344,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 5",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 4 pulls the right content."
                                                    }]
                                                },
                                                {
                                                    "shape": "circle",
                                                    "coords": [
                                                        1091,
                                                        564,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 6",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 4 pulls the right content."
                                                    }]
                                                },
                                                {
                                                    "shape": "circle",
                                                    "coords": [
                                                        1498,
                                                        143,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 7",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 4 pulls the right content."
                                                    }]
                                                },
                                                {
                                                    "shape": "circle",
                                                    "coords": [
                                                        1504,
                                                        341,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 8",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 4 pulls the right content."
                                                    }]
                                                },
                                                {
                                                    "shape": "circle",
                                                    "coords": [
                                                        1499,
                                                        556,
                                                        370,
                                                        370
                                                    ],
                                                    "title": "hotspot 9",
                                                    "body": [{
                                                        "tag": "p",
                                                        "content": "This is a test to see if Item 4 pulls the right content."
                                                    }]
                                                }
                                            ],
                                            "draggables": [{
                                                    "title": "this is draggable 1",
                                                    "url": "assets/media/images/B-01/B01_0130_01-icon.png"
                                                },
                                                {
                                                    "title": "this is draggable 2",
                                                    "url": "assets/media/images/B-01/B01_0130_02-icon.png"
                                                },
                                                {
                                                    "title": "this is draggable 3",
                                                    "url": "assets/media/images/B-01/B01_0130_03-icon.png"
                                                },
                                                {
                                                    "title": "this is draggable 4",
                                                    "url": "assets/media/images/B-01/B01_0130_04-icon.png"
                                                },
                                                {
                                                    "title": "this is draggable 5",
                                                    "url": "assets/media/images/B-01/B01_0130_05-icon.png"
                                                },
                                                {
                                                    "title": "this is draggable 6",
                                                    "url": "assets/media/images/B-01/B01_0130_06-icon.png"
                                                },
                                                {
                                                    "title": "this is draggable 7",
                                                    "url": "assets/media/images/B-01/B01_0130_07-icon.png"
                                                },
                                                {
                                                    "title": "this is draggable 8",
                                                    "url": "assets/media/images/B-01/B01_0130_08-icon.png"
                                                },
                                                {
                                                    "title": "this is draggable 9",
                                                    "url": "assets/media/images/B-01/B01_0130_09-icon.png"
                                                }
                                            ]
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Inland Petroleum Distribution System",
                            "id": "0080-3",
                            "pages": [{
                                    "id": "0160",
                                    "title": "LSA 4 Page 1",
                                    "temp": 7.2,
                                    "elo": 0,
                                    "layout": "third-left",
                                    "narration": [{
                                        "url": "assets/media/narration/B01_0160.mp3",
                                        "text": ["Review the infographic and the statements provided. When you are ready, advance to the next activity."]
                                    }],
                                    "content": {
                                        "ementors": [{
                                            "graphic": {
                                                "url": "assets/media/images/ementor_female.jpg",
                                                "alt": "Female E-mentor"
                                            },
                                            "text": [{
                                                "tag": "lg",
                                                "content": [
                                                    "IPDS: Inland Petroleum Distribution System",
                                                    "The IPDS is a multi-product system consisting of both commercially available and military standard petroleum equipment that can be assembled by military personnel. ",
                                                    "When assembled the IPDS provides the military with the capability required to support an operational force with bulk fuels.",
                                                    "The IPDS is made up of three primary subsystems: Tactical Petroleum Terminal, Pipeline Segments, and Pump Stations.",
                                                    "The pipeline constructed to support Operation IRAQI FREEDOM is the longest operational IPDS tactical fuel pipeline the Army has ever constructed.",
                                                    "The IPDS is a coupled type of pipeline construction and can be installed rapidly.",
                                                    "Large-scale operations may justify the construction of coupled pipeline using the IPDS to move bulk petroleum forward from rear area storage locations. "
                                                ]
                                            }]
                                        }],
                                        "slides": [{
                                            "url": "assets/media/images/B-01/B01_0160_01.png",
                                            "alt": "Inland Petroleum Distribution System",
                                            "title": "Inland Petroleum Distribution System",
                                            "timing": "0",
                                        }]

                                    }
                                },
                                {
                                    "id": "0170",
                                    "title": "LSA 4 Page 2",
                                    "temp": 13,
                                    "elo": 0,
                                    "layout": "third-left",
                                    "branching": "0080",
                                    "narration": [{
                                        "url": "assets/media/narration/B01_0170.mp3",
                                        "text": "Spin the wheel to reveal a statement. Then, select whether the statement is True or False. Once you have chosen, select Submit to reveal the answer. Select Spin to begin."
                                    }],
                                    "content": {
                                        "ementors": [{
                                            "graphic": {
                                                "url": "assets/media/images/ementor_female.jpg",
                                                "alt": "Female E-mentor"
                                            },
                                            "text": [{
                                                "tag": "p",
                                                "content": "Spin the wheel to reveal a statement. Then, select whether the statement is True or False. Once you have chosen, select Submit to reveal the answer. Select Spin to begin."
                                            }, ]
                                        }],
                                        "questions": [{
                                                "type": "tf",
                                                "prompt": "IPDS: Inland Petroleum Distribution Station",
                                                "answer": 0
                                            },
                                            {
                                                "type": "tf",
                                                "prompt": "When assembled the IPDS provides the military with the capability required to support an operational force with bulk fuels.",
                                                "answer": 1
                                            },
                                            {
                                                "type": "tf",
                                                "prompt": "The IPDS is made up of three primary subsystems: Tactical Petroleum Terminal, Pipeline Segments, and Pump Stations.",
                                                "answer": 1
                                            },
                                            {
                                                "type": "tf",
                                                "prompt": "The IPDS is a welded type of pipeline construction and can be installed rapidly.",
                                                "answer": 0
                                            }
                                        ],
                                        "correct": "Nice job!",
                                        "incorrect": "This answer is incorrect."
                                    }
                                },
                            ]
                        },
                        {
                            "title": "Developed Versus Undeveloped Theaters",
                            "id": "0080-4",
                            "pages": [{
                                    "id": "0100",
                                    "title": "LSA 5 Page 1",
                                    "temp": 21,
                                    "elo": 0,
                                    "narration": [{
                                        "url": "assets/media/narration/B01_0090.mp3",
                                        "text": "Select \"Begin\" to view the information. To advance, select \"Next Item.\""
                                    }],
                                    "layout": "full",
                                    "content": {
                                        "text_elements": [{
                                            "tag": "p",
                                            "content": "Use the arrows to scroll through the images."
                                        }, ],
                                        "slides": [{
                                                "url": "assets/media/images/B-01/B01_0100_01.png",
                                                "alt": "Slide 1",
                                                "title": "Truck",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "There are two theaters of operation: Developed and Undeveloped"
                                                },
                                                "content": [{
                                                    "tag": "p",
                                                    "content": [
                                                        "There are two theaters of operation: Developed and Undeveloped ",
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0100_01.png",
                                                "alt": "Slide 2",
                                                "title": "Truck",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "A Theater of Operations is the area where military operations are taking place."
                                                },
                                                "content": [{
                                                    "tag": "p",
                                                    "content": [
                                                        "A Theater of Operations is the area where military operations are taking place."
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0100_01.png",
                                                "alt": "Slide 3",
                                                "title": "Truck",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "An Undeveloped Theater distributes bulk petroleum fuel using various temporary, rapidly employed systems."
                                                },
                                                "content": [{
                                                    "tag": "p",
                                                    "content": [
                                                        "An Undeveloped Theater distributes bulk petroleum fuel using various temporary, rapidly employed systems."
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0100_01.png",
                                                "alt": "Slide 4",
                                                "title": "Truck",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "A Developed Theater does not generally procure local bulk petroleum; it is received from ocean vessels at marine terminals and transferred by pipeline to tank farms."
                                                },
                                                "content": [{
                                                    "tag": "p",
                                                    "content": [
                                                        "A Developed Theater does not generally procure local bulk petroleum; it is received from ocean vessels at marine terminals and transferred by pipeline to tank farms. "
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0100_01.png",
                                                "alt": "Slide 5",
                                                "title": "Truck",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "In a Developed Theater semi-permanent to permanent bulk petroleum storage facilities may be implemented."
                                                },
                                                "content": [{
                                                    "tag": "p",
                                                    "content": [
                                                        "In a Developed Theater semi-permanent to permanent bulk petroleum storage facilities may be implemented."
                                                    ]
                                                }]
                                            },
                                            {
                                                "url": "assets/media/images/B-01/B01_0100_01.png",
                                                "alt": "Slide 6",
                                                "title": "Truck",
                                                "narration": {
                                                    "url": "Narration Url",
                                                    "text": "In an Undeveloped Theater the OPDS, IPDS, TPT and other flexible systems are used."
                                                },
                                                "content": [{
                                                    "tag": "p",
                                                    "content": [
                                                        "In an Undeveloped Theater the OPDS, IPDS, TPT and other flexible systems are used."
                                                    ]
                                                }]
                                            }

                                        ]
                                    }
                                },
                                {
                                    "id": "0110",
                                    "title": "LSA 5 Page 2",
                                    "temp": 16,
                                    "elo": 0,
                                    "layout": "third-left-graphic",
                                    "narration": [{
                                        "url": "assets/media/narration/B01_0110.mp3",
                                        "text": "It is time to earn a challenge coin. Select the correct statements that apply to developed and undeveloped theaters. When you are done, select Submit to see if you earned a coin. Good Luck!"
                                    }],
                                    "achievement": true,
                                    "branching": "0080",
                                    "content": {
                                        "ementors": [{
                                            "graphic": {
                                                "url": "assets/media/images/ementor_female.jpg",
                                                "alt": "This guy looks like he would steal from his mother"
                                            },
                                            "narrations": [{
                                                "ementor_narration_url": "assets/media/narration/B01_0110.mp3",
                                                "ementor_narration_text": "It’s time to earn a challenge coin. Select the correct statements that apply to developed and undeveloped theaters. When you are done, select Submit to see if you earned a coin."
                                            }],
                                            "text": [{
                                                "tag": "p",
                                                "content": "It is time to earn a challenge coin. Select the correct statements that apply to developed and undeveloped theaters. When you are done, select Submit to see if you earned a coin. Good Luck!"
                                            }, ]
                                        }],
                                        "draggables": [{
                                                "content": "There are two theaters of operation: Developed and Undeveloped."
                                            },
                                            {
                                                "content": "A theater of Operations is the area where military operations are taking place."
                                            },
                                            {
                                                "content": "A Developed Theater does not generally procure local bulk petroleum; it is received from ocean vessels at marine terminals and transferred by pipeline to tank farms."
                                            },
                                            {
                                                "content": "In an Undeveloped Theater the OPDS, IPDS, TPT and other flexible systems are used."
                                            },
                                            {
                                                "content": "A Developed Theater distributes bulk petroleum fuel using various temporary, rapidly employed systems."
                                            },
                                            {
                                                "content": "In an Undeveloped Theater semi-permanent to permanent bulk petroleum storage facilities may be implemented."
                                            },
                                        ],
                                        "correct": "Great job!",
                                        "incorrect": "Incorrect",
                                        "feedback": "Incorrect"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "0180",
                    "title": "Final Exercise",
                    "temp": 21.2,
                    "elo": 0,
                    "layout": "third-left",
                    "achievement": true,
                    "narration": [{
                        "url": "assets/media/narration/B01_0180.mp3",
                        "text": "It is time for your final challenge coin. Read each scenario and choose the correct flow of fuel. When you have completed all three, select “Submit” to see if you earned a challenge coin. We are counting on you. Good luck!"
                    }],
                    "content": {
                        "image": {
                            "url": "assets/media/images/B-01/B01_0180_01.jpg",
                            "alt": "MV Wheeler-Multi-Mission Vessel"
                        },
                        "ementors": [{
                            "graphic": {
                                "url": "assets/media/images/ementor_female.jpg",
                                "alt": "Female eMentor icon"
                            },
                            "text": [{
                                "tag": "p",
                                "content": "It is time for your final challenge coin. Read each scenario and choose the correct flow of fuel. When you have completed all three, select “Submit” to see if you earned a challenge coin."
                            }, ]
                        }],
                        "questions": [{
                                "type": "mc",
                                "label": "Scenario 1",
                                "prompt": "Aircraft in the area needs fuel to leave for a mission. Select the correct and most efficient flow of fuel route beginning at Bulk Storage and ending at the Helicopter",
                                "alternatives": [{
                                        "text": "B, F, E, D, G",
                                        "answer": true
                                    },
                                    {
                                        "text": "A, C, J, H, E, D, G",
                                        "answer": false
                                    },
                                    {
                                        "text": "B, F, E, H, K",
                                        "answer": false
                                    }
                                ],
                                "answers": [0]
                            },
                            {
                                "type": "mc",
                                "label": "Scenario 2",
                                "prompt": "We need to get fuel out to the field area for use in an upcoming mission. Select the correct and most efficient flow of fuel route beginning at the Fuel Source and ending at Bulk Storage in the Field/Forward Operating Base.",
                                "alternatives": [{
                                        "text": "A, B, F",
                                        "answer": false
                                    },
                                    {
                                        "text": "A, C, J",
                                        "answer": true
                                    },
                                    {
                                        "text": "B, F, E",
                                        "answer": false
                                    }
                                ],
                                "answers": [1]
                            },
                            {
                                "type": "mc",
                                "label": "Scenario 3",
                                "prompt": "A small tactical vehicle is stranded without fuel. Select the correct flow of fuel route beginning with a Storage/Issue Point and ending at the tactical vehicle.",
                                "alternatives": [{
                                        "text": "J, H, E",
                                        "answer": false
                                    },
                                    {
                                        "text": "F, E, D, I",
                                        "answer": false
                                    },
                                    {
                                        "text": "E, D, I",
                                        "answer": true
                                    }
                                ],
                                "answers": [2]
                            }
                        ],
                        "correct": "Nice job!",
                        "incorrect": "This answer is incorrect.",
                        "feedback": "You got X out of 5 right."
                    }
                },
                {
                    "id": "0190",
                    "title": "Summary",
                    "temp": 22,
                    "elo": 0,
                    "layout": "third-left",
                    "narration": [{
                        "url": "assets/media/narration/B01_0190.mp3",
                        "text": [
                            "Congratulations you completed the module. Let’s see how many challenge coins you earned. Nice job.",
                            "This module Described the Petroleum Operating Concept, Discussed the Role of Each Service Branch in Petroleum Operations, Reviewed the Steps Associated with Petroleum Product from Arrival to End User, and Reviewed the Army Inland Distribution System. Good luck with your next module."
                        ]
                    }],
                    "content": {
                        "background": {
                            "url": "assets/media/images/B-01/B01_0020_01.jpg",
                            "alt": "alt goes here"
                        },
                        "ementors": [{
                            "graphic": {
                                "url": "assets/media/images/ementor_female.jpg",
                                "alt": "Female eMentor icon"
                            },
                            "text": [{
                                    "tag": "p",
                                    "content": "Congratulations you completed the module. Let’s see how many challenge coins you earned. Nice job.",
                                    "timing": 0
                                },
                                {
                                    "tag": "p",
                                    "content": "This module described how the Offshore Petroleum Discharge System provides bulk transfer of petroleum directly from an offshore tanker to a beach termination unit that is located immediately inland from the high watermark. The bulk petroleum is then, either transported inland, or stored in the beach support area.",
                                    "timing": 15
                                },
                                {
                                    "tag": "p",
                                    "content": "You should now be able to: Identify the Role of the Offshore Petroleum Discharge System (OPDS) and MV Wheeler, Identify the Components of the OPDS, Discuss the Concept of Operations and Identify the Deployment Procedures for the OPDS Systems.",
                                    "timing": 15
                                }
                            ]
                        }],
                        "completed_content": {
                            "text": [{
                                    "tag": "h6",
                                    "content": "Objective:"
                                },
                                {
                                    "tag": "hr",
                                    "content": ""
                                },
                                {
                                    "tag": "p",
                                    "content": "This module described how the <strong>Offshore Petroleum Discharge System</strong> provides bulk transfer of petroleum directly from an offshore tanker to a beach termination unit located immediately inland from the high watermark. Bulk petroleum then is either transported inland or stored in the beach support area."
                                }
                            ],
                            "tasks": [{
                                    "text": "Describe the Petroleum Operating Concept",
                                    "timing": 0
                                },
                                {
                                    "text": "Discuss the Role of Each Service Branch in Petroleum Operations",
                                    "timing": 10
                                },
                                {
                                    "text": "Review the Steps Associated with Petroleum Product from Arrival to End User",
                                    "timing": 20,
                                },
                                {
                                    "text": "Review the Army Inland Distribution System",
                                    "timing": 30,
                                }
                            ],
                        },
                        "achievements": [{
                                "tag": "h6",
                                "content": "Challenge Coins:"
                            },
                            {
                                "tag": "hr",
                                "content": ""
                            },
                            {
                                "tag": "p",
                                "content": "Congratulations! you completed the module. Let’s see how many challenge coins you earned."
                            }
                        ],
                    },
                    "graphic": {
                        "url": "url goes here",
                        "alt": "alt goes here"
                    }
                }
            ]
        }],
        "images": [{
                "url": "assets/media/0030.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/1010.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/1020.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/1070.mp4",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/2010.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/2020.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/2070.mp4",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/3010.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/3020.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/3070.mp4",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/4010.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            },
            {
                "url": "assets/media/4020.jpg",
                "file": "Original File Name Here",
                "title": "Image Title Here",
                "src": "Image Source Here",
                "author": "Image Author Here",
                "date": "Image Date Here",
                "desc": "Image Description Here."
            }
        ],
        "status": [{
                "0010": 0
            },
            {
                "0020": {
                    "c": 0,
                    "p": {
                        "0030": 0,
                        "0040": 0,
                        "0050": 0,
                        "0060": 0
                    }
                }
            },
            {
                "0070": 0
            },
            {
                "0080": 0
            },
            {
                "0090": {
                    "c": 0,
                    "p": [{
                            "0100": 0,
                            "0110": 0,
                            "0120": 0,
                            "0130": 0,
                            "0140": 0
                        },
                        {
                            "0150": 0,
                            "0160": 0,
                            "0170": 0
                        },
                        {
                            "0180": 0,
                            "0190": 0,
                            "0200": 0,
                            "0210": 0,
                            "0220": 0,
                            "0230": 0,
                            "0240": 0,
                            "0250": 0,
                            "0260": 0,
                            "0270": 0,
                            "0280": 0,
                            "0290": 0,
                            "0300": 0,
                            "0310": 0,
                            "0320": 0,
                            "0330": 0,
                            "0340": 0,
                            "0350": 0,
                            "0360": 0,
                            "0370": 0,
                            "0380": 0,
                            "0390": 0
                        },
                        {
                            "0400": {
                                "c": 0,
                                "p": {
                                    "0410": 0,
                                    "0420": 0
                                }
                            },
                            "0430": 0,
                            "0440": 0
                        }
                    ]
                }
            },
            {
                "0450": 0
            }
        ]
    }
};
// define lesson name
var imiName = "92F10-" + modJSON.module.id;
// store lesson data locally
if (sessionStorage) {
    sessionStorage.setItem(imiName, JSON.stringify(modJSON));
    modJSON = null;
} else {
    // lesson data will just stay as modJSON
}