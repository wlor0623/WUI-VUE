<template>
  <section class="confirm">
    <transition name='fade'>
      <div class="mui-popup mui-popup-in">
        <div class="mui-popup-inner">
          <div class="mui-popup-title">{{title}}</div>
          <div class="mui-popup-text">
            <slot>
              <p>{{message}}</p>
            </slot>
          </div>
        </div>
        <div class="mui-popup-buttons">
          <span class="mui-popup-button" @click.stop="sureConfirm">确定</span>
          <span class="mui-popup-button" @click.stop="closeConfirm">取消</span>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
export default {
  name: "alert",
  data() {
    return {
      showAlert: true
    };
  },
  props: {
    title: {
      type: String,
      default: "提示"
    },
    message: {
      type: String
    },

    // 确定回调
    sureCallback: {
      type: Function
    }
  },
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.confirm {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  transition: all 0.6s;
}
.mui-popup.mui-popup-in {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10000;
  max-width: 270px;
  width: 70%;
  overflow: hidden;
  color: #000;
  text-align: center;
  border-radius: 13px;
  transition: all 0.6s;
  -webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);
  transform: translate3d(-50%, -50%, 0) scale(1.185);
}
.mui-popup-inner {
  position: relative;
  padding: 15px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 13px 13px 0 0;
}
.mui-popup-title {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.mui-popup-title + .mui-popup-text {
  margin: 5px 0 0;
  font-family: inherit;
  font-size: 14px;
}
.mui-popup-inner:after {
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: block;
  width: 100%;
  height: 1px;
  content: "";
  background-color: #ececed;
}
.mui-popup-buttons {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 44px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.mui-popup-button:first-child:last-child {
  border-radius: 0 0 13px 13px;
}

.mui-popup-button {
  position: relative;
  display: block;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  padding: 0 5px;
  overflow: hidden;
  font-size: 17px;
  line-height: 44px;
  color: #007aff;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.95);
  -webkit-box-flex: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:first-child {
    border-right: 1px solid #ececed;
  }
}
</style>