<!--
 * @Description: layout布局
 * @Date: 2022-06-12 21:14:33
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-03 00:54:54
-->
 <template>
  <div class="container">
    <!-- <top-nav /> -->
    <div class="menu-box" :style="menuStyle">
      <div class="logo">
        logo
      </div>
      <div class="imgs" @click="show = !show">
        <i :class="show ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"></i>
      </div>
      <fMenu :theChoosen='$route.meta.menuItem' :showIcon="show" />

    </div>
    <div class="container-content" :style="layoutStyle">
      <div class="layout-box">
        <transition name="fade">
          <template>
            <keep-alive>
              <router-view />
            </keep-alive>
          </template>
        </transition>
      </div>
    </div>
  </div>
</template>
 
 <script>
import fMenu from "./menu.vue"
export default {
  components: {
    fMenu
  },
  name: "layout",
  data() {
    return {
      route: null,
      show: true //控制侧边栏
    }
  },
  computed: {
    menuStyle() {
      const width = this.show ? 70 : 210
      return {
        width: width + "px"
      }
    },
    layoutStyle() {
      const width = this.show ? 70 : 210
      return {
        marginLeft: width + "px"
      }
    }
  },
  watch: {
    $route: {
      handler(to) {
        // console.log("to", to)
        this.route = to

      },
      deep: true,
      immediate: true
    }
  },
  created() {

  },

  methods: {
    controlMenu() {
      this.show = !this.show
    }
  }
}
 </script>
 
 <style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/transition.scss";

.menu-box {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: 0.3s;
  height: 100vh;
  background-color: $main_color;
  animation: aniLeftRight 460ms;
  padding-right: 1px;
  .logo {
    height: 100px;
    width: 100%;
    text-align: center;
    line-height: 100px;
    color: white;
    font-size: 20px;
  }
  .imgs {
    position: absolute;
    top: 370px;
    right: 0;
    cursor: pointer;
    width: 40px;
    height: 60px;
    line-height: 60px;
    background-color: $light_blue_color;
    text-align: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 99;
  }
}
.container {
  // padding-top: 70px;
  background-color: $main_bg_color;
  overflow: hidden;
  .container-content {
    height: 100vh;
    // margin-left: 210px;
    .layout-box {
      height: 100vh;
      // padding: 20px;
    }
  }
}
</style>