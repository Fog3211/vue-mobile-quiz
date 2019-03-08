<template>
  <div>
    <QuizList :quiz_list="recommend_list"></QuizList>
  </div>
</template>

<script>
import Service from "@/service/service";
import QuizList from "_c/QuizList.vue";
export default {
  components: {
    QuizList
  },
  data() {
    return {
      recommend_list: []
    };
  },
  mounted() {
      this.$nextTick(() => {
        Service.getRecommendList().then((res)=>{
             if (res.code == 1) {
               this.recommend_list = res.data;
             }
        })
    });
  }
};
</script>

<style lang="scss" scoped>

</style>
