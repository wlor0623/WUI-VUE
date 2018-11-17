<template>
  <section id='page-container'>
    <h2 id="switch-kai-guan"> dialog 输入框</h2>
    <br>
    <p>alert</p>
    <br>
    <p>基础应用</p>
    <code class="hljs language-html">this.$dialog.alert(&#x27;哈哈&#x27;);</code>
    <br>
    <p>扩展应用</p>
    <code class="hljs language-html"> this.$dialog.alert({
      title:&#x27;温馨提示&#x27;,
      message:&#x27;我是扩展内容&#x27;,
      confirmTxt:&#x27;好的&#x27;,
      callback: () =&gt;{
      alert(&#x27;我是回调内容&#x27;)
      }
      });</code>
    <div class="source">
      <button @click="alert">alert</button>
      <button @click="moreAlert">扩展alert</button>
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
      this.$dialog.confirm({
        title: &quot;确定框&quot;,
        message: &quot;我是confirm内容&quot;,
        confirmTxt: &quot;好的&quot;,
        callback: () =&gt; {
          alert(&quot;成功&quot;);
        },
        cancelCallback:()=&gt;{
          alert(&#x27;取消&#x27;)
        }
      });</code>
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
      this.$dialog.alert("哈哈");
    },
    moreAlert() {
      this.$dialog.alert({
        title: "温馨提示",
        message: "我是扩展内容",
        confirmTxt: "好的",
        callback: () => {
          alert("我是回调内容");
        }
      });
    },
    toast() {
      this.$dialog.toast("我是toast");
    },
    confirm() {
      this.$dialog.confirm({
        title: "确定框",
        message: "我是confirm内容",
        confirmTxt: "好的",
        callback: () => {
          alert("成功");
        },
        cancelCallback:()=>{
          alert('取消')
        }
      });
    },
    sheet() {
      this.$dialog.sheet(["选项1", "选项2"]);
    }
  },
  //组件
  components: {}
};
</script>
<style lang='less' scoped>
</style>