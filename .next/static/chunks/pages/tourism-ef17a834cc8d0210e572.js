_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"0qjh":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("nKUr"),s=(a("q1tI"),a("YFqc")),r=a.n(s),i=a("i1gN");function n(e){var t=e.props;e.title;return t.data&&""!=t.data&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"recent",children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)("div",{className:"recent-wrapper container",children:Object(c.jsxs)("div",{className:"row no-gutters",children:[Object(c.jsx)("div",{className:"col-md-2",children:Object(c.jsx)("div",{className:"side-wrapper",children:t.data&&t.data.map((function(e,t){return t>0&&t<4&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"side-item",children:[e.post_image&&Object(c.jsx)(i.a,{image:e.post_image,height:100,width:180,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug),altData:e.post_title}),Object(c.jsxs)("div",{className:"side-info",children:[Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(r.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})}),Object(c.jsxs)("div",{className:"province-name hide-lg",children:[e.primary_category.category_name&&Object(c.jsx)(r.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," ","|"," "]})}),e.post_date&&e.post_date]})]})]}),Object(c.jsxs)("div",{className:"province-name hide-xs",children:[e.primary_category.category_name&&Object(c.jsx)(r.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," |"," "]})}),e.post_date&&e.post_date]})]},t)}))})}),Object(c.jsx)("div",{className:"col-md-8",children:Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsx)("h2",{className:"title",children:Object(c.jsx)(r.a,{href:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),children:Object(c.jsx)("a",{children:t.data[0].post_title})})}),t.data[0].post_image&&Object(c.jsx)(i.a,{image:t.data[0].post_image,height:350,width:625,myhref:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),altData:t.data[0].post_title}),Object(c.jsx)("div",{className:"description",children:t.data[0].post_excerpt}),Object(c.jsx)("div",{className:"d-flex justify-content-end ",children:Object(c.jsxs)("div",{className:"province-name",children:[t.data[0].primary_category.category_name&&Object(c.jsx)(r.a,{href:"/".concat(t.data[0].primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",t.data[0].primary_category.category_name," |"," "]})}),t.data[0].post_date&&t.data[0].post_date]})})]})}),Object(c.jsx)("div",{className:"col-md-2",children:Object(c.jsx)("div",{className:"side-wrapper",children:t.data.map((function(e,t){return t>3&&t<7&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"side-item",children:[e.post_image&&Object(c.jsx)(i.a,{image:e.post_image,height:100,width:180,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug),altData:e.post_title}),Object(c.jsxs)("div",{className:"side-info",children:[Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(r.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})}),Object(c.jsxs)("div",{className:"province-name hide-lg",children:[e.primary_category.category_name&&Object(c.jsx)(r.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," ","|"," "]})}),e.post_date&&e.post_date]})]})]}),Object(c.jsxs)("div",{className:"province-name hide-xs",children:[e.primary_category.category_name&&Object(c.jsx)(r.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," |"," "]})}),e.post_date&&e.post_date]})]},e.post_id)}))})})]})})})})})}},EpUS:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("nKUr"),s=(a("q1tI"),a("Aiso"),a("VtrM")),r=a("00EI"),i=a("YFqc"),n=a.n(i),d=a("i1gN");function o(e){var t=e.params,a=e.pageCount,i=Object(s.a)("".concat(r.a,"/wp-json/wp/v2/category/content?category_slug=").concat(t.category,"&offset=").concat(a+5+8*a,"&page_post=9"),(function(e){return fetch(e).then((function(e){return e.json()}))})),o=i.data;return i.error?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"reload-btn",children:Object(c.jsxs)("span",{onClick:function(){location.reload()},children:[Object(c.jsx)("i",{className:"fa fa-reload"})," Reload"]})})}):o?Object(c.jsx)("div",{className:"extra-categroy-section",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:o&&o.data.map((function(e){return Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"post-item",children:[e.post_image&&Object(c.jsx)(d.a,{image:e.post_image,height:220,width:360,altData:e.post_title,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug)}),Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(n.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})})]})},e.post_id)}))})})}):Object(c.jsx)("div",{className:"loading-container",children:Object(c.jsx)("img",{src:"/img/loader.gif",className:"img-fluid"})})}},ONLB:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a("nKUr"),s=(a("q1tI"),a("Aiso")),r=a.n(s),i=a("YFqc"),n=a.n(i);function d(e){var t=e.props;return Object(c.jsx)(c.Fragment,{children:t.data.map((function(e,t){return Object(c.jsx)("section",{className:"banner",children:Object(c.jsxs)("div",{className:"container",children:[e.post_ribbon&&Object(c.jsx)("div",{className:"ribbon-container",children:Object(c.jsx)("span",{children:e.post_ribbon})}),Object(c.jsxs)("div",{className:"banner-wrapper",children:[Object(c.jsx)("h1",{className:"title",children:Object(c.jsx)(n.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsxs)("a",{children:[" ",e.post_title," "]})})}),Object(c.jsx)("div",{className:"subtitle",children:e.sub_title&&e.sub_title}),Object(c.jsxs)("div",{className:"author-wrap",children:[e.post_author&&Object(c.jsxs)("span",{children:[Object(c.jsx)("i",{className:"fa fa-user"})," ",e.post_author," "]}),Object(c.jsx)("i",{className:"fa fa-clock"})," ",e.post_date]}),e.facebook_code?Object(c.jsx)("div",{className:"tv-video-container",children:Object(c.jsx)("iframe",{src:"https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/".concat(e.facebook_code,"/&show_text=false"),width:"100%",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowTransparency:"true",allow:"encrypted-media",allowFullScreen:"true"})}):e.youtube_code?Object(c.jsx)("div",{className:"tv-video-container",children:Object(c.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(e.youtube_code),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):e.post_image?Object(c.jsx)(n.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:Object(c.jsx)("div",{className:"img-container",children:e.post_image&&Object(c.jsx)(r.a,{src:e.post_image,className:"img-fluid",loading:"eager",width:1140,height:640,alt:e.post_title})})})}):null]})]})},e.post_id)}))})}},YodB:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return o})),a.d(t,"default",(function(){return l}));var c=a("nKUr"),s=a("q1tI"),r=a("ONLB"),i=(a("guMm"),a("0qjh")),n=a("nOHt"),d=a("EpUS"),o=!0;function l(e){var t=e.data,a=e.params,o=Object(s.useState)(0),l=o[0],j=o[1];return Object(n.useRouter)().isFallback?Object(c.jsx)("div",{children:"Loading..."}):(Object(s.useEffect)((function(){j(1)}),[a]),Object(c.jsxs)("div",{children:[t.flash_news&&t.flash_news.data&&Object(c.jsx)(r.a,{props:t.flash_news}),t&&Object(c.jsx)(i.a,{props:t,title:t.category_name}),Array.apply(null,{length:l}).map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(d.a,{params:a,pageCount:t+2})},t)})),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"load-more",children:Object(c.jsx)("span",{onClick:function(){return j(l+1)},children:"\u0925\u092a \u0938\u092e\u093e\u091a\u093e\u0930"})})})]}))}},guMm:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("nKUr"),s=(a("q1tI"),a("Aiso"),a("YFqc")),r=a.n(s),i=a("i1gN");function n(e){var t=e.props,a=e.title,s=e.slug;return t.data&&""!=t.data&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"business",children:Object(c.jsxs)("div",{className:"container",children:[a&&Object(c.jsx)("div",{className:"section-title text-center",children:Object(c.jsx)(r.a,{href:"/".concat(s),children:Object(c.jsxs)("a",{children:[Object(c.jsx)("div",{className:"section-img",children:Object(c.jsx)("img",{src:"/img/icon.png",className:"img-fluid",alt:""})}),Object(c.jsx)("h1",{children:a})]})})}),Object(c.jsx)("div",{className:"business-wrapper ",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-5",children:Object(c.jsx)("div",{className:"side-wrapper",children:t.data.map((function(e,t){return t>0&&t<5&&Object(c.jsxs)("div",{className:"",children:[Object(c.jsxs)("div",{className:"side-item",children:[e.post_image&&Object(c.jsx)(i.a,{image:e.post_image,height:100,width:180,altData:e.post_title,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug)}),Object(c.jsxs)("div",{className:"side-info",children:[Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(r.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})}),Object(c.jsxs)("div",{className:"province-name hide-lg",children:[e.primary_category.category_slug&&Object(c.jsx)(r.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," ","|"," "]})}),e.post_date]})]})]}),Object(c.jsxs)("div",{className:"province-name hide-xs",children:[e.primary_category.category_slug&&Object(c.jsx)(r.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," |"," "]})}),e.post_date]})]},e.post_id)}))})}),Object(c.jsx)("div",{className:"col-md-7",children:Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsx)("h2",{className:"title",children:Object(c.jsx)(r.a,{href:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),children:Object(c.jsx)("a",{children:t.data[0].post_title})})}),t.data[0].post_image&&Object(c.jsx)(i.a,{image:t.data[0].post_image,height:350,myhref:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),width:625,altData:t.data[0].post_title}),Object(c.jsx)("div",{className:"description",children:t.data[0].post_excerpt}),Object(c.jsx)("div",{className:"d-flex justify-content-end mt-4",children:Object(c.jsxs)("div",{className:"province-name",children:[t.data[0].primary_category.category_slug&&Object(c.jsx)(r.a,{href:"/".concat(t.data[0].primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",t.data[0].primary_category.category_name," |"," "]})}),t.data[0].post_date]})})]})})]})})]})})})}},s4XJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tourism",function(){return a("YodB")}])}},[["s4XJ",0,1,2,3,4,5]]]);