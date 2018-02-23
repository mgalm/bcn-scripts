// ==UserScript==
// @name        BlueCat Address Manager Page Size 256
// @namespace   *
// @description Add option for Page Size of 256 in BlueCat Address Manager
// @include     */app*
// @version     2
// @grant       none
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/themes/bluecat/assets/img/icons/favicon.ico
// ==/UserScript==

if (document.readyState === "interactive" ) {
    var sel = document.getElementById("PropertySelection");
    if(sel){
        var option = document.createElement("option");
        option.text = "256";
        option.value = "256";
        sel.appendChild(option);
    }
    var sel0 = document.getElementById("PropertySelection_0");
    if(sel0){
        var option = document.createElement("option");
        option.text = "256";
        option.value = "256";
        sel0.appendChild(option);
    }
}