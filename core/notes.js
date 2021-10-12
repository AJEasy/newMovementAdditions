/*
* --------------------------------------------------------------------------
*   notes.js - v1.4
*   author: Craig Tech Inc. & Sean Dooley
*   created: 3/12/2018
*   last edited: 04/07/2019
* --------------------------------------------------------------------------
*/
var maxTweetCharacters = 140;   //Twitter max is 140
var maxSnippetCharacters = 140; //how big the higlight snippet is in a note
                                //entry.  0 is unlimited.
var totalNotes = 0;
var totalNotesKeyBase = "hl_total_notes";
var totalNotesKey = "";
var loadScrollTarget = null;

//this defines how the highlight lists look
var eph = 4; //Entries Per Highlight in the container lists
var idx_offset = 0;
var idx_text = 1;
var idx_linked = 2;
var idx_ref = 3;

//highlighter info
var markupLength; //length of the markup used by the highlighter.
var highlightClass = ".highlighted"; //plugin default

var docSelector;     //jQuery selector string to get the document.
var activeDocument;  //jQuery object of whatever we're actually highlighting
var activeDocKey;    //storage key for the doc, also prefix for container
var markFix = "hl";  //prefix for the storage keys
var noteFix = "n";   //appended to the doc key when making note keys

var bookmarkPanel;
var controlBookmarkClear;

var notePanel;
var controlNoteClear;
//add controls are currently hard-coded pending sorting out how the heck
//to get some semblance of a true closure

var noteCreationHighlights; //if a user requests creation of a note, we will
                            //hold onto the relevant highlights here
var noteConvertHighlight;   //if they want to CONVERT to a note, we hold those
                            //here.  These don't get blapped if they cancel.

/*******************
* From xmlLoad.js
*/
// currentChapterId
// currentPageId
// html5StoragebookTitle

/*******************
* From index
*/
// $frameDocument

/*******************
* From somewhere...
*/
// $.jStorage

/*******************************************************************************
* _RefreshDoc
*
* Gets the current contents of the container specified by docSelector and
* assigns it as the activeDocument
*/
function _RefreshDoc(){
    this.activeDocument = $(this.docSelector);//.contents();
}//_RefreshDoc

/*******************************************************************************
* InitNotes
*
* Initializes the notes system for the provided document.  This method should
* be called each time a new document is loaded (be it a top-level page or
* an iframe).
*/
function InitNotes(docSelector) {
    var highlighter;

    if ($.jStorage.storageAvailable())  {
        this.docSelector = docSelector;
        this._RefreshDoc();

        this.activeDocKey = this._BuildDocKey();

        highlighter = this._GetHighlighter();
        if(null == highlighter){
            alert("no highlighter found, cannot initialize notes");
            return;
        }
				this.totalNotesKey = this.totalNotesKeyBase + this.activeDocKey;
        this.totalNotes = $.jStorage.get(this.totalNotesKey);
        if(null == this.totalNotes){
            this.totalNotes = 0;
        }

        this.markupLength = highlighter.getWrapper().outerHTML.length;
        this.noteCreationHighlights = null;
        this.noteConvertHighlight = null;

        this.bookmarkPanel = $("#bookmarks");
        //this.controlBookmarkAdd = $("#add_bookmark");
        this.controlBookmarkClear = $("#clear_bookmarks");

        this.notePanel = $("#notes");
        //this.controlNoteAdd = $("#add_note");
        this.controlNoteClear = $("#clear_notes");

        this._RestoreHighlights();
        if(null != this.loadScrollTarget){
            this.ScrollToHighlight(this.loadScrollTarget);
            this.loadScrollTarget = null;
        }
    } else {
        // alert("Notes and Bookmarking require HTML5 features which are not " +
        //       "supported by your browser.");
    }

    return;
}//initNotes

/*******************************************************************************
* _GetHighlighter
*
* Utility Function to grab the current highlighter just in case we change how
* we grab it...  If no highlighter is found, we try to create one.
*/
function _GetHighlighter(){
    var rv = null;

    this._RefreshDoc()

    if(null != this.activeDocument){
        rv = this.activeDocument.getHighlighter();

		    if(null == rv || undefined == rv){
            //this.activeDocument.textHighlighter({manual:true});
		        this.activeDocument.textHighlighter(
                {mode:"deferred", onAfterRange:this.SetAddControls});
            rv = this.activeDocument.getHighlighter();
        }
    }

    return rv;
}//_GetHighlighter

/*******************************************************************************
* _BuildDocKey
*
* Utility function to build a storage key for document information.
* Uses html5StoragebookTitle from xmlLoad.js
*/
function _BuildDocKey(suffix){
    return markFix + ":" + html5StoragebookTitle.replace("_",":");
}//_BuildDocKey

/*******************************************************************************
* _BuildTreePath
*
* Traces the ancestry of the provided jQuery to this.activeDocument and returns
* the information as a string.  This will be used to identify container elements
* and to find them again upon restore.  The string itself is not a jQuery
* value, while it should in theory be possible to build a selector the
* information for basic tree traversal is more compact.  We are, however,
* going to go all the way up the jQuery tree (which is really 2 levels
* more than strictly required, but I'd rather not get caught out by a change
* in the html structure).
*
* Note that if we don't get a jQuery, we'll convert element into one, so
* this can be called on DOM objects as well.  Anything else and expect
* trouble, however...
*/
function _BuildTreePath(element){
    var rv = "";
    var parent;

    //convert any DOM objects into jQueries.
    //TODO: make sure it's a DOM object...
    if(!(element instanceof jQuery)){
        element = $(element);
    }
    parent = element.parent();

    //if we didn't get a parent, something's wrong, so bail
    if(null == parent){
        return;
    }

    //get our index information
    rv = parent.children().index(element);
    if(!parent.is(this.activeDocument)){
        //need to go a bit higher
        rv = this._BuildTreePath(parent) + "_" + rv;
    }

    return rv;
}//_BuildTreePath

/*******************************************************************************
* _ReadTreePath
*
* Opposite of _BuildTreePath.  Takes a path array and traverses from the node
* to find the desired jQuery.
*/
function _ReadTreePath(path, node){
    var rv = null;
    var index;

    if(!node){
        return rv;
    }

    //just in case...
    if(!(node instanceof jQuery)){
        node = $(node);
    }

    index = path.shift();
    if(undefined != index){
        rv = this._ReadTreePath(path, node.children().get(index));
    } else {
        rv = node;
    }

    return rv;
}//_ReadTreePath

/*******************************************************************************
* _BuildConKey
*
* Utility function to build a container key.  If no argument is provided the
* current document-level key is returned.  If an element is provided the
* path will be generated and appended to the document-level key.
*/
function _BuildConKey(node){
    var rv = this.activeDocKey + "_" + currentPageId +
        "_" + currentPageNum;

    if(node){
        rv += "," + this._BuildTreePath(node);
    }

    return rv;
}//_BuildConKey

/*******************************************************************************
* _ReadConKey
*
* Reads a container key from _BuildConKey and returns a hash with the chapter,
* page id, and path array.
*/
function _ReadConKey(k){
    var rv = {};
    var key = k.split(",");
    var docPart;
    var pathPart;

    docPart = key[0].split("_");
    pathPart = key[1].split("_");

    rv["chapter"] = docPart[1];
    rv["pageId"] = docPart[2];
    rv["pageNum"] = docPart[3];
    rv["path"] = pathPart;

    return rv;
}//_ReadConKey

/*******************************************************************************
* _SortConKeys
*
* Function meant to be used as an Array.sort parameter to sort a list of
* container keys into a toc/document order.
*
* A return value of < 0 means a is before b, > 0 means b is before a.
*/
function _SortConKeys(a, b){
    var aInfo = _ReadConKey(a);
    var bInfo = _ReadConKey(b);
    var curPart = 0;
    var rv = aInfo["pageNum"] - bInfo["pageNum"];

    if(0 == rv){
        while(0 == rv &&
              curPart < aInfo["path"].length &&
              curPart < bInfo["path"].length){
            rv = aInfo["path"][curPart] - bInfo["path"][curPart];
            curPart++;
        }
        //if rv is still 0, one container is inside the other.  Parents
        //before children.
        if(0 == rv){
            rv = aInfo["path"].length - bInfo["path"].length;
        }
    }

    return rv;
}//_SortConKeys

/*******************************************************************************
* _ConKeyContainsKey
*
* Returns a value based on if the container referenced by the first key either
* contains (1) or is contained by (-1) the one referenced by the second key.
*
* If neither key is a descendant of the other, returns 0.
*/
function _ConKeyContainsKey(a, b){
    var aInfo = _ReadConKey(a);
    var bInfo = _ReadConKey(b);
    var curPart = 0;
    var rv = 0;

    if(aInfo["pageNum"] == bInfo["pageNum"]){
        while(curPart < aInfo["path"].length &&
              curPart < bInfo["path"].length){
            if(aInfo["path"][curPart] != bInfo["path"][curPart]){
                break;
            }
            curPart++;
        }
        if(aInfo["path"].length == curPart ||
           bInfo["path"].length == curPart){
            rv = bInfo["path"].length - aInfo["path"].length;
        }
    }

    return rv;
}//_ConKeyContainsKey

/*******************************************************************************
* _BuildHighlightKey
*
* Builds a key for the provided highlight element.  This is the container key
* for the highlight's parent, plus the highlight's index in that container's
* collection of highlights.
*/
function _BuildHighlightKey(highlight){
    var rv;
    var container;

    if(null != highlight){
        container = $(highlight).parent();
        rv = this._BuildConKey(container);
        rv += "_" +
            container.children(this.highlightClass).index($(highlight));
    }

    return rv;
}//_BuildHighlightKey

/*******************************************************************************
* _BuildHighlightkeyFromConKey
*
* Method to use when we have a container key and a hlighlight index already,
* and might not have the actual highlight reference (such as building the TOC).
*/
function _BuildHighlightKeyFromConKey(conKey, hNum){
    return conKey + "_" + hNum;
}//_BuildHighlightKeyFromConKey

/*******************************************************************************
* _ReadHighlightKey
*
* Returns a hash containing the container key and highlight num of the provided
* highlight key (as built by _BuildHighlightKey).
*
* Returns:
*  {
*    containerKey:String,
*    num:Number
*  }
*/
function _ReadHighlightKey(hKey){
    var rv = {};
    var localKey = hKey.split("_");

    rv["num"] = localKey.pop();
    rv["containerKey"] = localKey.join("_");

    return rv;
}//_ReadHighlightKey

/*******************************************************************************
* _BuildNoteKey
*
* Utility function to build a note key.  Uses the note count to do so.
*/
function _BuildNoteKey(){
    var rv = this.activeDocKey + "_" + this.noteFix + "_" + this.totalNotes;
    $.jStorage.set(this.totalNotesKey, this.totalNotes);
    return rv;
}//_BuildNoteKey

/*******************************************************************************
* _GetContainerByKey
*
* Method to read a container's path from a storage key and return the correct
* jQuery.
*/
function _GetContainerByKey(containerKey){
    var info;
    var rv = null;

    info = this._ReadConKey(containerKey);

    if(currentPageId == info["pageId"]){
        rv = this._ReadTreePath(info["path"], this.activeDocument);
    }

    return rv;
}//_GetContainerByKey

/*******************************************************************************
* _SetControlStates
*
* Sets the add and clear control states for bookmarks and notes based on if
* there are highlights and if there are existing notes/bookmarks.
*/
function _SetControlStates(){
    var highlighter = this._GetHighlighter();

    this.SetAddControls(highlighter.hasRange());

    if("" != this.bookmarkPanel.html()){
        this.controlBookmarkClear.prop("disabled","");
    } else {
        this.controlBookmarkClear.prop("disabled","disabled");
    }
    if("" != this.notePanel.html()){
        this.controlNoteClear.prop("disabled","");
    } else {
        this.controlNoteClear.prop("disabled","disabled");
    }
}//_SetControlStates

/*******************************************************************************
* SetAddControls
*
* Sets the disabled property of the add controls based on the value provided.
*/
function SetAddControls(enable){
    if(enable){
        $("#add_bookmark").prop("disabled","");
        $("#add_note").prop("disabled","");
    } else {
        $("#add_bookmark").prop("disabled","disabled");
        $("#add_note").prop("disabled","disabled");
    }
}//SetAddControls

/*******************************************************************************
* _BuildBookmarkEntry
*
* Builds TOC markup for a bookmark with the provided data, inculding
* the container/highlight indices in the relevant page's DOM.
*/
function _BuildBookmarkEntry(hId, hText){
    var rv = "<div class=\"navItem bookmark card\">";
    var trimKey = html5StoragebookTitle.length + 4;
    var bookmarkPageID = hId.substr(trimKey, 4);
    
    // get section array number
    var bkSecNum = parseInt(bookmarkPageID[0]);
    // get page array number
     var bkPageNum = bookmarkPageID[1] + bookmarkPageID[2];
    bkPageNum = parseInt(bkPageNum) - 1;
    // get page data
    if(sessionStorage){
        var bookmarkPageTitle = JSON.parse(sessionStorage.getItem(imiName));
        // update pageData to reflect the page object
        bookmarkPageTitle = bookmarkPageTitle.content.sections[bkSecNum].pages[bkPageNum].title;
    } else {
        // update pageData to reflect the page object
        var bookmarkPageTitle = modJSON.content.sections[bkSecNum].pages[bkPageNum].title;
    }

    rv += "<button type='button' class='close' aria-label='Close' onclick=\"DeleteBookmark('" + hId + "')\"" + "href=\"javascript:void(0);\"><span aria-hidden='true'>&times;</span></button><div class='card-header'><span onclick=\"ScrollToHighlight('" + hId + "');\"><svg xmlns='http://www.w3.org/2000/svg' aria-label='bookmark-icon' viewBox='0 0 64 64'><path d='M54.2 0c0.6 0 1.3 0.1 1.9 0.4 0.9 0.4 1.7 0.9 2.2 1.7 0.5 0.8 0.8 1.7 0.8 2.6v54.5c0 1-0.3 1.8-0.8 2.6 -0.5 0.8-1.3 1.4-2.2 1.7 -0.5 0.2-1.2 0.3-1.9 0.3 -1.4 0-2.5-0.5-3.5-1.4L32 44.7 13.3 62.6c-1 0.9-2.2 1.4-3.5 1.4 -0.6 0-1.3-0.1-1.9-0.4 -0.9-0.4-1.7-0.9-2.2-1.7 -0.5-0.8-0.8-1.7-0.8-2.6V4.7c0-1 0.3-1.8 0.8-2.6S7 0.7 8 0.4C8.6 0.1 9.2 0 9.8 0H54.2z'/></svg>" + bookmarkPageTitle + "</span></div>";

    /*rv += "<a onclick=\"ConvertToNote('" + hId +
        "');\" href=\"javascript:void(0);\"><img src=\"" +
        "Images/icon_convert.png\" border=\"0\" title=\"" +
        "Convert to Note\" alt=\"Convert to Note\" /></a>";*/

    rv += "<div class='card-body'>" + hText + "</div></div>";

    return rv;
}//_BuildBookmarkEntry

/*******************************************************************************
* _BuildNoteEntry
*
* Build TOC markup for a note with the provided data.
* hCount is the highlight # on the relevant page
*/
function _BuildNoteEntry(noteKey, hId, nText, hText){
    var rv = "<div class=\"navItem note\">";

    if(0 < this.maxSnippetCharacters &&
       hText.length > this.maxSnippetCharacters){
        hText = hText.slice(0, this.maxSnippetCharacters-3) + "...";
    }

    rv += "<a onclick=\"DeleteNote('" + noteKey + "')\"" +
        "href=\"javascript:void(0);\"><img src=\"Images/redX.gif\" " +
        "border=\"0\" title=\"Remove this note!\" alt=\"" +
        "Remove this note!\" /></a> ";

	rv += "<a href=\"http://www.facebook.com\" target=\"_blank\"><img src=\"Images/fb.png\" title=\"Open Facebook\" /></a>";
	rv += "<a href=\"mailto:you@you.com?subject=Saved%20Note&body="+ nText + "%0A%0A" + hText + "\" target=\"_blank\"><img src=\"Images/mail.png\" title=\"eMail Note\" /></a>";

    if(nText.length <= this.maxTweetCharacters){
        rv += "<a href=\"https://twitter.com/share?text=" + 
            encodeURIComponent(nText) +
            "\" target=\"_blank\" class=\"custom-tweet-button\" >" +
            "<img src=\"Images/twitter.png\" border=\"0\" " +
            "title=\"Tweet this note!\" alt=\"Tweet this note!\" /></a>";
    }

    rv += "<span onclick=\"ScrollToHighlight('" + hId + "');\">" +
        "<p class=\"noteText\">" + nText +"</p><p class=\"noteSnippet\">" + 
        hText + "</p></span></div>";

    return rv;

            /*Twitter button (has to be less than 140 characters)
              if (arrNotes[i].length <= 140) {
              strBuilder += '<a href="https://twitter.com/share?text=' + arrNotes[i] +'" target="_blank" class="custom-tweet-button" ><img src="Images/tweet_button.gif" border="0" title="Tweet this note!" alt="Tweet this note!" /></a> ';   
              }*/

}//_buildNoteEntry

/*******************************************************************************
* PopulateTOC
*
* Method to populate the Bookmark and Note sections of the TOC panel based on
* the stored data.  Note that this does a full re-build of the lists!
*/
function PopulateTOC(){
    var allKeys = new Array();
    var documentList;
    var containerKey;
    var containerInfo;
    var containerList;
    var container;

    var noteKey;
    var createdNotes = {};
    var note;

    var bookmarkString = "";
    var noteString = "";
    var curString = "";

    var highlights;
    var highlightCount = 0;
    var highlightKey;
    var highlightText = "";

    this._RefreshDoc();

    documentList = $.jStorage.get(this.activeDocKey);
    
    if(null != documentList){
        documentList = documentList.sort(_SortConKeys);
		allKeys = documentList.slice(0);
    }

    for(var x = 0; x < allKeys.length; x++){
        containerKey = allKeys[x];
        containerInfo = this._ReadConKey(containerKey);
        containerList = $.jStorage.get(containerKey);
        if(null == containerList){
            documentList.splice(documentList.indexOf(allKeys[x]), 1);
            continue;
        }

        //containerList has several entries per highlight...
        highlightCount = 0;
        for(var y = 0; y < containerList.length / this.eph; y++){
            noteKey = containerList[(y*this.eph)+this.idx_ref];
            if(noteKey && undefined != createdNotes[noteKey]){
                //we're being asked to make another entry for a note we've
                //already addressed.
                continue;
            }

            highlightKey = this._BuildHighlightKeyFromConKey(containerKey,
                                                            highlightCount);
            highlightText += containerList[(y*this.eph)+this.idx_text];
            if(noteKey){
                //this is a note
                note = $.jStorage.get(noteKey);
                if(note){
                    noteString += this._BuildNoteEntry(
                        noteKey, highlightKey, note[0], highlightText);
                    createdNotes[noteKey] = noteKey;
                }
                highlightText = "";
            } else if(!containerList[(y*this.eph)+this.idx_linked]){
                bookmarkString += this._BuildBookmarkEntry(
                    highlightKey, highlightText);
                highlightText = "";
            }

            highlightCount++;
        }//for containerList
    }//for allKeys
  
    //once the lists are built, set them as the contents of the panels.
    this.bookmarkPanel.html(bookmarkString);
    this.notePanel.html(noteString);

    if(null != documentList){
        if(0 == documentList.length){
            $.jStorage.deleteKey(this.activeDocKey);
        } else {
            $.jStorage.set(this.activeDocKey, documentList);
        }
    }

    //clear out any existing range
    this._GetHighlighter().clearRange();
    //we also adjust the controls
    this._SetControlStates();
}//PopulateTOC

/******************************************************************************
* _AddToList(startPos, text, oldList)
*
* Checks the data in oldList against startPos and text.length.
*
* If startPos is less than existing position entries, it will check to see if
* startPos + len is also less than existing position entries.  If so, the new
* information will be spliced into oldList immediately before the first greater
* position and all greater positions increased by the value of markupLength.  If
* startPos + len is greater than the next exiting position, that position and
* length are updated, and any greater positions are increased by the difference
* between the old and new lengths.
*
* If startPos is the same as an existing entry, the length is updated and any
* greater positions updated with the difference between the old and new length.
*
* If startPos is greater than all other positions, the new data is appended to
* the array.
*
* In all cases the argument array is preserved and theresultant array is
* returned.
*/
function _AddToList(startPos, text, isLinked, oldList){
    var list = oldList.slice(0);
    var updateIndex = -1;
    var updateQuantity;

    for(var x = 0; x < list.length; x += this.eph){
        if(startPos <= list[x]){
            updateIndex = x + this.eph;
            if(startPos + text.length < list[x]){
                //new entry before others
                list.splice(x,0,startPos,text,isLinked,null);
                updateQuantity = this.markupLength;
            } else {
                //an entry has changed, calculate difference in length
                //and update the entry
                updateQuantity = text.length - list[x+this.idx_text].length;
                list[x+this.idx_text] = text;
                list[x+this.idx_linked] = isLinked;
            }
            break;
        }
    }

    //if we have an updateIndex >= 0, we need to play with positions.
    if(updateIndex >= 0){
        for(var y = updateIndex; y < list.length; y += this.eph){
            list[y] += updateQuantity;
        }
    } else {
        //we ran off the end, so we add in the data
        list[list.length] = startPos;
        list[list.length] = text;
        list[list.length] = isLinked;
        list[list.length] = null;
    }

    return list;
}//_AddToList

/*******************************************************************************
* _IdentifyHighlightContainers
*
* Finds the "container" nodes to use for a given list of highlights, and
* returns a 2-d array containing the highlight/container pairs, and a value to
* indicate of one highlight is "linked" to the next.  For a set of
* highlights, the container is the parent of the topmost parent highlight.
*
* This method assumes that lists are provided in document order (thus, any
* ancestor/descendent relationships will be adjacent to each other).
*/
function _IdentifyHighlightContainers(highlights){
    var highlightContainers = [];
    var done;

    //build the list of highlight/container pairs
    for(var x = 0; x < highlights.length; x++){
        highlightContainers[x] =
            [highlights[x],$(highlights[x]).parent().get(0),false];
    }

    //cycle through the list.  Any time we make a change, we decide we need
    //another pass.
    do{
        done = true;
        for(var x = 0; x < highlightContainers.length; x++){
            if(x > 0){
                //if the last entry was our parent, update our container...
                if(0 < $(highlightContainers[x-1][1])
                   .find($(highlightContainers[x][1])).length){
                    highlightContainers[x][1] = highlightContainers[x-1][1];
                    done = false;
                }
                //if we're the parent, update the last container...
                else if($(highlightContainers[x][1])
                        .find($(highlightContainers[x-1][1])).length){
                    highlightContainers[x-1][1] = highlightContainers[x][1];
                    done = false;
                }
                if(highlightContainers[x-1][1] == highlightContainers[x][1]){
                    highlightContainers[x-1][2] = true;
                } else {
                    highlightContainers[x-1][2] = false;
                }
            }
        }
    } while(!done);

    return highlightContainers;
}//_IdentifyHighlightContainers

/*******************************************************************************
* AddBookmark
*
* Attempts to add a highlight for the currently selected text using a
* jquery.textHighlighter.  If nothing is highlighted, nothing will be done.
*/
function AddBookmark(noToc){
    //alert("add bookmark");
    var highlights;
    var highlightContainers;
    var curHighlight;   //for looping over lists when we cross containers
    var container;
    var containerPath;
    var containerKey;
    var containerList;  //list of all highlights in an element
    var documentList;   //list of all elements with highlights

    //for sorting out where the highlights are
    var startPos = 0;

    highlights = this._GetHighlighter().doHighlight();
    console.log(highlights);
    if(undefined == highlights){
        //nothing was selected
        return;
    }

    this._RefreshDoc();

    //TODO: Change default container to var or at least to
    //page_frame or similar!

    highlightContainers = this._IdentifyHighlightContainers(highlights);

    //default container is the document itself
    //container = this.activeDocument.find("body").get(0);
    documentList = $.jStorage.get(this.activeDocKey);

    for (var x = 0; x < highlightContainers.length; x++){
        curHighlight = highlightContainers[x][0];
        container = highlightContainers[x][1];
        //$(curHighlight).parent().get(0);k
        containerKey = this._BuildConKey(container);
        containerList = $.jStorage.get(containerKey);

        //get our dimensions
        startPos = container.innerHTML.indexOf(curHighlight.outerHTML);

        //next, see if we have existing info in this element
        //alert("list is " + containerList);
        if(null == containerList){
            containerList = [startPos, curHighlight.innerHTML,
                             highlightContainers[x][2], null];
            if(null == documentList){
                documentList = [containerKey];
            } else if(0 > jQuery.inArray(containerKey, documentList)){
                documentList.push(containerKey);
                documentList = documentList.sort(_SortConKeys);
            }
        } else {
            containerList = this._AddToList(startPos, curHighlight.innerHTML,
                                            highlightContainers[x][2],
                                            containerList);
        }
        $.jStorage.set(containerKey, containerList);
    }//for highlights

    $.jStorage.set(this.activeDocKey, documentList);

    if(!noToc){
        this.PopulateTOC();
    }

    return highlights;
}//AddBookmark

/*******************************************************************************
* _OpenNoteInput
*
* Method to open the note input field.  Currently a one-liner but this way any
* changes can be made in one place.
*/
function _OpenNoteInput(){
    $.colorbox({inline:true, href:"#notes_input", close:""});
}

/*******************************************************************************
* _CloseNoteInput
*
* As above, but to close/clear the input.
*/
function _CloseNoteInput(){
    $.colorbox.close();
    $('#notes_text').val("");
    this._SetControlStates();
}

/*******************************************************************************
* AddNote
*
* Begins the process of adding a note.  This method opens the input window and
* creates highlights.
*/
function AddNote(){
    var noteHighlights = this.AddBookmark(true);
    //AddBookmark will refresh the doc

    if(noteHighlights){
        this.noteCreationHighlights = new Array();
        for(var x = 0; x < noteHighlights.length; x++){
            this.noteCreationHighlights.push(
                this._BuildHighlightKey(noteHighlights[x]));
        }
        this._OpenNoteInput();
    }
}//AddNote

/*******************************************************************************
* ConvertToNote
*
* Begins the process to convert an existing highlight into a note.
*/
function ConvertToNote(hId){
    this.noteConvertHighlight = hId;
    this._OpenNoteInput();
}//ConvertToNote

/*******************************************************************************
* CancelNote
*
* Method to allow cancel of Note creation/conversion.
*/
function CancelNote(){
    if(null != this.noteCreationHighlights){
        for(var x = this.noteCreationHighlights.length; --x >= 0;){
            this.DeleteBookmark(this.noteCreationHighlights[x], true);
        }
    }
    this.noteCreationHighlights = null;
    this.noteConvertHighlight = null;
	  this._CloseNoteInput();
}//CancelNote

/*******************************************************************************
* CommitNote
*
* Method for outsiders to call to request completion of the note conversion/
* creation process with the provided text.
*/
function CommitNote(noteText){
    //alert( "fired CommitNote" );
	var highlightKeys = null;

    if(null != this.noteCreationHighlights){
        highlightKeys = this.noteCreationHighlights;
    } else if(null != this.noteConvertHighlight){
        highlightKeys = new Array();
        highlightKeys.push(this.noteConvertHighlight);
    }

    if(null != highlightKeys){
        this._CommitNote(noteText, highlightKeys);
    }

    this.noteCreationHighlights = null;
    this.noteConvertHighlight = null;
    this._CloseNoteInput();
}//CommitNote

/*******************************************************************************
* _CommitNote
*
* Once the user has entered text we will add the note and update the highlight
* data based on he supplied highlights.
*/
function _CommitNote(noteText, noteHighlightKeys){
    var noteKey;
    var noteData = [noteText];

    var curContainerKey;
    var curContainerList;
    var curHighlightKey;
    var curHighlightNum;

    this._RefreshDoc();

    this.totalNotes++;
    noteKey = this._BuildNoteKey();
    for(var x = 0; x < noteHighlightKeys.length; x++){
        curHighlightKey = noteHighlightKeys[x].split("_");
        curHighlightNum = curHighlightKey.pop();

        curContainerKey = curHighlightKey.join("_");
        curContainerList = $.jStorage.get(curContainerKey);

        if(null == curContainerList){
            continue;
        }

        noteData.push(curContainerKey);
        curContainerList[(curHighlightNum*this.eph)+this.idx_ref] = noteKey;
        $.jStorage.set(curContainerKey, curContainerList);
    }//for highlights

    $.jStorage.set(noteKey, noteData);

    this.PopulateTOC();
}//_CommitNote

/*******************************************************************************
* _DoDeleteBookmark
*
* Performs actual deletion of the provided highlight node and removes it from
* the container list.
*
* This is essentially an inverse of "_AddToList"
*/
function _DoDeleteBookmark(hId){
    var localId;

    var documentList;

    var containerKey;
    var containerList;
    var highlights = null;
    var highlightNum;

    var highlighter = this._GetHighlighter();
    var startPos;
    var updateIndex = 0;

    this._RefreshDoc();

    localId = hId.split("_");
    highlightNum = localId.pop();
    containerKey = localId.join("_");

    documentList = $.jStorage.get(this.activeDocKey);
    containerList = $.jStorage.get(containerKey);

    container = this._GetContainerByKey(containerKey);
    if(null != container){
        highlights = container.find(this.highlightClass);
    }

    updateIndex = highlightNum * this.eph;
    containerList.splice(updateIndex, this.eph);

    for(var x = updateIndex; x < containerList.length; x += this.eph){
        containerList[x] -= this.markupLength;
    }

    if(null != highlighter && null != highlights){
        highlighter.removeHighlights(highlights[highlightNum]);
    }

    if(0 >= containerList.length){
        documentList.splice(documentList.indexOf(containerKey),1);
        $.jStorage.deleteKey(containerKey);
    } else {
        $.jStorage.set(containerKey, containerList);
    }

    if(0 >= documentList.length){
        $.jStorage.deleteKey(this.activeDocKey);
    } else {
        $.jStorage.set(this.activeDocKey, documentList);
    }
}//_DoDeleteBookmark

/*******************************************************************************
* DeleteBookmark
*
* Will determine if the designated highlight corresponds to a note or is simply
* a bookmark, and then either delete the note or the bookmark.  hId should be
* of the form "x_y", where x is the index of the container reference in the
* document list and y is the index of the highlight within the container.
*
*/
function DeleteBookmark(hId, noToc){
    var localId;
    var highlightNum;
    var containerKey;
    var list;

    var container;
    var highlights;
    var noteRef;

    //the id is the key with _NUMBER, so we pop that off the end and put the
    //rest back together as our key
    localId = hId.split("_");
    highlightNum = localId.pop();
    containerKey = localId.join("_");

    list = $.jStorage.get(containerKey);
    if(list){
        noteRef = list[(highlightNum*this.eph)+this.idx_ref];
        if(noteRef){
            this.DeleteNote(noteRef);
        } else {
            this._DoDeleteBookmark(hId);
        }

        if(!noToc){
            //rebuild the TOC, brute-force for now...
            this.PopulateTOC();
        }
    }
}//DeleteBookmark

/*******************************************************************************
* DeleteAllBookmarks
*
* Will read through all highlights and delete them.
*/
function DeleteAllBookmarks() {
    var allKeys = new Array();
    var documentList;
    var containerList;
    var info;

    if(!confirm("Are you sure you want to clear all bookmarks?")) {
        return;
    }

    documentList = $.jStorage.get(this.activeDocKey);
    if(null != documentList){
        for(var x = 0; x < documentList.length; x++){
            allKeys.push(documentList[x]);
        } 
    }

    for(var x = 0; x < allKeys.length; x++){
        containerList = $.jStorage.get(allKeys[x]);
        info = this._ReadConKey(allKeys[x]);
        if(currentPageId == info["pageId"]){
            for(var y = containerList.length / this.eph; --y >= 0;){
                if(null == containerList[(y*this.eph)+this.idx_ref]){
                    this.DeleteBookmark(allKeys[x] + "_" + y, true);
                }
            }
        } else {
            $.jStorage.deleteKey(allKeys[x]);
        }
    }

    this.PopulateTOC();
}//DeleteAllBookmarks

/*******************************************************************************
* DeleteNote
*
* Deletes the note referenced by noteKey.  This will also delete all all
* associated highlights, and then update the TOC.
*/
function DeleteNote(noteKey, noToc){
    var note = $.jStorage.get(noteKey);

    var containerList;
    var highlightNum;

    if(null == note){
        return;
    }

    for(var x = note.length; --x >= 1;){
        containerList = $.jStorage.get(note[x]);
        highlightNum = (containerList.indexOf(noteKey) - 2) / 3;
        this._DoDeleteBookmark(note[x] + "_" + highlightNum);
    }

    $.jStorage.deleteKey(noteKey);

    if(!noToc){
        this.PopulateTOC();
    }
}//DeleteNote

/*******************************************************************************
* DeleteAllNotes
*
* Will remove all notes in the list, one container at a time.
*/
function DeleteAllNotes(){
    var listKeys = new Array();
    var curList;
    var noteRefs = {};

    if(!confirm("Are you sure you want to clear all notes?")) {
        return;
    }

    listKeys = $.jStorage.get(this.activeDocKey);

    //gather a list of all notes, de-dup it, and then delete them
    //one by one.
    for(var x = 0; x < listKeys.length; x++){
        curList = $.jStorage.get(listKeys[x]);
        for(var entry = 0; entry < curList.length; entry += this.eph){
            if(curList[entry + 2]){
                noteRefs[curList[entry + 2]] = true;
            }
        }
    }
    for(var noteRef in noteRefs){
        this.DeleteNote(noteRef, true);
    }

    this.PopulateTOC();
}//DeleteAllNotes

/*******************************************************************************
* _RestoreList
*
* Restores all listed highlights to the provided container.  This is done in
* the supplied order, as the list is designed to indicate offsets assuming all
* markup is in place.
*
* To restore the highlights, we grab wrappers from the highlighter and insert
* them appropriately.
*/
function _RestoreList(container, list){
    var highlighter = this._GetHighlighter();
    var wrapper;
    var wrapperOpen;
    var wrapperClose;

    var startPos;
    var length;
    var tempHtml; //html we are working with
    var refHtml;  //"backup" of what we're working with in case a
                  //problem crops up
    var car;
    var cdr;  //front and back of the text we're slicing up

    if(undefined == container){
        return;
    }

    this._RefreshDoc();

    if(!(container instanceof jQuery)){
        container = $(container);
    }

    wrapper = highlighter.getWrapper().outerHTML.split("</");
    wrapperOpen = wrapper[0];
    wrapperClose = "</" + wrapper[1];

    tempHtml = container.html();
    for(var x = 0; x < list.length; x += this.eph){
        try{
            startPos = list[x];
            length = list[x+this.idx_text].length;

            //we try to manipulate, if it fails we restore the working
            //string and delete the offending note/bookmark
            refHtml = tempHtml;

            //first add the close, then the open, for the wrapper
            car = tempHtml.slice(0, startPos + length);
            cdr = tempHtml.slice(startPos + length);
            tempHtml = car + wrapperClose + cdr;
            car = tempHtml.slice(0, startPos);
            cdr = tempHtml.slice(startPos);
            tempHtml = car + wrapperOpen + cdr;
        } catch(e) {

            tempHtml = refHtml;
            this.DeleteBookmark(  
                this._BuildHighlightKeyFromConKey(
                    this._BuildConKey(container), x)
                , true
            );//called with "no toc" flag
        }
    }
    container.html(tempHtml);
}//_RestoreList

/*******************************************************************************
* _RestoreHighlights
*
* Will see if the current document has any highlights to restore, if so,
* it will do just that.  Note that this should only be called on a fresh
* document... it should not be used as a "re-set" or anything like that!
*/
function _RestoreHighlights(){
    var containerKey;
    var containerList;
    var documentList;

    var info;
    var container;

    this._RefreshDoc();

    documentList = $.jStorage.get(this.activeDocKey);

    if(null != documentList){
        for(var x = documentList.length; --x >= 0;){
            containerKey = documentList[x];
            info = this._ReadConKey(containerKey);
            if(currentPageId == info["pageId"]){
                containerList = $.jStorage.get(containerKey);
                if(null == containerList){
                    //oops?
                    documentList.splice(x,1);
                    $.jStorage.set(this.activeDocKey, documentList);
                } else {
                    container = this._GetContainerByKey(containerKey);
                    this._RestoreList(container, containerList);
                }
            }
        }
    }

    this.PopulateTOC();
}//_RestoreHighlights

/*******************************************************************************
* ScrollToHighlight
*
* Causes the document to scroll to the indicated Highlight.  If the highlight
* is in a different document, we tell the page to change to it first.
* Currently stops the highlight 1/5th of the way down the window.
*/ 
function ScrollToHighlight(hId) {
    var localId;

    var highlights;
    var highlightNum;
    var highlight;
    var offset;

    var containerKey;
    var container;
    var info;

    this._RefreshDoc();

    localId = hId.split("_");
    highlightNum = localId.pop();
    containerKey = localId.join("_");
    info = this._ReadConKey(containerKey);




    if(currentPageId == info["pageId"]){
        container = this._GetContainerByKey(containerKey);
        highlights = $(container).find(this.highlightClass);
        highlight = highlights.eq(highlightNum);
        offset = highlight.offset();
        // $("html, body").animate(
        //     {scrollTop : offset.top - (
        //         $(window).height() / 5)},'slow');
    } else {
        //call xmlLoad's initPage
        this.loadScrollTarget = hId;
        getPageData(info["pageId"]);
    }
}//ScrollToHighlight
