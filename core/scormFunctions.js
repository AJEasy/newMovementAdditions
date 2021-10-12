/*
* --------------------------------------------------------------------------
*   scormFunctions.js - v2.0
*   author: Advancia Technologies
*   created: 3/12/2018
*   last edited: 2/20/2021
*   Copyright 2021, Advancia Technologies, All rights reserved.
* --------------------------------------------------------------------------
*/
/*
* ------------------------------------------------------------------------
* Initial variables 
* ------------------------------------------------------------------------
*/
var apiIsInitialized = false;
var currentTime = new Date();
var startTime = currentTime.getTime();
/*
* ------------------------------------------------------------------------
* End of the learner session
* ------------------------------------------------------------------------
*/
function endSCO() {
    if (apiIsInitialized) {
        // record session tim 
        setSessionTime();
        // check status
        var status = doGetStatus();
        // left the session but not complete
        if (status != "completed") {
            // set exit to suspend
            doSetExit("suspend");
            // nav behavior should indicate a normal exit
            doSetValue("adl.nav.request", "exit");
        } else if (status == "completed") {
            // remove the exit data
            doSetExit("");
            // evaluate if the nav request is valid
            var allowedRequest = doGetValue("adl.nav.request_valid.continue");
            if (allowedRequest == "true") {
                // allow for the learner to progress
                doSetValue("adl.nav.request", "choice");
            }
            // allow for the learner to progress
            doSetValue("adl.nav.request", "choice");
        }
        // terminate the session
        doTerminate();
        // update the launch page
        updateLaunch();
    }
}
/*
* ------------------------------------------------------------------------
* Get/Set completion status
* ------------------------------------------------------------------------
*/
function doGetStatus() {
    var getCompletionStatus = doGetValue("cmi.completion_status");
    return getCompletionStatus;
}
function doSetStatus(setCompletionStatus) {
    var getCompletionStatus = doGetStatus();
    if (getCompletionStatus != "completed") {
        doSetValue("cmi.completion_status", setCompletionStatus);
    }
}
/*
* ------------------------------------------------------------------------
* Set exit value
* ------------------------------------------------------------------------
*/
function doSetExit(exitedstatus) {
    doSetValue("cmi.exit", exitedstatus);
}
/*
* ------------------------------------------------------------------------
* Record session time
* ------------------------------------------------------------------------
*/
function setSessionTime() {
    // Session time variables
    var currentTime = new Date();
    var endTime = currentTime.getTime()
    var calculatedTime = endTime - startTime;
    if (calculatedTime < 1000) {
        calculatedTime = 1000;
    }
    // evaluate hours spent
    var totalHours = Math.floor(calculatedTime / 1000 / 60 / 60);
    calculatedTime = calculatedTime - totalHours * 1000 * 60 * 60;
    if (totalHours < 1000 && totalHours > 99) {
        totalHours = "0" + totalHours.toString();
    } else if (totalHours < 100 && totalHours > 9) {
        totalHours = "00" + totalHourstoString();
    } else if (totalHours < 10) {
        totalHours = "000" + totalHours.toString();
    }
    // evaluate minutes spent
    var totalMinutes = Math.floor(calculatedTime / 1000 / 60);
    calculatedTime = calculatedTime - totalMinutes * 1000 * 60;
    if (totalMinutes < 10) {
        totalMinutes = "0" + totalMinutes.toString();
    }
    // evaluate seconds spent
    var totalSeconds = Math.floor(calculatedTime / 1000);
    if (totalSeconds < 1) {
        totalSeconds = 1;
    }
    if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds.toString();
    }
    // build out session time string
    var sessionTime = "PT";
    if (parseInt(totalHours) != 0)
        sessionTime += totalHours + "H";
    if (parseInt(totalMinutes) != 0)
        sessionTime += totalMinutes + "M";
    if (parseInt(totalSeconds) != 0) {
        sessionTime += totalSeconds + "S";
    } else {
        sessionTime += "01" + "S";
    }
    // set session time
    doSetValue("cmi.session_time", sessionTime);
}
/*
* ------------------------------------------------------------------------
* Update launch page
* ------------------------------------------------------------------------
*/
function updateLaunch(){
    window.opener.document.getElementById("sco-status").innerHTML = '<h1>Your progress has been saved for this lesson.</h1><p>If the LMS does not advance you to the next lesson, please select the Next Lesson tab at the top of the page to continue.</p>';
}
