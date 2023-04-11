const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/main.js', // 打包入口配置
  output: { // 输出配置
    filename: 'bundle.js', // 输出的文件名
    path: path.join(__dirname, 'dist'), // 输出的路径，要为绝对路径，不能为相对路径，所以用path模块进行拼接
  },
  devServer: {
    // contentBase: './public'
    static: './public',
    // proxy: {}
  },
  module: { // 用于配置loader
    rules : [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.css$/, // 匹配文件规则
        use: [ // 使用什么loader,这里有个注意点: 如果有多个loader需要执行,写在后面的loader会先被加载执行
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.jpg$/,
        // use: ['file-loader']
        // use: ['url-loader']
        use: {
          loader: 'url-loader',
          options: {
            limit: 10*1024 // 10 KB,当资源超过10kb,使用file-loader加载;以下则使用url-loader;需要同时安装两个loader
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      meta: {
        viewport: 'width=device-width'
      },
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}