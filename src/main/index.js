
const path = require('path');
const { app, BrowserWindow, ipcMain, dialog } = require('electron');

const darkmode = require('../features/darkmode/main')
const amap = require('../features/amap/main')
const draganddrop = require('../features/drag-and-drop/main')
const keyboard_shortcuts_global = require('../features/keyboard-shortcuts/global/main')
const interception_from_main = require('../features/keyboard-shortcuts/interception-from-main/main')
const local = require('../features/keyboard-shortcuts/local/main')
const macos_dock_menu = require('../features/macos-dock-menu/main')
const notifications = require('../features/notifications/main')
const offscreen_rendering = require('../features/offscreen-rendering/main')
const recent_documents = require('../features/recent-documents/main')
const ipc1 = require('../features/ipc/main')
const screenshot = require('../features/media/screenshot/main')
const customize_menus = require('../features/menus/customize-menus/main')
const externallink = require('../features/menus/externallink/main')
const quickstart = require('../features/quick-start/main')
const fitscreen = require('../features/screen/fit-screen/main')
const dialog_main = require('../features/dialogs/main')
const progressbar = require('../features/Progressbar/main')
const previewimg = require('../features/previewImg/main')

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

  win.loadURL('http://localhost:9000')

  win.webContents.openDevTools();

  darkmode()
  amap(win)
  progressbar(app, win)
  draganddrop()
  interception_from_main(win)
  local()
  notifications()
  offscreen_rendering(app)
  recent_documents(app)
  ipc1(win)
  screenshot()
  customize_menus(win)
  externallink(win)
  quickstart(win)
  fitscreen(win)
  dialog_main()
  previewimg(win)
}

app.on('ready', () => {
  keyboard_shortcuts_global()
  createWindow()
  macos_dock_menu(app)
});

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