// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/renderer/index.js', // 应用程序的入口点
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.bundle.js',
    publicPath: '/'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins: [
              [
                'import',
                {
                   libraryName: 'antd',
                   libraryDirectory: 'es',
                   style: true, // 这个配置允许你使用less
                },
              ],
            ],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
              options: {
                lessOptions: { // 如果使用less-loader@5版本，请移除 lessOptions 这一级
                  javascriptEnabled: true,
                },
              },
            },
        ],
      },
    ],
  },
  resolve: {
    // 自动解析文件扩展名，import时可以不带扩展
    extensions: ['.js', '.jsx', '.json'],
    
    // 指定路径别名
    alias: {
      features: path.resolve(__dirname, 'src/features')
    },
    
    // 指定默认文件名
    mainFiles: ['index'], // 当导入的是一个目录时，Webpack将默认查找的文件名列表
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/renderer/index.html' // 确保这里的路径指向你的HTML模版文件
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000 // 这是webpack-dev-server运行的端口
  },
};
