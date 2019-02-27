<template>
    <div class="page">
        <Header :title="title" :showBack="true"></Header>
        <div class="search">
            <div class="search-box">
                <input type="text" placeholder="请输入关键词" v-model="kw" @keyup="typing" class="search-input" />
                <i class="iconfont iconcuo del-btn"></i>
            </div>
            <i class="iconfont iconsousuo search-btn"></i>
        </div>

    </div>
</template>

<script>
    import {
        Search
    } from "mint-ui";
    import Vue from "vue";
    Vue.component(Search.name, Search);
    import Header from "_c/Header.vue";
    export default {
        components: {
            Header
        },
        data() {
            return {
                title: "搜索",
                kw: ""
            };
        },
        methods: {
            typing() {}
        }
    };
</script>

<style scoped lang="scss">
    .search {
        width: 95%;
        height: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        &-box {
            position: relative;
            flex: 1;
            color: #b7b7b7;
            height: 0.75rem;
            background: #fff;
            border-radius: 0.4rem;
        }

        input {
            line-height: 0.75rem;
            width: 75%;
            letter-spacing: 0.03rem;
            background: transparent;
        }

        .del-btn {
            position: absolute;
            top: .15rem;
            right: 0;
            font-size: .5rem;
            padding: 0 0.3rem;
            color:#a3a3a3;
            &:active{
                color:rgb(200, 200, 200);
            }
        }
        &-btn{
            color: #fff;
            font-size: .4rem;
            background-color: #a3a3a3;
            margin-left: .1rem;
            padding: 0.16rem .3rem;
            border-radius: .2rem;
            &:active{
                background-color: #b7b7b7;
            }
        }
    }
</style>