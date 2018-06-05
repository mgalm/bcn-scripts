// ==UserScript==
// @name        BlueCat Address Manager Resizable Columns
// @namespace   *
// @description Dynamic Column Resizing in BlueCat Address Manager
// @include     */app*
// @version     6
// @grant       none
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-50x50.png
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

//jQuery fix
this.$ = this.jQuery = jQuery.noConflict(true);

// declare used function
function reSize() {
    $(function() {
        var pressed = false;
        var start = undefined;
        var startX, startWidth;

        $("table th").mousedown(function(e) {
            start = $(this);
            pressed = true;
            startX = e.pageX;
            startWidth = $(this).width();
            $(start).addClass("resizing");
        });

        $(document).mousemove(function(e) {
            if(pressed) {
                if(startWidth+(e.pageX-startX) > 9 ) {
                    $(start).width(startWidth+(e.pageX-startX));
                }
            }
        });

        $(document).mouseup(function() {
            if(pressed) {
                $(start).removeClass("resizing");
                pressed = false;
            }
        });
    });
}

// do something on specific pages
if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    if (/Page: AddEdit/.test(page)) {
        page = "AddEditDummy";
    } else if (/Page: Edit/.test(page)) {
        page = "AddEditDummy";
    }
    switch(page) {
        case " Page: SystemInformation ":
            break;
        case " Page: UpdateSystem ":
            break;
        case "AddEditDummy":
            break;
        case " Page: AllocateIP4Address ":
            break;
        default:
            reSize();
    }
}