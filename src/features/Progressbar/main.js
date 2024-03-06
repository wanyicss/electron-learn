const { ipcMain } = require('electron/main')
let progressInterval = null

module.exports = (app, win) => {
  ipcMain.on('startprogressbar', (event) => {
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

  app.on('before-quit', () => {
    clearInterval(progressInterval)
  })
}