"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[2044],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2988:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return s}});var a=t(3117),o=(t(7294),t(3905));const r={title:"Overview and Walkthrough",sidebar_position:4,tags:["NBV","bitcoin","accounting"]},i=void 0,c={unversionedId:"accounting/index",id:"accounting/index",title:"Overview and Walkthrough",description:"Hashed Network On-chain Accounting",source:"@site/docs/accounting/index.md",sourceDirName:"accounting",slug:"/accounting/",permalink:"/accounting/",draft:!1,tags:[{label:"NBV",permalink:"/tags/nbv"},{label:"bitcoin",permalink:"/tags/bitcoin"},{label:"accounting",permalink:"/tags/accounting"}],version:"current",sidebarPosition:4,frontMatter:{title:"Overview and Walkthrough",sidebar_position:4,tags:["NBV","bitcoin","accounting"]},sidebar:"docs",previous:{title:"Bitcoin Orchestration",permalink:"/nbv"},next:{title:"Beancount Integration",permalink:"/accounting/beancount"}},l={},s=[{value:"Fictional Organization Walkthrough (with <code>hledger</code>)",id:"fictional-organization-walkthrough-with-hledger",level:2},{value:"Balance Sheet",id:"balance-sheet",level:3},{value:"Income Statement",id:"income-statement",level:3},{value:"Protocol Vision",id:"protocol-vision",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Hashed Network On-chain Accounting"),(0,o.kt)("meta",{charSet:"utf-8"}),(0,o.kt)("meta",{property:"og:image",content:"https://docs.hashed.network/img/monolith.png"}),(0,o.kt)("meta",{property:"og:description",content:"On-chain, triple entry accounting protocol generates journal files from Native Bitcoin Vaults and enables vault administrators to run balance sheets and income statements"}),(0,o.kt)("meta",{property:"og:title",content:"Hashed Network On-chain Accounting"}),(0,o.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/docs/accounting"})),(0,o.kt)("h1",{id:"on-chain-accounting"},"On-chain Accounting"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/nbv"},"Bitcoin orchestration")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hashed.network/blog/nbv-m2"},"Native Bitcoin Vaults")," address a critical need of managing direct-custody, multisignature bitcoin transactions. For accurate accounting (and likely regulatory compliance), more than a list of UTXOs is required. "),(0,o.kt)("p",null,"For example, organizations must produce income statements and balance sheets, meaning that the on-chain transaction must be categorized as ",(0,o.kt)("inlineCode",{parentName:"p"},"Income")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Expense"),", and assigned to a sub-account, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Expenses:Netflix"),". The on-chain transaction is also assigned to an ",(0,o.kt)("inlineCode",{parentName:"p"},"Asset")," account, which is the generally the inverse of the balancing component."),(0,o.kt)("p",null,"The transaction information from the chain plus additional information comprise the elements of a journal entry, the core structure of the triple entry accounting protocol. "),(0,o.kt)("p",null,"As an example, if we received 1.5 BTC to a Cold vault for a consulting gig we completed for Alice, the journal entry would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-journal"},"2021-10-10 Received from Alice for Invoice 23    ; 05af3b675ef6dffb20587de089a2a57292c20ff0068bf6a7b5954e64842861c1\n    Assets:Bitcoin Vaults:Cold           BTC 1.5 ; bc1qdjcuvjpj2e7d0s47lmcej5yhyr72fmqjm7xe4w\n    Income:Consulting\n")),(0,o.kt)("p",null,"All of the data, except for off-setting ",(0,o.kt)("inlineCode",{parentName:"p"},"Income")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Expense")," accounts, can be derived from Native Bitcoin Vaults."),(0,o.kt)("p",null,"The accounting protocol adds additional functionality to achieve the outcome:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assign and store the off-setting categories (accounts)"),(0,o.kt)("li",{parentName:"ul"},"Export ",(0,o.kt)("inlineCode",{parentName:"li"},"journal")," format to corresponding accounting tools (e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://hledger.org/install.html"},"hledger"),", ",(0,o.kt)("a",{parentName:"li",href:"https://beancount.github.io/"},"beancount"),", or others listed ",(0,o.kt)("a",{parentName:"li",href:"https://plaintextaccounting.org/#tools"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Share journals (encrypted text files) among collaborators using the Confidential Documents protocol")),(0,o.kt)("h2",{id:"fictional-organization-walkthrough-with-hledger"},"Fictional Organization Walkthrough (with ",(0,o.kt)("inlineCode",{parentName:"h2"},"hledger"),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Follow along by cloning the repo with: ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/hashed-io/docs.hashed.network.git && cd docs.hashed.network")," ")),(0,o.kt)("p",null,"There are many transactions in the sample file. Take a look at the first few transactions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"head -n 18 docs/journals/hashed-vaults.journal\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-journal"},"commodity 1,000.0000 BTC\n\n2021-10-10 Received from Alice for Invoice 23    ; 05af3b675ef6dffb20587de089a2a57292c20ff0068bf6a7b5954e64842861c1\n    Assets:Bitcoin Vaults:Cold           BTC 1.5 ; bc1qdjcuvjpj2e7d0s47lmcej5yhyr72fmqjm7xe4w\n    Income:Consulting\n\n2021-10-11 Sent to Bob - Deposit                   ; 6595a1894cc976937ddeff4d111df9edf603040008e49d41cedbbc6081f08592\n    Assets:Bitcoin Vaults:Hot     BTC -0.10954338  ; bc1qjymg5ggxetpcu9sl2ugdmvkple86n2cqfanhde\n    Expenses:Marketing\n\n2021-10-13 Sent to Bob - Project Kickoff                 ; e8db07fba6dcf5d33dae093930f7504035ce7ad35473fbf7efc74fe5c4612246\n    Assets:Bitcoin Vaults:Hot           BTC -2.94966474  ; bc1qjymg5ggxetpcu9sl2ugdmvkple86n2cqfanhde\n    Expenses:Marketing\n\n2021-10-14 Sent to Charlie to pay Invoice 992               ; d4b977ec4a522e648ddd2e4735a4f4bff32209fa0d2175a8ac5cb20d43bafa28\n    Assets:Bitcoin Vaults:Hot           BTC -0.13835373     ; 19Ne2oXRWtWJcKPu8dbbBwDqJqjCJUqpPQ\n    Expenses:Development\n\n")),(0,o.kt)("p",null,"The first line for ",(0,o.kt)("inlineCode",{parentName:"p"},"commodity")," configures the output format of the BTC commodity."),(0,o.kt)("h3",{id:"balance-sheet"},"Balance Sheet"),(0,o.kt)("p",null,"Run a balance sheet to view the total BTC across all vaults. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To run the examples, install ",(0,o.kt)("a",{parentName:"p",href:"https://hledger.org/install.html"},"hledger"),". We also have docs for integrating with ",(0,o.kt)("a",{parentName:"p",href:"/accounting/beancount"},"Beancount")," and ",(0,o.kt)("a",{parentName:"p",href:"/accounting/monescript"},"MoneScript"),". Find more apps, libraries, and GUIs that read the ",(0,o.kt)("inlineCode",{parentName:"p"},"journal")," format at ",(0,o.kt)("a",{parentName:"p",href:"https://plaintextaccounting.org/"},"plaintextaccounting.org"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hledger -f docs/journals/hashed-vaults.journal balancesheet\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Balance Sheet 2021-12-26\n\n                            || 2021-12-26 \n============================++============\n Assets                     ||            \n----------------------------++------------\n Assets:Bitcoin Vaults:Cold || 2.6207 BTC \n Assets:Bitcoin Vaults:Hot  || 0.3384 BTC \n Assets:Bitcoin Vaults:Warm || 5.6031 BTC \n----------------------------++------------\n                            || 8.5622 BTC \n============================++============\n Liabilities                ||            \n----------------------------++------------\n----------------------------++------------\n                            ||            \n============================++============\n Net:                       || 8.5622 BTC \n")),(0,o.kt)("h3",{id:"income-statement"},"Income Statement"),(0,o.kt)("p",null,"An income statement shows the revenues and expenses for the journal. It shows precisely how much BTC came in through the 3 revenue sources of block rewards, consulting, and staking rewards."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hledger -f docs/journals/hashed-vaults.journal incomestatement\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Income Statement 2021-10-01..2021-12-26\n\n                        || 2021-10-01..2021-12-26 \n========================++========================\n Revenues               ||                        \n------------------------++------------------------\n Income:Block Rewards   ||             5.3477 BTC \n Income:Consulting      ||            20.2083 BTC \n Income:Staking Rewards ||             5.3104 BTC \n------------------------++------------------------\n                        ||            30.8665 BTC \n========================++========================\n Expenses               ||                        \n------------------------++------------------------\n Expenses:Consulting    ||            11.4110 BTC \n Expenses:Development   ||             4.3034 BTC \n Expenses:Marketing     ||             6.5898 BTC \n------------------------++------------------------\n                        ||            22.3042 BTC \n========================++========================\n Net:                   ||             8.5622 BTC \n\n")),(0,o.kt)("p",null,"This command adds ",(0,o.kt)("inlineCode",{parentName:"p"},"-M")," to show the break-out by month, and ",(0,o.kt)("inlineCode",{parentName:"p"},"-S")," to sort the accounts. There are many configurable options and display types once the data is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"journal")," format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hledger -f docs/journals/hashed-vaults.journal incomestatement -S -M\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Income Statement 2021-10-01..2021-12-26\n\n                        ||        Oct          Nov          Dec \n========================++======================================\n Revenues               ||                                      \n------------------------++--------------------------------------\n Income:Consulting      || 3.0555 BTC   6.6350 BTC  10.5178 BTC \n Income:Block Rewards   || 2.1477 BTC   0.9048 BTC   2.2953 BTC \n Income:Staking Rewards || 2.0026 BTC   1.1026 BTC   2.2052 BTC \n------------------------++--------------------------------------\n                        || 7.2058 BTC   8.6424 BTC  15.0183 BTC \n========================++======================================\n Expenses               ||                                      \n------------------------++--------------------------------------\n Expenses:Consulting    || 3.1402 BTC   6.1305 BTC   2.1402 BTC \n Expenses:Marketing     || 3.0592 BTC   2.4304 BTC   1.1002 BTC \n Expenses:Development   || 0.1384 BTC   3.0267 BTC   1.1384 BTC \n------------------------++--------------------------------------\n                        || 6.3378 BTC  11.5876 BTC   4.3788 BTC \n========================++======================================\n Net:                   || 0.8680 BTC  -2.9453 BTC  10.6395 BTC \n\n")),(0,o.kt)("h2",{id:"protocol-vision"},"Protocol Vision"),(0,o.kt)("p",null,"Together with ",(0,o.kt)("a",{parentName:"p",href:"/nbv"},"bitcoin orchestration"),", the triple entry accounting protocol integrates multiple operational planes into the same user context. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execution layer - transfer-of-value occurs directly on the bitcoin blockchain; scripting and orchestration of signatures via Substrate"),(0,o.kt)("li",{parentName:"ul"},"Governance layer - owners and administrators can control which roles or members within an organization or group should have authority"),(0,o.kt)("li",{parentName:"ul"},"Accounting layer - users and accountants can construct and share ledgers end-to-end encrypted with audit trail")),(0,o.kt)("p",null,"Businesses adopting the protocol will maintain secure direct-custody, eliminate friction, reduce costs, and improve return on assets."))}p.isMDXComponent=!0}}]);