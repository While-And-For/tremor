'use client';
import{__rest as e}from"tslib";import t,{useState as a}from"react";import{ResponsiveContainer as r,LineChart as o,CartesianGrid as n,XAxis as l,YAxis as i,Tooltip as s,Legend as m,Line as c}from"recharts";import{constructCategoryColors as d,getYAxisDomain as u}from"../common/utils.js";import p from"../common/NoData.js";import h from"../common/ChartLegend.js";import{ChartTooltipFrame as f}from"../common/ChartTooltip.js";import{BaseColors as k}from"../../../lib/constants.js";import{spacing as g}from"../../../lib/spacing.js";import{themeColorRange as y,colorPalette as x}from"../../../lib/theme.js";import{getColorClassNames as b,defaultValueFormatter as w}from"../../../lib/utils.js";import{tremorTwMerge as v}from"../../../lib/tremorTwMerge.js";function E(e){return"Aug 2022"===e?t.createElement("ul",{className:"list-disc max-w-[500px]"},t.createElement("li",{className:"text-sm font-light text-neutral"},"Ev Summit: Hope that now is time for the EV market boom in Australia. Consumers say yes, the numbers add up, Industry is largely on board and labour has no policy hang-ups (The Guardian)"),t.createElement("li",{className:"text-sm font-light text-neutral"},"Ev Summit: Hope that now is time for the EV market boom in Australia. Consumers say yes, the numbers add up, Industry is largely on board and labour has no policy hang-ups (The Guardian)")):null}const N=t.forwardRef(((N,A)=>{const{data:D=[],dot:L=!1,activeDot:T,categories:j=[],index:C,colors:V=y,valueFormatter:G=w,startEndOnly:X=!1,showXAxis:S=!0,showYAxis:Y=!0,yAxisWidth:F=56,animationDuration:M=900,showAnimation:O=!0,showTooltip:W=!0,showLegend:H=!0,showGridLines:I=!0,autoMinValue:K=!1,curveType:z="linear",minValue:R,maxValue:q,connectNulls:B=!1,allowDecimals:J=!0,noDataText:P,className:Q}=N,U=e(N,["data","dot","activeDot","categories","index","colors","valueFormatter","startEndOnly","showXAxis","showYAxis","yAxisWidth","animationDuration","showAnimation","showTooltip","showLegend","showGridLines","autoMinValue","curveType","minValue","maxValue","connectNulls","allowDecimals","noDataText","className"]),[Z,$]=a(60),_=d(j,V),ee=u(K,R,q);return t.createElement("div",Object.assign({ref:A,className:v("w-full h-80",Q)},U),t.createElement(r,{className:"h-full w-full"},(null==D?void 0:D.length)?t.createElement(o,{data:D},I?t.createElement(n,{className:v("stroke-1","stroke-tremor-content-subtle","dark:stroke-dark-tremor-content-subtle"),strokeDasharray:"3 3",horizontal:!0,vertical:!1}):null,t.createElement(l,{hide:!S,dataKey:C,interval:"preserveStartEnd",tick:{transform:"translate(0, 6)"},ticks:X?[D[0][C],D[D.length-1][C]]:void 0,fill:"",stroke:"",className:v("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickLine:!1,axisLine:!1,padding:{left:10,right:10},minTickGap:5}),t.createElement(i,{width:F,hide:!Y,axisLine:!1,tickLine:!1,type:"number",domain:ee,tick:{transform:"translate(-3, 0)"},fill:"",stroke:"",className:v("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickFormatter:G,allowDecimals:J}),W?t.createElement(s,{wrapperStyle:{outline:"none"},isAnimationActive:!1,cursor:!1,formatter:(...e)=>{if(console.log(e),"Aug 2022"!==e[0])return null},content:({active:e,payload:a,label:r})=>!!E(r)&&t.createElement(f,null,t.createElement("div",{className:v("border-tremor-border","dark:border-dark-tremor-border",g.twoXl.paddingX,g.sm.paddingY)},t.createElement("p",{className:v("font-medium","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},r),t.createElement("div",{className:v(g.twoXl.paddingX,g.sm.paddingY,"space-y-1")},E(r)))),position:{y:0}}):null,H?t.createElement(m,{verticalAlign:"top",height:Z,content:({payload:e})=>h({payload:e},_,$)}):null,j.map((e=>{var a,r;return t.createElement(c,{className:b(null!==(a=_.get(e))&&void 0!==a?a:k.Gray,x.text).strokeColor,dot:L,activeDot:null!=T?T:{className:v("stroke-tremor-background dark:stroke-dark-tremor-background",b(null!==(r=_.get(e))&&void 0!==r?r:k.Gray,x.text).fillColor)},key:e,name:e,type:z,dataKey:e,stroke:"",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:O,animationDuration:M,connectNulls:B})}))):t.createElement(p,{noDataText:P})))}));N.displayName="LineChart";export{N as default};
