// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut, dialog, shell } = require('electron/main')

module.exports = (win) => {
  win.webContents.on('will-navigate', (event, url) => {
    event.preventDefault()
    shell.openExternal(url)
  })
}