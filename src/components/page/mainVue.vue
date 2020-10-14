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
            <span class="rcmd_f_m_num" :style="rcmd_f_name_urlSpan01">{{ curr.p_num }}</span>
            <span class="rcmd_f_p_num" :style="rcmd_f_name_urlSpan02">{{ curr.t_num }}</span>
          </p>
        </div>
      </div>
      <div class="good_rcmd" id="good_rcmd">
        <span>S10全球总决赛</span>
      </div>
      <div class="good_forum_list clearfix">

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "mainVue",
  data: function () {
    return {
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
      }
    }
  }
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
