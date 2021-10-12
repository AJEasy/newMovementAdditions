var stage = {
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
    "tasks" : [],
};

var task = {
    "image" : {
        "url" : "assets/media/images/B-04/B04_0210.png",
        "alt" : "this is where alt goes",
    },
    "promptText" : "Make sure the track rails are properly bonded and grounded. Find the correct item in your tool kit and use it on the grounding points.", //this is text for this task that shows up on screen giving directions
    "highlight" : "inventory", //this is what is supposed to be highlighted, normally the inventory bar
    "interactables" : [ //this is the object user is to interact with but is an array because normally it's just like a fire extinguisher that needs to be placed but sometimes it's multiple things
    ], 
};

var dialog = {
    "image" : {
        "url" : "assets/media/images/B-04/B04_PE_0040_02.png",
        "alt" : "this is where alt goes",
    },
    "text" : "While you have been getting the tank car ready, I inspected the supply container. It is properly grounded and vented."
};

var interactable = {
    "title" : "Grounding Cable", //name of object
    "url" : "assets/media/images/icons/Icon_FireExtinguisher.png", //source for image of object
    "draggable" : true, //is a true/false. If true use drop zones, else us alt url to toggle like with turning on/off something
    "dropzones" : [ //this is an array of possible drop zones for this interactable object if it has any
    ],
    "buttons" : [//this is an array of possible drop zones for this interactable object if it has any
    ],
};

var dropzone = {
    "correct" : true, //is a true/false to know if put in a valid destination or not.
    "shape":"circle",
    "coords":[
        0, //from left
        1000, //from top
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
};

var button = {
    "correct" : true, //is a true/false to know if put in a valid destination or not.
    "shape":"circle",
    "coords":[
        150,
        850,
        150,
        150,
    ],
    "toggleOffUrl" : "assets/media/images/icons/Icon_TankCarConnected.png", //source for image of object
    "toggleOnUrl" : "assets/media/images/icons/Icon_FireExtinguisher.png", //source for image of object                                          
};