import React from 'react';

const style = {
  border: '2px solid black',
  borderRadius: '3px',
  padding: '5px',
  display: 'inline-block'
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    document.getElementById('drag1').ondragstart = (event) => {
      event.preventDefault()
      window.electron.startDrag('drag-and-drop-1.md')
    }
    
    document.getElementById('drag2').ondragstart = (event) => {
      event.preventDefault()
      window.electron.startDrag('drag-and-drop-2.md')
    }    
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Drag the boxes below to somewhere in your OS (Finder/Explorer, Desktop, etc.) to copy an example markdown file.</p>
        <div style={style} draggable="true" id="drag1">Drag me - File 1</div>
        <div style={style} draggable="true" id="drag2">Drag me - File 2</div>
      </div>
    );
  }
}

export default Demo;