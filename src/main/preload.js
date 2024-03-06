
const { contextBridge, ipcRenderer } = require('electron')
const fs = require('fs')

require('./darkmode/preload.js')
require('./drag-and-drop/preload.js')
require('./notifications/preload.js')
require('./offscreen-rendering/preload.js')
require('./ipc/preload.js')
require('./media/screenshot/preload.js')
require('./menus/customize-menus/preload.js')
require('./quick-start/preload.js')
require('./screen/fit-screen/preload.js')


contextBridge.exposeInMainWorld('electronAPI', {
  startprogressbar: () => ipcRenderer.send('startprogressbar'),
  stopprogressbar: () => ipcRenderer.send('stopprogressbar'),
  getAmapkey: () => ipcRenderer.send('getAmapkey'),
  setWindowAmapkey: (callback) => ipcRenderer.on('amapkey', (_event, value) => callback(value)),
  openfiledialog: () => ipcRenderer.send('openfiledialog'),
  previewfile: (callback) => ipcRenderer.on('previewfile', (_event, value) => {
    const data = fs.readFileSync(value)
    callback(data.toString('base64'))
  }),
})