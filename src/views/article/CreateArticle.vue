<template>
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
    <el-form-item label="标题" prop="title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="内容" prop="body">
      <el-input type="textarea" v-model="form.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { createArticle } from "network/index.js";
export default {
  name: "CreateArticle",
  data() {
    return {
      form: {
        title: "",
        body: "",
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        body: [{ required: true, message: "请输入内容", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form);
          createArticle(this.form).then((res) => {
            console.log(res);
            this.$message({
              message: "文章创建成功",
              type: "success",
            });
            this.$router.push("/article/listArticle");
          });
        } else {
          this.$message.error("文章创建失败");
          return false;
        }
      });
    },
  },
};
</script>

<style></style>
