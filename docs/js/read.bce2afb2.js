(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["read"],{"615b":function(t,e,a){},c844:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-flex",{attrs:{"text-sm-center":""}},[a("h1",[t._v("Board Read")]),a("v-card",{staticClass:"mx-auto ma-10 mx-10",attrs:{elevation:"0"}},[a("v-card-text",{staticClass:"px-10"},[a("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.listData.brdTitle)+" ")]),a("p",[t._v("작성자 : "+t._s(t.listData.brdWriter)+" | 조회수 : "+t._s(t.listData.brdHit)+" | 작성시간 : "+t._s(t.getDateAndTime(t.listData.brdRegDate))+" | 수정시간 : "+t._s(t.getDateAndTime(t.listData.brdEditDate)))]),a("div",{staticClass:"text--primary text-left",domProps:{innerHTML:t._s(t.brdContent)}})]),a("v-card-actions",{staticClass:"px-10"},[a("v-btn",{attrs:{depressed:"",router:"",to:{name:"list"},exact:""}},[t._v(" 목록 ")]),a("v-btn",{attrs:{depressed:"",color:"primary",router:"",to:{name:"update",params:{id:t.uniKey}},exact:""}},[t._v(" 수정 ")]),a("v-btn",{attrs:{depressed:"",color:"error"},on:{click:function(e){return t.del()}}},[t._v(" 삭제 ")])],1)],1)],1)],1)},r=[],i=(a("b0c0"),a("ac1f"),a("5319"),a("d301")),n={data:function(){return{uniKey:this.$route.params.id,listData:{},brdContent:null,increaseHit:!0}},beforeRouteEnter:function(t,e,a){"update"===e.name||null===e.name?a((function(t){t.increaseHit=!1})):a()},mounted:function(){var t=this;this.$firebase.database().ref().child(this.uniKey).on("value",(function(e){var a=e.val();t.listData=a,t.brdContent=t.listData.brdContent.replace(/(?:\r\n|\r|\n)/g,"<br />")})),!0===this.increaseHit&&this.$firebase.database().ref().child(this.uniKey).update({brdHit:this.listData.brdHit+1})},methods:{del:function(){this.$firebase.database().ref().child(this.uniKey).remove(),this.$router.push({name:"list"})}},mixins:[i["a"]]},o=n,c=a("2877"),d=a("6544"),l=a.n(d),u=a("8336"),h=(a("0481"),a("4069"),a("a9e3"),a("5530")),b=(a("615b"),a("10d2")),v=a("297c"),p=a("1c87"),m=a("58df"),f=Object(m["a"])(v["a"],p["a"],b["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(h["a"])(Object(h["a"])({"v-card":!0},p["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},b["a"].options.computed.classes.call(this))},styles:function(){var t=Object(h["a"])({},b["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=v["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}}),g=a("80d2"),_=Object(g["h"])("v-card__actions"),x=(Object(g["h"])("v-card__subtitle"),Object(g["h"])("v-card__text")),y=(Object(g["h"])("v-card__title"),a("0e8f")),C=a("a722"),D=Object(c["a"])(o,s,r,!1,null,null,null);e["default"]=D.exports;l()(D,{VBtn:u["a"],VCard:f,VCardActions:_,VCardText:x,VFlex:y["a"],VLayout:C["a"]})}}]);
//# sourceMappingURL=read.bce2afb2.js.map