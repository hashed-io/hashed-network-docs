"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[6291],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9072:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),i=["components"],o={title:"Marketplaces",sidebar_position:40,tags:["Marketplace","Tokenomics"]},l=void 0,c={unversionedId:"marketplaces",id:"marketplaces",title:"Marketplaces",description:"Hashed Network features an elegant, practical feature set for hosting marketplaces.",source:"@site/docs/marketplaces.md",sourceDirName:".",slug:"/marketplaces",permalink:"/docs/marketplaces",draft:!1,tags:[{label:"Marketplace",permalink:"/docs/tags/marketplace"},{label:"Tokenomics",permalink:"/docs/tags/tokenomics"}],version:"current",sidebarPosition:40,frontMatter:{title:"Marketplaces",sidebar_position:40,tags:["Marketplace","Tokenomics"]},sidebar:"docs",previous:{title:"Tokenomics",permalink:"/docs/tokenomics"},next:{title:"IRL Assets",permalink:"/docs/irl_assets"}},p={},u=[{value:"Marketplace Roles",id:"marketplace-roles",level:2},{value:"Owner",id:"owner",level:3},{value:"Administrator",id:"administrator",level:3},{value:"Asset Grader/Appraiser",id:"asset-graderappraiser",level:3},{value:"Redemption Specialist",id:"redemption-specialist",level:3},{value:"Market Participant",id:"market-participant",level:3},{value:"Arbitrator",id:"arbitrator",level:3},{value:"Fractionalizable",id:"fractionalizable",level:2},{value:"Privacy Preserving Storage",id:"privacy-preserving-storage",level:2},{value:"Settlement",id:"settlement",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Hashed Network features an elegant, practical feature set for hosting marketplaces."),(0,s.kt)("h2",{id:"marketplace-roles"},"Marketplace Roles"),(0,s.kt)("p",null,"Each marketplace has an owner and administrator. "),(0,s.kt)("h3",{id:"owner"},"Owner"),(0,s.kt)("p",null,"Owner is required and enforced from signer. The owner may change the administrator. Owner is also a required signer to erase a marketplace, and specify accounts to use for commission payments, protocol fees, etc. "),(0,s.kt)("h3",{id:"administrator"},"Administrator"),(0,s.kt)("p",null,"The Marketplace Administrator can approve:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"new market participants being allowed to originate assets or place orders"),(0,s.kt)("li",{parentName:"ul"},"new asset graders/appraisers"),(0,s.kt)("li",{parentName:"ul"},"new redemption specialists ")),(0,s.kt)("h3",{id:"asset-graderappraiser"},"Asset Grader/Appraiser"),(0,s.kt)("p",null,"This role has the authority to add a grade, score, or boolean to an asset. An asset may have many grades, and graders can edit their own, but graders may not have multiple simultaneous grades of the same asset."),(0,s.kt)("p",null,"There may be many of these roles, and they can set the price for their services."),(0,s.kt)("h3",{id:"redemption-specialist"},"Redemption Specialist"),(0,s.kt)("p",null,"This role is responsible for transforming the on-chain asset into the IRL asset. For example, to be redeemed, a tax credit NFT needs to be assigned to an identity and submitted to (IRS or states?). Or an asset may need to be mailed from a warehouse."),(0,s.kt)("p",null,"There may be many of these roles, and they can set the price for their services."),(0,s.kt)("h3",{id:"market-participant"},"Market Participant"),(0,s.kt)("p",null,"This roles has the authority to originate and purchase assets."),(0,s.kt)("h3",{id:"arbitrator"},"Arbitrator"),(0,s.kt)("p",null,"This role has the authority to release escrowed funds in the case of a dispute. "),(0,s.kt)("h2",{id:"fractionalizable"},"Fractionalizable"),(0,s.kt)("p",null,"Each asset is infinitesimally fractionalizable. An asset starts as a single whole asset; n=1. The asset has an amount value. An asset owner can spawn a new asset from the original, parent asset and specify the amount value of the child. The pallet enforces the hierarchical math of the amount value on each spawn. "),(0,s.kt)("p",null,"Children can inherit attributes from their parents, override them (if permitted by attribute-creator), or add new ones."),(0,s.kt)("p",null,"An example asset is a harvest of corn for a season. The farmer creates it as an asset measuring bushels, and then sells down that harvest by selling a few bushels at a time."),(0,s.kt)("h2",{id:"privacy-preserving-storage"},"Privacy Preserving Storage"),(0,s.kt)("p",null,"Users can save data on the environment that is encrypted, and selectively decide which other users on the Network can view it. They can attach data linked to assets, marketplace applications/member requests, orders, etc. "),(0,s.kt)("p",null,"The data may be any files, plaintext, json, or markdown, etc. "),(0,s.kt)("h2",{id:"settlement"},"Settlement"),(0,s.kt)("p",null,"Compatible with: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Bitcoin"),(0,s.kt)("li",{parentName:"ul"},"Stablecoins"),(0,s.kt)("li",{parentName:"ul"},"USD/Banks"),(0,s.kt)("li",{parentName:"ul"},"Unspecified")))}m.isMDXComponent=!0}}]);