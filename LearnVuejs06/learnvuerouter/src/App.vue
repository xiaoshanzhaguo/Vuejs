<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!--  下面的标签相当于占位  -->
    <!--这里写两个固定的标签-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="about" tag="button" replace active-class="active">关于</router-link>-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="about" tag="button" replace>关于</router-link>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    <router-link :to="'/user/'+userId">用户</router-link>-->
<!--    <router-link to="/profile">档案</router-link>-->
<!--    这里的语法写成对象的方式 -->
<!--    <router-link :to="{path: '/profile', query: {name: 'why', age: 18, height: 1.88}}">档案</router-link>-->
<!--    <img v-bind:src="imgURL" alt="">-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

<!--    User前面一定不能加空格！！！！-->
<!--    下面的意思是，用正则表达式，匹配2-9个数字，下面正则表达式9之前不能加空格！！ 空格在里面有特殊含义-->
<!--    \d{2,9}-->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan',
      imgURL: 'https://www.baidu.com/logo.png'
    }
  },
  // data() {
  //   return {
  //     // router来自vue的源码里面，它往所有组件中都加了router属性
  //     $router: ''
  //   }
  // },
  methods: {
    homeClick() {
      // 通过代码的方式修改路径 不要绕过vue-router
      // this拿到的是当前组件
      // ！！！！ 这样做是不对的：history.pushState()
      // push => pushState
      // this.$router.push('/home')
      // 不加catch会 报重复路由的错误
      this.$router.replace('/home').catch(err => {})
      console.log("homeClick");
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about').catch(err => {})
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push('/user/'+this.userId)
    },
    profileClick() {
      // 这里可以直接传对象
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.87
        }
      })
    }
  }
}
</script>

<style>
/*.router-link-active {*/
/*  color: tomato;*/
/*}*/

.active {
  color: tomato;
}
</style>
