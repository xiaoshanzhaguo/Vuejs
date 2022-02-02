/* 4.2.1 编程范式分为：命令式编程/声明式编程（这是从写代码的方法，给计算机指令的方式来进行划分的）
   命令式编程就是你给计算机的指令时是第一步要做什么，第二步要做什么等。第一步要拿到DOM元素，第二步需要从服务器请求数据，
 第三步需要把服务器请求的数据放到DOM里面，这是以前一步步按照命令去编程的方式。
   声明式是，你这里拿到我们的数据，你只需要把数据保存到某个位置，然后你在这里做一个声明，比如通过v-for的指令做一个声明，
 之后的话，它会自动帮你遍历，不管你里面有多少个数据，你只要给我这个数据，我就自动帮你遍历。
 声明式越来越流行，不管是我们学的vue，还是后面要学的react。*/

/* 4.2.2 编程范式：面向对象编程/函数式编程 (区分这两个最主要的方式：谁是第一公民)
   编程范式：面向对象编程（封装、继承、多态）  第一个公民：对象
   函数式编程  第一公民：函数(尽可能把很多东西抽象成函数)，好处：可以进行很多的链式编程 */

// // 1. 以前通写法 需求：取出所有小于100的数字
// let newNums = []
// for (let n of nums) {
//   if (n < 100) {
//     newNums.push(n)
//   }
// }
//
// // 2.将所有小于100的数字进行转化：全部*2
// let new2Nums = []
// for (let n of newNums) {
//   new2Nums.push(n * 2)
// }
//
// console.log(new2Nums);
//
// // 3.需求：将所有new2Nums数字相加，得到最终的结果
// let total = 0
// for (let n of new2Nums) {
//   total += n
// }
//
// console.log(total);

/* 2. 三个JavaScript高阶函数：filter/map/reduce
   它不是js特有的，它在很多语言里都有，学好了这个，在其他语言里学习它们就会很容易。 */

// 函数式编程的例子。需求：希望从数组里取出小于100的数字。
const nums = [10, 111, 222, 333, 20, 40, 50]

/* filter中的回调函数有一个要求：必须返回一个bool值（true/false）
true:当返回true时，函数内部会自动将这次回调的n加入到新的数组里
false:当返回false时，函数内部会自动过滤到这次的n */

// 2.1 filter函数的使用(先对所有的数据进行过滤)
// filter函数的参数里的回调函数 会在每一次遍历出一个数字时，执行。它每次会从数组里取出一个值，来回调这个函数。
// newNums用于接收返回的数组, 10 20 40 50
let newNums = nums.filter(function (n) { // 10 20 111 222 444 40 50
  // return false
  // return true
  return n < 100 // 当你<100时，进行过滤
})
console.log(newNums);

/* 2.2 map(映射)函数的使用(这里实现所有值*2,这里会回调四次)
如果你想对数组里所有的东西都进行某一次的变化，就用map函数 */
// 20 40 80 100
let new2Nums = newNums.map(function (n) { // 10 20 40 50
  // return 100 这里会返回4个100
  return n * 2
})
console.log(new2Nums);

/* 2.3 reduce函数的使用(比前面的难一点)
   reduce作用 对数组中所有的内容进行汇总
   至少要求传两个值，一个是当前遍历的value preValue，一个是刚才一直在用的n */

let new3Nums = new2Nums.reduce(function (preValue, n) {
  return preValue + n // preValue是上一次返回的值
}, 0) // 0代表初始化参数的值
console.log(new3Nums);

// 第一次： preValue=0 n=20
// 第二次： preValue=0+20 n=40
// 第三次： preValue=60 n=80
// 第四次： preValue=140 n=100
// 240



// 3. 使用高阶函数(函数本身可能需要的参数是函数)
// 需求：现在就想把240计算出来，想通过一行代码写出来

/* 3.1 下面使用链式编程。之前的代码阅读性很差,这种编程方式会更好
   函数式编程，在整个编程过程当中，函数永远是第一公民，我永远都在用函数。
   filter是一个函数，它里面要求传的是函数，map也是个函数，它里面又要求传函数。。。
   建议先学这种写法。*/
let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2   /** map是映射 **/
}).reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(total);

// 3.2 更简洁的写法，下面使用箭头函数
let total1 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total1);
