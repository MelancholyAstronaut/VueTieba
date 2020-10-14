<template>
  <mainVue>
    <p>2222</p>
  </mainVue>
</template>

<script>
import mainVue from "@/components/page/mainVue";

export default {
  name: "MyCarousel",
  components: {mainVue}
}
</script>

<style scoped>
img {
  height: 217px;
  background: no-repeat center;
}

#carouselExampleControls {
  width: 700px;
  margin: 0 auto;
}
</style>