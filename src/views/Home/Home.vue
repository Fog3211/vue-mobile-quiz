<template>
  <div class="home page">
    <Header :title="title"></Header>
    <router-link to="/search" class="search">
      <div class="search-input">
        <i class="iconfont iconsousuo search-icon"></i>
        <span class="search-text">请输入关键词进行搜索</span>
      </div>
    </router-link>
    <mt-swipe :auto="3000" class="swiper">
      <mt-swipe-item v-for="(item, index) in swipeList" :key="index" class="swiper-item">
        <img :src="item.url" />
      </mt-swipe-item>
    </mt-swipe>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "_c/Header.vue";
  import Footer from "_c/Footer.vue";
  import Vue from "vue";
  import {
    Swipe,
    SwipeItem
  } from "mint-ui";

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);

  export default {
    components: {
      Header,
      Footer
    },
    name: "home",
    data() {
      return {
        title: "首页",
        swipeList: [{
            url: require("_a/img/swipe/1.png")
          },
          {
            url: require("_a/img/swipe/2.png")
          },
          {
            url: require("_a/img/swipe/3.png")
          }
        ]
      };
    }
  };
</script>
<style scoped lang="scss">
  .search {
    position: relative;
    width: 100%;
    height: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &-input {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #b7b7b7;
      width: 95vw;
      height: 0.75rem;
      background: aliceblue;
      border-radius: 0.3rem;
    }

    &-icon {
      position: absolute;
      left: 0.6rem;
      font-size: 0.38rem;
      line-height: 0.75rem;
      color: #969696;
    }

    &-text {
      font-size: 0.35rem;
      line-height: 0.35rem;
      letter-spacing: 0.05rem;
    }
  }

  .swiper {
    width: 100vw;
    height: 50vw;

    .swiper-item {
      width: 100vw;
      height: 50vw;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>