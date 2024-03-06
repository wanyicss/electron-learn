import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerclick1 = () => {
    window.notifications.notificate()
  }

  handlerclick2 = () => {
    const NOTIFICATION_TITLE = 'Title'
    const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
    const CLICK_MESSAGE = 'Notification clicked!'

    new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
    .onclick = () => { document.getElementById('output').innerText = CLICK_MESSAGE }
  }

  render() {
    return (
      <div>
        <button onClick={this.handlerclick1}>点击触发主进程发起通知</button>
        <button onClick={this.handlerclick2}>点击触发渲染进程发起通知</button>
        <p id="output" />
      </div>
    );
  }
}

export default Demo;