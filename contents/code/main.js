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


registerShortcut("Activate FSearch", "Activate FSearch", "Ctrl+Alt+Shift+x", function() { activateWindowByClass("fsearch"); });
registerShortcut("Activate Google Chrome", "Activate Google Chrome", "Ctrl+Alt+Shift+c", function() { activateWindowByClass("google-chrome"); });
registerShortcut("Activate Krusader", "Activate Krusader", "", function() { activateWindowByClass("krusader"); });
registerShortcut("Activate Dolphin", "Activate Dolphin", "Ctrl+Alt+Shift+f", function() { activateWindowByClass("dolphin"); });
registerShortcut("Activate Datagrip", "Activate Datagrip", "Ctrl+Alt+Shift+g", function() { activateWindowByClass("jetbrains-datagrip"); });
registerShortcut("Activate Intellij", "Activate Intellij", "Ctrl+Alt+Shift+s", function() { activateWindowByClass("jetbrains-idea"); });
registerShortcut("Activate Webstorm", "Activate Webstorm", "Ctrl+Alt+Shift+d", function() { activateWindowByClass("jetbrains-webstorm"); });
registerShortcut("Activate Krusader", "Activate Krusader", "Ctrl+Alt+Shift+f", function() { activateWindowByClass("krusader"); });
registerShortcut("Activate Konsole", "Activate Konsole", "Ctrl+Alt+Shift+t", function() { activateWindowByClass("konsole"); });
registerShortcut("Activate Nvim-qt", "Activate Nvim-qt", "Ctrl+Alt+Shift+n", function() { activateWindowByClass("nvim-qt"); });
registerShortcut("Activate GVim", "Activate GVim", "Ctrl+Alt+Shift+r", function() { activateWindowByClass("gvim"); });
registerShortcut("Activate Okular", "Activate Okular", "Ctrl+Alt+Shift+p", function() { activateWindowByClass("okular"); });
registerShortcut("Activate Windows", "Activate Windows", "Ctrl+Alt+Shift+m", function() { activateWindowByClass("remote-viewer"); });
registerShortcut("Activate Wiznote", "Activate Wiznote", "Ctrl+Alt+Shift+v", function() { activateWindowByClass("wiznote"); });
registerShortcut("Activate WPSOffice", "Activate WPSOffice", "Ctrl+Alt+Shift+w", function() { activateWindowByClass("wpsoffice"); });
registerShortcut("Activate Wine Application", "Activate Wine Application", "Ctrl+Alt+Shift+Num+1", function() { activateWindowByClass("wine"); });
