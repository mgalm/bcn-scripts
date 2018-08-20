// ==UserScript==
// @name        BlueCat Address Manager Hotkeys
// @namespace   *
// @description Add event listener to the UI to call functionon keypress in BlueCat Address Manager
// @include     */app*
// @license     MIT
// @version     1
// @grant       none
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==
if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    if (/ Page: ConfigurationPage /.test(page)) {
        //console.log("No edit in Configuration Page, sorry");
    } else {
        var mainTab = document.getElementsByClassName("tab-bar active")[0];
        if (/IP Space/.test(mainTab.innerHTML.trim())) {
            document.addEventListener('keypress', function(e) {
                var x = e.key;
                // If the pressed keyboard button is "e" or "E" (using caps lock or shift), alert some text and call link

                if (x == "e" || x == "E") {
                    //console.log("User pressed 'E' key in 'IP Space' - calling edit function via 'direct' Object Id");
                    var editButton = document.getElementById('direct');
                    var link = editButton.href;
                    window.location = link;
                }
            });
        } else if (/DNS/.test(mainTab.innerHTML.trim())) {
            document.addEventListener('keypress', function(e) {
                var x = e.key;
                // If the pressed keyboard button is "e" or "E" (using caps lock or shift), alert some text and call link

                if (x == "e" || x == "E") {
                    //console.log("User pressed 'E' key in 'DNS' - calling edit function via 'direct' Object Id");
                    var editButton = document.getElementById('direct');
                    var link = editButton.href;
                    window.location = link;
                }
            });
        } else if (/Devices/.test(mainTab.innerHTML.trim())) {
            document.addEventListener('keypress', function(e) {
                var x = e.key;
                // If the pressed keyboard button is "e" or "E" (using caps lock or shift), alert some text and call link

                if (x == "e" || x == "E") {
                    console.log("User pressed 'E' key in 'Devices' - calling edit function via 'direct' Object Id");
                    var editButton = document.getElementById('direct');
                    var link = editButton.href;
                    window.location = link;
                }
            });

        } else if (/Groups/.test(mainTab.innerHTML.trim())) {
            document.addEventListener('keypress', function(e) {
                var x = e.key;
                // If the pressed keyboard button is "e" or "E" (using caps lock or shift), alert some text and call link

                if (x == "e" || x == "E") {
                    //console.log("User pressed 'E' key in 'Groups' - calling edit function via 'direct' Object Id");
                    var editButton = document.getElementById('direct');
                    var link = editButton.href;
                    window.location = link;
                }
            });
        }
    }
}