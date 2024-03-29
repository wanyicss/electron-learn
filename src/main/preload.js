
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
require('../features/Progressbar/preload.js')
require('../features/amap/preload.js')
require('../features/previewImg/preload.js')
require('../features/keyboard-shortcuts/local/preload.js')

const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('mainAPI', {
  resetmenu: () => ipcRenderer.send('resetmenu')
})
