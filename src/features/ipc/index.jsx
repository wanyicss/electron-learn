import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''}
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

  clickbtn2 = () => {
    const counter = document.getElementById('counter')
    window.ipcAPI.onUpdateCounter((value) => {
      const oldValue = Number(counter.innerText)
      const newValue = oldValue + value
      counter.innerText = newValue.toString()
      window.ipcAPI.counterValue(newValue)
    })
  }

  componentDidMount() {
    window.ipcAPI.initipcmenu()
  }

  componentWillUnmount() {
    window.mainAPI.resetmenu()
  }

  render() {
    return (
      <div>
        <div className='ipcitem'>
          <p>渲染进程通知主进程</p>
          <button onClick={this.notifyMain}>点击该按钮，窗口标题将被主进程设置为【named by render】</button>
        </div>
        <div className='ipcitem'>
          <p>主进程通知渲染进程</p>
          <button onClick={this.notifyRender}>点击该按钮，渲染进程将收到主进程传来的信息并打印到控制台</button>
        </div>
        <div className='ipcitem'>
          <p>双向通信</p>
          <button type="button" onClick={this.clickbtn2}>start count</button>
          Current value: <strong id="counter">0</strong>
        </div>
        <div className='ipcitem'>
          <button type="button" onClick={this.clickbtn}>Open a File</button>
          File path: <strong id="filePath"></strong>
        </div>
      </div>
    );
  }
}

export default Demo;