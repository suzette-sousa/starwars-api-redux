(this["webpackJsonpstarwars-api-redux"]=this["webpackJsonpstarwars-api-redux"]||[]).push([[0],{28:function(e,t,a){e.exports={list:"Results_list__21fEm",listLink:"Results_listLink__3NYRO"}},48:function(e,t,a){},5:function(e,t,a){e.exports={ctr:"Details_ctr__1NYKt",content:"Details_content__6yc8J",info:"Details_info__frNqM",title:"Details_title__2acHd",close:"Details_close__2kZYv"}},71:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(19),r=a.n(s),i=a(14),l=a(37),o=a(38),j=a(10),h="GET_QUERYDATA",u={loading:!0},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(j.a)(Object(j.a)({},e),{},{queryData:t.payload,loading:!1});default:return e}},p=Object(i.combineReducers)({queryData:d}),b=[l.a],O=Object(i.createStore)(p,{},Object(o.composeWithDevTools)(i.applyMiddleware.apply(void 0,b))),m=a(18),x=(a(48),a(15)),_=a(3),f=a(22),g=a(12),N=a(25),v=a.n(N),S=a(39),y=a(40),D=a.n(y),C=a(5),w=a.n(C),F=a(1),k=function(e){var t=e.location.state.results,a=Object(_.f)();return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:w.a.ctr,onClick:function(){return a.push("/")},children:[Object(F.jsxs)("span",{className:w.a.close,children:["X",Object(F.jsx)("span",{hidden:!0,children:"Close"})]}),Object(F.jsxs)("div",{className:w.a.content,children:[t.climate&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Climat :"}),Object(F.jsx)("p",{className:w.a.info,children:t.climate})]}),t.diameter&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Diam\xe8tre :"}),Object(F.jsx)("p",{className:w.a.info,children:t.diameter})]}),t.population&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Population : "}),Object(F.jsx)("p",{className:w.a.info,children:t.population})]}),t.gender&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Genre :"}),Object(F.jsx)("p",{className:w.a.info,children:t.gender})]}),t.hair_color&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:w.a.title,children:"Couleur de cheveux :"}),Object(F.jsx)("p",{className:w.a.info,children:t.hair_color})]})]})]})})},P=a(28),q=a.n(P),L=function(e){var t=e.queryData.queryData,a=e.queryData.loading,c=Object(j.a)({},t).results;return Object(F.jsxs)(F.Fragment,{children:[a&&Object(F.jsx)("p",{children:"Chargement..."}),Object(F.jsx)("section",{className:q.a.list,children:!a&&c.map((function(e,t){return Object(F.jsx)("div",{children:Object(F.jsx)(x.b,{to:{pathname:"/test/".concat(e.name),state:{results:e}},className:q.a.listLink,children:e.name},e.id)},t)}))})]})},R=a(9),E=a.n(R),I=Object(m.b)((function(e){return{queryData:e.queryData,newData:e.newData}}))((function(e){var t=Object(c.useState)(""),a=Object(g.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)("planets"),i=Object(g.a)(r,2),l=i[0],o=i[1],u=Object(c.useState)(!0),d=Object(g.a)(u,2),p=d[0],b=d[1],O=Object(c.useState)(1),x=Object(g.a)(O,2),_=x[0],N=x[1],y=Object(c.useState)(!0),C=Object(g.a)(y,2),w=C[0],k=C[1],P=Object(m.c)();Object(c.useEffect)((function(){P(function(e,t,a){return function(){var c=Object(S.a)(v.a.mark((function c(n){var s;return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:s="https://swapi.dev/api/"+e,D.a.get(s,{params:{search:t,page:a}}).then((function(e){n({type:h,payload:{results:e.data.results.sort((function(e,t){return e.name>t.name?1:-1})),count:e.data.count,next:e.data.next,previous:e.data.previous}})})).catch((function(e){n({type:"QUERYDATA_ERROR",payload:console.log(e)})}));case 2:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(l,n,_))}),[P,l,n,_]);var q=e.queryData.queryData,R=(e.queryData.loading,Object(j.a)({},q).results),I=Object(j.a)({},q).count,A=Object(j.a)({},q).next,T=Object(j.a)({},q).previous,Y=Object(c.useState)([]),J=Object(g.a)(Y,2),M=J[0],Q=J[1],B=function(e){"chooseSearch-planets"===e.target.id&&o("planets"),"chooseSearch-people"===e.target.id&&o("people"),b(!p),e.target.checked&&(e.target.checked=p)};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("section",{children:[Object(F.jsx)("h1",{className:E.a.titleh1,children:"Starwars"}),Object(F.jsx)("h2",{className:E.a.titleh2,children:"Rechercher dans la base"}),Object(F.jsxs)("form",{id:"searchForm",className:E.a.form,children:[Object(F.jsxs)("div",{className:E.a.radioCtr,children:[Object(F.jsx)("input",{id:"chooseSearch-planets",type:"radio",name:"chooseSearch",checked:p,className:E.a.radioInput,onChange:B}),Object(F.jsx)("label",{htmlFor:"chooseSearch-planets",className:E.a.radioLabel,children:"Plan\xe8te"}),Object(F.jsx)("input",{id:"chooseSearch-people",type:"radio",name:"chooseSearch",className:E.a.radioInput,onChange:B}),Object(F.jsx)("label",{htmlFor:"chooseSearch-people",className:E.a.radioLabel,children:"Personnage"})]}),Object(F.jsx)("input",{type:"search",name:"searchValue",value:n,placeholder:"Saisir le nom ".concat("planets"===l?"d'une plan\xe8te":"d'un personnage"),autoComplete:"off",className:E.a.inputSearch,onChange:function(e){""!==e.target.value.trim&&N(1),s(e.target.value),k(!1)}})]})]}),!w&&I+(I<=1?" r\xe9sultat":" r\xe9sultats"),Object(F.jsx)(L,Object(j.a)(Object(j.a)({},e),{},{newData:M})),Object(F.jsxs)("div",{className:E.a.inputPrevNext,children:[T&&Object(F.jsx)("button",{onClick:function(){N(_-1)},className:E.a.inputPrev,children:"Page pr\xe9c\xe9dente"}),A&&Object(F.jsx)("button",{onClick:function(){N(_+1);var e=new Set([].concat(Object(f.a)(M),Object(f.a)(R))),t=Object(f.a)(e);Q(t)},className:E.a.inputNext,children:"Page suivante"})]})]})})),A=function(){return Object(F.jsxs)("div",{className:"App",children:["test",Object(F.jsx)(x.a,{basename:"/starwars-api-redux",children:Object(F.jsx)("main",{className:"ctn",children:Object(F.jsxs)(_.c,{children:[Object(F.jsx)(_.a,{exact:!0,path:"/",component:I}),Object(F.jsx)(_.a,{path:"/search",component:I}),Object(F.jsx)(_.a,{path:"/test/:name",component:k})]})})})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(m.a,{store:O,children:Object(F.jsx)(A,{})})}),document.getElementById("root")),T()},9:function(e,t,a){e.exports={titleh1:"Search_titleh1__oQ1rd",form:"Search_form__1ch7D",radioCtr:"Search_radioCtr__1-nK2",radioInput:"Search_radioInput__1yDbm",radioLabel:"Search_radioLabel__2ILWf",inputSearch:"Search_inputSearch__1p-1b",inputPrevNext:"Search_inputPrevNext__5V7AE",inputNext:"Search_inputNext__2o1E-",inputPrev:"Search_inputPrev__23gsZ"}}},[[71,1,2]]]);
//# sourceMappingURL=main.726517e3.chunk.js.map