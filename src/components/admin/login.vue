<template>
  <div id="loginDiv" class="clearfix">
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
        <div class="footer-desc">
          <el-button type="primary" @click="submit('form')" style="width: 50%;">登录</el-button>
          <el-button type="primary" @click="reset('form')" style="width: 50%;">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "login",
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

              window.sessionStorage.setItem("token", res.data.token);
              window.sessionStorage.setItem("name", res.data.name);
              this.login() //提交登录标记
              this.$emit("closeMyDialog")
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
    },
    reset(form) {
      this.$refs[form].resetFields();
    }
  }
}

</script>

<style scoped lang="scss">
@import "src/assets/scss/loginVue";
</style>