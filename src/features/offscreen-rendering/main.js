const { app, BrowserWindow } = require('electron/main')
const { ipcMain } = require('electron')

const fs = require('fs')
const path = require('path')
let win = null
function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show:false,
    skipTaskbar: true,
    webPreferences: {
      offscreen: true
    }
  })

  win.loadURL('https://www.baidu.com')
  const imglocalpath = path.join(process.cwd(), '/testdata/baidu.png')
  win.webContents.on('paint', (event, dirty, image) => {
    fs.writeFileSync(imglocalpath, image.toPNG())
  })
  win.webContents.setFrameRate(60)
  console.log(`The screenshot has been successfully saved to ${imglocalpath}`)
}

module.exports = (app) => {
  ipcMain.on('page2img', (event, filePath) => {
    createWindow()
  })
}