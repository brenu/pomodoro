(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),u=(n(9),n(1));n(10);function l(){var e=Object(a.useState)(1500),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(0),l=Object(u.a)(r,2),s=l[0],i=l[1],f=Object(a.useState)(0),m=Object(u.a)(f,2),b=m[0],d=m[1],j=Object(a.useState)("trabalho"),E=Object(u.a)(j,2),O=E[0],p=E[1];return Object(a.useEffect)((function(){var e=n;for(i(0),d(0);e>0;)e>=60?(i((function(e){return e+1})),e-=60):(d(e),e=0);console.log(s,b)}),[n]),Object(a.useEffect)((function(){if(n>0)setTimeout((function(){return o(n-1)}),1e3);else{setTimeout((function(){"trabalho"===O?(p("descanso"),o(300)):(p("trabalho"),o(1500))}),1e3)}}),[n]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"timer-container"},c.a.createElement("h1",{className:"title"},"Hora do ",O),c.a.createElement("p",null,s,":",b>9?b:"0"+b)))}var s=function(){return c.a.createElement(l,null)};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.cb7fafa3.chunk.js.map