import Vinput from './src/input.vue';


// 为组件提供 install 安装方法，供按需引入

Vinput.install = function (Vue) {
  Vue.component(Vinput.name, Vinput)
}
export default Vinput