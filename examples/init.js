import Vue from 'vue'
// 过滤器
import * as custom from "@/filter.js";
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))

// import toast from "@/components/common/dialog/toast/index.js"
// import sheet from "@/components/common/dialog/sheet/index.js"
// import alert from "@/components/common/dialog/alert/index.js"
// import confirm from "@/components/common/dialog/confirm/index.js"

// Vue.prototype.$toast = toast;
// Vue.prototype.$alert = alert;
// Vue.prototype.$confirm = confirm;
// Vue.prototype.$sheet = sheet;


// import Vinput from "@/components/common/input/index.js"
// Vue.component(Vinput.name, Vinput);

import "@/assets/css/base.css";