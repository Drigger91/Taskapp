(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(20),r=s.n(n),i=(s(32),s(33),s(3)),l=(s(18),s(4)),o=s(0);var j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)(l.b,{className:"navbar-brand",id:"nav-logo",to:"#",children:Object(o.jsx)("h1",{children:Object(o.jsx)("b",{children:"Task-App"})})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:Object(o.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:Object(o.jsx)("b",{className:"navlinks",children:"Home"})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link active",to:"/Profile",children:Object(o.jsx)("b",{className:"navlinks",children:"About"})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)(l.b,{className:"nav-link active",to:"/ContactUs",children:[Object(o.jsx)("b",{className:"navlinks",children:"Contact"})," "]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link active",to:"/SignUp",children:Object(o.jsx)("b",{className:"navlinks",children:"Register"})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link active",to:"/LogIn",children:Object(o.jsx)("b",{className:"navlinks",children:"Login"})})})]})})]})})})},d=s(2),b=s.n(d),p=s(7),h=s(5),u=s(12),m=s(11);var x=function(e){var t,s,c=Object(a.useState)({}),n=Object(h.a)(c,2),r=n[0],i=n[1],l=function(e){t=e.target.name,s=e.target.value,i(Object(m.a)(Object(m.a)({},r),{},Object(u.a)({},t,s)))},j=function(){var t=Object(p.a)(b.a.mark((function t(s){var a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.description,c=r.completed,console.log(a,c,"desc","completed"),document.getElementById("addform").reset(),t.next=5,fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:a,completed:c})});case 5:200===t.sent.status&&(window.alert("Task added successfully"),e.triggerFetch());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"task-input-card",children:Object(o.jsxs)("form",{method:"POST",id:"addform",children:[Object(o.jsx)("div",{className:"card-header",children:"Add Task here!"}),Object(o.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(o.jsxs)("li",{className:"list-group-item",children:[" Description: ",Object(o.jsx)("input",{name:"description",onChange:l,type:"text",autoComplete:"off"})]}),Object(o.jsxs)("li",{className:"list-group-item",children:["Completed :  ",Object(o.jsx)("input",{name:"completed",onChange:l,type:"text",placeholder:"true/false",autoComplete:"off"})]}),Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)("button",{onClick:j,type:"button",className:"btn btn-success",children:"Add Task"})})]})]})})},O=s(15),f=s.n(O);var g=function(e){var t,s,c=Object(a.useState)(!1),n=Object(h.a)(c,2),r=n[0],i=n[1],l=function(){var t=Object(p.a)(b.a.mark((function t(){var s,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.task._id,t.prev=1,t.next=4,fetch("/tasks/".concat(s),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:t.sent,200==a.status&&(e.triggerFetch(),window.alert("Task deleted successfully")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),window.alert("Failed to delete task");case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("edited"),i(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=Object(a.useState)({}),x=Object(h.a)(d,2),O=x[0],g=x[1],v=function(e){t=e.target.name,s=e.target.value,g(Object(m.a)(Object(m.a)({},O),{},Object(u.a)({},t,s)))},k=function(){var t=Object(p.a)(b.a.mark((function t(s){var a,c,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.task._id,c=O.description,n=O.completed,console.log(c,n,"desc","completed"),t.next=5,fetch("/tasks/".concat(a),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:c,completed:n})});case 5:200===t.sent.status&&(window.alert("Task updated successfully"),e.triggerFetch(),i(!1));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"task-card",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("button",{className:"btn",onClick:j,children:Object(o.jsx)("i",{class:"bi bi-pencil-square"})}),"Edit Task"]}),Object(o.jsx)("h3",{className:"user-heading",children:e.task.description}),Object(o.jsxs)("p",{children:[" Status : ","true"===e.task.completed||"True"===e.task.completed?"completed":"pending"]}),Object(o.jsxs)("p",{children:["Created at - ",e.task.createdAt.slice(0,10)]}),Object(o.jsx)("button",{className:"btn btn-danger",onClick:l,children:"Delete Task"})]}),Object(o.jsx)(f.a,{isOpen:r,children:Object(o.jsx)("div",{className:"task-input-modal",children:Object(o.jsxs)("form",{method:"PATCH",children:[Object(o.jsx)("div",{className:"card-header",children:"Update Task here!"}),Object(o.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(o.jsxs)("li",{className:"list-group-item",children:[" Description: ",Object(o.jsx)("input",{name:"description",onChange:v,type:"text",autoComplete:"off"})]}),Object(o.jsxs)("li",{className:"list-group-item",children:["Completed :  ",Object(o.jsx)("input",{name:"completed",onChange:v,type:"text",placeholder:"true/false",autoComplete:"off"})]}),Object(o.jsxs)("li",{className:"list-group-item",children:[Object(o.jsx)("button",{onClick:k,type:"button",className:"btn btn-success",children:"Update Task"})," ",Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){return i(!1)},children:"Close"})]})]})]})})})]})};var v=function(e){var t,s=Object(a.useState)([]),c=Object(h.a)(s,2),n=c[0],r=c[1],i=function(){var e=Object(p.a)(b.a.mark((function e(){var t,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,r(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(o.jsxs)("div",{className:"tasks",children:[Object(o.jsx)(x,{triggerFetch:function(){return i()},owner:e.owner}),Object(o.jsx)("div",{children:(t=n,t.map((function(e){return Object(o.jsx)(g,{triggerFetch:function(){return i()},task:e},e._id)})))})]})};var k=function(){var e=Object(i.e)(),t=Object(a.useState)({}),s=Object(h.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)("home-container"),j=Object(h.a)(r,2),d=j[0],u=j[1],m=Object(a.useState)("d-none"),x=Object(h.a)(m,2),O=x[0],f=x[1],g=function(){var e=Object(p.a)(b.a.mark((function e(){var t,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/users/me",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,n(s),f("main-container"),u("d-none"),500===t.status&&console.log(t.error),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){g()}),[]);var k=function(){var t=Object(p.a)(b.a.mark((function t(s){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/users/logout",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:return a=t.sent,t.next=6,a.json();case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:e.push("/login");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:d,children:[Object(o.jsxs)("div",{className:"home-animation",children:[" ",Object(o.jsx)("script",{src:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"}),Object(o.jsx)("lottie-player",{src:"https://assets5.lottiefiles.com/packages/lf20_puciaact.json",background:"transparent",speed:".5",loop:!0,autoplay:!0})," ",Object(o.jsx)("br",{})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:"text-align-center",method:"POST",children:[Object(o.jsxs)("h2",{children:["Welcome to ",Object(o.jsx)("b",{id:"nav-logo",children:"Task-App!"})]}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsxs)("h3",{children:["If you are new SignUp here - ",Object(o.jsx)(l.b,{className:"nav-link active",to:"/SignUp",children:Object(o.jsx)("button",{className:"btn btn-primary",children:"Signup"})})]})}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsxs)("h3",{children:["If already a User Login here -  ",Object(o.jsx)(l.b,{className:"nav-link active",to:"/login",children:Object(o.jsx)("button",{className:"btn btn-primary",children:"Login"})})]})})]})})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsxs)("h1",{children:["Welcome ",Object(o.jsxs)("span",{className:"user-heading",children:[" ",c.name]})]}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:k,children:" logOut"}),Object(o.jsx)("div",{className:"task-ui",children:Object(o.jsx)(v,{owner:c._id})})]})]})};var y=function(){return Object(o.jsxs)("div",{id:"portfolio",children:[Object(o.jsxs)("div",{class:"container py-5 text-center",id:"portfolio",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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"}),Object(o.jsx)("h2",{children:"Welcome to my Portfolio!"}),Object(o.jsx)("p",{class:"w-50 mx-auto py-2",children:"I am a Web Developer, and UI designer specializing in modern, creative design based in Bhopal, MP"})]}),Object(o.jsx)("div",{class:"container-fluid",id:"profile-container",children:Object(o.jsxs)("div",{class:"",id:"card-container",children:[Object(o.jsxs)("div",{class:"card",id:"profile-card",children:[Object(o.jsx)("i",{class:"fa fa-laptop text-center rounded-circle p-4 bg-primary  mx-auto","aria-hidden":"true"}),Object(o.jsxs)("div",{class:"card-body text-center",children:[Object(o.jsx)("h5",{class:"card-title text-dark",id:"card-title",children:"Web-Dev (MERN)"}),Object(o.jsx)("p",{class:"card-text",children:"I develop custom web-pages and web-services for contract clients"})]})]}),Object(o.jsxs)("div",{class:"card",id:"profile-card",children:[Object(o.jsx)("i",{class:"fa fa-sticky-note-o text-center rounded-circle p-4 bg-warning  mx-auto","aria-hidden":"true"}),Object(o.jsxs)("div",{class:"card-body text-center",children:[Object(o.jsx)("h5",{class:"card-title text-dark",id:"card-title",children:"UI Design"}),Object(o.jsx)("p",{class:"card-text",children:"User experience and interface designs is one of my specialties"})]})]}),Object(o.jsxs)("div",{class:"card",id:"profile-card",children:[Object(o.jsx)("i",{class:"fa fa-camera text-center rounded-circle p-4 bg-danger  mx-auto","aria-hidden":"true"}),Object(o.jsxs)("div",{class:"card-body text-center",children:[Object(o.jsx)("h5",{class:"card-title text-dark",id:"card-title",children:"PhotoGraphy"}),Object(o.jsx)("p",{class:"card-text",children:"Potraits,shoots,post processing and other photo services"})]})]})]})})]})};var N=function(){var e,t,s=Object(i.e)(),c=Object(a.useState)({name:"",age:"",email:"",password:""}),n=Object(h.a)(c,2),r=n[0],l=n[1],j=Object(a.useState)("password"),d=Object(h.a)(j,2),x=d[0],O=d[1],f=Object(a.useState)("bi bi-eye-slash"),g=Object(h.a)(f,2),v=g[0],k=g[1],y=function(s){e=s.target.name,t=s.target.value,l(Object(m.a)(Object(m.a)({},r),{},Object(u.a)({},e,t)))},N=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,c,n,i,l,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=r.name,c=r.age,n=r.email,i=r.password,e.prev=2,e.next=5,fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,age:c,email:n,password:i})});case 5:return l=e.sent,e.next=8,l.json();case 8:if(o=e.sent,400!==l.status&&o){e.next=13;break}return e.abrupt("return",window.alert("Resgistration Failed!! "));case 13:window.alert("Registration successfull"),s.push("/login");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),window.alert("Form filled incorrectly or user already registered");case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"signuppage",children:Object(o.jsxs)("div",{className:"Signup",children:[Object(o.jsxs)("div",{className:"animation",children:[" ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),Object(o.jsx)("lottie-player",{src:"https://assets2.lottiefiles.com/packages/lf20_q5pk6p1k.json",background:"transparent",speed:".51",loop:!0,autoplay:!0})]}),Object(o.jsx)("div",{className:"signupform",children:Object(o.jsxs)("form",{method:"POST",children:[Object(o.jsxs)("h3",{children:[" ",Object(o.jsx)("b",{children:"Sign-Up"})," "]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"exampleInputName1",class:"form-label",children:"Name"}),Object(o.jsx)("input",{type:"name",name:"name",value:r.name,onChange:y,class:"form-control",id:"exampleInputName1","aria-describedby":"nameHelp",required:!0})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"exampleInputAge1",class:"form-label",children:"Age"}),Object(o.jsx)("input",{type:"number",name:"age",value:r.age,onChange:y,class:"form-control",id:"exampleInputAge1","aria-describedby":"ageHelp",required:!0})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Email"}),Object(o.jsx)("input",{type:"email",name:"email",value:r.email,onChange:y,class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",required:!0})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Password "}),Object(o.jsx)("input",{type:x,name:"password",value:r.password,onChange:y,class:"form-control",id:"exampleInputPassword1",required:!0}),Object(o.jsx)("i",{onClick:function(){"password"==x?(O("text"),k("bi bi-eye")):(O("password"),k("bi bi-eye-slash"))},className:v,id:"icon"})]}),Object(o.jsx)("button",{type:"submit",onClick:N,class:"btn btn-primary",id:"signup-button",children:"SignUp"})]})})]})})};var w=function(){var e,t,s=Object(i.e)(),c=Object(a.useState)({email:"",password:""}),n=Object(h.a)(c,2),r=n[0],l=n[1],j=Object(a.useState)("password"),d=Object(h.a)(j,2),x=d[0],O=d[1],f=Object(a.useState)("bi bi-eye-slash"),g=Object(h.a)(f,2),v=g[0],k=g[1],y=function(s){e=s.target.name,t=s.target.value,l(Object(m.a)(Object(m.a)({},r),{},Object(u.a)({},e,t)))},N=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=r.email,c=r.password,e.prev=2,e.next=5,fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:c})});case 5:if(n=e.sent,n.json()&&500!=n.status){e.next=11;break}return e.abrupt("return",window.alert("Invalid credentitials"));case 11:window.alert("Login Successfull"),s.push("/");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),window.alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{id:"LoginPage",children:Object(o.jsxs)("div",{className:"Signup",children:[Object(o.jsxs)("div",{className:"animation",children:[" ",Object(o.jsx)("script",{src:"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"}),Object(o.jsx)("lottie-player",{src:"https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json",background:"transparent",speed:".5",loop:!0,autoplay:!0})," ",Object(o.jsx)("br",{})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:"text-align-center",method:"POST",children:[Object(o.jsxs)("h3",{children:[" ",Object(o.jsx)("b",{children:"Log-In"})," "]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email "}),Object(o.jsx)("input",{type:"email",name:"email",onChange:y,on:!0,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",required:!0})]}),Object(o.jsxs)("div",{className:"mb-3",id:"password",children:[Object(o.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(o.jsx)("input",{type:x,name:"password",onChange:y,className:"form-control",id:"exampleInputPassword1",required:!0}),Object(o.jsx)("i",{onClick:function(){"password"==x?(O("text"),k("bi bi-eye")):(O("password"),k("bi bi-eye-slash"))},className:v,id:"icon"})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:N,children:"Login"})]})})]})})};var C=function(){return Object(o.jsxs)("div",{className:"footer bg-dark",children:[Object(o.jsxs)("div",{className:"footer-logo",children:[Object(o.jsx)("h1",{children:"Task-App"}),Object(o.jsxs)("ul",{className:"logo-list",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.instagram.com/piyush_t29/",target:"_blank",children:Object(o.jsx)("i",{class:"bi bi-instagram"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/Drigger91",target:"_blank",children:Object(o.jsx)("i",{class:"bi bi-github"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("i",{class:"bi bi-twitter"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("i",{class:"bi bi-facebook"})})})]})]}),Object(o.jsxs)("div",{className:"footer-list",children:[Object(o.jsx)("h3",{className:"footer-heading",children:" Contact"}),Object(o.jsx)("hr",{className:"line"}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{class:"bi bi-telephone-fill"}),": +91-8103595203"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{class:"bi bi-github"})," : Drigger91"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{class:"bi bi-envelope-fill"})," : mepiyusht@gmail.com"]})]})]}),Object(o.jsxs)("div",{className:"footer-list",children:[Object(o.jsx)("h3",{className:"footer-heading",children:" Links"})," ",Object(o.jsx)("hr",{className:"line"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{className:"footer-navlinks",to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{className:"footer-navlinks",to:"/ContactUs",children:"Contact "})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{className:"footer-navlinks",to:"/SignUp",children:"SignUp"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{className:"footer-navlinks",to:"/Login",children:"LogIn"})})]})]})]})};var I=function(){return Object(o.jsx)("div",{className:"contactpage",children:Object(o.jsx)("div",{className:"contact",children:Object(o.jsxs)("div",{className:"contact-form",children:[Object(o.jsx)("h1",{className:"form-heading",children:"Get in Touch"})," ",Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"formrow",children:[Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Name"}),Object(o.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:""})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Email "}),Object(o.jsx)("input",{type:"email",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com"})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Phone"}),Object(o.jsx)("input",{type:"number",class:"form-control",id:"exampleFormControlInput1",placeholder:"+91-xxxxxxxxxx"})]})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Message:"}),Object(o.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1"})]}),Object(o.jsx)("button",{className:"btn btn-primary",children:"Send Message"})]})})})};f.a.setAppElement("#root");var A=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(k,{})}),Object(o.jsx)(i.a,{path:"/profile",children:Object(o.jsx)(y,{})}),Object(o.jsx)(i.a,{path:"/SignUp",children:Object(o.jsx)(N,{})}),Object(o.jsx)(i.a,{path:"/LogIn",children:Object(o.jsx)(w,{})}),Object(o.jsx)(i.a,{path:"/ContactUs",children:Object(o.jsx)(I,{})}),Object(o.jsx)(C,{})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(A,{})})}),document.getElementById("root")),S()}},[[50,1,2]]]);
//# sourceMappingURL=main.5e9945d5.chunk.js.map