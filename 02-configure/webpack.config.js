const path = require('path');

module.exports = {
  entry: './src/main.js', // 打包入口配置
  output: { // 输出配置
    filename: 'bundle.js', // 输出的文件名
    path: path.join(__dirname, 'output'), // 输出的路径，要为绝对路径，不能为相对路径，所以用path模块进行拼接
  }
}