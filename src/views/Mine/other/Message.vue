<template>
 <div class="page">
      <Header :title="title" :showBack="true"></Header>
    </div>
</template>

<script>
import Header from "_c/Header.vue";
    export default {
        components:{
            Header
        },
        data() {
            return {
              title:"消息"
            }
        },
    }
</script>

<style scoped>

</style>