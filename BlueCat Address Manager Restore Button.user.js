// ==UserScript==
// @name        BlueCat Address Manager Restore Button
// @description Additional Restore Button in Transaction Details in BlueCat Address Manager
// @namespace   *
// @include     */app*page=UndeleteListPage*
// @version     6
// @grant       none
// @author      Marius Galm
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==

if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    switch(page) {
        case " Page: HistoryDetails ":
            addButton();
            break;
        default:
            // nothing for now
    }
}

function addButton() {
    if (document.getElementById('Any_15')) {
        var idVar = document.getElementById("Any_15").innerHTML.trim();
        document.getElementById("Any_15").innerHTML = idVar+'<p><a id="undeleteLink" name="undelete_hist_History:'+idVar+':0" href="/app?component=undeleteLink&amp;page=UndeleteListPage&amp;service=direct&amp;session=T&amp;sp=SformMode%3Dedit&amp;sp=StableClass%3Dcom.bluecatnetworks.proteus.data.History&amp;sp=StablePageName%3DUndeleteListPage&amp;sp=StableId%3DuserUndeleteList&amp;sp=Spage%3DUndeleteListPage&amp;sp=SextraOptionalValue%3DundeleteType%7Cnull%3BpageBeforeList%7Cnull&amp;sp=Suserspecific%3Dtrue&amp;sp=ShistoryId%3DHistory%3A'+idVar+'%3A0"><img src="/images/icons/small/undelete.gif" border="0"></a></p>';
    }
}