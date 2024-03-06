import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  handleClick = () => {
    window.menusAPI.showContextMenu()
  }

  render() {
    return (
      <button id="context-menu" onClick={this.handleClick}>View Demo</button>
    );
  }
}

export default Demo;