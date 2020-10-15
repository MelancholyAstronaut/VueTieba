<template>
  <div class="mainVue clearfix">

    <div class="forum_recommend">
      <span class="class_title" style="display: block">推荐贴吧</span>
      <div v-for="curr in rcmd_fornum_list" :key="curr.id" class="rcmd_forumList clearfix">
        <a v-bind:href="curr.url" class="rcmd_forum_img">
          <img v-bind:src="curr.imgSrc" style="width: 95px;height: 95px;" alt="xxx"/>
        </a>
        <div id="rcmd_forum_desc">
          <p class="rcmd_f_name" :style="rcmd_f_name_url">
            <a v-bind:href="curr.url">{{ curr.name }}</a>
          </p>
          <p class="rcmd_f_reason">
            {{ curr.desc }}
          </p>
          <p class="rcmd_f_num">
            <span class="rcmd_f_m_num" :style="rcmd_f_name_urlSpan01">
              {{ curr.p_num }}</span>
            <span class="rcmd_f_p_num" :style="rcmd_f_name_urlSpan02">{{ curr.t_num }}</span>
          </p>
        </div>
      </div>
      <div class="good_rcmd" id="good_rcmd">
        <span>S10全球总决赛</span>
      </div>
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
                <img :src="g_f.mySrc" alt="" width="65" height="65">
                <div class="gf_desc">
                  <p class="gf_fname">{{ g_f.name }}</p>

                  <p class="gf_m_num">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-people-fill" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                    </svg>
                    {{ g_f.people }}
                  </p>
                  <p class="gf_tag"></p>
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
    </div>
  </div>

</template>

<script>

export default {
  name: "mainVue",
  data: function () {
    return {
      start: 0,
      rcmd_fornum_list: [
        {
          id: "0",
          name: "lck",
          desc: "世界第二赛区",
          p_num: "1300000",
          t_num: "1300000",
          imgSrc: require("@/assets/card_head/lck贴吧.jpg"),
          url: "/tieba/lck"
        },
        {
          id: "1",
          name: "lpl",
          desc: "世界第一赛区",
          p_num: "14000000",
          t_num: "14000000",
          imgSrc: require("@/assets/card_head/lpl贴吧.jpg"),
          url: "/tieba/lpl"
        }
      ],
      rcmd_f_name_url: {
        background: 'url(' + require("@/assets/sprits.png") + ') no-repeat scroll -140px 0 transparent',

      },
      rcmd_f_name_urlSpan01: {
        background: 'url(' + require("@/assets/sprits.png") + ')',
        paddingLeft: '20px',
        fontSize: '14px',
        backgroundPosition: '1px 2px'
      },
      rcmd_f_name_urlSpan02: {
        background: 'url(' + require("@/assets/sprits.png") + ')',
        paddingLeft: '20px',
        fontSize: '14px',
        backgroundPosition: '0px -33px',
        marginLeft: '20px'
      },
      gr_f_list: [
        {
          id: "0",
          name: "dwg吧",
          people: "122",
          url: "/tieba/dwg",
          mySrc: require("@/assets/card_head/dwg贴吧.jpg")
        },
        {
          id: "1",
          name: "jdg吧",
          people: "222",
          url: "/tieba/jdg",
          mySrc: require("@/assets/card_head/jdg贴吧.jpg")
        },
        {
          id: "2",
          name: "lgd吧",
          people: "333",
          url: "/tieba/lgd",
          mySrc: require("@/assets/card_head/lgd贴吧.jpg")
        },
        {
          id: "3",
          name: "fnc贴吧",
          people: "444",
          url: "/tieba/fnc",
          mySrc: require("@/assets/card_head/fnc贴吧.jpg")
        },
        {
          id: "4",
          name: "tl贴吧",
          people: "555",
          url: "/tieba/tl",
          mySrc: require("@/assets/card_head/tl贴吧.jpg")
        }
      ]


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
    }
  },
}
</script>

<style scoped lang="less">

* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 12px;
  line-height: 12px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

img {
  border: 0;
  border-radius: 5px;
}

.mainVue {
  width: 1000px;
  margin: 0 auto;

}

.forum_recommend {
  width: 778px;
  height: 274px;
  border: 1px solid #D7D7D7;
  margin: 10px auto;
  padding: 0 10px;

  span {
    line-height: 38px;
    font-size: 16px;
  }

  .good_forum_list {
    width: 760px;
    height: 74px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .good_rcmd_center {
      width: 760px;
      height: 72px;

      ul {
        list-style: none;
        display: flex;
        justify-content: space-between;

        li {
          list-style: none;

          a {
            text-decoration: none;
            color: #444444;
            display: block;
            width: 168px;
            height: 69px;
            background-color: #FCFCFC;
            border-bottom: 1px solid #D6D6D6;

            .gf_desc {
              //border: #3f89ec 2px solid;
              overflow: hidden;
              float: right;
              margin: -10px 43px -20px 0px
            }
          }
        }
      }
    }
  }
}

.rcmd_forumList {
  float: left;
  margin-top: 1px;
  width: 375px;

}

.rcmd_forum_img {
  display: block;
  float: left;
  height: 95px;
}

#rcmd_forum_desc {
  float: left;
  width: 230px;
  margin-left: 14px;

  .rcmd_f_name {
    padding-left: 44px;
    padding-top: -20px;

    a {
      text-decoration: none;
      color: #005196;
      font-size: 20px;
      font-family: STHeiti, "Microsoft Yahei", "Microsoft YaHei", Arial, sans-serif;
      line-height: 20px;
    }
  }

  .rcmd_f_num {
    margin-top: -11px;
  }

  .rcmd_f_reason {
    padding-left: 0;
    color: #666;
    line-height: 20px;
    margin-top: -13px;
    height: 20px;
    overflow: hidden;
  }

  .good_rcmd {
    margin-top: 10px;
  }

}
</style>
