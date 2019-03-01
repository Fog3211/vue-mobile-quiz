<template>
  <div class="page">
    <Header :title="title"></Header>
      <router-link to="/register" class="register-btn">注册</router-link>
    <div class="login-form">
      <p>
        <label>用户名</label>
        <input type="text" v-model="user_name">
      </p>
      <p>
        <label>密码</label>
        <input type="password" v-model="password">
      </p>
      <div class="submit-btn" @click="login">登录</div>
      <span class="forget-pwd-btn">忘记密码</span>
    </div>
  </div>
</template>

<script>
  import Header from '_c/Header.vue'
  import {
    Toast
  } from 'mint-ui'
  export default {
    components: {
      Header
    },
    data() {
      return {
          title:"注册",
        user_name: "",
        password: "",
        go_back_home: false
      }
    },
    methods: {
      login() {
        if (!this.user_name || !this.password) return
        this.common.showLoading()
        Service.login({
          user_name: this.user_name,
          password: this.password
        }).then((res) => {
          this.common.hideLoading()
          if (res.data.retCode == 0) {
            store.commit('loginSuccess', res.data.user)
            //跳转到需要登录前提的目标的页面
            console.log('跳转到需要登录前提的目标的页面')
            this.$router.replace({
              path: this.$route.query.redirect
            })
          } else if (res.data.retCode == 40401) {
            tipModule.showToast('用户名或密码有误')
          } else {
            tipModule.showToast('出错啦，请稍后再试')
          }
        })
      }
    },
    beforeRouteLeave(to, from, next) {
      if (to.name == 'setting') {
        this.go_back_home = true
        this.$router.push({
          path:'/index'
        })
      } else {
        next()
      }
    },
    activated() {},
    deactivated() {
  
    }
  }
</script>

<style  scoped lang="scss">
  .register-btn {
    color: black;
    font-size: .3rem;
  }
  
  .login-page {
    width: 100vw;
    height: 100vh;
    h3 {
      margin: 0;
      text-align: center;
      background: #0e5387;
      color: #fff;
      padding: .2rem 0;
      width: 100vw;
    }
    .login-form {
      margin-top: 1rem;
      p {
        width: 78%;
        margin: 0 auto;
        margin-bottom: .2rem;
        display: flex;
        line-height: .8rem;
        justify-content: space-between;
        label {
          width: 1.2rem;
        }
        input {
          border: 1px solid #ccc;
          border-radius: .3rem;
          width: 60vw;
          text-indent: 1.5em;
        }
      }
      .submit-btn {
        width: 85vw;
        line-height: .35rem;
        border-radius: .15rem;
        background: #89ccff;
        text-align: center;
        font-weight: bold;
        color: #fff;
        margin: 0 auto;
        line-height: .8rem;
        margin-top: .8rem;
      }
      span.forget-pwd-btn {
        line-height: .8rem;
        display: block;
        width: 100vw;
        text-align: center;
        color: #328bcf;
      }
    }
  }
</style>
