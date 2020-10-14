<template>
  <div class="mainVue">
    <slot>{{ this.$route.params }}</slot>
  </div>
</template>

<script>
export default {
  name: "mainVue",
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
