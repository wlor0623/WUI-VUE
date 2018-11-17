<template>
  <transition name='fade'>
    <div class="ui-dialog ui-dialog-operate show" v-if="showOperate">
      <div class="ui-dialog-cnt">
        <div class="ui-dialog-hd">
          <div class="ui-img">
            <img :src="img" alt="">
          </div>
        </div>
        <div class="ui-dialog-bd">
          <h3>{{title}}</h3>
          <p>{{message}}</p>
        </div>
        <div class="ui-dialog-ft">
          <button class="ui-btn-lg" @click.stop="toOperate">{{confirmTxt}}</button>
        </div>
        <i v-if="showClose" class="ui-dialog-close" @click.stop="closeOperate" data-role="button"></i>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "alert",
  data() {
    return {
      img: "",
      title: "",
      message: "",
      confirmTxt: "",
      callback: "",
      showClose: true,
      showOperate: false
    };
  },
  methods: {}
};
</script>
<style scoped lang='less'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.ui-dialog {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background: rgba(0, 0, 0, 0.4);
  display: -webkit-box;
}
h1, h2, h3, h4, h5, h6{
  font-weight: normal;
}
.ui-dialog-operate .ui-dialog-cnt {
  max-width: 320px;
  width: 100%;
  border-radius: 3px;
  border: 0;
  margin-top: -30px;
}
.ui-dialog-cnt {
  border-radius: 10px;
  width: 296px;
  -webkit-background-clip: padding-box;
  pointer-events: auto;
  background-color: #fff;
  position: relative;
  -webkit-box-sizing: border-box;
  color: #000;
}
.ui-dialog-hd {
  width: 100%;
  text-align: center;
  min-height: 45px;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  overflow: hidden;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.ui-dialog-operate .ui-img {
  width: 100%;
  height: 150px;
  padding-top: 0;
}
.ui-img > img {
  width: 100%;
  height: 100%;
  display: block;
}
.ui-dialog-operate .ui-dialog-bd {
  padding: 19px 16px;
  min-height: 0;
}
.ui-dialog-bd {
  min-height: 46px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 18px 28px 18px 28px;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  -webkit-box-orient: vertical;
}
.ui-dialog-operate h3 {
  margin: 0;
}
.ui-dialog-bd h2,
.ui-dialog-bd h3 {
  font-size: 20px;
  width: auto;
}
.ui-dialog-operate h3 + p {
  margin-top: 7px;
}
.ui-dialog-operate p {
  margin: 0 auto;
}
.ui-dialog-bd > p {
  font-size: 16px;
  width: auto;
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .ui-dialog-operate .ui-dialog-ft {
    background-image: none;
    padding: 0 16px 16px 16px;
    border: none;
    height: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
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
}
.ui-dialog-operate .ui-dialog-ft button {
  height: 40px;
  line-height: 40px;
}
.ui-dialog-ft button:last-child {
  border-bottom-right-radius: 3px;
}
.ui-dialog-ft button:first-child {
  border-bottom-left-radius: 3px;
}
.ui-dialog-ft button {
  font-size: 18px;
  text-align: center;
  width: 100%;
  line-height: 45px;
  display: block;
  margin: 0;
  -webkit-box-flex: 1;
}
.ui-btn-lg{
  border: 1px solid #eaeced;
}
.ui-dialog-close {
  position: absolute;
  bottom: -80px;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAe1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NgkbwAAAAKHRSTlMA9xXTiVHZCO8pDmiQS+F46By7zKiifjCds4M/cDYhxmE6RJhcwa1XcV7BYQAACfJJREFUeNrVneeSmzAUha8AgygGbHDv66b3f8JMJjO5osSA0bGV8yu7WbP7caskkAgj5/LMksXm5KdSCqWklL57f6y9eBoG9H/oOM1KV6gXyk/X+BKRxQpW+1KqnvIX+xXZqFV2F2qg8vLmkE0KJotcvaliG5IlulylGqXUs4AlTKQyoCL+avQH55MyJbE+0JfkLKUyquL2jRoTrl8mKVmUSXaeXFbH4yxyjsdw9fOMl9e5L17m5PjTKOFC/BNhnpwPLzx+9pMt/l0x8/0nUY7/soa/Pof9omuXbeQ/ctjHrBJ5rRjyEc8G5u1t0Xolf0KfUJy3Uax/grcSRjxvY5nju5eLqxoSiylTvMFStFzyiq0rQYtX+ZkzOnV4shn1SP+apo07V17M3KHYb6CUqIYyWDcwkqPBu3RvBB7GKAe/gWH4ll02dZQFIFIyAcNg7U71ADTdgEUPVdXmSBD91LKiyMikVjW3KnaEUrCXNfcyWOhvohqEMSHllLW7NiNDWta8qv3CuDQvDaX4Rb1Q4RVdq4Fi4ndG1fQ+d+gjmuYVkv14h3VbcwheTrWoeDROM7+S1TubUlzlSsaNoCoc84g+ql1uKg0fK9ljS5/WrKiQvH8dnUPc6PMKKiVlbSLO5Y6+ouX4OIl0jjSkLykWirV8x6pzxfJn9DU9dZKYBkuv565DX9RUIxE/NFBbxSoGpl0kiRzo4zfdHl9fJtNJ0kHesRJafFiwqDQRWlkOBiQsX7sDM7JA5/faro3mkxYsJv1WpljPNz4kdmSJ1trNPQ4PkBvZIr2unYJen/D1PtEe6YG7HGjDOdmkULLHX3rkbOZILUi8uiZaTQg6DZgytnWPWCRM4g342T3ZpqDofZcPwtIA+aNQcANIL8XIuWUB8kdxz44+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);
  background-size: 100% 100%;
}
</style>