
import Vinput from './input';
import {
  Alert,
  Confirm,
  Toast,
  Sheet,
  Operate
} from './dialog'
// 挂载
const install = function (Vue) {
  Vue.component(Vinput.name, Vinput);
  Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    sheet: Sheet,
    operate:Operate
  };
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  Vinput
}