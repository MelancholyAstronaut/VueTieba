<template>
  <div id="head-vue" style="display: flex;justify-content: flex-end">
    <div style="margin-right:20px">
      <slot></slot>
    </div>
    <div class="header-menu">
      <a href="/" style="margin-right: 20px">贴吧首页</a>
      <div class="login">
        <el-dropdown v-if="isLogin" @command="handleCommand">
          <span class="el-dropdown-link">{{ username }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的信息</el-dropdown-item>
            <el-dropdown-item>消息</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a v-if="!isLogin" @click="login" href="#">登录</a>
      </div>
    </div>

  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"
import login from "@/components/admin/login";

export default {
  name: "head-vue",
  computed: mapState(['isLogin'],
  ),
  data: () => {
    return {username: ""}
  },
  methods: {
    ...mapMutations(["logout"]),
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
    handleCommand(command) {
      if (command === 'logout') {
        this.$confirm("确认退出嘛?", '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          this.logout();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        })
      }
    },
  },
  created() {
    this.username = window.sessionStorage.getItem("name") || null
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/headVue";


</style>