import Mock from "mockjs"
import store from "@/store.js"

import {
    user_list
} from "./data/userdata.js"

//登录
Mock.mock('/login', 'post', (params) => {
    let user = JSON.parse(params.body)
    let has_user = user_list.some((item) => {
        if (item.username == user.username) {
            if (item.password == user.password) {
                return true;
            }
        }
    })
    if (has_user) {
        return {
            code: 1,
            user: user.username
        }
    } else {
        return {
            code: 0
        }
    }
})

// 注册
Mock.mock('/register', 'post', (params) => {
    let user = JSON.parse(params.body);
    let exist_user = user_list.some(item => {
        if (item.username == user.username) {
            return true;
        }
    })
    if (exist_user) {
        return {
            code: 0
        }
    } else {
        user_list.push(user);
        return {
            code: 1
        }
    }
})