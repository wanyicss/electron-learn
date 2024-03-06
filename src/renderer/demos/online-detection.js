import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    
    window.addEventListener('online', this.onlineStatusIndicator)
    window.addEventListener('offline', this.onlineStatusIndicator)
    
    this.onlineStatusIndicator()
    
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineStatusIndicator)
    window.removeEventListener('offline', this.onlineStatusIndicator)
  }

  onlineStatusIndicator () {
    document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
  }

  render() {
    return (
      <div>
         <h1>Connection status: <strong id='status'></strong></h1>
      </div>
    );
  }
}

export default Demo;