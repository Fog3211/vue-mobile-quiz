import Mock from "mockjs"

import {
    user_list,
    user_msg
} from "./data/userData.js";
import {
    all_quiz_list,
    latest_list,
    hottest_list,
    recommend_list,
    subject_list
} from "./data/quizData.js";

import {
    swipe_img_list,
    theme_list,
    avatar_list,
} from "@/mock/data/data.js";
// 正则取get参数
function getQueryByName(url, name) {
    var reg = new RegExp('[?&]' + name + '=([^&#]+)');
    var query = url.match(reg);
    return query ? query[1] : null;
}

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
Mock.mock(/^\/user_theme/, 'get', (params) => {
    let user = {
        username: getQueryByName(params.url, 'username'),
        user_theme: getQueryByName(params.url, 'user_theme')
    };
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
                profile_data = {
                    username: item.username,
                    nickname: item.nickname,
                    phone: item.phone,
                    email: item.email,
                    birthday: item.birthday,
                    introduction: item.introduction
                }
            }
        })
        return {
            code: 1,
            data: profile_data
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
Mock.mock(/^\/user_avatar/, 'get', (params) => {
    let user = {
        username: getQueryByName(params.url, 'username'),
        user_avatar: getQueryByName(params.url, 'user_avatar')
    };
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

// 根据id获取试题
Mock.mock(/\/quiz\//, 'get', (params) => {
    let quiz_list_id = params.url.match(/\/quiz\/(\w+)/)[1];
    let quiz_list = {};
    let success = all_quiz_list.some(item => {
        if (item.quiz_list_id == quiz_list_id) {
            quiz_list = item.quiz_list;
            return true;
        }
        return false;
    })
    if (success) {
        return {
            code: 1,
            quiz_list: quiz_list
        }
    }
    return {
        code: 0
    }
});

// 获取最新试题列表
Mock.mock('/latest_list', 'get', () => {
    return {
        code: 1,
        data: latest_list
    }
})
//   获取最热试题列表
Mock.mock('/hottest_list', 'get', () => {
    return {
        code: 1,
        data: hottest_list
    }
})
//   获取推荐试题列表
Mock.mock('/recommend_list', 'get', () => {
    return {
        code: 1,
        data: recommend_list
    }
})
//   获取科目试题列表
Mock.mock('/subject_list', 'get', () => {
    return {
        code: 1,
        data: subject_list
    }
})
// 获取所有题目 
Mock.mock('/all_quiz_list', 'get', () => {
    return {
        code: 1,
        data: all_quiz_list
    }
})
//   获取轮播图片列表
Mock.mock('/swipe_img_list', 'get', () => {
    return {
        code: 1,
        data: swipe_img_list
    }
})
//   获取头像图片列表
Mock.mock('/avatar_list', 'get', () => {
    return {
        code: 1,
        data: avatar_list
    }
})
//   获取主题列表
Mock.mock('/theme_list', 'get', () => {
    return {
        code: 1,
        data: theme_list
    }
})
//   获取收藏夹状态
Mock.mock('/get_collection_list_state', 'post', (params) => {
    let user = JSON.parse(params.body);
    let collection_list_state = [];
    user_list.some((item) => {
        if (item.username == user.username) {
            if (item.collection_list_state) {
                // console.log(item.collection_list_state);
                collection_list_state = item.collection_list_state;
                return true;
            } else {
                return false;
            }
        }
        return false;
    })
    // console.log(collection_list_state);
    return {
        code: 1,
        data: collection_list_state
    }
})
//   更新收藏夹状态
Mock.mock('/set_collection_list_state', 'post', (params) => {
    let user = JSON.parse(params.body);
    let list = user.list;
    user_list.some((item) => {
        if (item.username == user.username) {
            // console.log(item.collection_list_state);
            if (item.collection_list_state) {
                for (let i = 0; i < list.length; i++) {
                    if (list[i]!==null) {
                        item.collection_list_state[i] = list[i];
                    }
                }
                return true;
            } else {
                item.collection_list_state = list;
                return true;
            }
        }
        return false;
    })
       
    return {
        code: 1
    }
})