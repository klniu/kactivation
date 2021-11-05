/**
 * Activate Window by window class name
 *
**/
function activateWindowByClass(className) {
   var clients = workspace.clientList();
    for (var i = 0; i < clients.length; i++) {
        var client = clients[i];
        if (client.resourceClass == className) {
            workspace.activeClient = client
        }
    }
}

/**
 * Activate Window by window class name and resource name
 *
**/
function activateWindowByClassAndApp(className, appName) {
   var clients = workspace.clientList();
    for (var i = 0; i < clients.length; i++) {
        var client = clients[i];
        if (client.resourceClass == className && client.resourceName == appName) {
            workspace.activeClient = client
        }
    }
}

registerShortcut("Activate FSearch", "Activate FSearch", "Meta+x", function() { activateWindowByClass("fsearch"); });
registerShortcut("Activate Google Chrome", "Activate Google Chrome", "Meta+c", function() { activateWindowByClass("google-chrome"); });
registerShortcut("Activate Krusader", "Activate Krusader", "Meta+f", function() { activateWindowByClass("krusader"); });
registerShortcut("Activate Datagrip", "Activate Datagrip", "Meta+g", function() { activateWindowByClass("jetbrains-datagrip"); });
registerShortcut("Activate Intellij", "Activate Intellij", "Meta+s", function() { activateWindowByClass("jetbrains-idea"); });
registerShortcut("Activate Webstorm", "Activate Webstorm", "Meta+d", function() { activateWindowByClass("jetbrains-webstorm"); });
registerShortcut("Activate Krusader", "Activate Krusader", "Meta+f", function() { activateWindowByClass("krusader"); });
registerShortcut("Activate Konsole", "Activate Konsole", "Meta+t", function() { activateWindowByClass("konsole"); });
registerShortcut("Activate Nvim-qt", "Activate Nvim-qt", "Meta+r", function() { activateWindowByClass("nvim-qt"); });
registerShortcut("Activate Okular", "Activate Okular", "Meta+p", function() { activateWindowByClass("okular"); });
registerShortcut("Activate Windows", "Activate Windows", "Meta+m", function() { activateWindowByClass("remote-viewer"); });
registerShortcut("Activate Wiznote", "Activate Wiznote", "Meta+v", function() { activateWindowByClass("wiznote"); });
registerShortcut("Activate WPSOffice", "Activate WPSOffice", "Meta+w", function() { activateWindowByClass("wpsoffice"); });

registerShortcut("Activate WxWork", "Activate WxWork", "Meta+Num+1", function() { activateWindowByClassAndApp("wine", "wxwork.exe"); });
