/*
 * @Description: 单位路由
 * @Date: 2022-04-30 12:44:45
 * @Version: 0.1
 * @Autor: cjz
 * @LastEditors: fulei
 * @LastEditTime: 2022-05-31 21:44:21
 */

import Layout from "@/layout/index.vue"

export default [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        meta: {
          title: "首页"
        },
        component: () =>
          import(/* webpackChunkName: "publicModule" */ "@/views/Home.vue")
      }
    ]
  },
  {
    path: "*",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "notFoundModule" */ "@/views/default.vue")
  }
]
