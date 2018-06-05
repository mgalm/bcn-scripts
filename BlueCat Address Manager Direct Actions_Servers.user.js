// ==UserScript==
// @name        BlueCat Address Manager Direct Actions (Server Actions)
// @namespace   *
// @description Add direct buttons for Server Actions in BlueCat Address Manager
// @include     */app*
// @license		MIT
// @version     1
// @grant       none
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-50x50.png
// ==/UserScript==

if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
	if (/ Page: ServerPage /.test(page)) {
        // go through the 
        var table = document.getElementById("outerTable");
        for (var i = 0, row; row = table.rows[i]; i++) {
            // ignore header
            if (i == 0) { continue; }
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (var j = 0, col; col = row.cells[j]; j++) {
                //iterate through columns
                //columns would be accessed using the "col" variable assigned in the for loop
                var image = col.getElementsByTagName('img');
                if (image[0].src.indexOf("cluster") > -1) {
                    // this should be a cluster
                } else {
                    // everything else is a server
                }
            }
        }
        //var subtab = document.getElementsByClassName("TabPanelLabelActive")[0];
        //if (! /Details/.test(subtab.innerHTML.trim())) {
        //    var actions = document.getElementsByClassName('action-items')[0];
        //    var tBody = actions.getElementsByTagName('tbody')[0];
        //    var w = tBody.insertRow(-1);
        //    w.innerHTML='<tr id="For_Deploy"><td class="action-item"><div id="action-item" class="with-description-with-icon"><a href="javascript:remoteSubmitLink( document.getElementById( \'form\' ), \'SDeploy\' );"><div class="selection " onmouseover="onActionItemOver(this, event);" onmouseout="onActionItemOut(this, event);" onclick="onActionItemClick(this, event);"><table class="action-item-selection" cellspacing="0" cellpadding="0"><tbody><tr><td class="icon"><div class="active"><img src="/images/icons/small/flash.gif" border="0"></div></td><td class="action"><div class="active"><div class="action-title">Deploy</div><div class="action-description">Deploy this server</div></div></td></tr></tbody></table></div></a></div></td></tr>';
        //}
    }
}
