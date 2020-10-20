<template>
  <div id="head-vue" style="display: flex;justify-content: flex-end">
    <div style="margin-right:20px">
      <slot></slot>
    </div>
    <div class="header-menu">
      <a href="/" style="margin-right: 20px">贴吧首页</a>
      <div class="login">
        <a v-if="isLogin" @click="logout" href="#">个人信息</a>
        <a v-if="!isLogin" @click="login" href="#">登录</a>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from "vuex"
import login from "@/components/admin/login";

export default {
  name: "head-vue",
  computed: mapState(['isLogin']
  ),
  methods: {
    //以下两个方法维护了vuex中store.isLogin的更新
    login: function () {
      this.$layer.iframe({
        content: {
          content: login, //传递的组件对象
          parent: this,//当前的vue对象
          data: {info: {a: 1}}//props
        },
        area: ['400px', '500px'],
        title: '百度贴吧',
      })
    },
    logout: function () {

    }
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/headVue";
</style>