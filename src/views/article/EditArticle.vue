<template>
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
    <el-form-item label="标题" prop="title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="内容" prop="body">
      <el-input type="textarea" v-model="form.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="upadate">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { itemList, updateList } from "network/index.js";
export default {
  name: "EditArticle",
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
    ItemList() {
      itemList(this.$route.params.id).then((res) => {
        this.form = res;
      });
    },
    upadate() {
      updateList(this.$route.params.id, this.form).then((res) => {
        this.$message({
          message: "文章更新成功！",
          type: "success",
        });
        this.$router.push("/article/listArticle");
      });
    },
  },
  created() {
    this.ItemList();
  },
};
</script>

<style></style>
