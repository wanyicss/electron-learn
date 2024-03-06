import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    window.ScreenAPI.fitscreen()
  }

  render() {
    return (
      <div>
        <button id="btn" onClick={this.handleClick}>窗口尺寸自适应屏幕大小</button>
     </div>
    );
  }
}

export default Demo;