<!--
 * @Description: 个人主页
 * @Date: 2022-06-12 17:27:14
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-07-02 18:46:28
-->
<template>
  <div class="mydashbord_wrapper">
    <f-title content="站长信息" />
    <el-descriptions title="" direction="vertical" :column="4" border>
      <el-descriptions-item label="用户名">fulei</el-descriptions-item>
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地" :span="2">北京市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small" style="margin-right:8px">宅</el-tag>
        <el-tag size="small">游戏</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="职位">前端开发攻城狮</el-descriptions-item>
      <el-descriptions-item label="联系地址" :span="2">北京市丰台区看丹街道首开华润社区</el-descriptions-item>
      <el-descriptions-item label="个人主页">
        <el-link href="https://www.baidu.com" target="_blank">点击前往个人主页网站</el-link>
      </el-descriptions-item>
    </el-descriptions>

  </div>
</template>

<script>
export default {

  data() {
    return {

    }
  },

  mounted() {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.mydashbord_wrapper {
  min-height: 800px;
  // background: $third_bg_color;
  padding: 10px;
}
</style>