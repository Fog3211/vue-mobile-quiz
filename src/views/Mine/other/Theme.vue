<template>
  <div class="page">
    <Header :title="title" :showBack="true"></Header>
    <!-- 主题选择 -->
    <ul v-for="(item, index) in theme_list" class="theme">
      <li @click="themeSelect(item)" class="theme-select">
        <span class="theme-name">{{ item.name }}</span>
        <span :style="item.bezel_color" class="theme-show"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

import Header from "_c/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "主题更改",
      changeSucceed: false,
      theme_list: [
        {
          name: "五彩斑斓的黑",
          bezel_color: "background-color: #080A33",
          font_color: "color:#fff"
        },
        {
          name: "绿色小清新",
          bezel_color: "background-color: #BEE6DA",
          font_color: "color:#ff0"
        },
        {
          name: "伤感忧郁的灰",
          bezel_color: "background-color: #808080",
          font_color: "color:#ff0"
        },
        {
          name: "激情四射的红",
          bezel_color: "background-color: #981534",
          font_color: "color:#ff0"
        },
        {
          name: "淡然优雅的蓝",
          bezel_color: "background-color: #88CEF0",
          font_color: "color:#ff0"
        },
        {
          name: "恢复默认主题",
          bezel_color: "background-color: aliceblue",
          font_color: "color:#ff0"
        }
      ]
    };
  },
  methods: {
    themeSelect(item) {
      Toast({
        message: "主题更改成功！",
        position: "bottom"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.theme {
  &-select {
    background-color: #fff;
    width: 100%;
    height: 1rem;
    margin: 0.4rem 0;
    font-size: 0.5rem;
    line-height: 1rem;
    border-radius: 0.2rem;
    display: flex;
    justify-content: space-around;
    &:active {
      background-color: aliceblue;
    }
  }
  &-name {
    width: 3.6rem;
  }
  &-show {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.1rem;
  }
}
</style>