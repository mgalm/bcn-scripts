// ==UserScript==
// @name        BlueCat Address Manager Auto-Switch to Tagged Objects
// @namespace   *
// @description Automatically switch to Tagged Objects if no SubTags exist in BlueCat Address Manager
// @include     */app*
// @exclude     */app*sp=ScontextId%3Dtag
// @license		MIT
// @version     3
// @grant       none
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==


// give up after 5 tries = 2,5 sec
var k = 0, howManyTimes = 5;
function getNodes() {
    var count = k+1;
    console.log(" + looking for nodes "+count+"/"+howManyTimes);
    var nodes = document.getElementsByClassName("TreeNode").length;
    k++;
    if(( k < howManyTimes )&&(nodes === 0)){
        setTimeout( getNodes, 500 );
    }
    else if ((k === howManyTimes)&&(nodes === 0)) {
        document.getElementById("contextTabLink_1").click();
    } else {
        //console.log("nothing to do");
        return;
    }
};


// Exclude Pattern will prevent endless loop :-)
if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    if (/ Page: Tags /.test(page)) {
        // check subtab, should only be executed on Tags not Tagged Objects
        var subtab = document.getElementsByClassName("TabPanelLabelActive")[0];
        if (subtab.innerText === "Tags") {
            // Table View
            if (document.getElementsByClassName("empty-table").length === 1) {
                document.getElementById("contextTabLink_1").click();
                // Tree View
            } else if (document.getElementsByClassName("TreeNode").length === 0) {
                getNodes();
                //console.log(document.getElementsByClassName("TreeNode").length);
                //document.getElementById("contextTabLink_1").click();
            }
        }
    }
}