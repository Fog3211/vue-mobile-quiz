<template>
  <div class="page">
    <Header :title="title" :showBack="true">
      <router-link to="/login" class="login-btn">登录</router-link>
    </Header>
    <div class="register-form" @keyup.enter="register">
      <mt-field label="用户名" v-model="register_form.username" class="edit" :state="form_state.username" placeholder="请输入用户名"></mt-field>
      <mt-field label="密码" type="password" v-model="register_form.password" class="edit" :state="form_state.password" placeholder="请输入密码"></mt-field>
      <mt-field label="重复密码" type="password" v-model="register_form.repassword" class="edit" :state="form_state.repassword" placeholder="请再次输入密码"></mt-field>

      <button class="submit-btn" @click="register">注册</button>
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
  import formCheck from "@/common/formCheck.js";
  export default {
    components: {
      Header
    },
    data() {
      return {
        title: "注册",
        register_form: {
          username: "",
          password: "",
          repassword: ""
        },
        form_state: {
          username: "",
          password: "",
          repassword: ""
        }
      };
    },
    methods: {
      register() {
        // 表单校验
        if (this.form_state.username == "warning") {
          Toast({
            message: "用户名不能为空",
            position: "bottom"
          });
          return;
        } else if (this.form_state.password == "error") {
          Toast({
            message: "两次密码不一致",
            position: "bottom"
          });
          return;
        } else if (this.form_state.password == "warning") {
          Toast({
            message: "密码长度限制为6~16位",
            position: "bottom"
          });
          return;
        }

        Indicator.open();

        // 延时1s发送
        setTimeout(() => {
          Service.register(this.register_form).then(res => {
            Indicator.close();
            if (!res) {
              Toast({
                message: "出错啦，请稍后再试",
                position: "bottom"
              });
            } else {
              if (res.code == 1) {
                Toast({
                  message: "注册成功，请登录",
                  position: "bottom"
                });
                this.$router.back(-1);
              } else if (res.code == 0) {
                Toast({
                  message: "用户名已存在",
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
      register_form: {
        handler(newValue, oldValue) {
          this.form_state.username = formCheck.usernameCheck(
            this.register_form.username
          );
          this.form_state.repassword = this.form_state.password = formCheck.passwordCheck(
            this.register_form.password,
            this.register_form.repassword
          );
        },
        deep: true
      }
    },
    deactivated(){
       this.register_form={
          username: "",
          password: "",
          repassword: ""
        };
    }
  };
</script>

<style scoped lang="scss">
  .login-btn {
    font-size: 0.3rem;
  }

  .register-form {
    margin-top: 2rem;

    .edit {
      margin: 0.5rem auto;
      width: 80%;
      border-radius: 0.25rem;
    }

    .submit-btn {
      width: 5rem;
      height: 0.8rem;
      border-radius: 0.1rem;
      margin-top: 0.5rem;
      font-size: 0.4rem;
      font-weight: bolder;
      color: #fff;
      letter-spacing: 0.2rem;
      background-color: #18ac18;
    }
  }
</style>