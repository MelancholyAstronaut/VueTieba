<template>
  <div id="loginVue" class="clearfix">
    <div class="loginDiv clearfix">
      <form>
        <p class="pass-form-logo">用户名密码登录</p>
        <div class="form-group">
          <label for="idInput"></label>
          <input type="text" class="form-control col-md-12" id="idInput" placeholder="用户名/手机号/邮箱" v-model="username"
                 v-bind:class="{passwordError :helpMsg }">
        </div>
        <div class="form-group">
          <label for="InputPassword"></label>
          <input type="password" class="form-control col-md-12" id="InputPassword" placeholder="密码"
                 v-model="password" aria-describedby="passwordHelpBlock" v-bind:class="{passwordError :helpMsg}">
        </div>
        <small id="passwordHelpBlock" class="form-text text-muted" v-model="helpMsg">
          {{ helpMsg }}
        </small>
        <router-link to="/" replace>
          <button type="button" class="btn btn-primary" @click="submit" style="width: 100%;">{{ tips }}
          </button>
        </router-link>
      </form>
    </div>
    <div id="tang-pass-footerBar">
      <router-link to="/admin/forget-password">
        <a class="forget-password btn">忘记密码</a>
      </router-link>
      <router-link to="/admin/reg-link">
        <a class="reg-link btn">立即注册</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import qs from "qs";

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
      password: null,
      helpMsg: null,
      tips: "登录",
    }
  },
  methods: {
    ...mapMutations(['login']),
    submit(event) {
      if (this.username === null) {
        $("#idInput").focus();
        this.$layer.msg("请填写用户名");
        return
      }
      if (this.password === null) {
        $("#InputPassword").focus();
        this.$layer.msg("请填写密码");
        return
      }
      this.tips = "登陆中......"
      this.$axios.post("/api/user/login", this.qs.stringify({
        name: this.username,
        password: this.password,
      })).then(res => {
        if (res.status === 200 && res.data !== "") {
          this.$layer.msg(`欢迎你 ${res.data.name}`, (layerid) => {
            this.$layer.close(layerid);
            this.$layer.close(this.layerid);
            window.sessionStorage.setItem("user", qs.stringify(res.data))
            this.login() //提交登录标记
          })
        } else if (res.data === "") {
          this.$data.helpMsg = "用户名或密码错误"
          setTimeout(() => {
            this.username = ""
            this.password = ""
            this.$data.helpMsg = ""
            this.tips = "重新登录"
          }, 2000)
        }
      })
    }
  }

}

</script>

<style scoped lang="scss">
@import "src/assets/scss/loginVue";
</style>