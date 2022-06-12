<!--
 * @Description: 底部区域
 * @Date: 2022-06-10 19:06:15
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-10 19:13:26
-->
<template>
  <div class="footer">
    <div class="container">
      <!-- code区域start -->
      <div class="code">
        <ul>
          <li v-for="(item,i) in list" :key="i">
            <img :src="item.src" alt="">
            <span>{{item.title}}</span>
          </li>

        </ul>
      </div>
      <!-- code区域end -->
      <!-- 版权区域start -->
      <div class="copyright">
        Copyright © www.fuleixiaxiedeblog.com All Rights Reserved.
      </div>
      <!-- 版权区域start -->
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      list: [
        {
          src: require("@pic/carousel/code1.jpg"),
          title: "加我微信"
        },
        {
          src: require("@pic/carousel/code2.jpg"),
          title: "我的微信"
        }
      ]
    }
  },

  mounted() {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #dcdcdc;
  text-align: center;
  font-size: 12px;
  .container {
    padding-top: 20px;
    height: 160px;
    background-color: #dcdcdc;
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.4);
  }
  .code ul li {
    display: inline-block;
    width: 80px;
    margin: 0 20px 0;
  }
  .code ul li span {
    line-height: 32px;
  }
  .code img {
    width: 100%;
  }
}
</style>