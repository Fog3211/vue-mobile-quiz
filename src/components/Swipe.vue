<template>
    <div class="swipe-box">
        <p class="title">{{ title }}</p>
        <div class="swiper">
            <div class="swiper-slide-block" v-for="(item, index) in swipe_list" :key="index" @click="goSelect(item.id)">
                <img :src="item.cover" />
                <p class="swipe-name">{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            swipe_list: {
                type: Array,
                default: []
            },
            title: {
                type: String,
                default: ""
            }
        },
        data() {
            return {};
        },
        methods: {
            goSelect(id) {
                this.$router.push({
                    name: "subject",
                    params: {
                        subject_id: id
                    }
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    .swipe-box {
        padding: 0 .15rem;

        .title {
            text-align: left;
            padding-left: .3rem;
            font-weight: bolder;
            line-height: .8rem;
            font-size: 0.34rem;
        }

        .swiper {
            overflow: scroll;
            white-space: nowrap;

            .swiper-slide-block {
                padding-right: 0.5rem;
                display: inline-block;
                width: auto;
                overflow: hidden;

                img {
                    width: 1.8rem;
                    height: 2.3rem;
                }

                .swipe-name {
                    margin: 0.2rem 0;
                    font-size: 0.28rem;
                }
            }
        }
    }
</style>