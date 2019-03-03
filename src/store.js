import Vue from 'vue';
import Vuex from 'vuex';
import {
  user_list
} from "./mock/data/userData.js";
import Service from "@/service/service.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_login: false,
    username: "",
    new_msg_count: 0,
    user_theme: "",
  },
  mutations: {
    loginSuccess(state, params) {
      state.is_login = true;
      state.username = params.username;
      sessionStorage.setItem("is_login", true);
      sessionStorage.setItem("username", params.username);
      Service.getUserMsg().then(res => {
        if (res.code == 0) {
          state.new_msg_count = res.new_msg_count;
        }
      })
    },
    logout(state) {
      state.is_login = false
      state.username = "",
        state.user_theme = "default";
      sessionStorage.setItem("is_login", false);
      sessionStorage.setItem("username", "");
    },
    themeSelect(state, params) {
      state.user_theme = params.user_theme;
    },
    reduceNewMsgCount(state){
      state.new_msg_count--;
    }
  },
  actions: {

  }
})