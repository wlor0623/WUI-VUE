import Vue from 'vue';
import Sheet from './src/sheet.vue'; //引入组件 
let SheetConstructor = Vue.extend(Sheet) // 返回一个“扩展实例构造器” 
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



const sheetDom = new SheetConstructor({
  el: document.createElement('div')
});


// 生成弹窗
let mySheet = (array, sureCallback) => {
  document.body.appendChild(sheetDom.$el) //把组件的dom添加到body里 
  sheetDom.array = array;
  sheetDom.showSheet=true;
  callback = sureCallback;
  pageScroll.lock();
}
// 确定弹窗
SheetConstructor.prototype.select = function (index, item) {
  pageScroll.unlock();
  sheetDom.showSheet=false;
  setTimeout(() => {
    const el = sheetDom.$el;
    el.parentNode && el.parentNode.removeChild(el);
    typeof callback === 'function' && callback(index, item);
  }, 100);
};

// 关闭弹窗
SheetConstructor.prototype.cancel = function () {
  pageScroll.unlock();
  sheetDom.showSheet=false;
  setTimeout(() => {
    const el = sheetDom.$el;
    el.parentNode && el.parentNode.removeChild(el);
  }, 100);
};

export default mySheet;