<template>
  <div class="page">
    <Header :title="title"></Header>
    <!-- 头像个签 -->
    <div class="avatar-box" @click="changeAvatar">
      <img :src="avatar.url" class="avatar" />
      <div class="user-info">
        <span class="username">{{ nickname }}</span>
        <span class="user-signature">{{ introduction }}</span>
      </div>
      <i
        class="iconfont iconxiaojiantou change-avatar"
        @click="changeAvatar"
      ></i>
    </div>
    <!-- 清除浮动 -->
    <div class="fill-avatar"></div>
    <!-- 详细设置 -->
    <div class="other-option">
      <router-link
        class="item"
        v-for="(item, index) in info_list"
        :key="index"
        :to="{ path: item.path }"
      >
        <p class="item-title">
          <span
            :class="['myicon iconfont', item.icon]"
            :style="item.icon_color"
          ></span>
          <span class="title">{{ item.name }}</span>
        </p>
        <mt-badge
          v-if="item.name == '消息' && new_msg_count != 0"
          type="error"
          size="large"
          >{{ new_msg_count }}</mt-badge
        >
      </router-link>
      <div class="item" @click="logout">
        <p class="item-title">
          <span class="myicon iconfont icontuichu logout"></span>
          <span class="title">退出登录</span>
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { MessageBox, Toast } from "mint-ui";
import Header from "_c/Header.vue";
import Footer from "_c/Footer.vue";
import store from "@/store.js";
import Service from "@/service/service.js";
import { info_list } from "@/mock/data/data.js";
export default {
  components: {
    Header,
    Footer
  },
  name: "mine",
  data() {
    return {
      title: "我的主页",
      nickname: "",
      introduction: "",
      avatar: {
        url: null
      },
      info_list: []
    };
  },
  methods: {
    changeAvatar() {
      this.$router.push("/mine/avatar");
    },
    logout() {
      MessageBox.confirm("确定注销登录?")
        .then(action => {
          store.commit("logout");
          Toast({
            message: "成功退出",
            position: "bottom"
          });
          this.$router.push("/login");
        })
        .catch(error => {
          // console.log(error);
        });
    }
  },
  computed: {
    new_msg_count() {
      return store.state.new_msg_count;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.info_list = info_list;
    });
  },
  activated() {
    Service.getProfile({
      username: store.state.username,
      type: "get"
    }).then(res => {
      if (res.code == 1) {
        this.nickname = res.data.nickname
          ? res.data.nickname
          : store.state.username;
        this.introduction = res.data.introduction
          ? res.data.introduction
          : "您还没有个性签名";
      }
    });
    Service.getAvatar({
      username: store.state.username,
      user_avatar: ""
    }).then(res => {
      if (res.code == 1) {
        this.avatar.url = res.user_avatar;
      }
    });
  }
};
</script>
<style scoped lang="scss">
.avatar-box {
  display: flex;
  width: 100%;
  background: linear-gradient(-124deg, #beb1e3, #6ac487);
  padding: 0.5rem 0;
  position: fixed;

  .avatar {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: 0.6rem;
    background-color: transparent;
  }

  .user-info {
    height: 2.5rem;
    flex: 1;
  }

  .username {
    display: block;
    text-align: left;
    padding-left: 0.35rem;
    font-size: 0.55rem;
    word-break: break-all;
  }

  .user-signature {
    display: block;
    padding: 0.2rem 0.2rem 0 0.3rem;
    word-break: break-all;
    text-align: left;
    letter-spacing: 0.02rem;
    line-height: 0.4rem;
    max-height: 2.3rem;
    overflow: hidden;
  }

  .change-avatar {
    margin-top: 0.5rem;
    margin-right: 0.2rem;
    font-weight: bolder;
    color: #8d8c91;
    font-size: 0.8rem;

    &:active {
      color: #a3a3a3;
    }
  }
}

.fill-avatar {
  display: block;
  width: 100%;
  height: 3.3rem;
}

.other-option {
  background: #fff;
  margin: 0.15rem 0 1rem;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-size: 0.4rem;
    height: 1.5rem;
    width: 100%;
    padding: 0 0.3rem;
    border-bottom: 0.06rem solid #f1f1f1;

    &:active {
      background-color: aliceblue;
    }

    .myicon {
      display: inline-block;
      font-size: 0.6rem;
      vertical-align: middle;
      width: 1rem;
    }

    .title {
      margin-left: 0.25rem;
      vertical-align: middle;
    }

    .logout {
      color: #c43e57;
    }
  }
}
</style>