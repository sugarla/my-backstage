<template>
  <div class="userlist">
    <el-table :data="tableData" style="width: 100%" height="100%" stripe>
      <el-table-column
        v-for="(value, key) in tableLabel"
        :prop="key"
        :label="value"
      >
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="del(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { delUser } from "network/index.js";

export default {
  name: "UserList",
  props: {
    tableData: {
      type: Array,
      default: [],
    },
    getList: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      tableLabel: {
        name: "姓名",
        age: "年龄",
        sex: "性别",
        birth: "出生日期",
        addr: "地址",
      },
    };
  },
  methods: {
    edit(row) {
      // vuex中让编辑的弹框出来
      this.$store.commit("clickEdit");

      // 拿到form当前行的数据
      var editDate = JSON.parse(JSON.stringify(row));

      // 把当前行的数据传给兄弟dialog组件(因为弹出框的表单在它上面)
      this.$bus.$emit("editDate", editDate);
    },
    del(row) {
      console.log(row.id);
      delUser(row).then((data) => {
        console.log(data);
        this.getList();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.userlist {
  height: 90%;
}
</style>
