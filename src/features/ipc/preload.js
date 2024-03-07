const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('ipcAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  trigerMainInfo: (title) => ipcRenderer.send('make-info'),
  getMainInfo: (callback) => ipcRenderer.on('info', (_event, value) => callback(value)),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value)),
  counterValue: (value) => ipcRenderer.send('counter-value', value),
  initipcmenu:() => ipcRenderer.send('initipcmenu')
})
