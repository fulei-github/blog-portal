<!--
 * @Description: home页
 * @Date: 2022-06-12 17:37:22
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-03 01:38:33
-->
<template>
  <div class="home-box">

    <div class='container'>
      <div class="transition tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="item.name" :name="item.id" v-for="item in tabsList" :key="item.id">
            <div class="content-list">
              22
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 更多 -->
      <div class="more-botton" @click="showMoreList(item)">
        <i class="el-icon-menu"></i>
      </div>
      <ul class="card-tabs clearfix" v-if="showMore" @mouseleave="showMore=false">
        <li class="mr12 mb12" :class="{'select-card-tab': item.id === activeName}" v-for="item in tabsList" :key="item.id">
          {{item.name}}
        </li>
      </ul>
      <!-- 按照热度排序 -->
      <el-tooltip effect="dark" content="是否热度排序" placement="bottom" :hide-after="1500">
        <div class="hot-botton" @click="handleSortHot">
          <svg-icon :icon-class="isSortHot?'hot_red':'hot_grey'"></svg-icon>
        </div>
      </el-tooltip>
    </div>
    <div class="right-box">
      <div class="transition">
        right-box
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isSortHot: false,
      showMore: false,
      activeName: "1",
      tabsList: [
        {
          name: "前端",
          id: "1"
        },
        {
          name: "css",
          id: "2"
        },
        {
          name: "javascript",
          id: "3"
        },
        {
          name: "node",
          id: "4"
        },
        {
          name: "webpack",
          id: "5"
        },
        {
          name: "vite",
          id: "6"
        },
        {
          name: "vue2",
          id: "7"
        },
        {
          name: "vue3",
          id: "8"
        },
        {
          name: "react",
          id: "9"
        },
        {
          name: "webGI",
          id: "10"
        },
        {
          name: "three",
          id: "11"
        },
        {
          name: "git",
          id: "12"
        },
        {
          name: "element",
          id: "13"
        },
        {
          name: "antdsign",
          id: "14"
        },
        {
          name: "uview",
          id: "15"
        },
        {
          name: "uniapp",
          id: "16"
        },
        {
          name: "前端",
          id: "17"
        },
        {
          name: "前端",
          id: "18"
        },
        {
          name: "前端",
          id: "19"
        }
      ]
    }
  },
  created() {
  },
  methods: {
    showMoreList() {
      this.showMore = !this.showMore
    },
    handleSortHot() {
      this.isSortHot = !this.isSortHot

    }
  }
}
</script>
<style lang='scss' scoped>
@import "@/styles/variables.scss";
@import "@/styles/transition.scss";
@keyframes aniBottomTop {
  0% {
    transform: translateY(100px);
    opacity: 0;
    -webkit-transform: translateY(100px);
    -moz-transform: translateY(100px);
    -ms-transform: translateY(100px);
    -o-transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
.home-box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 !important;

  .right-box {
    width: 20%;
    background-color: white;
    animation: anitRightLeft 460ms;
    margin-left: 60px;
  }

  .container {
    position: relative;
    margin: 20px;
    height: 100%;
    width: 80%;
    padding-bottom: 10px;
    ::v-deep .el-tabs__active-bar {
      height: 0;
    }
    .tabs {
      width: 100%;
      height: calc(100% - 70px);
      background-color: white;
      border-radius: 24px;
      padding: 4px 32px 46px;
      position: relative;
      animation: aniBottomTop 460ms;
      ::v-deep .el-tabs {
        height: 100%;
        .el-tabs__header {
          padding-right: 40px;
        }

        .el-tabs__item {
          font-size: 18px;
          &:hover {
            color: $main_color;
          }
        }
        .is-active {
          color: $main_color;
          font-weight: 600;
          // border-bottom: 1px solid $main_color;
        }
        .el-tabs__content {
          height: calc(100% - 40px);
          overflow: scroll;
          &::-webkit-scrollbar {
            width: 8px;
            height: 0 !important;
          }
          &::-webkit-scrollbar-thumb {
            background: $second_border_color;
          }
          &::-webkit-scrollbar-track {
            border: none 0;
          }
        }
      }
      .pagination-container {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0%;
        text-align: center;
        padding: 0 0 4px 0 !important;
        background: none;
      }
      .more-botton {
        position: absolute;
        width: 32px;
        height: 32px;
        right: 40px;
        top: 10px;
        text-align: center;
        line-height: 32px;
        color: $third_text_color;
        cursor: pointer;
        &:hover {
          color: $main_color;
        }
      }
      // 按照热度排序
      .hot-botton {
        position: absolute;
        width: 32px;
        height: 32px;
        right: 10px;
        top: 10px;
        text-align: center;
        line-height: 32px;
        color: $second_text_color;
        cursor: pointer;
        &:hover {
          color: $main_color;
        }
      }
      .card-tabs {
        width: 80%;
        min-height: 120px;
        background: #fff;
        border-radius: 8px;
        position: absolute;
        right: 10px;
        top: 42px;
        // transform: translate(-50%, 0);
        z-index: 9;
        border: 1px solid $third_border_color;
        animation: aniBottomTop 300ms;
        box-shadow: 0px 1.3px 1.2px -24px rgba(0, 0, 0, 0.041),
          0px 3.3px 3.1px -24px rgba(0, 0, 0, 0.056),
          0px 6.7px 6.4px -24px rgba(0, 0, 0, 0.069),
          0px 13.9px 13.1px -24px rgba(0, 0, 0, 0.084),
          0px 38px 36px -24px rgba(0, 0, 0, 0.13);
        padding: 20px;
        li {
          list-style: none;
          float: left;
          background: $main_bg_color;
          border-radius: 8px;
          cursor: pointer;
          padding: 4px 10px;
          font-size: 14px;
          color: $second_text_color;
          &:hover {
            background: $main_color;
            color: #fff;
          }
        }
        .select-card-tab {
          background: $main_color;
          color: #fff;
          font-weight: bold;
        }
      }
    }
    .more-botton {
      position: absolute;
      width: 32px;
      height: 32px;
      // right: 20px;
      right: -20px;
      top: 10px;
      text-align: center;
      line-height: 32px;
      color: $third_text_color;
      animation: wobble-horizontal 300ms;
      cursor: pointer;
      &:hover {
        color: $main_color;
      }
    }
    .hot-botton {
      position: absolute;
      width: 32px;
      height: 32px;
      right: -50px;
      top: 10px;
      text-align: center;
      font-size: 16px;
      line-height: 32px;
      color: $second_text_color;
      animation: wobble-horizontal 300ms;
      cursor: pointer;
      &:hover {
        color: $main_color;
      }
    }
    .card-tabs {
      width: 80%;
      min-height: 120px;
      background: #fff;
      border-radius: 8px;
      position: absolute;
      right: 10px;
      top: 42px;
      // transform: translate(-50%, 0);
      z-index: 9;
      border: 1px solid $third_border_color;
      animation: aniBottomTop 300ms;
      box-shadow: 0px 1.3px 1.2px -24px rgba(0, 0, 0, 0.041),
        0px 3.3px 3.1px -24px rgba(0, 0, 0, 0.056),
        0px 6.7px 6.4px -24px rgba(0, 0, 0, 0.069),
        0px 13.9px 13.1px -24px rgba(0, 0, 0, 0.084),
        0px 38px 36px -24px rgba(0, 0, 0, 0.13);
      padding: 20px;
      li {
        list-style: none;
        float: left;
        background: $main_bg_color;
        border-radius: 8px;
        cursor: pointer;
        padding: 4px 10px;
        font-size: 14px;
        color: $second_text_color;
        &:hover {
          background: $main_color;
          color: #fff;
        }
      }
      .select-card-tab {
        background: $main_color;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
