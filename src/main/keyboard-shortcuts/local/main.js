const { Menu, MenuItem } = require('electron/main')

module.exports = () => {
  const menu = new Menu()
  menu.append(new MenuItem({
    label: 'Electron',
    submenu: [{
      role: 'help',
      accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
      click: () => { console.log('Electron rocks!') }
    }]
  }))
  
  Menu.setApplicationMenu(menu)
}