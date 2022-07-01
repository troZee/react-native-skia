"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[152],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,N=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},681:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],l={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/getting-started/installation"},s=void 0,p={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"React Native Skia brings the Skia Graphics Library to React Native.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/react-native-skia/docs/getting-started/installation",editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/getting-started/installation"},sidebar:"tutorialSidebar",next:{title:"Hello World",permalink:"/react-native-skia/docs/getting-started/hello-world"}},d={},c=[{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2},{value:"Proguard",id:"proguard",level:3},{value:"TroubleShooting",id:"troubleshooting",level:3},{value:"Playground",id:"playground",level:2},{value:"Testing with Jest",id:"testing-with-jest",level:2}],m={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React Native Skia brings the ",(0,o.kt)("a",{parentName:"p",href:"https://skia.org/"},"Skia Graphics Library")," to React Native.\nSkia serves as the graphics engine for Google Chrome and Chrome OS, Android, Flutter, Mozilla Firefox, Firefox OS, and many other products."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"yarn add @shopify/react-native-skia"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"yarn add @shopify/react-native-skia")))))),(0,o.kt)("p",null,"Or using npm:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm install @shopify/react-native-skia"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm install @shopify/react-native-skia")))))),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"ios/")," directory."),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Version compatibility"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native@>=0.66")," is required.")),(0,o.kt)("p",null,"Currently, you will need Android NDK to be installed.\nIf you have Android Studio installed, make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"$ANDROID_NDK")," is available.\n",(0,o.kt)("inlineCode",{parentName:"p"},"ANDROID_NDK=/Users/username/Library/Android/sdk/ndk-bundle")," for instance."),(0,o.kt)("p",null,"If the NDK is not installed, you can install it via Android Studio by going to the menu ",(0,o.kt)("em",{parentName:"p"},"File > Project Structure")),(0,o.kt)("p",null,"And then the ",(0,o.kt)("em",{parentName:"p"},"SDK Location")," section. It will show you the NDK path, or the option to download it if you don't have it installed."),(0,o.kt)("h3",{id:"proguard"},"Proguard"),(0,o.kt)("p",null,"If you're using Proguard, make sure to add the following rule:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"undefined"}},"-keep class com.shopify.reactnative.skia.** { *; }"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"undefined"}},"-keep class com.shopify.reactnative.skia.** { *; }")))))),(0,o.kt)("h3",{id:"troubleshooting"},"TroubleShooting"),(0,o.kt)("p",null,"For error ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"CMake 'X.X.X' was not found in SDK, PATH, or by cmake.dir property."))),(0,o.kt)("p",null,"open ",(0,o.kt)("em",{parentName:"p"},"Tools > SDK Manager"),", switch to the ",(0,o.kt)("em",{parentName:"p"},"SDK Tools")," tab.\nFind ",(0,o.kt)("inlineCode",{parentName:"p"},"CMake")," and click ",(0,o.kt)("em",{parentName:"p"},"Show Package Details")," and download compatiable version ",(0,o.kt)("strong",{parentName:"p"},"'X.X.X'"),", and apply to install."),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)("p",null,"We have an example project you can play with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Shopify/react-native-skia/tree/main/example"},"here"),"."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"yarn")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," package "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"&&"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," yarn "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"&&"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ..")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," example "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"&&"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," yarn "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"&&"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," yarn start"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"yarn")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," package "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"&&"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," yarn "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"&&"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ..")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"cd"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," example "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"&&"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," yarn "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"&&"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," yarn start")))))),(0,o.kt)("p",null,"To run the example project on iOS, you will need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install"),", and on Android, you will also need Android NDK to be installed (",(0,o.kt)("a",{parentName:"p",href:"#android"},"see here"),"). "),(0,o.kt)("h2",{id:"testing-with-jest"},"Testing with Jest"),(0,o.kt)("p",null,"In order to load the mock provided by React Native Skia add following to your jest config:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"setupFiles"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},": ["),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./node_modules/@shopify/react-native-skia/jestSetup.js"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"setupFiles"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./node_modules/@shopify/react-native-skia/jestSetup.js"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")))))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"jest"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},": {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"preset"'),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"react-native"'),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"setupFiles"'),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./node_modules/@shopify/react-native-skia/jestSetup.js"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"jest"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"preset"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"react-native"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"setupFiles"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"["),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./node_modules/@shopify/react-native-skia/jestSetup.js"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))))}k.isMDXComponent=!0}}]);