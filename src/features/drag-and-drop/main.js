const { ipcMain } = require('electron/main')
const path = require('path')
const fs = require('fs')
const https = require('https')


const iconName = path.join(__dirname, 'iconForDragAndDrop.png')
const icon = fs.createWriteStream(iconName)

// Create a new file to copy - you can also copy existing files.
fs.writeFileSync(path.join(__dirname, 'drag-and-drop-1.md'), '# First file to test drag and drop')
fs.writeFileSync(path.join(__dirname, 'drag-and-drop-2.md'), '# Second file to test drag and drop')

https.get('https://img.alicdn.com/imgextra/i1/O1CN012YuL9f1hnz7fqLIOX_!!6000000004323-2-tps-452-452.png', (response) => {
  response.pipe(icon)
})

module.exports = (ipcMain) => {
  ipcMain.on('ondragstart', (event, filePath) => {
    event.sender.startDrag({
      file: path.join(__dirname, filePath),
      icon: iconName
    })
  })
}