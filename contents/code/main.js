/**
 * Record the most recent window by class
 * Thanks -lemontree-: https://www.reddit.com/r/kde/comments/qn1m0g/comment/hjf7uof/?utm_source=share&utm_medium=web2x&context=3
**/

var mostRecent = {};
workspace.clientActivated.connect(updateMostRecent);
function updateMostRecent(client) {
    mostRecent[client.resourceClass] = client;
}

/**
 * Activate Window by window class name
 *
**/
function activateWindowByClass(className) {
    workspace.activeClient = mostRecent[className];
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
registerShortcut("Activate Wine Application", "Activate Wine Application", "Meta+Num+1", function() { activateWindowByClass("wine"); });
