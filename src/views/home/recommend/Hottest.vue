<template>
  <div>
    <QuizList :quiz_list="hottest_list"></QuizList>
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
      hottest_list: []
    };
  },
 mounted() {
    this.$nextTick(() => {
        Service.getHottestList().then((res)=>{
             if (res.code == 1) {
               this.hottest_list = res.data;
             }
        })
    });
  }
};
</script>

<style lang="scss" scoped>

</style>
