/*
 * @Description: 文章分享目录的路由
 * @Date: 2022-06-12 17:27:59
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 20:31:28
 */
import Layout from "@/layout/index.vue"
export default [
  {
    path: "/article",
    component: Layout,
    redirect: "/article/index",
    children: [
      {
        path: "/article/index",
        meta: {
          title: "书籍分享-列表"
        },
        component: () =>
          import(/* webpackChunkName: "publicModule" */ "@/views/article-module")
      },
      {
        path: "/article/detail",
        meta: {
          title: "书籍分享-详情"
        },
        component: () =>
          import(/* webpackChunkName: "publicModule" */ "@/views/article-module/detail.vue")
      }
    ]
  }
]