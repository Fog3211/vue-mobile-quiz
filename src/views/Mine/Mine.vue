<template>
  <div>
    <Header :title="title"></Header>
    <Footer></Footer>
    我的
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
  name: "mine",
  data() {
    return {
      title:"我的主页"
    }
  },
};
</script>
<style scoped lang="scss">
</style>
