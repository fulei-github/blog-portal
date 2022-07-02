<!--
 * @Description: layout布局
 * @Date: 2022-05-19 18:33:11
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 17:33:02
-->
<template>
  <div class="layout-box">
    <f-gotop />
    <!-- 导航菜单 -->
    <div class="top-box">
      <div class="nav-logo">
        <h3>博客建设</h3>
      </div>
      <div class="nav-box">
        <f-menu></f-menu>
      </div>
    </div>
    <!-- 主体区域 -->
    <div class="container-box">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <!-- 底部区域 -->
    <f-footer />
  </div>
</template>

<script>
import FFooter from "./footer.vue"
export default {
  components: {
    FFooter
  },
  data() {
    return {

    }
  },

  mounted() {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.layout-box {
  // min-height: 1000px;
  // height: ;
  height: 100vh; /*注意，这里设了这个高度后，后期给window注册onscorll事件时，注册不上*/
  overflow-x: hidden;
  // height: 100%;
  width: 100%;
  // 导航菜单
  .top-box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $second_border_color;
    background-color: #fff;
    height: 65px;
    //logo
    .nav-logo {
      padding-left: 80px;
    }
    //nav
    .nav-box {
      padding-right: 50px;
    }
  }
  //主体区域
  .container-box {
    width: $layout_width;
    // margin-top: 65px;
    margin: 65px auto;
    margin-bottom: 20px;
    padding-top: 20px;
    // border: 1px solid black;
  }
}
</style>