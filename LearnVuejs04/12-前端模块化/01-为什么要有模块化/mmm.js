;(function () {
    // 1.想使用flag
    if (moduleA.flag) {
        console.log('小明是天才，哈哈哈');
    }

    // 2.使用sum函数
    console.log(moduleA.sum(20, 30));
    // function sum(num1, num2) {
    //   return num1 + num2
    // }

    // sum(30, 50)


})()

// 下面直接将对象解析出来
var {flag, sum} = require('./aaa.js')

// var aaa = require('./aaa.js');
// var flag = aaa.flag;
// var sum = aaa.sum;
sum(20, 30)