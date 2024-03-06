import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!document.getElementById('amapsdk')){
      window.electronAPI.getAmapkey()
      window.electronAPI.setWindowAmapkey((amapkey) => {
        // 创建一个新的script元素
        var script = document.createElement('script');
  
        script.id = 'amapsdk'
        // 设置script元素的src属性
        script.src = `https://webapi.amap.com/maps?v=2.0&key=${amapkey}`;
  
        // 设置script元素的type属性（可选）
        script.type = 'text/javascript';
  
        // 当script标签加载并执行完毕后的回调函数（可选）
        script.onload = function() {
            console.log('Script loaded and executed.');
            var map = new AMap.Map("mapcontainer", {
              zoom: 13,
              center: [116.39, 39.92],
              resizeEnable: true
            });
        };
  
        // 将script元素添加到文档的<body>标签内
        document.body.appendChild(script);
      })
    }
  }
  render() {
    return (
      <div id="mapcontainer"></div>
    );
  }
}

export default Demo;