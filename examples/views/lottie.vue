<template>
  <section class="page-container">
    <code class="hljs language-html">
     &lt;lottie :options=&quot;defaultOptions&quot; :height=&quot;200&quot; :width=&quot;200&quot; v-on:animCreated=&quot;handleAnimation&quot; /&gt;</code>
    <div class="source">
      <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation" />
    </div>
  </section>
</template>
<script>
import * as animationData from "@/assets/lottie/loading.json";
export default {
  name: "",
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
      anim: {}
    };
  },
  //渲染前
  created() {},
  //计算
  computed: {},
  //渲染后
  mounted() {},
  //方法
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    }
  },
  //组件
  components: {}
};
</script>
<style lang='less' scoped>
</style>