"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[153],{4852:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(9231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6661:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=t(4197),o=t(9567),a=(t(9231),t(4852)),i=["components"],c={sidebar_position:2,title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6"},p=void 0,u={unversionedId:"advanced/plugins",id:"advanced/plugins",title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",description:"Ko \u652f\u6301\u4f7f\u7528\u63d2\u4ef6\u6765\u4fee\u6539\u5185\u90e8\u914d\u7f6e\u548c\u884c\u4e3a\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/plugins.md",sourceDirName:"advanced",slug:"/advanced/plugins",permalink:"/ko/zh-CN/docs/current/advanced/plugins",editUrl:"https://github.com/luckyfbb/ko/website/docs/advanced/plugins.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/ko/zh-CN/docs/current/advanced/architecture"}},l={},s=[],d={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ko \u652f\u6301\u4f7f\u7528\u63d2\u4ef6\u6765\u4fee\u6539\u5185\u90e8\u914d\u7f6e\u548c\u884c\u4e3a\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const VersionWebpackPlugin = require('./version-webpack-plugin');\nmodule.exports = {\n  plugins: [\n    {\n      key: 'WebpackPlugin',\n      action: 'add',\n      opts: {\n        name: 'VersionWebpackPlugin',\n        fn: () => new VersionWebpackPlugin(),\n      },\n    },\n  ],\n}\n")),(0,a.kt)("p",null,"\u5982\u60a8\u6240\u89c1\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,a.kt)("strong",{parentName:"p"},"ko.config.js")," \u4e2d\u6dfb\u52a0\u63d2\u4ef6\u914d\u7f6e\u6765\u6ce8\u518c\u81ea\u5df1\u7684 ko \u63d2\u4ef6\uff0c\u5e76\u4e14\u60a8\u9700\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"action")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"opts")," \u503c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"key\uff1a\u94a9\u5b50\u4e3b\u952e\uff0c\u76ee\u524d\u4ec5\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"WebpackPlugin")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"ModifyWebpack"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"action\uff1a\u652f\u6301\u7684\u64cd\u4f5c\uff0c\u5f53\u60a8\u6dfb\u52a0\u914d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"add"),"\uff0c\u5f53\u60a8\u60f3\u8981\u5b8c\u5168\u63a7\u5236\u5f53\u524d\u914d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"update"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"opts\uff1a\u6240\u6709\u4f20\u9012\u7684 opts \u5c06\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"tapable")," \u5728\u5185\u90e8\u4f7f\u7528\uff0c\u652f\u6301\u7684\u7c7b\u578b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export type HookItem = {\n  name: string;\n  fn: Function;\n  stage?: number;\n  before?: string;\n};\n")))}f.isMDXComponent=!0}}]);