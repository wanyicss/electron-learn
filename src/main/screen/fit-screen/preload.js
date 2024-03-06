const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('ScreenAPI', {
  fitscreen: () => ipcRenderer.send('fitscreen')
})
