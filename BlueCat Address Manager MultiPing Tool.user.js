// ==UserScript==
// @name        BlueCat Address Manager MultiPing Tool
// @namespace   *
// @description Tool to ping one or more IP(s) in the BlueCat Address Manager Network Addresses Tab
// @include     */app*
// @version     2
// @grant       none
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-50x50.png
// @require     https://rawgit.com/alfg/ping.js/master/dist/ping.min.js
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==


// haha get the wordplay here
function doPing() {
    var button = document.getElementById("doButton");
    button.innerHTML = "<b>Pinging...</b><i> Results might take a while</i>";
    // promise to sychronize async pinging operations
    var promise = pingIP();
    promise
        .then(function(result) { console.log("Result: "+ result); })
        .then(function(result) { var button = document.getElementById("doButton"); button.innerHTML = "<b>Ping Selected</b><i> Results are not reliable</i>"; });
}

// the real work
function pingIP () {
    var deferred = $.Deferred();
    var selected = document.getElementById("outerTable").getElementsByClassName("value-table-selected");
    var ipLable = [];
    var ipState = [];
    var p = [];
    var data = [];
    var i = 0;
    var nextStep = function() {
        if (i < selected.length) {
            p[i] = new Ping();
            ipLable[i] = selected[i].getElementsByClassName("vo-label")[0];
            var ip = trim(ipLable[i].innerText);
            var ipLableText = ipLable[i].getElementsByTagName("a")[1];
            p[i].ping("http://"+ip, function(err, data) {
                // Also display error if err is returned.
                if (err && data > 2000) {
                    console.log("error for IP "+ip+" was: "+err+" with data: "+data);
                    ipLableText.style.color= "green";
                    ipState[i] = "unreachable";
                } else {
                    console.log("IP "+ip+" was reachable with data: "+data+" ("+err+")");
                    ipLableText.style.color = "red";
                    ipState[i] = "reachable";
                }
            });
            i++;
            setTimeout(nextStep, 500);
        } else {
            deferred.resolve();
        }
    };
    nextStep();
    return deferred.promise();
}

function resetButtonText() {
    var button = document.getElementById("doButton");
    button.innerHTML = "<b>Ping Selected</b>";
}

if (document.readyState === "interactive" ) {
    // add the button only in addresses tab
    var page = document.childNodes[2].nodeValue;
    if (/ Page: IP4NetworkPage /.test(page)) {
        var subtab = document.getElementsByClassName("TabPanelLabelActive")[0];
        if (subtab.innerHTML.trim() == "Addresses" ) {
            // Add button to first table
            var topBar = document.getElementsByClassName('value-table-ToolBar')[0];
            var comboBar = topBar.getElementsByClassName('combo-button-bar')[0];
            var tBody = comboBar.getElementsByTagName('tbody')[0];
            var tR = tBody.getElementsByTagName('tr')[0];
            var w = tR.insertCell(-1);
            w.innerHTML='<div class="separator"></div>';
            var x = tR.insertCell(-1);
            x.innerHTML='<span id="doButton"><b>Ping Selected</b><i> Results are not reliable</i></span>';
            var lable = document.getElementById('doButton');
            lable.addEventListener("click",() => { doPing(); },false);
        }
    }
}