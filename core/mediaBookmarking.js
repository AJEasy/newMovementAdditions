/*
* --------------------------------------------------------------------------
*   mediaBookmarking.js - v2.0
*   author: Advancia Technologies and Eric Johnson
*   created: 6/4/2018
*   last edited: 2/20/2021
*   Copyright 2021, Advancia Technologies, All rights reserved.
* --------------------------------------------------------------------------
*/
/*
* ------------------------------------------------------------------------
* Media Bookmark Variables 
* ------------------------------------------------------------------------
*/
var bmkMediaIsAudio = false;
var pgMedia = null;
var bmkLabel = null;
var addBmkBtn = null;
var mediaBmkModule = "";
var pgMediaBmks = new Array();
/*
* ------------------------------------------------------------------------
* Initialize Media Bookmarks 
* ------------------------------------------------------------------------
*/
function InitializePageMediaBookmarking(isBmkMediaAudio) {
    // create storage object for this module if non-extant, get its value if it is
    mediaBmkModule = imiName + "-pgMediaBmks"; //bookTitle
    mediaBmkModule = mediaBmkModule.replace(/\s/g, "");
    // check for existing bookmark data
    if (localStorage.getItem(mediaBmkModule) == null) {
        window.localStorage.setItem(mediaBmkModule, "");
    } else {
        mediaBmkString = localStorage.getItem(mediaBmkModule);
    }
    // get previous bookmarks for this page
    var allBmks = mediaBmkString.split("^");
    // loop through all of the bookmarks
    $.each(allBmks, function (index, value) {
        // if bookmark is for the shared media for matching elo
        if (value.substring(0, 1) == currentPageId.substring(0, 1)) {
            var keyVals = value.substring(value.indexOf("~") + 1).split("`");
            var vals = keyVals[1].split("*");
            var currObj = new Object();
            currObj.label = keyVals[0];
            currObj.time = vals[0];
            currObj.mediaIndex = vals[1];
            // add to page bookmarks
            pgMediaBmks.push(currObj);
        }
    });
    // if bookmarks exist, write to listing
    if (pgMediaBmks.length > 0) {
        WriteBookmarkList();
        if (bmkMediaIsAudio) {
            $(".aud").addClass('bookmarked');
        } else {
            $(".vid").addClass('bookmarked');
        }
    }
    // disable delimiter input in bookmark labels
    $("input").keypress(function (e) {
        var chr = String.fromCharCode(e.which);
        if ("~^`*".indexOf(chr) >= 0)
            return false;
    });
    // media player
    if (bmkMediaIsAudio) {
        pgMedia = $("#activityAudio");
    } else {
        pgMedia = $("#activityVideo");
    }
    // bookmark label in modal
    bmkLabel = $('#bookmarkLabel');
    bmkLabel.on("input", BmLabelNameChange);
    // add bookmark button
    addBmkBtn = $("#addBmkButton");
}
/*
* ------------------------------------------------------------------------
* Build out listing
* ------------------------------------------------------------------------
*/
function WriteBookmarkList() {
    // clear the list
    $("#bookmarkList .bookmark-panel-content .list-group").html("");
    // populate the list
    $.each(pgMediaBmks, function (index, value) {
        // if the bookmark matches the media, list the bookmark
        if (value.mediaIndex == mediaSourceIndex) {
            $("#bookmarkList .bookmark-panel-content .list-group").append("<div class='list-group-item bkmkListItem'><div class='bkmkListItemButton' onclick='BookmarkSelected(this);'>" + value.label + "</div><div style='width: 45px;' onclick='DeleteMediaBookmark(this);'><div class='bkmkListItemDelete'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><path class=\"trash-icon\" d=\"M24 52V22.7c0-0.4-0.1-0.7-0.4-1s-0.6-0.4-1-0.4H20c-0.4 0-0.7 0.1-1 0.4s-0.4 0.6-0.4 1V52c0 0.4 0.1 0.7 0.4 1s0.6 0.4 1 0.4h2.7c0.4 0 0.7-0.1 1-0.4S24 52.4 24 52zM34.7 52V22.7c0-0.4-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-2.7c-0.4 0-0.7 0.1-1 0.4s-0.4 0.6-0.4 1V52c0 0.4 0.1 0.7 0.4 1s0.6 0.4 1 0.4h2.7c0.4 0 0.7-0.1 1-0.4S34.7 52.4 34.7 52zM45.3 52V22.7c0-0.4-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-2.7c-0.4 0-0.7 0.1-1 0.4s-0.4 0.6-0.4 1V52c0 0.4 0.1 0.7 0.4 1s0.6 0.4 1 0.4H44c0.4 0 0.7-0.1 1-0.4S45.3 52.4 45.3 52zM22.7 10.7h18.7l-2-4.9c-0.2-0.2-0.4-0.4-0.7-0.5H25.4c-0.3 0.1-0.5 0.2-0.7 0.5L22.7 10.7zM61.3 12v2.7c0 0.4-0.1 0.7-0.4 1S60.4 16 60 16h-4v39.5c0 2.3-0.7 4.3-2 6S51.2 64 49.3 64H14.7c-1.8 0-3.4-0.8-4.7-2.4S8 58 8 55.7V16H4c-0.4 0-0.7-0.1-1-0.4s-0.4-0.6-0.4-1V12c0-0.4 0.1-0.7 0.4-1s0.6-0.4 1-0.4h12.9l2.9-7c0.4-1 1.2-1.9 2.2-2.6C23.1 0.4 24.2 0 25.3 0h13.3c1.1 0 2.2 0.4 3.3 1.1 1.1 0.7 1.8 1.6 2.2 2.6l2.9 7H60c0.4 0 0.7 0.1 1 0.4S61.3 11.6 61.3 12z\"/></svg></div><div></div>");
        }
    });
}
/*
* ------------------------------------------------------------------------
* Show input for bookmark creation
* ------------------------------------------------------------------------
*/
function SaveBtnSelected() {
    // pause media if playing
    if (!pgMedia.prop("paused")) {
        pgMedia[0].pause();
    }
    // determine if there is enough localStorage space available
    if (CheckAvailableLocalStorageSpace() < 1000) {
        $("#errorMessageText").html("You are nearing the limit of storage space for media bookmarks. Consider deleting some existing bookmarks.");
        $("#errorMessageModal").modal('show');
        return;
    }
    // hide the listing panel
    if ($("#bookmarkList").hasClass('active')) {
        $("#bookmarkList").removeClass('active');
    }
    // set focus to add bookmark input
    $("#bookmarkSave").toggleClass('active');
    $('#bookmarkLabel').focus();
}
/*
* ------------------------------------------------------------------------
* Add bookmark to listing
* ------------------------------------------------------------------------
*/
function AddMediaBookmark(valIn) {
    // set bookmark variables
    var doAdd = true;
    var valInMod = DeStringer(valIn);
    // loop through bookmarks to ensure no duplicates are created
    $.each(pgMediaBmks, function (key, value) {
        if (key == valInMod) {
            doAdd = false;
            $("#errorMessageText").html("A bookmark with that name already exists");
            $("#errorMessageModal").modal('show');
        } else if (value == pgMedia.prop("currentTime")) {
            doAdd = false;
            $("#errorMessageText").html("A bookmark for this time stamp already exsists");
            $("#errorMessageModal").modal('show');
        }
    });
    // if eval is good
    if (doAdd) {
        // add to persistent bookmarks
        if (mediaBmkString.length > 0) {
            mediaBmkString += "^";
        }
        // build/add to bookmark string
        mediaBmkString += currentPageId + "~" + valInMod + "`" + pgMedia.prop("currentTime") + "*" + mediaSourceIndex;
        // store bookmark string
        localStorage.setItem(mediaBmkModule, mediaBmkString);
        // build out listing object
        var currObj = new Object();
        currObj.label = valInMod;
        currObj.time = pgMedia.prop("currentTime");
        currObj.mediaIndex = mediaSourceIndex;
        // add to page bookmarks
        pgMediaBmks.push(currObj);
        WriteBookmarkList();
        // enable bookmark listing
        $("#bookmark-list-btn").prop("disabled", false);
        $("#audioBookmarkModal").modal("hide");
        // reset add bookmark input and button
        addBmkBtn.prop("disabled", true);
        bmkLabel.val("");
        // add bookmarked class to media
        if (bmkMediaIsAudio) {
            $(".aud").addClass('bookmarked');
        } else {
            $(".vid").addClass('bookmarked');
        }
        // close the add bookmark panel
        closeBookmarkPanel();
    }
}
/*
* ------------------------------------------------------------------------
* Remove bookmark to listing
* ------------------------------------------------------------------------
*/
function DeleteMediaBookmark(bkmkToDelete) {
    // set delete bookmark variable
    var delBkMk = DeStringer($(bkmkToDelete).prev().html());
    // remove from list
    $(".bkmkListItemButton").each(function () {
        if (DeStringer($(this).html()) == delBkMk) {
            $(this).parent().remove();
        }
    });
    // remove from localStorage
    var allBmks = mediaBmkString.split("^");
    // loop through bookmarks listing
    $.each(allBmks, function (index, value) {
        // if bookmark is for the shared media for matching elo
        if (value.substring(0, 1) == currentPageId.substring(0, 1)) {
            // define current bookmark values
            var bmkPageId = value.substring(0, 4);
            var bmkKeyVal = value.replace(bmkPageId + "~", "").split("`");
            // if delete and current match, delete
            if (bmkKeyVal[0] == delBkMk) {
                // check if it is the first or last item listed
                var isFirst = (mediaBmkString.charAt(mediaBmkString.indexOf(value) - 1) == "") ? true : false;
                var isLast = (mediaBmkString.charAt(mediaBmkString.indexOf(value) + value.length) == "") ? true : false;
                // only one bookmark is present
                if (isFirst && isLast) {
                    mediaBmkString = mediaBmkString.replace(value, "");
                } 
                // removeing the first bookmark listed
                else if (isFirst) {
                    mediaBmkString = mediaBmkString.replace(mediaBmkString.substring(0, value.length + 1), "");
                }
                // remove the bookmark
                else {
                    mediaBmkString = mediaBmkString.replace(mediaBmkString.substr((mediaBmkString.indexOf(value) - 1), value.length + 1), "");
                }
                // update media bookmark storage
                localStorage.setItem(mediaBmkModule, mediaBmkString);
            }
        }
    });
    // remove bookmark from pgMediaBmks array
    $.each(pgMediaBmks, function (index, value) {
        if (pgMediaBmks[index].label == delBkMk) {
            pgMediaBmks.splice(index, 1);
            return false; // breaks out of loop
        }
    });
    // if there are no longer any bookmarks
    if (Object.keys(pgMediaBmks).length == 0) {
        // remove bookmarked class
        if (bmkMediaIsAudio) {
            $(".aud").removeClass('bookmarked');
        } else {
            $(".vid").removeClass('bookmarked');
        }
        // hide the bookmark listing
        if ($("#bookmarkList").hasClass('active')) {
            $("#bookmarkList").removeClass('active');
        }
    }
}
/*
* ------------------------------------------------------------------------
* Show bookmark listing
* ------------------------------------------------------------------------
*/
function openBookmarkList() {
    // pause audio if playing
    var mediaPlayer = (bmkMediaIsAudio) ? "#activityAudio" : "#activityVideo";
    if (!$(mediaPlayer).prop("paused")) {
        $(mediaPlayer)[0].pause();
    }
    // remove active class from the bookmark save button
    if ($("#bookmarkSave").hasClass('active')) {
        $("#bookmarkSave").removeClass('active');
    }
    // show the bookmark listing
    $("#bookmarkList").toggleClass('active');
}
/*
* ------------------------------------------------------------------------
* Additional Functions
* ------------------------------------------------------------------------
*/
// clean up item if quotes are present
function DeStringer(valIn) {
    return valIn.replace(/"/gi, "&quot;").replace(/'/gi, "&apos;");
}
// only allow additon of bookmark if there is some text in the input field
function BmLabelNameChange() {
    // enable add bookmark button if there's text in the label field, disable if not
    addBmkBtn.prop("disabled", (bmkLabel.val().length > 0) ? false : true);
}
// Go to bookmark in the current media
function BookmarkSelected(valIn) {
    // loop through and match the right bookmark
    $.each(pgMediaBmks, function (index, value) {
        if (value.label == DeStringer($(valIn).html())) {
            // set the playhead to bookmarked time
            pgMedia[0].currentTime = value.time;
            // play the media
            pgMedia[0].play();
            return false;
        }
    });
    // close the bookmark listing panel
    closeBookmarkPanel();
}
// closes any open media bookmark panel
function closeBookmarkPanel() {
    $(".bookmark-panel").removeClass('active');
}
// Evaluate if there is any additional storage space
function CheckAvailableLocalStorageSpace() {
    var currData = "";
    $.each(localStorage, function (index, value) {
        currData += value;
    });
    return (5120 - ((currData.length * 16) / 8192).toFixed());
}
