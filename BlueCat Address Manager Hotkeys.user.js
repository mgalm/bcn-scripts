// ==UserScript==
// @name        BlueCat Address Manager Hotkeys
// @namespace   *
// @description Add event listener to the UI to call functions on keypress/keydown in BlueCat Address Manager
// @include     */app*
// @license     MIT
// @version     8
// @grant       none
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==
if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    if (/ Page: ConfigurationPage /.test(page)) {
        // No edit or assign in Configuration Page, deploy only
        var subtab = document.getElementsByClassName("TabPanelLabelActive")[0];
        if (/Servers/.test(subtab.innerHTML.trim())) {
            addEventD();
        }
    } else if (/ Page: IP4NetworkPage /.test(page)) {
        // Assign key for ips only in Network Page and Addresses Subtab
        // Edit is fine here too
        var subtab = document.getElementsByClassName("TabPanelLabelActive")[0];
        if (/Addresses/.test(subtab.innerHTML.trim())) {
            addEventA();
            addEventE();
        }
    } else {
        // selectively activate the edit button
        var mainTabs = document.getElementsByClassName("tab-bar active");
        if (mainTabs !== undefined) {
            var mainTab = mainTabs[0];
            if (mainTab !== undefined) {
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
    }
    // check for up to Parent link (everywhere)
    var linkButton = document.getElementById("link");
    if (linkButton !== undefined) {
        if (linkButton.name === "SYSTEMUp_to_Parent") {
            addEventU();
        }
    }
    // check for Pagination and register left right arrow for navigation
    // next
    var nextPageButton = document.getElementById("linkNextText");
    if (nextPageButton != null && nextPageButton !== undefined) {
        addEventNext();
    }
    // previous
    var prevPageButton = document.getElementById("linkPrevText");
    if (prevPageButton != null && prevPageButton !== undefined) {
        addEventPrev();
    }
}

//-----------------------
// Functions
//-----------------------

// Asssign/Allocate IP Event via a or A key
function addEventA() {
    document.addEventListener('keypress', function(e) {
        var x = e.key;
        // If the pressed keyboard button is "a" or "A" (using caps lock or shift)
        if (x == "a" || x == "A") {
            var el = document.activeElement;
            if (el.type !== "text") {
                if (el.type !== "search") {
                    if (el.type !== "input") {
                        if (el.type !== "select-one") {
                            //console.log("User pressed 'A' key in 'IPNetwork'");
                            var selected = document.getElementsByClassName("value-table-selected");
                            if (selected.length > 0) {
                                //console.log("call assign on "+selected.length+" addresses");
                                window.location = "javascript:remoteSubmitLink( document.getElementById( 'form' ), 'SAllocateIP4Address' );";
                            }
                        }
                    }
                }
            }
        }
    });
}

// Edit Event via e or E key
function addEventE() {
    document.addEventListener('keypress', function(e) {
        var x = e.key;
        // If the pressed keyboard button is "e" or "E" (using caps lock or shift)
        if (x == "e" || x == "E") {
            var el = document.activeElement;
            if (el.type !== "text") {
                if (el.type !== "search") {
                    if (el.type !== "input") {
                        if (el.type !== "select-one") {
                            //console.log("User pressed 'E' key in 'Groups' - calling edit function via 'direct' Object Id");
                            var editButton = document.getElementById('direct');
                            var link = editButton.href;
                            window.location = link;
                        }
                    }
                }
            }
        }
    });
}

// Deploy Event via d or D key
function addEventD() {
    document.addEventListener('keypress', function(e) {
        var x = e.key;
        // If the pressed keyboard button is "d" or "D" (using caps lock or shift)
        if (x == "d" || x == "D") {
            var el = document.activeElement;
            if (el.type !== "text") {
                if (el.type !== "search") {
                    if (el.type !== "input") {
                        if (el.type !== "select-one") {
                            //console.log("User pressed 'D' key in 'Servers'");
                            var selected = document.getElementsByClassName("value-table-selected");
                            if (selected.length > 0) {
                                //console.log("call assign on "+selected.length+" addresses");
                                window.location = "javascript:remoteSubmitLink( document.getElementById( 'form' ), 'SDeploy' );";
                            }
                        }
                    }
                }
            }
        }
    });
}

// Up to Parent Event via u or U key
function addEventU() {
    document.addEventListener('keypress', function(e) {
        var x = e.key;
        // If the pressed keyboard button is "u" or "U" (using caps lock or shift)
        if (x == "u" || x == "U") {
            var el = document.activeElement;
            if (el.type !== "text") {
                if (el.type !== "search") {
                    if (el.type !== "input") {
                        if (el.type !== "select-one") {
                            //console.log("User pressed 'D' key in 'Servers'");
                            var selected = document.getElementById("link");
                            if (selected !== undefined) {
                                selected.click();
                            }
                        }
                    }
                }
            }
        }
    });
}


// Navigation Button Right for Next Page via right arrow key
function addEventNext() {
    document.addEventListener('keydown', function(e) {
        var x = e.keyCode;
        // If the pressed keyboard button is "right arroy"
        if (x == "39") {
            var el = document.activeElement;
            if (el.type !== "text") {
                if (el.type !== "search") {
                    if (el.type !== "input") {
                        if (el.type !== "select-one") {
                            //console.log("User pressed 'right arrow' key while paging is active;
                            window.location = "javascript:tapestry.form.submit('form', 'linkNextText');";
                        }
                    }
                }
            }
        }
    });
}

// Navigation Button Left for Previous Page via left arrow key
function addEventPrev() {
    document.addEventListener('keydown', function(e) {
        var x = e.keyCode;
        // If the pressed keyboard button is "left arroy"
        if (x == "37") {
            var el = document.activeElement;
            if (el.type !== "text") {
                if (el.type !== "search") {
                    if (el.type !== "input") {
                        if (el.type !== "select-one") {
                            //console.log("User pressed 'left arrow' key while paging is active;
                            window.location = "javascript:tapestry.form.submit('form', 'linkPrevText');";
                        }
                    }
                }
            }
        }
    });
}