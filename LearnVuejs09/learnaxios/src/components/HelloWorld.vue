<template>

</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  components: {
  },
  data() {
    return {
      categories: ''
    }
  },
  created() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata',
    }).then(res => {
      console.log(res);
      this.categories = res;
    })
  }
}
</script>

<style scoped>

</style>
