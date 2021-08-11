const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  // 开发阶段需要添加的配置,其他base里面都有
  devServer: {
    // 选择要服务的文件夹
    contentBase: './dist',
    // 是否要实时刷新
    inline: true
  }
})