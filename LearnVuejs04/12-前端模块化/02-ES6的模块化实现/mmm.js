// 1. 导入的{}（对象）中定义的变量
import {flag, sum} from "./aaa.js"
//这里aaa.js不能简写，在以后配置了一些东西后，就能简写了

if (flag) {
    console.log('小明是天才，哈哈哈');
    console.log(sum(20, 30));
}

// 2.直接导入export定义的变量
import {num1, height} from "./aaa.js"

console.log(num1);
console.log(height);

// 3.导入 export的function
import {mul, Person} from "./aaa.js";

console.log(mul(30, 50));

const p = new Person();
p.run()

// 4.导入 export default中的内容
import addr from "./aaa.js"

addr('你好啊'); // 这里如果用console.log，就会输出它返回的东西

// 5.统一全部导入
// import {flag, num, num1, height,Person, mul, sum} from "./aaa.js"
import * as aaa from './aaa.js'

console.log(aaa.flag);
console.log(aaa.height);