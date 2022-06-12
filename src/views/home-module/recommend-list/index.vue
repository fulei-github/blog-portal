<!--
 * @Description: 右侧站长推荐
 * @Date: 2022-06-12 16:31:12
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 17:24:14
-->

<template>
  <div class="mymsg">
    <div style="margin-top:0">
      <f-title content="站长推荐" border mBottom="0" />
    </div>
    <div class="me">
      <ul>
        <li v-for="(item,i) in imgList" :key="i" @click="handleClick(item)">
          <img :src="item.src" alt="">
          <span>{{item.title}}</span>

        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          title: "谷歌中超实用的“隐藏操作”谷歌中超实用的“隐藏操作”",
          id: 0,
          src: require("@pic/carousel/c01.png")
        },
        {
          title: "80%的程序员都会忽略这个问题？",
          id: 1
        },
        {
          title: "优秀程序员成长必备软技能",
          id: 2
        },
        {
          title: "域名解析过程",
          id: 3
        },
        {
          title: "谷歌中超实用的“隐藏操作”",
          id: 4
        },
        {
          title: "谷歌中超实用的“隐藏操作”",
          id: 5
        },
        {
          title: "谷歌中超实用的“隐藏操作”",
          id: 6
        },
        {
          title: "谷歌中超实用的“隐藏操作”",
          id: 7
        },
        {
          title: "谷歌中超实用的“隐藏操作”",
          id: 8
        },
        {
          title: "谷歌中超实用的“隐藏操作”",
          id: 9
        },
        {
          title: "谷歌中超实用的“隐藏操作”",
          id: 10
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
  margin-top: 20px;
  padding: 0 12px 20px 12px;
  background: $third_bg_color;
  ::v-deep .el-link {
    font-size: 16px;
  }

  ul {
    margin-top: 14px;
    font-size: 16px;
  }
  li {
    width: 220px;
    height: 40px;
    &:hover {
      cursor: pointer;
    }
    span {
      margin-right: 12px;
      &:hover {
        color: $main_color;
      }
    }
  }
}
</style>