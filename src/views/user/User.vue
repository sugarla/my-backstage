<template>
  <div class="manage">
    <user-header :getList="getList" @searchName="searchName"></user-header>
    <el-card body-style="height:90%">
      <user-list :tableData="tableData" :getList="getList"></user-list>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="handlePage"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import UserHeader from "./childComps/UserHeader.vue";
import UserList from "./childComps/UserList.vue";
import { getUser } from "network/index.js";

export default {
  name: "User",
  components: {
    UserHeader,
    UserList,
  },
  data() {
    return {
      tableData: [],
      total: 0, //当前总条数
      pageData: {
        page: 1,
        limit: 10,
      },
      name: "",
    };
  },
  methods: {
    getList() {
      getUser(this.name, this.pageData).then((data) => {
        // console.log(data);
        this.tableData = data.list;
        this.tableData.forEach((item) => {
          item.sex = item.sex == 0 ? "男" : "女";
        });

        // 获取所有数据的长度
        this.total = data.count || 0;
      });
    },
    handlePage(val) {
      this.pageData.page = val;

      this.getList();
    },
    searchName(name) {
      this.name = name;
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="less">
.manage {
  height: 100%;
  .el-card {
    height: 90%;
    margin-top: 15px;
    position: relative;

    .el-pagination {
      position: absolute;
      bottom: 0;
      right: 20px;
    }
  }
}
</style>
