/*
 * @Description: 入口文件
 * @Version: 0.1
 * @Autor: fulei
 * @Date: 2022-05-12 11:26:58
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-28 12:35:00
 */
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "@/components/index" // 自动注册全局的组件
import "@/styles/index.scss" // 引入基础样式
import "@/icons"
import "element-ui/lib/theme-chalk/index.css"
import Mixin from "@/mixins/index.js"
import "@/use" //全局引入常用组件
import "animate.css"
import afterEachHandler from "@/router/after-each"

Vue.mixin(Mixin)
// 兼容IE
if (Number.parseInt === undefined) {
  Number.parseInt = window.parseInt
}
if (Number.parseFloat === undefined) {
  Number.parseFloat = window.parseFloat
}
//标题设置
router.afterEach(afterEachHandler)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
