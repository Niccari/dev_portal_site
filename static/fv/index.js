!function(){"use strict";var e={240:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(666)),r=i(s(113)),o=s(132),a=i(s(821));t.default=class{constructor(){const e=new r.default,t=new n.default(e),s=new a.default(e,t);new o.View(s)}}},607:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),new(i(s(240)).default)},786:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{x=123456789;y=362436069;z=521288629;seed;constructor(e){this.seed=e}generate=()=>{const e=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.seed,this.seed=this.seed^this.seed>>>19^e^e>>>8,this.seed/2**32}}},491:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(833));t.default=class{chart;colorGenerator;constructor(e){this.chart=e,this.colorGenerator=new n.default(this.chart.color)}reset(){this.setBasePoints(),this.setOrders()}getChart(){return this.chart}pointLength(){return this.chart.complexity}setBasePoints(){const{chart:e}=this;e.basePoints=[];const t=this.pointLength();for(let s=0;s<t;s+=1){const i=2*Math.PI*s/t,n=.1*Math.sin(i),r=.1*Math.cos(i);e.basePoints[s]={x:n,y:r}}}setOrders(){const{chart:e}=this,t=this.pointLength();for(let s=0;s<t;s+=1)e.orders.push({link:[s,(s+1)%t]})}simulate(){const{chart:e}=this,t=this.pointLength();for(let s=0;s<t;s+=1){const t=e.basePoints[s].x*e.scale.w,i=e.basePoints[s].y*e.scale.h,n=Math.sin(e.rotation.angle),r=Math.cos(e.rotation.angle);e.points[s]={x:e.center.x+t*r-i*n,y:e.center.y+t*n+i*r}}e.rotation.angle+=e.rotation.speed,e.rotation.angle>Math.PI&&(e.rotation.angle-=2*Math.PI),e.rotation.angle<-Math.PI&&(e.rotation.angle+=2*Math.PI);for(let t=0;t<e.orders.length;t+=1)e.colors[t]=this.colorGenerator.next();this.colorGenerator.endIteration()}}},263:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(491)),r=i(s(786));class o extends n.default{lengthRandom;angleRandom;constructor(e){super(e),this.lengthRandom=new r.default(e.randomizer?.size?.seed||-1),this.angleRandom=new r.default(e.randomizer?.angle?.seed||-1),this.chart.complexity=e.complexity<2?2:e.complexity>10?10:e.complexity}pointLength(){const{complexity:e}=this.chart;return 2**(e+1)}setBasePoints(){const{chart:e}=this;e.basePoints[0]={x:0,y:-.1},e.basePoints[1]={x:0,y:0},this.divideBasePoints(1,.85,45*Math.PI/180)}divideBasePoints(e,t,s){const i=(this.chart.randomizer?.size?.amplify||0)*this.lengthRandom.generate(),n=(this.chart.randomizer?.angle?.amplify||0)*this.angleRandom.generate(),r=t*(i+(this.chart.mutation?.size||1)),o=s*(n+(this.chart.mutation?.angle||1));if(e>=Math.floor(this.pointLength()/2))return;const a=this.chart.basePoints[Math.floor(e/2)],l=this.chart.basePoints[e],h=l.x-a.x,c=l.y-a.y,d=Math.sin(o),u=Math.cos(o);this.chart.basePoints[2*e]={x:l.x+r*(u*h-d*c),y:l.y+r*(d*h+u*c)},this.chart.basePoints[2*e+1]={x:l.x+r*(u*h+d*c),y:l.y+r*(-d*h+u*c)},this.divideBasePoints(2*e,r,o),this.divideBasePoints(2*e+1,r,o)}setOrders(){this.chart.orders[0]={link:[0,1]},this.setOrdersRecursive(1,1)}setOrdersRecursive(e,t){if(e>=this.pointLength()/2)return;const s=2*e,i=2*e+1;this.chart.orders[s-1]={link:[t,s]},this.chart.orders[i-1]={link:[t,i]},this.setOrdersRecursive(s,s),this.setOrdersRecursive(i,i)}}t.default=o},81:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(491));class r extends n.default{}t.default=r},207:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(491));class r extends n.default{pointLength(){return 40*this.chart.complexity}setBasePoints(){for(let e=0;e<this.pointLength();e+=1){const t=Math.sin(2*Math.PI*this.chart.complexity*e/this.pointLength());this.chart.basePoints[e]={x:.1*t*Math.cos(2*Math.PI*e/this.pointLength()-Math.PI),y:.1*t*Math.sin(2*Math.PI*e/this.pointLength()-Math.PI)}}}}t.default=r},671:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FoldCurveType=void 0;const n=i(s(491)),r=i(s(786)),o=s(75);t.FoldCurveType={DRAGON:"dragon",TRIANGLE:"triangle",CCURVE:"ccurve"};class a extends n.default{arm0=Math.sqrt(2)/2;angle0=45*Math.PI/180;curveType;lengthRandom;angleRandom;constructor(e){super(e),this.lengthRandom=new r.default(e.randomizer?.size?.seed||-1),this.angleRandom=new r.default(e.randomizer?.angle?.seed||-1),this.curveType=(()=>{switch(this.chart.kind){case o.ChartType.FOLD_CCURVE:return t.FoldCurveType.CCURVE;case o.ChartType.FOLD_TRIANGLE:return t.FoldCurveType.TRIANGLE;case o.ChartType.FOLD_DRAGON:return t.FoldCurveType.DRAGON;default:throw new Error("Unsupported curve type!")}})(),this.chart.complexity=e.complexity<3?3:e.complexity>12?12:e.complexity}pointLength(){const{complexity:e}=this.chart;return 2**(e-1)+1}setBasePoints(){const{chart:e}=this;e.basePoints.push({x:-.1,y:0}),e.basePoints.push({x:.1,y:0}),this.divideBasePoints(1,this.arm0,this.angle0)}divideBasePoints(e,t,s){const i=(this.chart.randomizer?.size?.amplify||0)*this.lengthRandom.generate(),n=(this.chart.randomizer?.angle?.amplify||0)*this.angleRandom.generate(),r=t*(i+(this.chart.mutation?.size||1)),o=s*(n+(this.chart.mutation?.angle||1));if(e>=this.chart.complexity)return;const a=Math.sin(o),l=Math.cos(o);for(let t=2**(e-1);t>0;t-=1){const s=this.chart.basePoints[t],i=this.chart.basePoints[t-1],n=i.x-s.x,o=i.y-s.y,h=(()=>this.isLeftFold(t,e)?{x:s.x+r*(l*n-a*o),y:s.y+r*(a*n+l*o)}:{x:s.x+r*(l*n+a*o),y:s.y+r*(-a*n+l*o)})();this.chart.basePoints.splice(t,0,h)}this.divideBasePoints(e+1,r,o)}isLeftFold(e,s){switch(this.curveType){case t.FoldCurveType.DRAGON:return e%2==0;case t.FoldCurveType.TRIANGLE:return(e+s)%2==0;case t.FoldCurveType.CCURVE:return!0;default:throw new Error("Unsupported CurveType!")}}setOrders(){for(let e=0;e<this.pointLength()-1;e+=1)this.chart.orders[e]={link:[e,e+1]}}}t.default=a},10:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(491)),r=i(s(786));class o extends n.default{length0=1;angle0=60*Math.PI/180;lengthRandom;angleRandom;constructor(e){super(e),this.lengthRandom=new r.default(e.randomizer?.size?.seed||-1),this.angleRandom=new r.default(e.randomizer?.angle?.seed||-1),this.chart.complexity=e.complexity<3?3:e.complexity>10?10:e.complexity}pointLength(){const{complexity:e}=this.chart;return 2**(2*(e-1))+1}setBasePoints(){this.chart.basePoints=[],this.chart.basePoints.push({x:-.1,y:0}),this.chart.basePoints.push({x:.1,y:0}),this.divideBasePoints(1,this.length0,this.angle0)}divideBasePoints(e,t,s){const i=(this.chart.randomizer?.size?.amplify||0)*this.lengthRandom.generate(),n=(this.chart.randomizer?.angle?.amplify||0)*this.angleRandom.generate(),r=t*(i+(this.chart.mutation?.size||1)),o=s*(n+(this.chart.mutation?.angle||1));if(e>=this.chart.complexity)return;const a=Math.sin(o),l=Math.cos(o),h=2**(2*e);for(let e=0;e<h;e+=1){const t=e%4;if(t<=1){const s=this.chart.basePoints[e],i=this.chart.basePoints[e+1],n=i.x-s.x,o=i.y-s.y;this.chart.basePoints.splice(e+1,0,{x:s.x+n*r/(3-t),y:s.y+o*r/(3-t)})}else if(2===t){const t=this.chart.basePoints[e-1],s=this.chart.basePoints[e],i=s.x-t.x,n=s.y-t.y;this.chart.basePoints.splice(e,0,{x:t.x+r*(l*i-a*n),y:t.y+r*(a*i+l*n)})}}this.divideBasePoints(e+1,r,o)}setOrders(){for(let e=0;e<this.pointLength()-1;e+=1)this.chart.orders[e]={link:[e,e+1]}}}t.default=o},96:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(75),r=i(s(10));class o extends r.default{isInner=!1;constructor(e){super(e),this.isInner=e.kind===n.ChartType.KOCH_TRIANGLE_INNER}pointLength(){const{complexity:e}=this.chart;return 3*(2**(2*(e-1))+1)}setBasePoints(){this.chart.basePoints=[],this.chart.basePoints.push({x:-.1,y:0}),this.chart.basePoints.push({x:.1,y:0}),this.divideBasePoints(1,this.length0,this.angle0);const e=-Math.sin(120*Math.PI/180),t=Math.cos(120*Math.PI/180),s=this.pointLength();if(this.isInner)for(let e=0;e<s/3;e+=1)this.chart.basePoints[e].y=-this.chart.basePoints[e].y;for(let e=0;e<s/3;e+=1)this.chart.basePoints[e].y+=.1/Math.sqrt(3);for(let i=0;i<s/3;i+=1){const s=this.chart.basePoints[i].x,n=this.chart.basePoints[i].y;this.chart.basePoints.push({x:s*t-n*e,y:s*e+n*t})}for(let i=0;i<s/3;i+=1){const n=this.chart.basePoints[i+s/3].x,r=this.chart.basePoints[i+s/3].y;this.chart.basePoints.push({x:n*t-r*e,y:n*e+r*t})}}setOrders(){const e=this.pointLength();for(let t=0;t<e-1;t+=1)this.chart.orders[t]={link:[t,t+1]}}}t.default=o},183:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(491));class r extends n.default{simulate(){const{chart:e}=this,t=this.pointLength();for(let s=0;s<t;s+=1){const t=.1*(Math.random()-.5),i=.1*(Math.random()-.5);e.basePoints[s]={x:t,y:i}}super.simulate()}}t.default=r},306:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(491));class r extends n.default{setOrders(){const{chart:e}=this,t=this.pointLength();for(let s=0;s<t;s+=1){const i=2*s%t,n=(2*s+2)%t;e.orders.push({link:[i,n]})}}}t.default=r},830:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(491));class r extends n.default{pointLength(){return 2*this.chart.complexity}setBasePoints(){for(let e=0;e<this.pointLength();e+=1){const t=2*Math.PI*e/this.pointLength()-Math.PI;this.chart.basePoints[e]=e%2==0?{x:.1*Math.cos(t),y:.1*Math.sin(t)}:{x:.1*Math.cos(t)/4,y:.1*Math.sin(t)/4}}}}t.default=r},923:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(491));class r extends n.default{setOrders(){const{chart:e}=this,t=this.pointLength();for(let s=0;s<t;s+=1){const i=s,n=(2*s+2)%t;e.orders.push({link:[i,n]})}}}t.default=r},687:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TriCurveType=void 0;const n=i(s(491)),r=i(s(786)),o=s(75);t.TriCurveType={CIS:"cis",TRANS:"trans"};class a extends n.default{curveType;lengthRandom;angleRandom;constructor(e){super(e),this.lengthRandom=new r.default(e.randomizer?.size?.seed||-1),this.angleRandom=new r.default(e.randomizer?.angle?.seed||-1),this.curveType=(()=>{switch(this.chart.kind){case o.ChartType.TRI_CIS:return t.TriCurveType.CIS;case o.ChartType.TRI_TRANS:return t.TriCurveType.TRANS;default:throw new Error("Unsupported curve type!")}})(),this.chart.complexity=e.complexity>7?7:e.complexity}pointLength(){const{complexity:e}=this.chart;return 4**e+1}setBasePoints(){const{chart:e}=this;e.basePoints=[],e.basePoints.push({x:-.1,y:0}),e.basePoints.push({x:.1,y:0}),this.divideBasePoints(1,1,90*Math.PI/180)}divideBasePoints(e,s,i){const n=(this.chart.randomizer?.size?.amplify||0)*this.lengthRandom.generate(),r=(this.chart.randomizer?.angle?.amplify||0)*this.angleRandom.generate(),o=s*(n+(this.chart.mutation?.size||1)),a=i*(r+(this.chart.mutation?.angle||1));if(e>this.chart.complexity)return;const l=Math.sin(a),h=Math.cos(a);for(let s=4**(e-1);s>0;s-=1){const e=this.chart.basePoints[s],i=this.chart.basePoints[s-1],n=(i.x+e.x)/2,r=(i.y+e.y)/2,a=n-e.x,c=r-e.y,d=i.x-n,u=i.y-r,p={x:n,y:r},y=this.curveType===t.TriCurveType.CIS?-o:o,f=this.curveType===t.TriCurveType.TRANS&&s%2==0?l:-l;this.chart.basePoints.splice(s,0,{x:e.x+y*(h*a+f*c),y:e.y+y*(-f*a+h*c)}),this.chart.basePoints.splice(s,0,p),this.chart.basePoints.splice(s,0,{x:i.x-y*(h*d-f*u),y:i.y-y*(f*d+h*u)})}this.divideBasePoints(e+1,o,a)}setOrders(){for(let e=0;e<this.pointLength()-1;e+=1)this.chart.orders[e]={link:[e,e+1]}}}t.default=a},75:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ChartType=t.StyleType=void 0,t.StyleType={LINE:"line",TRIANGLE:"triangle",CIRCLES:"circles",CURVE:"curve"},t.ChartType={CIRCLE:"start",STAR:"star",CLOVER:"clover",SUNRISE:"sunrise",RANDOM:"random",STARMINE:"starmine",KOCH_CURVE:"koch_curve",KOCH_TRIANGLE_INNER:"koch_triangle_inner",KOCH_TRIANGLE_OUTER:"koch_triangle_outer",FOLD_DRAGON:"fold_dragon",FOLD_TRIANGLE:"fold_triangle",FOLD_CCURVE:"fold_ccurve",TRI_CIS:"tri_cis",TRI_TRANS:"tri_trans",BINARY_TREE:"binary_tree"}},833:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const i=s(759);class n{config;colorStartIndex;colorIterateIndex;colorTable=[];alphaHex;gradientRainbows=[{position:0,red:255,green:0,blue:0},{position:43,red:255,green:255,blue:0},{position:85,red:0,green:255,blue:0},{position:128,red:0,green:255,blue:255},{position:171,red:0,green:0,blue:255},{position:223,red:255,green:0,blue:255},{position:255,red:255,green:0,blue:0}];gradientWarm=[{position:0,red:255,green:0,blue:0},{position:128,red:255,green:255,blue:0},{position:255,red:255,green:0,blue:0}];gradientForest=[{position:0,red:255,green:255,blue:0},{position:128,red:0,green:255,blue:0},{position:255,red:255,green:255,blue:0}];gradientCool=[{position:0,red:0,green:0,blue:255},{position:128,red:0,green:255,blue:255},{position:255,red:0,green:0,blue:255}];gradientHeat=[{position:0,red:255,green:255,blue:0},{position:43,red:255,green:0,blue:0},{position:85,red:0,green:0,blue:255},{position:128,red:0,green:0,blue:0},{position:171,red:0,green:0,blue:255},{position:223,red:255,green:0,blue:0},{position:255,red:255,green:255,blue:0}];gradientMonochrome=[{position:0,red:0,green:0,blue:0},{position:128,red:255,green:255,blue:255},{position:255,red:0,green:0,blue:0}];gradientPastel=[{position:0,red:255,green:154,blue:154},{position:85,red:255,green:255,blue:154},{position:170,red:154,green:255,blue:255},{position:255,red:255,green:154,blue:154}];static colorToHex=e=>{const t=Math.round(e).toString(16);return 1===t.length?`0${t}`:t};constructor(e){this.config=e,this.colorStartIndex=0,this.colorIterateIndex=0,this.alphaHex=n.colorToHex(Math.floor(255*this.config.alpha));const t=(()=>{switch(e.type.toString()){case i.ColorType.RAINBOW:return this.gradientRainbows;case i.ColorType.WARM:return this.gradientWarm;case i.ColorType.FOREST:return this.gradientForest;case i.ColorType.COOL:return this.gradientCool;case i.ColorType.HEAT:return this.gradientHeat;case i.ColorType.MONOCHROME:return this.gradientMonochrome;case i.ColorType.PASTEL:return this.gradientPastel;default:throw Error("Not Implemented")}})();let s=1,r=t[0],o=t[1];for(let e=0;e<256;e+=1){const i=(e-r.position)/(o.position-r.position),a=r.red+i*(o.red-r.red),l=r.green+i*(o.green-r.green),h=r.blue+i*(o.blue-r.blue);this.colorTable.push(`#${n.colorToHex(a)}${n.colorToHex(l)}${n.colorToHex(h)}${this.alphaHex}`),o.position===e&&(r=o,s+=1,o=t[s])}}next(){const e=this.colorTable[this.colorIterateIndex];return this.colorIterateIndex=(this.colorIterateIndex+this.config.speed)%256,e}endIteration(){this.colorStartIndex=(this.colorStartIndex+this.config.speed)%256,this.colorIterateIndex=this.colorStartIndex}}t.default=n},759:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ColorType=void 0,t.ColorType={RAINBOW:"rainbow",WARM:"warm",FOREST:"forest",COOL:"cool",HEAT:"heat",MONOCHROME:"monochrome",PASTEL:"pastel"}},666:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(98));t.default=class{visualizer;simulators;scrollEndCount;touchScrollPrevY;scrollY;constructor(e){this.visualizer=e,this.simulators=(new n.default).load(),this.scrollEndCount=0,this.scrollY=(()=>{const e=new URL(document.location.href).searchParams;return parseInt(e.get("depth")||"0",10)})()}start=e=>{setInterval((()=>{const e=this.simulate();this.visualizer.draw(e)}),1e3/e)};handleScroll=e=>{this.scrollY+=e,this.scrollY<0&&(this.scrollY=0),this.scrollEndCount=6};handleTouchScroll=e=>{this.touchScrollPrevY&&(this.scrollY-=2*(e-this.touchScrollPrevY)),this.touchScrollPrevY=e,this.scrollY<0&&(this.scrollY=0),this.scrollEndCount=6};simulate=()=>{if(this.scrollEndCount-=1,0===this.scrollEndCount){this.touchScrollPrevY=void 0;const e=`${window.location.pathname}?depth=${this.scrollY}`;window.history.replaceState(null,"Fractal-Visualizer depth: + scrollY",e)}return this.simulators.forEach((e=>e.simulate())),this.simulators.map((e=>{const t=e.getChart();return t.points=t.points.map((e=>({...e,y:e.y-this.scrollY/300}))),t}))}}},98:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(440)),r=i(s(263)),o=i(s(81)),a=i(s(207)),l=i(s(671)),h=i(s(10)),c=i(s(96)),d=i(s(183)),u=i(s(306)),p=i(s(830)),y=i(s(923)),f=i(s(687)),g=s(75);class m{static instantiateChart=e=>{switch(e.kind){case g.ChartType.STAR:return new u.default(e);case g.ChartType.STARMINE:return new p.default(e);case g.ChartType.SUNRISE:return new y.default(e);case g.ChartType.CIRCLE:return new o.default(e);case g.ChartType.CLOVER:return new a.default(e);case g.ChartType.RANDOM:return new d.default(e);case g.ChartType.FOLD_CCURVE:case g.ChartType.FOLD_TRIANGLE:case g.ChartType.FOLD_DRAGON:return new l.default(e);case g.ChartType.KOCH_CURVE:return new h.default(e);case g.ChartType.KOCH_TRIANGLE_INNER:case g.ChartType.KOCH_TRIANGLE_OUTER:return new c.default(e);case g.ChartType.TRI_CIS:case g.ChartType.TRI_TRANS:return new f.default(e);case g.ChartType.BINARY_TREE:return new r.default(e);default:throw new Error("Unsupported chart type!")}};load=()=>{const e=n.default.charts.map((e=>{const t={...e,kind:e.kind,style:{...e.style,type:e.style.type},color:{...e.color,type:e.color.type},rotation:{angle:e.rotation.angle*Math.PI/180,speed:e.rotation.speed*Math.PI/180},complexity:e.complexity,basePoints:[],points:[],orders:[],colors:[]};return m.instantiateChart(t)}));return e.map((e=>e.reset())),e}}t.default=m},132:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.View=t.HtmlDefines=void 0,t.HtmlDefines={UPLOADED_ID_GIF:"gif_uploaded",UPLOADED_ID_MAP:"dat_uploaded",INPUT_ID_GIF:"gif_file",INPUT_ID_MAP:"dat_file",GIF_SRC_PREVIEW:"gif_src_preview",IS_LOADING:"is_loading",ERROR_MESSAGE:"error_message",CANVAS_GIF_MAP_PREVIEW:"gif_map_preview",GIF_MAP_DOWNLOAD:"gif_map_download",GIF_MAP_DOWNLOAD_BUTTON:"git_map_download_button"},t.View=class{adjustCanvas=e=>{const t=window.devicePixelRatio;e.width=window.innerWidth*t*2,e.height=window.innerHeight*t*2};constructor(e){const t=document.getElementById("canvas");if(t instanceof HTMLCanvasElement){if("ontouchstart"in window){const s=e=>{e.preventDefault()},i=t=>{t.preventDefault(),e.onTouchScroll(t.touches[0].pageY)};t.addEventListener("touchstart",s,{passive:!1}),t.addEventListener("touchend",s,{passive:!1}),t.addEventListener("touchcancel",s,{passive:!1}),t.addEventListener("touchmove",i,{passive:!1})}else t.onwheel=t=>{e.onScroll(t.deltaY)};window.onresize=()=>{this.adjustCanvas(t)};const s=t.getContext("2d");s instanceof CanvasRenderingContext2D&&(this.adjustCanvas(t),e.onCanvasReady(s))}}}},821:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{visualizer;simulator;constructor(e,t){this.visualizer=e,this.simulator=t}onCanvasReady=e=>{this.visualizer.setContext(e),this.simulator.start(50)};onScroll=e=>{this.simulator.handleScroll(e)};onTouchScroll=e=>{this.simulator.handleTouchScroll(e)}}},113:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});const i=s(75);class n{nullableContext=null;setContext=e=>{this.nullableContext=e;const t=e.canvas.width,s=e.canvas.height;e.fillStyle="rgb(0, 0, 0)",e.fillRect(0,0,t,s)};draw=e=>{const t=this.nullableContext;if(null!==t){const s=t.canvas.width,i=t.canvas.height;t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,s,i),e.forEach((e=>{n.shouldDrawChart(e)&&n.drawChart(t,e,s,i)}))}};static drawLine=(e,t,s,i,n)=>{e.lineWidth=i,e.strokeStyle=n,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(s.x,s.y),e.closePath(),e.stroke()};static drawTriangle=(e,t,s,i,n)=>{const r=s.x-t.x,o=s.y-t.y,a=Math.sqrt(r*r+o*o),l=r/a,h=o/a;e.fillStyle=n,e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(t.x+h*i,t.y-l*i),e.lineTo(t.x-h*i,t.y+l*i),e.lineTo(s.x,s.y),e.closePath(),e.fill()};static drawCircles=(e,t,s,i,n)=>{const r=Math.log(i||11),o=s.x-t.x,a=s.y-t.y,l=r*Math.sqrt(o*o+a*a),h=2*Math.PI;e.fillStyle=n,e.beginPath(),e.arc(t.x+.3*o,t.y+.3*a,.3*l,0,h),e.fill(),e.beginPath(),e.arc(t.x+.6*o,t.y+.6*a,.15*l,0,h),e.fill()};static drawCurve=(e,t,s,i,n)=>{const r=1.5*(i||1),o=s.x-t.x,a=s.y-t.y,l=Math.sqrt(o*o+a*a),h=o/l,c=a/l,d=t.x+(s.x-t.x)/2,u=t.y+(s.y-t.y)/2,p=c*r,y=h*r;e.fillStyle=n,e.beginPath(),e.moveTo(t.x,t.y),e.bezierCurveTo(d+1.5*p,u-1.5*y,d+1.5*p,u-1.5*y,s.x,s.y),e.bezierCurveTo(d+2*p,u-2*y,d+2*p,u-2*y,t.x,t.y),e.closePath(),e.fill()};static shouldDrawChart=e=>{const t=e.points.map((e=>e.y)).sort(),s=Math.floor(2*t.length/10),i=Math.floor(8*t.length/10);return t[s]>-1&&t[i]<2};static drawChart=(e,t,s,r)=>{const o=t.points.map((e=>({x:e.x*s,y:e.y*r}))),{style:a}=t,l=(()=>{switch(a.type){case i.StyleType.LINE:return n.drawLine;case i.StyleType.TRIANGLE:return n.drawTriangle;case i.StyleType.CIRCLES:return n.drawCircles;case i.StyleType.CURVE:return n.drawCurve;default:throw new Error("Invalid style type!")}})();for(let s=0;s<t.orders.length;s+=1){const i=t.orders[s],{link:n}=i,r=t.colors[s];l(e,o[n[0]],o[n[1]],a.thickness,r)}}}t.default=n},440:function(e){e.exports=JSON.parse('{"charts":[{"kind":"koch_triangle_outer","complexity":4,"center":{"x":0.2,"y":0.3},"scale":{"w":2,"h":2},"rotation":{"angle":30,"speed":1},"mutation":{"size":1,"angle":1},"randomizer":{"size":{"amplify":10,"seed":-90129041},"angle":{"amplify":-2.4,"seed":1124901342}},"style":{"type":"line","thickness":3},"color":{"type":"cool","alpha":0.9,"speed":1}},{"kind":"koch_triangle_inner","complexity":5,"center":{"x":0.5,"y":1.2},"scale":{"w":3,"h":3},"rotation":{"angle":30,"speed":1},"mutation":{"size":1,"angle":5},"randomizer":{"size":{"amplify":0,"seed":90129041},"angle":{"amplify":0,"seed":124818419}},"style":{"type":"line","thickness":10},"color":{"type":"warm","alpha":0.9,"speed":0.5}},{"kind":"binary_tree","complexity":8,"center":{"x":0.5,"y":1.9},"scale":{"w":0.2,"h":0.2},"rotation":{"angle":10,"speed":-0.2},"mutation":{"size":1.1,"angle":0.88},"randomizer":{"size":{"amplify":0.5,"seed":90129041},"angle":{"amplify":-0.1,"seed":124818419}},"style":{"type":"triangle","thickness":10},"color":{"type":"rainbow","alpha":0.9,"speed":0.5}},{"kind":"tri_cis","complexity":6,"center":{"x":0.8,"y":3.3},"scale":{"w":3,"h":2},"rotation":{"angle":70,"speed":0},"mutation":{"size":1.05,"angle":0.75},"randomizer":{"size":{"amplify":1,"seed":90129041},"angle":{"amplify":0.1,"seed":124818419}},"style":{"type":"line","thickness":3},"color":{"type":"heat","alpha":0.9,"speed":0.5}},{"kind":"starmine","complexity":10,"center":{"x":0.2,"y":4.2},"scale":{"w":3,"h":3},"rotation":{"angle":20,"speed":0.5},"style":{"type":"triangle","thickness":3},"color":{"type":"warm","alpha":0.9,"speed":0.5}},{"kind":"starmine","complexity":8,"center":{"x":0.4,"y":4.3},"scale":{"w":2.5,"h":2.5},"rotation":{"angle":20,"speed":0.5},"style":{"type":"triangle","thickness":3},"color":{"type":"forest","alpha":0.9,"speed":0.5}},{"kind":"starmine","complexity":8,"center":{"x":0.6,"y":4.4},"scale":{"w":2,"h":2},"rotation":{"angle":20,"speed":0.5},"style":{"type":"triangle","thickness":3},"color":{"type":"cool","alpha":0.9,"speed":0.5}},{"kind":"starmine","complexity":6,"center":{"x":0.8,"y":4.5},"scale":{"w":1.5,"h":1.5},"rotation":{"angle":20,"speed":0.5},"style":{"type":"triangle","thickness":3},"color":{"type":"monochrome","alpha":0.9,"speed":0.5}},{"kind":"sunrise","complexity":100,"center":{"x":0.4,"y":5.1},"scale":{"w":3,"h":3},"rotation":{"angle":-20,"speed":0},"style":{"type":"curve","thickness":4},"color":{"type":"heat","alpha":0.9,"speed":0.5}},{"kind":"fold_ccurve","complexity":9,"center":{"x":0.4,"y":6},"scale":{"w":1.5,"h":1.5},"rotation":{"angle":30,"speed":0},"mutation":{"size":1,"angle":1.5},"randomizer":{"size":{"amplify":0.1,"seed":90129041},"angle":{"amplify":0.1,"seed":124818419}},"style":{"type":"line","thickness":5},"color":{"type":"pastel","alpha":0.9,"speed":0.5}},{"kind":"random","complexity":100,"center":{"x":0.7,"y":8},"scale":{"w":30,"h":30},"rotation":{"angle":30,"speed":0},"mutation":{"size":1,"angle":1.5},"randomizer":{"size":{"amplify":0.1,"seed":90129041},"angle":{"amplify":0.1,"seed":124818419}},"style":{"type":"circles","thickness":1.2},"color":{"type":"cool","alpha":0.1,"speed":10}},{"kind":"random","complexity":100,"center":{"x":0.7,"y":9.5},"scale":{"w":30,"h":30},"rotation":{"angle":30,"speed":0},"mutation":{"size":1,"angle":1.5},"randomizer":{"size":{"amplify":0.1,"seed":90129041},"angle":{"amplify":0.1,"seed":124818419}},"style":{"type":"circles","thickness":1.2},"color":{"type":"warm","alpha":0.1,"speed":10}},{"kind":"fold_dragon","complexity":10,"center":{"x":0.5,"y":11.2},"scale":{"w":1.6,"h":2.2},"rotation":{"angle":30,"speed":0.1},"mutation":{"size":1,"angle":3},"randomizer":{"size":{"amplify":0.5,"seed":-90129041},"angle":{"amplify":0.1,"seed":124818419}},"style":{"type":"curve","thickness":5},"color":{"type":"rainbow","alpha":0.4,"speed":2}}]}')}},t={};!function s(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,s),r.exports}(607)}();