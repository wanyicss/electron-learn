import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.showPressKey)
  }

  showPressKey = (event) => {
    document.getElementById('last-keypress').innerText = event.key
    console.log(`You pressed ${event.key}`)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.showPressKey)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>

        <p>Hit any key with this window focused to see it captured here.</p>
        <div><span>Last Key Pressed: </span><span id="last-keypress"></span></div>
      </div>
    );
  }
}

export default Demo;