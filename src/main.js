import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



import {postRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";

import axios from 'axios'

let vueResource = require('vue-source');

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios

//插件形式使用请求
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;

router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  next();
})

new Vue({
  router,
  store,
  el:'#app',
  render: h => h(App)
}).$mount('#app')
