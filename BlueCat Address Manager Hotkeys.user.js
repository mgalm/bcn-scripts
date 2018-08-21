// ==UserScript==
// @name        BlueCat Address Manager Hotkeys
// @namespace   *
// @description Add event listener to the UI to call functionon keypress in BlueCat Address Manager
// @include     */app*
// @license     MIT
// @version     2
// @grant       none
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==
if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    if (/ Page: ConfigurationPage /.test(page)) {
        //console.log("No edit in Configuration Page, sorry");
    } else if (/ Page: IP4NetworkPage /.test(page)) {
        //assign key for ips
        var subtab = document.getElementsByClassName("TabPanelLabelActive")[0];
        if (/Addresses/.test(subtab.innerHTML.trim())) {
            addEventA();
        }
    }else {
        var mainTab = document.getElementsByClassName("tab-bar active")[0];
        if (/IP Space/.test(mainTab.innerHTML.trim())) {
            addEventE();
        } else if (/DNS/.test(mainTab.innerHTML.trim())) {
            addEventE();
        } else if (/Devices/.test(mainTab.innerHTML.trim())) {
            addEventE();
        } else if (/Groups/.test(mainTab.innerHTML.trim())) {
            addEventE();
        }
    }
}


function addEventA() {
    document.addEventListener('keypress', function(e) {
        var x = e.key;
        // If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text and call link
        if (x == "a" || x == "A") {
            //console.log("User pressed 'A' key in 'IPNetwork' - calling edit function via 'direct' Object Id");
            var selected = document.getElementsByClassName("value-table-selected");
            if (selected.length >0) {
                //console.log("call assign on "+selected.length+" addresses");
                window.location = "javascript:remoteSubmitLink( document.getElementById( 'form' ), 'SAllocateIP4Address' );";
            }
        }
    });
}

function addEventE() {
    document.addEventListener('keypress', function(e) {
        var x = e.key;
        // If the pressed keyboard button is "e" or "E" (using caps lock or shift), alert some text and call linkh
        if (x == "e" || x == "E") {
            //console.log("User pressed 'E' key in 'Groups' - calling edit function via 'direct' Object Id");
            var editButton = document.getElementById('direct');
            var link = editButton.href;
            window.location = link;
        }
    });
}