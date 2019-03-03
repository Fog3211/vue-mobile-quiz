<template>
  <div class="page">
    <Header :title="title" :showBack="true">
      <router-link to="/login" class="login-btn">登录</router-link>
    </Header>
    <div class="register-form" @keyup.enter="register">
      <p>
        <label>用户名</label>
        <input
          type="text"
          v-model="register_form.username"
          placeholder="请输入用户名"
          maxlength="10"
        />
      </p>
      <p>
        <label>密码</label>
        <input
          type="password"
          v-model="register_form.password"
          placeholder="请输入密码"
          maxlength="16"
        />
      </p>
      <p>
        <label>重复密码</label>
        <input
          type="password"
          v-model="register_form.repassword"
          placeholder="请再次输入密码"
          maxlength="16"
        />
      </p>
      <button class="submit-btn" @click="register">注册</button>
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
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "注册",
      register_form: {
        username: "eee",
        password: "eeeeee",
        repassword: "eeeeee"
      }
    };
  },
  methods: {
    register() {
      // 表单校验
      if (
        !this.register_form.username ||
        !this.register_form.username.trim() ||
        !this.register_form.password ||
        !this.register_form.repassword
      ) {
        Toast("用户名和密码不能为空");
        return;
      } else if (this.register_form.repassword !== this.register_form.password) {
        Toast("两次密码不一致");
        return;
      }else if(this.register_form.password.length<6){
        Toast("密码长度不能小于6");
        return;
      }
      Indicator.open();

      // 延时1s发送
      setTimeout(() => {
        Service.register(this.register_form).then(res => {
          Indicator.close();
          if (!res) {
            // console.log("error");
            Toast("出错啦，请稍后再试");
          } else {
            if (res.code == 1) {
              // console.log("success");
              Toast("注册成功，请登录");
               this.$router.back(-1);
            } else if (res.code == 0) {
              // console.log("failed");
              Toast("用户名已存在");
            } else {
              // console.log("error");
              Toast("出错啦，请稍后再试");
            }
          }
        });
      }, 1000);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "setting") {
      this.go_back_home = true;
      this.$router.push({
        path: "/index"
      });
    } else {
      next();
    }
  },
  activated() {},
  deactivated() {}
};
</script>

<style scoped lang="scss">
.login-btn {
  font-size: 0.3rem;
}

.register-form {
  margin-top: 1rem;

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
      width: 60vw;
      text-indent: 1.5em;
    }
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