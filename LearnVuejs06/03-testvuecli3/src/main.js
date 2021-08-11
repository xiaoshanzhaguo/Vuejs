import Vue from 'vue'
import App from './App.vue'

// 要不要显示产品的提示信息，发布时可以需要
Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   render: function (h) {
//     return h(App)
//   }
// })

// 这两个app的无区别，下面那种自己挂载了app，就不需要再判断了

new Vue({
  render: h => h(App),
}).$mount('#app')
