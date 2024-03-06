const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('menusAPI', {
  showContextMenu: () => ipcRenderer.send('show-context-menu')
})
