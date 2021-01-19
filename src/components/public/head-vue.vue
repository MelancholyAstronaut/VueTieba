<template>
  <div id="head-vue" style="display: flex;justify-content: flex-end">
    <div style="margin-right:20px">
      <slot></slot>
    </div>
    <div class="header-menu">
      <div>
        <el-button>
          <a href="/" desc="index">贴吧首页</a>
        </el-button>
      </div>
      <div class="login" v-if="isLogin">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">{{ username }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的信息</el-dropdown-item>
            <el-dropdown-item>消息</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <el-button @click="dialogVisible = true">登录</el-button>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :modal=false
            width="27%"
            :destroy-on-close=true
        >
          <div slot="title" style="text-align: center">
            <h3>贴吧登录</h3>
          </div>
          <div slot="default">
            <login-vue></login-vue>
          </div>
          <div slot="footer">
          </div>
        </el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"
import loginVue from "@/components/admin/login";

export default {
  name: "head-vue",
  components: {loginVue},
  computed: mapState(['isLogin'],
  ),
  data: () => {
    return {username: "", dialogVisible: false}
  },
  methods: {
    ...mapMutations(["logout"]),
    //以下两个方法维护了vuex中store.isLogin的更新
    handleCommand(command) {
      if (command === 'logout') {
        this.$confirm("确认退出嘛?", '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // localStorage.removeItem("name")
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
    closeMyDialog() {
      this.$data.dialogVisible = false
    }
  },
  created() {
    this.username = window.sessionStorage.getItem("name") || null
  },

}
</script>

<style scoped lang="scss">
@import "src/assets/scss/headVue";


</style>