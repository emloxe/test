(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-change-user-info"],{"8f90":function(t,e,i){"use strict";i.r(e);var n=i("d99a"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"945e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"padding-top":"1px"}},[i("v-uni-view",{staticClass:"form-wrap common-width"},[i("uni-view",{staticClass:"list uni-flex uni-row"},[i("uni-view",{staticClass:"text",staticStyle:{width:"130rpx"}},[t._v("性别")]),i("v-uni-view",{staticClass:"uni-input-wrapper",staticStyle:{flex:"1 1 0%"}},[i("v-uni-radio-group",{staticStyle:{height:"60rpx","line-height":"60rpx"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChangeHandler.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"0",checked:0==t.sex}}),t._v("男")],1),i("v-uni-label",{staticClass:"radio"},[i("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"1",checked:1==t.sex}}),t._v("女")],1)],1)],1)],1),i("uni-view",{staticClass:"list uni-flex uni-row"},[i("uni-view",{staticClass:"text",staticStyle:{width:"130rpx"}},[t._v("电话号码")]),i("v-uni-view",{staticClass:"uni-input-wrapper",staticStyle:{flex:"1 1 0%"}},[i("v-uni-input",{staticClass:"uni-input",attrs:{focus:!0,value:t.phonenumber,placeholder:"",placeholder:"请输入"}})],1)],1),i("uni-view",{staticClass:"list uni-flex uni-row"},[i("uni-view",{staticClass:"text",staticStyle:{width:"130rpx"}},[t._v("电子邮箱")]),i("v-uni-view",{staticClass:"uni-input-wrapper",staticStyle:{flex:"1 1 0%"}},[i("v-uni-input",{staticClass:"uni-input",attrs:{value:t.email,type:"text",placeholder:"请输入"}})],1)],1),i("uni-view",{staticClass:"list uni-flex uni-row"},[i("uni-view",{staticClass:"text",staticStyle:{width:"130rpx"}},[t._v("单位地址")]),i("v-uni-view",{staticClass:"uni-input-wrapper",staticStyle:{flex:"1 1 0%"}},[i("v-uni-input",{staticClass:"uni-input",attrs:{value:t.deptAddress,type:"text",placeholder:"请输入"}})],1)],1)],1),i("v-uni-button",{staticClass:"common-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitHandler.apply(void 0,arguments)}}},[t._v("提交")])],1)},s=[]},cbd8:function(t,e,i){"use strict";i.r(e);var n=i("945e"),a=i("8f90");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var u,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"5fcf316f",null,!1,n["a"],u);e["default"]=l.exports},d99a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{sex:0,phonenumber:"",email:"",deptAddress:""}},beforeMount:function(){var t=uni.getStorageSync("currentUser");console.log(t),this.sex=t.sex,this.userName=t.userName,this.phonenumber=t.phonenumber,this.email=t.email,this.deptAddress=t.dept.deptAddress},methods:{submitHandler:function(){uni.request({url:"https://www.example.com/request",method:"",data:{phoneNumber:phoneNumber,homeAddress:homeAddress,companyAddress:companyAddress},header:{"content-type":"application/json"},success:function(t){console.log(t.data)},fail:function(){}})},radioChangeHandler:function(t){console.log(t)}}};e.default=n}}]);