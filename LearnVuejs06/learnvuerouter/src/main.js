import Vue from 'vue'
import App from './App'
import router from './router'  // 这里后面的index.js可以省略，因为它会自动去找。。。

Vue.config.productionTip = false

// Vue.prototype.test = function () {
//   console.log('test');
// }

// 这里指的是vue的原型
Vue.prototype.name = "哈哈哈"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  // 导出后进行挂载
  render: h => h(App)  // 这里的render是将App.vue里面template里的东西渲染出来
})

console.log(router);

const obj = {
  name: 'why'
}

// Object.defineProperty(obj, 'age', 18)
