(this.webpackJsonpPOS=this.webpackJsonpPOS||[]).push([[155],{1260:function(e,t,n){"use strict";var a=n(10),i=n(14),r=n(1),d=n(1303),s=n(1300),l=n.n(s),o=new Date,w=[{id:0,title:"All Day Event very long title",allDay:!0,start:new Date(2015,3,0),end:new Date(2015,3,1)},{id:1,title:"Long Event",start:new Date(2015,3,7),end:new Date(2015,3,10)},{id:2,title:"DTS STARTS",start:new Date(2016,2,13,0,0,0),end:new Date(2016,2,20,0,0,0)},{id:3,title:"DTS ENDS",start:new Date(2016,10,6,0,0,0),end:new Date(2016,10,13,0,0,0)},{id:4,title:"Some Event",start:new Date(2015,3,9,0,0,0),end:new Date(2015,3,10,0,0,0)},{id:5,title:"Conference",start:new Date(2015,3,11),end:new Date(2015,3,13),desc:"Big conference for important people"},{id:6,title:"Meeting",start:new Date(2015,3,12,10,30,0,0),end:new Date(2015,3,12,12,30,0,0),desc:"Pre-meeting meeting, to prepare for the meeting"},{id:7,title:"Lunch",start:new Date(2015,3,12,12,0,0,0),end:new Date(2015,3,12,13,0,0,0),desc:"Power lunch"},{id:8,title:"Meeting",start:new Date(2015,3,12,14,0,0,0),end:new Date(2015,3,12,15,0,0,0)},{id:9,title:"Happy Hour",start:new Date(2015,3,12,17,0,0,0),end:new Date(2015,3,12,17,30,0,0),desc:"Most important meal of the day"},{id:10,title:"Dinner",start:new Date(2015,3,12,20,0,0,0),end:new Date(2015,3,12,21,0,0,0)},{id:11,title:"Planning Meeting with Paige",start:new Date(2015,3,13,8,0,0),end:new Date(2015,3,13,10,30,0)},{id:11.1,title:"Inconvenient Conference Call",start:new Date(2015,3,13,9,30,0),end:new Date(2015,3,13,12,0,0)},{id:11.2,title:"Project Kickoff - Lou's Shoes",start:new Date(2015,3,13,11,30,0),end:new Date(2015,3,13,14,0,0)},{id:11.3,title:"Quote Follow-up - Tea by Tina",start:new Date(2015,3,13,15,30,0),end:new Date(2015,3,13,16,0,0)},{id:12,title:"Late Night Event",start:new Date(2015,3,17,19,30,0),end:new Date(2015,3,18,2,0,0)},{id:12.5,title:"Late Same Night Event",start:new Date(2015,3,17,19,30,0),end:new Date(2015,3,17,23,30,0)},{id:13,title:"Multi-day Event",start:new Date(2015,3,20,19,30,0),end:new Date(2015,3,22,2,0,0)},{id:14,title:"Today",start:new Date((new Date).setHours((new Date).getHours()-3)),end:new Date((new Date).setHours((new Date).getHours()+3))},{id:15,title:"Point in Time Event",start:o,end:o},{id:16,title:"Video Record",start:new Date(2015,3,14,15,30,0),end:new Date(2015,3,14,19,0,0)},{id:17,title:"Dutch Song Producing",start:new Date(2015,3,14,16,30,0),end:new Date(2015,3,14,20,0,0)},{id:18,title:"Itaewon Halloween Meeting",start:new Date(2015,3,14,16,30,0),end:new Date(2015,3,14,17,30,0)},{id:19,title:"Online Coding Test",start:new Date(2015,3,14,17,30,0),end:new Date(2015,3,14,20,30,0)},{id:20,title:"An overlapped Event",start:new Date(2015,3,14,17,0,0),end:new Date(2015,3,14,18,30,0)},{id:21,title:"Phone Interview",start:new Date(2015,3,14,17,0,0),end:new Date(2015,3,14,18,30,0)},{id:22,title:"Cooking Class",start:new Date(2015,3,14,17,30,0),end:new Date(2015,3,14,19,0,0)},{id:23,title:"Go to the gym",start:new Date(2015,3,14,18,30,0),end:new Date(2015,3,14,20,0,0)}],D=(n(1301),n(2));l.a.locale("en-GB");var c=Object(d.b)(l.a);t.a=function(){var e=Object(r.useState)(w),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(d.a,{views:["day","work_week","month"],selectable:!0,localizer:c,defaultDate:new Date,defaultView:"month",events:n,style:{height:"100vh"},onSelectEvent:function(e){return alert(e.title)},onSelectSlot:function(e){var t=e.start,i=e.end;console.log(t),console.log(i);var r=window.prompt("New Event name");r&&s([].concat(Object(a.a)(n),[{start:t,end:i,title:r}]))}})})}},1612:function(e,t,n){"use strict";n.r(t);var a=n(7),i=(n(1),n(176)),r=n(287),d=n(79),s=n(1260),l=n(2),o=Object(i.a)("div")((function(e){var t,n=e.theme;return t={margin:"30px"},Object(a.a)(t,n.breakpoints.down("sm"),{margin:"16px"}),Object(a.a)(t,"& .breadcrumb",Object(a.a)({marginBottom:"30px"},n.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(l.jsxs)(o,{children:[Object(l.jsx)(r.a,{className:"breadcrumb",children:Object(l.jsx)(d.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Calendar"}]})}),Object(l.jsx)(d.l,{children:Object(l.jsx)(s.a,{})})]})}}}]);