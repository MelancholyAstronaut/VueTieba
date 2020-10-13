<template>
  <div id="head-vue" style="display: flex;justify-content: flex-end">
    <div style="margin-right:20px">
      <img src="../../assets/头像.jpg" alt="" class="headPic">
    </div>
    <div class="test01">
      <button type="button" class="btn  btn-info dropdown-toggle btn-sm" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" style="margin-right: 50px" id="myBtn"
              @mouseover="toggleBtn_in">
        个人设置
      </button>
      <div class="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuLink">
        <a class="dropdown-item" href="#">我的贴吧</a>
        <a class="dropdown-item" href="#">个人中心</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">退出</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "head-vue",
  methods: {
    toggleBtn_in: function (event) {
      event.preventDefault();
      event.stopPropagation()
      $('.dropdown-toggle').dropdown("toggle")
    }
  },
  created: function () {

  }

}
</script>

<style scoped>
#head-vue {
  background-color: bisque;
  box-shadow: 5px 5px 1px #444;
}

.headPic {
  height: 35px;
  width: 35px;
  border-radius: 50%;
}

div a {
  background-color: aliceblue;
}
</style>