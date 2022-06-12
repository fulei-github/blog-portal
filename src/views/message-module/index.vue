<!--
 * @Description: 留言板
 * @Date: 2022-06-12 17:27:14
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-12 18:49:03
-->
<template>
  <div class="message_wrapper">
    <div class="page-container">
      <!-- 问题反馈 -->
      <el-card shadow="hover" class="feedback">
        <div class="title">问题反馈</div>
        <el-form ref="formRef" :model="form" :rules="formRules" label-position="top">
          <el-form-item label="问题类型" prop="type">
            <el-select v-model="form.type" clearable filterable>
              <el-option label="整体样式风格" value="1"></el-option>
              <el-option label="数据加载" value="2"></el-option>
              <el-option label="文章内容" value="3"></el-option>
              <el-option label="功能完整性" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="问题标题" prop="title">
            <el-input type="input" v-model="form.title" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="问题描述" prop="desc">
            <el-input type="textarea" rows="6" v-model="form.desc" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="请您打分">
            <el-rate v-model="form.rate" show-text>
            </el-rate>
          </el-form-item>
          <el-form-item label="请上传相关问题图片">
            <div>
              <f-upload ref="upload" :needTip="true" :needBase64="false" :limit="1" btnText="上传文件" accept=".xls,.xlsx,.zip" :size="20000" />
            </div>
          </el-form-item>
          <el-form-item class="btn-item">
            <el-button size="small" @click="handleCancel">重 置</el-button>
            <el-button size="small" type="primary" @click="handleSubmit">提 交</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 常见问题 -->
      <el-card shadow="hover" class="common-question">
        <div class="title">常见问题</div>
        <ul class="questions">
          <li>1、页面的布局好调整吗？</li>
          <li>2、怎么能快捷登录后台管理系统？</li>
          <li>3、功能能再完善一些吗？</li>
        </ul>
        <div class="title">历史记录</div>
        <ul class="records">
          <li>布局改一改吧</li>
          <li>建议首页加个轮播图</li>
          <li>能登录不</li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "message-board",
  data() {
    return {
      // 问题反馈表单对象
      form: {
        type: "",
        title: "",
        desc: "",
        rate: null
      },
      // 上传的图片
      uploadImages: [],
      // 问题反馈表单校验规则
      formRules: {
        type: [
          {
            required: true,
            message: "请选择问题类型",
            trigger: ["change", "blur"]
          }
        ],
        title: [
          {
            required: true,
            message: "请输入问题标题",
            trigger: ["change", "blur"]
          }
        ],
        desc: [
          {
            required: true,
            message: "请填写问题描述",
            trigger: ["change", "blur"]
          }
        ]
      }
    }
  },

  mounted() {

  },

  methods: {
    handleSubmit() {
      this.$refs["formRef"].validate((valid) => {
        if (valid) {
          this.$message.success("提交成功！")
        }
      })
    },
    // 取消
    handleCancel() {
      this.$refs["formRef"].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.message_wrapper {
  min-height: 800px;
  // background: $third_bg_color;
  padding: 10px;
}
.page-container {
  display: flex;
  justify-content: space-between;
  /* 问题反馈 */
  .feedback {
    width: 784px;
    .title {
      position: relative;
      padding-left: 16px;
      font-size: 18px;
      font-weight: 400;
      line-height: 50px;
      border-bottom: 1px solid #f0f0f0;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 21px;
        background-color: $main_color;
      }
    }
    .el-form {
      .btn-item {
        text-align: center;
      }
      ul {
        display: flex;
        flex-flow: wrap;
        li {
          cursor: pointer;
          width: 104px;
          height: 104px;
          border-radius: 4px;
          border: 1px solid #cecece;
          overflow: hidden;
          margin-right: 10px;
          margin-bottom: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .upload-box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: #f5f6f6;
          color: #606266;
          .el-icon-plus {
            font-size: 20px;
            margin-bottom: 12px;
          }
        }
      }
    }
  }
  /* 常见问题 */
  .common-question {
    width: 347px;
    .title {
      font-size: 18px;
      color: $main_color;
      line-height: 50px;
      border-bottom: 1px solid #f0f0f0;
    }
    .questions {
      font-size: 14px;
      color: #666666;
      line-height: 30px;
      padding: 12px 0;
      li {
        cursor: pointer;
      }
    }
    .records {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      margin-top: 12px;
      li {
        width: fit-content;
        border-radius: 2px;
        padding: 6px 4px;
        background-color: #f5f5f5;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>