<template>
  <el-table :data="article" stripe>
    <el-table-column prop="title" label="标题" width="140"> </el-table-column>
    <el-table-column prop="body" label="内容" width="220"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="editList(scope.row._id)" type="text" size="small"
          >编辑</el-button
        >
        <el-button @click="removeList(scope.row._id)" type="text" size="small"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { listArticle, removeArticle } from "network/index.js";
export default {
  name: "ListArticle",
  data() {
    return {
      article: [],
    };
  },
  methods: {
    ListArticle() {
      listArticle().then((res) => {
        this.article = res;
      });
    },
    editList(id) {
      this.$router.push(`/article/${id}/edit`);
    },
    removeList(id) {
      removeArticle(id).then((res) => {
        this.$message({
          message: "删除成功",
          type: "success",
        });
        this.ListArticle();
      });
    },
  },
  mounted() {
    this.ListArticle();
  },
};
</script>
