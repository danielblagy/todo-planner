(this["webpackJsonptodo-planner"]=this["webpackJsonptodo-planner"]||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(5),c=n.n(a),i=(n(19),n(3)),s=n(4),d=n(6),u=n(27),l=n(10),j=n(8),b=n(14),O=n(2);var f=function(e){var t=e.todo,n=e.toggleTodo,r=e.deleteTodo,a=e.editTodo,c=e.index,i=Object(o.useRef)();function d(){n(t.id)}function u(){r(t.id)}function f(){a(t.id,i.current.value)}var g={color:"gray",textDecoration:"line-through",border:"none",borderColor:"transparent"};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j.b,{draggableId:t.id,index:c,children:function(e){return Object(O.jsxs)("p",Object(s.a)(Object(s.a)(Object(s.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:[Object(O.jsx)(b.a,{}),Object(O.jsx)("input",{type:"checkbox",checked:!!t.complete,onChange:d}),Object(O.jsx)("input",{ref:i,type:"text",style:t.complete?g:{border:"none",borderColor:"transparent"},defaultValue:t.name,onChange:f}),Object(O.jsx)(l.b,{onClick:u,style:{cursor:"pointer"}})]}))}},t.id)})};var g=function(e){var t=e.title,n=e.todos,r=e.setTodos,a=e.storageKey;Object(o.useEffect)((function(){localStorage.setItem(a,JSON.stringify(n))}),[a,n]);var c=Object(o.useRef)();function b(e){var t=c.current.value;""!==t&&(r((function(e){return[].concat(Object(d.a)(e),[{id:Object(u.a)(),name:t,complete:!1}])})),c.current.value=null)}function g(e){var t=Object(d.a)(n),o=t.find((function(t){return t.id===e}));o.complete=!o.complete,r(t)}function p(e){var t=Object(d.a)(n),o=t.findIndex((function(t){return t.id===e}));t.splice(o,1),r(t)}function x(e,t){if(""!==t){var o=Object(d.a)(n);o.find((function(t){return t.id===e})).name=t,r(o)}}return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsx)("h2",{children:t}),Object(O.jsx)(j.a,{onDragEnd:function(e){if(e.destination){var t=Object(d.a)(n),o=t.splice(e.source.index,1),a=Object(i.a)(o,1)[0];t.splice(e.destination.index,0,a),r(t)}},children:Object(O.jsx)(j.c,{droppableId:"todos",children:function(e){return Object(O.jsxs)("div",Object(s.a)(Object(s.a)({className:"todos"},e.droppableProps),{},{ref:e.innerRef,children:[n.map((function(e,t){return Object(O.jsx)(f,{todo:e,toggleTodo:g,deleteTodo:p,editTodo:x,index:t},e.id)})),e.placeholder]}))}})}),Object(O.jsx)("input",{ref:c,type:"text",onKeyDown:function(e){"Enter"===e.code&&b()}}),Object(O.jsx)(l.a,{onClick:b,style:{cursor:"pointer"}})]})},p="todo_planner.yesterday_todos",x="todo_planner.today_todos",v="todo_planner.tomorrow_todos",S="todo_planner.last_day";var h=function(){var e=Object(o.useState)((function(){var e=JSON.parse(localStorage.getItem(p));return e||[]})),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)((function(){var e=JSON.parse(localStorage.getItem(x));return e||[]})),c=Object(i.a)(a,2),s=c[0],d=c[1],u=Object(o.useState)((function(){var e=JSON.parse(localStorage.getItem(v));return e||[]})),l=Object(i.a)(u,2),j=l[0],b=l[1],f=Object(o.useState)(new Date),h=Object(i.a)(f,2),m=h[0],D=h[1],y={year:"2-digit",month:"numeric",day:"numeric"},T=Object(o.useState)(""),w=Object(i.a)(T,2),I=w[0],C=w[1],N=Object(o.useState)(""),J=Object(i.a)(N,2),_=J[0],F=J[1],k=Object(o.useState)(""),E=Object(i.a)(k,2),L=E[0],K=E[1];return Object(o.useEffect)((function(){function e(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}var t,n,o=new Date(JSON.parse(localStorage.getItem(S))),a=new Date;o&&(e(a,o)||(t=new Date(o),n=a,t.setDate(t.getDate()+1),e(t,n)?(r(s),d(j),b([])):!function(t,n){return t.setDate(t.getDate()+2),e(t,n)}(new Date(o),a)?(r([]),d([]),b([])):(r(j),d([]),b([])))),D(a);var c=new Date(a);c.setDate(c.getDate()-1);var i=new Date(a);i.setDate(i.getDate()+1),C("Yesterday "+c.toLocaleDateString("en-US",y)),F("Today "+a.toLocaleDateString("en-US",y)),K("Tomorrow "+i.toLocaleDateString("en-US",y))}),[]),Object(o.useEffect)((function(){localStorage.setItem(S,JSON.stringify(m))}),[m]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(g,{title:I,todos:n,setTodos:r,storageKey:p}),Object(O.jsx)(g,{title:_,todos:s,setTodos:d,storageKey:x}),Object(O.jsx)(g,{title:L,todos:j,setTodos:b,storageKey:v})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(h,{})}),document.getElementById("root")),m()}},[[25,1,2]]]);
//# sourceMappingURL=main.a8600481.chunk.js.map