import Vue from 'vue'; //vue
import VueRouter from 'vue-router'; //路由
import store from "./store.js";

Vue.use(VueRouter); //挂载路由

// 定义路由规则
const routes = [{
  path: '/',
  component: resolve => require(['./views/index.vue'], resolve),


},
];

// 创建新路由对象
const router = new VueRouter({
  routes,
  mode: 'history', //（使用history模式）
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          x: 0,
          y: 0
        })
      }, 500)
    })
  }
});
// 路由校验
router.beforeEach((to, from, next) => {
  // 设置标题
  document.title = to.meta.title ? to.meta.title : ''
  next()
});

router.afterEach(route => {
  setTimeout(() => {
    /* 隐藏加载中动画 */
    store.commit('toggle_loadingPage', false);
  }, 1000);
  //  切换vux中保存的路径
  store.commit('toggle_currentPath', route.path);
});
//导出路由
export default router;