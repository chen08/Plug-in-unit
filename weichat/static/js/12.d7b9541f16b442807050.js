webpackJsonp([12],{153:function(e,t,s){var r=s(154);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s(94)("743c23da",r,!0)},154:function(e,t,s){t=e.exports=s(93)(),t.push([e.i,".header-box{position:relative;float:left;width:38px;height:38px;margin-right:10px}.header-box .header{height:100%;display:-ms-flexbox;display:flex;display:-webkit-flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start;overflow:hidden;background:#dddbdb}.header-box .header img{width:10%;height:auto;-ms-flex-positive:2;flex-grow:2;border:0}.multi-header img{margin:1px}","",{version:3,sources:["/./src/components/contact/group-list.vue"],names:[],mappings:"AACA,YACI,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAmB,CACtB,AACD,oBACI,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,uBAAwB,AACpB,mBAAoB,AACxB,mBAAoB,AAChB,eAAgB,AACpB,qBAAsB,AAClB,uBAAwB,AAC5B,gBAAiB,AACjB,kBAAoB,CACvB,AACD,wBACI,UAAW,AACX,YAAa,AACb,oBAAqB,AACjB,YAAa,AACjB,QAAU,CACb,AACD,kBACI,UAAY,CACf",file:"group-list.vue",sourcesContent:["\n.header-box {\n    position: relative;\n    float: left;\n    width: 38px;\n    height: 38px;\n    margin-right: 10px;\n}\n.header-box .header {\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    overflow: hidden;\n    background: #dddbdb;\n}\n.header-box .header img {\n    width: 10%;\n    height: auto;\n    -ms-flex-positive: 2;\n        flex-grow: 2;\n    border: 0;\n}\n.multi-header img {\n    margin: 1px;\n}\n"],sourceRoot:"webpack://"}])},155:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(17),a=s.n(r);t.default={components:{search:a.a},data:function(){return{}},computed:{groupList:function(){var e=[];for(var t in this.$store.state.msgList.baseMsg)"group"===this.$store.state.msgList.baseMsg[t].type&&e.push(this.$store.state.msgList.baseMsg[t]);return e}}}},156:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{"search-open-contact":!e.$store.state.headerStatus}},[s("header",{attrs:{id:"wx-header"}},[s("div",{staticClass:"center"},[s("router-link",{staticClass:"iconfont icon-return-arrow",attrs:{to:"/contact",tag:"div"}},[s("span",[e._v("通讯录")])]),e._v(" "),s("span",[e._v("群聊")])],1)]),e._v(" "),s("search"),e._v(" "),s("section",{staticClass:"weui-cells"},[e._l(e.groupList,function(t){return[s("a",{staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__hd header-box"},[s("div",{staticClass:"header multi-header"},e._l(t.user,function(e){return s("img",{attrs:{src:e.headerUrl}})}))]),e._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("p",[e._v(e._s(t.group_name))])])])]})],2)],1)},staticRenderFns:[]}},241:function(e,t,s){s(153);var r=s(1)(s(155),s(156),null,null);e.exports=r.exports}});
//# sourceMappingURL=12.d7b9541f16b442807050.js.map