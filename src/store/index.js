import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
import dialog from "./dialog";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tab,
    dialog,
  },
});

export default store;
