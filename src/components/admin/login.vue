<template>
  <div id="loginVue">
    <div class="loginDiv">
      <form>
        <p class="pass-form-logo">用户名密码登录</p>
        <div class="form-group">
          <label for="idInput"></label>
          <input type="text" class="form-control col-md-12" id="idInput" placeholder="用户名/手机号/邮箱">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"></label>
          <input type="password" class="form-control col-md-12" id="exampleInputPassword1" placeholder="密码">
        </div>
        <router-link to="index" replace>
          <button type="button" class="btn btn-primary" @click="submit">Submit</button>
        </router-link>
        <div id="submitWrapper">
          <small>忘记密码</small>
          <small>注册</small>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    submit: function (event) {
      //查数据库

    }
  }
}

</script>

<style scoped >
.loginDiv {
  width: 356px;
  height: 410px;
  border: beige solid 2px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.btn-primary {
  margin-top: 50px;
  width: 100%;
  height: 40px;
  background-color: #3f89ec;
}

.pass-form-logo {
  background: url("https://passport.baidu.com/passApi/img/loginlogo.png") no-repeat left;
  height: 32px;
  padding-left: 118px;
  line-height: 46px;
}

input {
  transition: 0.3s;
}

#submitWrapper {
  font-size: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>