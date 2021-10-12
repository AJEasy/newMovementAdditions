/*
* --------------------------------------------------------------------------
*   framework.js - v3.0 92F10
*   author: Potawatomi Training
*   created: 3/12/2018
*   last edited: 8/28/2021
*   Copyright 2021, Potawatomi Training, All rights reserved.
* --------------------------------------------------------------------------
*/
/*
* ------------------------------------------------------------------------
* Framework Variables 
* ------------------------------------------------------------------------
*/
//========== Course ==========//
var courseId = "";
var courseTitle = "";
//========== Module ==========//
var modId = "";
var modTitle = "";
var modStatus = "";
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
var pageCount = 0;
var pagesComplete = 0;
var currentStatus = {};
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
// challenges
var achievements = {};
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
    //==================== Refresh GUI and Variables ====================//
    // variables for the courseware
    courseId = json.course.id;
    courseTitle = json.course.title;
    modId = json.module.id;
    modTitle = json.module.title;
    // Set first/last data for sections and pages
    firstSectionId = json.content.sections[0].id;
    firstPageId = json.content.sections[0].pages[0].id;
    // Last page will always sit at the top level
    lastPageId = json.content.sections[0].pages[json.content.sections[0].pages.length - 1].id;
    // populate the html title attribute
    $("head title").html(modTitle);
    // add title to the top bar
    $(".lessonTitle").append(modTitle + " <span id='title-divider'>|</span> <span id='class-mark'>UNCLASSIFIED</span>");
    // drop narration audio to half
    let narration = document.getElementById('narrationAudio');
    narration.volume = 0.5;
    //==================== Build out the navigation ====================//
    //========== Evaluate modStatus to prior to looping through content ==========//
    // Build out Table of Contents
    let toc = document.getElementById('toc-content');
    // add nav wrapper to set up accordion
    let navWrap = document.createElement('div');
    navWrap.id = 'toc-content-list';
    navWrap.classList.add('accordion');
    // add nav wrap to toc
    toc.appendChild(navWrap);
    let nav = buildAccordionCard(json.content.sections[0], null, json.content.sections[0].pages[0], true, false);
    navWrap.appendChild(nav);
    // build section cards for the accordion in the nav
    function buildAccordionCard(section, parent, pageRef, nested, linked){
        // build out card
        let card = document.createElement('div');
        card.classList.add('card');
        card.id = 'section-' + section.id;
        if (parent != null){
            // add card header
            let cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header','d-flex','flex-row-reverse');   
            cardHeader.id = 'section-' + section.id + '-title';
            card.appendChild(cardHeader);
            // build out toggle button
            let cardHeaderToggle = document.createElement('button');
            cardHeaderToggle.classList.add('btn', 'text-left');
            cardHeaderToggle.type = 'button';
            cardHeaderToggle.dataset.toggle = 'collapse';
            cardHeaderToggle.dataset.target = '#section-' + section.id + '-content';
            cardHeaderToggle.setAttribute("aria-expanded", "false");
            cardHeaderToggle.setAttribute("aria-controls", "section-" + section.id + "-content");
            cardHeader.appendChild(cardHeaderToggle);
            // add triangle to toggle
            let cardHeaderTriangle = document.createElement('div');
            cardHeaderTriangle.classList.add('menu-arrow');
            cardHeaderToggle.appendChild(cardHeaderTriangle);
            // build out elo level link
            let cardHeaderLink = document.createElement('button');
            cardHeaderLink.type = 'button';
            cardHeaderLink.classList.add('page', 'list-group-item', 'list-group-item-action', 'd-flex', 'flex-row');
            if (linked){
                cardHeaderLink.id = "page-" + section.id.substring(0, 4);
                cardHeaderLink.innerHTML = section.title;
                // add click event to nav item
                cardHeaderLink.onclick = function(){getPageData(section.id.substring(0, 4))};
                cardHeader.appendChild(cardHeaderLink);
            } else {
                cardHeaderLink.dataset.toggle = 'collapse';
                cardHeaderLink.dataset.target = '#section-' + section.id + '-content';
                cardHeaderLink.setAttribute("aria-expanded", "false");
                cardHeaderLink.setAttribute("aria-controls","section-" + section.id + "-content");       
            }
            cardHeaderLink.innerHTML = section.title;
            cardHeader.appendChild(cardHeaderLink); 
        }
        // build out collapse section (where the nav folds)
        let collapse = document.createElement('div');
        collapse.classList.add('collapse');
        if (parent == null){
            collapse.classList.add('show');
        } 
        collapse.id = 'section-' + section.id + '-content';
        collapse.setAttribute("aria-labelledby", (nested) ? "section-" + section.id + "-title" : "page-" + section.id + "-title");
        collapse.dataset.parent = (parent == null) ? '#toc-content-list' : '#section-' + parent + '-body'; 
        card.appendChild(collapse);
        // add card body
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'p-0');
        collapse.appendChild(cardBody);
        // add the nav id body
        let cardBodyWrapper = document.createElement('div');
        cardBodyWrapper.id = 'section-' + section.id + '-body';
        cardBodyWrapper.classList.add('list-group','list-group-flush');
        cardBody.appendChild(cardBodyWrapper);
        // if this card is not for page level section
        if (nested){
            // loop through the page sections
            section.pages.forEach(function(page,p){
                // update page count;
                pageCount++;
                // create page item
                listItem = buildAccordionItem(page, section.id, page, false);
                // add list item to card body
                cardBodyWrapper.appendChild(listItem);
            });
        } else {
            // loop through sections to add to page level card
            section.sections.forEach(function(childSection, cs){
                let listItem = buildAccordionCard(childSection, section.id, pageRef, true, false);
                // add list item to card body
                cardBodyWrapper.appendChild(listItem);
            });
        }        
        // send the completed card back
        return card;
    }
    // build items for the accordion in the nav
    function buildAccordionItem(page, parent, pageRef, nested){
        let item = null;
        // check if the item has child sections
        if (page.sections != undefined){
            // if its a solo section, just use the section for the nav item
            if (page.sections.length > 1){
                // build out the sections
                item = buildAccordionCard(page, parent, pageRef, false, true);
            } else {
                item = buildAccordionCard(page.sections[0], parent, pageRef, true, true);
            }
        } else {
            item = document.createElement('button');
            item.classList.add('page', 'list-group-item', 'list-group-item-action');
            item.id = 'page-' + page.id;
            item.innerHTML = page.title;
            item.type = "button";
            item.onclick = function(){getPageData(page.id)};
            // add achievement to achievement object
            if (page.achievement){
                achievements[page.id] = 0;
            }
        }
        // add item to status
        if (parent == '0000-0'){
            buildStatusItem(page, parent);
        }
        // send the completed list item back
        return item;
    }
    // build out the status object
    function buildStatusItem(page, parent){
        // if this is a single page
        if (page.sections != undefined){
            currentStatus[page.id] = {};
            currentStatus[page.id]['c'] = 0;
            currentStatus[page.id]['p'] = [];
            page.sections.forEach(function(section, s){
                currentStatus[page.id]['p'][s] = {}
                section.pages.forEach(function(subPage, sP){
                    if (subPage.sections != undefined){
                        currentStatus[page.id]['p'][s][subPage.id] = {};
                        currentStatus[page.id]['p'][s][subPage.id]['c'] = 0;
                        currentStatus[page.id]['p'][s][subPage.id]['p'] = [];
                        subPage.sections.forEach(function(subSection, sS){
                            currentStatus[page.id]['p'][s][subPage.id]['p'][sS] = {};
                            subSection.pages.forEach(function(subSubPage, sSP){
                                currentStatus[page.id]['p'][s][subPage.id]['p'][sS][subSubPage.id] = 0;
                            });
                        });
                    } else {
                        currentStatus[page.id]['p'][s][subPage.id] = 0;
                    }
                });
            });
        } else {
            currentStatus[page.id] = 0;
        }
    }
    //==================== API Check - LMS is active ====================//
    // Check to see if the SCO is on an LMS (see SCORM Wrapper in js)
    if (apiIsInitialized) {
        // check whether the learner has previously accessed the SCO
        var entry = doGetValue("cmi.entry");
        //========== On LMS and they have accessed the SCO previously ==========//
        if (entry != "ab-initio") {
            // check for location data
            if (doGetValue('cmi.location') != "") {
                locationData = doGetValue('cmi.location');
                // if the location data comes back with nothing
                if (locationData != "") {
                    // set page and section variables
                    currentTOC = locationData.split("|");
                    currentPageId = currentTOC[0];
                    currentSectionId = currentTOC[1];
                }
            }
            // pull existing exam data
            modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
            currentStatus = modStatus.status;
            achievements = modStatus.achievements
        }
        //========== On LMS and they have not accessed the SCO previously ==========//
        else {
            // set initial values for the lesson
            // Location data within the lesson set to empty
            doSetValue("cmi.location", "");
            // Stored lesson data is set to empty
            doSetValue("cmi.suspend_data", "");
            // build out module status object
            modStatus = {
                "location": {
                    "section": firstSectionId,
                    "page": firstPageId
                },
                "status": currentStatus,
                "achievements" : achievements,
                "pe": {}
            };
            // update lesson data in LMS
            doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
        }
        // patch to ensure bookmarking with catastophic failure
        doSetValue("cmi.exit", "suspend");
    }
    //==================== API Check - Local Setup ====================//
    else {
        // check to see if localStorage works
        if (localStorage) {
            // reset current page id
            currentPageId = "";
            //========== Not on an LMS, data found in browser's local storage ==========//
            // check if lesson data does not exist
            if (localStorage.getItem(imiName + "-session") != null) {
                // define current section and page
                modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
                // update current section and page ids
                currentSectionId = modStatus.location.section;
                currentPageId = modStatus.location.page;
                currentStatus = modStatus.status;
                achievements = modStatus.achievements;
            }
            //========== Not on an LMS, no data found in browser ==========//
            // no session data, create location instance using first section/page id
            else {
                // build new instance of status object with current variables 
                modStatus = {
                    "location": {
                        "section": firstSectionId,
                        "page": firstPageId
                    },
                    "status": currentStatus,
                    "achievements" : achievements,
                    "pe": {}
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
        currentPageId = firstPageId;
        currentSectionId = firstSectionId;
        getPageData(firstPageId);
    }
    //========== scrolling ==========//
    myScroll = new iScroll("nav-panel--toc #toc-content", {bounce:false});
    $('#nav-panel--toc #toc-content').scrollTo($("#page-"+currentPageId), 200, {offset:-150});
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
    } 
    // update pageData to reflect the page object
    else {
        pageData = modJSON;
    }
    // set the current section title to be the first section title by default
    let currentSection = pageData.content.sections[0];
    // loops through the content until the correct page is found
    function pullPageData(array){
        // loop through object
        array.every(function(page, index){
            // check to see if page ids match
            if (page.id == pageId){
                console.log(page.id);
                // set pageData to page object
                pageData = page;
                // update current sections
                if (page.sections){
                    if (page.sections.length > 1){
                        currentSection = page;
                    } else {
                        currentSection = page.sections[0];
                    }
                }
                currentSectionId = currentSection.id;
                currentSectionTitle = currentSection.title;
                // kill the loop
                return false;
            } else {
                if (page.sections){
                    // loop through sections to add to page level card
                    page.sections.forEach(function(childSection, cs){
                        // ipdate the section object
                        currentSection = childSection;
                        // loop again
                        pullPageData(childSection.pages);
                    });
                }
            }
            // keep the loop going until it returns false
            return true;
        })
    }
    // get the right page data
    pullPageData(pageData.content.sections[0].pages);
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
    console.log(currentSectionId);
    //========== update TOC ==========//
    $("#section-" + currentSectionId + "-content").collapse('show');
    $("#eloTitle").html(currentSectionTitle);
    // Update page information and TOC items
    currentPageTitle = pageData.title;
    currentPageNum = pageData.id;
    $(".page").removeClass("active");
    $("#toc-content-list .btn").removeClass("active");
    $("#page-"+pageId).addClass("active");
    $("#page-"+pageId).prev('.btn').addClass("active");
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
        }
    }

    //==================== Update GUI elements ====================//
    // TOC Scroll to active page
    $('#nav-panel--toc #toc-content').scrollTo( $("#page-"+pageId), 200, {offset:0} );
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

    //==================== Update Page Narration ====================//
    // Update the audio player with the page narration
    let narrationAudio = document.getElementById('narrationAudio');
    let narrationSource = document.getElementById('narrationSource');
    let narrationButton = document.getElementById('play-btn');

    // set all the events to update the button
    // pause button when paused
    narrationAudio.onplaying = function() {
        narrationButton.innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z"/></svg>';
    }

    narrationAudio.onpause = function() {
        narrationButton.innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"/></svg>';
    }

    narrationAudio.onended = function() {
        narrationButton.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo" class="svg-inline--fa fa-redo fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"></path></svg>';
    }


    if(typeof pageData.narration !== 'undefined') {
        // stop the narration from playing
        narrationAudio.pause();
        narrationAudio.currentTime = 0;
        // update the source
        narrationSource.src = pageData.narration[0].url;
        narrationAudio.load();
        // play the new narration
        
        narrationAudio.play();
        // update the text for the closed caption
        let narrationBody = document.getElementById('cc-narration');
        // evaluate the lines of text
        narrationBody.innerHTML = '';
        if (Array.isArray(pageData.narration[0].text)){
            $.each(pageData.narration[0].text, function(t, text){
                narrationBody.appendChild(buildNarrationText(text));
            });
        } else {
            narrationBody.appendChild(buildNarrationText(pageData.narration[0].text));
        }
    
        function buildNarrationText(text){
            let item = document.createElement('p');
            item.innerHTML = text;
            // add return text
            return item;
        }
    }

    //==================== Use page data to build out page ====================//
    // build out template based on type
    function getTemplate(type){   
        var templates = {
            '0': function() {
                return buildIntro(pageData);
            },
            '1': function() {
                return buildMission(pageData);
            },
            '2': function() {
                return buildBranching(pageData);
            },
            '2.1': function() {
                return buildAnimatedBranching(pageData);
            },
            '2.2': function() {
                return buildEmentorBranching(pageData);
            },
            '2.3': function() {
                return buildImageBranching(pageData);
            },
            '3': function() {
                return buildObjectives(pageData);
            },
            '4': function() {
                return writeThirdStatic(pageData);
            },
            '5': function() {
                return buildHalfStatic(pageData);
            },
            '5.1': function() {
                return buildHalfImage(pageData);
            },
            '5.2': function() {
                return buildHalfListButtons(pageData);
            },
            '5.3': function() {
                return buildHalfListImageButtons(pageData);
            },
            '6': function() {
                return buildFullStatic(pageData);
            },
            '6.1': function() {
                return buildFullImage(pageData);
            },
            '7': function() {
                return buildFullNarrationEMentor(pageData);
            },
            '7.1': function() {
                return buildImageCarousel(pageData);
            },
            '7.2': function() {
                return buildNarratedImageCarousel(pageData);
            },
            '7.3': function() {
                return buildImageCarousel2Panels(pageData);
            },
            '8': function() {
                return buildFullHotSpot(pageData);
            },
            '8.1': function() {
                return buildFullHotSpotDnD(pageData);
            },
            '8.2': function () {
                return buildFullHotSpotTextButton(pageData);
            },
            '8.3': function () {
                return buildFullHotSpotImages(pageData);
            },
            '9': function() {
                return buildFullDragDrop(pageData);
            },
            '10': function() {
                return buildFullTiles(pageData);
            },
            '10.5': function() {
                return buildFullTilesSelect(pageData);
            },
            '11': function() {
                return buildListing(pageData);
            },
            '11.1': function() {
                return buildListingSections(pageData);
            },
            '11.2': function() {
                return buildListingImage(pageData);
            },
            '12': function() {
                return buildCards(pageData);
            },
            '13': function() {
                return buildWheelTF(pageData);
            },
            '14': function() {
                return buildGraphicChoice(pageData);
            },
            '15': function() {
                return buildCOLMultipleChoice(pageData);
            },
            '15.1': function() {
                return buildCOLMultipleChoiceImage(pageData);
            },
            '16': function() {
                return buildCOLMatching(pageData);
            },
            '17': function() {
                return buildCOLDragDrop(pageData);
            },            
            '18': function() {
                return buildCOLTrueFalse(pageData);
            },
            '19': function() {
                return buildCOLImageSelect(pageData);
            },
            '19.1': function() {
                return buildCOLImageSelectWithSequence(pageData);
            },
            '19.2': function() {
                return buildCOLImageDropdown(pageData);
            },
            '19.3': function() {
                return buildImageCaption(pageData);
            },
            '20': function() {
                return buildCOLMatchingSelect(pageData);
            },
            '21': function() {
                return buildSlideShowQuestions(pageData);
            },
            '21.1': function() {
                return buildTrueFalse(pageData);
            },
            '21.2': function() {
                return buildMC(pageData);
            },
			'21.01': function() {
                return buildEmptyContent(pageData);
            },
            '22': function() {
                return buildSummary(pageData);
            },
            '23': function() {
                return buildPEMultiStepDragAndDrop(pageData);
            },
            '24': function () {
                return buildPESequentialHotspot(pageData);
            },
            '25': function () {
                return buildMultiChoiceMultiQuestions(pageData);
            },
            '26': function () {
                return buildPEIntro(pageData);
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
    // comment window should adjust on page load
    if (objCommentWindow) {
        if (!objCommentWindow.closed && objCommentWindow.closed != undefined) {
            openComments();
        }
    }
    // Move modals to the bottom of the DOM
    $('body > .modal').remove();
    $(".modal").appendTo($("body"));
    //IE adjustments
    if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge/)) {
        ieFramework();
        $(window).resize(ieFramework);
    }

    //==================== Update Page Branching ====================//
    // if return button exists, remove it and add a new one
    let returnBtn = document.getElementById('branching-return');
    if (returnBtn){
        returnBtn.remove();
    }
    // evaluate if the page is part of branching
    if (pageData.branching != undefined){
        // check if it is the root or a page
        if(Array.isArray(pageData.branching)){
            console.log('branching root');
            // logic for branch root
            

        } else {
            returnBtn = buildBranchingReturn(pageData.branching);
        }
    }
}
/*
* ------------------------------------------------------------------------
* Branching
* ------------------------------------------------------------------------
*/
function buildBranchingReturn(returnId){
    // get the page frame
    let container = document.getElementById('page_frame');
    // build out a return button
    let returnBtn = document.createElement('button');
    returnBtn.role = 'button';
    returnBtn.id = "branching-return";
    returnBtn.classList.add('btn', 'btn-primary', "animate__animated", "animate__fadeInUp");
    returnBtn.innerHTML = "Back";
    // add click event
    returnBtn.onclick = function(){
        getPageData(returnId);
    };
    // append return button to page frame
    container.appendChild(returnBtn);
    
    let next = document.getElementById('next-page');
    next.disabled = true;
    // let prev = document.getElementById('previous-page');
    // prev.disabled = true;
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
/*
* Mobile Page Title Scrolling
*/
function aud_play_pause() {
    let narration = document.getElementById('narrationAudio');
    if (narration.paused) {
      narration.play();
    } else {
      narration.pause();
   }
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
    let nextPageObj;
    let rootObj = '';
    // get the next page object
    function pullNextPageData(array){
        // loop through object
        array.every(function(page, index){
            if (page.id == pageId){
                // if the next page item is there
                if (array[index + 1] != undefined){
                    nextPageObj = array[index + 1];
                } 
                // return to the last root
                else {
                    nextPageObj = rootObj;
                }
                return false;
            } else {
                if (page.sections){
                    // update root object
                    rootObj = page;
                    // loop through sections to add to page level card
                    page.sections.forEach(function(childSection, cs){
                        pullNextPageData(childSection.pages);
                    });
                }
            }
            return true;
        })
    }
    // pull lesson data
    if (sessionStorage){
        navJson = JSON.parse(sessionStorage.getItem(imiName));
    } else {
        navJson = modJSON;
    }
    // get page data
    pullNextPageData(navJson.content.sections[0].pages);
    // get the next page listed
    getPageData(nextPageObj.id);
}
/*
* Previous Page
*/
function prevPage(pageId) {
    let prevPageObj;
    let rootObj = '';
    // get the prev page object
    function pullPrevPageData(array){
        // loop through object
        array.every(function(page, index){
            if (page.id == pageId){
                // if the prev page item is there
                if (array[index - 1] != undefined){
                    prevPageObj = array[index - 1];
                } 
                // return to the last root
                else {
                    prevPageObj = rootObj;
                }
                return false;
            } else {
                if (page.sections){
                    // update root object
                    rootObj = page;
                    // loop through sections to add to page level card
                    page.sections.forEach(function(childSection, cs){
                        pullPrevPageData(childSection.pages);
                    });
                }
            }
            return true;
        })
    }
    // pull lesson data
    if (sessionStorage){
        navJson = JSON.parse(sessionStorage.getItem(imiName));
    } else {
        navJson = modJSON;
    }
    // get page data
    pullPrevPageData(navJson.content.sections[0].pages);
    // get the prev page listed
    getPageData(prevPageObj.id);
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
    pagesComplete = 0;
    // check if learner is on an lms
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
        locStgProgBar = modStatus.status;
    } else {
        if (localStorage){
            // pull data out of stored data
            modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
            // locStgProgBar = modStatus.progBarArray;
            locStgProgBar = modStatus.status;
        } else {
            // if no local storage, progress will not be saved
        }
    }
    // run the loop to see where we are
    checkProgBar(locStgProgBar);
    // // update the progress bar storage
    // UpdateProgBarStorage();
    // set progress bar width to reflect stored values
    var widthVal = (pagesComplete * 100) / pageCount;
    $("#dliProgressBar").prop("aria-valuenow", widthVal).css("width", widthVal + "%");
}
/*
* Recursive loop to check current progress
*/
function checkProgBar(obj){
    // loop through object
    for (var k in obj){
        // check if we are at the end of the nest
        if (typeof obj[k] !== 'object' && obj[k] !== null){
            if (obj[k] == 1){
                pagesComplete++;
                $("#page-" + k).addClass("visited");
            } else {

            }
        } 
        // if nested object exists, keep going
        else {
            $("#page-" + k).addClass("visited");
            if (obj[k]['c'] == 1){
                pagesComplete++;
            } else {

            }
            obj[k]['p'].forEach(function(element, index){
                checkProgBar(element);
            });
        }
    }
}
/*
* Update Progress Bar
*/
function UpdateProgBar(pageId){
    // evaluate how many pages have been viewed
    pagesComplete = 0;
    let progressPath = [];
    let found = false;
    let loopCount = 0;

    function getProgPath(obj, currentPage, level){
        for (var k in obj){
            if (typeof obj[k] !== 'object' && obj[k] !== null){
                if (k == currentPage){
                    progressPath = [k];
                }
            } else {
                if (k == currentPage){
                    progressPath = [k];
                } else {
                    obj[k].p.forEach(function(subObj, s){
                        for (var l in subObj){
                            if (typeof subObj[l] !== 'object' && subObj[l] !== null){
                                if (l == currentPage){
                                    progressPath = [k, l];
                                }
                            } else {
                                if (l == currentPage){
                                    progressPath = [k, l];
                                } else {
                                    subObj[l].p.forEach(function(subSubObj, sO){
                                        for (var m in subSubObj){
                                            if (m == currentPage){
                                                progressPath = [k, l, m];
                                            }
                                        }
                                    })
                                }
                            }
                        }
                    })
                }
            }
        }
    }
    // use path to update the current pages status
    // need to find a better solution for this!!!
    function updateStatus(path, length){
        switch(length) {
            case 2:
                $.each(locStgProgBar[path[0]]['p'], function (index, obj) {
                    console.log(obj);
                    for (var k in obj){
                        if (k == path[1]){
                            if (typeof obj[k] === 'object' && obj[k] !== null){
                                $.each(obj[k]['p'], function (index2, obj2){
                                    if (Object.values(locStgProgBar[path[0]]['p'][index][path[1]]['p'][index2]).every(item => item === 1)){
                                        console.log('should work')
                                        locStgProgBar[path[0]]['p'][index][path[1]]['c'] = 1;
                                    }
                                });
                            } else {
                                locStgProgBar[path[0]]['p'][index][path[1]] = 1;
                                console.log(locStgProgBar[path[0]]['p'][index][path[1]])
                            }
                            break;
                        } 
                    }
                });
                break;
            case 3:
                $.each(locStgProgBar[path[0]]['p'], function (index, obj) {
                    console.log(obj);
                    for (var k in obj){
                        if (k == path[1]){
                            console.log('matched second root ' + k)
                            $.each(obj[k]['p'], function (index2, obj2){
                                console.log(obj2);
                                for(var k2 in obj2){
                                    if (k2 == path[2]){
                                        locStgProgBar[path[0]]['p'][index][path[1]]['p'][index2][path[2]] = 1;
                                    }
                                }
                            })
                        } 
                    }
                });
                break;
            default:
                if (typeof locStgProgBar[path[0]] === 'object' && locStgProgBar[path[0]] !== null){
                    if (Object.values(locStgProgBar[path[0]]['p'][0]).every(item => item === 1)){
                        locStgProgBar[path[0]]['c'] = 1;
                    }
                } else {
                    locStgProgBar[path[0]] = 1;
                }
          }
    }
    
    // get the status info
    getProgPath(locStgProgBar, pageId, 0);
    console.log(progressPath);
    // update the page status
    updateStatus(progressPath, progressPath.length);
    // get updated status
    checkProgBar(locStgProgBar);
    // update the status variable
    modStatus.status = locStgProgBar;
    // set progress bar width to reflect stored values
    var widthVal = (pagesComplete * 100) / pageCount;
    $("#dliProgressBar").prop("aria-valuenow", widthVal).css("width", widthVal + "%");
    // update the progress bar storage
    UpdateProgBarStorage();
}
/*
* Update Progress Bar Storage
*/
function UpdateProgBarStorage(){
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
        } else if (which == "nav-panel--cc"){
            $("#sidebar-panels").css("transform", "translate3d(-100%, 0px, 0px)");
            $("#sidebar-buttons--tracker").toggleClass('tracker-active').css("left", "40%");
        // actions for when the help panel is opened
        } else if (which == "nav-panel--help"){
            $("#sidebar-panels").css("transform", "translate3d(-200%, 0px, 0px)");
            $("#sidebar-buttons--tracker").toggleClass('tracker-active').css("left", "60%");
        } else {
        }
    // add a timeout so that the animation will complete before the glossary load
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
        } else {
            $("#menu-btn").removeClass('active');
            $("#sidebar-buttons").children().removeClass('active');
            $("#glossary-btn").toggleClass('active');
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
  $('#nav-panel--cc').swipe('enable');
  $('#nav-panel--help').swipe('enable');
  // Swipe actions for Bookmarks Panel
  $('#nav-panel--toc #toc-content').swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--cc');
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:120,
    excludedElements: "#searchBook"
  });
  // Swipe actions for Glossary Panel
  $('#nav-panel--cc').swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--help');
    },
    swipeRight:function(event, direction, distance, duration, fingerCount) {
        toggleSidebar('nav-panel--toc');
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
        toggleSidebar('nav-panel--cc');
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
  // disable swipe actions for Glossary Panel
  $('#nav-panel--cc').swipe('disable');
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
        function searchPageData(array){
            // loop through object
            array.every(function(page, index){
                // check to see if page ids match
                if (page.title.match(searchExp) != null){
                    // add matched item to listing
                    strSearchBuilder += '<button type="button" class="navPage list-group-item list-group-item-action" id="page-' + page.id +'" onclick="getPageData(\'' + page.id + '\');resetSearch();">' + page.title + '</button>';
                    intCounter++;
                } else if (strSearchBuilder != "") {
                    $("#navSearchResults").html("<div class='searchResults list-group-item'>Found " + intCounter + " matches:</div>" + strSearchBuilder);
                } else if (page.sections){
                    // loop through sections to add to page level card
                    page.sections.forEach(function(childSection, cs){
                        // loop again
                        searchPageData(childSection.pages);
                    });
                } else {
                    // search has returned no results
                    $("#navSearchResults").html("<div class='searchResults list-group-item'>No search results.</div>");
                }
                // keep the loop going until it returns false
                return true;
            })
        }
        // get the right page data
        searchPageData(navJson.sections[0].pages);
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
* Open Comment Tool
* ------------------------------------------------------------------------
*/
function openComments(focus) {
    // http://localhost/comment-tool/production/comments_92F10_IMI/
    objCommentWindow = window.open("https://potawatomi-dl.com/review/92f10/imi/comments/index.php?course_id=" + encodeURIComponent(courseId.trim()) + "&course_title=" + encodeURIComponent(courseTitle.trim()) + "&mod_id=" + encodeURIComponent(modId.trim()) + "&mod_title=" + encodeURIComponent(modTitle.trim()) + "&sec_id=" + encodeURIComponent(currentSectionId.trim()) + "&sec_title=" + encodeURIComponent(currentSectionTitle.trim()) + "&page_id=" + currentPageId + "&page_title=" + currentPageId + "-" + encodeURIComponent(currentPageTitle.trim()), "commentWindow", "width=800,height=600,menubar=no,toolbar=no,status=no,location=no,resizable=yes,scrollbars=yes,directories=no");
    //
    if (focus) { window.objCommentWindow.focus(); }
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
