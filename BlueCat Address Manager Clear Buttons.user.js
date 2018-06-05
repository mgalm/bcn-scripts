// ==UserScript==
// @name        BlueCat Address Manager Clear Button in Textboxes
// @namespace   *
// @description Modify all text type input fields to search for the x to clear in BlueCat Address Manager
// @include     */app*
// @license		MIT
// @version     3
// @grant       none
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==

if (document.readyState === "interactive" ) {
    var ins = document.querySelectorAll("input[type=text]");
    
    for (i = 0; i < ins.length; i++) {
    	ins[i].type = "search";
    	//console.log(ins[i]);
    }
}