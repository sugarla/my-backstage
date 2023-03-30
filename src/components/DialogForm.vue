<template>
  <div>
    <el-dialog
      :title="userTitle"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- 中间的表单内容 -->
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        inline
        :rules="rules"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.birth"
            style="width: 100%"
            value-format="yyyy-MM-DD"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>
      <!-- 确定、取消按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUser, addUser, editUser } from "network/index.js";
export default {
  name: "DialogForm",
  data() {
    return {
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        age: [{ required: true, message: "年龄不能为空", trigger: "blur" }],
        sex: [{ required: true, message: "性别不能为空", trigger: "change" }],
        birth: [
          {
            required: true,
            message: "请选择出生日期",
            trigger: "change",
          },
        ],
        addr: [{ required: true, message: "地址不能为空", trigger: "blur" }],
      },
    };
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    userTitle() {
      return this.$store.state.dialog.moduleType == 0 ? "新增用户" : "编辑用户";
    },
  },
  methods: {
    // 监听弹窗关闭
    handleClose() {
      // 清空表单
      this.$refs.form.resetFields();
      this.$store.commit("clickClose");
    },
    submit() {
      let type = this.$store.state.dialog.moduleType;
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (type === 0) {
            addUser(this.form).then(() => {
              // 这是为了调用getList
              this.$emit("addList");
              this.handleClose();
            });
          } else {
            editUser(this.form).then(() => {
              // 这是为了调用getList
              this.$emit("editList");
              this.handleClose();
            });
          }
        }
      });
    },
  },
  mounted() {
    this.$bus.$on("editDate", (editDate) => {
      this.form = editDate;
    });
  },
};
</script>

<style></style>
