export default {
  state: {
    dialogVisible: false, //让弹出框默认不显示
    moduleType: 0,
  },
  mutations: {
    // 增加按钮点击
    clickAdd(state) {
      state.dialogVisible = true;
      state.moduleType = 0;
    },
    // 修改按钮点击
    clickEdit(state) {
      state.dialogVisible = true;
      state.moduleType = 1;
    },
    // 点击按钮关闭
    clickClose(state) {
      state.dialogVisible = false;
    },
  },
};
