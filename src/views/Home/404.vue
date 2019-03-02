<template>
  <div class="page">
    <div class="img-box"></div>
    <router-link to="/home" class="info">迷路了？返回首页</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.img-box{
    width: 100%;
    height: 5rem;
    background: url("../../assets/img/error.png");
    background-size: 100% 100%;
}
.info{
    display: block;
    font-size: .6rem;
    margin-top: .3rem;
    letter-spacing: .1rem;
    color:cornflowerblue;
}
</style>