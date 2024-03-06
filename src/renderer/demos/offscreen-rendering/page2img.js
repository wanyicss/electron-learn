import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleclick = () => {
    window.offscreenrender.page2img();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleclick}>点击该按钮，后台将加载百度网页并转成图片下载到本地</button>
        {/* <button id="reset-to-system">Reset to System Theme</button> */}
      </div>
    );
  }
}

export default Demo;