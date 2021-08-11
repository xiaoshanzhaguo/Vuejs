// 导入模块(依赖别的包)
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [  // 注意这里是一个数组
    // 打包时用的配置
    new UglifyjsWebpackPlugin()
  ],
})