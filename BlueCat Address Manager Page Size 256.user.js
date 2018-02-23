// ==UserScript==
// @name        BlueCat Address Manager Page Size 256
// @namespace   *
// @description Add option for Page Size of 256 in BlueCat Address Manager
// @include     */app*
// @version     3
// @grant       none
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/themes/bluecat/assets/img/icons/favicon.ico
// ==/UserScript==

if (document.readyState === "interactive" ) {
    // where will we add
    var sels = document.getElementsByTagName("select");
    var selects = [];
    var leng = sels.length;
    for ( var i = 0 ; i < sels.length ; i++ ) {
        // only into PageSize objects
        if (sels[i].hasAttribute("onchange")) {
            if (sels[i].getAttribute("onchange").includes("performChangePageSize")) {
                selects.push(sels[i]);
            }
        }
    }
    // what is pushed in
    var string = "256,512,1024";
    var array = string.split(",");
    // do push
    for ( var j = 0 ; j < selects.length ; j++ ) {
        if(selects[j]){
            for ( var k = 0 ; k < array.length ; k++ ) {
                var val = array[k];
                var option = document.createElement("option");
                option.text = val;
                option.value = val;
                selects[j].appendChild(option);
            }
        }
    }
}