const { ipcMain } = require('electron/main')
const { dialog } = require('electron');

module.exports = (win) => {
  ipcMain.on('openfiledialog', (event) => {
    dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif', 'bmp'] }
      ]
    }).then(result => {
      if (!result.canceled && result.filePaths.length > 0) {
        event.reply('selected-file', result.filePaths[0]);
        win.webContents.send('previewfile', result.filePaths[0])
      }
    }).catch(err => {
      console.log(err);
    });
  })
}