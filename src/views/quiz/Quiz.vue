<template>
  <div class="page">
    <Header :title="title" :showBack="true"></Header>
    <div class="quiz-box">
      <div
        class="quiz"
        v-for="(items, index) in quiz_list"
        :key="index"
        v-show="index === current_index"
      >
        <p class="quiz-title">{{ index + 1 }}. {{ items.title }}</p>

        <ul class="quiz-options">
          <li v-for="(item, index) in items.options" class="option">
            <span class="option-index">{{ changeToLetter(index) }}</span>
            <span class="option-content">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="btn-box">
        <button
          @click="preEvent"
          class="btn"
          :class="{ disabled: !btn_state.pre }"
        >
          上一题
        </button>
        <button
          @click="nextEvent"
          class="btn"
          :class="{ disabled: !btn_state.next }"
        >
          下一题
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "_c/Header.vue";
import { quiz_list } from "@/mock/data/quizData.js";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "测试",
      quiz_list: [],
      current_index: 0,
      btn_state: {
        pre: false,
        next: true
      }
    };
  },
  methods: {
    // 数字转字母
    changeToLetter(item) {
      return String.fromCharCode(item + 65);
    },
    preEvent() {
      if (this.current_index > 0) {
        this.current_index--;
      }
      this.checkState();
    },
    nextEvent() {
      if (this.current_index < this.quiz_list.length - 1) {
        this.current_index++;
      }
      this.checkState();
    },
    checkState() {
      this.btn_state.pre = this.current_index == 0 ? false : true;
      this.btn_state.next =
        this.current_index == this.quiz_list.length - 1 ? false : true;
    }
  },
  activated() {
    // 题目通过后台获取，mock判断试题的科目返回相应试题
    this.quiz_list = quiz_list;
  }
};
</script>

<style scoped lang="scss">
.quiz-box {
  font-size: 0.34rem;
  padding: 0.3rem 0;
  text-align: left;
  .quiz {
    width: 95%;
    padding: 0.3rem 0 0.1rem;
    margin: 0.3rem auto;
    background-color: #fff;
    .quiz-title {
      font-size: 0.35rem;
      margin-bottom: 0.3rem;
      padding: 0 0.2rem;
      text-indent: 0.1rem;
      line-height: 0.6rem;
    }
    .quiz-options {
      padding: 0.3rem;
      margin: 0.3rem 0.1rem;
      background-color: #ebeaea;
      .option {
        padding: 0.2rem;
        margin: 0.1rem 0 0;
        letter-spacing: 0.02rem;
        &-index {
          font-size: 0.36rem;
          font-weight: bolder;
          padding-right: 0.2rem;
        }
        &-content {
          display: inline-block;
        }
        &:active {
          background-color: #d3d4df;
        }
      }
    }
  }
  .btn-box {
    width: 85%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
    .btn {
      color: #fff;
      padding: 0.2rem 1rem;
      background-color: #00a400;
      border-radius: 0.15rem;
      text-align: center;
      font-weight: bold;
    }
    .disabled {
      color: #000;
      background-color: #ddd;
    }
  }
}
</style>