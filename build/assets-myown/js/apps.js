(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps"],{"146e":function(e,t,n){"use strict";var a=n("9eb9"),i=n.n(a);i.a},"7f2e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"apps"},[n("el-collapse",{attrs:{accordion:""},on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[n("el-collapse-item",{attrs:{title:"1. 混合开发下，app内嵌 H5 如何调试",name:"1"}},[n("div",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.content1))])]),n("el-collapse-item",{attrs:{title:"2. 动态绑定本地图片，src绑定的值，如果不生效，可以使用require引入",name:"2"}},[n("div",[e._v("require('图片路径')")])]),n("el-collapse-item",{attrs:{title:"3. 跟客户端的交互",name:"3"}},[n("div",[e._v("详情请查看客户端专栏")])]),n("el-collapse-item",{attrs:{title:"ELE - 4",name:"4"}},[n("div"),n("div")])],1)],1)},i=[],l={data:function(){return{activeNames:"",content1:"1. 打开手机开发者模式 设置 --\x3e 其他设置 --\x3e 开发者选项 --\x3e 打开并选择USB调试(如果之前并未打开过开发者模式，则顺序为 设置 --\x3e 关于手机 --\x3e 连续点击版本号 --\x3e 其他设置 --\x3e 开发者选项 --\x3e 打开并选择USB调试\n      2. 将手机用USB与电脑相连\n      3. Chrome浏览器输入chrome://inspect\n      4. 打开App中要调试的WebView网页\n      5. 点击 inspect即可在网页中看到在app中打开的内容\n      注意：这种调试方式需要注意一下几点：\n      1. 需要客户端同学打包一个专门用于调试的app供前端使用\n      2. 调试过程中需要手机连接外网(fq)\n      3. 目前只知道安卓可以这样使用，苹果是否能以此方式使用暂时不清楚"}},methods:{handleChange:function(e){console.log(e)}}},s=l,c=(n("146e"),n("2877")),o=Object(c["a"])(s,a,i,!1,null,null,null);t["default"]=o.exports},"9eb9":function(e,t,n){}}]);