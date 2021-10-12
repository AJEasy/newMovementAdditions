/*
* --------------------------------------------------------------------------
*   framework.js - v1.5
*   author: Craig Tech Inc. & Sean Dooley
*   created: 3/12/2018
*   last edited: 11/15/2019
* --------------------------------------------------------------------------
*/
/*
* ------------------------------------------------------------------------
* Framework Variables 
* ------------------------------------------------------------------------
*/
var pageIdBookmark = "";
var chapterIdBookmark = "";
// var navJson = JSON.parse(sessionStorage.getItem('navData'));
// var modJSON = JSON.parse(sessionStorage.getItem('modJSON'));
var modTitle = "";
var modLang = ""
var sectionTitles = [];
var html5StoragebookTitle = "";
var currentPageTitle = "";
var currentSectionTitle = "";
var currentPageId = "";
var firstPageId = "";
var prevPageId = "";
var nextPageId = "";
var lastPageId = "";
var currentChapterId = "";
var currentChapterTitle = "";
var firstChapterId = "";
var nextChapter = "";
var dynamicChapterId = "";
var dynamicSectionId = "";
var currentPagePath = "";
var currentPageNum = 0;
var locStgProgBar;
var moduleIdVal;
var pageArray = null;
var progBarSuspendData;
var currentLanguage;
var targetLanguage;
var isGlossaryLoaded = false;
var isCommentLink = false;
var objCommentWindow = new Object();
var myScroll;
var menuOldChapterSliding = false;
var menuNewChapterSliding = false;
var menuOldSectionSliding = false;
var menuNewSectionSliding = false;
var isMobile = false;
/*
* Device detection
*/
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
if (isMobile == true){
   setTimeout(function() { $('body').addClass('mobile-detected') }, 100);
}
/*
* ------------------------------------------------------------------------
* Populate Framework 
* ------------------------------------------------------------------------
*/
function populateGUI() {
    // build out TOC
    // populateTOC(navJson);
    if(sessionStorage){
      populateTOC(JSON.parse(sessionStorage.getItem(imiName)));
    } else {
      populateTOC(JSON.parse(modJSON));
    }
    
    // load Glossary
    // loadGlossary();
    // load help menu
    // openHelp();
    // check window size to enable/disable swiping gestures
    initSwiping();
    $(window).resize(initSwiping);
    
    //IE Check
    if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge/)) {    
        $('body').addClass('IE-present');
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
    // variable for the xml
    navData = json.content;
    modTitle = navData.mod;
    modLang = json.language;
    // populate the html title attribute
    $("head title").html(modTitle);
    // adds it to the top black bar
    $(".bookTitle").append(modTitle + " <span id='title-divider'>|</span> <span id='class-mark'>UNCLASSIFIED</span>");
    $("#chapterList").append('<div class="navSeclist list-group">');
    $.each(navData.sections, function(k, v) {
        secId = v.id;
        secTitle = v.title;
        sectionTitles.push(secTitle);
        $(".navSeclist").append('<div class="navItem list-group-item" onclick="showSectionPages(' + secId + ');">' + secTitle + '</div>');
        $(".navSeclist").append('<div id="section' + secId + '" class="navPagelist list-group">');
        $.each(v.pages, function(num, page){
            $("#section" + secId).append('<div class="navPage list-group-item" id="page' + page.id + '" onclick="DisableLanguageToggle(); getPageData(' + page.id + ');">' + page.title + '</div>');
            // Build out page object
            if(sessionStorage){
              sessionStorage.setItem(page.id, JSON.stringify(page));
            } else {
              window[page.id] = JSON.stringify(page);
            }
            
        });
        //collapse by default
        $("#section" + secId).hide();
    });
    // Set First Chapter, Section, and Page
    firstSectionId = navData.sections[0].id;
    firstPageId = navData.sections[0].pages[0].id;
    lastSectionNum = navData.sections.length-1;
    lastPageId = navData.sections[lastSectionNum].pages[navData.sections[lastSectionNum].pages.length-1].id;
    // We're Grab the first chapter title to store
    storageTitle = modTitle;
    storageTitle = storageTitle.replace(/ /g, "");
    html5StoragebookTitle = modTitle.replace(/ /g, "") + storageTitle;
    // Init API
    if (apiIsInitialized) {
        var entry = doGetValue("cmi.entry");
        if (entry != "ab-initio") {
            if (doGetValue('cmi.location') != "") {
                locationData = doGetValue('cmi.location');
                if (locationData != "") {
                    currentTOC = locationData.split("|");
                    currentPageId = currentTOC[0];
                    currentSectionId = currentTOC[1];
                    currentChapterId = currentTOC[2];
                }
            }
        } else {
            doSetValue("cmi.location", "");
            doSetValue("cmi.suspend_data", "");
        }
    } else {
        if ($.jStorage.storageAvailable()) {
            currentPageId = "";
            if ($.jStorage.get("pageIdBookmark" + html5StoragebookTitle) != null) {
                currentPageId = $.jStorage.get(
                  "pageIdBookmark" + html5StoragebookTitle);
                currentSectionId = $.jStorage.get(
                "sectionIdBookmark" + html5StoragebookTitle);
                currentChapterId = $.jStorage.get(
                  "chapterIdBookmark" + html5StoragebookTitle);
            }
        } else {
            alert("Your browser is unable to store current location data, please use a newer browser.");
        }
    }
    // Init Progress Bar
    InitProgArray(navData, currentPageId);
    // Load the First Page
    // if ("" != currentPageId && $(bookXML).find("pageId").filter(
    //         function () {
    //         return ($(this).text() == currentPageId);
    // }).length > 0) {
    if ("" != currentPageId) {
        showChapterPages(currentChapterId);
        showSectionPages(currentSectionId);
        // initPage(currentPageId);
        getPageData(currentPageId);
    } else {
        showChapterPages(firstChapterId);
        showSectionPages(firstSectionId);
        currentPageId = firstPageId;
        // initPage(firstPageId);
        getPageData(firstPageId); 
    }
    // Set Navigation Scrolling
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
    // Convert number to string
    pageId = pageId.toString();
    // Specific Page Adjustments
    switch (pageId) {
        case "8":
        case "0010":
            pageId = "0010";
            $('#previous-page').prop("disabled",true);
            $('#next-page').prop("disabled",false);
            break;
        case "16":
        case "0020":
            pageId = "0020";
            $('#previous-page').prop("disabled",false);
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
    // Remove Active State from TOC Page item
    if(currentPageId){
        $("#page"+currentPageId).removeClass("active");
    };
    // Page Variables
    var pageUrl = "";
    currentPageId = pageId;

    $("#page"+pageId).addClass("active");
    // Update Chapters, Sections, Pages
    for(var s = 0; s < navData.sections.length; s++){
        for(var p = 0; p < navData.sections[s].pages.length; p++){
            if(navData.sections[s].pages[p].id == currentPageId){
                // Update Page
                currentPageTitle = navData.sections[s].pages[p].title;
                currentPageNum = navData.sections[s].pages[p].id;
                currentPagePath = navData.sections[s].pages[p].url;
                pageUrl = currentPagePath + "page.json";
                $("#page"+pageId).addClass("active");
                // Update Section
                currentSectionId = navData.sections[s].id;
                currentSectionTitle = navData.sections[s].title;  
                $("#eloTitle").html(currentSectionTitle);
                // If section switches
                if(dynamicSectionId != currentSectionId) {
                    $("#section" + dynamicSectionId).slideToggle(
                        'medium', function() {
                        $("#section" + currentSectionId).slideToggle(
                            'medium', function() {
                            dynamicSectionId = currentSectionId;
                        });
                    });     
                }
            }
        }
    }
    if (apiIsInitialized) {
        doSetValue('cmi.location', pageId + "|" + currentSectionId + "|" + currentChapterId);
    } else {
        $.jStorage.set("pageIdBookmark"+html5StoragebookTitle, pageId);
        $.jStorage.set("sectionIdBookmark"+html5StoragebookTitle, currentSectionId);
        $.jStorage.set("chapterIdBookmark"+html5StoragebookTitle, currentChapterId);
    }
    // TOC Scroll to active page
    $('#nav-panel--toc #chapterList').scrollTo( $("#page"+pageId), 200, {offset:0}  );

    if(sessionStorage){
        buildPage(JSON.parse(sessionStorage.getItem(pageId)));
    } else {
        console.log(window[pageId]);
        buildPage(JSON.parse(window[pageId]));
    }

    
    // Update Progress Bar
    UpdateProgBar(pageId);
    
}



function initPage(pageId) {
    // Convert number to string
    pageId = pageId.toString();
    // Specific Page Adjustments
    switch (pageId) {
        case "8":
        case "0010":
            pageId = "0010";
            $('#previous-page').prop("disabled",true);
            $('#next-page').prop("disabled",false);
            break;
        case "16":
        case "0020":
            pageId = "0020";
            $('#previous-page').prop("disabled",false);
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
    // Remove Active State from TOC Page item
    if(currentPageId){
        $("#page"+currentPageId).removeClass("active");
    };
    // Page Variables
    var pageUrl = "";
    currentPageId = pageId;
    // Update Chapters, Sections, Pages
    for(var s = 0; s < navJson.sections.length; s++){
        for(var p = 0; p < navJson.sections[s].pages.length; p++){
            if(navJson.sections[s].pages[p].id == currentPageId){
                // Update Page
                currentPageTitle = navJson.sections[s].pages[p].title;
                currentPageNum = navJson.sections[s].pages[p].id;
                currentPagePath = navJson.sections[s].pages[p].url;
                pageUrl = currentPagePath + "page.json";
                $("#page"+pageId).addClass("active");
                // Update Section
                currentSectionId = navJson.sections[s].id;
                currentSectionTitle = navJson.sections[s].title;  
                $("#eloTitle").html(currentSectionTitle);
                // If section switches
                if(dynamicSectionId != currentSectionId) {
                    $("#section" + dynamicSectionId).slideToggle(
                        'medium', function() {
                        $("#section" + currentSectionId).slideToggle(
                            'medium', function() {
                            dynamicSectionId = currentSectionId;
                        });
                    });     
                }
            }
        }
    }
    if (apiIsInitialized) {
        doSetValue('cmi.location', pageId + "|" + currentSectionId + "|" + currentChapterId);
    } else {
        $.jStorage.set("pageIdBookmark"+html5StoragebookTitle, pageId);
        $.jStorage.set("sectionIdBookmark"+html5StoragebookTitle, currentSectionId);
        $.jStorage.set("chapterIdBookmark"+html5StoragebookTitle, currentChapterId);
    }
    // TOC Scroll to active page
    $('#nav-panel--toc #chapterList').scrollTo( $("#page"+pageId), 200, {offset:0}  );
    // Finish Page Init
    $.ajax({
        type: "GET",
        url: pageUrl,
        dataType: "json",
        // async: false,
        success: buildPage
    });
    // Update Progress Bar
    UpdateProgBar(pageId);
}
/*
* Finish building out the page
*/
function buildPage(pageData){
    console.log(pageData);

    // Remove bg img if there is one
    if ($('#page_frame_container').hasClass('imgBG')) {
        $('#page_frame_container').removeClass('imgBG');
        $('#page_frame_container').removeAttr('style');
    } else {};
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
            // '5': function() {
            //     return writeTemplateVocabParagraph(pageData);
            // },
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
            }
        };
        return templates[type]();
    }
    getTemplate(pageData.temp);

    // console.log(modJSON)
    $("html, body, #page_frame").animate({scrollTop:0});
    // update Titles
    $('#eloTitle').text(sectionTitles[pageData.elo]);
    $("#page_frame").find("#pageTitleHeader").text(pageData.title);
    $("#sidebar").find(".pageTitle").html("<div class='scrollText'>" + pageData.title + "</div>");
    $("#page_title_bar").find(".pageTitle").html("<div id='pageTitleWrap'><div class='scrollText'>" + pageData.title + "</div></div>");
    // add in the scolling animation for when the page title is hovered over
    checkPageTitle();
    $(window).resize(checkPageTitle);
    // Init Bookmarks for page
    InitNotes("#page_frame");
    // comment window should adjust on page load
    if (objCommentWindow) {
        if (!objCommentWindow.closed && objCommentWindow.closed != undefined) {
            openComments();
        }
    }
    // Check for eMentor
    eMentor();
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
    var pageTitleWrap = $("#sidebar .pageTitle"),
    pageTitleScroll = $("#sidebar .pageTitle .scrollText"),
    scrollAmount = (pageTitleScroll.width() - pageTitleWrap.width()) + 45,
    animationDuration = (scrollAmount / 100) * 2000;
    //only fire the scrolling animation when its needed
    if ((pageTitleScroll.width() + 15) > pageTitleWrap.width() ){
        pageTitleWrap.addClass('animated');
        // We have to use Jquery to animate since our values will be dynamic
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
    var pageTitleWrapMobile = $("#page_title_bar .pageTitle #pageTitleWrap"),
        pageTitleScrollMobile = $("#page_title_bar .pageTitle .scrollText"),
        scrollAmount = (pageTitleScrollMobile.width() - pageTitleWrapMobile.width()) + 45,
        animationDuration = (scrollAmount / 100) * 2000;
    //only fire the scrolling animation when its needed
    if ((pageTitleScrollMobile.width() + 15) > pageTitleWrapMobile.width() ){
        pageTitleWrapMobile.addClass('animated');
        // We have to use Jquery to animate since our values will be dynamic
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
        pageTitleWrapMobile.removeClass('animated');
        pageTitleScrollMobile.mouseenter(function(){
            $(this).stop();
        }).mouseleave(function(){
            $(this).stop();
        });
    }
}
/*
* Check for eMentor Note 
*/
function eMentor(){
    var ementor = $(".ementor");
    ementorIMG = $(".ementor img");
    if (ementor.length){
        if (ementorIMG.attr("src") == "Images/ementor_dark.gif"){
            ementor.addClass('dark');
        }
    } else {}
}
/*
* For the last page
*/
function lastPageInit() {
  if (apiIsInitialized) {
    doSetStatus("completed");
    doSetValue('cmi.success_status', 'passed');
    doSetValue("adl.nav.request", "continue");
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
* Show Chapter and Section Pages 
* ------------------------------------------------------------------------
*/
/*
* Chapter Pages
*/
function showChapterPages(chapId) {
    if(menuOldChapterSliding || menuNewChapterSliding){
        return;
    } else {
        menuNewChapterSliding = true;
    }
    if(dynamicChapterId != "" && dynamicChapterId != chapId) {
        menuOldChapterSliding = true;
        if(dynamicSectionId != ""){
            showSectionPages(dynamicSectionId);
        }
        $("#chapter" + dynamicChapterId).slideToggle('medium', function() {
            $('#nav-panel--toc #chapterList').scrollTo( $("#chapter" + chapId), 200, {offset:-150}  );
            menuOldChapterSliding = false;
            myScroll.refresh();
        });
    }
    $("#chapter" + chapId).slideToggle('medium', function() {
        if($("#chapter" + chapId).css("display") == "none"){
            dynamicChapterId = "";
        } else {
            dynamicChapterId = chapId;
        }
        menuNewChapterSliding = false;
        myScroll.refresh();
    });
    $("#chapter-"+chapId).siblings().removeClass('active');
    $("#chapter-"+chapId).toggleClass('active');
}
/*
* Section Pages
*/
function showSectionPages(secId) {
    if (secId == 0) {
        secId = "0000";
    }
    if(menuOldSectionSliding || menuNewSectionSliding){
        return;
    } else {
        menuNewSectionSliding = true;
    }
    if(dynamicSectionId != "" && dynamicSectionId != secId) {
        menuOldSectionSliding = true;
        $("#section" + dynamicSectionId).slideToggle('medium', function() {
            $('#nav-panel--toc #chapterList').scrollTo( $("#section" + secId), 200, {offset:-54});
            menuOldSectionSliding = false;
            myScroll.refresh();
        });
    }
    // update Section TOC
    if ($('.navItem').hasClass('active')){
        $('.navItem').removeClass('active');
    }
    $("#section" + secId).slideToggle('medium', function() {
        if($("#section" + secId).css("display") == "none"){
            dynamicSectionId = "";
            $('.navItem').removeClass('active');
        
        } else {
            dynamicSectionId = secId;
            $("#section" + secId).prev().addClass('active');
        }
        menuNewSectionSliding = false;
        myScroll.refresh();
    });
}
/*
* ------------------------------------------------------------------------
* Page Navigation 
* ------------------------------------------------------------------------
*/
/*
* Next Page
*/
function nextPage(pageId) {

    navJson = JSON.parse(sessionStorage.getItem(imiName));

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
                    // console.log(navJson.content.sections[s].pages[p + 1].id);
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

    navJson = JSON.parse(sessionStorage.getItem(imiName));

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
                    getPageData(navJson.content.sections[s].pages[p - 1].id);
                } 
            }
        }
    }
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
    var prgBarStgVals = "";
    var pagesComplete = 0;
    var modulIdTemp = "";
    for(var s = 0; s < navJson.sections.length; s++){
        for(var p = 0; p < navJson.sections[s].pages.length; p++){
            modulIdTemp += navJson.sections[s].pages[p].url;
        }
    }
    moduleIdVal = modulIdTemp.substring(modulIdTemp.indexOf("/") + 1, modulIdTemp.lastIndexOf("_"));
    // get localStorage progBar values if extant and populate pageArray with its values
    // create localStorage progBar key if non-extant and create pageArray
    if (apiIsInitialized) {
        progBarSuspendData = doGetValue("cmi.suspend_data");
        locStgProgBar = progBarSuspendData;
    } else {
        locStgProgBar = localStorage.getItem(moduleIdVal + "progBarArray");
    }
    if ((locStgProgBar == null) || (locStgProgBar.length == 0)) {
        if (pageArray == null) {
            pageArray = new Array();
        }
        for(var s = 0; s < navJson.sections.length; s++){
            for(var p = 0; p < navJson.sections[s].pages.length; p++){
                pageArray.push({ "pageId": navJson.sections[s].pages[p].id, "pageComplete": (navJson.sections[s].pages[p].id == currentPageIdVal) ? true : false });
            }
        }
        UpdateProgBarStorage();
    } else {
        if (pageArray == null) {
            pageArray = new Array();
        }
        prgBarStgVals = locStgProgBar.split("^");
        $.each(prgBarStgVals, function (index, value) {
            var currPair = prgBarStgVals[index].split("~");
            var currPageComplete = (currPair[1] == "true");

            pageArray.push({ "pageId": currPair[0], "pageComplete": currPageComplete });
            pagesComplete = (currPageComplete) ? ++pagesComplete : pagesComplete;
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
    var pagesDone = 0;
    $.each(pageArray, function (index, value) {
        pagesDone += (value.pageComplete) ? 1 : 0;
        if (value.pageId == pageId)
        {
            // page counter
            $("#pageCountBadge").html((index + 1) + " of " + pageArray.length);
            if (!value.pageComplete)
            {
                value.pageComplete = true;
                pagesDone++;
                // for denoting completion in TOC
                $("#page" + pageId).addClass("visited");
            }
        }
    });
    // set progress bar width to reflect stored values
    var widthVal = (pagesDone * 100) / pageArray.length;
    $("#dliProgressBar").prop("aria-valuenow", widthVal).css("width", widthVal + "%");
    UpdateProgBarStorage();
}
/*
* Update Progress Bar Storage
*/
function UpdateProgBarStorage(){
    var keyValPairs = "";
    $.each(pageArray, function (index, value) {
        keyValPairs += (index == 0) ? value.pageId + "~" + value.pageComplete : "^" + value.pageId + "~" + value.pageComplete;
    });
    localStorage.removeItem(moduleIdVal + "progBarArray");
    localStorage.setItem(moduleIdVal + "progBarArray", keyValPairs);
    if (apiIsInitialized) {
        progBarSuspendData = keyValPairs;
        doSetValue("cmi.suspend_data", progBarSuspendData);
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
* Close Panels
*/
function closePanel(){
    $('.nav-panel').removeClass('active').addClass('sliding');
    setTimeout(function() { $('.nav-panel.sliding').removeClass('sliding'); }, 350);
    $("#menu-btn").removeClass('active');
    $("#sidebar-actions .btn").removeClass('active');
    $('#contentCover').removeClass('active');
    if ($('#mobile-wrapper').hasClass('active')){
        $('#mobile-wrapper').removeClass('active').addClass('sliding');
        setTimeout(function() { $('#mobile-wrapper.sliding').removeClass('sliding'); }, 500);;
        $('.hamburger').toggleClass('is-active');
        $('body').toggleClass('no-scroll');
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
        swipeMobilePanels();
        if ($('.nav-panel').hasClass('active') && $("#mobile-wrapper").hasClass('active') != true){
            closePanel();
        }
    // Enable mobile menu & swiping gestures
    } else {
        $("#sidebar-panels").removeAttr("style");
        if ($("#mobile-wrapper").hasClass('active')){
            toggleMobileMenu();
            closePanel();
        } else {
        };
        swipeDesktopPanels();
    }
}
/*
* Swipe actions for Mobile Menu
*/
function swipeMobilePanels(){
  // Enable Swiping on the panels
  $('#nav-panel--toc #chapterList').swipe('enable');
  $('#nav-panel--bookmarks').swipe('enable');
  $('#nav-panel--glossary').swipe('enable');
  $('#nav-panel--help').swipe('enable');
  // Swipe actions for Bookmarks Panel
  $('#nav-panel--toc #chapterList').swipe({
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
  $('#nav-panel--toc #chapterList').swipe('disable');
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
    searchVal = $("#searchBook").val();
    var searchExp = new RegExp(searchVal,"i");
    
    if (searchVal != "search" && searchVal != "" && searchVal.length > 1) {
        
        $("#chapterList").removeClass('active');
        $("#chapterList").addClass('searching');
        $("#searchBar").addClass('searching');
        $("#searchResultsList").addClass('active');
        $("#searchResultsList").scrollTop();
        
        var strSearchBuilder = "";
        var strChapter = "";
        var intCounter = 0;

        for(var s = 0; s < navJson.sections.length; s++){
            for(var p = 0; p < navJson.sections[s].pages.length; p++){
                if(navJson.sections[s].pages[p].title.match(searchExp) != null){
                    strSearchBuilder += '<div class="navPage list-group-item" id="page' + navJson.sections[s].pages[p].id +'" onclick="DisableLanguageToggle(); initPage(' + navJson.sections[s].pages[p].id + ');resetSearch();">' + navJson.sections[s].pages[p].title + '</div>';
                    intCounter++; 
                }
                if (strSearchBuilder != "") {
                    $("#navSearchResults").html("<div class='searchResults list-group-item'>Found " + intCounter + " matches:</div>" + strSearchBuilder);
                } else {
                    $("#navSearchResults").html("<div class='searchResults list-group-item'>No search results.</div>");
                }
            }
        }
    } else {
        $("#navSearchResults").html("<div class='searchResults list-group-item'>Please enter a search term.</div>");
    }
}
/*
* Reset Search
*/
function resetSearch() {
    $('#searchBook').val('');
    $("#searchResultsList").removeClass('active');
    $("#chapterList").removeClass('searching');
    $("#searchBar").removeClass('searching');
    $("#chapterList").addClass('active');
    $('#nav-panel--toc #chapterList').scrollTo( $("#page"+currentPageId), 200, {offset:-150}  );
}
/*
* ------------------------------------------------------------------------
* Glossary actions
* ------------------------------------------------------------------------
*/
/*
* get glossary.html
*/
function loadGlossary(){
    $.ajax({
        type: "GET",
        url: "Includes/glossary.html",
        dataType: "html",
        // async: false,
        success: finishLoadGlossary
    });   
}
/*
* populate the glossary html
*/
function finishLoadGlossary(html){
    $("#glossaryWrapper").html(html);
    $("html, body, #glossaryWrapper").animate({scrollTop:0});
}
/*
* Initialize the glossary and toggle when the panel is opened
*/
function openGlossary() {
    // ecj for glossary language toggle, argument is language specific
    InitializeGlossaryLanguageToggle("pinyin");
    // ecj
}
/*
* open the gloassy done
*/
function InitializeGlossaryLanguageToggle(initLanguage) {
    currentLanguage = initLanguage;
    targetLanguage = initLanguage;
    $('input[name="glossaryLanguageToggle"]').on("switchChange.bootstrapSwitch", function () {
        currentLanguage = (currentLanguage == "termDesc") ? targetLanguage : "termDesc";
        setTimeout(function() { InitGlossary(); }, 350);
    });
    InitGlossary();
}
/*
* ------------------------------------------------------------------------
* Help actions
* ------------------------------------------------------------------------
*/
/*
* get help.html
*/
function openHelp() {
    $.ajax({
        type: "GET",
        url: "Includes/help.html",
        dataType: "html",
        async: true,
        success: finishloadHelp
    });
}
/*
* populate the help html
*/
function finishloadHelp(html) {
    $("#helpWrapper").html(html);
    $("html, body, #nav-panel--help").animate({ scrollTop: 0 });
    loadImageAttribution();
}
/*
* get Image attribution JSON
*/
function loadImageAttribution() {
    $.getJSON("Includes/dataImages.json", function (data) {
        dataImages = data;
        buildImgGrid();
    });
}
/*
* build out image attribution grid/list
*/
function buildImgGrid() {
  $.each(dataImages.images, function(index, image) {
    $('#helpImgNav').append('<li class="media-cc col-6 col-lg-4"><div class="media-cc-img" style="background-image:url(' + image.background + ');" onclick="showImgAttr(' + image.id + ')"></div></li>');
  });
}
/*
* show image attribution info
*/
function showImgAttr(id) {
  // Add the img source
  $('#help-panel-2 img').attr("src", dataImages.images[id].background);
  // Add the img attribution info
  $('#help-panel-2 #imgTitle').html(dataImages.images[id].title);
  $('#help-panel-2 #imgSource').html(dataImages.images[id].source);
  $('#help-panel-2 #imgAuthor').html(dataImages.images[id].author);
  $('#help-panel-2 #imgDate').html(dataImages.images[id].date);
  // Adds an active class to the showcase div
  $('#help-panel-1').removeClass('active');
  $('#help-panel-2').addClass('active');
}
/*
* close image attribution info
*/
function closeImgAttr(id) {
  // removes the active class to the showcase div
  $('#help-panel-1').addClass('active');
  $('#help-panel-2').removeClass('active');
}
/*
* ------------------------------------------------------------------------
* Open Comment Tool
* ------------------------------------------------------------------------
*/
function openComments(focus) {
    objCommentWindow = window.open("./comments/index.php?page_id=" + currentPageId + "&bookTitle=" + encodeURIComponent(modTitle.trim()) + "&pageTitle=" + encodeURIComponent(currentPageTitle.trim()) + "&secTitle=" + encodeURIComponent(currentSectionTitle.trim()) + "&currentLang=" + encodeURIComponent(modLang.trim()), "commentWindow", "width=800,height=600,menubar=no,toolbar=no,status=no,location=no,resizable=yes,scrollbars=yes,directories=no");
    // objCommentWindow = window.open("./comments/index.php?page_id=" + currentPageId + "&chapTitle=" + encodeURIComponent(currentChapterTitle.trim()) + "&bookTitle=" + encodeURIComponent(modTitle.trim()) + "&pageTitle=" + encodeURIComponent(currentPageTitle.trim()) + "&secTitle=" + encodeURIComponent(currentSectionTitle.trim()), "commentWindow", "width=800,height=600,menubar=no,toolbar=no,status=no,location=no,resizable=yes,scrollbars=yes,directories=no");
    // Set the browser window.
    //window.myWin.resizeTo(width, height);
    //window.myWin.moveTo(0, 0);
    if (focus) { window.objCommentWindow.focus(); }
}
/*
* ------------------------------------------------------------------------
* Print actions
* ------------------------------------------------------------------------
*/
function printPreview(){
  closePanel();
  $.printPreview.loadPrintPreview();
}
/*
* ------------------------------------------------------------------------
* IE adjustments
* ------------------------------------------------------------------------
*/
function ieFramework() {
    var contentHeight = $(window).height() - 145;
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
    } else {
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