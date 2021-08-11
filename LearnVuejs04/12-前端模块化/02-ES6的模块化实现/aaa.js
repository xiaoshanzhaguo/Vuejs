// ES6里面使用var不会出现命名冲突的问题
var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20, 30));
}

// export {
//   flag: flag,
//   sum: sum
// }

// 1. 导出方式一：(用简便写法)
export {
    flag, sum
}

// 2.导出方式二：
export var num1 = 1000
export var height = 1.88

// 3.导出函数/类
export function mul(num1, num2) {
    return num1 * num2
}

// export function Person() {
//
// }

export class Person {
    run() {
        console.log('在奔跑');
    }
}

// //ES5
// function Person() {
//
// }
// //ES6
// class Person {
//
// }

// 5.export default
// const address = '北京市'
// export {
//   address
// }
// export const address = '北京市'
//
// export default address //默认的只能有一个

export default function (argument) {
    console.log(argument);
}