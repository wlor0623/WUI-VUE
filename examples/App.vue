<template>
  <div id="app">
    <transition name="slide-left">
      <router-view class="router"/>
    </transition>
  </div>
</template>

<style lang="less">
  .router {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

</style>
