const { ipcMain } = require('electron')

module.exports = (win) => {
  ipcMain.on('getSystemInfo',()=> {
    const versions = {}
    for (const type of ['chrome', 'node', 'electron']) {
      versions[type] = process.versions[type]
    }
    win.webContents.send('systemInfo', JSON.stringify(versions))
  })
}