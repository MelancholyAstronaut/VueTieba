<template>
  <div id="new_list">
    <div class="new_list_head clearfix">
      <ul class="sub_nav_list">
        <li style="margin-left: 8px;">
          <a href="#">热门动态</a>
        </li>
      </ul>
    </div>
    <ul class="new_list">

      <li v-for="list in new_list">
        <div id="n_right">
          <div>
            <div class="title-tag-wraper">
              <a href="#">{{ list.tieba_name.name }}吧</a>
            </div>   <!--吧名-->
            <div class="thread-name-wraper">
              <a href="" class="title">{{ list.tiezi_name }}</a>
            </div> <!--帖子题目-->
          </div>
          <div class="n_text">
            {{ list.text }}
          </div>
          <ul class="img">
            <li>{{ list.image }}</li>
          </ul>
          <div class="n_reply">
            <a href="" class="post_author">{{ list.belongName }}</a>
            <span class="time">{{ list.time }}</span>
          </div>
        </div>

      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "newList",
  components: {},
  data() {
    return {
      new_list: null
    }
  },
  created() {
    this.$axios.get("/api/hottie/getHot").then((res) => {
      this.new_list = res.data;
    })
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/newListVue";
</style>