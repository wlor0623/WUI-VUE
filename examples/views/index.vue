<template>
  <section id='index'>
    <side></side>
    <div class="pageContent">
      <router-view />
    </div>
  </section>
</template>
<script>
import side from "@/components/side";
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
  components: {
    side,
  }
};
</script>
<style lang='less' scoped>
#index{
  height: 100%;
}
.pageContent{
  padding-left: 220px;
  padding-right: 20px;
  box-sizing: border-box;
  height: 100%;
}
</style>
