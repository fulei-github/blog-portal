/*
 * @Description: 个人主页目录的路由
 * @Date: 2022-06-12 17:27:59
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 17:41:21
 */
import Layout from "@/layout/index.vue"
export default [
  {
    path: "/mydashbord",
    component: Layout,
    redirect: "/mydashbord/index",
    children: [
      {
        path: "/mydashbord/index",
        meta: {
          title: "个人主页"
        },
        component: () =>
          import(/* webpackChunkName: "publicModule" */ "@/views/mydashbord-module")
      }
    ]
  }
]