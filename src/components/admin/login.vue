<template>
  <div id="loginVue">
    <div class="loginDiv">
      <form>
        <p class="pass-form-logo">用户名密码登录</p>
        <div class="form-group">
          <label for="idInput"></label>
          <input type="text" class="form-control col-md-12" id="idInput" placeholder="用户名/手机号/邮箱" v-model="username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"></label>
          <input type="password" class="form-control col-md-12" id="exampleInputPassword1" placeholder="密码"
                 v-model="password">
        </div>
        <router-link to="/" replace>
          <button type="button" class="btn btn-primary" @click="submit" style="width: 100%;">登录</button>
        </router-link>
        <div id="submitWrapper">
          <router-link to="/admin/forget-password">
            <a class="forget-password btn">忘记密码</a>
          </router-link>
          <router-link to="/admin/reg-link">
            <a class="reg-link btn">注册</a>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    layerid: {
      type: String,
      default: ""
    },
  },
  data: function () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    submit(event) {
      this.$layer.msg("登录成功", (layerid) => {
        this.$layer.close(layerid);
        this.$layer.close(this.layerid);
      })
    },
  }
}

</script>

<style scoped lang="scss">
@import "src/assets/scss/loginVue";
</style>