const { contextBridge, ipcRenderer } = require('electron/renderer')
const fs = require('fs')
contextBridge.exposeInMainWorld('previewImgAPI', {
  openfiledialog: () => ipcRenderer.send('openfiledialog'),
  previewfile: (callback) => ipcRenderer.on('previewfile', (_event, value) => {
    const data = fs.readFileSync(value)
    callback(data.toString('base64'))
  })
})
