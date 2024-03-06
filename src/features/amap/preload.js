const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('amapAPI', {
  getAmapkey: () => ipcRenderer.send('getAmapkey'),
  setWindowAmapkey: (callback) => ipcRenderer.on('amapkey', (_event, value) => callback(value)),
})
