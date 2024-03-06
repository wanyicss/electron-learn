import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props)
  }

  handleclick = () => {
    window.previewImgAPI.openfiledialog()
    window.previewImgAPI.previewfile(data => {
      const imgElement = document.getElementById('imagePreview');
      const base64Image = `data:image/png;base64,${data}`;
      imgElement.src = base64Image; // 设置图片的base64字符串为src属性，以显示图片
    })
  }

  handleChange = (event) => {
    const file = event.target.files[0]; // 获取选择的文件对象
  
    if (file) {
      // 使用 FileReader 来读取文件
      const reader = new FileReader();
      
      // 设置一个回调，当文件读取完成后触发
      reader.onload = function(e) {
        // 获取图片数据并设置为 img 标签的 src 属性
        const imgElement = document.getElementById('imagePreview');
        imgElement.src = e.target.result;
      };
      
      // 读取文件作为 Data URL
      reader.readAsDataURL(file);
    }
  }
  
  render() {
    return (
      <div>
        <div>
          input方式选择文件
          <input type="file" onChange={this.handleChange} />
        </div>
        <div>
          dialog方式选择文件
          <button id="uploadBtn" onClick={this.handleclick}>选择本地图片</button>
          <img id="imagePreview" />
        </div>
      </div>
    );
  }
}

export default Demo;