import Vue from 'vue';
import Alert from './src/alert.vue'; //引入组件 
let AlertConstructor = Vue.extend(Alert); // 返回一个“扩展实例构造器” 
let callback = null;
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


const alertDom = new AlertConstructor({
  el: document.createElement('div')
});
// 生成弹窗
let myAlert = (text, sureCallback) => {
  document.body.appendChild(alertDom.$el) //把组件的dom添加到body里 
  alertDom.showAlert = true;
  alertDom.message = text;
  callback = sureCallback;
  pageScroll.lock();
}

// 关闭弹窗
AlertConstructor.prototype.closeAlert = function () {
  alertDom.showAlert = false;
  setTimeout(() => {
    const el = alertDom.$el;
    el.parentNode && el.parentNode.removeChild(el);
  }, 200);
  typeof callback === 'function' && callback();
  pageScroll.unlock();
};
export default myAlert;