// App.js
import React from 'react';
import { Menu, Button } from 'antd';
import './app.less'

import Start from './demos/Start.js'
import Notification from './demos/Notification.js'
import Progressbar from './demos/Progressbar.js'
import Amap from './demos/Amap.js'
import ShowLocalImg from './demos/ShowLocalImg.js'
import Darkmode from './demos/Darkmode.js'
import Dragdrop from './demos/Dragdrop.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.contents = {
      'Start': <Start />,
      'Notification': <Notification />,
      'Progressbar': <Progressbar />,
      'Amap': <Amap />,
      'ShowLocalImg': <ShowLocalImg />,
      'Darkmode': <Darkmode />,
      'Dragdrop': <Dragdrop />
    }
    this.state = {
      selectkey : 'Start',
      content: this.contents[this.selectkey]
    }
  }

  handleClick = (item) => {
    this.setState({content: this.contents[item.key]})
  }

  render() {
    return (
      [
      <div className='menu'>
        <Menu selectkey={this.state.selectkey} onClick={this.handleClick}>
          <Menu.Item key='Start'>HELLO WORLD</Menu.Item>
          <Menu.Item key='Notification'>桌面通知</Menu.Item>
          <Menu.Item key='Progressbar'>显示进度条</Menu.Item>
          <Menu.Item key='Amap'>高德地图</Menu.Item>
          <Menu.Item key='ShowLocalImg'>预览本地图片</Menu.Item>
          <Menu.Item key='Darkmode'>主题色切换</Menu.Item>
          <Menu.Item key='Dragdrop'>拖拽文件</Menu.Item>
        </Menu>
      </div>,
      <div className='content'>
        {this.state.content}
      </div>
      ]
    );
  }
}

export default App;
