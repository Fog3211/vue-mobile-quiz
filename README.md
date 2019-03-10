# vue-mobile-quiz(vue移动端答题系统)

## 介绍

本项目是以vue-cli3搭建的SPA单页面应用，主要分为三大部分，主页进行试卷的推送，题目的搜索及科目选择；答题界面具有收藏夹，错题本功能，并且兼容多项选择；个人设置里可以进行头像，主题等信息的个性化定制，以及未读消息的提示（mock生成），本项目以开启PWA功能，可以发送到桌面。

## 技术栈

Vue2 + Vue-cli3 + Vuex + Vue-router + Mint-UI + Axios + SCSS + Mock + PWA

## 预览

> 预览地址：[https://fog3211.com/vue-mobile-quiz/dist/index.html](https://fog3211.com/vue-mobile-quiz/dist/index.html)

## 图片展示  

![avatar](https://img.fog3211.com/FLN8M2CIR%7D%5BI2OOH1V0T0%5B1.png)  
![avatar](https://img.fog3211.com/PZX8A__%25K@CLBN8T%60RZIAJ2.png)  
![avatar](https://img.fog3211.com/VP02%60G%287A2XZOO%29%25NRQ8D$E.png)  
![avatar](https://img.fog3211.com/I9VXOFYE%25_I4%7D~FQNSZ1TY4.png)  
![avatar](https://img.fog3211.com/NG4W_D8%2832NM0O%258FHVPUFJ.png)  
![avatar](https://img.fog3211.com/@%25%25GCT%7B3%6010%7DFHZF1XJ7E48.png)  
![avatar](https://img.fog3211.com/JJ@ND28%28T%5BPW12CDR0%7DNFWM.png)  
![avatar](https://img.fog3211.com/%5BONB%25B%5DROPUVV7%5B0%7D6N9%7B%28U.png)  
![avatar](https://img.fog3211.com/Z5$YH%28%5D2V$TNT2%28AO4E%29E2X.png)  
![avatar](https://img.fog3211.com/I%7DHYC%5BOK6_BGX493%25IH~X41.png)  
![avatar](https://img.fog3211.com/84%5D2YZL%5DX%5DYPR_QS3M_J9%25F.png)  
![avatar](https://img.fog3211.com/0UJHZM%29P8WH%250JJPB_WL%29%5BP.png)  

## 实现功能

### 首页

- 登录注册
- 展示推荐试题，最新试题，热门试题
- 根据科目选择试题
- 关键词搜索特定试题

### 个人设置

- 切换主题
- 未读消息提示
- 更换头像，个性签名
- 完善账户详情
- 查看开发者信息
- 注销登录

### 答题

- 根据题目序号跳转
- 错题本
- 收藏夹
- 长按删除（收藏夹页面）
- 兼容单选和多选

## 安装与使用

### 初始化

```shell
// 下载
git clone https://github.com/fog3211/vue-mobile-quiz.git
// 安装依赖
npm install
```

### 开始运行

```shell
// 开发模式
npm run serve
// 构建模式
npm run build
```

**注：** 

1. 默认用户为：账号 `fog3211` ,密码 `123456`,可自行注册。
2. 用户信息存放在sessio中，其他信息放在缓存中，退出后头像、主题、收藏夹的题目依旧保留。

## 最后

如果觉得我的项目还不错的话 ，就给个 star  鼓励一下吧。欢迎Fork&Star。
