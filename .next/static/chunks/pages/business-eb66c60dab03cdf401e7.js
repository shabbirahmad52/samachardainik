_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"0qjh":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("nKUr"),s=(a("q1tI"),a("YFqc")),i=a.n(s),r=a("i1gN");function n(e){var t=e.props;e.title;return t.data&&""!=t.data&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"recent",children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)("div",{className:"recent-wrapper container",children:Object(c.jsxs)("div",{className:"row no-gutters",children:[Object(c.jsx)("div",{className:"col-md-2",children:Object(c.jsx)("div",{className:"side-wrapper",children:t.data&&t.data.map((function(e,t){return t>0&&t<4&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"side-item",children:[e.post_image&&Object(c.jsx)(r.a,{image:e.post_image,height:100,width:180,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug),altData:e.post_title}),Object(c.jsxs)("div",{className:"side-info",children:[Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(i.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})}),Object(c.jsxs)("div",{className:"province-name hide-lg",children:[e.primary_category.category_name&&Object(c.jsx)(i.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," ","|"," "]})}),e.post_date&&e.post_date]})]})]}),Object(c.jsxs)("div",{className:"province-name hide-xs",children:[e.primary_category.category_name&&Object(c.jsx)(i.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," |"," "]})}),e.post_date&&e.post_date]})]},t)}))})}),Object(c.jsx)("div",{className:"col-md-8",children:Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsx)("h2",{className:"title",children:Object(c.jsx)(i.a,{href:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),children:Object(c.jsx)("a",{children:t.data[0].post_title})})}),t.data[0].post_image&&Object(c.jsx)(r.a,{image:t.data[0].post_image,height:350,width:625,myhref:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),altData:t.data[0].post_title}),Object(c.jsx)("div",{className:"description",children:t.data[0].post_excerpt}),Object(c.jsx)("div",{className:"d-flex justify-content-end ",children:Object(c.jsxs)("div",{className:"province-name",children:[t.data[0].primary_category.category_name&&Object(c.jsx)(i.a,{href:"/".concat(t.data[0].primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",t.data[0].primary_category.category_name," |"," "]})}),t.data[0].post_date&&t.data[0].post_date]})})]})}),Object(c.jsx)("div",{className:"col-md-2",children:Object(c.jsx)("div",{className:"side-wrapper",children:t.data.map((function(e,t){return t>3&&t<7&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"side-item",children:[e.post_image&&Object(c.jsx)(r.a,{image:e.post_image,height:100,width:180,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug),altData:e.post_title}),Object(c.jsxs)("div",{className:"side-info",children:[Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(i.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})}),Object(c.jsxs)("div",{className:"province-name hide-lg",children:[e.primary_category.category_name&&Object(c.jsx)(i.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," ","|"," "]})}),e.post_date&&e.post_date]})]})]}),Object(c.jsxs)("div",{className:"province-name hide-xs",children:[e.primary_category.category_name&&Object(c.jsx)(i.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," |"," "]})}),e.post_date&&e.post_date]})]},e.post_id)}))})})]})})})})})}},"0xlg":function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return l})),a.d(t,"default",(function(){return j}));var c=a("nKUr"),s=a("q1tI"),i=a("ONLB"),r=a("guMm"),n=a("0qjh"),d=a("nOHt"),o=a("EpUS"),l=(a("HhXQ"),a("w6eG"),!0);function j(e){var t=e.data,a=e.params,l=Object(s.useState)(0),j=l[0],h=l[1];return Object(d.useRouter)().isFallback?Object(c.jsx)("div",{children:"Loading..."}):(Object(s.useEffect)((function(){h(1)}),[a]),Object(c.jsxs)("div",{children:[t&&Object(c.jsx)(i.a,{props:t.flash_news}),t&&Object(c.jsx)(n.a,{props:t,title:t.category_name}),t&&Object(c.jsx)(r.a,{props:t}),Array.apply(null,{length:j}).map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(o.a,{params:a,pageCount:t+2})},t)})),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"load-more",children:Object(c.jsx)("span",{onClick:function(){return h(j+1)},children:"\u0925\u092a \u0938\u092e\u093e\u091a\u093e\u0930"})})})]}))}},EpUS:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("nKUr"),s=(a("q1tI"),a("Aiso"),a("VtrM")),i=a("00EI"),r=a("YFqc"),n=a.n(r),d=a("i1gN");function o(e){var t=e.params,a=e.pageCount,r=Object(s.a)("".concat(i.a,"/wp-json/wp/v2/category/content?category_slug=").concat(t.category,"&offset=").concat(a+5+8*a,"&page_post=9"),(function(e){return fetch(e).then((function(e){return e.json()}))})),o=r.data;return r.error?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"reload-btn",children:Object(c.jsxs)("span",{onClick:function(){location.reload()},children:[Object(c.jsx)("i",{className:"fa fa-reload"})," Reload"]})})}):o?Object(c.jsx)("div",{className:"extra-categroy-section",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:o&&o.data.map((function(e){return Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"post-item",children:[e.post_image&&Object(c.jsx)(d.a,{image:e.post_image,height:220,width:360,altData:e.post_title,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug)}),Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(n.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})})]})},e.post_id)}))})})}):Object(c.jsx)("div",{className:"loading-container",children:Object(c.jsx)("img",{src:"/img/loader.gif",className:"img-fluid"})})}},HhXQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a("nKUr"),s=a("q1tI"),i=a("Aiso"),r=a.n(i),n=a("sZxp"),d=a.n(n);function o(e){var t=e.image,a=e.height,i=e.width,n=function(e){switch(e){case"large_box_ads":return 100;case"square_ads":return 250;case"medium_box_ads":case"small_box_ads":return 100}},o=function(e){switch(e){case"large_box_ads":return 1200;case"square_ads":return 250;case"medium_box_ads":return 550;case"small_box_ads":return 300}},l=Object(s.useState)(!0),j=l[0],h=l[1];return Object(c.jsxs)(c.Fragment,{children:[j&&Object(c.jsx)(d.a,{height:n(a)||100,width:o(i)}),t&&Object(c.jsx)(r.a,{src:t,className:"img-fluid",height:n(a),width:o(i),alt:"",onLoad:function(){return h(!1)}})]})}function l(e){var t=e.props;return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"income-section",children:t.data&&t.data.map((function(e,t){return e.ads_url?Object(c.jsx)("a",{href:e.ads_url,target:"_blank",children:Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)(o,{height:e.ads_type,width:e.ads_type,image:e.post_image})})},t):Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)(o,{height:e.ads_type,width:e.ads_type,image:e.post_image})},t)}))})})}},ONLB:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a("nKUr"),s=(a("q1tI"),a("Aiso")),i=a.n(s),r=a("YFqc"),n=a.n(r);function d(e){var t=e.props;return Object(c.jsx)(c.Fragment,{children:t.data.map((function(e,t){return Object(c.jsx)("section",{className:"banner",children:Object(c.jsxs)("div",{className:"container",children:[e.post_ribbon&&Object(c.jsx)("div",{className:"ribbon-container",children:Object(c.jsx)("span",{children:e.post_ribbon})}),Object(c.jsxs)("div",{className:"banner-wrapper",children:[Object(c.jsx)("h1",{className:"title",children:Object(c.jsx)(n.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsxs)("a",{children:[" ",e.post_title," "]})})}),Object(c.jsx)("div",{className:"subtitle",children:e.sub_title&&e.sub_title}),Object(c.jsxs)("div",{className:"author-wrap",children:[e.post_author&&Object(c.jsxs)("span",{children:[Object(c.jsx)("i",{className:"fa fa-user"})," ",e.post_author," "]}),Object(c.jsx)("i",{className:"fa fa-clock"})," ",e.post_date]}),e.facebook_code?Object(c.jsx)("div",{className:"tv-video-container",children:Object(c.jsx)("iframe",{src:"https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/".concat(e.facebook_code,"/&show_text=false"),width:"100%",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowTransparency:"true",allow:"encrypted-media",allowFullScreen:"true"})}):e.youtube_code?Object(c.jsx)("div",{className:"tv-video-container",children:Object(c.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(e.youtube_code),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):e.post_image?Object(c.jsx)(n.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:Object(c.jsx)("div",{className:"img-container",children:e.post_image&&Object(c.jsx)(i.a,{src:e.post_image,className:"img-fluid",loading:"eager",width:1140,height:640,alt:e.post_title})})})}):null]})]})},e.post_id)}))})}},guMm:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("nKUr"),s=(a("q1tI"),a("Aiso"),a("YFqc")),i=a.n(s),r=a("i1gN");function n(e){var t=e.props,a=e.title,s=e.slug;return t.data&&""!=t.data&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"business",children:Object(c.jsxs)("div",{className:"container",children:[a&&Object(c.jsx)("div",{className:"section-title text-center",children:Object(c.jsx)(i.a,{href:"/".concat(s),children:Object(c.jsxs)("a",{children:[Object(c.jsx)("div",{className:"section-img",children:Object(c.jsx)("img",{src:"/img/icon.png",className:"img-fluid",alt:""})}),Object(c.jsx)("h1",{children:a})]})})}),Object(c.jsx)("div",{className:"business-wrapper ",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-5",children:Object(c.jsx)("div",{className:"side-wrapper",children:t.data.map((function(e,t){return t>0&&t<5&&Object(c.jsxs)("div",{className:"",children:[Object(c.jsxs)("div",{className:"side-item",children:[e.post_image&&Object(c.jsx)(r.a,{image:e.post_image,height:100,width:180,altData:e.post_title,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug)}),Object(c.jsxs)("div",{className:"side-info",children:[Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(i.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})}),Object(c.jsxs)("div",{className:"province-name hide-lg",children:[e.primary_category.category_slug&&Object(c.jsx)(i.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," ","|"," "]})}),e.post_date]})]})]}),Object(c.jsxs)("div",{className:"province-name hide-xs",children:[e.primary_category.category_slug&&Object(c.jsx)(i.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," |"," "]})}),e.post_date]})]},e.post_id)}))})}),Object(c.jsx)("div",{className:"col-md-7",children:Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsx)("h2",{className:"title",children:Object(c.jsx)(i.a,{href:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),children:Object(c.jsx)("a",{children:t.data[0].post_title})})}),t.data[0].post_image&&Object(c.jsx)(r.a,{image:t.data[0].post_image,height:350,myhref:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),width:625,altData:t.data[0].post_title}),Object(c.jsx)("div",{className:"description",children:t.data[0].post_excerpt}),Object(c.jsx)("div",{className:"d-flex justify-content-end mt-4",children:Object(c.jsxs)("div",{className:"province-name",children:[t.data[0].primary_category.category_slug&&Object(c.jsx)(i.a,{href:"/".concat(t.data[0].primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",t.data[0].primary_category.category_name," |"," "]})}),t.data[0].post_date]})})]})})]})})]})})})}},hMG9:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/business",function(){return a("0xlg")}])},w6eG:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("nKUr"),s=(a("q1tI"),a("Aiso"),a("YFqc")),i=a.n(s),r=(a("HhXQ"),a("i1gN"));function n(e){var t=e.props,a=e.title;return Object(c.jsx)(c.Fragment,{children:t.data[0]&&Object(c.jsx)("section",{className:"category",children:Object(c.jsxs)("div",{className:"container",children:[a&&Object(c.jsx)("div",{className:"section-title text-center my-0",children:Object(c.jsxs)("a",{href:"",children:[Object(c.jsx)("div",{className:"section-img",children:Object(c.jsx)("img",{src:"/img/icon.png",className:"img-fluid",alt:""})}),Object(c.jsx)("h1",{children:a})]})}),Object(c.jsx)("div",{className:"category-wrapper",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-7",children:Object(c.jsxs)("div",{className:"main-wrapper",children:[Object(c.jsx)("h2",{className:"title",children:Object(c.jsx)(i.a,{href:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),children:Object(c.jsx)("a",{children:t.data[0].post_title})})}),t.data[0].post_image&&Object(c.jsx)(r.a,{image:t.data[0].post_image,height:350,myhref:"/story/".concat(t.data[0].post_id,"/").concat(t.data[0].date_slug),width:625,altData:t.data[0].post_title}),Object(c.jsx)("div",{className:"description",children:t.data[0].post_excerpt}),Object(c.jsx)("div",{className:"d-flex justify-content-end mt-4",children:Object(c.jsxs)("div",{className:"province-name",children:[t.data[0].primary_category.category_slug&&Object(c.jsx)(i.a,{href:"/".concat(t.data[0].primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",t.data[0].primary_category.category_name," |"," "]})}),t.data[0].post_date]})})]})}),Object(c.jsx)("div",{className:"col-md-5",children:Object(c.jsx)("div",{className:"side-wrapper",children:t.data.map((function(e,t){return t>0&&t<5&&e.post_id&&Object(c.jsxs)("div",{className:"",children:[Object(c.jsxs)("div",{className:"side-item",children:[e.post_image&&Object(c.jsx)(r.a,{image:e.post_image,height:100,width:180,altData:e.post_title,myhref:"/story/".concat(e.post_id,"/").concat(e.date_slug)}),Object(c.jsxs)("div",{className:"side-info",children:[Object(c.jsx)("h3",{className:"title",children:Object(c.jsx)(i.a,{href:"/story/".concat(e.post_id,"/").concat(e.date_slug),children:Object(c.jsx)("a",{children:e.post_title})})}),Object(c.jsxs)("div",{className:"province-name hide-lg",children:[e.primary_category.category_slug&&Object(c.jsx)(i.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," ","|"," "]})}),e.post_date]})]})]}),Object(c.jsxs)("div",{className:"province-name hide-xs",children:[e.primary_category.category_slug&&Object(c.jsx)(i.a,{href:"/".concat(e.primary_category.category_slug),children:Object(c.jsxs)("a",{children:[" ",e.primary_category.category_name," |"," "]})}),e.post_date]})]},e.post_id)}))})})]})})]})})})}}},[["hMG9",0,1,2,3,4,5]]]);