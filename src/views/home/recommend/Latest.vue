<template>
  <div>
    <QuizList :quiz_list="latest_list"></QuizList>
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
      latest_list: []
    };
  },
  mounted() {
    this.$nextTick(() => {
        Service.getLatestList().then((res)=>{
             if (res.code == 1) {
               this.latest_list = res.data;
             }
        })
    });
  }
};
</script>

<style lang="scss" scoped>

</style>
