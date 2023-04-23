"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[969],{4852:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(9231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7004:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(4197),o=t(9567),a=(t(9231),t(4852)),i=["components"],l={sidebar_position:5,title:"\u5e38\u89c1\u95ee\u9898"},s=void 0,c={unversionedId:"FAQ",id:"FAQ",title:"\u5e38\u89c1\u95ee\u9898",description:"\u5982\u4f55 polyfill Node.js \u6838\u5fc3\u6a21\u5757",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/ko/zh-CN/docs/current/FAQ",editUrl:"https://github.com/luckyfbb/ko/website/docs/FAQ.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e",permalink:"/ko/zh-CN/docs/current/configuration"},next:{title:"\u67b6\u6784",permalink:"/ko/zh-CN/docs/current/advanced/architecture"}},p={},u=[{value:"\u5982\u4f55 polyfill Node.js \u6838\u5fc3\u6a21\u5757",id:"\u5982\u4f55-polyfill-nodejs-\u6838\u5fc3\u6a21\u5757",level:2},{value:"\u73af\u5883\u53d8\u91cf process.env.node_env",id:"\u73af\u5883\u53d8\u91cf-processenvnode_env",level:3},{value:"\u5982\u4f55\u4f7f\u7528 Web Workers",id:"\u5982\u4f55\u4f7f\u7528-web-workers",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5982\u4f55-polyfill-nodejs-\u6838\u5fc3\u6a21\u5757"},"\u5982\u4f55 polyfill Node.js \u6838\u5fc3\u6a21\u5757"),(0,a.kt)("p",null,"Webpack 5 \u4e0d\u518d\u81ea\u52a8 polyfill Node.js \u6838\u5fc3\u6a21\u5757\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u60a8\u5728\u6d4f\u89c8\u5668\u6216\u7c7b\u4f3c\u73af\u5883\u4e2d\u4f7f\u7528\u5b83\u4eec\uff0c\u60a8\u5fc5\u987b\u4ece npm \u5b89\u88c5\u517c\u5bb9\u7684\u6a21\u5757\u5e76\u5f15\u7528\u5b83\u4eec\u3002\u5982\u679c\u60a8\u7684\u76ee\u6807\u73af\u5883\u662f\u6d4f\u89c8\u5668\uff0c\u53ea\u9700\u5b89\u88c5\u4e00\u4e9b\u5305\u5e76\u5c06 ",(0,a.kt)("strong",{parentName:"p"},"resolve.fallback")," \u6dfb\u52a0\u5230 ",(0,a.kt)("strong",{parentName:"p"},"ko.config.js")," \u4e2d\u5373\u53ef\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4ece v5.3.4 \u5f00\u59cb\uff0cko \u5728\u5185\u90e8 polyfill \u8fd9\u4e9b\u6838\u5fc3\u6a21\u5757\uff0c\u56e0\u6b64\u60a8\u4e0d\u5fc5\u518d\u5b89\u88c5\u4ee5\u4e0b\u5305\u5e76\u914d\u7f6e\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," {\n  resolve: {\n    fallback: {\n          fs: false,\n          path: false,\n          events: false,\n          os: require.resolve('os-browserify/browser'),\n          crypto: require.resolve('crypto-browserify'),\n          stream: require.resolve('stream-browserify'),\n          buffer: require.resolve('buffer/'),\n          string_decoder: require.resolve('string_decoder/'),\n        },\n  }\n }\n")),(0,a.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf-processenvnode_env"},"\u73af\u5883\u53d8\u91cf process.env.node_env"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u5728\u5f00\u53d1\u548c\u751f\u4ea7\u6784\u5efa\u4e4b\u95f4\u81ea\u5b9a\u4e49 ko.config.js \u4e2d\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"ko dev vs build \u5c06 process.env.node_env \u6ce8\u5165\u4e3a developement \u548c production")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"}," plugins: [\n    new CopyWebpackPlugin(yourOwnCopyConfig),\n    process.env.NODE_ENV === 'production' ? new VersionPlugin() : null\n  ].filter(Boolean)\n\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-web-workers"},"\u5982\u4f55\u4f7f\u7528 Web Workers"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u4fdd\u8bc1\u517c\u5bb9\u6027\uff0c\u6211\u4eec\u5728 ko \u4e2d\u5185\u90e8\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"worker-loader"),"\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u5728\u4e0d\u66f4\u65b0\u5bfc\u5165 Worker \u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u8fc1\u79fb\u5230 ko\u3002\u4f46\u662f\uff0c\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u7684\u65b9\u5f0f\u4f7f\u7528 worker\u3002"))),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 ko \u4e2d\u4e0d\u5f15\u5165 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/worker-loader"},"worker-loader")," \u800c\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"},"Web Workers"),"\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Worker(new URL('./worker.js', import.meta.url));\n")),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u4fee\u6539\u9879\u76ee\u4e2d ",(0,a.kt)("strong",{parentName:"p"},"tsconfig.json")," \u7684\u5982\u4e0b\u914d\u7f6e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"compilerOptions": {         \n  "module": "esnext",         \n  "moduleResolution": "Node"   \n} \n')))}m.isMDXComponent=!0}}]);