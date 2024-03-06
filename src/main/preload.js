
const { contextBridge, ipcRenderer } = require('electron')
const fs = require('fs')

require('../features/darkmode/preload.js')
require('../features/drag-and-drop/preload.js')
require('../features/notifications/preload.js')
require('../features/offscreen-rendering/preload.js')
require('../features/ipc/preload.js')
require('../features/media/screenshot/preload.js')
require('../features/menus/customize-menus/preload.js')
require('../features/quick-start/preload.js')
require('../features/screen/fit-screen/preload.js')
require('../features/dialogs/preload.js')


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