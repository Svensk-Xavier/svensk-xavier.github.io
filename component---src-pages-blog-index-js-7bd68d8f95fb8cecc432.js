(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(7),l=n.n(a),r=n(0),i=n.n(r),s=(n(151),n(157)),o=n.n(s),c=n(156),m=n.n(c),u=n(153),h=n(160),p=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),t=o()(this,"props.data.site.siteMetadata.description"),n=o()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(u.a,{location:this.props.location,title:e},i.a.createElement(m.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),i.a.createElement(h.a,{posts:n}))},t}(i.a.Component);t.default=p;var d="2584137191"},151:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(4),i=n.n(r),s=n(33),o=n.n(s);n.d(t,"a",function(){return o.a});n(152),l.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},153:function(e,t,n){"use strict";var a=n(34),l=n.n(a),r=n(7),i=n.n(r),s=n(0),o=n.n(s),c=(n(151),n(158)),m=n.n(c),u=(n(159),function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleDarkMode=n.toggleDarkMode.bind(l()(n)),n}i()(t,e);var n=t.prototype;return n.toggleDarkMode=function(e){var t=!0===e.target.checked?"dark":"light";window.__setPreferredTheme(t)},n.render=function(){var e=this.props.initialTheme;return o.a.createElement(m.a,{id:"dark-mode-toggle",defaultChecked:"dark"===e,onChange:this.toggleDarkMode,icons:{checked:"🌙",unchecked:"☀️"}})},t}(o.a.Component)),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={initialTheme:null},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({initialTheme:localStorage.getItem("theme")||"light"})},n.render=function(){var e=this.props,t=e.isOpen,n=e.onOpen,a=e.onClose,l=e.animateIn,r=this.state.initialTheme;return o.a.createElement("nav",{className:"navigation-bar"+(l?" fade-in--nav":"")},t?o.a.createElement("div",{className:"menu-container"},o.a.createElement("a",{className:"menu-link",href:"/"},"Home"),o.a.createElement("a",{className:"menu-link",href:"/blog"},"Blog"),o.a.createElement("a",{className:"menu-link",href:"/projects"},"Projects"),o.a.createElement("button",{className:"menu-link menu-link--btn",onClick:a},"Close")):o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"/",className:"no-underline home-container brush-stroke-logo"},o.a.createElement("span",{className:"home-link"},"Josh Nelsson-Smith"),o.a.createElement("span",{className:"home-link mobile-only"},"Josh N-S")),o.a.createElement("div",{className:"nav-link-container"},o.a.createElement("div",{className:"toggle-container"},r&&o.a.createElement(u,{initialTheme:r})),o.a.createElement("a",{className:"no-underline nav-link first",href:"/blog"},"Blog"),o.a.createElement("a",{className:"no-underline nav-link",href:"/projects"},"Projects"),o.a.createElement("a",{className:"no-underline nav-link menu mobile-only",onClick:n},o.a.createElement("i",{className:"fa fa-bars"})))))},t}(o.a.Component),p=n(154),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"footer-content__container"},o.a.createElement("div",{className:"links-container"},o.a.createElement("a",{href:"/",className:"no-underline home-container brush-stroke-logo brush-stroke-logo--light home-container--light"},o.a.createElement("span",{className:"home-link"},"Josh Nelsson-Smith"),o.a.createElement("span",{className:"home-link mobile-only"},"Josh N-S")),o.a.createElement(p.a,{isLight:!0})),o.a.createElement("div",{className:"footer-content"},o.a.createElement("p",null,"Made with ",o.a.createElement("i",{class:"fas fa-heart"})," in Melbourne, Australia"),o.a.createElement("p",null,"Copyright © 2019 Josh Nelsson-Smith"))))},t}(o.a.Component),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navOpen:!1,first:!0},n.handleOpen=n.handleOpen.bind(l()(n)),n.handleClose=n.handleClose.bind(l()(n)),n}i()(t,e);var n=t.prototype;return n.handleOpen=function(){window.__scrollLock(),this.setState({navOpen:!0,first:!1})},n.handleClose=function(){window.__scrollUnlock(),this.setState({navOpen:!1})},n.render=function(){var e=this.props,t=e.children,n=e.location,a=(e.title,e.disableAnimations),l=this.state,r=l.navOpen,i=l.first,s="/"===n.pathname,c="shade";return r?c+=" shade--open":i||(c+=" shade--close"),o.a.createElement("div",{className:"app"},o.a.createElement(h,{animateIn:s&&!a,onClose:this.handleClose,onOpen:this.handleOpen,isOpen:r}),o.a.createElement("div",{className:c}),o.a.createElement("div",{className:"content",style:{}},t),o.a.createElement(d,null))},t}(o.a.Component);t.a=f},154:function(e,t,n){"use strict";var a=n(7),l=n.n(a),r=n(0),i=n.n(r),s=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.animateIn,n=e.isLight;return i.a.createElement("div",{className:"links"+(t?" fade-in--nav":"")},i.a.createElement("a",{className:"no-underline link__item"+(n?" link__item--light":""),href:"https://www.linkedin.com/in/jnelssonsmith/"},i.a.createElement("i",{class:"fab fa-linkedin-in"})),i.a.createElement("a",{className:"no-underline link__item"+(n?" link__item--light":""),href:"https://twitter.com/jnelssonsmith"},i.a.createElement("i",{class:"fab fa-twitter"})),i.a.createElement("a",{className:"no-underline link__item"+(n?" link__item--light":""),href:"https://github.com/jnelssonsmith"},i.a.createElement("i",{class:"fab fa-github"})),i.a.createElement("a",{className:"no-underline link__item"+(n?" link__item--light":""),href:"mailto:jnelssonsmith.dev@gmail.com"},i.a.createElement("i",{class:"fas fa-envelope"})))},t}(i.a.Component);t.a=s},155:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),l=n.n(a),r=n(4),i=n.n(r),s=n(55),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?l.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,n){"use strict";var a=n(7),l=n.n(a),r=n(0),i=n.n(r),s=n(151),o=n(157),c=n.n(o),m=(n(156),n(153),n(4),function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.numberOfPosts,n=e.posts,a=n;return t&&(a=n.slice(0,t)),a?a.map(function(e){var t=e.node,n=c()(t,"frontmatter.title")||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",null,i.a.createElement(s.a,{class:"blog-post-link",style:{boxShadow:"none"},to:t.fields.slug},n)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}):null},t}(i.a.Component));t.a=m}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-7bd68d8f95fb8cecc432.js.map