import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_login: false,
    username: "",
    user_theme: ""
  },
  mutations: {
    loginSuccess(state, params) {
      state.is_login = true;
      state.username = true;
      sessionStorage.setItem(state.is_login, true);
      sessionStorage.setItem(state.username, params.username);

    },
    loginFailed(state) {
      state.is_login = false
    },
    logout(state) {
      state.is_login = false
      sessionStorage['is_login'] = false
      state.username = ""
    },
  },
  actions: {

  }
})