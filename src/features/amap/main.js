const { ipcMain } = require('electron')
const amapkey = require('./amapkey')

module.exports = (win) => {
  ipcMain.on('getAmapkey', (event) => {
    win.webContents.send('amapkey', amapkey)
  })
}