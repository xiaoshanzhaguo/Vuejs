// 导入模块(依赖别的包)
const path = require('path')

// CommonJS
module.exports = {
    entry: './src/main.js',
    output: {
        // 动态获取路径  dirname为全局变量（保存当前所在文件的路径）,然后拼接dist
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'  // bundle为打包后的文件
    },
}