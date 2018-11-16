<template>
  <transition name="fade">
    <section v-if="showSheet" class='sheet' @click.self="cancel">
      <div class="content fadeInUp">
        <div class="options">
          <div class="item" @click.stop="select(index,item)" v-for="(item,index) in array" :key="index">
            {{item}}
          </div>
        </div>
        <div class="cancel" @click.stop="cancel">
          取消
        </div>
      </div>
    </section>
  </transition>
</template>
<script>
  export default {
    name: "toast",
    data() {
      return {
        array: [],
        showSheet: true
      };
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
    components: {}
  };

</script>
<style lang='less' scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fadeInUp {
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp
  }

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0)
    }

    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-50%, 100%, 0);
      transform: translate3d(-50%, 100%, 0)
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0)
    }
  }











  .sheet {
    position: fixed;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;

    >.content {
      width: 95%;
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);

      >.options {
        background-color: #f8f8f8;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 5px;

        >.item {
          text-align: center;
          line-height: 54px;
          height: 54px;
          border-bottom: 1px solid #ecebe0;
          color: #3478f6;

          &:active {
            background-color: #e0e0e0;
          }

          &:last-child {
            border-bottom: none;
          }
        }
      }

      >.cancel {
        background-color: #f8f8f8;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
        line-height: 54px;
        height: 54px;
        color: #3478f6;
      }
    }
  }

</style>
