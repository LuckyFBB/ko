"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{4852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(4197),o=n(9567),a=(n(9231),n(4852)),i=["components"],l={sidebar_position:2,title:"Getting Started"},s=void 0,u={unversionedId:"getting-started",id:"version-5.x/getting-started",title:"Getting Started",description:"Prerequisites",source:"@site/versioned_docs/version-5.x/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/ko/docs/5.x/getting-started",editUrl:"https://github.com/DTStack/ko/website/versioned_docs/version-5.x/getting-started.md",tags:[],version:"5.x",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ko/docs/5.x/introduction"},next:{title:"ko build",permalink:"/ko/docs/5.x/cli/ko-build"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install ko",id:"install-ko",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Everyday Commands",id:"everyday-commands",level:2},{value:"ko dev",id:"ko-dev",level:3},{value:"ko build",id:"ko-build",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js version: Node.js 10.13.0 +")),(0,a.kt)("h2",{id:"install-ko"},"Install ko"),(0,a.kt)("p",null,"You can install ko using npm, yarn or pnpm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add ko --save-dev\n# or\nnpm install ko --save-dev\n# or\nyarn add ko --dev\n")),(0,a.kt)("p",null,"Polyfills are needed for IE browsers. We recommended ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/regenerator-runtime"},"regenerator-runtime")," for it. And you should install them as dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add core-js regenerator-runtime\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"After install ko,you can create an configuration file named ",(0,a.kt)("strong",{parentName:"p"},"ko.config.js")," for customize ko. And you can specify your own ",(0,a.kt)("strong",{parentName:"p"},"entry")," and ",(0,a.kt)("strong",{parentName:"p"},"output")," configurations, use plugins and loaders as same in webpack configurations, ko will help you merge these configs and use them in internal webpack instance. A real world showcase:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  entry: './src/app.tsx',\n  output: {\n    publicPath: '/',\n  },\n  plugins: [\n    new CopyWebpackPlugin(yourOwnCopyConfig),\n  ],\n  devServer: {\n    proxy: PROXY_CONFIG, // Your own proxy config\n    host: '0.0.0.0',\n    port: 8084,\n  },\n};\n")),(0,a.kt)("h2",{id:"everyday-commands"},"Everyday Commands"),(0,a.kt)("p",null,"Your daily workflow only needs a few ko commands:"),(0,a.kt)("h3",{id:"ko-dev"},"ko dev"),(0,a.kt)("p",null,"start a development server that provides live reloading. You can change development server default behaviors via ",(0,a.kt)("strong",{parentName:"p"},"devServer")," configurations."),(0,a.kt)("h3",{id:"ko-build"},"ko build"),(0,a.kt)("p",null,"bundle files with internal webpack instance, with some built-in loaders and plugins that can speed up build process."))}m.isMDXComponent=!0}}]);