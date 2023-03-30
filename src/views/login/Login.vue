<template>
  <div id="login">
    <el-card class="box-card">
      <h2>登录</h2>
      <el-form
        label-width="80px"
        :model="form"
        :rules="rules"
        ref="LoginFormRef"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button @click="resetLoginForm">重置</el-button>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Login } from "network/index.js";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetLoginForm() {
      this.$refs.LoginFormRef.resetFields();
    },
    login() {
      this.$refs.LoginFormRef.validate(async (valid) => {
        if (valid) {
          Login(this.form).then((data) => {
            if (data.status == 200) {
              this.$message({
                message: "登陆成功",
                type: "success",
              });
              this.$router.push("./home");
            } else {
              this.$message.error("登录失败请检查用户名和密码是否正确！");
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .el-card {
    width: 400px;
    h2 {
      text-align: center;
    }
    .el-form {
      padding-right: 20px;

      .button {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
