const app = new Vue({
  el: '#app',
  data: {
    books: [
      // 3.2 在data里搞一个数组，如果想要再加一本书，直接在数组里多加一个对象即可。
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
    //   return '￥' + price.toFixed(2);
    // },

    // 5.1 监听按钮的点击
    increment(index) {
      // console.log('---', index)
      this.books[index].count--;
    },
    decrement(index) {
      // console.log('+++', index)
      this.books[index].count++;
    }
  },
  // 讲过滤器,它是个函数.会自动把前面的数值（前面要过滤的东西）作为参数传进来
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})
