'use client';
"use strict";var e=require("tslib"),t=require("react"),a=require("recharts"),r=require("../common/utils.cjs"),o=require("../common/NoData.cjs"),l=require("../common/ChartLegend.cjs"),i=require("../common/ChartTooltip.cjs"),n=require("../../../lib/constants.cjs"),s=require("../../../lib/theme.cjs"),c=require("../../../lib/utils.cjs"),m=require("../../../lib/tremorTwMerge.cjs");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=u(t);const h=d.default.forwardRef(((u,h)=>{const{data:f=[],categories:k=[],index:g,colors:w=s.themeColorRange,valueFormatter:p=c.defaultValueFormatter,startEndOnly:y=!1,showXAxis:v=!0,showYAxis:x=!0,yAxisWidth:C=56,animationDuration:b=900,showAnimation:A=!0,showTooltip:N=!0,showLegend:T=!0,showGridLines:L=!0,autoMinValue:E=!1,curveType:D="linear",minValue:j,maxValue:q,connectNulls:M=!1,allowDecimals:V=!0,noDataText:G,className:F}=u,W=e.__rest(u,["data","categories","index","colors","valueFormatter","startEndOnly","showXAxis","showYAxis","yAxisWidth","animationDuration","showAnimation","showTooltip","showLegend","showGridLines","autoMinValue","curveType","minValue","maxValue","connectNulls","allowDecimals","noDataText","className"]),[Y,O]=t.useState(60),R=r.constructCategoryColors(k,w),S=r.getYAxisDomain(E,j,q);return d.default.createElement("div",Object.assign({ref:h,className:m.tremorTwMerge("w-full h-80",F)},W),d.default.createElement(a.ResponsiveContainer,{className:"h-full w-full"},(null==f?void 0:f.length)?d.default.createElement(a.LineChart,{data:f},L?d.default.createElement(a.CartesianGrid,{className:m.tremorTwMerge("stroke-1","stroke-tremor-content-subtle","dark:stroke-dark-tremor-content-subtle"),strokeDasharray:"3 3",horizontal:!0,vertical:!1}):null,d.default.createElement(a.XAxis,{hide:!v,dataKey:g,interval:"preserveStartEnd",tick:{transform:"translate(0, 6)"},ticks:y?[f[0][g],f[f.length-1][g]]:void 0,fill:"",stroke:"",className:m.tremorTwMerge("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickLine:!1,axisLine:!1,padding:{left:10,right:10},minTickGap:5}),d.default.createElement(a.YAxis,{width:C,hide:!x,axisLine:!1,tickLine:!1,type:"number",domain:S,tick:{transform:"translate(-3, 0)"},fill:"",stroke:"",className:m.tremorTwMerge("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickFormatter:p,allowDecimals:V}),N?d.default.createElement(a.Tooltip,{wrapperStyle:{outline:"none"},isAnimationActive:!1,cursor:{stroke:"#d1d5db",strokeWidth:1},content:({active:e,payload:t,label:a})=>d.default.createElement(i.default,{active:e,payload:t,label:a,valueFormatter:p,categoryColors:R}),position:{y:0}}):null,T?d.default.createElement(a.Legend,{verticalAlign:"top",height:Y,content:({payload:e})=>l({payload:e},R,O)}):null,k.map((e=>{var t,r;return d.default.createElement(a.Line,{className:c.getColorClassNames(null!==(t=R.get(e))&&void 0!==t?t:n.BaseColors.Gray,s.colorPalette.text).strokeColor,activeDot:{className:m.tremorTwMerge("stroke-tremor-background dark:stroke-dark-tremor-background",c.getColorClassNames(null!==(r=R.get(e))&&void 0!==r?r:n.BaseColors.Gray,s.colorPalette.text).fillColor)},dot:!1,key:e,name:e,type:D,dataKey:e,stroke:"",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:A,animationDuration:b,connectNulls:M})}))):d.default.createElement(o,{noDataText:G})))}));h.displayName="LineChart",module.exports=h;
