(this["webpackJsonpnetflix-clone-with-tensorflow"]=this["webpackJsonpnetflix-clone-with-tensorflow"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(20),o=n.n(i),r=(n(30),n(31),n(4)),s=n.n(r),l=n(8),d=n(5),u=(n(33),n(21)),h=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),f=n(22),v=n(25),b=n.n(v),j=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),o=Object(d.a)(i,2),r=o[0],u=o[1],v=Object(c.useState)(""),p=Object(d.a)(v,2),m=p[0],g=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row__posters",children:r.map((function(e){return Object(j.jsx)("img",{onClick:function(){return function(e){m?g(""):b()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(j.jsx)(f.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},m="2245299b68a8a5dcd457dae5edb0f629",g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(73);var O=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(g.fetchNetflixOriginals);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n            "https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'"\n        )'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner__contents",children:[Object(j.jsx)("h1",{children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(j.jsxs)("div",{className:"banner__buttons",children:[Object(j.jsx)("button",{className:"banner__button",children:"Play"}),Object(j.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(j.jsx)("h1",{className:"banner__description",children:null===n||void 0===n?void 0:n.overview})]}),Object(j.jsx)("div",{className:"banner__fadeBottom"})]})};n(74);var x=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsxs)("div",{className:"nav && ".concat(n&&"nav__black"),children:[Object(j.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/800px-Netflix_logo.svg.png",alt:"Netflix Logo"}),Object(j.jsx)("img",{className:"nav__avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Netflix Avatar Logo"})]})};var _=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)(x,{}),Object(j.jsx)(O,{}),Object(j.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(p,{title:"Trending Now",fetchUrl:g.fetchTrending}),Object(j.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Documentaries",fetchUrl:g.fetchDocumentaries})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),w()}},[[75,1,2]]]);
//# sourceMappingURL=main.2a0b68a8.chunk.js.map