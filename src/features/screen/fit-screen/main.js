const { ipcMain } = require('electron')
const { app, BrowserWindow, screen } = require('electron/main')

module.exports = (win) => {
  ipcMain.on('fitscreen', ()=>{
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    win.setSize(width, height)
  })
}