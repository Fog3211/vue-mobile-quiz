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
            username: user.username
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
        code: 1,
        new_msg_count: new_msg.length,
        user_msg: user_msg
    }
})

// 获取主题信息
Mock.mock('/user_theme', 'post', (params) => {
    let user = JSON.parse(params.body);
    let theme = 'default-theme';
    user_list.some((item) => {
        if (item.username == user.username) {
            if (item.user_theme) {
                item.user_theme = user.user_theme ? user.user_theme : item.user_theme;
                theme = item.user_theme;
                return true;
            } else {
                item.user_theme = user.user_theme ? user.user_theme : "default-theme";
                theme = item.user_theme;
                return false;
            }
        }
    })
    return {
        code: 1,
        user_theme: theme
    }
})

// 用户账户信息
Mock.mock('/user_profile', 'post', (params) => {
    let profile = JSON.parse(params.body);
    let profile_data = {};
    // 获取账户信息
    if (profile.type == "get") {
        user_list.some(item => {
            if (item.username == profile.username) {
                profile_data={
                    username:item.username,
                    nickname:item.nickname,
                    phone:item.phone,
                    email:item.email,
                    birthday:item.birthday,
                    introduction:item.introduction
                }
            }
        })
        return {
            code:1,
            data:profile_data
        }
    }
    // 设置账户信息
    let success = user_list.some(item => {
        if (item.username == profile.username) {
            item.nickname = profile.nickname;
            item.phone = profile.phone;
            item.email = profile.email;
            item.birthday = profile.birthday;
            item.introduction = profile.introduction;
            return true;
        } else {
            return false;
        }
    })

    if (success) {
        return {
            code: 1,
        }
    } else {
        return {
            code: 0,
        }
    }
})

// 获取头像信息
Mock.mock('/user_avatar', 'post', (params) => {
    let user = JSON.parse(params.body);
    let avatar = require("_a/img/avatar/user.jpg");
    user_list.some((item) => {
        if (item.username == user.username) {
            if (item.user_avatar) {
                item.user_avatar = user.user_avatar ? user.user_avatar : item.user_avatar;
                avatar = item.user_avatar;
                return true;
            } else {
                item.user_avatar = user.user_avatar ? user.user_avatar : require("_a/img/avatar/user.jpg");
                avatar = item.user_avatar;
                return false;
            }
        }
    })
    return {
        code: 1,
        user_avatar: avatar
    }
})