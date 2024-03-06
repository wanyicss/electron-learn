const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('offscreenrender', {
  page2img: () => ipcRenderer.send('page2img')
})
