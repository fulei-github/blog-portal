/*
 * @Description: 留言板目录的路由
 * @Date: 2022-06-12 17:27:59
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 20:22:09
 */
import Layout from "@/layout/index.vue"
export default [
  {
    path: "/message",
    component: Layout,
    redirect: "/message/index",
    children: [
      {
        path: "/message/index",
        meta: {
          title: "建议信箱"
        },
        component: () =>
          import(/* webpackChunkName: "publicModule" */ "@/views/message-module")
      }
    ]
  }
]