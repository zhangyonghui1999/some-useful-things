(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test1"],{"69ef":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABtUlEQVRoQ+2ZXU4CMRDH/xWe/biEJwDiu57AeA9tN8GYuBHZjZCQLF6EC8AFvIN3MJHnxTFFSZDQTXfb3VLTfd5O5zfzn+kXg+cf89x/BADXGQwZOOgMCPFyTmw1AuEKwHHDzi4Btmi36GEyid9VcysltHYeqzcAZw07vjvdR7uFCxWEEoBHyQyEa8fO/07PZtPs8WafL2oAkXw6kI0qXstpFp+UBaDtAdMsbrRjcZFozV+UAS0DdUksAOhG4N9m4E4kTxLuNYufq0DqBrCWGpDOM2AgHSdgUAXCGYAQyT0B4+2oV4FwBsB52gGjBYBTEwhjgCq63Yy5jYbdI2JzEwinABIkikbdL8orQzgHkBCcpz0wkhB/tgE6NXEQAGuIftpDXh7CGGDXgElNqMYWZcILgKJ1IgB4LyFbmndWxDYAvG6jXi9kvJ92kJvth6x3Id0zsdzMMUZz2rmO0Vl9t2XrDMD77bSMotcHmo0MvD5SWmnB4V5IMwI2or3PhrMuZAvIBoDnl7u+X697/8AhtfwDkY8BdungrcDsiclWMdZtp9FHizpgAkAdUS1jM2SgTLTq+PcbQLBzQFlf6foAAAAASUVORK5CYII="},9347:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAaVBMVEUAAAAvMjovMjo3OkIvMjovMjovMzowMzo0OEFBQUgwMzovMjovMjowMjsxMjsvMjswMzsvMzsvMzowMjoyNT4vMzovMjovMjsxND00NT8vMjsvMjovMjswMzsxMz0yNj0xNj4wMzsvMjprXxBvAAAAInRSTlMA8eEO9ddoSBQI7NHBljivVI6EcSnnyHkyGbipoYpBIx5fvEEN/AAAAXtJREFUSMe9VdeOgzAQdAMc00IPECDM/3/kBSwuXCLZey+ZBzftaPuafRmXa7X8R/4qABWRxW8JUISc10T5AsiXpxbEJPG+RWCNSdFRCAnSiz3JRj388iHuv+fVnt1o0b8uMfwq+NnTFZOXgPacPi68BBOcb7nfppifMyggfYQc+jjqFIRMlDhKqOI2gx5EKG3WEpiQESCR7PuIUTMSYrWti+VRkCLbLauohBnpc81QMCoaY1dNJRR7YCuk5AbFuG0BaiojUHpzmx6n0Bb1gCt1JoldRY3gQlZRWu87qoqGbyqk4T2RUWE6BgLVC2R2CNzsw+OuuNO+2To8o935nULQoHSXYGmLPK/1KtCsrBfOMEtrlGzxhJrkFmbFe7dRcnc8H8rHEe3RXYPD51TMPFP57SXD4CJo8dF1A24uRm3e4xJ5+jDj7wwjmI8R/q0AzjwMg+n8t/r7dgmQ9K+/tSRMwhy8kozVd/u3EhAaqFgA8cyI0F3MRR6xr+MHztoY/sUBfBsAAAAASUVORK5CYII="},"99a6":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"delete"},[s("div",{staticClass:"slider"},[s("div",{staticClass:"out-side"},[s("div",{staticClass:"content",style:t.deleteSlider,on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),s("div",{ref:"remove",staticClass:"remove",on:{click:t.deleteInfo}},[t._v(" 删除 ")])])]),s("div",{staticClass:"images-select"},[s("div",{staticClass:"fixed",on:{click:function(e){return t.getShowList()}}},[s("img",{attrs:{src:t.fixedList,alt:""}}),s("span",[t._v(t._s(t.fixedName))])]),t.show?s("ul",{staticClass:"absolute"},t._l(t.list,(function(e){return s("li",{key:e.id,on:{click:function(s){return t.getActually(e)}}},[s("img",{attrs:{src:e.icon,alt:""}}),s("span",[t._v(t._s(e.name))])])})),0):t._e()])])},o=[],n=(s("b0c0"),{data:function(){return{fixedList:"",fixedName:"",show:!1,list:[{icon:s("69ef"),id:1,name:"logout"},{icon:s("9347"),id:2,name:"phone"}],startX:0,endX:0,moveX:0,disX:0,deleteSlider:""}},methods:{getShowList:function(){this.show?this.show=!1:this.show=!0},getActually:function(t){this.fixedList=t.icon,this.fixedName=t.name,this.show&&(this.show=!1)},touchStart:function(t){t=t||event,1===t.touches.length&&(this.startX=t.touches[0].clientX)},touchMove:function(t){t=t||event;var e=this.$refs.remove.offsetWidth;1===t.touches.length&&(this.moveX=t.touches[0].clientX,this.disX=this.startX-this.moveX,console.log(this.disX),this.disX<0||0===this.disX?this.deleteSlider="transform:translateX(0px)":this.disX>0&&(this.deleteSlider="transform:translateX(-"+5*this.disX+"px)",5*this.disX>=e&&(this.deleteSlider="transform:translateX(-"+e+"px)")))},deleteInfo:function(){console.log("1111111111")},touchEnd:function(t){t=t||event;var e=this.$refs.remove.offsetWidth;if(1===t.changedTouches.length){var s=t.changedTouches[0].clientX;this.disX=this.startX-s,console.log(this.disX),5*this.disX<e/2?this.deleteSlider="transform:translateX(0px)":this.deleteSlider="transform:translateX(-"+e+"px)"}}}}),c=n,a=(s("99c1"),s("2877")),A=Object(a["a"])(c,i,o,!1,null,null,null);e["default"]=A.exports},"99c1":function(t,e,s){"use strict";var i=s("e5a4"),o=s.n(i);o.a},b0c0:function(t,e,s){var i=s("83ab"),o=s("9bf2").f,n=Function.prototype,c=n.toString,a=/^\s*function ([^ (]*)/,A="name";i&&!(A in n)&&o(n,A,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},e5a4:function(t,e,s){}}]);
//# sourceMappingURL=test1.d710e5c9.js.map