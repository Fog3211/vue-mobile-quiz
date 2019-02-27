<template>
  <div>
    <div class="header">
      <i class="iconfont icondajiantou back-btn" @click="back" v-if="showBack"></i>
      <span>{{ title }}</span>
    </div>
    <div class="fill-header"></div>
  </div>
</template>

<script>
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
    }
  };
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 0.9rem;
    background-color: aquamarine;
    text-align: center;
    font-weight: bolder;
    font-size: 0.4rem;
    line-height: 0.9rem;

    .back-btn {
      position: absolute;
      font-size: 0.6rem;
      left: 0.2rem;
    }
  }

  .fill-header {
    display: block;
    width: 100%;
    height: 0.9rem;
  }
</style>