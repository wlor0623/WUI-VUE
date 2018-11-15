<template>
  <section id='index'>
    <Vinput maxlength="8"></Vinput>
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
  methods: {
    alert() {
      this.$alert("新内容是是是是");
    },
    sheet() {
      this.$sheet(["关闭", "开启", "曲潇"], function(index, item) {
        console.log(index, item);
      });
    },
    toast() {
      this.$toast("新内容是是是是");
    }
  },
  //组件
  components: {}
};
</script>
<style lang='less' scoped>
</style>
