// ==UserScript==
// @name        BlueCat Address Manager Generate Links
// @namespace   *
// @description Generate Links from Text in table cells in BlueCat Address Manager
// @include     */app*
// @version     3
// @grant       none
// @author      Marius Galm
// @copyright   2019, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// @require     http://code.jquery.com/jquery-latest.min.js
// @require     https://raw.githubusercontent.com/alexcorvi/anchorme.js/gh-pages/dist-browser/anchorme.min.js
// ==/UserScript==

var pattern = /^(https?:\/\/|ftps?:\/\/)?([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?(:(\d{1,5}))?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
if (document.readyState === "interactive" ) {
	$("#outerTable tr td").not(':first').hover(
		function () {
            //console.log($(this)[0].getElementsByTagName("span")[0]);
			if ($(this)[0].getElementsByTagName("span")[0].innerHTML.trim() !== "") {
				var str = $(this)[0].getElementsByTagName("span")[0].innerHTML.trim();
				if ( str.match(pattern) ) {
                    //console.log("found string to link");
					$(this)[0].getElementsByTagName("span")[0].innerHTML = anchorme(str, {attributes:[ { name:"target", value:"_blank" } ] } );
				}
			}
		}
	);
}