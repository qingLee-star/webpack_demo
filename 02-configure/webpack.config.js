const path = require('path');

module.exports = {
  entry: './src/main.js', // 打包入口配置
  // entry: './src/main.css', // 打包入口配置
  output: { // 输出配置
    filename: 'bundle.js', // 输出的文件名
    path: path.join(__dirname, 'output'), // 输出的路径，要为绝对路径，不能为相对路径，所以用path模块进行拼接
  },
  module: { // 用于配置loader
    rules : [
      {
        test: /.css$/, // 匹配文件规则
        use: [ // 使用什么loader,这里有个注意点: 如果有多个loader需要执行,写在后面的loader会先被加载执行
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}