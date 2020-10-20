import Vue from 'vue';

import VueRouter from 'vue-router';

//修改原型对象中的push方法
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }


Vue.use(VueRouter);
import indexVue from "../components/index";
import mainVue from "../components/page/mainVue";
import login from "@/components/admin/login";


export default new VueRouter({
    mode: 'history',
    routes: [
        {path: "/index", component: indexVue},
        {path: "/", component: mainVue},
        {path: "/login", component: login},
    ]
})


