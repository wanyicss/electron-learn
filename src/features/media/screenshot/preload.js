const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('mediaAPI', {
  takeScreenshot: () => ipcRenderer.invoke('take-screenshot', window.devicePixelRatio)
})
