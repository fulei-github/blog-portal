<!--
 * @Description: 文章详情
 * @Date: 2022-06-12 20:30:02
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-02 18:46:37
-->
<template>
  <div class="box">
    <div class="left_box">
      <h1>五年电商前端团队小程序开发经验总结（万字原理 + 优化干货）</h1>
    </div>
    <div class="right_box">文章目录</div>

  </div>
</template>

<script>
export default {
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
.box {
  display: flex;
  min-height: 800px;
  .left_box {
    flex: 1;
    // background: $third_bg_color;
  }
  .right_box {
    width: 240px;
    // background: $third_bg_color;
    margin-left: 20px;
  }
}
</style>