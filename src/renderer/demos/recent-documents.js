import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Recent Documents</h1>
        <p>
            Right click on the app icon to see recent documents.
            You should see `recently-used.md` added to the list of recent files
        </p>
      </div>
    );
  }
}

export default Demo;