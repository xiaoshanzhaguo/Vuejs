<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      //  router: 这里是之前index.js里创建的大的router对象
      //  route: 当前哪一个路由处于活跃状态，哪一个就是拿到的route (path,component: xxx)
      //  params: parameters 参数的缩写
      return this.$route.params.id  // id对应配置里的id
    }
  },
  created() {
    console.log('User created');
    // document.title = '用户'
  },
  destroyed() {
    console.log('User destroyed');
  },
  methods: {
    btnClick() {
      // 所有的组件都继承自Vue类的原型
      console.log(this.$router);
      console.log(this.$route);

      // this.test()
      console.log(this.name);
    }
  }
}
</script>

<style scoped>

</style>
