'use client';
"use strict";var e=require("tslib"),r=require("react"),t=require("@headlessui/react"),o=require("../../../lib/sizing.cjs"),a=require("../../../lib/spacing.cjs"),n=require("../../../lib/theme.cjs"),s=require("../../../lib/utils.cjs"),i=require("../../../lib/tremorTwMerge.cjs"),d=require("./TabList.cjs"),c=require("../../../contexts/BaseColorContext.cjs");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../../contexts/IndexContext.cjs"),require("../../../contexts/RootStylesContext.cjs"),require("../../../contexts/SelectedValueContext.cjs");var u=l(r);const m=s.makeClassName("Tab");function b(e,r){switch(e){case"line":return i.tremorTwMerge("ui-selected:border-b-2 hover:border-b-2 border-transparent transition duration-100","hover:border-tremor-content hover:text-tremor-content-emphasis text-tremor-content","dark:hover:border-dark-tremor-content-emphasis dark:hover:text-dark-tremor-content-emphasis dark:text-dark-tremor-content",r?s.getColorClassNames(r,n.colorPalette.border).selectBorderColor:"ui-selected:border-tremor-brand dark:ui-selected:border-dark-tremor-brand",a.spacing.px.negativeMarginBottom,a.spacing.sm.paddingX,a.spacing.sm.paddingY);case"solid":return i.tremorTwMerge("border-transparent border rounded-tremor-small","ui-selected:border-tremor-border ui-selected:bg-tremor-background ui-selected:shadow-tremor-input hover:text-tremor-content-emphasis text-tremor-content","dark:ui-selected:border-dark-tremor-border dark:ui-selected:bg-dark-tremor-background dark:ui-selected:shadow-dark-tremor-input dark:hover:text-dark-tremor-content-emphasis dark:text-dark-tremor-content",a.spacing.md.paddingX,a.spacing.twoXs.paddingY)}}const g=u.default.forwardRef(((l,g)=>{const{icon:x,className:p,children:h}=l,k=e.__rest(l,["icon","className","children"]),f=r.useContext(d.TabVariantContext),C=r.useContext(c),w=x;return u.default.createElement(t.Tab,Object.assign({ref:g,className:i.tremorTwMerge(m("root"),"flex whitespace-nowrap truncate max-w-xs outline-none focus:ring-0 text-tremor-default transition duration-100",C?s.getColorClassNames(C,n.colorPalette.text).selectTextColor:"ui-selected:text-tremor-brand dark:ui-selected:text-dark-tremor-brand",b(f,C),p)},k),w?u.default.createElement(w,{className:i.tremorTwMerge(m("icon"),"flex-none",o.sizing.lg.height,o.sizing.lg.width,a.spacing.sm.marginRight)}):null,u.default.createElement("span",null,h))}));g.displayName="Tab",module.exports=g;
