<template>
  <section id='page-container'>
    <h2 id="switch-kai-guan"> dialog 输入框</h2>
    <br>
    <p>alert</p>
    <br>
    <code class="hljs language-html">
      this.$dialog.alert(&#x27;我是alert弹框&#x27;)</code>
    <div class="source">
      <button @click="alert">alert</button>
    </div>
    <br>
    <p>toast</p>
    <br>
    <code class="hljs language-html">
      this.$dialog.toast(&#x27;我是toast&#x27;)</code>
    <div class="source">
      <button @click="toast">toast</button>
    </div>
    <br>
    <p>confirm</p>
    <br>
    <code class="hljs language-html">
      this.$dialog.confirm(&#x27;我是confirm&#x27;)</code>
    <div class="source">
      <button @click="confirm">confirm</button>
    </div>
    <br>
    <p>sheet</p>
    <br>
    <code class="hljs language-html">
      this.$dialog.sheet([&#x27;选项1&#x27;,&#x27;选项2&#x27;]);</code>
    <div class="source">
      <button @click="sheet">sheet</button>
    </div>
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
      this.$dialog.alert("我是alert弹框");
    },
    toast() {
      this.$dialog.toast("我是toast");
    },
    confirm() {
      this.$dialog.confirm("我是confirm");
    },
    sheet() {
      this.$dialog.sheet(['选项1','选项2']);
    }
  },
  //组件
  components: {}
};
</script>
<style lang='less' scoped>
</style>