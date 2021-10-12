/*
 * --------------------------------------------------------------------------
 *   templates.js - v2.0
 *   author: Advancia Technologies
 *   created: 3/12/2018
 *   last edited: 2/20/2021
 *   Copyright 2021, Advancia Technologies, All rights reserved.
 * --------------------------------------------------------------------------
 */
/*
 * ------------------------------------------------------------------------
 * Template Variables 
 * ------------------------------------------------------------------------
 */
// get the height and width of the viewport
var vpWidth = $(window).width();
var vpHeight = $(window).height();
var totalNumberOfAttempts = 3;
var currentNumberOfAttempts = 0;
var currentAttemptsArray = [];
var peStorage = [];
/*
 * ------------------------------------------------------------------------
 * General Functions for Framework and Activities 
 * ------------------------------------------------------------------------
 */
/*
 * Add Background Image to activities that call for it 
 */
function LoadActivityBackgroundImage(imgNumVal, pageType) {
    var imgNum = imgNumVal;
    var numImgs = 6; // this will be however many images are in the Images/activityBackgrounds
    // if imgNumVal equals 0 then use random image
    if (imgNumVal == 0) {
        imgNum = Math.floor(Math.random() * Math.floor(numImgs)) + 1;
    }
    // bg img per specific template
    switch (pageType) {
    case "ssc":
        $("#ssc-content").css("background-image", "url(\"assets/media/backgrounds/background_" + imgNum + ".jpg\")");
        break;
    case "mindmap":
        $("#mindmap-content").css("background-image", "url(\"assets/media/backgrounds/background_" + imgNum + ".jpg\")");
        break;
    case "finalPe":
        $("#backgroundImage").css("background-image", "url(\"assets/media/backgrounds/background_" + imgNum + ".jpg\")");
        break;
    default:
        $("#page_frame_container").addClass('imgBG').css("background-image", "url(\"assets/media/backgrounds/background_" + imgNum + ".jpg\")");
        break;
    }
}
/*
 * Enable Language Toggle 
 */
function OnLanguageToggle(engDiv, tlDiv) {
    console.log('toggle lang init');
    var langToggle = $('input[name="mainLanguageToggle"]');
    // ensure toggle is enabled and set to EN
    langToggle.bootstrapSwitch("state", false);
    langToggle.bootstrapSwitch("disabled", false);
    // add event handler
    langToggle.on("switchChange.bootstrapSwitch", function () {
        toggleLanguage(engDiv, tlDiv);
    });
}
/*
 * Disable Language Toggle 
 */
function DisableLanguageToggle() {
    var langToggle = $('input[name="mainLanguageToggle"]');
    // disable toggle and set to EN
    langToggle.bootstrapSwitch("state", false);
    langToggle.bootstrapSwitch("disabled", true);
    // remove event handler
    langToggle.off("switchChange.bootstrapSwitch");
}
/*
 * Toggle Language 
 */
function toggleLanguage(toggleDiv1, toggleDiv2) {
    $("." + toggleDiv1).toggle();
    $("." + toggleDiv2).toggle();
}
/*
 * Load in instruction text 
 */
function loadInstrustionText(temp_num, type) {
    if (sessionStorage) {
        var iData = JSON.parse(sessionStorage.getItem(imiName));
    }
    else {
        var iData = modJSON;
    }
    iData = iData.content.instructions["ins" + temp_num];
    console.log(type);
    if (iData.hasOwnProperty('types')) {
        var tl = iData.types[type].tl;
        var en = iData.types[type].en;
    }
    else {
        var tl = iData.tl;
        var en = iData.en;
    }
    $('#activityInstructions').append('<div id="instructionI" style="width: 45px"><div id="instructionIcon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64" aria-labelledby="infoTitle infoDesc" role="img"><title id="infoTitle">Information Icon</title><desc id="infoDesc">The following are activity instructions and or information.</desc><path class="info-icon" d="M26.2 14.5h11.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2V2.9c0-0.8-0.3-1.5-0.9-2C39.3 0.3 38.6 0 37.8 0H26.2c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v8.7c0 0.8 0.3 1.5 0.9 2C24.7 14.3 25.4 14.5 26.2 14.5z"/><path class="info-icon" d="M45.7 53.2c-0.6-0.6-1.3-0.9-2-0.9h-2.9V26.2c0-0.8-0.3-1.5-0.9-2 -0.6-0.6-1.3-0.9-2-0.9H20.4c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2 0.6 0.6 1.3 0.9 2 0.9h2.9v17.5h-2.9c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2C18.9 63.7 19.6 64 20.4 64H43.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2v-5.8C46.5 54.5 46.3 53.8 45.7 53.2z"/></svg></div></div><div id="instructionContent" style="padding-right: 15px"><div id="instructionText"><div class="TL"><div class="targetLang">' + tl + '</div></div><div class="EN" style="display:none;">' + en + '</div></div></div>');
    OnLanguageToggle("TL", "EN");
}
/**
 * Add/Remove Instruction Button for course intro
 */
function instructionButton() {
    $('#pageTitleMobile').after('<div id="instructionButton"><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#instructionModal">View Description</button></div>');
    var insBtnWidth = $('#instructionButton button').outerWidth() + 15;
    $('#instructionButton').css("width", insBtnWidth);
}
/*
 * Shuffle to randomize activities
 */
(function ($) {
    $.fn.shuffle = function () {
        return this.each(function () {
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    }
    $.shuffle = function (arr) {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }
})(jQuery);
/*
 * Randomize div order 
 */
(function ($) {
    $.fn.randomizeDivs = function (childElem) {
        return this.each(function () {
            var $this = $(this);
            var elems = $this.children(childElem);
            elems.sort(function () {
                return (Math.round(Math.random()) - 0.5);
            });
            $this.detach(childElem);
            for (var i = 0; i < elems.length; i++) $this.append(elems[i]);
        });
    }
})(jQuery);

/*
 * ------------------------------------------------------------------------
 * Animate
 * ------------------------------------------------------------------------
 */

function buildAnimate(data) {
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    console.log("buildAnimate 1");
    
function init() {
    console.log("init 2");
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("6272720C7DB64705886D0F19CB65B7FA");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    console.log("handleFileLoad 3");
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	console.log("handleComplete 4");
    var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.Animate();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

    var html = '';
    html += '<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:1920px; height:1080px"><canvas id="canvas" width="1920" height="1080" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas><div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:1920px; height:1080px; position: absolute; left: 0px; top: 0px; display: block;"></div></div>';
    $('#page_frame').html(html); 
    init();

}

/*
 * ------------------------------------------------------------------------
 * Simulated Video 
 * ------------------------------------------------------------------------
 */
function buildSimulatedVideo(data) {
    console.log('run function buildSimulatedVideo');
    var html = '';
    html += '<div id="fullVideo-container"><div id="tscVideoContent"><img width="32px" height="32px" style="position: absolute; top: 50%; left: 50%; margin: -16px 0 0 -16px" src="data:image/gif;base64,R0lGODlhIAAgAPMAAAAAAP///zg4OHp6ekhISGRkZMjIyKioqCYmJhoaGkJCQuDg4Pr6+gAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==" />';
    html += '</div></div>';
    $('#page_frame').html(html);
    console.log('page load');
    simulatedVideo();
    // Load Camtasia Player
    function simulatedVideo() {
        function setup(TSC) {
            console.log('setup TSC');
            TSC.playerConfiguration.addMediaSrc("assets/media/SimulatedVideo/SimulatedVideo.mp4"); //This will need refactoring to var
            TSC.playerConfiguration.setXMPSrc("assets/media/SimulatedVideo/SimulatedVideo_config.xml"); //This will need refactoring to var
            TSC.playerConfiguration.setAutoHideControls(true);
            TSC.playerConfiguration.setBackgroundColor("#000000");
            TSC.playerConfiguration.setCaptionsEnabled(false);
            TSC.playerConfiguration.setSidebarEnabled(false);
            TSC.playerConfiguration.setTheme(TSC.themeNames.DUSK);
            TSC.playerConfiguration.allowFastForward = true;
            TSC.playerConfiguration.skipVideoControlsEnabled = true;
            TSC.playerConfiguration.skipVideoDuration = 10;
            TSC.playerConfiguration.setAutoPlayMedia(false);
            TSC.playerConfiguration.setPosterImageSrc("assets/media/framework/videoCover.jpg");
            TSC.playerConfiguration.setIsSearchable(true);
            TSC.playerConfiguration.setEndActionType("stop");
            TSC.playerConfiguration.setEndActionParam("true");
            TSC.playerConfiguration.setAllowRewind(-1);
            TSC.localizationStrings.setLanguage(TSC.languageCodes.ENGLISH);
            TSC.mediaPlayer.init("#tscVideoContent");
        }

        function loadScript(e, t) {
            if (!e || !(typeof e === "string")) {
                return
            }
            var n = document.createElement("script");
            if (typeof document.attachEvent === "object") {
                n.onreadystatechange = function () {
                    if (n.readyState === "complete" || n.readyState === "loaded") {
                        if (t) {
                            t()
                        }
                    }
                }
            }
            else {
                n.onload = function () {
                    if (t) {
                        t()
                    }
                }
            }
            n.src = e;
            document.getElementsByTagName("head")[0].appendChild(n)
        }
        loadScript('scripts/techsmith-smart-player.min.js', function () {
            setup(window["TSC"]);
            console.log('setup window TSC');
        });
    };
}
/*...................example
 (function (window) {
        function setup(TSC) {
             TSC.playerConfiguration.addMediaSrc("SimulatedVideo.mp4");
             TSC.playerConfiguration.setXMPSrc("SimulatedVideo_config.xml");
             TSC.playerConfiguration.setAutoHideControls(true);
             TSC.playerConfiguration.setBackgroundColor("#000000");
             TSC.playerConfiguration.setCaptionsEnabled(false);
             TSC.playerConfiguration.setSidebarEnabled(false);
             TSC.playerConfiguration.setTheme(TSC.themeNames.DUSK);
             TSC.playerConfiguration.allowFastForward = true;
             TSC.playerConfiguration.skipVideoControlsEnabled = true;
             TSC.playerConfiguration.skipVideoDuration = 10;         
             TSC.playerConfiguration.setAutoPlayMedia(false);
             TSC.playerConfiguration.setPosterImageSrc("SimulatedVideo_First_Frame.png");
             TSC.playerConfiguration.setIsSearchable(true);
             TSC.playerConfiguration.setEndActionType("stop");
             TSC.playerConfiguration.setEndActionParam("true");
             TSC.playerConfiguration.setAllowRewind(-1);
             TSC.localizationStrings.setLanguage(TSC.languageCodes.ENGLISH);
            TSC.mediaPlayer.init("#tscVideoContent");
        }

        function loadScript(e,t){if(!e||!(typeof e==="string")){return}var n=document.createElement("script");if(typeof document.attachEvent==="object"){n.onreadystatechange=function(){if(n.readyState==="complete"||n.readyState==="loaded"){if(t){t()}}}}else{n.onload=function(){if(t){t()}}}n.src=e;document.getElementsByTagName("head")[0].appendChild(n)}

        loadScript('scripts/techsmith-smart-player.min.js', function() {
            setup(window["TSC"]);
        });
    }(window));
*/
/*
 * ------------------------------------------------------------------------
 * Module Introduction Video 
 * ------------------------------------------------------------------------
 */
function buildIntroVid(data) {
    var html = '<div id="fullVideo-container"><video poster="assets/media/vid-poster.jpg" id="fullVideo" controls><source src="assets/media/0010.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>';
    $('#page_frame').html(html);
    // volume adjustments per DLI request
    $("#fullVideo").prop("volume", 0.5);
    introVideo();
    $(window).resize(introVideo);
}

function introVideo() {
    var vpWidth = $(window).width();
    var vpHeight = $(window).height();
    var video = $('#fullVideo');
    var desktopHeight = vpHeight - 145;
    var videoRatio = desktopHeight / 9;
    var videoWidth = videoRatio * 16;
    // when the video ends, go to the next page
    video.bind('ended', function () {
        nextPage("0010");
    });
    // Add video controls on mobile
    if (vpWidth <= 992) {
        video.css('height', '');
        video.css('width', '');
    }
    else {
        video.height(desktopHeight);
        video.width(videoWidth);
    }
}
/*
 * ------------------------------------------------------------------------
 * Objectives 
 * ------------------------------------------------------------------------
 */
function buildObj(data) {
    var html = "";
    // Instructions
    html += '<div id="activityInstructions"><div style="width: 45px"><div id="instructionIcon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64" aria-labelledby="infoTitle infoDesc" role="img"><title id="infoTitle">Information Icon</title><desc id="infoDesc">The following are activity instructions and or information.</desc><path class="info-icon" d="M26.2 14.5h11.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2V2.9c0-0.8-0.3-1.5-0.9-2C39.3 0.3 38.6 0 37.8 0H26.2c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v8.7c0 0.8 0.3 1.5 0.9 2C24.7 14.3 25.4 14.5 26.2 14.5z"/><path class="info-icon" d="M45.7 53.2c-0.6-0.6-1.3-0.9-2-0.9h-2.9V26.2c0-0.8-0.3-1.5-0.9-2 -0.6-0.6-1.3-0.9-2-0.9H20.4c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2 0.6 0.6 1.3 0.9 2 0.9h2.9v17.5h-2.9c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2C18.9 63.7 19.6 64 20.4 64H43.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2v-5.8C46.5 54.5 46.3 53.8 45.7 53.2z"/></svg></div></div><div><div id="instructionText"><strong>Note:</strong> Instruction or information text here.</div></div></div><div class="container">';
    // Build out TLO and ELOs
    for (var i = 0; i < data.content.length; i++) {
        if (i == 0) {
            html += '<div class="obj row tlo"><div class="objImg"><div class="img-thumbnail"><img alt="' + data.image[i].desc + '" src="' + data.image[i].url + '" title="' + data.image[i].title + '" /></div><div class="objTag"><span>TLO</span></div></div><div><div class="objText"><h6 class="eloTitle">' + data.content[i].title + '</h6><hr><div class="targetLang TL"><p>' + data.content[i].desc_tl + '</p></div></div><div class="EN" style="display:none;"><p>' + data.content[i].desc_en + '</p></div></div></div>';
        }
        else {
            html += '<div class="obj row"><div class="objImg"><div class="img-thumbnail"><img alt="' + data.image[i].desc + '" src="' + data.image[i].url + '" title="' + data.image[i].title + '" /></div><div class="objTag"><span>ELO ' + i + '</span></div></div><div><div class="objText"><h6 class="eloTitle">' + data.content[i].title + '</h6><hr><div class="targetLang TL"><p>' + data.content[i].desc_tl + '</p></div></div><div class="EN" style="display:none;"><p>' + data.content[i].desc_en + '</p></div></div></div>';
        }
    }
    /*	for(var i = 0; i < data.content.length; i++){
            if (i == 0){
                html += '<div class="obj row tlo"><div class="objImg"><div class="img-thumbnail"><img alt="' + data.image[i].desc + '" src="' + data.image[i].url + '" title="' + data.image[i].title + '" /></div><div class="objTag rounded-bottom"><span>TLO</span></div></div><div class="objText"><h5>' + data.content[i].title + '</h5><div class="targetLang TL"><p>' + data.content[i].desc_tl + '</p></div><div class="EN" style="display:none;"><p>' + data.content[i].desc_en + '</p></div></div></div>';
            } else{
                html += '<div class="obj row"><div class="objImg"><div class="img-thumbnail"><img alt="' + data.image[i].desc + '" src="' + data.image[i].url + '" title="' + data.image[i].title + '" /></div><div class="objTag rounded-bottom"><span>ELO ' + i + '</span></div></div><div class="objText"><h5>' + data.content[i].title + '</h5><div class="targetLang TL"><p>' + data.content[i].desc_tl + '</p></div><div class="EN" style="display:none;"><p>' + data.content[i].desc_en + '</p></div></div></div>';
            }
        }*/
    // 
    html += '</div>';
    $('#page_frame').html(html);
    OnLanguageToggle("TL", "EN");
}
/*
 * ------------------------------------------------------------------------
 * ELO Title Screen
 * ------------------------------------------------------------------------
 */
function buildELO(data) {
    var html = "";
    // Banner Image
    html += '<div id="eloBanner" style="background-image: url(' + data.image.url + ');" role="img" aria-label="' + data.image.desc + '" title="' + data.image.title + '"></div>';
    // Build out TLO and ELOs
    html += '<div id="eloContent"><div class="container"><h6 class="eloTitle">' + data.content.title + '</h6><hr><p class="eloText targetLang TL">' + data.content.desc_tl + '</p><p class="eloText EN" style="display:none;">' + data.content.desc_en + '</p></div></div>';
    $('#page_frame').html(html);
    imageHeight();
    OnLanguageToggle("TL", "EN");
}
//function buildELO(data) {
//    var html = "";
//    // Banner Image
//    html += '<div id="eloBanner" style="background-image: url(' + data.image.url + ');" role="img" aria-label="' + data.image.desc + '" title="' + data.image.title + '"></div>';
//    // Build out TLO and ELOs
//    html += '<div id="eloContent"><div class="container"><div class="eloFlag"><img src="Images/elo/elo_flag_0' + data.elo + '.png" alt="Enabling Learning Objective ' + data.elo + ' flag icon"><span>Enabling Learning Objective</span></div><h6 class="eloTitle">' + data.content.title + '</h6><hr><p class="eloText targetLang TL">' + data.content.desc_tl + '</p><p class="eloText EN" style="display:none;">' + data.content.desc_en + '</p></div></div>';
//    $('#page_frame').html(html);
//    imageHeight();
//    OnLanguageToggle("TL", "EN");
//}
/*
 * ------------------------------------------------------------------------
 * Image Sizing for mobile 
 * ------------------------------------------------------------------------
 */
// This is for image adjustments since vh doesnt work in mobile (-_-)
function buildReadingActivity(elo) {
    imageHeight();
    loadReadingText(elo);
}
// Set up the responsive img heights
function imageHeight() {
    calcImageHeight();
    $(window).resize(calcImageHeight);
}
// calculate img height
function calcImageHeight() {
    var vpWidth = $(window).width();
    var vpHeight = $(window).height();
    elo = $('#eloBanner');
    third = $('.img-third--pic');
    // Mobile height is 16:9
    imgMobileRatio = vpWidth / 16;
    imgMobileHeight = imgMobileRatio * 9;
    // Tablet height is 21:9
    imgTabletRatio = vpWidth / 21;
    imgTabletHeight = imgTabletRatio * 9;
    // Dektop Heights will vary
    eloDesktopHeight = vpWidth / 2.414; // Siver ratio
    thirdDesktopHeight = vpHeight - 145;
    if (vpWidth < 768) {
        elo.css('height', imgMobileHeight);
        third.css('height', imgMobileHeight);
    }
    else if (vpWidth < 992 && vpWidth >= 768) {
        elo.css('height', imgTabletHeight);
        third.css('height', imgTabletHeight);
    }
    else if (vpWidth < 1200 && vpWidth >= 992) {
        elo.css('height', eloDesktopHeight);
        third.css('height', thirdDesktopHeight);
    }
    else {
        elo.css('height', '');
        third.css('height', '');
    }
}
/*
 * ------------------------------------------------------------------------
 * Readings
 * ------------------------------------------------------------------------
 */
function buildReading(data) {
    var html = "";
    // Wrapper
    html += '<div class="container-fluid readingActivity"><div class="row">';
    // 1/3 bg image
    html += '<section class="col-12 col-lg-4 img-third--pic" style="background-image: url(' + data.image.url + ');" role="img" aria-label="' + data.image.desc + '" title="' + data.image.title + '"></section>';
    // content
    html += '<section class="col-12 col-lg-8 img-third--content"><section id="activityInstructions" class="row"></section><section id="readingContent"><div class="targetLang">';
    // title
    html += '<h6 class="mb-3"><strong>' + data.content.title_tl + '</strong></h6>';
    // text
    $.each(data.content.text, function (pNum, p) {
            html += '<p>' + p + '</p>';
        })
        // source information
        /*    html += '<p><strong>Title: </strong>' + data.content.title_en + '<br><strong>Source: </strong>' + data.content.src + '<br><strong>Date: </strong>' + data.content.date + '</p>'*/
    html += '</div></section></section></div></div>';
    $('#page_frame').html(html);
    loadInstrustionText(data.temp);
    // buildReadingActivity(data.elo);
    imageHeight();
}
/*
 * ------------------------------------------------------------------------
 * Vocabulary Schema Activity 
 * ------------------------------------------------------------------------
 */
/*
 * Write Vocabulary Schema Activity 
 */
function writeTemplateVocab(data) {
    html = '';
    // instructions
    html += '<section id="activityInstructions"></section>';
    // pick headers
    var rh = '';
    switch (data.var) {
    case 0:
        rh = "English";
        break;
    case 1:
        rh = "Definition";
        break;
    case 2:
        rh = "Synonym";
        break;
    case 3:
        rh = "Sentence";
        break;
    }
    // activity wrap
    html += '<section id="activityVocab"><div class="container"><div class="table-responsive"><table id="templateVocab" class="table"><thead><tr class="row"><th scope="col" class="text-center col-6">Vocabulary</th><th scope="col" class="text-center col-6">' + rh + '</th></tr></thead><tbody></tbody>    </table></div></div></section>';
    $('#page_frame').html(html);
    LoadActivityBackgroundImage(0);
    loadInstrustionText(data.temp, data.var);
    vocabDropDownBox = "";
    // Add all the options into the drop down
    jQuery.each(data.content, function (index, value) {
        vocabDropDownBox += '<option value="' + index + '">' + value.option + '</option>';
    });
    // Build Each row of vocab/description
    jQuery.each(data.content, function (index, value) {
        // ecj
        $("#templateVocab tbody").append('<tr class="randomVocab"><td id="vocab' + index + '" class="vocabSelect"><div class="vocabSelectWrapper"><div class="eval"></div><div class="form-group"><select id="selId_' + index + '" class="vocabSelectDropDownBoxes form-control" onchange="templateVocabCheckDropDown(' + index + ', this.value);this.blur();"><option selected disabled hidden value="">&nbsp;</option>' + vocabDropDownBox + '</select></div></div></td><td id="desc' + index + '" class="vocabTerm"><div>' + value.context + '</div></td></tr>');
        vocabHeight(index);
    });
    // Randomize the divs
    $("#templateVocab tbody").randomizeDivs(".randomVocab");
    $('.vocabSelectDropDownBoxes').shuffle();
}

function vocabHeight(which) {
    calcVocabHeight(which);
    $(window).resize(function () {
        calcVocabHeight(which);
    });
}

function calcVocabHeight(which) {
    $('#vocab' + which).css("height", '');
    var descHeight = $('#desc' + which).height();
    $('#vocab' + which).css("height", descHeight);
}
/*
 * Evalutate Vocabulary Schema 
 */
function templateVocabCheckDropDown(correctIndex, selectedIndex) {
    if (correctIndex == selectedIndex) {
        // Selection is correct
        $("#vocab" + correctIndex + " .eval").html('<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="evalTitle evalDesc" role="img" focusable="false" viewBox="0 0 64 64"><title id="evalTitle">Correct Icon</title><desc id="evalDesc">The selection made was correct.</desc><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>');
        $("#vocab" + correctIndex + " .eval").removeClass('bg-danger');
        $("#vocab" + correctIndex + " .eval").addClass('bg-success');
        $("#vocab" + correctIndex + " select").attr('disabled', 'disabled');
        $("option[value=" + selectedIndex + "]").attr('disabled', 'disabled');
    }
    else {
        // Selection is incorrect
        $("#vocab" + correctIndex + " .eval").html('<svg xmlns="http://www.w3.org/2000/svg" aria-label="X icon" aria-labelledby="evalTitle evalDesc" role="img" focusable="false" viewBox="0 0 64 64"><title id="evalTitle">Incorrect Icon</title><desc id="evalDesc">The selection made was incorrect.</desc><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg>');
        $("#vocab" + correctIndex + " .eval").removeClass('bg-success').addClass('bg-danger');
        $("#templateVocabFeedback" + correctIndex).removeClass('active').html('');
    }
    $("#vocab" + correctIndex).addClass('active');
}
/*
 * ------------------------------------------------------------------------
 * Interactive Activity Setup
 * ------------------------------------------------------------------------
 */
function activityContentHeight(template) {
    adjustActivityContentHeight(template);
    $(window).resize(function () {
        adjustActivityContentHeight(template);
    });
    slideHeight(template);
}
/*
 * Adjust the height to center content
 */
function adjustActivityContentHeight(template) {
    var vpWidth = $(window).width();
    var vpHeight = $(window).height();
    if (vpWidth > 992) {
        guiHeight = 145;
    }
    else {
        guiHeight = 145;
    }
    frameHeight = vpHeight - guiHeight;
    // how to calc based on template
    switch (template) {
    case "ssc":
        activityHeight = frameHeight;
        if (vpWidth > 992) {
            $('.activityContent').css('height', activityHeight);
        }
        else {
            $('.activityContent').removeAttr('style');
        }
        break;
    default:
        instructionHeight = $('#activityInstructions').height() + 2;
        activityMediaHeight = $('#activityMedia').height();
        activityHeight = frameHeight - instructionHeight - activityMediaHeight;
        if (vpWidth > 991.98) {
            $('.activityContent').css('height', activityHeight);
        }
        else {
            $('.activityContent').removeAttr('style');
        }
        break;
    }
}
/*
 * ------------------------------------------------------------------------
 * Carousel Setup Functions 
 * ------------------------------------------------------------------------
 */
/*
 * Build Carousel Shell
 */
function buildCarouselShell() {
    $('#activityCarousel').append('<div id="carouselWrap" class="carousel slide row" data-interval="false" data-wrap="true"><div class="carousel-inner col-12 order-2"></div><div class="carousel-controls col-12 order-1"><a class="carousel-control-prev" href="#carouselWrap" role="button" data-slide="prev" title="Previous Question"><span class="sr-only">Previous Question</span><span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="previous-icon" d="M24.8 32L50 6.8c0.4-0.4 0.6-0.9 0.6-1.5s-0.2-1-0.6-1.5L46.8 0.6C46.4 0.2 45.9 0 45.3 0c-0.6 0-1 0.2-1.5 0.6L14 30.5C13.6 31 13.3 31.4 13.3 32c0 0.6 0.2 1 0.6 1.5l29.9 29.9C44.3 63.8 44.8 64 45.3 64c0.6 0 1-0.2 1.5-0.6l3.2-3.2c0.4-0.4 0.6-0.9 0.6-1.5 0-0.6-0.2-1-0.6-1.5L24.8 32z"/></svg></span><span class="sr-only">Previous</span></a><div class="carousel-indicators-wrapper"><div class="carousel-indicators btn-group" role="group" aria-label="Carousel slide buttons"></div></div><a class="carousel-control-next" href="#carouselWrap" role="button" data-slide="next" title="Next Question"><span class="sr-only">Next Question</span><span class="carousel-control-next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="next-icon" d="M39.2 32L14 57.2c-0.4 0.4-0.6 0.9-0.6 1.5 0 0.6 0.2 1 0.6 1.5l3.2 3.2C17.6 63.8 18.1 64 18.7 64c0.6 0 1-0.2 1.5-0.6l29.9-29.9C50.4 33 50.7 32.6 50.7 32c0-0.6-0.2-1-0.6-1.5L20.1 0.6C19.7 0.2 19.2 0 18.7 0c-0.6 0-1 0.2-1.5 0.6l-3.2 3.2c-0.4 0.4-0.6 0.9-0.6 1.5 0 0.6 0.2 1 0.6 1.5L39.2 32z"/></svg></span><span class="sr-only">Next</span></a></div></div>');
}
/*
 * Build Carousel Shell Media Pause
 */
function buildCarouselShellMediaPause() {
    $('#activityCarousel').append('<div id="carouselWrap" class="carousel slide" data-interval="false" data-wrap="true"><div class="carousel-controls"><a class="carousel-control-prev" href="#carouselWrap" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="previous-icon" d="M24.8 32L50 6.8c0.4-0.4 0.6-0.9 0.6-1.5s-0.2-1-0.6-1.5L46.8 0.6C46.4 0.2 45.9 0 45.3 0c-0.6 0-1 0.2-1.5 0.6L14 30.5C13.6 31 13.3 31.4 13.3 32c0 0.6 0.2 1 0.6 1.5l29.9 29.9C44.3 63.8 44.8 64 45.3 64c0.6 0 1-0.2 1.5-0.6l3.2-3.2c0.4-0.4 0.6-0.9 0.6-1.5 0-0.6-0.2-1-0.6-1.5L24.8 32z"/></svg></span><span class="sr-only">Previous</span></a><div class="carousel-indicators-wrapper"><ol class="carousel-indicators"></ol></div><a class="carousel-control-next" href="#carouselWrap" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="next-icon" d="M39.2 32L14 57.2c-0.4 0.4-0.6 0.9-0.6 1.5 0 0.6 0.2 1 0.6 1.5l3.2 3.2C17.6 63.8 18.1 64 18.7 64c0.6 0 1-0.2 1.5-0.6l29.9-29.9C50.4 33 50.7 32.6 50.7 32c0-0.6-0.2-1-0.6-1.5L20.1 0.6C19.7 0.2 19.2 0 18.7 0c-0.6 0-1 0.2-1.5 0.6l-3.2 3.2c-0.4 0.4-0.6 0.9-0.6 1.5 0 0.6 0.2 1 0.6 1.5L39.2 32z"/></svg></span><span class="sr-only">Next</span></a></div><div class="carousel-inner"></div></div>');
    // pause media when
    $('#activityCarousel').on('slide.bs.carousel', function () {
        var auds = $('audio');
        $.each(auds, function (index, value) {
            auds.get(index).pause();
        });
    });
}
/*
 * Adjust Carousel Slides
 */
function slideHeight(template) {
    adjustSlideHeight(template);
    $(window).resize(function () {
        adjustSlideHeight(template);
    });
}
/*
 * Adjust the height to center content
 */
function adjustSlideHeight(template) {
    $('.carousel-item').removeAttr("style");
    // Get the height of the tallest slide
    var slides = [];
    if ($(window).width() >= 768) {
        if (template == "ssc") {
            $('#ssc-content .carousel-item').each(function () {
                var slideSize = $(this).height();
                slides.push(slideSize);
            });
            tallestSlide = Math.max.apply(Math, slides);
            $('#ssc-content .carousel-item').each(function () {
                var oldSlideSize = $(this).height();
                if (oldSlideSize < tallestSlide) {
                    $(this).css('height', tallestSlide);
                }
                else {}
            });
        }
        else {
            $('.carousel-item').each(function () {
                var slideSize = $(this).height();
                slides.push(slideSize);
            });
            tallestSlide = Math.max.apply(Math, slides);
            $('.carousel-item').each(function () {
                var oldSlideSize = $(this).height();
                if (oldSlideSize < tallestSlide) {
                    $(this).css('height', tallestSlide);
                }
                else {}
            });
        }
    }
    else {
        $('.carousel-item').removeAttr("style");
    }
}
/*
 * ------------------------------------------------------------------------
 * Screenshot Carousel
 * ------------------------------------------------------------------------
 */
/*
 * Init SSC - load JSON data
 */
function sscInit() {
    $.getJSON(currentPagePath + "ssc.json", function (data) {
        dataSSC = data;
        setupSSC();
    });
}
/*
 * Implement JSON data
 */
function setupSSC() {
    sscText();
    sscCarousel();
    sscSyncContent();
}
/*
 * Build the Supporting Text
 */
function sscText() {
    // Build out all text elements
    var sscText = 0;
    $("#ssc-aside").append('<div id="ssc-text-wrap" class="carousel slide" data-interval="false" data-wrap="false"><div class="carousel-inner"></div></div>');
    $.each(dataSSC.screenshots, function (k, v) {
        $("#ssc-text-wrap .carousel-inner").append('<div id="sscText' + sscText + '" class="sscText carousel-item"><div class="sscText-title">' + v.title + '</div><div class="sscText-description">' + v.text + '</div></div>');
        sscText++;
    });
    $("#sscText0").addClass('active');
}
/*
 * Build the Carousel
 */
function sscCarousel() {
    var sscSlide = 0;
    $('#carouselWrap').data("wrap", false)
        // Build out slides and populate navigation
    $.each(dataSSC.screenshots, function (k, v) {
        // Determine if its an img or a video
        var mediaStr = '';
        if (v.media.split('.').pop() == "mp4") {
            mediaStr = '<video class="sscSlide-content--img sscVid d-block w-100" controls preload="none" poster="Images/videoCover.jpg" playsinline webkit-playsinline><source src="' + currentPagePath + 'media/' + v.media + '" type="video/mp4"><p>Your browser does not support the video tag.</p></video>';
        }
        else {
            mediaStr = '<img src="' + currentPagePath + 'media/' + v.media + '" class="sscSlide-content--img d-block w-100" alt="' + v.title + ' visual"/>';
        }
        $("#ssc-content .carousel-inner").append('<div class="carousel-item" id="sscSlide' + sscSlide + '"><div class="sscSlide-content">' + mediaStr + '</div></div>');
        // Slide Pagination
        $("#ssc-content .carousel-indicators").append('<li data-target="#carouselWrap" data-slide-to="' + sscSlide + '" role="button" tabindex="0"><span>' + (Number(sscSlide) + 1) + '</span></li>');
        if (sscSlide == 0) {
            $("#ssc-content .carousel-item").addClass('active');
            $("#ssc-content .carousel-indicators li").addClass('active');
        }
        sscSlide++;
    });
    // When focused using the keyboard, the enter key will navigate to current slide 
    $("#ssc-content .carousel-indicators li").keyup(function (event) {
        if (event.keyCode === 13) {
            $(this).click();
        }
    });
    // Move the carousel controls under the carousel since its media, not questions
    $("#ssc-content .carousel-controls").appendTo("#carouselWrap");
}
/*
 * Sync Text Content to the Carousel
 */
function sscSyncContent() {
    $('#ssc-content .carousel').on('slide.bs.carousel', function (event) {
        var to = $(event.relatedTarget).index();
        $('#ssc-text-wrap').carousel(to);
        // pause video if it is playing during sliding
        $(".sscSlide-content video").get(0).pause();
    });
    $("#ssc-content .carousel-item").removeAttr("style");
    $(window).on('resize', function () {
        $("#ssc-text-wrap .carousel-item").removeAttr("style");
    });
}
/*
 * ------------------------------------------------------------------------
 * Multiple Choice Templates
 * ------------------------------------------------------------------------
 */
/*
 * Build Singular Instance
 */
function buildMCShell() {
    $('#activityMC').append('<div class="questionWrap singleQuestion"><div class="container"><div class="questionPrompt"><div class="questionNumber"></div><div class="questionText"><div class="targetLang"><p></p></div></div></div><div class="questionResponse"></div><div class="questionFeedback" id="MCFeedback0"></div></div>');
}
/*
 * Build JSON version
 */
function buildMC(data) {
    html = '';
    // instructions
    html += '<section id="activityInstructions"></section>';
    // media wrapper
    html += '<section id="activityMedia"></section>';
    // carousel wrapper
    html += '<div id="activityCarousel" class="activityContent"></div>';
    // load html wrappers
    $('#page_frame').html(html);
    // add bg
    LoadActivityBackgroundImage(0);
    // populate instructions
    loadInstrustionText(data.temp, data.var);
    // Add Media
    if (data.id.substring(2, 3) == "4") {
        // Add Reading
        if (sessionStorage) {
            var readData = JSON.parse(sessionStorage.getItem(imiName));
            readData = readData.content.sections[data.elo].pages[1];
        }
        else {
            readData = modJSON.content.sections[data.elo].pages[1];
        }
        buildReadingModal(readData);
    }
    else {
        // Add Video
        if (sessionStorage) {
            var vidData = JSON.parse(sessionStorage.getItem(imiName));
            vidData = vidData.content.sections[data.elo].pages[6];
        }
        else {
            vidData = modJSON.content.sections[data.elo].pages[6];
        }
        buildVideoPlayer(vidData);
    }
    // build the carousel shell
    buildCarouselShell();
    // add questions
    $.each(data.content, function (index, value) {
        // Slide Inner
        $(".carousel-inner").append('<div class="carousel-item" id="question' + index + '"><div class="questionWrap"><div class="container"><div class="questionPrompt"><div class="questionNumber"><span>' + (Number(index) + 1) + '</span></div><div class="questionText"><div class="targetLang"><p>' + value.prompt + '</p></div></div></div><div class="questionResponse"></div><div class="questionFeedback" id="MCFeedback' + index + '"></div></div></div></div>');
        if (value.answers.length > 1) {
            // This is a multiple answer q
            multipleAnswerQuestion = true;
        }
        else {
            multipleAnswerQuestion = false;
        }
        $.each(value.alternatives, function (which, text) {
            for (i = 0; i < value.answers.length; i++) {
                if (value.answers[i] == which) {
                    isCorrect = "true";
                    break;
                }
                else {
                    isCorrect = "false";
                }
            }
            $("#question" + index + " " + ".questionResponse").append('<button type="button" data-toggle="button" aria-pressed="false" id="' + index + which + '_mc" name="' + index + '" class="questionDistractor" onclick="evaluateMCAnswer(this.id, \'' + isCorrect + '\', \'' + index + '\', \'' + multipleAnswerQuestion + '\', \'' + value.answers + '\');"><div class="answerLetter"><span></span></div><div class="answerText"><div class="targetLang">' + text + '</div></div></button>');
        });
        // Randomize MC Distractors
        $("#question" + index + " " + ".questionResponse").randomizeDivs(".questionDistractor");
        // Add MC Letters 
        var currentLetter = 0;
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        $("#question" + index + " " + ".questionDistractor").each(function () {
            $(this).find(".answerLetter span").html(letters[currentLetter]);
            if (currentLetter == 0) {
                $(this).attr("tabindex", "0");
            }
            currentLetter = (Number(currentLetter) + 1);
        });
        // Add MC Feedback
        $("#question" + index + " " + ".questionFeedback").append('<div class="feedbackWrapper" id="tmpMCFeedback' + index + '"><div class="feedbackTitle"><span>Feedback</span></div><div class="feedbackText"><div class="targetLang">' + value.feedback + '</div></div></div>');
        // Hide MC Feedback
        $("#MCFeedback" + index).hide();
        // Slide Pagination
        $(".carousel-indicators").append('<button type="button" data-target="#carouselWrap" data-slide-to="' + index + '"><span class="sr-only">Go to question ' + (Number(index) + 1) + '</span><span>' + (Number(index) + 1) + '</span></button>');
        if (index == 0) {
            $(".carousel-item").addClass('active');
            $(".carousel-indicators button").addClass('active');
        }
    });
    // make sure each slide is vertically centered
    activityContentHeight();
}
/*
 * Multiple Choice Evaluation
 */
function evaluateMCAnswer(which, isCorrect, divName, multipleAnswerQuestion, answers) {
    if (multipleAnswerQuestion == "false") {
        $('[name=' + divName + ']').each(function (index) {
            $('[name=' + divName + ']').css("backgroundColor", "");
        });
    }
    if (isCorrect == "true") {
        $("#" + which).addClass('correct');
        $("#" + which).find(".answerLetter").addClass('bg-success');
        $("#" + which).find(".answerLetter span").html('<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>')
    }
    else {
        $("#" + which).addClass("incorrect");
        $("#" + which).find(".answerLetter").addClass('bg-danger');
        $("#" + which).find(".answerLetter span").html('<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg>')
    }
    if (multipleAnswerQuestion == "true") {
        // if all correct answers have been chosen, show feedback
        correctArray = answers.split(",");
        hasAllCorrect = true;
        for (i = 0; i < correctArray.length; i++) {
            if ($("#" + which.charAt(0) + correctArray[i] + "_mc").hasClass("correct") != true) {
                hasAllCorrect = false;
            }
        }
        if (hasAllCorrect) {
            $("#tmpMCFeedback" + divName).addClass("active");
            $("#MCFeedback" + divName).slideDown(350);
            setTimeout(slideHeight, 500);
        }
    }
    else {
        if ($("#tmpMCFeedback" + divName).text() != "" && isCorrect == "true") {
            $("#tmpMCFeedback" + divName).addClass("active");
            $("#MCFeedback" + divName).slideDown(350);
            setTimeout(slideHeight, 500);
        }
    }
}
/*
 * ------------------------------------------------------------------------
 * Constructive Response Templates 
 * ------------------------------------------------------------------------
 */
/*
 * Build Singular Instance
 */
function buildCRShell() {
    $('#activityCR').append('<div id="question0" class="questionWrap singleQuestion"><div class="container"><div class="questionPrompt"><div class="questionNumber"></div><div class="questionText"><div class="targetLang"></div></div></div><div class="questionResponse"><div class="compareWrapper"><div role="button" class="answerCompare" id="compareAnswer0" onclick="evaluateCRAnswer(0);"  tabindex="0"><span>Compare Answer</span></div><div class="answerInput"><textarea id="templateCRTextArea0" class="keyboardInput form-control" placeholder="Type your answer here" rows="5" onfocus="VirtualKeyboard.attachInput(this);"></textarea><div id="insertVKicon0"><button class="keyboardBtn formBtn" id="keyboardBtn" onclick="toggleVirtualKeyboard(0);"><img src="assets/vk/img/jsvk.gif" alt="VirtualKeyboard"></button></div></div></div></div><div class="questionFeedback" id="CRFeedback0"><div class="feedbackWrapper" id="tmpCRFeedback0"><div class="feedbackTitle"><span>Feedback</span></div><div class="feedbackText"></div></div></div></div></div>');
}
/*
 * Build out CR instance
 */
function buildCR(data) {
    html = '';
    // instructions
    html += '<section id="activityInstructions"></section>';
    // media wrapper
    html += '<section id="activityMedia"></section>';
    if (data.content.length > 1) {
        // carousel wrapper
        html += '<section id="activityCarousel" class="activityContent"></section>';
    }
    else {
        html += '<section id="activityCR" class="activityContent"></div>';
    }
    // load html wrappers
    $('#page_frame').html(html);
    // add bg
    LoadActivityBackgroundImage(0);
    // populate instructions
    loadInstrustionText(data.temp, data.var);
    // Add Media
    if (data.id.substring(2, 3) == "6") {
        // Add Reading
        if (sessionStorage) {
            var readData = JSON.parse(sessionStorage.getItem(imiName));
            readData = readData.content.sections[data.elo].pages[1];
        }
        else {
            readData = modJSON.content.sections[data.elo].pages[1];
        }
        buildReadingModal(readData);
    }
    else {
        // Add Video
        if (sessionStorage) {
            var vidData = JSON.parse(sessionStorage.getItem(imiName));
            vidData = vidData.content.sections[data.elo].pages[6];
        }
        else {
            vidData = modJSON.content.sections[data.elo].pages[6];
        }
        buildVideoPlayer(vidData);
    }
    // Build out CR shell based on question count
    if (data.content.length > 1) {
        buildCarouselShell();
        // add questions
        $.each(data.content, function (index, value) {
            // Slide Inner
            $(".carousel-inner").append('<div class="carousel-item" id="question' + index + '"><div class="questionWrap"><div class="container"><div class="questionPrompt"><div class="questionNumber"><span>' + (Number(index) + 1) + '</span></div><div class="questionText"><div class="targetLang"><p>' + value.prompt + '</p></div></div></div><div class="questionResponse"><div class="compareWrapper"><div class="answerCompare answerCompare-btn" id="compareAnswer' + index + '" onclick="evaluateCRAnswer(' + index + ');"><span>Compare Answer</span></button></div><div class="answerInput"><textarea id="templateCRTextArea' + index + '" class="keyboardInput form-control" placeholder="Type your answer here" rows="5" onfocus="VirtualKeyboard.attachInput(this);"></textarea><div id="insertVKicon' + index + '"><button class="keyboardBtn formBtn" id="keyboardBtn' + index + '" onclick="toggleVirtualKeyboard(' + index + ');"><img src="assets/vk/img/jsvk.gif" alt="VirtualKeyboard"></button></div></div></div><div class="questionFeedback" id="CRFeedback' + index + '"></div></div></div></div></div>');
            // Add the feedback
            $("#question" + index + " " + ".questionFeedback").append('<div class="feedbackWrapper" id="tmpCRFeedback' + index + '"><div class="feedbackTitle"><span>Feedback</span></div><div class="feedbackText"><div class="targetLang">' + value.feedback + '</div></div></div>');
            // Hide the feedback
            $('#CRFeedback' + index).hide();
            // Slide Pagination
            $(".carousel-indicators").append('<button type="button" data-target="#carouselWrap" data-slide-to="' + index + '"><span class="sr-only">Go to question ' + (Number(index) + 1) + '</span><span>' + (Number(index) + 1) + '</span></button>');
            if (index == 0) {
                $(".carousel-item").addClass('active');
                $(".carousel-indicators button").addClass('active');
            }
            setTimeout(slideHeight, 1);
            // call for the language keyboard
            $('#VirtualKeyboardWrapper').addClass('carousel');
            setupVirtualKeyboard(0);
        });
        // set up call for keyboard when using carousel
        $('#carouselWrap').on('slid.bs.carousel', function () {
            currentQ = $('.carousel-item.active').index();
            setupVirtualKeyboard(currentQ);
        });
    }
    else {
        buildCRShell();
        // Add question text
        $(".questionText").append('<div class="targetLang"><p>' + data.content[0].prompt + '</p></div>');
        // Add question response
        $(".feedbackText").append('<div class="targetLang">' + data.content[0].feedback + '</div>');
        // Hide the feedback
        $('#CRFeedback0').hide();
        // call for the language keyboard
        $('#VirtualKeyboardWrapper').removeClass('carousel');
        setupVirtualKeyboard(0);
    }
    activityContentHeight();
}
/*
 * Setup the virtual keyboard
 */
function setupVirtualKeyboard(index, multi) {
    if (!isMobile) {
        //Add keyboard class to page_frame
        $('#page_frame').addClass('vk-enabled');
        // Set Language 
        VirtualKeyboard.setVisibleLayoutCodes(["HI-IN"]);
        VirtualKeyboard.switchLayout("Hindi Traditional");
        // Close keyboard on Answer Compare
        $("#compareAnswer" + index).click(function () {
                $('#VirtualKeyboardWrapper').removeClass('active');
                $('.activityContent').removeClass('keyboard-active');
                setTimeout(function () {
                    VirtualKeyboard.close();
                }, 500);
            })
            // Show Virtual Keyboard on screen load 
        if (window.innerWidth >= 991) {
            $("#templateCRTextArea" + index).on("focus", function () {
                //console.log(VirtualKeyboard.open("templateCRTextArea" + index, "keyboard" + index));
                if ($("#virtualKeyboard").length === 0) {
                    VirtualKeyboard.toggle("templateCRTextArea" + index, "keyboard");
                    VirtualKeyboard.open("templateCRTextArea" + index, "keyboard");
                    toggleVirtualKeyboard(index);
                    return false;
                }
            });
        }
        // Open by Default on Desktop
        if (window.innerWidth >= 991) {
            if ($('#glossaryWrapper #VirtualKeyboardWrapper').length == 0) {
                VirtualKeyboard.open("templateCRTextArea" + index, "keyboard");
                $('#VirtualKeyboardWrapper').addClass('active');
                $('.activityContent').addClass('keyboard-active');
            }
        }
        // Hide Virtual Keyboard at centain size
        window.onresize = function () {
            if ($('#page_frame').hasClass('vk-enabled')) {
                if (window.innerWidth < 991) {
                    VirtualKeyboard.close();
                    $('#VirtualKeyboardWrapper').removeClass('active');
                }
                else {
                    VirtualKeyboard.open("templateCRTextArea" + index, "keyboard");
                    $('#VirtualKeyboardWrapper').addClass('active');
                }
            }
        }
    }
    else {
        addMobileKeyboardModal();
    }
}
/*
 * Add keyboard modal for when on a mobile device
 */
function addMobileKeyboardModal() {
    $('#page_frame_container').append('<div class="modal dli-modal fade" id="keyboardModal" tabindex="-1" role="dialog"> <div class="modal-dialog modal-dialog-centered"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title">Notice</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div><div class="modal-body"><p>To complete this activity on a mobile device, the proper language keyboard is needed on this mobile device. To install a language keyboard on this mobile device please follow the steps listed below:</p><br><p><strong>Add a language on Gboard through Android settings</strong></p><ol style="padding-left: 15px;"><li>On your Android phone or tablet, open the Settings app.</li><li>Tap System. Languages & input.</li><li>Under "Keyboards," tap Virtual keyboard.</li><li>Tap Gboard. Languages.</li><li>Pick a language.</li><li>Turn on the layout you want to use.</li><li>Tap Done.</li></ol><br><p><strong>Add or remove a keyboard for another language on iOS through settings</strong></p><ol style="padding-left: 15px;"><li>Go to Settings > General > Keyboard.</li><li>Tap Keyboards, then do any of the following:<ul style="padding-left: 15px;"><li><i>Add a keyboard:</i> Tap Add New Keyboard, then choose a keyboard from the list. Repeat to add more keyboards.</li><li><i>Remove a keyboard:</i> Tap Edit, tap the Delete button next to the keyboard you want to remove, tap Delete, then tap Done.</li><li><i>Reorder your keyboard list:</i> Tap Edit, drag the Reorder button next to a keyboard to a new place in the list, then tap Done.</li></ul></li></ol><p>If you add a keyboard for a different language, the corresponding language is automatically added to the Preferred Language Order list. You can view this list and add languages to it directly in Settings > General > Language & Region. You can also reorder the list to change how apps and websites display text.</p></div></div></div></div>');
}
/*
 * Toggle Main Keyboard
 */
function toggleVirtualKeyboard(index) {
    if (!isMobile) {
        if ($('#VirtualKeyboardWrapper').hasClass('active')) {
            $('#VirtualKeyboardWrapper').removeClass('active');
            $('.activityContent').removeClass('keyboard-active');
            setTimeout(function () {
                VirtualKeyboard.close();
            }, 500);
        }
        else {
            console.log('add');
            VirtualKeyboard.open("templateCRTextArea" + index, "keyboard");
            $('#VirtualKeyboardWrapper').addClass('active');
            $('.activityContent').addClass('keyboard-active');
            $("html, body, #page_frame").animate({
                scrollTop: $("html, body, #page_frame").prop("scrollHeight")
            }, 500);
        }
    }
    else {
        $('#keyboardModal').modal('show')
    }
}
/*
 * Toggle Glossary keyboard
 */
function toggleGlossaryKeyboard() {
    if (!isMobile) {
        // close from glossary
        if ($('#VirtualKeyboardWrapper').hasClass('glossary')) {
            console.log('glossary-close');
            $('#VirtualKeyboardWrapper').removeClass('glossary');
            setTimeout(function () {
                VirtualKeyboard.close();
            }, 500);
        }
        //  open from glossary
        else {
            console.log('glossary-open');
            VirtualKeyboard.open("searchGlossary", "keyboard");
            $('#VirtualKeyboardWrapper').addClass('glossary');
        }
    }
    else {
        if ($('#keyboardModal').length == 0) {
            addMobileKeyboardModal();
            $('#keyboardModal').modal('show')
        }
        else {
            $('#keyboardModal').modal('show')
        }
    }
}
/*
 * Write Carousel Instance
 */
function writeCRCarouselTemplate(which, tagDesc) {
    // Slide Inner
    $(".carousel-inner").append('<div class="carousel-item" id="question' + which + '"><div class="questionWrap"><div class="container"><div class="questionPrompt"><div class="questionNumber"><span>' + (Number(which) + 1) + '</span></div><div class="questionText"><div class="targetLang"><p>' + templateCR.question + '</p></div></div></div><div class="questionResponse"><div class="compareWrapper"><div class="answerCompare answerCompare-btn" id="compareAnswer' + which + '" onclick="evaluateCRAnswer(' + which + ');"><span>Compare Answer</span></button></div><div class="answerInput"><textarea id="templateCRTextArea' + which + '" class="keyboardInput form-control" placeholder="Type your answer here" rows="5"></textarea></div></div></div><div class="questionFeedback" id="CRFeedback' + which + '"></div></div></div></div>');
    // Add the feedback
    $("#question" + which + " " + ".questionFeedback").append('<div class="feedbackWrapper" id="tmpCRFeedback' + which + '"><div class="feedbackTitle"><span>Feedback</span></div><div class="feedbackText"><div class="targetLang">' + templateCR.answer[which] + '</div></div></div>');
    // Hide the feedback
    $('#CRFeedback' + which).hide();
    // Slide Pagination
    $(".carousel-indicators").append('<li data-target="#carouselWrap" data-slide-to="' + which + '"><span>' + (Number(which) + 1) + '</span></li>');
    if (which == 0) {
        $(".carousel-item").addClass('active');
        $(".carousel-indicators li").addClass('active');
    }
    // Change tag if needed
    switch (tagDesc) {
    case "statement":
        $("#question" + which + " " + ".questionWrap").addClass("multiStatement");
        break;
    case "situation":
        $("#question" + which + " " + ".questionWrap").addClass("multiSituation");
        break;
    default:
        break;
    }
    setTimeout(slideHeight, 1);
}
/*
 * Constructive Response Evaluation
 */
function evaluateCRAnswer(which) {
    var characterLimit = 50;
    if ($("#templateCRTextArea" + which).val().length >= characterLimit) {
        $('#question' + which + ' .alert').alert('close');
        $("#tmpCRFeedback" + which).addClass("active");
        // Show Feedback
        $('#CRFeedback' + which).slideDown(350);
        setTimeout(slideHeight, 350);
    }
    else if ($("#question" + which).find(".questionAlert").length > 0) {
        //do something
    }
    else {
        $("#question" + which + " .questionPrompt").before('<div class="questionAlert alert alert-warning" role="alert"><div class="alertIcon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="warning-icon" d="M63.4 54.9L36 4.7C35.6 4 35 3.4 34.3 3c-0.7-0.4-1.5-0.6-2.3-0.6 -0.8 0-1.6 0.2-2.3 0.6C29 3.4 28.4 4 28 4.7L0.6 54.9c-0.8 1.5-0.8 3 0.1 4.5 0.4 0.7 1 1.2 1.7 1.6 0.7 0.4 1.5 0.6 2.3 0.6h54.8c0.8 0 1.6-0.2 2.3-0.6 0.7-0.4 1.3-1 1.7-1.6C64.2 57.9 64.2 56.4 63.4 54.9zM36.6 51.4c0 0.3-0.1 0.6-0.3 0.8 -0.2 0.2-0.5 0.3-0.8 0.3h-6.8c-0.3 0-0.6-0.1-0.8-0.3 -0.2-0.2-0.3-0.5-0.3-0.8v-6.8c0-0.3 0.1-0.6 0.3-0.8 0.2-0.2 0.5-0.3 0.8-0.3h6.8c0.3 0 0.6 0.1 0.8 0.3 0.2 0.2 0.3 0.5 0.3 0.8L36.6 51.4 36.6 51.4 36.6 51.4zM36.5 38c0 0.2-0.1 0.4-0.4 0.6 -0.2 0.2-0.5 0.2-0.8 0.2h-6.6c-0.3 0-0.6-0.1-0.9-0.2 -0.2-0.2-0.4-0.4-0.4-0.6l-0.6-16.3c0-0.3 0.1-0.6 0.4-0.7 0.3-0.3 0.6-0.4 0.9-0.4h7.8c0.3 0 0.5 0.1 0.9 0.4 0.2 0.2 0.4 0.4 0.4 0.7L36.5 38z"/></svg></div><div class="alertText">Answer provided does not meet the minimum word count.</div><div class="alertClose"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div>');
        setTimeout(slideHeight, 350);
        $('.alert').on('closed.bs.alert', function () {
            slideHeight();
        });
    }
}
/*
 * ------------------------------------------------------------------------
 * Missing Words and Phrases Template
 * ------------------------------------------------------------------------
 */
function buildMWP(data) {
    html = '';
    // instructions
    html += '<section id="activityInstructions"></section>';
    // media wrapper
    html += '<section id="activityMedia"></section>';
    // carousel wrapper
    html += '<section id="activityCarousel" class="activityContent"></section>';
    // load html wrappers
    $('#page_frame').html(html);
    // add bg
    LoadActivityBackgroundImage(0);
    // populate instructions
    loadInstrustionText(data.page_temp);
    // build the carousel shell
    buildCarouselShellMediaPause();
    // variables
    var totalNumberOfAttempts = 3;
    currentAttemptsArray = [];
    // add questions
    $.each(data.content.sentences, function (index) {
        currentAttemptsArray[index] = 0;
        templateMWPActivity = "";
        // build out the drop down
        wordDropDownList = "<select class='form-control form-control-sm templateMWPDropDownBoxes" + index + "'>";
        wordDropDownList += "<option selected disabled hidden value=''>&nbsp;</option>";
        // Build the dropdown    
        $.each(data.content.dropdown[index].options, function (which) {
            wordDropDownList += "<option value=\"" + which + "\">" + data.content.dropdown[index].options[which] + "</option>";
        });
        wordDropDownList += "</select>";
        // Replace curly braces in paragrah
        currentParagraph = data.content.sentences[index].replace(/({\d+})/g, wordDropDownList);
        // Build the activity with audio
        templateMWPActivity += '<div class="carousel-item" id="question' + index + '"><div class="questionWrap"><div class="container"><div class="aud"><audio preload="auto" controls><source  src="' + data.media.src[index] + '" type="audio/mpeg"></audio><div class="mediaCredits"><p class="small"><strong>Source: </strong>' + data.media.cc[index] + '</p></div></div>' + '<div class="questionPrompt"><div class="questionNumber"><span>' + (Number(index) + 1) + '</span></div>'
        if (data.media.src[index]) {
            templateMWPActivity += '<div class="questionText"><div class="targetLang"><p style="text-align:left">' + currentParagraph + '</p></div><br /><button class="btn btn-primary" id="compareAnswer' + index + '" onclick="checkMWPAnswer(' + index + ');">Submit</button><span class="templateVocabParagraphAttemptCounter small" id="templateMWPAttemptCounter' + index + '">Attempt 1/3</span></div>';
        }
        // Write
        $(".carousel-inner").append(templateMWPActivity);
        // Slide Pagination
        $(".carousel-indicators").append('<li data-target="#carouselWrap" data-slide-to="' + index + '"><span>' + (Number(index) + 1) + '</span></li>');
        if (index == 0) {
            $(".carousel-item").addClass('active');
            $(".carousel-indicators li").addClass('active');
        }
        // Randomize the drop down options
        $('.templateMWPDropDownBoxes' + index).shuffle();
        // ecj
        $(".templateMWPDropDownBoxes" + index).each(function (index, element) {
            $(element).prop("id", "selId_" + index + "_" + index);
        });
    });
    activityContentHeight();
}
/*
 * Shuffle Missing Words and Phrases
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
/*
 * Missing Words and Phrases Evaluation
 */
function checkMWPAnswer(which) {
    hasAnsweredAll = true;
    hasAnyIncorrect = false;
    $(".templateMWPDropDownBoxes" + which + " option:selected").each(function () {
        // Check to make sure all boxes have an answer
        if (this.value == "") {
            hasAnsweredAll = false;
            // alert("Please select an answer for each fill-in-the-blank.")
            if ($('#question' + which + ' .alert').length) {
                // If the Alert is present, do nothing
            }
            else {
                $('#question' + which + ' .questionWrap .questionPrompt').before('<div class="questionAlert alert alert-warning" role="alert"><div class="alertIcon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="warning-icon" d="M63.4 54.9L36 4.7C35.6 4 35 3.4 34.3 3c-0.7-0.4-1.5-0.6-2.3-0.6 -0.8 0-1.6 0.2-2.3 0.6C29 3.4 28.4 4 28 4.7L0.6 54.9c-0.8 1.5-0.8 3 0.1 4.5 0.4 0.7 1 1.2 1.7 1.6 0.7 0.4 1.5 0.6 2.3 0.6h54.8c0.8 0 1.6-0.2 2.3-0.6 0.7-0.4 1.3-1 1.7-1.6C64.2 57.9 64.2 56.4 63.4 54.9zM36.6 51.4c0 0.3-0.1 0.6-0.3 0.8 -0.2 0.2-0.5 0.3-0.8 0.3h-6.8c-0.3 0-0.6-0.1-0.8-0.3 -0.2-0.2-0.3-0.5-0.3-0.8v-6.8c0-0.3 0.1-0.6 0.3-0.8 0.2-0.2 0.5-0.3 0.8-0.3h6.8c0.3 0 0.6 0.1 0.8 0.3 0.2 0.2 0.3 0.5 0.3 0.8L36.6 51.4 36.6 51.4 36.6 51.4zM36.5 38c0 0.2-0.1 0.4-0.4 0.6 -0.2 0.2-0.5 0.2-0.8 0.2h-6.6c-0.3 0-0.6-0.1-0.9-0.2 -0.2-0.2-0.4-0.4-0.4-0.6l-0.6-16.3c0-0.3 0.1-0.6 0.4-0.7 0.3-0.3 0.6-0.4 0.9-0.4h7.8c0.3 0 0.5 0.1 0.9 0.4 0.2 0.2 0.4 0.4 0.4 0.7L36.5 38z"/></svg></div><div class="alertText">Please select an answer for each fill-in-the-blank.</div><div class="alertClose"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div></div>');
                setTimeout(slideHeight, 350);
                $('.alert').on('closed.bs.alert', function () {
                    slideHeight();
                });
            }
            return false;
        }
    });
    if (hasAnsweredAll) {
        //drop the alert message and adjust the height
        $('#question' + which + ' .alert').alert('close');
        setTimeout(slideHeight, 350);
        $(".templateMWPDropDownBoxes" + which + " option:selected").each(function (index) {
            if (this.value == index) {
                $(this).parent().css("background-color", "#66ff66");
                $(this).parent().prop("disabled", true);
                $(this).parent().css("color", "#000000");
                $(".templateMWPDropDownBoxes" + which + " option[value=" + index + "]").prop("disabled", true);
            }
            else {
                hasAnyIncorrect = true;
                $(this).parent().css("background-color", "#ff9999");
                $(this).parent().on('mousedown', function () {
                    $(this).css("background-color", "");
                });
            }
        });
        currentAttemptsArray[which] = currentAttemptsArray[which] + 1;
        // They reached max attempts
        if (currentAttemptsArray[which] == totalNumberOfAttempts) {
            // Disable submit and populate correct answers
            $("#templateMWPSubmitButton" + which).prop("disabled", true);
            $(".templateMWPDropDownBoxes" + which + " option:selected").each(function (index) {
                $(this).parent().css("background-color", "#66ff66");
                $(this).parent().css("color", "#000000");
                $(this).parent().find('option[value="' + index + '"]').prop('selected', true);
                $(this).parent().prop("disabled", true);
                $("#templateMWPAttemptCounter" + which).text("");
            });
        }
        else {
            $("#templateMWPAttemptCounter" + which).text("Attempt " + (currentAttemptsArray[which] + 1) + "/3");
        }
        // They answered all correct
        if (!hasAnyIncorrect) {
            $("#templateMWPSubmitButton" + which).prop("disabled", true);
            $("#templateMWPAttemptCounter" + which).text("");
        }
    }
}
/*
 * ------------------------------------------------------------------------
 * Mindmap Template 
 * ------------------------------------------------------------------------
 */
var asideInfo;
var choicesList;
var editChoiceList;
var activeNode;
var editMode;
var learnerConcept;
var dataMM;
/*
 *   initializes text and functionality of page nodes
 *   populates train-of-thought choice list
 */
function buildMM(data) {
    dataMM = data;
    html = '';
    var downArrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" focusable="false" viewBox="0 0 64 64"><title lang="en">Downward Arrow Icon</title><path d="M46.1 48.1c0.2 0.5 0.1 0.9-0.2 1.3L33 63.6c-0.2 0.2-0.5 0.4-0.9 0.4 -0.3 0-0.6-0.1-0.9-0.4L18.1 49.4c-0.3-0.4-0.4-0.8-0.2-1.3 0.2-0.5 0.6-0.7 1.1-0.7h8.3V1.2c0-0.3 0.1-0.6 0.3-0.9C27.8 0.1 28.1 0 28.4 0h7.1c0.3 0 0.6 0.1 0.9 0.3 0.2 0.2 0.3 0.5 0.3 0.9v46.2H45C45.6 47.4 45.9 47.6 46.1 48.1z"/></svg>';
    var plusSVG = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="plus-icon" d="M64 27.6v8.7c0 1.2-0.4 2.2-1.3 3.1 -0.8 0.8-1.9 1.3-3.1 1.3H40.7v18.9c0 1.2-0.4 2.2-1.3 3.1 -0.8 0.8-1.9 1.3-3.1 1.3h-8.7c-1.2 0-2.2-0.4-3.1-1.3s-1.3-1.9-1.3-3.1V40.7H4.4c-1.2 0-2.2-0.4-3.1-1.3C0.4 38.6 0 37.6 0 36.4v-8.7c0-1.2 0.4-2.2 1.3-3.1s1.9-1.3 3.1-1.3h18.9V4.4c0-1.2 0.4-2.2 1.3-3.1S26.4 0 27.6 0h8.7c1.2 0 2.2 0.4 3.1 1.3 0.8 0.8 1.3 1.9 1.3 3.1v18.9h18.9c1.2 0 2.2 0.4 3.1 1.3S64 26.4 64 27.6z"/></svg>';
    // MM wrapper
    html += '<div class="container-fluid" id="mindmap"><div class="row">';
    // Left Nav wrapper
    html += '<section class="col-12 col-lg-4 col-xl-3" id="mindmap-aside">';
    // instructions
    if (sessionStorage) {
        var iMM = JSON.parse(sessionStorage.getItem(imiName));
    }
    else {
        var iMM = modJSON;
    }
    iMM = iMM.content.instructions["ins" + data.temp];
    html += '<div id="mindmap-aside-panel1" class="mindmap-aside-panel active"><div id="mindmap-aside--instructions"><div style="width: 45px"><div id="instructionIcon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64" aria-labelledby="infoTitle infoDesc" role="img"><title id="infoTitle">Information Icon</title><desc id="infoDesc">The following are activity instructions and or information.</desc><path class="info-icon" d="M26.2 14.5h11.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2V2.9c0-0.8-0.3-1.5-0.9-2C39.3 0.3 38.6 0 37.8 0H26.2c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v8.7c0 0.8 0.3 1.5 0.9 2C24.7 14.3 25.4 14.5 26.2 14.5z"/><path class="info-icon" d="M45.7 53.2c-0.6-0.6-1.3-0.9-2-0.9h-2.9V26.2c0-0.8-0.3-1.5-0.9-2 -0.6-0.6-1.3-0.9-2-0.9H20.4c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2 0.6 0.6 1.3 0.9 2 0.9h2.9v17.5h-2.9c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2C18.9 63.7 19.6 64 20.4 64H43.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2v-5.8C46.5 54.5 46.3 53.8 45.7 53.2z"/></svg></div></div><div><div id="instructionText"><div class="TL">' + iMM.types[0].tl + '</div><div class="EN" style="display:none">' + iMM.types[0].en + '</div></div></div></div><div id="mindmap-aside--legend"><div class="legend-item" id="legend-item1"><div class="legend-item--color"><span id="color1"></span></div><p>Main Idea</p></div><div class="legend-item" id="legend-item2"><div class="legend-item--color"><span id="color2"></span><span id="color3"></span></div><p>Topics Covered</p></div><div class="legend-item" id="legend-item3"><div class="legend-item--color"><span id="color4"></span></div><p>Supporting Ideas</p></div></div></div>';
    // choice list
    html += '<div id="mindmap-aside-panel2" class="mindmap-aside-panel"><button type="button" class="close" aria-label="Close" onclick="ChoicesDone();"><span aria-hidden="true">×</span></button><div class="mt-3 ml-4 mr-2">Select an appropriate supporting idea from the list below:</div><br><br><div id="choicesList" class="list-group targetLang mindmap-aside-panel"><a id="choice1" href="#" class="list-group-item" onclick="ChoiceMade(1);"></a><a id="choice2" href="#" class="list-group-item" onclick="ChoiceMade(2);"></a><a id="choice3" href="#" class="list-group-item" onclick="ChoiceMade(3);"></a><a id="choice4" href="#" class="list-group-item" onclick="ChoiceMade(4);"></a><a id="choice5" href="#" class="list-group-item" onclick="ChoiceMade(5);"></a><a id="choice6" href="#" class="list-group-item" onclick="ChoiceMade(6);"></a><a id="choice7" href="#" class="list-group-item" onclick="ChoiceMade(7);"></a><a id="choice8" href="#" class="list-group-item" onclick="ChoiceMade(8);"></a><a id="choice9" href="#" class="list-group-item" onclick="ChoiceMade(9);"></a><a id="choiceCancel" href="#" class="btn btn-outline-primary" onclick="ChoicesDone();">Cancel</a></div></div>';
    // buttons
    html += '<div id="mindmap-aside--buttons"><button id="compareAnswer" type="button" class="btn btn-primary" onclick="ChoicesDone(); EditChoicesDone();">Compare</button><button id="reviewReading" type="button" class="btn btn-primary" data-toggle="modal" data-target="#reviewReadingModal">View Reading</button></div></section>';
    // edit choice list
    html += '<div id="editChoicesList"><li><a id="deleteChoice" href="#" class="edit-choice-item" title="Remove This Concept" onclick="EditChoiceNode(true);"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="trash-o-icon" d="M24 25.3v24c0 0.4-0.1 0.7-0.4 1s-0.6 0.4-1 0.4H20c-0.4 0-0.7-0.1-1-0.4s-0.4-0.6-0.4-1v-24c0-0.4 0.1-0.7 0.4-1s0.6-0.4 1-0.4h2.7c0.4 0 0.7 0.1 1 0.4S24 24.9 24 25.3zM34.7 25.3v24c0 0.4-0.1 0.7-0.4 1s-0.6 0.4-1 0.4h-2.7c-0.4 0-0.7-0.1-1-0.4s-0.4-0.6-0.4-1v-24c0-0.4 0.1-0.7 0.4-1s0.6-0.4 1-0.4h2.7c0.4 0 0.7 0.1 1 0.4S34.7 24.9 34.7 25.3zM45.3 25.3v24c0 0.4-0.1 0.7-0.4 1s-0.6 0.4-1 0.4h-2.7c-0.4 0-0.7-0.1-1-0.4s-0.4-0.6-0.4-1v-24c0-0.4 0.1-0.7 0.4-1s0.6-0.4 1-0.4H44c0.4 0 0.7 0.1 1 0.4S45.3 24.9 45.3 25.3zM50.7 55.5V16H13.3v39.5c0 0.6 0.1 1.2 0.3 1.7s0.4 0.9 0.6 1.1c0.2 0.2 0.4 0.4 0.4 0.4h34.7c0.1 0 0.2-0.1 0.4-0.4 0.2-0.2 0.4-0.6 0.6-1.1S50.7 56.1 50.7 55.5zM22.7 10.7h18.7l-2-4.9c-0.2-0.2-0.4-0.4-0.7-0.5H25.4c-0.3 0.1-0.5 0.2-0.7 0.5L22.7 10.7zM61.3 12v2.7c0 0.4-0.1 0.7-0.4 1S60.4 16 60 16h-4v39.5c0 2.3-0.7 4.3-2 6S51.2 64 49.3 64H14.7c-1.8 0-3.4-0.8-4.7-2.4S8 58 8 55.7V16H4c-0.4 0-0.7-0.1-1-0.4s-0.4-0.6-0.4-1V12c0-0.4 0.1-0.7 0.4-1s0.6-0.4 1-0.4h12.9l2.9-7c0.4-1 1.2-1.9 2.2-2.6C23.1 0.4 24.2 0 25.3 0h13.3c1.1 0 2.2 0.4 3.3 1.1 1.1 0.7 1.8 1.6 2.2 2.6l2.9 7H60c0.4 0 0.7 0.1 1 0.4S61.3 11.6 61.3 12z"/></svg></a></li><li><a id="editChoice" href="#" class="edit-choice-item" title="Change This Concept" onclick="EditChoiceNode(false);"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="edit-icon" d="M31.9 44.6l4.2-4.2L30.6 35l-4.2 4.2v2h3.4v3.4H31.9zM47.6 18.8c-0.4-0.4-0.8-0.4-1.2 0L33.9 31.4c-0.4 0.4-0.4 0.8 0 1.2 0.4 0.4 0.8 0.4 1.2 0L47.6 20C48 19.6 48 19.2 47.6 18.8zM50.5 40.1v6.8c0 2.8-1 5.3-3 7.3 -2 2-4.5 3-7.3 3H10.3c-2.8 0-5.3-1-7.3-3 -2-2-3-4.5-3-7.3V17.1c0-2.8 1-5.3 3-7.3s4.5-3 7.3-3h29.8c1.5 0 2.9 0.3 4.2 0.9C44.7 7.8 45 8.1 45 8.5c0.1 0.4 0 0.8-0.3 1l-1.8 1.8c-0.3 0.3-0.7 0.4-1.1 0.3 -0.6-0.1-1.1-0.2-1.6-0.2H10.3c-1.6 0-2.9 0.6-4.1 1.7s-1.7 2.5-1.7 4.1v29.8c0 1.6 0.6 2.9 1.7 4.1 1.1 1.1 2.5 1.7 4.1 1.7h29.8c1.6 0 2.9-0.6 4.1-1.7 1.1-1.1 1.7-2.5 1.7-4.1v-4.5c0-0.3 0.1-0.6 0.3-0.8l2.3-2.3c0.4-0.4 0.8-0.4 1.3-0.3C50.3 39.3 50.5 39.6 50.5 40.1zM47.1 13.6L57.4 24 33.3 48.1H23V37.7L47.1 13.6zM63 18.4l-3.3 3.3L49.4 11.3 52.7 8c0.7-0.7 1.5-1 2.4-1s1.8 0.3 2.4 1l5.5 5.5c0.7 0.7 1 1.5 1 2.4S63.7 17.7 63 18.4z"/></svg></a></li><li><a id="editChoiceCancel" href="#" onclick="EditChoicesDone();" class="edit-choice-item" title="Cancel"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg></a></li></div>';
    // MM wrap
    html += '<section class="col-12 col-lg-8 col-xl-9" id="mindmap-content"><div id="mindmap-content-wrapper"><div class="row"><div id="mindMapCarousel" class="carousel slide" data-interval="false" data-wrap="true">';
    // MM content
    html += '<div class="col-12 order-2"><div id="compareAnswerText"></div><div id="rootRowLabel"><span id="rootLabel" class="badge badge-pill">Main Idea</span></div><div id="rootRow" class="col-12 col-lg-8 offset-lg-2 col-xl-12 offset-xl-0"><div id="rootNode">&nbsp;</div></div><div class="carousel-inner"><div class="carousel-item thread col-12 col-xl-4 active" id="thread1"><div class="arrow"><span class="badge badge-pill">Topics Covered</span>' + downArrowSVG + '</div><div id="topicNode1" class="topicRoot node">&nbsp;</div><div class="arrow">' + downArrowSVG + '</div><div id="topicNode1FirstChild" class="topicRootFirstChild node">&nbsp;</div><div class="arrow" id="arrow1A"><span class="badge badge-pill">Supporting Ideas</span>' + downArrowSVG + '</div><div id="choice1A" class="choiceNode node"><div class="eval"></div><div class="nodeContent">' + plusSVG + '<span>Add supporting idea</span></div></div><div class="arrow" id="arrow1B">' + downArrowSVG + '</div><div id="choice1B" class="choiceNode node"><div class="eval"></div><div class="nodeContent">' + plusSVG + '<span>Add supporting idea</span></div></div></div><div class="carousel-item thread col-12 col-xl-4" id="thread2"><div class="arrow"><span class="badge badge-pill">Topics Covered</span>' + downArrowSVG + '</div><div id="topicNode2" class="topicRoot node">&nbsp;</div><div class="arrow">' + downArrowSVG + '</div><div id="topicNode2FirstChild" class="topicRootFirstChild node">&nbsp;</div><div class="arrow" id="arrow2A"><span class="badge badge-pill">Supporting Ideas</span>' + downArrowSVG + '</div><div id="choice2A" class="choiceNode node"><div class="eval"></div><div class="nodeContent">' + plusSVG + '<span>Add supporting idea</span></div></div><div class="arrow" id="arrow2B">' + downArrowSVG + '</div><div id="choice2B" class="choiceNode node"><div class="eval"></div><div class="nodeContent">' + plusSVG + '<span>Add supporting idea</span></div></div></div><div class="carousel-item thread col-12 col-xl-4" id="thread3"><div class="arrow"><span class="badge badge-pill">Topics Covered</span>' + downArrowSVG + '</div><div id="topicNode3" class="topicRoot node">&nbsp;</div><div class="arrow">' + downArrowSVG + '</div><div id="topicNode3FirstChild" class="topicRootFirstChild node">&nbsp;</div><div class="arrow" id="arrow3A"><span class="badge badge-pill">Supporting Ideas</span>' + downArrowSVG + '</div><div id="choice3A" class="choiceNode node"><div class="eval"></div><div class="nodeContent">' + plusSVG + '<span>Add supporting idea</span></div></div><div class="arrow" id="arrow3B">' + downArrowSVG + '</div><div id="choice3B" class="choiceNode node"><div class="eval"></div><div class="nodeContent">' + plusSVG + '<span>Add supporting idea</span></div></div></div></div></div>';
    // navigation
    html += '<div class="carousel-controls col-12 order-1"><a class="carousel-control-prev" href="#mindMapCarousel" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="previous-icon" d="M24.8 32L50 6.8c0.4-0.4 0.6-0.9 0.6-1.5s-0.2-1-0.6-1.5L46.8 0.6C46.4 0.2 45.9 0 45.3 0c-0.6 0-1 0.2-1.5 0.6L14 30.5C13.6 31 13.3 31.4 13.3 32c0 0.6 0.2 1 0.6 1.5l29.9 29.9C44.3 63.8 44.8 64 45.3 64c0.6 0 1-0.2 1.5-0.6l3.2-3.2c0.4-0.4 0.6-0.9 0.6-1.5 0-0.6-0.2-1-0.6-1.5L24.8 32z"/></svg></span><span class="sr-only">Previous</span></a><div class="carousel-indicators-wrapper"><div class="carousel-indicators"><button type="button" data-target="#mindMapCarousel" data-slide-to="0" class="active"><span class="sr-only">Go to question 1</span><span>1</span></button><button type="button" data-target="#mindMapCarousel" data-slide-to="1"><span class="sr-only">Go to question 2</span><span>2</span></button><button type="button" data-target="#mindMapCarousel" data-slide-to="2"><span class="sr-only">Go to question 3</span><span>3</span></button></div></div><a class="carousel-control-next" href="#mindMapCarousel" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="next-icon" d="M39.2 32L14 57.2c-0.4 0.4-0.6 0.9-0.6 1.5 0 0.6 0.2 1 0.6 1.5l3.2 3.2C17.6 63.8 18.1 64 18.7 64c0.6 0 1-0.2 1.5-0.6l29.9-29.9C50.4 33 50.7 32.6 50.7 32c0-0.6-0.2-1-0.6-1.5L20.1 0.6C19.7 0.2 19.2 0 18.7 0c-0.6 0-1 0.2-1.5 0.6l-3.2 3.2c-0.4 0.4-0.6 0.9-0.6 1.5 0 0.6 0.2 1 0.6 1.5L39.2 32z"/></svg></span><span class="sr-only">Next</span></a></div>';
    // close wrapper
    html += '</div></div></div></section></div></div>';
    // add reading modal
    html += '<div id="reviewReadingModal" class="modal fade dli-modal" tabindex="1" role="dialog"><div class="modal-dialog modal-dialog-centered modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h6 class="modal-title">View Reading</h6><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p id="reviewReadingText">&nbsp;</p></div></div></div></div>';
    // add compare modal
    html += '<div id="compareMessageModal" class="modal fade dli-modal" tabindex="1" role="dialog"><div class="modal-dialog modal-dialog-centered modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h6 class="modal-title">Concept Map Example</h6><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>There may be more than one way to organize related concepts from this article. This is an example of how an optimal concept map would look.</p><p>Select the "Your Concept" button to compare your concept map to the Optimal Concept Map. Supporting ideas in the incorrect column will be indicated with an “X”.</p></div></div></div></div>';
    // load html wrappers
    $('#page_frame').html(html);
    // add bg
    LoadActivityBackgroundImage(0, "mindmap");
    // toggle language
    OnLanguageToggle("TL", "EN");
    asideInfo = $("#mindmap-aside-panel1");
    choicesList = $("#mindmap-aside-panel2");
    editChoiceList = $("#editChoicesList");
    activeNode = null;
    editMode = false;
    //////// nodes
    //// root node text
    $("#rootNode").html(data.content.root);
    //// topic nodes
    //text
    $("#topicNode1").html('<div class="nodeContent">' + data.content.topic1Cell1 + '</div>');
    $("#topicNode2").html('<div class="nodeContent">' + data.content.topic1Cell2 + '</div>');
    $("#topicNode3").html('<div class="nodeContent">' + data.content.topic1Cell3 + '</div>');
    //// topic first child nodes
    // text
    $("#topicNode1FirstChild").html('<div class="nodeContent">' + data.content.topic2Cell1 + '</div>');
    $("#topicNode2FirstChild").html('<div class="nodeContent">' + data.content.topic2Cell2 + '</div>');
    $("#topicNode3FirstChild").html('<div class="nodeContent">' + data.content.topic2Cell3 + '</div>');
    //// choice nodes and list
    // node data, hover, and click .css("visibility", "visible")
    AddNodeInteraction($("#choice1A").data({
        nodeType: "choice"
        , num: 1
        , level: "A"
    }).css("visibility", "visible"));
    AddNodeInteraction($("#choice2A").data({
        nodeType: "choice"
        , num: 2
        , level: "A"
    }).css("visibility", "visible"));
    AddNodeInteraction($("#choice3A").data({
        nodeType: "choice"
        , num: 3
        , level: "A"
    }).css("visibility", "visible"));
    AddNodeInteraction($("#choice1B").data({
        nodeType: "choice"
        , num: 1
        , level: "B"
    }));
    AddNodeInteraction($("#choice2B").data({
        nodeType: "choice"
        , num: 2
        , level: "B"
    }));
    AddNodeInteraction($("#choice3B").data({
        nodeType: "choice"
        , num: 3
        , level: "B"
    }));
    // build randomized choices for dropdown
    var choicesValues = [];
    var randomizer = [];
    randomizer.push(data.content.selection1Cell1);
    randomizer.push(data.content.selection1Cell2);
    randomizer.push(data.content.selection1Cell3);
    randomizer.push(data.content.selection2Cell1);
    randomizer.push(data.content.selection2Cell2);
    randomizer.push(data.content.selection2Cell3);
    randomizer.push(data.content.distractor1);
    randomizer.push(data.content.distractor2);
    randomizer.push(data.content.distractor3);
    while (randomizer.length > 0) {
        choicesValues.push(randomizer.splice(Math.floor(Math.random() * randomizer.length), 1));
    }
    for (var n = 0; n < 10; n++) {
        $("#choice" + (n + 1)).html(choicesValues[n]);
    }
    // Add Reading
    if (sessionStorage) {
        var readData = JSON.parse(sessionStorage.getItem(imiName));
        readData = readData.content.sections[data.elo].pages[1];
    }
    else {
        readData = modJSON.content.sections[data.elo].pages[1];
    }
    // Load the reading into the modal
    // title
    var readString = '<h6 class="mb-3"><strong>' + readData.content.title_tl + '</strong></h6>';
    // text
    $.each(readData.content.text, function (pNum, p) {
            readString += '<p>' + p + '</p>';
        })
        // source information
    readString += '<p><strong>Title: </strong>' + readData.content.title_en + '<br><strong>Source: </strong>' + readData.content.src + '<br><strong>Date: </strong>' + readData.content.date + '</p>'
    $('#reviewReadingText').html(readString);
    // for comparing choices
    $("#compareAnswer").on("click", CompareConcepts);
    learnerConcept = {
        "choice1A": null
        , "choice2A": null
        , "choice3A": null
        , "choice1B": null
        , "choice2B": null
        , "choice3B": null
    }
    checkNodeHeight();
    // $('#mindMapCarousel').on('slide.bs.carousel', function () {
    //   calcNodeHeight();
    // });
}

function AddNodeInteraction(nodeObject) {
    nodeObject.hover(function () {
        $(this).css("cursor", "pointer");
        $(this).addClass('focused');
        $('#mindmap-content-wrapper').addClass("nodeFocused");
        if ($(this).data("level") == "B") {
            $("#choice" + $(this).data("num") + "A").addClass('focused');
        };
    }, function () {
        $(this).css("cursor", "");
        $(this).removeClass('focused');
        $('#mindmap-content-wrapper').removeClass("nodeFocused");
        if ($(this).data("level") == "B") {
            $("#choice" + $(this).data("num") + "A").removeClass('focused');
        };
    });
    nodeObject.on("click", {
        nodeObj: nodeObject
    }, NodeSelected);
}

function RemoveNodeInteraction(nodeObject) {
    nodeObject.unbind('mouseenter mouseleave');
    nodeObject.off("click", NodeSelected);
}

function NodeSelected(callingNode) {
    if (!editMode) {
        activeNode = callingNode.data.nodeObj;
        switch (activeNode.data("nodeType")) {
        case "choice":
            if (activeNode.find('svg').length !== 0) {
                console.log('empty node');
                ShowChoiceList();
                $('#mindmap-content-wrapper').addClass('nodeSelected');
                editChoiceList.removeClass('active');
                setTimeout(function () {
                    editChoiceList.css("display", "none");
                }, 500);
                if (activeNode.data("level") == "B") {
                    $("#choice" + activeNode.data("num") + "A").addClass('lower-active');
                };
            }
            else if (activeNode.hasClass('active')) {}
            else {
                ShowEditChoiceList();
                if (activeNode.data("level") == "B") {
                    $("#choice" + activeNode.data("num") + "A").addClass('lower-active');
                };
            }
            switch (activeNode.data("level")) {
            case "A":
                if ($("#choice" + activeNode.data("num") + "B").text() != "Add supporting idea") {
                    $("#deleteChoice").css("visibility", "hidden");
                }
                break;
            case "B":
                if (activeNode.text().length > 1) {
                    $("#deleteChoice").css("visibility", "visible");
                }
                $("#addToChoice").css("visibility", "hidden");
                break;
            }
            break;
        }
    }
    else {
        ToggleChoiceListItem(activeNode.text(), false, false);
        ChoicesDone();
    }
}

function ShowChoiceList() {
    asideInfo.removeClass('active');
    choicesList.addClass('active');
    $('.choiceNode').removeClass('active');
    activeNode.addClass('active');
}

function ShowEditChoiceList() {
    asideInfo.addClass('active');
    $('#mindmap-content-wrapper').addClass('nodeSelected');
    choicesList.removeClass("active");
    var nodePosition = activeNode.offset();
    nodeWidth = activeNode.outerWidth();
    nodeHeight = activeNode.outerHeight();
    $('.choiceNode').removeClass('active');
    activeNode.addClass('active');
    activeNode.before(editChoiceList);
    editChoiceList.css("display", "table");
    editChoiceList.removeClass('active');
    setTimeout(function () {
        editChoiceList.addClass('active');
    }, 1);
}

function ChoiceMade(idVal) {
    var listItem = $("#choice" + idVal);
    console.log(idVal);
    if (listItem.prop("class").indexOf("disabled") == -1) {
        switch (activeNode.data("nodeType")) {
        case "firstChild":
            RemoveNodeInteraction(activeNode);
            PopulateChoiceNode($("#choice" + activeNode.data("num") + "A"), listItem.html());
            break;
        case "choice":
            if (editMode) {
                editMode = false;
            }
            if (activeNode.data("level") == "A") {
                $("#choice" + activeNode.data("num") + "B").css("visibility", "visible");
                $("#arrow" + activeNode.data("num") + "B").css("visibility", "visible");
            }
            else {
                $("#choice" + activeNode.data("num") + "A").removeClass('lower-active');
            }
            PopulateChoiceNode($("#choice" + activeNode.data("num") + activeNode.data("level")), listItem.html());
            break;
        }
        ToggleChoiceListItem(listItem.html(), false, false);
    }
}

function PopulateChoiceNode(nodeObj, choice) {
    nodeObj.find('.nodeContent').html('<div>' + choice + '</div>');
    nodeObj.css("visibility", "visible");
    $("#arrow" + nodeObj.data("num") + nodeObj.data("level")).css("visibility", "visible");
    ChoicesDone();
    // check the node height
    checkNodeHeight();
}

function EditChoiceNode(del) {
    if (del) {
        switch (activeNode.data("level")) {
        case "A":
            $("#choice" + activeNode.data("num") + "B").css("visibility", "hidden");
            $("#arrow" + activeNode.data("num") + "B").css("visibility", "hidden");
            break;
        case "B":
            $("#choice" + activeNode.data("num") + "A").removeClass('lower-active');
            break;
        }
        editChoiceList.css("display", "none");
        ToggleChoiceListItem(activeNode.text(), true, false);
        activeNode.html('<div class="eval"></div><div class="nodeContent"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="plus-icon" d="M64 27.6v8.7c0 1.2-0.4 2.2-1.3 3.1 -0.8 0.8-1.9 1.3-3.1 1.3H40.7v18.9c0 1.2-0.4 2.2-1.3 3.1 -0.8 0.8-1.9 1.3-3.1 1.3h-8.7c-1.2 0-2.2-0.4-3.1-1.3s-1.3-1.9-1.3-3.1V40.7H4.4c-1.2 0-2.2-0.4-3.1-1.3C0.4 38.6 0 37.6 0 36.4v-8.7c0-1.2 0.4-2.2 1.3-3.1s1.9-1.3 3.1-1.3h18.9V4.4c0-1.2 0.4-2.2 1.3-3.1S26.4 0 27.6 0h8.7c1.2 0 2.2 0.4 3.1 1.3 0.8 0.8 1.3 1.9 1.3 3.1v18.9h18.9c1.2 0 2.2 0.4 3.1 1.3S64 26.4 64 27.6z"></path></svg><span>Add supporting idea</span></div>');
        EditChoicesDone();
    }
    else {
        editMode = true;
        ToggleChoiceListItem(activeNode.text(), false, true);
        editChoiceList.css("display", "none");
        ShowChoiceList();
    }
    // check the node height
    checkNodeHeight();
}

function ToggleChoiceListItem(itemText, del, edit) {
    // find node in list
    var choiceNode;
    for (var n = 0; n < 10; n++) {
        if ($("#choice" + (n + 1)).text() == itemText) {
            choiceNode = $("#choice" + (n + 1));
            choiceNode.addClass('disabled');
            break;
        }
    }
    if (del) {
        choiceNode.removeClass('disabled');
    }
    else if (edit) {
        choiceNode.removeClass('disabled');
    }
    else {}
}

function ChoicesDone() {
    if (editMode == true) {
        ToggleChoiceListItem(activeNode.text(), false, false);
    }
    if (activeNode != null) {
        if (activeNode.data("level") == "B") {
            $("#choice" + activeNode.data("num") + "A").removeClass('lower-active');
        };
    }
    editMode = false;
    activeNode = null;
    choicesList.removeClass("active");
    asideInfo.addClass('active');
    $('.choiceNode').removeClass('active');
    $('#mindmap-content-wrapper').removeClass('nodeSelected');
    // check the node height
    checkNodeHeight();
}

function EditChoicesDone() {
    if (activeNode != null) {
        if (activeNode.data("level") == "B") {
            $("#choice" + activeNode.data("num") + "A").removeClass('lower-active');
        };
    }
    editMode = false;
    activeNode = null;
    editChoiceList.removeClass('active');
    $('.choiceNode').removeClass('active');
    $('#mindmap-content-wrapper').removeClass('nodeSelected');
    // check the node height
    checkNodeHeight();
}

function CompareConcepts() {
    // record learner's response
    learnerConcept.choice1A = $("#choice1A .nodeContent").html();
    learnerConcept.choice2A = $("#choice2A .nodeContent").html();
    learnerConcept.choice3A = $("#choice3A .nodeContent").html();
    learnerConcept.choice1B = $("#choice1B .nodeContent").html();
    learnerConcept.choice2B = $("#choice2B .nodeContent").html();
    learnerConcept.choice3B = $("#choice3B .nodeContent").html();
    // disable all nodes
    $.each(learnerConcept, function (index, value) {
        RemoveNodeInteraction($("#" + index));
    });
    $("#compareMessageModal").modal();
    // change button label/function
    $("#compareAnswer").off("click");
    $("#compareAnswer").text("Your Concept");
    $("#compareAnswer").on("click", LearnersConcept);
    $("#compareAnswerText").addClass("active").html('<span>Your Concept Map</span>');
    PossibleConcept()
}

function PossibleConcept() {
    // ensure all nodes/node arrows are visible
    $.each(learnerConcept, function (index, value) {
        $("#" + index).css("visibility", "visible");
        $("#" + index + " .eval").removeClass('bg-danger').addClass('bg-success');
        $("#" + index + " .eval").html('<svg xmlns="http://www.w3.org/2000/svg" aria-label="Checkmark icon" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"></path></svg>');
    });
    $("#arrow1A").css("visibility", "visible");
    $("#arrow2A").css("visibility", "visible");
    $("#arrow3A").css("visibility", "visible");
    $("#arrow1B").css("visibility", "visible");
    $("#arrow2B").css("visibility", "visible");
    $("#arrow3B").css("visibility", "visible");
    // populate nodes with possible
    $("#choice1A .nodeContent").html('<div>' + dataMM.content.selection1Cell1 + '</div>');
    $("#choice1B .nodeContent").html('<div>' + dataMM.content.selection2Cell1 + '</div>');
    $("#choice2A .nodeContent").html('<div>' + dataMM.content.selection1Cell2 + '</div>');
    $("#choice2B .nodeContent").html('<div>' + dataMM.content.selection2Cell2 + '</div>');
    $("#choice3A .nodeContent").html('<div>' + dataMM.content.selection1Cell3 + '</div>');
    $("#choice3B .nodeContent").html('<div>' + dataMM.content.selection2Cell3 + '</div>');
    // change button label/function
    $("#compareAnswer").off("click");
    $("#compareAnswer").text("Your Concept");
    $("#compareAnswer").on("click", LearnersConcept);
    $("#compareAnswerText").html('<i class="fa fa-check-circle" aria-hidden="true"></i><span>Optimal Concept Map</span>');
    // check the node height
    checkNodeHeight();
}

function LearnersConcept() {
    // populate nodes with learner concept
    $.each(learnerConcept, function (index, value) {
        $("#" + index + " .nodeContent").html(value);
        var pathId = index.charAt(6);
        var pathNum1 = "selection1Cell" + pathId;
        var pathNode1 = '<div>' + dataMM.content[pathNum1] + '</div>';
        var pathNum2 = "selection2Cell" + pathId;
        var pathNode2 = '<div>' + dataMM.content[pathNum2] + '</div>';
        if (value == pathNode1 || value == pathNode2) {
            $("#" + index + " .eval").addClass('bg-success');
            $("#" + index + " .eval").html('<svg xmlns="http://www.w3.org/2000/svg" aria-label="Checkmark icon" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"></path></svg>');
        }
        else {
            $("#" + index + " .eval").addClass('bg-danger');
            $("#" + index + " .eval").html('<svg xmlns="http://www.w3.org/2000/svg" aria-label="X icon" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"></path></svg>');
        }
        // hide/show node/node arrow depending on node text
        if (value == "&nbsp;") {
            $("#" + index).css("visibility", "hidden");
            switch (index) {
            case "choice1B":
                $("#arrow1B").css("visibility", "hidden");
                break;
            case "choice2B":
                $("#arrow2B").css("visibility", "hidden");
                break;
            case "choice3B":
                $("#arrow3B").css("visibility", "hidden");
                break;
            }
        }
        else {
            $("#" + index).css("visibility", "visible");
            switch (index) {
            case "choice1B":
                $("#arrow1B").css("visibility", "visible");
                break;
            case "choice2B":
                $("#arrow2B").css("visibility", "visible");
                break;
            case "choice3B":
                $("#arrow3B").css("visibility", "visible");
                break;
            }
        }
    });
    $("#choice1A").css("visibility", "visible");
    $("#choice2A").css("visibility", "visible");
    $("#choice3A").css("visibility", "visible");
    // change button label/function
    $("#compareAnswer").off("click");
    $("#compareAnswer").text("Optimal Concept");
    $("#compareAnswer").on("click", PossibleConcept);
    $("#compareAnswerText").html('<i class="fa fa-user-circle" aria-hidden="true"></i><span>Your Concept Map</span>');
    // check the node height
    checkNodeHeight();
}

function checkNodeHeight() {
    calcNodeHeight();
    $(window).resize(calcNodeHeight);
}

function calcNodeHeight() {
    // reset Node heights 
    var nodes = [];
    tallestNode = 0;
    oldNodeSize = 0;
    $('.node').css('height', '');
    // Get the heights off all Nodes
    $('.node').each(function () {
        var nodeSize = $(this).height();
        nodes.push(nodeSize);
    });
    // Set all the Nodes to be the height of the tallest Node
    tallestNode = Math.max.apply(Math, nodes);
    $('.node').each(function () {
        var oldNodeSize = $(this).height();
        if (oldNodeSize < tallestNode) {
            $(this).css('height', tallestNode);
        }
        else {}
    });
    //adjusts buttons to be similar to the rest on tablet
    if ($(window).width() >= 768 && $(window).width() <= 992) {
        if ($("#mindmap-aside #mindmap-aside--buttons").length > 0) {
            $('#mindmap-content-wrapper .row').prepend($('#mindmap-aside--buttons'));
        }
    }
    else {
        if ($("#mindmap-content-wrapper .row #mindmap-aside--buttons").length > 0) {
            $('#mindmap-aside').append($('#mindmap-aside--buttons'));
        }
    }
}
/*
 * ------------------------------------------------------------------------
 * Reading Setup Functions 
 * ------------------------------------------------------------------------
 */
/*
 * Dynamically load in the reading text needed for the reading Activity
 */
function loadReadingText(readingNumber) {
    $('#readingContent').load('contents/sharedFiles/readings/reading' + readingNumber + '.html', function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            InitNotes("#page_frame");
        };
        // If an eMentor note is present, add a spacer at the bottom of the article.
        if ($(".ementor").length) {
            $('#readingContent').append('<div class="ementor-spacer"></div>');
        }
    });
}
/*
 * For activities that require a link to the Reading, Build out a modal to handle which reading you'd need.
 */
function buildReadingModal(data) {
    console.log(data)
        // Add the Modal Button
    $("#activityMedia").addClass('media-present').append('<div class="container text-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#readingModal"><svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" focusable="false" viewBox="0 0 64 64"><title id="title" lang="en">Reading Icon</title><path class="book-icon" d="M63 15.9c1 1.5 1.3 3.1 0.7 5L53.1 55.7c-0.5 1.6-1.5 3-2.9 4.1 -1.5 1.1-3 1.7-4.7 1.7H10c-2 0-3.9-0.7-5.7-2.1 -1.8-1.4-3.1-3.1-3.8-5.1 -0.6-1.7-0.6-3.3-0.1-4.9 0-0.1 0-0.4 0.1-1s0.1-1.1 0.2-1.4c0-0.2 0-0.5-0.1-0.8s-0.1-0.6-0.1-0.7c0.1-0.3 0.2-0.6 0.3-0.8 0.2-0.3 0.4-0.6 0.6-0.9s0.5-0.6 0.6-0.9c0.6-1 1.2-2.1 1.7-3.5 0.6-1.4 0.9-2.5 1.2-3.5 0.1-0.3 0.1-0.6 0-1.2 -0.1-0.5-0.1-0.9 0-1.1C5 33.3 5.2 33 5.6 32.5c0.4-0.4 0.6-0.7 0.7-0.9 0.5-0.9 1.1-2.1 1.6-3.5s0.9-2.6 1-3.5c0-0.2 0-0.6-0.1-1.2 -0.1-0.6-0.1-0.9 0-1.1 0.1-0.3 0.4-0.7 0.8-1.2 0.5-0.4 0.7-0.7 0.8-0.9 0.5-0.7 1-1.7 1.6-3.2s1-2.7 1.1-3.7c0-0.2 0-0.5-0.1-1 -0.1-0.4-0.1-0.8-0.1-1 0.1-0.2 0.2-0.4 0.3-0.7 0.2-0.3 0.4-0.6 0.7-0.9 0.3-0.3 0.5-0.6 0.7-0.8 0.2-0.3 0.4-0.7 0.6-1.2 0.2-0.5 0.4-0.9 0.6-1.3s0.4-0.9 0.6-1.4c0.2-0.5 0.5-0.9 0.7-1.2 0.3-0.3 0.6-0.6 1-0.9 0.4-0.3 0.9-0.4 1.4-0.4 0.5 0 1.1 0.1 1.8 0.2l0 0.1c1-0.2 1.6-0.3 2-0.3h29.2c1.9 0 3.4 0.7 4.4 2.2s1.3 3.1 0.7 5L47.1 44.5c-0.9 3-1.8 5-2.7 5.9 -0.9 0.9-2.6 1.3-4.9 1.3H6c-0.7 0-1.2 0.2-1.5 0.6 -0.3 0.4-0.3 1 0 1.7 0.6 1.8 2.5 2.7 5.5 2.7h35.5c0.7 0 1.5-0.2 2.2-0.6 0.7-0.4 1.1-0.9 1.3-1.6l11.5-37.9c0.2-0.6 0.2-1.3 0.2-2.2C61.7 14.7 62.5 15.2 63 15.9zM22.1 16c-0.1 0.3-0.1 0.6 0.1 0.9 0.2 0.2 0.4 0.4 0.8 0.4h23.4c0.3 0 0.7-0.1 1-0.4 0.3-0.2 0.5-0.5 0.6-0.9l0.8-2.5c0.1-0.3 0.1-0.6-0.1-0.9 -0.2-0.2-0.4-0.4-0.8-0.4H24.5c-0.3 0-0.7 0.1-1 0.4 -0.3 0.2-0.5 0.5-0.6 0.9L22.1 16zM18.9 25.9c-0.1 0.3-0.1 0.6 0.1 0.9 0.2 0.2 0.4 0.4 0.8 0.4h23.4c0.3 0 0.7-0.1 1-0.4s0.5-0.5 0.6-0.9l0.8-2.5c0.1-0.3 0.1-0.6-0.1-0.9 -0.2-0.2-0.4-0.4-0.8-0.4H21.3c-0.3 0-0.7 0.1-1 0.4 -0.3 0.2-0.5 0.5-0.6 0.9L18.9 25.9z"/></svg>&nbsp;View Reading</button></div>');
    // Build the Modal
    $('#page_frame').append('<div class="modal fade dli-modal" id="readingModal" tabindex="-1" role="dialog" aria-labelledby="readingModalTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h6 class="modal-title" id="readingModalTitle">Reading</h6><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div></div></div></div>');
    // Load the reading into the modal
    // title
    var readString = '<h6 class="mb-3"><strong>' + data.content.title_tl + '</strong></h6>';
    // text
    $.each(data.content.text, function (pNum, p) {
            readString += '<p>' + p + '</p>';
        })
        // source information
    readString += '<p><strong>Title: </strong>' + data.content.title_en + '<br><strong>Source: </strong>' + data.content.src + '<br><strong>Date: </strong>' + data.content.date + '</p>'
    $('#readingModal .modal-body').html(readString);
}
/*
 * ------------------------------------------------------------------------
 * Media Setup Functions 
 * ------------------------------------------------------------------------
 */
/*
 * Media source swapping 
 */
var mediaSourceArray;
var mediaCreditsArray;
var mediaInitializedToSource;
var mediaSwapping;
var mediaSourceIndex;
var mediaSourceTimestamps;
var mediaSourceSwapButton;
var mediaCreditsText;
var mediaPlayer;
var isListening;
// media bookmarking
var mediaBmkString = "";

function SwapMedia(mediaType) {
    if ($('#swapCard1').hasClass('active')) {
        $('#swapCard1').removeClass('active');
        $('#swapCard2').addClass('active');
    }
    else {
        $('#swapCard2').removeClass('active');
        $('#swapCard1').addClass('active');
    }
    if (!mediaInitializedToSource) {
        var mediaSearchString = (isListening) ? "#activityListening " + mediaType : "#activityMedia " + mediaType;
        mediaPlayer = $(mediaSearchString);
        mediaCreditsText = $("#mediaCreditText");
        mediaInitializedToSource = true;
        mediaSwapping = true;
    }
    mediaSourceTimestamps[mediaSourceIndex] = mediaPlayer[0].currentTime;
    mediaSourceIndex = Math.abs(mediaSourceIndex - 1);
    mediaPlayer[0].src = mediaSourceArray[mediaSourceIndex];
    mediaPlayer[0].load();
    mediaPlayer[0].currentTime = mediaSourceTimestamps[mediaSourceIndex];
    // mediaPlayer.removeAttr( "poster" );
    // mediaPlayer[0].play();
    // mediaSourceSwapButton.html(Math.abs(mediaSourceIndex - 1) + 1);
    //mediaCreditsText.html(((isListening) ? "<strong>Source:</strong> " : "") + mediaCreditsArray[mediaSourceIndex]);
    mediaCreditsText.html(((isListening) ? "<strong>Source:</strong> " : "<strong>Source:</strong> ") + mediaCreditsArray[mediaSourceIndex]);
    // timestamp
    WriteBookmarkList();
}

function SwapModalMedia(mediaType) {
    if ($('#swapCard1').hasClass('active')) {
        $('#swapCard1').removeClass('active');
        $('#swapCard2').addClass('active');
    }
    else {
        $('#swapCard2').removeClass('active');
        $('#swapCard1').addClass('active');
    }
    if (!mediaInitializedToSource) {
        var mediaSearchString = "#reviewMediaPlayer " + mediaType;
        mediaPlayer = $(mediaSearchString);
        mediaCreditsText = $("#mediaCreditText");
        mediaInitializedToSource = true;
        mediaSwapping = true;
    }
    mediaSourceTimestamps[mediaSourceIndex] = mediaPlayer[0].currentTime;
    mediaSourceIndex = Math.abs(mediaSourceIndex - 1);
    mediaPlayer[0].src = 'contents/sharedFiles/' + mediaSourceArray[mediaSourceIndex];
    mediaPlayer[0].load();
    mediaPlayer[0].currentTime = mediaSourceTimestamps[mediaSourceIndex];
    // mediaPlayer.removeAttr( "poster" );
    // mediaPlayer[0].play();
    // mediaSourceSwapButton.html(Math.abs(mediaSourceIndex - 1) + 1);
    mediaCreditsText.html(((isListening) ? "<strong>Source:</strong> " : "<strong>Source:</strong> ") + mediaCreditsArray[mediaSourceIndex]);
}
/*
 * Determine which Media Player to build
 */
function buildTemplateMedia(which) {
    // ecj media swapping - initialize variables
    mediaInitializedToSource = false;
    mediaSwapping = false;
    mediaSourceIndex = 0;
    mediaSourceTimestamps = [0, 0];
    mediaPlayer;
    isListening = false;
    if (which.videoAudioLink[0].split('.').pop() == "mp3") { // ecj media swapping - videoAudioLink to videoAudioLink[0]
        buildAudioPlayer(which);
    }
    else {
        buildVideoPlayer(which);
    }
    buildMediaErrorModal();
    if (mediaSourceArray.length > 1) {
        $('#swapCard1').addClass('active');
    }
}
/*
 * Build Audio Player
 */
function buildAudioPlayer(which) {
    mediaSourceArray = which.videoAudioLink; // ecj media swapping
    mediaCreditsArray = which.videoAudioCredits; // ecj media swapping
    $("#activityMedia").addClass('media-present').prepend('<div class="container"><div class="aud"><audio preload="auto" id="activityAudio" controls><source id="audioPlayer4aListeningMp3" src="' + which.videoAudioLink[0] + '" type="audio/mpeg"></audio></div></div>'); // ecj media swapping - videoAudioLink to videoAudioLink[0]
    // Add Buttons
    // ecj media swapping button
    if (mediaSourceArray.length > 1) {
        $(".aud").addClass('multi-media').append('<div id="media-swap-btn" onClick="SwapMedia(\'audio\');"><div class="swapCard" id="swapCard1">1</div><div class="swapCard" id="swapCard2">2</div></div>');
        mediaSourceSwapButton = $("#media-swap-btn span");
    }
    $(".aud").append('<div class="media-bookmark-btn" id="bookmark-list-btn" onClick="openBookmarkList();"><svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" focusable="false" viewBox="0 0 64 64"><title id="title" lang="en">Show Video Bookmarks</title><path class="bookmark-list-icon" d="M58.2 2.1c-0.6-0.8-1.3-1.4-2.2-1.7C55.3 0.1 54.8 0 54 0l0 0H9.7C9.1 0 8.5 0.1 7.9 0.4c-1 0.3-1.7 0.9-2.2 1.7S4.9 3.8 4.9 4.7v54.5c0 1 0.3 1.8 0.8 2.6s1.3 1.4 2.2 1.7C8.5 63.9 9.1 64 9.7 64c1.3 0 2.5-0.5 3.5-1.4l18.7-17.9 18.7 17.9c1 0.9 2.2 1.4 3.5 1.4 0.7 0 1.3-0.1 1.9-0.3 0.9-0.4 1.7-0.9 2.2-1.7s0.8-1.7 0.8-2.6V4.7C59 3.8 58.8 2.9 58.2 2.1zM53.7 58L35.8 40.8 32 37.2l-3.8 3.6L10.2 58V5.4h43.3V58H53.7z"/><path class="bookmark-list-icon" d="M44 29v2c0 0.3-0.1 0.5-0.3 0.7C43.6 31.9 43.3 32 43 32H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 31.5 20 31.2 20 31v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 28.5 44 28.8 44 29zM44 21v2c0 0.3-0.1 0.5-0.3 0.7C43.6 23.9 43.3 24 43 24H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 23.5 20 23.2 20 23v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 20.5 44 20.8 44 21zM44 13v2c0 0.3-0.1 0.5-0.3 0.7C43.6 15.9 43.3 16 43 16H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 15.5 20 15.2 20 15v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 12.5 44 12.8 44 13z"/></svg></div>');
    $(".aud").append('<div class="media-bookmark-btn" id="bookmark-save" onClick="SaveBtnSelected();"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="bookmark-save-icon" d="M58.2 2.1c-0.6-0.8-1.3-1.4-2.2-1.7C55.3 0.1 54.8 0 54 0l0 0H9.7C9.1 0 8.5 0.1 7.9 0.4c-1 0.3-1.7 0.9-2.2 1.7S4.9 3.8 4.9 4.7v54.5c0 1 0.3 1.8 0.8 2.6s1.3 1.4 2.2 1.7C8.5 63.9 9.1 64 9.7 64c1.3 0 2.5-0.5 3.5-1.4l18.7-17.9 18.7 17.9c1 0.9 2.2 1.4 3.5 1.4 0.7 0 1.3-0.1 1.9-0.3 0.9-0.4 1.7-0.9 2.2-1.7s0.8-1.7 0.8-2.6V4.7C59 3.8 58.8 2.9 58.2 2.1zM53.7 58L35.8 40.8 32 37.2l-3.8 3.6L10.2 58V5.4h43.3V58H53.7z"/><path class="bookmark-save-icon" d="M44 19.3v3.2c0 0.5-0.2 0.8-0.5 1.2 -0.3 0.3-0.7 0.5-1.2 0.5h-7.1v7.1c0 0.5-0.2 0.8-0.5 1.2 -0.3 0.4-0.6 0.5-1.1 0.5h-3.2c-0.5 0-0.8-0.2-1.2-0.5 -0.3-0.3-0.5-0.7-0.5-1.2v-7.1h-7.1c-0.5 0-0.8-0.2-1.2-0.5C20.2 23.5 20 23 20 22.6v-3.2c0-0.5 0.2-0.8 0.5-1.2 0.3-0.3 0.7-0.5 1.2-0.5h7.1v-7.1c0-0.5 0.2-0.8 0.5-1.2C29.5 9.2 29.9 9 30.3 9h3.2c0.5 0 0.8 0.2 1.2 0.5 0.3 0.3 0.5 0.7 0.5 1.2v7.1h7.1c0.5 0 0.8 0.2 1.2 0.5C43.8 18.5 44 18.9 44 19.3z"/></svg></div>');
    // List Panels
    $(".aud").append('<div class="bookmark-panel" id="bookmarkSave"><div class="bookmark-panel--title"><h6>New Audio Bookmark</h6><button type="button" class="close" aria-label="Close" onClick="closeBookmarkPanel();"><span aria-hidden="true">&times;</span></button></div><div class="bookmark-panel-content"><form><label for="bookmarkLabel" class="sr-only">Bookmark Label:</label><input type="text" value="" placeholder="Bookmark Title..." class="form-control" id="bookmarkLabel"><button id="addBmkButton" type="button" class="btn" disabled onclick="AddMediaBookmark(bmkLabel.val());">Save</button></form></div></div>');
    $(".aud").append('<div class="bookmark-panel" id="bookmarkList"><div class="bookmark-panel--title"><h6>Audio Bookmarks</h6><button type="button" class="close" aria-label="Close" onClick="closeBookmarkPanel();"><span aria-hidden="true">&times;</span></button></div><div class="bookmark-panel-content"><div class="list-group"></div></div></div>');
    $(".aud").append('<div class="mediaCredits"><p><small id="mediaCreditText"><strong>Source: </strong>' + which.videoAudioCredits[mediaSourceIndex] + '</small></p></div>'); // ecj media swapping - videoAudioCredits to videoAudioCredits[mediaSourceIndex], added id
    $.getScript("assets/js/core/mediaBookmarking.js", function () {
        InitializePageMediaBookmarking(true);
    });
    // Enter on bookmark input saves it
    $("#bookmarkLabel").keydown(function (event) {
        if (event.keyCode === 13 && $(this).val().length > 0) {
            event.preventDefault();
            $("#addBmkButton").click();
        }
    });
    // volume adjustments per DLI request
    $("#activityAudio").prop("volume", 0.5);
}
/*
 * Build Video Player
 */
function buildVideoPlayer(data) {
    mediaInitializedToSource = false;
    mediaSwapping = false;
    mediaSourceIndex = 0;
    mediaSourceTimestamps = [0, 0];
    mediaPlayer;
    isListening = false;
    $("#activityMedia").addClass('video-present').prepend('<div class="vid"><video height="360" width="640" class="img-fluid" id="activityVideo" controls preload="none" playsinline webkit-playsinline poster="assets/media/framework/videoCover.jpg"><source src="' + data.content.url + '" type="video/mp4"><p>Your browser does not support the video tag.</p></video></div>'); // ecj media swapping - videoAudioLink to videoAudioLink[0]
    // Add Buttons
    // ecj media swapping button
    $(".vid").append('<button class="media-bookmark-btn" id="bookmark-list-btn" onClick="openBookmarkList();"><svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" focusable="false" viewBox="0 0 64 64"><title id="title" lang="en">Show Video Bookmarks</title><path class="bookmark-list-icon" d="M58.2 2.1c-0.6-0.8-1.3-1.4-2.2-1.7C55.3 0.1 54.8 0 54 0l0 0H9.7C9.1 0 8.5 0.1 7.9 0.4c-1 0.3-1.7 0.9-2.2 1.7S4.9 3.8 4.9 4.7v54.5c0 1 0.3 1.8 0.8 2.6s1.3 1.4 2.2 1.7C8.5 63.9 9.1 64 9.7 64c1.3 0 2.5-0.5 3.5-1.4l18.7-17.9 18.7 17.9c1 0.9 2.2 1.4 3.5 1.4 0.7 0 1.3-0.1 1.9-0.3 0.9-0.4 1.7-0.9 2.2-1.7s0.8-1.7 0.8-2.6V4.7C59 3.8 58.8 2.9 58.2 2.1zM53.7 58L35.8 40.8 32 37.2l-3.8 3.6L10.2 58V5.4h43.3V58H53.7z"/><path class="bookmark-list-icon" d="M44 29v2c0 0.3-0.1 0.5-0.3 0.7C43.6 31.9 43.3 32 43 32H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 31.5 20 31.2 20 31v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 28.5 44 28.8 44 29zM44 21v2c0 0.3-0.1 0.5-0.3 0.7C43.6 23.9 43.3 24 43 24H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 23.5 20 23.2 20 23v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 20.5 44 20.8 44 21zM44 13v2c0 0.3-0.1 0.5-0.3 0.7C43.6 15.9 43.3 16 43 16H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 15.5 20 15.2 20 15v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 12.5 44 12.8 44 13z"/></svg></button>');
    $(".vid").append('<button class="media-bookmark-btn" id="bookmark-save" onClick="SaveBtnSelected();"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="bookmark-save-icon" d="M58.2 2.1c-0.6-0.8-1.3-1.4-2.2-1.7C55.3 0.1 54.8 0 54 0l0 0H9.7C9.1 0 8.5 0.1 7.9 0.4c-1 0.3-1.7 0.9-2.2 1.7S4.9 3.8 4.9 4.7v54.5c0 1 0.3 1.8 0.8 2.6s1.3 1.4 2.2 1.7C8.5 63.9 9.1 64 9.7 64c1.3 0 2.5-0.5 3.5-1.4l18.7-17.9 18.7 17.9c1 0.9 2.2 1.4 3.5 1.4 0.7 0 1.3-0.1 1.9-0.3 0.9-0.4 1.7-0.9 2.2-1.7s0.8-1.7 0.8-2.6V4.7C59 3.8 58.8 2.9 58.2 2.1zM53.7 58L35.8 40.8 32 37.2l-3.8 3.6L10.2 58V5.4h43.3V58H53.7z"/><path class="bookmark-save-icon" d="M44 19.3v3.2c0 0.5-0.2 0.8-0.5 1.2 -0.3 0.3-0.7 0.5-1.2 0.5h-7.1v7.1c0 0.5-0.2 0.8-0.5 1.2 -0.3 0.4-0.6 0.5-1.1 0.5h-3.2c-0.5 0-0.8-0.2-1.2-0.5 -0.3-0.3-0.5-0.7-0.5-1.2v-7.1h-7.1c-0.5 0-0.8-0.2-1.2-0.5C20.2 23.5 20 23 20 22.6v-3.2c0-0.5 0.2-0.8 0.5-1.2 0.3-0.3 0.7-0.5 1.2-0.5h7.1v-7.1c0-0.5 0.2-0.8 0.5-1.2C29.5 9.2 29.9 9 30.3 9h3.2c0.5 0 0.8 0.2 1.2 0.5 0.3 0.3 0.5 0.7 0.5 1.2v7.1h7.1c0.5 0 0.8 0.2 1.2 0.5C43.8 18.5 44 18.9 44 19.3z"/></svg></button>');
    $(".vid").append('<button class="media-bookmark-btn" id="vid-size-btn" onClick="toggleVideoSize()"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="expand-icon" d="M31.5 38.7c0 0.4-0.1 0.7-0.4 1L17.2 53.5l6 6c0.5 0.5 0.8 1.2 0.8 1.9 0 0.7-0.3 1.3-0.8 1.9 -0.5 0.5-1.2 0.8-1.9 0.8H2.7c-0.7 0-1.3-0.3-1.9-0.8C0.3 62.7 0 62.1 0 61.3V42.7c0-0.7 0.3-1.3 0.8-1.9C1.3 40.3 1.9 40 2.7 40s1.3 0.3 1.9 0.8l6 6L24.4 33c0.3-0.3 0.6-0.4 1-0.4 0.4 0 0.7 0.1 1 0.4l4.8 4.8C31.3 38 31.5 38.3 31.5 38.7zM64 2.7v18.7c0 0.7-0.3 1.3-0.8 1.9 -0.5 0.5-1.2 0.8-1.9 0.8 -0.7 0-1.3-0.3-1.9-0.8l-6-6L39.6 31c-0.3 0.3-0.6 0.4-1 0.4 -0.4 0-0.7-0.1-1-0.4L33 26.3c-0.3-0.3-0.4-0.6-0.4-1 0-0.4 0.1-0.7 0.4-1l13.8-13.8 -6-6C40.3 4 40 3.4 40 2.7s0.3-1.3 0.8-1.9C41.3 0.3 41.9 0 42.7 0h18.7c0.7 0 1.3 0.3 1.9 0.8C63.7 1.3 64 1.9 64 2.7z"/></svg></button>');
    $(".vid").append('<div class="media-bookmark-btn" id="vid-minimize-btn" onClick="minimizeVideo()"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
    // List Panels
    $(".vid").append('<div class="bookmark-panel" id="bookmarkSave"><div class="bookmark-panel--title"><h6>New Video Bookmark</h6><button type="button" class="close" aria-label="Close" onClick="closeBookmarkPanel();"><span aria-hidden="true">&times;</span></button></div><div class="bookmark-panel-content"><form><label for="bookmarkLabel" class="sr-only">Bookmark Label:</label><input type="text" value="" placeholder="Bookmark Title..." class="form-control" id="bookmarkLabel"><button id="addBmkButton" type="button" class="btn" disabled onclick="AddMediaBookmark(bmkLabel.val());">Save</button></form></div></div>');
    $(".vid").append('<div class="bookmark-panel" id="bookmarkList"><div class="bookmark-panel--title"><h6>Video Bookmarks</h6><button type="button" class="close" aria-label="Close" onClick="closeBookmarkPanel();"><span aria-hidden="true">&times;</span></button></div><div class="bookmark-panel-content"><div class="list-group"></div></div></div>');
    $(".vid").append('<div class="vid-cover" onClick="minimizeVideo()"></div>');
    $(".vid").append('<div class="mediaCredits"><p><small id="mediaCreditText"><strong>Source:</strong> ' + data.content.src + '</small></p></div>'); // ecj media swapping - videoAudioCredits to videoAudioCredits[mediaSourceIndex], added id
    document.getElementById('activityVideo').addEventListener('ended', videoEnd, false);
    $.getScript("assets/js/core/mediaBookmarking.js", function () {
        InitializePageMediaBookmarking(true);
    });
    // Enter on bookmark input saves it
    $("#bookmarkLabel").keydown(function (event) {
        if (event.keyCode === 13 && $(this).val().length > 0) {
            event.preventDefault();
            $("#addBmkButton").click();
        }
    });
    // adjust height as when view port height is small and width is a big
    videoHeight();
    // volume adjustments per DLI request
    $("#activityVideo").prop("volume", 0.5);
}

function buildLAAudioPlayer(which) {
    // ecj media swapping - initialize variables
    mediaInitializedToSource = false;
    mediaSwapping = false;
    mediaSourceIndex = 0;
    mediaSourceTimestamps = [0, 0];
    mediaPlayer;
    isListening = true;
    mediaSourceArray = which.videoAudioLink;
    mediaCreditsArray = which.videoAudioCredits;
    $("#activityListening").prepend('<div class="container"><div class="aud listeningAudio"><audio preload="auto" id="activityAudio" controls><source id="audioPlayer4aListeningMp3" src="' + which.videoAudioLink[0] + '" type="audio/mpeg"></audio></div></div>'); // ecj media swapping - videoAudioLink to videoAudioLink[0]
    // Add Buttons
    // ecj media swapping button
    if (mediaSourceArray.length > 1) {
        $(".aud").addClass('multi-media').append('<div id="media-swap-btn" onClick="SwapMedia(\'audio\');"><div class="swapCard" id="swapCard1">1</div><div class="swapCard" id="swapCard2">2</div></div>');
        mediaSourceSwapButton = $("#media-swap-btn span");
        $('#swapCard1').addClass('active');
    }
    $(".aud").append('<div class="media-bookmark-btn" id="bookmark-list-btn" onClick="openBookmarkList();"><svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" focusable="false" viewBox="0 0 64 64"><title id="title" lang="en">Show Video Bookmarks</title><path class="bookmark-list-icon" d="M58.2 2.1c-0.6-0.8-1.3-1.4-2.2-1.7C55.3 0.1 54.8 0 54 0l0 0H9.7C9.1 0 8.5 0.1 7.9 0.4c-1 0.3-1.7 0.9-2.2 1.7S4.9 3.8 4.9 4.7v54.5c0 1 0.3 1.8 0.8 2.6s1.3 1.4 2.2 1.7C8.5 63.9 9.1 64 9.7 64c1.3 0 2.5-0.5 3.5-1.4l18.7-17.9 18.7 17.9c1 0.9 2.2 1.4 3.5 1.4 0.7 0 1.3-0.1 1.9-0.3 0.9-0.4 1.7-0.9 2.2-1.7s0.8-1.7 0.8-2.6V4.7C59 3.8 58.8 2.9 58.2 2.1zM53.7 58L35.8 40.8 32 37.2l-3.8 3.6L10.2 58V5.4h43.3V58H53.7z"/><path class="bookmark-list-icon" d="M44 29v2c0 0.3-0.1 0.5-0.3 0.7C43.6 31.9 43.3 32 43 32H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 31.5 20 31.2 20 31v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 28.5 44 28.8 44 29zM44 21v2c0 0.3-0.1 0.5-0.3 0.7C43.6 23.9 43.3 24 43 24H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 23.5 20 23.2 20 23v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 20.5 44 20.8 44 21zM44 13v2c0 0.3-0.1 0.5-0.3 0.7C43.6 15.9 43.3 16 43 16H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 15.5 20 15.2 20 15v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 12.5 44 12.8 44 13z"/></svg></div>');
    $(".aud").append('<div class="media-bookmark-btn" id="bookmark-save" onClick="SaveBtnSelected();"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="bookmark-save-icon" d="M58.2 2.1c-0.6-0.8-1.3-1.4-2.2-1.7C55.3 0.1 54.8 0 54 0l0 0H9.7C9.1 0 8.5 0.1 7.9 0.4c-1 0.3-1.7 0.9-2.2 1.7S4.9 3.8 4.9 4.7v54.5c0 1 0.3 1.8 0.8 2.6s1.3 1.4 2.2 1.7C8.5 63.9 9.1 64 9.7 64c1.3 0 2.5-0.5 3.5-1.4l18.7-17.9 18.7 17.9c1 0.9 2.2 1.4 3.5 1.4 0.7 0 1.3-0.1 1.9-0.3 0.9-0.4 1.7-0.9 2.2-1.7s0.8-1.7 0.8-2.6V4.7C59 3.8 58.8 2.9 58.2 2.1zM53.7 58L35.8 40.8 32 37.2l-3.8 3.6L10.2 58V5.4h43.3V58H53.7z"/><path class="bookmark-save-icon" d="M44 19.3v3.2c0 0.5-0.2 0.8-0.5 1.2 -0.3 0.3-0.7 0.5-1.2 0.5h-7.1v7.1c0 0.5-0.2 0.8-0.5 1.2 -0.3 0.4-0.6 0.5-1.1 0.5h-3.2c-0.5 0-0.8-0.2-1.2-0.5 -0.3-0.3-0.5-0.7-0.5-1.2v-7.1h-7.1c-0.5 0-0.8-0.2-1.2-0.5C20.2 23.5 20 23 20 22.6v-3.2c0-0.5 0.2-0.8 0.5-1.2 0.3-0.3 0.7-0.5 1.2-0.5h7.1v-7.1c0-0.5 0.2-0.8 0.5-1.2C29.5 9.2 29.9 9 30.3 9h3.2c0.5 0 0.8 0.2 1.2 0.5 0.3 0.3 0.5 0.7 0.5 1.2v7.1h7.1c0.5 0 0.8 0.2 1.2 0.5C43.8 18.5 44 18.9 44 19.3z"/></svg></div>');
    // List Panels
    $(".aud").append('<div class="bookmark-panel" id="bookmarkSave"><div class="bookmark-panel--title"><h6>New Audio Bookmark</h6><button type="button" class="close" aria-label="Close" onClick="closeBookmarkPanel();"><span aria-hidden="true">&times;</span></button></div><div class="bookmark-panel-content"><form><label for="bookmarkLabel" class="sr-only">Bookmark Label:</label><input type="text" value="" placeholder="Bookmark Title..." class="form-control" id="bookmarkLabel"><button id="addBmkButton" type="button" class="btn" disabled onclick="AddMediaBookmark(bmkLabel.val());">Save</button></form></div></div>');
    $(".aud").append('<div class="bookmark-panel" id="bookmarkList"><div class="bookmark-panel--title"><h6>Audio Bookmarks</h6><button type="button" class="close" aria-label="Close" onClick="closeBookmarkPanel();"><span aria-hidden="true">&times;</span></button></div><div class="bookmark-panel-content"><div class="list-group"></div></div></div>');
    $(".aud").append('<div class="mediaCredits"><p><small id="mediaCreditText"><strong>Source: </strong>' + which.videoAudioCredits[mediaSourceIndex] + '</small></p></div>'); // ecj media swapping - videoAudioCredits to videoAudioCredits[mediaSourceIndex], added id
    buildMediaErrorModal();
    $.getScript("assets/js/core/mediaBookmarking.js", function () {
        InitializePageMediaBookmarking(true);
    });
    // Enter on bookmark input saves it
    $("#bookmarkLabel").keydown(function (event) {
        if (event.keyCode === 13 && $(this).val().length > 0) {
            event.preventDefault();
            $("#addBmkButton").click();
        }
    });
    // volume adjustments per DLI request
    $("#activityAudio").prop("volume", 0.5);
}

function buildVid(data) {
    html = '';
    // instructions
    html += '<section id="activityInstructions"></section>';
    // media wrapper
    html += '<section id="activityListening" class="laVid"></section>';
    // load html wrappers
    $('#page_frame').html(html);
    // add bg
    LoadActivityBackgroundImage(0);
    // populate instructions
    loadInstrustionText(data.temp);
    // ecj media swapping - initialize variables
    mediaInitializedToSource = false;
    mediaSwapping = false;
    mediaSourceIndex = 0;
    mediaSourceTimestamps = [0, 0];
    mediaPlayer;
    isListening = true;
    // mediaSourceArray = data.content.src;
    // mediaCreditsArray = data.video.cc;
    $("#activityListening").prepend('<div class="container"><div id="vidWrapper" style="padding: 40px 0px;"><div class="vid listeningVideo"><video height="360" width="640" class="img-fluid" id="activityVideo" controls preload="none" playsinline webkit-playsinline poster="assets/media/framework/videoCover.jpg"><source src="' + data.content.url + '" type="video/mp4"><p>Your browser does not support the video tag.</p></video></div></div></div>'); // ecj media swapping - videoAudioLink to videoAudioLink[0]
    // Add Buttons
    // ecj media swapping button
    // if (mediaSourceArray.length > 1) {
    //     $(".vid").addClass('multi-media').append('<div id="media-swap-btn" onClick="SwapMedia(\'video\');"><div class="swapCard" id="swapCard1">1</div><div class="swapCard" id="swapCard2">2</div></div>');
    //     mediaSourceSwapButton = $("#media-swap-btn span");
    //     $('#swapCard1').addClass('active');
    // }
    $(".vid").append('<button class="media-bookmark-btn" id="bookmark-list-btn" onClick="openBookmarkList();" title="Show Video Bookmarks"><svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" focusable="false" viewBox="0 0 64 64"><title id="title" lang="en">Show Video Bookmarks</title><path class="bookmark-list-icon" d="M58.2 2.1c-0.6-0.8-1.3-1.4-2.2-1.7C55.3 0.1 54.8 0 54 0l0 0H9.7C9.1 0 8.5 0.1 7.9 0.4c-1 0.3-1.7 0.9-2.2 1.7S4.9 3.8 4.9 4.7v54.5c0 1 0.3 1.8 0.8 2.6s1.3 1.4 2.2 1.7C8.5 63.9 9.1 64 9.7 64c1.3 0 2.5-0.5 3.5-1.4l18.7-17.9 18.7 17.9c1 0.9 2.2 1.4 3.5 1.4 0.7 0 1.3-0.1 1.9-0.3 0.9-0.4 1.7-0.9 2.2-1.7s0.8-1.7 0.8-2.6V4.7C59 3.8 58.8 2.9 58.2 2.1zM53.7 58L35.8 40.8 32 37.2l-3.8 3.6L10.2 58V5.4h43.3V58H53.7z"/><path class="bookmark-list-icon" d="M44 29v2c0 0.3-0.1 0.5-0.3 0.7C43.6 31.9 43.3 32 43 32H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 31.5 20 31.2 20 31v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 28.5 44 28.8 44 29zM44 21v2c0 0.3-0.1 0.5-0.3 0.7C43.6 23.9 43.3 24 43 24H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 23.5 20 23.2 20 23v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 20.5 44 20.8 44 21zM44 13v2c0 0.3-0.1 0.5-0.3 0.7C43.6 15.9 43.3 16 43 16H21c-0.3 0-0.5-0.1-0.7-0.3C20.1 15.5 20 15.2 20 15v-2c0-0.3 0.1-0.5 0.3-0.7 0.2-0.2 0.4-0.3 0.7-0.3h22c0.3 0 0.5 0.1 0.7 0.3C43.9 12.5 44 12.8 44 13z"/></svg></button>');
    $(".vid").append('<button class="media-bookmark-btn" id="bookmark-save" onClick="SaveBtnSelected();" title="Add Bookmark"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="bookmark-save-icon" d="M58.2 2.1c-0.6-0.8-1.3-1.4-2.2-1.7C55.3 0.1 54.8 0 54 0l0 0H9.7C9.1 0 8.5 0.1 7.9 0.4c-1 0.3-1.7 0.9-2.2 1.7S4.9 3.8 4.9 4.7v54.5c0 1 0.3 1.8 0.8 2.6s1.3 1.4 2.2 1.7C8.5 63.9 9.1 64 9.7 64c1.3 0 2.5-0.5 3.5-1.4l18.7-17.9 18.7 17.9c1 0.9 2.2 1.4 3.5 1.4 0.7 0 1.3-0.1 1.9-0.3 0.9-0.4 1.7-0.9 2.2-1.7s0.8-1.7 0.8-2.6V4.7C59 3.8 58.8 2.9 58.2 2.1zM53.7 58L35.8 40.8 32 37.2l-3.8 3.6L10.2 58V5.4h43.3V58H53.7z"/><path class="bookmark-save-icon" d="M44 19.3v3.2c0 0.5-0.2 0.8-0.5 1.2 -0.3 0.3-0.7 0.5-1.2 0.5h-7.1v7.1c0 0.5-0.2 0.8-0.5 1.2 -0.3 0.4-0.6 0.5-1.1 0.5h-3.2c-0.5 0-0.8-0.2-1.2-0.5 -0.3-0.3-0.5-0.7-0.5-1.2v-7.1h-7.1c-0.5 0-0.8-0.2-1.2-0.5C20.2 23.5 20 23 20 22.6v-3.2c0-0.5 0.2-0.8 0.5-1.2 0.3-0.3 0.7-0.5 1.2-0.5h7.1v-7.1c0-0.5 0.2-0.8 0.5-1.2C29.5 9.2 29.9 9 30.3 9h3.2c0.5 0 0.8 0.2 1.2 0.5 0.3 0.3 0.5 0.7 0.5 1.2v7.1h7.1c0.5 0 0.8 0.2 1.2 0.5C43.8 18.5 44 18.9 44 19.3z"/></svg></button>');
    // List Panels
    $(".vid").append('<div class="bookmark-panel" id="bookmarkSave"><div class="bookmark-panel--title"><h6>New Video Bookmark</h6><button type="button" class="close" aria-label="Close" onClick="closeBookmarkPanel();" title="Close Bookmarks Menu"><span aria-hidden="true">&times;</span></button></div><div class="bookmark-panel-content"><form><label for="bookmarkLabel" class="sr-only">Bookmark Label:</label><input type="text" value="" placeholder="Bookmark Title..." class="form-control" id="bookmarkLabel" ><button id="addBmkButton" type="button" class="btn" disabled onclick="AddMediaBookmark(bmkLabel.val());">Save</button></form></div></div>');
    $(".vid").append('<div class="bookmark-panel" id="bookmarkList"><div class="bookmark-panel--title"><h6>Video Bookmarks</h6><button type="button" class="close" aria-label="Close" onClick="closeBookmarkPanel();"><span aria-hidden="true">&times;</span></button></div><div class="bookmark-panel-content"><div class="list-group"></div></div></div>');
    $(".vid").append('<div class="vid-cover"></div>');
    $(".vid").append('<div class="mediaCredits"><p><small id="mediaCreditText"><strong>Source:</strong> ' + data.content.src + '</small></p></div>'); // ecj media swapping - videoAudioCredits to videoAudioCredits[mediaSourceIndex], added id
    buildMediaErrorModal();
    $.getScript("assets/js/core/mediaBookmarking.js", function () {
        InitializePageMediaBookmarking(false);
    });
    // Enter on bookmark input saves it
    $("#bookmarkLabel").keydown(function (event) {
        if (event.keyCode === 13 && $(this).val().length > 0) {
            event.preventDefault();
            $("#addBmkButton").click();
        }
    });
    // adjust height as when view port height is small and width is a big
    videoHeight();
    // volume adjustments per DLI request
    $("#activityVideo").prop("volume", 0.5);
}

function buildModalAudioPlayer(which) {
    mediaSourceArray = dataObj.mediaLink;
    mediaCreditsArray = dataObj.mediaCitation;
    $("#reviewMediaPlayer").prepend('<div class="aud modalAudio"><audio preload="auto" id="modalAudio" controls><source src="contents/sharedFiles/' + dataObj.mediaLink[0] + '" type="audio/mpeg"></audio></div>');
    if (mediaSourceArray.length > 1) {
        $(".modalAudio").addClass('multi-media');
        $('<div id="media-swap-btn" onClick="SwapModalMedia(\'audio\');"><div class="swapCard" id="swapCard1">1</div><div class="swapCard" id="swapCard2">2</div></div>').insertAfter("#reviewMediaModal .modal-title");
        mediaSourceSwapButton = $("#media-swap-btn span");
        $('#swapCard1').addClass('active');
    }
    $(".modalAudio").append('<div class="mediaCredits"><p><small id="mediaCreditText"><strong>Source: </strong>' + dataObj.mediaCitation[mediaSourceIndex] + '</small></p></div>');
    $('#reviewMediaModal').on('hidden.bs.modal', function (e) {
        $('#modalAudio')[0].pause();
    });
    // volume adjustments per DLI request
    $("#modalAudio").prop("volume", 0.5);
}

function buildModalVideoPlayer(which) {
    mediaSourceArray = dataObj.mediaLink;
    mediaCreditsArray = dataObj.mediaCitation;
    $("#reviewMediaPlayer").prepend('<div class="modalVideo"><video height="360" width="640" class="img-fluid" id="modalVideo" controls preload="none" playsinline webkit-playsinline poster="Images/videoCover.jpg"><source src="contents/sharedFiles/' + dataObj.mediaLink[0] + '" type="video/mp4"><p>Your browser does not support the video tag.</p></video></div>');
    if (mediaSourceArray.length > 1) {
        $(".modalVideo").addClass('multi-media');
        $('<div id="media-swap-btn" onClick="SwapModalMedia(\'video\');"><div class="swapCard" id="swapCard1">1</div><div class="swapCard" id="swapCard2">2</div></div>').insertAfter("#reviewMediaModal .modal-title");
        mediaSourceSwapButton = $("#media-swap-btn span");
        $('#swapCard1').addClass('active');
    }
    $(".modalVideo").append('<div class="mediaCredits"><p><small id="mediaCreditText"><strong>Source:</strong> ' + dataObj.mediaCitation[mediaSourceIndex] + '</small></p></div>');
    $('#reviewMediaModal').on('hidden.bs.modal', function (e) {
        $('#modalVideo')[0].pause();
    });
    // volume adjustments per DLI request
    $("#modalVideo").prop("volume", 0.5);
}
/*
 * Video Player Positioning
 */
function toggleVideoSize() {
    $(".vid").toggleClass('vid-big');
    if ($(".vid").hasClass('vid-big')) {
        $("#vid-size-btn").html('<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="compress-icon" d="M32 34.7v19c0 0.7-0.3 1.4-0.8 1.9 -0.5 0.5-1.2 0.8-1.9 0.8 -0.7 0-1.4-0.3-1.9-0.8l-6.1-6.1L7.2 63.6c-0.3 0.3-0.6 0.4-1 0.4s-0.7-0.1-1-0.4l-4.8-4.8c-0.3-0.3-0.4-0.6-0.4-1 0-0.4 0.1-0.7 0.4-1l14.1-14.1 -6.1-6.1c-0.5-0.5-0.8-1.2-0.8-1.9s0.3-1.4 0.8-1.9S9.6 32 10.3 32h19c0.7 0 1.4 0.3 1.9 0.8C31.7 33.3 32 34 32 34.7zM64 6.2c0 0.4-0.1 0.7-0.4 1L49.5 21.3l6.1 6.1c0.5 0.5 0.8 1.2 0.8 1.9 0 0.7-0.3 1.4-0.8 1.9 -0.5 0.5-1.2 0.8-1.9 0.8h-19c-0.7 0-1.4-0.3-1.9-0.8C32.3 30.7 32 30 32 29.3v-19c0-0.7 0.3-1.4 0.8-1.9s1.2-0.8 1.9-0.8 1.4 0.3 1.9 0.8l6.1 6.1L56.8 0.4c0.3-0.3 0.6-0.4 1-0.4 0.4 0 0.7 0.1 1 0.4l4.8 4.8C63.9 5.5 64 5.9 64 6.2z"/></svg>');
    }
    else {
        $("#vid-size-btn").html('<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="expand-icon" d="M31.5 38.7c0 0.4-0.1 0.7-0.4 1L17.2 53.5l6 6c0.5 0.5 0.8 1.2 0.8 1.9 0 0.7-0.3 1.3-0.8 1.9 -0.5 0.5-1.2 0.8-1.9 0.8H2.7c-0.7 0-1.3-0.3-1.9-0.8C0.3 62.7 0 62.1 0 61.3V42.7c0-0.7 0.3-1.3 0.8-1.9C1.3 40.3 1.9 40 2.7 40s1.3 0.3 1.9 0.8l6 6L24.4 33c0.3-0.3 0.6-0.4 1-0.4 0.4 0 0.7 0.1 1 0.4l4.8 4.8C31.3 38 31.5 38.3 31.5 38.7zM64 2.7v18.7c0 0.7-0.3 1.3-0.8 1.9 -0.5 0.5-1.2 0.8-1.9 0.8 -0.7 0-1.3-0.3-1.9-0.8l-6-6L39.6 31c-0.3 0.3-0.6 0.4-1 0.4 -0.4 0-0.7-0.1-1-0.4L33 26.3c-0.3-0.3-0.4-0.6-0.4-1 0-0.4 0.1-0.7 0.4-1l13.8-13.8 -6-6C40.3 4 40 3.4 40 2.7s0.3-1.3 0.8-1.9C41.3 0.3 41.9 0 42.7 0h18.7c0.7 0 1.3 0.3 1.9 0.8C63.7 1.3 64 1.9 64 2.7z"/></svg>');
    }
}

function minimizeVideo() {
    $(".vid").toggleClass('vid-mini');
    if ($(".vid").hasClass('vid-mini')) {
        $("#vid-minimize-btn").html('<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="play-icon" d="M60 33.3L5.3 63.7c-0.6 0.4-1.2 0.4-1.6 0.1C3.2 63.5 3 63.1 3 62.3V1.7c0-0.7 0.2-1.2 0.7-1.5 0.5-0.3 1-0.2 1.6 0.1L60 30.7c0.6 0.4 0.9 0.8 0.9 1.3S60.7 32.9 60 33.3z"/></svg>');
    }
    else {
        $("#vid-minimize-btn").html('<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
    }
    if (!$("#activityVideo").prop("paused")) {
        $("#activityVideo")[0].pause();
    }
}

function videoEnd(e) {
    if (!mediaSwapping) { // ecj media swapping
        $(".vid").removeClass('vid-big');
        $("#vid-size-btn").html('<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="expand-icon" d="M31.5 38.7c0 0.4-0.1 0.7-0.4 1L17.2 53.5l6 6c0.5 0.5 0.8 1.2 0.8 1.9 0 0.7-0.3 1.3-0.8 1.9 -0.5 0.5-1.2 0.8-1.9 0.8H2.7c-0.7 0-1.3-0.3-1.9-0.8C0.3 62.7 0 62.1 0 61.3V42.7c0-0.7 0.3-1.3 0.8-1.9C1.3 40.3 1.9 40 2.7 40s1.3 0.3 1.9 0.8l6 6L24.4 33c0.3-0.3 0.6-0.4 1-0.4 0.4 0 0.7 0.1 1 0.4l4.8 4.8C31.3 38 31.5 38.3 31.5 38.7zM64 2.7v18.7c0 0.7-0.3 1.3-0.8 1.9 -0.5 0.5-1.2 0.8-1.9 0.8 -0.7 0-1.3-0.3-1.9-0.8l-6-6L39.6 31c-0.3 0.3-0.6 0.4-1 0.4 -0.4 0-0.7-0.1-1-0.4L33 26.3c-0.3-0.3-0.4-0.6-0.4-1 0-0.4 0.1-0.7 0.4-1l13.8-13.8 -6-6C40.3 4 40 3.4 40 2.7s0.3-1.3 0.8-1.9C41.3 0.3 41.9 0 42.7 0h18.7c0.7 0 1.3 0.3 1.9 0.8C63.7 1.3 64 1.9 64 2.7z"/></svg>');
    }
}

function videoHeight() {
    adjustVideoHeight();
    $(window).resize(adjustVideoHeight);
}
/*
 * Adjust the height to center content
 */
function adjustVideoHeight() {
    var vpWidth = $(window).width();
    var vpHeight = $(window).height();
    if (vpWidth > 768 && vpHeight < 667) {
        $('.vid-big').addClass('biggie-smalls');
        $('.listeningVideo').addClass('biggie-smalls');
    }
    else {
        $('.vid-big').removeClass('biggie-smalls');
        $('.listeningVideo').removeClass('biggie-smalls');
    }
}

function buildMediaErrorModal() {
    $('#page_frame').append('<div id="errorMessageModal" class="modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Error</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p id="errorMessageText">&nbsp;</p></div></div></div></div>')
}
/*
 * ------------------------------------------------------------------------
 * PE launch Screen 
 * ------------------------------------------------------------------------
 */
function buildPE(data) {
    console.log(data);
    if (data.date.length > 0) {
        $('#page_frame').addClass('soon-pe');
        html = '';
        // coming soon message
        html += '<section id="soon-wrap" class="d-flex justify-content-center align-items-center"><div id="soon-message" ><img src="assets/media/framework/dliLogo@2x.png" ><br /><br /><h1 class="display-4">Coming Soon</h1><br /><p class="lead mb-0">Practical Exercise ' + data.elo + ' will be ready for review on the following date:</p><br /><h4 class="mb-0">' + data.date + '</h2></div></section>';
        // load html wrappers
        $('#page_frame').html(html);
        // add bg
        LoadActivityBackgroundImage(0);
    }
    else {
        dataPE = data;
        html = '';
        // MM wrapper
        html += '<div class="container-fluid intro" id="finalPE"><div class="row">';
        // Left Nav wrapper
        html += '<section class="col-12 col-lg-4 col-xl-3" id="pageInfo">';
        // instructions
        if (sessionStorage) {
            var iPE = JSON.parse(sessionStorage.getItem(imiName));
        }
        else {
            var iPE = modJSON;
        }
        iPE = iPE.content.instructions["ins" + data.temp];
        html += '<div id="pageInfo-title">Practical Exercise ' + dataPE.elo + '</div>';
        html += '<div id="pageInfo-content"><div id="mindmap-aside--instructions"><div style="width: 45px"><div id="instructionIcon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="info-icon" d="M26.2 14.5h11.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2V2.9c0-0.8-0.3-1.5-0.9-2C39.3 0.3 38.6 0 37.8 0H26.2c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v8.7c0 0.8 0.3 1.5 0.9 2C24.7 14.3 25.4 14.5 26.2 14.5z"/><path class="info-icon" d="M45.7 53.2c-0.6-0.6-1.3-0.9-2-0.9h-2.9V26.2c0-0.8-0.3-1.5-0.9-2 -0.6-0.6-1.3-0.9-2-0.9H20.4c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2 0.6 0.6 1.3 0.9 2 0.9h2.9v17.5h-2.9c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2C18.9 63.7 19.6 64 20.4 64H43.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2v-5.8C46.5 54.5 46.3 53.8 45.7 53.2z"/></svg></div></div><div><div id="instructionText"><div class="EN">' + iPE.en + '</div></div></div><div>';
        html += '</section>'
            // MM wrap
        html += '<section class="col-12 col-lg-8 col-xl-9 pageContent" id="backgroundImage">';
        if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./)) {
            var href = window.location.href;
            var dir = href.substring(0, href.lastIndexOf('/')) + "/";
            html += '<div class="pageContent-wrapper d-flex justify-content-center align-items-center"><div class="card dli-card"><div class="card-header d-flex justify-content-start"> <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="warning-icon" d="M63.4 54.9L36 4.7C35.6 4 35 3.4 34.3 3c-0.7-0.4-1.5-0.6-2.3-0.6 -0.8 0-1.6 0.2-2.3 0.6C29 3.4 28.4 4 28 4.7L0.6 54.9c-0.8 1.5-0.8 3 0.1 4.5 0.4 0.7 1 1.2 1.7 1.6 0.7 0.4 1.5 0.6 2.3 0.6h54.8c0.8 0 1.6-0.2 2.3-0.6 0.7-0.4 1.3-1 1.7-1.6C64.2 57.9 64.2 56.4 63.4 54.9zM36.6 51.4c0 0.3-0.1 0.6-0.3 0.8 -0.2 0.2-0.5 0.3-0.8 0.3h-6.8c-0.3 0-0.6-0.1-0.8-0.3 -0.2-0.2-0.3-0.5-0.3-0.8v-6.8c0-0.3 0.1-0.6 0.3-0.8 0.2-0.2 0.5-0.3 0.8-0.3h6.8c0.3 0 0.6 0.1 0.8 0.3 0.2 0.2 0.3 0.5 0.3 0.8L36.6 51.4 36.6 51.4 36.6 51.4zM36.5 38c0 0.2-0.1 0.4-0.4 0.6 -0.2 0.2-0.5 0.2-0.8 0.2h-6.6c-0.3 0-0.6-0.1-0.9-0.2 -0.2-0.2-0.4-0.4-0.4-0.6l-0.6-16.3c0-0.3 0.1-0.6 0.4-0.7 0.3-0.3 0.6-0.4 0.9-0.4h7.8c0.3 0 0.5 0.1 0.9 0.4 0.2 0.2 0.4 0.4 0.4 0.7L36.5 38z"></path></svg> Internet Explorer </div><div class="card-body"><p class="card-text">Your browser currently does not support this practical exercise. You can close your browser now and open the course in a supported browser (e.g., Chrome, Safari , Firefox, or Edge). </p></div></div></div>';
        }
        else {
            html += '<div class="pageContent-wrapper"><button class="btn btn-primary btn-lg" id="introPEbtn" onclick="launchPE(true, ' + dataPE.elo + ')">Launch PE</button></div>';
        }
        // close wrapper
        html += '</section></div></div>';
        // load html wrappers
        $('#page_frame').html(html);
        // add bg
        LoadActivityBackgroundImage(0, "finalPe");
    }
}

function getPageID() {
    return currentPageId;
}

function storePE() {
    console.log(peStorage);
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
        modStatus.peStorage = peStorage;
        doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
    }
    else {
        modStatus = JSON.parse(localStorage.getItem(imiName + '-session'));
        modStatus.peStorage = peStorage;
        localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
    }
}

function retrievePE() {
    //if lms available but nothing stored yet for pe then make = [""] otherwise will try to use local storage
    //if no lms leave length 0
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
        peStorage = modStatus.peStorage;
    }
    else {
        modStatus = JSON.parse(localStorage.getItem(imiName + '-session'));
        peStorage = modStatus.peStorage;
    }
}

function launchPE(focus, elo) {
    //loads before framework.js so needs to check for itself
    var isMobile = false;
    var isIOS = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    if (/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        isIOS = true;
    }
    if (isIOS && !isMobile) {
        //window.alert("You're on and iPhone/iPad/iPod but not mobile, please disable desktop mode and refresh the page. If you've already changed the setting and are receiving this message then please refresh the page.");
        $('.pageContent').html('<div class="pageContent-wrapper d-flex justify-content-center align-items-center"><div class="card dli-card"><div class="card-header d-flex justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="warning-icon" d="M63.4 54.9L36 4.7C35.6 4 35 3.4 34.3 3c-0.7-0.4-1.5-0.6-2.3-0.6 -0.8 0-1.6 0.2-2.3 0.6C29 3.4 28.4 4 28 4.7L0.6 54.9c-0.8 1.5-0.8 3 0.1 4.5 0.4 0.7 1 1.2 1.7 1.6 0.7 0.4 1.5 0.6 2.3 0.6h54.8c0.8 0 1.6-0.2 2.3-0.6 0.7-0.4 1.3-1 1.7-1.6C64.2 57.9 64.2 56.4 63.4 54.9zM36.6 51.4c0 0.3-0.1 0.6-0.3 0.8 -0.2 0.2-0.5 0.3-0.8 0.3h-6.8c-0.3 0-0.6-0.1-0.8-0.3 -0.2-0.2-0.3-0.5-0.3-0.8v-6.8c0-0.3 0.1-0.6 0.3-0.8 0.2-0.2 0.5-0.3 0.8-0.3h6.8c0.3 0 0.6 0.1 0.8 0.3 0.2 0.2 0.3 0.5 0.3 0.8L36.6 51.4 36.6 51.4 36.6 51.4zM36.5 38c0 0.2-0.1 0.4-0.4 0.6 -0.2 0.2-0.5 0.2-0.8 0.2h-6.6c-0.3 0-0.6-0.1-0.9-0.2 -0.2-0.2-0.4-0.4-0.4-0.6l-0.6-16.3c0-0.3 0.1-0.6 0.4-0.7 0.3-0.3 0.6-0.4 0.9-0.4h7.8c0.3 0 0.5 0.1 0.9 0.4 0.2 0.2 0.4 0.4 0.4 0.7L36.5 38z"></path></svg> Request Desktop Website </div><div class="card-body"><p class="card-text">In order to view the practical exercise on this mobile device, "Request Desktop Website" needs to be disabled. The toggle switch to disable this option can be found in the Settings app, under Safari -> Request Desktop Website. Once this setting is disabled, you will need to refresh this page.<br><br>The button below will take you to the Settings app.</p><a class="btn btn-primary" role="button" href="App-prefs://prefs:root=Settings">View Settings.</button></div></div></div>');
        return;
    }
    //get fill peStorage from the lms before opening tab if it already has information.
    retrievePE();
    objPEWindow = window.open("./pe/elo" + elo + "/index.html", "peWindow");
    objPEWindow.pageID = elo;
    // Set the browser window.
    //window.myWin.resizeTo(width, height);
    //window.myWin.moveTo(0, 0);
    if (focus) {
        window.objPEWindow.focus();
    }
    /*
    window.objPEWindow.onbeforeunload = function(){
        nextPage(currentPageId);
    };
    */
}

function copyPELink() {
    var copyText = document.getElementById("copyPELink");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    if ($('#link-copied').length <= 0) {
        $('.pageContent-wrapper .dli-card .card-text').after('<div id="link-copied"><div class="copied-icon bg-success d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"></path></svg></div><div class="copied-text">Link Copied</div></div>');
        setTimeout(function () {
            $('#link-copied').fadeOut("fast", function () {
                $('#link-copied').remove();
            });
        }, 2000);
    }
}
/*
 * ------------------------------------------------------------------------
 * Summary 
 * ------------------------------------------------------------------------
 */
function buildSum(data) {
    var html = "";
    // Wrapper
    html += '<div class="container-fluid readingActivity"><div class="row">';
    // 1/3 bg image
    html += '<section class="col-12 col-lg-4 img-third--pic" style="background-image: url(' + data.image.url + ');" role="img" aria-label="' + data.image.desc + '" title="' + data.image.title + '"></section>';
    // content
    html += '<section class="col-12 col-lg-8 img-third--content"><section id="activityInstructions" class="row"><div id="instructionI" style="width: 45px"><div id="instructionIcon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="info-icon" d="M26.2 14.5h11.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2V2.9c0-0.8-0.3-1.5-0.9-2C39.3 0.3 38.6 0 37.8 0H26.2c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v8.7c0 0.8 0.3 1.5 0.9 2C24.7 14.3 25.4 14.5 26.2 14.5z"/><path class="info-icon" d="M45.7 53.2c-0.6-0.6-1.3-0.9-2-0.9h-2.9V26.2c0-0.8-0.3-1.5-0.9-2 -0.6-0.6-1.3-0.9-2-0.9H20.4c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2 0.6 0.6 1.3 0.9 2 0.9h2.9v17.5h-2.9c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2C18.9 63.7 19.6 64 20.4 64H43.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2v-5.8C46.5 54.5 46.3 53.8 45.7 53.2z"/></svg></div></div><div id="instructionContent" style="padding-right: 15px"><div id="instructionText"><div>' + data.content.directionsEN + '</div></div></div></section><section id="readingContent">';
    // <div class="TL"><div class="targetLang">' + data.content.directionsTL + '</div></div>
    //add instructional text
    if (sessionStorage) {
        var insSum = JSON.parse(sessionStorage.getItem(imiName));
    }
    else {
        var insSum = modJSON;
    }
    insSum = insSum.content.instructions["ins" + data.temp];
    html += '<div class="TL"><p>' + insSum.tl + '</p><br /><ul>'
    for (o = 1; o < data.content.objectives.length; o++) {
        html += '<li>' + data.content.objectives[o].desc_tl + '</li><br />';
    }
    html += '</ul></div>';
    html += '<div class="EN" style="display: none;"><p>' + insSum.en + '</p><br /><ul>'
    for (o = 1; o < data.content.objectives.length; o++) {
        html += '<li>' + data.content.objectives[o].desc_en + '</li><br />';
    }
    html += '</ul></div>';
    // // source information
    // html += '<p><strong>Title: </strong>' + data.content.title_en + '<br><strong>Source: </strong>' + data.content.src + '<br><strong>Date: </strong>' + data.content.date + '</p>'
    html += '</section></section></div></div>';
    $('#page_frame').html(html);
    OnLanguageToggle("TL", "EN");
    // buildReadingActivity(data.elo);
    imageHeight();
}
/*
 * ------------------------------------------------------------------------
 * Enrichment 
 * ------------------------------------------------------------------------
 */
function buildEnrichment(data) {
    var html = "";
    // Wrapper
    html += '<div class="container-fluid readingActivity"><div class="row">';
    // 1/3 bg image
    html += '<section class="col-12 col-lg-4 img-third--pic" style="background-image: url(' + data.content.url + ');" role="img" aria-label="' + data.content.desc + '" title="' + data.content.title + '"></section>';
    // content
    html += '<section class="col-12 col-lg-8 img-third--content"><section id="activityInstructions" class="row"><div id="instructionI" style="width: 45px"><div id="instructionIcon"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="info-icon" d="M26.2 14.5h11.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2V2.9c0-0.8-0.3-1.5-0.9-2C39.3 0.3 38.6 0 37.8 0H26.2c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v8.7c0 0.8 0.3 1.5 0.9 2C24.7 14.3 25.4 14.5 26.2 14.5z"/><path class="info-icon" d="M45.7 53.2c-0.6-0.6-1.3-0.9-2-0.9h-2.9V26.2c0-0.8-0.3-1.5-0.9-2 -0.6-0.6-1.3-0.9-2-0.9H20.4c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2 0.6 0.6 1.3 0.9 2 0.9h2.9v17.5h-2.9c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2C18.9 63.7 19.6 64 20.4 64H43.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2v-5.8C46.5 54.5 46.3 53.8 45.7 53.2z"/></svg></div></div><div id="instructionContent" style="padding-right: 15px"><div id="instructionText"><div class="EN">To access the enrichment materials, select "View Materials" below. You will be redirected to the listings.</div></div></div></section><section id="readingContent"><div><p>Enrichment materials are intended to promote skill development and further understanding on an individual basis, and are provided as a supplement to the courseware.They encompass a variety of sources that relate to the courseware topics and language acquisition.<p><br><br><a class="btn btn-primary" href="#" target="_blank" role="button" id="enrichmentBTN" data-toggle="modal" data-target="#enrichmentModal">View Materials</a></p><br><p>This concludes this lesson. You may now close this window and select the Next Lesson tab at the top of the page to continue.</p></div></div>';
    // // source information
    // html += '<p><strong>Title: </strong>' + data.content.title_en + '<br><strong>Source: </strong>' + data.content.src + '<br><strong>Date: </strong>' + data.content.date + '</p>'
    html += '</section></section></div></div>';
    html += '<div class="modal dli-modal fade" id="enrichmentModal" tabindex="-1" role="dialog"> <div class="modal-dialog modal-dialog-centered"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title">Notice</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div><div class="modal-body"> <p>Enrichment content will be available at a later date.</p></div></div></div></div>';
    $('#page_frame').html(html);
    // OnLanguageToggle("TL", "EN");
    // buildReadingActivity(data.elo);
    imageHeight();
}
/*
 * ------------------------------------------------------------------------
 * Module Feedback 
 * ------------------------------------------------------------------------
 */
function buildModuleFeedback(data) {
    console.log(data);
    $('#page_frame').html('<section id="activityInstructions"> <div style="width: 45px"> <div id="instructionIcon"> <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="info-icon" d="M26.2 14.5h11.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2V2.9c0-0.8-0.3-1.5-0.9-2C39.3 0.3 38.6 0 37.8 0H26.2c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v8.7c0 0.8 0.3 1.5 0.9 2C24.7 14.3 25.4 14.5 26.2 14.5z"></path><path class="info-icon" d="M45.7 53.2c-0.6-0.6-1.3-0.9-2-0.9h-2.9V26.2c0-0.8-0.3-1.5-0.9-2 -0.6-0.6-1.3-0.9-2-0.9H20.4c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2 0.6 0.6 1.3 0.9 2 0.9h2.9v17.5h-2.9c-0.8 0-1.5 0.3-2 0.9 -0.6 0.6-0.9 1.3-0.9 2v5.8c0 0.8 0.3 1.5 0.9 2C18.9 63.7 19.6 64 20.4 64H43.6c0.8 0 1.5-0.3 2-0.9 0.6-0.6 0.9-1.3 0.9-2v-5.8C46.5 54.5 46.3 53.8 45.7 53.2z"></path></svg> </div></div><div> <div id="instructionText">Your input is important and will help improve this instruction. Please answer the questions, then continue to enter your comments about this module.</div></div></section><div class="container"> <br><form> <h3>Demographics</h3> <p>1. Rank/Grade:</p><div class="form-group"> <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqA1" value="O-4"> O-4 </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqA1" value="O-5"> O-5 </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqA1" value="O-6"> O-6 </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqA1" value="Other"> Other </label> </div></div><hr> <fieldset class="form-group"> <label for="presentJobTitle">2. Present Job Title:</label> <input type="text" class="form-control col-md-3" name="presentJobTitle" id="presentJobTitle"> </fieldset> <hr> <fieldset class="form-group"> <label for="langCertLevel">3. Language certification and level (DLPT/ILR /OPI/other):</label> <input type="text" class="form-control col-md-3" name="langCertLevel" id="langCertLevel"> </fieldset> <hr> 4. The courseware was accessed using the following platforms (check all that apply):<br><br><div class="form-row"> <div class="form-group col-md-3"> PC: <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="pcie" value="pcie"> Internet Explorer </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="pcedge" value="pcedge"> Microsoft Edge </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="pcchrome" value="pcchrome"> Google Chrome </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="pcfox" value="pcfox"> Mozilla Firefox </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="pcopera" value="pcopera"> Opera Browser </label> </div></div><div class="form-group col-md-3"> Mac: <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="macsafari" value="macsafari"> Safari </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="macchrome" value="macchrome"> Google Chrome </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="macfox" value="macfox"> Mozilla Firefox </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="macopera" value="macopera"> Opera Browser </label> </div></div><div class="form-group col-md-3"> iOS Moblie Devices: <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="iostablet" value="iostablet"> Tablet </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="iossafari" value="iossafari"> Safari </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="iosedge" value="iosedge"> Microsoft Edge </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="ioschrome" value="ioschrome"> Google Chrome </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="iosfox" value="iosfox"> Mozilla Firefox </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="iosopera" value="iosopera"> Opera Browser </label> </div></div><div class="form-group col-md-3"> Android Moblie Devices: <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="androidtablet" value="androidtablet"> Tablet </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="androidedge" value="androidedge"> Microsoft Edge </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="androidchrome" value="androidchrome"> Google Chrome </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="androidfox" value="androidfox"> Mozilla Firefox </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="accessCourse" id="androidopera" value="androidopera"> Opera Browser </label> </div></div></div><fieldset class="form-group"> <label for="accessCourseOther">Other:</label> <input type="text" class="form-control col-md-3" name="accessCourseOther" id="accessCourseOther"> </fieldset> <br><h3>About This Module</h3> <p id="question1">1. The reading/listening exercises were relevant to my duties.</p><div class="form-group"> <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB1" value="Strongly Agree"> Strongly Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB1" value="Agree"> Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB1" value="Neither Agree or Disagree"> Neither Agree or Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB1" value="Disagree"> Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB1" value="Strongly Disagree"> Strongly Disagree </label> </div></div><hr> <p id="question2">2. Terms and concepts were explained effectively.</p><div class="form-group"> <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB2" value="Strongly Agree"> Strongly Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB2" value="Agree"> Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB2" value="Neither Agree or Disagree"> Neither Agree or Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB2" value="Disagree"> Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB2" value="Strongly Disagree"> Strongly Disagree </label> </div></div><hr> <p id="question3">3. The practical exercise scenarios were realistic.</p><div class="form-group"> <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB3" value="Strongly Agree"> Strongly Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB3" value="Agree"> Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB3" value="Neither Agree or Disagree"> Neither Agree or Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB3" value="Disagree"> Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB3" value="Strongly Disagree"> Strongly Disagree </label> </div></div><hr> <p id="question4">4. The exercises were interactive enough to hold my interest. </p><div class="form-group"> <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB4" value="Strongly Agree"> Strongly Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB4" value="Agree"> Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB4" value="Neither Agree or Disagree"> Neither Agree or Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB4" value="Disagree"> Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB4" value="Strongly Disagree"> Strongly Disagree </label> </div></div><hr> <p id="question5">5. The ILR level of the exercises was appropriate for me.</p><div class="form-group"> <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB5" value="Strongly Agree"> Strongly Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB5" value="Agree"> Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB5" value="Neither Agree or Disagree"> Neither Agree or Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB5" value="Disagree"> Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB5" value="Strongly Disagree"> Strongly Disagree </label> </div></div><hr> <p id="question6">6. What I learned will be useful to me on the job.</p><div class="form-group"> <div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB6" value="Strongly Agree"> Strongly Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB6" value="Agree"> Agree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB6" value="Neither Agree or Disagree"> Neither Agree or Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB6" value="Disagree"> Disagree </label> </div><div class="form-check"> <label class="form-check-label"> <input class="form-check-input" type="radio" name="moduleFeedbackqB6" value="Strongly Disagree"> Strongly Disagree </label> </div></div><hr> <p id="question7">What specific recommendations do you have for improving this module?</p><div class="form-group"> <textarea class="form-control" name="moduleFeedbackTextArea" id="moduleFeedbackTextArea" rows="3"></textarea> </div></form> <button type="button" class="btn btn-primary" id="btnChangeLanguage1" onclick="sendModuleFeedback();">Submit Feedback</button> <br><br></div>');
}

function sendModuleFeedback() {
    if ($('input:radio[name=moduleFeedbackqA1]:checked').val() == undefined || $('input:radio[name=moduleFeedbackqB1]:checked').val() == undefined || $('input:radio[name=moduleFeedbackqB2]:checked').val() == undefined || $('input:radio[name=moduleFeedbackqB3]:checked').val() == undefined || $('input:radio[name=moduleFeedbackqB4]:checked').val() == undefined || $('input:radio[name=moduleFeedbackqB5]:checked').val() == undefined || $('input:radio[name=moduleFeedbackqB6]:checked').val() == undefined) {
        alert("Please make a selection for each statement.");
        return false;
    }
    moduleFeedbackText1 = $("#presentJobTitle").val();
    moduleFeedbackText2 = $("#langCertLevel").val();
    moduleFeedbackText3 = $("#accessCourseOther").val();
    moduleFeedbackText4 = $("#moduleFeedbackTextArea").val();
    if (moduleFeedbackText1 == "") {
        moduleFeedbackText1 = "No additional feedback."
    }
    if (moduleFeedbackText2 == "") {
        moduleFeedbackText2 = "No additional feedback."
    }
    if (moduleFeedbackText3 == "") {
        moduleFeedbackText3 = "No additional feedback."
    }
    if (moduleFeedbackText4 == "") {
        moduleFeedbackText4 = "No additional feedback."
    }
    accessedWith = $('input:checkbox:checked').map(function () {
        return this.value;
    }).get();
    moduleFeedbackSubject = modTitle + " Module Feedback";
    moduleFeedbackBody = "A1. Rank/Grade: " + $('input:radio[name=moduleFeedbackqA1]:checked').val() + "\n\n" + "A2. Present Job Title: " + moduleFeedbackText1 + "\n\n" + "A3. Language Cert and Level: " + moduleFeedbackText2 + "\n\n" + "A4. Course Accessed With: " + accessedWith + "\n\n" +
        /*
        "A4. Course Accessed With: " + $('input:checkbox[name=accessCourse]:checked').val() + "\n\n" +
        */
        "A5. Accessed with other: " + moduleFeedbackText3 + "\n\n" + "B1. The reading/listening exercises were relevant to my duties: " + $('input:radio[name=moduleFeedbackqB1]:checked').val() + "\n\n" + "B2. Terms and concepts were explained effectively: " + $('input:radio[name=moduleFeedbackqB2]:checked').val() + "\n\n" + "B3. The practical exercise scenarios were realistic: " + $('input:radio[name=moduleFeedbackqB3]:checked').val() + "\n\n" + "B4. The exercises were interactive enough to hold my interest: " + $('input:radio[name=moduleFeedbackqB4]:checked').val() + "\n\n" + "B5. The ILR level of the exercises was appropriate for me: " + $('input:radio[name=moduleFeedbackqB5]:checked').val() + "\n\n" + "B6. What I learned will be useful to me on the job: " + $('input:radio[name=moduleFeedbackqB6]:checked').val() + "\n\n" + "B7. Recommendation for improving site: " + moduleFeedbackText4;
    var link = "mailto:FAO.language.courses@dliflc.edu" + "?subject=" + encodeURIComponent(moduleFeedbackSubject) + "&body=" + encodeURIComponent(moduleFeedbackBody);
    window.location.href = link;
}