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
            width="30%"
            :modal=false
            :destroy-on-close=true
            @close='closeDialog()'
        >
          <div slot="title" style="text-align: center">
            <h3>Tieba Login</h3>
          </div>
          <div slot="default">
            <form-vue>
            </form-vue>
          </div>
          <div slot="footer" style="display: flex;flex-direction: row-reverse; justify-content: space-between;">
            <el-button>注册账号</el-button>
            <el-button>忘记密码</el-button>
          </div>
        </el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex"
import login from "@/components/admin/login";
import formVue from "@/components/public/formVue"

export default {
  name: "head-vue",
  components: {login, formVue},
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
    closeDialog() {
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