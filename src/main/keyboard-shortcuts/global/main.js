const { globalShortcut } = require('electron/main')

module.exports = () => {
  globalShortcut.register('Alt+CommandOrControl+I', () => {
    console.log('Electron loves global shortcuts!')
  })
}