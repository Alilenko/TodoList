(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{25:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=a(3),s=(a(25),a(1)),l=Object(i.b)((function(t){return{data:t.data}}))((function(t){var e=t.data,a=e.length,n=e.filter((function(t){return t.important})).length,r=e.filter((function(t){return t.urgent})).length,c=e.filter((function(t){return t.completed})).length;return Object(s.jsxs)("div",{className:"app-info",children:[Object(s.jsxs)("h2",{children:["\u041e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439: ",a]}),Object(s.jsxs)("h6",{children:["\u0412\u0430\u0436\u043d\u044b\u0435: ",n]}),Object(s.jsxs)("h6",{children:["\u0421\u0440\u043e\u0447\u043d\u044b\u0435: ",r]}),Object(s.jsxs)("h6",{children:["\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435: ",c]})]})})),u=a(5),d=a(6),b=a(8),j=a(7),f=(a(27),function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).onUpdateSearch=function(t){var e=t.target.value;n.setState({search:e}),n.props.searchPost(e)},n.state={search:""},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0437\u0430\u043f\u0438\u0441\u044c",value:this.state.search,onChange:this.onUpdateSearch})})}}]),a}(n.Component)),p={searchPost:function(t){return{type:"SEARCH_POST",payload:t}}},O=Object(i.b)((function(t){return{search:t.search}}),p)(f),h=(a(28),function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={buttonsArr:[{name:"all",label:"\u0412\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u0438"},{name:"important",label:"\u0412\u0430\u0436\u043d\u044b\u0435"},{name:"urgent",label:"\u0421\u0440\u043e\u0447\u043d\u044b\u0435"}],term:"all"},n}return Object(d.a)(a,[{key:"render",value:function(){var t=this,e=this.props.filter,a=this.state.buttonsArr.map((function(a){var n=a.name,r=a.label,c=e===n?"btn-light":"btn-outline-light";return Object(s.jsx)("button",{type:"button",onClick:function(){return t.props.filtered(n)},className:"btn ".concat(c),children:r},n)}));return Object(s.jsx)("div",{className:"btn-group",children:a})}}]),a}(n.Component)),m={filtered:function(t){return{type:"FILTERED",payload:t}}},v=Object(i.b)((function(t){return{filter:t.filter}}),m)(h),x=a(2),y=(a(29),function(t){var e=t.body,a=t.important,n=t.urgent,r=t.completed,c=t.deletePost,o=t.addImportantPost,i=t.addUrgentPost,l=t.toComplete;return Object(s.jsxs)("li",{className:"list-group-item d-flex justify-content-between ".concat(a?" increase":null," ").concat(n?" urgent":null," ").concat(r?" completed":null),children:[Object(s.jsx)("button",{type:"button",onClick:function(t){t.preventDefault(),l()},className:"btn-completed btn-sm ",title:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e",children:Object(s.jsx)("i",{className:"fas fa-check"})}),Object(s.jsx)("span",{className:"list-group-item-label",children:e}),Object(s.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(s.jsx)("button",{type:"button",onClick:function(t){t.preventDefault(),o()},className:"btn-cookie btn-sm ",title:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0432\u0430\u0436\u043d\u043e\u0435",children:Object(s.jsx)("i",{className:"fas fa-star"})}),Object(s.jsx)("button",{onClick:function(t){t.preventDefault(),c()},type:"button",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0435\u043b\u0435\u043c\u0435\u043d\u0442",className:"btn-trash btn-sm ",children:Object(s.jsx)("i",{className:"fas fa-trash"})}),Object(s.jsx)("button",{onClick:function(t){t.preventDefault(),i()},type:"button",title:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0441\u0440\u043e\u0447\u043d\u043e\u0435",className:"btn-ungent btn-sm",children:Object(s.jsx)("i",{className:"fas fa-exclamation"})})]})]})}),g=(a(30),{deletePost:function(t){return{type:"DELETE_POST",payload:t}},addImportantPost:function(t){return{type:"ADD_IMPORTANT_POST",payload:t}},addUrgentPost:function(t){return{type:"ADD_URGENT_POST",payload:t}},toComplete:function(t){return{type:"TO_COMPLETE",payload:t}}}),P=Object(i.b)((function(t){return{data:t.data,filter:t.filterPost,search:t.search,activeFilter:t.filter,filterArr:t.filterArr}}),g)((function(t){var e,a=t.data,n=(t.filter,t.search),r=t.addImportantPost,c=t.deletePost,o=t.addUrgentPost,i=t.toComplete,l=t.filterArr,u=t.activeFilter;"all"===u&&(e=a),"important"===u&&(e=a.filter((function(t){return t.important}))),"urgent"===u&&(e=a.filter((function(t){return t.urgent}))),n.length>0&&(e=a.filter((function(t){return t.body.toLowerCase().includes(n.toLowerCase())})));var d=function(t){return t.length<=0?Object(s.jsx)("div",{className:"list",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442\u043e\u0439"}):t.map((function(t){return Object(s.jsx)(y,Object(x.a)(Object(x.a)({},t),{},{deletePost:function(){return c(t.id)},addImportantPost:function(){return r(t.id)},addUrgentPost:function(){return o(t.id)},toComplete:function(){return i(t.id)}}),t.id)}))}(e);return console.log(l),Object(s.jsx)("ul",{className:"app-list list-group",children:d})})),N=(a(31),function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).onValueChange=function(t){n.setState({post:t.target.value})},n.addNewPost=function(t){var e={body:t,important:!1,urgent:!1,id:new Date};if(n.setState({post:""}),e.body.length>0)return n.props.addToForm(e)},n.state={post:""},n}return Object(d.a)(a,[{key:"render",value:function(){var t=this,e=this.state.post;return Object(s.jsxs)("div",{className:"app-add-form",children:[Object(s.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c"}),Object(s.jsxs)("form",{className:"add-form d-flex",children:[Object(s.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c",value:e,onChange:this.onValueChange}),Object(s.jsx)("button",{type:"submit",onClick:function(a){a.preventDefault(),t.addNewPost(e)},className:"btn btn-outline-light",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),a}(n.Component)),T={addToForm:function(t){return{type:"ADD_TO_FORM",payload:t}}},C=Object(i.b)((function(t){return{data:t.data}}),T)(N);a(32);var D=function(){return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(l,{}),Object(s.jsxs)("div",{className:"search-panel",children:[Object(s.jsx)(O,{}),Object(s.jsx)(v,{})]}),Object(s.jsx)(P,{}),Object(s.jsx)(C,{})]})},E=a(11),_=a(4),A={data:[{body:"First post",id:1,important:!1,urgent:!1,completed:!1},{body:"it is a greeting",id:2,important:!0,urgent:!1,completed:!1}],search:"",filterPost:[],filter:"all",filterArr:[]},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_FORM":var a=e.payload;return Object(x.a)(Object(x.a)({},t),{},{data:[].concat(Object(_.a)(t.data),[a])});case"DELETE_POST":var n=e.payload,r=t.data.findIndex((function(t){return t.id===n}));return Object(x.a)(Object(x.a)({},t),{},{data:[].concat(Object(_.a)(t.data.slice(0,r)),Object(_.a)(t.data.slice(r+1)))});case"ADD_IMPORTANT_POST":var c=e.payload,o=t.data.findIndex((function(t){return t.id===c})),i=t.data[o],s=Object(x.a)(Object(x.a)({},i),{},{important:!i.important}),l=[].concat(Object(_.a)(t.data.slice(0,o)),[s],Object(_.a)(t.data.slice(o+1)));return Object(x.a)(Object(x.a)({},t),{},{data:l});case"ADD_URGENT_POST":var u=e.payload,d=t.data.findIndex((function(t){return t.id===u})),b=t.data[d],j=Object(x.a)(Object(x.a)({},b),{},{urgent:!b.urgent}),f=[].concat(Object(_.a)(t.data.slice(0,d)),[j],Object(_.a)(t.data.slice(d+1)));return Object(x.a)(Object(x.a)({},t),{},{data:f});case"TO_COMPLETE":var p=e.payload,O=t.data.findIndex((function(t){return t.id===p})),h=t.data[O],m=Object(x.a)(Object(x.a)({},h),{},{completed:!h.completed}),v=[].concat(Object(_.a)(t.data.slice(0,O)),[m],Object(_.a)(t.data.slice(O+1)));return Object(x.a)(Object(x.a)({},t),{},{data:v});case"SEARCH_POST":var y=Object(_.a)(t.data).filter((function(e){return e.body.toLowerCase().includes(t.search.toLowerCase())}));return Object(x.a)(Object(x.a)({},t),{},{search:e.payload,filterPost:y,filter:"all"});case"FILTERED":var g,P=e.payload;return"all"===e.payload&&(g=t.data),"important"===P&&(g=t.data.filter((function(t){return t.important}))),"urgent"===P&&(g=t.data.filter((function(t){return t.urgent}))),Object(x.a)(Object(x.a)({},t),{},{filter:e.payload,filterArr:g});default:return t}},k=a(14),I=(a(33),Object(E.createStore)(S,Object(k.composeWithDevTools)()));o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(i.a,{store:I,children:Object(s.jsx)(D,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.537f9f7b.chunk.js.map