import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
      const isDarkMode = await window.darkMode.toggle()
      document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
    })
    
    document.getElementById('reset-to-system').addEventListener('click', async () => {
      await window.darkMode.system()
      document.getElementById('theme-source').innerHTML = 'System'
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Current theme source: <strong id="theme-source">System</strong></p>

        <button id="toggle-dark-mode">Toggle Dark Mode</button>
        <button id="reset-to-system">Reset to System Theme</button>
      </div>
    );
  }
}

export default Demo;