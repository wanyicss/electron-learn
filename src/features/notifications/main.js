const { Notification, ipcMain } = require('electron/main')

module.exports = () => {
  ipcMain.on('notificate', (event, filePath) => {
    const NOTIFICATION_TITLE = 'Basic Notification'
    const NOTIFICATION_BODY = 'Notification from the Main process'
  
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  })
}