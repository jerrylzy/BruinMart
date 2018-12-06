(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,a){e.exports=a(471)},221:function(e,t,a){},334:function(e,t,a){},467:function(e,t,a){},469:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(22),l=a.n(s),o=(a(217),a(219),a(221),a(10)),i=a(11),c=a(13),m=a(12),u=a(14),d=a(5),f=a(2),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.onSubmit=a.onSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.toggle(),this.props.reserveItem(this.props.item.id,this.props.userInfo.name,this.props.userInfo.email,this.props.userInfo.tel)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f.a,{block:!0,color:"primary",className:"item-button",onClick:this.toggle},"Reserve"),n.a.createElement(f.m,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(f.p,{toggle:this.toggle},"Reserve Item"),n.a.createElement(f.n,null,'You are about to reserve the item "',this.props.item.name,'" from ',this.props.item.seller,".",n.a.createElement("br",null),"Are you sure?",n.a.createElement("br",null)," ",n.a.createElement("br",null),"You will be able to see the seller's contact information and continue with this deal under the \"",n.a.createElement("span",{className:"fa fa-exchange fa-lg fa-fw"}),' Ongoing" section in the sidebar.'),n.a.createElement(f.o,null,n.a.createElement(f.a,{color:"primary",onClick:this.onSubmit},"Confirm")," ",n.a.createElement(f.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(r.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f.a,{block:!0,color:"danger",className:"item-button",onClick:this.toggle},"Save"),n.a.createElement(f.m,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(f.p,{toggle:this.toggle},"Save Item"),n.a.createElement(f.n,null,'You are about to save the item "',this.props.item.name,'" from ',this.props.item.seller,".",n.a.createElement("br",null),'You will be able to view this item under "',n.a.createElement("span",{className:"fa fa-heart-o fa-lg fa-fw"}),' Saved Items" in the sidebar.',n.a.createElement("br",null)," ",n.a.createElement("br",null),"Saving will not reserve this item for you."),n.a.createElement(f.o,null,n.a.createElement(f.a,{color:"primary",onClick:this.toggle},"Confirm")," ",n.a.createElement(f.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(n.a.Component),g=a(197),E=a.n(g),v=a(130);function b(e){var t=e.item,a=e.reserveItem,r=e.users;return n.a.createElement(f.b,null,n.a.createElement(f.e,{top:!0,width:"100%",className:"card-img-top img-fluid",src:t.picture,alt:t.name}),n.a.createElement(f.c,null,n.a.createElement(f.h,{className:"card-title"},n.a.createElement("span",{style:{width:"27.3vw",wordWrap:"break-word"}}," ",t.name," "),n.a.createElement("span",null," $",t.price)),n.a.createElement(f.f,null,t.seller,n.a.createElement("br",null),n.a.createElement(E.a,{date:t.time,format:"MMM D YYYY HH:MM"})),n.a.createElement(f.g,{style:{width:"27.3vw",wordWrap:"break-word"}},t.detail),n.a.createElement(f.v,null,n.a.createElement(f.i,{xl:{size:4,offset:1}},function(e,t,a){return e.isLoggedIn&&e.username!==t.username?n.a.createElement(p,{userInfo:e.userInfo,item:t,reserveItem:a}):n.a.createElement("div",null)}(r,t,a)),n.a.createElement(f.i,{xl:{size:4,offset:2}},function(e,t){return e.isLoggedIn&&e.username!==t.username?n.a.createElement(h,{item:t}):n.a.createElement("div",null)}(r,t)))))}var N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).reserveItem=a.reserveItem.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"reserveItem",value:function(e,t,a,r){var n=this;this.props.reserveItem(e,t,a,r),Object(v.setTimeout)(function(){return n.forceUpdate()},500)}},{key:"render",value:function(){var e=this,t=this.props.sellItems.sort(function(e,t){return new Date(t.time)-new Date(e.time)}).filter(function(e){return!e.reserved.isReserved}).map(function(t){return n.a.createElement("div",{key:t.id,className:"row align-items-start"},n.a.createElement("div",{className:"col-12 col-md m-1"},n.a.createElement(b,{item:t,reserveItem:e.reserveItem,users:e.props.users})))});return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row start-of-home"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,"Items On Sale"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row"},n.a.createElement(f.d,null,t)))}}]),t}(r.Component),I=a(6),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.onSubmit=a.onSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onSubmit",value:function(e){this.props.StoreUserInfo(e.name,this.props.userInfo.username,this.props.userInfo.password,e.email,e.tel)}},{key:"render",value:function(){var e=this;return this.props.isLoggedIn?n.a.createElement("div",{className:"start-of-home"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h1",null,"Hello, ",this.props.userInfo.name),n.a.createElement("hr",null)),n.a.createElement(f.j,{model:"profile",onSubmit:function(t){return e.onSubmit(t)}},n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"name",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-id-card-o fa-lg"})),n.a.createElement(f.i,{xs:9},n.a.createElement(I.Control.text,{model:".name",id:"name",name:"name",value:this.props.userInfo.name,className:"form-control"}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"email",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-envelope-o fa-lg"})),n.a.createElement(f.i,{xs:9},n.a.createElement(I.Control.text,{model:".email",id:"email",name:"email",value:this.props.userInfo.email,className:"form-control"}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"tel",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-phone fa-lg"})),n.a.createElement(f.i,{xs:9},n.a.createElement(I.Control.text,{model:".tel",id:"tel",name:"tel",value:this.props.userInfo.tel,className:"form-control"}))))):n.a.createElement("div",{className:"container start-of-home"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,"Please Login First"),n.a.createElement("hr",null)))}}]),t}(r.Component),y=a(474),w=a(134),j=a.n(w);a(268);j.a.initializeApp({apiKey:"AIzaSyDpr5SspydURpwNzpjr2F9kmC1WLwQaH9w",authDomain:"jerrylzylzy.firebaseapp.com",databaseURL:"https://jerrylzylzy.firebaseio.com",projectId:"jerrylzylzy",storageBucket:"jerrylzylzy.appspot.com",messagingSenderId:"1089192741461"});var S=j.a.database(),k=S.ref("bruinmart/items/"),x=S.ref("bruinmart/users/"),P=function(e,t){return{type:"RESERVE_ITEM",payload:{key:e,reserved:t}}},C=function(e){return{type:"ADD_ITEMS",payload:e}},L=function(){return{type:"ITEMS_LOADING"}},R=function(e){return{type:"ITEMS_FAILED",payload:e}},U=function(e){return function(t){return x.child(e).once("value").then(function(a){var r=a.val(),n=[];for(var s in r.posts)r.posts.hasOwnProperty(s)&&n.push(r.posts[s]);r.posts=n,t(D(e,r)),t(I.actions.change("profile.email",r.email)),t(I.actions.change("profile.tel",r.tel))})}},D=function(e,t){return{type:"LOG_IN",username:e,userInfo:t}},M=a(26),F=a(68),_=a.n(F),z=function(e,t){(function(e){return new Promise(function(t){x.child(e).once("value").then(function(e){var a=e.val();t(null===a?"USER_NOT_EXIST":"USER_EXISTS")})})})(e).then(function(e){t("USER_NOT_EXIST"===e)})},T=function(e){return e&&!_.a.isEmpty(e,{ignore_whitespace:!0})},q=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,"");return t.length<=3?t:t.length<=7?"(".concat(t.slice(0,3),") ").concat(t.slice(3)):"(".concat(t.slice(0,3),") ").concat(t.slice(3,6),"-").concat(t.slice(6,10))},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.onSubmit=a.onSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"formatPhoneNumbers",value:function(e){this.props.formatPhoneNumbers(e.target.value,q)}},{key:"onSubmit",value:function(e){this.toggle(),this.props.StoreUserInfo(e.name,e.username,e.password,e.email,e.tel)}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(f.a,{block:!0,className:"item-button",onClick:this.toggle,color:"secondary"},"Register"),n.a.createElement(f.m,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(f.p,{toggle:this.toggle},"Register"),n.a.createElement(f.n,null,n.a.createElement(I.Form,{model:"register",onSubmit:function(t){return e.onSubmit(t)}},n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"name",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-id-card-o fa-lg fa-fw"})),n.a.createElement(f.i,{xs:9},n.a.createElement(I.Control.text,{model:".name",id:"name",name:"name",placeholder:"Your Name",className:"form-control",validators:{required:T}}),n.a.createElement(I.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required. "}}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"username",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-user fa-lg fa-fw"})),n.a.createElement(f.i,{xs:9},n.a.createElement(I.Control.text,{model:".username",id:"username",name:"username",placeholder:"Username",className:"form-control",asyncValidators:{doesUsernameExist:z},validators:{required:T}}),n.a.createElement(I.Errors,{className:"text-danger",model:".username",show:"touched",messages:{required:"Required. ",doesUsernameExist:"Username already exist in the database. "}}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"password",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-lock fa-lg fa-fw"})),n.a.createElement(f.i,{xs:9},n.a.createElement(I.Control.password,{model:".password",id:"password",name:"password",placeholder:"Password",className:"form-control",validators:{required:T}}),n.a.createElement(I.Errors,{className:"text-danger",model:".password",show:"touched",messages:{required:"Required. "}}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"email",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-envelope-o fa-lg fa-fw"})),n.a.createElement(f.i,{xs:9},n.a.createElement(I.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:T,isEmail:function(e){return e&&_.a.isEmail(e)}}}),n.a.createElement(I.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required. ",isEmail:"Wrong format. Email's format is ab@cd.ef"}}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"tel",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-phone fa-lg fa-fw"})),n.a.createElement(f.i,{xs:9},n.a.createElement(I.Control.text,{model:".tel",id:"tel",name:"tel",placeholder:"Phone Number",className:"form-control",onChange:function(t){return e.formatPhoneNumbers(t)},validateOn:"blur",updateOn:"blur",validators:{required:T,isMobilePhone:function(e){return e&&_.a.isMobilePhone(e,"en-US")}}}),n.a.createElement(I.Errors,{className:"text-danger",model:".tel",show:"touched",messages:{required:"Required. ",isMobilePhone:"Phone number's format is wrong. Please enter 10 digits."}}))),n.a.createElement(f.v,null,n.a.createElement(f.i,{xs:{size:4,offset:7}},n.a.createElement(f.a,{block:!0,type:"submit",value:"submit",color:"primary"},"Register")))))))}}]),t}(r.Component),W=Object(M.connect)(function(e){return{}},function(e){return{resetRegisterForm:function(){e(I.actions.reset("register"))},StoreUserInfo:function(t,a,r,n,s){e(function(e,t,a,r,n){return function(s){return x.child(t).update({name:e,password:a,email:r,tel:n,avatar:"assets/images/joe_bruin.jpg",posts:[]}).then(function(){s(U(t))})}}(t,a,r,n,s))}}})(A),V=function(){return!0},G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.onSubmit=a.onSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onSubmit",value:function(e){this.props.fetchUserInfo(e.username,e.password)}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this,t=void 0!==this.props.isSideBar?n.a.createElement(y.a,{className:"nav-link",to:"/home",onClick:this.toggle},n.a.createElement("h4",null,"Please Login")):n.a.createElement(f.a,{style:{background:"transparent"},onClick:this.toggle},n.a.createElement("span",{className:"fa fa-sign-in fa-lg fa-fw"}));return n.a.createElement("div",{className:"container"},t,n.a.createElement(f.m,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},n.a.createElement(f.p,{toggle:this.toggle},"Login"),n.a.createElement(f.n,null,n.a.createElement(I.Form,{model:"login",onSubmit:function(t){return e.onSubmit(t)}},n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"username",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-user fa-lg fa-fw"})),n.a.createElement(f.i,{xs:8},n.a.createElement(I.Control.text,{model:".username",id:"username",name:"username",placeholder:"Username",className:"form-control",validators:{required:T,isLoginValid:V}}),n.a.createElement(I.Errors,{className:"text-danger",model:".username",show:"touched",messages:{required:"Required. ",isLoginValid:"Username does not exist. "}}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:"password",xs:{size:1,offset:1}},n.a.createElement("span",{className:"fa fa-lock fa-lg fa-fw"})),n.a.createElement(f.i,{xs:8},n.a.createElement(I.Control.password,{model:".password",id:"password",name:"password",placeholder:"Password",className:"form-control",validators:{required:T,isLoginValid:V}}),n.a.createElement(I.Errors,{className:"text-danger",model:".password",show:"touched",messages:{required:"Required. ",isLoginValid:"Password is incorrect. "}}))),n.a.createElement(f.v,null,n.a.createElement(f.i,{xl:{size:3,offset:2}},n.a.createElement(W,{formatPhoneNumbers:this.props.formatPhoneNumbers})),n.a.createElement(f.i,{xl:{size:3,offset:2}},n.a.createElement(f.a,{block:!0,className:"item-button",value:"submit",color:"primary"},"Login")))))))}}]),t}(r.Component),Y=(a(334),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.props.filterResults(e.target.value)}},{key:"render",value:function(){return n.a.createElement("div",{className:"component-search-input"},n.a.createElement("div",null,n.a.createElement("input",{placeholder:"Search Here",style:{color:"white"},onChange:this.handleChange})))}}]),t}(r.Component)),H=a(211),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onPreviewDrop=function(e){var t=new FileReader;t.readAsDataURL(e[0]),t.onloadend=function(){var r=t.result;e[0].preview=r,a.handleCheck(e[0])?alert("Please do not upload the same image twice!"):a.setState({files:a.state.files.concat(e[0])})}},a.deleteFile=function(e){a.setState({files:a.state.files.filter(function(t){return t!==e})})},a.state={files:[]},a.deleteFile=a.deleteFile.bind(Object(d.a)(Object(d.a)(a))),a.onPreviewDrop=a.onPreviewDrop.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleCheck",value:function(e){return this.state.files.some(function(t){return e.name===t.name})}},{key:"render",value:function(){var e=this,t={display:"inline",width:100,height:100};return n.a.createElement(n.a.Fragment,null,n.a.createElement(H.a,{className:"dropzone",accept:"image/*",onDrop:this.onPreviewDrop},n.a.createElement("div",{className:"upload-box"},"Drag your image here or click the box to browse your local files.")),this.state.files.length>0&&n.a.createElement(r.Fragment,null,n.a.createElement("h4",null,"Uploaded Pictures"),this.state.files.map(function(a,r){return n.a.createElement("div",{key:r},n.a.createElement("img",{alt:a.name,key:a.preview,src:a.preview,style:t}),a.name," ",n.a.createElement(f.a,{value:"delete",onClick:function(){return e.deleteFile(a)}},"delete"))}),console.log(this.state.files)))}}]),t}(r.Component),X=function(e){return e&&e.length},$=function(e){return!isNaN(Number(e))},J=function(e){return e&&!0===e},K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={modal:!1},a.toggleModal=a.toggleModal.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleSubmit",value:function(e){this.props.resetNewPostForm(),this.props.postItem({name:e.itemName,price:parseInt(e.itemPrice),picture:"https://s7d4.scene7.com/is/image/roomandboard/?layer=0&size=498,400&scl=1&src=964101_wood_W&layer=comp&$prodzoom0$",reserved:!1,seller:this.props.users.userInfo.name,time:(new Date).toISOString(),detail:""===e.itemDes?"No more details provided":e.itemDes,username:this.props.users.username}),this.toggleModal()}},{key:"render",value:function(){var e,t=this;return n.a.createElement("div",null,n.a.createElement(f.a,{style:{background:"transparent"},onClick:this.toggleModal},n.a.createElement("span",{className:"fa fa-plus fa-lg fa-fw"})),n.a.createElement(f.m,{className:"modal-lg",isOpen:this.state.modal,toggle:this.toggleModal},n.a.createElement(f.p,{toggle:this.toggleModal},"New Post"),n.a.createElement(f.n,null,n.a.createElement(I.Form,{model:"newPost",onSubmit:function(e){return t.handleSubmit(e)}},n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:".itemName",md:1},n.a.createElement("b",null,"Name")),n.a.createElement(f.i,{md:{size:5,offset:1}},n.a.createElement(I.Control.text,{model:".itemName",id:"itemName",name:"itemName",placeholder:"Enter the name of the item you want to sell",className:"form-control",validators:{required:X,minLength:(e=3,function(t){return!t||t.length>=e}),maxLength:function(e){return function(t){return!t||t.length<=e}}(15)}}),n.a.createElement(I.Errors,{className:"text-danger",model:".itemName",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters. ",maxLength:"Must be 15 characters or less. "}})),n.a.createElement(f.l,{htmlFor:".itemPrice",md:1},n.a.createElement("b",null,"Price")),n.a.createElement(f.i,{md:3},n.a.createElement(I.Control.text,{model:".itemPrice",id:"itemPrice",name:"itemPrice",placeholder:"Enter your price in US dollars",className:"form-control",validators:{required:X,isNumber:$}}),n.a.createElement(I.Errors,{className:"text-danger",model:".itemPrice",show:"touched",messages:{required:"Required. ",isNumber:"Has to be a number. "}}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:".itemDes",md:2},n.a.createElement("b",null,"Item Description")),n.a.createElement(f.i,{md:9},n.a.createElement(I.Control.textarea,{model:".itemDes",id:"itemDes",name:"itemDes",placeholder:"Enter a few lines to describe your item and outline anything potential buyers may need to know",className:"form-control",rows:"4"}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.l,{htmlFor:".pictures",md:2},n.a.createElement("b",null,"Pictures")),n.a.createElement(f.i,{md:9},n.a.createElement(f.k,{color:"muted"},"Upload a picture for your item here."),n.a.createElement(B,{name:"itemPic",id:"itemPic",className:"form-control"}))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.i,{md:{offset:2}},n.a.createElement("div",{className:"form-check"},n.a.createElement(f.l,{check:!0,md:9},n.a.createElement(I.Control.checkbox,{model:".agreeTerms",name:"agreeTerms",className:"form-check-input",validators:{checked:J}})," ","I understand that my information will only be provided to any potential buyers after they have reserved my item."),n.a.createElement(I.Errors,{className:"text-danger",model:".agreeTerms",show:"touched",messages:{checked:"You need to agree. "}})))),n.a.createElement(f.v,{className:"form-group"},n.a.createElement(f.i,{md:{size:3,offset:2}},n.a.createElement(f.a,{block:!0,type:"submit",value:"submit",color:"primary"},"Post")),n.a.createElement(f.i,{md:{size:3,offset:3}},n.a.createElement(f.a,{block:!0,color:"secondary",onClick:this.toggleModal},"Cancel")))))))}}]),t}(n.a.Component);var Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isModalOpen:!1},a.toggleModal=a.toggleModal.bind(Object(d.a)(Object(d.a)(a))),a.toggleSideNav=a.props.toggleSideNav.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.s,{dark:!0,fixed:"top"},n.a.createElement("div",{className:"container"},n.a.createElement(f.u,{onClick:this.toggleSideNav}),n.a.createElement(f.q,{className:"mx-auto col-6 col-lg-8",navbar:!0},n.a.createElement(f.r,null,n.a.createElement(Y,{filterResults:this.props.filterResults,fetchItems:this.props.fetchItems}))),n.a.createElement(f.q,{className:"col-2",navbar:!0},n.a.createElement(f.r,null,(e=this.props.resetNewPostForm,t=this.props.postItem,a=this.props.fetchUserInfo,r=this.props.users,s=this.props.formatPhoneNumbers,r.isLoggedIn?n.a.createElement(K,{resetNewPostForm:e,postItem:t,users:r}):n.a.createElement(G,{fetchUserInfo:a,loginError:r.userInfo.loginError,formatPhoneNumbers:s})))))));var e,t,a,r,s}}]),t}(r.Component),Z=a(201),ee=a(97);var te=function(e){var t,a,r,s,l,o,i=e.isLoggedIn?e.users.userInfo.avatar:"assets/images/joe_bruin.jpg";return n.a.createElement(Z.slide,e,n.a.createElement(f.q,{navbar:!0,onClick:e.toggleSideNav},n.a.createElement(f.t,{className:"mr-auto col-2 col-sm-2"},n.a.createElement(ee.a,{size:100,src:i,round:!0})),(t=e.isLoggedIn,a=e.users.userInfo.name,r=e.fetchUserInfo,s=e.loginError,l=e.logoutUser,o=e.formatPhoneNumbers,t?n.a.createElement("div",null,n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/profile"},n.a.createElement("h4",null,"Hello, ",a," "))),n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/home"},n.a.createElement("span",{className:"fa fa-home fa-lg fa-fw"})," Market")),n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/profile"},n.a.createElement("span",{className:"fa fa-user fa-lg fa-fw"})," My Profile")),n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/posts"},n.a.createElement("span",{className:"fa fa-stack-exchange fa-lg fa-fw"})," My Posts")),n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/saved"},n.a.createElement("span",{className:"fa fa-heart-o fa-lg fa-fw"})," Saved Items")),n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/ongoing"},n.a.createElement("span",{className:"fa fa-exchange fa-lg fa-fw"})," Ongoing")),n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/sold"},n.a.createElement("span",{className:"fa fa-shopping-bag fa-lg fa-fw"})," Sold")),n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/settings"},n.a.createElement("span",{className:"fa fa-cog fa-lg fa-fw"})," Settings")),n.a.createElement(f.r,null,n.a.createElement(y.a,{className:"nav-link",to:"/home",onClick:l},n.a.createElement("span",{className:"fa fa-sign-out fa-lg fa-fw"})," Logout"))):n.a.createElement("div",null,n.a.createElement(f.r,null,n.a.createElement(G,{fetchUserInfo:r,loginError:s,isSideBar:!0,formatPhoneNumbers:o}))))))},ae=a(207),re=a.n(ae),ne=a(135),se=a.n(ne),le=a(204),oe=a.n(le),ie=a(206),ce=a.n(ie),me=a(205),ue=a.n(me),de=a(54),fe=a.n(de),pe={background:"white",padding:"0px",margin:"0px"};function he(e){var t=e.item,a=t.reserved.isReserved?"Reserved by ".concat(t.reserved.name):"Not Reserved",r=t.reserved.isReserved?n.a.createElement(se.a,{href:"tel:".concat(t.reserved.tel)},n.a.createElement("span",{className:"fa fa-phone fa-fw"})," ",t.reserved.tel):n.a.createElement("div",null),s=t.reserved.isReserved?n.a.createElement(se.a,{href:"mailto:".concat(t.reserved.email),style:{"text-transform":"none"}},n.a.createElement("span",{className:"fa fa-envelope-o fa-fw"})," ",t.reserved.email):n.a.createElement("div",null),l=t.time;return l=l.slice(0,10),n.a.createElement(oe.a,{alignItems:"flex-start"},n.a.createElement(ue.a,null,n.a.createElement(ee.a,{alt:"Remy Sharp",src:t.picture,size:"150"})),n.a.createElement(ce.a,{primary:n.a.createElement(fe.a,{component:"span",color:"textPrimary",variant:"display1"},t.name),secondary:n.a.createElement(n.a.Fragment,null,n.a.createElement(fe.a,{component:"span",color:"textPrimary",variant:"subtitle1"},n.a.createElement(f.v,null,n.a.createElement(f.i,{xs:4},a),n.a.createElement(f.i,{xs:{size:3,offset:1}},r),n.a.createElement(f.i,{xs:{size:3}},s))),n.a.createElement(fe.a,{component:"span",color:"textPrimary",variant:"body2"},l),n.a.createElement(fe.a,{component:"span",color:"textPrimary",variant:"body2"},"Price: $",t.price),"Description: ",t.detail)}))}var ge=function(e){if(!e.isLoggedIn)return n.a.createElement("div",{className:"container start-of-home"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,"Please Login First"),n.a.createElement("hr",null)));var t=[];for(var a in e.posts)e.posts.hasOwnProperty(a)&&t.push(e.posts[a]);var r=!0===e.renderOngoing?function(e){return e.reserved.isReserved&&t.indexOf(e.id)>=0}:function(e){return t.indexOf(e.id)>=0},s=e.sellItems.filter(r).map(function(e){return n.a.createElement("div",{key:e.id,className:"row align-items-start"},n.a.createElement("div",{className:"col-12 col-md m-1"},n.a.createElement(he,{item:e})))}),l=!0===e.renderOngoing?"My Ongoing Posts":"My Posts";return n.a.createElement("div",{className:"container start-of-home"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,l),n.a.createElement("hr",null)),n.a.createElement("div",{style:pe},n.a.createElement(re.a,null,s)))},Ee=a(475),ve=a(332),be=a(472),Ne=a(476),Ie=(a(467),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={loggedIn:!1,isSideNavOpen:!1},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a.toggleSideNav=a.toggleSideNav.bind(Object(d.a)(Object(d.a)(a))),a.handleStateChange=a.handleStateChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"handleStateChange",value:function(e){this.setState({isSideNavOpen:e.isOpen})}},{key:"toggleSideNav",value:function(){this.setState({isSideNavOpen:!this.state.isSideNavOpen})}},{key:"handleSubmit",value:function(e){this.setState({loggedIn:!0}),e.preventDefault()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"App"},n.a.createElement(te,{noOverlay:!0,users:this.props.users,pageWrapId:"page-wrapper",outerContainerId:"App",isOpen:this.state.isSideNavOpen,onStateChange:function(t){return e.handleStateChange(t)},toggleSideNav:this.toggleSideNav,isLoggedIn:this.props.users.isLoggedIn,fetchUserInfo:this.props.fetchUserInfo,logoutUser:this.props.logoutUser,formatPhoneNumbers:this.props.formatPhoneNumbers}),n.a.createElement("div",{id:"page-wrapper"},n.a.createElement(Q,{filterResults:this.props.filterResults,fetchItems:this.props.fetchItems,toggleSideNav:this.toggleSideNav,resetNewPostForm:this.props.resetNewPostForm,postItem:this.props.postItem,isLoggedIn:this.props.users.isLoggedIn,fetchUserInfo:this.props.fetchUserInfo,loginError:this.props.loginError,users:this.props.users,formatPhoneNumbers:this.props.formatPhoneNumbers}),n.a.createElement(Ee.a,null,n.a.createElement(ve.a,{exact:!0,path:"/",component:function(){return n.a.createElement(N,{sellItems:e.props.sellItems.sellItems,reserveItem:e.props.reserveItem,users:e.props.users})}}),n.a.createElement(ve.a,{path:"/profile",component:function(){return n.a.createElement(O,{userInfo:e.props.users.userInfo,StoreUserInfo:e.props.StoreUserInfo,isLoggedIn:e.props.users.isLoggedIn})}}),n.a.createElement(ve.a,{path:"/ongoing",component:function(){return n.a.createElement(ge,{sellItems:e.props.sellItems.sellItems,posts:e.props.users.userInfo.posts,isLoggedIn:e.props.users.isLoggedIn,renderOngoing:!0})}}),n.a.createElement(ve.a,{path:"/posts",component:function(){return n.a.createElement(ge,{sellItems:e.props.sellItems.sellItems,posts:e.props.users.userInfo.posts,isLoggedIn:e.props.users.isLoggedIn})}}),n.a.createElement(be.a,{to:"/"}))))}}]),t}(r.Component)),Oe=Object(Ne.a)(Object(M.connect)(function(e){return{sellItems:e.sellItems,users:e.users,loginError:e.users.error}},function(e){return{postItem:function(t){return e(function(e){return function(t){return k.push(e).then(function(a){e.id=a.key,t(function(e){return{type:"ADD_ITEM",payload:e}}(e)),x.child(e.username+"/posts/").push(e.id),t({type:"ADD_ITEM_USER",payload:e.id}),alert("Post Successful!")}).catch(function(e){return alert("Post failed! Error: "+e.message)})}}(t))},logoutUser:function(){e({type:"LOG_OUT"})},filterResults:function(t){e(function(e){return{type:"FILTER",payload:{searchText:e,maxResults:arguments.length>1&&void 0!==arguments[1]?arguments[1]:20}}}(t))},fetchItems:function(){e(function(e){return e(L(!0)),k.once("value").then(function(t){var a=t.val();if(null===a)throw Error("Fetch failed.");var r=[];for(var n in a)if(a.hasOwnProperty(n)){var s=a[n];s.id=n,r.push(s)}e(C(r))}).catch(function(t){return e(R(t.message))})})},resetNewPostForm:function(){e(I.actions.reset("newPost"))},reserveItem:function(t,a,r,n){e(function(e,t,a,r){return function(n){var s={isReserved:!0,name:t,email:a,tel:r};return k.child("/"+e).update({reserved:s}).then(function(t){if(t)throw t;n(P(e,s))}).catch(function(e){n(R(e.message)),alert("Reserved failed! Error: "+e.message)})}}(t,a,r,n))},formatPhoneNumbers:function(t,a){e(I.actions.change("register.tel",a(t)))},fetchUserInfo:function(t,a){e(I.actions.setPending("login.username",!0)),e(I.actions.setPending("login.password",!0)),function(e,t){return new Promise(function(a){x.child(e).once("value").then(function(e){var r=e.val();null===r?a("USER_NOT_EXIST"):r.password!==t?a("PASSWORD_WRONG"):a("SUCCESS")})})}(t,a).then(function(a){var r={username:!0,password:!0};"SUCCESS"===a?(e(U(t)),e(I.actions.reset("login.password"))):"USER_NOT_EXIST"===a?r.username=!1:"PASSWORD_WRONG"===a&&(r.password=!1),e(I.actions.setValidity("login.username",{isLoginValid:r.username})),e(I.actions.setValidity("login.password",{isLoginValid:r.password})),e(I.actions.setPending("login.username",!1)),e(I.actions.setPending("login.password",!1))})}}})(Ie)),ye=(a(469),a(473)),we=a(20),je=a(32),Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,sellItems:[],err:null,origSellItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESERVE_ITEM":console.log(t.payload);for(var a=t.payload.key,r=0;r<e.sellItems.length;r++)if(e.sellItems[r].id===a){e.sellItems[r].reserved=t.payload.reserved;break}return e;case"FILTER":var n=t.payload.searchText;return Object(we.a)({},e,{isLoading:!1,err:null,sellItems:e.origSellItems.filter(function(e){return!!e.name.toLowerCase().includes(n.toLowerCase())||!(!e.keywords||!e.keywords.includes(n))}).slice(0,t.payload.maxResults)});case"ADD_ITEM":return Object(we.a)({},e,{sellItems:e.sellItems.concat(t.payload),origSellItems:e.origSellItems.concat(t.payload)});case"ADD_ITEMS":return Object(we.a)({},e,{isLoading:!1,err:null,sellItems:t.payload,origSellItems:t.payload});case"ITEMS_LOADING":return Object(we.a)({},e,{isLoading:!0,err:null,sellItems:[],origSellItems:[]});case"ITEMS_FAILED":return Object(we.a)({},e,{isLoading:!1,err:t.payload,sellItems:[],origSellItems:[]});default:return e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedIn:!1,username:"",userInfo:[],error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return Object(we.a)({},e,{isLoggedIn:!0,username:t.username,userInfo:t.userInfo,error:null});case"LOG_OUT":return Object(we.a)({},e,{isLoggedIn:!1,username:"",userInfo:[],error:null});case"ADD_ITEM_USER":return Object(we.a)({},e,{userInfo:Object(we.a)({},e.userInfo,{posts:e.userInfo.posts.concat(t.payload)})});case"SIGN_UP":return Object(we.a)({},e,{isLoggedIn:!0,username:t.username,password:t.password});case"LOG_IN_FAILED":return Object(we.a)({},e,{isLoggedIn:!1,username:"",userInfo:[],error:t.payload});default:return e}},xe=a(209),Pe=a(210),Ce=a.n(Pe),Le={username:"",password:""},Re={name:"",username:"",password:"",email:"",phone:""},Ue={itemName:"",itemPrice:"",itemDes:"",pictures:"",agreeTerms:!1},De={email:"",tel:""},Me=Object(je.createStore)(Object(je.combineReducers)(Object(we.a)({sellItems:Se,users:ke},Object(I.createForms)({newPost:Ue,login:Le,register:Re,profile:De}))),Object(je.applyMiddleware)(xe.a,Ce.a)),Fe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(M.Provider,{store:Me},n.a.createElement(ye.a,{basename:"/BruinMart"},n.a.createElement("div",null,n.a.createElement(Oe,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[212,2,1]]]);
//# sourceMappingURL=main.e5795572.chunk.js.map