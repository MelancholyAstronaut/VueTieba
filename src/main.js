import Vue from 'vue'
import App from './App.vue'
import store from "./store/store"

//
import router from "./router/router";
import axios from "axios"
import qs from "qs";

//bootstrap + jq
import "jquery"
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'
//vue + layer
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
Vue.prototype.$layer = layer(Vue);

Vue.prototype.$axios = axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
