<!--
 * @Description: menu
 * @Autor: fulei
 * @Date: 2020-05-07 23:22:51
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-03 00:36:02
 -->
<template>
  <div>
    <el-menu :default-active='index' :unique-opened="true" router class="el-menu-vertical-demo">
      <el-menu-item v-for="item in data" :index="item.index" :key="item.id" :route="item.index">
        <el-tooltip effect="dark" :content="item.name" placement="right-start">
          <i :class="item.icon" style="font-size:24px"></i>
        </el-tooltip>
        <span v-if="!showIcon" slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import data from "./data.json"
// 取消响应式
const theDate = Object.freeze(data)
export default {
  name: "f-menu",
  props: {
    // 当前选中菜单项index
    theChoosen: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      data: [],
      index: ""
    }
  },
  watch: {
    $route: {
      handler(to) {
        console.log(to)
        this.index = to.fullPath
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.data = theDate.menuList
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.el-menu {
  border-right: 0;
}
.el-menu-item {
  background-color: $sub_menu_bg;
  i,
  span {
    color: $menu_active_text;
    font-size: 16px;
  }
}
::v-deep .el-menu-item:focus,
.el-menu-item:hover {
  background-color: $blue_color !important;
  outline: 0;
}
.el-menu-item.is-active {
  i {
    color: white;
  }
  background-color: $blue_color;
  border-right: 3px solid $blue_color;
}
</style>