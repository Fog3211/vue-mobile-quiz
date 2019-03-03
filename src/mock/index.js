import Mock from "mockjs"

import {
    user_list,
    user_msg
} from "./data/userData.js"

//登录
Mock.mock('/login', 'post', (params) => {
    let user = JSON.parse(params.body);
    let has_user = false;
    let can_login = user_list.some((item) => {
        if (item.username == user.username) {
            has_user = true;
            if (item.password == user.password) {
                return true;
            }
        }
    })
    if (!has_user) {
        return {
            code: 2,
        }
    }
    if (can_login) {
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
        user_list.push({
            username: user.username,
            password: user.password,
            user_theme: ""
        });
        return {
            code: 1
        }
    }
})

// 获取新消息
Mock.mock('/user_msg', 'get', () => {
    let new_msg = user_msg.filter((item) => {
        return item.new_msg == true;
    })
    return {
        code: 0,
        new_msg_count: new_msg.length,
        user_msg: user_msg
    }
})