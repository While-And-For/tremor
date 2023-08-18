'use client';
import{__rest as t}from"tslib";import e,{useState as a}from"react";import{ResponsiveContainer as o,LineChart as r,CartesianGrid as l,XAxis as i,YAxis as n,Tooltip as s,Legend as m,Line as c}from"recharts";import{constructCategoryColors as d,getYAxisDomain as u}from"../common/utils.js";import h from"../common/NoData.js";import k from"../common/ChartLegend.js";import p from"../common/ChartTooltip.js";import{BaseColors as f}from"../../../lib/constants.js";import{themeColorRange as v,colorPalette as y}from"../../../lib/theme.js";import{getColorClassNames as w,defaultValueFormatter as x}from"../../../lib/utils.js";import{tremorTwMerge as g}from"../../../lib/tremorTwMerge.js";const b=e.forwardRef(((b,D)=>{const{data:E=[],dot:N=!1,activeDot:A,categories:L=[],index:j,colors:T=v,valueFormatter:C=x,startEndOnly:V=!1,showXAxis:G=!0,showYAxis:F=!0,yAxisWidth:W=56,animationDuration:M=900,showAnimation:O=!0,showTooltip:K=!0,showLegend:S=!0,showGridLines:X=!0,autoMinValue:Y=!1,curveType:z="linear",minValue:R,maxValue:q,connectNulls:B=!1,allowDecimals:H=!0,noDataText:I,className:J}=b,P=t(b,["data","dot","activeDot","categories","index","colors","valueFormatter","startEndOnly","showXAxis","showYAxis","yAxisWidth","animationDuration","showAnimation","showTooltip","showLegend","showGridLines","autoMinValue","curveType","minValue","maxValue","connectNulls","allowDecimals","noDataText","className"]),[Q,U]=a(60),Z=d(L,T),$=u(Y,R,q);return e.createElement("div",Object.assign({ref:D,className:g("w-full h-80",J)},P),e.createElement(o,{className:"h-full w-full"},(null==E?void 0:E.length)?e.createElement(r,{data:E},X?e.createElement(l,{className:g("stroke-1","stroke-tremor-content-subtle","dark:stroke-dark-tremor-content-subtle"),strokeDasharray:"3 3",horizontal:!0,vertical:!1}):null,e.createElement(i,{hide:!G,dataKey:j,interval:"preserveStartEnd",tick:{transform:"translate(0, 6)"},ticks:V?[E[0][j],E[E.length-1][j]]:void 0,fill:"",stroke:"",className:g("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickLine:!1,axisLine:!1,padding:{left:10,right:10},minTickGap:5}),e.createElement(n,{width:W,hide:!F,axisLine:!1,tickLine:!1,type:"number",domain:$,tick:{transform:"translate(-3, 0)"},fill:"",stroke:"",className:g("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickFormatter:C,allowDecimals:H}),K?e.createElement(s,{wrapperStyle:{outline:"none"},isAnimationActive:!1,cursor:{stroke:"#d1d5db",strokeWidth:1},content:({active:t,payload:a,label:o})=>e.createElement(p,{active:t,payload:a,label:o,valueFormatter:C,categoryColors:Z}),position:{y:0}}):null,S?e.createElement(m,{verticalAlign:"top",height:Q,content:({payload:t})=>k({payload:t},Z,U)}):null,L.map((t=>{var a,o;return e.createElement(c,{className:w(null!==(a=Z.get(t))&&void 0!==a?a:f.Gray,y.text).strokeColor,activeDot:null!=A?A:{className:g("stroke-tremor-background dark:stroke-dark-tremor-background",w(null!==(o=Z.get(t))&&void 0!==o?o:f.Gray,y.text).fillColor)},dot:N,key:t,name:t,type:z,dataKey:t,stroke:"",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:O,animationDuration:M,connectNulls:B})}))):e.createElement(h,{noDataText:I})))}));b.displayName="LineChart";export{b as default};
