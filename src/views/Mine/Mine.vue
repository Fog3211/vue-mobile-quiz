<template>
  <div class="page">
    <Header :title="title"></Header>
    <!-- 头像个签 -->
    <div class="avatar-box">
      <img :src="avatar.url" class="avatar" />
      <div class="user-info">
        <span class="username">蒙奇D路飞</span>
        <span class="user-signature">人间不值得，但人间有美。众生皆苦，但你是草莓味。</span>
      </div>
      <i class="iconfont iconxiaojiantou change-avatar" @click="changeAvatar()"></i>
    </div>
    <!-- 清除浮动 -->
     <div class="fill-avatar"></div>
    <!-- 详细设置 -->
    <div class="other-option">
      <router-link class="item" v-for="(item,index) in info_list" :key="index" :to="{'path':item.path}">
        <p class="item-title">
          <span :class="['myicon iconfont',item.icon]" :style="item.icon_color"></span> <span class="title">{{item.name}}</span>
        </p>
      <mt-badge v-if="item.name=='消息'&& new_msg_count!=0" type="error" size="large">{{ new_msg_count}}</mt-badge>
      </router-link>
      <div class="item" @click="logout()">
      <p class="item-title">
          <span class="myicon iconfont icontuichu logout"></span> <span class="title" >退出登录</span>
        </p>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
  import Header from "_c/Header.vue";
  import Footer from "_c/Footer.vue";
  export default {
    components: {
      Header,
      Footer
    },
    name: "mine",
    data() {
      return {
        title: "我的主页",
        avatar: {
          url: require("_a/img/avatar/user.png")
        },
        info_list:[{
          name: '主题设置',
          path: '/mine/theme',
          icon: 'iconzhuti',
          icon_color: {
            color: '#A87643'
          }
        },{
          name: '个人信息',
          path: '/mine/detail',
          icon: 'iconcredentials_icon',
          icon_color: {
            color: '#150037'
          }
        },{
          name: '消息',
          path: '/mine/message',
          icon: 'icontongzhi',
          icon_color: {
            color: '#348C71'
          }
        },{
          name: '关于',
          path: '/mine/about',
          icon: 'iconiconset0103',
          icon_color: {
            color: '#724EEC'
          }
        }],
        new_msg_count:10
      };
    },
    methods: {
      changeAvatar() {

      },
      logout(){
         MessageBox.confirm("确定注销登录?")
                    .then(action => {
                        this.$router.push('home');
                    })
                    .catch(error => {});
      }
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
      flex: 1;
      padding: .2rem 0;
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
      padding: .2rem .2rem 0 .3rem;
      word-break: break-all;
      text-align: left;
      letter-spacing: .02rem;
      line-height: .4rem;
    }

    .change-avatar {
      margin-top: .5rem;
      margin-right: .2rem;
      font-weight: bolder;
      color: #8d8c91;
      font-size: 0.8rem;

      &:active {
        color: #a3a3a3;
      }
    }
  }
    .fill-avatar{
      display: block;
      width: 100%;
      height: 3.3rem;
    }
  .other-option {
      background: #fff;
      margin:.15rem 0 1rem;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;
        font-size: .4rem;
        height: 1.5rem;
        width: 100%;
        padding: 0 .3rem;
        border-bottom: 0.06rem solid #f1f1f1;
        &:active{
          background-color: aliceblue;
        }
        .myicon {
          display: inline-block;
          font-size: .6rem;
          vertical-align: middle;
          width: 1rem;
        }
        .title {
          margin-left: .25rem;
          vertical-align: middle;
        }
        .logout{
          color:#C43E57;
        }
      }
    }
</style>