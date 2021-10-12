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
        "id":"B04_PE",
        "title": "Railcar and Depot, and Truck Stand Transfer Operations Practical Exercise"
    },
    "content":{
        "sections":[
            {
                "title":"Railcar and Depot, and Truck Stand Transfer Operations",
                "id":"0000-0",
                "pages":[
                    {
                        "id": "0010",
                        "title": "Practical Exercise Introduction",
                        "temp": 26,
                        "elo": 0,
                        "layout": "third-left",
                        "narration": [
                            {
                                "url": "assets/media/narration/B04_PE_0010.mp3",
                                "text": "Welcome to the Railcar and Depot, and Truck Stand Transfer Operations Practical Exercise. In this exercise you will be loading and unloading a Rail Tank Car. For each phase of the Rail Tank Car operations, use the equipment and tools provided in your tool kit to complete all steps before moving on. Select the Start Exercise button when you are ready to begin.  "
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
                                            "ementor_narration_text": ""
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "Welcome to the Railcar and Depot, and Truck Stand Transfer Operations Practical Exercise. In this exercise you will be loading and unloading a Rail Tank Car. For each phase of the Rail Tank Car operations, use the equipment and tools provided in your tool kit to complete all steps before moving on."
                                        },
                                        {
                                            "tag": "p",
                                            "content": "Select the Start Exercise button when you are ready to begin. "
                                        }
                                    ]
                                }
                            ],
                            "image": {
                                "url": "assets/media/images/B-04/B04_PE_0020_01.png",
                                "alt": "alt goes here"
                            },
                            "trigger_button": {
                                "title": "Start Exercise",
                                "location": "0020"
                            }
                        }
                    },
                    { //pe
                        "id":"0020",
                        "title":"Practical Exercise",
                        "temp":23,
                        "elo":0,
                        "layout":"full",
                        "content":{
                            "hotspot":{
                                "image":{
                                    "url":"assets/media/images/B-04/B04_0210.png",
                                    "alt":"alt text goes here"
                                },
                            },
                            "stages" : [
                                //quick test below here
                                //quick test above here
                                { //0020
                                    "template": "tasking",
                                    "screen" : "0020",
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0020.mp3", //location of narration file
                                        "cc" : "Your first task is to prepare this tank car for loading. The product has already been sampled and gauged and the tank car and your equipment has been properly inspected to ensure everything is in good working condition. The track has been properly grounded, track to track and track to ground. You are not using a loading rack. Use the prompt located at the top of the screen to work through the steps required to get the tank car prepared for loading.", //closed caption of narration
                                    },
                                    "tasks" : [
                                        { //1
                                            "promptText" : "Make sure the track rails are properly bonded and grounded. Find the correct item in your tool kit and use it on the grounding points.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_01.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url" : "assets/media/images/icons/Icon_GroundingCable.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                750, //from left
                                                                510, //from top
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
                                                                700,
                                                                610,
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
                                                            "correct" : true,
                                                            "shape":"circle",
                                                            "coords":[
                                                                1300,
                                                                610,
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
                                                            "correct" : true,
                                                            "shape":"circle",
                                                            "coords":[
                                                                1500,
                                                                900,
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
                                                },
                                            ], 
                                        },
                                        { //2
                                            "promptText" : "Set the brakes and block the wheels of the tank car to keep it from moving.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_02.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title": "Wheel Chock", //name of object
                                                    "url": "assets/media/images/icons/Icon_Wheelchocks.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                420, //from left
                                                                580, //from top
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
                                                            "correct": true, //is a true/false to know if put in a valid destination or not.
                                                            "shape": "circle",
                                                            "coords": [
                                                                1420, //from left
                                                                580, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "title": "hotspot 2",
                                                            "body": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        }
                                                    ],
                                                },
                                                {
                                                    "title" : "Hand Brake", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1460,
                                                                400,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl": "assets/media/images/icons/Icon_Handbrake.png", //source for image of object
                                                            "toggleOnUrl": "assets/media/images/icons/Icon_Handbrake.png", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //3
                                            "promptText" : "Place signs in designated locations.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_03.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Signs", //name of object
                                                    "url": "assets/media/images/icons/Icon_TankCarConnected.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                150,
                                                                640,
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
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1600,
                                                                640,
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
                                                },
                                            ], 
                                        },
                                        { //4
                                            "promptText" : "Place fire extinguishers near the tank car.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Fire Extinguishers", //name of object
                                                    "url" : "assets/media/images/icons/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                250,
                                                                740,
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
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1500,
                                                                740,
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
                                                },
                                            ], 
                                        },
                                        { //5
                                            "promptText" : "Place Iron Rod for Grounding.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_05.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title": "Iron Rod", //name of object
                                                    "url" : "assets/media/images/icons/Icon_GroundingRod.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                400,
                                                                730,
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
                                                },
                                            ], 
                                        },
                                        { //6
                                            "promptText" : "Place grounding cables.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_06.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Cable", //name of object
                                                    "url": "assets/media/images/icons/Icon_GroundingCable.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                420,
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
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                800,
                                                                530,
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
                                                },
                                            ], 
                                        },
                                        { //7
                                            "promptText" : "Place smoking warnings.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_07.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "No smoking signs", //name of object
                                                    "url" : "assets/media/images/icons/Icon_NoSmokingSign.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                0,
                                                                800,
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
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1650,
                                                                800,
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
                                                },
                                            ], 
                                        },
                                        { //8
                                            "promptText" : "Tank Car Preparation is Complete. Select Move to Next Step.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_08.png",
                                                "alt" : "this is where alt goes",
                                            },
                                        }
                                    ]
                                },
                                { //0030
                                    "template": "tasking",
                                    "screen" : "0030",
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0030.mp3", //location of narration file
                                        "cc" : "With the tank car grounded and all warning signs and fire extinguishers placed, you move up to the tank car’s dome. The dome has already been cleaned of dirt and is waiting for you to remove the dome cover.", //closed caption of narration
                                    },
                                    "tasks" : [
                                        {
                                            "promptText" : "Raise safety valve.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0030_01.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Dome Safety Valve", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                535,
                                                                475,
                                                                250,
                                                                250,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        {
                                            "promptText" : "Remove dome seal or lock.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0030_02.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Hinged Hatch", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                640,
                                                                400,
                                                                200,
                                                                200,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        {
                                            "promptText" : "Loosen dome cover.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0030_03.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Bolts needing to be removed", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                850,
                                                                380,
                                                                250,
                                                                250,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        {
                                            "promptText" : "Remove the dome cover.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0030_03.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Dome cover", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                850,
                                                                380,
                                                                250,
                                                                250,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        {
                                            "promptText" : "Dome Cover Preparation is complete. Select Move to Next Step.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0030_04.png",
                                                "alt" : "this is where alt goes",
                                            },
                                        },
                                    ]
                                },
                                { //0040
                                    "template": "tasking",
                                    "screen" : "0040",
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0040.mp3", //location of narration file
                                        "cc" : "The tank car has been prepared and you are now ready to begin the bottom outlet loading procedure.", //closed caption of narration
                                    },
                                    "tasks" : [
                                        { //1
                                            "promptText" : "Place a drainage tub under the bottom outlet.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0040_01.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Drainage Tub", //name of object
                                                    "url" : "assets/media/images/icons/Icon_SpillContainer.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                870,
                                                                580,
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
                                                },
                                            ], 
                                        },
                                        { //2
                                            "promptText" : "Remove the bottom outlet cap.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "While you have been getting the tank car ready, I inspected the supply container. It is properly grounded and vented."
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title": "Outlet Cap", //name of object
                                                    "draggable": false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons": [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct": true, //is a true/false to know if put in a valid destination or not.
                                                            "shape": "circle",
                                                            "coords": [
                                                                880,
                                                                530,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl": "", //source for image of object
                                                            "toggleOnUrl": "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //3
                                            "promptText": "Connect pump suction line to supply container", //this is text for this task that shows up on screen giving directions
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0040_03.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Hose", //name of object
                                                    "url": "assets/media/images/icons/Icon_Hoselines.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                800, //from left
                                                                900, //from top
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
                                                },
                                            ], 
                                        },
                                        { //4
                                            "promptText" : "Attach equipment to tank car outlet.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0040_05.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Tank Car Elbow", //name of object
                                                    "url": "assets/media/images/icons/Icon_HoseBottomOutlet.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
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
                                                },
                                            ], 
                                        },
                                        { //5
                                            "promptText": "Connect pump discharge hose.", //this is text for this task that shows up on screen giving directions
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0040_06.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "I’ll be acting as your spotter."
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Hose", //name of object
                                                    "url": "assets/media/images/icons/Icon_Hoselines.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                800, //from left
                                                                600, //from top
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
                                                },
                                            ], 
                                        },
                                        { //6
                                            "promptText" : "Open all necessary valves.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0040_08.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Use your RADIO to instruct the crew at the supply container to open the outlet valve."
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Tank Car Wrench", //name of object
                                                    "url" : "assets/media/images/icons/Icon_FireExtinguisher.png", //source for image of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        }
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //6.5
                                            "promptText" : "Use Radio.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Radio", //name of object
                                                    "url": "assets/media/images/icons/Icon_WalkieTalkie.png", //source for image of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                0, //from left
                                                                1000, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl": "assets/media/images/icons/Icon_WalkieTalkie.png", //source for image of object
                                                            "toggleOnUrl": "assets/media/images/icons/Icon_WalkieTalkie.png", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //7
                                            "promptText" : "You radio the supply container – the outlet valve is now open. You can now start the pump.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Pump", //name of object
                                                    "url": "assets/media/images/icons/Icon_WalkieTalkie.png", //source for image of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                0, //from left
                                                                1000, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl": "assets/media/images/icons/Icon_WalkieTalkie.png", //source for image of object
                                                            "toggleOnUrl": "assets/media/images/icons/Icon_WalkieTalkie.png", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //8
                                            "promptText" : "The pump starts and begins to transfer the product. Select Move to Next Screen", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0040_08.png",
                                                "alt" : "this is where alt goes",
                                            },
                                        }
                                    ]
                                },
                                { //0050
                                    "template": "tasking",
                                    "screen" : "0050",
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0050.mp3", //location of narration file
                                        "cc" : "The loading process has gone by without incident. Your spotter on the dome signals you when the product nears the top mark and you shut down the pump. You have waited fifteen minutes, now the post-loading follow-up procedures must be attended to.", //closed caption of narration
                                    },
                                    "tasks" : [
                                        { //1
                                            "promptText" : "Gauge and Sample tank.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0050_01.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0050_01.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "While you have been getting the tank car ready, I inspected the supply container. It is properly grounded and vented."
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Long Stick", //name of object
                                                    "url": "assets/media/images/icons/Icon_GagingStick_Long.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                100, //from top
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
                                                },
                                            ], 
                                        },
                                        { //2
                                            "promptText": "Drain any water or sediment from the tank.", //this is text for this task that shows up on screen giving directions
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0050_02.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Bottom Outlet", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //3
                                            "promptText": "Replace the outlet cap.", //this is text for this task that shows up on screen giving directions
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0050_03.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Bottom Outlet Cap", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //3.5
                                            "promptText" : "Tell Spotter to close the dome.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Spotter", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880,
                                                                100,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //4 Take off stage
                                            "promptText": "Remove drainage tub.", //this is text for this task that shows up on screen giving directions
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0020_08.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Drainage Tub", //name of object
                                                    "url": "assets/media/images/icons/Icon_SpillContainer.png", //source for image of object
                                                    "removeFromStage" : true,
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                870,
                                                                580,
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
                                                },
                                            ], 
                                        },
                                        { //5 Take off stage
                                            "promptText" : "Replace tank car signs.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Flammable Signs", //name of object
                                                    "url": "assets/media/images/icons/Icon_FlammableSign.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                800,
                                                                530,
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
                                                },
                                            ], 
                                        },
                                        { //6 Take off stage
                                            "promptText" : "Disconnect the grounding wire from the tank car.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Rod", //name of object
                                                    "url": "assets/media/images/icons/Icon_GroundingCable.png", //source for image of object
                                                    "removeFromStage": true,
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                420,
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
                                                },
                                            ], 
                                        },
                                        { //7 Take off stage
                                            "promptText" : "Remove signs and fire extinguishers.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0020_05.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Signs", //name of object
                                                    "url": "assets/media/images/icons/Icon_TankCarConnected.png", //source for image of object
                                                    "removeFromStage": true,
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                150, //from left
                                                                640, //from top
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
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1600, //from left
                                                                640, //from top
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
                                                },
                                                {
                                                    "title" : "Fire Extinguishers", //name of object
                                                    "url": "assets/media/images/icons/Icon_FireExtinguisher.png", //source for image of object
                                                    "removeFromStage": true,
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                250, //from left
                                                                740, //from top
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
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1500, //from left
                                                                740, //from top
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
                                                },
                                            ], 
                                        },
                                        { //8 Take off stage
                                            "promptText" : "Release the brakes and move the car from the area.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0020_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "This car is loaded and ready to move out of the area."
                                            },
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_02.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title": "Hand Brake", //name of object
                                                    "draggable": false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons": [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct": true, //is a true/false to know if put in a valid destination or not.
                                                            "shape": "circle",
                                                            "coords": [
                                                                1460,
                                                                400,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl": "assets/media/images/icons/Icon_Handbrake.png", //source for image of object
                                                            "toggleOnUrl": "assets/media/images/icons/Icon_Handbrake.png", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //9
                                            "promptText" : "This concludes this section. Select Move to Next Screen to continue.", //this is text for this task that shows up on screen giving directions
                                        }
                                    ]
                                },
                                { //0060
                                    "template": "tasking",
                                    "screen" : "0060",
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0060.mp3", //location of narration file
                                        "cc" : "You will now take charge of unloading a new rail tank car that has just arrived. The product will be transferred to a storage tank in the tank farm. The tank has already been inspected – it was an empty tank so there was no need to gauge and sample the tank contents. The tank has been grounded and vented. Your own equipment has been replaced with new instances; everything is ready for you to begin the unloading process.", //closed caption of narration
                                    },
                                    "tasks" : [
                                        { //1
                                            "promptText" : "Signal spotter to loosen seals and remove the dome cover.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0060_01.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "briefing" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0050_01.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "This car is loaded and ready to move out of the area."
                                            },
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0050_01.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Seals are loose and I am opening the dome cover."
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Spotter", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                100, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //2.1
                                            "promptText" : "Inspect Tank Car Shell.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0060_05.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Shell", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1000,
                                                                350,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //2.2
                                            "promptText" : "Inspect Tank Car Dome.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0050_01.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "I’ve gauged the tank shell. There’s some water in the tank that needs to be drained."
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Shell", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                200, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //2.3
                                            "promptText" : "Inspect Tank Car Outlet.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Outlet", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //2.4
                                            "promptText" : "Place Drainage Tub.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0050_01.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Ok, gauging the contents again. I’ll record the data."
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Drainage Tub", //name of object
                                                    "url" : "assets/media/images/icons/Icon_SpillContainer.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                870,
                                                                580,
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
                                                },
                                            ], 
                                        },
                                        { //3
                                            "promptText" : "This concludes this section. Select Move to Next Screen to continue.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_08.png",
                                                "alt" : "this is where alt goes",
                                            },
                                        }
                                    ]
                                },
                                { //0070
                                    "template": "tasking",
                                    "screen" : "0070",
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0070.mp3", //location of narration file
                                        "cc" : "Other members of your team have delivered the pump and placed it 50 feet from the tank car. You may continue with the unloading process.", //closed caption of narration
                                    },
                                    "tasks" : [
                                        { //1
                                            "promptText" : "Place Iron Rod.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0070_01.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Iron Rod", //name of object
                                                    "url" : "assets/media/images/icons/Icon_GroundingRod.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1350, //from left
                                                                850, //from top
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
                                                },
                                            ], 
                                        },
                                        { //1.5
                                            "promptText" : "Place Grounding Wires.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0070_03.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Grounding Wires", //name of object
                                                    "url" : "assets/media/images/icons/Icon_GroundingCable.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                660, //from left
                                                                480, //from top
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
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1350, //from left
                                                                400, //from top
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
                                                },
                                            ], 
                                        },
                                        { //2
                                            "promptText" : "Check that the outlet valve is seated properly.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0040_05.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Outlet Valve", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //3
                                            "promptText" : "Loosen the bottom outlet cap, let trapped product drain, then remove the cap. .", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Outlet Cap", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //4.1
                                            "promptText" : "This tank car is fitted with the NATO standard size outlet. Attach the Gossler Coupler.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Gossler Coupler", //name of object
                                                    "url": "assets/media/images/icons/Icon_HoseBottomOutlet.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
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
                                                },
                                            ], 
                                        },
                                        { //4.2
                                            "promptText" : "Attach the hose to the Gossler Coupler.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0040_06.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Hose", //name of object
                                                    "url" : "assets/media/images/icons/Icon_Hoselines.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                800, //from left
                                                                600, //from top
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
                                                },
                                            ], 
                                        },
                                        { //5
                                            "promptText" : "Attach pump discharge line to receiving container.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0040_07.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Hose", //name of object
                                                    "url" : "assets/media/images/icons/Icon_Hoselines.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                800, //from left
                                                                900, //from top
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
                                                },
                                            ], 
                                        },
                                        { //6
                                            "promptText" : "Dispose of product in drainage tub, then put tub back in place.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_07.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "I am closing the dome cover. I have it propped up with a wood block. Go ahead and do your valve check."
                                            },
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Drainage Tub", //name of object
                                                    "url": "assets/media/images/icons/Icon_SpillContainer.png", //source for image of object
                                                    "removeFromStage": true,
                                                    "draggable": true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones": [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct": true, //is a true/false to know if put in a valid destination or not.
                                                            "shape": "circle",
                                                            "coords": [
                                                                870,
                                                                580,
                                                                150,
                                                                150,
                                                            ],
                                                            "title": "hotspot 1",
                                                            "body": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //7.1
                                            "promptText" : "Check Outlet Valve.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Outlet Valve", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880, //from left
                                                                530, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //7.2
                                            "promptText" : "Check Pump Discharge.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0070_04.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Pump Discharge", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                640,
                                                                350,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //7.3
                                            "promptText" : "Check Receiving Container Valves.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Valve checks look good. Start up the pump.."
                                            },
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0040_07.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Receiving Container Valves", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                780,
                                                                980,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //8
                                            "promptText" : "Start the Pump.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0070_04.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Hear that? The suction line is empty. Stop the pump, then radio the receiver and tell them to close the inlet valve."
                                            },
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0070_04.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Pump", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1000, //from left
                                                                250, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //9
                                            "promptText" : "Stop the Pump.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Pump", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1000, //from left
                                                                250, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //10
                                            "promptText" : "Close the Receiving Container Inlet Valve.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Closing the inlet valve now."
                                            },
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0040_07.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Radio", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                780,
                                                                980,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //11
                                            "promptText" : "This concludes this section. Select Move to Next Screen to continue.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_08.png",
                                                "alt" : "this is where alt goes",
                                            },
                                        }
                                    ]
                                },
                                { //0080
                                    "template": "tasking",
                                    "screen": "0080",
                                    "image": {
                                        "url": "assets/media/images/B-04/B04_PE_0080_01.png",
                                        "alt": "this is where alt goes",
                                    },
                                    "narration" : {
                                        "url" : "assets/media/narration/B04_PE_0080.mp3", //location of narration file
                                        "cc" : "The tank car has been unloaded, and you now need to complete the post-unloading follow up procedures.", //closed caption of narration
                                    },
                                    "tasks" : [
                                        { //1
                                            "promptText" : "Make sure the tank car is completely empty.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Checking shell now. The tank car is empty."
                                            },
                                            "image" : {
                                                "url": "assets/media/images/B-04/B04_PE_0080_01.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Dome", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1100,
                                                                310,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //2
                                            "promptText" : "Contact crew at receiving container and request gauging and sampling", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Starting gauging now."
                                            },
                                            "briefing" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Radio the receiving station and have them gauge and sample."
                                            },
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Radio", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                150,
                                                                850,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl": "assets/media/images/icons/Icon_WalkieTalkie.png", //source for image of object
                                                            "toggleOnUrl": "assets/media/images/icons/Icon_WalkieTalkie.png", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //3 Remove
                                            "promptText" : "Remove hose from tank car.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0080_03.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Hose", //name of object
                                                    "url" : "assets/media/images/icons/Icon_Hoselines.png", //source for image of object
                                                    "draggable": true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "removeFromStage": true,
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                780, //from left
                                                                850, //from top
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
                                                },
                                            ], 
                                        },
                                        { //4
                                            "promptText" : "Close and unlock the dome cover.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "I’m closing the dome and coming down."
                                            },
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0080_04.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Dome", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                880,
                                                                150,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "", //source for image of object
                                                            "toggleOnUrl" : "", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //5 Remove
                                            "promptText" : "Remove drainage tub, discarding any product first.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0080_07.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Drainage Tub", //name of object
                                                    "url" : "assets/media/images/icons/Icon_SpillContainer.png", //source for image of object
                                                    "draggable": true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "removeFromStage": true,
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                870,
                                                                580,
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
                                                },
                                            ], 
                                        },
                                        { //6
                                            "promptText" : "Replace tank car signage.", //this is text for this task that shows up on screen giving directions
                                            "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Flammable Signs", //name of object
                                                    "url": "assets/media/images/icons/Icon_DangerourEmptySign.png", //source for image of object
                                                    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                800,
                                                                530,
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
                                                },
                                            ], 
                                        },
                                        { //7 Remove
                                            "promptText" : "Disconnect ground wires.", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0080_09.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Drainage Tub", //name of object
                                                    "url": "assets/media/images/icons/Icon_GroundingCable.png", //source for image of object
                                                    "draggable": true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "removeFromStage": true,
                                                    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                240, //from left
                                                                600, //from top
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
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1780, //from left
                                                                380, //from top
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
                                                },
                                            ], 
                                        },
                                        { //8 Remove
                                            "promptText" : "Remove warning signs and fire extinguishers", //this is text for this task that shows up on screen giving directions
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0080_12.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title": "Signs", //name of object
                                                    "url": "assets/media/images/icons/Icon_TankCarConnected.png", //source for image of object
                                                    "removeFromStage": true,
                                                    "draggable": true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones": [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct": true, //is a true/false to know if put in a valid destination or not.
                                                            "shape": "circle",
                                                            "coords": [
                                                                150, //from left
                                                                640, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "title": "hotspot 1",
                                                            "body": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                        {
                                                            "correct": true, //is a true/false to know if put in a valid destination or not.
                                                            "shape": "circle",
                                                            "coords": [
                                                                1600, //from left
                                                                640, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "title": "hotspot 1",
                                                            "body": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                    ],
                                                },
                                                {
                                                    "title": "Fire Extinguishers", //name of object
                                                    "url": "assets/media/images/icons/Icon_FireExtinguisher.png", //source for image of object
                                                    "removeFromStage": true,
                                                    "draggable": true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "dropzones": [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct": true, //is a true/false to know if put in a valid destination or not.
                                                            "shape": "circle",
                                                            "coords": [
                                                                250, //from left
                                                                740, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "title": "hotspot 1",
                                                            "body": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                        {
                                                            "correct": true, //is a true/false to know if put in a valid destination or not.
                                                            "shape": "circle",
                                                            "coords": [
                                                                1500, //from left
                                                                740, //from top
                                                                150,
                                                                150,
                                                            ],
                                                            "title": "hotspot 1",
                                                            "body": [
                                                                {
                                                                    "tag": "p",
                                                                    "content": "This is a test to see if Item 1 pulls the right content.",
                                                                }
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //9
                                            "promptText" : "Release the brakes and move the car from the transfer area.", //this is text for this task that shows up on screen giving directions
                                            "dialog" : {
                                                "image" : {
                                                    "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
                                                    "alt" : "this is where alt goes",
                                                },
                                                "text" : "Well done. That concludes the unloading operation."
                                            },
                                            "highlight": "inventory", //this is what is supposed to be highlighted, normally the inventory bar
                                            "image": {
                                                "url": "assets/media/images/B-04/B04_PE_0080_14.png",
                                                "alt": "this is where alt goes",
                                            },
                                            "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                                {
                                                    "title" : "Hand Brake", //name of object
                                                    "draggable" : false, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
                                                    "buttons" : [ //this is an array of possible drop zones for this interactable object if it has any
                                                        {
                                                            "correct" : true, //is a true/false to know if put in a valid destination or not.
                                                            "shape":"circle",
                                                            "coords":[
                                                                1460,
                                                                400,
                                                                150,
                                                                150,
                                                            ],
                                                            "toggleOffUrl" : "assets/media/images/icons/Icon_Handbrake.png", //source for image of object
                                                            "toggleOnUrl" : "assets/media/images/icons/Icon_Handbrake.png", //source for image of object                                          
                                                        },
                                                    ],
                                                },
                                            ], 
                                        },
                                        { //10
                                            "promptText" : "This concludes this section. Select the next button to continue.", //this is text for this task that shows up on screen giving directions
                                            "image" : {
                                                "url" : "assets/media/images/B-04/B04_PE_0020_08.png",
                                                "alt" : "this is where alt goes",
                                            },
                                            "interactables": [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
                                            ], 
                                            "hideButton": true
                                        }
                                    ]
                                }
                            ]
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
                                "url": "assets/media/narration/B04_PE_0090.mp3",
                                "text": "So today we have covered tank car inspection, spotting and bottom loading for Loading Operations and tank car inspection, spotting and bottom unloading for Unloading Operations. We have also performed follow up and cleanup procedures for each operation. Select the Restart Exercise button to go through the exercise again. "
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
                                            "ementor_narration_text": " "
                                        }
                                    ],
                                    "text": [
                                        {
                                            "tag": "p",
                                            "content": "So today we have covered tank car inspection, spotting and bottom loading for Loading Operations and tank car inspection, spotting and bottom unloading for Unloading Operations. We have also performed follow up and cleanup procedures for each operation."
                                        },
                                        {
                                            "tag": "p",
                                            "content": "Select the \"Restart Exercise\" button when you are ready to start over."
                                        }
                                    ]
                                }
                            ],
                            "image": {
                                "url": "assets/media/images/B-04/B04_PE_0020_01.png",
                                "alt": "alt goes here"
                            },
                            "trigger_button": {
                                "title": "Restart Exercise",
                                "location": "0010"
                            }
                        }
                    }
                    /*{ //summary
                        "id":"0030",
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
                    }*/
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
