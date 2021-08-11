<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from "./Cpn";   // 这里暂时不简写，保留.vue
export default {
  name: "App",
  Components: {
    Cpn   // 在组件里面注册组件
  },
  data() {
    return {
      message: 'Hello webpack',
      name: 'coderwhy'
    }
  },
  methods: {
    btnClick() {

    }
  }
}
</script>

<style scoped>
  .title {
    /* 层叠样式*/
    color: green;
  }
</style>