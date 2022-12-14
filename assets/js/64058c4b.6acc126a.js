"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[4270],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3111:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var o=n(3117),a=(n(7294),n(3905));const r={slug:"signer",title:"Polkadot Signer Usability",authors:["max"]},i=void 0,s={permalink:"/blog/signer",editUrl:"https://github.com/hashed-io/docs.hashed.network/blog/2022-10-23-signer/index.md",source:"@site/blog/2022-10-23-signer/index.md",title:"Polkadot Signer Usability",description:"Polkadot Signer Usability",date:"2022-10-23T00:00:00.000Z",formattedDate:"October 23, 2022",tags:[],readingTime:4.28,hasTruncateMarker:!1,authors:[{name:"Max Gravitt",title:"Hashed Network Architect",url:"https://github.com/3yekn",imageURL:"https://github.com/3yekn.png",key:"max"}],frontMatter:{slug:"signer",title:"Polkadot Signer Usability",authors:["max"]},prevItem:{title:"Afloat Completes W3F Grant Milestone",permalink:"/blog/afloat-m1"},nextItem:{title:"Native Bitcoin Vaults",permalink:"/blog/nbv-m2"}},l={authorsImageUrls:[void 0]},c=[{value:"The Native Token Problem",id:"the-native-token-problem",level:3},{value:"Problem",id:"problem",level:4},{value:"Solution",id:"solution",level:4},{value:"The Install-something Problem",id:"the-install-something-problem",level:3},{value:"Problem",id:"problem-1",level:4},{value:"Solution",id:"solution-1",level:4},{value:"Signing Ergonomics Problem - Part 1",id:"signing-ergonomics-problem---part-1",level:3},{value:"Problem",id:"problem-2",level:4},{value:"Solution",id:"solution-2",level:4},{value:"Signing Ergonomics Problem - Part 2",id:"signing-ergonomics-problem---part-2",level:3},{value:"Problem",id:"problem-3",level:4},{value:"Solution",id:"solution-3",level:4},{value:"Action Plan",id:"action-plan",level:2}],h={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Polkadot Signer Usability"),(0,a.kt)("meta",{charSet:"utf-8"}),(0,a.kt)("meta",{property:"og:image",content:"https://docs.hashed.network/img/cover-signer.png"}),(0,a.kt)("meta",{property:"og:description",content:"Onboarding onto Polkadot is hard and there are several areas of friction that users run into. This article identifies three of them and explains the solution that Hashed Network uses to address them."}),(0,a.kt)("meta",{property:"og:title",content:"Polkadot Signer Usability"}),(0,a.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/blog/signer"})),(0,a.kt)("p",null,"Onboarding onto Polkadot is hard and there are several areas of friction that users run into. This article identifies three of them and explains the solution that Hashed Network uses to address them."),(0,a.kt)("p",null,"I did not develop these core protocols, but we have built many dapps with them on other blockchains with technical and user success.  I seek feedback on the technical architecture to ensure there are no foundational flaws, any reasons why it wouldn't work with Polkadot, or advice and support on implementation. "),(0,a.kt)("h3",{id:"the-native-token-problem"},"The Native Token Problem"),(0,a.kt)("h4",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Like Ethereum, you need the L1 token to do anything on Polkadot. However, in general, users don't begin their journey with the idea of having DOT and trying to find something to do with it. They start with a problem or application (dapp) and have a desire to use it, and then realize there is another step of having to buy DOT, which creates another separate thread of painful friction. "),(0,a.kt)("h4",{id:"solution"},"Solution"),(0,a.kt)("p",null,"The Network's solution is to create Sybil-attack resistant methods for a faucet, such as verify SMS. SMS verification allows for a free initial faucet amount. It privately keeps a list of number hashes to avoid mis-use and also shields against VoIP SMS. Other methods could be verifying through a social network site such as Twitter or Github, which typically have their own Sybil protection. "),(0,a.kt)("p",null,"Whitelisted oracles/origins that are allowed to use the initial faucet are voted in via chain governance, and those origins are allowed to use the extrinsic for new account creation and initial faucet. These oracles/origins, such as wallets or applications, will need to provide evidence to voters that they have Sybil protection in place. "),(0,a.kt)("p",null,"Allowance for these users will be allocated at genesis and balanced via governance."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(6319).Z,width:"713",height:"701"})),(0,a.kt)("h3",{id:"the-install-something-problem"},"The Install-something Problem"),(0,a.kt)("h4",{id:"problem-1"},"Problem"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"larger-than-you-think number")," of users reach the point of wanting to use web3 and then turn away when they are asked to install a new app on mobile or a browser extension. That is too much friction for a large segment of users, the so-called ",(0,a.kt)("em",{parentName:"p"},"web3 curious")," or ",(0,a.kt)("em",{parentName:"p"},"experimenters"),". "),(0,a.kt)("h4",{id:"solution-1"},"Solution"),(0,a.kt)("p",null,"Don't require the user to install anything. Hashed Network supports \"Login with Google\", which uses the Google Drive API to save the user's key, access it, and sign and broadcast directly in the browser. "),(0,a.kt)("p",null,"Is it great security? No, because Google has access to the key. It is a compromise. As the user gets hooked, there are easy migration paths to improved self-custody with an installed signer."),(0,a.kt)("h3",{id:"signing-ergonomics-problem---part-1"},"Signing Ergonomics Problem - Part 1"),(0,a.kt)("h4",{id:"problem-2"},"Problem"),(0,a.kt)("p",null,"The desktop-to-mobile signing experience lacks continuity. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer"},"Parity Signer")," is a fantastic air-gapped wallet, but offline wallets are not practical for day-to-day usability. Some of the other wallets require that users go into the application browser, select from a list of applications or enter an address. "),(0,a.kt)("h4",{id:"solution-2"},"Solution"),(0,a.kt)("p",null,"The more natural flow for users is to access an application via a link that opens in their ",(0,a.kt)("strong",{parentName:"p"},"default")," web browser. As the user navigates to Login and sign transactions, they are prompted to do so. "),(0,a.kt)("h3",{id:"signing-ergonomics-problem---part-2"},"Signing Ergonomics Problem - Part 2"),(0,a.kt)("h4",{id:"problem-3"},"Problem"),(0,a.kt)("p",null,"The related continuity problem is using the same account on both desktop and mobile requires moving the key. "),(0,a.kt)("h4",{id:"solution-3"},"Solution"),(0,a.kt)("p",null,"Keep the key on the device only. When the mobile browser needs a signature, it sends a deep link (similar to a ",(0,a.kt)("inlineCode",{parentName:"p"},"mailto:")," link) to the operating system to open a signer app. The transaction signature request is sent to the signer where the user approves and the application broadcasts it."),(0,a.kt)("p",null,"When a user access an application on desktop, they are prompted to login by scanning a QR code. The user opens their device and scans the QR code using the default camera app. The user taps the QR code, scans a ",(0,a.kt)("inlineCode",{parentName:"p"},"login")," payload, and broadcasts the signature back to the browser over the network (not via webcam like Parity Signer). "),(0,a.kt)("p",null,"This step connects the browser and device for the duration of a configurable session, which can be managed on the device. When the user performs an action in the application that requires a transaction signature, it is sent to the device over the network as a push notification. The payload is signed, signature is passed back to the application, where it is broadcast. "),(0,a.kt)("p",null,"This feature requires a small intermediate relay, which we are investigating building directly into the Substrate node. "),(0,a.kt)("h2",{id:"action-plan"},"Action Plan"),(0,a.kt)("p",null,"Part 1 above is made possible by a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/greymass/eosio-signing-request#encoding-a-signing-request"},"signing request protocol")," that can be encoded in the application and decoded by the signer. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Should we add support for Substrate transactions? \n")),(0,a.kt)("p",null,"Part 2 above is made possible by a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/greymass/anchor-link"},"signature provider protocol")," that is an open standard with support end-to-end encryption, persistent account sessions, and identity proofs. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Should we add support for Substrate transactions?\n")))}p.isMDXComponent=!0},6319:function(e,t,n){t.Z=n.p+"assets/images/signer-0d11e2a946a0907289d0ea7b40fc0d61.png"}}]);