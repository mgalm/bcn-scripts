// ==UserScript==
// @name        BlueCat Address Manager Fixed Header
// @namespace   *
// @description Still experimental - Fixed Header for certain tables in BlueCat Address Manager
// @include     */app*
// @require     http://code.jquery.com/jquery-latest.js
// @version     5
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @license     MIT
// @grant       none
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==
if (document.readyState === "interactive" ) {
    var pageElements = document.childNodes;
    if (pageElements !== null) {
        var pageElement = pageElements[2];
        if (pageElement !== null) {
            var text = pageElement.nodeValue;
            if (text !== null) {
                switch(text) {
                    case " Page: IP4BlockPage ":
                        fixHeader();
                        //createComboButton( 'pageMenu-combo', 'pageMenu-title', 'pageMenu-menu', 'pageMenu-button', false, false );
                        break;
                    case " Page: IP4NetworkPage ":
                        fixHeader();
                        //createComboButton( 'pageMenu-combo', 'pageMenu-title', 'pageMenu-menu', 'pageMenu-button', false, false );
                        break;
                    case " Page: ZoneDetails ":
                        fixHeader();
                        //createComboButton( 'pageMenu-combo', 'pageMenu-title', 'pageMenu-menu', 'pageMenu-button', false, false );
                        break;
                    default:
                        console.log("Unsupport page type for header fixation --> " + text);
                }
            }
        }
    }
}

function fixHeader() {
    console.log("create sticky css stylings")
    var css = '.banner-sticky { top:0px; position:sticky; position: -webkit-sticky; } .navigation-sticky { top:59px; position:sticky; position: -webkit-sticky; } .location-sticky { top:84px; position:sticky; position: -webkit-sticky; } .TabbedEntityPagePanel-sticky { top:102px; position:sticky; position: -webkit-sticky; }  .context-sticky { top:164px; position:sticky; position: -webkit-sticky; } .dialog-sticky { top:191px; position:sticky; position: -webkit-sticky; } .list-header-sticky { position: relative; position:sticky; position: -webkit-sticky; } .topToolBar-sticky { position: sticky; position: element(#informal); } ',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    console.log("add new css stylings to head element")
    head.appendChild(style);
    console.log("add sticky classes to elements")
    // now add the classes that are styled to the elements
    $("#banner").addClass("banner-sticky");
    $(".navigation-bar").addClass("navigation-sticky");
    $(".location-bar").addClass("location-sticky");
    $("#labelContainer").addClass("TabbedEntityPagePanel-sticky");
    $(".ContextPaneSwitcher").addClass("context-sticky");
    $(".dialog-hd").addClass("dialog-sticky");
    //$(".value-table-topToolBar").addClass("topToolBar-sticky");
    //$(".list-header").addClass("list-header-sticky");
};

// function fixHeader() {
//     var css = '.navigation-fixed { width:100%; top:-5px; left:0; position:fixed; margin:0; } .location-fixed { width:100%; top:18px; left:0; position:fixed; } .TabbedEntityPagePanel-fixed { width:100%; top:43px; left:0; position:fixed; margin:0; }  .context-fixed { width:100%; top:105px; left:0; position:fixed; } .dialog-fixed { width:100%; top:132px; left:0; position:fixed; } .topToolBar-fixed { width:100%; top:153px; left:0; position:fixed; }  .list-header-fixed { width:100%; top:131px; position:fixed; }',
//         head = document.head || document.getElementsByTagName('head')[0],
//         style = document.createElement('style');

//     style.type = 'text/css';
//     if (style.styleSheet){
//         style.styleSheet.cssText = css;
//     } else {
//         style.appendChild(document.createTextNode(css));
//     }

//     head.appendChild(style);

//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 230) {
//             $(".navigation-bar").addClass("navigation-fixed");
//             $(".location-bar").addClass("location-fixed");
//             $("#labelContainer").addClass("TabbedEntityPagePanel-fixed");
//             $(".ContextPaneSwitcher").addClass("context-fixed");
//             $(".dialog-hd").addClass("dialog-fixed");
//             $(".value-table-topToolBar").addClass("topToolBar-fixed");
//             //movePageMenu(document.getElementById('pageMenu-menu'));
//             //movePageMenu(document.getElementById('ComboButton_2-menu'));
//         } else {
//             $(".navigation-bar").removeClass("navigation-fixed");
//             $(".location-bar").removeClass("location-fixed");
//             $("#labelContainer").removeClass("TabbedEntityPagePanel-fixed");
//             $(".ContextPaneSwitcher").removeClass("context-fixed");
//             $(".dialog-hd").removeClass("dialog-fixed");
//             $(".value-table-topToolBar").removeClass("topToolBar-fixed");
//             //movePageMenu(document.getElementById('pageMenu-menu'));
//             //movePageMenu(document.getElementById('ComboButton_2-menu'));
//         }
//     });
// }

// function movePageMenu(el) {
//     var menu = el;
//     var left = menu.style.left;
//     var top = menu.style.top;
//     console.log('before left: '+left+' top: '+top);
//     var labelContainer = document.getElementById('labelContainer');
//     var rect = labelContainer.getBoundingClientRect();
//     console.log(rect);
//     var newtop = rect.y;// + rect.height;
//     menu.style.y = newtop;
//     top = menu.style.top;
//     console.log('after left: '+left+' top: '+top);
// }
