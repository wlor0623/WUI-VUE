<template>
  <section id=''>
    <button class="ui-btn">普通按钮</button>
  </section>
</template>
<script>
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

    },
    //销毁前
    //beforeDestroy:{
    //  
    //}
  }

</script>
<style scoped>
  .ui-btn-s,
  .ui-btn,
  .ui-btn-lg,
  .ui-btn-lg-nowhole {
    position: relative;
    text-align: center;
    background-color: #fff;
    vertical-align: top;
    color: #000;
    -webkit-box-sizing: border-box;
    background-clip: padding-box;
    border: 1px solid #c3c8cc;
    border: 1px solid #c3c8cc;
    border-radius: 3px
  }

  @media screen and (-webkit-min-device-pixel-ratio: 2) {

    .ui-btn-s,
    .ui-btn,
    .ui-btn-lg,
    .ui-btn-lg-nowhole {
      position: relative;
      border: 0
    }

    .ui-btn-s:before,
    .ui-btn:before,
    .ui-btn-lg:before,
    .ui-btn-lg-nowhole:before {
      content: "";
      width: 200%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #c3c8cc;
      -webkit-transform: scale(0.5);
      -webkit-transform-origin: 0 0;
      padding: 1px;
      -webkit-box-sizing: border-box;
      border-radius: 6px;
      pointer-events: none
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio: 3) {

    .ui-btn-s,
    .ui-btn,
    .ui-btn-lg,
    .ui-btn-lg-nowhole {
      position: relative;
      border: 0
    }

    .ui-btn-s:before,
    .ui-btn:before,
    .ui-btn-lg:before,
    .ui-btn-lg-nowhole:before {
      content: "";
      width: 300%;
      height: 300%;
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #c3c8cc;
      -webkit-transform: scale(0.3333);
      -webkit-transform-origin: 0 0;
      padding: 1px;
      -webkit-box-sizing: border-box;
      border-radius: 6px;
      pointer-events: none
    }
  }

  .ui-btn-s:not(.disabled):not(:disabled):active,
  .ui-btn-s.active,
  .ui-btn:not(.disabled):not(:disabled):active,
  .ui-btn.active,
  .ui-btn-lg:not(.disabled):not(:disabled):active,
  .ui-btn-lg.active,
  .ui-btn-lg-nowhole:not(.disabled):not(:disabled):active,
  .ui-btn-lg-nowhole.active {
    background-color: #f0f0f0;
    background-clip: padding-box;
    border-color: #D0D1D2
  }

  .ui-btn-s:after,
  .ui-btn:after,
  .ui-btn-lg:after,
  .ui-btn-lg-nowhole:after {
    content: "";
    position: absolute;
    top: -7px;
    bottom: -7px;
    left: 0;
    right: 0
  }

  .ui-btn-s.disabled,
  .ui-btn-s:disabled,
  .ui-btn.disabled,
  .ui-btn:disabled,
  .ui-btn-lg.disabled,
  .ui-btn-lg:disabled,
  .ui-btn-lg-nowhole.disabled,
  .ui-btn-lg-nowhole:disabled {
    border: 0;
    color: #bbb;
    background: #e9ebec;
    background-clip: padding-box
  }

  .ui-btn {
    height: 30px;
    line-height: 30px;
    padding: 0px 16px;
    display: block;
    font-size: 14px;
    border-radius: 2px;
    box-sizing: border-box;
    overflow: hidden
  }

  .ui-btn-s {
    width: 60px;
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 14px;
    border-radius: 2px;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap
  }

  .ui-btn-highlight {
    background-color: transparent;
    color: #fff
  }

  .ui-btn-highlight:not(.disabled):not(:disabled):active,
  .ui-btn-highlight.active {
    background-color: rgba(255, 255, 255, 0.3);
    background-clip: padding-box
  }

  .ui-btn-highlight.disabled,
  .ui-btn-highlight:disabled {
    font-size: 14px;
    color: #a9a9a9;
    background-color: #8d8d8d;
    letter-spacing: 0px;
    line-height: 30px;
    border: 0
  }

  .ui-btn-lg {
    font-size: 17px;
    height: 40px;
    line-height: 40px;
    display: block;
    width: 100%;
    border-radius: 3px
  }

  .ui-btn-primary {
    border: 0;
    background-color: #12B7F5;
    color: #fff;
    background-clip: padding-box
  }

  .ui-btn-primary:not(.disabled):not(:disabled):active,
  .ui-btn-primary.active {
    background: #0E98CB;
    color: #fff;
    background-clip: padding-box
  }

  .ui-btn-danger {
    border: 0;
    background-color: #FB6155;
    color: #fff;
    background-clip: padding-box
  }

  .ui-btn-danger:not(.disabled):not(:disabled):active,
  .ui-btn-danger.active {
    background: #CC3428;
    color: #fff;
    background-clip: padding-box
  }

  .ui-btn-highlight {
    background-color: transparent
  }

  .ui-btn-lg-nowhole {
    display: block;
    width: 220px;
    height: 40px;
    line-height: 40px;
    font-size: 17px;
    border-radius: 3px;
    margin: auto
  }

  .ui-btn-wrap {
    padding: 10px 12px;
    display: -webkit-box;
    -webkit-box-pack: center
  }

  @media screen and (-webkit-min-device-pixel-ratio: 2) {

    .ui-btn,
    .ui-btn-lg,
    .ui-btn-s,
    .ui-btn-lg-nowhole {
      border: 0
    }

    .ui-btn.disabled:before,
    .ui-btn:disabled:before,
    .ui-btn-lg.disabled:before,
    .ui-btn-lg:disabled:before,
    .ui-btn-s.disabled:before,
    .ui-btn-s:disabled:before,
    .ui-btn-lg-nowhole.disabled:before,
    .ui-btn-lg-nowhole:disabled:before {
      content: none
    }

    .ui-btn-primary:before,
    .ui-btn-danger:before {
      content: none
    }
  }

  .ui-btn-progress {
    width: 60px;
    padding: 0
  }

  .ui-btn-progress .ui-btn-inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    background-color: #18b4ed;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center
  }

  .ui-btn-progress .ui-btn-inner span {
    display: block;
    color: #000;
    width: 60px;
    line-height: normal
  }

  .ui-btn-progress.disabled,
  .ui-btn-progress:disabled {
    color: #bbb;
    background: #e9ebec;
    background-clip: padding-box
  }

  .ui-btn-progress.disabled .ui-btn-inner,
  .ui-btn-progress:disabled .ui-btn-inner {
    background-color: #e9ebec
  }

  .ui-btn-progress.disabled .ui-btn-inner span,
  .ui-btn-progress:disabled .ui-btn-inner span {
    color: #bbb
  }

  @media screen and (-webkit-min-device-pixel-ratio: 2) {

    .ui-btn-progress.disabled,
    .ui-btn-progress:disabled {
      border: 0
    }

    .ui-btn-progress.disabled:before,
    .ui-btn-progress:disabled:before {
      content: none
    }
  }

  .ui-btn-group {
    display: -webkit-box;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-align: center
  }

  .ui-btn-group button {
    display: block;
    -webkit-box-flex: 1;
    margin-right: 10px
  }

  .ui-btn-group button:first-child {
    margin-left: 10px
  }

</style>
