const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('progessbarAPI', {
  startprogressbar: () => ipcRenderer.send('startprogressbar'),
  stopprogressbar: () => ipcRenderer.send('stopprogressbar')
})
