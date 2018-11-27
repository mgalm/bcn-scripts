// ==UserScript==
// @name        BlueCat Address Manager Color Change
// @namespace   *
// @description Change the color of the UI in BlueCat Address Manager
// @include     */app*
// @version     2
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @license     MIT
// @grant       none
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==

// -----------------------------------------------------------------------
// Please Adjust this to reflect the hostname of the URL you access
// -> Can be a full qualified name or hostname only

var redHost = "bam-01.n3k.de";
var greenHost = "bam-02";
// -----------------------------------------------------------------------


// CODE

if (document.readyState === "interactive" ) {
    if (window.location.hostname == redHost) {
        toRed();
    } else if (window.location.hostname == greenHost) {
        toGreen();
    }
}

function toRed() {
	var rotation= "165";
    var links = document.getElementsByTagName("link");
    var linksList = Array.prototype.slice.call(links);
    linksList.forEach(function(link) {
        if (link.href.includes("/cached-style/proteus-silver.css")) {
            var sheet = link.sheet;
            var rule = ".tab-bar { filter: hue-rotate("+rotation+"deg)}";
            var rule2 = "#banner { filter: hue-rotate("+rotation+"deg)}";
            sheet.insertRule(rule,0);
            sheet.insertRule(rule2,0);
        }
    });
};

function toGreen() {
	var rotation= "-85";
    var links = document.getElementsByTagName("link");
    var linksList = Array.prototype.slice.call(links);
    linksList.forEach(function(link) {
        if (link.href.includes("/cached-style/proteus-silver.css")) {
            var sheet = link.sheet;
            var rule = ".tab-bar { filter: hue-rotate("+rotation+"deg)}";
            var rule2 = "#banner { filter: hue-rotate("+rotation+"deg)}";
            sheet.insertRule(rule,0);
            sheet.insertRule(rule2,0);
        }
    });
};