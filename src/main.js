import Vue from 'vue'
import App from './App.vue'
import store from "./store/store"

//
import router from "./router/router";
import axios from "axios"
import qs from "qs";
//elememt-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
