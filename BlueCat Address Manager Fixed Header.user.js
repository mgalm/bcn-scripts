// ==UserScript==
// @name        BlueCat Address Manager Fixed Header
// @namespace   *
// @description Still experimental - Fixed Header for certain tables in BlueCat Address Manager
// @include     */app*
// @require     http://code.jquery.com/jquery-latest.js
// @version     3
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @license     MIT
// @grant       none
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==
var pageElements = document.childNodes;
if (pageElements !== null) {
    var pageElement = pageElements[2];
    if (pageElement !== null) {
        var text = pageElement.nodeValue;
        if (text !== null) {
            switch(text) {
                case " Page: IP4BlockPage ":
                    fixHeader();
                    break;
                case " Page: IP4NetworkPage ":
                    fixHeader();
                    break;
                case " Page: ZoneDetails ":
                    fixHeader();
                    break;
                default:
                    console.log("Unsupport page type for header fixation --> " + text);
            }
        }
    }
}

function fixHeader() {
    var css = '.navigation-fixed { width:100%; top:-5px; left:0; position:fixed; margin:0; } .location-fixed { width:100%; top:18px; left:0; position:fixed; } .context-fixed { width:100%; top:43px; left:0; position:fixed; } .topToolBar-fixed { width:100%; top:70px; left:0; position:fixed; }  .list-header-fixed { width:100%; top:112px; position:fixed; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);


    $(window).scroll(function () {
        if ($(window).scrollTop() > 226) {
            $(".navigation-bar").addClass("navigation-fixed");
            $(".location-bar").addClass("location-fixed");
            $(".ContextPaneSwitcher").addClass("context-fixed");
            $(".value-table-topToolBar").addClass("topToolBar-fixed");
        } else {
            $(".navigation-bar").removeClass("navigation-fixed");
            $(".location-bar").removeClass("location-fixed");
            $(".ContextPaneSwitcher").removeClass("context-fixed");
            $(".value-table-topToolBar").removeClass("topToolBar-fixed");
        }
    });
}
