import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.keyboardAPI.initkeyboardmenu()
  }

  componentWillUnmount() {
    window.mainAPI.resetmenu()
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Hit Alt+Shift+I on Windows, or Opt+Cmd+I on mac to see a message printed to the console.</p>
      </div>
    );
  }
}

export default Demo;