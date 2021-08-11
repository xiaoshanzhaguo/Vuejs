<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
<!--    这里应该写完整路径-->
<!--    !!!! to绑定的路径里，一定要在前面加/-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: '你好啊',
      // 默认path
      path: '/home/news'
    }
  },
  // 创建组件后，会回调的
  created() {
    console.log('home created');
    this.$router.push('/home/news').catch(err => err)
    // document.title = '首页'
  },
  // 销毁
  destroyed() {
    console.log('home destroyed');
  },
  // activated和deactivated，这个两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
  // 组件处于活跃状态
  activated() {
    // console.log('activated');
    this.$router.push(this.path).catch(err => err)
  },
  // 组件处于不活跃状态
  // !!! 这里执行得太慢了
  // deactivated() {
  //   console.log(this.$route.path);
  //   console.log('deactivated');
  //   // 在他离开之前，将我们的path保留下来，下次我们就可以在activated里面使用这个path了
  //   this.path = this.$route.path;
  // },
  // 这里是组件内的导航守卫
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next()
  }
  // 挂载到整个DOM上面，会回调的
  // mounted() {
  //   console.log('mounted');
  // },
  // // 刷新界面时，会回调的
  // updated() {
  //   console.log('updated');
  // }
}
</script>

<style scoped>

</style>
