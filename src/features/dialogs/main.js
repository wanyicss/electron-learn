// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron/main')
const path = require('path')

module.exports = () => {
  ipcMain.on('open-error-dialog', event => {
    dialog.showErrorBox('An Error Message', 'Demonstrating an error message.')
  })

  ipcMain.handle('open-information-dialog', async () => {
    const options = {
      type: 'info',
      title: 'Information',
      message: "This is an information dialog. Isn't it nice?",
      buttons: ['Yes', 'No']
    }
    return (await dialog.showMessageBox(options)).response
  })
  
  ipcMain.handle('open-file-dialog', async () => {
    const options = {
      properties: ['openFile', 'openDirectory']
    }
    return (await dialog.showOpenDialog(options)).filePaths
  })
  
  ipcMain.handle('save-dialog', async () => {
    const options = {
      title: 'Save an Image',
      filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]
    }
    return (await dialog.showSaveDialog(options)).filePath
  })
}