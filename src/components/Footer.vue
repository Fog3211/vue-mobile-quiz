<template>
  <div class="footer" :class="user_theme">
    <router-link tag="div" to="/home" class="btn" active-class="active">
      <i class="iconfont iconzhuye"></i>
      <span>主页</span>
    </router-link>
    <router-link tag="div" to="/collection" class="btn" active-class="active">
      <i class="iconfont iconshoucangjia"></i>
      <span>收藏夹</span>
    </router-link>
    <router-link tag="div" to="/mine" class="btn" active-class="active">
      <mt-badge
        v-if="new_msg_count != 0 && is_login"
        class="badge"
        type="error"
        size="small"
        >{{ new_msg_count }}</mt-badge
      >
      <i class="iconfont icontouxiang"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {};
  },
  computed: {
    user_theme() {
      return store.state.user_theme;
    },
    new_msg_count() {
      return store.state.new_msg_count;
    },
    is_login() {
      return store.state.is_login;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~_a/css/theme.scss";
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 1rem;
  background-color: aliceblue;
  justify-content: space-around;

  .btn {
    position: relative;
    font-size: 0.3rem;
    font-weight: bolder;
    height: 1rem;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .iconfont {
      font-size: 0.5rem;
      padding-bottom: 0.1rem;
    }
    &.active {
      font-size: 0.4rem;
    }

    .badge {
      line-height: normal;
      position: absolute;
      top: 5%;
      left: 65%;
    }
  }
}
</style>