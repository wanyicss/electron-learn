const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('dialogAPI', {
  openErrorDialog: () => ipcRenderer.send('open-error-dialog'),
  openInformationDialog: () => ipcRenderer.invoke('open-information-dialog'),
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  saveDialog: () => ipcRenderer.invoke('save-dialog')
})
