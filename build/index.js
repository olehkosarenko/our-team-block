(()=>{var e,t={556:(e,t,a)=>{e.exports=a(694)()},613:(e,t,a)=>{"use strict";const r=window.wp.blocks,o=window.wp.i18n,s=window.wp.blockEditor,i=window.wp.blob,l=window.wp.components;var n=a(556),c=a.n(n);const m=window.ReactJSXRuntime;function u({attributes:e,setAttributes:t}){const{url:a,name:r,position:n,imageId:c,imageUrl:u,imageAlt:p}=e,d=e=>{t({imageId:void 0,imageUrl:e,imageAlt:""})},b=e=>{t({imageId:e.id,imageUrl:e.url,imageAlt:e.alt})};return(0,m.jsxs)(m.Fragment,{children:[u&&!(0,i.isBlobURL)(u)&&(0,m.jsx)(s.InspectorControls,{children:(0,m.jsx)(l.PanelBody,{title:(0,o.__)("Image Settings","our-team-block"),children:(0,m.jsx)(l.TextControl,{label:(0,o.__)("Alt","our-team-block"),value:p,onChange:e=>t({imageAlt:e})})})}),u&&(0,m.jsxs)(s.BlockControls,{children:[(0,m.jsx)(s.MediaReplaceFlow,{name:(0,o.__)("Replace Image","our-team-block"),onSelect:b,onSelectURL:d,accept:"image/*",allowedTypes:["image"],mediaId:c,mediaURL:u}),(0,m.jsx)(l.ToolbarButton,{onClick:()=>t({imageId:void 0,imageUrl:void 0,imageAlt:""}),children:(0,o.__)("Remove Image","our-team-block")})]}),(0,m.jsxs)("div",{...(0,s.useBlockProps)({className:"our-team__item"}),children:[(0,m.jsx)(s.RichText,{value:a,allowedFormats:[],className:"our-team__url our-team__input",onChange:e=>t({url:e}),placeholder:(0,o.__)("URL","our-team-block")}),(0,m.jsxs)("span",{className:"our-team__image",children:[u&&(0,m.jsxs)("div",{className:"image "+((0,i.isBlobURL)(u)?"is-loading":"loaded"),children:[(0,m.jsx)("img",{src:u,alt:p,id:c}),(0,i.isBlobURL)(u)&&(0,m.jsx)(l.Spinner,{})]}),(0,m.jsx)(s.MediaPlaceholder,{onSelect:b,onSelectURL:d,accept:"image/*",allowedTypes:["image"],disableMediaButtons:u})]}),(0,m.jsxs)("span",{className:"our-team__person",children:[(0,m.jsx)(s.RichText,{tagName:"span",allowedFormats:[],value:r,className:"our-team__name our-team__input",onChange:e=>t({name:e}),placeholder:(0,o.__)("Name","our-team-block")}),(0,m.jsx)(s.RichText,{tagName:"span",allowedFormats:[],className:"our-team__position our-team__input",value:n,onChange:e=>t({position:e}),placeholder:(0,o.__)("Position","our-team-block")})]})]})]})}function p({attributes:e}){const{url:t,name:a,position:r,imageId:o,imageUrl:i,imageAlt:l}=e,n=a||r;return t||a?(0,m.jsx)("div",{...s.useBlockProps.save({className:"our-team__item"}),children:(0,m.jsxs)("a",{href:t,className:"our-team__url",children:[(0,m.jsx)("span",{className:"our-team__image",children:(0,m.jsx)("img",{id:o,src:i,alt:l})}),n&&(0,m.jsxs)("span",{className:"our-team__person",children:[a&&(0,m.jsx)(s.RichText.Content,{tagName:"span",className:"our-team__name",value:a}),r&&(0,m.jsx)(s.RichText.Content,{tagName:"span",className:"our-team__position",value:r})]})]})}):null}function d({attributes:e,setAttributes:t}){const{title:a,description:r}=e;return(0,m.jsxs)("div",{...(0,s.useBlockProps)(),children:[(0,m.jsx)(s.RichText,{tagName:"h2",className:"our-team__title our-team__input",allowedFormats:[],value:a,placeholder:(0,o.__)("Your Title","our-team-block"),onChange:e=>t({title:e})}),(0,m.jsx)(s.RichText,{tagName:"p",className:"our-team__desc our-team__input",allowedFormats:[],value:r,placeholder:(0,o.__)("Your Description","our-team-block"),onChange:e=>t({description:e})})]})}function b({attributes:e,setAttributes:t}){const{columns:a}=e;return(0,m.jsx)("div",{...(0,s.useBlockProps)({className:`our-team__column-${a}`}),children:(0,m.jsx)("div",{className:"our-team__container",children:(0,m.jsx)("div",{className:"our-team",children:(0,m.jsxs)("div",{className:"our-team__row",children:[(0,m.jsx)(s.InspectorControls,{children:(0,m.jsx)(l.PanelBody,{children:(0,m.jsx)(l.RangeControl,{label:(0,o.__)("Columns","our-team-block"),min:1,max:2,value:a,onChange:e=>t({columns:e})})})}),(0,m.jsx)(s.InnerBlocks,{allowedBlocks:["wp-app/our-team-block-column"],template:[["wp-app/our-team-block-column",{},[["wp-app/our-team-block-text"]]],["wp-app/our-team-block-column",{},[["wp-app/our-team-block-team-list",{},[["wp-app/our-team-block-team-member"],["wp-app/our-team-block-team-member"],["wp-app/our-team-block-team-member"],["wp-app/our-team-block-team-member"]]]]]]})]})})})})}function _({attributes:e}){const{columns:t}=e;return(0,m.jsx)("div",{...s.useBlockProps.save({className:`our-team__columns-${t}`}),children:(0,m.jsx)("div",{className:"our-team__container",children:(0,m.jsx)("div",{className:"our-team",children:(0,m.jsx)("div",{className:"our-team__row",children:(0,m.jsx)(s.InnerBlocks.Content,{})})})})})}u.propTypes={attributes:c().shape({url:c().string,name:c().string,position:c().string,imageId:c().number,imageUrl:c().string,imageAlt:c().string}),setAttributes:c().func.isRequired},p.propTypes={attributes:c().shape({url:c().string,name:c().string,position:c().string,imageId:c().number,imageUrl:c().string,imageAlt:c().string}),setAttributes:c().func.isRequired},(0,r.registerBlockType)("wp-app/our-team-block-team-member",{title:(0,o.__)("Team Member","our-team-block"),description:(0,o.__)("Our Team Member: Image, Name and Position","our-team-block"),icon:"admin-users",parent:["wp-app/our-team-block-team-list"],supports:{html:!1,reusable:!1},attributes:{url:{type:"string",source:"attribute",attribute:"href",selector:".our-team__url"},name:{type:"string",source:"html",selector:".our-team__name"},position:{type:"string",source:"html",selector:".our-team__position"},imageId:{type:"number"},imageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},imageAlt:{type:"string",source:"attribute",selector:"img",attribute:"alt",default:""}},edit:u,save:p}),(0,r.registerBlockType)("wp-app/our-team-block-team-list",{title:(0,o.__)("Team List","our-team-block"),description:(0,o.__)("Our Team List: Adds a team member to the team list.","our-team-block"),icon:"admin-users",parent:["wp-app/our-team-block-column"],supports:{html:!1,reusable:!1},edit:function(){return(0,m.jsx)("div",{...(0,s.useBlockProps)({className:"our-team__list"}),children:(0,m.jsx)(s.InnerBlocks,{allowedBlocks:["wp-app/our-team-block-team-member"],orientation:"horizontal",minItems:2,maxItems:4})})},save:function(){return(0,m.jsx)("div",{...s.useBlockProps.save({className:"our-team__list"}),children:(0,m.jsx)(s.InnerBlocks.Content,{})})}}),d.propTypes={attributes:c().shape({title:c().string,description:c().string}),setAttributes:c().func.isRequired},d.propTypes={attributes:c().shape({title:c().string,description:c().string})},(0,r.registerBlockType)("wp-app/our-team-block-text",{title:(0,o.__)("Text","our-team-block"),description:(0,o.__)("Our Team Text: Title and Description","our-team-block"),icon:"text",parent:["wp-app/our-team-block-column"],supports:{html:!1,reusable:!1},attributes:{title:{type:"string",source:"html",selector:"h2"},description:{type:"string",source:"html",selector:"p"}},edit:d,save:function({attributes:e}){const{title:t,description:a}=e;return(0,m.jsxs)("div",{...s.useBlockProps.save(),children:[(0,m.jsx)(s.RichText.Content,{tagName:"h2",className:"our-team__title",value:t}),(0,m.jsx)(s.RichText.Content,{tagName:"p",className:"our-team__desc",value:a})]})}}),(0,r.registerBlockType)("wp-app/our-team-block-column",{title:(0,o.__)("Columns","our-team-block"),description:(0,o.__)("Our Team Column","our-team-block"),icon:"grid-view",parent:["wp-app/our-team-block"],supports:{html:!1,reusable:!1},attributes:{columns:{type:"number",default:2}},edit:function(){return(0,m.jsx)("div",{...(0,s.useBlockProps)(),children:(0,m.jsx)(s.InnerBlocks,{allowedBlocks:["wp-app/our-team-block-text"]})})},save:function(){return(0,m.jsx)("div",{...s.useBlockProps.save({className:"our-team__col"}),children:(0,m.jsx)(s.InnerBlocks.Content,{})})}}),b.propTypes={attributes:c().shape({columns:c().number}),setAttributes:c().func.isRequired},_.propTypes={attributes:c().shape({columns:c().number})},(0,r.registerBlockType)("wp-app/our-team-block",{edit:b,save:_})},694:(e,t,a)=>{"use strict";var r=a(925);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,a,o,s,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return a.PropTypes=a,a}},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},a={};function r(e){var o=a[e];if(void 0!==o)return o.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,a,o,s)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,o,s]=e[m],l=!0,n=0;n<a.length;n++)(!1&s||i>=s)&&Object.keys(r.O).every((e=>r.O[e](a[n])))?a.splice(n--,1):(l=!1,s<i&&(i=s));if(l){e.splice(m--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[a,o,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var o,s,[i,l,n]=a,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(n)var m=n(r)}for(t&&t(a);c<i.length;c++)s=i[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(m)},a=globalThis.webpackChunkour_team_block=globalThis.webpackChunkour_team_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=r.O(void 0,[350],(()=>r(613)));o=r.O(o)})();