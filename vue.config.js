
const path = require('path')
module.exports = {
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'example'))
  }
}
