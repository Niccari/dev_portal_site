(this.webpackJsonpdgraph=this.webpackJsonpdgraph||[]).push([[0],{35:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},52:function(e,t){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(18),a=n.n(i),o=(n(35),n(15)),c=(n(42),n(43),n(1));var l=({onDraw:e})=>{const t=Object(r.useRef)(null);return Object(r.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.current;e&&(e=>{const t=Math.min(1e3*window.devicePixelRatio,4e3);e.width=t,e.height=t})(e)}),[]),Object(r.useEffect)((()=>{const n=null===t||void 0===t?void 0:t.current;if(!n)return;const r=n.getContext("2d");r&&e(r,n.width,n.height)})),Object(c.jsx)("canvas",{className:"canvas",ref:t})};const h="Rainbow",u="Fire",d="Green",g="Ice",p="Heat",b="Monochrome",j="Pastel",x="Ortho",m="Polar",v={equation:"2(sin(5.01x) + cos(4.99x))sin(10x)",axis:{xStep:.001,xMin:-Math.PI,xMax:Math.PI,yMin:-Math.PI,yMax:Math.PI},coordinate:m,chartAppearance:{draw:{pattern:h,colorStep:256/(2*Math.PI/.001)},thickness:5}},O=(()=>{const e=new URL(document.location.href).searchParams.get("setting")||"";try{return JSON.parse(atob(e))}catch(t){return v}})(),S="UpdateAll",w="UpdateSimulation",f="UpdateAppearance",M="None";var y=class{constructor(e,t,n){this.snapshots=void 0,this.drawer=void 0,this.toXRange=e=>{const{xMin:t,xMax:n,xStep:r}=e,s=Math.floor((n-t)/r)+1;return new Array(s).fill(0).map(((e,n)=>t+n*r))},this.findAction=(e,t)=>{if(!t)return S;const n=e.equation!==t.equation||e.axis!==t.axis,r=e.chartAppearance.draw!==t.chartAppearance.draw||e.axis!==t.axis;return n&&r?S:n?w:r?f:M},this.snapshots=e,this.drawer=t,this.update(n)}async update(e,t){const n=this.toXRange(e.axis),r=this.findAction(e,t);return this.snapshots.update(e.equation,n,e.chartAppearance.draw,r)}draw(e,t,n,r){const{coordinate:s,axis:i}=t,{thickness:a}=t.chartAppearance,o=this.snapshots.get(s);this.drawer.draw(e,o,i,a,n,r)}};var I=class{constructor(){this.rescalePoint=(e,t,n,r)=>{const{xMin:s,xMax:i,yMin:a,yMax:o}=t;return[(e.value.x-s)/(i-s)*n,(1-(e.value.y-a)/(o-a))*r]}}draw(e,t,n,r,s,i){e.clearRect(0,0,s,i);for(let a=0;a<t.length-1;a+=1){const o=t[a],c=t[a+1];e.lineWidth=r,e.strokeStyle=t[a].drawSetting.color,e.beginPath();const[l,h]=this.rescalePoint(o,n,s,i);e.moveTo(l,h);const[u,d]=this.rescalePoint(c,n,s,i);e.lineTo(u,d),e.closePath(),e.stroke()}}},P=n(57);var F=class{constructor(){this.create=async(e,t)=>Promise.all(t.map((async t=>{try{const n=Object(P.a)(e,{x:t});return"number"===typeof n?{x:t,y:n}:{x:t,y:NaN}}catch{return Promise.reject(new Error("Cannot eval"))}})))}};var T=class{constructor(e,t){this.simulator=void 0,this.visualizer=void 0,this.snapshotsOrtho=void 0,this.snapshotsPolar=void 0,this.getValues=async(e,t,n)=>n===S||n===w?this.simulator.create(e,t).catch((e=>Promise.reject(e))):this.snapshotsOrtho.map((e=>e.value)),this.getDrawSettings=async(e,t,n)=>n===S||n===f?this.visualizer.create(e,t):this.snapshotsOrtho.map((e=>e.drawSetting)),this.toSnapshots=(e,t,n)=>new Array(e.length).fill(0).map(((e,t)=>t)).map((r=>({x:e[r],value:t[r],drawSetting:n[r]}))),this.update=async(e,t,n,r)=>{if(r===M)return;const s=await this.getValues(e,t,r).catch((e=>Promise.reject(e))),i=await this.getDrawSettings(t,n,r);this.snapshotsOrtho=this.toSnapshots(t,s,i),this.snapshotsPolar=this.snapshotsOrtho.map((e=>({...e,value:{x:Math.abs(e.value.y)*Math.cos(e.value.x),y:Math.abs(e.value.y)*Math.sin(e.value.x)}})))},this.simulator=e,this.visualizer=t,this.snapshotsOrtho=[],this.snapshotsPolar=[]}get(e){return e===m?this.snapshotsPolar:this.snapshotsOrtho}};var A=class{constructor(e){this.config=void 0,this.colorStartIndex=void 0,this.colorIterateIndex=void 0,this.colorTable=[],this.gradientRainbows=[{position:0,red:255,green:0,blue:0},{position:43,red:255,green:255,blue:0},{position:85,red:0,green:255,blue:0},{position:128,red:0,green:255,blue:255},{position:171,red:0,green:0,blue:255},{position:223,red:255,green:0,blue:255},{position:255,red:255,green:0,blue:0}],this.gradientWarm=[{position:0,red:255,green:0,blue:0},{position:128,red:255,green:255,blue:0},{position:255,red:255,green:0,blue:0}],this.gradientForest=[{position:0,red:255,green:255,blue:0},{position:128,red:0,green:255,blue:0},{position:255,red:255,green:255,blue:0}],this.gradientCool=[{position:0,red:0,green:0,blue:255},{position:128,red:0,green:255,blue:255},{position:255,red:0,green:0,blue:255}],this.gradientHeat=[{position:0,red:255,green:255,blue:0},{position:43,red:255,green:0,blue:0},{position:85,red:0,green:0,blue:255},{position:128,red:0,green:0,blue:0},{position:171,red:0,green:0,blue:255},{position:223,red:255,green:0,blue:0},{position:255,red:255,green:255,blue:0}],this.gradientMonochrome=[{position:0,red:0,green:0,blue:0},{position:128,red:255,green:255,blue:255},{position:255,red:0,green:0,blue:0}],this.gradientPastel=[{position:0,red:255,green:154,blue:154},{position:85,red:255,green:255,blue:154},{position:170,red:154,green:255,blue:255},{position:255,red:255,green:154,blue:154}],this.colorToHex=e=>{const t=Math.round(e).toString(16);return 1===t.length?`0${t}`:t},this.config=e,this.colorStartIndex=0,this.colorIterateIndex=0;const t=(()=>{switch(e.pattern){default:return this.gradientRainbows;case u:return this.gradientWarm;case d:return this.gradientForest;case g:return this.gradientCool;case p:return this.gradientHeat;case b:return this.gradientMonochrome;case j:return this.gradientPastel}})();let n=1,r=t[0],s=t[1];for(let i=0;i<256;i+=1){const e=(i-r.position)/(s.position-r.position),a=r.red+e*(s.red-r.red),o=r.green+e*(s.green-r.green),c=r.blue+e*(s.blue-r.blue);this.colorTable.push({position:i,red:a,green:o,blue:c}),s.position===i&&(r=s,n+=1,s=t[n])}}fetchColor(e){const t=Math.floor(e),n=Math.ceil(e)!==this.colorTable.length-1?Math.ceil(e):0,r=e-t,s=1-r,i={red:Math.floor(r*this.colorTable[t].red+s*this.colorTable[n].red),green:Math.floor(r*this.colorTable[t].green+s*this.colorTable[n].green),blue:Math.floor(r*this.colorTable[t].blue+s*this.colorTable[n].blue)};return`#${this.colorToHex(i.red)}${this.colorToHex(i.green)}${this.colorToHex(i.blue)}`}next(){const e=this.fetchColor(Math.floor(this.colorIterateIndex));return this.colorIterateIndex=(this.colorIterateIndex+this.config.colorStep)%256,e}endIteration(){this.colorStartIndex=(this.colorStartIndex+this.config.colorStep)%256,this.colorIterateIndex=this.colorStartIndex}};const N=new class{constructor(){this.create=async(e,t)=>{const n=new A(t);return e.map((()=>({color:n.next()})))}}};var C=new y(new T(new F,N),new I,O);const q=()=>Object(o.b)(),R=o.c;var k=()=>{const e=R((e=>e.simulation.setting));return Object(c.jsx)(l,{onDraw:(t,n,r)=>{C.draw(t,e,n,r)}})},E=n(17),B=n(16);const H="Loading",U="Completed",$="Error",D={simulatingState:U,setting:O},J=Object(B.b)("simulation/simulateAsync",(async e=>{const{setting:t,prevSetting:n}=e;return await C.update(t,n).catch((e=>Promise.reject(e))),e.setting}));var L=Object(B.c)({name:"simulation",initialState:D,reducers:{},extraReducers:{[J.pending.toString()]:e=>({...e,simulatingState:H}),[J.rejected.toString()]:e=>({...e,simulatingState:$}),[J.fulfilled.toString()]:(e,t)=>({...e,setting:t.payload,simulatingState:U})}}).reducer;var V=({simulatingState:e})=>Object(c.jsxs)(c.Fragment,{children:[e===H&&Object(c.jsx)("span",{children:"\u23f0"}),e===$&&Object(c.jsx)("span",{children:"\u274c"}),e===U&&Object(c.jsx)("span",{children:"\u2705"})]});n(54);var z=({onSettingUpdate:e,simulatingState:t})=>Object(c.jsx)(E.c,{initialValues:D.setting,onSubmit:t=>{e(t)},validate:e=>{const t={};return 0===e.equation.length&&(t.equation="\u5f0f\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044"),e.chartAppearance.thickness<=0&&(t.equation="\u7dda\u306e\u592a\u3055\u306f0\u4ee5\u4e0a\u306b\u3057\u3066\u304f\u3060\u3055\u3044"),t},children:({values:e,handleChange:n,handleBlur:r,handleSubmit:s,isValid:i})=>Object(c.jsxs)(E.b,{onSubmit:s,className:"SettingFormFrame",children:[Object(c.jsxs)("div",{className:"SettingFormItem",children:[Object(c.jsxs)("label",{className:"SettingFormText",children:["f(x)=",Object(c.jsx)(E.a,{type:"text",name:"equation",on:!0,onChange:n,onBlur:r,value:e.equation,placeholder:"\u65b9\u7a0b\u5f0f\u3092\u5165\u308c\u308b",required:!0,className:"SettingFormEquation"})]}),Object(c.jsx)(V,{simulatingState:t})]}),Object(c.jsx)("div",{className:"SettingFormItem",children:Object(c.jsxs)("label",{className:"SettingFormText",children:["\u8272\u30d1\u30bf\u30fc\u30f3",Object(c.jsxs)("select",{name:"chartAppearance.draw.pattern",onChange:n,onBlur:r,value:e.chartAppearance.draw.pattern,children:[Object(c.jsx)("option",{value:h,children:"\u8679"}),Object(c.jsx)("option",{value:u,children:"\u708e"}),Object(c.jsx)("option",{value:d,children:"\u6728\u6f0f\u308c\u65e5"}),Object(c.jsx)("option",{value:g,children:"\u6c37\u7d50"}),Object(c.jsx)("option",{value:p,children:"\u71b1"}),Object(c.jsx)("option",{value:b,children:"\u30e2\u30ce\u30af\u30ed"}),Object(c.jsx)("option",{value:j,children:"\u30d1\u30b9\u30c6\u30eb"})]})]})}),Object(c.jsx)("div",{className:"SettingFormItem",children:Object(c.jsxs)("label",{className:"SettingFormText",children:["\u7dda\u306e\u592a\u3055",Object(c.jsx)(E.a,{type:"number",name:"chartAppearance.thickness",onChange:n,onBlur:r,value:e.chartAppearance.thickness})]})}),Object(c.jsx)("div",{className:"SettingFormItem",children:Object(c.jsxs)("label",{className:"SettingFormText",children:["\u5ea7\u6a19\u7cfb",Object(c.jsxs)("select",{name:"coordinate",onChange:n,onBlur:r,value:e.coordinate,children:[Object(c.jsx)("option",{value:x,children:"\u76f4\u4ea4\u5ea7\u6a19"}),Object(c.jsx)("option",{value:m,children:"\u6975\u5ea7\u6a19"})]})]})}),Object(c.jsx)("div",{className:"SettingFormItem",children:Object(c.jsx)("button",{type:"submit",disabled:!i,children:"\u8a2d\u5b9a\u3092\u66f4\u65b0\u3059\u308b"})})]})});var W=()=>{const e=q(),t=R((e=>e.simulation.setting)),n=R((e=>e.simulation.simulatingState));return Object(c.jsx)(z,{onSettingUpdate:n=>{e(J({setting:n,prevSetting:t}))},simulatingState:n})};var X=()=>{const e=R((e=>e.simulation.setting));return Object(r.useEffect)((()=>{const t=btoa(JSON.stringify(e)),n=`${window.location.pathname}?setting=${t}`;window.history.replaceState(null,"update setting",n)})),Object(c.jsx)("div",{})};var G=()=>{const e=q(),t=R((e=>e.simulation.setting));return Object(r.useEffect)((()=>{e(J({setting:t}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(W,{}),Object(c.jsx)(k,{}),Object(c.jsx)(X,{})]})};var K=()=>Object(c.jsx)(G,{});const Q=Object(B.a)({reducer:{simulation:L}});var Y=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((({getCLS:t,getFID:n,getFCP:r,getLCP:s,getTTFB:i})=>{t(e),n(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(o.a,{store:Q,children:Object(c.jsx)(K,{})})}),document.getElementById("root")),Y()}},[[55,1,2]]]);