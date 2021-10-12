/*
* --------------------------------------------------------------------------
*   glossary.js - v1.4
*   author: Craig Tech Inc. & Sean Dooley
*   created: 3/12/2018
*   last edited: 04/07/2019
* --------------------------------------------------------------------------
*/
var Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var targetLangAlphabet = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

var targetLangRadioName = "korean";

function doGlossarySearch() {
    searchVal = $("#searchGlossary").val();
    glossaryReturnResults = 0;
    if (searchVal == '' && $('#searchGlossary').hasClass('content') == false){
        // if there is nothing in the search field then do nothing
    } else{
        $("#glossary").html("");
        $("#glossaryLoader").show();
        $.ajax({
        
            async: true,
            type: "GET", 
            url: "Includes/glossary.xml",
            dataType: "xml", 
            success: function (xml) {

                //defjr - changed current language selection check
                currentLanguage = $("input[name=glossaryLanguageToggle]:checked").val() ? "english" : "korean";
                //defjr
                searchNode = "";

                if (currentLanguage != targetLangRadioName) {
                    searchVal = searchVal.charAt(0).toUpperCase() + searchVal.slice(1);
                    searchNode = "desc";
                } else {
                    searchNode = "name";
                }

                $("#glossary").append("<br/><p><strong>Search Results for " + "\"" + searchVal + "\" :</strong></p>");

                moduleNumber = parseInt($("#glossaryModuleDropdown").prop("selectedIndex"));
             
                // They have a module selected, search within that module only
                if (moduleNumber > 0) {
                    
                    glossaryReturnResults = $(xml).find("term[" + searchNode + " ^= '" + searchVal + "'][module='" + moduleNumber + "']").length;

                    $(xml).find("term[" + searchNode + " ^= '" + searchVal + "'][module='" + moduleNumber + "']").each(function () {

                        glossTerm = $(this).attr('name');
                        termDesc = $(this).attr('desc');

                        if (currentLanguage != targetLangRadioName) {
                            $("#glossary").append("<p class=\"termName\">" + termDesc + "</p>");
                            $("#glossary").append("<p>" + glossTerm + "</p>");
                          
                        } else {
                            $("#glossary").append("<p class=\"termName\">" + glossTerm + "</p>");
                            $("#glossary").append("<p>" + termDesc + "</p>");
                        }
                    });
                } else {

                    $(xml).find("term[" + searchNode + " ^= '" + searchVal + "']").each(function () {

                        glossaryReturnResults = $(xml).find("term[" + searchNode + " ^= '" + searchVal + "']").length;

                        glossTerm = $(this).attr('name');
                        termDesc = $(this).attr('desc');

                        if (currentLanguage != targetLangRadioName) {
                            $("#glossary").append("<p class=\"termName\">" + termDesc + "</p>");
                            $("#glossary").append("<p>" + glossTerm + "</p>");
                        } else {
                            $("#glossary").append("<p class=\"termName\">" + glossTerm + "</p>");
                            $("#glossary").append("<p>" + termDesc + "</p>");
                              
                        }
                    });
                    $("#searchGlossary").addClass('content');
                }
          
                if (glossaryReturnResults == 0 && searchVal != '') {
                    $("#glossary").append("<p>No results.</p><br><p class='btt'><a class='btn btn-outline-light btn-sm' onClick='InitGlossary();' href='#'>Back to Glossary</a></p>");
                    $("#searchGlossary").addClass('content');
                } 
                if (searchVal == '' && $('#searchGlossary').hasClass('content')) {
                    InitGlossary();
                }
                $("#glossaryLoader").fadeOut("slow");
                $("#nav").slideUp('fast', function () {
                  
                });
            }
        });
    } 
}

function InitGlossary() {
    
    $("#glossary").html("");
    $("#glossaryLoader").show();
    $("#nav").html("<ul style='line-height: 2em !important;'></ul>");
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
    
    optionalModule = parseInt($("#glossaryModuleDropdown").prop("selectedIndex"));

    if (!optionalModule) {
        optionalModule = "0";
    }

    $.ajax({
        
        async: true,
        type: "GET", 
        url: "Includes/glossary.xml",
        dataType: "xml", 
        success: function(xml){ 
            
            // ecj
            //currentLanguage = $("input[name=searchLanguage]:checked").val();
            //console.log("currentLanguage: " + currentLanguage);
            // ecj
            //defjr
           currentLanguage = $("input[name=glossaryLanguageToggle]:checked").val() ? "english" : "korean";
           //defjr

            if (currentLanguage == targetLangRadioName) {
                $.each(targetLangAlphabet, function (index, value) {

                    glossaryReturnResults = 0;

                    $("#nav").find('ul').append("<li class=\"letter\"><a href=\"#\" id=\"" + value.charAt(0) + "\">" + value + "</a></li>");
              

                    $("#glossary").append("<p class=\"btt\" id=\"anchor_" + value.charAt(0) + "\"></p>");
                    $("#glossary").append("<h3>" + value + "</h3>");
                    $("#glossary").append("<hr />");


                    if (parseInt(optionalModule) > 0) {
                    
                        $(xml).find('term[module="' + optionalModule + '"][alpha ^= "' + value + '"]').each(function () {

                            glossaryReturnResults = $(xml).find('term[module="' + optionalModule + '"][alpha ^= "' + value + '"]').length;

                            glossTerm = $(this).attr('name');
                            termDesc = $(this).attr('desc');

                            $("#glossary").append("<p class=\"termName\">" + glossTerm + "</p>");
                            $("#glossary").append("<p>" + termDesc + "</p>");
                     

                        });
                    } else {

                        // For Hindi, some alphabet letters have more than one character variation, we need to check for commas.
                        // If they are there, we need to split and do a loop to check for each variation.

                        if (value.indexOf(",") == -1) {

                            $(xml).find("term[alpha ^= '" + value + "']").each(function () {

                                glossaryReturnResults = $(xml).find("term[alpha ^= '" + value + "']").length;

                                glossTerm = $(this).attr('name');
                                termDesc = $(this).attr('desc');

                                $("#glossary").append("<p class=\"termName\">" + glossTerm + "</p>");
                                    $("#glossary").append("<p>" + termDesc + "</p>");                     
                            });

                        } else {

                            valueArray = [];
                            valueArray = value.split(",");

                            $.each(valueArray, function (variationIndex, variationValue) {
                                
                                
                                $(xml).find("term[alpha ^= '" + variationValue.trim() + "']").each(function () {

                                        glossaryReturnResults = $(xml).find("term[alpha ^= '" + variationValue.trim() + "']").length;

                                        glossTerm = $(this).attr('name');
                                        termDesc = $(this).attr('desc');

                                        $("#glossary").append("<p class=\"termName\">" + glossTerm + "</p>");
                                        $("#glossary").append("<p>" + termDesc + "</p>");
                                  
                                });

                            });

                        }
                    }

                    if (glossaryReturnResults == 0) {
                        $("#glossary").append("<p>No glossary terms.</p>");
                    }

                    $("#glossary").append("<p class=\"btt\"><a class=\"btn btn-outline-light btn-sm\" href=\"\">Back to Top</a></p>");                              

                }); 
                
            } else {
                $.each(Alphabet, function (index, value) {

                    glossaryReturnResults = 0;

                    $("#nav").find('ul').append("<li class=\"letter\"><a href=\"#\" id=\"" + value + "\">" + value + "</a></li>");

                    if (index == 12) {
                        $("#nav").find('ul').append("");
                    }

                    $("#glossary").append("<p class=\"btt\" id=\"anchor_" + value + "\"></p>");
                    $("#glossary").append("<h3>" + value + "</h3>");
                    $("#glossary").append("<hr />");


                    if (parseInt(optionalModule) > 0) {

                        var glossaryXML = $(xml).find('term[module="' + optionalModule + '"][desc ^= "' + value + '"]').sort(function (a, b) {
                            var at = $(a).attr(currentLanguage), bt = $(b).attr(currentLanguage);
                            return (at < bt) ? -1 : 1;
                        });

                        glossaryXML.each(function () {

                            glossaryReturnResults = $(xml).find('term[module="' + optionalModule + '"][desc ^= "' + value + '"]').length;

                            glossTerm = $(this).attr('name');
                            termDesc = $(this).attr('desc');

                            $("#glossary").append("<p class=\"termName\">" + termDesc + "</p>");
                            $("#glossary").append("<p>" + glossTerm + "</p>");

                        });
                    } else {

                        var glossaryXML = $(xml).find("term[desc ^= '" + value + "']").sort(function (a, b) {
                            var at = $(a).attr(currentLanguage), bt = $(b).attr(currentLanguage);
                            return (at < bt) ? -1 : 1;
                        });

                        glossaryXML.each(function () {

                            glossaryReturnResults = $(xml).find("term[desc ^= '" + value + "']").length;

                            glossTerm = $(this).attr('name');
                            termDesc = $(this).attr('desc');

                            $("#glossary").append("<p class=\"termName\">" + termDesc + "</p>");
                            $("#glossary").append("<p>" + glossTerm + "</p>");
                           
                        });

                    }

                    if (glossaryReturnResults == 0) {
                        $("#glossary").append("<p>No glossary terms.</p>");
                    }

                    $("#glossary").append("<p class=\"btt\"><a class=\"btn btn-outline-light btn-sm\" href=\"\">Back to Top</a></p>");

                });

            }

            // $("#nav").append("<hr />");
            
            // scroll body to 0px on click
            $('p.btt a').click(function () {

                $('#nav-panel--glossary').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

            $("li.letter a").click(function () {

                $('#nav-panel--glossary').animate({
                    scrollTop: $("#anchor_" + $(this).text()).offset().top
                }, 2000);
            });
            $("#glossaryLoader").fadeOut("slow");
            $("#nav").slideDown('fast', function () {

            });
        }
    });
    
}//InitGlossary

//);


function createGlossaryPDF() {

    var pdf = new jsPDF('p', 'mm', 'a4');

    margins = {
        top: 10,
        bottom: 20,
        left: 10,
        width: 600
    };

    pdf.setProperties({
        title: bookTitle + " Glossary",
        subject: bookTitle + " Glossary",
        author: 'Craig Technologies',
        keywords: 'glossary, DLI',
        creator: 'Craig Technologies'
    });

    pdf.internal.scaleFactor = 4;

    var options = {
        pagesplit: true
    };


    $(".btt").hide();


    pdf.addHTML($("#glossary"), 0, 0, options, function () {
        pdf.save(bookTitle.replace(":", " ") + " Glossary.pdf");
        $(".btt").show();
    });

}


function datenum(v, date1904) {
    if (date1904) v += 1462;
    var epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

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

function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
}

function createGlossaryExcel() {
    var data = [];
    $.ajax({

        async: true,
        type: "GET",
        url: "Includes/glossary.xml",
        dataType: "xml",
        success: function (xml) {
            data.push(["Korean", "Definition"]);
            $(xml).find('term').each(function () {
                data.push([this.getAttribute("name"), this.getAttribute("desc")]);
            });
            var ws_name = "Glossary";
            var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);

            /* add worksheet to workbook */
            wb.SheetNames.push(ws_name);
            wb.Sheets[ws_name] = ws;
            var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });

            saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), bookTitle.replace(":", " ") + " Glossary.xlsx")
        }
    });
}
