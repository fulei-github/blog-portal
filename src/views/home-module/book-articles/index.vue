<!--
 * @Description: 文章分享
 * @Date: 2022-05-31 21:48:25
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 17:25:03
-->
<template>
  <div class="article_box">
    <div class="ml20">
      <f-title content="文章分享" border mBottom="0" />
    </div>
    <ul v-if="list.length !== 0" class="wrapper">
      <li v-for="(item,index) in list" :key="index">
        <div class="content_box">
          <h4><span class="red">[热]</span> {{item.title}}</h4>
          <div>
            <div class="left_box">
              <img :src="item.img" alt="">
            </div>
            <div class="right_box">
              <div>
                <p class="two-line-hidden">{{item.mainContent}}</p>
              </div>
              <div>
                <span>付 磊 的 博 客</span>
                <span>
                  <svg-icon icon-class="date" style="position:relative; top:4px;" /> {{dayFormat(item.date,"date")}}
                </span>
                <span>
                  <svg-icon icon-class="eyes" style="position:relative; top:4px;" />{{item.see}}
                </span>
                <span>
                  <svg-icon v-show="!item.isLove" icon-class="love" @click="handleClick(index,1)" />
                  <svg-icon v-show="item.isLove" icon-class="yes" @click="handleClick(index,2)" />
                  {{item.likes}}
                </span>
                <span>
                  <el-button round plain type="info" @click="readArticle">阅读文章</el-button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <f-empty v-else />
  </div>
</template>

<script>
export default {

  data() {
    return {

      list: [] //渲染页面的数据
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle, true) // 监听 监听元素是否进入/移出可视区域
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandle, true)
  },
  methods: {
    //阅读文章
    readArticle() {
      this.$message({
        type: "warning",
        message: "待开发..."
      })
    },
    getList() {
      this.$Loading.show()
      const timers = setTimeout(() => {
        for (let index = 0; index < 15; index++) {
          this.list.push(
            {
              img: require(`@/assets/imgs/carousel/focus_${this.random(1, 6)}.jpg`),
              title: "XSS注入攻击",
              mainContent: "从我们输入域名开始直到我们获得要访问的ip地址的过程，我们称之为域名解析过程。当要访问的URL没有命中本地的浏览器缓存时，就要查看计算机本地的HOST指向。计算机本地的HOST是一个文件，记录着域名和IP的映射关系。",
              date: "2022052" + index,
              see: this.random(10, 50),
              isLove: this.random(0, 1) > 0.5 ? true : false,
              likes: this.random(10, 50)
            }
          )
        }
        this.$Loading.hide()
        clearTimeout(timers)
      }, 800)

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
          break
      }
    },
    scrollHandle() {
      const offset = this.$el.getBoundingClientRect()
      const offsetTop = offset.top
      const offsetBottom = offset.bottom
      // const offsetHeight = offset.height;
      // 进入可视区域
      // console.log(offsetTop,offsetBottom)
      if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
        // console.log("进入可视区域")
        if (this.list.length === 0) {
          // this.getList()
        }
      } else {
        // console.log("移出可视区域")
        return
      }
    }

  }
}
</script>

<style scoped>
li:hover {
  transition: all 0.4s;
  box-shadow: 1px 1px 10px rgba(0 0 0 / 40%);
}
</style>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.svg-icon {
  cursor: pointer;
  margin-right: 4px;
}
.article_box {
  margin-top: 20px;
  background: $third_bg_color;
  .wrapper {
    li {
      padding: 10px;
      margin: 5px;
      min-height: 150px;
      border-bottom: 1px solid #eee;
      .content_box {
        > div {
          display: flex;
          .left_box {
            flex: 1;
            margin-right: 15px;
            img {
              width: 100%;
              height: 120px;
            }
          }
          .right_box {
            flex: 3;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            span:first-child {
              font-weight: 700;
              color: $third_text_color;
              font-size: 14px;
            }
            span:nth-child(2) {
              color: $second_text_color;
              font-size: 14px;
            }
            p {
              font-size: 14px;
              color: $third_text_color;
            }
            > div {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>