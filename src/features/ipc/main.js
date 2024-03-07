const { BrowserWindow, ipcMain, dialog, Menu } = require('electron/main')
const { app } = require('electron')
const template = require('@utils')

module.exports = (win) => {
  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })
  ipcMain.on('make-info', (event, title) => {
    win.webContents.send('info', 'this is a message from main')
  })

  ipcMain.handle('dialog:openFile', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog()
    if (!canceled) {
      return filePaths[0]
    }
  })

  ipcMain.on('initipcmenu', () => {
    const newtemplate = JSON.parse(JSON.stringify(template))
    newtemplate.push({
      label: 'ipc-menu',
      submenu: [
        {
          click: () => win.webContents.send('update-counter', 1),
          label: 'Increment'
        },
        {
          click: () => win.webContents.send('update-counter', -1),
          label: 'Decrement'
        }
      ]
    })

    const menu = Menu.buildFromTemplate(newtemplate)
    Menu.setApplicationMenu(menu)
  })

  ipcMain.on('counter-value', (_event, value) => {
    console.log(value) // will print value to Node console
  })

}