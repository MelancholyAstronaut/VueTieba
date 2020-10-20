<template>
  <div id="app">
    <HeadVue></HeadVue>
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

<style scoped lang="scss">

</style>
