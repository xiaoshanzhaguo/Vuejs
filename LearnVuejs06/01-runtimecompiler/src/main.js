// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
const cpn = {
  template: `<div>{{message}}</div>`,
  data() {
    return {
      message: '我是组件message'
    }
  }
}

new Vue({
  el: '#app',
  render: function (createElement) {
    // 1. 普通用法：createElement('标签',{（对象）标签的属性},[（数组）'']) 创建一个标签,数组里面是内容
    // 中间元素可以不写
    // return createElement('h2',  // 这里会替换挂载在el下的app  <div id="app"></div> 会变成<h2></h2>
    //   {class: 'box'},
    //   ['Hello World',createElement('button',['按钮'])])

    // 2. 传入一个组件对象(当然也可以直接在上面进行注册)
    // 当然可以传入App这个组件
    // h为createElement函数
    return createElement(App)
  }
})
