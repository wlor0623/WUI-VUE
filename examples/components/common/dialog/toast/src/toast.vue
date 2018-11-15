<template>
  <section class='wui-toast'>
    <div class="toast-message">{{ text }}</div>
  </section>
</template>
<script>
export default {
  name: "toast",
  data() {
    return {
      text: "",
      isShow: true,
      duration: 1500
    };
  },
  //渲染前
  created() {},
  //计算
  computed: {},
  //渲染后
  mounted() {},
  //方法
  methods: {},
  //组件
  components: {}
};
</script>
<style lang='less' scoped>
.wui-toast {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f5f5f5;
  padding: 5px 10px;
  z-index: 9999;
  bottom: 50px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  border-radius: 5px;
  overflow: hidden;
  > .toast-message {
    padding: 0px 15px;
  }
}
</style>