<template>
  <transition name='fade'>
    <section class="ui-dialog" v-if="showConfirm">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
          <h3>{{title}}</h3>
          <p>{{message}}</p>
        </div>
        <div class="ui-dialog-ft">
          <button type="button" data-role="button" @click.stop="sureConfirm">{{confirmTxt}}</button>
          <button type="button" data-role="button" class="btn-recommand" @click.stop="closeConfirm">{{cancelTxt}}</button>
        </div>
      </div>
    </section>
  </transition>
</template>
<script>
export default {
  name: "alert",
  data() {
    return {
      showConfirm: false,
      title: "提示",
      message: "",
      confirmTxt: "确定",
      cancelTxt: "取消"
    };
  },
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@-webkit-keyframes bounceIn {
  0% {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.95);
    transform: translate3d(-50%, -50%, 0) scale(0.95);
  }

  50% {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1.05);
    transform: translate3d(-50%, -50%, 0) scale(1.05);
  }

  to {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
}
@keyframes bounceIn {
  0% {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.95);
    transform: translate3d(-50%, -50%, 0) scale(0.95);
  }

  50% {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1.05);
    transform: translate3d(-50%, -50%, 0) scale(1.05);
  }

  to {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
}

.bounceIn {
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}
.ui-dialog {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background: rgba(0, 0, 0, 0.4);
}

.ui-dialog-cnt {
  border-radius: 10px;
  max-width: 296px;
  width: 90%;
  -webkit-background-clip: padding-box;
  pointer-events: auto;
  background-color: #fff;
  position: relative;
  -webkit-box-sizing: border-box;
  color: #000;
  .ui-dialog-bd {
    min-height: 46px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 18px 28px 18px 28px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    > p {
      font-size: 16px;
      width: auto;
      margin: 2px auto;
    }
  }
}
.ui-dialog-bd h2,
.ui-dialog-bd h3 {
  font-size: 20px;
  width: auto;
  margin: 1px auto 5px;
  font-weight: normal;
}
.ui-dialog-ft {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: -webkit-box;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-align: center;
  border-top: 1px solid #e9e9e9;
  height: 45px;
  line-height: 45px;
}
.ui-dialog-ft button:first-child:nth-last-child(2) {
  position: relative;
}
.ui-dialog-ft button:first-child {
  border-bottom-left-radius: 3px;
}
.ui-dialog-ft button:last-child {
  border-bottom-right-radius: 3px;
}
.ui-dialog-ft button {
  font-size: 18px;
  text-align: center;
  width: 100%;
  line-height: 45px;
  display: block;
  margin: 0;
  -webkit-box-flex: 1;
  -webkit-appearance: none;
  border: 0;
  background: none;
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .ui-dialog-ft {
    position: relative;
    border: 0;
    background-position: left top;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.5, transparent),
      color-stop(0.5, #e9e9e9)
    );
    background-repeat: repeat-x;
    -webkit-background-size: 100% 1px;
  }
  .ui-dialog-ft button:first-child:nth-last-child(2):after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 1px;
    height: 100%;
    border-right: 0;
    background-position: right top;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0.5, transparent),
      color-stop(0.5, #e9e9e9)
    );
    background-repeat: repeat-y;
    -webkit-background-size: 1px 100%;
  }
}
.ui-dialog-ft button:first-child:nth-last-child(2):after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 1px;
  height: 100%;
  border-right: 1px #e9e9e9 solid;
}
</style>