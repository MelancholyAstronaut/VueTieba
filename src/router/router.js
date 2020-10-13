import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

import indexVue from "../components/index";
import loginVue from "../components/admin/login";

export default new Router({
    mode: "history",
    routes: [
        {path: "/index", component: indexVue},
        {path: "/", component: loginVue}
    ]
})

