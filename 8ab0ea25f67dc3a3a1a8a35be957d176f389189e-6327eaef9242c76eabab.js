(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5w0b":function(e,t,a){"use strict";var r=a("2A+t"),i=a("izhR"),n=a("Frpm"),s=a("3k8n");a("qKvR");t.a=function(e){var t=e.children,a=e.to,d=e.count;return Object(r.c)(i.d,{sx:{bg:"gray.1",mr:3,mb:2,color:"textMuted",px:2,py:1,":hover":{bg:"gray.2"}},as:n.a,to:a},Object(r.c)(s.a,{ns:"translation-tag"},t),d&&"("+d+")")}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=u(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,O=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),O.set(e,t)),function(){a.unobserve(e),O.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(I,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),I=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,O=e.itemProp,x=e.loading,R=e.draggable,L=h||m;if(!L)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,o.default)({opacity:k?1:0,transition:V?"opacity "+v+"ms":"none"},d),C="boolean"==typeof b?"lightgray":b,P={transitionDelay:v+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&P,d,f),T={title:t,alt:this.state.isVisible?"":a,style:H,className:p,itemProp:O},q=this.state.isHydrated?g(L):L[0];if(h)return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&P)}),q.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:T,imageVariants:L,generateSources:j}),q.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:T,imageVariants:L,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(L),l.default.createElement(I,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:x,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,o.default)({alt:a,title:t,loading:x},q,{imageVariants:L}))}}));if(m){var M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},V&&P)}),q.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:T,imageVariants:L,generateSources:j}),q.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:T,imageVariants:L,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(L),l.default.createElement(I,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:x,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,o.default)({alt:a,title:t,loading:x},q,{imageVariants:L}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),W=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:V,sizes:W,fixed:C(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:C(c.default.oneOfType([W,c.default.arrayOf(W)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=k;t.default=P},"9yS4":function(e,t,a){"use strict";var r=a("zLVn"),i=(a("q1tI"),a("MXbp")),n=a("izhR"),s=a("ZdEh"),d=a("2A+t"),o=a("Wbzz"),l=a("Frpm"),c=a("u03u"),u=a("qKvR"),f=function(e){e.children;var t=e.basePath,a=e.pageContext.locale,r=e.siteMetadata;return Object(d.c)(i.b.h3,{sx:{mb:2,mt:2,mr:[3,4]}},Object(d.c)(n.d,{sx:{color:"text"},as:l.a,to:Object(o.withPrefix)(t)},Object(c.e)("title",r.localize,r.title,a)))},p=a("wx14"),g=function(e){var t=e.pageContext.locale,a=e.siteMetadata,r=Object(c.e)("menuLinks",a.localize,a.menuLinks,t);return r?Object(d.c)(n.b,{as:"nav"},r.map((function(e){var t={},a=!1,r=e.url;return e.external&&(t.target="_blank",t.rel="noopener noreferrer",a=!0),!1!==e.prefetch||e.external||(a=!0),Object(d.c)(n.e,Object(p.a)({as:a?n.e:l.a,to:a?void 0:r,href:a?r:void 0,key:r},t),e.name)}))):null},h=a("33yf"),m=function(e){var t=e.pageContext,a=Object(l.b)(),r=a.locale,i=a.config,s=a.defaultLang;return Object(d.c)(n.b,null,Object(d.c)(n.f,{sx:{minWidth:"6.5rem"},value:r,onChange:function(e){var a=e.target.value,r=Object(o.withPrefix)(Object(h.join)((a===s?"":"/"+a)+t.originalPath));Object(o.navigate)(r)}},i.map((function(e){return Object(d.c)("option",{key:e.code,value:e.code},e.localName)}))))},b=function(e){var t=e.title,a=e.pageType;return Object(d.c)("header",{sx:{px:[3,4],mb:4,maxWidth:"5xl",mx:"auto"}},Object(d.c)(i.b.div,{sx:{pt:3,pb:"detail"===a?2:3,borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:"muted"}},Object(d.c)(i.b.div,{sx:{display:"flex",alignItems:"baseline",flexWrap:"wrap",justifyContent:"space-between"}},Object(d.c)(n.b,{sx:{alignItems:"baseline",flexWrap:"wrap",flexGrow:1}},Object(d.c)(f,e,t),Object(d.c)(g,e)),Object(d.c)(m,e))))},v=a("PXlp"),y=a("qhky");t.a=function(e){var t=e.children,a=Object(r.a)(e,["children"]),d=Object(v.a)().webfontURL;return Object(u.c)(i.b.root,null,Object(u.c)(y.b,null,Object(u.c)("link",{rel:"stylesheet",href:d})),Object(u.c)(b,a),Object(u.c)(n.a,{css:Object(s.a)({maxWidth:["full","5xl"],mx:"auto",px:[3,4],pb:4})},t))}},PXlp:function(e,t,a){"use strict";var r=a("Wbzz");t.a=function(){return Object(r.useStaticQuery)("2506312863").timelineThemeConfig}},fwM0:function(e,t,a){"use strict";var r=a("Wbzz"),i=a("9eSz"),n=a.n(i),s=a("2A+t"),d=a("izhR"),o=a("MXbp"),l=a("q1tI"),c=a.n(l),u=a("3k8n"),f=a("Frpm"),p=a("qKvR");function g(){return Object(p.c)(c.a.Fragment,null,Object(p.c)(u.a,null,"See popular discussions in foreign stock communities in your native language on"," ",Object(p.c)(d.d,{as:f.a,to:"/"},"stocks.buzzing.cc")))}var h="386998304";t.a=function(e){var t=e.basePath;t=t||"/";var a=Object(r.useStaticQuery)(h),i=a.site.siteMetadata.author,l=a.avatar;return Object(s.c)(d.b,{"data-test":"bio",sx:{mb:4,alignItems:"center"}},Object(s.c)(d.d,{sx:{minWidth:"56px",pr:2,pt:1},as:r.Link,to:Object(r.withPrefix)(t)},l?Object(s.c)(n.a,{fixed:l.childImageSharp.fixed,alt:i,sx:{mb:0,width:"48px",minWidth:"48px",borderRadius:"full"}}):Object(s.c)("div",{sx:{mb:0,width:"48px",minWidth:"48px",borderRadius:"full"},role:"presentation"})),Object(s.c)(o.b.div,null,Object(s.c)(g,null)))}}}]);
//# sourceMappingURL=8ab0ea25f67dc3a3a1a8a35be957d176f389189e-6327eaef9242c76eabab.js.map