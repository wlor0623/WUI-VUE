import Vue from 'vue';
import Toast from './src/toast.vue'; //引入组件 
let ToastConstructor = Vue.extend(Toast) // 返回一个“扩展实例构造器” 

// 锁屏
const pageScroll = (function () {
  const fn = function (e) {
    e.preventDefault();
    e.stopPropagation();
  };
  let islock = false;
  return {
    lock(el) {
      if (islock) return;
      islock = true;
      (el || document).addEventListener('touchmove', fn);
    },
    unlock(el) {
      islock = false;
      (el || document).removeEventListener('touchmove', fn);
    }
  };
})();



const toastDom = new ToastConstructor({
  el: document.createElement('div')
});


let myToast = (text, duration) => {
  if (!text) return
  document.body.appendChild(toastDom.$el) //把toast组件的dom添加到body里 
  toastDom.text = text;
  toastDom.duration = duration || 1500;
  pageScroll.lock();
  // 在指定 duration 之后让 toast消失 
  setTimeout(() => {
    const el = toastDom.$el;
    el.parentNode && el.parentNode.removeChild(el);
  }, toastDom.duration);
}
export default myToast;