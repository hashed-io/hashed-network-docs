"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[5758],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7774:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const o={title:"Developer SDK"},i=void 0,l={unversionedId:"sdk",id:"sdk",title:"Developer SDK",description:"Developer SDK",source:"@site/docs/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/sdk",draft:!1,tags:[],version:"current",frontMatter:{title:"Developer SDK"},sidebar:"docs",previous:{title:"Integrations",permalink:"/integrations"},next:{title:"Genesis Allocations",permalink:"/genesis_allocations"}},p={},s=[{value:"SDK Features",id:"sdk-features",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Developer SDK"),(0,a.kt)("meta",{charSet:"utf-8"}),(0,a.kt)("meta",{property:"og:image",content:"https://docs.hashed.network/img/monolith.png"}),"  ",(0,a.kt)("meta",{property:"og:description",content:""}),(0,a.kt)("meta",{property:"og:title",content:"W3F Grant M2 Approved"}),(0,a.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/docs/sdk"})),(0,a.kt)("p",null,"Hashed Network is open-source and permissionless. The composable functionality allows developers to quickly build applications."),(0,a.kt)("h2",{id:"sdk-features"},"SDK Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Flexible authentication methods"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Full self-custody Signer, compatible with all Substrate wallets, "),(0,a.kt)("li",{parentName:"ul"},"API-driven option, or "),(0,a.kt)("li",{parentName:"ul"},"\u2018Sign with Google\u2019 for experimenters or web3-curious."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configurable and programmable integrations that connect directly to asset management and payment networks: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Natively:  ",(0,a.kt)("a",{parentName:"li",href:"/nbv"},"Bitcoin"),", Polkadot-based (Statemint) assets, and USD via ACH/banking integrations such as ",(0,a.kt)("a",{parentName:"li",href:"https://www.sendwyre.com/"},"Wyre")),(0,a.kt)("li",{parentName:"ul"},"Custodial: Many digital assets via partnership with ",(0,a.kt)("a",{parentName:"li",href:"https://commerciumbank.com/"},"Commercium Bank")," "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Business pallets with support for spending policy engines, role-based access control, and on-chain accounting.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"End-to-end file and data storage with peer and group sharing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u201cBring-Your-Own-Regulation\u201d functionality to build and operate marketplaces for real world and digital assets.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Excellent documentation and open source portal UI application to serve as a white-label template.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WASM-based runtime provides the horse-power for the industrial-grade Network. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Deploy WASM smart contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Integrate with other parachains via XCM.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Remove fees from user friction with the new user HASH faucet gated with SMS or application-level Sybil protection; secured by chain governance. Every new user gets at least one free account and an allowance for transactions. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Easy-to-integrate hooks for web2 applications, API access"))))}u.isMDXComponent=!0}}]);