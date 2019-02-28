<template>
    <div class="page">
        <Header :title="title" :showBack="true"></Header>
        <!-- 搜索框 -->
        <div class="search">
            <div class="search-box">
                <input type="text" placeholder="请输入关键词" v-model="keyword" @keyup="typing" class="search-input" />
                <i class="iconfont iconcuo del-btn" @click="empty_keyword()"></i>
            </div>
            <i class="iconfont iconsousuo search-btn" @click="search(keyword)"></i>
        </div>
        <div v-if="!showResult">
        <!-- 历史记录 -->
        <div class="history" v-if="show_history">
            <p class="title">
                搜索历史<i class="iconfont iconshanchu empty-btn" v-if="history_list.length> 0" @click="emptyHistory()"></i>
            </p>
            <p class="empty-box" v-if="history_list.length == 0">
                历史记录空空如也...
            </p>
            <div v-if="history_list.length > 0" class="history-box">
                <span v-for="(item, index) in history_list" :key="index" @click="search(item)" class="history-item">
                    {{ item }}
                </span>
            </div>
        </div>
        <!-- 热门搜索 -->
        <div class="hot">
            <p class="title">
                热门搜索
            </p>
            <div v-if="hot_list.length > 0" class="hot-box">
                <span v-for="(item, index) in hot_list" :key="index" @click="search(item)" class="hot-item">
                    {{ item }}
                </span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import Header from "_c/Header.vue";
    export default {
        components: {
            Header
        },
        data() {
            return {
                title: "搜索",
                keyword: "",
                history_list: [...new Set(["大学物理", "高等数学", "四级英语"])],
                hot_list: ["数据结构", "六级英语", "人工智能", "区块链"],
                show_history: true,
                showResult:false
            };
        },
        methods: {
            typing() {},
            empty_keyword(){
                this.keyword="";
            },
            search(item) {
                    if(item){
                        this.keyword=item;
                        this.history_list.unshift(item);
                        this.history_list=[... new Set(this.history_list)];
                    }
            },
            emptyHistory() {
                MessageBox.confirm("确定清空历史记录?")
                    .then(action => {
                        this.history_list = [];
                    })
                    .catch(error => {});
            }
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
            top: 0.15rem;
            right: 0;
            font-size: 0.5rem;
            padding: 0 0.3rem;
            color: #a3a3a3;

            &:active {
                color: rgb(200, 200, 200);
            }
        }

        &-btn {
            color: #fff;
            font-size: 0.4rem;
            background-color: #a3a3a3;
            margin-left: 0.1rem;
            padding: 0.16rem 0.3rem;
            border-radius: 0.2rem;

            &:active {
                background-color: #b7b7b7;
            }
        }
    }

    .history {
        padding-top: 0.36rem;

        .title {
            position: relative;
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            left: 0;
            font-size: 0.35rem;
            font-weight: bolder;
            text-align: left;
            padding-left: 0.4rem;
        }

        .empty-btn {
            font-size: 0.35rem;
            position: absolute;
            right: 0.6rem;

            &:active {
                color: #a3a3a3;
            }
        }
        .empty-box{
            height: .8rem;
            line-height: .8rem;
            letter-spacing: .04rem;
            color: #bbb;
        }

        &-box {
            width: 90%;
            margin: 0 auto;
            padding-top: 0.3rem;
            text-align: left;
        }

        &-item {
            display: inline-block;
            max-width: 100%;
            word-break: break-all;
            background: #fff;
            border-radius: 0.5rem;
            padding: 0.2rem 0.3rem;
            margin-right: 0.3rem;
            margin-bottom: 0.2rem;
        }
    }

    .hot {
        padding-top: 0.36rem;

        .title {
            position: relative;
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            left: 0;
            font-size: 0.35rem;
            font-weight: bolder;
            text-align: left;
            padding-left: 0.4rem;
        }

        &-box {
            width: 90%;
            margin: 0 auto;
            padding-top: 0.3rem;
            text-align: left;
        }

        &-item {
            display: inline-block;
            max-width: 100%;
            word-break: break-all;
            background: #fff;
            border-radius: 0.5rem;
            padding: 0.2rem 0.3rem;
            margin-right: 0.3rem;
            margin-bottom: 0.2rem;
        }
    }
</style>