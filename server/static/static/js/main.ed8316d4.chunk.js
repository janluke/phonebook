(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{30:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),o=n(4),s=n.n(o),i=(n(30),n(13)),l=n.n(i),u=n(8),d=n(23),b=n(2),j=n(5),m=(n(32),n(9)),h=n.n(m),f="/api/contacts";var O=n(6),p=n(11),v='A phone number can only contain digits separated by a single space or "-". Optionally, it can start with "+".',x=function(e){return e[0].toUpperCase()+e.slice(1)},g=function(e){return e.trim().toLowerCase()},N=function(e){return e.trim().split(/\s+/).map(x).join(" ")},w=function(e,t){return e=g(e),t.find((function(t){return g(t.name)===e}))},y=function(e){var t=e.type,n=e.label,c=e.id,r=e.value,o=e.onChange,s=e.error,i=e.inputRef,l=Object(p.a)(e,["type","label","id","value","onChange","error","inputRef"]);return Object(a.jsxs)("div",{className:"FormField",children:[Object(a.jsxs)("label",{htmlFor:c,className:"FormField__label",children:[n,":"]}),Object(a.jsx)("input",Object(O.a)({ref:i,className:s?"in-error":void 0,id:c,type:t,value:r,onChange:o},l)),s&&Object(a.jsx)("div",{className:"FormField__error",children:s})]})};function C(e){var t=e.contacts,n=e.onAddNew,r=e.onUpdate,o=Object(c.useState)(""),s=Object(b.a)(o,2),i=s[0],l=s[1],u=Object(c.useState)(""),d=Object(b.a)(u,2),j=d[0],m=d[1],h=Object(c.useState)(""),f=Object(b.a)(h,2),p=f[0],x=f[1],C=Object(c.useState)(""),F=Object(b.a)(C,2),_=F[0],D=F[1],S=Object(c.useState)(null),k=Object(b.a)(S,2),I=k[0],L=k[1],E=Object(c.useState)(null),T=Object(b.a)(E,2),A=T[0],B=T[1];Object(c.useEffect)((function(){var e=w(i,t);B(e)}),[i,t]);var U=!i||!p||j||_;return Object(a.jsxs)("form",{className:"ContactForm",children:[Object(a.jsx)(y,{inputRef:L,label:"Name",id:"name-field",value:i,error:j,onChange:function(e){var t=e.target.value;l(t)}}),Object(a.jsx)(y,{label:"Phone number",id:"phone-field",value:p,error:_,onChange:function(e){var t,n=e.target.value,a=(t=(t=n.trim()).trim())?t.match(/^[+]?([0-9]+[- ]?)*$/)?"":v:"";D(a),x(n)}}),Object(a.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var a=function(e,t,n){return(e=g(e))?n&&w(e,t)?"This name already exists in the phonebook!":"":"Empty name!"}(i,t,!A),c=function(e){return(e=e.trim())?e.match(/^[+]?[0-9]+([ -][0-9]+)*$/)?"":v:"Empty phone number!"}(p.trim());a||c?(m(a),D(c)):(A?p!==A.phoneNumber&&r(Object(O.a)(Object(O.a)({},A),{},{phoneNumber:p})):n({name:N(i),phoneNumber:p.trim()}),l(""),x(""),I.focus())},disabled:U,className:A?"ContactForm__update-btn":void 0,children:A?"Update contact":"Add new contact"})]})}var F=n(24);function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).join(" ")}var D=function(e){var t=e.children,n=e.className,c=Object(p.a)(e,["children","className"]);return Object(a.jsx)("button",Object(O.a)(Object(O.a)({className:_("IconButton",n)},c),{},{children:t}))},S=Object(c.memo)((function(e){var t=e.contact,n=e.nameFilter,c=e.onDelete,r=function(e,t){var n;if(arguments.length>2&&void 0!==arguments[2]&&arguments[2]){var a=e.toLowerCase(),c=t.toLowerCase();n=a.indexOf(c)}else n=e.indexOf(t);if(n<0)return[e,"",""];var r=n+t.length;return[e.slice(0,n),e.slice(n,r),e.slice(n+t.length)]}(t.name,n,!0),o=Object(b.a)(r,3),s=o[0],i=o[1],l=o[2],u=i?Object(a.jsxs)("span",{children:[s,Object(a.jsx)("strong",{children:i}),l]}):t.name;return Object(a.jsxs)("li",{className:"ContactItem",children:[Object(a.jsxs)("div",{className:"ContactItem__info",children:[Object(a.jsx)("div",{className:"ContactItem__name",children:u}),Object(a.jsx)("div",{className:"ContactItem__phone",children:t.phoneNumber})]}),Object(a.jsx)("div",{className:"ContactItem__buttons",children:Object(a.jsx)(D,{className:"IconButton--red",onClick:function(){window.confirm("Do you really want to delete ".concat(t.name,"?"))&&c(t.id)},children:Object(a.jsx)(F.a,{})})})]},t.name)}));var k=Object(c.memo)((function(e){var t=e.contacts,n=e.nameFilter,c=e.onDelete,r=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(t,n);return 0===r.length?Object(a.jsx)("p",{className:"ContactList--empty",children:n?"No matches":"The contact list is empty."}):Object(a.jsx)("ul",{className:"ContactList",children:r.map((function(e){return Object(a.jsx)(S,{contact:e,nameFilter:n,onDelete:c},e.name)}))})}));function I(e){var t=e.contacts,n=e.onDelete,r=Object(c.useState)(""),o=Object(b.a)(r,2),s=o[0],i=o[1];return Object(a.jsxs)("div",{className:"ContactListWithFilter",children:[Object(a.jsx)("div",{className:"ContactListWithFilter__header",children:Object(a.jsx)("input",{type:"text",value:s,placeholder:"Filter by name...",onChange:function(e){var t=e.target.value;i(t)}})}),Object(a.jsx)(k,{contacts:t,nameFilter:s,onDelete:n})]})}function L(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))}function E(){var e=Object(c.useState)("loading"),t=Object(b.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),s=Object(b.a)(o,2),i=s[0],m=s[1],O=Object(c.useState)(null),p=Object(b.a)(O,2),v=p[0],x=p[1],g=function(){h.a.get(f).then((function(e){return e.data})).then((function(e){m(L(e)),r("ready")})).catch((function(e){r("error"),x("Error while trying to fetch data from the server.\n"+"Details: ".concat(e.message))}))},N=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t,h.a.post(f,n).then((function(e){return e.data}))).then((function(e){var t=[].concat(Object(u.a)(i),[e]);m(L(t)),j.b.success("".concat(e.name," was saved"),{autoClose:3e3})})).catch((function(e){console.log(e),j.b.error("There was a problem sending the new contact to the server. The contact could not be saved, sorry. Error: "+e.message)}));case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)(g,[]);var w=null;if("ready"===n)w=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(T,{className:"add-item-panel",children:Object(a.jsx)(C,{contacts:i,onAddNew:N,onUpdate:function(e){var t;(t=e,h.a.put("".concat(f,"/").concat(t.id),t).then((function(e){return e.data}))).then((function(t){console.log(t);var n=i.findIndex((function(t){return t.id===e.id})),a=function(e,t,n){return[].concat(Object(u.a)(e.slice(0,t)),[n],Object(u.a)(e.slice(t+1)))}(i,n,t);m(L(a)),j.b.success('The number of "'.concat(t.name,'" was updated with success.'))})).catch((function(t){j.b.error('There was a problem while trying to update "'.concat(e.name,'". ')+"Details: "+t.message)}))}})}),Object(a.jsx)(T,{className:"contact-list-panel",children:Object(a.jsx)(I,{contacts:i,onDelete:function(e){var t=i.find((function(t){return t.id===e}));(function(e){return h.a.delete("".concat(f,"/").concat(e))})(e).then((function(n){m(i.filter((function(t){return t.id!==e}))),j.b.success('"'.concat(t.name,'" was deleted with success.'))})).catch((function(e){var n;console.log(e),e.response&&404===e.response.status?(g(),n='It seems "'.concat(t.name,'" had already been deleted. ')+" You were using a stale tab, but now you're okay!"):n='There was a problem while trying to delete "'.concat(t.name,'". ')+"Details: "+e.message,j.b.error(n)}))}})})]});else if("loading"===n)w=null;else{if("error"!==n)throw new Error("invalid state");w=Object(a.jsx)("p",{style:{color:"red"},children:v})}return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j.a,{}),Object(a.jsx)("h1",{className:"header",children:"PhoneBook"}),Object(a.jsx)("div",{className:"content",children:w})]})}var T=function(e){var t=e.className,n=e.children,c="Panel"+(" "+t||!1);return Object(a.jsx)("div",{className:c,children:n})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.ed8316d4.chunk.js.map