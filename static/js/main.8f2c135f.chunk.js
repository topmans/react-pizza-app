(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{20:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},21:function(e,n,t){e.exports=t.p+"static/media/pizza_bg.57c1c517.jpg"},24:function(e,n,t){e.exports=t.p+"static/media/ingridients.18508e60.png"},25:function(e,n,t){e.exports=t.p+"static/media/pizza_preview.965d29b2.jpg"},31:function(e,n,t){e.exports=t(43)},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(19),c=t.n(i),o=t(28),u=t(12),l=t(1),d=t(7),p=t(8),s=t(2),m=t(20),f=t.n(m),b=t(21),g=t.n(b);function x(){var e=Object(l.a)(["\n    animation: App-logo-spin infinite 20s linear;\n    height: 80px;\n    @keyframes App-logo-spin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n    } \n"]);return x=function(){return e},e}function v(){var e=Object(l.a)(["\n    background: #222 url(",");\n    height: 150px;\n    padding: 55px 20px;\n    color: white;\n    background-size: cover;\n"]);return v=function(){return e},e}var k=s.a.div(v(),g.a),E=s.a.img(x()),h=function(e){var n=e.title;return a.a.createElement(k,null,a.a.createElement(E,{src:f.a,alt:"React logo"}),a.a.createElement("h2",null,n))},z=t(24),O=t.n(z);function j(){var e=Object(l.a)(["\n    width: 85px;\n    height: 85px;\n    background: url(",");\n    border-radius: 50%;\n    display: inline-block;\n    background-size: 255px;\n    margin: -4px;\n    animation: fadein 1s;\n\n    @keyframes fadein {\n        from { opacity: 0; }\n        to   { opacity: 1; }\n    }\n\n    &.Mozzarella {\n        background-position: 260px -3px;\n    }\n    &.Cheddar {\n        background-position: 170px -5px;\n    }\n    &.Corn {\n        background-position: 85px 0px;  \n    }\n    &.Cucumber {\n        background-position: 256px 173px;\n    }\n    &.Tomato {\n        background-position: 172px 170px;\n    }\n    &.Sweet.pepper {\n        background-position: 87px 168px;\n    }\n    &.Chicken {\n        background-position: 255px 86px;\n    }\n    &.Beef {\n        background-position: 170px 84px;\n    }\n    &.Fish {\n        background-position: 85px 83px;\n    }   \n"]);return j=function(){return e},e}var y=s.a.div(j(),O.a),w=function(e){var n=e.title;return a.a.createElement(y,{className:n})},C=t(25),N=t.n(C);function A(){var e=Object(l.a)(["\n    width: 260px;\n    height: 260px;\n    margin: 64px auto;    \n"]);return A=function(){return e},e}function I(){var e=Object(l.a)(["\n    background-image: url(",");\n    height: 440px;\n    background-size: 385px;\n    width: 50%;\n    box-sizing: border-box;\n    background-repeat: no-repeat;\n    background-position: center 40px;\n    display: inline-block;\n    vertical-align: top;\n"]);return I=function(){return e},e}var S=s.a.div(I(),N.a),T=s.a.div(A()),M=function(e){var n=e.title,t=e.ingridients.map((function(e){return a.a.createElement(w,{key:e,title:e})}));return a.a.createElement(S,null,a.a.createElement("h3",null,n),a.a.createElement(T,null,t))};function B(){var e=Object(l.a)(["\n    display: inline-block;\n    padding: 5px 10px;\n    width: 200px;\n    cursor: pointer;\n    margin:0 5px 10px 0;\n\n    &.active {\n        background-color: #de7b00;\n        color: #ffffff;\n        padding: 6px;\n        border: 1px solid #a24e25;\n        border-radius: 2px;\n        font-size: 13px;\n        text-shadow: 1px 1px #ad3410;        \n    }\n"]);return B=function(){return e},e}var U=s.a.button(B()),P=function(e){var n=e.ingridients,t=e.ingridientClick,r=e.selected;return a.a.createElement("div",{className:"IngridientList"},n.map((function(e,n){var i=!1;return-1!==r.indexOf(e.name)&&(i=!0),a.a.createElement("div",{key:n},a.a.createElement(U,{className:i?"active":"",key:n,value:e.name,onClick:function(e){t(e.target.value)}},e.name," ,  $",e.price),a.a.createElement("br",null))})))};function $(){var e=Object(l.a)(["\n    width: 50%;\n    display: inline-block;\n"]);return $=function(){return e},e}var q=s.a.div($()),F=function(e){return a.a.createElement(q,null,a.a.createElement("h3",null,e.title),a.a.createElement(P,{ingridients:e.ingridients,selected:e.selected,ingridientClick:function(n){return e.ingridientClick(n)}}))};function J(){var e=Object(l.a)(["\n    display: inline-block;\n"]);return J=function(){return e},e}var R=s.a.div(J()),Y=function(e){var n=e.total;return a.a.createElement(R,null,a.a.createElement("h3",null,"Total price: $",n))};function _(){var e=Object(l.a)(["\n    background-color: #239823;\n    color: white;\n    padding: 12px;\n    border: 1px solid #1b8632;\n    border-radius: 2px;\n    font-size: 15px;  \n    cursor: pointer; \n    \n    :disabled {\n        background:#ccc;\n        border-color: #eee;\n    }    \n"]);return _=function(){return e},e}var L=s.a.button(_()),D=function(e){return a.a.createElement(L,{className:e.className,type:e.type?e.type:"button",disabled:e.disabled?e.disabled:""},e.title)};function G(){var e=Object(l.a)(["\n    display: inline-block;\n    margin:0 20px;    \n"]);return G=function(){return e},e}var H=s.a.div(G()),K=function(){return a.a.createElement(H,null,a.a.createElement(d.b,{to:"/order"},a.a.createElement(D,{title:"Make order"})))},Q=function(e){var n=e.selectedIngridients,t=e.pizzaIngridients,r=e.ingridientClick,i=e.total;return a.a.createElement("div",null,a.a.createElement(M,{title:"You choose:",ingridients:n}),a.a.createElement(F,{ingridients:t,selected:n,title:"Select ingridients:",ingridientClick:function(e){return r(e)}}),a.a.createElement(Y,{total:i}),i>0?a.a.createElement(K,null):null)};function V(){var e=Object(l.a)(["\n    margin-bottom:10px;\n"]);return V=function(){return e},e}function W(){var e=Object(l.a)(["\n    padding: 10px;\n    margin:0 5px 20px 0;\n    width: 400px;\n    text-align: center;\n    font-size: 14px;\n"]);return W=function(){return e},e}var X=s.a.input(W()),Z=Object(s.a)(D)(V()),ee=function(e){var n=e.total,t=e.confirmOrder,r=e.userName,i=e.address,c=e.setUserName,o=e.setAddress,u=!0;return""!==r&&""!==i&&r.length>2&&i.length>3&&(u=!1),a.a.createElement("div",{className:"Order"},a.a.createElement("h3",null,"Enter some details to complete the order."),a.a.createElement(X,{type:"text",className:"User-name",value:r,placeholder:"Enter your name",required:!0,onChange:function(e){return c(e.target.value)}}),a.a.createElement(X,{type:"text",className:"User-address",value:i,placeholder:"Address",required:!0,onChange:function(e){return o(e.target.value)}}),a.a.createElement("p",{className:"Amount"},"Total amount: $",n),a.a.createElement(d.b,{to:"/thanks",onClick:function(){return t()}},a.a.createElement(Z,{type:"submit",disabled:u,title:"Confirm order"})),a.a.createElement("br",null),a.a.createElement(d.b,{to:"/"},"Back"))},ne=function(e){var n=e.makeNewPizza,t=e.userName;return a.a.createElement("div",{className:"Thank-you"},a.a.createElement("h3",null,"Thank you ",t,"! "),a.a.createElement("p",null,"Your pizza will be ready in 10 min."),a.a.createElement("p",null,a.a.createElement(d.b,{to:"/",onClick:function(){return n()}},"Make new one")))};function te(){var e=Object(l.a)(["\n\tmax-width: 800px;\n\tmargin:20px auto;\t\n"]);return te=function(){return e},e}function re(){var e=Object(l.a)(["\n\ttext-align: center;\n\ta {\n\t\tcolor: #4481e0;\n\t}\t\n"]);return re=function(){return e},e}var ae=s.a.div(re()),ie=s.a.div(te()),ce=[{name:"Mozzarella",price:3},{name:"Cheddar",price:3.5},{name:"Corn",price:1.5},{name:"Cucumber",price:1},{name:"Tomato",price:1},{name:"Sweet pepper",price:2},{name:"Chicken",price:2.5},{name:"Beef",price:5},{name:"Fish",price:4}],oe=function(e){var n=Object(r.useState)([]),t=Object(u.a)(n,2),i=t[0],c=t[1],l=Object(r.useState)(0),s=Object(u.a)(l,2),m=s[0],f=s[1],b=Object(r.useState)(""),g=Object(u.a)(b,2),x=g[0],v=g[1],k=Object(r.useState)(""),E=Object(u.a)(k,2),z=E[0],O=E[1];return a.a.createElement(d.a,null,a.a.createElement(ae,null,a.a.createElement(h,{title:e.title}),a.a.createElement(ie,null,a.a.createElement(p.a,{exact:!0,path:"/",render:function(){return a.a.createElement(Q,{selectedIngridients:i,pizzaIngridients:ce,ingridientClick:function(e){return function(e){var n=ce.findIndex((function(n){return n.name===e})),t=ce[n].price,r=0;i.includes(e)?(c(i.filter((function(n){return n!==e}))),m>0&&(r=m-t)):(c([].concat(Object(o.a)(i),[e])),r=m+t),f(r)}(e)},total:m})}}),a.a.createElement(p.a,{path:"/order",render:function(){return a.a.createElement(ee,{total:m,userName:x,address:z,confirmOrder:function(){console.log("Confirm order")},setUserName:function(e){return v(e)},setAddress:function(e){return O(e)}})}}),a.a.createElement(p.a,{path:"/thanks",render:function(){return a.a.createElement(ne,{makeNewPizza:function(){return c([]),void f(0)},userName:x})}}))))};t(42);c.a.render(a.a.createElement(oe,{title:"Make your own pizza with React"}),document.getElementById("PizzaApp"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8f2c135f.chunk.js.map