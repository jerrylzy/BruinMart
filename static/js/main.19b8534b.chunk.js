(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,a){e.exports=a(398)},198:function(e,t,a){},255:function(e,t,a){},394:function(e,t,a){},396:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(23),s=a.n(l),o=(a(194),a(196),a(198),a(9)),c=a(10),i=a(12),m=a(11),u=a(13),d=a(5),p=a(2),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.onSubmit=a.onSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.toggle(),this.props.reserveItem(this.props.item.id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{block:!0,color:"primary",className:"item-button",onClick:this.toggle},"Reserve"),r.a.createElement(p.p,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(p.s,{toggle:this.toggle},"Reserve Item"),r.a.createElement(p.q,null,'You are about to reserve the item "',this.props.item.name,'" from ',this.props.item.seller,".",r.a.createElement("br",null),"Are you sure?",r.a.createElement("br",null)," ",r.a.createElement("br",null),"You will be able to see the seller's contact information and continue with this deal under the \"",r.a.createElement("span",{className:"fa fa-exchange fa-lg"}),' Ongoing" section in the sidebar.'),r.a.createElement(p.r,null,r.a.createElement(p.a,{color:"primary",onClick:this.onSubmit},"Confirm")," ",r.a.createElement(p.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{block:!0,color:"danger",className:"item-button",onClick:this.toggle},"Save"),r.a.createElement(p.p,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(p.s,{toggle:this.toggle},"Save Item"),r.a.createElement(p.q,null,'You are about to save the item "',this.props.item.name,'" from ',this.props.item.seller,".",r.a.createElement("br",null),'You will be able to view this item under "',r.a.createElement("span",{className:"fa fa-heart-o fa-lg"}),' Saved Items" in the sidebar.',r.a.createElement("br",null)," ",r.a.createElement("br",null),"Saving will not reserve this item for you."),r.a.createElement(p.r,null,r.a.createElement(p.a,{color:"primary",onClick:this.toggle},"Confirm")," ",r.a.createElement(p.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(r.a.Component),f=a(175),E=a.n(f);function b(e){var t=e.item,a=e.reserveItem;return r.a.createElement(p.b,null,r.a.createElement(p.e,{top:!0,width:"100%",className:"card-img-top img-fluid",src:t.picture,alt:t.name}),r.a.createElement(p.c,null,r.a.createElement(p.h,{className:"card-title"},r.a.createElement("span",{style:{width:"27.3vw",wordWrap:"break-word"}}," ",t.name," "),r.a.createElement("span",null," $",t.price)),r.a.createElement(p.f,null,t.seller,r.a.createElement("br",null),r.a.createElement(E.a,{date:t.time,format:"MMM D YYYY HH:MM"})),r.a.createElement(p.g,{style:{width:"27.3vw",wordWrap:"break-word"}},t.detail),r.a.createElement(p.y,null,r.a.createElement(p.i,{xl:{size:4,offset:1}},r.a.createElement(h,{item:t,reserveItem:a})),r.a.createElement(p.i,{xl:{size:4,offset:2}},r.a.createElement(g,{item:t})))))}var v=function(e){var t=e.sellItems.map(function(t){return r.a.createElement("div",{key:t.id,className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(b,{item:t,reserveItem:e.reserveItem})))});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row start-of-home"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Items On Sale"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(p.d,null,t)))},y=a(24),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("profile"+this.props.userInfo),r.a.createElement(p.n,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Hello ",this.props.userInfo.name,","),r.a.createElement("p",null,"email: ",this.props.userInfo.email),r.a.createElement("p",null,"contact number: ",this.props.userInfo.tel)))))}}]),t}(n.Component),I=a(15),N=a(91),j=a(127),w=a.n(j);w.a.initializeApp({apiKey:"AIzaSyDpr5SspydURpwNzpjr2F9kmC1WLwQaH9w",authDomain:"jerrylzylzy.firebaseapp.com",databaseURL:"https://jerrylzylzy.firebaseio.com",projectId:"jerrylzylzy",storageBucket:"jerrylzylzy.appspot.com",messagingSenderId:"1089192741461"});var k=w.a.database(),S=k.ref("bruinmart/items/"),C=k.ref("bruinmart/users/"),L=function(e){return{type:"RESERVE_ITEM",payload:e}},P=function(e){return{type:"ADD_ITEMS",payload:e}},x=function(){return{type:"ITEMS_LOADING"}},D=function(e){return{type:"ITEMS_FAILED",payload:e}},M=function(e,t){return function(a){return C.child(e).once("value").then(function(n){var r=n.val();if(null===r)throw alert("Username does not exist."),Error("Username does not exist.");if(r.password!==t)throw alert("Password is wrong!"),Error("Password is wrong!");var l=[];for(var s in r.posts)r.posts.hasOwnProperty(s)&&l.push(r.posts[s]);r.posts=l,a(R(e,t,r))}).catch(function(e){a(F(e.message))})}},F=function(e){return{type:"LOG_IN_FAILED",payload:e}},R=function(e,t,a){return{type:"LOG_IN",username:e,password:t,userInfo:a}},U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1,username:"",password:"",email:"",tel:""},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a.onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value)),e.preventDefault()}},{key:"onClick",value:function(){this.toggle(),this.props.StoreUserInfo(this.state.username,this.state.password,this.state.email,this.state.tel)}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.a,{block:!0,className:"item-button",onClick:this.toggle,color:"secondary"},"Register"),r.a.createElement(p.p,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(p.s,{toggle:this.toggle},"Register"),r.a.createElement(p.q,null,r.a.createElement(p.j,{onSubmit:this.handleLogin},r.a.createElement(p.k,null,r.a.createElement(p.o,{htmlFor:"username"},"Username"),r.a.createElement(p.m,{type:"text",id:"username",name:"username",onChange:this.onChange,value:this.state.username})),r.a.createElement(p.k,null,r.a.createElement(p.o,{htmlFor:"password"},"Password"),r.a.createElement(p.m,{type:"password",id:"password",name:"password",onChange:this.onChange,value:this.state.password})),r.a.createElement(p.k,null,r.a.createElement(p.o,{htmlFor:"email"},"Email"),r.a.createElement(p.m,{type:"email",id:"email",name:"email",onChange:this.onChange,value:this.state.email})),r.a.createElement(p.k,null,r.a.createElement(p.o,{htmlFor:"tel"},"Contact number"),r.a.createElement(p.m,{type:"tel",id:"tel",name:"tel",onChange:this.onChange,value:this.state.tel})),r.a.createElement(p.a,{type:"submit",value:"submit",onClick:function(){return e.onClick()},color:"primary"},"Register")))))}}]),t}(r.a.Component),_=Object(y.connect)(function(e){return{username:e.users.username,password:e.users.password,isLoggedin:e.users.isLoggedIn}},{StoreUserInfo:function(e,t,a,n){return function(r){return console.log(n),C.child(e).update({password:t,email:a,tel:n,avatar:"assets/images/joe_bruin.jpg",posts:[]}).then(function(){r(M(e,t))})}}})(U),z=function(e){return e&&e.length},T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.onSubmit=a.onSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){this.props.fetchUserInfo(e.username,e.password)}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{style:{background:"transparent"},onClick:this.toggle},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})),r.a.createElement(p.p,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(p.s,{toggle:this.toggle},"Login"),r.a.createElement(p.q,null,r.a.createElement(I.Form,{model:"login",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement(p.y,{className:"form-group"},r.a.createElement(p.o,{htmlFor:"username",xs:{size:1,offset:1}},r.a.createElement("span",{className:"fa fa-user fa-lg"})),r.a.createElement(p.i,{xs:8},r.a.createElement(I.Control.text,{model:".username",id:"username",name:"username",placeholder:"Username",className:"form-control",validators:{required:z}}),r.a.createElement(I.Errors,{className:"text-danger",model:".username",show:"touched",messages:{required:"Required",error:"Username doesn't exist!"}}))),r.a.createElement(p.y,{className:"form-group"},r.a.createElement(p.o,{htmlFor:"password",xs:{size:1,offset:1}},r.a.createElement("span",{className:"fa fa-lock fa-lg"})),r.a.createElement(p.i,{xs:8},r.a.createElement(I.Control.password,{model:".password",id:"password",name:"password",placeholder:"Password",className:"form-control",validators:{required:z}}),r.a.createElement(I.Errors,{className:"text-danger",model:".password",show:"touched",messages:{required:"Required"}}))),r.a.createElement(p.y,null,r.a.createElement(p.i,{xl:{size:3,offset:2}},r.a.createElement(_,null)),r.a.createElement(p.i,{xl:{size:3,offset:2}},r.a.createElement(p.a,{block:!0,className:"item-button",value:"submit",color:"primary"},"Login")))))))}}]),t}(n.Component),A=(a(255),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.props.filterResults(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"component-search-input"},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Search Here",style:{color:"white"},onChange:this.handleChange})))}}]),t}(n.Component)),q=a(188),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onPreviewDrop=function(e){var t=new FileReader;t.readAsDataURL(e[0]),t.onloadend=function(){var n=t.result;e[0].preview=n,a.handleCheck(e[0])?alert("Please do not upload the same image twice!"):a.setState({files:a.state.files.concat(e[0])})}},a.deleteFile=function(e){a.setState({files:a.state.files.filter(function(t){return t!==e})})},a.state={files:[]},a.deleteFile=a.deleteFile.bind(Object(d.a)(Object(d.a)(a))),a.onPreviewDrop=a.onPreviewDrop.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleCheck",value:function(e){return this.state.files.some(function(t){return e.name===t.name})}},{key:"render",value:function(){var e=this,t={display:"inline",width:100,height:100};return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{className:"dropzone",accept:"image/*",onDrop:this.onPreviewDrop},r.a.createElement("div",{className:"upload-box"},"Drag your image here or click the box to browse your local files.")),this.state.files.length>0&&r.a.createElement(n.Fragment,null,r.a.createElement("h4",null,"Uploaded Pictures"),this.state.files.map(function(a,n){return r.a.createElement("div",{key:n},r.a.createElement("img",{alt:a.name,key:a.preview,src:a.preview,style:t}),a.name," ",r.a.createElement(p.a,{value:"delete",onClick:function(){return e.deleteFile(a)}},"delete"))}),console.log(this.state.files)))}}]),t}(n.Component),G=function(e){return e&&e.length},H=function(e){return!isNaN(Number(e))},W=function(e){return e&&!0===e},$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggleModal=a.toggleModal.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleSubmit",value:function(e){this.props.resetNewPostForm(),this.props.postItem({name:e.itemName,price:parseInt(e.itemPrice),picture:"https://s7d4.scene7.com/is/image/roomandboard/?layer=0&size=498,400&scl=1&src=964101_wood_W&layer=comp&$prodzoom0$",reserved:!1,seller:this.props.users.userInfo.name,time:(new Date).toISOString(),detail:""===e.itemDes?"No more details provided":e.itemDes,username:this.props.users.username}),this.toggleModal()}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement(p.a,{style:{background:"transparent"},onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-plus fa-lg"})),r.a.createElement(p.p,{className:"modal-lg",isOpen:this.state.modal,toggle:this.toggleModal},r.a.createElement(p.s,{toggle:this.toggleModal},"New Post"),r.a.createElement(p.q,null,r.a.createElement(I.Form,{model:"newPost",onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(p.y,{className:"form-group"},r.a.createElement(p.o,{htmlFor:".itemName",md:1},r.a.createElement("b",null,"Name")),r.a.createElement(p.i,{md:{size:5,offset:1}},r.a.createElement(I.Control.text,{model:".itemName",id:"itemName",name:"itemName",placeholder:"Enter the name of the item you want to sell",className:"form-control",validators:{required:G,minLength:(e=3,function(t){return!t||t.length>=e}),maxLength:function(e){return function(t){return!t||t.length<=e}}(15)}}),r.a.createElement(I.Errors,{className:"text-danger",model:".itemName",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters. ",maxLength:"Must be 15 characters or less. "}})),r.a.createElement(p.o,{htmlFor:".itemPrice",md:1},r.a.createElement("b",null,"Price")),r.a.createElement(p.i,{md:3},r.a.createElement(I.Control.text,{model:".itemPrice",id:"itemPrice",name:"itemPrice",placeholder:"Enter your price in US dollars",className:"form-control",validators:{required:G,isNumber:H}}),r.a.createElement(I.Errors,{className:"text-danger",model:".itemPrice",show:"touched",messages:{required:"Required. ",isNumber:"Has to be a number. "}}))),r.a.createElement(p.y,{className:"form-group"},r.a.createElement(p.o,{htmlFor:".itemDes",md:2},r.a.createElement("b",null,"Item Description")),r.a.createElement(p.i,{md:9},r.a.createElement(I.Control.textarea,{model:".itemDes",id:"itemDes",name:"itemDes",placeholder:"Enter a few lines to describe your item and outline anything potential buyers may need to know",className:"form-control",rows:"4"}))),r.a.createElement(p.y,{className:"form-group"},r.a.createElement(p.o,{htmlFor:".pictures",md:2},r.a.createElement("b",null,"Pictures")),r.a.createElement(p.i,{md:9},r.a.createElement(p.l,{color:"muted"},"Upload a picture for your item here."),r.a.createElement(Y,{name:"itemPic",id:"itemPic",className:"form-control"}))),r.a.createElement(p.y,{className:"form-group"},r.a.createElement(p.i,{md:{offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(p.o,{check:!0,md:9},r.a.createElement(I.Control.checkbox,{model:".agreeTerms",name:"agreeTerms",className:"form-check-input",validators:{checked:W}})," ","I understand that my information will only be provided to any potential buyers after they have reserved my item."),r.a.createElement(I.Errors,{className:"text-danger",model:".agreeTerms",show:"touched",messages:{checked:"You need to agree. "}})))),r.a.createElement(p.y,{className:"form-group"},r.a.createElement(p.i,{md:{size:3,offset:2}},r.a.createElement(p.a,{block:!0,type:"submit",value:"submit",color:"primary"},"Post")),r.a.createElement(p.i,{md:{size:3,offset:3}},r.a.createElement(p.a,{block:!0,color:"secondary",onClick:this.toggleModal},"Cancel")))))))}}]),t}(r.a.Component);var B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isModalOpen:!1},a.toggleModal=a.toggleModal.bind(Object(d.a)(Object(d.a)(a))),a.toggleSideNav=a.props.toggleSideNav.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.v,{dark:!0,fixed:"top"},r.a.createElement("div",{className:"container"},r.a.createElement(p.x,{onClick:this.toggleSideNav}),r.a.createElement(p.t,{className:"mx-auto col-6 col-lg-8",navbar:!0},r.a.createElement(p.u,null,r.a.createElement(A,{filterResults:this.props.filterResults,fetchItems:this.props.fetchItems}))),r.a.createElement(p.t,{className:"col-2",navbar:!0},r.a.createElement(p.u,null,(e=this.props.resetNewPostForm,t=this.props.postItem,a=this.props.fetchUserInfo,(n=this.props.users).isLoggedIn?r.a.createElement($,{resetNewPostForm:e,postItem:t,users:n}):r.a.createElement(T,{fetchUserInfo:a,loginError:n.userInfo.loginError})))))));var e,t,a,n}}]),t}(n.Component),J=a(179),V=a(403),K=a(95);var Q=function(e){var t,a,n,l,s=e.isLoggedIn?e.users.userInfo.avatar:"assets/images/joe_bruin.jpg";return r.a.createElement(J.slide,e,r.a.createElement(p.t,{navbar:!0,onClick:e.toggleSideNav},r.a.createElement(p.w,{className:"mr-auto col-2 col-sm-2"},r.a.createElement(K.a,{size:100,src:s,round:!0})),(t=e.isLoggedIn,a=e.users.userInfo.name,n=e.fetchUserInfo,l=e.loginError,t?r.a.createElement("div",null,r.a.createElement(p.u,null,r.a.createElement(V.a,{className:"nav-link",to:"/profile"},r.a.createElement("h4",null,"Hello, ",a," "))),r.a.createElement(p.u,null,r.a.createElement(V.a,{className:"nav-link",to:"/profile"},r.a.createElement("span",{className:"fa fa-user fa-lg"})," My Profile")),r.a.createElement(p.u,null,r.a.createElement(V.a,{className:"nav-link",to:"/posts"},r.a.createElement("span",{className:"fa fa-stack-exchange fa-lg"})," My Posts")),r.a.createElement(p.u,null,r.a.createElement(V.a,{className:"nav-link",to:"/saved"},r.a.createElement("span",{className:"fa fa-heart-o fa-lg"})," Saved Items")),r.a.createElement(p.u,null,r.a.createElement(V.a,{className:"nav-link",to:"/ongoing"},r.a.createElement("span",{className:"fa fa-exchange fa-lg"})," Ongoing")),r.a.createElement(p.u,null,r.a.createElement(V.a,{className:"nav-link",to:"/sold"},r.a.createElement("span",{className:"fa fa-shopping-bag fa-lg"})," Sold")),r.a.createElement(p.u,null,r.a.createElement(V.a,{className:"nav-link",to:"/settings"},r.a.createElement("span",{className:"fa fa-cog fa-lg"})," Settings"))):r.a.createElement("div",null,r.a.createElement(p.u,null,r.a.createElement("h4",null,"Please Log in")),r.a.createElement(p.u,null,r.a.createElement(T,{fetchUserInfo:n,loginError:l}))))))},X=a(184),Z=a.n(X),ee=a(304),te=a.n(ee),ae=a(183),ne=a.n(ae),re=a(182),le=a.n(re),se=a(54),oe=a.n(se),ce={background:"white",padding:"0px",margin:"0px"};function ie(e){var t=e.item,a="Not Reserved";1==t.reserved&&(a="Reserved");var n=t.time;return n=n.slice(0,10),r.a.createElement(te.a,{alignItems:"flex-start",style:{height:200}},r.a.createElement(le.a,null,r.a.createElement(K.a,{alt:"Remy Sharp",src:t.picture,size:"150"})),r.a.createElement(ne.a,{primary:r.a.createElement(oe.a,{component:"span",color:"textPrimary",variant:"display1"},t.name),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{component:"span",color:"textPrimary",variant:"title"},a),r.a.createElement(oe.a,{component:"span",color:"textPrimary",variant:"body2"},n),r.a.createElement(oe.a,{component:"span",color:"textPrimary",variant:"body2"},"Price: $",t.price),"Description: ",t.detail)}))}var me=function(e){if(!e.isLoggedIn)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Please Login First"),r.a.createElement("hr",null)));var t=e.sellItems.map(function(t){var a=[];for(var n in e.posts)e.posts.hasOwnProperty(n)&&a.push(e.posts[n]);return a.indexOf(t.id)<0?r.a.createElement("div",null):(console.log(t.id),r.a.createElement("div",{key:t.id,className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(ie,{item:t}))))});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"My Posts"),r.a.createElement("hr",null)),r.a.createElement("div",{style:ce},r.a.createElement(Z.a,null,t)))},ue=a(404),de=a(303),pe=a(401),he=a(405),ge=(a(394),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={loggedIn:!1,isSideNavOpen:!1},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.toggleSideNav=a.toggleSideNav.bind(Object(d.a)(Object(d.a)(a))),a.handleStateChange=a.handleStateChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"handleStateChange",value:function(e){this.setState({isSideNavOpen:e.isOpen})}},{key:"toggleSideNav",value:function(){this.setState({isSideNavOpen:!this.state.isSideNavOpen})}},{key:"handleSubmit",value:function(e){this.setState({loggedIn:!0}),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"App"},r.a.createElement(Q,{noOverlay:!0,users:this.props.users,pageWrapId:"page-wrapper",outerContainerId:"App",isOpen:this.state.isSideNavOpen,onStateChange:function(t){return e.handleStateChange(t)},toggleSideNav:this.toggleSideNav,isLoggedIn:this.props.users.isLoggedIn,fetchUserInfo:this.props.fetchUserInfo}),r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(B,{filterResults:this.props.filterResults,fetchItems:this.props.fetchItems,toggleSideNav:this.toggleSideNav,resetNewPostForm:this.props.resetNewPostForm,postItem:this.props.postItem,isLoggedIn:this.props.users.isLoggedIn,fetchUserInfo:this.props.fetchUserInfo,loginError:this.props.loginError,users:this.props.users}),r.a.createElement(ue.a,null,r.a.createElement(de.a,{exact:!0,path:"/",component:function(){return r.a.createElement(v,{sellItems:e.props.sellItems.sellItems,reserveItem:e.props.reserveItem})}}),r.a.createElement(de.a,{path:"/profile",component:function(){return r.a.createElement(O,{userInfo:e.props.users.userInfo})}}),r.a.createElement(de.a,{path:"/posts",component:function(){return r.a.createElement(me,{sellItems:e.props.sellItems.sellItems,posts:e.props.users.userInfo.posts,isLoggedIn:e.props.users.isLoggedIn})}}),r.a.createElement(pe.a,{to:"/"}))))}}]),t}(n.Component)),fe=Object(he.a)(Object(y.connect)(function(e){return{sellItems:e.sellItems,users:e.users,loginError:e.users.error}},function(e){return{postItem:function(t){return e(function(e){return function(t){return S.push(e).then(function(a){e.id=a.key,t(function(e){return{type:"ADD_ITEM",payload:e}}(e)),C.child(e.username+"/posts/").push(e.id),t({type:"ADD_ITEM_USER",payload:e.id}),alert("Post Successful!")}).catch(function(e){return alert("Post failed! Error: "+e.message)})}}(t))},filterResults:function(t){e(function(e){return{type:"FILTER",payload:{searchText:e,maxResults:arguments.length>1&&void 0!==arguments[1]?arguments[1]:20}}}(t))},fetchItems:function(){e(function(e){return e(x(!0)),S.once("value").then(function(t){var a=t.val();if(console.log(a),null===a)throw Error("Fetch failed.");var n=[];for(var r in a)if(a.hasOwnProperty(r)){var l=a[r];l.id=r,n.push(l)}e(P(n))}).catch(function(t){return e(D(t.message))})})},resetNewPostForm:function(){e(I.actions.reset("newPost"))},reserveItem:function(t){e(function(e){return function(t){return S.child("/"+e).update({reserved:!0}).then(function(a){if(a)throw a;console.log("error checking"),t(L(e)),alert("Reserved Successful!")}).catch(function(e){t(D(e.message)),alert("Reserved failed! Error: "+e.message)})}}(t))},resetLoginForm:function(){e(I.actions.reset("login"))},fetchUserInfo:function(t,a,n){e(M(t,a))}}})(ge)),Ee=(a(396),a(402)),be=a(19),ve=a(32),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,sellItems:[],err:null,origSellItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESERVE_ITEM":for(var a=t.payload,n=0;n<e.sellItems.length;n++)if(e.sellItems[n].id===a){e.sellItems[n].reserved=!0,console.log(e.sellItems[n].reserved);break}return e;case"FILTER":var r=t.payload.searchText;return Object(be.a)({},e,{isLoading:!1,err:null,sellItems:e.origSellItems.filter(function(e){return!!e.name.toLowerCase().includes(r.toLowerCase())||!(!e.keywords||!e.keywords.includes(r))}).slice(0,t.payload.maxResults)});case"ADD_ITEM":return Object(be.a)({},e,{sellItems:e.sellItems.concat(t.payload),origSellItems:e.origSellItems.concat(t.payload)});case"ADD_ITEMS":return Object(be.a)({},e,{isLoading:!1,err:null,sellItems:t.payload,origSellItems:t.payload});case"ITEMS_LOADING":return Object(be.a)({},e,{isLoading:!0,err:null,sellItems:[],origSellItems:[]});case"ITEMS_FAILED":return Object(be.a)({},e,{isLoading:!1,err:t.payload,sellItems:[],origSellItems:[]});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedIn:!1,username:"",userInfo:[],error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return Object(be.a)({},e,{isLoggedIn:!0,username:t.username,userInfo:t.userInfo,error:null});case"LOG_OUT":return Object(be.a)({},e,{isLoggedIn:!1,username:"",userInfo:[],error:null});case"ADD_ITEM_USER":return Object(be.a)({},e,{userInfo:Object(be.a)({},e.userInfo,{posts:e.userInfo.posts.concat(t.payload)})});case"SIGN_UP":return Object(be.a)({},e,{isLoggedIn:!0,username:t.username,password:t.password});case"LOG_IN_FAILED":return Object(be.a)({},e,{isLoggedIn:!1,username:"",userInfo:[],error:t.payload});default:return e}},Ie=a(186),Ne=a(187),je=a.n(Ne),we={itemName:"",itemPrice:"",itemDes:"",pictures:"",agreeTerms:!1},ke={username:"",password:""},Se=Object(ve.createStore)(Object(ve.combineReducers)(Object(be.a)({sellItems:ye,users:Oe},Object(I.createForms)({newPost:we,login:ke}))),Object(ve.applyMiddleware)(Ie.a,je.a)),Ce=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(y.Provider,{store:Se},r.a.createElement(Ee.a,{basename:"/BruinMart"},r.a.createElement("div",null,r.a.createElement(fe,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[189,2,1]]]);
//# sourceMappingURL=main.19b8534b.chunk.js.map