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
  router,  // 导出后进行挂载 （相当于router: router）
  render: h => h(App)  // 这里的render是将App.vue里面template里的东西渲染出来
  // App里的东西必然会被render出来，render这个东西会替换'#app'，相当于将id=app里的东西替换el:'#app'，这里面有什么东西都会显示
})

console.log(router);

const obj = {
  name: 'why'
}

// Object.defineProperty(obj, 'age', 18)
