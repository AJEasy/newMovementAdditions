/*
* --------------------------------------------------------------------------
*   framework.js - v3.0 92F10
*   author: Potawatomi Training
*   created: 3/12/2018
*   last edited: 3/23/2021
*   Copyright 2021, Potawatomi Training, All rights reserved.
* --------------------------------------------------------------------------
*/
/*
* ------------------------------------------------------------------------
* Framework Variables 
* ------------------------------------------------------------------------
*/
//========== Module ==========//
var modLang = "";
var modNum = "";
var modTitle = "";
var modStatus = "";
var html5StoragebookTitle = "";
//========== Sections ==========//
var sectionTitles = [];
var currentSectionTitle = "";
var currentSectionId = "";
//========== Pages ==========//
var currentPageId = "";
var currentPageTitle = "";
var currentPageNum = 0;
var firstPageId = "";
var prevPageId = "";
var nextPageId = "";
var lastPageId = "";
//========== Progress Bar ==========//
var locStgProgBar;
var imiName;
var pageArray = null;
var progBarSuspendData;
//========== GUI Variables ==========//
// Glossary
var isGlossaryLoaded = false;
// Comment tool
var isCommentLink = false;
var objCommentWindow = new Object();
// Scroll plugin
var myScroll;
// Mobile check
var isMobile = false;
/*
* ------------------------------------------------------------------------
* Mobile Detection 
* ------------------------------------------------------------------------
*/
/*
* Device detection
*/
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    // set mobile to true
    isMobile = true;
}
// Evaluate if user is on mobile device
if (isMobile == true){
    // Add class to body to adjust layouts for mobile
    setTimeout(function() { $('body').addClass('mobile-detected') }, 100);
}
/*
* ------------------------------------------------------------------------
* Populate Framework 
* ------------------------------------------------------------------------
*/
function populateGUI() {
    // get content data from either browser or content.js for stand alone
    if(sessionStorage){
      populateTOC(JSON.parse(sessionStorage.getItem(imiName)));
    } else {
      populateTOC(modJSON);
    }
    // check window size to enable/disable swiping gestures
    initSwiping();
    $(window).resize(initSwiping);
    //IE Check
    if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge/)) {  
        // Add class to body to adjust layouts for IE   
        $('body').addClass('IE-present');
        // Update JS for IE
        ieFramework();
        $(window).resize(ieFramework);
    }
}
/*
* ------------------------------------------------------------------------
* Build out Navigation
* ------------------------------------------------------------------------
*/
function populateTOC(json){
    //==================== Basic Setup ====================//
    // variables for the courseware
    modLang = json.language;
    modNum = json.module;
    modTitle = json.content.mod;
    // Set first/last data for sections and pages
    firstSectionId = json.content.sections[0].id;
    firstPageId = json.content.sections[0].pages[0].id;
    lastSectionNum = json.content.sections.length-1;
    lastPageId = json.content.sections[lastSectionNum].pages[json.content.sections[lastSectionNum].pages.length-1].id;
    // Storage variables for jStorage wrapper 
    storageTitle = modTitle;
    storageTitle = storageTitle.replace(/ /g, "");
    html5StoragebookTitle = modTitle.replace(/ /g, "") + storageTitle;
    // populate the html title attribute
    $("head title").html(modTitle);
    $(".bookTitle").append(modTitle + " <span id='title-divider'>|</span> <span id='class-mark'>UNCLASSIFIED</span>");
    // Build out Table of Contents
    $("#toc-content").append('<nav class="accordion" id="toc-content-list"></nav>');
    $.each(json.content.sections, function(s, sec) {
        // add section title to array
        sectionTitles.push(sec.title);
        // add section to navigation
        $("#toc-content-list").append('<div class="card" id="section-' + sec.id + '"><div class="card-header" id="section-' + sec.id + '-title"><button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#section-' + sec.id + '-content" aria-expanded="false" aria-controls="section-' + sec.id + '-content">' + sec.title + '</button></div><div id="section-' + sec.id + '-content" class="collapse" aria-labelledby="section-' + sec.id + '-title" data-parent="#toc-content-list"><div class="card-body list-group-flush"></div></div></div>');
        // loop through section pages
        $.each(sec.pages, function(num, page){
            $("#section-" + sec.id + "-content .card-body").append('<button type="button" class="navPage list-group-item list-group-item-action" id="page-' + page.id + '" onclick="DisableLanguageToggle(); getPageData(\'' + page.id + '\');" aria-selected="false">' + page.title + '</button>');
        });
    });
    //==================== API Check ====================//
    // Init API
    if (apiIsInitialized) {
        // check whether the learner has previously accessed the SCO
        var entry = doGetValue("cmi.entry");
        // they have accessed the SCO
        if (entry != "ab-initio") {
            // check for location data
            if (doGetValue('cmi.location') != "") {
                locationData = doGetValue('cmi.location');
                if (locationData != "") {
                    // set page and section variables
                    currentTOC = locationData.split("|");
                    currentPageId = currentTOC[0];
                    currentSectionId = currentTOC[1];
                }
            }
            // pull existing exam data
            storedData = JSON.parse(doGetValue("cmi.suspend_data"));
        } 
        // New instance of the SCO
        else {
            // terminate to change the entry status and then reinit due to Chrome depracating on unload events. This handles the issue at a SCO level, but the LMS provider should account for this new behavior.
            if (!!window.chrome){
                doTerminate();
                doInitialize();
            }
            // set initial values for the lesson
            doSetValue("cmi.location", "");
            doSetValue("cmi.suspend_data", "");
            modStatus = {
                "location": {
                    "section": firstSectionId,
                    "page": firstPageId
                },
                "progBarArray": "",
                "timestamps": "",
                "peStorage": [""]
            };
            // update lesson data in LMS
            doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
        }
    } 
    // No API, run local setup
    else {
        // check to see if localStorage works
        if (localStorage) {
            // reset current page id
            currentPageId = "";
            // check if lesson data does not exist
            if (localStorage.getItem(imiName + "-session") != null) {
                // define current section and page
                modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
                currentSectionId = modStatus.location.section;
                currentPageId = modStatus.location.page;
            } 
            // no session data, create location instance using first section/page id
            else {
                modStatus = {
                    "location": {
                        "section": firstSectionId,
                        "page": firstPageId
                    },
                    "progBarArray": "",
                    "timestamps": "",
                    "peStorage": []
                };
                // store updated session data in browser
                localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
            }
        }
        // Local storage may not account for browsers like IE
        else {
            // alert the learner to switch to a more modern browser
            alert("Your browser is unable to store current location data, please use a newer browser.");
        }
    }
    //==================== Finish Lesson Initialization ====================//
    //========== Progress bar ==========//
    // Init Progress Bar
    InitProgArray(json.content, currentPageId);
    //========== Image Attribution ==========//
    // Setup img attribution panel
    buildImgGrid(json.content.images);
    //========== Get page data ==========//
    // Load the First or Current Page
    if (currentPageId != "") {
        getPageData(currentPageId);
    } else {
        console.log('first');
        currentPageId = firstPageId;
        currentSectionId = firstSectionId;
        getPageData(firstPageId); 
    }
    //========== scrolling ==========//
    myScroll = new iScroll("nav-panel--toc #chapterList", {bounce:false});
    $('#nav-panel--toc #chapterList').scrollTo( $("#page"+currentPageId), 200, {offset:-150}  );
    // Set up the TOC Serch (fix for IE)
    $('#searchResultsList').append('<div id="navSearchResults" class="list-group"></div>');
}
/*
* ------------------------------------------------------------------------
* Page initialization
* ------------------------------------------------------------------------
*/
function getPageData(pageId){
    //==================== Navigation updates ====================//
    // get section array number
    secNum = parseInt(pageId[0]);
    // get page array number
    pageNum = pageId[1] + pageId[2];
    pageNum = parseInt(pageNum) - 1;
    // get page data from either session data or local variable
    if(sessionStorage){
        pageData = JSON.parse(sessionStorage.getItem(imiName));
        // update pageData to reflect the page object
        pageData = pageData.content.sections[secNum].pages[pageNum];
    } else {
        // update pageData to reflect the page object
        pageData = modJSON.content.sections[secNum].pages[pageNum];
    }
    // Specific Page Adjustments for the page level navigation
    switch (pageId) {
        case firstPageId:
            $('#previous-page').prop("disabled",true);
            $('#next-page').prop("disabled",false);
            break;
        case lastPageId:
            lastPageInit();
            $('#previous-page').prop("disabled",false);
            break;
        default:
            $('#next-page').prop("disabled",false);
            $('#previous-page').prop("disabled",false);
            break;
    }
    // Close Mobile Menu if open
    if ($("#mobile-wrapper").hasClass('active')){
      setTimeout(function() { toggleMobileMenu(); }, 250);
    };

    //==================== Update Current Items ====================//
    // Update current page id for loop
    currentPageId = pageId;
    //========== update TOC ==========//    
    // Update section information and TOC items
    currentSectionId = pageData.elo + "000";
    currentSectionTitle = sectionTitles[pageData.elo];
    $("#section-" + pageData.elo + "000-content").collapse('show');
    $("#eloTitle").html(currentSectionTitle);
    // Update page information and TOC items
    currentPageTitle = pageData.title;
    currentPageNum = pageData.id;
    $(".navPage").removeClass("active");
    $("#page-"+pageId).addClass("active");

    //==================== Update Location data ====================//
    if (apiIsInitialized) {
        // send location data to lms
        doSetValue('cmi.location', pageId + "|" + currentSectionId);
    } else {
        // store location data locally
        if (localStorage) {
            // update location data
            modStatus.location.section = currentSectionId;
            modStatus.location.page = currentPageId;
            localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
            // update laocation data in jStorage wrapper
            $.jStorage.set("pageIdBookmark"+html5StoragebookTitle, pageId);
            $.jStorage.set("sectionIdBookmark"+html5StoragebookTitle, currentSectionId);
        }
    }

    //==================== Update GUI elements ====================//
    // TOC Scroll to active page
    $('#nav-panel--toc #chapterList').scrollTo( $("#page"+pageId), 200, {offset:0}  );

    // Close Language Keyboard if it is open
    if ($('#glossaryWrapper #VirtualKeyboardWrapper').length == 0){
        $('#page_frame').removeClass('vk-enabled');
        $('#VirtualKeyboardWrapper').removeClass('active carousel');
        VirtualKeyboard.close();
        $('body>td').remove();
    }

    //==================== Build Page data ====================//
    // Build out page based on page data
    if(apiIsInitialized || sessionStorage){
        buildPage(pageData);
    } else {
        buildPage(pageData);
    }
    // Update Progress Bar
    UpdateProgBar(pageId);
}
/*
* ------------------------------------------------------------------------
* Build out page instance
* ------------------------------------------------------------------------
*/
function buildPage(pageData){
    //==================== Prep page for new conent ====================//
    // remove PE class if present
    $('#page_frame').removeClass('soon-pe');
    // scroll to the top of the page
    $("html, body, #page_frame").animate({scrollTop:0});
    // Remove bg img if there is one
    if ($('#page_frame_container').hasClass('imgBG')) {
        $('#page_frame_container').removeClass('imgBG');
        $('#page_frame_container').removeAttr('style');
    }

    //==================== Use page data to build out page ====================//
    // build out template based on type
    function getTemplate(type){   
        var templates = {
            '0': function() {
                return buildIntroVid(pageData);
            },
            '1': function() {
                return buildObj(pageData);
            },
            '2': function() {
                return buildELO(pageData);
            },
            '3': function() {
                return buildReading(pageData);
            },
            '4': function() {
                return writeTemplateVocab(pageData);
            },
            '5': function() {
                return buildMC(pageData);
            },
            '6': function() {
                return buildMM(pageData);
            },
            '7': function() {
                return buildCR(pageData);
            },
            '8': function() {
                return buildVid(pageData);
            },
            '10': function() {
                return buildMWP(pageData);
            },
            '11': function() {
                return buildPE(pageData);
            },
            '12': function() {
                return buildSum(pageData);
            },
            '13': function() {
                return buildEnrichment(pageData);
            },
            '14': function() {
                return buildModuleFeedback(pageData);
            },
            '15': function() {
                return buildSimulatedVideo(pageData);
            },            
            '16': function() {
                return buildAnimate(pageData);
            }
        };
        return templates[type]();
    }
    // call for template to be added
    getTemplate(pageData.temp);

    //==================== Update GUI with page info ====================//
    // update Titles
    $('#eloTitle').text(sectionTitles[pageData.elo]);
    $("#page_frame").find("#pageTitleHeader").text(pageData.title);
    $("#sidebar").find(".pageTitle").html("<div class='scrollText'>" + pageData.title + "</div>");
    $("#page_title_bar").find(".pageTitle").html("<div id='pageTitleWrap'><div class='scrollText'>" + pageData.title + "</div></div>");
    // add in the scrolling animation for when the page title is hovered over
    checkPageTitle();
    $(window).resize(checkPageTitle);
    // Init Bookmarks(Notes) for page
    InitNotes("#page_frame");
    // Check for eMentor
    if (pageData.ementor != null){ 
        $('#page_frame_container .ementor').remove();
        eMentor(pageData.ementor);
    } else {
        $('#page_frame_container .ementor').remove();
        $('#page_frame').removeClass('eMentor');
    }
    // Move modals to the bottom of the DOM
    $('body > .modal').remove();
    $(".modal").appendTo($("body"));
    //IE adjustments
    if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge/)) {
        ieFramework();
        $(window).resize(ieFramework);
    }
}
/*
* ------------------------------------------------------------------------
* Functions for GUI Elements
* ------------------------------------------------------------------------
*/
//==================== Page title adjustments ====================//
/*
* See if the page title is too long and needs the scrolling animation
*/
function checkPageTitle() {
    if ($(window).width() > 991){
        // Desktop Page Title Scrolling
        pageTitleAnimation();
        $(window).resize(pageTitleAnimation);
    } else {
        //Mobile Page Title Scrolling
        pageTitleMobileAnimation();
        $(window).resize(pageTitleMobileAnimation);
    }
}
/*
* Desktop Page Title Scrolling
*/
function pageTitleAnimation() {
    // Page title variables
    var pageTitleWrap = $("#sidebar .pageTitle"),
    pageTitleScroll = $("#sidebar .pageTitle .scrollText"),
    scrollAmount = (pageTitleScroll.width() - pageTitleWrap.width()) + 45,
    animationDuration = (scrollAmount / 100) * 2000;
    //only fire the scrolling animation when its needed
    if ((pageTitleScroll.width() + 15) > pageTitleWrap.width() ){
        pageTitleWrap.addClass('animated');
        // We have to use Jquery to animate since our values will be dynamic, start scrolling when cursor has entered, revert to the start position when the cursor leaves.
        pageTitleScroll.mouseenter(function(){
            $(this).stop();
            $(this).animate({
                left: "-" + scrollAmount
            }, {duration: animationDuration, easing: 'linear'}, function(){
                $(this).animate({
                    left: 0
                }, {duration: animationDuration, easing: 'linear'}, function(){
                    $(this).trigger(stop);
                });
            })
        }).mouseleave(function(){
            var recoil = pageTitleScroll.css('left');
            recoil =  parseInt(recoil.substring(1, recoil.length - 2));
            recoilDuration = (recoil / 200) * 500;
            $(this).stop().animate({
                left: 0
            }, {duration: recoilDuration, easing: 'linear'});
        });
    } else {
        // remove page animation and js events
        pageTitleWrap.removeClass('animated');
        pageTitleScroll.mouseenter(function(){
            $(this).stop();
        }).mouseleave(function(){
            $(this).stop();
        });
    }
}
/*
* Mobile Page Title Scrolling
*/
function pageTitleMobileAnimation() {
    // Page title variables
    var pageTitleWrapMobile = $("#page_title_bar .pageTitle #pageTitleWrap"),
        pageTitleScrollMobile = $("#page_title_bar .pageTitle .scrollText"),
        scrollAmount = (pageTitleScrollMobile.width() - pageTitleWrapMobile.width()) + 45,
        animationDuration = (scrollAmount / 100) * 2000;
    //only fire the scrolling animation when its needed
    if ((pageTitleScrollMobile.width() + 15) > pageTitleWrapMobile.width() ){
        pageTitleWrapMobile.addClass('animated');
        // We have to use Jquery to animate since our values will be dynamic, start scrolling when cursor has entered, revert to the start position when the cursor leaves.
        pageTitleScrollMobile.mouseenter(function(){
            $(this).stop();
            $(this).animate({
                left: "-" + scrollAmount
            }, {duration: animationDuration, easing: 'linear'}, function(){
                $(this).animate({
                    left: 0
                }, {duration: animationDuration, easing: 'linear'}, function(){
                    $(this).trigger(stop);
                });
            })
        }).mouseleave(function(){
            var recoil = pageTitleScrollMobile.css('left');
            recoil =  parseInt(recoil.substring(1, recoil.length - 2));
            recoilDuration = (recoil / 200) * 500;
            $(this).stop().animate({
                left: 0
            }, {duration: recoilDuration, easing: 'linear'});
        });
    } else {
        // remove page animation and js events
        pageTitleWrapMobile.removeClass('animated');
        pageTitleScrollMobile.mouseenter(function(){
            $(this).stop();
        }).mouseleave(function(){
            $(this).stop();
        });
    }
}
//==================== Add eMentor note to page ====================//
/*
* Check for eMentor Note 
*/
function eMentor(data){
    // add ementor class to page frame
    $('#page_frame').addClass('eMentor');
    // pick which ementor to use (dark vs light background)
    if ($('#page_frame_container').hasClass('imgBG')) {
        ementorIMG = 'ementor_dark.gif';
    } else if ($('#mindmap').length){
        ementorIMG = 'ementor_dark.gif';
        $('#page_frame_container').addClass("eMentor-mindmap");
    }else {
        ementorIMG = 'ementor.gif';
    }
    // add the eMentor button
    $('#page_frame_container').append('<div class="ementor"><button type="button" aria-label="ementor" data-toggle="modal" data-target="#eMentorModal" title="eMentor Note"><img src="assets/media/framework/' + ementorIMG + '" class="img" title="eMentor Note" alt="Click to view relevant cultural/intercultural, historical, or linguistic information that provides additional context for the activity"></button></div>');
    // add eMentor modal
    $('#page_frame_container').append('<div class="modal fade dli-modal" id="eMentorModal" tabindex="-1" role="dialog" aria-labelledby="eloModalTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg" role="document"><div class="modal-content"><div class="modal-header"><h6 class="modal-title" id="eloModalTitle">eMentor</h6><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"></div></div></div></div>');
    // populate eMentor modal
    $.each(data, function(num, txt){
        $("#eMentorModal .modal-body").append(txt);
    });
}
/*
* ------------------------------------------------------------------------
* Page Navigation 
* ------------------------------------------------------------------------
*/
//==================== Standard Navigation ====================//
/*
* Next Page
*/
function nextPage(pageId) {
    // pull lesson data
    if (sessionStorage){
        navJson = JSON.parse(sessionStorage.getItem(imiName));
    } else {
        navJson = modJSON;
    }
    // loop through section data
    for(var s = 0; s < navJson.content.sections.length; s++){
        for(var p = 0; p < navJson.content.sections[s].pages.length; p++){
            if(navJson.content.sections[s].pages[p].id == pageId){
                // If next page is empty, check to see for next section
                if(navJson.content.sections[s].pages.length - 1 == p){
                    // Check if there is another section
                    if(navJson.content.sections.length - 1 == s){
                        console.log("no section found");
                    } else {
                        getPageData(navJson.content.sections[s + 1].pages[0].id);
                        $('#section' + navJson.content.sections[s].id).prev().removeClass('active');
                        $('#section' + navJson.content.sections[s + 1].id).prev().addClass('active');
                    }
                } else {
                    // get the next page listed
                    getPageData(navJson.content.sections[s].pages[p + 1].id);
                } 
            }
        }
    }
}
/*
* Previous Page
*/
function prevPage(pageId) {
    // pull lesson data
    if (sessionStorage){
        navJson = JSON.parse(sessionStorage.getItem(imiName));
    } else {
        navJson = modJSON;
    }
    // loop through section data
    for(var s = 0; s < navJson.content.sections.length; s++){
        for(var p = 0; p < navJson.content.sections[s].pages.length; p++){
            if(navJson.content.sections[s].pages[p].id == pageId){
                // If next page is empty, check to see for next section
                if(p == 0){
                    // Check if there is another section
                    if(s != 0){
                        var sectionPagesCount = navJson.content.sections[s - 1].pages.length - 1;
                        getPageData(navJson.content.sections[s - 1].pages[sectionPagesCount].id);
                        $('#section' + navJson.content.sections[s].id).prev().removeClass('active');
                        $('#section' + navJson.content.sections[s - 1].id).prev().addClass('active');
                    } else {
                        // At the beginning of mod
                    }
                } else {
                    // get the previous page listed
                    getPageData(navJson.content.sections[s].pages[p - 1].id);
                } 
            }
        }
    }
}

//==================== End of lesson calls ====================//
/*
* For the last page
*/
function lastPageInit() {
    if (apiIsInitialized) {
        doSetStatus("completed");
        doSetValue('cmi.success_status', 'passed');
        // doSetValue("adl.nav.request", "continue");
    } else {
        if (window.opener && window.opener.SetCookie != null) {
            window.opener.SetCookie('UserProgress', '2', '', '', '', '', linkID);
        }
    }
    // Disable the next button
    $('#next-page').prop("disabled",true);
}
/*
* ------------------------------------------------------------------------
* Page Progress Bar
* ------------------------------------------------------------------------
*/
/*
* Initialize
*/
function InitProgArray(navJson, currentPageIdVal){
    // set progress values
    var prgBarStgVals = "";
    var pagesComplete = 0;
    // check if learner is on an lms
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
        locStgProgBar = modStatus.progBarArray;
    } else {
        if (localStorage){
            // pull data out of stored data
            modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
            locStgProgBar = modStatus.progBarArray;
        } else {
            // if no local storage, progress will not be saved
        }
    }
    // evaluate pulled progress data if it needs to be a new instance or not
    if ((locStgProgBar == null) || (locStgProgBar.length == 0)) {
        // if nothing is pulled, create a new page array
        if (pageArray == null) {
            pageArray = new Array();
        }
        // loop through nav Json and build progress array
        for(var s = 0; s < navJson.sections.length; s++){
            for(var p = 0; p < navJson.sections[s].pages.length; p++){
                pageArray.push({ "pageId": navJson.sections[s].pages[p].id, "pageComplete": (navJson.sections[s].pages[p].id == currentPageIdVal) ? true : false });
            }
        }
        // update the progress bar storage
        UpdateProgBarStorage();
    } else {
        // if page array is missing, create one
        if (pageArray == null) {
            pageArray = new Array();
        }
        // split up progress data into array
        prgBarStgVals = locStgProgBar.split("^");
        // loop through data and evaluate if a page has been visited
        $.each(prgBarStgVals, function (index, value) {
            var currPair = prgBarStgVals[index].split("~");
            var currPageComplete = (currPair[1] == "true");
            pageArray.push({ "pageId": currPair[0], "pageComplete": currPageComplete });
            pagesComplete = (currPageComplete) ? ++pagesComplete : pagesComplete;
            // for denoting completion in TOC
            if (currPair[1] == "true"){
                $("#page-" + currPair[0]).addClass("visited");
            }
        });
    }
    // set progress bar width to reflect stored values
    var widthVal = (pagesComplete * 100) / pageArray.length;
    $("#dliProgressBar").prop("aria-valuenow", widthVal).css("width", widthVal + "%");
}
/*
* Update Progress Bar
*/
function UpdateProgBar(pageId){
    // evaluate how many pages have been viewed
    var pagesDone = 0;
    // loop through page array to note visitied pages
    $.each(pageArray, function (index, value) {
        // increment up pages that have been visited
        pagesDone += (value.pageComplete) ? 1 : 0;
        // check if current page has been marked as visited
        if (value.pageId == pageId){
            // update page counter
            $("#pageCountBadge").html((index + 1) + " of " + pageArray.length);
            // if page has not been marked off, mark it off as visited
            if (!value.pageComplete){
                value.pageComplete = true;
                pagesDone++;
                // for denoting completion in TOC
                $("#page-" + pageId).addClass("visited");
            }
        }
    });
    // set progress bar width to reflect stored values
    var widthVal = (pagesDone * 100) / pageArray.length;
    $("#dliProgressBar").prop("aria-valuenow", widthVal).css("width", widthVal + "%");
    // update the progress bar storage
    UpdateProgBarStorage();
}
/*
* Update Progress Bar Storage
*/
function UpdateProgBarStorage(){
    // loop through page array and prep progress data for storage
    var keyValPairs = "";
    $.each(pageArray, function (index, value) {
        keyValPairs += (index == 0) ? value.pageId + "~" + value.pageComplete : "^" + value.pageId + "~" + value.pageComplete;
    });
    // update lesson data value
    modStatus.progBarArray = keyValPairs;
    // commit data to the LMS or store it to the browser
    if (apiIsInitialized) {
        // update progress
        doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
        // if the lesson is not complete, set the status to incomplete
        var status = doGetStatus();
        if (status != "completed") {
            doSetStatus("incomplete");
            doSetValue('cmi.success_status', 'unknown');
        }
        // commit data to lms
        doCommit();
    } else {
        if (localStorage){
            localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
        }
    }
}
/*
* ------------------------------------------------------------------------
* Main GUI actions and behavior 
* ------------------------------------------------------------------------
*/
/*
* Open/Close a GUI Panel
*/
function toggleSidebar(which) {
    // Mobile menu actions (Mainly sets up the sliding gestures)
    if ($("#mobile-wrapper").hasClass('active')) {
        // actions for when the TOC is opened
        if (which == "nav-panel--toc"){
            $("#sidebar-panels").css("transform", "translate3d(0%, 0px, 0px)");
            $("#sidebar-buttons--tracker").toggleClass('tracker-active').css("left", "0");
            $('#contentCover').toggleClass('active');
        // actions for when bookmarks are opened
        } else if (which == "nav-panel--bookmarks"){
            $("#sidebar-panels").css("transform", "translate3d(-100%, 0px, 0px)");
            $("#sidebar-buttons--tracker").toggleClass('tracker-active').css("left", "25%");
        // actions for when the glossary is opened
        } else if (which == "nav-panel--glossary"){
            if (isGlossaryLoaded === false){
                setTimeout(function() { openGlossary(); }, 350);
            }
            isGlossaryLoaded = true;
            $("#sidebar-panels").css("transform", "translate3d(-200%, 0px, 0px)");
            $("#sidebar-buttons--tracker").toggleClass('tracker-active').css("left", "50%");
        // actions for when the help panel is opened
        } else if (which == "nav-panel--help"){
            $("#sidebar-panels").css("transform", "translate3d(-300%, 0px, 0px)");
            $("#sidebar-buttons--tracker").toggleClass('tracker-active').css("left", "75%");
        } else {
        }
    // add a timeout so that the animation will complete before the glossary load
    } else if (which == "nav-panel--glossary"){
        if (isGlossaryLoaded === false){
            setTimeout(function() { openGlossary(); }, 500);
        }
        isGlossaryLoaded = true;
    // if the glossary has the keyboard and it switches
    } else if (which != "nav-panel--glossary" && $('#glossaryWrapper #VirtualKeyboardWrapper').length > 0){
        // remove keyboard to glossary
        $('#VirtualKeyboardWrapper').removeClass('glossary');
        setTimeout(function(){$('#contentCover').before($('#VirtualKeyboardWrapper'));}, 500);

    // if its not the TOC selected, remove the TOC button active class
    } else {
        if (which != "nav-panel--toc"){
            $("#menu-btn").removeClass('active');
        }
    }
    //handles sliding animation only when called
    $("#"+which).siblings('.active').removeClass('active').addClass('sliding');
    setTimeout(function() { $("#"+which).siblings().removeClass('sliding'); }, 350);
    $("#"+which).toggleClass('active');
    $("#"+which).addClass('sliding');
    setTimeout(function() { $("#"+which+'.sliding').removeClass('sliding'); }, 500);
    // adds/removes the content cover when panels are active
    if ($('.nav-panel').hasClass('active')) {
        $('#contentCover').addClass('active');
    } else {
        $('#contentCover').removeClass('active');
    }
    trapFocus(document.getElementById(which), which);
}
/*
* Handles the active states of the action buttons
*/
function toggleActionButtons(which) {
    if (which == "menu"){
        if ($("#menu-btn").hasClass('active')) {
            $("#menu-btn").removeClass('active');
        } else {
            $("#menu-btn").addClass('active');
        }
        $("#sidebar-buttons").children().removeClass('active');
    } else if (which == "glossary"){
        if ($("#glossary-btn").hasClass('active')){
            $("#glossary-btn").removeClass('active');
            // add keyboard to glossary
            $('#VirtualKeyboardWrapper').removeClass('glossary');
            setTimeout(function(){$('#contentCover').before($('#VirtualKeyboardWrapper'));}, 500);
            
        } else {
            $("#menu-btn").removeClass('active');
            $("#sidebar-buttons").children().removeClass('active');
            $("#glossary-btn").toggleClass('active');
            // add keyboard to glossary
            if ($('#VirtualKeyboardWrapper').hasClass('active')){
                // toggleVirtualKeyboard();
            }
            setTimeout(function(){$('#glossaryActions').after($('#VirtualKeyboardWrapper'));}, 500);  
        }
    } else {
        if ($("#" + which + "-btn").hasClass('active')){
            $("#" + which + "-btn").removeClass('active');
        } else {
            $("#menu-btn").removeClass('active');
            $("#sidebar-buttons").children().removeClass('active');
            $("#" + which + "-btn").toggleClass('active');
        }
    }
}
/*
* Traps focus within the nav-panel
*/
function trapFocus(element, namespace) {
    // get all focusable elements in the panel
    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),
        firstFocusableEl = focusableEls[0];  
        lastFocusableEl = focusableEls[focusableEls.length - 1];
        KEYCODE_TAB = 9;
    // set focus to the first item
    setTimeout(function() {firstFocusableEl.focus()}, 100);
    // add event listener for when the user is tabbing through the panel contents
    element.addEventListener('keydown', function(e) {
        var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
        // conditional logic for when true last element is hidden
        switch(namespace){
            case "nav-panel--toc":
                if (!$('#toc-content-list .collapse').last().hasClass("show") && !$('#searchResultsList').hasClass('active')){
                    lastFocusableEl = element.querySelector('.card:last-child .card-header .btn');
                } else if ($('#searchResultsList').hasClass('active')){
                    lastFocusableEl = element.querySelector('#navSearchResults .navPage:last-child');
                }else {
                    lastFocusableEl = focusableEls[focusableEls.length - 1];
                }
                break;
            case "nav-panel--help":
                var currentHelp = element.querySelector('.tab-pane.active'),
                focusableHelp = currentHelp.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
                if (focusableHelp.length > 0){
                    lastFocusableEl = focusableHelp[focusableHelp.length - 1];
                } else {
                    lastFocusableEl = element.querySelector('#admin-tab');
                }
                break;
            default:
        }
        // if a different key is pressed, return
        if (!isTabPressed) { 
            return; 
        }
        // if the shift key is used, go back an item
        if ( e.shiftKey ) /* shift + tab */ {
            // if you are on the first item and go back, go to the last item
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            // if it is the last element, go back to the first
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    });
}
/*
* Close Panels
*/
function closePanel(which){
    // check if panel is open
    if ($('.nav-panel').hasClass('active')){
        //==================== Default/Desktop ====================//
        // define open panel
        var openPanel = $('.nav-panel.active').attr('id');
        // remove active class and trigger sliding animation
        $('.nav-panel').removeClass('active').addClass('sliding');
        setTimeout(function() { $('.nav-panel.sliding').removeClass('sliding'); }, 350);
        // remove active classes from buttons
        $("#menu-btn").removeClass('active');
        $("#sidebar-actions .btn").removeClass('active');
        // disable content cover
        $('#contentCover').removeClass('active');

        //==================== Mobile ====================//
        if ($('#mobile-wrapper').hasClass('active')){
            // remove active class and trigger sliding animation
            $('#mobile-wrapper').removeClass('active').addClass('sliding');
            setTimeout(function() { $('#mobile-wrapper.sliding').removeClass('sliding'); }, 500);
            // toggle mobile menu classes
            $('.hamburger').toggleClass('is-active');
            $('body').toggleClass('no-scroll');
        }

        //==================== GUI adjustments ====================//
        // switch focus to the panel button
        $('#' + which + "-btn").focus();
        // disable language keyboard for the glossary
        if (which == 'glossary' || openPanel.substring(11) == 'glossary'){
            // add keyboard to glossary
            $('#VirtualKeyboardWrapper').removeClass('glossary');
            setTimeout(function(){$('#contentCover').before($('#VirtualKeyboardWrapper'));}, 500);
        }
    }
}
/*
* ------------------------------------------------------------------------
* Mobile menu actions and behavior
* ------------------------------------------------------------------------
*/
/*
* Open/Close the menu on mobile
*/
function toggleMobileMenu(){
    // Add class to the body to prevent page scrolling
    $('body').toggleClass('no-scroll');
    // Add active class for menu btn
    $('.hamburger').toggleClass('is-active');
    // Make TOC panel active
    toggleSidebar('nav-panel--toc');
    $("#toc-btn").addClass('active');
    // Slide out mobile menu
    $('#mobile-wrapper').toggleClass('active').addClass('sliding');
    setTimeout(function() { $('#mobile-wrapper.sliding').removeClass('sliding'); }, 500);
    $('#page_frame_container').toggleClass('mobile-nav-open');
    if (!$('#mobile-wrapper').hasClass('active')){
        $('#contentCover').removeClass('active');
    }
}
/*
* Check the widndow size to enable/disable swiping
*/
function initSwiping(){
    var vpWidth = $(window).width();
    // Enable mobile menu & swiping gestures
    if (vpWidth < 992) {
        // call for swiping on mobile menu
        swipeMobilePanels();
        // close panels as a precaution
        if ($('.nav-panel').hasClass('active') && $("#mobile-wrapper").hasClass('active') != true){
            closePanel();
        }
    // Enable mobile menu & swiping gestures
    } else {
        // remove stylyes from menu panels
        $("#sidebar-panels").removeAttr("style");
        // close panels as a precaution
        if ($("#mobile-wrapper").hasClass('active')){
            toggleMobileMenu();
            closePanel();
        }
        // call for swiping to be removed per desktop
        swipeDesktopPanels();
    }
}
/*
* Swipe actions for Mobile Menu
*/
function swipeMobilePanels(){
  // Enable Swiping on the panels
  $('#nav-panel--toc #toc-content').swipe('enable');
  $('#nav-panel--bookmarks').swipe('enable');
  $('#nav-panel--glossary').swipe('enable');
  $('#nav-panel--help').swipe('enable');
  // Swipe actions for Bookmarks Panel
  $('#nav-panel--toc #toc-content').swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--bookmarks');
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:120,
    excludedElements: "#searchBook"
  });
  // Swipe actions for Bookmarks Panel
  $('#nav-panel--bookmarks').swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--glossary');
    },
    swipeRight:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--toc');
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:120
  });
  // Swipe actions for Glossary Panel
  $('#nav-panel--glossary').swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--help');
    },
    swipeRight:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--bookmarks');
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:120
  });
  // Swipe actions for Help Panel
  $('#nav-panel--help').swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
        openComments(true);
    },
    swipeRight:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--glossary');
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:120
  });
}
/*
* Swipe actions for Desktop Panels
*/
function swipeDesktopPanels(){
  // disable swipe actions for Bookmarks Panel
  $('#nav-panel--toc #toc-content').swipe('disable');
  // disable swipe actions for Bookmarks Panel
  $('#nav-panel--bookmarks').swipe('disable');
  // disable swipe actions for Glossary Panel
  $('#nav-panel--glossary').swipe('disable');
  // disable swipe actions for Help Panel
  $('#nav-panel--help').swipe('disable');
}
/*
* ------------------------------------------------------------------------
* TOC Search
* ------------------------------------------------------------------------
*/
/*
* Initialize Search
*/
function doSearch() {
    // define search value
    searchVal = $("#searchBook").val();
    var searchExp = new RegExp(searchVal,"i");
    // if search is legit
    if (searchVal != "search" && searchVal != "" && searchVal.length > 1) {
        // hide TOC panel
        $("#toc-content").removeClass('active');
        $("#toc-content").addClass('searching');
        // show search panel
        $("#searchBar").addClass('searching');
        $("#searchResultsList").addClass('active');
        $("#searchResultsList").scrollTop();
        // setupsearch variables
        var strSearchBuilder = "";
        var intCounter = 0;
        // pull in lesson data
        if(sessionStorage){
            navJson = JSON.parse(sessionStorage.getItem(imiName));
            navJson = navJson.content;
        } else {
            navJson = modJSON
        }
        // loop through lesson data to match to search query
        for(var s = 0; s < navJson.sections.length; s++){
            for(var p = 0; p < navJson.sections[s].pages.length; p++){
                // evaluate if there is a match
                if(navJson.sections[s].pages[p].title.match(searchExp) != null){
                    // add matched item to listing
                    strSearchBuilder += '<button type="button" class="navPage list-group-item list-group-item-action" id="page-' + navJson.sections[s].pages[p].id +'" onclick="DisableLanguageToggle(); getPageData(\'' + navJson.sections[s].pages[p].id + '\');resetSearch();">' + navJson.sections[s].pages[p].title + '</button>';
                    intCounter++; 
                }
                // add liting count message if search is not blank
                if (strSearchBuilder != "") {
                    $("#navSearchResults").html("<div class='searchResults list-group-item'>Found " + intCounter + " matches:</div>" + strSearchBuilder);
                } 
                // search has returned no results
                else {
                    $("#navSearchResults").html("<div class='searchResults list-group-item'>No search results.</div>");
                }
            }
        }
    } 
    // search query needs to be reworked, prompt the user to do so
    else {
        $("#navSearchResults").html("<div class='searchResults list-group-item'>Please enter a search term.</div>");
    }
}
/*
* Reset Search
*/
function resetSearch() {
    // clear search input
    $('#searchBook').val('');
    // remove active/search classes
    $("#searchResultsList").removeClass('active');
    $("#toc-content").removeClass('searching');
    $("#searchBar").removeClass('searching');
    // show TOC listing
    $("#toc-content").addClass('active');
    $('#nav-panel--toc #toc-content').scrollTo( $("#page"+currentPageId), 200, {offset:-150} );
}
/*
* ------------------------------------------------------------------------
* Glossary actions
* ------------------------------------------------------------------------
*/
/*
* Initialize the glossary and toggle when the panel is opened
*/
function openGlossary() {
    // for glossary language toggle, argument is language specific
    InitializeGlossaryLanguageToggle("hindi");
}
/*
* Check language toggle and initialize glossary accordingly.
*/
function InitializeGlossaryLanguageToggle(initLanguage) {
    // set language variables
    currentLanguage = initLanguage;
    targetLanguage = initLanguage;
    // when language switch is toggled, init current language glossary
    $('input[name="glossaryLanguageToggle"]').on("switchChange.bootstrapSwitch", function () {
        currentLanguage = (currentLanguage == "termDesc") ? targetLanguage : "termDesc";
        setTimeout(function() { InitGlossary(); }, 350);
    });
    // initialize the glossary
    InitGlossary();
}
/*
* ------------------------------------------------------------------------
* Help actions
* ------------------------------------------------------------------------
*/
/*
* build out image attribution grid/list
*/
function buildImgGrid(data) {
    // loop through the image data
    $.each(data, function(index, image) {
        // if the listing is an image, add to the listing
        if (image.url.split('.').pop() == "jpg"){
            $('#helpImgNav').append('<li class="media-cc col-6 col-lg-4"><div class="media-cc-img" style="background-image:url(' + image.url + ');" onclick="showImgAttr(' + index + ')" role="img" aria-label="' + image.desc + '" title="' + image.title + '"></div></li>');
        }
    });
}
/*
* show image attribution info
*/
function showImgAttr(id) {
    // pull image data
    if(sessionStorage){
        data = JSON.parse(sessionStorage.getItem(imiName));
        data = data.content.images;
    } else {
        data = modJSON.content.images;
    }
    // Add the img source
    $('#help-panel-2 img').attr({
        src: data[id].url,
        title: data[id].title,
        alt: data[id].desc
    });
    // Add the img attribution info
    $('#help-panel-2 #imgTitle').html(data[id].title);
    $('#help-panel-2 #imgDesc').html(data[id].desc);
    $('#help-panel-2 #imgSource').html(data[id].src);
    $('#help-panel-2 #imgAuthor').html(data[id].author);
    $('#help-panel-2 #imgDate').html(data[id].date);
    // Adds an active class to the showcase div
    $('#help-panel-1').removeClass('active');
    // show panel with image info
    $('#help-panel-2').addClass('active');
}
/*
* close image attribution info
*/
function closeImgAttr(id) {
    // show the listing panel
    $('#help-panel-1').addClass('active');
    // removes the active class to the showcase div
    $('#help-panel-2').removeClass('active');
}
/*
* ------------------------------------------------------------------------
* Print actions
* ------------------------------------------------------------------------
*/
function printPreview(){
    // close any open panel
    closePanel();
    // open the print preview
    $.printPreview.loadPrintPreview();
}
/*
* ------------------------------------------------------------------------
* IE adjustments
* ------------------------------------------------------------------------
*/
function ieFramework() {
    // Set content height to match page frame
    var contentHeight = $(window).height() - 145;
    // check if the layout is for desktop
    if ($(window).width() > 991){
        $('#page_frame_container').css({
            'position': 'fixed',
            'height': contentHeight,
            'width': '100%'
        });
        $('#page_frame').css({
            'min-height': contentHeight,
            'padding': '0'
        });
    } 
    // remove styles if layout is for mobile
    else {
        $('#page_frame_container').css({
            'position': '',
            'height': '',
            'width': ''
        });
        $('#page_frame').css({
            'min-height': '',
            'padding': ''
        });     
    }
}
