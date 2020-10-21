<template>
  <div id="head-vue" style="display: flex;justify-content: flex-end">
    <div style="margin-right:20px">
      <slot></slot>
    </div>
    <div class="header-menu">
      <a href="/" style="margin-right: 20px">贴吧首页</a>
      <div class="login">
        <a v-if="isLogin" href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
           aria-expanded="false">
          {{ username }}
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">个人信息</a>
          <a class="dropdown-item" href="#">消息</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="logout">退出</a>
        </div>
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
  data: () => {
    return {username: null}
  },
  methods: {
    //以下两个方法维护了vuex中store.isLogin的更新
    login: function (event) {
      event.preventDefault();
      event.stopPropagation();
      this.$layer.iframe({
        content: {
          content: login, //传递的组件对象
          parent: this,//当前的vue对象
          data: {}//props
        },
        area: ['400px', '500px'],
        title: '百度贴吧',
      })
    },
    logout: function (event) {
      $(".dropdown-menu").dropdown('hide')
      event.preventDefault();
      event.stopPropagation();
      this.$layer.confirm("确认退出嘛.. ", {
        title: "确定退出"
      }, (layerid) => {
        this.$store.commit("logout");
        console.log("退出成功");
        this.$layer.close(layerid)
      });
    },
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/headVue";
</style>