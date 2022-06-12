/*
 * @Description: 注册组件
 * @Date: 2022-05-19 18:29:31
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-11 21:51:48
 */
import Vue from "vue"
import { message } from "@utils/reset-message"
import fLoading from "@/components/f-loading/index"
Vue.use(fLoading)
import ElementUI from "element-ui"
Vue.use(ElementUI)
Vue.prototype.$message = message
