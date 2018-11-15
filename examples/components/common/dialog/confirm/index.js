import Vue from 'vue';
import Confirm from './src/confirm.vue'; //引入组件 
let ConfirmConstructor = Vue.extend(Confirm); // 返回一个“扩展实例构造器” 
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

// 确认
const confirmDom = new ConfirmConstructor({
  el: document.createElement('div')
});
// 生成弹窗
let myConfirm = (text, sureCallback) => {
  document.body.appendChild(confirmDom.$el) //把组件的dom添加到body里 
  confirmDom.message = text;
  callback = sureCallback;
  pageScroll.lock();
}
// 确定弹窗
ConfirmConstructor.prototype.sureConfirm = function () {
  pageScroll.unlock();
  const el = confirmDom.$el;
  el.parentNode && el.parentNode.removeChild(el);
  typeof callback === 'function' && callback();
};

// 关闭弹窗
ConfirmConstructor.prototype.closeConfirm = function () {
  pageScroll.unlock();
  const el = confirmDom.$el;
  el.parentNode && el.parentNode.removeChild(el);
};
export default myConfirm;