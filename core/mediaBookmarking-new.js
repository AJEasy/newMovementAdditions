/*
* --------------------------------------------------------------------------
*   mediaBookmarking.js - v1.3
*   author: Eric Johnson
*   created: 6/4/2018
*   last edited: 12/11/2018
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
    //////// for testing
    //CheckAvailableLocalStorageSpace();

    // audio or video template?
    // bmkMediaIsAudio = isBmkMediaAudio;

    // create storage object for this module if non-extant, get its value if it is
    mediaBmkModule = imiName + "-pgMediaBmks"; //bookTitle
    mediaBmkModule = mediaBmkModule.replace(/\s/g, "");
    // console.log("mediaBmkModule: " + mediaBmkModule);

    if (localStorage.getItem(mediaBmkModule) == null) {
        window.localStorage.setItem(mediaBmkModule, "");
    } else {
        mediaBmkString = localStorage.getItem(mediaBmkModule);
    }



    // get previous bookmarks for this page
    var allBmks = mediaBmkString.split("^");
    // value.substring(0, value.indexOf("~")) == currentPageId
    $.each(allBmks, function (index, value) {
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

function WriteBookmarkList() {
    // clear the list
    $("#bookmarkList .bookmark-panel-content .list-group").html("");

    // populate the list
    $.each(pgMediaBmks, function (index, value) {
        //console.log("label: " + value.label + ", time: " + value.time + ", index: " + value.mediaIndex + ", mediaSourceIndex: " + mediaSourceIndex);
        if (value.mediaIndex == mediaSourceIndex) {
            $("#bookmarkList .bookmark-panel-content .list-group").append("<div class='list-group-item bkmkListItem'><div class='bkmkListItemButton' onclick='BookmarkSelected(this);'>" + value.label + "</div><div style='width: 45px;' onclick='DeleteMediaBookmark(this);'><div class='bkmkListItemDelete'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><path class=\"trash-icon\" d=\"M24 52V22.7c0-0.4-0.1-0.7-0.4-1s-0.6-0.4-1-0.4H20c-0.4 0-0.7 0.1-1 0.4s-0.4 0.6-0.4 1V52c0 0.4 0.1 0.7 0.4 1s0.6 0.4 1 0.4h2.7c0.4 0 0.7-0.1 1-0.4S24 52.4 24 52zM34.7 52V22.7c0-0.4-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-2.7c-0.4 0-0.7 0.1-1 0.4s-0.4 0.6-0.4 1V52c0 0.4 0.1 0.7 0.4 1s0.6 0.4 1 0.4h2.7c0.4 0 0.7-0.1 1-0.4S34.7 52.4 34.7 52zM45.3 52V22.7c0-0.4-0.1-0.7-0.4-1s-0.6-0.4-1-0.4h-2.7c-0.4 0-0.7 0.1-1 0.4s-0.4 0.6-0.4 1V52c0 0.4 0.1 0.7 0.4 1s0.6 0.4 1 0.4H44c0.4 0 0.7-0.1 1-0.4S45.3 52.4 45.3 52zM22.7 10.7h18.7l-2-4.9c-0.2-0.2-0.4-0.4-0.7-0.5H25.4c-0.3 0.1-0.5 0.2-0.7 0.5L22.7 10.7zM61.3 12v2.7c0 0.4-0.1 0.7-0.4 1S60.4 16 60 16h-4v39.5c0 2.3-0.7 4.3-2 6S51.2 64 49.3 64H14.7c-1.8 0-3.4-0.8-4.7-2.4S8 58 8 55.7V16H4c-0.4 0-0.7-0.1-1-0.4s-0.4-0.6-0.4-1V12c0-0.4 0.1-0.7 0.4-1s0.6-0.4 1-0.4h12.9l2.9-7c0.4-1 1.2-1.9 2.2-2.6C23.1 0.4 24.2 0 25.3 0h13.3c1.1 0 2.2 0.4 3.3 1.1 1.1 0.7 1.8 1.6 2.2 2.6l2.9 7H60c0.4 0 0.7 0.1 1 0.4S61.3 11.6 61.3 12z\"/></svg></div><div></div>");
        }
    });
}

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

    if ($("#bookmarkList").hasClass('active')) {
        $("#bookmarkList").removeClass('active');
    }

    $("#bookmarkSave").toggleClass('active');
    $('#bookmarkLabel').focus();
}

function AddMediaBookmark(valIn) {
    var doAdd = true;
    var valInMod = DeStringer(valIn);

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

    if (doAdd) {
        // add to persistent bookmarks
        if (mediaBmkString.length > 0) {
            mediaBmkString += "^";
        }

        mediaBmkString += currentPageId + "~" + valInMod + "`" + pgMedia.prop("currentTime") + "*" + mediaSourceIndex;
        localStorage.setItem(mediaBmkModule, mediaBmkString);

        var currObj = new Object();
        currObj.label = valInMod;
        currObj.time = pgMedia.prop("currentTime");
        currObj.mediaIndex = mediaSourceIndex;

        // add to page bookmarks
        pgMediaBmks.push(currObj);
        WriteBookmarkList();
        //$("#bookmarkList .bookmark-panel-content .list-group").append("<span style='display: inline; cursor: default;' class='list-group-item'><button type='button' class='btn btn-outline-danger btn-rounded fa fa-trash-o' onclick='DeleteMediaBookmark(this);' ></button >&nbsp;<button class='btn bkmkListItemButton' style='width: 85%; text-align: left;' onclick='BookmarkSelected(this);'>" + valInMod + "</button></span > ");

        $("#bookmark-list-btn").prop("disabled", false);
        $("#audioBookmarkModal").modal("hide");
        addBmkBtn.prop("disabled", true);
        bmkLabel.val("");

        if (bmkMediaIsAudio) {
            $(".aud").addClass('bookmarked');
        } else {
            $(".vid").addClass('bookmarked');
        }

        closeBookmarkPanel();
    }
}

function DeleteMediaBookmark(bkmkToDelete) {
    var delBkMk = DeStringer($(bkmkToDelete).prev().html());

    // remove from list
    $(".bkmkListItemButton").each(function () {
        if (DeStringer($(this).html()) == delBkMk) {
            $(this).parent().remove();
        }
    });

    // remove from localStorage
    var allBmks = mediaBmkString.split("^");

    // value.substring(0, value.indexOf("~")) == currentPageId



    $.each(allBmks, function (index, value) {
        if (value.substring(0, 1) == currentPageId.substring(0, 1)) {
            var bmkPageId = value.substring(0, 4);
            var bmkKeyVal = value.replace(bmkPageId + "~", "").split("`");
            if (bmkKeyVal[0] == delBkMk) {
                var isFirst = (mediaBmkString.charAt(mediaBmkString.indexOf(value) - 1) == "") ? true : false;
                var isLast = (mediaBmkString.charAt(mediaBmkString.indexOf(value) + value.length) == "") ? true : false;

                if (isFirst && isLast) {
                    mediaBmkString = mediaBmkString.replace(value, "");
                } else if (isFirst) {
                    mediaBmkString = mediaBmkString.replace(mediaBmkString.substring(0, value.length + 1), "");
                } else {
                    mediaBmkString = mediaBmkString.replace(mediaBmkString.substr((mediaBmkString.indexOf(value) - 1), value.length + 1), "");
                }

                localStorage.setItem(mediaBmkModule, mediaBmkString);
            }
        }
    });
    // remove from pgMediaBmks
    $.each(pgMediaBmks, function (index, value) {
        if (pgMediaBmks[index].label == delBkMk) {
            pgMediaBmks.splice(index, 1);
            return false; // breaks out of loop
        }
    });

    if (Object.keys(pgMediaBmks).length == 0) {
        if (bmkMediaIsAudio) {
            $(".aud").removeClass('bookmarked');
        } else {
            $(".vid").removeClass('bookmarked');
        }

        if ($("#bookmarkList").hasClass('active')) {
            $("#bookmarkList").removeClass('active');
        }
    }
}

function openBookmarkList() {
    // pause audio if playing
    var mediaPlayer = (bmkMediaIsAudio) ? "#activityAudio" : "#activityVideo";

    if (!$(mediaPlayer).prop("paused")) {
        $(mediaPlayer)[0].pause();
    }

    if ($("#bookmarkSave").hasClass('active')) {
        $("#bookmarkSave").removeClass('active');
    }
    $("#bookmarkList").toggleClass('active');
}

function DeStringer(valIn) {
    return valIn.replace(/"/gi, "&quot;").replace(/'/gi, "&apos;");
}

function BmLabelNameChange() {
    // enable add bookmark button if there's text in the label field, disable if not
    addBmkBtn.prop("disabled", (bmkLabel.val().length > 0) ? false : true);
}

function BookmarkSelected(valIn) {
    $.each(pgMediaBmks, function (index, value) {
        if (value.label == DeStringer($(valIn).html())) {
            pgMedia[0].currentTime = value.time;
            pgMedia[0].play();
            return false;
        }
    });

    closeBookmarkPanel();
}

function closeBookmarkPanel() {
    $(".bookmark-panel").removeClass('active');
}

function CheckAvailableLocalStorageSpace() {
    //////// for testing
    //localStorage.clear();

    //$.each(localStorage, function (index, value) {
    //    console.log("index: " + index + ", value: " + value);
    //});
    //////// for testing

    //////// for production
    var currData = "";

    $.each(localStorage, function (index, value) {
        currData += value;
    });

    // available space in kb
    return (5120 - ((currData.length * 16) / 8192).toFixed());
    //////// for production
}