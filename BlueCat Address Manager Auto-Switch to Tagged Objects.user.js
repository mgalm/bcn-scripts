// ==UserScript==
// @name        BlueCat Address Manager Auto-Switch to Tagged Objects
// @namespace   *
// @description Automatically switch to Tagged Objects if no SubTags exist in BlueCat Address Manager
// @include     */app*
// @exclude     */app*sp=ScontextId%3Dtag
// @license		MIT
// @version     2
// @grant       none
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==

// Exclude Pattern will prevent endless loop :-)
if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    if (/ Page: Tags /.test(page)) {
    	if (document.getElementsByClassName("empty-table").length === 1) {
    		document.getElementById("contextTabLink_1").click();
    	}
    }
}