/*
* --------------------------------------------------------------------------
*   glossary.js - v2.0
*   author: Advancia Technologies
*   created: 3/12/2018
*   last edited: 2/20/2021
*   Copyright 2021, Advancia Technologies, All rights reserved.
* --------------------------------------------------------------------------
*/
// Define English headers
var Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Define Target Language headers
var targetLangAlphabet = ["अ", "अं", "आ", "आं", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क, क़", "ख, ख़", "ग, ग़", "घ", "च", "छ", "ज, ज़", "झ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ, फ़", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "श्र"];
// set target language
var targetLangRadioName = "hindi";
/*
* ------------------------------------------------------------------------
* Searching the Glossary 
* ------------------------------------------------------------------------
*/
function doGlossarySearch() {
    // get the vaule of the search query
    searchVal = $("#searchGlossary").val();
    // return results set to 0 on search
    glossaryReturnResults = 0;
    // check if the search is legit
    if (searchVal == '' && $('#searchGlossary').hasClass('content') == false){
        // if there is nothing in the search field then do nothing
    } 
    // search query is good, evaluate
    else{
        // clear glossary listing content and show loading icon
        $("#glossary").html("");
        $("#glossaryLoader").show();
        // pull glossary data
        var glossaryData = JSON.parse(sessionStorage.getItem('glossary'));
        glossaryData = glossaryData.glossary;
        // current language selection check
        currentLanguage = $("input[name=glossaryLanguageToggle]:checked").val() ? "english" : "hindi";
        // clear the search node
        searchNode = "";
        // check which language to search with
        if (currentLanguage != targetLangRadioName) {
            // target language search
            searchVal = searchVal.charAt(0).toUpperCase() + searchVal.slice(1);
            searchNode = "desc";
        } else {
            // english search
            searchNode = "name";
        }
        // add a search message to listing
        $("#glossary").append("<br/><p><strong>Search Results for " + "\"" + searchVal + "\" :</strong></p>");
        // define which module has been selected
        moduleNumber = parseInt($("#glossaryModuleDropdown").prop("selectedIndex"));
        // They have a module selected, search within that module only
        if (moduleNumber > 0) {
            // loop through glossary array
            for (var g = 0; g < glossaryData.length; g++){
                // ensure that the module matches
                if(glossaryData[g].module.match(moduleNumber) != null){
                    // ensure the term matches
                    if(glossaryData[g][searchNode].match(searchVal) != null){
                        // increment glossary listing
                        glossaryReturnResults++
                        // depending on language, add listing item
                        if (currentLanguage != targetLangRadioName) {
                            $("#glossary").append("<p class=\"termName\">" + glossaryData[g].desc + "</p>");
                            $("#glossary").append("<p>" + glossaryData[g].name + "</p>");
                        } else {
                            $("#glossary").append("<p class=\"termName\">" + glossaryData[g].name + "</p>");
                            $("#glossary").append("<p>" + glossaryData[g].desc + "</p>");    
                        }
                    }
                }
            }
        } 
        // no module selected, search the entire glossary
        else {
            for(var g = 0; g < glossaryData.length; g++){
                // ensure the term matches
                if(glossaryData[g][searchNode].match(searchVal) != null){
                    // increment glossary listing
                    glossaryReturnResults++
                    // depending on language, add listing item
                    if (currentLanguage != targetLangRadioName) {
                        $("#glossary").append("<p class=\"termName\">" + glossaryData[g].desc + "</p>");
                        $("#glossary").append("<p>" + glossaryData[g].name + "</p>");
                    } else {
                        $("#glossary").append("<p class=\"termName\">" + glossaryData[g].name + "</p>");
                        $("#glossary").append("<p>" + glossaryData[g].desc + "</p>");    
                    }
                }
            }
            // add content class
            $("#searchGlossary").addClass('content');
        }
        // no results found
        if (glossaryReturnResults == 0 && searchVal != '') {
            $("#glossary").append("<p>No results.</p><br><p class='btt'><a class='btn btn-outline-light btn-sm' onClick='InitGlossary();' href='#'>Back to Glossary</a></p>");
            $("#searchGlossary").addClass('content');
        }
        // if the search input has been cleared from a search, restart glossary
        if (searchVal == '' && $('#searchGlossary').hasClass('content')) {
            InitGlossary();
        } 
        // show search results
        else {
            // hide loader
            $("#glossaryLoader").fadeOut("slow");
            // slide nav up
            $("#nav").slideUp('fast', function () {
                
            });
        }
    } 
}
/*
* ------------------------------------------------------------------------
* Load Glossary
* ------------------------------------------------------------------------
*/
function InitGlossary() {
    // show loading icon
    $("#glossaryLoader").show();
    // clear glossary content
    $("#glossary").html("");
    // set up navigation listing (alphabet headers)
    $("#nav").html("<ul style='line-height: 2em !important;'></ul>");
    // clear search input by default and prep for content
    $("#searchGlossary").val("");
    $("#glossary-search-bar").removeClass('active');
    $('#searchGlossary').removeClass('content');
    $("#searchGlossary").on('keyup', function() {
        if ($("#searchGlossary").val() == "") {
            $("#glossary-search-bar").removeClass("active");
        } else {
            $("#glossary-search-bar").addClass("active")
        }
    });
    // get glossary data
    var glossaryData = JSON.parse(sessionStorage.getItem('glossary'));
    glossaryData = glossaryData.glossary;
    // evaluate which module is selected
    optionalModule = parseInt($("#glossaryModuleDropdown").prop("selectedIndex"));
    // if no module selection has been made, default to all
    if (!optionalModule) {
        optionalModule = "0";
    }
    // current language selection check
    currentLanguage = $("input[name=glossaryLanguageToggle]:checked").val() ? "english" : "hindi";
    // if the glossary is shown for the target language
    if (currentLanguage == targetLangRadioName) {
        // loop through the TL alphabet array
        $.each(targetLangAlphabet, function (index, value) {
            // Set listing results to zero
            glossaryReturnResults = 0;
            // if nav item uses two letters for one glossary header
            if (value.indexOf(',') > -1){
                $("#nav").find('ul').append("<li class=\"letter\"><a href=\"#\" id=\"" + value.charAt(0) + "\">" + value + "</a></li>");
                $("#glossary").append("<p class=\"btt\" id=\"anchor_" + value.charAt(0) + "\"></p>");
            } 
            // single letter for header
            else{
                $("#nav").find('ul').append("<li class=\"letter\"><a href=\"#\" id=\"" + value + "\">" + value + "</a></li>");
                $("#glossary").append("<p class=\"btt\" id=\"anchor_" + value + "\"></p>");
            }
            // letter heading
            $("#glossary").append("<h3>" + value + "</h3>");
            $("#glossary").append("<hr />");
            // Module specific listing
            if (parseInt(optionalModule) > 0) {
                // loop through glossary array
                for (var g = 0; g < glossaryData.length; g++){
                    // look for terms that start with the alpha character and are in selected module
                    if(glossaryData[g].alpha == value && glossaryData[g].module == optionalModule){
                        $("#glossary").append("<p class=\"termName\">" + glossaryData[g].name + "</p>");
                        $("#glossary").append("<p>" + glossaryData[g].desc + "</p>");
                        // increase the results listing number
                        glossaryReturnResults++;
                    }
                }   
            } 
            // All modules listing
            else {
                // loop through glossary array
                for (var g = 0; g < glossaryData.length; g++){
                    // look for terms that start with the alpha character
                    if(glossaryData[g].alpha == value){
                        $("#glossary").append("<p class=\"termName\">" + glossaryData[g].name + "</p>");
                        $("#glossary").append("<p>" + glossaryData[g].desc + "</p>");
                        // increase the results listing number
                        glossaryReturnResults++;
                    }
                } 
            }
            // Nolistings found
            if (glossaryReturnResults == 0) {
                $("#glossary").append("<p>No glossary terms.</p>");
            }
            // Add button to return to the top
            $("#glossary").append("<p class=\"btt\"><a class=\"btn btn-outline-light btn-sm\" href=\"\">Back to Top</a></p>");  
        }); 
    }
    // for the english glossary listing
    else {
        // loop through english array
        $.each(Alphabet, function (index, value) {
            // Set listing results to zero
            glossaryReturnResults = 0;
            // build out nav
            $("#nav").find('ul').append("<li class=\"letter\"><a href=\"#\" id=\"" + value + "\">" + value + "</a></li>");
            $("#glossary").append("<p class=\"btt\" id=\"anchor_" + value + "\"></p>");
            // letter heading
            $("#glossary").append("<h3>" + value + "</h3>");
            $("#glossary").append("<hr />");
            // Module specific listing
            if (parseInt(optionalModule) > 0) {
                // loop through glossary array
                for (var g = 0; g < glossaryData.length; g++){
                    // look for terms that start with the alpha character and are in selected module
                    if(glossaryData[g].desc.charAt(0) == value && glossaryData[g].module == optionalModule){
                        $("#glossary").append("<p class=\"termName\">" + glossaryData[g].desc + "</p>");
                        $("#glossary").append("<p>" + glossaryData[g].name + "</p>");
                        // increase the results listing number
                        glossaryReturnResults++;
                    }
                }   
            } 
            // All modules listing
            else {
                // loop through glossary array
                for (var g = 0; g < glossaryData.length; g++){
                    // look for terms that start with the alpha character
                    if(glossaryData[g].desc.charAt(0) == value){
                        $("#glossary").append("<p class=\"termName\">" +  glossaryData[g].desc + "</p>");
                        $("#glossary").append("<p>" + glossaryData[g].name + "</p>");
                        // increase the results listing number
                        glossaryReturnResults++;
                    }
                } 
            }
            // Nolistings found
            if (glossaryReturnResults == 0) {
                $("#glossary").append("<p>No glossary terms.</p>");
            }
            // Add button to return to the top
            $("#glossary").append("<p class=\"btt\"><a class=\"btn btn-outline-light btn-sm\" href=\"\">Back to Top</a></p>");
        });
    }            
    // when button at end of header is selected, return to top
    $('p.btt a').click(function () {
        $('#nav-panel--glossary').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // when a navigation item is seleted, scroll to matching item in listing
    $("li.letter a").click(function () {
        // if the listing item has more than one character
        if ($(this).text().indexOf(',') > -1){
            $('#nav-panel--glossary').animate({
                scrollTop: $("#anchor_" + $(this).text().charAt(0)).offset().top
            }, 2000);
        } else {
            $('#nav-panel--glossary').animate({
                scrollTop: $("#anchor_" + $(this).text()).offset().top
            }, 2000);
        }
    });
    // hide loader
    $("#glossaryLoader").fadeOut("slow");
    $("#nav").slideDown('fast', function () {
        
    });
    // switch trap focus to the glossary navigation
    if (!$("#searchGlossary").is(":focus")){
        trapFocus(document.getElementById('nav-panel--glossary'), 'nav-panel--glossary');
    }
}
/*
* ------------------------------------------------------------------------
* Glossary PDF Plugin 
* ------------------------------------------------------------------------
*/
function createGlossaryPDF() {
    // set variables for pdf sizing
    var pdf = new jsPDF('p', 'mm', 'a4');
    margins = {
        top: 10,
        bottom: 20,
        left: 10,
        width: 600
    };
    pdf.setProperties({
        title: modTitle + " Glossary",
        subject: modTitle + " Glossary",
        author: 'Advancia Technologies',
        keywords: 'glossary, DLI',
        creator: 'Advancia Technologies'
    });
    pdf.internal.scaleFactor = 4;
    var options = {
        pagesplit: true
    };
    // hide button
    $(".btt").hide();
    // pull html and save as pdf
    pdf.addHTML($("#glossary"), 0, 0, options, function () {
        pdf.save(modTitle.replace(":", " ") + " Glossary.pdf");
        $(".btt").show();
    });
}
/*
* ------------------------------------------------------------------------
* Glossary Excel Plugin 
* ------------------------------------------------------------------------
*/
/*
* Format date
*/
function datenum(v, date1904) {
    if (date1904) v += 1462;
    var epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}
/*
* Excel creation functions
*/
// array data to cells
function sheet_from_array_of_arrays(data, opts) {
    var ws = {};
    var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
    for (var R = 0; R != data.length; ++R) {
        for (var C = 0; C != data[R].length; ++C) {
            if (range.s.r > R) range.s.r = R;
            if (range.s.c > C) range.s.c = C;
            if (range.e.r < R) range.e.r = R;
            if (range.e.c < C) range.e.c = C;
            var cell = { v: data[R][C] };
            if (cell.v == null) continue;
            var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

            if (typeof cell.v === 'number') cell.t = 'n';
            else if (typeof cell.v === 'boolean') cell.t = 'b';
            else if (cell.v instanceof Date) {
                cell.t = 'n'; cell.z = XLSX.SSF._table[14];
                cell.v = datenum(cell.v);
            }
            else cell.t = 's';

            ws[cell_ref] = cell;
        }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
    return ws;
}
// data clean up
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
// workbook instance
function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
}
/*
* Produce excel document
*/
function createGlossaryExcel() {
    // set data to empty array
    var data = [];
    // push headers
    data.push(["Hindi", "Definition"]);
    // pull glossary data
    var glossaryData = JSON.parse(sessionStorage.getItem('glossary'));
    glossaryData = glossaryData.glossary;
    // loop through glossary array
    for (var g = 0; g < glossaryData.length; g++){
        // push listing data to cells
        data.push([glossaryData[g].name, glossaryData[g].desc]);
    }
    // name and create workbook instance
    var ws_name = "Glossary";
    var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);
    // add worksheet to workbook
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;
    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
    // save the file to destination
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), modTitle.replace(":", " ") + " Glossary.xlsx");
}
