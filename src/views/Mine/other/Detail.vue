<template>
    <div class="page">
        <Header :title="title" :showBack="true"></Header>
        <div class="edit-box">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username" class="edit"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email" class="edit"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" class="edit" state="warning"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday" class="edit" state="warning"></mt-field>
        </div>
        <button @click="saveMsg()" class="save-btn">保存</button>
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
                title: "个人信息",
                username:"",
                email:"",
                phone:"",
                birthday:""
            };
        },
        methods:{
            saveMsg(){

            }
        }
    };
</script>

<style scoped lang="scss">
.edit{
    margin-top: .06rem;
    border-top: 1px solid #ccc;
}
.save-btn{
    width: 80%;
    height: 1rem;
    border-radius: .1rem;
    margin-top: .5rem;
    font-size: .4rem;
    font-weight: bolder;
    color: #fff;
    letter-spacing: .2rem;
    background-color: #18AC18;
}
</style>