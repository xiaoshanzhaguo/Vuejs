// var moduleA = (function () {
//   // 导出的对象（ES5,因为ES6自带模块化）
//   var obj = {}  //空的对象
//
//   // 小明
//   var name = '小明'
//   var age = 22
//
//   function sum(num1, num2) {
//     return num1 + num2
//   }
//
//   var flag = true
//
//   if (flag) {
//     console.log(sum(10, 20));
//   }
//
//   obj.flag = flag;
//   obj.sum = sum;  // 这里注意，直接传函数
//
//   return obj
//
//   // console.log(obj);
// })()
//

// 小明
var name = '小明'
var age = 22

function sum(num1, num2) {
    return num1 + num2
}

var flag = true

if (flag) {
    console.log(sum(10, 20));
}

module.exports = {
    // 下面为导出的属性，并且写法为增强写法（只是语法，还需啊哟做别的操作）
    flag: flag,
    sum: sum
}