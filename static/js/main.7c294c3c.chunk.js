(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{125:function(e,t,a){e.exports=a(209)},133:function(e,t,a){},134:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},135:function(e,t,a){},137:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),o=a(61),i=a(103),s=a(79),m=(a(133),a(26)),u=a(12),d=(a(134),a(135),a(47)),p=a.n(d),E=a(65),f=a(14),v="ADD_TODOLIST",h="DEL_TODOLIST",g="COMPLETE_TODOLIST",b="EDIT_TODOLIST",N=function(e,t,a){return{type:v,payload:{listname:e,id:t,completed:a}}},y=function(e){return{type:h,payload:{delItemIndex:e}}},j=a(220),x=(a(137),a(33)),k=a(219),O=a(216),T=a(7),w=a.n(T),L=k.a.Panel;var S=Object(s.b)((function(e){return{currentTodo:e.todoList,completelist:e.completeTodo,completed:e.completed}}),(function(e){return{onAddTodo:function(t){return e(N(t))},onDelTodo:function(t){return e(y(t))},onCompleteTodo:function(t){return e({type:g,payload:{id:t}})},onEditTodo:function(t){return e({type:b,payload:{editItemIndex:t}})},onCompleteEdit:function(t,a){return e({type:"COMPLETE_EDIT_TODOLIST",payload:{editItemIndex:t,editcontent:a}})},getdata:function(){return e((function(e){fetch("https://ptt-todolist-api.herokuapp.com/todolist/gettodo",{method:"GET",headers:new Headers({Accept:"application/json","Content-Type":"appliaction/json"})}).then((function(e){return e.json()})).then((function(t){return t.forEach((function(t){return 0==t.completed?e(N(t.content,t.Id,t.completed)):e({type:"INITIAL_COMPLETE_TODOLIST",payload:{id:t.Id,content:t.content,completed:t.completed}})}))}))}))}}}))((function(e){console.log(e);var t=Object(n.useState)(""),a=Object(f.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),i=Object(f.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)([]),d=Object(f.a)(u,2),v=(d[0],d[1],Object(n.useState)(!1)),h=Object(f.a)(v,2),g=h[0],b=h[1];function N(){return(N=Object(E.a)(p.a.mark((function t(a){var n,l,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Request("https://ptt-todolist-api.herokuapp.com/todolist/savetodb",{method:"post",body:JSON.stringify(a),headers:new Headers({Accept:"application/json","Content-Type":"application/json"})}),t.next=3,fetch(n);case 3:return l=t.sent,t.next=6,l.json();case 6:c=t.sent,console.log("res data",c),e.getdata();case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=Object(E.a)(p.a.mark((function t(a){var n,l,c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={delid:a},console.log("test1213",n),l=new Request("https://ptt-todolist-api.herokuapp.com/todolist/deltodo",{method:"post",body:JSON.stringify(n),headers:new Headers({Accept:"application/json","Content-Type":"application/json"})}),t.next=5,fetch(l);case 5:return c=t.sent,t.next=8,c.json();case 8:r=t.sent,console.log("res data",r),e.onDelTodo(a);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){e.getdata()}),[]);var T=function(e){var t=e.target.style.background;w()(e.target).closest(".todocard").css("background-color",t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center"},"ToDo List"),l.a.createElement("button",{className:"btn-add",onClick:function(){b(!0)}},"+"),l.a.createElement(O.a,{title:"\u8acb\u8f38\u5165\u5f85\u8fa6\u4e8b\u9805",visible:g,onOk:function(e){console.log(e),b(!1),r(""),function(e){N.apply(this,arguments)}({content:c,title:"123"})},onCancel:function(e){console.log(e),b(!1)},okText:"\u65b0\u589e\u5f85\u8fa6"},l.a.createElement("textarea",{rows:"8",cols:"60",value:c,onChange:function(e){return r(e.target.value)},placeholder:"\u8acb\u8f38\u5165\u5f85\u8fa6\u4e8b\u9805...",style:{background:"transparent",border:"none"}})),l.a.createElement("hr",null),l.a.createElement(k.a,{bordered:!1,defaultActiveKey:["1"]},l.a.createElement(L,{header:"\u672a\u5b8c\u6210",key:"1"},l.a.createElement("div",{className:"d-flex flex-wrap justify-content-around"},e.currentTodo.map((function(t,a){return 0==t.completed?l.a.createElement(j.a,{key:t.id,style:{width:"18rem"},className:"m-2 todocard position-relative col-12 col-md-5"},l.a.createElement("span",{className:"card-del-btn",onClick:function(){!function(e){y.apply(this,arguments)}(t.id)}},l.a.createElement(x.d,{style:{fontSize:"24px"}}),l.a.createElement("span",null,"\u522a\u9664")),l.a.createElement("span",{className:"card-check-btn",onClick:function(){!function(t){var a={completeid:t};fetch("https://ptt-todolist-api.herokuapp.com/todolist/completetodo",{method:"put",body:JSON.stringify(a),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).then(e.onCompleteTodo(t))}(t.id)}},l.a.createElement(x.c,{style:{fontSize:"24px"}}),l.a.createElement("span",null,"\u5b8c\u6210")),l.a.createElement(x.f,{style:{fontSize:"24px"}}),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"color-select rounded-circle",style:{background:"skyblue"},onClick:T}),l.a.createElement("div",{className:"color-select rounded-circle",style:{background:"orange"},onClick:T}),l.a.createElement("div",{className:"color-select rounded-circle",style:{background:"yellow"},onClick:T})),l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null),t.edit?l.a.createElement("textarea",{type:"text",className:"col-10",value:s,onChange:function(e){return m(e.target.value)},onBlur:function(){!function(t){var a={editid:t,content:s};fetch("https://ptt-todolist-api.herokuapp.com/todolist/updatetodo",{method:"post",body:JSON.stringify(a),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).then(e.onCompleteEdit(t,s))}(t.id)}}):l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a.Text,null,t.content,l.a.createElement("span",{className:"card-edit-btn",onClick:function(){e.onEditTodo(t.id),m(t.content)}},l.a.createElement(x.e,null)))))):null})))),l.a.createElement(L,{header:"\u5df2\u5b8c\u6210",key:"2"},l.a.createElement("div",{className:"d-flex flex-wrap justify-content-around"},e.completelist.map((function(e){return l.a.createElement(j.a,{key:e.id,style:{width:"18rem"},className:"m-2 todocard position-relative col-12 col-md-5"},l.a.createElement(j.a.Body,null,l.a.createElement(j.a.Title,null),l.a.createElement(j.a.Text,null,e.content)))})))))))})),I=a(70),C=a(217),q=a(215),_=a(214),F=a(218);a(174);a(175);var D=function(e){var t=e.mostpush,a=e.browseWithPics,c=e.allArticle;return Object(n.useEffect)((function(){var e=document.querySelector("#tab1btn"),t=document.querySelector("#tab2btn"),a=document.querySelector("#tab3btn"),n=document.querySelector("#tab1"),l=document.querySelector("#tab2"),c=document.querySelector("#tab3");function r(){document.querySelectorAll("div.tab").forEach((function(e){return e.classList.remove("active")})),document.querySelectorAll("li.active").forEach((function(e){return e.classList.remove("active")}))}e.addEventListener("click",(function(){r(),n.classList.add("active"),e.classList.add("active")})),t.addEventListener("click",(function(){r(),l.classList.add("active"),t.classList.add("active")})),a.addEventListener("click",(function(){r(),c.classList.add("active"),a.classList.add("active")}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"tabControlBtn"},l.a.createElement("li",{id:"tab1btn",className:"active"},"\u6700\u591a\u63a8\u6587"),l.a.createElement("li",{id:"tab2btn"},"\u5716\u6587\u700f\u89bd"),l.a.createElement("li",{id:"tab3btn"},"\u6240\u6709\u6587\u7ae0")),l.a.createElement("div",{className:"tab active",id:"tab1"},t),l.a.createElement("div",{class:"tab",id:"tab2"},a),l.a.createElement("div",{class:"tab",id:"tab3"},c))},A=Object(u.f)((function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(0),i=Object(f.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)("0"),d=Object(f.a)(u,2),p=d[0],E=d[1],v=Object(n.useState)([]),h=Object(f.a)(v,2),g=(h[0],h[1],Object(n.useState)([])),b=Object(f.a)(g,2),N=b[0],y=b[1],j=Object(n.useState)(!0),x=Object(f.a)(j,2),k=x[0],O=x[1];console.log("props",e),Object(n.useEffect)((function(){fetch("https://ptt-todolist-api.herokuapp.com/getptt",{method:"GET"}).then((function(e){return e.json()})).then((function(e){for(var t=e.filter((function(e){return!e.link.match(/undefined/gm)})),a=0;a<t.length;a++)t[a].count=t[a].count.replace(/X/gm,"-"),t[a].count=t[a].count.replace(/\u7206/gm,"100"),console.log(t[a].count);return r(t),t})).then((function(e){!function(e){var t=[];e.slice(0,50).map((function(e){t.push(e.link)}));var a={url:t};fetch("https://ptt-todolist-api.herokuapp.com/getptt/top3",{method:"post",body:JSON.stringify(a),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){console.log(e),y(e),O(!1)}))}(Object(I.a)(e).sort((function(e,t){return t.count-e.count})))}))}),[]);var T=Object(I.a)(c).sort((function(e,t){return t.count-e.count}));console.log("topContentData",T);T.slice(0,3).map((function(e,t){return l.a.createElement("a",{key:t,href:e.link},l.a.createElement("div",null,l.a.createElement("p",{href:e.link,style:{fontSize:"24px",fontFamily:"Noto Sans TC"}},e.titleText),N.map((function(e,a){return a==t?l.a.createElement("div",{key:a},l.a.createElement("p",{className:"hotarticle col-5 "},e.text),l.a.createElement("img",{className:"topImg",src:"https://"+e.img[0]+".jpg"})):null}))))}));var L=T.slice(0,4).map((function(e,t){return l.a.createElement("div",{className:"d-flex px-3",key:t},l.a.createElement("span",null,e.count),l.a.createElement("div",{className:"flex-grow-1"},l.a.createElement("a",{href:e.link,target:"_blank"},e.titleText)))})),S=C.a.Option;q.a.TabPane;Object(n.useEffect)((function(){w()("div.articleImgs > div > div").hover((function(){console.log(this),w()(this).find("span").toggleClass("showBtn")}))}));var A=function(e){var t=e.imgs,a=e.link,n=e.title;return l.a.createElement("div",null,t.map((function(e){return l.a.createElement("div",{className:"imgwrapper",key:e},l.a.createElement("img",{src:"https://"+e+".jpg"}),l.a.createElement("a",{href:"https://"+e+".jpg",target:"_blank"}),l.a.createElement("div",{className:"btnforimg"},l.a.createElement("a",{href:a,target:"_blank"},n)))})))},P=l.a.createElement(F.a,{style:{fontSize:48},spin:!0}),M=l.a.createElement("div",{className:"text-center mt-3"},l.a.createElement(_.a,{indicator:P})),H=l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-10  top4 "},L)),R=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-10 imgbrowse"},k?M:l.a.createElement("div",{className:"articleImgs"},N.map((function(e,t){return l.a.createElement(A,{key:t,imgs:e.img,link:e.url,title:e.title})})))))),B=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex justify-content-around flex-wrap my-3"},l.a.createElement("p",{className:"col-11 col-md-3 my-2",style:{fontSize:"20px",margin:"0"}},"\u76ee\u524d\u986f\u793a",c.length,"\u7bc7\u6587\u7ae0"),l.a.createElement(C.a,{className:"col-11 col-md-3 my-2",defaultValue:"\u63a8\u6587\u6578\u7be9\u9078",style:{width:200},onChange:function(e){m(e)}},l.a.createElement(S,{value:"10"},">10"),l.a.createElement(S,{value:"20"},">20"),l.a.createElement(S,{value:"0"},"0")),l.a.createElement(C.a,{className:"col-11 col-md-3 my-2",defaultValue:"\u6392\u5e8f\u65b9\u5f0f",style:{width:200},onChange:function(e){E(e)}},l.a.createElement(S,{value:"1"},"\u6700\u591a\u63a8"),l.a.createElement(S,{value:"2"},"\u6700\u591a\u5653"),l.a.createElement(S,{value:"0"},"\u9810\u8a2d"))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"d-flex flex-wrap justify-content-around allarticle col-11"},function(){switch(p){case"1":return Object(I.a)(c).sort((function(e,t){return t.count-e.count})).map((function(e,t){return+e.count>=s?l.a.createElement("div",{key:t,className:"ptt-title col-11 col-md-5"},l.a.createElement("p",{className:"ptt-count"},e.count),l.a.createElement("a",{href:e.link},e.titleText)):null}));case"2":return Object(I.a)(c).sort((function(e,t){return e.count-t.count})).map((function(e,t){return+e.count>=s?l.a.createElement("div",{key:t,className:"ptt-title col-11 col-md-5"},l.a.createElement("p",{className:"ptt-count"},e.count),l.a.createElement("a",{href:e.link},e.titleText)):null}));case"0":return c.map((function(e,t){return+e.count>=s?l.a.createElement("div",{key:t,className:"ptt-title col-11 col-md-5"},l.a.createElement("p",{className:"ptt-count"},e.count),l.a.createElement("a",{href:e.link},e.titleText)):null}))}}())));return l.a.createElement("div",{className:"container"},l.a.createElement(D,{mostpush:H,browseWithPics:R,allArticle:B}))})),P=(a(197),function(){return Object(n.useEffect)((function(){w()(window).scroll((function(){w()(window).scrollTop()}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"d-flex justify-content-center"},l.a.createElement("input",{type:"checkbox",id:"toggler"}),l.a.createElement("label",{htmlFor:"toggler"},l.a.createElement("div",{className:"hamburger-container"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{className:"header-nav-items-rwd"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",href:"/todo"},"Todo")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",href:"/ptt"},"PTT\u516b\u5366\u7248")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",href:"/project"},"\u8cc7\u7b56\u6703\u5c08\u984c\u4f5c\u54c1")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",href:"#"},"\u5207\u7248\u7df4\u7fd2"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/timeline"},"\u6642\u9593\u8ef8")))))),l.a.createElement("div",{className:"header-nav-items"},l.a.createElement("ul",{className:"d-flex justify-content-center"},l.a.createElement("li",null,l.a.createElement(m.c,{className:"nav-link",activeClassName:"activelink",to:"/",exact:!0},"Home")),l.a.createElement("li",null,l.a.createElement(m.c,{className:"nav-link",activeClassName:"activelink",to:"/todo"},"Todo")),l.a.createElement("li",null,l.a.createElement(m.c,{className:"nav-link",activeClassName:"activelink",to:"/ptt"},"PTT\u516b\u5366\u7248")),l.a.createElement("li",null,l.a.createElement(m.c,{className:"nav-link",activeClassName:"activelink",to:"/project"},"\u8cc7\u7b56\u6703\u5c08\u984c\u4f5c\u54c1")),l.a.createElement("li",null,l.a.createElement(m.c,{className:"nav-link",activeClassName:"activelink",to:"/timeline"},"\u5207\u7248\u7df4\u7fd2"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{to:"/timeline"},"\u6642\u9593\u8ef8")),l.a.createElement("li",null,l.a.createElement(m.b,{to:""},"Other"))))))))}),M=(a(198),a(199),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"text-center"},"\u8cc7\u7b56\u6703\u7d50\u696d\u5c08\u984c"),l.a.createElement("h5",{className:"text-center"},l.a.createElement("i",null,"Tandom\u904a\u6232\u793e\u7fa4\u5206\u4eab\u5e73\u53f0")),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex flex-wrap project_img"},l.a.createElement("img",{className:"col-11 col-md-6",src:"./iii/product_list.png"}),l.a.createElement("p",null,"\u5546\u54c1\u5217\u8868\u9801",l.a.createElement("ol",null,l.a.createElement("li",null,"\u52a0\u5165\u8cfc\u7269\u8eca\u3001\u52a0\u5165\u6536\u85cf\u529f\u80fd"),l.a.createElement("li",null,"\u95dc\u9375\u5b57\u641c\u5c0b\u3001\u591a\u91cd\u689d\u4ef6\u7d9c\u5408\u7be9\u9078\u3001\u6392\u5e8f\u529f\u80fd")))),l.a.createElement("div",{className:"d-flex project_img"},l.a.createElement("img",{className:"col-11 col-md-6",src:"./iii/product_detail.png"}),l.a.createElement("p",null,"\u5546\u54c1\u9801",l.a.createElement("ol",null,l.a.createElement("li",null,"\u52a0\u5165\u8cfc\u7269\u8eca\u3001\u52a0\u5165\u6536\u85cf\u529f\u80fd"),l.a.createElement("li",null,"\u7559\u8a00\u3001\u56de\u8986\u7559\u8a00"))))))});a(200);var H=function(){return Object(n.useEffect)((function(){w()(".menu").click((function(){w()(".menu-content").toggleClass("active"),w()(this).toggleClass("active")})),w()(".searchicon").click((function(){w()(".searcharea").toggleClass("active")}))})),Object(n.useEffect)((function(){var e=0,t=setInterval((function(){e<2?e++:e=0,console.log(e),w()(".img-wrapper").eq(e).toggleClass("active"),w()(".img-wrapper").eq(e-1).toggleClass("active")}),5e3);return function(){return clearInterval(t)}})),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"d-flex"},l.a.createElement("div",{className:"logo"},"LOGO"),l.a.createElement("div",{className:"aa"},"Do everything better"),l.a.createElement(x.g,{className:"searchicon"}),l.a.createElement("input",{className:"searcharea"}),l.a.createElement("div",{className:"function_bar d-flex"},l.a.createElement("div",{className:"function function1"},l.a.createElement("div",{className:"circle"}),l.a.createElement("span",null,"Shop")),l.a.createElement("div",{className:"function function2"},l.a.createElement("div",{className:"circle"}),l.a.createElement("span",null,"Subscribe")),l.a.createElement("div",{className:"function function3"},l.a.createElement("div",{className:"circle"}))),l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"bar"}))),l.a.createElement("div",{className:"menu-content"}),l.a.createElement("div",{className:"content d-flex flex-wrap mt-3"},l.a.createElement("div",{className:"main col-12 col-md-6"},l.a.createElement("img",{src:"https://fakeimg.pl/614x345/",alt:""}),l.a.createElement("div",{className:"main-title"},l.a.createElement("a",null,"TRAVEL"),l.a.createElement("h2",null,"Lorem ipsum dolor sit amet"),l.a.createElement("p",null,"Lebro James"))),l.a.createElement("div",{className:"sub col-12 col-md-3"},l.a.createElement("div",{className:"sub1"},l.a.createElement("img",{src:"https://fakeimg.pl/294x165/",alt:""}),l.a.createElement("h5",null,"Lorem ipsum dolor sit amet")),l.a.createElement("div",{className:"sub2"},l.a.createElement("img",{src:"https://fakeimg.pl/294x165/",alt:""}),l.a.createElement("h5",null,"Lorem ipsum dolor sit amet"))),l.a.createElement("div",{className:"sidebar col-12 col-md-3"},l.a.createElement("h5",null,"More"),l.a.createElement("div",{className:"sidebar1 d-flex"},l.a.createElement("img",{className:"mr-2",src:"https://fakeimg.pl/71x40/",alt:""}),l.a.createElement("h5",null,"Lorem ipsum dolor sit amet")))),l.a.createElement("div",{className:"article d-flex"},l.a.createElement("div",{className:"news col-md-8"}),l.a.createElement("div",{className:"alsolike col-md-4"},l.a.createElement("b",null,"You may also like"),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"col img-wrapper active"},l.a.createElement("img",{className:"",src:"/nba1.jpg",alt:""}),l.a.createElement("span",{className:"text-center "},"1")),l.a.createElement("div",{className:"col img-wrapper"},l.a.createElement("img",{className:"",src:"/nba2.jpg",alt:""}),l.a.createElement("span",{className:"text-center"},"2")),l.a.createElement("div",{className:"col img-wrapper"},l.a.createElement("img",{className:"",src:"/nba3.jpg",alt:""}),l.a.createElement("span",{className:"text-center"},"3"))),l.a.createElement("div",{className:"progress"}))))},R=(a(201),a(221));a(202),a(203);var B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"squares"},l.a.createElement("li",{class:"box1"},"HTML"),l.a.createElement("li",{class:"box2"},"CSS/SCSS"),l.a.createElement("li",{class:"box3"},"ES6+"),l.a.createElement("li",{class:"box4"},"React.js"),l.a.createElement("li",{class:"box5"},"Node.js"),l.a.createElement("li",{class:"box6"},"MySQL")))};a(204);var J=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("/hitcount",{method:"GET"}).then((function(e){return e.json()})).then((function(e){c(e[0]["count(1)"])}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",null,"\u700f\u89bd\u6b21\u6578"),l.a.createElement("span",{className:"hitcounter"},parseInt(a/100)),l.a.createElement("span",{className:"hitcounter"},parseInt(a%100/10)),l.a.createElement("span",{className:"hitcounter"},a%10))},z=function(e){var t=e.title,a=e.intro,n=e.imgurl,c=e.linkurl;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"intro col-md-2 col-10"},l.a.createElement("div",{className:"img-wrapper"},l.a.createElement("img",{src:n,alt:t})),l.a.createElement("h4",null,l.a.createElement("a",{href:c},t)),l.a.createElement("p",null,a),l.a.createElement("a",{href:c},"\u770b\u66f4\u591a")))};var V=function(){var e=Object(n.useState)("left"),t=Object(f.a)(e,2),a=t[0];return t[1],Object(n.useEffect)((function(){w()(window).scroll((function(){w()(this).scrollTop(),w()(".intro").offset()}));var e=w()(".intro").offset().left;console.log("offsetleft",e)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"up "},l.a.createElement("div",{className:"d-flex justify-content-center flex-wrap"},l.a.createElement("div",{className:"hello-text col-md-4 col-12"},l.a.createElement("h1",null,"Hello"),l.a.createElement("h2",null,"\u6211\u662f\u715c\u51f1"),l.a.createElement("h4",{className:"text-uppercase"},"junior web developer"),l.a.createElement("p",null,"This is a personal project.")),l.a.createElement("div",{className:"front-img col-md-4 col-12 text-center"},l.a.createElement("img",{className:"img-fluid",src:"./programing.png",title:"Icons made by Eucalyp from www.flaticon.com"})))),l.a.createElement("h2",{class:"text-center title"},"\u7db2\u7ad9\u5340\u584a\u4ecb\u7d39"),l.a.createElement("div",{class:"d-flex justify-content-center flex-wrap website-intro"},l.a.createElement(z,{title:"PTT\u516b\u5366\u7248\u5716\u6587\u700f\u89bd",intro:"\u5373\u6642\u722c\u53d6PTT\u516b\u5366\u7248\u6587\u7ae0\u548c\u5716\u7247\uff0c\u5305\u542b\u63a8\u6587\u6392\u5e8f\u529f\u80fd\u3001\u4ee5\u5716\u700f\u89bd\u6587\u7ae0\u529f\u80fd\uff0c\u904b\u7528React.js\u7d50\u5408Node.js",imgurl:"./blah.jpg",linkurl:"/ptt"}),l.a.createElement(z,{title:"\u8cc7\u7b56\u6703\u5c08\u984c\u4f5c\u54c1",intro:"\u8cc7\u7b56\u6703\u5c08\u984c\u4f5c\u54c1\u7684\u4e3b\u8981\u9801\u9762\u622a\u5716\uff0c\u70ba\u4e00\u500b\u8ca9\u552e\u904a\u6232\u7684\u96fb\u5546\u5e73\u53f0\u7684\u5546\u54c1\u9801\u9762\uff0c\u904b\u7528React\u6846\u67b6\u6e32\u67d3\u756b\u9762\uff0c\u7d50\u5408\u5f8c\u7aefNode.js\u5b58\u53d6database\u8cc7\u6599",imgurl:"./presentation.jpg",linkurl:"/project"})),l.a.createElement("div",{id:"notify"},l.a.createElement("img",{className:"img-fluid",src:"./mickeyhand.png"})),l.a.createElement("h2",{class:"text-center title"},"\u5176\u4ed6\u5c08\u6848"),l.a.createElement("div",{class:"d-flex justify-content-center sideProject"},l.a.createElement(z,{title:"\u65b0\u51a0\u80ba\u708e\u8cc7\u8a0a\u770b\u7248",intro:"\u4e32\u63a5api\uff0c\u5c07\u65b0\u51a0\u80ba\u708e\u8cc7\u8a0a\u5716\u8868\u5316",imgurl:"./coronavirus.svg",linkurl:"https://albertkingdom.github.io/covid19info/"}),l.a.createElement(z,{title:"\u80a1\u5e02\u640d\u76ca\u7d00\u9304\u8868(Vue\u6846\u67b6)",intro:"\u6a21\u4eff\u80a1\u7968\u4e0b\u55aeapp\uff0c\u66ff\u4f7f\u7528\u8005\u7d00\u9304\u4e0b\u55ae\u8cc7\u8a0a\uff0c\u6bcf\u65e5\u8a08\u7b97\u500b\u80a1\u5831\u916c\u7387",imgurl:"/stock-market.jpg",linkurl:"https://codepen.io/albertkingdom/pen/oNbMNOd"})),l.a.createElement("div",{class:"col-md-12 col-12 technique"},l.a.createElement("h2",{className:"text-center"},"\u6280\u80fd"),l.a.createElement(B,null)),l.a.createElement("div",{class:"aboutme text-center"},l.a.createElement("h2",{className:"text-center text-uppercase"},"about me"),l.a.createElement("div",{className:"d-flex flex-wrap justify-content-center"},l.a.createElement("div",{className:"contact col-md-4 col-12"},l.a.createElement("img",{src:"./avator.svg",title:"made by flaticon"}),l.a.createElement("p",{style:{fontSize:"16px"}},"albertkingdom@gmail.com"),l.a.createElement("div",{className:"d-flex justify-content-center",id:"links"},l.a.createElement("a",{href:"https://github.com/albertkingdom"},l.a.createElement(x.a,null)),l.a.createElement("a",{href:"https://www.linkedin.com/in/yu-kai-lin-4a75996a/"},l.a.createElement(x.b,null)))),l.a.createElement("div",{className:"timeline col-md-4 col-12"},l.a.createElement(R.a,{mode:a,style:{marginTop:"10px"}},l.a.createElement(R.a.Item,{label:"2020 Apr"},"\u8cc7\u7b56\u6703\u524d\u7aef\u5de5\u7a0b\u5e2b\u990a\u6210\u73ed\u7d50\u696d"),l.a.createElement(R.a.Item,{label:"2016-2018 Dec"},"\u5100\u63a7\u5de5\u7a0b\u5e2b"),l.a.createElement(R.a.Item,{label:"2015"},"\u78a9\u58eb\u73ed\u7562\u696d"))))),l.a.createElement("div",{class:"footer text-center"},l.a.createElement(J,null)))};a(205);var G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center"},"\u6642\u9593\u8ef8\u5207\u7248\u7df4\u7fd2"),l.a.createElement("ul",{className:"timeline"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("h2",null,"Now"),l.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quibusdam voluptas error sunt deleniti possimus aliquam asperiores repudiandae repellendus excepturi doloribus aut molestias quisquam placeat rem, natus ex iusto! Repudiandae!"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("h2",null,"1994"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus minima, quidem asperiores commodi architecto doloribus quia voluptates facilis veritatis, ab ut. Fugiat tenetur ratione laborum id totam cumque laudantium."))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("h2",null,"1991"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus minima, quidem asperiores commodi architecto doloribus quia voluptates facilis veritatis, ab ut. Fugiat tenetur ratione laborum id totam cumque laudantium."))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("h2",null,"1963"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus minima, quidem asperiores commodi architecto doloribus quia voluptates facilis veritatis, ab ut. Fugiat tenetur ratione laborum id totam cumque laudantium."))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("h2",null,"1958"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus minima, quidem asperiores commodi architecto doloribus quia voluptates facilis veritatis, ab ut. Fugiat tenetur ratione laborum id totam cumque laudantium."))))))};var W=function(){return l.a.createElement(m.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(V,null)),l.a.createElement("div",{style:{paddingTop:"70px"}},l.a.createElement(u.a,{path:"/project"},l.a.createElement(M,null)),l.a.createElement(u.a,{path:"/ptt"},l.a.createElement(A,null)),l.a.createElement(u.a,{path:"/todo"},l.a.createElement(S,null)),l.a.createElement(u.a,{path:"/practice_lifehacker"},l.a.createElement(H,null)),l.a.createElement(u.a,{path:"/timeline"},l.a.createElement(G,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(29),K=(a(206),{todoList:[{id:0,content:"first",edit:!1}],completeTodo:[]}),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var a=e.todoList.map((function(e){return e}));return console.log("tempTodoBEFORE",a),-1==e.todoList.map((function(e){return e.id})).indexOf(t.payload.id)&&(console.log("action.payload.id",t.payload.id),a.push({id:t.payload.id,content:t.payload.listname,edit:!1,completed:t.payload.completed})),console.log("tempTodoAFTER",a),Object(X.a)({},e,{todoList:a});case h:var n=e.todoList.filter((function(e,a){return e.id!==t.payload.delItemIndex}));return console.log("updatedArr",n),Object(X.a)({},e,{todoList:n});case g:var l=e.todoList.filter((function(e){return e.id==t.payload.id}));console.log("complete",l);var c=e.todoList.filter((function(e){return e.id!==t.payload.id}));return Object(X.a)({},e,{todoList:c,completeTodo:e.completeTodo.concat(l)});case"INITIAL_COMPLETE_TODOLIST":var r=[{id:t.payload.id,content:t.payload.content,edit:!1,completed:t.payload.completed}];return Object(X.a)({},e,{completeTodo:e.completeTodo.concat(r)});case b:var o=e.todoList.map((function(e){return e.id==t.payload.editItemIndex?Object(X.a)({},e,{edit:!0}):Object(X.a)({},e,{edit:!1})}));return Object(X.a)({},e,{todoList:o});case"COMPLETE_EDIT_TODOLIST":var i=e.todoList.filter((function(e,a){return a!==t.payload.editItemIndex})),s=Object(X.a)({},e.todoList[t.payload.editItemIndex]);s.content=t.payload.editcontent,s.edit=!1;i.concat(s);var m=e.todoList.map((function(e){return e.id==t.payload.editItemIndex?Object(X.a)({},e,{edit:!1,content:t.payload.editcontent}):Object(X.a)({},e)}));return Object(X.a)({},e,{todoList:m});default:return e}},U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,Y=Object(o.d)(Q,U(Object(o.a)(i.a)));r.a.render(l.a.createElement(s.a,{store:Y},l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.7c294c3c.chunk.js.map