(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{AgKF:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("9eSz"),i=t.n(r),c=t("Wbzz"),m=(t("aGE4"),t("OIyk"));a.a=function(e){var a=e.productFamily,t=e.fixed;return l.a.createElement("div",null,l.a.createElement("div",{className:""},l.a.createElement(c.Link,{to:"/products/"+Object(m.slugify)(a)},l.a.createElement("div",{className:"flex flex-row my-1"},l.a.createElement(i.a,{fixed:t}),l.a.createElement("h4",{className:"mx-2 my-4 text-blue-600 hover:text-red-400"},a)))))}},QeBL:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),i=t("/15Y"),c=t("9eSz"),m=t.n(c);var u=function(e){var a=e.title,t=e.date,n=e.description,i=e.fluid,c=e.slug;return l.a.createElement("div",{className:"MainSectionCard"},l.a.createElement(r.Link,{to:"/articles/"+c},l.a.createElement(m.a,{fluid:i})),l.a.createElement(r.Link,{to:"/articles/"+c},l.a.createElement("h1",{className:"text-blue-600 hover:text-red-400"},a)),l.a.createElement("h3",{className:"text-gray-400"},"Published On: ",t),l.a.createElement("h2",null,n))},s=(t("aGE4"),t("AgKF"));var d=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"mainSection__SideScreen"},l.a.createElement(r.StaticQuery,{query:o,render:function(e){return l.a.createElement("div",null,e.allStrapiProduct.edges.map((function(e){var a=e.node;return l.a.createElement(s.a,{key:a.id,fixed:a.image.childImageSharp.fixed,name:a.name,productFamily:a.productFamily,slug:a.slug})})))}})))},o="4193128276",E=t("IFRj"),v=t.n(E);var f=function(){return l.a.createElement("div",{className:"m-6"},l.a.createElement("div",{className:"columns is-variable is-tablet is-7"},l.a.createElement("div",{className:"column is-two-thirds "},l.a.createElement("div",{className:"mainSection__Article"},l.a.createElement(r.StaticQuery,{query:p,render:function(e){return l.a.createElement("div",null,e.allStrapiArticle.edges.map((function(e){var a=e.node;return l.a.createElement(u,{key:a.id,title:a.title,date:a.publishedAt,description:a.description,fluid:a.image.childImageSharp.fluid,slug:a.slug})})))}}))),l.a.createElement("div",{className:"column is-one-thirds"},l.a.createElement(v.a,null,l.a.createElement(d,null)))))},p="4193276514",g=t("+0rI"),h="2752015303";a.default=function(){var e=Object(r.useStaticQuery)(h);return l.a.createElement(i.a,{seo:e.strapiGlobal.seo},l.a.createElement(f,null),l.a.createElement(g.a,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a311f6de19d4c466489a.js.map