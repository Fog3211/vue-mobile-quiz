<template>
  <div>
    <div class="header" :class="user_theme">
      <i
        class="iconfont icondajiantou back-btn"
        @click="back"
        v-if="showBack"
      ></i>
      <span>{{ title }}</span>
      <div class="right-box">
        <slot></slot>
      </div>
    </div>
    <div class="fill-header"></div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back(-1);
    }
  },
  computed: {
    user_theme() {
      return store.state.user_theme;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~_a/css/theme.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 0.9rem;
  background-color: $default-theme-backgroundColor;
  color: $default-theme-fontColor;
  text-align: center;
  font-weight: bolder;
  font-size: 0.4rem;
  line-height: 0.9rem;

  .back-btn {
    position: absolute;
    font-size: 0.6rem;
    left: 0.2rem;

    &:active {
      color: #a3a3a3;
    }
  }

  .right-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.32rem;
    position: absolute;
    top: 0;
    right: 0.3rem;
  }
}

.fill-header {
  display: block;
  width: 100%;
  height: 0.9rem;
}

</style>