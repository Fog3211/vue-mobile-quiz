(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a0b0cc8"],{"1b8a":function(t,a,n){},"1f99":function(t,a,n){"use strict";var s=n("5701"),i=n.n(s);i.a},"3adc":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"page"},[n("Header",{attrs:{title:t.title}}),n("div",{staticClass:"avatar-box",on:{click:t.changeAvatar}},[n("img",{staticClass:"avatar",attrs:{src:t.avatar.url}}),n("div",{staticClass:"user-info"},[n("span",{staticClass:"username"},[t._v(t._s(t.nickname))]),n("span",{staticClass:"user-signature"},[t._v(t._s(t.introduction))])]),n("i",{staticClass:"iconfont iconxiaojiantou change-avatar",on:{click:t.changeAvatar}})]),n("div",{staticClass:"fill-avatar"}),n("div",{staticClass:"other-option"},[t._l(t.info_list,function(a,s){return n("router-link",{key:s,staticClass:"item",attrs:{to:{path:a.path}}},[n("p",{staticClass:"item-title"},[n("span",{class:["myicon iconfont",a.icon],style:a.icon_color}),n("span",{staticClass:"title"},[t._v(t._s(a.name))])]),"消息"==a.name&&0!=t.new_msg_count?n("mt-badge",{attrs:{type:"error",size:"large"}},[t._v(t._s(t.new_msg_count))]):t._e()],1)}),n("div",{staticClass:"item",on:{click:t.logout}},[t._m(0)])],2),n("Footer")],1)},i=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",{staticClass:"item-title"},[n("span",{staticClass:"myicon iconfont icontuichu logout"}),n("span",{staticClass:"title"},[t._v("退出登录")])])}],e=(n("5fc6"),n("5af2")),c=n.n(e),o=(n("b6ce"),n("5441")),r=n.n(o),u=(n("cadf"),n("551c"),n("f751"),n("097d"),n("0418")),l=n("fd2d"),f=n("c0d6"),m=n("67cf"),_=n("1815"),v={components:{Header:u["a"],Footer:l["a"]},name:"mine",data:function(){return{title:"我的主页",nickname:"",introduction:"",avatar:{url:null},info_list:[]}},methods:{changeAvatar:function(){this.$router.push("/mine/avatar")},logout:function(){var t=this;r.a.confirm("确定注销登录?").then(function(a){f["a"].commit("logout"),c()({message:"成功退出",position:"bottom"}),t.$router.push("/login")}).catch(function(t){})}},computed:{new_msg_count:function(){return f["a"].state.new_msg_count}},mounted:function(){var t=this;this.$nextTick(function(){t.info_list=_["b"]})},activated:function(){var t=this;m["a"].getProfile({username:f["a"].state.username,type:"get"}).then(function(a){1==a.code&&(t.nickname=a.data.nickname?a.data.nickname:f["a"].state.username,t.introduction=a.data.introduction?a.data.introduction:"您还没有个性签名")}),m["a"].getAvatar({username:f["a"].state.username,user_avatar:""}).then(function(a){1==a.code&&(t.avatar.url=a.user_avatar)})}},d=v,g=(n("1f99"),n("2877")),h=Object(g["a"])(d,s,i,!1,null,"38cd3be4",null);a["default"]=h.exports},5701:function(t,a,n){},fcdc:function(t,a,n){"use strict";var s=n("1b8a"),i=n.n(s);i.a},fd2d:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"footer",class:t.user_theme},[n("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/home","active-class":"active"}},[n("i",{staticClass:"iconfont iconzhuye"}),n("span",[t._v("主页")])]),n("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/collection","active-class":"active"}},[n("i",{staticClass:"iconfont iconshoucangjia"}),n("span",[t._v("收藏夹")])]),n("router-link",{staticClass:"btn",attrs:{tag:"div",to:"/mine","active-class":"active"}},[0!=t.new_msg_count&&t.is_login?n("mt-badge",{staticClass:"badge",attrs:{type:"error",size:"small"}},[t._v(t._s(t.new_msg_count))]):t._e(),n("i",{staticClass:"iconfont icontouxiang"}),n("span",[t._v("我的")])],1)],1)},i=[],e=n("c0d6"),c={data:function(){return{}},computed:{user_theme:function(){return e["a"].state.user_theme},new_msg_count:function(){return e["a"].state.new_msg_count},is_login:function(){return e["a"].state.is_login}}},o=c,r=(n("fcdc"),n("2877")),u=Object(r["a"])(o,s,i,!1,null,"758c7a7b",null);a["a"]=u.exports}}]);