<!--
 * @Description: 首页
 * @Date: 2022-05-19 18:29:32
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 17:24:30
-->
<template>
  <div class="home-box">

    <!-- 轮播图和tab栏 -->
    <div class="carousel_tabs">
      <div class="carousel_container">
      </div>
      <div class="tabs_container">
        <!-- <f-carousel /> -->
      </div>
    </div>

    <!--主体区域-->
    <div class="home_container">
      <div class="left_box">
        <technology-sharing />
        <book-articles />
      </div>
      <div class="right_box">
        <info-me />
        <rank-list />
        <!-- <recommend-list /> -->
      </div>
    </div>

  </div>
</template>

<script>
import TechnologySharing from "./home-module/technology-sharing" //前端技术
import BookArticles from "./home-module/book-articles" //文章分享
import InfoMe from "./home-module/info-me" //右侧自我介绍
import RankList from "./home-module/rank-list" //右侧自我介绍
// import RecommendList from "./home-module/recommend-list" //右侧站长推荐
export default {
  components: {
    TechnologySharing,
    BookArticles,
    InfoMe,
    RankList
    // RecommendList
  },
  data() {
    return {
      activities: [{
        content: "支持使用图标图标支持使用图标图标支持使用图标图标",
        timestamp: "2018-04-12 20:46",
        size: "large",
        // type: "primary",
        // color: "#0bbd87",
        icon: "el-icon-top"
      }, {
        content: "支持自定义颜色",
        timestamp: "2018-04-03 20:46",
        // color: "#0bbd87",
        size: "large",
        icon: "el-icon-top"

      }, {
        content: "支持自定义尺寸",
        timestamp: "2018-04-03 20:46",
        size: "large",
        icon: "el-icon-top"
      }
      ],
      showAll: false,
      activeName: "first"
    }
  },
  watch: {
    "activities": {
      immediate: true, // 立即执行
      deep: true, // 深度监听复杂类型内变化
      handler(newVal, oldVal) {
        if (newVal && newVal.length < 5) {
          this.showAll = true
        } else if (newVal && newVal.length > 9) {
          this.showAll = false
        }
      }
    }
  },
  created() {

  },
  methods: {
    handleClick() {
      console.log("-----")
    },
    loadingAll() {
      for (let index = 0; index < 10; index++) {
        this.activities.push({
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large",
          icon: "el-icon-top"
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
::v-deep .el-card__body {
  padding: 0 20px 20px 20px;
}
.home-box {
  //轮播图和tab栏-start
  .carousel_tabs {
    display: flex;
    ::v-deep .is-active {
      color: $main_color;
    }
    ::v-deep .el-tabs__item.is-top {
      &:hover {
        color: $main_color !important;
      }
    }
    .el-tabs--border-card {
      min-height: 300px;
      min-width: 540px;
      margin-left: 50px;
      font-size: 16px;
      ::v-deep .el-tabs__item.is-top {
        font-size: 16px;
        &:hover {
          color: $main_color;
        }
      }
    }
  }
  //轮播图和tab栏-end

  //主体区域-----start
  .home_container {
    display: flex;
    .left_box {
      width: 75%;
      margin-right: 20px;
      // min-height: 600px;

      padding: 0 8px;
    }
    .right_box {
      flex: 1;
      // background: $third_bg_color;
    }
  }
  //主体区域-----end
}
</style>
