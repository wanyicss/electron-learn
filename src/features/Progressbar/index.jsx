import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentWillUnmount() {
    window.electronAPI.stopprogressbar()
  }

  handleClick = () => {
    if(!this.state.show) window.electronAPI.startprogressbar()
    else window.electronAPI.stopprogressbar()
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
       <p onClick={this.handleClick}>{this.state.show ? '关闭进度条' : '打开进度条'}</p>
    );
  }
}

export default Demo;