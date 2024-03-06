import React from 'react';
import { Button } from 'antd';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleclick = () => {
    window.dialogAPI.openErrorDialog()
  }

  handleclick2 = async () => {
    const index = await window.dialogAPI.openInformationDialog()
    const message = `You selected: ${index === 0 ? 'yes' : 'no'}`
    document.getElementById('info-selection').innerHTML = message
  }

  handleclick3 = async () => {
    const path = await window.dialogAPI.openFileDialog()
    document.getElementById('selected-file').innerHTML = `You selected: ${path}`
  }
  handleclick4 = async () => {
    const path = await window.dialogAPI.saveDialog()
    document.getElementById('file-saved').innerHTML = `Path selected: ${path}`
  }

  render() {
    return (
      <div>
        <Button id="error-dialog" onClick={this.handleclick}>error-dialog</Button>

        <div>
            <Button id="information-dialog" onClick={this.handleclick2}>
            information-dialog
            </Button>
            <span id="info-selection"></span>
          </div>

          <div>
            <Button id="select-directory"  onClick={this.handleclick3}>select-directory</Button>
            <span id="selected-file"></span>
          </div>

          <div>
            <Button Button id="save-dialog" onClick={this.handleclick4}>save-dialog</Button>
            <span id="file-saved"></span>
          </div>
      </div>
    );
  }
}

export default Demo;