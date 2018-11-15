<template>

  <section id='progress'>
    <ProgressBar></ProgressBar>
  </section>
</template>
<script>
  import {
    ProgressBar
  } from "@/components/common";
  export default {
    name: '',
    data() {
      return {}
    },
    //渲染前
    created() {
      const that = this;
    },
    //渲染后
    mounted() {

    },
    //方法
    methods: {

    },
    //组件
    components: {
      ProgressBar:ProgressBar
    },
  }

</script>
<style scoped>
</style>
