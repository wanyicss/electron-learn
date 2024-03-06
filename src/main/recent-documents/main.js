const { app, BrowserWindow } = require('electron/main')
const fs = require('fs')
const path = require('path')

module.exports = (app) => {
  const localfile = path.join(process.cwd(), '/testdata/recently-used.md')
  fs.writeFile(localfile, 'recently-used', () => {
    app.addRecentDocument(localfile)
  })
}