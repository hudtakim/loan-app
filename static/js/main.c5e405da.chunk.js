(this.webpackJsonpcrud_app=this.webpackJsonpcrud_app||[]).push([[0],{196:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(16),s=r.n(n),i=(r(93),r(18)),o=r(19),l=r(21),d=r(20),j=r(87),b=r(198),u=r(199),h=r(200),O=r(201),p=r(202),m=r(203),x=r(204),f=r(205),g=r(206),v=r(10),y=r(2);var N=Object(v.b)((function(e){return{title:e.users.title}}),null)((function(e){var t=Object(a.useState)(!1),r=Object(j.a)(t,2),c=r[0],n=r[1];return Object(y.jsx)(b.a,{color:"light",light:!0,expand:"md",children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(h.a,{href:"/",children:e.title}),Object(y.jsx)(O.a,{onClick:function(){return n(!c)}}),Object(y.jsxs)(p.a,{isOpen:c,navbar:!0,children:[Object(y.jsxs)(m.a,{className:"mr-auto",navbar:!0,children:[Object(y.jsx)(x.a,{children:Object(y.jsx)(f.a,{href:"/",children:"Home"})}),Object(y.jsx)(x.a,{children:Object(y.jsx)(f.a,{href:"https://github.com/hudtakim/loan-app",target:"_blank",children:"GitHub"})})]}),Object(y.jsx)(g.a,{children:"Login"})]})]})})})),U=r(207),D=r(208),_=r(22),S=r(23);var w=Object(v.b)((function(e){return{title:e.users.title}}),null)((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)(U.a,{children:Object(y.jsxs)(u.a,{children:[Object(y.jsxs)("h1",{className:"display-3",children:["Welcome to ",e.title," WEB!!!"]}),Object(y.jsx)("p",{className:"lead",children:"This is my first React App"}),Object(y.jsx)("hr",{className:"my-2"}),Object(y.jsx)("p",{children:"Website yang menampilkan daftar teman yang memiliki hutang kepada HDM-Vision."}),Object(y.jsx)("p",{className:"lead",children:Object(y.jsxs)(D.a,{color:"primary",children:[Object(y.jsx)(_.a,{icon:S.c})," Learn More"]})})]})})})})),k=r(25),E=r(11),M=r(8),L=r(83),A=r.n(L),C=r(209),T=r(210),V=r(211),F=r(52),I=r.n(F),R=r(84),P=r.n(R),H=r(30),W=r.n(H),B=r(27),X=r.n(B),G="GET_USERS_LIST",q="GET_USER_DETAIL",J="POST_USER_CREATE",z="PUT_USER_EDIT",K=function(e){return function(t){W.a.get("http://localhost:3001/api/get/"+e).then((function(e){t({type:q,payload:{data:e.data,errorMessage:!1}})})).catch((function(e){t({type:G,payload:{data:!1,errorMessage:e.message}})}))}},Q=function(e){W.a.put("http://localhost:3001/api/edit",{id:e.id,name:e.name,address:e.address,age:e.age,no_hp:e.no_hp}).then((function(t){return X.a.fire("User Updated!","Name: "+e.name+", Age: "+e.age,"success").then((function(e){e.value&&window.location.replace("http://localhost:3000/")})),function(e){e({type:z,payload:{data:t.data,errorMessage:!1}})}})).catch((function(e){return X.a.fire({icon:"error",title:"Update User Failed!",text:e,footer:'<a href="https://f4.bcbits.com/img/a0257396577_10.jpg">Why do I have this issue?</a>'}),function(t){t({type:z,payload:{data:!1,errorMessage:e.message}})}}))},Y=F.Search.SearchBar,Z=function(e,t){e(function(e){return function(t){W.a.delete("http://localhost:3001/api/delete/"+e).then((function(e){X.a.fire("User Deleted!","success").then((function(e){e.value&&window.location.reload()}))})).catch((function(e){X.a.fire({icon:"error",title:"Delete User Failed!",text:e,footer:'<a href="https://f4.bcbits.com/img/a0257396577_10.jpg">Why do I have this issue?</a>'})}))}}(t))},$=[{dataField:"id",order:"asc"}];var ee=Object(v.b)((function(e){return{getUsersList:e.users.getUsersList,errorUsersList:e.users.errorUsersList}}),null)((function(e){var t=[{dataField:"id",text:"ID",sort:!0,headerStyle:function(){return{width:"5%"}}},{dataField:"name",text:"Name",sort:!0},{dataField:"address",text:"Address",sort:!0},{dataField:"action",text:"Action",formatter:function(t,r){return Object(y.jsxs)("div",{children:[Object(y.jsx)(k.b,{to:"detail/"+r.id,children:Object(y.jsxs)(D.a,{color:"primary",className:"btn btn-sm mr-2",children:[Object(y.jsx)(_.a,{icon:S.c})," Detail"]})}),Object(y.jsx)(k.b,{to:"edit/"+r.id,children:Object(y.jsxs)(D.a,{color:"success",className:"btn btn-sm mr-2",children:[Object(y.jsx)(_.a,{icon:S.b})," Edit"]})}),Object(y.jsxs)(D.a,{color:"danger",className:"btn btn-sm mr-2",onClick:function(){return Z(e.dispatch,r.id)},children:[Object(y.jsx)(_.a,{icon:S.d})," Delete"]})]})}}];return Object(y.jsx)(u.a,{children:e.getUsersList?Object(y.jsx)(I.a,{bootstrap4:!0,keyField:"id",data:e.getUsersList,columns:t,defaultSorted:$,search:!0,children:function(e){return Object(y.jsxs)("div",{children:[Object(y.jsxs)(C.a,{children:[Object(y.jsx)(T.a,{children:Object(y.jsx)(k.b,{to:"create",children:Object(y.jsxs)(D.a,{color:"primary",className:"btn btn-sm",children:[Object(y.jsx)(_.a,{icon:S.e})," Create User"]})})}),Object(y.jsx)(T.a,{children:Object(y.jsx)("div",{className:"float-right",children:Object(y.jsx)(Y,Object(M.a)(Object(M.a)({},e.searchProps),{},{placeholder:"Search ..."}))})})]}),Object(y.jsx)(A.a,Object(M.a)(Object(M.a)({},e.baseProps),{},{pagination:P()()}))]})}}):Object(y.jsx)("div",{className:"text-center",children:e.errorUsersList?Object(y.jsx)("h1",{children:e.errorUsersList}):Object(y.jsx)(V.a,{color:"dark"})})})})),te=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){e({type:q,payload:{data:!1,errorMessage:!1}})})),this.props.dispatch((function(e){e({type:q,payload:{data:!1,errorMessage:!1}}),e({type:J,payload:{data:!1,errorMessage:!1}})})),this.props.dispatch((function(e){W.a.get("http://localhost:3001/api/get").then((function(t){e({type:G,payload:{data:t.data,errorMessage:!1}})})).catch((function(t){e({type:G,payload:{data:!1,errorMessage:t.message}})}))}))}},{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsx)(ee,{})})}}]),r}(a.Component),re=Object(v.b)()(te),ae=function(){return Object(y.jsx)(C.a,{children:Object(y.jsx)(T.a,{children:Object(y.jsx)(k.b,{to:"/",children:Object(y.jsxs)(D.a,{color:"primary",className:"btn btn-sm mb-3",children:[Object(y.jsx)(_.a,{icon:S.a})," Back"]})})})})},ce=r(17),ne=function(e){return e?void 0:"Required"},se=function(e){return isNaN(e)?"Must be a number":void 0},ie=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce((function(t,r){return t||r(e)}),void 0)}};var oe=Object(v.b)((function(e){return{initialValues:{id:e.users.getUserDetail.id,name:e.users.getUserDetail.name,address:e.users.getUserDetail.address,age:e.users.getUserDetail.age,no_hp:e.users.getUserDetail.no_hp}}}),null)((function(e){return Object(y.jsx)(ce.b,{onSubmit:function(t){t.id=e.initialValues.id,e.submitHandler(t)},children:function(t){var r,a=t.handleSubmit;return Object(y.jsxs)("form",{onSubmit:a,className:"mb-5",children:[Object(y.jsxs)("div",{className:"row mt-4",children:[Object(y.jsx)(ce.a,{name:"name",validate:ne,initialValue:e.initialValues.name,children:function(e){var t=e.input,r=e.meta;return Object(y.jsxs)("div",{className:"col",children:[Object(y.jsx)("input",Object(M.a)(Object(M.a)({},t),{},{type:"text",placeholder:"Name",className:"form-control"})),r.error&&r.touched&&Object(y.jsx)("span",{className:"text-danger",children:r.error})]})}}),Object(y.jsx)(ce.a,{name:"address",validate:ne,initialValue:e.initialValues.address,children:function(e){var t=e.input,r=e.meta;return Object(y.jsxs)("div",{className:"col",children:[Object(y.jsx)("input",Object(M.a)(Object(M.a)({},t),{},{type:"text",placeholder:"Address",className:"form-control"})),r.error&&r.touched&&Object(y.jsx)("span",{className:"text-danger",children:r.error})]})}})]}),Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)(ce.a,{name:"age",validate:ie(ne,se,(r=18,function(e){return isNaN(e)||e>=r?void 0:"Should be greater than ".concat(r)})),initialValue:e.initialValues.age,children:function(e){var t=e.input,r=e.meta;return Object(y.jsxs)("div",{className:"col",children:[Object(y.jsx)("input",Object(M.a)(Object(M.a)({},t),{},{type:"text",placeholder:"Age",className:"form-control"})),r.error&&r.touched&&Object(y.jsx)("span",{className:"text-danger",children:r.error})]})}}),Object(y.jsx)(ce.a,{name:"no_hp",validate:ie(ne,se),initialValue:e.initialValues.no_hp,children:function(e){var t=e.input,r=e.meta;return Object(y.jsxs)("div",{className:"col",children:[Object(y.jsx)("input",Object(M.a)(Object(M.a)({},t),{},{type:"text",placeholder:"Phone Number",className:"form-control"})),r.error&&r.touched&&Object(y.jsx)("span",{className:"text-danger",children:r.error})]})}})]}),Object(y.jsx)("button",{className:"btn btn-primary btn-block mt-4",type:"submit",children:"Submit"})]})}})})),le=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.dispatch(K(this.props.match.params.id))}},{key:"render",value:function(){return Object(y.jsxs)(u.a,{children:[Object(y.jsx)(ae,{}),Object(y.jsx)("h1",{children:"Edit User"}),Object(y.jsx)(oe,{submitHandler:Q})]})}}]),r}(a.Component),de=Object(v.b)()(le),je=r(212);var be=Object(v.b)((function(e){return{getUserDetail:e.users.getUserDetail,errorUserDetail:e.users.errorUserDetail}}),null)((function(e){return Object(y.jsx)(je.a,{striped:!0,className:"mb-5",children:e.getUserDetail?Object(y.jsxs)("tbody",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{width:"200",children:"Name"}),Object(y.jsx)("td",{width:"10",children:":"}),Object(y.jsx)("td",{children:e.getUserDetail.name})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{width:"200",children:"Address"}),Object(y.jsx)("td",{width:"10",children:":"}),Object(y.jsx)("td",{children:e.getUserDetail.address})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{width:"200",children:"Age"}),Object(y.jsx)("td",{width:"10",children:":"}),Object(y.jsx)("td",{children:e.getUserDetail.age})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{width:"200",children:"Phone Number"}),Object(y.jsx)("td",{width:"10",children:":"}),Object(y.jsx)("td",{children:e.getUserDetail.no_hp})]})]}):Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(V.a,{color:"dark"})})})})),ue=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.dispatch(K(this.props.match.params.id))}},{key:"render",value:function(){return Object(y.jsxs)(u.a,{children:[Object(y.jsx)(ae,{}),Object(y.jsx)("h1",{children:"Detail User"}),Object(y.jsx)(be,{})]})}}]),r}(a.Component),he=Object(v.b)()(ue),Oe=function(e){return e?void 0:"Required"},pe=function(e){return isNaN(e)?"Must be a number":void 0},me=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce((function(t,r){return t||r(e)}),void 0)}};var xe=Object(v.b)((function(e){return{getUserDetail:e.users.getUserDetail,errorUserDetail:e.users.errorUserDetail}}),null)((function(e){return Object(y.jsx)(ce.b,{onSubmit:e.submitHandler,children:function(t){var r,a=t.handleSubmit;return Object(y.jsxs)("form",{onSubmit:a,className:"mb-5",children:[Object(y.jsxs)("div",{className:"row mt-4",children:[Object(y.jsx)(ce.a,{name:"name",validate:Oe,children:function(t){var r=t.input,a=t.meta;return Object(y.jsxs)("div",{className:"col",children:[Object(y.jsx)("input",Object(M.a)(Object(M.a)({},r),{},{type:"text",placeholder:"Name",className:"form-control",value:e.name})),a.error&&a.touched&&Object(y.jsx)("span",{className:"text-danger",children:a.error})]})}}),Object(y.jsx)(ce.a,{name:"address",validate:Oe,children:function(e){var t=e.input,r=e.meta;return Object(y.jsxs)("div",{className:"col",children:[Object(y.jsx)("input",Object(M.a)(Object(M.a)({},t),{},{type:"text",placeholder:"Address",className:"form-control"})),r.error&&r.touched&&Object(y.jsx)("span",{className:"text-danger",children:r.error})]})}})]}),Object(y.jsxs)("div",{className:"row mt-3",children:[Object(y.jsx)(ce.a,{name:"age",validate:me(Oe,pe,(r=18,function(e){return isNaN(e)||e>=r?void 0:"Should be greater than ".concat(r)})),children:function(e){var t=e.input,r=e.meta;return Object(y.jsxs)("div",{className:"col",children:[Object(y.jsx)("input",Object(M.a)(Object(M.a)({},t),{},{type:"text",placeholder:"Age",className:"form-control"})),r.error&&r.touched&&Object(y.jsx)("span",{className:"text-danger",children:r.error})]})}}),Object(y.jsx)(ce.a,{name:"no_hp",validate:me(Oe,pe),children:function(e){var t=e.input,r=e.meta;return Object(y.jsxs)("div",{className:"col",children:[Object(y.jsx)("input",Object(M.a)(Object(M.a)({},t),{},{type:"text",placeholder:"Phone Number",className:"form-control"})),r.error&&r.touched&&Object(y.jsx)("span",{className:"text-danger",children:r.error})]})}})]}),Object(y.jsx)("button",{className:"btn btn-primary btn-block mt-4",type:"submit",children:"Submit"})]})}})})),fe=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(y.jsxs)(u.a,{children:[Object(y.jsx)(ae,{}),Object(y.jsx)("h1",{children:"Create User"}),Object(y.jsx)(xe,{submitHandler:function(e){return t=e,void W.a.post("http://localhost:3001/api/insert",{name:t.name,address:t.address,age:t.age,no_hp:t.no_hp}).then((function(e){return X.a.fire("User Created!","Name: "+t.name+", Age: "+t.age,"success").then((function(e){e.value&&window.location.replace("http://localhost:3000/")})),function(t){t({type:J,payload:{data:e.data,errorMessage:!1}})}})).catch((function(e){return X.a.fire({icon:"error",title:"Create User Failed!",text:e,footer:'<a href="https://f4.bcbits.com/img/a0257396577_10.jpg">Why do I have this issue?</a>'}),function(t){t({type:J,payload:{data:!1,errorMessage:e.message}})}}));var t}})]})}}]),r}(a.Component),ge=Object(v.b)()(fe),ve=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(N,{}),Object(y.jsx)(w,{}),Object(y.jsxs)(k.a,{children:[Object(y.jsx)(E.a,{path:"/",exact:!0,component:re}),Object(y.jsx)(E.a,{path:"/create",exact:!0,component:ge}),Object(y.jsx)(E.a,{path:"/edit/:id",exact:!0,component:de}),Object(y.jsx)(E.a,{path:"/detail/:id",exact:!0,component:he})]})]})}}]),r}(a.Component),ye=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,213)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),a(e),c(e),n(e),s(e)}))},Ne=(r(193),r(194),r(195),r(29)),Ue={title:"HDM-Vision",getUsersList:!1,errorUsersList:!1,getUserDetail:!1,errorUserDetail:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(M.a)(Object(M.a)({},e),{},{getUsersList:t.payload.data,errorUsersList:t.payload.errorMessage});case q:return Object(M.a)(Object(M.a)({},e),{},{getUserDetail:t.payload.data,errorUserDetail:t.payload.errorMessage});default:return e}},_e=Object(Ne.b)({users:De}),Se=r(86),we=Object(Ne.d)(_e,Object(Ne.c)(Object(Ne.a)(Se.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(v.a,{store:we,children:Object(y.jsx)(ve,{})})}),document.getElementById("root")),ye()},93:function(e,t,r){}},[[196,1,2]]]);
//# sourceMappingURL=main.c5e405da.chunk.js.map