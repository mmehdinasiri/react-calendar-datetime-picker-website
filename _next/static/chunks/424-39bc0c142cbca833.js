(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(94941).Z;o(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(92648).Z,u=o(17273).Z,a=r(o(67294)),l=o(76273),f=o(22725),c=o(63462),i=o(21018),s=o(57190),d=o(71210),p=o(98684),v="undefined"!==typeof a.default.useTransition,y={};function b(e,t,o,n){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;y[t+"%"+o+(r?"%"+r:"")]=!0}}var h=a.default.forwardRef((function(e,t){var o,r=e.href,h=e.as,_=e.children,g=e.prefetch,C=e.passHref,M=e.replace,m=e.shallow,x=e.scroll,L=e.locale,j=e.onClick,R=e.onMouseEnter,O=e.onTouchStart,E=e.legacyBehavior,k=void 0===E?!0!==Boolean(!1):E,P=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=_,!k||"string"!==typeof o&&"number"!==typeof o||(o=a.default.createElement("a",null,o));var w=!1!==g,T=n(v?a.default.useTransition():[],2)[1],I=a.default.useContext(c.RouterContext),S=a.default.useContext(i.AppRouterContext);S&&(I=S);var U,N=a.default.useMemo((function(){var e=n(l.resolveHref(I,r,!0),2),t=e[0],o=e[1];return{href:t,as:h?l.resolveHref(I,h):o||t}}),[I,r,h]),Z=N.href,A=N.as,B=a.default.useRef(Z),D=a.default.useRef(A);k&&(U=a.default.Children.only(o));var H=k?U&&"object"===typeof U&&U.ref:t,K=n(s.useIntersection({rootMargin:"200px"}),3),G=K[0],q=K[1],z=K[2],F=a.default.useCallback((function(e){D.current===A&&B.current===Z||(z(),D.current=A,B.current=Z),G(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[A,H,Z,z,G]);a.default.useEffect((function(){var e=q&&w&&l.isLocalURL(Z),t="undefined"!==typeof L?L:I&&I.locale,o=y[Z+"%"+A+(t?"%"+t:"")];e&&!o&&b(I,Z,A,{locale:t})}),[A,Z,q,L,w,I]);var J={ref:F,onClick:function(e){k||"function"!==typeof j||j(e),k&&U.props&&"function"===typeof U.props.onClick&&U.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,u,a,f,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(o)){e.preventDefault();var s=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:u,locale:f,scroll:a}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!i})};c?c(s):s()}}(e,I,Z,A,M,m,x,L,S?T:void 0,w)},onMouseEnter:function(e){k||"function"!==typeof R||R(e),k&&U.props&&"function"===typeof U.props.onMouseEnter&&U.props.onMouseEnter(e),!w&&S||l.isLocalURL(Z)&&b(I,Z,A,{priority:!0})},onTouchStart:function(e){k||"function"!==typeof O||O(e),k&&U.props&&"function"===typeof U.props.onTouchStart&&U.props.onTouchStart(e),!w&&S||l.isLocalURL(Z)&&b(I,Z,A,{priority:!0})}};if(!k||C||"a"===U.type&&!("href"in U.props)){var Q="undefined"!==typeof L?L:I&&I.locale,V=I&&I.isLocaleDomain&&d.getDomainLocale(A,Q,I.locales,I.domainLocales);J.href=V||p.addBasePath(f.addLocale(A,Q,I&&I.defaultLocale))}return k?a.default.cloneElement(U,J):a.default.createElement("a",Object.assign({},P,J),o)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!a,i=n(r.useState(!1),2),s=i[0],d=i[1],p=n(r.useState(null),2),v=p[0],y=p[1];r.useEffect((function(){if(a){if(c||s)return;if(v&&v.tagName){var e=function(e,t,o){var n=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=f.find((function(e){return e.root===o.root&&e.margin===o.margin}));if(n&&(t=l.get(n)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return t={id:o,observer:u,elements:r},f.push(o),l.set(o,t),t}(o),r=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!s){var n=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(n)}}}),[v,c,o,t,s]);var b=r.useCallback((function(){d(!1)}),[]);return[y,s,b]};var r=o(67294),u=o(9311),a="function"===typeof IntersectionObserver,l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(92648).Z)(o(67294)),r=n.default.createContext(null);t.AppRouterContext=r;var u=n.default.createContext(null);t.LayoutRouterContext=u;var a=n.default.createContext(null);t.GlobalLayoutRouterContext=a},41664:function(e,t,o){e.exports=o(48418)},11163:function(e,t,o){e.exports=o(90387)}}]);