<template>
  <div class="list-card">
    <div
      class="item-card"
      v-for="(item, index) in quiz_list"
      :key="index"
      @click="goDeatil(item)"
    >
      <img :src="item.cover" />
      <div class="info">
        <p class="label">{{ item.label }}</p>
        <p class="intro">{{ item.intro }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quiz_list: {
      type: Array,
      default: []
    }
  },
  methods: {
    goDeatil(item) {
      this.$router.push({
        name: "quiz",
        params: {
          quiz_list_id: item.id
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.list-card {
  background: rgb(236, 229, 234);
  margin-bottom: 1rem;
  .item-card {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    padding: 0.2rem 0;
    border-top: 1px solid rgb(209, 203, 203);
    border-bottom: 1px solid rgb(209, 203, 203);
    img {
      margin-left: 0.3rem;
      width: 1.4rem;
    }
    .info {
      height: 2rem;
      padding: 0 0.3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .label {
        color: rgb(55, 90, 107);
        font-size: 0.4rem;
        text-align: left;
        line-height: 0.8rem;
      }
      .intro {
        text-indent: 0.2rem;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        width: 100%;
      }
    }
  }
}
</style>
