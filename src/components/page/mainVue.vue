<template>
  <el-container>
    <div class="mainVue">
      <div class="forum_recommend">
        <span class="class_title" style="display: block">推荐贴吧</span>
        <div v-for="curr in rcmd_fornum_list" :key="curr.id" class="rcmd_forumList clearfix">
          <a v-bind:href="curr.url" class="rcmd_forum_img">
            <img :src='curr.imgUrl' style="width: 95px;height: 95px;" alt="xxx"/>
          </a>
          <div id="rcmd_forum_desc">
            <p class="rcmd_f_name">
              <a v-bind:href="curr.url">{{ curr.name }}</a>
            </p>
            <p class="rcmd_f_reason">
              {{ curr.desc }}
            </p>
            <p class="rcmd_f_num">
            <span class="rcmd_f_p_num">
              {{ curr.pNum }}
            </span>
              <span class="rcmd_f_n_num">
              {{ curr.tNum }}
            </span>
            </p>
          </div>
        </div>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <p>S10全球总决赛</p>
          </div>
        </el-col>
        <el-row>
          <el-col :span="24">
            <div class="good_forum_list">
              <a href="#" style="margin-top: 20px;color: #666666" @click="upTieba">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
              </a>
              <div class="good_rcmd_center">
                <ul>
                  <li class="clearfix" style="width: 200px;" v-for="g_f in gr_f_list.slice(0,3)">
                    <a v-bind:href="g_f.url" target="_blank" class="good_forum clearfix">
                      <img :src="g_f.imgUrl" alt="" width="65" height="65">
                      <div class="gf_desc">
                        <p class="gf_fname">{{ g_f.name }}</p>

                        <p class="gf_m_num">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-people-fill" fill="currentColor"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                          </svg>
                          {{ g_f.pNum }}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#" style="margin-top: 20px;color: #666666" @click="nextTieba">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
              </a>
            </div>
          </el-col>
        </el-row>

      </div>
      <newList></newList>
    </div>
  </el-container>

</template>

<script>

import newList from "@/components/page/new_list";

export default {
  name: "mainVue",
  components: {newList},
  data: function () {
    return {
      start: 0,
      rcmd_fornum_list: [],
      gr_f_list: []
    }
  },

  methods: {
    nextTieba: function () {
      var arr = this.$data.gr_f_list;
      var first = arr.shift();
      arr.push(first);
    },
    upTieba: function () {
      var arr = this.$data.gr_f_list;
      var end = arr.pop()
      arr.unshift(end);
    },

  },
  created: function () {
    this.$axios.get("api/tieba/getAllTieba").then(res => {
      this.$data.rcmd_fornum_list = res.data;
    });
    this.$axios.get("api/tieba/hotba").then(res => {
      this.$data.gr_f_list = res.data
    });
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/mainVue";
</style>
