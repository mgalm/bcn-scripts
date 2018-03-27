// ==UserScript==
// @name        BlueCat Address Manager Direct Actions (Deploy)
// @namespace   *
// @description Add direct buttons for Deploy Actions in BlueCat Address Manager
// @include     */app*
// @license		MIT
// @version     1
// @grant       none
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/themes/bluecat/assets/img/icons/favicon.ico
// ==/UserScript==

if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    if (/ Page: ConfigurationPage /.test(page)) {
        var subtab = document.getElementsByClassName("TabPanelLabelActive")[0];
        if (/Servers/.test(subtab.innerHTML.trim())) {
            var topBar = document.getElementsByClassName('value-table-topToolBar')[0];
            var tBody = topBar.getElementsByTagName('tbody')[2];
            var tR = tBody.getElementsByTagName('tr')[0];
            var w = tR.insertCell(-1);
            w.innerHTML='<div class="separator"></div>';
            var x = tR.insertCell(-1);
            x.innerHTML='<span id="deployButton" class="title"><a style="color:inherit; text-decoration: none;" href="javascript:remoteSubmitLink( document.getElementById( \'form\' ), \'SDeploy\' );"><img src="/images/icons/small/flash.gif" border="0">&nbsp;<b style="vertical-align: super;">Deploy</b></a></span>';
            var y = tR.insertCell(-1);
            y.innerHTML='<div class="separator"></div>';
            var z = tR.insertCell(-1);
            z.innerHTML='<span id="deployStatusButton" class="title"><a style="color:inherit; text-decoration: none;" href="/app?component=%24ValueObjectFormTable_14.%24ComboButtonBar.%24ComboButton.direct&page=ConfigurationPage&service=direct&session=T&sp=Spage%3DDeploymentStatus&sp=Spage%3DDeploymentStatus"><img src="/images/icons/small/flash_question.gif" border="0">&nbsp;<span class="title-center"><b style="vertical-align: super;">Deployment Status</b></a></span>';
        }
    }

    if (/ Page: IP4NetworkPage /.test(page)) {
        var topBar = document.getElementsByClassName('value-table-topToolBar')[0];
        var tBody = topBar.getElementsByTagName('tbody')[2];
        var tR = tBody.getElementsByTagName('tr')[0];
        var w = tR.insertCell(-1);
        w.innerHTML='<div class="separator"></div>';
        var x = tR.insertCell(-1);
        x.innerHTML='<span id="deployButton" class="title"><a style="color:inherit; text-decoration: none;" href="javascript:remoteSubmitLink( document.getElementById( \'form\' ), \'SQuickDeploy\' );"><img src="/images/icons/small/flash.gif" border="0">&nbsp;<b style="vertical-align: super;">Quick Deploy</b></a></span>';
        var y = tR.insertCell(-1);
    }

}