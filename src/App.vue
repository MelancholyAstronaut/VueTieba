<template>
  <div id="app">
    <HeadVue></HeadVue>
    <router-view/>
  </div>
</template>
<script>
import HeadVue from "@/components/public/head-vue";
import {mapState, mapMutations} from "vuex"

export default {
  name: 'App',
  components: {HeadVue},
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {

    ...mapMutations(['login', 'logout']),
  },
  created: function () {
    const isLogin = window.sessionStorage.getItem("user") || false;
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
