<template>
  <div class="user-header">
    <div class="header-left">
      <el-button type="primary" size="medium" @click="adduser">+新增</el-button>
    </div>
    <dialog-form
      :dialogVisible="dialogVisible"
      @addList="getList"
      @editList="getList"
    ></dialog-form>
    <el-form :model="userForm" class="header-right">
      <el-form-item>
        <el-input
          placeholder="请输入内容"
          size="medium"
          v-model="userForm.name"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import DialogForm from "@/components/DialogForm.vue";
export default {
  name: "UserHeader",
  components: {
    DialogForm,
  },
  data() {
    return {
      userForm: {
        name: "",
      },
    };
  },
  computed: {
    dialogVisible() {
      return this.$store.state.dialog.dialogVisible;
    },
  },
  methods: {
    adduser() {
      this.$store.commit("clickAdd");
    },
    getList() {
      this.$parent.getList();
    },
    search() {
      this.$emit("searchName", this.userForm);
      this.$parent.getList();
    },
  },
};
</script>

<style lang="less" scoped>
.user-header {
  display: flex;
  justify-content: space-between;
  .header-right {
    display: flex;
  }
}
</style>
