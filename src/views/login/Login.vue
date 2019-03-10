<template>
  <div class="page">
    <Header :title="title" :showBack="true">
      <router-link to="/register" class="register-btn">注册</router-link>
    </Header>
    <!-- 登录表单 -->
    <div class="login-form" @keyup.enter="login">
      <mt-field label="用户名" v-model="login_form.username" class="edit" :state="form_state.username" placeholder="请输入用户名"></mt-field>
      <mt-field label="密码" type="password" v-model="login_form.password" class="edit" :state="form_state.password" placeholder="请输入密码"></mt-field>
      <button class="submit-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
  import Header from "_c/Header.vue";
  import {
    Indicator,
    Toast,
    Field
  } from "mint-ui";
  import Service from "@/service/service.js";
  import store from "@/store.js";
  import formCheck from "@/common/formCheck.js";
  export default {
    components: {
      Header
    },
    data() {
      return {
        title: "登录",
        login_form: {
          username: "",
          password: ""
        },
        form_state: {
          username: "",
          password: ""
        }
      };
    },
    methods: {
      login() {
        // 表单校验
        if (this.form_state.username == "warning") {
          Toast({
            message: "用户名不能为空",
            position: "bottom"
          });
          return;
        }
        if (this.form_state.password == "warning") {
          Toast({
            message: "密码错误",
            position: "bottom"
          });
          return;
        }
        Indicator.open();
        // 延时1s发送
        setTimeout(() => {
          Service.login(this.login_form).then(res => {
            Indicator.close();
            if (!res) {
              Toast({
                message: "出错啦，请稍后再试",
                position: "bottom"
              });
            } else {
              if (res.code == 1) {
                Toast({message:"登录成功",
                 position: "bottom"
                });
                store.commit("loginSuccess", res);

                if (!this.$route.query.redirect) {
                  this.$router.push("/home");
                }
                this.$router.replace({
                  path: this.$route.query.redirect
                });
              } else if (res.code == 0) {
                Toast({
                  message: "密码有误",
                  position: "bottom"
                });
              } else if (res.code == 2) {
                Toast({
                  message: "用户名不存在",
                  position: "bottom"
                });
              } else {
                Toast({
                  message: "出错啦，请稍后再试",
                  position: "bottom"
                });
              }
            }
          });
        }, 1000);
      }
    },
    watch: {
      login_form: {
        handler(newValue, oldValue) {
          this.form_state.username = formCheck.usernameCheck(
            this.login_form.username
          );
          this.form_state.password = formCheck.passwordCheck(
            this.login_form.password,
            this.login_form.password
          );
        },
        deep: true
      }
    },
    deactivated(){
       this.login_form={
          username: "",
          password: "",
        };
    }
  };
</script>

<style scoped lang="scss">
  .register-btn {
    font-size: 0.3rem;
  }

  .login-form {
    margin-top: 2rem;

    .edit {
      margin: 0.6rem auto;
      width: 80%;
      border-radius: 0.25rem;
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