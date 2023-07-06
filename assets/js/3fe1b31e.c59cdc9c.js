"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,h=c["".concat(s,".").concat(k)]||c[k]||m[k]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(83117),a=(n(67294),n(3905));const r={},i="How to manage your BEP8 tokens in BNB Chain Testnet web wallet",l={unversionedId:"beaconchain/wallet/tutorial/bep8",id:"beaconchain/wallet/tutorial/bep8",title:"How to manage your BEP8 tokens in BNB Chain Testnet web wallet",description:"In this article, we are going to take a tour about how to manage your BEP8 tokens in BNB Chain Testnet web wallet.",source:"@site/docs/beaconchain/wallet/tutorial/bep8.md",sourceDirName:"beaconchain/wallet/tutorial",slug:"/beaconchain/wallet/tutorial/bep8",permalink:"/docs/beaconchain/wallet/tutorial/bep8",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/wallet/tutorial/bep8.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Trezor User Guide",permalink:"/docs/beaconchain/wallet/tutorial/trezor-model-t-user-guide"},next:{title:"Overview",permalink:"/docs/dev-outlook-2022"}},s={},p=[{value:"What is BEP8 Token",id:"what-is-bep8-token",level:2},{value:"Issue BEP8 Token",id:"issue-bep8-token",level:2},{value:"Manage the Supply of BEP8 Tokens",id:"manage-the-supply-of-bep8-tokens",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-manage-your-bep8-tokens-in-bnb-chain-testnet-web-wallet"},"How to manage your BEP8 tokens in BNB Chain Testnet web wallet"),(0,a.kt)("p",null,"In this article, we are going to take a tour about how to manage your BEP8 tokens in BNB Chain Testnet ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.binance.org/en/tokens"},"web wallet"),"."),(0,a.kt)("h2",{id:"what-is-bep8-token"},"What is BEP8 Token"),(0,a.kt)("p",null,"Since the Nightingale upgrade of BNB Beacon Chain  testnet, a new token protocol ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEP8.md"},"BEP8")," is introduced. BEP8 protocol targets a different marketplace and provides several potential business cases in areas like micro-financing."),(0,a.kt)("p",null,"Currently, the cost to get a BEP2 token issued on BNB Beacon Chain is not very cheap, as it takes more system resources, which is more suitable for the mature and large scale projects with enough recognition in the markets.  At the same time, more micro-financing cases like copyright owners, peer production, and community incentive points are looking for flexible tokenization and trading platforms to support their current works and share their potential future success.  New BEP8 tokens protocol is introduced to meet these demands and will increase the liquidity of utility tokens, which is similar to Small and Medium Enterprise (SME) board in the traditional stock markets."),(0,a.kt)("h2",{id:"issue-bep8-token"},"Issue BEP8 Token"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to issue ",(0,a.kt)("a",{parentName:"li",href:"https://testnet.binance.org/en/tokens"},"page"),", click at \u201cIssue Token\u201d button")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/oncU08EeRRDZTvp83CurYlE1uh695kGpaNkapFgkTC5cfWJKHkptzmLkx2EKnhRgz9TZFTgyMBUz5GeZUYFskLGlimM7zMkcn-gexTErxryARD9bOjC-FUGytw8UEFo2FgIH3IPW",alt:"img"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Choose BEP8, which is also called MiniToken")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/OwbEzux0-HWV9L0VWPrtBAOvhG-owvQbPfaRhnCzF0fIRQSWzTfQxYVvggdKi624arMDTl_VD6gyEG4b_fLmB6siCmMoQq5mYLb1KXLeMNzp00rE3O4VWwYRhNkpvpsTQnEJGiZy",alt:"img"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Fill the form to provide information about your token.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/sUI0AaTZ3paH5dxeRm83l5ZAH8VYZ48bibo_P-fGAaMHXsHR0G9_giQ3V5JTwXAEic7LEZOpWrutnj_gTls9wXsOdqzukZGb24gHuqXiLyly_E6K1DdW46gi0VcNARgipzpKug0a",alt:"img"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Name"),": Token Name length must between 3 and 32"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token Symbol"),": Symbol length must between 2 and 5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Maximum Supply"),": BEP8 tokens can be categorized by its maximum supply, which could be either 10K or 1million. You have to pay for more for a larger maximum supply."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supply"),": This amount of token will appear under the balance of token issuer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mintable"),": Whether this token can be inflationary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token URI"),': you can paste URL of your project\u2019s website or the URI points to a JSON file that conforms to the "Mini-BEP2 Metadata JSON Schema". ',(0,a.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/docs/beaconchain/learn/BEP8.html#set-token-uri"},"https://docs.bnbchain.org/docs/beaconchain/learn/BEP8.html#set-token-uri"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Confirm Token Info")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/fBfSXxquRX2jxQ6yxH-ZWMyFoPbFY-e211kBEBuYvV4EEBajbBP2LeUeG3e_GxZ2BI91dULqDzbovVIJS8ktvZGP5uO-20fKaRkZ2TQqT3OC_dFs9rDxoXiMp0tOd041vlJp4vwR",alt:"img"})),(0,a.kt)("p",null,"You should wait for a little time before this token appears at your token list."),(0,a.kt)("h2",{id:"manage-the-supply-of-bep8-tokens"},"Manage the Supply of BEP8 Tokens"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mint Tokens\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Mint")," button and input amount\n",(0,a.kt)("img",{parentName:"li",src:"https://lh3.googleusercontent.com/wt4IKUxV2gxzdRQqGiOXA0QN-VoeKqYiqYbifo1EP4P1kR-ucGkv2KCka50loerOGFFErBBFinTZDG6cr5eeEBV0elr3mDdjD9L5Zd4WJTHBgXBhgEzzFMR58dw4LcyKrDhX-Jd7",alt:"img"}))),(0,a.kt)("p",null,"Please note that the total supply cannot exceed maximum supply."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Freeze Tokens\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Freeze")," button and input amount\n",(0,a.kt)("img",{parentName:"li",src:"https://lh5.googleusercontent.com/ztXqTJxQ7HWmEUBTOhR1I11k-sVlLlKwCBjanVbNh3CGHdXJH3xU2_AfM0Xgaeq5PqPUVa07yDvmV9DpihGpcipuJr1x2sHC_WZ19K4oaxP4JUXBO3tmhChQMFp2pdSlsXJ2H_eF",alt:"img"})),(0,a.kt)("li",{parentName:"ul"},"Unfreeze Tokens\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Unfreeze")," button and input amount\n",(0,a.kt)("img",{parentName:"li",src:"https://lh4.googleusercontent.com/MWYG9ONKMGamRt3EZIxxxdP03C4vFOcwk3zL2pBiqFuzDBUNovHGcp5Ypo6FriUX50RAmI_zIroX209jWiFTazS_pHPfNm-vUYMO2fnRTRBA3O1Wn8lkBbzvKrIBhj_y6PnpyzDr",alt:"img"})),(0,a.kt)("li",{parentName:"ul"},"Burn Tokens\nClick on ",(0,a.kt)("inlineCode",{parentName:"li"},"Burn")," button and input amount\n",(0,a.kt)("img",{parentName:"li",src:"https://lh6.googleusercontent.com/2htVnYFl21yQsYZAzG7zbRdVChbd6PGPhe4sfxnZEnJgCOytNKJ1RuWk1dxxB5JPoPMQuAruvdRx8hbXdffB7lZry3NQ0oGfdjSO2eAfT68WoKI5_3ulPYb_xDcFwKPWMYoBenEo",alt:"img"}))))}m.isMDXComponent=!0}}]);