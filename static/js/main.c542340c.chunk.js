(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(21),l=c.n(n),r=(c(57),c.p,c(58),c(7)),o=c(24),i=c.n(o),d=c(42),j=c(44),h=c(0),b=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h4",{id:"load",children:"Loading..."})})})},x=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-lg-12 col-md-12 col-12",children:Object(h.jsxs)("div",{className:"card shadow mt-3 ".concat(e.theme?"cardd":""),children:[Object(h.jsxs)("h4",{className:"text-center mt-2 font-weight-bold ".concat(e.theme?"text-white":""),children:["Global Covid-19 Record ",Object(h.jsx)(j.a,{})]}),Object(h.jsx)("hr",{className:"mx-auto w-25"}),Object(h.jsxs)("div",{className:"d-flex gap-3 flex-wrap",children:[Object(h.jsxs)("div",{className:"alert alert-info m-3  flex-fill ",role:"alert",children:[Object(h.jsx)("span",{children:"Total Cases:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.cases})]}),Object(h.jsxs)("div",{className:"alert alert-success m-3  flex-fill ",role:"alert",children:[Object(h.jsx)("span",{children:"Total Recovered:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.recovered})]}),Object(h.jsxs)("div",{className:"alert alert-danger m-3  flex-fill ",role:"alert",children:[Object(h.jsx)("span",{children:"Total Deaths:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.deaths})]}),Object(h.jsxs)("div",{className:"alert alert-secondary m-3  flex-fill ",role:"alert",children:[Object(h.jsx)("span",{children:"Total Tests:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.tests})]}),Object(h.jsxs)("div",{className:"alert alert-info m-3  flex-fill ",role:"alert",children:[Object(h.jsx)("span",{children:"Today Cases:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.todayCases})]}),Object(h.jsxs)("div",{className:"alert alert-success m-3  flex-fill ",role:"alert",children:[Object(h.jsx)("span",{children:"Today Recovered:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.todayRecovered})]}),Object(h.jsxs)("div",{className:"alert alert-danger m-3 ",role:"alert",children:[Object(h.jsx)("span",{children:"Today Deaths:"}),Object(h.jsx)("h5",{className:"font-weight-bold fonttt",children:e.load?Object(h.jsx)(b,{}):e.countryInfo.todayDeaths})]})]})]})})})})},O=c(17),m=c.n(O),u=c(13),f=c(43),g=c.n(f),v=c.p+"static/media/servererror.1d99a0a5.gif",p=c.p+"static/media/Bars-1s-200px.7123b893.gif",N=Object(s.createContext)(),y=function(e){var t=Object(u.useQuery)("country-data",(function(){return m.a.get("https://disease.sh/v3/covid-19/countries").then((function(e){return e.data}))})),c=t.data,s=t.isLoading;return t.isError?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("img",{className:"img-fluid ",src:v,alt:"servererror"})})}):s?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("img",{className:"img-fluid mt-5",src:p,alt:"loading"})})}):(console.log(c),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(N.Provider,{value:c,children:e.children})}))};var w=function(e){var t=Object(s.useContext)(N),c=Object(s.useState)(0),a=Object(r.a)(c,2),n=a[0],l=a[1],o=t.slice(0,t.length),i=4*n,d=o.slice(i,i+4).map((function(t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"col-lg-3 col-md-4 col-6",children:Object(h.jsx)("div",{className:"card shadow-sm countryy mb-3 ".concat(e.theme?"cardd":""),children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h4",{className:"card-title ",children:t.country}),Object(h.jsxs)("div",{className:"d-flex flex-wrap gap-auto",children:[Object(h.jsxs)("div",{className:"alert alert-info m-3 flex-lg-fill",role:"alert",children:[Object(h.jsx)("span",{children:"Total Cases:"}),Object(h.jsx)("h5",{className:"font-weight-bold fontt",children:t.cases})]}),Object(h.jsxs)("div",{className:"alert alert-danger m-3 flex-lg-fill flex-md-fill",role:"alert",children:[Object(h.jsx)("span",{children:"Total Deaths:"}),Object(h.jsx)("h5",{className:"font-weight-bold fontt",children:t.deaths})]}),Object(h.jsxs)("div",{className:"alert alert-success m-3 flex-fill",role:"alert",children:[Object(h.jsx)("span",{children:"Total Recovered:"}),Object(h.jsx)("h5",{className:"font-weight-bold fontt",children:t.recovered})]})]})]})})})})})),j=Math.ceil(o.length/4);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{className:"text-center",children:"Country Data:"}),Object(h.jsx)("hr",{className:"mx-auto w-25"}),Object(h.jsxs)("div",{className:"row",children:[d,Object(h.jsx)(g.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:j,onPageChange:function(e){var t=e.selected;l(t)},containerClassName:"paginationbtn",previousLinkClassName:"previousbtn",nextLinkClassName:"nextbtn",disabledClassName:"paginaiondisabled",activeClassName:"paginationactive"})]})]})},C=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("table",{className:"table shadow-sm mt-3  ".concat(e.theme?"cardd text-white":""),children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Country"}),Object(h.jsx)("th",{scope:"col",children:"Continent"}),Object(h.jsx)("th",{scope:"col",children:"Cases"}),Object(h.jsx)("th",{scope:"col",children:"Today Cases"}),Object(h.jsx)("th",{scope:"col",children:"Deaths"}),Object(h.jsx)("th",{scope:"col",children:"Today Deaths"}),Object(h.jsx)("th",{scope:"col",children:"Recovered"}),Object(h.jsx)("th",{scope:"col",children:"Today Recovered"})]})}),Object(h.jsx)("tbody",{children:Object(h.jsx)("tr",{children:Object(h.jsx)(h.Fragment,{children:!1===e.load?Object(h.jsx)("td",{children:"Loading..."}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("td",{children:e.countryData.country}),Object(h.jsx)("td",{children:e.countryData.continent}),Object(h.jsx)("td",{children:e.countryData.cases}),Object(h.jsx)("td",{children:e.countryData.todayCases}),Object(h.jsx)("td",{children:e.countryData.deaths}),Object(h.jsx)("td",{children:e.countryData.todayDeaths}),Object(h.jsx)("td",{children:e.countryData.recovered}),Object(h.jsx)("td",{children:e.countryData.todayRecovered})]})})})})]})})},D=Object(s.createContext)();function T(e){var t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],n=c[1];return console.log(a),Object(h.jsx)("div",{children:Object(h.jsx)(D.Provider,{value:[a,n],children:e.children})})}var F=function(){var e=Object(s.useContext)(N),t=Object(s.useState)({}),c=Object(r.a)(t,2),a=c[0],n=c[1],l=Object(s.useState)(!0),o=Object(r.a)(l,2),j=o[0],b=o[1],O=Object(s.useState)(!1),f=Object(r.a)(O,2),g=f[0],p=f[1],y=Object(s.useContext)(D),T=Object(r.a)(y,2),F=T[0],k=(T[1],Object(u.useQuery)("world-data",(function(){return m.a.get("https://disease.sh/v3/covid-19/all").then((function(e){return e.data}))}))),I=k.data,L=k.isLoading;if(k.isError)return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("img",{className:"img-fluid",src:v,alt:"servererr"})})});console.log(e);var R=function(){var e=Object(d.a)(i.a.mark((function e(t){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.target.value,b(!1),p(!1),"worldwide"===c)b(!0);else try{s="https://disease.sh/v3/covid-19/countries/".concat(c),m.a.get(s).then((function(e){n(e.data),p(!0)}))}catch(t){alert("Took long time: Refresh page:)")}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{theme:F,load:L,countryInfo:I}),Object(h.jsxs)("select",{className:F?"rounded-pill form-select shadow p-3 mt-4 bg-dark text-white mb-2":"form-select mt-4 mb-2 p-3 shadow rounded-pill","aria-label":"Default select example",onChange:R,children:[Object(h.jsx)("option",{selected:!0,value:"worldwide",children:"Select Country"}),e.map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)("option",{value:e.countryInfo.iso2,children:e.country},t)]})}))]}),j?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"alert-info shadow-sm mb-3 rounded-pill p-1 text-center font-weight-bold mt-3",children:Object(h.jsx)("h5",{className:"mt-2",children:"Choose Country:"})})}):Object(h.jsx)(C,{theme:F,countryData:a,load:g}),Object(h.jsx)(w,{theme:F})]})},k=c.p+"static/media/logo.dee18f54.png",I=function(){var e=Object(s.useContext)(D),t=Object(r.a)(e,2),c=t[0],a=t[1],n=(new Date).getFullYear();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h3",{className:"text-center mt-3",children:"Coronavirus (COVID-19) Tracker "}),Object(h.jsx)("button",{className:" btn btn-outline-info ml-2 theme mt-2  ".concat(c?"text-white":""),onClick:function(){c?(a(!1),document.body.style.backgroundColor="white",document.body.style.color="black"):(a(!0),document.body.style.backgroundColor="black",document.body.style.color="white")},children:c?"Change Theme[Black]":"Change Theme[Light]"}),Object(h.jsx)("hr",{className:"w-25 mx-auto"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12 col-lg-12 col-12",children:Object(h.jsx)(F,{})})})]}),Object(h.jsx)("footer",{className:"page-footer font-small",children:Object(h.jsxs)("div",{className:"footer-copyright text-center py-3 text-white",children:["\xa9 ",n," Developed by:",Object(h.jsx)("img",{src:k,width:"60",height:"38",className:"d-inline-block align-top",alt:"logo"}),Object(h.jsx)("a",{href:"#",className:"text-warning",children:" Ashish Thapa"})]})})]})};var L=function(){var e=new u.QueryClient;return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(u.QueryClientProvider,{client:e,children:Object(h.jsx)(T,{children:Object(h.jsx)(y,{children:Object(h.jsx)(I,{})})})})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};c(80);l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),R()}},[[81,1,2]]]);
//# sourceMappingURL=main.c542340c.chunk.js.map