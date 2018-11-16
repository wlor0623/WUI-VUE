<template>
  <section id='side'>
    <ul>
      <li>
        <router-link to="/lottie">lottie 动画</router-link>
      </li>
       <li>
        <router-link to="/input">input 输入框</router-link>
      </li>
      <li>
        <router-link to="/dialog">dialog 弹框</router-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
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
#side {
  height: 100%;
  width: 200px;
  padding-top: 50px;
  color: #555;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  border-right: 1px solid #eee;
  box-sizing: border-box;
  > ul {
    > li {
      > a {
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #555;
        &:hover {
          color: #999;
        }
      }
    }
  }
}
</style>