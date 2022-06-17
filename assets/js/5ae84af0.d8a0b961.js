"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[5536],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9094:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={title:"Tokenomics",sidebar_position:3,tags:["HASH","Token","Tokenomics"]},s=void 0,d={unversionedId:"tokenomics",id:"tokenomics",title:"Tokenomics",description:"The native token of the Luhn (Kusama) and Hashed (Polkadot) Networks are LUHN and HASH, respectively. Each token behaves exactly the same unless otherwise specified. For brevity, it will be referred to as HASH throughout the documentation.",source:"@site/docs/tokenomics.md",sourceDirName:".",slug:"/tokenomics",permalink:"/docs/tokenomics",draft:!1,tags:[{label:"HASH",permalink:"/docs/tags/hash"},{label:"Token",permalink:"/docs/tags/token"},{label:"Tokenomics",permalink:"/docs/tags/tokenomics"}],version:"current",sidebarPosition:3,frontMatter:{title:"Tokenomics",sidebar_position:3,tags:["HASH","Token","Tokenomics"]},sidebar:"docs",previous:{title:"Purpose",permalink:"/docs/purpose"},next:{title:"Marketplaces",permalink:"/docs/marketplaces"}},c={},h=[{value:"Operations and Validators",id:"operations-and-validators",level:3},{value:"Who decides who gets to build the block?",id:"who-decides-who-gets-to-build-the-block",level:4},{value:"Inflation",id:"inflation",level:3},{value:"Transaction Fees",id:"transaction-fees",level:3},{value:"Reserved HASH",id:"reserved-hash",level:3},{value:"Marketplace Protocol",id:"marketplace-protocol",level:3},{value:"Genesis Allocation",id:"genesis-allocation",level:2},{value:"Allocation Categories",id:"allocation-categories",level:3},{value:"Cohort Allocations",id:"cohort-allocations",level:3},{value:"Overlay Considerations",id:"overlay-considerations",level:3},{value:"Launch Partners",id:"launch-partners",level:4},{value:"Service Providers",id:"service-providers",level:4},{value:"Crowdloan",id:"crowdloan",level:4},{value:"HASH Allocations",id:"hash-allocations",level:3},{value:"Vesting",id:"vesting",level:3}],p={toc:h};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The native token of the Luhn (Kusama) and Hashed (Polkadot) Networks are LUHN and HASH, respectively. Each token behaves exactly the same unless otherwise specified. For brevity, it will be referred to as HASH throughout the documentation."),(0,r.kt)("p",null,"The purpose of HASH is to proactively and automatically manage the health of the network through programmatic incentives."),(0,r.kt)("h3",{id:"operations-and-validators"},"Operations and Validators"),(0,r.kt)("p",null,"Like all computing networks, Hashed Network requires servers with capabilities for network, storage, and processing. These servers are permissionless, meaning anyone can join, and they operate globally. Every 3 seconds, a new block is generated and a small amount of HASH is provided to the validator that generated the block as a reward. This HASH amount is born from the network, and it does not exist until the block is created."),(0,r.kt)("h4",{id:"who-decides-who-gets-to-build-the-block"},"Who decides who gets to build the block?"),(0,r.kt)("p",null,"HASH token holders select, or ",(0,r.kt)("em",{parentName:"p"},"nominate"),", validators of their choosing. Validators can specify a share of the block reward that they will keep (the ",(0,r.kt)("em",{parentName:"p"},"commission"),") and the rest will go back to their nominators, proportional to the nominators' staked HASH amounts."),(0,r.kt)("p",null,"Nominators often use the commission amount to decide which validators to choose (the smaller the commission, the larger the reward for the nominator). However, validators can also be ",(0,r.kt)("em",{parentName:"p"},"slashed")," for poor performance, such as going offline or building invalid blocks. When this happens, the nominators lose some of their HASH tokens. The commission rate, operational performance, and a validator's standing relative to its peers all contribute to how nominators select validators."),(0,r.kt)("p",null,"To learn more about Nominators, see the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-nominator"},"Polkadot Wiki"),"."),(0,r.kt)("h3",{id:"inflation"},"Inflation"),(0,r.kt)("p",null,"As mentioned above, new HASH to go to the validator and nominator is minted with every block. This is critical to the health of the network, and it continues in perpetuity. The amount of HASH reward for each block is a function of the % of total HASH tokens are staked at that moment. "),(0,r.kt)("p",null,"Since staked HASH secures the network, more tends to be better. However, if it rises too far, it loses liquidity. There is a  curve that governs the reward amount with the intent of keeping the staked HASH at an optimal level of 50%."),(0,r.kt)("p",null,"The graph below shows the inflation rate (also known as the APR for staking) on the y-axis and the staking rate on the x-axis. When staking is low (e.g. 10% of all HASH), the reward for staking is very high to encourage token holders to stake to secure the network. Yet, to maintain liquidity, the reward sharply decreases as the staking rate grows above 50%.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32852271/174104100-dddbcf93-94fe-4d51-a027-e293210ff54b.png",alt:"image"})),(0,r.kt)("p",null,"For more information on the tokenomics of staking and nominating, see the ",(0,r.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/overview/2-token-economics.html"},"Web 3 Foundation Research"),"."),(0,r.kt)("h3",{id:"transaction-fees"},"Transaction Fees"),(0,r.kt)("p",null,"Transaction fees are critical for the security of networks. Without fees, there is no cost to attack the network using a ",(0,r.kt)("a",{parentName:"p",href:"https://www.paloaltonetworks.com/cyberpedia/what-is-a-denial-of-service-attack-dos"},"denial-of-service attack"),", and the health of the network will be compromised. These fees make it expensive for adversaries to generate high volumes of meaningless transactions, thus thwarting the attempted attack."),(0,r.kt)("p",null,"Transaction fees are typically a function of the size of a transaction (in bytes), time it takes to run the transaction, the amount of memory used, and the amount of on-chain storage required. The fees may fluctuate subtly over time based on the amount of space utilized in each block (the number of transactions).  As the network becomes more congested, the fees go up to encourage some users to wait to process transactions when there is less congestion."),(0,r.kt)("h3",{id:"reserved-hash"},"Reserved HASH"),(0,r.kt)("p",null,"Many on-chain actions require that data be stored for a long period of time. For example, if a user creates a new marketplace, they must store its name, description, and related configuration parameters. Yet, at some point in the future, the user may decide to close the marketplace. "),(0,r.kt)("p",null,"HASH is locked, or ",(0,r.kt)("em",{parentName:"p"},"reserved"),", for the duration that the storage is needed, and then released back to the user when the storage is evacuated."),(0,r.kt)("h3",{id:"marketplace-protocol"},"Marketplace Protocol"),(0,r.kt)("p",null,"Any HASH token holder can create a new marketplace on the Hashed Network, giving them the authority to specify the participants allowed in the marketplace and also the origination and commission rates."),(0,r.kt)("p",null,"When a marketplace asset is originated or sold, commission is paid to the marketplace owner. In this same transaction, 10% of the commission amount, in HASH token, is burned."),(0,r.kt)("p",null,"For example, if the commission on an order is $100 and the HASH value is $0.25, 40 HASH tokens will be burned. The marketplace protocol supports a number of mechanical methods for how this burn occurs."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Marketplace owner may specify a stash account where the HASH is burned from."),(0,r.kt)("li",{parentName:"ol"},"The amount can be deducted from the order itself, similar to commission, where USD can be automatically converted to HASH (purchasing it from a seller), and then burned."),(0,r.kt)("li",{parentName:"ol"},"The HASH can be burned from the seller."),(0,r.kt)("li",{parentName:"ol"},"The HASH can be burned from the buyer.")),(0,r.kt)("p",null,"If the selected option has insufficient HASH to cover the burn, the transaction will fail."),(0,r.kt)("p",null,"This burn protocol is instrumental in maintaining the health of Hashed Network marketplaces. It establishes deflationary pressure on the HASH token by reducing supply which drives value to tokenholders. Yet, since Hashed Network is open source and voluntary, it establishes ongoing accountability for the network to provide continuous value or else marketplace owners will go elsewhere."),(0,r.kt)("h2",{id:"genesis-allocation"},"Genesis Allocation"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Cohort analysis is still in process and will be finalized soon."))),(0,r.kt)("p",null,"As with all parachains, Hashed Network has an initial token quantity, allocations, and vesting periods codified into the first block. "),(0,r.kt)("p",null,"The allocations of these tokens were decided based on a cohort analysis of all the parachains listed on ",(0,r.kt)("a",{parentName:"p",href:"https://parachains.info"},"parachains.info"),", a useful database for viewing parameters and information about parachains and parachain candidates."),(0,r.kt)("p",null,"We used a 4-step process for the analysis to derive the genesis allocations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Data collection - recorded the genesis allocations for each parachain and candidate (n=170)"),(0,r.kt)("li",{parentName:"ol"},"Data cleansing - labels used for the allocations (pie charts) are inconsistent across chains, so we mapped each of the allocations into a consistent structure (as defined below)"),(0,r.kt)("li",{parentName:"ol"},"Aggregate and score - with a clean data set, we were able to aggregate all parachains into a consistent score for each allocation category."),(0,r.kt)("li",{parentName:"ol"},'Overlay new information - using the aggregate "mash-up" of our cohorts to set the starting point, we then overlaid any Hashed Network diffirientators, and applied that knowledge to make small, defensible adjustments.')),(0,r.kt)("h3",{id:"allocation-categories"},"Allocation Categories"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Subcategory"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Founding Team"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Founding Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Individuals responsible for building the open source software for Hashed Network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Investors"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Seed Round"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial round of fundraising")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Subsequent Round"),(0,r.kt)("td",{parentName:"tr",align:null},"Second and subsequent round(s) of fundraising")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Budgets"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Community"),(0,r.kt)("td",{parentName:"tr",align:null},"Funds allocated to energize and support general token holders and ambassadors (\u201cfans\u201d)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Ecosystem"),(0,r.kt)("td",{parentName:"tr",align:null},"Funds allocated to support applications and organizations using Hashed Network (\u201cusers\u201d)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Marketing"),(0,r.kt)("td",{parentName:"tr",align:null},"Funds allocated to drive awareness of the benefits and features of the Hashed Network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Development"),(0,r.kt)("td",{parentName:"tr",align:null},"Funds allocated to continue building the base protocol, pallets, and network services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parachain"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Crowdloan"),(0,r.kt)("td",{parentName:"tr",align:null},"Rewards paid to accounts that contribute to a crowdloan resulting in a successful parachain lease")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Auctions"),(0,r.kt)("td",{parentName:"tr",align:null},"Funds allocated to directly swap or stake for a parachain slot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reserve"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Reserve"),(0,r.kt)("td",{parentName:"tr",align:null},"Funds with no specific allocation, such as ",(0,r.kt)("em",{parentName:"td"},"treasury")," or ",(0,r.kt)("em",{parentName:"td"},"reserve"))))),(0,r.kt)("h3",{id:"cohort-allocations"},"Cohort Allocations"),(0,r.kt)("p",null,"The following pie chart shows the ",(0,r.kt)("strong",{parentName:"p"},"mash-up")," of genesis allocations of all other parachains and parachain candidates."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32852271/174317051-4f9ee4ab-6f95-400b-acb7-1d9afdbe0b6b.png",alt:"image"})),(0,r.kt)("h3",{id:"overlay-considerations"},"Overlay Considerations"),(0,r.kt)("p",null,"Using the cohort allocations as a starting point, we then established the key diffirientiators of Hashed Network relative to our cohorts and adjusted the amounts accordingly."),(0,r.kt)("h4",{id:"launch-partners"},"Launch Partners"),(0,r.kt)("p",null,"Hashed Network is launching with partners that will be providing products and services to users. These parties would typically fall into the ",(0,r.kt)("strong",{parentName:"p"},"Ecosystem")," category. Since they are instrumental to the success of the network and establishing momentum, we have assigned 75% of the ",(0,r.kt)("strong",{parentName:"p"},"Ecosystem")," allocation directly to the Launch Partners."),(0,r.kt)("h4",{id:"service-providers"},"Service Providers"),(0,r.kt)("p",null,"Hashed Network supports some key ",(0,r.kt)("em",{parentName:"p"},"back-bridge")," integrations, such as partnerships with KYC and financial service providers. These parties have off-chain pricing models and other legacy constructs, such as legal entities and licenses, that must be paid in fiat. "),(0,r.kt)("p",null,"Although ",(0,r.kt)("strong",{parentName:"p"},"Community")," is always critical in establishing support for projects, we feel that since Hashed Network is mostly for businesses as opposed to consumers (as might be found with an artwork- or gaming-related parachain), we can reduce this allocation to cover Service Providers."),(0,r.kt)("p",null,"So, we reduced ",(0,r.kt)("strong",{parentName:"p"},"Community")," to 5.2% and created a new allocation for ",(0,r.kt)("strong",{parentName:"p"},"Service Providers"),"."),(0,r.kt)("h4",{id:"crowdloan"},"Crowdloan"),(0,r.kt)("p",null,"Hashed Network plans to pursue a crowdloan to secure a parachain slot rather than bidding on a slot directly, so we have moved funds from ",(0,r.kt)("strong",{parentName:"p"},"Auction")," to ",(0,r.kt)("strong",{parentName:"p"},"Crowdloan"),"."),(0,r.kt)("h3",{id:"hash-allocations"},"HASH Allocations"),(0,r.kt)("p",null,"The final allocations for the LUHN token (Kusama) are below. If new information or additional considerations become known prior to the launch of the HASH token (Polkadot), that information may be applied prior to finalizing that genesis token allocation."),(0,r.kt)("h3",{id:"vesting"},"Vesting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Founding Team allocation will vest 5% at the initial block, and then linearly over the subsequent x blocks, or 4 years."),(0,r.kt)("li",{parentName:"ul"},"Launch Partners allocation will vest 5% at the initial block, and then linearly over the subsequent x blocks, or 4 years."),(0,r.kt)("li",{parentName:"ul"},"Ecosystem and Community allocations will vest 20% at the initial block, and then linearly over the subsequent x blocks, or 2 years."),(0,r.kt)("li",{parentName:"ul"},"Seed Round will vest 0% at the initial block, and then linearly over the next 2 years."),(0,r.kt)("li",{parentName:"ul"},"Crowdload rewards will vest linearly over the duration of a successful parachain slot lease.")))}u.isMDXComponent=!0}}]);