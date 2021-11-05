# Installation
```sh
git clone https://github.com/klniu/kactivation.git
kpackagetool5 --type=KWin/Script -i ./kactivation
```

# custom
find the resourceClass and modify the registerShortcut to set your own application shortcuts.

```js
registerShortcut("Activate FSearch", "Activate FSearch", "Super+x", function() { activateWindowByClass("fsearch"); });
```

# TODO
* waiting for the KWin stackingOrder Api in script
