<template>
  <div id="loginVue" class="clearfix">
    <div class="loginDiv clearfix">
      <p class="pass-form-logo">用户名密码登录</p>
      <div style="margin-top: 60px"></div>
      <el-form label-position="top" ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="手机/邮箱/用户名"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="form.pass" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit('form')" style="width: 100%;">登录</el-button>
        </el-form-item>
      </el-form>

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
      form: {
        name: "",
        pass: "",
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['login']),
    submit(FormData) {
      this.$refs[FormData].validate((valid) => {
        if (valid) {
          this.$axios.post("/api/user/login", this.qs.stringify({
            name: this.form.name,
            password: this.form.pass,
          })).then(res => {
            if (res.status === 200 && res.data !== "") {
              this.$message.success({
                message: `欢迎你 ${res.data.name}`,
                center: true,
                duration: 1000
              });
              // console.log(res.data)
              window.sessionStorage.setItem("token", res.data.token);
              window.sessionStorage.setItem("name", res.data.name);
              this.login() //提交登录标记
              this.$layer.close(this.layerid)
            } else if (res.data === "") {
              this.$message.error({
                message: '用户名或者密码出错',
                center: true,
                offset: 200,
                showClose: true
              });
              this.$refs[FormData].resetFields();
            }
          })
        } else {
          return false;
        }
      })

    }
  }

}

</script>

<style scoped lang="scss">
@import "src/assets/scss/loginVue";
</style>