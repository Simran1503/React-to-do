(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=(n(19),n(20),n(11)),s=n(6),l=n(7),u=n(13),m=n(12),d=n(8),p=n(9);function f(e){var t=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(d.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))}));return r.a.createElement("div",null,r.a.createElement(p.a,{duration:300,easing:"ease-in-out"},t))}var h=n(3),v=n(10);h.b.add(v.a);var E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleInput=function(e){a.setState({currentItem:{text:e.target.value,key:Date.now()}})},a.addItem=function(e){e.preventDefault();var t=a.state.currentItem;if(console.log(t),""!==t.text){var n=[].concat(Object(c.a)(a.state.items),[t]);a.setState({items:n,currentItem:{text:"",key:""}})}},a.deleteItem=function(e){var t=a.state.items.filter((function(t){return t.key!==e}));a.setState({items:t})},a.setUpdate=function(e,t){var n=a.state.items;n.map((function(n){n.key===t&&(n.text=e)})),a.setState({items:n})},a.state={items:[],currentItem:{text:"",key:""}},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter text",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.9c99f9d3.chunk.js.map