import React from 'react';

class Demo extends React.Component {
  componentDidMount() {
    window.SystemAPI.getSystemInfo()
    window.SystemAPI.showSystemInfo((versions)=>{
      const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
      }
    
      for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, JSON.parse(versions)[type])
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>
            We are using Node.js <span id="node-version"></span>,
            Chromium <span id="chrome-version"></span>,
            and Electron <span id="electron-version"></span>.
        </p>
      </div>
    );
  }
}

export default Demo;