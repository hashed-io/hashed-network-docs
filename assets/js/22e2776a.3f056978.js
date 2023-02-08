"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[6774],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return t?o.createElement(m,s(s({ref:n},p),{},{components:t})):o.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2791:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var o=t(3117),r=(t(7294),t(3905));const a={title:"Ledger in Go Integration",sidebar_position:4,tags:["accounting"]},s=void 0,l={unversionedId:"accounting/ledger_in_go",id:"accounting/ledger_in_go",title:"Ledger in Go Integration",description:"Hashed Network Ledger in Go Integration",source:"@site/docs/accounting/ledger_in_go.md",sourceDirName:"accounting",slug:"/accounting/ledger_in_go",permalink:"/accounting/ledger_in_go",draft:!1,tags:[{label:"accounting",permalink:"/tags/accounting"}],version:"current",sidebarPosition:4,frontMatter:{title:"Ledger in Go Integration",sidebar_position:4,tags:["accounting"]},sidebar:"docs",previous:{title:"MoneScript Integration",permalink:"/accounting/monescript"},next:{title:"Fund Administration",permalink:"/fund_administration"}},i={},c=[{value:"<strong>Ledger in Go</strong>",id:"ledger-in-go",level:3},{value:"<strong>Installation</strong>",id:"installation",level:3},{value:"<strong>Tutorial &amp; Example</strong>",id:"tutorial--example",level:3},{value:"By Period",id:"by-period",level:4},{value:"Account Depth",id:"account-depth",level:4}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Hashed Network Ledger in Go Integration"),(0,r.kt)("meta",{charSet:"utf-8"}),(0,r.kt)("meta",{property:"og:image",content:"https://docs.hashed.network/img/monolith.png"}),(0,r.kt)("meta",{property:"og:description",content:"On-chain, triple entry accounting protocol generates journal files from Native Bitcoin Vaults and enables vault administrators to run balance sheets and income statements"}),(0,r.kt)("meta",{property:"og:title",content:"Hashed Network On-chain Accounting"}),(0,r.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/docs/accounting"})),(0,r.kt)("h3",{id:"ledger-in-go"},(0,r.kt)("strong",{parentName:"h3"},"Ledger in Go")),(0,r.kt)("p",null,"Ledger is a command line application for plain text accounting. Providing commands to view balances, register of transactions, importing of CSV files, and a web interface to view reports, and track investments."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Github Repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/howeyc/ledger"},"Ledger"))),(0,r.kt)("h3",{id:"installation"},(0,r.kt)("strong",{parentName:"h3"},"Installation")),(0,r.kt)("p",null,"To build the ledger executable from source, you will first need to install Go Follow the instructions on the ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"Go installation page"),"."),(0,r.kt)("p",null,"Once you have installed Go, the following command can be used to build and install ledger:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"go install github.com/howeyc/ledger/ledger@latest\n")),(0,r.kt)("p",null,"This will automatically download ledger, build it, and install it in Go's global binary directory (~/go/bin/ by default)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic transaction format")),(0,r.kt)("p",null,"The basic format of a ledger transaction, shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2017-06-26 Commonplace Coffee\n  Assets:Cash:Wallet           -3.00\n  Expenses:Restaurants:Coffee   3.00\n")),(0,r.kt)("h3",{id:"tutorial--example"},(0,r.kt)("strong",{parentName:"h3"},"Tutorial & Example")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Generating Reports"))),(0,r.kt)("p",null,"We can generate a report of the final balances of all accounts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ledger -f ledger.dat bal\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Assets                                                      8.56\nAssets:BitcoinVaults                                        8.56\nAssets:BitcoinVaults:Cold                                   2.62\nAssets:BitcoinVaults:Hot                                    0.34\nAssets:BitcoinVaults:Warm                                   5.60\nExpenses                                                   22.30\nExpenses:Consulting                                        11.41\nExpenses:Development                                        4.30\nExpenses:Marketing                                          6.58\nIncome                                                    -30.86\nIncome:Block Rewards                                       -1.15\nIncome:BlockRewards                                        -4.20\nIncome:Consulting                                         -20.20\nIncome:StakingRewards                                      -5.31\n----------------------------------------------------------------\n                                                            0.00\n")),(0,r.kt)("p",null,"We can generate a report with specific account by applying a filter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ledger -f docs/journals/hashed-vaults-go.journal bal Income Expenses\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Expenses                                                    22.30\nExpenses:Consulting                                         11.41\nExpenses:Development                                         4.30\nExpenses:Marketing                                           6.58\nIncome                                                     -30.86\nIncome:Block Rewards                                        -1.15\nIncome:BlockRewards                                         -4.20\nIncome:Consulting                                          -20.20\nIncome:StakingRewards                                       -5.31\n-----------------------------------------------------------------\n                                                            -8.56\n")),(0,r.kt)("h4",{id:"by-period"},"By Period"),(0,r.kt)("p",null,"We can generate a report segmented by a time period adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--period")," flag followed by the period (Monthly,Quarterly,SemiYearly,Yearly)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ledger -f docs/journals/hashed-vaults-go.journal --period Monthly  bal Income Expenses\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2021/10/01 - 2021/10/31\n================================================================================\nExpenses                                                                    6.34\nExpenses:Consulting                                                         3.14\nExpenses:Development                                                        0.14\nExpenses:Marketing                                                          3.06\nIncome                                                                     -7.20\nIncome:BlockRewards                                                        -2.15\nIncome:Consulting                                                          -3.06\nIncome:StakingRewards                                                      -2.00\n--------------------------------------------------------------------------------\n                                                                           -0.87\n\n================================================================================\n2021/11/01 - 2021/11/30\n================================================================================\nExpenses                                                                   11.58\nExpenses:Consulting                                                         6.13\nExpenses:Development                                                        3.03\nExpenses:Marketing                                                          2.43\nIncome                                                                     -8.64\nIncome:BlockRewards                                                        -0.90\nIncome:Consulting                                                          -6.63\nIncome:StakingRewards                                                      -1.10\n--------------------------------------------------------------------------------\n                                                                            2.94\n\n================================================================================\n2021/12/01 - 2021/12/31\n================================================================================\nExpenses                                                                    4.38\nExpenses:Consulting                                                         2.14\nExpenses:Development                                                        1.14\nExpenses:Marketing                                                          1.10\nIncome                                                                    -15.01\nIncome:Block Rewards                                                       -1.15\nIncome:BlockRewards                                                        -1.15\nIncome:Consulting                                                         -10.52\nIncome:StakingRewards                                                      -2.20\n--------------------------------------------------------------------------------\n                                                                          -10.64\n")),(0,r.kt)("h4",{id:"account-depth"},"Account Depth"),(0,r.kt)("p",null,"If we have too many accounts we can trim them to see them added to the second level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ledger -f docs/journals/hashed-vaults-go.journal --period Monthly --depth 2 balance\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2021/10/01 - 2021/10/31\n================================================================================\nAssets                                                                      0.87\nAssets:BitcoinVaults                                                        0.87\nExpenses                                                                    6.34\nExpenses:Consulting                                                         3.14\nExpenses:Development                                                        0.14\nExpenses:Marketing                                                          3.06\nIncome                                                                     -7.20\nIncome:BlockRewards                                                        -2.15\nIncome:Consulting                                                          -3.06\nIncome:StakingRewards                                                      -2.00\n--------------------------------------------------------------------------------\n                                                                            0.00\n\n================================================================================\n2021/11/01 - 2021/11/30\n================================================================================\nAssets                                                                     -2.94\nAssets:BitcoinVaults                                                       -2.94\nExpenses                                                                   11.58\nExpenses:Consulting                                                         6.13\nExpenses:Development                                                        3.03\nExpenses:Marketing                                                          2.43\nIncome                                                                     -8.64\nIncome:BlockRewards                                                        -0.90\nIncome:Consulting                                                          -6.63\nIncome:StakingRewards                                                      -1.10\n--------------------------------------------------------------------------------\n                                                                            0.00\n\n================================================================================\n2021/12/01 - 2021/12/31\n================================================================================\nAssets                                                                     10.64\nAssets:BitcoinVaults                                                       10.64\nExpenses                                                                    4.38\nExpenses:Consulting                                                         2.14\nExpenses:Development                                                        1.14\nExpenses:Marketing                                                          1.10\nIncome                                                                    -15.01\nIncome:Block Rewards                                                       -1.15\nIncome:BlockRewards                                                        -1.15\nIncome:Consulting                                                         -10.52\nIncome:StakingRewards                                                      -2.20\n--------------------------------------------------------------------------------\n                                                                            0.00\n")))}u.isMDXComponent=!0}}]);