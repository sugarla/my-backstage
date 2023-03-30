<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <span class="text">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mall' }"
            >商品管理</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/user' }"
            >用户管理</el-breadcrumb-item
          >
        </el-breadcrumb>
      </span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="~assets/images/user.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  height: 60px;

  background-color: #333;
  color: #fff;

  .text {
    font-size: 14px;
    margin-left: 10px;
    color: #fff;
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 40px;
    }
  }
}
</style>
