<template>
  <section class="page-container">
    <h2 id="switch-kai-guan"> input 输入框</h2>
    <br><p>正常输入框</p>
    <br>
    <code class="hljs language-html">
      &lt;Vinput type=&quot;text&quot;&gt;&lt;/Vinput&gt;</code>
    <div class="source">
      <Vinput type="text" placeholder="正常输入框"></Vinput>
    </div>
    <br><p>长度限制</p>
    <br>
    <code class="hljs language-html">
      &lt;Vinput type=&quot;text&quot; placeholder=&quot;长度限制&quot; maxlength=&quot;6&quot;&gt;&lt;/Vinput&gt;</code>
    <div class="source">
      <Vinput type="text" placeholder="长度限制6位" maxlength="6"></Vinput>
    </div>
    <br><p>前缀后缀</p><br>
    <code class="hljs language-html">
      &lt;Vinput type=&quot;text&quot; placeholder=&quot;前缀后缀&quot;&gt;
      &lt;template slot=&quot;prepend&quot;&gt;金额&lt;/template&gt;
      &lt;template slot=&quot;append&quot;&gt;元&lt;/template&gt;
      &lt;/Vinput&gt;
    </code>
    <div class="source">
      <Vinput type="text" placeholder="前缀后缀" @prependCallback="prependCallback" @appendCallback="appendCallback">
        <template slot="prepend">金额</template>
        <template slot="append">元</template>
      </Vinput>
    </div>
    <br>
    <p>输入限制</p><br>
    <code class="hljs language-html">
      &lt;Vinput type=&quot;number&quot; limit=&quot;number&quot; placeholder=&quot;我能输小数&quot;&gt;&lt;/Vinput&gt;
      &lt;Vinput type=&quot;number&quot; limit=&quot;pureNumber&quot; placeholder=&quot;我能输纯数字&quot;&gt;&lt;/Vinput&gt;
    </code>
    <div class="source">
      <Vinput type="number" limit="number" placeholder="我能输小数"></Vinput>
      <Vinput type="number" limit="pureNumber" placeholder="我能输纯数字"></Vinput>
    </div>
    <h3>属性</h3>
    <table class="table">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
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
  //渲染后
  mounted() {},
  //方法
  methods: {
    prependCallback(){
      console.log('点击了前缀');
    },
     appendCallback(){
      console.log('点击了后缀');
    }
  },
  //组件
  components: {}
};
</script>
<style scoped>
</style>