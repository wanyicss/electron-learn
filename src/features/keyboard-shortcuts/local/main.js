const { Menu, MenuItem, ipcMain } = require('electron/main')
const { app } = require('electron');
const template = require('@utils')

module.exports = () => {
  ipcMain.on('initkeyboardmenu', () => {
    const newtemplate = JSON.parse(JSON.stringify(template))
    newtemplate.push({
      label: 'keyboard-menu',
      submenu: [{
        role: 'help',
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => { console.log('Electron rocks!') }
      }]
    })
    const menu = Menu.buildFromTemplate(newtemplate)
    Menu.setApplicationMenu(menu)
  })
}