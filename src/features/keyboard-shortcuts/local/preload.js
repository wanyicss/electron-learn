const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('keyboardAPI', {
  initkeyboardmenu:() => ipcRenderer.send('initkeyboardmenu')
})
