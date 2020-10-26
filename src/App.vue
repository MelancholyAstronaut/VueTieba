<template>
  <div id="app">
    <el-container>
      <el-row>
        <el-col :span="24">
          <HeadVue></HeadVue>
        </el-col>
      </el-row>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <foot-vue></foot-vue>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import HeadVue from "@/components/public/head-vue";
import footVue from "@/components/public/foot-vue";

import {mapState, mapMutations} from "vuex"

export default {
  name: 'App',
  components: {HeadVue, footVue},
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    ...mapMutations(['login', 'logout']),
  },
  created: function () {
    const isLogin = window.sessionStorage.getItem("name") || false;
    if (isLogin === false) {
      this.logout();
    } else {
      this.login();
    }

  }
}
</script>

<style scoped lang="scss">

</style>
