import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

import indexVue from "../components/index";
import mainVue from "../components/page/mainVue";
import login from "@/components/admin/login";
import App from "@/App";


export default new Router({
    mode: "history",
    routes: [
        {path: "/index", component: indexVue},
        {path: "/", component: mainVue},
        {path: "/login", component: login},
    ]
})

