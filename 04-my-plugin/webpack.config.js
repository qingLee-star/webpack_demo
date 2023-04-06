const path = require('path');

class MyPlugin {
  apply(compiler) {
    console.log('MyPlugin启动');
    compiler.hooks.emit.tap('MyPlugin', compilation => {
      for (const name in compilation.assets) {
        console.log(compilation.assets[name].source);
        if (name.endsWith('.js')) {
          const content = compilation.assets[name].source();
          const withoutComments = content.replace(/\/\*\*+\*\//g, '');
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length
          }
        }
      }
    });
  }
};

module.exports = {
  mode: 'none',
  entry: './src/main.js', // 打包入口配置
  output: { // 输出配置
    filename: 'bundle.js', // 输出的文件名
    path: path.join(__dirname, 'output'), // 输出的路径，要为绝对路径，不能为相对路径，所以用path模块进行拼接
  },
  module: { // 用于配置loader
    rules : []
  },
  plugins: [
    new MyPlugin()
  ]
}