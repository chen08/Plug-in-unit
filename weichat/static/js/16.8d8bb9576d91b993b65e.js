webpackJsonp([16],{149:function(t,i,a){var c=a(150);"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);a(94)("619aafd9",c,!0)},150:function(t,i,a){i=t.exports=a(93)(),i.push([t.i,".official-account{padding-bottom:20px}.official-account .weui-cell_access:active{background-color:hsla(0,0%,69%,.53)}","",{version:3,sources:["/./src/components/contact/official-accounts.vue"],names:[],mappings:"AACA,kBACI,mBAAqB,CACxB,AACD,2CACI,mCAA2C,CAC9C",file:"official-accounts.vue",sourcesContent:["\n.official-account {\n    padding-bottom: 20px;\n}\n.official-account .weui-cell_access:active {\n    background-color: rgba(177, 177, 177, 0.53)\n}\n"],sourceRoot:"webpack://"}])},151:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var c=a(17),s=a.n(c);i.default={components:{search:s.a},data:function(){return{pageName:""}},computed:{initialList:function(){for(var t=[],i=this.$store.state.OfficialAccounts,a=i.length,c=0;c<a;c++)-1==t.indexOf(i[c].initial)&&t.push(i[c].initial);return t.sort()},OfficialAccountsList:function(){for(var t={},i=this.$store.state.OfficialAccounts,a=i.length,c=0;c<this.initialList.length;c++){var s=this.initialList[c];t[s]=[];for(var e=0;e<a;e++)i[e].initial===s&&t[s].push(i[e])}return t}}}},152:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"official-account",class:{"search-open-contact":!t.$store.state.headerStatus}},[a("header",{attrs:{id:"wx-header"}},[a("div",{staticClass:"center"},[a("router-link",{staticClass:"iconfont icon-return-arrow",attrs:{to:"/contact",tag:"div"}},[a("span",[t._v("通讯录")])]),t._v(" "),a("span",[t._v("公众号")])],1)]),t._v(" "),a("search"),t._v(" "),t._l(t.OfficialAccountsList,function(i,c){return[a("div",{staticClass:"weui-cells__title"},[t._v(t._s(c))]),t._v(" "),a("div",{staticClass:"weui-cells"},t._l(i,function(i){return a("div",{staticClass:"weui-cell weui-cell_access"},[a("div",{staticClass:"weui-cell__hd"},[a("img",{staticClass:"home__mini-avatar___1nSrW",attrs:{src:i.headerUrl}})]),t._v(" "),a("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(i.name)+"\n                    ")])])}))]})],2)},staticRenderFns:[]}},240:function(t,i,a){a(149);var c=a(1)(a(151),a(152),null,null);t.exports=c.exports}});
//# sourceMappingURL=16.8d8bb9576d91b993b65e.js.map