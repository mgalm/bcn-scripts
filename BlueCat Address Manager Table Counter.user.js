// ==UserScript==
// @name        BlueCat Address Manager Table Counter
// @namespace   *
// @description Add count of value Table in BlueCat Address Manager (no paging support)
// @include     */app*
// @license		MIT
// @version     1
// @grant       none
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==

if (document.readyState === "interactive" ) {
    //for dialog-hd
    var dialogBars = document.getElementsByClassName('dialog-hd');
    if (( dialogBars !== undefined ) || (dialogBars.length < 0)) {
        //console.log(dialogBars.length);
        if (dialogBars.length === 1) {
            if ( dialogBars[0] !== undefined ) {
                var idname = dialogBars[0].id;
                var prefix = idname.split('-bar')[0];
                var namepart = prefix.split('_');
                var part = namepart[1];
                var name = namepart[0];
                var outertable;
                if (part === undefined) {
                    //console.log("iterating through first "+name);
                    outertable = document.getElementById("outerTable");
                } else {
                    part = "_"+part;
                    //console.log("iterating "+name+" with part "+part);
                    outertable = document.getElementById("outerTable"+part);
                    //console.log(outertable);
                    if ((outertable == null)||(outertable === undefined)) {
                        // fallback to no part query
                        //console.log("ahhh");
                        outertable = document.getElementById("outerTable");
                        //console.log(outertable);
                    }
                }
                if (outertable.getElementsByClassName("empty-table").length !== 1) {
                    var count = outertable.rows.length - 1;
                    var tBody = dialogBars[0].getElementsByTagName('tbody')[0];
                    console.log(tBody);
                    var tR = tBody.getElementsByTagName('tr')[0];
                    console.log(tR);
                    var w = tR.insertCell(1);
                    w.innerHTML='<div class="separator"></div>';
                    var x = tR.insertCell(2);
                    x.innerHTML='<span class="label">Count: '+count+'</span>';
                }
            }
        } else {
            for (var i = 0; i < dialogBars.length; i++) {
                //console.log(dialogBars[i]);
                if ( dialogBars[i] !== undefined ) {
                    var idname = dialogBars[i].id;
                    var prefix = idname.split('-bar')[0];
                    var namepart = prefix.split('_');
                    var part = namepart[1];
                    var name = namepart[0];
                    var outertable;
                    if (part === undefined) {
                        console.log("iterating through first "+name);
                        outertable = document.getElementById("outerTable");
                    } else {
                        part = "_"+part;
                        console.log("iterating "+name+" with part "+part);
                        outertable = document.getElementById("outerTable"+part);
                    }
                    if (outertable.getElementsByClassName("empty-table").length !== 1) {
                        var count = outertable.rows.length - 1;
                        var tBody = dialogBars[i].getElementsByTagName('tbody')[0];
                        var tR = tBody.getElementsByTagName('tr')[1];
                        var w = tR.insertCell(-1);
                        w.innerHTML='<div class="separator"></div>';
                        var x = tR.insertCell(-1);
                        x.innerHTML='<span class="label">Count: '+count+'</span>';
                    }
                }
            }
        }
    }
}
