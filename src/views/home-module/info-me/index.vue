<!--
 * @Description: 右侧自我介绍
 * @Date: 2022-06-12 15:58:58
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 17:45:28
-->
<template>
  <div class="mymsg">
    <div style="margin-top:0">
      <f-title content="站长简介" border mBottom="0" />
    </div>
    <div class="me">
      <ul>
        <li><span>现职业:</span><span>{{formData.jobName}}</span></li>
        <li><span>现居:</span><span>{{formData.address}}</span></li>
        <li><span>Email:</span><span>{{formData.email}}</span></li>
        <li><span>联系电话:</span><span>{{formData.phone}}</span></li>

      </ul>
    </div>
    <div class="jpg_list">
      <div v-for="(item,i) in imgList" :key="i" @click="handleClick">
        <img :src="item.src" alt="">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      formData: {
        address: "北京市-丰台区",
        email: "62852156@qq.com",
        phone: "13001973483",
        jobName: "Web前端开发攻城狮",
        moeny: "1800"
      },
      imgList: [
        {
          src: require("@pic/carousel/c01.png")
        },
        {
          src: require("@pic/carousel/c02.png")
        },
        {
          src: require("@pic/carousel/c03.png")
        },
        {
          src: require("@pic/carousel/c04.png")
        }
      ]
    }
  },

  mounted() {

  },

  methods: {
    handleClick() {
      this.$message({
        type: "warning",
        message: "待开发..."
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.mymsg {
  padding: 0 12px 20px 12px;
  background: $third_bg_color;
  .jpg_list {
    display: flex;
    justify-content: space-around;
    > div {
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      text-align: center;
      &:hover {
        cursor: pointer;
      }
      img {
        margin-top: 8px;
      }
    }
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 14px;
  }
  ul {
    margin-top: 14px;
    font-size: 16px;
  }
  li {
    height: 40px;
    span {
      margin-right: 12px;
    }
  }
}
</style>