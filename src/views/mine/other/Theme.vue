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
import { Indicator, Toast } from "mint-ui";

import Header from "_c/Header.vue";
import store from "@/store.js";
import Service from "@/service/service.js";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "主题更改",
      theme_list: []
    };
  },
  methods: {
    themeSelect(item) {
      store.commit("themeSelect", item);
      Indicator.open();
      setTimeout(() => {
        Indicator.close();
        Service.setUserTheme({
          username: store.state.username,
          user_theme: item.meta + "-theme"
        }).then(res => {
          if (res.code == 1) {
            Toast({
              message: "主题更改成功！",
              position: "bottom"
            });
          } else {
            Toast({
              message: "主题更改失败！",
              position: "bottom"
            });
          }
        });
      }, 500);
    }
  },
  created() {
    this.$nextTick(() => {
      Service.getThemeList().then(res => {
        if (res.code == 1) {
          this.theme_list = res.data;
        }
      });
    });
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