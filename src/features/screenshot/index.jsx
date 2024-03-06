import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''}
  }

  componentDidMount() {
    

  }

  notifyMain = () => {
    window.ipcAPI.setTitle('named by render')
  }

  notifyRender = () => {
    window.ipcAPI.trigerMainInfo((info)=>{
      console.info(info)
    })
    window.ipcAPI.getMainInfo((info)=>{
      console.info(info)
    })
  }

  clickbtn = async () => {
    const filePath = await window.ipcAPI.openFile()
    const filePathElement = document.getElementById('filePath')
    filePathElement.innerText = filePath
  }

  handleClick = async () => {
    const screenshotMsg = document.getElementById('screenshot-path')
    screenshotMsg.textContent = 'Gathering screens...'
    screenshotMsg.textContent = await window.mediaAPI.takeScreenshot()
  }

  render() {
    return (
      <div>
        <h3>Take a Screenshot</h3>
        <i>Supports: Win, macOS, Linux <span>|</span> Process: Renderer</i>
        <div>
          <div>
            <div>
              <button id="screen-shot" onClick={this.handleClick}>View Demo</button>
              <span id="screenshot-path"></span>
            </div>
            <p>This demo uses the <code>desktopCapturer</code> module to gather screens in use and select the entire screen and take a snapshot of what is visible.</p>
            <p>Clicking the demo button will take a screenshot of your current screen and open it in your default viewer.</p>
          </div>
      </div>
      </div>
    );
  }
}

export default Demo;