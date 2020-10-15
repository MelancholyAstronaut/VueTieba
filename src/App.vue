<template>
  <div id="app">
    <HeadVue>
      <div>头像区域</div>
    </HeadVue>
    <router-view/>
  </div>
</template>
<script>
import HeadVue from "@/components/public/head-vue";

export default {
  name: 'App',
  components: {HeadVue},
}
</script>

<style scoped lang="less">

</style>
