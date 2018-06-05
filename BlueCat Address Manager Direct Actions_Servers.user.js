// ==UserScript==
// @name        BlueCat Address Manager Direct Actions (Server Actions)
// @namespace   *
// @description Add direct buttons for Server Actions in BlueCat Address Manager
// @include     */app*
// @license		MIT
// @version     3
// @grant       none
// @copyright   2018, Marius Galm
// @license		MIT
// @icon        https://www.bluecatnetworks.com/wp-content/uploads/2018/03/cropped-bluecat-favicon-32x32.png
// ==/UserScript==

if (document.readyState === "interactive" ) {
    var page = document.childNodes[2].nodeValue;
    if (/ Page: ConfigurationPage /.test(page)) {
        var subtab = document.getElementsByClassName("TabPanelLabelActive")[0];
        if (/Servers/.test(subtab.innerHTML.trim())) {
            // go through the h
            var outertable = document.getElementById("outerTable");
            var header = new Array();
            for (var i = 0, row; row = outertable.rows[i]; i++) {
                // process header
                if (i === 0) {
                    //iterate through rows
                    //rows would be accessed using the "row" variable assigned in the for loop
                    for (var j = 0, col; col = row.cells[j]; j++) {
                        //iterate through columns
                        // get first element of header-text content
                        var text = col.getElementsByClassName("header-text")[0];
                        if (text !== undefined) {
                            var trimmed = text.innerText.trim();
                            if (text !== undefined) {
                                if (trimmed === "Name") {
                                    header.name = j;
                                } else if (trimmed === "Managed") {
                                    header.managed = j-1;
                                } else if (trimmed === "Profile") {
                                    header.profile = j-1;
                                }
                            }
                        }
                    }
                } else {
                    // get necessary columns by header if
                    var namecell = row.cells[header.name];
                    // extract Text, because we don't need the rest
                    var name = namecell.innerText.trim();
                    var managed = row.cells[header.managed].innerText.trim();
                    var profile = row.cells[header.profile].innerText.trim();
                    var isCluster = false;
                    var image = namecell.getElementsByTagName('img');
                    if (image !== undefined) {
                        // odd, shouldn't happen
                        if (image[0].src.indexOf("cluster") > -1) {
                            var cluster = 'Found Cluster "'+name+'" as Managed: "'+managed+'" with Profile "'+profile+'"';
                            isCluster = true;
                            //console.log(cluster);
                        } else {
                            var server = 'Found Server "'+name+'" as Managed: "'+managed+'" with Profile "'+profile+'"';
                           // console.log(server);
                        }
                        // only for managed BDDS
                        if (managed === "Yes") {
                            if (profile.startsWith("BlueCat DNS")) {
                                // get Server ID from link
                                var link = namecell.getElementsByTagName("a")[0].href;
                                var rest = link.split("SingleServer%3A")[1];
                                var server_id = rest.split("%")[0];
                                // add links with icons to namecell
                                var td = namecell.getElementsByTagName("a")[0].parentNode;
                                var tr = td.parentNode;
                                // console.log(" + Adding Buttons")
                                // edit button
                                var x = tr.insertCell(-1);
                                var editlink = "";
                                if (isCluster) {
                                    // special Link for clusters (why? no idea -> the other link let's you set the hostname :-D )
                                    editlink = "/app?component=%24TabbedEntityContainer.%24PagePanel.pageMenu.direct&page=ServerPage&service=direct&session=T&sp=Spage%3DAddEditXHA&sp=Svalue%3DSingleServer%3A"+server_id+"%3A18&sp=ScontextId%3Ddetails&sp=SformMode%3Dedit";
                                }else {
                                    editlink = "/app?component=%24TabbedEntityContainer.%24PagePanel.pageMenu.direct&page=ServerPage&service=direct&session=T&sp=Spage%3DAddEditServer&sp=Svalue%3DSingleServer%3A"+server_id+"%3A18&sp=ScontextId%3Ddetails&sp=SformMode%3Dedit";
                                }
                                // more room between the name and the buttons
                                x.innerHTML='<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="'+editlink+'"><img src="/images/icons/small/document_edit.gif" border="0"></a></td>';
                                // view logs button
                                var y = tr.insertCell(-1);
                                var loglink = "/app?component=%24TabbedEntityContainer.%24PagePanel.pageMenu.direct&page=ServerPage&service=direct&session=T&sp=Spage%3DViewLogs&sp=Svalue%3DSingleServer%3A"+server_id+"%3A18"
                                y.innerHTML='<td>&nbsp;<a href="'+loglink+'"><img src="/images/icons/small/server_view.gif" border="0"></a></td>';
                                // service config button
                                var z = tr.insertCell(-1);
                                var conflink = "/app?component=%24TabbedEntityContainer.%24PagePanel.pageMenu.direct&page=ServerPage&service=direct&session=T&sp=Spage%3DServerServiceConfigure&sp=Svalue%3DSingleServer%3A"+server_id+"%3A18"
                                z.innerHTML='<td>&nbsp;<a href="'+conflink+'"><img src="/images/icons/small/server_configuration.gif" border="0"></a></td>';
                            }
                        }
                    }
                }
                //console.log(header);
            }
        }
    }
}