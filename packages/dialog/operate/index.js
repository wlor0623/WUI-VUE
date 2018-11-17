import Vue from 'vue';
import Operate from './src/operate.vue'; //引入组件 
let OperateConstructor = Vue.extend(Operate); // 返回一个“扩展实例构造器” 
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

const operateDom = new OperateConstructor({
  el: document.createElement('div')
});
// 生成弹窗
let myOperate = (option = {}) => {
  if (typeof option !== 'object') {
    return
  }
  operateDom.img = option.img || 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAEsBAMAAACh1R8YAAAAG1BMVEXd3d0AAAClpaVSUlIbGxtubm43NzfBwcGKioq35V/RAAADiElEQVR4nO3Zv08jRxQA4GUB22UGfD6XRjmljqVTlJK9SFyLK1pbQiglSOiUEpr83XkzY7MbQ5Uy+30SsLu86um9+dk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9B+zX9sTq87D6XP393Ny//Cpp9TTd39el+/mfzcdBIrVNKn/bP56kk8Dk+zR8HMW0XX9Kv8TTNT98/DBqpSUo3XbqtL1clgZGk+PR9EHSV5g9dumxy2ub3JW/vg0Zqk+6aWbqoL11J4CR9i5qbD4K6+SpX4Sp6PJ6+pOuPgsZpmpbxe3NZXk5TSeBVrrDn9PIWNCufn6OH21xz0275QdBInZeR7axW0uunkqldzuksl9nepLR4/jIpGXudfxA0UmcpzwOnKT9P0zYncJp+ym91PtkHreJ3G9+fSuBJenwfNFJXi/55kh5zQmZpm992n2Loe8w1enFSstxGub0uauBtHzRym0EGNstSUad1To5x8Sr391Np8qb267qER9/3QSO3XjY///Z7Wc61UVQ5gXWcy8V2nmfn3WGmPYuclZEv12gfNHK7iy+HhXQeDnMC64gX02xevvRLnHYXDd2Vl2jmQdC4dcu8xygDWhTjcQKjh59qr05iIf2tkcB3Yjt2N/0lbzLaPNblBNYpo0y40cO72qQnkeXbw6wbU/AgaNzqxnYd6XjOU+5RAptd2i9UcgJjEyKBx1JpxTI/5O6sCcyfanc+pbe9xl/ryHU6tPCJFq660qHnaTsrq5WjMTD+0U+zs5hrjIHHurKQi4xM0kNIi4fb4QrlLKX+xGq9sIx5p24lYlCbpL3tcI28rhN0FeVmIX1s01fgIYHn+13aMn+/zGvE/YAXM8Zmv5V7GQSNW90Lzw51dnSYcJa260heP+A5TDhWT2MmhyPpkpCunlRty/LmuRxile3w+jLCX5o68vVB41Zb8fUwVZQEvuYV4VOkqo3+zT/1qqSNNcysHKjmQ9i3oLHrFqtI0OFMZnCkv8jleZ2rcDVN85dmusm5rkf620HQ2OX7on6qHVwqfS65y8f211GhKfbCOVvlUik9DoLGrtxYvi1GakZ+1BvLtnzP6+dZf625O1xr/nCtWc3uBxfre+8v1u9drAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPyv/ANgaIkJPtbVhAAAAABJRU5ErkJggg==';
  operateDom.title = option.title || '提示';
  operateDom.message = option.message;
  operateDom.confirmTxt = option.confirmTxt || '确定';
  operateDom.callback = option.callback;
  if (option.showClose == false) {
    operateDom.showClose = option.showClose;
  }
  pageScroll.lock();
  document.body.appendChild(operateDom.$el) //把组件的dom添加到body里 
  operateDom.showOperate = true;
}
// 前往
OperateConstructor.prototype.toOperate = function () {
  operateDom.showOperate = false;
  typeof this.callback === 'function' && this.callback();
  pageScroll.unlock();
  setTimeout(() => {
    const el = operateDom.$el;
    el.parentNode && el.parentNode.removeChild(el);
  }, 400);
};
// 关闭弹窗
OperateConstructor.prototype.closeOperate = function () {
  operateDom.showOperate = false;
  pageScroll.unlock();
  setTimeout(() => {
    const el = operateDom.$el;
    el.parentNode && el.parentNode.removeChild(el);
  }, 400);
};

export default myOperate;