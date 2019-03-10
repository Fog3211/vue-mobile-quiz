<template>
  <div class="page">
    <Header :title="title" :showBack="true"></Header>
    <ul
      v-for="(item, index) in subject_quiz_list"
      :key="index"
      class="subject-box"
    >
      <li class="quiz_box" @click="selectQuiz(item)">
        {{ showTitleList(item) }}
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "_c/Header.vue";
import Service from "@/service/service";
import store from "@/store.js";
export default {
  components: {
    Header
  },
  data() {
    return {
      title: "试题选择",
      subject_id: 0, //默认科目id
      subject_list: [], //科目列表
      subject_quiz_list: [], //要显示的试题id数组
      all_quiz_list: [] //所有试题
    };
  },
  methods: {
    selectQuiz(item) {
      this.$router.push({
        name: "quiz",
        params: {
          quiz_list_id: item
        }
      });
    },
    showTitleList(item) {
      if (this.all_quiz_list[item]) {
        return this.all_quiz_list[item].quiz_title;
      }
    }
  },
  activated() {
    Service.getAllQuiz().then(res => {
      if (res.code == 1) {
        this.all_quiz_list = res.data;
      }
    });
    this.subject_id = this.$route.params.subject_id;
    Service.getSubjectList().then(res => {
      if (res.code == 1) {
        this.subject_list = res.data;

        let has_subject_quiz = this.subject_list.some(u => {
          if (u.id == this.subject_id) {
            this.subject_quiz_list = u.quiz_list_id;
            return true;
          }
          return false;
        });
        // 展示所有试题
        if (!has_subject_quiz) {
          this.all_quiz_list.forEach(u => {
            this.subject_quiz_list.push(u.quiz_list_id);
            this.subject_quiz_list = [...new Set(this.subject_quiz_list)];
          });
        }
      }
    });
  }
};
</script>

<style scoped lang="scss">
.subject-box {
  overflow: auto;
  width: 100%;

  .quiz_box {
    width: 100%;
    word-wrap: nowrap;
    font-size: 0.5rem;
    line-height: 0.8rem;
    padding: 0.2rem;
    margin: 0.2rem 0;
    border: 1px solid rgb(167, 165, 165);
    border-radius: 0.1rem;

    &:active {
      background-color: rgb(185, 182, 182);
    }
  }
}
</style>