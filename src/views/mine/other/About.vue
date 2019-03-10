<template>
 <div class="page">
      <Header :title="title" :showBack="true"></Header>
        <mt-field label="开发人员" readonly type="textarea" rows="1" v-model="developer" class="separat"></mt-field>
        <mt-field label="项目地址" readonly type="textarea" rows="2" v-model="website" class="separat"></mt-field>
        <mt-field label="项目日期" readonly type="textarea" rows="1" v-model="date" class="separat"></mt-field>
        <mt-field label="项目技术" readonly type="textarea" rows="3" v-model="technology" class="separat"></mt-field>
        <mt-field label="项目功能" readonly type="textarea" rows="3" v-model="introduction" class="separat"></mt-field>
        <mt-field label="写在最后" readonly type="textarea" rows="1" v-model="last" class="separat"></mt-field>
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
              title:"关于",
              developer:"Fog3211",
              website:"https://github.com/fog3211/vue-mobile-quiz",
              date:"2019.2.26-2019.3.10",
              technology:"本项目界面使用Vue-cli3 + Vuex + Vue-router + Mint-UI + SCSS 开发,后台数据由 Mock 模拟生成。",
              introduction:"登录注册 主题修改 未读消息通知 更换头像 题目搜索 修改个人信息 题目收藏 长按删除 错题本等",
              last:"欢迎Star & Fork,感谢您的使用 ^_^"
            }
        },
    }
</script>

<style scoped lang="scss">
.separat{
margin-top: .04rem;
}
</style>