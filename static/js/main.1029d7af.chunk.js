(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(21),r=c.n(a),l=(c(57),c.p,c(58),c(7)),o=c(24),d=c.n(o),i=c(42),j=c(44),h=c(0),b=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h4",{id:"load",children:"Loading..."})})})},x=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-lg-12 col-md-12 col-12",children:Object(h.jsxs)("div",{className:"card shadow mt-3 ".concat(e.theme?"cardd":""),children:[Object(h.jsxs)("h4",{className:"text-center mt-2 font-weight-bold ".concat(e.theme?"text-white":""),children:["Global Covid-19 Record ",Object(h.jsx)(j.a,{})]}),Object(h.jsx)("hr",{className:"mx-auto w-25"}),Object(h.jsxs)("div",{className:"d-flex gap-3 flex-wrap",children:[Object(h.jsxs)("div",{className:"alert alert-info m-3  flex-grow-1 ",role:"alert",children:[Object(h.jsx)("span",{children:"Total Cases:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.cases})]}),Object(h.jsxs)("div",{className:"alert alert-success m-3  flex-grow-1 ",role:"alert",children:[Object(h.jsx)("span",{children:"Total Recovered:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.recovered})]}),Object(h.jsxs)("div",{className:"alert alert-danger m-3  flex-grow-1 ",role:"alert",children:[Object(h.jsx)("span",{children:"Total Deaths:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.deaths})]}),Object(h.jsxs)("div",{className:"alert alert-secondary m-3  flex-grow-1 ",role:"alert",children:[Object(h.jsx)("span",{children:"Total Tests:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.tests})]}),Object(h.jsxs)("div",{className:"alert alert-info m-3  flex-grow-1 ",role:"alert",children:[Object(h.jsx)("span",{children:"Today Cases:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.todayCases})]}),Object(h.jsxs)("div",{className:"alert alert-success m-3  flex-grow-1 ",role:"alert",children:[Object(h.jsx)("span",{children:"Today Recovered:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.todayRecovered})]}),Object(h.jsxs)("div",{className:"alert alert-danger m-3  flex-grow-1 ",role:"alert",children:[Object(h.jsx)("span",{children:"Today Deaths:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.todayDeaths})]})]})]})})})})},O=c(17),u=c.n(O),m=c(13),f=(c(43),c.p+"static/media/servererror.1d99a0a5.gif"),g=Object(s.createContext)(),v=function(e){var t=Object(m.useQuery)("country-data",(function(){return u.a.get("https://disease.sh/v3/covid-19/countries").then((function(e){return e.data}))})),c=t.data,s=t.isLoading;return t.isError?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("img",{className:"img-fluid ",src:f,alt:"servererror"})})}):s?Object(h.jsx)(b,{className:"text-center mt-5"}):(console.log(c),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(g.Provider,{value:c,children:e.children})}))};var y=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("table",{className:"table shadow-sm mt-3  ".concat(e.theme?"cardd text-white":""),children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Country"}),Object(h.jsx)("th",{scope:"col",children:"Continent"}),Object(h.jsx)("th",{scope:"col",children:"Cases"}),Object(h.jsx)("th",{scope:"col",children:"Today Cases"}),Object(h.jsx)("th",{scope:"col",children:"Deaths"}),Object(h.jsx)("th",{scope:"col",children:"Today Deaths"}),Object(h.jsx)("th",{scope:"col",children:"Recovered"}),Object(h.jsx)("th",{scope:"col",children:"Today Recovered"})]})}),Object(h.jsx)("tbody",{children:Object(h.jsx)("tr",{children:Object(h.jsx)(h.Fragment,{children:!1===e.load?Object(h.jsx)("td",{children:"Loading..."}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("td",{children:e.countryData.country}),Object(h.jsx)("td",{children:e.countryData.continent}),Object(h.jsx)("td",{children:e.countryData.cases}),Object(h.jsx)("td",{children:e.countryData.todayCases}),Object(h.jsx)("td",{children:e.countryData.deaths}),Object(h.jsx)("td",{children:e.countryData.todayDeaths}),Object(h.jsx)("td",{children:e.countryData.recovered}),Object(h.jsx)("td",{children:e.countryData.todayRecovered})]})})})})]})})},p=Object(s.createContext)();function w(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),n=c[0],a=c[1];return console.log(n),Object(h.jsx)("div",{children:Object(h.jsx)(p.Provider,{value:[n,a],children:e.children})})}var N=function(){var e=Object(s.useContext)(g),t=Object(s.useState)({}),c=Object(l.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!0),o=Object(l.a)(r,2),j=o[0],b=o[1],O=Object(s.useState)(!1),v=Object(l.a)(O,2),w=v[0],N=v[1],C=Object(s.useContext)(p),D=Object(l.a)(C,2),T=D[0],F=(D[1],Object(m.useQuery)("world-data",(function(){return u.a.get("https://disease.sh/v3/covid-19/all").then((function(e){return e.data}))}))),k=F.data,I=F.isLoading;if(F.isError)return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("img",{className:"img-fluid",src:f,alt:"servererr"})})});console.log(e);var R=function(){var e=Object(i.a)(d.a.mark((function e(t){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.target.value,b(!1),N(!1),"worldwide"===c)b(!0);else try{s="https://disease.sh/v3/covid-19/countries/".concat(c),u.a.get(s).then((function(e){a(e.data),N(!0)}))}catch(t){alert("Took long time: Refresh page:)")}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{theme:T,load:I,countryInfo:k}),Object(h.jsxs)("select",{className:T?"rounded-pill form-select shadow p-2 mt-4 bg-dark text-white mb-2":"form-select mt-4 mb-2 p-2 shadow rounded-pill","aria-label":"Default select example",onChange:R,children:[Object(h.jsx)("option",{selected:!0,value:"worldwide",children:"Select Country"}),e.map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)("option",{value:e.countryInfo.iso2,children:e.country},t)]})}))]}),j?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"alert-info shadow-sm mb-3 rounded-pill p-1 text-center font-weight-bold mt-3",children:Object(h.jsx)("h5",{className:"mt-2",children:"Choose Country:"})})}):Object(h.jsx)(y,{theme:T,countryData:n,load:w})]})},C=c.p+"static/media/logo.dee18f54.png",D=function(){var e=Object(s.useContext)(p),t=Object(l.a)(e,2),c=t[0],n=t[1],a=(new Date).getFullYear();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h3",{className:"text-center mt-3",children:"Coronavirus (COVID-19) Tracker "}),Object(h.jsx)("button",{className:" btn btn-outline-info ml-2 theme mt-2  ".concat(c?"text-white":""),onClick:function(){c?(n(!1),document.body.style.backgroundColor="white",document.body.style.color="black"):(n(!0),document.body.style.backgroundColor="black",document.body.style.color="white")},children:c?"Change Theme[Black]":"Change Theme[Light]"}),Object(h.jsx)("hr",{className:"w-25 mx-auto"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12 col-lg-12 col-12",children:Object(h.jsx)(N,{})})})]}),Object(h.jsx)("footer",{className:"page-footer font-small",children:Object(h.jsxs)("div",{className:"footer-copyright text-center py-3 text-white",children:["\xa9 ",a," Developed by:",Object(h.jsx)("img",{src:C,width:"60",height:"38",className:"d-inline-block align-top",alt:"logo"}),Object(h.jsx)("a",{href:"#",className:"text-warning",children:" Ashish Thapa"})]})})]})};var T=function(){var e=new m.QueryClient;return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(m.QueryClientProvider,{client:e,children:Object(h.jsx)(w,{children:Object(h.jsx)(v,{children:Object(h.jsx)(D,{})})})})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};c(80);r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),F()}},[[81,1,2]]]);
//# sourceMappingURL=main.1029d7af.chunk.js.map