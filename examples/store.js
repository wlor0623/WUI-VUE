import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
  state: {
    loadingPage: false,//加载状态
    currentPath: false,//当前路径
  },
  mutations: {
    // 切换加载状态
    toggle_loadingPage(state, isLoading) {
      state.loadingPage = isLoading;
    },
    // 切换当前路径
    toggle_currentPath(state, currentPath) {
      state.currentPath = currentPath;
    },
  },
  actions: {

  },
  plugins: [createPersistedState()]  //会自动保存创建的状态。刷新还在
})
