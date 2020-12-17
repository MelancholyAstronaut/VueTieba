<template>
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
        <el-button type="primary" @click="submit" style="width: 100%;">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "formVue",
  data() {
    return {
      form: {
        name: '',
        pass: ''
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
    submit() {
      console.log(this.qs.stringify(this.form));
    } ,

  }
}
</script>

<style scoped>

</style>