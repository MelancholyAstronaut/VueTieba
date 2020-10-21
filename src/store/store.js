import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        isLogin: false
    },
    mutations: {
        login(state) {
            state.isLogin = true;
            //对于载荷要不要做加盐操作 ?
        },
        logout(state) {
            state.isLogin = false;
            window.sessionStorage.removeItem("user")
        }
    },
})
export default store
