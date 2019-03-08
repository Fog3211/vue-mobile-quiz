<template>
  <div class="page">
    <Header :title="title" :showBack="true"></Header>
    <ul>
      <li
        v-for="item in avatar_list"
        class="img-box"
        @click="selectAvatar(item)"
      >
        <img :src="item" class="img" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Header from "_c/Header.vue";
import Service from "@/service/service.js";
import store from "@/store.js";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "个人主页",
      avatar_list: []
    };
  },
  methods: {
    selectAvatar(item) {
      Service.selectAvatar({
        username: store.state.username,
        user_avatar: item
      }).then(res => {
        if (res.code == 1) {
          Toast({
            message: "头像更改成功！",
            position: "bottom"
          });
          this.$router.back(-1);
        } else {
          Toast({
            message: "头像更改失败！",
            position: "bottom"
          });
        }
      });
    }
  },
  created() {
       Service.getAvatarList().then(res => {
        if (res.code == 1) {
          this.avatar_list = res.data;
        }
      });
  }
};
</script>

<style scoped lang="scss">
.img-box {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  text-align: center;
  margin: 0.3rem;
  .img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}
</style>