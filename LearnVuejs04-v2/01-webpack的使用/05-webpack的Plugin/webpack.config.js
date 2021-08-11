// 导入模块(依赖别的包)
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

// CommonJS
module.exports = {
    entry: './src/main.js',
    output: {
        // 动态获取路径  dirname为全局变量（保存当前所在文件的路径）,然后拼接dist
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',  // bundle为打包后的文件
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                // .转移，正则表达式目的在于匹配所有的css文件，$作为结尾
                // 上面是用来匹配，下面是用来应用x
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时，顺序是从右往左读
                test: /\.css$/,
                // css-loader只负责将css文件进行加载（不负责解析）
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                // .htm DOS操作系统文件名只支持三个字母 .jpg/.jpeg
                // test用来匹配
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 用来限制字节大小的
                            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式，
                            // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
                            limit: 13000,  // 一般配置为8kb,为8196
                            // img/name 固定为name.png   img/name/ 为文件夹  ext为扩展名
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                // 匹配js文件
                test: /\.js$/,
                // exclude: 排除
                // include: 包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                // 以.vue结尾的
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        // alias: 别名
        // git commit -m 可以写别名 即git commit -m '注释'
        // git c ''
        // git config alias ''
        extensions: ['.js','.css','.vue'],
        alias: {
            // $为结束的意思
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [  // 注意这里是一个数组
        new webpack.BannerPlugin('最终版权归aaa所有'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
      // 打包时用的配置
        new UglifyjsWebpackPlugin()
    ],
    // 开发阶段需要添加的配置
    devServer: {
        // 选择要服务的文件夹
        contentBase: '/dist',
        // 是否要实时刷新
        inline: true
    }
}