"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[6291],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9072:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var r=a(3117),n=(a(7294),a(3905));const s={title:"Marketplaces",sidebar_position:40,tags:["Marketplace"]},i=void 0,o={unversionedId:"marketplaces",id:"marketplaces",title:"Marketplaces",description:"Moderated Marketplaces enables users to create and administer a permissioned or permissionless space for buyers and sellers to operate. The creator establishes the rules of the marketplace, such as the onboarding process, approval of applicants to be admitted to the marketplace, establishing initial notaries or underwriters for assets, and performing various administrative duties.",source:"@site/docs/marketplaces.md",sourceDirName:".",slug:"/marketplaces",permalink:"/docs/marketplaces",draft:!1,tags:[{label:"Marketplace",permalink:"/docs/tags/marketplace"}],version:"current",sidebarPosition:40,frontMatter:{title:"Marketplaces",sidebar_position:40,tags:["Marketplace"]},sidebar:"docs",previous:{title:"Polkadot Key Concepts",permalink:"/docs/fund-admin/polkadot-key-concepts"},next:{title:"Product Traceability",permalink:"/docs/traceability"}},l={},c=[{value:"Marketplace Roles",id:"marketplace-roles",level:2},{value:"Owner",id:"owner",level:3},{value:"Administrator",id:"administrator",level:3},{value:"Asset Grader/Appraiser",id:"asset-graderappraiser",level:3},{value:"Redemption Specialist",id:"redemption-specialist",level:3},{value:"Market Participant",id:"market-participant",level:3},{value:"Arbitrator",id:"arbitrator",level:3},{value:"Fractionalizable",id:"fractionalizable",level:2},{value:"Support for DAO LLC Shares as Tokens",id:"support-for-dao-llc-shares-as-tokens",level:2},{value:"Privacy Preserving Storage",id:"privacy-preserving-storage",level:2},{value:"Settlement",id:"settlement",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Moderated Marketplaces enables users to create and administer a permissioned or permissionless space for buyers and sellers to operate. The creator establishes the rules of the marketplace, such as the onboarding process, approval of applicants to be admitted to the marketplace, establishing initial notaries or underwriters for assets, and performing various administrative duties. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that the marketplace is NOT permissioned by the Hashed Network layer, but rather by other users, which is generally desired by users and maps to a mental model that users are familiar with. ")),(0,n.kt)("p",null,"Most users don\u2019t want to interact with a protocol or a smart contract directly. Moderated marketplaces enable a commercial layer for entrepreneurs to contextualize and originate assets. "),(0,n.kt)("h2",{id:"marketplace-roles"},"Marketplace Roles"),(0,n.kt)("p",null,"Each marketplace has an owner and administrator. "),(0,n.kt)("h3",{id:"owner"},"Owner"),(0,n.kt)("p",null,"Owner is required and enforced from signer. The owner may change the administrator. Owner is also a required signer to erase a marketplace, and specify accounts to use for commission payments, protocol fees, etc. "),(0,n.kt)("h3",{id:"administrator"},"Administrator"),(0,n.kt)("p",null,"The Marketplace Administrator can approve:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"new market participants being allowed to originate assets or place orders"),(0,n.kt)("li",{parentName:"ul"},"new asset graders/appraisers"),(0,n.kt)("li",{parentName:"ul"},"new redemption specialists ")),(0,n.kt)("h3",{id:"asset-graderappraiser"},"Asset Grader/Appraiser"),(0,n.kt)("p",null,"This role has the authority to add a grade, score, or boolean to an asset. An asset may have many grades, and graders can edit their own, but graders may not have multiple simultaneous grades of the same asset."),(0,n.kt)("p",null,"There may be many of these roles, and they can set the price for their services."),(0,n.kt)("h3",{id:"redemption-specialist"},"Redemption Specialist"),(0,n.kt)("p",null,"This role is responsible for transforming the on-chain asset into the IRL asset. For example, to be redeemed, a tax credit NFT needs to be assigned to an identity and submitted to (IRS or states?). Or an asset may need to be mailed from a warehouse."),(0,n.kt)("p",null,"There may be many of these roles, and they can set the price for their services."),(0,n.kt)("h3",{id:"market-participant"},"Market Participant"),(0,n.kt)("p",null,"This roles has the authority to originate and purchase assets."),(0,n.kt)("h3",{id:"arbitrator"},"Arbitrator"),(0,n.kt)("p",null,"This role has the authority to release escrowed funds in the case of a dispute. "),(0,n.kt)("h2",{id:"fractionalizable"},"Fractionalizable"),(0,n.kt)("p",null,"Each asset is infinitesimally fractionalizable. An asset starts as a single whole asset; n=1. The asset has an amount value. An asset owner can spawn a new asset from the original, parent asset and specify the amount value of the child. The pallet enforces the hierarchical math of the amount value on each spawn. "),(0,n.kt)("p",null,"Children can inherit attributes from their parents, override them (if permitted by attribute-creator), or add new ones."),(0,n.kt)("p",null,"An example asset is a harvest of corn for a season. The farmer creates it as an asset measuring bushels, and then sells down that harvest by selling a few bushels at a time."),(0,n.kt)("h2",{id:"support-for-dao-llc-shares-as-tokens"},"Support for DAO LLC Shares as Tokens"),(0,n.kt)("p",null,"Last year, Wyoming\u2019s DAO LLC bill became effective, meaning businesses, or DAOs, can register in Wyoming as a Limited Liability Company while existing as digitally-native and/or decentralized. "),(0,n.kt)("p",null,"We purchased 35 acres of real estate in Wyoming as an LLC, and the ownership of that business is directly tokenized on-chain to certify final settlement of the share. That particular business, Kitchen Lands DAO LLC, was tokenized to a 100 shares and those shares are transferable peer-to-peer wholly on-chain. For detailed, "),(0,n.kt)("p",null,"A Moderated Marketplace owner could establish a gated or invite-only market that only allows  certain types of tokens, such as those representing ownership in a Wyoming DAO LLC. An LLC has personhood, or ownership rights, so it can own any type of assets or real property, including other companies. "),(0,n.kt)("h2",{id:"privacy-preserving-storage"},"Privacy Preserving Storage"),(0,n.kt)("p",null,"Users can save data on the environment that is encrypted, and selectively decide which other users on the Network can view it. They can attach data linked to assets, marketplace applications/member requests, orders, etc. "),(0,n.kt)("p",null,"The data may be any files, plaintext, json, or markdown, etc. "),(0,n.kt)("h2",{id:"settlement"},"Settlement"),(0,n.kt)("p",null,"Compatible with: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bitcoin"),(0,n.kt)("li",{parentName:"ul"},"Stablecoins"),(0,n.kt)("li",{parentName:"ul"},"USD/Banks"),(0,n.kt)("li",{parentName:"ul"},"Unspecified")))}d.isMDXComponent=!0}}]);