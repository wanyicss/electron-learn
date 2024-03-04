import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CLICK_MESSAGE: ''
    }
  }

  handleClick = () => {
    const NOTIFICATION_TITLE = 'Title'
    const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
    

    new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
    .onclick = () => { 
      this.setState({CLICK_MESSAGE: 'Notification clicked!'})
    }
  }

  render() {
    return (
      [
       <p id="output" onClick={this.handleClick}>Click it to see the effect in this interface.</p>,
       <h1>{this.state.CLICK_MESSAGE}</h1>
      ]
    );
  }
}

export default Demo;