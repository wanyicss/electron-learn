
const path = require('path');
const amapkey = require('./amapkey')
const { app, BrowserWindow, ipcMain, dialog } = require('electron');

const darkmode = require('./darkmode/main')
const draganddrop = require('./drag-and-drop/main')
const keyboard_shortcuts_global = require('./keyboard-shortcuts/global/main')
const interception_from_main = require('./keyboard-shortcuts/interception-from-main/main')
const local = require('./keyboard-shortcuts/local/main')
const macos_dock_menu = require('./macos-dock-menu/main')
const notifications = require('./notifications/main')
const offscreen_rendering = require('./offscreen-rendering/main')
const recent_documents = require('./recent-documents/main')

let progressInterval = null
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true, // 启用上下文隔离
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  ipcMain.on('startprogressbar', (event) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    
    const INCREMENT = 0.03
    const INTERVAL_DELAY = 100 // ms
    let c = 0
    progressInterval = setInterval(() => {
      // update progress bar to next value
      // values between 0 and 1 will show progress, >1 will show indeterminate or stick at 100%
      win.setProgressBar(c)

      // increment or reset progress bar
      if (c < 2) {
        c += INCREMENT
      } else {
        c = (-INCREMENT * 5) // reset to a bit less than 0 to show reset state
      }
    }, INTERVAL_DELAY)
  })

  ipcMain.on('stopprogressbar', (event) => {
    win.setProgressBar(-1)
    clearInterval(progressInterval)
  })

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
  
  ipcMain.on('getAmapkey', (event) => {
    win.webContents.send('amapkey', amapkey)
  })


  win.loadURL('http://localhost:9000')

  win.webContents.openDevTools();

  darkmode(ipcMain)
  draganddrop(ipcMain)
  interception_from_main(win)
  local()
  notifications(ipcMain)
  offscreen_rendering(app, ipcMain)
  recent_documents(app)
}

app.on('ready', () => {
  keyboard_shortcuts_global()
  createWindow()
  macos_dock_menu(app)
});

app.on('before-quit', () => {
  clearInterval(progressInterval)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    keyboard_shortcuts_global()
    createWindow()
  }
})