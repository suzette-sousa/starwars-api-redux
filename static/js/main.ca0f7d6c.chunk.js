(this["webpackJsonpstarwars-api-redux"]=this["webpackJsonpstarwars-api-redux"]||[]).push([[0],{28:function(e,t,a){e.exports={list:"Results_list__21fEm",listLink:"Results_listLink__3NYRO"}},48:function(e,t,a){},5:function(e,t,a){e.exports={ctr:"Details_ctr__1NYKt",content:"Details_content__6yc8J",info:"Details_info__frNqM",title:"Details_title__2acHd",close:"Details_close__2kZYv"}},71:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(18),r=a.n(s),i=a(14),l=a(37),o=a(38),j=a(10),u="GET_QUERYDATA",h={loading:!0},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),{},{queryData:t.payload,loading:!1});default:return e}},b=Object(i.combineReducers)({queryData:d}),p=[l.a],O=Object(i.createStore)(b,{},Object(o.composeWithDevTools)(i.applyMiddleware.apply(void 0,p))),m=a(17),x=(a(48),a(22)),f=a(12),_=a(25),g=a.n(_),v=a(39),N=a(40),S=a.n(N),D=a(21),y=a(3),C=a(5),w=a.n(C),F=a(1),k=function(e){e=e.detail;var t=Object(y.e)();return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:w.a.ctr,onClick:function(){return t.push("/")},children:[Object(F.jsxs)("span",{className:w.a.close,children:["X",Object(F.jsx)("span",{hidden:!0,children:"Close"})]}),Object(F.jsxs)("div",{className:w.a.content,children:[e.climate&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Climat :"}),Object(F.jsx)("p",{className:w.a.info,children:e.climate})]}),e.diameter&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Diam\xe8tre :"}),Object(F.jsx)("p",{className:w.a.info,children:e.diameter})]}),e.population&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Population : "}),Object(F.jsx)("p",{className:w.a.info,children:e.population})]}),e.gender&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Genre :"}),Object(F.jsx)("p",{className:w.a.info,children:e.gender})]}),e.hair_color&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Couleur de cheveux :"}),Object(F.jsx)("p",{className:w.a.info,children:e.hair_color})]})]})]})})},P=a(28),q=a.n(P),E=function(e){var t=e.queryData.queryData,a=e.queryData.loading,c=Object(j.a)({},t).results;e.newData;return Object(F.jsxs)(F.Fragment,{children:[a&&Object(F.jsx)("p",{children:"Chargement..."}),Object(F.jsx)("section",{className:q.a.list,children:!a&&c.map((function(e,t){return Object(F.jsx)("div",{children:Object(F.jsxs)(D.a,{children:[Object(F.jsx)(D.b,{to:e.name.replace(/ /g,""),className:q.a.listLink,children:e.name}),Object(F.jsx)(y.a,{path:"/:id",render:function(){return Object(F.jsx)(k,{detail:e})}})]})},t)}))})]})},L=a(9),R=a.n(L),I=Object(m.b)((function(e){return{queryData:e.queryData,newData:e.newData}}))((function(e){var t=Object(c.useState)(""),a=Object(f.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)("planets"),i=Object(f.a)(r,2),l=i[0],o=i[1],h=Object(c.useState)(!0),d=Object(f.a)(h,2),b=d[0],p=d[1],O=Object(c.useState)(1),_=Object(f.a)(O,2),N=_[0],D=_[1],y=Object(c.useState)(!0),C=Object(f.a)(y,2),w=C[0],k=C[1],P=Object(m.c)();Object(c.useEffect)((function(){P(function(e,t,a){return function(){var c=Object(v.a)(g.a.mark((function c(n){var s;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:s="https://swapi.dev/api/"+e,S.a.get(s,{params:{search:t,page:a}}).then((function(e){n({type:u,payload:{results:e.data.results.sort((function(e,t){return e.name>t.name?1:-1})),count:e.data.count,next:e.data.next,previous:e.data.previous}})})).catch((function(e){n({type:"QUERYDATA_ERROR",payload:console.log(e)})}));case 2:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(l,n,N))}),[P,l,n,N]);var q=e.queryData.queryData,L=(e.queryData.loading,Object(j.a)({},q).results),I=Object(j.a)({},q).count,A=Object(j.a)({},q).next,T=Object(j.a)({},q).previous,Y=Object(c.useState)([]),J=Object(f.a)(Y,2),M=J[0],Q=J[1],B=function(e){"chooseSearch-planets"===e.target.id&&o("planets"),"chooseSearch-people"===e.target.id&&o("people"),p(!b),e.target.checked&&(e.target.checked=b)};Object(c.useEffect)((function(){console.log("testdatas",{newData:M,results:L})}),[M,L,N]);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("section",{children:[Object(F.jsx)("h1",{className:R.a.titleh1,children:"Starwars"}),Object(F.jsx)("h2",{className:R.a.titleh2,children:"Rechercher dans la base"}),Object(F.jsxs)("form",{id:"searchForm",className:R.a.form,children:[Object(F.jsxs)("div",{className:R.a.radioCtr,children:[Object(F.jsx)("input",{id:"chooseSearch-planets",type:"radio",name:"chooseSearch",checked:b,className:R.a.radioInput,onChange:B}),Object(F.jsx)("label",{htmlFor:"chooseSearch-planets",className:R.a.radioLabel,children:"Plan\xe8te"}),Object(F.jsx)("input",{id:"chooseSearch-people",type:"radio",name:"chooseSearch",className:R.a.radioInput,onChange:B}),Object(F.jsx)("label",{htmlFor:"chooseSearch-people",className:R.a.radioLabel,children:"Personnage"})]}),Object(F.jsx)("input",{type:"search",name:"searchValue",value:n,placeholder:"Saisir le nom ".concat("planets"===l?"d'une plan\xe8te":"d'un personnage"),autoComplete:"off",className:R.a.inputSearch,onChange:function(e){""!==e.target.value.trim&&D(1),s(e.target.value),k(!1)}})]})]}),!w&&I+(I<=1?" r\xe9sultat":" r\xe9sultats"),Object(F.jsx)(E,Object(j.a)(Object(j.a)({},e),{},{newData:M})),Object(F.jsxs)("div",{className:R.a.inputPrevNext,children:[T&&Object(F.jsx)("button",{onClick:function(){D(N-1)},className:R.a.inputPrev,children:"Page pr\xe9c\xe9dente"}),A&&Object(F.jsx)("button",{onClick:function(){D(N+1);var e=new Set([].concat(Object(x.a)(M),Object(x.a)(L))),t=Object(x.a)(e);Q(t)},className:R.a.inputNext,children:"Page suivante"})]})]})})),A=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(I,{})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(m.a,{store:O,children:Object(F.jsx)(A,{})})}),document.getElementById("root")),T()},9:function(e,t,a){e.exports={titleh1:"Search_titleh1__oQ1rd",form:"Search_form__1ch7D",radioCtr:"Search_radioCtr__1-nK2",radioInput:"Search_radioInput__1yDbm",radioLabel:"Search_radioLabel__2ILWf",inputSearch:"Search_inputSearch__1p-1b",inputPrevNext:"Search_inputPrevNext__5V7AE",inputNext:"Search_inputNext__2o1E-",inputPrev:"Search_inputPrev__23gsZ"}}},[[71,1,2]]]);
//# sourceMappingURL=main.ca0f7d6c.chunk.js.map