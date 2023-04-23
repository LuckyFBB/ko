"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4],{4852:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(9231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3656:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(4197),o=t(9567),i=(t(9231),t(4852)),a=["components"],s={sidebar_position:4,title:"Configuration"},l=void 0,c={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"You can custom ko's action via ko.config.js, below are supported configurations:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/ko/docs/current/configuration",editUrl:"https://github.com/luckyfbb/ko/website/docs/configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Command Line Interface",permalink:"/ko/docs/current/cli"},next:{title:"FAQ",permalink:"/ko/docs/current/FAQ"}},u={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can custom ko's action via ",(0,i.kt)("strong",{parentName:"p"},"ko.config.js"),", below are supported configurations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type IOptions = {\n  //common configs\n  cwd: string; //current working directory\n  alias?: Record<string, string>; // Create aliases to import or require certain modules more easily\n  copy?: Pattern[]; // copy files patterns\n  entry?: string; // all start from here\n  outputPath?: string; // The output directory as an absolute path\n  publicPath?: string; // specify the base path for all the assets within your application\n  hash?: boolean; // output files with it's content hash\n  externals?: Record<string, string>; //excluding dependencies from the output bundles\n  plugins?: any[]; // ko internal plugins, you can define your own plugin of ko.\n  htmlTemplate?: string; //output html file template \n  // style configs\n  analyzer?: boolean; // show output files with an interactive zoomable treemap\n  extraPostCSSPlugins?: Plugin[]; // extra post css plugins\n  lessOptions?: any; // custom less options\n  // integrated plugins options\n  dynamicResolve?: <T extends any>(request: T) => T; // dynamic resolve function\n  autoPolyfills: boolean | AutoPolyfillsWebpackPluginOptions; // auto polyfills plugin options\n  // dev, or serve configs\n  serve: {\n    proxy?: Record<string, any>; // proxy of dev server\n    host: string; // host of dev server\n    port: number; // port of dev server\n    staticPath?: string; // static path that will be watch of dev server\n    compilationSuccessInfo?: { messages: string[]; notes?: string[] }; // log after successful compilation, as same as friendly-errors-webpack-plugin\n  };\n  // experimental features\n  experiment?: {\n    speedUp?: boolean; // enable speed up configs of dev & build actions\n    minimizer?: boolean; // enable minimizer via esbuild in build action\n    enableCssModule?: boolean; //enable css module \n    disableLazyImports?: boolean; // disable lazy compilation of imports\n  };\n   lints?: Record<IKeys, Omit<IOpts, 'write'>>; // lint configs\n   logLevel?: 'info' | 'warn' | 'error' | 'none'; //control log level\n};\n")),(0,i.kt)("p",null,"For more details, please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/ko/blob/master/packages/ko/src/types.ts"},"link")))}m.isMDXComponent=!0}}]);