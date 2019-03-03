<template>
  <div class="page">
    <Header :title="title" :showBack="true">
      <router-link to="/register" class="register-btn">注册</router-link>
    </Header>
    <!-- 登录表单 -->
    <div class="login-form" @keyup.enter="login">
      <p>
        <label>用户名</label>
        <input type="text" v-model="login_form.username" placeholder="请输入用户名" maxlength="10"/>
      </p>
      <p>
        <label>密码</label>
        <input type="password" v-model="login_form.password" placeholder="请输入密码" maxlength="16"/>
      </p>
      <button class="submit-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
  import Header from "_c/Header.vue";
  import {
    Indicator,
    Toast
  } from "mint-ui";
  import Service from "@/service/service.js";
  import store from "@/store.js";
  export default {
    components: {
      Header
    },
    data() {
      return {
        title: "登录",
        login_form: {
          username: "eee",
          password: "eeeeee"
        }
      };
    },
    methods: {
      login() {
           // 表单校验
        if (
          !this.login_form.username ||
          !this.login_form.username.trim() ||
          !this.login_form.password
        ) {
          Toast("用户名和密码不能为空");
          return;
        }
        Indicator.open();
        // 延时1s发送
        setTimeout(() => {
          Service.login(this.login_form).then(res => {
            Indicator.close();
            if (!res) {
              // console.log("error");
              Toast("出错啦，请稍后再试");
            } else {
              if (res.code == 1) {
                // console.log("success");
                Toast("登录成功");
                store.commit("loginSuccess", res.user);

                if(!this.$route.query.redirect){
                  this.$router.push("/home");
                }
                this.$router.replace({
                  path: this.$route.query.redirect
                });
              } else if (res.code == 0) {
                // console.log("failed");
                Toast("密码有误");
              } else if (res.code == 2) {
                // console.log("no_user");
                Toast("用户名不存在");
              }else {
                // console.log("error");
                Toast("出错啦，请稍后再试");
              }
            }
          });
        }, 1000);
      }
    },
  };
</script>

<style scoped lang="scss">
  .register-btn {
    font-size: 0.3rem;
  }

  .login-form {
    margin-top: 0.8rem;

    p {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 0.2rem;
      display: flex;
      line-height: 0.8rem;
      justify-content: space-between;

      label {
        width: 1.2rem;
        font-size: 0.3rem;
      }

      input {
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        width: 75%;
        text-indent: 1.5em;
        letter-spacing: 0.05rem;
      }
    }

    .submit-btn {
      width: 70%;
      height: 0.8rem;
      border-radius: 0.1rem;
      margin-top: 0.5rem;
      font-size: 0.35rem;
      font-weight: bolder;
      color: #fff;
      letter-spacing: 0.2rem;
      background-color: #18ac18;
    }
  }
</style>