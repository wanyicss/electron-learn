// App.js
import React from 'react';
import { Menu, Button } from 'antd';
import './app.less'

import Start from './demos/quick-start.js'
import Notification from './demos/Notification.js'
import Progressbar from './demos/Progressbar.js'
import Amap from './demos/Amap.js'
import ShowLocalImg from './demos/ShowLocalImg.js'
import Darkmode from './demos/Darkmode.js'
import Dragdrop from './demos/Dragdrop.js'
import KeyboardShortcutsGlobal from './demos/keyboard-shortcuts/global.js'
import KeyboardShortcutsInterceptionFromMain from './demos/keyboard-shortcuts/interception-from-main.js'
import KeyboardShortcutsLocal from './demos/keyboard-shortcuts/local.js'
import KeyboardShortcutsWebapis from './demos/keyboard-shortcuts/web-apis.js'
import MacosDockMenu from './demos/macos-dock-menu.js'
import NotificationsRenderer from './demos/notifications/renderer.js'
import OffscreenRender from './demos/offscreen-rendering.js'
import OnlineDetection from './demos/online-detection.js'
import RecentDocuments from './demos/recent-documents.js'
import Ipc from './demos/ipc.js'
import Screenshot from './demos/screenshot.js';
import CustomizeMenus from './demos/menus/customize-menus.js';
import ExternalLink from './demos/menus/externallink.js'
import Fitscreen from './demos/fit-screen.js'
import Dialog from './demos/dialogs.js'


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
      'Dragdrop': <Dragdrop />,
      'keyboard-shortcuts-global': <KeyboardShortcutsGlobal />,
      'keyboard-shortcuts-interception-from-main': <KeyboardShortcutsInterceptionFromMain />,
      'keyboard-shortcuts-local': <KeyboardShortcutsLocal />,
      'keyboard-shortcuts-webapis': <KeyboardShortcutsWebapis />,
      'macos-dock-menu': <MacosDockMenu />,
      'notifications_renderer':<NotificationsRenderer />,
      'offscreen-render': <OffscreenRender />,
      'online-detection': <OnlineDetection />,
      'recent-documents': <RecentDocuments />,
      'ipc': <Ipc />,
      'screenshot': <Screenshot />,
      'customize-menus': <CustomizeMenus />,
      'external-link': <ExternalLink />,
      'fit-screen': <Fitscreen />,
      'dialog': <Dialog />
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
      <>
        <div className='menu'>
          <Menu selectkey={this.state.selectkey} onClick={this.handleClick}>
            <Menu.Item key='Start'>HELLO WORLD</Menu.Item>
            <Menu.Item key='Notification'>桌面通知</Menu.Item>
            <Menu.Item key='Progressbar'>显示进度条</Menu.Item>
            <Menu.Item key='Amap'>高德地图</Menu.Item>
            <Menu.Item key='ShowLocalImg'>预览本地图片</Menu.Item>
            <Menu.Item key='Darkmode'>主题色切换</Menu.Item>
            <Menu.Item key='Dragdrop'>拖拽文件</Menu.Item>
            <Menu.SubMenu key='keyboard-shortcuts' title='快捷键'>
              <Menu.Item key='keyboard-shortcuts-global'>global</Menu.Item>
              <Menu.Item key='keyboard-shortcuts-interception-from-main'>interception-from-main</Menu.Item>
              <Menu.Item key='keyboard-shortcuts-local'>local</Menu.Item>
              <Menu.Item key='keyboard-shortcuts-webapis'>键盘输入</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key='macos-dock-menu'>自定义Dock菜单</Menu.Item>
            <Menu.Item key='notifications_renderer'>桌面通知</Menu.Item>
            <Menu.Item key='offscreen-render'>离线渲染</Menu.Item>
            <Menu.Item key='online-detection'>网络连接检测</Menu.Item>
            <Menu.Item key='recent-documents'>最近打开过的文档</Menu.Item>
            <Menu.Item key='ipc'>进程通信</Menu.Item>
            <Menu.Item key='screenshot'>窗口截图</Menu.Item>
            <Menu.SubMenu key='menus' title='自定义菜单'>
              <Menu.Item key='customize-menus'>窗口内菜单</Menu.Item>
              <Menu.Item key='external-link'>外链跳转</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key='fit-screen'>窗口尺寸自适应</Menu.Item>
            <Menu.Item key='dialog'>本地对话框</Menu.Item>
          </Menu>
        </div>
        <div className='content'>
          {this.state.content}
        </div>
      </>
    );
  }
}

export default App;
