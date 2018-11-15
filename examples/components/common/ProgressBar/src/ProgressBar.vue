<template>
  <section class='ProgressBar'>
    555
    <span></span>
  </section>
</template>
<script>
  export default {
    name: 'ProgressBar',
    data() {
      return {}
    },
    //渲染前
    created() {},
    //渲染后
    mounted() {

    },
    //方法
    methods: {

    },
    //组件
    components: {

    },
    //销毁前
    //beforeDestroy:{
    //  
    //}
  }

</script>
<style lang="less" scoped>
  .ProgressBar {
    overflow: hidden;
    width: 100%;
    height: 2px;
    font-size: 0px;
    background-color: #e2e2e2;
    box-sizing: border-box;

    >span {
      display: block;
      width: 0%;
      background: #65d521;
      height: 100%;
      font-size: 0;
    }
  }

</style>
