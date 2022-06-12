
<!--
 * @Description: 技术分享
 * @Date: 2022-05-31 21:48:25
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-11 21:56:40
-->
<template>
  <div class="box">
    <div class="ml20">
      <f-title content="前端技术" border mBottom="0" />
    </div>
    <ul class="wrapper">
      <li v-for="(item,index) in list" :key="index">
        <div class="top" @click="readArticle">
          <img :src="item.img" alt="">
        </div>
        <h4 class="one-line-hidden" @click="readArticle">{{item.title}}</h4>
        <p class="two-line-hidden" @click="readArticle">{{item.mainContent}}</p>
        <div>
          <div @click="readArticle"><span class="mr10">+</span>文章阅读</div>
          <div>
            <svg-icon v-show="!item.isLove" icon-class="love" @click="handleClick(index,1)" />
            <svg-icon v-show="item.isLove" icon-class="yes" @click="handleClick(index,2)" />

            <span style="margin-left:8px">{{item.likes}}</span>

          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getList()
  },
  mounted() { },
  methods: {
    //阅读文章
    readArticle() {
      this.$message({
        type: "warning",
        message: "待开发..."
      })
    },
    getList() {
      for (let index = 0; index < 6; index++) {
        this.list.push(
          {
            img: require(`@/assets/imgs/carousel/focus_${this.random(1, 6)}.jpg`),
            title: "算法题是无穷无尽的，如果没有掌握算法题是无穷无尽的，如果没有掌握",
            mainContent: "刚刚接触算法题目时，我们要先思考之后看参考答案并结合其他人的题解刷。思考、总结并掌握本题的类型以及思考方刚刚接触算法题目时刚刚接触算法题目时刚刚接触算法题目时刚刚接触算法题目时",
            isLove: this.random(0, 1) > 0.5 ? true : false,
            likes: this.random(10, 50)
          }
        )
      }
    },
    handleClick(index, key) {
      this.list[index].isClick = !this.list[index].isClick
      this.list[index].isLove = !this.list[index].isLove
      switch (key) {
        case 1:
          //不喜欢 --- 喜欢
          this.list[index].likes = this.list[index].likes + 1
          break
        case 2:
          //喜欢 --- 不喜欢
          this.list[index].likes = this.list[index].likes - 1
          // eslint-disable-next-line indent
          break
      }
    }
  }
}
</script>
<style  scoped>
li:hover {
  cursor: pointer;
  transition: all 0.4s;
  box-shadow: 1px 1px 10px rgba(0 0 0 / 40%);
}
</style>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.box {
  background: $third_bg_color;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 14px 8px;
    margin: 5px;
    min-height: 250px;
    width: 30%;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    &:nth-child(3) {
      border-right: 0;
    }
    &:nth-child(6) {
      border-right: 0;
    }
    .top {
      img {
        width: 100%;
        height: 145px;
      }
    }
    div:last-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      div:first-child {
        width: 100px;
        cursor: pointer;
        font-weight: 700;
      }
      div:last-child {
        cursor: pointer;
      }
    }
    p {
      margin: 5px 0;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>