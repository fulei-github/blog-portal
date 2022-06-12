<!--
 * @Description: 技术分享目录
 * @Date: 2022-06-12 17:27:14
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 18:12:23
-->
<template>
  <div class="technology_wrapper">
    <!-- 标题区域 -->
    <div class="menu">
      <span v-for="(item,i) in menuList" :key="i" :class="i===active ? 'active' : ''" @click="changeMenu(item,i)">
        <span>{{item.name}}</span>
        <el-divider v-if="i !== menuList.length - 1" direction="vertical"></el-divider>
      </span>
    </div>
    <!-- 列表区域 -->
    <div class="article_box">

      <ul v-if="list.length !== 0" class="wrapper">
        <li v-for="(item,index) in list" :key="index">
          <div class="content_box">
            <h4><span class="red">[热]</span> {{item.title}}</h4>
            <div style="margin-top:10px">
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
                    <svg-icon icon-class="say" style="position:relative; top:4px;" />{{item.say}}
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
  </div>
</template>

<script>
export default {

  data() {
    return {
      active: 0,
      menuList: [
        {
          name: "前端"
        },
        {
          name: "后端"
        }, {
          name: "大数据"
        }, {
          name: "开发工具"
        }
      ],
      list: [] //渲染页面的数据
    }
  },
  created() {
    this.getList()
  },
  mounted() {

  },

  methods: {
    changeMenu(item, i) {
      this.active = i

      this.getList()
    },
    //阅读文章
    readArticle() {
      this.$message({
        type: "warning",
        message: "待开发..."
      })
    },
    getList() {
      this.$Loading.show()
      this.list = []
      const timers = setTimeout(() => {
        for (let index = 0; index < 15; index++) {

          this.list.push(
            {
              img: require(`@/assets/imgs/carousel/focus_${this.random(1, 6)}.jpg`),
              title: "XSS注入攻击",
              mainContent: "从我们输入域名开始直到我们获得要访问的ip地址的过程，我们称之为域名解析过程。当要访问的URL没有命中本地的浏览器缓存时，就要查看计算机本地的HOST指向。计算机本地的HOST是一个文件，记录着域名和IP的映射关系。",
              date: "2022052" + index,
              see: this.random(10, 50),
              say: this.random(5, 20),
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.technology_wrapper {
  min-height: 800px;
  background: $third_bg_color;
  padding: 10px;
  .menu {
    border-bottom: 1px solid $fourth_border_color;
    padding-bottom: 8px;
    .active {
      color: $main_color;
    }
    span {
      &:hover {
        cursor: pointer;
        color: $main_color;
      }
    }
  }
}

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