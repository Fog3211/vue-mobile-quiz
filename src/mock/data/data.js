// 主题存储
let theme_list = [{
        name: "五彩斑斓的黑",
        meta: "black",
        bezel_color: "background-color: #080A33",
    },
    {
        name: "绿色小清新",
        meta: "green",
        bezel_color: "background-color: #BEE6DA",
    },
    {
        name: "伤感忧郁的灰",
        meta: "gray",
        bezel_color: "background-color: #808080",
    },
    {
        name: "激情四射的红",
        meta: "red",
        bezel_color: "background-color: #981534",
    },
    {
        name: "淡然优雅的蓝",
        meta: "blue",
        bezel_color: "background-color: #88CEF0",
    },
    {
        name: "恢复默认主题",
        meta: "default",
        bezel_color: "background-color: aliceblue",
    }
];
// 头像存储
let avatar_list = [
    require("_a/img/avatar/avatar01.jpg"),
    require("_a/img/avatar/avatar02.jpg"),
    require("_a/img/avatar/avatar03.jpg"),
    require("_a/img/avatar/avatar04.jpg"),
    require("_a/img/avatar/avatar05.jpg"),
    require("_a/img/avatar/avatar06.jpg"),
    require("_a/img/avatar/avatar07.jpg"),
    require("_a/img/avatar/avatar08.jpg"),
    require("_a/img/avatar/avatar09.jpg"),
    require("_a/img/avatar/avatar10.jpg"),
    require("_a/img/avatar/avatar11.jpg"),
    require("_a/img/avatar/avatar12.jpg")
];
// 轮播图存储
let swipe_img_list = [{
        url: require("_a/img/swipe/1.png")
    },
    {
        url: require("_a/img/swipe/2.png")
    },
    {
        url: require("_a/img/swipe/3.png")
    }
];
// mine页面功能存储
let info_list = [{
        name: "主题设置",
        path: "/mine/theme",
        icon: "iconzhuti",
        icon_color: {
            color: "#A87643"
        }
    },
    {
        name: "个人信息",
        path: "/mine/profile",
        icon: "iconcredentials_icon",
        icon_color: {
            color: "#150037"
        }
    },
    {
        name: "消息",
        path: "/mine/message",
        icon: "icontongzhi",
        icon_color: {
            color: "#348C71"
        }
    },
    {
        name: "关于",
        path: "/mine/about",
        icon: "iconiconset0103",
        icon_color: {
            color: "#724EEC"
        }
    }
];

export {
    theme_list,
    avatar_list,
    swipe_img_list,
    info_list
}