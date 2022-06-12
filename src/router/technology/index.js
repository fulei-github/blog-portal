/*
 * @Description: 技术分享目录的路由
 * @Date: 2022-06-12 17:27:59
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 20:21:36
 */
import Layout from "@/layout/index.vue"
export default [
  {
    path: "/technology",
    component: Layout,
    redirect: "/technology/index",
    children: [
      {
        path: "/technology/index",
        meta: {
          title: "前端分享-列表"
        },
        component: () =>
          import(/* webpackChunkName: "publicModule" */ "@/views/technology-module")
      }
    ]
  }
]