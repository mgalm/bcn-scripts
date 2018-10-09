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
	var outertable = document.getElementById("outerTable");
	var count = outertable.rows.length - 1;
	var bottomBars = document.getElementsByClassName('value-table-bottomToolBar');
	if (( bottomBars !== undefined ) || (bottomBars.length <= 0)) {
		var bottomBar = bottomBars[0];
		if ( bottomBar !== undefined ) {
			var tBody = bottomBar.getElementsByTagName('tbody')[0];
			var tR = tBody.getElementsByTagName('tr')[0];
			var w = tR.insertCell(0);
			w.innerHTML='<span class="title-left"><strong>Count: '+count+'</stong></span>';
		}
	}
}