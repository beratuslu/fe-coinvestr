(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ff61aa4"],{"026d":function(e,t,s){"use strict";var a=s("7a23"),o={class:"card-body d-flex flex-column p-0"},r={class:"flex-grow-1 card-p pb-0"},n={class:"d-flex flex-stack flex-wrap"},i=Object(a["createElementVNode"])("div",{class:"me-2"},[Object(a["createElementVNode"])("a",{href:"#",class:"text-dark text-hover-primary fw-bolder fs-3"},"Generate Reports"),Object(a["createElementVNode"])("div",{class:"text-muted fs-7 fw-bold"}," Finance and accounting reports ")],-1);function c(e,t,s,c,l,d){var m=Object(a["resolveComponent"])("apexchart");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])([e.widgetClasses,"card"])},[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",n,[i,Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["text-"+e.chartColor,"fw-bolder fs-3"])}," $24,500 ",2)])]),Object(a["createVNode"])(m,{class:"mixed-widget-7-chart card-rounded-bottom",options:e.chartOptions,series:e.series,type:"area",height:e.chartHeight},null,8,["options","series","height"])])],2)}var l=s("c14b"),d=Object(a["defineComponent"])({name:"widget-7",props:{widgetClasses:String,chartColor:String,chartHeight:String},setup:function(e){var t=Object(a["ref"])(e.chartColor),s=Object(l["i"])("--bs-gray-800"),o=Object(l["i"])("--bs-gray-300"),r=Object(l["i"])("--bs-"+t.value),n=Object(l["i"])("--bs-light-"+t.value),i={series:[{name:"Net Profit",data:[15,25,15,40,20,50]}],chart:{fontFamily:"inherit",type:"area",height:e.chartHeight,toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:3,colors:[r]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:s,fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:o,width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:{min:0,max:60,labels:{show:!1,style:{colors:s,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" thousands"}}},colors:[n],markers:{colors:[n],strokeColor:[r],strokeWidth:3}},c=[{name:"Net Profit",data:[15,25,15,40,20,50]}];return{chartOptions:i,series:c}}}),m=s("6b0d"),p=s.n(m);const b=p()(d,[["render",c]]);t["a"]=b},"3c16":function(e,t,s){"use strict";var a=s("7a23"),o={class:"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold py-4 w-250px fs-6","data-kt-menu":"true"},r=Object(a["createStaticVNode"])('<div class="menu-item px-5"><div class="menu-content text-muted pb-2 px-5 fs-7 text-uppercase"> Payments </div></div><div class="menu-item px-5"><a href="#" class="menu-link px-5"> Create invoice </a></div><div class="menu-item px-5"><a href="#" class="menu-link flex-stack px-5"> Create payments <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a></div><div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start"><a href="#" class="menu-link px-5"><span class="menu-title">Subscription</span><span class="menu-arrow"></span></a><div class="menu-sub menu-sub-dropdown w-175px py-4"><div class="menu-item px-3"><a href="#" class="menu-link px-5"> Apps </a></div><div class="menu-item px-3"><a href="#" class="menu-link px-5"> Billing </a></div><div class="menu-item px-3"><a href="#" class="menu-link px-5"> Statements </a></div><div class="separator my-2"></div><div class="menu-item px-3"><div class="menu-content px-3"><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input w-30px h-20px" type="checkbox" value="" name="notifications" checked id="kt_user_menu_notifications"><span class="form-check-label text-muted fs-6" for="kt_user_menu_notifications"> Notifications </span></label></div></div></div></div><div class="separator my-3"></div><div class="menu-item px-5"><div class="menu-content text-muted pb-2 px-5 fs-7 text-uppercase"> Account </div></div><div class="menu-item px-5"><a href="#" class="menu-link px-5"> Reports </a></div><div class="menu-item px-5 my-1"><a href="#" class="menu-link px-5"> Account Settings </a></div><div class="menu-item px-5"><a href="#" class="menu-link text-danger px-5"> Delete customer </a></div>',9),n=[r];function i(e,t,s,r,i,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,n)}var c=Object(a["defineComponent"])({name:"dropdown-3",components:{}}),l=s("6b0d"),d=s.n(l);const m=d()(c,[["render",i]]);t["a"]=m},9501:function(e,t,s){"use strict";var a=s("7a23"),o={class:"card-body p-0 d-flex justify-content-between flex-column overflow-hidden"},r={class:"d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3"},n=Object(a["createElementVNode"])("div",{class:"me-2"},[Object(a["createElementVNode"])("span",{class:"fw-bolder text-gray-800 d-block fs-3"},"Sales"),Object(a["createElementVNode"])("span",{class:"text-gray-400 fw-bold"},"Oct 8 - Oct 26 21")],-1);function i(e,t,s,i,c,l){var d=Object(a["resolveComponent"])("apexchart");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])([e.widgetClasses,"card"])},[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[n,Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["fw-bolder fs-3","text-"+e.chartColor])},"$15,300",2)]),Object(a["createVNode"])(d,{class:"mixed-widget-10-chart",options:e.chartOptions,series:e.series,type:"bar",height:e.chartHeight},null,8,["options","series","height"])])],2)}var c=s("c14b"),l=Object(a["defineComponent"])({name:"widget-12",props:{widgetClasses:String,chartColor:String,chartHeight:String},setup:function(e){var t=Object(a["ref"])(e.chartColor),s=Object(c["i"])("--bs-gray-500"),o=Object(c["i"])("--bs-gray-200"),r=Object(c["i"])("--bs-gray-300"),n=Object(c["i"])("--bs-"+t.value),i={chart:{fontFamily:"inherit",type:"bar",height:e.chartHeight,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:["50%"],endingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:s,fontSize:"12px"}}},yaxis:{y:0,offsetX:0,offsetY:0,labels:{style:{colors:s,fontSize:"12px"}}},fill:{type:"solid"},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" revenue"}}},colors:[n,r],grid:{padding:{top:10},borderColor:o,strokeDashArray:4,yaxis:{lines:{show:!0}}}},l=[{name:"Net Profit",data:[50,60,70,80,60,50,70,60]},{name:"Revenue",data:[50,60,70,80,60,50,70,60]}];return{chartOptions:i,series:l}}}),d=s("6b0d"),m=s.n(d);const p=m()(l,[["render",i]]);t["a"]=p},"9a4d":function(e,t,s){"use strict";var a=s("7a23"),o={class:"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px","data-kt-menu":"true"},r=Object(a["createStaticVNode"])('<div class="menu-item px-3"><div class="menu-content fs-6 text-dark fw-bolder px-3 py-4"> Quick Actions </div></div><div class="separator mb-3 opacity-75"></div><div class="menu-item px-3"><a href="#" class="menu-link px-3"> New Ticket </a></div><div class="menu-item px-3"><a href="#" class="menu-link px-3"> New Customer </a></div><div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top"><a href="#" class="menu-link px-3"><span class="menu-title">New Group</span><span class="menu-arrow"></span></a><div class="menu-sub menu-sub-dropdown w-175px py-4"><div class="menu-item px-3"><a href="#" class="menu-link px-3"> Admin Group </a></div><div class="menu-item px-3"><a href="#" class="menu-link px-3"> Staff Group </a></div><div class="menu-item px-3"><a href="#" class="menu-link px-3"> Member Group </a></div></div></div><div class="menu-item px-3"><a href="#" class="menu-link px-3"> New Contact </a></div><div class="separator mt-3 opacity-75"></div><div class="menu-item px-3"><div class="menu-content px-3 py-3"><a class="btn btn-primary btn-sm px-4" href="#"> Generate Reports </a></div></div>',8),n=[r];function i(e,t,s,r,i,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,n)}var c=Object(a["defineComponent"])({name:"dropdown-2",components:{}}),l=s("6b0d"),d=s.n(l);const m=d()(c,[["render",i]]);t["a"]=m},a518:function(e,t,s){"use strict";var a=s("7a23"),o={class:"card-header border-0 py-5"},r=Object(a["createElementVNode"])("h3",{class:"card-title align-items-start flex-column"},[Object(a["createElementVNode"])("span",{class:"card-label fw-bolder fs-3 mb-1"},"Trends"),Object(a["createElementVNode"])("span",{class:"text-muted fw-bold fs-7"},"Latest trends")],-1),n={class:"card-toolbar"},i={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},c={class:"svg-icon svg-icon-2"},l={class:"card-body d-flex flex-column"},d=Object(a["createStaticVNode"])('<div class="mt-5"><div class="d-flex flex-stack mb-5"><div class="d-flex align-items-center me-2"><div class="symbol symbol-50px me-3"><div class="symbol-label bg-light"><img src="media/svg/brand-logos/plurk.svg" alt="" class="h-50"></div></div><div><a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Top Authors</a><div class="fs-7 text-muted fw-bold mt-1"> Ricky Hunt, Sandra Trepp </div></div></div><div class="badge badge-light fw-bold py-4 px-3">+82$</div></div><div class="d-flex flex-stack mb-5"><div class="d-flex align-items-center me-2"><div class="symbol symbol-50px me-3"><div class="symbol-label bg-light"><img src="media/svg/brand-logos/figma-1.svg" alt="" class="h-50"></div></div><div><a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Top Sales</a><div class="fs-7 text-muted fw-bold mt-1">PitStop Emails</div></div></div><div class="badge badge-light fw-bold py-4 px-3">+82$</div></div><div class="d-flex flex-stack"><div class="d-flex align-items-center me-2"><div class="symbol symbol-50px me-3"><div class="symbol-label bg-light"><img src="media/svg/brand-logos/vimeo.svg" alt="" class="h-50"></div></div><div class="py-1"><a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bolder">Top Engagement</a><div class="fs-7 text-muted fw-bold mt-1">KT.com</div></div></div><div class="badge badge-light fw-bold py-4 px-3">+82$</div></div></div>',1);function m(e,t,s,m,p,b){var u=Object(a["resolveComponent"])("inline-svg"),v=Object(a["resolveComponent"])("Dropdown3"),f=Object(a["resolveComponent"])("apexchart");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])([e.widgetClasses,"card"])},[Object(a["createElementVNode"])("div",o,[r,Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("button",i,[Object(a["createElementVNode"])("span",c,[Object(a["createVNode"])(u,{src:"media/icons/duotune/general/gen024.svg"})])]),Object(a["createVNode"])(v)])]),Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(f,{class:"mixed-widget-5-chart card-rounded-top",options:e.chartOptions,series:e.series,type:"area",height:e.chartHeight},null,8,["options","series","height"]),d])],2)}var p=s("3c16"),b=s("c14b"),u=Object(a["defineComponent"])({name:"widget-7",components:{Dropdown3:p["a"]},props:{widgetClasses:String,chartColor:String,chartHeight:String},setup:function(e){var t=Object(a["ref"])(e.chartColor),s=Object(b["i"])("--bs-gray-800"),o=Object(b["i"])("--bs-gray-300"),r=Object(b["i"])("--bs-"+t.value),n=Object(b["i"])("--bs-light-"+t.value),i={chart:{fontFamily:"inherit",type:"area",height:e.chartHeight,toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"gradient",opacity:1,gradient:{type:"vertical",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:.375,stops:[25,50,100],colorStops:[]}},stroke:{curve:"smooth",show:!0,width:3,colors:[r]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:s,fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:o,width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:{min:0,max:65,labels:{show:!1,style:{colors:s,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" thousands"}}},colors:[n],markers:{colors:[n],strokeColor:[r],strokeWidth:3}},c=[{name:"Net Profit",data:[30,30,60,25,25,40]}];return{chartOptions:i,series:c}}}),v=s("6b0d"),f=s.n(v);const h=f()(u,[["render",m]]);t["a"]=h},eca3:function(e,t,s){"use strict";var a=s("7a23"),o={class:"card card-xxl-stretch"},r=Object(a["createElementVNode"])("h3",{class:"card-title fw-bolder text-white"},"Sales Statistics",-1),n={class:"card-toolbar"},i={class:"svg-icon svg-icon-2"},c={class:"card-body p-0"},l={class:"card-p mt-n20 position-relative"},d={class:"row m-0"},m={class:"col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7"},p={class:"svg-icon svg-icon-3x svg-icon-warning d-block my-2"},b=Object(a["createElementVNode"])("a",{href:"#",class:"text-warning fw-bold fs-6"}," Weekly Sales ",-1),u={class:"col bg-light-primary px-6 py-8 rounded-2 mb-7"},v={class:"svg-icon svg-icon-3x svg-icon-primary d-block my-2"},f=Object(a["createElementVNode"])("a",{href:"#",class:"text-primary fw-bold fs-6"}," New Users ",-1),h={class:"row m-0"},g={class:"col bg-light-danger px-6 py-8 rounded-2 me-7"},x={class:"svg-icon svg-icon-3x svg-icon-danger d-block my-2"},y=Object(a["createElementVNode"])("a",{href:"#",class:"text-danger fw-bold fs-6 mt-2"}," Item Orders ",-1),w={class:"col bg-light-success px-6 py-8 rounded-2"},O={class:"svg-icon svg-icon-3x svg-icon-success d-block my-2"},j=Object(a["createElementVNode"])("a",{href:"#",class:"text-success fw-bold fs-6 mt-2"}," Bug Reports ",-1);function k(e,t,s,k,N,V){var C=Object(a["resolveComponent"])("inline-svg"),E=Object(a["resolveComponent"])("Dropdown3"),S=Object(a["resolveComponent"])("apexchart");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["bg-"+e.widgetColor,"card-header border-0 py-5"])},[r,Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("button",{type:"button",class:Object(a["normalizeClass"])(["btn-active-color-"+e.widgetColor,"btn btn-sm btn-icon btn-color-white btn-active-white border-0 me-n3"]),"data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},[Object(a["createElementVNode"])("span",i,[Object(a["createVNode"])(C,{src:"media/icons/duotune/general/gen024.svg"})])],2),Object(a["createVNode"])(E)])],2),Object(a["createElementVNode"])("div",c,[Object(a["createVNode"])(S,{class:Object(a["normalizeClass"])(["bg-"+e.widgetColor,"mixed-widget-2-chart card-rounded-bottom"]),options:e.chartOptions,series:e.series,height:"200",type:"area"},null,8,["class","options","series"]),Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("span",p,[Object(a["createVNode"])(C,{src:"media/icons/duotune/general/gen032.svg"})]),b]),Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("span",v,[Object(a["createVNode"])(C,{src:"media/icons/duotune/arrows/arr075.svg"})]),f])]),Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("span",x,[Object(a["createVNode"])(C,{src:"media/icons/duotune/abstract/abs027.svg"})]),y]),Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("span",O,[Object(a["createVNode"])(C,{src:"media/icons/duotune/communication/com010.svg"})]),j])])])])])}var N=s("3c16"),V=s("3bfd"),C=s("c14b"),E=Object(a["defineComponent"])({name:"widget-1",components:{Dropdown3:N["a"]},props:{widgetClasses:String,widgetColor:String,strokeColor:String},setup:function(e){var t=Object(C["i"])("--bs-gray-500"),s=Object(C["i"])("--bs-gray-200"),o=Object(C["i"])("--bs-"+e.widgetColor),r=Object(a["ref"])(e.strokeColor),n={chart:{fontFamily:"inherit",type:"area",toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:5,left:0,blur:3,color:r.value,opacity:.5}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:0},stroke:{curve:"smooth",show:!0,width:3,colors:[r.value]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:t,fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:s,width:1,dashArray:3}}},yaxis:{min:0,max:80,labels:{show:!1,style:{colors:t,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" thousands"}},marker:{show:!1}},markers:{colors:[o],strokeColor:[r.value],strokeWidth:3}},i=[{name:"Net Profit",data:[30,45,32,70,40,40,40]}];return Object(a["onMounted"])((function(){V["a"].reinitialization()})),{series:i,chartOptions:n}}}),S=s("6b0d"),z=s.n(S);const B=z()(E,[["render",k]]);t["a"]=B}}]);
//# sourceMappingURL=chunk-3ff61aa4.e703f5fb.js.map