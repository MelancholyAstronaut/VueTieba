import Vue from 'vue'
import App from './App.vue'
import store from "./store/store"

//
import router from "./router/router";
import axios from "axios"
//bootstrap + jq
import "jquery"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
//vue + layer
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
Vue.prototype.$layer = layer(Vue);

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
