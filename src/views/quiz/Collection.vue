<template>
  <div class="page">
    <Header :title="title"></Header>
    <div class="no-collection" v-if="collection_list.length == 0">
      <img src="../../assets/img/empty.jpg" />
      <h1>当前还未收藏过题目</h1>
    </div>
    <div
      class="quiz-box"
      v-for="(items, index) in collection_list"
      :key="index"
      @touchstart="touchStart(items, index)"
      @touchend="touchEnd()"
    >
      <div class="quiz">
        <p class="quiz-title">
          {{ index + 1 }}. {{ items ? items.title : "" }}
          <span class="answer">{{
            changeToLetter(items ? items.answer : "")
          }}</span>
        </p>

        <ul class="quiz-options">
          <li v-for="(item, index) in items.options" class="option">
            <span class="option-index">{{ changeToLetter(index) }}</span>
            <span class="option-content">{{ item }}</span>
          </li>
        </ul>

        <div class="explain">
          <p>
            <span class="title">最佳解释：</span>{{ items ? items.reason : "" }}
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "_c/Header.vue";
import Footer from "_c/Footer.vue";
import Service from "@/service/service.js";
import store from "@/store.js";
import { MessageBox, Toast } from "mint-ui";
export default {
  components: {
    Header,
    Footer
  },
  name: "collection",
  data() {
    return {
      title: "收藏夹",
      loading: false,
      collection_list: [], //记录收藏夹题目数组
      collection_state_list: [], //记录收藏状态
      all_quiz_list: [],
      timeout: 0,
      del_quiz: "",
      del_index: ""
    };
  },
  methods: {
    touchStart(item, index) {
      this.del_quiz = item;
      this.del_index = index;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.longPress, 800); //不能加括号，否则立即执行
    },
    touchEnd() {
      clearTimeout(this.timeout);
    },
    longPress() {
      MessageBox.confirm("确定将改题目移除收藏夹?")
        .then(action => {
          Toast({
            message: "成功删除",
            position: "bottom"
          });
          this.collection_list.splice(this.del_index, 1);
          this.collection_state_list[this.del_quiz.id]=false;
        })
        .catch(error => {
          // console.log(error);
        });
    },
    getQuizById(id) {
      for (let i = 0; i < this.all_quiz_list.length; i++) {
        for (let j = 0; j < this.all_quiz_list[i].quiz_list.length; j++) {
          if (this.all_quiz_list[i].quiz_list[j].id == id) {
            return this.all_quiz_list[i].quiz_list[j];
          }
        }
      }
    },
    changeToLetter(item) {
      if (typeof item == "object") {
        let str = "";
        for (let i = 0; i < item.length; i++) {
          str += String.fromCharCode(item[i] + 65);
        }
        return str;
      } else {
        return String.fromCharCode(item + 65);
      }
    }
  },
  activated() {
    this.collection_list = [];
    Service.getAllQuiz().then(res => {
      if (res.code == 1) {
        this.all_quiz_list = res.data;
      }
    });
    Service.getCollectionState({
      username: store.state.username
    }).then(res => {
      if (res.code == 1) {
        this.collection_state_list = res.data;
        let list = res.data;
        //  console.log(list);
        for (let i = 0; i < list.length; i++) {
          if (list[i]) {
            this.collection_list.push(this.getQuizById(i));
          }
        }
      }
    });
  },
  deactivated() {
    // console.log(this.collection_list);
     Service.setCollectionState({
        username: store.state.username,
        list: this.collection_state_list
      }).then(res => {
        // console.log("finish");
      });

    this.collection_list = [];
  }
};
</script>
<style scoped lang="scss">
.no-collection {
  margin-top: 0.2rem;
  img {
    width: 100%;
  }
  h1 {
    font-size: 0.5rem;
    margin-top: 0.5rem;
  }
}
.quiz-box {
  font-size: 0.34rem;
  text-align: left;

  .quiz {
    width: 95%;
    padding: 0.3rem 0 0.1rem;
    margin: 0.3rem auto;
    background-color: #fff;
    overflow: auto;

    .quiz-title {
      font-size: 0.35rem;
      margin-bottom: 0.3rem;
      padding: 0 0.2rem;
      text-indent: 0.1rem;
      line-height: 0.6rem;

      .answer {
        color: #18b918;
        font-size: 0.5rem;
        line-height: 0.5rem;
        font-weight: bolder;
      }
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
          margin-right: 0.2rem;
        }

        &-content {
          line-height: 0.4rem;
        }
      }
    }

    .explain {
      padding: 0.1rem 0.3rem 1rem;
      background-color: #fff;
      width: 100%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      font-size: 0.3rem;
      line-height: 0.4rem;
      overflow: auto;

      .title {
        font-size: 0.32rem;
        color: #00a400;
      }
    }
  }
}
</style>