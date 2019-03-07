<template>
  <div class="page">
    <Header :title="title" :showBack="true"></Header>
    <!-- 消息列表 -->
    <div class="msg-list" v-if="msg_list.length > 0">
      <div
        v-for="(item, index) in msg_list"
        :key="index"
        @click="showMsgDetail(item, index)"
        class="msg-item"
      >
        <span v-if="item.new_msg" class="red-dot"></span>
        <span class="msg-date">{{ item.msg_date }}</span>
        <span class="msg-title">{{ item.msg_title }}</span>
        <p class="msg-content">
          {{ item.msg_content }}
        </p>
      </div>
    </div>
    <p v-else class="no-msg">当前没有信息</p>
    <!-- 消息详情 -->
    <div class="msg-detail" v-if="show_msg_detail" @click="hiddenMsgDetail()">
      <div class="msg-content">
        <p class="msg-title">{{ msg_detail.msg_title }}</p>
        <p>{{ msg_detail.msg_content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "_c/Header.vue";
import Service from "@/service/service.js";
import store from "@/store.js";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "消息",
      show_msg_detail: false,
      msg_detail: {},
      msg_list: []
    };
  },
  methods: {
    showMsgDetail(item, index) {
      this.show_msg_detail = true;
      this.msg_detail = item;
      if (this.msg_list[index].new_msg == true) {
        this.msg_list[index].new_msg = false;
        store.commit("reduceNewMsgCount");
      }
    },
    hiddenMsgDetail() {
      this.show_msg_detail = false;
    }
  },
  // 组件激活时调用
  activated() {
    // 防止重复mock新消息
    if (this.msg_list.length != 0) return;
    Service.getUserMsg().then(res => {
      // console.log(res);
      if (res.code == 1) {
        this.msg_list = res.user_msg;
      }
    });
  },
  // 自动收起详细展示
  deactivated() {
    this.show_msg_detail = false;
  }
};
</script>

<style scoped lang='scss'>
.msg-list {
  width: 100%;
  .msg-item {
    position: relative;
    width: 90%;
    margin: 0.3rem auto;
    background: #fff;
    border-radius: 0.2rem;
    min-height: 1rem;
    line-height: 0.36rem;
    padding: 0.2rem 0.1rem;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.05);
    text-align: left;
    .red-dot {
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      background-color: #f00;
      top: 10%;
      right: 2%;
    }

    .msg-date {
      position: absolute;
      color: #9d9d9d;
      min-width: 2.5rem;
      top: 18%;
      right: 1%;
    }

    .msg-title {
      display: block;
      max-width: 3.5rem;
      height: 0.32rem;
      font-weight: bolder;
      font-size: 0.32rem;
      padding-left: 0.3rem;
    }
    .msg-content {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      margin-top: 0.3rem;
      text-indent: 0.15rem;
      font-size: 0.2rem;
    }
  }
}
.no-msg {
  font-size: 0.5rem;
  margin: 0.6rem auto;
}
.msg-detail {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .msg-content {
    margin: 0 auto;
    width: 90%;
    background: #fff;
    border-radius: 0.2rem;
    min-height: 1rem;
    padding: 0.3rem 0.6rem;
    box-shadow: 0 0 10rem 5rem rgba(0, 0, 0, 0.5);
    font-size: 0.34rem;
    line-height: 0.5rem;

    .msg-title {
      text-align: left;
      padding-left: 0.2rem;
      font-size: 0.4rem;
      font-weight: bolder;
      margin-bottom: 0.2rem;
    }
  }
}
</style>