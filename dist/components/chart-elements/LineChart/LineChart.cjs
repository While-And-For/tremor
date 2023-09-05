'use client';
"use strict";var e=require("tslib"),t=require("react"),a=require("recharts"),r=require("../common/utils.cjs"),o=require("../common/NoData.cjs"),l=require("../common/ChartLegend.cjs"),i=require("../common/ChartTooltip.cjs"),n=require("../../../lib/constants.cjs"),s=require("../../../lib/theme.cjs"),c=require("../../../lib/utils.cjs"),m=require("../../../lib/tremorTwMerge.cjs");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=u(t);const f=d.default.forwardRef(((u,f)=>{const{data:h=[],dot:k=!1,categories:g=[],index:w,colors:p=s.themeColorRange,valueFormatter:y=c.defaultValueFormatter,startEndOnly:v=!1,showXAxis:x=!0,showYAxis:C=!0,yAxisWidth:b=56,animationDuration:A=900,showAnimation:N=!0,showTooltip:T=!0,showLegend:L=!0,showGridLines:E=!0,autoMinValue:D=!1,curveType:j="linear",minValue:q,maxValue:M,connectNulls:V=!1,allowDecimals:G=!0,noDataText:F,className:Y}=u,O=e.__rest(u,["data","dot","categories","index","colors","valueFormatter","startEndOnly","showXAxis","showYAxis","yAxisWidth","animationDuration","showAnimation","showTooltip","showLegend","showGridLines","autoMinValue","curveType","minValue","maxValue","connectNulls","allowDecimals","noDataText","className"]),[R,S]=t.useState(60),W=r.constructCategoryColors(g,p),X=r.getYAxisDomain(D,q,M);return d.default.createElement("div",Object.assign({ref:f,className:m.tremorTwMerge("w-full h-80",Y)},O),d.default.createElement(a.ResponsiveContainer,{className:"h-full w-full"},(null==h?void 0:h.length)?d.default.createElement(a.LineChart,{data:h},E?d.default.createElement(a.CartesianGrid,{className:m.tremorTwMerge("stroke-1","stroke-tremor-content-subtle","dark:stroke-dark-tremor-content-subtle"),strokeDasharray:"3 3",horizontal:!0,vertical:!1}):null,d.default.createElement(a.XAxis,{hide:!x,dataKey:w,interval:"preserveStartEnd",tick:{transform:"translate(0, 6)"},ticks:v?[h[0][w],h[h.length-1][w]]:void 0,fill:"",stroke:"",className:m.tremorTwMerge("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickLine:!1,axisLine:!1,padding:{left:10,right:10},minTickGap:5}),d.default.createElement(a.YAxis,{width:b,hide:!C,axisLine:!1,tickLine:!1,type:"number",domain:X,tick:{transform:"translate(-3, 0)"},fill:"",stroke:"",className:m.tremorTwMerge("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickFormatter:y,allowDecimals:G}),T?d.default.createElement(a.Tooltip,{wrapperStyle:{outline:"none"},isAnimationActive:!1,cursor:!1,content:({active:e,payload:t,label:a})=>d.default.createElement(i.default,{active:e,payload:t,label:a,valueFormatter:y,categoryColors:W}),position:{y:0}}):null,L?d.default.createElement(a.Legend,{verticalAlign:"top",height:R,content:({payload:e})=>l({payload:e},W,S)}):null,g.map((e=>{var t,r;return d.default.createElement(a.Line,{className:c.getColorClassNames(null!==(t=W.get(e))&&void 0!==t?t:n.BaseColors.Gray,s.colorPalette.text).strokeColor,dot:k,activeDot:{className:m.tremorTwMerge("stroke-tremor-background dark:stroke-dark-tremor-background",c.getColorClassNames(null!==(r=W.get(e))&&void 0!==r?r:n.BaseColors.Gray,s.colorPalette.text).fillColor)},key:e,name:e,type:j,dataKey:e,stroke:"",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:N,animationDuration:A,connectNulls:V})}))):d.default.createElement(o,{noDataText:F})))}));f.displayName="LineChart",module.exports=f;
