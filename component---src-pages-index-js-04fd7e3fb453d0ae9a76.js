(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(7),s=a.n(n),r=a(0),i=a.n(r),l=(a(151),a(157)),o=a.n(l),c=a(156),m=a.n(c),u=(a(177),a(178),a(168)),h=a(153),p=a(160),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:!0,disableAnimations:null},a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=sessionStorage.getItem("disable-animations");e||sessionStorage.setItem("disable-animations","."),this.setState({disableAnimations:e,loading:!1})},a.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),t=o()(this,"props.data.site.siteMetadata.description"),a=o()(this,"props.data.allMarkdownRemark.edges"),n=this.state,s=n.disableAnimations;return n.loading?null:i.a.createElement(h.a,{disableAnimations:s,location:this.props.location,title:e},i.a.createElement(m.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),i.a.createElement(u.a,{disableAnimations:s}),i.a.createElement("div",{className:!s&&"fade-in--nav"},i.a.createElement("hr",null),i.a.createElement("h2",{className:"header--brush-stroke"},i.a.createElement("span",{className:"brush-stroke-wrapper"},i.a.createElement("span",{className:"brush-stroke-test"},"Latest Blog Posts"))),i.a.createElement(p.a,{posts:a,numberOfPosts:3}),i.a.createElement("a",{className:"blog-post-link",href:"/blog"},"See all posts"),i.a.createElement("div",{style:{marginBottom:"100px"}}),i.a.createElement("hr",null),i.a.createElement("h2",{className:"header--brush-stroke"},i.a.createElement("span",{className:"brush-stroke-wrapper"},i.a.createElement("span",{className:"brush-stroke-test"},"Projects"))),i.a.createElement("p",null,"Projects coming soon!")))},t}(i.a.Component);t.default=d;var f="2584137191"},151:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(4),i=a.n(r),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(152),s.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},153:function(e,t,a){"use strict";var n=a(34),s=a.n(n),r=a(7),i=a.n(r),l=a(0),o=a.n(l),c=(a(151),a(158)),m=a.n(c),u=(a(159),function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleDarkMode=a.toggleDarkMode.bind(s()(a)),a}i()(t,e);var a=t.prototype;return a.toggleDarkMode=function(e){var t=!0===e.target.checked?"dark":"light";window.__setPreferredTheme(t)},a.render=function(){var e=this.props.initialTheme;return o.a.createElement(m.a,{id:"dark-mode-toggle",defaultChecked:"dark"===e,onChange:this.toggleDarkMode,icons:{checked:"🌙",unchecked:"☀️"}})},t}(o.a.Component)),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={initialTheme:null},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({initialTheme:localStorage.getItem("theme")||"light"})},a.render=function(){var e=this.props,t=e.isOpen,a=e.onOpen,n=e.onClose,s=e.animateIn,r=this.state.initialTheme;return o.a.createElement("nav",{className:"navigation-bar"+(s?" fade-in--nav":"")},t?o.a.createElement("div",{className:"menu-container"},o.a.createElement("a",{className:"menu-link",href:"/"},"Home"),o.a.createElement("a",{className:"menu-link",href:"/blog"},"Blog"),o.a.createElement("a",{className:"menu-link",href:"/projects"},"Projects"),o.a.createElement("button",{className:"menu-link menu-link--btn",onClick:n},"Close")):o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"/",className:"no-underline home-container brush-stroke-logo"},o.a.createElement("span",{className:"home-link"},"Josh Nelsson-Smith"),o.a.createElement("span",{className:"home-link mobile-only"},"Josh N-S")),o.a.createElement("div",{className:"nav-link-container"},o.a.createElement("div",{className:"toggle-container"},r&&o.a.createElement(u,{initialTheme:r})),o.a.createElement("a",{className:"no-underline nav-link first",href:"/blog"},"Blog"),o.a.createElement("a",{className:"no-underline nav-link",href:"/projects"},"Projects"),o.a.createElement("a",{className:"no-underline nav-link menu mobile-only",onClick:a},o.a.createElement("i",{className:"fa fa-bars"})))))},t}(o.a.Component),p=a(154),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"footer-content__container"},o.a.createElement("div",{className:"links-container"},o.a.createElement("a",{href:"/",className:"no-underline home-container brush-stroke-logo brush-stroke-logo--light home-container--light"},o.a.createElement("span",{className:"home-link"},"Josh Nelsson-Smith"),o.a.createElement("span",{className:"home-link mobile-only"},"Josh N-S")),o.a.createElement(p.a,{isLight:!0})),o.a.createElement("div",{className:"footer-content"},o.a.createElement("p",null,"Made with ",o.a.createElement("i",{class:"fas fa-heart"})," in Melbourne, Australia"),o.a.createElement("p",null,"Copyright © 2019 Josh Nelsson-Smith"))))},t}(o.a.Component),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1,first:!0},a.handleOpen=a.handleOpen.bind(s()(a)),a.handleClose=a.handleClose.bind(s()(a)),a}i()(t,e);var a=t.prototype;return a.handleOpen=function(){window.__scrollLock(),this.setState({navOpen:!0,first:!1})},a.handleClose=function(){window.__scrollUnlock(),this.setState({navOpen:!1})},a.render=function(){var e=this.props,t=e.children,a=e.location,n=(e.title,e.disableAnimations),s=this.state,r=s.navOpen,i=s.first,l="/"===a.pathname,c="shade";return r?c+=" shade--open":i||(c+=" shade--close"),o.a.createElement("div",{className:"app"},o.a.createElement(h,{animateIn:l&&!n,onClose:this.handleClose,onOpen:this.handleOpen,isOpen:r}),o.a.createElement("div",{className:c}),o.a.createElement("div",{className:"content",style:{}},t),o.a.createElement(d,null))},t}(o.a.Component);t.a=f},154:function(e,t,a){"use strict";var n=a(7),s=a.n(n),r=a(0),i=a.n(r),l=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.animateIn,a=e.isLight;return i.a.createElement("div",{className:"links"+(t?" fade-in--nav":"")},i.a.createElement("a",{className:"no-underline link__item"+(a?" link__item--light":""),href:"https://www.linkedin.com/in/jnelssonsmith/"},i.a.createElement("i",{class:"fab fa-linkedin-in"})),i.a.createElement("a",{className:"no-underline link__item"+(a?" link__item--light":""),href:"https://twitter.com/jnelssonsmith"},i.a.createElement("i",{class:"fab fa-twitter"})),i.a.createElement("a",{className:"no-underline link__item"+(a?" link__item--light":""),href:"https://github.com/jnelssonsmith"},i.a.createElement("i",{class:"fab fa-github"})),i.a.createElement("a",{className:"no-underline link__item"+(a?" link__item--light":""),href:"mailto:jnelssonsmith.dev@gmail.com"},i.a.createElement("i",{class:"fas fa-envelope"})))},t}(i.a.Component);t.a=l},155:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),s=a.n(n),r=a(4),i=a.n(r),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){"use strict";var n=a(7),s=a.n(n),r=a(0),i=a.n(r),l=a(151),o=a(157),c=a.n(o),m=(a(156),a(153),a(4),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.numberOfPosts,a=e.posts,n=a;return t&&(n=a.slice(0,t)),n?n.map(function(e){var t=e.node,a=c()(t,"frontmatter.title")||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",null,i.a.createElement(l.a,{class:"blog-post-link",style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}):null},t}(i.a.Component));t.a=m},168:function(e,t,a){"use strict";var n=a(7),s=a.n(n),r=a(0),i=a.n(r),l=a(154),o=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.disableAnimations;return i.a.createElement("div",{className:"intro"},i.a.createElement("p",null,i.a.createElement("span",{className:"bio-text "+(e?"":" intro-anim intro-anim--first")},"Hi, I'm")," ",i.a.createElement("span",{className:(e?"":"brush-anim brush-anim--first")+" bio-brush-stroke bio-brush-stroke--josh"},"Josh")),i.a.createElement("p",null,i.a.createElement("span",{className:"bio-text "+(e?"":" intro-anim intro-anim--second")},"I'm a"),i.a.createElement("br",{className:"mobile-break"}),i.a.createElement("span",{className:(e?"":"brush-anim brush-anim--second")+" bio-brush-stroke bio-brush-stroke--job"},"Front-End Engineer")),i.a.createElement("p",null,i.a.createElement("span",{className:"bio-text "+(e?"":" intro-anim intro-anim--third")},"Currently based in"),i.a.createElement("br",{className:"mobile-break"}),i.a.createElement("span",{className:(e?"":"brush-anim brush-anim--third")+" bio-brush-stroke bio-brush-stroke--location"},"Melbourne, Australia")),i.a.createElement(l.a,{animateIn:!e}))},t}(i.a.Component);t.a=o}}]);
//# sourceMappingURL=component---src-pages-index-js-04fd7e3fb453d0ae9a76.js.map