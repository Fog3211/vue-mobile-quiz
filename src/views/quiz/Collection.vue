<template>
  <div>
      <Header :title="title"></Header>
      <Footer></Footer>
    这是收藏夹
  </div>
</template>

<script>
import Header from "_c/Header.vue";
import Footer from "_c/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  name: "collection",
  data() {
      return {
          title: "收藏夹"
      }
  },
};
</script>
<style scoped lang="scss">
</style>
