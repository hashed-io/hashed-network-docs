"use strict";(self.webpackChunkhashed_network_docs=self.webpackChunkhashed_network_docs||[]).push([[9702],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return u}});var a=n(3117),o=(n(7294),n(3905));const r={title:"Beancount Integration",sidebar_position:4,tags:["accounting"]},l=void 0,i={unversionedId:"accounting/beancount",id:"accounting/beancount",title:"Beancount Integration",description:"Hashed Network Beancount Integration",source:"@site/docs/accounting/beancount.md",sourceDirName:"accounting",slug:"/accounting/beancount",permalink:"/accounting/beancount",draft:!1,tags:[{label:"accounting",permalink:"/tags/accounting"}],version:"current",sidebarPosition:4,frontMatter:{title:"Beancount Integration",sidebar_position:4,tags:["accounting"]},sidebar:"docs",previous:{title:"Overview and Walkthrough",permalink:"/accounting/"},next:{title:"MoneScript Integration",permalink:"/accounting/monescript"}},s={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Hashed Network Beancount Integration"),(0,o.kt)("meta",{charSet:"utf-8"}),(0,o.kt)("meta",{property:"og:image",content:"https://docs.hashed.network/img/monolith.png"}),(0,o.kt)("meta",{property:"og:description",content:"On-chain, triple entry accounting protocol generates journal files from Native Bitcoin Vaults and enables vault administrators to run balance sheets and income statements"}),(0,o.kt)("meta",{property:"og:title",content:"Hashed Network On-chain Accounting"}),(0,o.kt)("meta",{property:"og:url",content:"https://docs.hashed.network/docs/accounting"})),(0,o.kt)("p",null,"Instructions for downloading and installing Beancount:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Where to Get It")),(0,o.kt)("p",null,"This is the official location for the source code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/beancount/beancount\n")),(0,o.kt)("p",null,"Download it like this, by using Git to make a clone on your machine:"),(0,o.kt)("p",null,"git clone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/beancount/beancount"},"https://github.com/beancount/beancount")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to Install")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Installing Python")),(0,o.kt)("p",null,"Beancount uses Python 3.51 or above, which is a pretty recent version of Python (as of this writing), and a few common library dependencies."),(0,o.kt)("p",null,"First, you should have a working Python install. Install the latest stable version >=3.5 using the download from python.org. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Installing Beancount using pip")),(0,o.kt)("p",null,"This is the easiest way to install Beancount. You just install Beancount using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo -H python3 -m pip install beancount\n")),(0,o.kt)("p",null,"This should automatically download and install all the dependencies."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tutorial & example")),(0,o.kt)("p",null,"First we need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"hashed-vaults.journal")," file to be in the Beancount format -> ",(0,o.kt)("inlineCode",{parentName:"p"},"hashed-vaults-python.journal"),". "),(0,o.kt)("p",null,"You need to take in consideration the following changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Date should be in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD")),(0,o.kt)("li",{parentName:"ul"},"Currency should be in the format `USD' "),(0,o.kt)("li",{parentName:"ul"},"After the date, you need to add the ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," symbol"),(0,o.kt)("li",{parentName:"ul"},"Every transaction description should be in the format ",(0,o.kt)("inlineCode",{parentName:"li"},'"description"')),(0,o.kt)("li",{parentName:"ul"},"You need to initialize the account with the ",(0,o.kt)("inlineCode",{parentName:"li"},"open")," keyword"),(0,o.kt)("li",{parentName:"ul"},"Account names should be in the format ",(0,o.kt)("inlineCode",{parentName:"li"},"Assets:BitcoinVaults:Hot"),", without spaces"),(0,o.kt)("li",{parentName:"ul"},"Beancount will ignore the ",(0,o.kt)("inlineCode",{parentName:"li"},";")," comments, so you don't need to remove them"),(0,o.kt)("li",{parentName:"ul"},"Accounts needs to be balanced:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    Assets:BitcoinVaults:Cold           1.5 BTC\n    Income:Consulting                   -1.5 BTC\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generate an Example File")),(0,o.kt)("p",null,"If we don't have any doc file, we can begin by generating an example file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-example > example.beancount\n")),(0,o.kt)("p",null,"But we already have a ",(0,o.kt)("inlineCode",{parentName:"p"},"hashed-vaults-python.journal")," file, so we can use that one."),(0,o.kt)("p",null,"Next, before we begin generating reports, verify that the file loads without any errors (checks that the syntax is correct):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-check docs/journals/hashed-vaults-python.journal\n")),(0,o.kt)("p",null,"It should return quietly, without outputting anything (bean-check only writes errors when there are some, otherwise on success it writes nothing)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image1",src:n(4486).Z,width:"2906",height:"196"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generating Reports")),(0,o.kt)("p",null,"Let\u2019s generate a report of the final balances of all accounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal balances\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image2",src:n(3305).Z,width:"2992",height:"706"})),(0,o.kt)("p",null,"As you can see, the bean-report script has subcommands for the various reports it generates. To list the available reports, use --help-reports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report --help-reports\n")),(0,o.kt)("p",null,"To list the options available for a particular report, use --help on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal balances --help\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image3",src:n(4777).Z,width:"3140",height:"740"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generating Balances")),(0,o.kt)("p",null,"Good, so we know how to generate a report of balances for all accounts. This is a pretty detailed list of accounts though. Let\u2019s just restrict the output to the accounts that we\u2019re interested in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal balances -e BitcoinVaults\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image9",src:n(4707).Z,width:"3328",height:"374"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Formatting Tools")),(0,o.kt)("p",null,"Sometimes it\u2019s nice to render a hierarchical list of accounts as a tree. You can use the \u201ctreeify\u201d tool provided by Beancount to do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal balances | treeify\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image10",src:n(140).Z,width:"3192",height:"832"})),(0,o.kt)("p",null,"This tool will work on any column of data that looks like a column of account names (you can also configure it work with filenames as well, or other patterns)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generating a Balance Sheet and Income Statement")),(0,o.kt)("p",null,"Let us generate a balance sheet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal balsheet\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image4",src:n(1439).Z,width:"2990",height:"1614"})),(0,o.kt)("p",null,"Unfortunately, the only output format supported for it at this point is HTML. Also, filtering balance sheet entries from the command-line is not supported. Generate this to a file and open a browser to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal balsheet > balsheet.html\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image5",src:n(9022).Z,width:"1088",height:"1532"})),(0,o.kt)("p",null,"You can to the same for income statements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal income > income.html\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image6",src:n(2638).Z,width:"1206",height:"1574"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Journals")),(0,o.kt)("p",null,"You can also generate journals (in Ledger parlance, these are \u201cregisters\u201d). Let\u2019s look at a checking account postings, for instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal journal -a Assets:BitcoinVaults:Cold\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image7",src:n(8054).Z,width:"3260",height:"1114"})),(0,o.kt)("p",null,"To render a column of running balances, add the --balance option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal journal -a Assets:BitcoinVaults:Cold --balance\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image8",src:n(6571).Z,width:"3262",height:"1126"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Holdings")),(0,o.kt)("p",null,"There are a variety of ways to obtain aggregations for the total list of holdings. List the detailed holdings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal holdings\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image11",src:n(4802).Z,width:"3002",height:"456"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other Reports")),(0,o.kt)("p",null,"There are many other miscellaneous reports available. Try a few of those."),(0,o.kt)("p",null,"Listing all accounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-report docs/journals/hashed-vaults-python.journal accounts\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image12",src:n(2744).Z,width:"3136",height:"624"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Viewing Reports through the Web Interface")),(0,o.kt)("p",null,"The original way to access reports in Beancount is via its web interface that serves to a local web server on your machine. Serve the example file like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bean-web docs/journals/hashed-vaults-python.journal\n")),(0,o.kt)("p",null,"Then navigate with a web browser to http://localhost:8080. From there, you can click on any number of filtered views and access some of the reports previously demonstrated. For example, click on a year view; that will provide balance sheets and income statements and various other reports for this subset of transactions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image13",src:n(6917).Z,width:"3822",height:"1312"})))}p.isMDXComponent=!0},4486:function(e,t,n){t.Z=n.p+"assets/images/image1-c76f7135b959e5b26744095148a441ce.png"},140:function(e,t,n){t.Z=n.p+"assets/images/image10-33d3d4f02cdfa82f37f54c71f1fea1b5.png"},4802:function(e,t,n){t.Z=n.p+"assets/images/image11-49794c3cebf9aeaf4a29001763e34865.png"},2744:function(e,t,n){t.Z=n.p+"assets/images/image12-51a6433b8efdc4834f02c0bab5f8cced.png"},6917:function(e,t,n){t.Z=n.p+"assets/images/image13-1ac5f84301b80983cc754194fa75f70d.png"},3305:function(e,t,n){t.Z=n.p+"assets/images/image2-13f384e7768dd9e4de72dd7b57566af7.png"},4777:function(e,t,n){t.Z=n.p+"assets/images/image3-6f6295f62fe094315d64ac1b35d82d45.png"},1439:function(e,t,n){t.Z=n.p+"assets/images/image4-18f4f832264838dbb30900be2a727e06.png"},9022:function(e,t,n){t.Z=n.p+"assets/images/image5-2e19a63d613819fbe8cf7502fc240546.png"},2638:function(e,t,n){t.Z=n.p+"assets/images/image6-fa2552ad4f8391f1efc2f834cb1b3258.png"},8054:function(e,t,n){t.Z=n.p+"assets/images/image7-3100f25c6be865b00459c0010775724f.png"},6571:function(e,t,n){t.Z=n.p+"assets/images/image8-75aadaf16350fed291e316027a8bd6b3.png"},4707:function(e,t,n){t.Z=n.p+"assets/images/image9-a540b33412602175465b85db834b9fa5.png"}}]);