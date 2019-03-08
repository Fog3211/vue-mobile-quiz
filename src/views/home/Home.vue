<template>
  <div class="home page">
    <Header :title="title"></Header>
    <!-- 搜索部分 -->
    <router-link to="/search" class="search">
      <div class="search-input">
        <i class="iconfont iconsousuo search-icon"></i>
        <span class="search-text">请输入关键词进行搜索</span>
      </div>
    </router-link>
    <!-- 轮播图 -->
    <mt-swipe :auto="3000" class="swiper">
      <mt-swipe-item
        v-for="(item, index) in swipe_img_list"
        :key="index"
        class="swiper-item"
      >
        <img :src="item.url" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 科目选择 -->
    <Swipe title="科目选择" :swipe_list="subject_list"></Swipe>
    <!-- 试题推荐 -->
    <div class="recommend-box">
      <div class="recommend-nav">
        <router-link to="/home/recommend" active-class="active" class="link-btn"
          ><i class="iconfont icontuijian1"></i>推荐试题</router-link
        >
        <router-link to="/home/hottest" active-class="active" class="link-btn"
          ><i class="iconfont iconhuo"></i>热门试题</router-link
        >
        <router-link to="/home/latest" active-class="active" class="link-btn"
          ><i class="iconfont iconxin1"></i>最新试题</router-link
        >
      </div>
      <div class="recommend-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "_c/Header.vue";
import Footer from "_c/Footer.vue";
import Swipe from "_c/Swipe.vue";
import Service from "@/service/service";
export default {
  components: {
    Header,
    Footer,
    Swipe
  },
  name: "home",
  data() {
    return {
      title: "首页",
      swipe_img_list: [],
      subject_list: []
    };
  },
  created() {
    Service.getSwipeImgList().then(res => {
      if (res.code == 1) {
        this.swipe_img_list = res.data;
      }
    });
  },
  activated() {
    Service.getSubjectList().then(res => {
      if (res.code == 1) {
        this.subject_list = res.data;
      }
    });
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
    background-color: aliceblue;
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

.recommend-box {
  .recommend-content {
    min-height: 5rem;
  }
  .recommend-nav {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .link-btn {
      line-height: 1.3rem;
      font-size: 0.34rem;
      color: #000;
      font-weight: bolder;
      .iconfont {
        font-size: 0.38rem;
        margin-right: 0.1rem;
        display: none;
      }
      &.active {
        font-size: 0.38rem;
        color: #3a5bb4;
        .iconfont {
          display: inline-block;
        }
      }
    }
  }
}
</style>