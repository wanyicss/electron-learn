const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('notifications', {
  notificate: () => ipcRenderer.send('notificate')
})
