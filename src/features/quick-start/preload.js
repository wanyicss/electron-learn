const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('SystemAPI', {
  getSystemInfo: () => {
    ipcRenderer.send('getSystemInfo');
  },
  showSystemInfo: (callback) => ipcRenderer.on('systemInfo', (_event, value) => {
    callback(value)
  })
})
