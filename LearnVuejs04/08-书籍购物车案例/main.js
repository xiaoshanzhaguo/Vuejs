const app = new Vue({
    el: '#app',
    data: {
        // 3.2 在data里搞一个数组，如果想要再加一本书，直接在数组里多加一个对象即可。
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: ' 2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            }
        ]
    },
    methods: {
        <!-- 4.1.2 第一种方式，写一个方法，计算总价格 -->
        // getFinalPrice(price) {
        //     return '￥' + price.toFixed(2)
        // },

        // 5.1 监听按钮的点击
        increment(index) {
            // console.log('increment', index);
            this.books[index].count++;
        },
        decrement(index) {
            // console.log('decrement', index);
            this.books[index].count--;
        },

        // 6.1 移除按钮，要确定移出哪本书，因此也要传一个index
        removeHandle(index) {
            this.books.splice(index, 1) //删除一个
        }
    },
    computed: {
        // 7. 总价格(用计算属性，本质上是属性，
        // 虽然看起来是个函数，但只是实现了这个属性的get方法)
        // 1. 普通的for循环
        totalPrice() {
            //   let totalPrice = 0 // 保存最终的价格
            //   for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count
            //   }
            //   return totalPrice

            // for (let i in/of this.books)
            // reduce

            // 2. for (let i in this.books)
            // let totalPrice = 0
            // for (let i in this.books) {
            //   // console.log(i);
            //   const book = this.books[i]
            //   totalPrice += book.price * book.count
            // }
            // return totalPrice

            // 3.for (let i of this.books)
            // let totalPrice = 0
            // for (let item of this.books) {
            //   totalPrice += item.price * item.count
            // }
            // return totalPrice

            // reduce
            return this.books.reduce(function (preValue, book) { /**这里拿到的是对象**/
                return preValue + book.price * book.count
            }, 0)
        }
    },
    // 讲过滤器,它是个函数.会自动把前面的数值（前面要过滤的东西）作为参数传进来
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})

// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（封装、继承、多态）  第一个公民：对象/ 函数式编程  第一公民： 函数，好处：可以进行很多的链式编程
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个bool值（true/false）
// true:当返回true时，函数内部会自动将这次回调的n加入到新的数组里
// false:当返回false时，函数内部会自动过滤到这次的n
const nums = [10, 111, 222, 333, 20, 40, 50]

// 箭头函数
let total1 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total1);


// 函数式编程
let total = nums.filter(function (n) {
    return n < 100
}).map(function (n) {
    return n * 2   /** map是映射 **/
}).reduce(function (preValue, n) {
    return preValue + n
}, 0)
console.log(total);

// 1. filter函数的使用
// newNums用于接收返回的数组
let newNums = nums.filter(function (n) {
    return n < 100
})
console.log(newNums);

// 2. map函数的使用
let new2Nums = newNums.map(function (n) {
    return n * 2
})
console.log(new2Nums);

// 3.reduce函数的使用
// reduce作用对数组中所有的内容进行汇总
let new3Nums = new2Nums.reduce(function (preValue, n) {
    return preValue + n
}, 0)
/**初始化参数**/
console.log(new3Nums);
// 第一次： preValue 0 n 20
// 第二次： preValue 20 100 n 40
// 第二次： preValue 60 100 n 80
// 第二次： preValue 140 n 100

// // 1. 需求：取出所有小于100的数字
// let newNums = []
// for (let n of nums) {
//   if (n < 100) {
//     newNums.push(n)
//   }
// }

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
