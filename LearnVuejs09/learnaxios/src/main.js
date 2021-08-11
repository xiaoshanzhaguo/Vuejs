import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


const {name, age} = obj;

const names = ['why', 'kobe', 'james']
// const name1 = names[0]
// const name1 = names[1]
// const name1 = names[2]
const [name1, name2, name3] = names
// 数组里的东西一般是使用遍历的方式，不经常用解构、下标值


// 1. axios的基本使用
// 传入相关的配置，相关的网络请求
// 这里自带promise?
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  // 下面写的是请求方式
  method: 'get'
}).then(res => {
  console.log(res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})

// 发送get或post请求
// axios.get("", undefined)
// axios.post

// 2. axiao发送并发请求
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}),axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})])
  // 这里做统一相关的处理
  .then(axios.spread((res1, res2)  => {
    console.log(res1);
    console.log(res2);
  }))

// 对象的解构
const obj = {
  name: 'kobe',
  age: 30
}

// 3.使用全局的axios和对应的配置在进行网络请求
// 这里写了，下面的请求可以省略
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000 // 写5ms,会超时

axios.all([axios({
  // baseURL: 'http://123.207.32.32:8000',
  // timeout: 5, // 延时
  url: '/home/multidata'
}),axios({
  // baseURL: 'http://123.207.32.32:8000',
  // timeout: 5,
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})])
  // 这里做统一相关的处理
  .then(axios.spread((res1, res2)  => {
    console.log(res1);
    console.log(res2);
  }))

// axios.defaults.baseURL = 'http://222.111.33.33:8000'
// axios.defaults.timeout = 10000

axios({
  // 这里会默认拼接前面全局的配置
  url: '/category'
})

// 4. 创建对应的axios的实例(instance)
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(res => {
  // then拿到结果，然后进行打印
  console.log(res);
})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})

const instance2 = axios.create({
  baseURL: 'http://222.111.33.33:8000',
  timeout: 10000,
  // headers: {}
})
