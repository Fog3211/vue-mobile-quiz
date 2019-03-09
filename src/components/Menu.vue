<template>
  <transition name="animateBase">
    <div class="screen" v-show="isModelShow" @click="modelClose">
      <div class="pop">
        <slot name="modalbody"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Menu",
  props: {
    isHeadShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isModelShow: false
    };
  },
  methods: {
    modelClose() {
      this.isModelShow = false;
    },
    modelOpen() {
      this.isModelShow = true;
    }
  }
};
</script>

<style scoped lang="scss">
.screen {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
  z-index: 1111;
  text-align: center;
  .pop {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: inline-block;
    text-align: left;
    width: 70%;
    transition: all 0.3s ease;
    background: #fff;
  }
}

.animateBase-enter,
.animateBase-leave-active {
  opacity: 0;
}
</style>
