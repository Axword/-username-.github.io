import{r as ea,o as Zd,b as Jd,N as jd,O as _c,P as ta,R as Ut,ao as na,V as $d,F as Qd,W as Kd,f as ia,at as ep,au as tp,Q as np,aq as bc}from"./index-C0P4G8hh.js";import{Q as ip}from"./QPage-BuLxy0Ge.js";import{a as $n,g as rp}from"./_commonjsHelpers-D6-XlEtG.js";var ra={};/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="132",sp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},op={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,Ha=1,Ju=2,ap=3,lp=0,dl=1,ju=2,rr=3,vi=0,vt=1,yi=2,pl=1,cp=2,Cn=0,ar=1,Va=2,Wa=3,qa=4,$u=5,ci=100,Qu=101,Ku=102,Xa=103,Ya=104,eh=200,th=201,nh=202,ih=203,ml=204,gl=205,rh=206,sh=207,oh=208,ah=209,lh=210,ch=0,uh=1,hh=2,xo=3,fh=4,dh=5,ph=6,mh=7,hs=0,gh=1,vh=2,Wn=0,yh=1,xh=2,_h=3,bh=4,wh=5,To=300,Sr=301,Tr=302,Zr=303,Jr=304,Er=306,fs=307,jr=1e3,Pt=1001,$r=1002,_t=1003,_o=1004,up=1004,bo=1005,hp=1005,xt=1006,vl=1007,fp=1007,Ei=1008,dp=1008,xi=1009,Mh=1010,Sh=1011,Qr=1012,Th=1013,Wr=1014,Rn=1015,di=1016,Eh=1017,Ah=1018,Lh=1019,lr=1020,Rh=1021,Pn=1022,Ft=1023,Ch=1024,Ph=1025,Dh=Ft,pi=1026,ur=1027,Ih=1028,Fh=1029,Bh=1030,zh=1031,Uh=1032,Oh=1033,Za=33776,Ja=33777,ja=33778,$a=33779,Qa=35840,Ka=35841,el=35842,tl=35843,Nh=36196,nl=37492,il=37496,kh=37808,Gh=37809,Hh=37810,Vh=37811,Wh=37812,qh=37813,Xh=37814,Yh=37815,Zh=37816,Jh=37817,jh=37818,$h=37819,Qh=37820,Kh=37821,ef=36492,tf=37840,nf=37841,rf=37842,sf=37843,of=37844,af=37845,lf=37846,cf=37847,uf=37848,hf=37849,ff=37850,df=37851,pf=37852,mf=37853,gf=2200,vf=2201,yf=2202,Kr=2300,es=2301,vo=2302,ui=2400,hi=2401,ts=2402,Eo=2500,yl=2501,xf=0,pp=1,mp=2,Ot=3e3,ds=3001,Ao=3007,Lo=3002,_f=3003,xl=3004,_l=3005,bl=3006,bf=3200,wf=3201,Ai=0,Mf=1,gp=0,yo=7680,vp=7681,yp=7682,xp=7683,_p=34055,bp=34056,wp=5386,Mp=512,Sp=513,Tp=514,Ep=515,Ap=516,Lp=517,Rp=518,Sf=519,hr=35044,fr=35048,Cp=35040,Pp=35045,Dp=35049,Ip=35041,Fp=35046,Bp=35050,zp=35042,Up="100",rl="300 es";class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Rt=[];for(let o=0;o<256;o++)Rt[o]=(o<16?"0":"")+o.toString(16);let Rs=1234567;const mi=Math.PI/180,ns=180/Math.PI;function jt(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[o&255]+Rt[o>>8&255]+Rt[o>>16&255]+Rt[o>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toUpperCase()}function Ct(o,e,t){return Math.max(e,Math.min(t,o))}function wl(o,e){return(o%e+e)%e}function Op(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function Np(o,e,t){return o!==e?(t-o)/(e-o):0}function qr(o,e,t){return(1-t)*o+t*e}function kp(o,e,t,n){return qr(o,e,1-Math.exp(-t*n))}function Gp(o,e=1){return e-Math.abs(wl(o,e*2)-e)}function Hp(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Vp(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Wp(o,e){return o+Math.floor(Math.random()*(e-o+1))}function qp(o,e){return o+Math.random()*(e-o)}function Xp(o){return o*(.5-Math.random())}function Yp(o){return o!==void 0&&(Rs=o%2147483647),Rs=Rs*16807%2147483647,(Rs-1)/2147483646}function Zp(o){return o*mi}function Jp(o){return o*ns}function sl(o){return(o&o-1)===0&&o!==0}function Tf(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ef(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function jp(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),f=r((e-n)/2),h=s((e-n)/2),d=r((n-e)/2),p=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*f,l*h,a*c);break;case"YZY":o.set(l*h,a*u,l*f,a*c);break;case"ZXZ":o.set(l*f,l*h,a*u,a*c);break;case"XZX":o.set(a*u,l*p,l*d,a*c);break;case"YXY":o.set(l*d,a*u,l*p,a*c);break;case"ZYZ":o.set(l*p,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var wc=Object.freeze({__proto__:null,DEG2RAD:mi,RAD2DEG:ns,generateUUID:jt,clamp:Ct,euclideanModulo:wl,mapLinear:Op,inverseLerp:Np,lerp:qr,damp:kp,pingpong:Gp,smoothstep:Hp,smootherstep:Vp,randInt:Wp,randFloat:qp,randFloatSpread:Xp,seededRandom:Yp,degToRad:Zp,radToDeg:Jp,isPowerOfTwo:sl,ceilPowerOfTwo:Tf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:jp});class ee{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}ee.prototype.isVector2=!0;class wt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],v=i[0],x=i[3],g=i[6],m=i[1],M=i[4],w=i[7],C=i[2],F=i[5],T=i[8];return r[0]=s*v+a*m+l*C,r[3]=s*x+a*M+l*F,r[6]=s*g+a*w+l*T,r[1]=c*v+u*m+f*C,r[4]=c*x+u*M+f*F,r[7]=c*g+u*w+f*T,r[2]=h*v+d*m+p*C,r[5]=h*x+d*M+p*F,r[8]=h*g+d*w+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*s-a*c,h=a*l-u*r,d=c*r-s*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=f*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*s)*v,e[3]=h*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(s*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*s+n*c,i[6]=t*a+n*u,i[1]=-n*r+t*l,i[4]=-n*s+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}wt.prototype.isMatrix3=!0;let Oi;class Li{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Oi.width=e.width,Oi.height=e.height;const n=Oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let $p=0;class Mt extends Qn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Pt,i=Pt,r=xt,s=Ei,a=Ft,l=xi,c=1,u=Ot){super(),Object.defineProperty(this,"id",{value:$p++}),this.uuid=jt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=jt()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(sa(i[s].image)):r.push(sa(i[s]))}else r=sa(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==To)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}Mt.DEFAULT_IMAGE=void 0;Mt.DEFAULT_MAPPING=To;Mt.prototype.isTexture=!0;function sa(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Li.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class nt{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],v=l[2],x=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(p-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(d+1)/2,C=(g+1)/2,F=(u+h)/4,T=(f+v)/4,B=(p+x)/4;return M>w&&M>C?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=F/n,r=T/n):w>C?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=F/i,r=B/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=T/r,i=B/r),this.set(n,i,r,t),this}let m=Math.sqrt((x-p)*(x-p)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(x-p)/m,this.y=(f-v)/m,this.z=(h-u)/m,this.w=Math.acos((c+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}nt.prototype.isVector4=!0;class en extends Qn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.texture=new Mt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}en.prototype.isWebGLRenderTarget=!0;class Af extends en{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Af.prototype.isWebGLMultipleRenderTargets=!0;class Ml extends en{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Ml.prototype.isWebGLMultisampleRenderTarget=!0;class Dt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[s+0],d=r[s+1],p=r[s+2],v=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==p){let x=1-a;const g=l*h+c*d+u*p+f*v,m=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const C=Math.sqrt(M),F=Math.atan2(C,g*m);x=Math.sin(x*F)/C,a=Math.sin(a*F)/C}const w=a*m;if(l=l*x+h*w,c=c*x+d*w,u=u*x+p*w,f=f*x+v*w,x===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[s],h=r[s+1],d=r[s+2],p=r[s+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),h=l(n/2),d=l(i/2),p=l(r/2);switch(s){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Dt.prototype.isQuaternion=!0;class L{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,f=l*i+r*n-s*t,h=-r*t-s*n-a*i;return this.x=c*l+h*-r+u*-a-f*-s,this.y=u*l+h*-s+f*-r-c*-a,this.z=f*l+h*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}L.prototype.isVector3=!0;const oa=new L,Mc=new Dt;class Qt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>s&&(s=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>s&&(s=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ir.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox),aa.applyMatrix4(e.matrixWorld),this.union(aa));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ir),Ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Cs.subVectors(this.max,Fr),Ni.subVectors(e.a,Fr),ki.subVectors(e.b,Fr),Gi.subVectors(e.c,Fr),zn.subVectors(ki,Ni),Un.subVectors(Gi,ki),ni.subVectors(Ni,Gi);let t=[0,-zn.z,zn.y,0,-Un.z,Un.y,0,-ni.z,ni.y,zn.z,0,-zn.x,Un.z,0,-Un.x,ni.z,0,-ni.x,-zn.y,zn.x,0,-Un.y,Un.x,0,-ni.y,ni.x,0];return!la(t,Ni,ki,Gi,Cs)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Ni,ki,Gi,Cs))?!1:(Ps.crossVectors(zn,Un),t=[Ps.x,Ps.y,Ps.z],la(t,Ni,ki,Gi,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ir.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ir).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Qt.prototype.isBox3=!0;const Sn=[new L,new L,new L,new L,new L,new L,new L,new L],Ir=new L,aa=new Qt,Ni=new L,ki=new L,Gi=new L,zn=new L,Un=new L,ni=new L,Fr=new L,Cs=new L,Ps=new L,ii=new L;function la(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){ii.fromArray(o,r);const a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qp=new Qt,Sc=new L,ca=new L,ua=new L;class Kn{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ua.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return ca.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sc.copy(e.center).add(ca)),this.expandByPoint(Sc.copy(e.center).sub(ca)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new L,ha=new L,Ds=new L,On=new L,fa=new L,Is=new L,da=new L;class ei{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.direction).multiplyScalar(t).add(this.origin),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ha.copy(e).add(t).multiplyScalar(.5),Ds.copy(t).sub(e).normalize(),On.copy(this.origin).sub(ha);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ds),a=On.dot(this.direction),l=-On.dot(Ds),c=On.lengthSq(),u=Math.abs(1-s*s);let f,h,d,p;if(u>0)if(f=s*l-a,h=s*a-l,p=r*u,f>=0)if(h>=-p)if(h<=p){const v=1/u;f*=v,h*=v,d=f*(f+s*h+2*a)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-s*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(s*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ds).multiplyScalar(h).add(ha),d}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,r){fa.subVectors(t,e),Is.subVectors(n,e),da.crossVectors(fa,Is);let s=this.direction.dot(da),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;On.subVectors(this.origin,e);const l=a*this.direction.dot(Is.crossVectors(On,Is));if(l<0)return null;const c=a*this.direction.dot(fa.cross(On));if(c<0||l+c>s)return null;const u=-a*On.dot(da);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,a,l,c,u,f,h,d,p,v,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=s,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=v,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hi.setFromMatrixColumn(e,0).length(),r=1/Hi.setFromMatrixColumn(e,1).length(),s=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,d=s*f,p=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=p+d*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h+v*a,t[4]=p*a-d,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-a,t[2]=d*a-p,t[6]=v+h*a,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h-v*a,t[4]=-s*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=s*u,t[9]=v-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,d=s*f,p=a*u,v=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,d=s*c,p=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=p*f+d,t[1]=f,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-v*f}else if(e.order==="XZY"){const h=s*l,d=s*c,p=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=s*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kp,e,em)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Nn.crossVectors(n,Zt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Nn.crossVectors(n,Zt)),Nn.normalize(),Fs.crossVectors(Zt,Nn),i[0]=Nn.x,i[4]=Fs.x,i[8]=Zt.x,i[1]=Nn.y,i[5]=Fs.y,i[9]=Zt.y,i[2]=Nn.z,i[6]=Fs.z,i[10]=Zt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],v=n[6],x=n[10],g=n[14],m=n[3],M=n[7],w=n[11],C=n[15],F=i[0],T=i[4],B=i[8],G=i[12],O=i[1],z=i[5],$=i[9],V=i[13],H=i[2],Y=i[6],W=i[10],Z=i[14],oe=i[3],Se=i[7],Ce=i[11],ve=i[15];return r[0]=s*F+a*O+l*H+c*oe,r[4]=s*T+a*z+l*Y+c*Se,r[8]=s*B+a*$+l*W+c*Ce,r[12]=s*G+a*V+l*Z+c*ve,r[1]=u*F+f*O+h*H+d*oe,r[5]=u*T+f*z+h*Y+d*Se,r[9]=u*B+f*$+h*W+d*Ce,r[13]=u*G+f*V+h*Z+d*ve,r[2]=p*F+v*O+x*H+g*oe,r[6]=p*T+v*z+x*Y+g*Se,r[10]=p*B+v*$+x*W+g*Ce,r[14]=p*G+v*V+x*Z+g*ve,r[3]=m*F+M*O+w*H+C*oe,r[7]=m*T+M*z+w*Y+C*Se,r[11]=m*B+M*$+w*W+C*Ce,r[15]=m*G+M*V+w*Z+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],v=e[7],x=e[11],g=e[15];return p*(+r*l*f-i*c*f-r*a*h+n*c*h+i*a*d-n*l*d)+v*(+t*l*d-t*c*h+r*s*h-i*s*d+i*c*u-r*l*u)+x*(+t*c*f-t*a*d-r*s*f+n*s*d+r*a*u-n*c*u)+g*(-i*a*u-t*l*f+t*a*h+i*s*f-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],v=e[13],x=e[14],g=e[15],m=f*x*c-v*h*c+v*l*d-a*x*d-f*l*g+a*h*g,M=p*h*c-u*x*c-p*l*d+s*x*d+u*l*g-s*h*g,w=u*v*c-p*f*c+p*a*d-s*v*d-u*a*g+s*f*g,C=p*f*l-u*v*l-p*a*h+s*v*h+u*a*x-s*f*x,F=t*m+n*M+i*w+r*C;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/F;return e[0]=m*T,e[1]=(v*h*r-f*x*r-v*i*d+n*x*d+f*i*g-n*h*g)*T,e[2]=(a*x*r-v*l*r+v*i*c-n*x*c-a*i*g+n*l*g)*T,e[3]=(f*l*r-a*h*r-f*i*c+n*h*c+a*i*d-n*l*d)*T,e[4]=M*T,e[5]=(u*x*r-p*h*r+p*i*d-t*x*d-u*i*g+t*h*g)*T,e[6]=(p*l*r-s*x*r-p*i*c+t*x*c+s*i*g-t*l*g)*T,e[7]=(s*h*r-u*l*r+u*i*c-t*h*c-s*i*d+t*l*d)*T,e[8]=w*T,e[9]=(p*f*r-u*v*r-p*n*d+t*v*d+u*n*g-t*f*g)*T,e[10]=(s*v*r-p*a*r+p*n*c-t*v*c-s*n*g+t*a*g)*T,e[11]=(u*a*r-s*f*r-u*n*c+t*f*c+s*n*d-t*a*d)*T,e[12]=C*T,e[13]=(u*v*i-p*f*i+p*n*h-t*v*h-u*n*x+t*f*x)*T,e[14]=(p*a*i-s*v*i-p*n*l+t*v*l+s*n*x-t*a*x)*T,e[15]=(s*f*i-u*a*i+u*n*l-t*f*l-s*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,f=a+a,h=r*c,d=r*u,p=r*f,v=s*u,x=s*f,g=a*f,m=l*c,M=l*u,w=l*f,C=n.x,F=n.y,T=n.z;return i[0]=(1-(v+g))*C,i[1]=(d+w)*C,i[2]=(p-M)*C,i[3]=0,i[4]=(d-w)*F,i[5]=(1-(h+g))*F,i[6]=(x+m)*F,i[7]=0,i[8]=(p+M)*T,i[9]=(x-m)*T,i[10]=(1-(h+v))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Hi.set(i[0],i[1],i[2]).length();const s=Hi.set(i[4],i[5],i[6]).length(),a=Hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/r,u=1/s,f=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,t.setFromRotationMatrix(rn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(s+r)/(s-r),d=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),f=(t+e)*l,h=(n+i)*c,d=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Re.prototype.isMatrix4=!0;const Hi=new L,rn=new Re,Kp=new L(0,0,0),em=new L(1,1,1),Nn=new L,Fs=new L,Zt=new L,Tc=new Re,Ec=new Dt;class Ri{constructor(e=0,t=0,n=0,i=Ri.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ri.prototype.isEuler=!0;Ri.DefaultOrder="XYZ";Ri.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sl{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let tm=0;const Ac=new L,Vi=new Dt,En=new Re,Bs=new L,Br=new L,nm=new L,im=new Dt,Lc=new L(1,0,0),Rc=new L(0,1,0),Cc=new L(0,0,1),rm={type:"added"},Pc={type:"removed"};class Ve extends Qn{constructor(){super(),Object.defineProperty(this,"id",{value:tm++}),this.uuid=jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DefaultUp.clone();const e=new L,t=new Ri,n=new Dt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new wt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ve.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Br,Bs,this.up):En.lookAt(Bs,Br,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(En),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Pc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ve.DefaultUp=new L(0,1,0);Ve.DefaultMatrixAutoUpdate=!0;Ve.prototype.isObject3D=!0;const sn=new L,An=new L,pa=new L,Ln=new L,Wi=new L,qi=new L,Dc=new L,ma=new L,ga=new L,va=new L;class yt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){sn.subVectors(i,t),An.subVectors(n,t),pa.subVectors(e,t);const s=sn.dot(sn),a=sn.dot(An),l=sn.dot(pa),c=An.dot(An),u=An.dot(pa),f=s*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,p=(s*u-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,Ln),l.set(0,0),l.addScaledVector(r,Ln.x),l.addScaledVector(s,Ln.y),l.addScaledVector(a,Ln.z),l}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),An.subVectors(e,t),sn.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),sn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return yt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Wi.subVectors(i,n),qi.subVectors(r,n),ma.subVectors(e,n);const l=Wi.dot(ma),c=qi.dot(ma);if(l<=0&&c<=0)return t.copy(n);ga.subVectors(e,i);const u=Wi.dot(ga),f=qi.dot(ga);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Wi,s);va.subVectors(e,r);const d=Wi.dot(va),p=qi.dot(va);if(p>=0&&d<=p)return t.copy(r);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(qi,a);const x=u*p-d*f;if(x<=0&&f-u>=0&&d-p>=0)return Dc.subVectors(r,i),a=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(Dc,a);const g=1/(x+v+h);return s=v*g,a=h*g,t.copy(n).addScaledVector(Wi,s).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sm=0;class At extends Qn{constructor(){super(),Object.defineProperty(this,"id",{value:sm++}),this.uuid=jt(),this.name="",this.type="Material",this.fog=!0,this.blending=ar,this.side=vi,this.vertexColors=!1,this.opacity=1,this.format=Ft,this.transparent=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===pl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheenTint&&this.sheenTint.isColor&&(n.sheenTint=this.sheenTint.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==Ft&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}At.prototype.isMaterial=!0;const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},zs={h:0,s:0,l:0};function ya(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _a(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}class ge{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=wl(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=ya(r,i,e+1/3),this.g=ya(r,i,e),this.b=ya(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],s=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Lf[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),s=Math.min(t,n,i);let a,l;const c=(s+r)/2;if(s===r)a=0,l=0;else{const u=r-s;switch(l=c<=.5?u/(r+s):u/(2-r-s),r){case t:a=(n-i)/u+(n<i?6:0);break;case n:a=(i-t)/u+2;break;case i:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(zs);const n=qr(on.h,zs.h,t),i=qr(on.s,zs.s,t),r=qr(on.l,zs.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ge.NAMES=Lf;ge.prototype.isColor=!0;ge.prototype.r=1;ge.prototype.g=1;ge.prototype.b=1;class Bn extends At{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Bn.prototype.isMeshBasicMaterial=!0;const rt=new L,Us=new ee;class et{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=hr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ge),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new ee),t[n++]=s.x,t[n++]=s.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new L),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new nt),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}et.prototype.isBufferAttribute=!0;class Rf extends et{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Cf extends et{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Pf extends et{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Df extends et{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Ro extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class If extends et{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Co extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ff extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Ff.prototype.isFloat16BufferAttribute=!0;class xe extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}}class Bf extends et{constructor(e,t,n){super(new Float64Array(e),t,n)}}function zf(o){if(o.length===0)return-1/0;let e=o[0];for(let t=1,n=o.length;t<n;++t)o[t]>e&&(e=o[t]);return e}const om={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function sr(o,e){return new om[o](e)}let am=0;const Kt=new Re,ba=new Ve,Xi=new L,Jt=new Qt,zr=new Qt,Tt=new L;class Ie extends Qn{constructor(){super(),Object.defineProperty(this,"id",{value:am++}),this.uuid=jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)>65535?Co:Ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(Jt.min,zr.min),Jt.expandByPoint(Tt),Tt.addVectors(Jt.max,zr.max),Jt.expandByPoint(Tt)):(Jt.expandByPoint(zr.min),Jt.expandByPoint(zr.max))}Jt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),Tt.add(Xi)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new et(new Float32Array(4*a),4));const l=t.tangent.array,c=[],u=[];for(let O=0;O<a;O++)c[O]=new L,u[O]=new L;const f=new L,h=new L,d=new L,p=new ee,v=new ee,x=new ee,g=new L,m=new L;function M(O,z,$){f.fromArray(i,O*3),h.fromArray(i,z*3),d.fromArray(i,$*3),p.fromArray(s,O*2),v.fromArray(s,z*2),x.fromArray(s,$*2),h.sub(f),d.sub(f),v.sub(p),x.sub(p);const V=1/(v.x*x.y-x.x*v.y);isFinite(V)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(d,-v.y).multiplyScalar(V),m.copy(d).multiplyScalar(v.x).addScaledVector(h,-x.x).multiplyScalar(V),c[O].add(g),c[z].add(g),c[$].add(g),u[O].add(m),u[z].add(m),u[$].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let O=0,z=w.length;O<z;++O){const $=w[O],V=$.start,H=$.count;for(let Y=V,W=V+H;Y<W;Y+=3)M(n[Y+0],n[Y+1],n[Y+2])}const C=new L,F=new L,T=new L,B=new L;function G(O){T.fromArray(r,O*3),B.copy(T);const z=c[O];C.copy(z),C.sub(T.multiplyScalar(T.dot(z))).normalize(),F.crossVectors(B,z);const V=F.dot(u[O])<0?-1:1;l[O*4]=C.x,l[O*4+1]=C.y,l[O*4+2]=C.z,l[O*4+3]=V}for(let O=0,z=w.length;O<z;++O){const $=w[O],V=$.start,H=$.count;for(let Y=V,W=V+H;Y<W;Y+=3)G(n[Y+0]),G(n[Y+1]),G(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new L,r=new L,s=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),v=e.getX(h+1),x=e.getX(h+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),u.subVectors(s,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,s.length-c);for(let f=0,h=c;f<u;f++,h++)s[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new et(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ie,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new Ie().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.prototype.isBufferGeometry=!0;const Ic=new Re,Yi=new ei,wa=new Kn,kn=new L,Gn=new L,Hn=new L,Ma=new L,Sa=new L,Ta=new L,Os=new L,Ns=new L,ks=new L,Gs=new ee,Hs=new ee,Vs=new ee,Ea=new L,Ws=new L;class dt extends Ve{constructor(e=new Ie,t=new Bn){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),e.ray.intersectsSphere(wa)===!1)||(Ic.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Ic),n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let v=0,x=d.length;v<x;v++){const g=d[v],m=i[g.materialIndex],M=Math.max(g.start,p.start),w=Math.min(g.start+g.count,p.start+p.count);for(let C=M,F=w;C<F;C+=3){const T=a.getX(C),B=a.getX(C+1),G=a.getX(C+2);s=qs(this,m,e,Yi,l,c,u,f,h,T,B,G),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=v,m=x;g<m;g+=3){const M=a.getX(g),w=a.getX(g+1),C=a.getX(g+2);s=qs(this,i,e,Yi,l,c,u,f,h,M,w,C),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=d.length;v<x;v++){const g=d[v],m=i[g.materialIndex],M=Math.max(g.start,p.start),w=Math.min(g.start+g.count,p.start+p.count);for(let C=M,F=w;C<F;C+=3){const T=C,B=C+1,G=C+2;s=qs(this,m,e,Yi,l,c,u,f,h,T,B,G),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,m=x;g<m;g+=3){const M=g,w=g+1,C=g+2;s=qs(this,i,e,Yi,l,c,u,f,h,M,w,C),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}dt.prototype.isMesh=!0;function lm(o,e,t,n,i,r,s,a){let l;if(e.side===vt?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side!==yi,a),l===null)return null;Ws.copy(a),Ws.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:o}}function qs(o,e,t,n,i,r,s,a,l,c,u,f){kn.fromBufferAttribute(i,c),Gn.fromBufferAttribute(i,u),Hn.fromBufferAttribute(i,f);const h=o.morphTargetInfluences;if(r&&h){Os.set(0,0,0),Ns.set(0,0,0),ks.set(0,0,0);for(let p=0,v=r.length;p<v;p++){const x=h[p],g=r[p];x!==0&&(Ma.fromBufferAttribute(g,c),Sa.fromBufferAttribute(g,u),Ta.fromBufferAttribute(g,f),s?(Os.addScaledVector(Ma,x),Ns.addScaledVector(Sa,x),ks.addScaledVector(Ta,x)):(Os.addScaledVector(Ma.sub(kn),x),Ns.addScaledVector(Sa.sub(Gn),x),ks.addScaledVector(Ta.sub(Hn),x)))}kn.add(Os),Gn.add(Ns),Hn.add(ks)}o.isSkinnedMesh&&(o.boneTransform(c,kn),o.boneTransform(u,Gn),o.boneTransform(f,Hn));const d=lm(o,e,t,n,kn,Gn,Hn,Ea);if(d){a&&(Gs.fromBufferAttribute(a,c),Hs.fromBufferAttribute(a,u),Vs.fromBufferAttribute(a,f),d.uv=yt.getUV(Ea,kn,Gn,Hn,Gs,Hs,Vs,new ee)),l&&(Gs.fromBufferAttribute(l,c),Hs.fromBufferAttribute(l,u),Vs.fromBufferAttribute(l,f),d.uv2=yt.getUV(Ea,kn,Gn,Hn,Gs,Hs,Vs,new ee));const p={a:c,b:u,c:f,normal:new L,materialIndex:0};yt.getNormal(kn,Gn,Hn,p.normal),d.face=p}return d}class Dn extends Ie{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,t,e,s,r,0),p("z","y","x",1,-1,n,t,-e,s,r,1),p("x","z","y",1,1,e,n,t,i,s,2),p("x","z","y",1,-1,e,n,-t,i,s,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(f,2));function p(v,x,g,m,M,w,C,F,T,B,G){const O=w/T,z=C/B,$=w/2,V=C/2,H=F/2,Y=T+1,W=B+1;let Z=0,oe=0;const Se=new L;for(let Ce=0;Ce<W;Ce++){const ve=Ce*z-V;for(let Oe=0;Oe<Y;Oe++){const Q=Oe*O-$;Se[v]=Q*m,Se[x]=ve*M,Se[g]=H,c.push(Se.x,Se.y,Se.z),Se[v]=0,Se[x]=0,Se[g]=F>0?1:-1,u.push(Se.x,Se.y,Se.z),f.push(Oe/T),f.push(1-Ce/B),Z+=1}}for(let Ce=0;Ce<B;Ce++)for(let ve=0;ve<T;ve++){const Oe=h+ve+Y*Ce,Q=h+ve+Y*(Ce+1),ae=h+(ve+1)+Y*(Ce+1),Ee=h+(ve+1)+Y*Ce;l.push(Oe,Q,Ee),l.push(Q,ae,Ee),oe+=6}a.addGroup(d,oe,G),d+=oe,h+=Z}}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(o){const e={};for(let t=0;t<o.length;t++){const n=dr(o[t]);for(const i in n)e[i]=n[i]}return e}const Tl={clone:dr,merge:It};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends At{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=cm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}cn.prototype.isShaderMaterial=!0;class ps extends Ve{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ps.prototype.isCamera=!0;class Et extends ps{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Et.prototype.isPerspectiveCamera=!0;const Zi=90,Ji=1;class Po extends Ve{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Et(Zi,Ji,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const r=new Et(Zi,Ji,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const s=new Et(Zi,Ji,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new L(0,1,0)),this.add(s);const a=new Et(Zi,Ji,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new Et(Zi,Ji,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new Et(Zi,Ji,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.xr.enabled,f=e.getRenderTarget();e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.xr.enabled=u}}class Ar extends Mt{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Sr,a=a!==void 0?a:Pn,super(e,t,n,i,r,s,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ar.prototype.isCubeTexture=!0;class Do extends en{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Ar(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Ft,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dn(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:Cn});r.uniforms.tEquirect.value=t;const s=new dt(i,r),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=xt),new Po(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}Do.prototype.isWebGLCubeRenderTarget=!0;const Aa=new L,hm=new L,fm=new wt;class gn{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Aa.subVectors(n,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fm.getNormalMatrix(e),i=this.coplanarPoint(Aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}gn.prototype.isPlane=!0;const ji=new Kn,Xs=new L;class ms{constructor(e=new gn,t=new gn,n=new gn,i=new gn,r=new gn,s=new gn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],p=n[10],v=n[11],x=n[12],g=n[13],m=n[14],M=n[15];return t[0].setComponents(a-i,f-l,v-h,M-x).normalize(),t[1].setComponents(a+i,f+l,v+h,M+x).normalize(),t[2].setComponents(a+r,f+c,v+d,M+g).normalize(),t[3].setComponents(a-r,f-c,v-d,M-g).normalize(),t[4].setComponents(a-s,f-u,v-p,M-m).normalize(),t[5].setComponents(a+s,f+u,v+p,M+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uf(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function dm(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=o.createBuffer();o.bindBuffer(u,d),o.bufferData(u,f,h),c.onUploadCallback();let p=5126;return f instanceof Float32Array?p=5126:f instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):f instanceof Uint16Array?c.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:f instanceof Int16Array?p=5122:f instanceof Uint32Array?p=5125:f instanceof Int32Array?p=5124:f instanceof Int8Array?p=5120:(f instanceof Uint8Array||f instanceof Uint8ClampedArray)&&(p=5121),{buffer:d,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,d=u.updateRange;o.bindBuffer(f,c),d.count===-1?o.bufferSubData(f,0,h):(t?o.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):o.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:s,remove:a,update:l}}class _i extends Ie{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],v=[],x=[];for(let g=0;g<u;g++){const m=g*h-s;for(let M=0;M<c;M++){const w=M*f-r;p.push(w,-m,0),v.push(0,0,1),x.push(M/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let m=0;m<a;m++){const M=m+c*g,w=m+c*(g+1),C=m+1+c*(g+1),F=m+1+c*g;d.push(M,w,F),d.push(w,C,F)}this.setIndex(d),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(x,2))}static fromJSON(e){return new _i(e.width,e.height,e.widthSegments,e.heightSegments)}}var pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m="vec3 transformed = vec3( position );",bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotVH = saturate( dot( geometry.viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float NoH ) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float NoV, float NoL ) {
	return saturate( 1.0 / ( 4.0 * ( NoL + NoV - NoL * NoV ) ) );
}
vec3 BRDF_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,eg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tg=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in GeometricContext geometry ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
#endif`,ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( material.roughness, directLight.direction, geometry, material.sheenTint );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mg=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,wg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Tg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Wg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = transmission.a;
#endif`,ev=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,tv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,nv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,iv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,sv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ov=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Uv=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const He={alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:vm,aomap_fragment:ym,aomap_pars_fragment:xm,begin_vertex:_m,beginnormal_vertex:bm,bsdfs:wm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:Am,color_fragment:Lm,color_pars_fragment:Rm,color_pars_vertex:Cm,color_vertex:Pm,common:Dm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:Um,emissivemap_pars_fragment:Om,encodings_fragment:Nm,encodings_pars_fragment:km,envmap_fragment:Gm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Vm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:tg,envmap_vertex:qm,fog_vertex:Xm,fog_pars_vertex:Ym,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:jm,lightmap_fragment:$m,lightmap_pars_fragment:Qm,lights_lambert_vertex:Km,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:rg,lights_phong_pars_fragment:sg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:ug,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:vg,map_particle_pars_fragment:yg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:_g,morphnormal_vertex:bg,morphtarget_pars_vertex:wg,morphtarget_vertex:Mg,normal_fragment_begin:Sg,normal_fragment_maps:Tg,normal_pars_fragment:Eg,normal_pars_vertex:Ag,normal_vertex:Lg,normalmap_pars_fragment:Rg,clearcoat_normal_fragment_begin:Cg,clearcoat_normal_fragment_maps:Pg,clearcoat_pars_fragment:Dg,output_fragment:Ig,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:Ug,dithering_pars_fragment:Og,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Vg,shadowmask_pars_fragment:Wg,skinbase_vertex:qg,skinning_pars_vertex:Xg,skinning_vertex:Yg,skinnormal_vertex:Zg,specularmap_fragment:Jg,specularmap_pars_fragment:jg,tonemapping_fragment:$g,tonemapping_pars_fragment:Qg,transmission_fragment:Kg,transmission_pars_fragment:ev,uv_pars_fragment:tv,uv_pars_vertex:nv,uv_vertex:iv,uv2_pars_fragment:rv,uv2_pars_vertex:sv,uv2_vertex:ov,worldpos_vertex:av,background_frag:lv,background_vert:cv,cube_frag:uv,cube_vert:hv,depth_frag:fv,depth_vert:dv,distanceRGBA_frag:pv,distanceRGBA_vert:mv,equirect_frag:gv,equirect_vert:vv,linedashed_frag:yv,linedashed_vert:xv,meshbasic_frag:_v,meshbasic_vert:bv,meshlambert_frag:wv,meshlambert_vert:Mv,meshmatcap_frag:Sv,meshmatcap_vert:Tv,meshnormal_frag:Ev,meshnormal_vert:Av,meshphong_frag:Lv,meshphong_vert:Rv,meshphysical_frag:Cv,meshphysical_vert:Pv,meshtoon_frag:Dv,meshtoon_vert:Iv,points_frag:Fv,points_vert:Bv,shadow_frag:zv,shadow_vert:Uv,sprite_frag:Ov,sprite_vert:Nv},ue={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}}},ln={basic:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.fog,ue.lights,{emissive:{value:new ge(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:It([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:It([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ge(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:It([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:It([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:It([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:It([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:It([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:It([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null}},vertexShader:He.background_vert,fragmentShader:He.background_frag},cube:{uniforms:It([ue.envmap,{opacity:{value:1}}]),vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:It([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:It([ue.lights,ue.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ln.physical={uniforms:It([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ee(1,1)},clearcoatNormalMap:{value:null},sheenTint:{value:new ge(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new ge(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new ge(1,1,1)},specularTintMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};function kv(o,e,t,n,i){const r=new ge(0);let s=0,a,l,c=null,u=0,f=null;function h(p,v){let x=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=e.get(g));const m=o.xr,M=m.getSession&&m.getSession();M&&M.environmentBlendMode==="additive"&&(g=null),g===null?d(r,s):g&&g.isColor&&(d(g,1),x=!0),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Er)?(l===void 0&&(l=new dt(new Dn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:dr(ln.cube.uniforms),vertexShader:ln.cube.vertexShader,fragmentShader:ln.cube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,(c!==g||u!==g.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,c=g,u=g.version,f=o.toneMapping),p.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(a===void 0&&(a=new dt(new _i(2,2),new cn({name:"BackgroundMaterial",uniforms:dr(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),a.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||u!==g.version||f!==o.toneMapping)&&(a.material.needsUpdate=!0,c=g,u=g.version,f=o.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function d(p,v){t.buffers.color.setClear(p.r,p.g,p.b,v,i)}return{getClearColor:function(){return r},setClearColor:function(p,v=1){r.set(p),s=v,d(r,s)},getClearAlpha:function(){return s},setClearAlpha:function(p){s=p,d(r,s)},render:h}}function Gv(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=v(null);let c=l;function u(V,H,Y,W,Z){let oe=!1;if(s){const Se=p(W,Y,H);c!==Se&&(c=Se,h(c.object)),oe=x(W,Z),oe&&g(W,Z)}else{const Se=H.wireframe===!0;(c.geometry!==W.id||c.program!==Y.id||c.wireframe!==Se)&&(c.geometry=W.id,c.program=Y.id,c.wireframe=Se,oe=!0)}V.isInstancedMesh===!0&&(oe=!0),Z!==null&&t.update(Z,34963),oe&&(T(V,H,Y,W),Z!==null&&o.bindBuffer(34963,t.get(Z).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function h(V){return n.isWebGL2?o.bindVertexArray(V):r.bindVertexArrayOES(V)}function d(V){return n.isWebGL2?o.deleteVertexArray(V):r.deleteVertexArrayOES(V)}function p(V,H,Y){const W=Y.wireframe===!0;let Z=a[V.id];Z===void 0&&(Z={},a[V.id]=Z);let oe=Z[H.id];oe===void 0&&(oe={},Z[H.id]=oe);let Se=oe[W];return Se===void 0&&(Se=v(f()),oe[W]=Se),Se}function v(V){const H=[],Y=[],W=[];for(let Z=0;Z<i;Z++)H[Z]=0,Y[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:W,object:V,attributes:{},index:null}}function x(V,H){const Y=c.attributes,W=V.attributes;let Z=0;for(const oe in W){const Se=Y[oe],Ce=W[oe];if(Se===void 0||Se.attribute!==Ce||Se.data!==Ce.data)return!0;Z++}return c.attributesNum!==Z||c.index!==H}function g(V,H){const Y={},W=V.attributes;let Z=0;for(const oe in W){const Se=W[oe],Ce={};Ce.attribute=Se,Se.data&&(Ce.data=Se.data),Y[oe]=Ce,Z++}c.attributes=Y,c.attributesNum=Z,c.index=H}function m(){const V=c.newAttributes;for(let H=0,Y=V.length;H<Y;H++)V[H]=0}function M(V){w(V,0)}function w(V,H){const Y=c.newAttributes,W=c.enabledAttributes,Z=c.attributeDivisors;Y[V]=1,W[V]===0&&(o.enableVertexAttribArray(V),W[V]=1),Z[V]!==H&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,H),Z[V]=H)}function C(){const V=c.newAttributes,H=c.enabledAttributes;for(let Y=0,W=H.length;Y<W;Y++)H[Y]!==V[Y]&&(o.disableVertexAttribArray(Y),H[Y]=0)}function F(V,H,Y,W,Z,oe){n.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(V,H,Y,Z,oe):o.vertexAttribPointer(V,H,Y,W,Z,oe)}function T(V,H,Y,W){if(n.isWebGL2===!1&&(V.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const Z=W.attributes,oe=Y.getAttributes(),Se=H.defaultAttributeValues;for(const Ce in oe){const ve=oe[Ce];if(ve.location>=0){let Oe=Z[Ce];if(Oe===void 0&&(Ce==="instanceMatrix"&&V.instanceMatrix&&(Oe=V.instanceMatrix),Ce==="instanceColor"&&V.instanceColor&&(Oe=V.instanceColor)),Oe!==void 0){const Q=Oe.normalized,ae=Oe.itemSize,Ee=t.get(Oe);if(Ee===void 0)continue;const q=Ee.buffer,De=Ee.type,Be=Ee.bytesPerElement;if(Oe.isInterleavedBufferAttribute){const se=Oe.data,_e=se.stride,ke=Oe.offset;if(se&&se.isInstancedInterleavedBuffer){for(let J=0;J<ve.locationSize;J++)w(ve.location+J,se.meshPerAttribute);V.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let J=0;J<ve.locationSize;J++)M(ve.location+J);o.bindBuffer(34962,q);for(let J=0;J<ve.locationSize;J++)F(ve.location+J,ae/ve.locationSize,De,Q,_e*Be,(ke+ae/ve.locationSize*J)*Be)}else{if(Oe.isInstancedBufferAttribute){for(let se=0;se<ve.locationSize;se++)w(ve.location+se,Oe.meshPerAttribute);V.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let se=0;se<ve.locationSize;se++)M(ve.location+se);o.bindBuffer(34962,q);for(let se=0;se<ve.locationSize;se++)F(ve.location+se,ae/ve.locationSize,De,Q,ae*Be,ae/ve.locationSize*se*Be)}}else if(Se!==void 0){const Q=Se[Ce];if(Q!==void 0)switch(Q.length){case 2:o.vertexAttrib2fv(ve.location,Q);break;case 3:o.vertexAttrib3fv(ve.location,Q);break;case 4:o.vertexAttrib4fv(ve.location,Q);break;default:o.vertexAttrib1fv(ve.location,Q)}}}}C()}function B(){z();for(const V in a){const H=a[V];for(const Y in H){const W=H[Y];for(const Z in W)d(W[Z].object),delete W[Z];delete H[Y]}delete a[V]}}function G(V){if(a[V.id]===void 0)return;const H=a[V.id];for(const Y in H){const W=H[Y];for(const Z in W)d(W[Z].object),delete W[Z];delete H[Y]}delete a[V.id]}function O(V){for(const H in a){const Y=a[H];if(Y[V.id]===void 0)continue;const W=Y[V.id];for(const Z in W)d(W[Z].object),delete W[Z];delete Y[V.id]}}function z(){$(),c!==l&&(c=l,h(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:$,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:m,enableAttribute:M,disableUnusedAttributes:C}}function Hv(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=o,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,c,u,f),t.update(u,r,f)}this.setMode=s,this.render=a,this.renderInstances=l}function Vv(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=o.getParameter(34930),h=o.getParameter(35660),d=o.getParameter(3379),p=o.getParameter(34076),v=o.getParameter(34921),x=o.getParameter(36347),g=o.getParameter(36348),m=o.getParameter(36349),M=h>0,w=s||e.has("OES_texture_float"),C=M&&w,F=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:F}}function Wv(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new gn,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const p=f.length!==0||h||n!==0||i;return i=h,t=u(f,d,0),n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,d){const p=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,g=o.get(f);if(!i||p===null||p.length===0||r&&!x)r?u(null):c();else{const m=r?0:n,M=m*4;let w=g.clippingState||null;l.value=w,w=u(p,h,M,d);for(let C=0;C!==M;++C)w[C]=t[C];g.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){const v=f!==null?f.length:0;let x=null;if(v!==0){if(x=l.value,p!==!0||x===null){const g=d+v*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(x===null||x.length<g)&&(x=new Float32Array(g));for(let M=0,w=d;M!==v;++M,w+=4)s.copy(f[M]).applyMatrix4(m,a),s.normal.toArray(x,w),x[w+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function qv(o){let e=new WeakMap;function t(s,a){return a===Zr?s.mapping=Sr:a===Jr&&(s.mapping=Tr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Zr||a===Jr)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=o.getRenderTarget(),u=new Do(l.height/2);return u.fromEquirectangularTexture(o,s),e.set(s,u),o.setRenderTarget(c),s.addEventListener("dispose",i),t(u.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ci extends ps{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Ci.prototype.isOrthographicCamera=!0;class Lr extends cn{constructor(e){super(e),this.type="RawShaderMaterial"}}Lr.prototype.isRawShaderMaterial=!0;const cr=4,qn=8,mn=Math.pow(2,qn),Of=[.125,.215,.35,.446,.526,.582],Nf=qn-cr+1+Of.length,$i=20,vn={[Ot]:0,[ds]:1,[Lo]:2,[xl]:3,[_l]:4,[bl]:5,[Ao]:6},La=new Ci,{_lodPlanes:Ur,_sizeLods:Fc,_sigmas:Ys}=Yv(),Bc=new ge;let Ra=null;const li=(1+Math.sqrt(5))/2,Qi=1/li,zc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,li,Qi),new L(0,li,-Qi),new L(Qi,0,li),new L(-Qi,0,li),new L(li,Qi,0),new L(-li,Qi,0)];class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Zv($i),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ra=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Nc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Oc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ur.length;e++)Ur[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ra),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e){Ra=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:xi,format:Dh,encoding:Xv(e)?e.encoding:Lo,depthBuffer:!1},n=Uc(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Uc(t),n}_compileMaterial(e){const t=new dt(Ur[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,i){const a=new Et(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.outputEncoding,d=u.toneMapping;u.getClearColor(Bc),u.toneMapping=Wn,u.outputEncoding=Ot,u.autoClear=!1;const p=new Bn({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),v=new dt(new Dn,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Bc),x=!0);for(let m=0;m<6;m++){const M=m%3;M==0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M==1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m])),Zs(i,M*mn,m>2?mn:0,mn,mn),u.setRenderTarget(i),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.outputEncoding=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Nc()):this._equirectShader==null&&(this._equirectShader=Oc());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new dt(Ur[0],i),s=i.uniforms;s.envMap.value=e,e.isCubeTexture||s.texelSize.value.set(1/e.image.width,1/e.image.height),s.inputEncoding.value=vn[e.encoding],s.outputEncoding.value=vn[t.texture.encoding],Zs(t,0,0,3*mn,2*mn),n.setRenderTarget(t),n.render(r,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Nf;i++){const r=Math.sqrt(Ys[i]*Ys[i]-Ys[i-1]*Ys[i-1]),s=zc[(i-1)%zc.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dt(Ur[i],c),h=c.uniforms,d=Fc[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$i-1),v=r/p,x=isFinite(r)?1+Math.floor(u*v):$i;x>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${$i}`);const g=[];let m=0;for(let F=0;F<$i;++F){const T=F/v,B=Math.exp(-T*T/2);g.push(B),F==0?m+=B:F<x&&(m+=2*B)}for(let F=0;F<g.length;F++)g[F]=g[F]/m;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=g,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=p,h.mipInt.value=qn-n,h.inputEncoding.value=vn[e.texture.encoding],h.outputEncoding.value=vn[e.texture.encoding];const M=Fc[i],w=3*Math.max(0,mn-2*M),C=(i===0?0:2*mn)+2*M*(i>qn-cr?i-qn+cr:0);Zs(t,w,C,3*M,2*M),l.setRenderTarget(t),l.render(f,La)}}function Xv(o){return o===void 0||o.type!==xi?!1:o.encoding===Ot||o.encoding===ds||o.encoding===Ao}function Yv(){const o=[],e=[],t=[];let n=qn;for(let i=0;i<Nf;i++){const r=Math.pow(2,n);e.push(r);let s=1/r;i>qn-cr?s=Of[i-qn+cr-1]:i==0&&(s=0),t.push(s);const a=1/(r-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,p=2,v=1,x=new Float32Array(d*h*f),g=new Float32Array(p*h*f),m=new Float32Array(v*h*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,F=w>2?0:-1,T=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];x.set(T,d*h*w),g.set(u,p*h*w);const B=[w,w,w,w,w,w];m.set(B,v*h*w)}const M=new Ie;M.setAttribute("position",new et(x,d)),M.setAttribute("uv",new et(g,p)),M.setAttribute("faceIndex",new et(m,v)),o.push(M),n>cr&&n--}return{_lodPlanes:o,_sizeLods:e,_sigmas:t}}function Uc(o){const e=new en(3*mn,3*mn,o);return e.texture.mapping=Er,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Zs(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Zv(o){const e=new Float32Array(o),t=new L(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:o},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:vn[Ot]},outputEncoding:{value:vn[Ot]}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Al()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Oc(){const o=new ee(1,1);return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:o},inputEncoding:{value:vn[Ot]},outputEncoding:{value:vn[Ot]}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Al()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Nc(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:vn[Ot]},outputEncoding:{value:vn[Ot]}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Al()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Al(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Jv(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===Zr||l===Jr,u=l===Sr||l===Tr;if(c||u){if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){const h=o.getRenderTarget();t===null&&(t=new kf(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),o.setRenderTarget(h),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function jv(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $v(o,e,t,n){const i={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",s),delete i[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],34962);const d=f.morphAttributes;for(const p in d){const v=d[p];for(let x=0,g=v.length;x<g;x++)e.update(v[x],34962)}}function c(f){const h=[],d=f.index,p=f.attributes.position;let v=0;if(d!==null){const m=d.array;v=d.version;for(let M=0,w=m.length;M<w;M+=3){const C=m[M+0],F=m[M+1],T=m[M+2];h.push(C,F,F,T,T,C)}}else{const m=p.array;v=p.version;for(let M=0,w=m.length/3-1;M<w;M+=3){const C=M+0,F=M+1,T=M+2;h.push(C,F,F,T,T,C)}}const x=new(zf(h)>65535?Co:Ro)(h,1);x.version=v;const g=r.get(f);g&&e.remove(g),r.set(f,x)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Qv(o,e,t,n){const i=n.isWebGL2;let r;function s(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){o.drawElements(r,d,a,h*l),t.update(d,r,1)}function f(h,d,p){if(p===0)return;let v,x;if(i)v=o,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](r,d,a,h*l,p),t.update(d,r,p)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f}function Kv(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function e0(o,e){return o[0]-e[0]}function t0(o,e){return Math.abs(e[1])-Math.abs(o[1])}function n0(o){const e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,s,a,l){const c=r.morphTargetInfluences,u=c===void 0?0:c.length;let f=e[s.id];if(f===void 0||f.length!==u){f=[];for(let x=0;x<u;x++)f[x]=[x,0];e[s.id]=f}for(let x=0;x<u;x++){const g=f[x];g[0]=x,g[1]=c[x]}f.sort(t0);for(let x=0;x<8;x++)x<u&&f[x][1]?(n[x][0]=f[x][0],n[x][1]=f[x][1]):(n[x][0]=Number.MAX_SAFE_INTEGER,n[x][1]=0);n.sort(e0);const h=s.morphAttributes.position,d=s.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const g=n[x],m=g[0],M=g[1];m!==Number.MAX_SAFE_INTEGER&&M?(h&&s.getAttribute("morphTarget"+x)!==h[m]&&s.setAttribute("morphTarget"+x,h[m]),d&&s.getAttribute("morphNormal"+x)!==d[m]&&s.setAttribute("morphNormal"+x,d[m]),t[x]=M,p+=M):(h&&s.hasAttribute("morphTarget"+x)===!0&&s.deleteAttribute("morphTarget"+x),d&&s.hasAttribute("morphNormal"+x)===!0&&s.deleteAttribute("morphNormal"+x),t[x]=0)}const v=s.morphTargetsRelative?1:1-p;l.getUniforms().setValue(o,"morphTargetBaseInfluence",v),l.getUniforms().setValue(o,"morphTargetInfluences",t)}return{update:i}}function i0(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class Ll extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ll.prototype.isDataTexture2DArray=!0;class Rl extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Rl.prototype.isDataTexture3D=!0;const Gf=new Mt,r0=new Ll,s0=new Rl,Hf=new Ar,kc=[],Gc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function Rr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=kc[i];if(r===void 0&&(r=new Float32Array(i),kc[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Nt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Bt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Vf(o,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function o0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function a0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;o.uniform2fv(this.addr,e),Bt(t,e)}}function l0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;o.uniform3fv(this.addr,e),Bt(t,e)}}function c0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;o.uniform4fv(this.addr,e),Bt(t,e)}}function u0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Nt(t,n))return;Wc.set(n),o.uniformMatrix2fv(this.addr,!1,Wc),Bt(t,n)}}function h0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Nt(t,n))return;Vc.set(n),o.uniformMatrix3fv(this.addr,!1,Vc),Bt(t,n)}}function f0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Nt(t,n))return;Hc.set(n),o.uniformMatrix4fv(this.addr,!1,Hc),Bt(t,n)}}function d0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function p0(o,e){const t=this.cache;Nt(t,e)||(o.uniform2iv(this.addr,e),Bt(t,e))}function m0(o,e){const t=this.cache;Nt(t,e)||(o.uniform3iv(this.addr,e),Bt(t,e))}function g0(o,e){const t=this.cache;Nt(t,e)||(o.uniform4iv(this.addr,e),Bt(t,e))}function v0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function y0(o,e){const t=this.cache;Nt(t,e)||(o.uniform2uiv(this.addr,e),Bt(t,e))}function x0(o,e){const t=this.cache;Nt(t,e)||(o.uniform3uiv(this.addr,e),Bt(t,e))}function _0(o,e){const t=this.cache;Nt(t,e)||(o.uniform4uiv(this.addr,e),Bt(t,e))}function b0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Gf,i)}function w0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||s0,i)}function M0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Hf,i)}function S0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||r0,i)}function T0(o){switch(o){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return u0;case 35675:return h0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return y0;case 36295:return x0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}function E0(o,e){o.uniform1fv(this.addr,e)}function A0(o,e){const t=Rr(e,this.size,2);o.uniform2fv(this.addr,t)}function L0(o,e){const t=Rr(e,this.size,3);o.uniform3fv(this.addr,t)}function R0(o,e){const t=Rr(e,this.size,4);o.uniform4fv(this.addr,t)}function C0(o,e){const t=Rr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function P0(o,e){const t=Rr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function D0(o,e){const t=Rr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function I0(o,e){o.uniform1iv(this.addr,e)}function F0(o,e){o.uniform2iv(this.addr,e)}function B0(o,e){o.uniform3iv(this.addr,e)}function z0(o,e){o.uniform4iv(this.addr,e)}function U0(o,e){o.uniform1uiv(this.addr,e)}function O0(o,e){o.uniform2uiv(this.addr,e)}function N0(o,e){o.uniform3uiv(this.addr,e)}function k0(o,e){o.uniform4uiv(this.addr,e)}function G0(o,e,t){const n=e.length,i=Vf(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||Gf,i[r])}function H0(o,e,t){const n=e.length,i=Vf(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Hf,i[r])}function V0(o){switch(o){case 5126:return E0;case 35664:return A0;case 35665:return L0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return D0;case 5124:case 35670:return I0;case 35667:case 35671:return F0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return U0;case 36294:return O0;case 36295:return N0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35680:case 36300:case 36308:case 36293:return H0}}function W0(o,e,t){this.id=o,this.addr=t,this.cache=[],this.setValue=T0(e.type)}function Wf(o,e,t){this.id=o,this.addr=t,this.cache=[],this.size=e.size,this.setValue=V0(e.type)}Wf.prototype.updateCache=function(o){const e=this.cache;o instanceof Float32Array&&e.length!==o.length&&(this.cache=new Float32Array(o.length)),Bt(e,o)};function qf(o){this.id=o,this.seq=[],this.map={}}qf.prototype.setValue=function(o,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.setValue(o,e[s.id],t)}};const Ca=/(\w+)(\])?(\[|\.)?/g;function qc(o,e){o.seq.push(e),o.map[e.id]=e}function q0(o,e,t){const n=o.name,i=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),s=Ca.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){qc(t,c===void 0?new W0(a,o,e):new Wf(a,o,e));break}else{let f=t.map[a];f===void 0&&(f=new qf(a),qc(t,f)),t=f}}}function Xn(o,e){this.seq=[],this.map={};const t=o.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=o.getActiveUniform(e,n),r=o.getUniformLocation(e,i.name);q0(i,r,this)}}Xn.prototype.setValue=function(o,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(o,t,n)};Xn.prototype.setOptional=function(o,e,t){const n=e[t];n!==void 0&&this.setValue(o,t,n)};Xn.upload=function(o,e,t,n){for(let i=0,r=e.length;i!==r;++i){const s=e[i],a=t[s.id];a.needsUpdate!==!1&&s.setValue(o,a.value,n)}};Xn.seqWithValue=function(o,e){const t=[];for(let n=0,i=o.length;n!==i;++n){const r=o[n];r.id in e&&t.push(r)}return t};function Xc(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let X0=0;function Y0(o){const e=o.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Xf(o){switch(o){case Ot:return["Linear","( value )"];case ds:return["sRGB","( value )"];case Lo:return["RGBE","( value )"];case xl:return["RGBM","( value, 7.0 )"];case _l:return["RGBM","( value, 16.0 )"];case bl:return["RGBD","( value, 256.0 )"];case Ao:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case _f:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Yc(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+Y0(o.getShaderSource(e))}function Ki(o,e){const t=Xf(e);return"vec4 "+o+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Z0(o,e){const t=Xf(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function J0(o,e){let t;switch(e){case yh:t="Linear";break;case xh:t="Reinhard";break;case _h:t="OptimizedCineon";break;case bh:t="ACESFilmic";break;case wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function j0(o){return[o.extensionDerivatives||o.envMapCubeUV||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function $0(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q0(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function Vr(o){return o!==""}function Zc(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(o){return o.replace(K0,ey)}function ey(o,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ol(t)}const ty=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(o){return o.replace(ny,Yf).replace(ty,iy)}function iy(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Yf(o,e,t,n)}function Yf(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $c(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ry(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function sy(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Sr:case Tr:e="ENVMAP_TYPE_CUBE";break;case Er:case fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oy(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Tr:case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function ay(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case hs:e="ENVMAP_BLENDING_MULTIPLY";break;case gh:e="ENVMAP_BLENDING_MIX";break;case vh:e="ENVMAP_BLENDING_ADD";break}return e}function ly(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=ry(t),c=sy(t),u=oy(t),f=ay(t),h=o.gammaFactor>0?o.gammaFactor:1,d=t.isWebGL2?"":j0(t),p=$0(r),v=i.createProgram();let x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[p].filter(Vr).join(`
`),x.length>0&&(x+=`
`),g=[d,p].filter(Vr).join(`
`),g.length>0&&(g+=`
`)):(x=[$c(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),g=[d,$c(t),"#define SHADER_NAME "+t.shaderName,p,"#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheenTint?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?He.tonemapping_pars_fragment:"",t.toneMapping!==Wn?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Pn?"#define OPAQUE":"",He.encodings_pars_fragment,t.map?Ki("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ki("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ki("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ki("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?Ki("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?Ki("lightMapTexelToLinear",t.lightMapEncoding):"",Z0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),s=ol(s),s=Zc(s,t),s=Jc(s,t),a=ol(a),a=Zc(a,t),a=Jc(a,t),s=jc(s),a=jc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===rl?"":"out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=m+x+s,w=m+g+a,C=Xc(i,35633,M),F=Xc(i,35632,w);if(i.attachShader(v,C),i.attachShader(v,F),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),o.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(C).trim(),z=i.getShaderInfoLog(F).trim();let $=!0,V=!0;if(i.getProgramParameter(v,35714)===!1){$=!1;const H=Yc(i,C,"vertex"),Y=Yc(i,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+G+`
`+H+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||z==="")&&(V=!1);V&&(this.diagnostics={runnable:$,programLog:G,vertexShader:{log:O,prefix:x},fragmentShader:{log:z,prefix:g}})}i.deleteShader(C),i.deleteShader(F);let T;this.getUniforms=function(){return T===void 0&&(T=new Xn(i,v)),T};let B;return this.getAttributes=function(){return B===void 0&&(B=Q0(i,v)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=F,this}function cy(o,e,t,n,i,r,s){const a=[],l=i.isWebGL2,c=i.logarithmicDepthBuffer,u=i.floatVertexTextures,f=i.maxVertexUniforms,h=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheenTint","transmission","transmissionMap","thicknessMap"];function x(T){const G=T.skeleton.bones;if(u)return 1024;{const z=Math.floor((f-20)/4),$=Math.min(z,G.length);return $<G.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+G.length+" bones. This GPU supports "+$+"."),0):$}}function g(T){let B;return T&&T.isTexture?B=T.encoding:T&&T.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),B=T.texture.encoding):B=Ot,B}function m(T,B,G,O,z){const $=O.fog,V=T.isMeshStandardMaterial?O.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||V),Y=p[T.type],W=z.isSkinnedMesh?x(z):0;T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let Z,oe;if(Y){const Q=ln[Y];Z=Q.vertexShader,oe=Q.fragmentShader}else Z=T.vertexShader,oe=T.fragmentShader;const Se=o.getRenderTarget(),Ce=T.alphaTest>0,ve=T.clearcoat>0;return{isWebGL2:l,shaderID:Y,shaderName:T.type,vertexShader:Z,fragmentShader:oe,defines:T.defines,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Se!==null?g(Se.texture):o.outputEncoding,map:!!T.map,mapEncoding:g(T.map),matcap:!!T.matcap,matcapEncoding:g(T.matcap),envMap:!!H,envMapMode:H&&H.mapping,envMapEncoding:g(H),envMapCubeUV:!!H&&(H.mapping===Er||H.mapping===fs),lightMap:!!T.lightMap,lightMapEncoding:g(T.lightMap),aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,emissiveMapEncoding:g(T.emissiveMap),bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===Mf,tangentSpaceNormalMap:T.normalMapType===Ai,clearcoat:ve,clearcoatMap:ve&&!!T.clearcoatMap,clearcoatRoughnessMap:ve&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!T.clearcoatNormalMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularTintMap:!!T.specularTintMap,specularTintMapEncoding:g(T.specularTintMap),alphaMap:!!T.alphaMap,alphaTest:Ce,gradientMap:!!T.gradientMap,sheenTint:!!T.sheenTint&&(T.sheenTint.r>0||T.sheenTint.g>0||T.sheenTint.b>0),transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!z.geometry&&!!z.geometry.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!z.geometry&&!!z.geometry.attributes.color&&z.geometry.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularTintMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.transmission>0||T.transmissionMap||T.thicknessMap||T.specularIntensityMap||T.specularTintMap)&&!!T.displacementMap,fog:!!$,useFog:T.fog,fogExp2:$&&$.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:c,skinning:z.isSkinnedMesh===!0&&W>0,maxBones:W,useVertexTexture:u,morphTargets:!!z.geometry&&!!z.geometry.morphAttributes.position,morphNormals:!!z.geometry&&!!z.geometry.morphAttributes.normal,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,format:T.format,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:T.toneMapped?o.toneMapping:Wn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yi,flipSided:T.side===vt,depthPacking:T.depthPacking!==void 0?T.depthPacking:!1,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function M(T){const B=[];if(T.shaderID?B.push(T.shaderID):(B.push(T.fragmentShader),B.push(T.vertexShader)),T.defines!==void 0)for(const G in T.defines)B.push(G),B.push(T.defines[G]);if(T.isRawShaderMaterial===!1){for(let G=0;G<v.length;G++)B.push(T[v[G]]);B.push(o.outputEncoding),B.push(o.gammaFactor)}return B.push(T.customProgramCacheKey),B.join()}function w(T){const B=p[T.type];let G;if(B){const O=ln[B];G=Tl.clone(O.uniforms)}else G=T.uniforms;return G}function C(T,B){let G;for(let O=0,z=a.length;O<z;O++){const $=a[O];if($.cacheKey===B){G=$,++G.usedTimes;break}}return G===void 0&&(G=new ly(o,B,T,r),a.push(G)),G}function F(T){if(--T.usedTimes===0){const B=a.indexOf(T);a[B]=a[a.length-1],a.pop(),T.destroy()}}return{getParameters:m,getProgramCacheKey:M,getUniforms:w,acquireProgram:C,releaseProgram:F,programs:a}}function uy(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.program!==e.program?o.program.id-e.program.id:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Qc(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Kc(o){const e=[];let t=0;const n=[],i=[],r=[],s={id:-1};function a(){t=0,n.length=0,i.length=0,r.length=0}function l(d,p,v,x,g,m){let M=e[t];const w=o.get(v);return M===void 0?(M={id:d.id,object:d,geometry:p,material:v,program:w.program||s,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},e[t]=M):(M.id=d.id,M.object=d,M.geometry=p,M.material=v,M.program=w.program||s,M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=m),t++,M}function c(d,p,v,x,g,m){const M=l(d,p,v,x,g,m);v.transmission>0?i.push(M):v.transparent===!0?r.push(M):n.push(M)}function u(d,p,v,x,g,m){const M=l(d,p,v,x,g,m);v.transmission>0?i.unshift(M):v.transparent===!0?r.unshift(M):n.unshift(M)}function f(d,p){n.length>1&&n.sort(d||hy),i.length>1&&i.sort(p||Qc),r.length>1&&r.sort(p||Qc)}function h(){for(let d=t,p=e.length;d<p;d++){const v=e[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:c,unshift:u,finish:h,sort:f}}function fy(o){let e=new WeakMap;function t(i,r){let s;return e.has(i)===!1?(s=new Kc(o),e.set(i,[s])):r>=e.get(i).length?(s=new Kc(o),e.get(i).push(s)):s=e.get(i)[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function dy(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ge};break;case"SpotLight":t={position:new L,direction:new L,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new L,halfWidth:new L,halfHeight:new L};break}return o[e.id]=t,t}}}function py(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let my=0;function gy(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function vy(o,e){const t=new dy,n=py(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,s=new Re,a=new Re;function l(u,f){let h=0,d=0,p=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,x=0,g=0,m=0,M=0,w=0,C=0,F=0;u.sort(gy);const T=f!==!0?Math.PI:1;for(let G=0,O=u.length;G<O;G++){const z=u[G],$=z.color,V=z.intensity,H=z.distance,Y=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=$.r*V*T,d+=$.g*V*T,p+=$.b*V*T;else if(z.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(z.sh.coefficients[W],V);else if(z.isDirectionalLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const Z=z.shadow,oe=n.get(z);oe.shadowBias=Z.bias,oe.shadowNormalBias=Z.normalBias,oe.shadowRadius=Z.radius,oe.shadowMapSize=Z.mapSize,i.directionalShadow[v]=oe,i.directionalShadowMap[v]=Y,i.directionalShadowMatrix[v]=z.shadow.matrix,w++}i.directional[v]=W,v++}else if(z.isSpotLight){const W=t.get(z);if(W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy($).multiplyScalar(V*T),W.distance=H,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,z.castShadow){const Z=z.shadow,oe=n.get(z);oe.shadowBias=Z.bias,oe.shadowNormalBias=Z.normalBias,oe.shadowRadius=Z.radius,oe.shadowMapSize=Z.mapSize,i.spotShadow[g]=oe,i.spotShadowMap[g]=Y,i.spotShadowMatrix[g]=z.shadow.matrix,F++}i.spot[g]=W,g++}else if(z.isRectAreaLight){const W=t.get(z);W.color.copy($).multiplyScalar(V),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),i.rectArea[m]=W,m++}else if(z.isPointLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*T),W.distance=z.distance,W.decay=z.decay,z.castShadow){const Z=z.shadow,oe=n.get(z);oe.shadowBias=Z.bias,oe.shadowNormalBias=Z.normalBias,oe.shadowRadius=Z.radius,oe.shadowMapSize=Z.mapSize,oe.shadowCameraNear=Z.camera.near,oe.shadowCameraFar=Z.camera.far,i.pointShadow[x]=oe,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=z.shadow.matrix,C++}i.point[x]=W,x++}else if(z.isHemisphereLight){const W=t.get(z);W.skyColor.copy(z.color).multiplyScalar(V*T),W.groundColor.copy(z.groundColor).multiplyScalar(V*T),i.hemi[M]=W,M++}}m>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const B=i.hash;(B.directionalLength!==v||B.pointLength!==x||B.spotLength!==g||B.rectAreaLength!==m||B.hemiLength!==M||B.numDirectionalShadows!==w||B.numPointShadows!==C||B.numSpotShadows!==F)&&(i.directional.length=v,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=F,i.spotShadowMap.length=F,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=C,i.spotShadowMatrix.length=F,B.directionalLength=v,B.pointLength=x,B.spotLength=g,B.rectAreaLength=m,B.hemiLength=M,B.numDirectionalShadows=w,B.numPointShadows=C,B.numSpotShadows=F,i.version=my++)}function c(u,f){let h=0,d=0,p=0,v=0,x=0;const g=f.matrixWorldInverse;for(let m=0,M=u.length;m<M;m++){const w=u[m];if(w.isDirectionalLight){const C=i.directional[h];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),h++}else if(w.isSpotLight){const C=i.spot[p];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const C=i.rectArea[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),a.identity(),s.copy(w.matrixWorld),s.premultiply(g),a.extractRotation(s),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const C=i.point[d];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){const C=i.hemi[x];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(g),C.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function eu(o,e){const t=new vy(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function yy(o,e){let t=new WeakMap;function n(r,s=0){let a;return t.has(r)===!1?(a=new eu(o,e),t.set(r,[a])):s>=t.get(r).length?(a=new eu(o,e),t.get(r).push(a)):a=t.get(r)[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Io extends At{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Io.prototype.isMeshDepthMaterial=!0;class Fo extends At{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Fo.prototype.isMeshDistanceMaterial=!0;var xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,_y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Zf(o,e,t){let n=new ms;const i=new ee,r=new ee,s=new nt,a=new Io({depthPacking:wf}),l=new Fo,c={},u=t.maxTextureSize,f={0:vt,1:vi,2:yi},h=new cn({uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4},samples:{value:8}},vertexShader:_y,fragmentShader:xy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ie;p.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dt(p,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl,this.render=function(w,C,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const T=o.getRenderTarget(),B=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),O=o.state;O.setBlending(Cn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let z=0,$=w.length;z<$;z++){const V=w[z],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Y=H.getFrameExtents();if(i.multiply(Y),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null&&!H.isPointLightShadow&&this.type===rr){const Z={minFilter:xt,magFilter:xt,format:Ft};H.map=new en(i.x,i.y,Z),H.map.texture.name=V.name+".shadowMap",H.mapPass=new en(i.x,i.y,Z),H.camera.updateProjectionMatrix()}if(H.map===null){const Z={minFilter:_t,magFilter:_t,format:Ft};H.map=new en(i.x,i.y,Z),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const W=H.getViewportCount();for(let Z=0;Z<W;Z++){const oe=H.getViewport(Z);s.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),O.viewport(s),H.updateMatrices(V,Z),n=H.getFrustum(),M(C,F,H.camera,V,this.type)}!H.isPointLightShadow&&this.type===rr&&g(H,F),H.needsUpdate=!1}x.needsUpdate=!1,o.setRenderTarget(T,B,G)};function g(w,C){const F=e.update(v);h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,h.uniforms.samples.value=w.blurSamples,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(C,null,F,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,d.uniforms.samples.value=w.blurSamples,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(C,null,F,d,v,null)}function m(w,C,F,T,B,G,O){let z=null;const $=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if($!==void 0?z=$:z=T.isPointLight===!0?l:a,o.localClippingEnabled&&F.clipShadows===!0&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0){const V=z.uuid,H=F.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let W=Y[H];W===void 0&&(W=z.clone(),Y[H]=W),z=W}return z.visible=F.visible,z.wireframe=F.wireframe,O===rr?z.side=F.shadowSide!==null?F.shadowSide:F.side:z.side=F.shadowSide!==null?F.shadowSide:f[F.side],z.alphaMap=F.alphaMap,z.alphaTest=F.alphaTest,z.clipShadows=F.clipShadows,z.clippingPlanes=F.clippingPlanes,z.clipIntersection=F.clipIntersection,z.displacementMap=F.displacementMap,z.displacementScale=F.displacementScale,z.displacementBias=F.displacementBias,z.wireframeLinewidth=F.wireframeLinewidth,z.linewidth=F.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(T.matrixWorld),z.nearDistance=B,z.farDistance=G),z}function M(w,C,F,T,B){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===rr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);const z=e.update(w),$=w.material;if(Array.isArray($)){const V=z.groups;for(let H=0,Y=V.length;H<Y;H++){const W=V[H],Z=$[W.materialIndex];if(Z&&Z.visible){const oe=m(w,z,Z,T,F.near,F.far,B);o.renderBufferDirect(F,null,z,oe,w,W)}}}else if($.visible){const V=m(w,z,$,T,F.near,F.far,B);o.renderBufferDirect(F,null,z,V,w,null)}}const O=w.children;for(let z=0,$=O.length;z<$;z++)M(O[z],C,F,T,B)}}function by(o,e,t){const n=t.isWebGL2;function i(){let N=!1;const me=new nt;let j=null;const ye=new nt(0,0,0,0);return{setMask:function(Me){j!==Me&&!N&&(o.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){N=Me},setClear:function(Me,We,ut,St,bt){bt===!0&&(Me*=St,We*=St,ut*=St),me.set(Me,We,ut,St),ye.equals(me)===!1&&(o.clearColor(Me,We,ut,St),ye.copy(me))},reset:function(){N=!1,j=null,ye.set(-1,0,0,0)}}}function r(){let N=!1,me=null,j=null,ye=null;return{setTest:function(Me){Me?ae(2929):Ee(2929)},setMask:function(Me){me!==Me&&!N&&(o.depthMask(Me),me=Me)},setFunc:function(Me){if(j!==Me){if(Me)switch(Me){case ch:o.depthFunc(512);break;case uh:o.depthFunc(519);break;case hh:o.depthFunc(513);break;case xo:o.depthFunc(515);break;case fh:o.depthFunc(514);break;case dh:o.depthFunc(518);break;case ph:o.depthFunc(516);break;case mh:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);j=Me}},setLocked:function(Me){N=Me},setClear:function(Me){ye!==Me&&(o.clearDepth(Me),ye=Me)},reset:function(){N=!1,me=null,j=null,ye=null}}}function s(){let N=!1,me=null,j=null,ye=null,Me=null,We=null,ut=null,St=null,bt=null;return{setTest:function(lt){N||(lt?ae(2960):Ee(2960))},setMask:function(lt){me!==lt&&!N&&(o.stencilMask(lt),me=lt)},setFunc:function(lt,tn,nn){(j!==lt||ye!==tn||Me!==nn)&&(o.stencilFunc(lt,tn,nn),j=lt,ye=tn,Me=nn)},setOp:function(lt,tn,nn){(We!==lt||ut!==tn||St!==nn)&&(o.stencilOp(lt,tn,nn),We=lt,ut=tn,St=nn)},setLocked:function(lt){N=lt},setClear:function(lt){bt!==lt&&(o.clearStencil(lt),bt=lt)},reset:function(){N=!1,me=null,j=null,ye=null,Me=null,We=null,ut=null,St=null,bt=null}}}const a=new i,l=new r,c=new s;let u={},f=null,h={},d=null,p=!1,v=null,x=null,g=null,m=null,M=null,w=null,C=null,F=!1,T=null,B=null,G=null,O=null,z=null;const $=o.getParameter(35661);let V=!1,H=0;const Y=o.getParameter(7938);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=H>=2);let W=null,Z={};const oe=o.getParameter(3088),Se=o.getParameter(2978),Ce=new nt().fromArray(oe),ve=new nt().fromArray(Se);function Oe(N,me,j){const ye=new Uint8Array(4),Me=o.createTexture();o.bindTexture(N,Me),o.texParameteri(N,10241,9728),o.texParameteri(N,10240,9728);for(let We=0;We<j;We++)o.texImage2D(me+We,0,6408,1,1,0,6408,5121,ye);return Me}const Q={};Q[3553]=Oe(3553,3553,1),Q[34067]=Oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ae(2929),l.setFunc(xo),te(!1),le(Ha),ae(2884),ke(Cn);function ae(N){u[N]!==!0&&(o.enable(N),u[N]=!0)}function Ee(N){u[N]!==!1&&(o.disable(N),u[N]=!1)}function q(N){N!==f&&(o.bindFramebuffer(36160,N),f=N)}function De(N,me){return me===null&&f!==null&&(me=f),h[N]!==me?(o.bindFramebuffer(N,me),h[N]=me,n&&(N===36009&&(h[36160]=me),N===36160&&(h[36009]=me)),!0):!1}function Be(N){return d!==N?(o.useProgram(N),d=N,!0):!1}const se={[ci]:32774,[Qu]:32778,[Ku]:32779};if(n)se[Xa]=32775,se[Ya]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(se[Xa]=N.MIN_EXT,se[Ya]=N.MAX_EXT)}const _e={[eh]:0,[th]:1,[nh]:768,[ml]:770,[lh]:776,[oh]:774,[rh]:772,[ih]:769,[gl]:771,[ah]:775,[sh]:773};function ke(N,me,j,ye,Me,We,ut,St){if(N===Cn){p===!0&&(Ee(3042),p=!1);return}if(p===!1&&(ae(3042),p=!0),N!==$u){if(N!==v||St!==F){if((x!==ci||M!==ci)&&(o.blendEquation(32774),x=ci,M=ci),St)switch(N){case ar:o.blendFuncSeparate(1,771,1,771);break;case Va:o.blendFunc(1,1);break;case Wa:o.blendFuncSeparate(0,0,769,771);break;case qa:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ar:o.blendFuncSeparate(770,771,1,771);break;case Va:o.blendFunc(770,1);break;case Wa:o.blendFunc(0,769);break;case qa:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,m=null,w=null,C=null,v=N,F=St}return}Me=Me||me,We=We||j,ut=ut||ye,(me!==x||Me!==M)&&(o.blendEquationSeparate(se[me],se[Me]),x=me,M=Me),(j!==g||ye!==m||We!==w||ut!==C)&&(o.blendFuncSeparate(_e[j],_e[ye],_e[We],_e[ut]),g=j,m=ye,w=We,C=ut),v=N,F=null}function J(N,me){N.side===yi?Ee(2884):ae(2884);let j=N.side===vt;me&&(j=!j),te(j),N.blending===ar&&N.transparent===!1?ke(Cn):ke(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ye=N.stencilWrite;c.setTest(ye),ye&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(32926):Ee(32926)}function te(N){T!==N&&(N?o.frontFace(2304):o.frontFace(2305),T=N)}function le(N){N!==Zu?(ae(2884),N!==B&&(N===Ha?o.cullFace(1029):N===Ju?o.cullFace(1028):o.cullFace(1032))):Ee(2884),B=N}function de(N){N!==G&&(V&&o.lineWidth(N),G=N)}function ce(N,me,j){N?(ae(32823),(O!==me||z!==j)&&(o.polygonOffset(me,j),O=me,z=j)):Ee(32823)}function D(N){N?ae(3089):Ee(3089)}function R(N){N===void 0&&(N=33984+$-1),W!==N&&(o.activeTexture(N),W=N)}function X(N,me){W===null&&R();let j=Z[W];j===void 0&&(j={type:void 0,texture:void 0},Z[W]=j),(j.type!==N||j.texture!==me)&&(o.bindTexture(N,me||Q[N]),j.type=N,j.texture=me)}function K(){const N=Z[W];N!==void 0&&N.type!==void 0&&(o.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{o.texImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{o.texImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(N){Ce.equals(N)===!1&&(o.scissor(N.x,N.y,N.z,N.w),Ce.copy(N))}function Ue(N){ve.equals(N)===!1&&(o.viewport(N.x,N.y,N.z,N.w),ve.copy(N))}function Ae(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},W=null,Z={},f=null,h={},d=null,p=!1,v=null,x=null,g=null,m=null,M=null,w=null,C=null,F=!1,T=null,B=null,G=null,O=null,z=null,Ce.set(0,0,o.canvas.width,o.canvas.height),ve.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ae,disable:Ee,bindFramebuffer:De,bindXRFramebuffer:q,useProgram:Be,setBlending:ke,setMaterial:J,setFlipSided:te,setCullFace:le,setLineWidth:de,setPolygonOffset:ce,setScissorTest:D,activeTexture:R,bindTexture:X,unbindTexture:K,compressedTexImage2D:pe,texImage2D:be,texImage3D:ze,scissor:Pe,viewport:Ue,reset:Ae}}function wy(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=new WeakMap;let d,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,R){return p?new OffscreenCanvas(D,R):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(D,R,X,K){let pe=1;if((D.width>K||D.height>K)&&(pe=K/Math.max(D.width,D.height)),pe<1||R===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const be=R?Ef:Math.floor,ze=be(pe*D.width),Pe=be(pe*D.height);d===void 0&&(d=v(ze,Pe));const Ue=X?v(ze,Pe):d;return Ue.width=ze,Ue.height=Pe,Ue.getContext("2d").drawImage(D,0,0,ze,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+ze+"x"+Pe+")."),Ue}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function g(D){return sl(D.width)&&sl(D.height)}function m(D){return a?!1:D.wrapS!==Pt||D.wrapT!==Pt||D.minFilter!==_t&&D.minFilter!==xt}function M(D,R){return D.generateMipmaps&&R&&D.minFilter!==_t&&D.minFilter!==xt}function w(D,R,X,K,pe=1){o.generateMipmap(D);const be=n.get(R);be.__maxMipLevel=Math.log2(Math.max(X,K,pe))}function C(D,R,X){if(a===!1)return R;if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let K=R;return R===6403&&(X===5126&&(K=33326),X===5131&&(K=33325),X===5121&&(K=33321)),R===6407&&(X===5126&&(K=34837),X===5131&&(K=34843),X===5121&&(K=32849)),R===6408&&(X===5126&&(K=34836),X===5131&&(K=34842),X===5121&&(K=32856)),(K===33325||K===33326||K===34842||K===34836)&&e.get("EXT_color_buffer_float"),K}function F(D){return D===_t||D===_o||D===bo?9728:9729}function T(D){const R=D.target;R.removeEventListener("dispose",T),G(R),R.isVideoTexture&&h.delete(R),s.memory.textures--}function B(D){const R=D.target;R.removeEventListener("dispose",B),O(R)}function G(D){const R=n.get(D);R.__webglInit!==void 0&&(o.deleteTexture(R.__webglTexture),n.remove(D))}function O(D){const R=D.texture,X=n.get(D),K=n.get(R);if(D){if(K.__webglTexture!==void 0&&(o.deleteTexture(K.__webglTexture),s.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)o.deleteFramebuffer(X.__webglFramebuffer[pe]),X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer[pe]);else o.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&o.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&o.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&o.deleteRenderbuffer(X.__webglDepthRenderbuffer);if(D.isWebGLMultipleRenderTargets)for(let pe=0,be=R.length;pe<be;pe++){const ze=n.get(R[pe]);ze.__webglTexture&&(o.deleteTexture(ze.__webglTexture),s.memory.textures--),n.remove(R[pe])}n.remove(R),n.remove(D)}}let z=0;function $(){z=0}function V(){const D=z;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),z+=1,D}function H(D,R){const X=n.get(D);if(D.isVideoTexture&&J(D),D.version>0&&X.__version!==D.version){const K=D.image;if(K===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(X,D,R);return}}t.activeTexture(33984+R),t.bindTexture(3553,X.__webglTexture)}function Y(D,R){const X=n.get(D);if(D.version>0&&X.__version!==D.version){Oe(X,D,R);return}t.activeTexture(33984+R),t.bindTexture(35866,X.__webglTexture)}function W(D,R){const X=n.get(D);if(D.version>0&&X.__version!==D.version){Oe(X,D,R);return}t.activeTexture(33984+R),t.bindTexture(32879,X.__webglTexture)}function Z(D,R){const X=n.get(D);if(D.version>0&&X.__version!==D.version){Q(X,D,R);return}t.activeTexture(33984+R),t.bindTexture(34067,X.__webglTexture)}const oe={[jr]:10497,[Pt]:33071,[$r]:33648},Se={[_t]:9728,[_o]:9984,[bo]:9986,[xt]:9729,[vl]:9985,[Ei]:9987};function Ce(D,R,X){if(X?(o.texParameteri(D,10242,oe[R.wrapS]),o.texParameteri(D,10243,oe[R.wrapT]),(D===32879||D===35866)&&o.texParameteri(D,32882,oe[R.wrapR]),o.texParameteri(D,10240,Se[R.magFilter]),o.texParameteri(D,10241,Se[R.minFilter])):(o.texParameteri(D,10242,33071),o.texParameteri(D,10243,33071),(D===32879||D===35866)&&o.texParameteri(D,32882,33071),(R.wrapS!==Pt||R.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(D,10240,F(R.magFilter)),o.texParameteri(D,10241,F(R.minFilter)),R.minFilter!==_t&&R.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(R.type===Rn&&e.has("OES_texture_float_linear")===!1||a===!1&&R.type===di&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(o.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function ve(D,R){D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",T),D.__webglTexture=o.createTexture(),s.memory.textures++)}function Oe(D,R,X){let K=3553;R.isDataTexture2DArray&&(K=35866),R.isDataTexture3D&&(K=32879),ve(D,R),t.activeTexture(33984+X),t.bindTexture(K,D.__webglTexture),o.pixelStorei(37440,R.flipY),o.pixelStorei(37441,R.premultiplyAlpha),o.pixelStorei(3317,R.unpackAlignment),o.pixelStorei(37443,0);const pe=m(R)&&g(R.image)===!1,be=x(R.image,pe,!1,u),ze=g(be)||a,Pe=r.convert(R.format);let Ue=r.convert(R.type),Ae=C(R.internalFormat,Pe,Ue);Ce(K,R,ze);let N;const me=R.mipmaps;if(R.isDepthTexture)Ae=6402,a?R.type===Rn?Ae=36012:R.type===Wr?Ae=33190:R.type===lr?Ae=35056:Ae=33189:R.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===pi&&Ae===6402&&R.type!==Qr&&R.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Qr,Ue=r.convert(R.type)),R.format===ur&&Ae===6402&&(Ae=34041,R.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=lr,Ue=r.convert(R.type))),t.texImage2D(3553,0,Ae,be.width,be.height,0,Pe,Ue,null);else if(R.isDataTexture)if(me.length>0&&ze){for(let j=0,ye=me.length;j<ye;j++)N=me[j],t.texImage2D(3553,j,Ae,N.width,N.height,0,Pe,Ue,N.data);R.generateMipmaps=!1,D.__maxMipLevel=me.length-1}else t.texImage2D(3553,0,Ae,be.width,be.height,0,Pe,Ue,be.data),D.__maxMipLevel=0;else if(R.isCompressedTexture){for(let j=0,ye=me.length;j<ye;j++)N=me[j],R.format!==Ft&&R.format!==Pn?Pe!==null?t.compressedTexImage2D(3553,j,Ae,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,j,Ae,N.width,N.height,0,Pe,Ue,N.data);D.__maxMipLevel=me.length-1}else if(R.isDataTexture2DArray)t.texImage3D(35866,0,Ae,be.width,be.height,be.depth,0,Pe,Ue,be.data),D.__maxMipLevel=0;else if(R.isDataTexture3D)t.texImage3D(32879,0,Ae,be.width,be.height,be.depth,0,Pe,Ue,be.data),D.__maxMipLevel=0;else if(me.length>0&&ze){for(let j=0,ye=me.length;j<ye;j++)N=me[j],t.texImage2D(3553,j,Ae,Pe,Ue,N);R.generateMipmaps=!1,D.__maxMipLevel=me.length-1}else t.texImage2D(3553,0,Ae,Pe,Ue,be),D.__maxMipLevel=0;M(R,ze)&&w(K,R,be.width,be.height),D.__version=R.version,R.onUpdate&&R.onUpdate(R)}function Q(D,R,X){if(R.image.length!==6)return;ve(D,R),t.activeTexture(33984+X),t.bindTexture(34067,D.__webglTexture),o.pixelStorei(37440,R.flipY),o.pixelStorei(37441,R.premultiplyAlpha),o.pixelStorei(3317,R.unpackAlignment),o.pixelStorei(37443,0);const K=R&&(R.isCompressedTexture||R.image[0].isCompressedTexture),pe=R.image[0]&&R.image[0].isDataTexture,be=[];for(let j=0;j<6;j++)!K&&!pe?be[j]=x(R.image[j],!1,!0,c):be[j]=pe?R.image[j].image:R.image[j];const ze=be[0],Pe=g(ze)||a,Ue=r.convert(R.format),Ae=r.convert(R.type),N=C(R.internalFormat,Ue,Ae);Ce(34067,R,Pe);let me;if(K){for(let j=0;j<6;j++){me=be[j].mipmaps;for(let ye=0;ye<me.length;ye++){const Me=me[ye];R.format!==Ft&&R.format!==Pn?Ue!==null?t.compressedTexImage2D(34069+j,ye,N,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+j,ye,N,Me.width,Me.height,0,Ue,Ae,Me.data)}}D.__maxMipLevel=me.length-1}else{me=R.mipmaps;for(let j=0;j<6;j++)if(pe){t.texImage2D(34069+j,0,N,be[j].width,be[j].height,0,Ue,Ae,be[j].data);for(let ye=0;ye<me.length;ye++){const We=me[ye].image[j].image;t.texImage2D(34069+j,ye+1,N,We.width,We.height,0,Ue,Ae,We.data)}}else{t.texImage2D(34069+j,0,N,Ue,Ae,be[j]);for(let ye=0;ye<me.length;ye++){const Me=me[ye];t.texImage2D(34069+j,ye+1,N,Ue,Ae,Me.image[j])}}D.__maxMipLevel=me.length}M(R,Pe)&&w(34067,R,ze.width,ze.height),D.__version=R.version,R.onUpdate&&R.onUpdate(R)}function ae(D,R,X,K,pe){const be=r.convert(X.format),ze=r.convert(X.type),Pe=C(X.internalFormat,be,ze);pe===32879||pe===35866?t.texImage3D(pe,0,Pe,R.width,R.height,R.depth,0,be,ze,null):t.texImage2D(pe,0,Pe,R.width,R.height,0,be,ze,null),t.bindFramebuffer(36160,D),o.framebufferTexture2D(36160,K,pe,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ee(D,R,X){if(o.bindRenderbuffer(36161,D),R.depthBuffer&&!R.stencilBuffer){let K=33189;if(X){const pe=R.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Rn?K=36012:pe.type===Wr&&(K=33190));const be=ke(R);o.renderbufferStorageMultisample(36161,be,K,R.width,R.height)}else o.renderbufferStorage(36161,K,R.width,R.height);o.framebufferRenderbuffer(36160,36096,36161,D)}else if(R.depthBuffer&&R.stencilBuffer){if(X){const K=ke(R);o.renderbufferStorageMultisample(36161,K,35056,R.width,R.height)}else o.renderbufferStorage(36161,34041,R.width,R.height);o.framebufferRenderbuffer(36160,33306,36161,D)}else{const K=R.isWebGLMultipleRenderTargets===!0?R.texture[0]:R.texture,pe=r.convert(K.format),be=r.convert(K.type),ze=C(K.internalFormat,pe,be);if(X){const Pe=ke(R);o.renderbufferStorageMultisample(36161,Pe,ze,R.width,R.height)}else o.renderbufferStorage(36161,ze,R.width,R.height)}o.bindRenderbuffer(36161,null)}function q(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const K=n.get(R.depthTexture).__webglTexture;if(R.depthTexture.format===pi)o.framebufferTexture2D(36160,36096,3553,K,0);else if(R.depthTexture.format===ur)o.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function De(D){const R=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture){if(X)throw new Error("target.depthTexture not supported in Cube render targets");q(R.__webglFramebuffer,D)}else if(X){R.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,R.__webglFramebuffer[K]),R.__webglDepthbuffer[K]=o.createRenderbuffer(),Ee(R.__webglDepthbuffer[K],D,!1)}else t.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=o.createRenderbuffer(),Ee(R.__webglDepthbuffer,D,!1);t.bindFramebuffer(36160,null)}function Be(D){const R=D.texture,X=n.get(D),K=n.get(R);D.addEventListener("dispose",B),D.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture=o.createTexture(),K.__version=R.version,s.memory.textures++);const pe=D.isWebGLCubeRenderTarget===!0,be=D.isWebGLMultipleRenderTargets===!0,ze=D.isWebGLMultisampleRenderTarget===!0,Pe=R.isDataTexture3D||R.isDataTexture2DArray,Ue=g(D)||a;if(a&&R.format===Pn&&(R.type===Rn||R.type===di)&&(R.format=Ft,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),pe){X.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)X.__webglFramebuffer[Ae]=o.createFramebuffer()}else if(X.__webglFramebuffer=o.createFramebuffer(),be)if(i.drawBuffers){const Ae=D.texture;for(let N=0,me=Ae.length;N<me;N++){const j=n.get(Ae[N]);j.__webglTexture===void 0&&(j.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(ze)if(a){X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=o.createRenderbuffer(),o.bindRenderbuffer(36161,X.__webglColorRenderbuffer);const Ae=r.convert(R.format),N=r.convert(R.type),me=C(R.internalFormat,Ae,N),j=ke(D);o.renderbufferStorageMultisample(36161,j,me,D.width,D.height),t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064,36161,X.__webglColorRenderbuffer),o.bindRenderbuffer(36161,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),Ee(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(pe){t.bindTexture(34067,K.__webglTexture),Ce(34067,R,Ue);for(let Ae=0;Ae<6;Ae++)ae(X.__webglFramebuffer[Ae],D,R,36064,34069+Ae);M(R,Ue)&&w(34067,R,D.width,D.height),t.unbindTexture()}else if(be){const Ae=D.texture;for(let N=0,me=Ae.length;N<me;N++){const j=Ae[N],ye=n.get(j);t.bindTexture(3553,ye.__webglTexture),Ce(3553,j,Ue),ae(X.__webglFramebuffer,D,j,36064+N,3553),M(j,Ue)&&w(3553,j,D.width,D.height)}t.unbindTexture()}else{let Ae=3553;Pe&&(a?Ae=R.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(Ae,K.__webglTexture),Ce(Ae,R,Ue),ae(X.__webglFramebuffer,D,R,36064,Ae),M(R,Ue)&&w(Ae,R,D.width,D.height,D.depth),t.unbindTexture()}D.depthBuffer&&De(D)}function se(D){const R=g(D)||a,X=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let K=0,pe=X.length;K<pe;K++){const be=X[K];if(M(be,R)){const ze=D.isWebGLCubeRenderTarget?34067:3553,Pe=n.get(be).__webglTexture;t.bindTexture(ze,Pe),w(ze,be,D.width,D.height),t.unbindTexture()}}}function _e(D){if(D.isWebGLMultisampleRenderTarget)if(a){const R=D.width,X=D.height;let K=16384;D.depthBuffer&&(K|=256),D.stencilBuffer&&(K|=1024);const pe=n.get(D);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer),o.blitFramebuffer(0,0,R,X,0,0,R,X,K,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ke(D){return a&&D.isWebGLMultisampleRenderTarget?Math.min(f,D.samples):0}function J(D){const R=s.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}let te=!1,le=!1;function de(D,R){D&&D.isWebGLRenderTarget&&(te===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),te=!0),D=D.texture),H(D,R)}function ce(D,R){D&&D.isWebGLCubeRenderTarget&&(le===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),le=!0),D=D.texture),Z(D,R)}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=Z,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=_e,this.safeSetTexture2D=de,this.safeSetTextureCube=ce}function Jf(o,e,t){const n=t.isWebGL2;function i(r){let s;if(r===xi)return 5121;if(r===Eh)return 32819;if(r===Ah)return 32820;if(r===Lh)return 33635;if(r===Mh)return 5120;if(r===Sh)return 5122;if(r===Qr)return 5123;if(r===Th)return 5124;if(r===Wr)return 5125;if(r===Rn)return 5126;if(r===di)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Rh)return 6406;if(r===Pn)return 6407;if(r===Ft)return 6408;if(r===Ch)return 6409;if(r===Ph)return 6410;if(r===pi)return 6402;if(r===ur)return 34041;if(r===Ih)return 6403;if(r===Fh)return 36244;if(r===Bh)return 33319;if(r===zh)return 33320;if(r===Uh)return 36248;if(r===Oh)return 36249;if(r===Za||r===Ja||r===ja||r===$a)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qa||r===Ka||r===el||r===tl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===el)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===nl||r===il)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(r===nl)return s.COMPRESSED_RGB8_ETC2;if(r===il)return s.COMPRESSED_RGBA8_ETC2_EAC}if(r===kh||r===Gh||r===Hh||r===Vh||r===Wh||r===qh||r===Xh||r===Yh||r===Zh||r===Jh||r===jh||r===$h||r===Qh||r===Kh||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf||r===cf||r===uf||r===hf||r===ff||r===df||r===pf||r===mf)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?r:null;if(r===ef)return s=e.get("EXT_texture_compression_bptc"),s!==null?r:null;if(r===lr)return n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Cl extends Et{constructor(e=[]){super(),this.cameras=e}}Cl.prototype.isArrayCamera=!0;class fi extends Ve{constructor(){super(),this.type="Group"}}fi.prototype.isGroup=!0;const My={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(My))),c&&e.hand){s=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(c.joints[v.jointName]===void 0){const m=new fi;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[v.jointName]=m,c.add(m)}const g=c.joints[v.jointName];x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=x.radius),g.visible=x!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}}class Sy extends Qn{constructor(e,t){super();const n=this,i=e.state;let r=null,s=1,a=null,l="local-floor",c=null,u=null,f=null,h=null,d=null,p=!1,v=null,x=null,g=null,m=null,M=null,w=null;const C=[],F=new Map,T=new Et;T.layers.enable(1),T.viewport=new nt;const B=new Et;B.layers.enable(2),B.viewport=new nt;const G=[T,B],O=new Cl;O.layers.enable(1),O.layers.enable(2);let z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=C[Q];return ae===void 0&&(ae=new Pa,C[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=C[Q];return ae===void 0&&(ae=new Pa,C[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=C[Q];return ae===void 0&&(ae=new Pa,C[Q]=ae),ae.getHandSpace()};function V(Q){const ae=F.get(Q.inputSource);ae&&ae.dispatchEvent({type:Q.type,data:Q.inputSource})}function H(){F.forEach(function(Q,ae){Q.disconnect(ae)}),F.clear(),z=null,$=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),f&&t.deleteFramebuffer(f),v&&t.deleteFramebuffer(v),x&&t.deleteRenderbuffer(x),g&&t.deleteRenderbuffer(g),f=null,v=null,x=null,g=null,d=null,h=null,u=null,r=null,Oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y);const ae=t.getContextAttributes();if(ae.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0){const Ee={antialias:ae.antialias,alpha:ae.alpha,depth:ae.depth,stencil:ae.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:d})}else if(t instanceof WebGLRenderingContext){const Ee={antialias:!0,alpha:ae.alpha,depth:ae.depth,stencil:ae.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Ee),r.updateRenderState({layers:[d]})}else{p=ae.antialias;let Ee=null;ae.depth&&(w=256,ae.stencil&&(w|=1024),M=ae.stencil?33306:36096,Ee=ae.stencil?35056:33190);const q={colorFormat:ae.alpha?32856:32849,depthFormat:Ee,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(q),f=t.createFramebuffer(),r.updateRenderState({layers:[h]}),p&&(v=t.createFramebuffer(),x=t.createRenderbuffer(),t.bindRenderbuffer(36161,x),t.renderbufferStorageMultisample(36161,4,32856,h.textureWidth,h.textureHeight),i.bindFramebuffer(36160,v),t.framebufferRenderbuffer(36160,36064,36161,x),t.bindRenderbuffer(36161,null),Ee!==null&&(g=t.createRenderbuffer(),t.bindRenderbuffer(36161,g),t.renderbufferStorageMultisample(36161,4,Ee,h.textureWidth,h.textureHeight),t.framebufferRenderbuffer(36160,M,36161,g),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}a=await r.requestReferenceSpace(l),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(Q){const ae=r.inputSources;for(let Ee=0;Ee<C.length;Ee++)F.set(ae[Ee],C[Ee]);for(let Ee=0;Ee<Q.removed.length;Ee++){const q=Q.removed[Ee],De=F.get(q);De&&(De.dispatchEvent({type:"disconnected",data:q}),F.delete(q))}for(let Ee=0;Ee<Q.added.length;Ee++){const q=Q.added[Ee],De=F.get(q);De&&De.dispatchEvent({type:"connected",data:q})}}const W=new L,Z=new L;function oe(Q,ae,Ee){W.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(Ee.matrixWorld);const q=W.distanceTo(Z),De=ae.projectionMatrix.elements,Be=Ee.projectionMatrix.elements,se=De[14]/(De[10]-1),_e=De[14]/(De[10]+1),ke=(De[9]+1)/De[5],J=(De[9]-1)/De[5],te=(De[8]-1)/De[0],le=(Be[8]+1)/Be[0],de=se*te,ce=se*le,D=q/(-te+le),R=D*-te;ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(R),Q.translateZ(D),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const X=se+D,K=_e+D,pe=de-R,be=ce+(q-R),ze=ke*_e/K*X,Pe=J*_e/K*X;Q.projectionMatrix.makePerspective(pe,be,ze,Pe,X,K)}function Se(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;O.near=B.near=T.near=Q.near,O.far=B.far=T.far=Q.far,(z!==O.near||$!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,$=O.far);const ae=Q.parent,Ee=O.cameras;Se(O,ae);for(let De=0;De<Ee.length;De++)Se(Ee[De],ae);O.matrixWorld.decompose(O.position,O.quaternion,O.scale),Q.position.copy(O.position),Q.quaternion.copy(O.quaternion),Q.scale.copy(O.scale),Q.matrix.copy(O.matrix),Q.matrixWorld.copy(O.matrixWorld);const q=Q.children;for(let De=0,Be=q.length;De<Be;De++)q[De].updateMatrixWorld(!0);Ee.length===2?oe(O,T,B):O.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return O},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(Q){h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)};let Ce=null;function ve(Q,ae){if(c=ae.getViewerPose(a),m=ae,c!==null){const q=c.views;d!==null&&i.bindXRFramebuffer(d.framebuffer);let De=!1;q.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let Be=0;Be<q.length;Be++){const se=q[Be];let _e=null;if(d!==null)_e=d.getViewport(se);else{const J=u.getViewSubImage(h,se);i.bindXRFramebuffer(f),J.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,M,3553,J.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,J.colorTexture,0),_e=J.viewport}const ke=G[Be];ke.matrix.fromArray(se.transform.matrix),ke.projectionMatrix.fromArray(se.projectionMatrix),ke.viewport.set(_e.x,_e.y,_e.width,_e.height),Be===0&&O.matrix.copy(ke.matrix),De===!0&&O.cameras.push(ke)}p&&(i.bindXRFramebuffer(v),w!==null&&t.clear(w))}const Ee=r.inputSources;for(let q=0;q<C.length;q++){const De=C[q],Be=Ee[q];De.update(Be,ae,a)}if(Ce&&Ce(Q,ae),p){const q=h.textureWidth,De=h.textureHeight;i.bindFramebuffer(36008,v),i.bindFramebuffer(36009,f),t.invalidateFramebuffer(36008,[M]),t.invalidateFramebuffer(36009,[M]),t.blitFramebuffer(0,0,q,De,0,0,q,De,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,v)}m=null}const Oe=new Uf;Oe.setAnimationLoop(ve),this.setAnimationLoop=function(Q){Ce=Q},this.dispose=function(){}}}function Ty(o){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function t(g,m,M,w,C){m.isMeshBasicMaterial?n(g,m):m.isMeshLambertMaterial?(n(g,m),l(g,m)):m.isMeshToonMaterial?(n(g,m),u(g,m)):m.isMeshPhongMaterial?(n(g,m),c(g,m)):m.isMeshStandardMaterial?(n(g,m),m.isMeshPhysicalMaterial?h(g,m,C):f(g,m)):m.isMeshMatcapMaterial?(n(g,m),d(g,m)):m.isMeshDepthMaterial?(n(g,m),p(g,m)):m.isMeshDistanceMaterial?(n(g,m),v(g,m)):m.isMeshNormalMaterial?(n(g,m),x(g,m)):m.isLineBasicMaterial?(i(g,m),m.isLineDashedMaterial&&r(g,m)):m.isPointsMaterial?s(g,m,M,w):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=o.get(m).envMap;if(M){g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio;const F=o.get(M).__maxMipLevel;F!==void 0&&(g.maxMipLevel.value=F)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let w;m.map?w=m.map:m.specularMap?w=m.specularMap:m.displacementMap?w=m.displacementMap:m.normalMap?w=m.normalMap:m.bumpMap?w=m.bumpMap:m.roughnessMap?w=m.roughnessMap:m.metalnessMap?w=m.metalnessMap:m.alphaMap?w=m.alphaMap:m.emissiveMap?w=m.emissiveMap:m.clearcoatMap?w=m.clearcoatMap:m.clearcoatNormalMap?w=m.clearcoatNormalMap:m.clearcoatRoughnessMap?w=m.clearcoatRoughnessMap:m.specularIntensityMap?w=m.specularIntensityMap:m.specularTintMap?w=m.specularTintMap:m.transmissionMap?w=m.transmissionMap:m.thicknessMap&&(w=m.thicknessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix));let C;m.aoMap?C=m.aoMap:m.lightMap&&(C=m.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),g.uv2Transform.value.copy(C.matrix))}function i(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function r(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function s(g,m,M,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=w*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let C;m.map?C=m.map:m.alphaMap&&(C=m.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),g.uvTransform.value.copy(C.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function l(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===vt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===vt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===vt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===vt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function f(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===vt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===vt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),o.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,M){f(g,m),g.ior.value=m.ior,m.sheenTint&&g.sheenTint.value.copy(m.sheenTint),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===vt&&g.clearcoatNormalScale.value.negate())),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap),g.attenuationDistance.value=m.attenuationDistance,g.attenuationTint.value.copy(m.attenuationTint)),g.specularIntensity.value=m.specularIntensity,g.specularTint.value.copy(m.specularTint),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap),m.specularTintMap&&(g.specularTintMap.value=m.specularTintMap)}function d(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===vt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===vt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function v(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function x(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===vt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===vt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Ey(){const o=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return o.style.display="block",o}function it(o={}){const e=o.canvas!==void 0?o.canvas:Ey(),t=o.context!==void 0?o.context:null,n=o.alpha!==void 0?o.alpha:!1,i=o.depth!==void 0?o.depth:!0,r=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,l=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",u=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let f=null,h=null;const d=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Ot,this.physicallyCorrectLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const v=this;let x=!1,g=0,m=0,M=null,w=-1,C=null;const F=new nt,T=new nt;let B=null,G=e.width,O=e.height,z=1,$=null,V=null;const H=new nt(0,0,G,O),Y=new nt(0,0,G,O);let W=!1;const Z=[],oe=new ms;let Se=!1,Ce=!1,ve=null;const Oe=new Re,Q=new L,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return M===null?z:1}let q=t;function De(y,A){for(let S=0;S<y.length;S++){const I=y[S],k=e.getContext(I,A);if(k!==null)return k}return null}try{const y={alpha:n,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",St,!1),q===null){const A=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&A.shift(),q=De(A,y),q===null)throw De(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Be,se,_e,ke,J,te,le,de,ce,D,R,X,K,pe,be,ze,Pe,Ue,Ae,N,me,j,ye;function Me(){Be=new jv(q),se=new Vv(q,Be,o),Be.init(se),j=new Jf(q,Be,se),_e=new by(q,Be,se),Z[0]=1029,ke=new Kv,J=new uy,te=new wy(q,Be,_e,J,se,j,ke),le=new qv(v),de=new Jv(v),ce=new dm(q,se),ye=new Gv(q,Be,ce,se),D=new $v(q,ce,ke,ye),R=new i0(q,D,ce,ke),Ae=new n0(q),ze=new Wv(J),X=new cy(v,le,de,Be,se,ye,ze),K=new Ty(J),pe=new fy(J),be=new yy(Be,se),Ue=new kv(v,le,_e,R,a),Pe=new Zf(v,R,se),N=new Hv(q,Be,ke,se),me=new Qv(q,Be,ke,se),ke.programs=X.programs,v.capabilities=se,v.extensions=Be,v.properties=J,v.renderLists=pe,v.shadowMap=Pe,v.state=_e,v.info=ke}Me();const We=new Sy(v,q);this.xr=We,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const y=Be.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Be.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(G,O,!1))},this.getSize=function(y){return y.set(G,O)},this.setSize=function(y,A,S){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=y,O=A,e.width=Math.floor(y*z),e.height=Math.floor(A*z),S!==!1&&(e.style.width=y+"px",e.style.height=A+"px"),this.setViewport(0,0,y,A)},this.getDrawingBufferSize=function(y){return y.set(G*z,O*z).floor()},this.setDrawingBufferSize=function(y,A,S){G=y,O=A,z=S,e.width=Math.floor(y*S),e.height=Math.floor(A*S),this.setViewport(0,0,y,A)},this.getCurrentViewport=function(y){return y.copy(F)},this.getViewport=function(y){return y.copy(H)},this.setViewport=function(y,A,S,I){y.isVector4?H.set(y.x,y.y,y.z,y.w):H.set(y,A,S,I),_e.viewport(F.copy(H).multiplyScalar(z).floor())},this.getScissor=function(y){return y.copy(Y)},this.setScissor=function(y,A,S,I){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,A,S,I),_e.scissor(T.copy(Y).multiplyScalar(z).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(y){_e.setScissorTest(W=y)},this.setOpaqueSort=function(y){$=y},this.setTransparentSort=function(y){V=y},this.getClearColor=function(y){return y.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(y,A,S){let I=0;(y===void 0||y)&&(I|=16384),(A===void 0||A)&&(I|=256),(S===void 0||S)&&(I|=1024),q.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",St,!1),pe.dispose(),be.dispose(),J.dispose(),le.dispose(),de.dispose(),R.dispose(),ye.dispose(),We.dispose(),We.removeEventListener("sessionstart",ws),We.removeEventListener("sessionend",Ms),ve&&(ve.dispose(),ve=null),pn.stop()};function ut(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const y=ke.autoReset,A=Pe.enabled,S=Pe.autoUpdate,I=Pe.needsUpdate,k=Pe.type;Me(),ke.autoReset=y,Pe.enabled=A,Pe.autoUpdate=S,Pe.needsUpdate=I,Pe.type=k}function bt(y){const A=y.target;A.removeEventListener("dispose",bt),lt(A)}function lt(y){tn(y),J.remove(y)}function tn(y){const A=J.get(y).programs;A!==void 0&&A.forEach(function(S){X.releaseProgram(S)})}function nn(y,A){y.render(function(S){v.renderBufferImmediate(S,A)})}this.renderBufferImmediate=function(y,A){ye.initAttributes();const S=J.get(y);y.hasPositions&&!S.position&&(S.position=q.createBuffer()),y.hasNormals&&!S.normal&&(S.normal=q.createBuffer()),y.hasUvs&&!S.uv&&(S.uv=q.createBuffer()),y.hasColors&&!S.color&&(S.color=q.createBuffer());const I=A.getAttributes();y.hasPositions&&(q.bindBuffer(34962,S.position),q.bufferData(34962,y.positionArray,35048),ye.enableAttribute(I.position.location),q.vertexAttribPointer(I.position.location,3,5126,!1,0,0)),y.hasNormals&&(q.bindBuffer(34962,S.normal),q.bufferData(34962,y.normalArray,35048),ye.enableAttribute(I.normal.location),q.vertexAttribPointer(I.normal.location,3,5126,!1,0,0)),y.hasUvs&&(q.bindBuffer(34962,S.uv),q.bufferData(34962,y.uvArray,35048),ye.enableAttribute(I.uv.location),q.vertexAttribPointer(I.uv.location,2,5126,!1,0,0)),y.hasColors&&(q.bindBuffer(34962,S.color),q.bufferData(34962,y.colorArray,35048),ye.enableAttribute(I.color.location),q.vertexAttribPointer(I.color.location,3,5126,!1,0,0)),ye.disableUnusedAttributes(),q.drawArrays(4,0,y.count),y.count=0},this.renderBufferDirect=function(y,A,S,I,k,ne){A===null&&(A=ae);const ie=k.isMesh&&k.matrixWorld.determinant()<0,re=E(y,A,I,k);_e.setMaterial(I,ie);let he=S.index;const Le=S.attributes.position;if(he===null){if(Le===void 0||Le.count===0)return}else if(he.count===0)return;let we=1;I.wireframe===!0&&(he=D.getWireframeAttribute(S),we=2),(S.morphAttributes.position!==void 0||S.morphAttributes.normal!==void 0)&&Ae.update(k,S,I,re),ye.setup(k,I,re,S,he);let Te,fe=N;he!==null&&(Te=ce.get(he),fe=me,fe.setIndex(Te));const qe=he!==null?he.count:Le.count,Ne=S.drawRange.start*we,Ye=S.drawRange.count*we,Fe=ne!==null?ne.start*we:0,je=ne!==null?ne.count*we:1/0,Ze=Math.max(Ne,Fe),Ge=Math.min(qe,Ne+Ye,Fe+je)-1,Ke=Math.max(0,Ge-Ze+1);if(Ke!==0){if(k.isMesh)I.wireframe===!0?(_e.setLineWidth(I.wireframeLinewidth*Ee()),fe.setMode(1)):fe.setMode(4);else if(k.isLine){let Je=I.linewidth;Je===void 0&&(Je=1),_e.setLineWidth(Je*Ee()),k.isLineSegments?fe.setMode(1):k.isLineLoop?fe.setMode(2):fe.setMode(3)}else k.isPoints?fe.setMode(0):k.isSprite&&fe.setMode(4);if(k.isInstancedMesh)fe.renderInstances(Ze,Ke,k.count);else if(S.isInstancedBufferGeometry){const Je=Math.min(S.instanceCount,S._maxInstanceCount);fe.renderInstances(Ze,Ke,Je)}else fe.render(Ze,Ke)}},this.compile=function(y,A){h=be.get(y),h.init(),p.push(h),y.traverseVisible(function(S){S.isLight&&S.layers.test(A.layers)&&(h.pushLight(S),S.castShadow&&h.pushShadow(S))}),h.setupLights(v.physicallyCorrectLights),y.traverse(function(S){const I=S.material;if(I)if(Array.isArray(I))for(let k=0;k<I.length;k++){const ne=I[k];_(ne,y,S)}else _(I,y,S)}),p.pop(),h=null};let Bi=null;function kt(y){Bi&&Bi(y)}function ws(){pn.stop()}function Ms(){pn.start()}const pn=new Uf;pn.setAnimationLoop(kt),typeof window<"u"&&pn.setContext(window),this.setAnimationLoop=function(y){Bi=y,We.setAnimationLoop(y),y===null?pn.stop():pn.start()},We.addEventListener("sessionstart",ws),We.addEventListener("sessionend",Ms),this.render=function(y,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),A.parent===null&&A.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(A),A=We.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,A,M),h=be.get(y,p.length),h.init(),p.push(h),Oe.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),oe.setFromProjectionMatrix(Oe),Ce=this.localClippingEnabled,Se=ze.init(this.clippingPlanes,Ce,A),f=pe.get(y,d.length),f.init(),d.push(f),Dr(y,A,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort($,V),Se===!0&&ze.beginShadows();const S=h.state.shadowsArray;if(Pe.render(S,y,A),Se===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ue.render(f,y),h.setupLights(v.physicallyCorrectLights),A.isArrayCamera){const I=A.cameras;for(let k=0,ne=I.length;k<ne;k++){const ie=I[k];Ss(f,y,ie,ie.viewport)}}else Ss(f,y,A);M!==null&&(te.updateMultisampleRenderTarget(M),te.updateRenderTargetMipmap(M)),y.isScene===!0&&y.onAfterRender(v,y,A),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1),ye.resetDefaultState(),w=-1,C=null,p.pop(),p.length>0?h=p[p.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function Dr(y,A,S,I){if(y.visible===!1)return;if(y.layers.test(A.layers)){if(y.isGroup)S=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(A);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||oe.intersectsSprite(y)){I&&Q.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe);const ie=R.update(y),re=y.material;re.visible&&f.push(y,ie,re,S,Q.z,null)}}else if(y.isImmediateRenderObject)I&&Q.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe),f.push(y,null,y.material,S,Q.z,null);else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==ke.render.frame&&(y.skeleton.update(),y.skeleton.frame=ke.render.frame),!y.frustumCulled||oe.intersectsObject(y))){I&&Q.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe);const ie=R.update(y),re=y.material;if(Array.isArray(re)){const he=ie.groups;for(let Le=0,we=he.length;Le<we;Le++){const Te=he[Le],fe=re[Te.materialIndex];fe&&fe.visible&&f.push(y,ie,fe,S,Q.z,Te)}}else re.visible&&f.push(y,ie,re,S,Q.z,null)}}const ne=y.children;for(let ie=0,re=ne.length;ie<re;ie++)Dr(ne[ie],A,S,I)}function Ss(y,A,S,I){const k=y.opaque,ne=y.transmissive,ie=y.transparent;h.setupLightsView(S),ne.length>0&&Zo(k,A,S),I&&_e.viewport(F.copy(I)),k.length>0&&zi(k,A,S),ne.length>0&&zi(ne,A,S),ie.length>0&&zi(ie,A,S)}function Zo(y,A,S){if(ve===null){const ie=s===!0&&se.isWebGL2===!0?Ml:en;ve=new ie(1024,1024,{generateMipmaps:!0,type:j.convert(di)!==null?di:xi,minFilter:Ei,magFilter:_t,wrapS:Pt,wrapT:Pt})}const I=v.getRenderTarget();v.setRenderTarget(ve),v.clear();const k=v.toneMapping;v.toneMapping=Wn,zi(y,A,S),v.toneMapping=k,te.updateMultisampleRenderTarget(ve),te.updateRenderTargetMipmap(ve),v.setRenderTarget(I)}function zi(y,A,S){const I=A.isScene===!0?A.overrideMaterial:null;for(let k=0,ne=y.length;k<ne;k++){const ie=y[k],re=ie.object,he=ie.geometry,Le=I===null?ie.material:I,we=ie.group;re.layers.test(S.layers)&&Jo(re,A,S,he,Le,we)}}function Jo(y,A,S,I,k,ne){if(y.onBeforeRender(v,A,S,I,k,ne),y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),y.isImmediateRenderObject){const ie=E(S,A,k,y);_e.setMaterial(k),ye.reset(),nn(y,ie)}else k.transparent===!0&&k.side===yi?(k.side=vt,k.needsUpdate=!0,v.renderBufferDirect(S,A,I,k,y,ne),k.side=vi,k.needsUpdate=!0,v.renderBufferDirect(S,A,I,k,y,ne),k.side=yi):v.renderBufferDirect(S,A,I,k,y,ne);y.onAfterRender(v,A,S,I,k,ne)}function _(y,A,S){A.isScene!==!0&&(A=ae);const I=J.get(y),k=h.state.lights,ne=h.state.shadowsArray,ie=k.state.version,re=X.getParameters(y,k.state,ne,A,S),he=X.getProgramCacheKey(re);let Le=I.programs;I.environment=y.isMeshStandardMaterial?A.environment:null,I.fog=A.fog,I.envMap=(y.isMeshStandardMaterial?de:le).get(y.envMap||I.environment),Le===void 0&&(y.addEventListener("dispose",bt),Le=new Map,I.programs=Le);let we=Le.get(he);if(we!==void 0){if(I.currentProgram===we&&I.lightsStateVersion===ie)return b(y,re),we}else re.uniforms=X.getUniforms(y),y.onBuild(re,v),y.onBeforeCompile(re,v),we=X.acquireProgram(re,he),Le.set(he,we),I.uniforms=re.uniforms;const Te=I.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=ze.uniform),b(y,re),I.needsLights=U(y),I.lightsStateVersion=ie,I.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.directionalShadowMap.value=k.state.directionalShadowMap,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotShadowMap.value=k.state.spotShadowMap,Te.spotShadowMatrix.value=k.state.spotShadowMatrix,Te.pointShadowMap.value=k.state.pointShadowMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix);const fe=we.getUniforms(),qe=Xn.seqWithValue(fe.seq,Te);return I.currentProgram=we,I.uniformsList=qe,we}function b(y,A){const S=J.get(y);S.outputEncoding=A.outputEncoding,S.instancing=A.instancing,S.skinning=A.skinning,S.morphTargets=A.morphTargets,S.morphNormals=A.morphNormals,S.numClippingPlanes=A.numClippingPlanes,S.numIntersection=A.numClipIntersection,S.vertexAlphas=A.vertexAlphas,S.vertexTangents=A.vertexTangents}function E(y,A,S,I){A.isScene!==!0&&(A=ae),te.resetTextureUnits();const k=A.fog,ne=S.isMeshStandardMaterial?A.environment:null,ie=M===null?v.outputEncoding:M.texture.encoding,re=(S.isMeshStandardMaterial?de:le).get(S.envMap||ne),he=S.vertexColors===!0&&!!I.geometry&&!!I.geometry.attributes.color&&I.geometry.attributes.color.itemSize===4,Le=!!I.geometry&&!!I.geometry.attributes.tangent,we=!!I.geometry&&!!I.geometry.morphAttributes.position,Te=!!I.geometry&&!!I.geometry.morphAttributes.normal,fe=J.get(S),qe=h.state.lights;if(Se===!0&&(Ce===!0||y!==C)){const Je=y===C&&S.id===w;ze.setState(S,y,Je)}let Ne=!1;S.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==qe.state.version||fe.outputEncoding!==ie||I.isInstancedMesh&&fe.instancing===!1||!I.isInstancedMesh&&fe.instancing===!0||I.isSkinnedMesh&&fe.skinning===!1||!I.isSkinnedMesh&&fe.skinning===!0||fe.envMap!==re||S.fog&&fe.fog!==k||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==ze.numPlanes||fe.numIntersection!==ze.numIntersection)||fe.vertexAlphas!==he||fe.vertexTangents!==Le||fe.morphTargets!==we||fe.morphNormals!==Te)&&(Ne=!0):(Ne=!0,fe.__version=S.version);let Ye=fe.currentProgram;Ne===!0&&(Ye=_(S,A,I));let Fe=!1,je=!1,Ze=!1;const Ge=Ye.getUniforms(),Ke=fe.uniforms;if(_e.useProgram(Ye.program)&&(Fe=!0,je=!0,Ze=!0),S.id!==w&&(w=S.id,je=!0),Fe||C!==y){if(Ge.setValue(q,"projectionMatrix",y.projectionMatrix),se.logarithmicDepthBuffer&&Ge.setValue(q,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),C!==y&&(C=y,je=!0,Ze=!0),S.isShaderMaterial||S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshStandardMaterial||S.envMap){const Je=Ge.map.cameraPosition;Je!==void 0&&Je.setValue(q,Q.setFromMatrixPosition(y.matrixWorld))}(S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshLambertMaterial||S.isMeshBasicMaterial||S.isMeshStandardMaterial||S.isShaderMaterial)&&Ge.setValue(q,"isOrthographic",y.isOrthographicCamera===!0),(S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshLambertMaterial||S.isMeshBasicMaterial||S.isMeshStandardMaterial||S.isShaderMaterial||S.isShadowMaterial||I.isSkinnedMesh)&&Ge.setValue(q,"viewMatrix",y.matrixWorldInverse)}if(I.isSkinnedMesh){Ge.setOptional(q,I,"bindMatrix"),Ge.setOptional(q,I,"bindMatrixInverse");const Je=I.skeleton;Je&&(se.floatVertexTextures?(Je.boneTexture===null&&Je.computeBoneTexture(),Ge.setValue(q,"boneTexture",Je.boneTexture,te),Ge.setValue(q,"boneTextureSize",Je.boneTextureSize)):Ge.setOptional(q,Je,"boneMatrices"))}return(je||fe.receiveShadow!==I.receiveShadow)&&(fe.receiveShadow=I.receiveShadow,Ge.setValue(q,"receiveShadow",I.receiveShadow)),je&&(Ge.setValue(q,"toneMappingExposure",v.toneMappingExposure),fe.needsLights&&P(Ke,Ze),k&&S.fog&&K.refreshFogUniforms(Ke,k),K.refreshMaterialUniforms(Ke,S,z,O,ve),Xn.upload(q,fe.uniformsList,Ke,te)),S.isShaderMaterial&&S.uniformsNeedUpdate===!0&&(Xn.upload(q,fe.uniformsList,Ke,te),S.uniformsNeedUpdate=!1),S.isSpriteMaterial&&Ge.setValue(q,"center",I.center),Ge.setValue(q,"modelViewMatrix",I.modelViewMatrix),Ge.setValue(q,"normalMatrix",I.normalMatrix),Ge.setValue(q,"modelMatrix",I.matrixWorld),Ye}function P(y,A){y.ambientLightColor.needsUpdate=A,y.lightProbe.needsUpdate=A,y.directionalLights.needsUpdate=A,y.directionalLightShadows.needsUpdate=A,y.pointLights.needsUpdate=A,y.pointLightShadows.needsUpdate=A,y.spotLights.needsUpdate=A,y.spotLightShadows.needsUpdate=A,y.rectAreaLights.needsUpdate=A,y.hemisphereLights.needsUpdate=A}function U(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return M},this.setRenderTarget=function(y,A=0,S=0){M=y,g=A,m=S,y&&J.get(y).__webglFramebuffer===void 0&&te.setupRenderTarget(y);let I=null,k=!1,ne=!1;if(y){const re=y.texture;(re.isDataTexture3D||re.isDataTexture2DArray)&&(ne=!0);const he=J.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(I=he[A],k=!0):y.isWebGLMultisampleRenderTarget?I=J.get(y).__webglMultisampledFramebuffer:I=he,F.copy(y.viewport),T.copy(y.scissor),B=y.scissorTest}else F.copy(H).multiplyScalar(z).floor(),T.copy(Y).multiplyScalar(z).floor(),B=W;if(_e.bindFramebuffer(36160,I)&&se.drawBuffers){let re=!1;if(y)if(y.isWebGLMultipleRenderTargets){const he=y.texture;if(Z.length!==he.length||Z[0]!==36064){for(let Le=0,we=he.length;Le<we;Le++)Z[Le]=36064+Le;Z.length=he.length,re=!0}}else(Z.length!==1||Z[0]!==36064)&&(Z[0]=36064,Z.length=1,re=!0);else(Z.length!==1||Z[0]!==1029)&&(Z[0]=1029,Z.length=1,re=!0);re&&(se.isWebGL2?q.drawBuffers(Z):Be.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}if(_e.viewport(F),_e.scissor(T),_e.setScissorTest(B),k){const re=J.get(y.texture);q.framebufferTexture2D(36160,36064,34069+A,re.__webglTexture,S)}else if(ne){const re=J.get(y.texture),he=A||0;q.framebufferTextureLayer(36160,36064,re.__webglTexture,S||0,he)}w=-1},this.readRenderTargetPixels=function(y,A,S,I,k,ne,ie){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let re=J.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ie!==void 0&&(re=re[ie]),re){_e.bindFramebuffer(36160,re);try{const he=y.texture,Le=he.format,we=he.type;if(Le!==Ft&&j.convert(Le)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Te=we===di&&(Be.has("EXT_color_buffer_half_float")||se.isWebGL2&&Be.has("EXT_color_buffer_float"));if(we!==xi&&j.convert(we)!==q.getParameter(35738)&&!(we===Rn&&(se.isWebGL2||Be.has("OES_texture_float")||Be.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q.checkFramebufferStatus(36160)===36053?A>=0&&A<=y.width-I&&S>=0&&S<=y.height-k&&q.readPixels(A,S,I,k,j.convert(Le),j.convert(we),ne):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const he=M!==null?J.get(M).__webglFramebuffer:null;_e.bindFramebuffer(36160,he)}}},this.copyFramebufferToTexture=function(y,A,S=0){const I=Math.pow(2,-S),k=Math.floor(A.image.width*I),ne=Math.floor(A.image.height*I);let ie=j.convert(A.format);se.isWebGL2&&(ie===6407&&(ie=32849),ie===6408&&(ie=32856)),te.setTexture2D(A,0),q.copyTexImage2D(3553,S,ie,y.x,y.y,k,ne,0),_e.unbindTexture()},this.copyTextureToTexture=function(y,A,S,I=0){const k=A.image.width,ne=A.image.height,ie=j.convert(S.format),re=j.convert(S.type);te.setTexture2D(S,0),q.pixelStorei(37440,S.flipY),q.pixelStorei(37441,S.premultiplyAlpha),q.pixelStorei(3317,S.unpackAlignment),A.isDataTexture?q.texSubImage2D(3553,I,y.x,y.y,k,ne,ie,re,A.image.data):A.isCompressedTexture?q.compressedTexSubImage2D(3553,I,y.x,y.y,A.mipmaps[0].width,A.mipmaps[0].height,ie,A.mipmaps[0].data):q.texSubImage2D(3553,I,y.x,y.y,ie,re,A.image),I===0&&S.generateMipmaps&&q.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(y,A,S,I,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ne=y.max.x-y.min.x+1,ie=y.max.y-y.min.y+1,re=y.max.z-y.min.z+1,he=j.convert(I.format),Le=j.convert(I.type);let we;if(I.isDataTexture3D)te.setTexture3D(I,0),we=32879;else if(I.isDataTexture2DArray)te.setTexture2DArray(I,0),we=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,I.flipY),q.pixelStorei(37441,I.premultiplyAlpha),q.pixelStorei(3317,I.unpackAlignment);const Te=q.getParameter(3314),fe=q.getParameter(32878),qe=q.getParameter(3316),Ne=q.getParameter(3315),Ye=q.getParameter(32877),Fe=S.isCompressedTexture?S.mipmaps[0]:S.image;q.pixelStorei(3314,Fe.width),q.pixelStorei(32878,Fe.height),q.pixelStorei(3316,y.min.x),q.pixelStorei(3315,y.min.y),q.pixelStorei(32877,y.min.z),S.isDataTexture||S.isDataTexture3D?q.texSubImage3D(we,k,A.x,A.y,A.z,ne,ie,re,he,Le,Fe.data):S.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(we,k,A.x,A.y,A.z,ne,ie,re,he,Fe.data)):q.texSubImage3D(we,k,A.x,A.y,A.z,ne,ie,re,he,Le,Fe),q.pixelStorei(3314,Te),q.pixelStorei(32878,fe),q.pixelStorei(3316,qe),q.pixelStorei(3315,Ne),q.pixelStorei(32877,Ye),k===0&&I.generateMipmaps&&q.generateMipmap(we),_e.unbindTexture()},this.initTexture=function(y){te.setTexture2D(y,0),_e.unbindTexture()},this.resetState=function(){g=0,m=0,M=null,_e.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class jf extends it{}jf.prototype.isWebGL1Renderer=!0;class gs{constructor(e,t=25e-5){this.name="",this.color=new ge(e),this.density=t}clone(){return new gs(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}gs.prototype.isFogExp2=!0;class vs{constructor(e,t=1,n=1e3){this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new vs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}vs.prototype.isFog=!0;class Bo extends Ve{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Bo.prototype.isScene=!0;class Pi{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Pi.prototype.isInterleavedBuffer=!0;const mt=new L;class Zn{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mt.x=this.getX(t),mt.y=this.getY(t),mt.z=this.getZ(t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.x=this.getX(t),mt.y=this.getY(t),mt.z=this.getZ(t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.x=this.getX(t),mt.y=this.getY(t),mt.z=this.getZ(t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Zn.prototype.isInterleavedBufferAttribute=!0;class zo extends At{constructor(e){super(),this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}zo.prototype.isSpriteMaterial=!0;let er;const Or=new L,tr=new L,nr=new L,ir=new ee,Nr=new ee,$f=new Re,Js=new L,kr=new L,js=new L,tu=new ee,Da=new ee,nu=new ee;class Uo extends Ve{constructor(e){if(super(),this.type="Sprite",er===void 0){er=new Ie;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pi(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new Zn(n,3,0,!1)),er.setAttribute("uv",new Zn(n,2,3,!1))}this.geometry=er,this.material=e!==void 0?e:new zo,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),$f.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;$s(Js.set(-.5,-.5,0),nr,s,tr,i,r),$s(kr.set(.5,-.5,0),nr,s,tr,i,r),$s(js.set(.5,.5,0),nr,s,tr,i,r),tu.set(0,0),Da.set(1,0),nu.set(1,1);let a=e.ray.intersectTriangle(Js,kr,js,!1,Or);if(a===null&&($s(kr.set(-.5,.5,0),nr,s,tr,i,r),Da.set(0,1),a=e.ray.intersectTriangle(Js,js,kr,!1,Or),a===null))return;const l=e.ray.origin.distanceTo(Or);l<e.near||l>e.far||t.push({distance:l,point:Or.clone(),uv:yt.getUV(Or,Js,kr,js,tu,Da,nu,new ee),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Uo.prototype.isSprite=!0;function $s(o,e,t,n,i,r){ir.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(Nr.x=r*ir.x-i*ir.y,Nr.y=i*ir.x+r*ir.y):Nr.copy(ir),o.copy(e),o.x+=Nr.x,o.y+=Nr.y,o.applyMatrix4($f)}const Qs=new L,iu=new L;class Qf extends Ve{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Qs.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Qs);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Qs.setFromMatrixPosition(e.matrixWorld),iu.setFromMatrixPosition(this.matrixWorld);const n=Qs.distanceTo(iu)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];t.object.levels.push({object:s.object.uuid,distance:s.distance})}return t}}const ru=new L,su=new nt,ou=new nt,Ay=new L,au=new Re;class Oo extends dt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;su.fromBufferAttribute(i.attributes.skinIndex,e),ou.fromBufferAttribute(i.attributes.skinWeight,e),ru.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=ou.getComponent(r);if(s!==0){const a=su.getComponent(r);au.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ay.copy(ru).applyMatrix4(au),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}Oo.prototype.isSkinnedMesh=!0;class No extends Ve{constructor(){super(),this.type="Bone"}}No.prototype.isBone=!0;class gi extends Mt{constructor(e=null,t=1,n=1,i,r,s,a,l,c=_t,u=_t,f,h){super(null,s,a,l,c,u,i,r,f,h),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}gi.prototype.isDataTexture=!0;const lu=new Re,Ly=new Re;class ko{constructor(e=[],t=[]){this.uuid=jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:Ly;lu.multiplyMatrices(a,t[r]),lu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ko(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Tf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gi(t,e,e,Ft,Rn);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new No),this.bones.push(s),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class bi extends et{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}bi.prototype.isInstancedBufferAttribute=!0;const cu=new Re,uu=new Re,Ks=[],Gr=new dt;class Pl extends dt{constructor(e,t,n){super(e,t),this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,cu),uu.multiplyMatrices(n,cu),Gr.matrixWorld=uu,Gr.raycast(e,Ks);for(let s=0,a=Ks.length;s<a;s++){const l=Ks[s];l.instanceId=r,l.object=this,t.push(l)}Ks.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Pl.prototype.isInstancedMesh=!0;class Lt extends At{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Lt.prototype.isLineBasicMaterial=!0;const hu=new L,fu=new L,du=new Re,Ia=new ei,eo=new Kn;class In extends Ve{constructor(e=new Ie,t=new Lt){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hu.fromBufferAttribute(t,i-1),fu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hu.distanceTo(fu);e.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;du.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(du);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,f=new L,h=new L,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const p=n.index,x=n.attributes.position;if(p!==null){const g=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let M=g,w=m-1;M<w;M+=d){const C=p.getX(M),F=p.getX(M+1);if(c.fromBufferAttribute(x,C),u.fromBufferAttribute(x,F),Ia.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(h);B<e.near||B>e.far||t.push({distance:B,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,s.start),m=Math.min(x.count,s.start+s.count);for(let M=g,w=m-1;M<w;M+=d){if(c.fromBufferAttribute(x,M),u.fromBufferAttribute(x,M+1),Ia.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||t.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}In.prototype.isLine=!0;const pu=new L,mu=new L;class Wt extends In{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pu.fromBufferAttribute(t,i),mu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pu.distanceTo(mu);e.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Wt.prototype.isLineSegments=!0;class Dl extends In{constructor(e,t){super(e,t),this.type="LineLoop"}}Dl.prototype.isLineLoop=!0;class Di extends At{constructor(e){super(),this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Di.prototype.isPointsMaterial=!0;const gu=new Re,al=new ei,to=new Kn,no=new L;class ys extends Ve{constructor(e=new Ie,t=new Di){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;gu.copy(i).invert(),al.copy(e.ray).applyMatrix4(gu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=h,v=d;p<v;p++){const x=c.getX(p);no.fromBufferAttribute(f,x),vu(no,x,l,i,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(f.count,s.start+s.count);for(let p=h,v=d;p<v;p++)no.fromBufferAttribute(f,p),vu(no,p,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ys.prototype.isPoints=!0;function vu(o,e,t,n,i,r,s){const a=al.distanceSqToPoint(o);if(a<t){const l=new L;al.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class Kf extends Mt{constructor(e,t,n,i,r,s,a,l,c){super(e,t,n,i,r,s,a,l,c),this.format=a!==void 0?a:Pn,this.minFilter=s!==void 0?s:xt,this.magFilter=r!==void 0?r:xt,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Kf.prototype.isVideoTexture=!0;class Il extends Mt{constructor(e,t,n,i,r,s,a,l,c,u,f,h){super(null,s,a,l,c,u,i,r,f,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Il.prototype.isCompressedTexture=!0;class ed extends Mt{constructor(e,t,n,i,r,s,a,l,c){super(e,t,n,i,r,s,a,l,c),this.needsUpdate=!0}}ed.prototype.isCanvasTexture=!0;class td extends Mt{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:pi,u!==pi&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=Qr),n===void 0&&u===ur&&(n=lr),super(null,i,r,s,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1}}td.prototype.isDepthTexture=!0;class pr extends Ie{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],s=[],a=[],l=[],c=new L,u=new ee;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[h]/e+1)/2,u.y=(s[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(l,2))}static fromJSON(e){return new pr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jn extends Ie{constructor(e=1,t=1,n=1,i=8,r=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],f=[],h=[],d=[];let p=0;const v=[],x=n/2;let g=0;m(),s===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function m(){const w=new L,C=new L;let F=0;const T=(t-e)/n;for(let B=0;B<=r;B++){const G=[],O=B/r,z=O*(t-e)+e;for(let $=0;$<=i;$++){const V=$/i,H=V*l+a,Y=Math.sin(H),W=Math.cos(H);C.x=z*Y,C.y=-O*n+x,C.z=z*W,f.push(C.x,C.y,C.z),w.set(Y,T,W).normalize(),h.push(w.x,w.y,w.z),d.push(V,1-O),G.push(p++)}v.push(G)}for(let B=0;B<i;B++)for(let G=0;G<r;G++){const O=v[G][B],z=v[G+1][B],$=v[G+1][B+1],V=v[G][B+1];u.push(O,z,V),u.push(z,$,V),F+=6}c.addGroup(g,F,0),g+=F}function M(w){const C=p,F=new ee,T=new L;let B=0;const G=w===!0?e:t,O=w===!0?1:-1;for(let $=1;$<=i;$++)f.push(0,x*O,0),h.push(0,O,0),d.push(.5,.5),p++;const z=p;for(let $=0;$<=i;$++){const H=$/i*l+a,Y=Math.cos(H),W=Math.sin(H);T.x=G*W,T.y=x*O,T.z=G*Y,f.push(T.x,T.y,T.z),h.push(0,O,0),F.x=Y*.5+.5,F.y=W*.5*O+.5,d.push(F.x,F.y),p++}for(let $=0;$<i;$++){const V=C+$,H=z+$;w===!0?u.push(H,H+1,V):u.push(H+1,H,V),B+=3}c.addGroup(g,B,w===!0?1:2),g+=B}}static fromJSON(e){return new Jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends Jn{constructor(e=1,t=1,n=8,i=1,r=!1,s=0,a=Math.PI*2){super(0,e,t,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(e){return new mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xn extends Ie{constructor(e,t,n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],s=[];a(i),c(n),u(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const M=new L,w=new L,C=new L;for(let F=0;F<t.length;F+=3)d(t[F+0],M),d(t[F+1],w),d(t[F+2],C),l(M,w,C,m)}function l(m,M,w,C){const F=C+1,T=[];for(let B=0;B<=F;B++){T[B]=[];const G=m.clone().lerp(w,B/F),O=M.clone().lerp(w,B/F),z=F-B;for(let $=0;$<=z;$++)$===0&&B===F?T[B][$]=G:T[B][$]=G.clone().lerp(O,$/z)}for(let B=0;B<F;B++)for(let G=0;G<2*(F-B)-1;G++){const O=Math.floor(G/2);G%2===0?(h(T[B][O+1]),h(T[B+1][O]),h(T[B][O])):(h(T[B][O+1]),h(T[B+1][O+1]),h(T[B+1][O]))}}function c(m){const M=new L;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(m),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function u(){const m=new L;for(let M=0;M<r.length;M+=3){m.x=r[M+0],m.y=r[M+1],m.z=r[M+2];const w=x(m)/2/Math.PI+.5,C=g(m)/Math.PI+.5;s.push(w,1-C)}p(),f()}function f(){for(let m=0;m<s.length;m+=6){const M=s[m+0],w=s[m+2],C=s[m+4],F=Math.max(M,w,C),T=Math.min(M,w,C);F>.9&&T<.1&&(M<.2&&(s[m+0]+=1),w<.2&&(s[m+2]+=1),C<.2&&(s[m+4]+=1))}}function h(m){r.push(m.x,m.y,m.z)}function d(m,M){const w=m*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function p(){const m=new L,M=new L,w=new L,C=new L,F=new ee,T=new ee,B=new ee;for(let G=0,O=0;G<r.length;G+=9,O+=6){m.set(r[G+0],r[G+1],r[G+2]),M.set(r[G+3],r[G+4],r[G+5]),w.set(r[G+6],r[G+7],r[G+8]),F.set(s[O+0],s[O+1]),T.set(s[O+2],s[O+3]),B.set(s[O+4],s[O+5]),C.copy(m).add(M).add(w).divideScalar(3);const z=x(C);v(F,O+0,m,z),v(T,O+2,M,z),v(B,O+4,w,z)}}function v(m,M,w,C){C<0&&m.x===1&&(s[M]=m.x-1),w.x===0&&w.z===0&&(s[M]=C/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function g(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}static fromJSON(e){return new xn(e.vertices,e.indices,e.radius,e.details)}}class gr extends xn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gr(e.radius,e.detail)}}const io=new L,ro=new L,Fa=new L,so=new yt;class Fl extends Ie{constructor(e,t){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const i=Math.pow(10,4),r=Math.cos(mi*t),s=e.getIndex(),a=e.getAttribute("position"),l=s?s.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let p=0;p<l;p+=3){s?(c[0]=s.getX(p),c[1]=s.getX(p+1),c[2]=s.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:x,c:g}=so;if(v.fromBufferAttribute(a,c[0]),x.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),so.getNormal(Fa),f[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,f[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,f[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let m=0;m<3;m++){const M=(m+1)%3,w=f[m],C=f[M],F=so[u[m]],T=so[u[M]],B=`${w}_${C}`,G=`${C}_${w}`;G in h&&h[G]?(Fa.dot(h[G].normal)<=r&&(d.push(F.x,F.y,F.z),d.push(T.x,T.y,T.z)),h[G]=null):B in h||(h[B]={index0:c[m],index1:c[M],normal:Fa.clone()})}}for(const p in h)if(h[p]){const{index0:v,index1:x}=h[p];io.fromBufferAttribute(a,v),ro.fromBufferAttribute(a,x),d.push(io.x,io.y,io.z),d.push(ro.x,ro.y,ro.z)}this.setAttribute("position",new xe(d,3))}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-s,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const u=n[i],h=n[i+1]-u,d=(s-u)/h;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),l=t||(s.isVector2?new ee:new L);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],s=[],a=new L,l=new Re;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new L),i[d].normalize()}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ct(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}s[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),s[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xs extends $t{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ee,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}xs.prototype.isEllipseCurve=!0;class Bl extends xs{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.type="ArcCurve"}}Bl.prototype.isArcCurve=!0;function zl(){let o=0,e=0,t=0,n=0;function i(r,s,a,l){o=r,e=a,t=-3*r+3*s-2*a-l,n=2*r-2*s+a+l}return{initCatmullRom:function(r,s,a,l,c){i(s,a,c*(a-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,a,l,c,u,f){let h=(s-r)/c-(a-r)/(c+u)+(a-s)/u,d=(a-s)/u-(l-s)/(u+f)+(l-a)/f;h*=u,d*=u,i(s,a,h,d)},calc:function(r){const s=r*r,a=s*r;return o+e*r+t*s+n*a}}}const oo=new L,Ba=new zl,za=new zl,Ua=new zl;class Ul extends $t{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(oo.subVectors(i[0],i[1]).add(i[0]),c=oo);const f=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(oo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=oo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),p<1e-4&&(p=v),x<1e-4&&(x=v),Ba.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,v,x),za.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,v,x),Ua.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,v,x)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),za.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ua.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Ba.calc(l),za.calc(l),Ua.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Ul.prototype.isCatmullRomCurve3=!0;function yu(o,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*a+r*o+t}function Ry(o,e){const t=1-o;return t*t*e}function Cy(o,e){return 2*(1-o)*o*e}function Py(o,e){return o*o*e}function Xr(o,e,t,n){return Ry(o,e)+Cy(o,t)+Py(o,n)}function Dy(o,e){const t=1-o;return t*t*t*e}function Iy(o,e){const t=1-o;return 3*t*t*o*e}function Fy(o,e){return 3*(1-o)*o*o*e}function By(o,e){return o*o*o*e}function Yr(o,e,t,n,i){return Dy(o,e)+Iy(o,t)+Fy(o,n)+By(o,i)}class Go extends $t{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){const n=t,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Yr(e,i.x,r.x,s.x,a.x),Yr(e,i.y,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Go.prototype.isCubicBezierCurve=!0;class Ol extends $t{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Yr(e,i.x,r.x,s.x,a.x),Yr(e,i.y,r.y,s.y,a.y),Yr(e,i.z,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ol.prototype.isCubicBezierCurve3=!0;class _s extends $t{constructor(e=new ee,t=new ee){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ee;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}_s.prototype.isLineCurve=!0;class nd extends $t{constructor(e=new L,t=new L){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ho extends $t{constructor(e=new ee,t=new ee,n=new ee){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Xr(e,i.x,r.x,s.x),Xr(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ho.prototype.isQuadraticBezierCurve=!0;class Nl extends $t{constructor(e=new L,t=new L,n=new L){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Xr(e,i.x,r.x,s.x),Xr(e,i.y,r.y,s.y),Xr(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Nl.prototype.isQuadraticBezierCurve3=!0;class Vo extends $t{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),a=r-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],f=i[s>i.length-3?i.length-1:s+2];return n.set(yu(a,l.x,c.x,u.x,f.x),yu(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ee().fromArray(i))}return this}}Vo.prototype.isSplineCurve=!0;var kl=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:Ul,CubicBezierCurve:Go,CubicBezierCurve3:Ol,EllipseCurve:xs,LineCurve:_s,LineCurve3:nd,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:Nl,SplineCurve:Vo});const zy={triangulate:function(o,e,t=2){const n=e&&e.length,i=n?e[0]*t:o.length;let r=id(o,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let a,l,c,u,f,h,d;if(n&&(r=Gy(o,e,r,t)),o.length>80*t){a=c=o[0],l=u=o[1];for(let p=t;p<i;p+=t)f=o[p],h=o[p+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?1/d:0}return is(r,s,t,a,l,d),s}};function id(o,e,t,n,i){let r,s;if(i===Qy(o,e,t,n)>0)for(r=e;r<t;r+=n)s=xu(r,o[r],o[r+1],s);else for(r=t-n;r>=e;r-=n)s=xu(r,o[r],o[r+1],s);return s&&Wo(s,s.next)&&(ss(s),s=s.next),s}function jn(o,e){if(!o)return o;e||(e=o);let t=o,n;do if(n=!1,!t.steiner&&(Wo(t,t.next)||ct(t.prev,t,t.next)===0)){if(ss(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function is(o,e,t,n,i,r,s){if(!o)return;!s&&r&&Xy(o,n,i,r);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,r?Oy(o,n,i,r):Uy(o)){e.push(l.i/t),e.push(o.i/t),e.push(c.i/t),ss(o),o=c.next,a=c.next;continue}if(o=c,o===a){s?s===1?(o=Ny(jn(o),e,t),is(o,e,t,n,i,r,2)):s===2&&ky(o,e,t,n,i,r):is(jn(o),e,t,n,i,r,1);break}}}function Uy(o){const e=o.prev,t=o,n=o.next;if(ct(e,t,n)>=0)return!1;let i=o.next.next;for(;i!==o.prev;){if(or(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ct(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Oy(o,e,t,n){const i=o.prev,r=o,s=o.next;if(ct(i,r,s)>=0)return!1;const a=i.x<r.x?i.x<s.x?i.x:s.x:r.x<s.x?r.x:s.x,l=i.y<r.y?i.y<s.y?i.y:s.y:r.y<s.y?r.y:s.y,c=i.x>r.x?i.x>s.x?i.x:s.x:r.x>s.x?r.x:s.x,u=i.y>r.y?i.y>s.y?i.y:s.y:r.y>s.y?r.y:s.y,f=ll(a,l,e,t,n),h=ll(c,u,e,t,n);let d=o.prevZ,p=o.nextZ;for(;d&&d.z>=f&&p&&p.z<=h;){if(d!==o.prev&&d!==o.next&&or(i.x,i.y,r.x,r.y,s.x,s.y,d.x,d.y)&&ct(d.prev,d,d.next)>=0||(d=d.prevZ,p!==o.prev&&p!==o.next&&or(i.x,i.y,r.x,r.y,s.x,s.y,p.x,p.y)&&ct(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=f;){if(d!==o.prev&&d!==o.next&&or(i.x,i.y,r.x,r.y,s.x,s.y,d.x,d.y)&&ct(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=h;){if(p!==o.prev&&p!==o.next&&or(i.x,i.y,r.x,r.y,s.x,s.y,p.x,p.y)&&ct(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Ny(o,e,t){let n=o;do{const i=n.prev,r=n.next.next;!Wo(i,r)&&rd(i,n,n.next,r)&&rs(i,r)&&rs(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),ss(n),ss(n.next),n=o=r),n=n.next}while(n!==o);return jn(n)}function ky(o,e,t,n,i,r){let s=o;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Jy(s,a)){let l=sd(s,a);s=jn(s,s.next),l=jn(l,l.next),is(s,e,t,n,i,r),is(l,e,t,n,i,r);return}a=a.next}s=s.next}while(s!==o)}function Gy(o,e,t,n){const i=[];let r,s,a,l,c;for(r=0,s=e.length;r<s;r++)a=e[r]*n,l=r<s-1?e[r+1]*n:o.length,c=id(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Zy(c));for(i.sort(Hy),r=0;r<i.length;r++)Vy(i[r],t),t=jn(t,t.next);return t}function Hy(o,e){return o.x-e.x}function Vy(o,e){if(e=Wy(o,e),e){const t=sd(e,o);jn(e,e.next),jn(t,t.next)}}function Wy(o,e){let t=e;const n=o.x,i=o.y;let r=-1/0,s;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r){if(r=h,h===n){if(i===t.y)return t;if(i===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(n===r)return s;const a=s,l=s.x,c=s.y;let u=1/0,f;t=s;do n>=t.x&&t.x>=l&&n!==t.x&&or(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),rs(t,o)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&qy(s,t)))&&(s=t,u=f)),t=t.next;while(t!==a);return s}function qy(o,e){return ct(o.prev,o,e.prev)<0&&ct(e.next,o,o.next)<0}function Xy(o,e,t,n){let i=o;do i.z===null&&(i.z=ll(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,Yy(i)}function Yy(o){let e,t,n,i,r,s,a,l,c=1;do{for(t=o,o=null,r=null,s=0;t;){for(s++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:o=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(s>1);return o}function ll(o,e,t,n,i){return o=32767*(o-t)*i,e=32767*(e-n)*i,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function Zy(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function or(o,e,t,n,i,r,s,a){return(i-s)*(e-a)-(o-s)*(r-a)>=0&&(o-s)*(n-a)-(t-s)*(e-a)>=0&&(t-s)*(r-a)-(i-s)*(n-a)>=0}function Jy(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!jy(o,e)&&(rs(o,e)&&rs(e,o)&&$y(o,e)&&(ct(o.prev,o,e.prev)||ct(o,e.prev,e))||Wo(o,e)&&ct(o.prev,o,o.next)>0&&ct(e.prev,e,e.next)>0)}function ct(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Wo(o,e){return o.x===e.x&&o.y===e.y}function rd(o,e,t,n){const i=lo(ct(o,e,t)),r=lo(ct(o,e,n)),s=lo(ct(t,n,o)),a=lo(ct(t,n,e));return!!(i!==r&&s!==a||i===0&&ao(o,t,e)||r===0&&ao(o,n,e)||s===0&&ao(t,o,n)||a===0&&ao(t,e,n))}function ao(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function lo(o){return o>0?1:o<0?-1:0}function jy(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function rs(o,e){return ct(o.prev,o,o.next)<0?ct(o,e,o.next)>=0&&ct(o,o.prev,e)>=0:ct(o,e,o.prev)<0||ct(o,o.next,e)<0}function $y(o,e){let t=o,n=!1;const i=(o.x+e.x)/2,r=(o.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==o);return n}function sd(o,e){const t=new cl(o.i,o.x,o.y),n=new cl(e.i,e.x,e.y),i=o.next,r=e.prev;return o.next=e,e.prev=o,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function xu(o,e,t,n){const i=new cl(o,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ss(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function cl(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qy(o,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(o[s]-o[r])*(o[r+1]+o[s+1]),s=r;return i}class yn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return yn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];_u(e),bu(n,e);let s=e.length;t.forEach(_u);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,bu(n,t[l]);const a=zy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function _u(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function bu(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class un extends Ie{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s(c)}this.setAttribute("position",new xe(i,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function s(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let f=t.depth!==void 0?t.depth:100,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:d-2,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:Ky;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),f=t.amount);let M,w=!1,C,F,T,B;g&&(M=g.getSpacedPoints(u),w=!0,h=!1,C=g.computeFrenetFrames(u,!1),F=new L,T=new L,B=new L),h||(x=0,d=0,p=0,v=0);const G=a.extractPoints(c);let O=G.shape;const z=G.holes;if(!yn.isClockWise(O)){O=O.reverse();for(let J=0,te=z.length;J<te;J++){const le=z[J];yn.isClockWise(le)&&(z[J]=le.reverse())}}const V=yn.triangulateShape(O,z),H=O;for(let J=0,te=z.length;J<te;J++){const le=z[J];O=O.concat(le)}function Y(J,te,le){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().multiplyScalar(le).add(J)}const W=O.length,Z=V.length;function oe(J,te,le){let de,ce,D;const R=J.x-te.x,X=J.y-te.y,K=le.x-J.x,pe=le.y-J.y,be=R*R+X*X,ze=R*pe-X*K;if(Math.abs(ze)>Number.EPSILON){const Pe=Math.sqrt(be),Ue=Math.sqrt(K*K+pe*pe),Ae=te.x-X/Pe,N=te.y+R/Pe,me=le.x-pe/Ue,j=le.y+K/Ue,ye=((me-Ae)*pe-(j-N)*K)/(R*pe-X*K);de=Ae+R*ye-J.x,ce=N+X*ye-J.y;const Me=de*de+ce*ce;if(Me<=2)return new ee(de,ce);D=Math.sqrt(Me/2)}else{let Pe=!1;R>Number.EPSILON?K>Number.EPSILON&&(Pe=!0):R<-Number.EPSILON?K<-Number.EPSILON&&(Pe=!0):Math.sign(X)===Math.sign(pe)&&(Pe=!0),Pe?(de=-X,ce=R,D=Math.sqrt(be)):(de=R,ce=X,D=Math.sqrt(be/2))}return new ee(de/D,ce/D)}const Se=[];for(let J=0,te=H.length,le=te-1,de=J+1;J<te;J++,le++,de++)le===te&&(le=0),de===te&&(de=0),Se[J]=oe(H[J],H[le],H[de]);const Ce=[];let ve,Oe=Se.concat();for(let J=0,te=z.length;J<te;J++){const le=z[J];ve=[];for(let de=0,ce=le.length,D=ce-1,R=de+1;de<ce;de++,D++,R++)D===ce&&(D=0),R===ce&&(R=0),ve[de]=oe(le[de],le[D],le[R]);Ce.push(ve),Oe=Oe.concat(ve)}for(let J=0;J<x;J++){const te=J/x,le=d*Math.cos(te*Math.PI/2),de=p*Math.sin(te*Math.PI/2)+v;for(let ce=0,D=H.length;ce<D;ce++){const R=Y(H[ce],Se[ce],de);De(R.x,R.y,-le)}for(let ce=0,D=z.length;ce<D;ce++){const R=z[ce];ve=Ce[ce];for(let X=0,K=R.length;X<K;X++){const pe=Y(R[X],ve[X],de);De(pe.x,pe.y,-le)}}}const Q=p+v;for(let J=0;J<W;J++){const te=h?Y(O[J],Oe[J],Q):O[J];w?(T.copy(C.normals[0]).multiplyScalar(te.x),F.copy(C.binormals[0]).multiplyScalar(te.y),B.copy(M[0]).add(T).add(F),De(B.x,B.y,B.z)):De(te.x,te.y,0)}for(let J=1;J<=u;J++)for(let te=0;te<W;te++){const le=h?Y(O[te],Oe[te],Q):O[te];w?(T.copy(C.normals[J]).multiplyScalar(le.x),F.copy(C.binormals[J]).multiplyScalar(le.y),B.copy(M[J]).add(T).add(F),De(B.x,B.y,B.z)):De(le.x,le.y,f/u*J)}for(let J=x-1;J>=0;J--){const te=J/x,le=d*Math.cos(te*Math.PI/2),de=p*Math.sin(te*Math.PI/2)+v;for(let ce=0,D=H.length;ce<D;ce++){const R=Y(H[ce],Se[ce],de);De(R.x,R.y,f+le)}for(let ce=0,D=z.length;ce<D;ce++){const R=z[ce];ve=Ce[ce];for(let X=0,K=R.length;X<K;X++){const pe=Y(R[X],ve[X],de);w?De(pe.x,pe.y+M[u-1].y,M[u-1].x+le):De(pe.x,pe.y,f+le)}}}ae(),Ee();function ae(){const J=i.length/3;if(h){let te=0,le=W*te;for(let de=0;de<Z;de++){const ce=V[de];Be(ce[2]+le,ce[1]+le,ce[0]+le)}te=u+x*2,le=W*te;for(let de=0;de<Z;de++){const ce=V[de];Be(ce[0]+le,ce[1]+le,ce[2]+le)}}else{for(let te=0;te<Z;te++){const le=V[te];Be(le[2],le[1],le[0])}for(let te=0;te<Z;te++){const le=V[te];Be(le[0]+W*u,le[1]+W*u,le[2]+W*u)}}n.addGroup(J,i.length/3-J,0)}function Ee(){const J=i.length/3;let te=0;q(H,te),te+=H.length;for(let le=0,de=z.length;le<de;le++){const ce=z[le];q(ce,te),te+=ce.length}n.addGroup(J,i.length/3-J,1)}function q(J,te){let le=J.length;for(;--le>=0;){const de=le;let ce=le-1;ce<0&&(ce=J.length-1);for(let D=0,R=u+x*2;D<R;D++){const X=W*D,K=W*(D+1),pe=te+de+X,be=te+ce+X,ze=te+ce+K,Pe=te+de+K;se(pe,be,ze,Pe)}}}function De(J,te,le){l.push(J),l.push(te),l.push(le)}function Be(J,te,le){_e(J),_e(te),_e(le);const de=i.length/3,ce=m.generateTopUV(n,i,de-3,de-2,de-1);ke(ce[0]),ke(ce[1]),ke(ce[2])}function se(J,te,le,de){_e(J),_e(te),_e(de),_e(te),_e(le),_e(de);const ce=i.length/3,D=m.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);ke(D[0]),ke(D[1]),ke(D[3]),ke(D[1]),ke(D[2]),ke(D[3])}function _e(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function ke(J){r.push(J.x),r.push(J.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ex(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new kl[i.type]().fromJSON(i)),new un(n,e.options)}}const Ky={generateTopUV:function(o,e,t,n,i){const r=e[t*3],s=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ee(r,s),new ee(a,l),new ee(c,u)]},generateSideWallUV:function(o,e,t,n,i,r){const s=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[i*3],d=e[i*3+1],p=e[i*3+2],v=e[r*3],x=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(s-c)?[new ee(s,1-l),new ee(c,1-f),new ee(h,1-p),new ee(v,1-g)]:[new ee(a,1-l),new ee(u,1-f),new ee(d,1-p),new ee(x,1-g)]}};function ex(o,e,t){if(t.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const r=o[n];t.shapes.push(r.uuid)}else t.shapes.push(o.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class vr extends xn{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vr(e.radius,e.detail)}}class yr extends Ie{constructor(e,t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ct(i,0,Math.PI*2);const r=[],s=[],a=[],l=1/t,c=new L,u=new ee;for(let f=0;f<=t;f++){const h=n+f*l*i,d=Math.sin(h),p=Math.cos(h);for(let v=0;v<=e.length-1;v++)c.x=e[v].x*d,c.y=e[v].y,c.z=e[v].x*p,s.push(c.x,c.y,c.z),u.x=f/t,u.y=v/(e.length-1),a.push(u.x,u.y)}for(let f=0;f<t;f++)for(let h=0;h<e.length-1;h++){const d=h+f*e.length,p=d,v=d+e.length,x=d+e.length+1,g=d+1;r.push(p,v,g),r.push(v,x,g)}if(this.setIndex(r),this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(a,2)),this.computeVertexNormals(),i===Math.PI*2){const f=this.attributes.normal.array,h=new L,d=new L,p=new L,v=t*e.length*3;for(let x=0,g=0;x<e.length;x++,g+=3)h.x=f[g+0],h.y=f[g+1],h.z=f[g+2],d.x=f[v+g+0],d.y=f[v+g+1],d.z=f[v+g+2],p.addVectors(h,d).normalize(),f[g+0]=f[v+g+0]=p.x,f[g+1]=f[v+g+1]=p.y,f[g+2]=f[v+g+2]=p.z}}static fromJSON(e){return new yr(e.points,e.segments,e.phiStart,e.phiLength)}}class wi extends xn{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wi(e.radius,e.detail)}}class wo extends Ie{constructor(e,t,n){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],s=[],a=[],l=1e-5,c=new L,u=new L,f=new L,h=new L,d=new L;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const p=t+1;for(let v=0;v<=n;v++){const x=v/n;for(let g=0;g<=t;g++){const m=g/t;e(m,x,u),r.push(u.x,u.y,u.z),m-l>=0?(e(m-l,x,f),h.subVectors(u,f)):(e(m+l,x,f),h.subVectors(f,u)),x-l>=0?(e(m,x-l,f),d.subVectors(u,f)):(e(m,x+l,f),d.subVectors(f,u)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),a.push(m,x)}}for(let v=0;v<n;v++)for(let x=0;x<t;x++){const g=v*p+x,m=v*p+x+1,M=(v+1)*p+x+1,w=(v+1)*p+x;i.push(g,m,w),i.push(m,M,w)}this.setIndex(i),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(s,3)),this.setAttribute("uv",new xe(a,2))}}class xr extends Ie{constructor(e=.5,t=1,n=8,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/i,d=new L,p=new ee;for(let v=0;v<=i;v++){for(let x=0;x<=n;x++){const g=r+x/n*s;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}f+=h}for(let v=0;v<i;v++){const x=v*(n+1);for(let g=0;g<n;g++){const m=g+x,M=m,w=m+n+1,C=m+n+2,F=m+1;a.push(M,w,F),a.push(w,C,F)}}this.setIndex(a),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(u,2))}static fromJSON(e){return new xr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mi extends Ie{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],s=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new xe(i,3)),this.setAttribute("normal",new xe(r,3)),this.setAttribute("uv",new xe(s,2));function c(u){const f=i.length/3,h=u.extractPoints(t);let d=h.shape;const p=h.holes;yn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,g=p.length;x<g;x++){const m=p[x];yn.isClockWise(m)===!0&&(p[x]=m.reverse())}const v=yn.triangulateShape(d,p);for(let x=0,g=p.length;x<g;x++){const m=p[x];d=d.concat(m)}for(let x=0,g=d.length;x<g;x++){const m=d[x];i.push(m.x,m.y,0),r.push(0,0,1),s.push(m.x,m.y)}for(let x=0,g=v.length;x<g;x++){const m=v[x],M=m[0]+f,w=m[1]+f,C=m[2]+f;n.push(M,w,C),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return tx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const s=t[e.shapes[i]];n.push(s)}return new Mi(n,e.curveSegments)}}function tx(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,n=o.length;t<n;t++){const i=o[t];e.shapes.push(i.uuid)}else e.shapes.push(o.uuid);return e}class Si extends Ie{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const u=[],f=new L,h=new L,d=[],p=[],v=[],x=[];for(let g=0;g<=n;g++){const m=[],M=g/n;let w=0;g==0&&s==0?w=.5/t:g==n&&l==Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){const F=C/t;f.x=-e*Math.cos(i+F*r)*Math.sin(s+M*a),f.y=e*Math.cos(s+M*a),f.z=e*Math.sin(i+F*r)*Math.sin(s+M*a),p.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),x.push(F+w,1-M),m.push(c++)}u.push(m)}for(let g=0;g<n;g++)for(let m=0;m<t;m++){const M=u[g][m+1],w=u[g][m],C=u[g+1][m],F=u[g+1][m+1];(g!==0||s>0)&&d.push(M,w,F),(g!==n-1||l<Math.PI)&&d.push(w,C,F)}this.setIndex(d),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(x,2))}static fromJSON(e){return new Si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _r extends xn{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _r(e.radius,e.detail)}}class Mo extends un{constructor(e,t={}){const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Ie;const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t),this.type="TextGeometry"}}class br extends Ie{constructor(e=1,t=.4,n=8,i=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const s=[],a=[],l=[],c=[],u=new L,f=new L,h=new L;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const v=p/i*r,x=d/n*Math.PI*2;f.x=(e+t*Math.cos(x))*Math.cos(v),f.y=(e+t*Math.cos(x))*Math.sin(v),f.z=t*Math.sin(x),a.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const v=(i+1)*d+p-1,x=(i+1)*(d-1)+p-1,g=(i+1)*(d-1)+p,m=(i+1)*d+p;s.push(v,x,m),s.push(x,g,m)}this.setIndex(s),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}static fromJSON(e){return new br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wr extends Ie{constructor(e=1,t=.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],u=[],f=new L,h=new L,d=new L,p=new L,v=new L,x=new L,g=new L;for(let M=0;M<=n;++M){const w=M/n*r*Math.PI*2;m(w,r,s,e,d),m(w+.01,r,s,e,p),x.subVectors(p,d),g.addVectors(p,d),v.crossVectors(x,g),g.crossVectors(v,x),v.normalize(),g.normalize();for(let C=0;C<=i;++C){const F=C/i*Math.PI*2,T=-t*Math.cos(F),B=t*Math.sin(F);f.x=d.x+(T*g.x+B*v.x),f.y=d.y+(T*g.y+B*v.y),f.z=d.z+(T*g.z+B*v.z),l.push(f.x,f.y,f.z),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),u.push(M/n),u.push(C/i)}}for(let M=1;M<=n;M++)for(let w=1;w<=i;w++){const C=(i+1)*(M-1)+(w-1),F=(i+1)*M+(w-1),T=(i+1)*M+w,B=(i+1)*(M-1)+w;a.push(C,F,B),a.push(F,T,B)}this.setIndex(a),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(u,2));function m(M,w,C,F,T){const B=Math.cos(M),G=Math.sin(M),O=C/w*M,z=Math.cos(O);T.x=F*(2+z)*.5*B,T.y=F*(2+z)*G*.5,T.z=F*Math.sin(O)*.5}}static fromJSON(e){return new wr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Mr extends Ie{constructor(e,t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new L,l=new L,c=new ee;let u=new L;const f=[],h=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function v(){for(let M=0;M<t;M++)x(M);x(r===!1?t:0),m(),g()}function x(M){u=e.getPointAt(M/t,u);const w=s.normals[M],C=s.binormals[M];for(let F=0;F<=i;F++){const T=F/i*Math.PI*2,B=Math.sin(T),G=-Math.cos(T);l.x=G*w.x+B*C.x,l.y=G*w.y+B*C.y,l.z=G*w.z+B*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let w=1;w<=i;w++){const C=(i+1)*(M-1)+(w-1),F=(i+1)*M+(w-1),T=(i+1)*M+w,B=(i+1)*(M-1)+w;p.push(C,F,B),p.push(F,T,B)}}function m(){for(let M=0;M<=t;M++)for(let w=0;w<=i;w++)c.x=M/t,c.y=w/i,d.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Mr(new kl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Gl extends Ie{constructor(e){if(super(),this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const t=[],n=new Set,i=new L,r=new L;if(e.index!==null){const s=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let p=h,v=h+d;p<v;p+=3)for(let x=0;x<3;x++){const g=a.getX(p+x),m=a.getX(p+(x+1)%3);i.fromBufferAttribute(s,g),r.fromBufferAttribute(s,m),wu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let a=0,l=s.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;i.fromBufferAttribute(s,u),r.fromBufferAttribute(s,f),wu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new xe(t,3))}}function wu(o,e,t){const n=`${o.x},${o.y},${o.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${o.x},${o.y},${o.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n,i),!0)}var Mu=Object.freeze({__proto__:null,BoxGeometry:Dn,BoxBufferGeometry:Dn,CircleGeometry:pr,CircleBufferGeometry:pr,ConeGeometry:mr,ConeBufferGeometry:mr,CylinderGeometry:Jn,CylinderBufferGeometry:Jn,DodecahedronGeometry:gr,DodecahedronBufferGeometry:gr,EdgesGeometry:Fl,ExtrudeGeometry:un,ExtrudeBufferGeometry:un,IcosahedronGeometry:vr,IcosahedronBufferGeometry:vr,LatheGeometry:yr,LatheBufferGeometry:yr,OctahedronGeometry:wi,OctahedronBufferGeometry:wi,ParametricGeometry:wo,ParametricBufferGeometry:wo,PlaneGeometry:_i,PlaneBufferGeometry:_i,PolyhedronGeometry:xn,PolyhedronBufferGeometry:xn,RingGeometry:xr,RingBufferGeometry:xr,ShapeGeometry:Mi,ShapeBufferGeometry:Mi,SphereGeometry:Si,SphereBufferGeometry:Si,TetrahedronGeometry:_r,TetrahedronBufferGeometry:_r,TextGeometry:Mo,TextBufferGeometry:Mo,TorusGeometry:br,TorusBufferGeometry:br,TorusKnotGeometry:wr,TorusKnotBufferGeometry:wr,TubeGeometry:Mr,TubeBufferGeometry:Mr,WireframeGeometry:Gl});class Hl extends At{constructor(e){super(),this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Hl.prototype.isShadowMaterial=!0;class qo extends At{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}qo.prototype.isMeshStandardMaterial=!0;class Vl extends qo{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenTint=new ge(0),this.transmission=0,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new ge(1,1,1),this.specularTintMap=null,this._clearcoat=0,this._transmission=0,this.setValues(e)}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheenTint.copy(e.sheenTint),this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}}Vl.prototype.isMeshPhysicalMaterial=!0;class Wl extends At{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Wl.prototype.isMeshPhongMaterial=!0;class ql extends At{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}ql.prototype.isMeshToonMaterial=!0;class Xl extends At{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Xl.prototype.isMeshNormalMaterial=!0;class Yl extends At{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Yl.prototype.isMeshLambertMaterial=!0;class Zl extends At{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Zl.prototype.isMeshMatcapMaterial=!0;class Jl extends Lt{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Jl.prototype.isLineDashedMaterial=!0;var nx=Object.freeze({__proto__:null,ShadowMaterial:Hl,SpriteMaterial:zo,RawShaderMaterial:Lr,ShaderMaterial:cn,PointsMaterial:Di,MeshPhysicalMaterial:Vl,MeshStandardMaterial:qo,MeshPhongMaterial:Wl,MeshToonMaterial:ql,MeshNormalMaterial:Xl,MeshLambertMaterial:Yl,MeshDepthMaterial:Io,MeshDistanceMaterial:Fo,MeshBasicMaterial:Bn,MeshMatcapMaterial:Zl,LineDashedMaterial:Jl,LineBasicMaterial:Lt,Material:At});const ot={arraySlice:function(o,e,t){return ot.isTypedArray(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)},convertArray:function(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i},flattenJSON:function(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)},subclip:function(o,e,t,n,i=30){const r=o.clone();r.name=e;const s=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),f=[],h=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*i;if(!(p<t||p>=n)){f.push(c.times[d]);for(let v=0;v<u;++v)h.push(c.values[d*u+v])}}f.length!==0&&(c.times=ot.convertArray(f,c.times.constructor),c.values=ot.convertArray(h,c.values.constructor),s.push(c))}r.tracks=s;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(o,e=0,t=o,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let s=0;s<i;++s){const a=t.tracks[s],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=o.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let u=0;const f=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let h=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);const p=a.times.length-1;let v;if(r<=a.times[0]){const g=u,m=f-u;v=ot.arraySlice(a.values,g,m)}else if(r>=a.times[p]){const g=p*f+u,m=g+f-u;v=ot.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=u,M=f-u;g.evaluate(r),v=ot.arraySlice(g.resultBuffer,m,M)}l==="quaternion"&&new Dt().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let g=0;g<x;++g){const m=g*d+h;if(l==="quaternion")Dt.multiplyQuaternionsFlat(c.values,m,v,0,c.values,m);else{const M=d-h*2;for(let w=0;w<M;++w)c.values[m+w]-=v[w]}}}return o.blendMode=yl,o}};class Fn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Fn.prototype.beforeStart_=Fn.prototype.copySampleValue_;Fn.prototype.afterEnd_=Fn.prototype.copySampleValue_;class od extends Fn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ui,endingEnd:ui}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case hi:r=e,a=2*t-n;break;case ts:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hi:s=e,l=2*n-t;break;case ts:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),v=p*p,x=v*p,g=-h*x+2*h*v-h*p,m=(1+h)*x+(-1.5-2*h)*v+(-.5+h)*p+1,M=(-1-d)*x+(1.5+d)*v+.5*p,w=d*x-d*v;for(let C=0;C!==a;++C)r[C]=g*s[u+C]+m*s[c+C]+M*s[l+C]+w*s[f+C];return r}}class jl extends Fn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)r[h]=s[c+h]*f+s[l+h]*u;return r}}class ad extends Fn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ot.convertArray(t,this.TimeBufferType),this.values=ot.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ot.convertArray(e.times,Array),values:ot.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new od(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case vo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=ot.arraySlice(n,r,s),this.values=ot.arraySlice(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&ot.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ot.arraySlice(this.times),t=ot.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===vo,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){const v=t[f+p];if(v!==t[h+p]||v!==t[d+p]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const f=a*n,h=s*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=ot.arraySlice(e,0,s),this.values=ot.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=ot.arraySlice(this.times,0),t=ot.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=es;class Ii extends dn{}Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Kr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;class $l extends dn{}$l.prototype.ValueTypeName="color";class os extends dn{}os.prototype.ValueTypeName="number";class ld extends Fn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Dt.slerpFlat(r,0,s,c-a,s,c,l);return r}}class Cr extends dn{InterpolantFactoryMethodLinear(e){return new ld(this.times,this.values,this.getValueSize(),e)}}Cr.prototype.ValueTypeName="quaternion";Cr.prototype.DefaultInterpolation=es;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fi extends dn{}Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Kr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends dn{}as.prototype.ValueTypeName="vector";class ls{constructor(e,t=-1,n,i=Eo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(rx(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ot.getKeyframeOrder(l);l=ot.sortedArray(l,1,u),c=ot.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new os(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,p,v){if(d.length!==0){const x=[],g=[];ot.flattenJSON(d,x,g,p),x.length!==0&&v.push(new f(h,x,g))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let v=0;v<h[p].morphTargets.length;v++)d[h[p].morphTargets[v]]=-1;for(const v in d){const x=[],g=[];for(let m=0;m!==h[p].morphTargets.length;++m){const M=h[p];x.push(M.time),g.push(M.morphTarget===v?1:0)}i.push(new os(".morphTargetInfluence["+v+"]",x,g))}l=d.length*s}else{const d=".bones["+t[f].name+"]";n(as,d+".position",h,"pos",i),n(Cr,d+".quaternion",h,"rot",i),n(as,d+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ix(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return $l;case"quaternion":return Cr;case"bool":case"boolean":return Ii;case"string":return Fi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function rx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ix(o.type);if(o.times===void 0){const t=[],n=[];ot.flattenJSON(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Ti={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ql{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const cd=new Ql;class zt{constructor(e){this.manager=e!==void 0?e:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const an={};class hn extends zt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ti.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;if(an[e]!==void 0){an[e].push({onLoad:t,onProgress:n,onError:i});return}const a=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(a);let c;if(l){const u=l[1],f=!!l[2];let h=l[3];h=decodeURIComponent(h),f&&(h=atob(h));try{let d;const p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":const v=new Uint8Array(h.length);for(let g=0;g<h.length;g++)v[g]=h.charCodeAt(g);p==="blob"?d=new Blob([v.buffer],{type:u}):d=v.buffer;break;case"document":d=new DOMParser().parseFromString(h,u);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){t&&t(d),r.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{an[e]=[],an[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(u){const f=this.response,h=an[e];if(delete an[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Ti.add(e,f);for(let d=0,p=h.length;d<p;d++){const v=h[d];v.onLoad&&v.onLoad(f)}r.manager.itemEnd(e)}else{for(let d=0,p=h.length;d<p;d++){const v=h[d];v.onError&&v.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(u){const f=an[e];for(let h=0,d=f.length;h<d;h++){const p=f[h];p.onProgress&&p.onProgress(u)}},!1),c.addEventListener("error",function(u){const f=an[e];delete an[e];for(let h=0,d=f.length;h<d;h++){const p=f[h];p.onError&&p.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(u){const f=an[e];delete an[e];for(let h=0,d=f.length;h<d;h++){const p=f[h];p.onError&&p.onError(u)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const u in this.requestHeader)c.setRequestHeader(u,this.requestHeader[u]);c.send(null)}return r.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sx extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new hn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=ls.parse(e[n]);t.push(i)}return t}}class ox extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,s=[],a=new Il,l=new hn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(f){l.load(e[f],function(h){const d=r.parse(h,!0);s[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(a.minFilter=xt),a.image=s,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let f=0,h=e.length;f<h;++f)u(f);else l.load(e,function(f){const h=r.parse(f,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let p=0;p<d;p++){s[p]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)s[p].mipmaps.push(h.mipmaps[p*h.mipmapCount+v]),s[p].format=h.format,s[p].width=h.width,s[p].height=h.height}a.image=s}else a.image.width=h.width,a.image.height=h.height,a.mipmaps=h.mipmaps;h.mipmapCount===1&&(a.minFilter=xt),a.format=h.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class cs extends zt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ti.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ud extends zt{constructor(e){super(e)}load(e,t,n,i){const r=new Ar,s=new cs(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function l(c){s.load(e[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class hd extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new gi,a=new hn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Pt,s.wrapT=c.wrapT!==void 0?c.wrapT:Pt,s.magFilter=c.magFilter!==void 0?c.magFilter:xt,s.minFilter=c.minFilter!==void 0?c.minFilter:xt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Ei),c.mipmapCount===1&&(s.minFilter=xt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c))},n,i),s}}class fd extends zt{constructor(e){super(e)}load(e,t,n,i){const r=new Mt,s=new cs(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a;const l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=l?Pn:Ft,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class dd extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new _s(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,s=this.curves[i],a=s.getLength(),l=a===0?0:1-r/a;return s.getPointAt(l)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],a=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new kl[i.type]().fromJSON(i))}return this}}class us extends dd{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _s(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ho(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const a=new Go(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,s,a,l),this}absellipse(e,t,n,i,r,s,a,l){const c=new xs(e,t,n,i,r,s,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yn extends us{constructor(e){super(e),this.uuid=jt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new us().fromJSON(i))}return this}}class fn extends Ve{constructor(e,t=1){super(),this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}fn.prototype.isLight=!0;class Kl extends fn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.groundColor=new ge(t)}copy(e){return fn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Kl.prototype.isHemisphereLight=!0;const Su=new Re,Tu=new L,Eu=new L;class ec{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),Su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pd extends ec{constructor(){super(new Et(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}pd.prototype.isSpotLightShadow=!0;class tc extends fn{constructor(e,t,n=0,i=Math.PI/3,r=0,s=1){super(e,t),this.type="SpotLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.shadow=new pd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}tc.prototype.isSpotLight=!0;const Au=new Re,Hr=new L,Oa=new L;class md extends ec{constructor(){super(new Et(90,1,.5,500)),this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hr),Oa.copy(n.position),Oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oa),n.updateMatrixWorld(),i.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}}md.prototype.isPointLightShadow=!0;class nc extends fn{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new md}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}nc.prototype.isPointLight=!0;class gd extends ec{constructor(){super(new Ci(-5,5,5,-5,.5,500))}}gd.prototype.isDirectionalLightShadow=!0;class ic extends fn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ve.DefaultUp),this.updateMatrix(),this.target=new Ve,this.shadow=new gd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}ic.prototype.isDirectionalLight=!0;class rc extends fn{constructor(e,t){super(e,t),this.type="AmbientLight"}}rc.prototype.isAmbientLight=!0;class sc extends fn{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}sc.prototype.isRectAreaLight=!0;class oc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*i),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*n),t.addScaledVector(s[4],1.092548*(n*i)),t.addScaledVector(s[5],1.092548*(i*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(n*r)),t.addScaledVector(s[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*i),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*n),t.addScaledVector(s[4],2*.429043*n*i),t.addScaledVector(s[5],2*.429043*i*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*n*r),t.addScaledVector(s[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}oc.prototype.isSphericalHarmonics3=!0;class bs extends fn{constructor(e=new oc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}bs.prototype.isLightProbe=!0;class vd extends zt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,s=new hn(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new nx[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheenTint!==void 0&&(i.sheenTint=new ge().setHex(e.sheenTint)),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularTint!==void 0&&i.specularTint!==void 0&&i.specularTint.setHex(e.specularTint),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationTint!==void 0&&i.attenuationTint!==void 0&&i.attenuationTint.setHex(e.attenuationTint),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.format!==void 0&&(i.format=e.format),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new ge().setHex(s.value);break;case"v2":i.uniforms[r].value=new ee().fromArray(s.value);break;case"v3":i.uniforms[r].value=new L().fromArray(s.value);break;case"v4":i.uniforms[r].value=new nt().fromArray(s.value);break;case"m3":i.uniforms[r].value=new wt().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Re().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ee().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularTintMap!==void 0&&(i.specularTintMap=n(e.specularTintMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),i}setTextures(e){return this.textures=e,this}}class So{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class ac extends Ie{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}ac.prototype.isInstancedBufferGeometry=!0;class yd extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new hn(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const x=d.interleavedBuffers[p],g=r(d,x.buffer),m=sr(x.type,g),M=new Pi(m,x.stride);return M.uuid=x.uuid,t[p]=M,M}function r(d,p){if(n[p]!==void 0)return n[p];const x=d.arrayBuffers[p],g=new Uint32Array(x).buffer;return n[p]=g,g}const s=e.isInstancedBufferGeometry?new ac:new Ie,a=e.data.index;if(a!==void 0){const d=sr(a.type,a.array);s.setIndex(new et(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let v;if(p.isInterleavedBufferAttribute){const x=i(e.data,p.data);v=new Zn(x,p.itemSize,p.offset,p.normalized)}else{const x=sr(p.type,p.array),g=p.isInstancedBufferAttribute?bi:et;v=new g(x,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),p.updateRange!==void 0&&(v.updateRange.offset=p.updateRange.offset,v.updateRange.count=p.updateRange.count),s.setAttribute(d,v)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],v=[];for(let x=0,g=p.length;x<g;x++){const m=p[x];let M;if(m.isInterleavedBufferAttribute){const w=i(e.data,m.data);M=new Zn(w,m.itemSize,m.offset,m.normalized)}else{const w=sr(m.type,m.array);M=new et(w,m.itemSize,m.normalized)}m.name!==void 0&&(M.name=m.name),v.push(M)}s.morphAttributes[d]=v}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,p=f.length;d!==p;++d){const v=f[d];s.addGroup(v.start,v.count,v.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const d=new L;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new Kn(d,h.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}class ax extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,s=this.path===""?So.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const a=new hn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(f){i!==void 0&&i(f),console.error("THREE:ObjectLoader: Can't parse "+e+".",f.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?So.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new hn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const s=await r.loadAsync(e,t),a=JSON.parse(s),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),s=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,s),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,l,a,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),t!==void 0){let f=!1;for(const h in s)if(s[h]instanceof HTMLImageElement){f=!0;break}f===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,s),l=this.parseObject(e.object,i,a,s,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Yn().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=new ko().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new yd;for(let r=0,s=e.length;r<s;r++){let a;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;case"Geometry":console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");break;default:l.type in Mu?a=Mu[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),a.isBufferGeometry===!0&&l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new vd;r.setTextures(t);for(let s=0,a=e.length;s<a;s++){const l=e[s];if(l.type==="MultiMaterial"){const c=[];for(let u=0;u<l.materials.length;u++){const f=l.materials[u];n[f.uuid]===void 0&&(n[f.uuid]=r.parse(f)),c.push(n[f.uuid])}i[l.uuid]=c}else n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=ls.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function s(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return s(u)}else return l.data?{data:sr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Ql(t);r=new cs(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const f=e[c],h=f.url;if(Array.isArray(h)){i[f.uuid]=[];for(let d=0,p=h.length;d<p;d++){const v=h[d],x=a(v);x!==null&&(x instanceof HTMLImageElement?i[f.uuid].push(x):i[f.uuid].push(new gi(x.data,x.width,x.height)))}}else{const d=a(f.url);d!==null&&(i[f.uuid]=d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(s){if(typeof s=="string"){const a=s,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return s.data?{data:sr(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){i=new cs(this.manager),i.setCrossOrigin(this.crossOrigin);for(let s=0,a=e.length;s<a;s++){const l=e[s],c=l.url;if(Array.isArray(c)){n[l.uuid]=[];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=await r(h);d!==null&&(d instanceof HTMLImageElement?n[l.uuid].push(d):n[l.uuid].push(new gi(d.data,d.width,d.height)))}}else{const u=await r(l.url);u!==null&&(n[l.uuid]=u)}}}return n}parseTextures(e,t){function n(r,s){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),s[r])}const i={};if(e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let l;const c=t[a.image];Array.isArray(c)?(l=new Ar(c),c.length===6&&(l.needsUpdate=!0)):(c&&c.data?l=new gi(c.data,c.width,c.height):l=new Mt(c),c&&(l.needsUpdate=!0)),l.uuid=a.uuid,a.name!==void 0&&(l.name=a.name),a.mapping!==void 0&&(l.mapping=n(a.mapping,lx)),a.offset!==void 0&&l.offset.fromArray(a.offset),a.repeat!==void 0&&l.repeat.fromArray(a.repeat),a.center!==void 0&&l.center.fromArray(a.center),a.rotation!==void 0&&(l.rotation=a.rotation),a.wrap!==void 0&&(l.wrapS=n(a.wrap[0],Lu),l.wrapT=n(a.wrap[1],Lu)),a.format!==void 0&&(l.format=a.format),a.type!==void 0&&(l.type=a.type),a.encoding!==void 0&&(l.encoding=a.encoding),a.minFilter!==void 0&&(l.minFilter=n(a.minFilter,Ru)),a.magFilter!==void 0&&(l.magFilter=n(a.magFilter,Ru)),a.anisotropy!==void 0&&(l.anisotropy=a.anisotropy),a.flipY!==void 0&&(l.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(l.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(l.unpackAlignment=a.unpackAlignment),i[a.uuid]=l}return i}parseObject(e,t,n,i,r){let s;function a(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){const d=[];for(let p=0,v=h.length;p<v;p++){const x=h[p];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),d.push(n[x])}return d}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function c(h){return i[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),i[h]}let u,f;switch(e.type){case"Scene":s=new Bo,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new ge(e.background):s.background=c(e.background)),e.environment!==void 0&&(s.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new vs(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new gs(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":s=new Et(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new Ci(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new rc(e.color,e.intensity);break;case"DirectionalLight":s=new ic(e.color,e.intensity);break;case"PointLight":s=new nc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new sc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new tc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new Kl(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new bs().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),f=l(e.material),s=new Oo(u,f),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),f=l(e.material),s=new dt(u,f);break;case"InstancedMesh":u=a(e.geometry),f=l(e.material);const h=e.count,d=e.instanceMatrix,p=e.instanceColor;s=new Pl(u,f,h),s.instanceMatrix=new bi(new Float32Array(d.array),16),p!==void 0&&(s.instanceColor=new bi(new Float32Array(p.array),p.itemSize));break;case"LOD":s=new Qf;break;case"Line":s=new In(a(e.geometry),l(e.material));break;case"LineLoop":s=new Dl(a(e.geometry),l(e.material));break;case"LineSegments":s=new Wt(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":s=new ys(a(e.geometry),l(e.material));break;case"Sprite":s=new Uo(l(e.material));break;case"Group":s=new fi;break;case"Bone":s=new No;break;default:s=new Ve}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let d=0;d<h.length;d++)s.add(this.parseObject(h[d],t,n,i,r))}if(e.animations!==void 0){const h=e.animations;for(let d=0;d<h.length;d++){const p=h[d];s.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const h=e.levels;for(let d=0;d<h.length;d++){const p=h[d],v=s.getObjectByProperty("uuid",p.object);v!==void 0&&s.addLevel(v,p.distance)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const lx={UVMapping:To,CubeReflectionMapping:Sr,CubeRefractionMapping:Tr,EquirectangularReflectionMapping:Zr,EquirectangularRefractionMapping:Jr,CubeUVReflectionMapping:Er,CubeUVRefractionMapping:fs},Lu={RepeatWrapping:jr,ClampToEdgeWrapping:Pt,MirroredRepeatWrapping:$r},Ru={NearestFilter:_t,NearestMipmapNearestFilter:_o,NearestMipmapLinearFilter:bo,LinearFilter:xt,LinearMipmapNearestFilter:vl,LinearMipmapLinearFilter:Ei};class xd extends zt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ti.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ti.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}xd.prototype.isImageBitmapLoader=!0;class _d{constructor(){this.type="ShapePath",this.color=new ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new us,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(m){const M=[];for(let w=0,C=m.length;w<C;w++){const F=m[w],T=new Yn;T.curves=F.curves,M.push(T)}return M}function i(m,M){const w=M.length;let C=!1;for(let F=w-1,T=0;T<w;F=T++){let B=M[F],G=M[T],O=G.x-B.x,z=G.y-B.y;if(Math.abs(z)>Number.EPSILON){if(z<0&&(B=M[T],O=-O,G=M[F],z=-z),m.y<B.y||m.y>G.y)continue;if(m.y===B.y){if(m.x===B.x)return!0}else{const $=z*(m.x-B.x)-O*(m.y-B.y);if($===0)return!0;if($<0)continue;C=!C}}else{if(m.y!==B.y)continue;if(G.x<=m.x&&m.x<=B.x||B.x<=m.x&&m.x<=G.x)return!0}}return C}const r=yn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(t===!0)return n(s);let a,l,c;const u=[];if(s.length===1)return l=s[0],c=new Yn,c.curves=l.curves,u.push(c),u;let f=!r(s[0].getPoints());f=e?!f:f;const h=[],d=[];let p=[],v=0,x;d[v]=void 0,p[v]=[];for(let m=0,M=s.length;m<M;m++)l=s[m],x=l.getPoints(),a=r(x),a=e?!a:a,a?(!f&&d[v]&&v++,d[v]={s:new Yn,p:x},d[v].s.curves=l.curves,f&&v++,p[v]=[]):p[v].push({h:l,p:x[0]});if(!d[0])return n(s);if(d.length>1){let m=!1;const M=[];for(let w=0,C=d.length;w<C;w++)h[w]=[];for(let w=0,C=d.length;w<C;w++){const F=p[w];for(let T=0;T<F.length;T++){const B=F[T];let G=!0;for(let O=0;O<d.length;O++)i(B.p,d[O].p)&&(w!==O&&M.push({froms:w,tos:O,hole:T}),G?(G=!1,h[O].push(B)):m=!0);G&&h[w].push(B)}}M.length>0&&(m||(p=h))}let g;for(let m=0,M=d.length;m<M;m++){c=d[m].s,u.push(c),g=p[m];for(let w=0,C=g.length;w<C;w++)c.holes.push(g[w].h)}return u}}class lc{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=cx(e,t,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}}function cx(o,e,t){const n=Array.from(o),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,s=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const f=ux(u,i,a,l,t);a+=f.offsetX,s.push(f.path)}}return s}function ux(o,e,t,n,i){const r=i.glyphs[o]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+o+'" does not exists in font family '+i.familyName+".");return}const s=new _d;let a,l,c,u,f,h,d,p;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let x=0,g=v.length;x<g;)switch(v[x++]){case"m":a=v[x++]*e+t,l=v[x++]*e+n,s.moveTo(a,l);break;case"l":a=v[x++]*e+t,l=v[x++]*e+n,s.lineTo(a,l);break;case"q":c=v[x++]*e+t,u=v[x++]*e+n,f=v[x++]*e+t,h=v[x++]*e+n,s.quadraticCurveTo(f,h,c,u);break;case"b":c=v[x++]*e+t,u=v[x++]*e+n,f=v[x++]*e+t,h=v[x++]*e+n,d=v[x++]*e+t,p=v[x++]*e+n,s.bezierCurveTo(f,h,d,p,c,u);break}}return{offsetX:r.ha*e,path:s}}lc.prototype.isFont=!0;class hx extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new hn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(a){let l;try{l=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),l=JSON.parse(a.substring(65,a.length-2))}const c=r.parse(l);t&&t(c)},n,i)}parse(e){return new lc(e)}}let co;const cc={getContext:function(){return co===void 0&&(co=new(window.AudioContext||window.webkitAudioContext)),co},setContext:function(o){co=o}};class bd extends zt{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new hn(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{const l=a.slice(0);cc.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}class wd extends bs{constructor(e,t,n=1){super(void 0,n);const i=new ge().set(e),r=new ge().set(t),s=new L(i.r,i.g,i.b),a=new L(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(c)}}wd.prototype.isHemisphereLightProbe=!0;class Md extends bs{constructor(e,t=1){super(void 0,t);const n=new ge().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Md.prototype.isAmbientLightProbe=!0;const Cu=new Re,Pu=new Re;class fx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Et,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Et,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,s=r*t.near/t.focus,a=t.near*Math.tan(mi*t.fov*.5)/t.zoom;let l,c;Pu.elements[12]=-r,Cu.elements[12]=r,l=-a*t.aspect+s,c=a*t.aspect+s,i.elements[0]=2*t.near/(c-l),i.elements[8]=(c+l)/(c-l),this.cameraL.projectionMatrix.copy(i),l=-a*t.aspect-s,c=a*t.aspect-s,i.elements[0]=2*t.near/(c-l),i.elements[8]=(c+l)/(c-l),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Pu),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Cu)}}class uc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Du();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Du(){return(typeof performance>"u"?Date:performance).now()}const ri=new L,Iu=new Dt,dx=new L,si=new L;class px extends Ve{constructor(){super(),this.type="AudioListener",this.context=cc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new uc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ri,Iu,dx),si.set(0,0,-1).applyQuaternion(Iu),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ri.x,i),t.positionY.linearRampToValueAtTime(ri.y,i),t.positionZ.linearRampToValueAtTime(ri.z,i),t.forwardX.linearRampToValueAtTime(si.x,i),t.forwardY.linearRampToValueAtTime(si.y,i),t.forwardZ.linearRampToValueAtTime(si.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ri.x,ri.y,ri.z),t.setOrientation(si.x,si.y,si.z,n.x,n.y,n.z)}}class hc extends Ve{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const oi=new L,Fu=new Dt,mx=new L,ai=new L;class gx extends hc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(oi,Fu,mx),ai.set(0,0,1).applyQuaternion(Fu);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(oi.x,n),t.positionY.linearRampToValueAtTime(oi.y,n),t.positionZ.linearRampToValueAtTime(oi.z,n),t.orientationX.linearRampToValueAtTime(ai.x,n),t.orientationY.linearRampToValueAtTime(ai.y,n),t.orientationZ.linearRampToValueAtTime(ai.z,n)}else t.setPosition(oi.x,oi.y,oi.z),t.setOrientation(ai.x,ai.y,ai.z)}}class Sd{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Td{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){Dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const s=this._workIndex*r;Dt.multiplyQuaternionsFlat(e,s,e,t,e,n),Dt.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){const s=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*s+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){const a=t+s;e[a]=e[a]+e[n+s]*i}}}const fc="\\[\\]\\.:\\/",vx=new RegExp("["+fc+"]","g"),dc="[^"+fc+"]",yx="[^"+fc.replace("\\.","")+"]",xx=/((?:WC+[\/:])*)/.source.replace("WC",dc),_x=/(WCOD+)?/.source.replace("WCOD",yx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),Mx=new RegExp("^"+xx+_x+bx+wx+"$"),Sx=["material","materials","bones"];class Tx{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vx,"")}static parseTrackName(e){const t=Mx.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Sx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Tx;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ed{constructor(){this.uuid=jt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,f=arguments.length;u!==f;++u){const h=arguments[u],d=h.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(h);for(let v=0,x=s;v!==x;++v)r[v].push(new tt(h,n[v],i[v]))}else if(p<c){a=e[p];const v=--c,x=e[v];t[x.uuid]=p,e[p]=x,t[d]=v,e[v]=h;for(let g=0,m=s;g!==m;++g){const M=r[g],w=M[v];let C=M[p];M[p]=w,C===void 0&&(C=new tt(h,n[g],i[g])),M[v]=C}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const l=arguments[s],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const f=r++,h=e[f];t[h.uuid]=u,e[u]=h,t[c]=f,e[f]=l;for(let d=0,p=i;d!==p;++d){const v=n[d],x=v[f],g=v[u];v[u]=x,v[f]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,f=t[u];if(f!==void 0)if(delete t[u],f<r){const h=--r,d=e[h],p=--s,v=e[p];t[d.uuid]=f,e[f]=d,t[v.uuid]=h,e[h]=v,e.pop();for(let x=0,g=i;x!==g;++x){const m=n[x],M=m[h],w=m[p];m[f]=M,m[h]=w,m.pop()}}else{const h=--s,d=e[h];h>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let p=0,v=i;p!==v;++p){const x=n[p];x[f]=x[h],x.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,f=new Array(c);i=r.length,n[e]=i,s.push(e),a.push(t),r.push(f);for(let h=u,d=l.length;h!==d;++h){const p=l[h];f[h]=new tt(p,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,l=s[a],c=e[a];t[c]=n,s[n]=l,s.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}Ed.prototype.isAnimationObjectGroup=!0;class Ex{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,s=r.length,a=new Array(s),l={endingStart:ui,endingEnd:ui};for(let c=0;c!==s;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,a=i/r;e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yl:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(s),c[u].accumulateAdditive(a);break;case Eo:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(s),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===yf;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===gf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=hi,i.endingEnd=hi):(e?i.endingStart=this.zeroSlopeAtStart?hi:ui:i.endingStart=ts,t?i.endingEnd=this.zeroSlopeAtEnd?hi:ui:i.endingEnd=ts)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,l=s.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}class Ad extends Qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==r;++f){const h=i[f],d=h.name;let p=u[d];if(p!==void 0)s[f]=p;else{if(p=s[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const v=t&&t._propertyBindings[f].binding.parsedPath;p=new Td(tt.create(n,d,v),h.ValueTypeName,h.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),s[f]=p}a[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,a=s[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new jl(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?ls.findByName(i,e):e;const a=s!==null?s.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Eo),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const u=new Ex(this,s,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ls.findByName(n,e):e,s=r?r.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let a=0,l=s.length;a!==l;++a){const c=s[a];this._deactivateAction(c);const u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const a=n[s].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const a=r[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Ad.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Xo{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Xo(this.value.clone===void 0?this.value:this.value.clone())}}class Ld extends Pi{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Ld.prototype.isInstancedInterleavedBuffer=!0;class Rd{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}Rd.prototype.isGLBufferAttribute=!0;class Ax{constructor(e,t,n=0,i=1/0){this.ray=new ei(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return ul(e,this,n,t),n.sort(Bu),n}intersectObjects(e,t=!1,n=[]){for(let i=0,r=e.length;i<r;i++)ul(e[i],this,n,t);return n.sort(Bu),n}}function Bu(o,e){return o.distance-e.distance}function ul(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,s=i.length;r<s;r++)ul(i[r],e,t,!0)}}class Lx{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rx{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const zu=new ee;class Pr{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return zu.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Pr.prototype.isBox2=!0;const Uu=new L,uo=new L;class Cd{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Uu.subVectors(e,this.start),uo.subVectors(this.end,this.start);const n=uo.dot(uo);let r=uo.dot(Uu)/n;return t&&(r=Ct(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Pd extends Ve{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}Pd.prototype.isImmediateRenderObject=!0;const Ou=new L;class Cx extends Ve{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new Ie,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,l=32;s<l;s++,a++){const c=s/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new xe(i,3));const r=new Lt({fog:!1,toneMapped:!1});this.cone=new Wt(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Ou.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ou),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Vn=new L,ho=new Re,Na=new Re;class Dd extends Wt{constructor(e){const t=Id(e),n=new Ie,i=[],r=[],s=new ge(0,0,1),a=new ge(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new xe(i,3)),n.setAttribute("color",new xe(r,3));const l=new Lt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Na.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(ho.multiplyMatrices(Na,a.matrixWorld),Vn.setFromMatrixPosition(ho),i.setXYZ(s,Vn.x,Vn.y,Vn.z),ho.multiplyMatrices(Na,a.parent.matrixWorld),Vn.setFromMatrixPosition(ho),i.setXYZ(s+1,Vn.x,Vn.y,Vn.z),s+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Id(o){const e=[];o&&o.isBone&&e.push(o);for(let t=0;t<o.children.length;t++)e.push.apply(e,Id(o.children[t]));return e}class Px extends dt{constructor(e,t,n){const i=new Si(t,4,2),r=new Bn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Dx=new L,Nu=new ge,ku=new ge;class Ix extends Ve{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new wi(t);i.rotateY(Math.PI*.5),this.material=new Bn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),s=new Float32Array(r.count*3);i.setAttribute("color",new et(s,3)),this.add(new dt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Nu.copy(this.light.color),ku.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Nu:ku;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(Dx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Fd extends Wt{constructor(e=10,t=10,n=4473924,i=8947848){n=new ge(n),i=new ge(i);const r=t/2,s=e/t,a=e/2,l=[],c=[];for(let h=0,d=0,p=-a;h<=t;h++,p+=s){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const v=h===r?n:i;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new Ie;u.setAttribute("position",new xe(l,3)),u.setAttribute("color",new xe(c,3));const f=new Lt({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}}class Fx extends Wt{constructor(e=10,t=16,n=8,i=64,r=4473924,s=8947848){r=new ge(r),s=new ge(s);const a=[],l=[];for(let f=0;f<=t;f++){const h=f/t*(Math.PI*2),d=Math.sin(h)*e,p=Math.cos(h)*e;a.push(0,0,0),a.push(d,0,p);const v=f&1?r:s;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let f=0;f<=n;f++){const h=f&1?r:s,d=e-e/n*f;for(let p=0;p<i;p++){let v=p/i*(Math.PI*2),x=Math.sin(v)*d,g=Math.cos(v)*d;a.push(x,0,g),l.push(h.r,h.g,h.b),v=(p+1)/i*(Math.PI*2),x=Math.sin(v)*d,g=Math.cos(v)*d,a.push(x,0,g),l.push(h.r,h.g,h.b)}}const c=new Ie;c.setAttribute("position",new xe(a,3)),c.setAttribute("color",new xe(l,3));const u=new Lt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}}const Gu=new L,fo=new L,Hu=new L;class Bx extends Ve{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new Ie;i.setAttribute("position",new xe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Lt({fog:!1,toneMapped:!1});this.lightPlane=new In(i,r),this.add(this.lightPlane),i=new Ie,i.setAttribute("position",new xe([0,0,0,0,0,1],3)),this.targetLine=new In(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Gu.setFromMatrixPosition(this.light.matrixWorld),fo.setFromMatrixPosition(this.light.target.matrixWorld),Hu.subVectors(fo,Gu),this.lightPlane.lookAt(fo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(fo),this.targetLine.scale.z=Hu.length()}}const po=new L,ft=new ps;class zx extends Wt{constructor(e){const t=new Ie,n=new Lt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={},a=new ge(16755200),l=new ge(16711680),c=new ge(43775),u=new ge(16777215),f=new ge(3355443);h("n1","n2",a),h("n2","n4",a),h("n4","n3",a),h("n3","n1",a),h("f1","f2",a),h("f2","f4",a),h("f4","f3",a),h("f3","f1",a),h("n1","f1",a),h("n2","f2",a),h("n3","f3",a),h("n4","f4",a),h("p","n1",l),h("p","n2",l),h("p","n3",l),h("p","n4",l),h("u1","u2",c),h("u2","u3",c),h("u3","u1",c),h("c","t",u),h("p","c",f),h("cn1","cn2",f),h("cn3","cn4",f),h("cf1","cf2",f),h("cf3","cf4",f);function h(p,v,x){d(p,x),d(v,x)}function d(p,v){i.push(0,0,0),r.push(v.r,v.g,v.b),s[p]===void 0&&(s[p]=[]),s[p].push(i.length/3-1)}t.setAttribute("position",new xe(i,3)),t.setAttribute("color",new xe(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;ft.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),gt("c",t,e,ft,0,0,-1),gt("t",t,e,ft,0,0,1),gt("n1",t,e,ft,-1,-1,-1),gt("n2",t,e,ft,n,-1,-1),gt("n3",t,e,ft,-1,i,-1),gt("n4",t,e,ft,n,i,-1),gt("f1",t,e,ft,-1,-1,1),gt("f2",t,e,ft,n,-1,1),gt("f3",t,e,ft,-1,i,1),gt("f4",t,e,ft,n,i,1),gt("u1",t,e,ft,n*.7,i*1.1,-1),gt("u2",t,e,ft,-1*.7,i*1.1,-1),gt("u3",t,e,ft,0,i*2,-1),gt("cf1",t,e,ft,-1,0,1),gt("cf2",t,e,ft,n,0,1),gt("cf3",t,e,ft,0,-1,1),gt("cf4",t,e,ft,0,i,1),gt("cn1",t,e,ft,-1,0,-1),gt("cn2",t,e,ft,n,0,-1),gt("cn3",t,e,ft,0,-1,-1),gt("cn4",t,e,ft,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function gt(o,e,t,n,i,r,s){po.set(i,r,s).unproject(n);const a=e[o];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],po.x,po.y,po.z)}}const mo=new Qt;class Bd extends Wt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Ie;r.setIndex(new et(n,1)),r.setAttribute("position",new et(i,3)),super(r,new Lt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&mo.setFromObject(this.object),mo.isEmpty())return;const t=mo.min,n=mo.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return Wt.prototype.copy.call(this,e),this.object=e.object,this}}class Ux extends Wt{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ie;r.setIndex(new et(n,1)),r.setAttribute("position",new xe(i,3)),super(r,new Lt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class Ox extends In{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],s=new Ie;s.setAttribute("position",new xe(r,3)),s.computeBoundingSphere(),super(s,new Lt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],l=new Ie;l.setAttribute("position",new xe(a,3)),l.computeBoundingSphere(),this.add(new dt(l,new Bn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?vt:vi,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const Vu=new L;let go,ka;class Nx extends Ve{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,r=n*.2,s=r*.2){super(),this.type="ArrowHelper",go===void 0&&(go=new Ie,go.setAttribute("position",new xe([0,0,0,0,1,0],3)),ka=new Jn(0,.5,1,5,1),ka.translate(0,-.5,0)),this.position.copy(t),this.line=new In(go,new Lt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new dt(ka,new Bn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Vu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Vu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class zd extends Wt{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ie;i.setAttribute("position",new xe(t,3)),i.setAttribute("color",new xe(n,3));const r=new Lt({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new ge,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ud=new Float32Array(1),kx=new Int32Array(Ud.buffer);class Gx{static toHalfFloat(e){Ud[0]=e;const t=kx[0];let n=t>>16&32768,i=t>>12&2047;const r=t>>23&255;return r<103?n:r>142?(n|=31744,n|=(r==255?0:1)&&t&8388607,n):r<113?(i|=2048,n|=(i>>114-r)+(i>>113-r&1),n):(n|=r-112<<10|i>>1,n+=i&1,n)}}const Hx=0,Vx=1,Wx=0,qx=1,Xx=2;function Yx(o){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),o}function Zx(o=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),o.isMultiMaterial=!0,o.materials=o,o.clone=function(){return o.slice()},o}function Jx(o,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new ys(o,e)}function jx(o){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Uo(o)}function $x(o,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new ys(o,e)}function Qx(o){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Di(o)}function Kx(o){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Di(o)}function e_(o){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Di(o)}function t_(o,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new L(o,e,t)}function n_(o,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new et(o,e).setUsage(fr)}function i_(o,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new Rf(o,e)}function r_(o,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new Cf(o,e)}function s_(o,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new Pf(o,e)}function o_(o,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new Df(o,e)}function a_(o,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new Ro(o,e)}function l_(o,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new If(o,e)}function c_(o,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Co(o,e)}function u_(o,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new xe(o,e)}function h_(o,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new Bf(o,e)}$t.create=function(o,e){return console.log("THREE.Curve.create() has been deprecated"),o.prototype=Object.create($t.prototype),o.prototype.constructor=o,o.prototype.getPoint=e,o};us.prototype.fromPoints=function(o){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(o)};function f_(o){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new zd(o)}function d_(o,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Bd(o,e)}function p_(o,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new Wt(new Fl(o.geometry),new Lt({color:e!==void 0?e:16777215}))}Fd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Dd.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function m_(o,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new Wt(new Gl(o.geometry),new Lt({color:e!==void 0?e:16777215}))}zt.prototype.extractUrlBase=function(o){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),So.extractUrlBase(o)};zt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function g_(o){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new hn(o)}function v_(o){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new hd(o)}Pr.prototype.center=function(o){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(o)};Pr.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Pr.prototype.isIntersectionBox=function(o){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Pr.prototype.size=function(o){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(o)};Qt.prototype.center=function(o){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(o)};Qt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Qt.prototype.isIntersectionBox=function(o){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Qt.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};Qt.prototype.size=function(o){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(o)};Kn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ms.prototype.setFromMatrix=function(o){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(o)};Cd.prototype.center=function(o){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(o)};wt.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};wt.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};wt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};wt.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};wt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};wt.prototype.getInverse=function(o){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};Re.prototype.extractPosition=function(o){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(o)};Re.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};Re.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};Re.prototype.setRotationFromQuaternion=function(o){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(o)};Re.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Re.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};Re.prototype.multiplyVector4=function(o){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};Re.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Re.prototype.rotateAxis=function(o){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),o.transformDirection(this)};Re.prototype.crossVector=function(o){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};Re.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Re.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Re.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Re.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Re.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Re.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};Re.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Re.prototype.makeFrustum=function(o,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(o,e,n,t,i,r)};Re.prototype.getInverse=function(o){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};gn.prototype.isIntersectionLine=function(o){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(o)};Dt.prototype.multiplyVector3=function(o){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),o.applyQuaternion(this)};Dt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};ei.prototype.isIntersectionBox=function(o){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};ei.prototype.isIntersectionPlane=function(o){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(o)};ei.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};yt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};yt.prototype.barycoordFromPoint=function(o,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(o,e)};yt.prototype.midpoint=function(o){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(o)};yt.prototypenormal=function(o){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(o)};yt.prototype.plane=function(o){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(o)};yt.barycoordFromPoint=function(o,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),yt.getBarycoord(o,e,t,n,i)};yt.normal=function(o,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),yt.getNormal(o,e,t,n)};Yn.prototype.extractAllPoints=function(o){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(o)};Yn.prototype.extrude=function(o){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new un(this,o)};Yn.prototype.makeGeometry=function(o){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Mi(this,o)};ee.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};ee.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};ee.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(o){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(o)};L.prototype.getScaleFromMatrix=function(o){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(o)};L.prototype.getColumnFromMatrix=function(o,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,o)};L.prototype.applyProjection=function(o){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(o)};L.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};L.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};nt.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};nt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ve.prototype.getChildByName=function(o){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(o)};Ve.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ve.prototype.translate=function(o,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,o)};Ve.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ve.prototype.applyMatrix=function(o){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(Ve.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(o){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=o}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});dt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(dt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),xf},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Oo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Et.prototype.setLens=function(o,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(o)};Object.defineProperties(fn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(o){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=o}},shadowCameraLeft:{set:function(o){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=o}},shadowCameraRight:{set:function(o){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=o}},shadowCameraTop:{set:function(o){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=o}},shadowCameraBottom:{set:function(o){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=o}},shadowCameraNear:{set:function(o){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=o}},shadowCameraFar:{set:function(o){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=o}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(o){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=o}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(o){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=o}},shadowMapHeight:{set:function(o){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=o}}});Object.defineProperties(et.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===fr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(fr)}}});et.prototype.setDynamic=function(o){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?fr:hr),this};et.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},et.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ie.prototype.addIndex=function(o){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(o)};Ie.prototype.addAttribute=function(o,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(o,new et(arguments[1],arguments[2]))):o==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(o,e)};Ie.prototype.addDrawCall=function(o,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(o,e)};Ie.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ie.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ie.prototype.removeAttribute=function(o){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(o)};Ie.prototype.applyMatrix=function(o){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(Ie.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Pi.prototype.setDynamic=function(o){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?fr:hr),this};Pi.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};un.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};un.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};un.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Bo.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Xo.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(At.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ge}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(o){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=o===pl}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(o){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=o}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(cn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(o){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=o}}});it.prototype.clearTarget=function(o,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(o),this.clear(e,t,n)};it.prototype.animate=function(o){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(o)};it.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};it.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};it.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};it.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};it.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};it.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};it.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};it.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};it.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};it.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};it.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};it.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};it.prototype.enableScissorTest=function(o){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(o)};it.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};it.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};it.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};it.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};it.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};it.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};it.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};it.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};it.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};it.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(it.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=o}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=o}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(o){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=o===!0?ds:Ot}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Zf.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function y_(o,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new Do(o,t)}Object.defineProperties(en.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=o}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=o}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=o}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=o}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(o){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=o}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(o){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=o}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(o){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=o}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(o){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=o}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(o){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=o}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(o){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=o}}});hc.prototype.load=function(o){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new bd().load(o,function(n){e.setBuffer(n)}),this};Sd.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Po.prototype.updateCubeMap=function(o,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(o,e)};Po.prototype.clear=function(o,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(o,e,t,n)};Li.crossOrigin=void 0;Li.loadTexture=function(o,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new fd;i.setCrossOrigin(this.crossOrigin);const r=i.load(o,t,void 0,n);return e&&(r.mapping=e),r};Li.loadTextureCube=function(o,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new ud;i.setCrossOrigin(this.crossOrigin);const r=i.load(o,t,void 0,n);return e&&(r.mapping=e),r};Li.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Li.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function x_(){console.error("THREE.CanvasRenderer has been removed")}function __(){console.error("THREE.JSONLoader has been removed.")}const b_={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function w_(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const M_=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:bh,AddEquation:ci,AddOperation:vh,AdditiveAnimationBlendMode:yl,AdditiveBlending:Va,AlphaFormat:Rh,AlwaysDepth:uh,AlwaysStencilFunc:Sf,AmbientLight:rc,AmbientLightProbe:Md,AnimationClip:ls,AnimationLoader:sx,AnimationMixer:Ad,AnimationObjectGroup:Ed,AnimationUtils:ot,ArcCurve:Bl,ArrayCamera:Cl,ArrowHelper:Nx,Audio:hc,AudioAnalyser:Sd,AudioContext:cc,AudioListener:px,AudioLoader:bd,AxesHelper:zd,AxisHelper:f_,BackSide:vt,BasicDepthPacking:bf,BasicShadowMap:lp,BinaryTextureLoader:v_,Bone:No,BooleanKeyframeTrack:Ii,BoundingBoxHelper:d_,Box2:Pr,Box3:Qt,Box3Helper:Ux,BoxBufferGeometry:Dn,BoxGeometry:Dn,BoxHelper:Bd,BufferAttribute:et,BufferGeometry:Ie,BufferGeometryLoader:yd,ByteType:Mh,Cache:Ti,Camera:ps,CameraHelper:zx,CanvasRenderer:x_,CanvasTexture:ed,CatmullRomCurve3:Ul,CineonToneMapping:_h,CircleBufferGeometry:pr,CircleGeometry:pr,ClampToEdgeWrapping:Pt,Clock:uc,Color:ge,ColorKeyframeTrack:$l,CompressedTexture:Il,CompressedTextureLoader:ox,ConeBufferGeometry:mr,ConeGeometry:mr,CubeCamera:Po,CubeReflectionMapping:Sr,CubeRefractionMapping:Tr,CubeTexture:Ar,CubeTextureLoader:ud,CubeUVReflectionMapping:Er,CubeUVRefractionMapping:fs,CubicBezierCurve:Go,CubicBezierCurve3:Ol,CubicInterpolant:od,CullFaceBack:Ha,CullFaceFront:Ju,CullFaceFrontBack:ap,CullFaceNone:Zu,Curve:$t,CurvePath:dd,CustomBlending:$u,CustomToneMapping:wh,CylinderBufferGeometry:Jn,CylinderGeometry:Jn,Cylindrical:Rx,DataTexture:gi,DataTexture2DArray:Ll,DataTexture3D:Rl,DataTextureLoader:hd,DataUtils:Gx,DecrementStencilOp:xp,DecrementWrapStencilOp:bp,DefaultLoadingManager:cd,DepthFormat:pi,DepthStencilFormat:ur,DepthTexture:td,DirectionalLight:ic,DirectionalLightHelper:Bx,DiscreteInterpolant:ad,DodecahedronBufferGeometry:gr,DodecahedronGeometry:gr,DoubleSide:yi,DstAlphaFactor:rh,DstColorFactor:oh,DynamicBufferAttribute:n_,DynamicCopyUsage:Bp,DynamicDrawUsage:fr,DynamicReadUsage:Dp,EdgesGeometry:Fl,EdgesHelper:p_,EllipseCurve:xs,EqualDepth:fh,EqualStencilFunc:Tp,EquirectangularReflectionMapping:Zr,EquirectangularRefractionMapping:Jr,Euler:Ri,EventDispatcher:Qn,ExtrudeBufferGeometry:un,ExtrudeGeometry:un,FaceColors:qx,FileLoader:hn,FlatShading:pl,Float16BufferAttribute:Ff,Float32Attribute:u_,Float32BufferAttribute:xe,Float64Attribute:h_,Float64BufferAttribute:Bf,FloatType:Rn,Fog:vs,FogExp2:gs,Font:lc,FontLoader:hx,FrontSide:vi,Frustum:ms,GLBufferAttribute:Rd,GLSL1:Up,GLSL3:rl,GammaEncoding:Ao,GreaterDepth:ph,GreaterEqualDepth:dh,GreaterEqualStencilFunc:Rp,GreaterStencilFunc:Ap,GridHelper:Fd,Group:fi,HalfFloatType:di,HemisphereLight:Kl,HemisphereLightHelper:Ix,HemisphereLightProbe:wd,IcosahedronBufferGeometry:vr,IcosahedronGeometry:vr,ImageBitmapLoader:xd,ImageLoader:cs,ImageUtils:Li,ImmediateRenderObject:Pd,IncrementStencilOp:yp,IncrementWrapStencilOp:_p,InstancedBufferAttribute:bi,InstancedBufferGeometry:ac,InstancedInterleavedBuffer:Ld,InstancedMesh:Pl,Int16Attribute:o_,Int16BufferAttribute:Df,Int32Attribute:l_,Int32BufferAttribute:If,Int8Attribute:i_,Int8BufferAttribute:Rf,IntType:Th,InterleavedBuffer:Pi,InterleavedBufferAttribute:Zn,Interpolant:Fn,InterpolateDiscrete:Kr,InterpolateLinear:es,InterpolateSmooth:vo,InvertStencilOp:wp,JSONLoader:__,KeepStencilOp:yo,KeyframeTrack:dn,LOD:Qf,LatheBufferGeometry:yr,LatheGeometry:yr,Layers:Sl,LensFlare:w_,LessDepth:hh,LessEqualDepth:xo,LessEqualStencilFunc:Ep,LessStencilFunc:Sp,Light:fn,LightProbe:bs,Line:In,Line3:Cd,LineBasicMaterial:Lt,LineCurve:_s,LineCurve3:nd,LineDashedMaterial:Jl,LineLoop:Dl,LinePieces:Vx,LineSegments:Wt,LineStrip:Hx,LinearEncoding:Ot,LinearFilter:xt,LinearInterpolant:jl,LinearMipMapLinearFilter:dp,LinearMipMapNearestFilter:fp,LinearMipmapLinearFilter:Ei,LinearMipmapNearestFilter:vl,LinearToneMapping:yh,Loader:zt,LoaderUtils:So,LoadingManager:Ql,LogLuvEncoding:_f,LoopOnce:gf,LoopPingPong:yf,LoopRepeat:vf,LuminanceAlphaFormat:Ph,LuminanceFormat:Ch,MOUSE:sp,Material:At,MaterialLoader:vd,Math:wc,MathUtils:wc,Matrix3:wt,Matrix4:Re,MaxEquation:Ya,Mesh:dt,MeshBasicMaterial:Bn,MeshDepthMaterial:Io,MeshDistanceMaterial:Fo,MeshFaceMaterial:Yx,MeshLambertMaterial:Yl,MeshMatcapMaterial:Zl,MeshNormalMaterial:Xl,MeshPhongMaterial:Wl,MeshPhysicalMaterial:Vl,MeshStandardMaterial:qo,MeshToonMaterial:ql,MinEquation:Xa,MirroredRepeatWrapping:$r,MixOperation:gh,MultiMaterial:Zx,MultiplyBlending:qa,MultiplyOperation:hs,NearestFilter:_t,NearestMipMapLinearFilter:hp,NearestMipMapNearestFilter:up,NearestMipmapLinearFilter:bo,NearestMipmapNearestFilter:_o,NeverDepth:ch,NeverStencilFunc:Mp,NoBlending:Cn,NoColors:Wx,NoToneMapping:Wn,NormalAnimationBlendMode:Eo,NormalBlending:ar,NotEqualDepth:mh,NotEqualStencilFunc:Lp,NumberKeyframeTrack:os,Object3D:Ve,ObjectLoader:ax,ObjectSpaceNormalMap:Mf,OctahedronBufferGeometry:wi,OctahedronGeometry:wi,OneFactor:th,OneMinusDstAlphaFactor:sh,OneMinusDstColorFactor:ah,OneMinusSrcAlphaFactor:gl,OneMinusSrcColorFactor:ih,OrthographicCamera:Ci,PCFShadowMap:dl,PCFSoftShadowMap:ju,PMREMGenerator:kf,ParametricBufferGeometry:wo,ParametricGeometry:wo,Particle:jx,ParticleBasicMaterial:Kx,ParticleSystem:$x,ParticleSystemMaterial:e_,Path:us,PerspectiveCamera:Et,Plane:gn,PlaneBufferGeometry:_i,PlaneGeometry:_i,PlaneHelper:Ox,PointCloud:Jx,PointCloudMaterial:Qx,PointLight:nc,PointLightHelper:Px,Points:ys,PointsMaterial:Di,PolarGridHelper:Fx,PolyhedronBufferGeometry:xn,PolyhedronGeometry:xn,PositionalAudio:gx,PropertyBinding:tt,PropertyMixer:Td,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:Nl,Quaternion:Dt,QuaternionKeyframeTrack:Cr,QuaternionLinearInterpolant:ld,REVISION:fl,RGBADepthPacking:wf,RGBAFormat:Ft,RGBAIntegerFormat:Oh,RGBA_ASTC_10x10_Format:$h,RGBA_ASTC_10x5_Format:Zh,RGBA_ASTC_10x6_Format:Jh,RGBA_ASTC_10x8_Format:jh,RGBA_ASTC_12x10_Format:Qh,RGBA_ASTC_12x12_Format:Kh,RGBA_ASTC_4x4_Format:kh,RGBA_ASTC_5x4_Format:Gh,RGBA_ASTC_5x5_Format:Hh,RGBA_ASTC_6x5_Format:Vh,RGBA_ASTC_6x6_Format:Wh,RGBA_ASTC_8x5_Format:qh,RGBA_ASTC_8x6_Format:Xh,RGBA_ASTC_8x8_Format:Yh,RGBA_BPTC_Format:ef,RGBA_ETC2_EAC_Format:il,RGBA_PVRTC_2BPPV1_Format:tl,RGBA_PVRTC_4BPPV1_Format:el,RGBA_S3TC_DXT1_Format:Ja,RGBA_S3TC_DXT3_Format:ja,RGBA_S3TC_DXT5_Format:$a,RGBDEncoding:bl,RGBEEncoding:Lo,RGBEFormat:Dh,RGBFormat:Pn,RGBIntegerFormat:Uh,RGBM16Encoding:_l,RGBM7Encoding:xl,RGB_ETC1_Format:Nh,RGB_ETC2_Format:nl,RGB_PVRTC_2BPPV1_Format:Ka,RGB_PVRTC_4BPPV1_Format:Qa,RGB_S3TC_DXT1_Format:Za,RGFormat:Bh,RGIntegerFormat:zh,RawShaderMaterial:Lr,Ray:ei,Raycaster:Ax,RectAreaLight:sc,RedFormat:Ih,RedIntegerFormat:Fh,ReinhardToneMapping:xh,RepeatWrapping:jr,ReplaceStencilOp:vp,ReverseSubtractEquation:Ku,RingBufferGeometry:xr,RingGeometry:xr,SRGB8_ALPHA8_ASTC_10x10_Format:df,SRGB8_ALPHA8_ASTC_10x5_Format:uf,SRGB8_ALPHA8_ASTC_10x6_Format:hf,SRGB8_ALPHA8_ASTC_10x8_Format:ff,SRGB8_ALPHA8_ASTC_12x10_Format:pf,SRGB8_ALPHA8_ASTC_12x12_Format:mf,SRGB8_ALPHA8_ASTC_4x4_Format:tf,SRGB8_ALPHA8_ASTC_5x4_Format:nf,SRGB8_ALPHA8_ASTC_5x5_Format:rf,SRGB8_ALPHA8_ASTC_6x5_Format:sf,SRGB8_ALPHA8_ASTC_6x6_Format:of,SRGB8_ALPHA8_ASTC_8x5_Format:af,SRGB8_ALPHA8_ASTC_8x6_Format:lf,SRGB8_ALPHA8_ASTC_8x8_Format:cf,Scene:Bo,SceneUtils:b_,ShaderChunk:He,ShaderLib:ln,ShaderMaterial:cn,ShadowMaterial:Hl,Shape:Yn,ShapeBufferGeometry:Mi,ShapeGeometry:Mi,ShapePath:_d,ShapeUtils:yn,ShortType:Sh,Skeleton:ko,SkeletonHelper:Dd,SkinnedMesh:Oo,SmoothShading:cp,Sphere:Kn,SphereBufferGeometry:Si,SphereGeometry:Si,Spherical:Lx,SphericalHarmonics3:oc,SplineCurve:Vo,SpotLight:tc,SpotLightHelper:Cx,Sprite:Uo,SpriteMaterial:zo,SrcAlphaFactor:ml,SrcAlphaSaturateFactor:lh,SrcColorFactor:nh,StaticCopyUsage:Fp,StaticDrawUsage:hr,StaticReadUsage:Pp,StereoCamera:fx,StreamCopyUsage:zp,StreamDrawUsage:Cp,StreamReadUsage:Ip,StringKeyframeTrack:Fi,SubtractEquation:Qu,SubtractiveBlending:Wa,TOUCH:op,TangentSpaceNormalMap:Ai,TetrahedronBufferGeometry:_r,TetrahedronGeometry:_r,TextBufferGeometry:Mo,TextGeometry:Mo,Texture:Mt,TextureLoader:fd,TorusBufferGeometry:br,TorusGeometry:br,TorusKnotBufferGeometry:wr,TorusKnotGeometry:wr,Triangle:yt,TriangleFanDrawMode:mp,TriangleStripDrawMode:pp,TrianglesDrawMode:xf,TubeBufferGeometry:Mr,TubeGeometry:Mr,UVMapping:To,Uint16Attribute:a_,Uint16BufferAttribute:Ro,Uint32Attribute:c_,Uint32BufferAttribute:Co,Uint8Attribute:r_,Uint8BufferAttribute:Cf,Uint8ClampedAttribute:s_,Uint8ClampedBufferAttribute:Pf,Uniform:Xo,UniformsLib:ue,UniformsUtils:Tl,UnsignedByteType:xi,UnsignedInt248Type:lr,UnsignedIntType:Wr,UnsignedShort4444Type:Eh,UnsignedShort5551Type:Ah,UnsignedShort565Type:Lh,UnsignedShortType:Qr,VSMShadowMap:rr,Vector2:ee,Vector3:L,Vector4:nt,VectorKeyframeTrack:as,Vertex:t_,VertexColors:Xx,VideoTexture:Kf,WebGL1Renderer:jf,WebGLCubeRenderTarget:Do,WebGLMultipleRenderTargets:Af,WebGLMultisampleRenderTarget:Ml,WebGLRenderTarget:en,WebGLRenderTargetCube:y_,WebGLRenderer:it,WebGLUtils:Jf,WireframeGeometry:Gl,WireframeHelper:m_,WrapAroundEnding:ts,XHRLoader:g_,ZeroCurvatureEnding:ui,ZeroFactor:eh,ZeroSlopeEnding:hi,ZeroStencilOp:gp,sRGBEncoding:ds},Symbol.toStringTag,{value:"Module"})),S_=$n(M_);var hl={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};const T_=Object.freeze(Object.defineProperty({__proto__:null,CopyShader:hl},Symbol.toStringTag,{value:"Module"}));let Yo=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}};const E_=new Ci(-1,1,1,-1,0,1),pc=new Ie;pc.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3));pc.setAttribute("uv",new xe([0,2,0,0,2,0],2));let Od=class{constructor(e){this._mesh=new dt(pc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,E_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};const A_=Object.freeze(Object.defineProperty({__proto__:null,FullScreenQuad:Od,Pass:Yo},Symbol.toStringTag,{value:"Module"}));class Wu extends Yo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tl.clone(e.uniforms),this.material=new cn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Od(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class qu extends Yo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class L_ extends Yo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class R_{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:xt,magFilter:xt,format:Ft},i=e.getSize(new ee);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],hl===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Wu===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Wu(hl),this.clock=new uc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qu!==void 0&&(s instanceof qu?n=!0:s instanceof L_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}class C_{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const P_=new Ci(-1,1,1,-1,0,1),mc=new Ie;mc.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3));mc.setAttribute("uv",new xe([0,2,0,0,2,0],2));class D_{constructor(e){this._mesh=new dt(mc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,P_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const I_=Object.freeze(Object.defineProperty({__proto__:null,EffectComposer:R_,FullScreenQuad:D_,Pass:C_},Symbol.toStringTag,{value:"Module"})),F_=$n(I_);class B_{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},n={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let i='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const r=document.createElement("div");return r.id="webglmessage",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",n[e]?i=i.replace("$0","graphics card"):i=i.replace("$0","browser"),i=i.replace("$1",t[e]),r.innerHTML=i,r}}const z_=Object.freeze(Object.defineProperty({__proto__:null,WEBGL:B_},Symbol.toStringTag,{value:"Module"})),U_=$n(z_),O_=$n(A_),N_=$n(T_),k_={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},mixRatio:{value:.5},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;
		uniform float mixRatio;

		uniform sampler2D tDiffuse1;
		uniform sampler2D tDiffuse2;

		varying vec2 vUv;

		void main() {

			vec4 texel1 = texture2D( tDiffuse1, vUv );
			vec4 texel2 = texture2D( tDiffuse2, vUv );
			gl_FragColor = opacity * mix( texel1, texel2, mixRatio );

		}`},G_=Object.freeze(Object.defineProperty({__proto__:null,BlendShader:k_},Symbol.toStringTag,{value:"Module"})),H_=$n(G_),V_={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`},W_=Object.freeze(Object.defineProperty({__proto__:null,RGBShiftShader:V_},Symbol.toStringTag,{value:"Module"})),q_=$n(W_),X_={uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`},Y_=Object.freeze(Object.defineProperty({__proto__:null,VignetteShader:X_},Symbol.toStringTag,{value:"Module"})),Z_=$n(Y_);var Xu;function J_(){return Xu||(Xu=1,(()=>{var o={d:(_,b)=>{for(var E in b)o.o(b,E)&&!o.o(_,E)&&Object.defineProperty(_,E,{enumerable:!0,get:b[E]})},o:(_,b)=>Object.prototype.hasOwnProperty.call(_,b),r:_=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})}},e={};function t(_,b){if(_==null)return{};var E,P,U=function(A,S){if(A==null)return{};var I,k,ne={},ie=Object.keys(A);for(k=0;k<ie.length;k++)I=ie[k],S.indexOf(I)>=0||(ne[I]=A[I]);return ne}(_,b);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(_);for(P=0;P<y.length;P++)E=y[P],b.indexOf(E)>=0||Object.prototype.propertyIsEnumerable.call(_,E)&&(U[E]=_[E])}return U}function n(_,b){if(!(_ instanceof b))throw new TypeError("Cannot call a class as a function")}function i(_,b){for(var E=0;E<b.length;E++){var P=b[E];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(_,P.key,P)}}function r(_,b,E){return b&&i(_.prototype,b),Object.defineProperty(_,"prototype",{writable:!1}),_}function s(_,b,E){return b in _?Object.defineProperty(_,b,{value:E,enumerable:!0,configurable:!0,writable:!0}):_[b]=E,_}o.r(e),o.d(e,{Background:()=>ye,BackgroundCamera:()=>B,BackgroundEffects:()=>Ae,BackgroundRenderer:()=>zi,Easings:()=>Jo,EffectPass:()=>Ue,EffectType:()=>se,Particles:()=>j,SlideDirection:()=>ut,TransitionType:()=>bt,WipeDirection:()=>Me,isWebGLSupported:()=>Ss,loadImage:()=>Zo});const a=S_,l=F_,c=U_;var u={Linear:{None:function(_){return _}},Quadratic:{In:function(_){return _*_},Out:function(_){return _*(2-_)},InOut:function(_){return(_*=2)<1?.5*_*_:-.5*(--_*(_-2)-1)}},Cubic:{In:function(_){return _*_*_},Out:function(_){return--_*_*_+1},InOut:function(_){return(_*=2)<1?.5*_*_*_:.5*((_-=2)*_*_+2)}},Quartic:{In:function(_){return _*_*_*_},Out:function(_){return 1- --_*_*_*_},InOut:function(_){return(_*=2)<1?.5*_*_*_*_:-.5*((_-=2)*_*_*_-2)}},Quintic:{In:function(_){return _*_*_*_*_},Out:function(_){return--_*_*_*_*_+1},InOut:function(_){return(_*=2)<1?.5*_*_*_*_*_:.5*((_-=2)*_*_*_*_+2)}},Sinusoidal:{In:function(_){return 1-Math.cos(_*Math.PI/2)},Out:function(_){return Math.sin(_*Math.PI/2)},InOut:function(_){return .5*(1-Math.cos(Math.PI*_))}},Exponential:{In:function(_){return _===0?0:Math.pow(1024,_-1)},Out:function(_){return _===1?1:1-Math.pow(2,-10*_)},InOut:function(_){return _===0?0:_===1?1:(_*=2)<1?.5*Math.pow(1024,_-1):.5*(2-Math.pow(2,-10*(_-1)))}},Circular:{In:function(_){return 1-Math.sqrt(1-_*_)},Out:function(_){return Math.sqrt(1- --_*_)},InOut:function(_){return(_*=2)<1?-.5*(Math.sqrt(1-_*_)-1):.5*(Math.sqrt(1-(_-=2)*_)+1)}},Elastic:{In:function(_){return _===0?0:_===1?1:-Math.pow(2,10*(_-1))*Math.sin(5*(_-1.1)*Math.PI)},Out:function(_){return _===0?0:_===1?1:Math.pow(2,-10*_)*Math.sin(5*(_-.1)*Math.PI)+1},InOut:function(_){return _===0?0:_===1?1:(_*=2)<1?-.5*Math.pow(2,10*(_-1))*Math.sin(5*(_-1.1)*Math.PI):.5*Math.pow(2,-10*(_-1))*Math.sin(5*(_-1.1)*Math.PI)+1}},Back:{In:function(_){var b=1.70158;return _*_*((b+1)*_-b)},Out:function(_){var b=1.70158;return--_*_*((b+1)*_+b)+1},InOut:function(_){var b=2.5949095;return(_*=2)<1?_*_*((b+1)*_-b)*.5:.5*((_-=2)*_*((b+1)*_+b)+2)}},Bounce:{In:function(_){return 1-u.Bounce.Out(1-_)},Out:function(_){return _<1/2.75?7.5625*_*_:_<2/2.75?7.5625*(_-=1.5/2.75)*_+.75:_<2.5/2.75?7.5625*(_-=2.25/2.75)*_+.9375:7.5625*(_-=2.625/2.75)*_+.984375},InOut:function(_){return _<.5?.5*u.Bounce.In(2*_):.5*u.Bounce.Out(2*_-1)+.5}}},f=typeof self>"u"&&typeof process<"u"&&process.hrtime?function(){var _=process.hrtime();return 1e3*_[0]+_[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?self.performance.now.bind(self.performance):Date.now!==void 0?Date.now:function(){return new Date().getTime()},h=function(){function _(){this._tweens={},this._tweensAddedDuringUpdate={}}return _.prototype.getAll=function(){var b=this;return Object.keys(this._tweens).map(function(E){return b._tweens[E]})},_.prototype.removeAll=function(){this._tweens={}},_.prototype.add=function(b){this._tweens[b.getId()]=b,this._tweensAddedDuringUpdate[b.getId()]=b},_.prototype.remove=function(b){delete this._tweens[b.getId()],delete this._tweensAddedDuringUpdate[b.getId()]},_.prototype.update=function(b,E){b===void 0&&(b=f()),E===void 0&&(E=!1);var P=Object.keys(this._tweens);if(P.length===0)return!1;for(;P.length>0;){this._tweensAddedDuringUpdate={};for(var U=0;U<P.length;U++){var y=this._tweens[P[U]],A=!E;y&&y.update(b,A)===!1&&!E&&delete this._tweens[P[U]]}P=Object.keys(this._tweensAddedDuringUpdate)}return!0},_}(),d={Linear:function(_,b){var E=_.length-1,P=E*b,U=Math.floor(P),y=d.Utils.Linear;return b<0?y(_[0],_[1],P):b>1?y(_[E],_[E-1],E-P):y(_[U],_[U+1>E?E:U+1],P-U)},Utils:{Linear:function(_,b,E){return(b-_)*E+_}}},p=function(){function _(){}return _.nextId=function(){return _._nextId++},_._nextId=0,_}(),v=new h,x=function(){function _(b,E){E===void 0&&(E=v),this._object=b,this._group=E,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=u.Linear.None,this._interpolationFunction=d.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=p.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return _.prototype.getId=function(){return this._id},_.prototype.isPlaying=function(){return this._isPlaying},_.prototype.isPaused=function(){return this._isPaused},_.prototype.to=function(b,E){return this._valuesEnd=Object.create(b),E!==void 0&&(this._duration=E),this},_.prototype.duration=function(b){return this._duration=b,this},_.prototype.start=function(b){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed)for(var E in this._reversed=!1,this._valuesStartRepeat)this._swapEndStartRepeatValues(E),this._valuesStart[E]=this._valuesStartRepeat[E];return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=b!==void 0?typeof b=="string"?f()+parseFloat(b):b:f(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},_.prototype._setupProperties=function(b,E,P,U){for(var y in P){var A=b[y],S=Array.isArray(A),I=S?"array":typeof A,k=!S&&Array.isArray(P[y]);if(I!=="undefined"&&I!=="function"){if(k){var ne=P[y];if(ne.length===0)continue;ne=ne.map(this._handleRelativeValue.bind(this,A)),P[y]=[A].concat(ne)}if(I!=="object"&&!S||!A||k)E[y]===void 0&&(E[y]=A),S||(E[y]*=1),U[y]=k?P[y].slice().reverse():E[y]||0;else{for(var ie in E[y]=S?[]:{},A)E[y][ie]=A[ie];U[y]=S?[]:{},this._setupProperties(A,E[y],P[y],U[y])}}}},_.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},_.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},_.prototype.pause=function(b){return b===void 0&&(b=f()),this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=b,this._group&&this._group.remove(this)),this},_.prototype.resume=function(b){return b===void 0&&(b=f()),this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=b-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this):this},_.prototype.stopChainedTweens=function(){for(var b=0,E=this._chainedTweens.length;b<E;b++)this._chainedTweens[b].stop();return this},_.prototype.group=function(b){return this._group=b,this},_.prototype.delay=function(b){return this._delayTime=b,this},_.prototype.repeat=function(b){return this._initialRepeat=b,this._repeat=b,this},_.prototype.repeatDelay=function(b){return this._repeatDelayTime=b,this},_.prototype.yoyo=function(b){return this._yoyo=b,this},_.prototype.easing=function(b){return this._easingFunction=b,this},_.prototype.interpolation=function(b){return this._interpolationFunction=b,this},_.prototype.chain=function(){for(var b=[],E=0;E<arguments.length;E++)b[E]=arguments[E];return this._chainedTweens=b,this},_.prototype.onStart=function(b){return this._onStartCallback=b,this},_.prototype.onUpdate=function(b){return this._onUpdateCallback=b,this},_.prototype.onRepeat=function(b){return this._onRepeatCallback=b,this},_.prototype.onComplete=function(b){return this._onCompleteCallback=b,this},_.prototype.onStop=function(b){return this._onStopCallback=b,this},_.prototype.update=function(b,E){if(b===void 0&&(b=f()),E===void 0&&(E=!0),this._isPaused)return!0;var P,U,y=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(b>y)return!1;E&&this.start(b)}if(this._goToEnd=!1,b<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),U=(b-this._startTime)/this._duration,U=this._duration===0||U>1?1:U;var A=this._easingFunction(U);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,A),this._onUpdateCallback&&this._onUpdateCallback(this._object,U),U===1){if(this._repeat>0){for(P in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat)this._yoyo||typeof this._valuesEnd[P]!="string"||(this._valuesStartRepeat[P]=this._valuesStartRepeat[P]+parseFloat(this._valuesEnd[P])),this._yoyo&&this._swapEndStartRepeatValues(P),this._valuesStart[P]=this._valuesStartRepeat[P];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=b+this._repeatDelayTime:this._startTime=b+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var S=0,I=this._chainedTweens.length;S<I;S++)this._chainedTweens[S].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},_.prototype._updateProperties=function(b,E,P,U){for(var y in P)if(E[y]!==void 0){var A=E[y]||0,S=P[y],I=Array.isArray(b[y]),k=Array.isArray(S);!I&&k?b[y]=this._interpolationFunction(S,U):typeof S=="object"&&S?this._updateProperties(b[y],A,S,U):typeof(S=this._handleRelativeValue(A,S))=="number"&&(b[y]=A+(S-A)*U)}},_.prototype._handleRelativeValue=function(b,E){return typeof E!="string"?E:E.charAt(0)==="+"||E.charAt(0)==="-"?b+parseFloat(E):parseFloat(E)},_.prototype._swapEndStartRepeatValues=function(b){var E=this._valuesStartRepeat[b],P=this._valuesEnd[b];this._valuesStartRepeat[b]=typeof P=="string"?this._valuesStartRepeat[b]+parseFloat(P):this._valuesEnd[b],this._valuesEnd[b]=E},_}(),g=(p.nextId,v),m=(g.getAll.bind(g),g.removeAll.bind(g),g.add.bind(g),g.remove.bind(g),g.update.bind(g));function M(_,b){return 2*Math.tan(a.MathUtils.degToRad(b.fov)/2)*_}function w(_,b){return M(_,b)*b.aspect}function C(_,b){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,P=_>=b,U=P?_:b,y=P?b:_,A=Math.abs(Math.sin(E)),S=Math.abs(Math.cos(E));if(y<=2*A*S*U||Math.abs(A-S)<1e-10){var I=.5*y;return{width:P?I/A:I/S,height:P?I/S:I/A}}var k=S*S-A*A;return{width:(_*S-b*A)/k,height:(b*S-_*A)/k}}function F(_,b,E){var P=_.geometry.parameters,U=C(P.width,P.height,E),y=U.width,A=U.height,S=2*Math.tan(a.MathUtils.degToRad(b.fov)/2),I=y/(S*b.aspect),k=A/S;return Math.min(I,k)+_.position.z}function T(_,b,E){return Math.max(Math.min(_,E),b)}var B=function(){function _(b,E,P){n(this,_),s(this,"_plane",void 0),s(this,"camera",void 0),s(this,"_position",new a.Vector4(0,0,1,0)),s(this,"_positionOffset",new a.Vector4(0,0,0,0)),s(this,"_positionWithOffset",this._position.clone()),s(this,"_positionTransition",new x({x:0,y:0,z:0})),s(this,"_rotationTransition",new x({zr:0})),s(this,"_swayOffset",new a.Vector4(0,0,0,0)),s(this,"_swayTransition",new x({offsetX:0,offsetY:0,offsetZ:0,offsetZR:0})),this._plane=b,this.camera=new a.PerspectiveCamera(35,E/P,.001)}return r(_,[{key:"position",get:function(){var b=this._position;return{x:b.x,y:b.y,z:b.z,zr:b.w}}},{key:"positionOffset",get:function(){var b=this._positionOffset;return{x:b.x,y:b.y,z:b.z,zr:b.w}}},{key:"isMoving",value:function(){return this._positionTransition.isPlaying()}},{key:"isRotating",value:function(){return this._rotationTransition.isPlaying()}},{key:"isSwaying",value:function(){return this._swayTransition.isPlaying()}},{key:"setSize",value:function(b,E){this.camera.aspect=b/E,this.camera.updateProjectionMatrix()}},{key:"offset",value:function(b){var E=b.x,P=E===void 0?0:E,U=b.y,y=U===void 0?0:U,A=b.z,S=A===void 0?0:A,I=b.zr,k=I===void 0?0:I;this._positionOffset.set(P,y,S,k)}},{key:"sway",value:function(b){var E=this,P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof b!="boolean"){this._swayTransition.stop();var U=P.loop,y=U!==void 0&&U,A=P.duration,S=A===void 0?0:A,I=P.delay,k=I===void 0?0:I,ne=P.easing,ie=ne===void 0?u.Linear.None:ne,re=P.onInit,he=re===void 0?function(){return{}}:re,Le=P.onStart,we=Le===void 0?function(){return{}}:Le,Te=P.onUpdate,fe=Te===void 0?function(){return{}}:Te,qe=P.onComplete,Ne=qe===void 0?function(){return{}}:qe,Ye=P.onStop,Fe=Ye===void 0?function(){return{}}:Ye,je=b.x,Ze=je===void 0?0:je,Ge=b.y,Ke=Ge===void 0?0:Ge,Je=b.z,st=Je===void 0?0:Je,Xe=b.zr,$e=Xe===void 0?0:Xe,at=a.MathUtils.degToRad($e),Qe=T(this._position.x+this._positionOffset.x,0,1),qt=Math.max(0,Qe-Ze),pt=Math.min(1,Qe+Ze),Gt=pt-qt,Ht=qt+Gt*Math.random()-Qe,Xt=T(this._position.y+this._positionOffset.y,0,1),Yt=Math.max(0,Xt-Ke),_n=Math.min(1,Xt+Ke),ht=_n-Yt,bn=Yt+ht*Math.random()-Xt,Vt=T(this._position.z+this._positionOffset.z,0,1),Ts=Math.max(0,Vt-st),Ui=Math.min(1,Vt+st),Es=Ui-Ts,jo=Ts+Es*Math.random()-Vt;he(),this._swayTransition=new x({offsetX:this._swayOffset.x,offsetY:this._swayOffset.y,offsetZ:this._swayOffset.z,offsetZR:this._swayOffset.w}).to({offsetX:Ht,offsetY:bn,offsetZ:jo,offsetZR:-at+Math.random()*at*2},1e3*S).easing(ie).onStart(we).onUpdate(function(ti){var $o=ti.offsetX,As=ti.offsetY,Qo=ti.offsetZ,Ls=ti.offsetZR;E._swayOffset.set($o,As,Qo,Ls),fe()}).onComplete(function(){y&&E.sway(b,P),Ne()}).onStop(Fe).delay(1e3*k).start()}else b||this._swayTransition.stop()}},{key:"rotate",value:function(b){var E=this,P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof b!="boolean"){this._rotationTransition.stop();var U=P.duration,y=U===void 0?0:U,A=P.delay,S=A===void 0?0:A,I=P.easing,k=I===void 0?u.Linear.None:I,ne=P.onInit,ie=ne===void 0?function(){return{}}:ne,re=P.onStart,he=re===void 0?function(){return{}}:re,Le=P.onUpdate,we=Le===void 0?function(){return{}}:Le,Te=P.onComplete,fe=Te===void 0?function(){return{}}:Te,qe=P.onStop,Ne=qe===void 0?function(){return{}}:qe,Ye=a.MathUtils.degToRad(b);ie(),y>0||S>0?this._rotationTransition=new x({zr:this._position.w}).to({zr:Ye},1e3*y).easing(k).onStart(he).onUpdate(function(Fe){var je=Fe.zr;E._position.set(E._position.x,E._position.y,E._position.z,je),we()}).onComplete(fe).onStop(Ne).delay(1e3*S).start():this._position.set(this._position.x,this._position.y,this._position.z,Ye)}else b||this._rotationTransition.stop()}},{key:"move",value:function(b){var E=this,P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof b!="boolean"){this._positionTransition.stop();var U=this._position,y=U.x,A=U.y,S=U.z,I=b.x,k=I===void 0?y:I,ne=b.y,ie=ne===void 0?A:ne,re=b.z,he=re===void 0?S:re,Le=P.duration,we=Le===void 0?0:Le,Te=P.delay,fe=Te===void 0?0:Te,qe=P.easing,Ne=qe===void 0?u.Linear.None:qe,Ye=P.onInit,Fe=Ye===void 0?function(){return{}}:Ye,je=P.onStart,Ze=je===void 0?function(){return{}}:je,Ge=P.onUpdate,Ke=Ge===void 0?function(){return{}}:Ge,Je=P.onComplete,st=Je===void 0?function(){return{}}:Je,Xe=P.onStop,$e=Xe===void 0?function(){return{}}:Xe;Fe(),we>0||fe>0?this._positionTransition=new x({x:y,y:A,z:S}).to({x:k,y:ie,z:he},1e3*we).easing(Ne).onStart(Ze).onUpdate(function(at){var Qe=at.x,qt=at.y,pt=at.z;E._position.set(Qe,qt,pt,E._position.w),Ke()}).onComplete(st).onStop($e).delay(1e3*fe).start():this._position.set(k,ie,he,this._position.w)}else b||this._positionTransition.stop()}},{key:"update",value:function(){var b=this._positionWithOffset.z/F(this._plane,this.camera,this.camera.rotation.z);this._positionWithOffset.set(T(this._position.x+this._positionOffset.x+this._swayOffset.x*b,0,1),T(this._position.y+this._positionOffset.y+this._swayOffset.y*b,0,1),T(.9*(this._position.z+this._positionOffset.z+this._swayOffset.z)+(1-.9),0,1),this._position.w+a.MathUtils.degToRad(this._positionOffset.w)+this._swayOffset.w);var E=function(A,S,I){var k=I.x,ne=I.y,ie=I.z,re=I.w,he=function(fe,qe,Ne,Ye){var Fe=fe.geometry.parameters,je=C(Fe.width,Fe.height,Ye),Ze=je.width,Ge=je.height,Ke=function(Je,st,Xe,$e){var at=Xe*F(Je,st,$e);return{width:w(at,st),height:M(at,st)}}(fe,qe,Ne,Ye);return{width:Ze-Ke.width,height:Ge-Ke.height}}(A,S,ie,re),Le=-he.width/2+k*he.width,we=he.height/2-ne*he.height,Te=F(A,S,re)*ie;return new a.Vector4(Le*Math.cos(re)-we*Math.sin(re),Le*Math.sin(re)+we*Math.cos(re),Te,re)}(this._plane,this.camera,this._positionWithOffset),P=E.x,U=E.y,y=E.z;this.camera.position.set(P,U,y),this.camera.rotation.z=this._position.w+a.MathUtils.degToRad(this._positionOffset.w)+this._swayOffset.w}},{key:"dispose",value:function(){this.sway(!1),this.move(!1),this.rotate(!1)}}]),_}();function G(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function O(_){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},O(_)}function z(_,b){for(;!Object.prototype.hasOwnProperty.call(_,b)&&(_=O(_))!==null;);return _}function $(){return $=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(_,b,E){var P=z(_,b);if(P){var U=Object.getOwnPropertyDescriptor(P,b);return U.get?U.get.call(arguments.length<3?_:E):U.value}},$.apply(this,arguments)}function V(_,b){return V=Object.setPrototypeOf||function(E,P){return E.__proto__=P,E},V(_,b)}function H(_,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(b&&b.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),b&&V(_,b)}function Y(_){return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},Y(_)}function W(_,b){if(b&&(Y(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G(_)}function Z(_,b){(b==null||b>_.length)&&(b=_.length);for(var E=0,P=new Array(b);E<b;E++)P[E]=_[E];return P}const oe=O_,Se=N_,Ce=H_;var ve=Object.freeze({HORIZONTAL:[1,0],VERTICAL:[0,1]}),Oe={uniforms:{tDiffuse:{value:null},radius:{value:1},resolution:{value:0},direction:{value:[0,0]}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }

  `,fragmentShader:`

    uniform sampler2D tDiffuse;
    uniform float radius;
    uniform float resolution;
    uniform vec2 direction;
    varying vec2 vUv;

    void main() {
      float blur = radius / resolution;
      float h = direction.x;
      float v = direction.y;

      vec4 sum = vec4(0.0);

      // optimized 33-tap filter that takes advantage of bilinear filtering (effectively 17 fetches)
      sum += texture2D(tDiffuse, vec2(vUv.x - 15.0810810809 * blur * h, vUv.y - 15.0810810809 * blur * v)) * 1.13068382e-7;
      sum += texture2D(tDiffuse, vec2(vUv.x - 13.1351352551 * blur * h, vUv.y - 13.1351352551 * blur * v)) * 0.00000634313;
      sum += texture2D(tDiffuse, vec2(vUv.x - 11.1891891693 * blur * h, vUv.y - 11.1891891693 * blur * v)) * 0.00014981883;
      sum += texture2D(tDiffuse, vec2(vUv.x - 9.2432432422 * blur * h, vUv.y - 9.2432432422 * blur * v)) * 0.00181031093;
      sum += texture2D(tDiffuse, vec2(vUv.x - 7.29729729717 * blur * h, vUv.y - 7.29729729717 * blur * v)) * 0.01244177332;
      sum += texture2D(tDiffuse, vec2(vUv.x - 5.35135135135 * blur * h, vUv.y - 5.35135135135 * blur * v)) * 0.0518407222;
      sum += texture2D(tDiffuse, vec2(vUv.x - 3.40540540538 * blur * h, vUv.y - 3.40540540538 * blur * v)) * 0.13626704123;
      sum += texture2D(tDiffuse, vec2(vUv.x - 1.45945945945 * blur * h, vUv.y - 1.45945945945 * blur * v)) * 0.23145357738;

      sum += texture2D(tDiffuse, vUv) * 0.13206059971;

      sum += texture2D(tDiffuse, vec2(vUv.x + 1.45945945945 * blur * h, vUv.y + 1.45945945945 * blur * v)) * 0.23145357738;
      sum += texture2D(tDiffuse, vec2(vUv.x + 3.40540540538 * blur * h, vUv.y + 3.40540540538 * blur * v)) * 0.13626704123;
      sum += texture2D(tDiffuse, vec2(vUv.x + 5.35135135135 * blur * h, vUv.y + 5.35135135135 * blur * v)) * 0.0518407222;
      sum += texture2D(tDiffuse, vec2(vUv.x + 7.29729729717 * blur * h, vUv.y + 7.29729729717 * blur * v)) * 0.01244177332;
      sum += texture2D(tDiffuse, vec2(vUv.x + 9.2432432422 * blur * h, vUv.y + 9.2432432422 * blur * v)) * 0.00181031093;
      sum += texture2D(tDiffuse, vec2(vUv.x + 11.1891891693 * blur * h, vUv.y + 11.1891891693 * blur * v)) * 0.00014981883;
      sum += texture2D(tDiffuse, vec2(vUv.x + 13.1351352551 * blur * h, vUv.y + 13.1351352551 * blur * v)) * 0.00000634313;
      sum += texture2D(tDiffuse, vec2(vUv.x + 15.0810810809 * blur * h, vUv.y + 15.0810810809 * blur * v)) * 1.13068382e-7;

      gl_FragColor = sum;
    }
  `};const Q=q_,ae=Z_;var Ee={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},size:{value:1}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }

  `,fragmentShader:`

    uniform sampler2D tDiffuse1;
    uniform sampler2D tDiffuse2;
    uniform float size;
    varying vec2 vUv;

    void main() {
      vec2 uv = (vUv - vec2(0.5));
      float mixRatio = smoothstep(0.0, 1.0, min(dot(uv, uv) * size, 1.0));
      gl_FragColor = mix(texture2D(tDiffuse1, vUv), texture2D(tDiffuse2, vUv), mixRatio);
    }

  `},q={uniforms:{tDiffuse:{value:null},tDepth:{value:null},clipToWorldMatrix:{value:new a.Matrix4},prevWorldToClipMatrix:{value:new a.Matrix4},intensity:{value:1},samples:{value:32}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }

  `,fragmentShader:`

    const int MAX_SAMPLES = 128;

    uniform sampler2D tDiffuse;
    uniform sampler2D tDepth;
    uniform mat4 clipToWorldMatrix;
    uniform mat4 prevWorldToClipMatrix;
    uniform float intensity;
    uniform int samples;
    varying vec2 vUv;

    void main() {
      float zOverW = texture2D(tDepth, vUv).x;
      vec4 clipPosition = vec4(vUv.x, vUv.y, zOverW, 1.0);
      vec4 worldPosition = clipToWorldMatrix * clipPosition;
      worldPosition /= worldPosition.w;

      vec4 prevClipPosition = prevWorldToClipMatrix * worldPosition;
      prevClipPosition /= prevClipPosition.w;
      vec2 velocity = ((clipPosition - prevClipPosition).xy + (clipPosition - prevClipPosition).zz) * intensity;

      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 texelCoord = vUv;
      for (int i = 1; i < MAX_SAMPLES; ++i) {
        if (i >= samples) {
          // hack to allow loop comparisons against uniforms
          break;
        }
        // this offset calculation centers the blur which avoids unevenness favoring the direction of the velocity
        vec2 offset = velocity * (float(i) / float(samples - 1) - 0.5);
        texel += texture2D(tDiffuse, vUv + offset);
      }

      gl_FragColor = texel / max(1.0, float(samples));
    }

  `},De={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},resolution:{value:null},amount:{value:0},seed:{value:1}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }

  `,fragmentShader:`

    `.concat(`

//
// Description : Array and textureless GLSL 2D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                    -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

`,`

    uniform sampler2D tDiffuse1;
    uniform sampler2D tDiffuse2;
    uniform float amount;
    uniform float seed;
    uniform vec2 resolution;
    varying vec2 vUv;

    vec2 tile(vec2 position, vec2 resolution, float size, float scale) {
      vec2 tileSize = vec2(size / resolution.x * scale, size / resolution.y);
      return tileSize * floor(position / tileSize);
    }

    float glitchNoise(vec2 position, vec2 resolution, float amount, float seed) {
      // the amount affects the seeds used for noise and the multipliers for each type of glitch
      float noise = 0.0;

      // large rectangular glitch blocks
      noise += max(snoise(tile(position, resolution, 488.0, 15.0) * (1.0 + amount * seed * 8.0)) * amount - 0.5, 0.0);

      // medium square glitch blocks
      noise += max(snoise(tile(position, resolution, 100.0, 1.0) * (4.0 + amount * seed * 2.0)) * amount - 0.3, 0.0);

      // medium rectangular glitch blocks
      noise += max(snoise(tile(position, resolution, 120.0, 8.0) * (4.0 + amount * seed * 4.0)) * amount - 0.2, 0.0);
      noise += max(snoise(tile(position, resolution, 125.0, 8.0) * (4.0 + amount * seed * 4.0)) * amount - 0.2, 0.0);

      // small rectangular glitch blocks
      noise += max(snoise(tile(position, resolution, 29.0, 16.0) * (4.0 + amount * seed * 2.0)) * amount - 0.2, 0.0);

      // small square glitch blocks
      noise += max(snoise(tile(position, resolution, 29.0, 1.0) * (8.0 + amount * seed * 2.0)) * amount - 0.7, 0.0);

      if (noise >= 0.6) {
        // thin glitch lines - fill existing glitch blocks
        noise += max(snoise(tile(position, resolution, 1.1, 1000.0) * 1000.0) * amount, 0.0);
      } else if (noise <= 0.0) {
        // thin glitch lines - fill remaining empty space
        float lineNoise = max(snoise(tile(position, resolution, 1.1, 500.0) * (500.0 + amount * seed * 100.0)) * amount, 0.0);
        lineNoise += min(snoise(tile(position, resolution, 100.0, 3.0) * (4.0 + amount * seed * 2.0)) * amount, 0.0);
        noise += max(lineNoise, 0.0);
      }

      // coerce to max glitch amount
      float glitchCoerceThreshold = 0.9;
      if (amount >= glitchCoerceThreshold) {
        float percent = (amount - glitchCoerceThreshold) / (1.0 - glitchCoerceThreshold);
        return noise + (1.0 * percent);
      }

      return noise;
    }

    vec4 rgbShift(sampler2D tex, vec2 position, vec3 offset) {
      vec4 r = texture2D(tex, position + vec2(offset.r, 0.0));
      vec4 g = texture2D(tex, position + vec2(offset.g, 0.0));
      vec4 b = texture2D(tex, position + vec2(offset.b, 0.0));
      return vec4(r.r, g.g, b.b, 1.0);
    }

    void main() {
      float glitch = glitchNoise(vUv, resolution, amount, seed);

      vec3 rgbShiftOffset = vec3(0.01, 0.0, -0.01);
      vec4 texel1 = texture2D(tDiffuse1, vUv);
      vec4 shiftedTexel1 = rgbShift(tDiffuse1, vUv, rgbShiftOffset);
      vec4 texel2 = texture2D(tDiffuse2, vUv);
      vec4 shiftedTexel2 = rgbShift(tDiffuse2, vUv, rgbShiftOffset);

      vec4 color = texel1;
      if (glitch >= 0.95) {
        // no glitching
        color = texel2;
      } else if (glitch >= 0.7) {
        // color-shifted new texture
        color = shiftedTexel2;
      } else if (glitch >= 0.6) {
        // color-shifted original texture
        color = shiftedTexel1;
      } else if (glitch >= 0.5) {
        // magenta glitch blocks
        color = texel1 * vec4(1.2, 0.0, 1.2, 0.5);
      } else if (glitch >= 0.4) {
        // cyan glitch blocks
        color = texel1 * vec4(0.0, 1.2, 1.2, 0.5);
      } else if (glitch >= 0.38) {
        // bright color-shifted new texture
        color = shiftedTexel2 * 1.5;
      } else if (glitch >= 0.2) {
        // color-shifted original texture
        color = shiftedTexel1;
      }

      gl_FragColor = color;
    }

  `)};function Be(_){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(var E in b){if(_.uniforms[E]===void 0)throw new Error('Uniform "'.concat(E,'" does not exist on shader "').concat(_.name,'"'));_.uniforms[E].value=b[E]}}var se,_e={getUniforms:function(_){var b={};for(var E in _.uniforms)b[E]=_.uniforms[E].value;return b},updateUniforms:Be,clearUniforms:function(_){_.uniforms=a.UniformsUtils.clone(_.uniforms)},createShaderMaterial:function(_){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=new a.ShaderMaterial({uniforms:a.UniformsUtils.clone(_.uniforms),vertexShader:_.vertexShader,fragmentShader:_.fragmentShader});return Be(E,b),E}},ke=["opacity"],J=["size"];function te(_){var b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var E,P=O(_);if(b){var U=O(this).constructor;E=Reflect.construct(P,arguments,U)}else E=P.apply(this,arguments);return W(this,E)}}function le(_,b){var E=Object.keys(_);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(_);b&&(P=P.filter(function(U){return Object.getOwnPropertyDescriptor(_,U).enumerable})),E.push.apply(E,P)}return E}function de(_){for(var b=1;b<arguments.length;b++){var E=arguments[b]!=null?arguments[b]:{};b%2?le(Object(E),!0).forEach(function(P){s(_,P,E[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(E)):le(Object(E)).forEach(function(P){Object.defineProperty(_,P,Object.getOwnPropertyDescriptor(E,P))})}return _}(function(_){_.Blur="Blur",_.Bloom="Bloom",_.RgbShift="RgbShift",_.Vignette="Vignette",_.VignetteBlur="VignetteBlur",_.MotionBlur="MotionBlur",_.Glitch="Glitch"})(se||(se={}));var ce=function(){function _(b){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n(this,_),s(this,"_quad",new oe.FullScreenQuad),this._quad.material=_e.createShaderMaterial(b,E)}return r(_,[{key:"getUniforms",value:function(){return _e.getUniforms(this._quad.material)}},{key:"updateUniforms",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_e.updateUniforms(this._quad.material,b)}},{key:"clearUniforms",value:function(){_e.clearUniforms(this._quad.material)}},{key:"render",value:function(b,E,P){var U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};b.setRenderTarget(E),this.updateUniforms(de(de({},U),{},{tDiffuse:P.texture})),this._quad.render(b)}},{key:"dispose",value:function(){this._quad.material.dispose()}}]),_}(),D=function(_){H(E,_);var b=te(E);function E(){return n(this,E),b.apply(this,arguments)}return r(E,[{key:"render",value:function(P,U,y,A){var S=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{};P.setRenderTarget(U),this.updateUniforms(de(de({},S),{},{tDiffuse1:y.texture,tDiffuse2:A.texture})),this._quad.render(P)}}]),E}(ce),R=function(_){H(E,_);var b=te(E);function E(P,U){var y,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return n(this,E),s(G(y=b.call(this,q,A)),"camera",void 0),s(G(y),"depthTexture",void 0),y.camera=P,y.depthTexture=U,y}return r(E,[{key:"render",value:function(P,U,y){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},S=this.getUniforms(),I=S.clipToWorldMatrix,k=S.prevWorldToClipMatrix;$(O(E.prototype),"render",this).call(this,P,U,y,de(de({},A),{},{tDepth:this.depthTexture,clipToWorldMatrix:I.copy(this.camera.projectionMatrixInverse).multiply(this.camera.matrixWorld)})),k.copy(this.camera.matrixWorldInverse).multiply(this.camera.projectionMatrix)}}]),E}(ce),X=function(_){H(E,_);var b=te(E);function E(P,U){var y,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return n(this,E),s(G(y=b.call(this,Oe,A)),"_width",void 0),s(G(y),"_height",void 0),s(G(y),"_buffer",void 0),s(G(y),"passes",1),y._width=P,y._height=U,y._buffer=new a.WebGLRenderTarget(P,U),y}return r(E,[{key:"setSize",value:function(P,U){this._width=P,this._height=U,this._buffer.setSize(P,U)}},{key:"render",value:function(P,U,y){for(var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},S=0;S<this.passes;++S)$(O(E.prototype),"render",this).call(this,P,this._buffer,S===0?y:U,de(de({},A),{},{direction:ve.HORIZONTAL,resolution:this._width})),$(O(E.prototype),"render",this).call(this,P,U,this._buffer,de(de({},A),{},{direction:ve.VERTICAL,resolution:this._height}))}},{key:"dispose",value:function(){this._buffer.dispose(),$(O(E.prototype),"dispose",this).call(this)}}]),E}(ce),K=function(){function _(b,E){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};n(this,_),s(this,"_blurEffect",void 0),s(this,"_blendEffect",void 0),s(this,"_blendBuffer",void 0),this._blurEffect=new X(b,E),this._blendEffect=new D(Ce.BlendShader,{mixRatio:.5}),this._blendBuffer=new a.WebGLRenderTarget(b,E),this.updateUniforms(P)}return r(_,[{key:"passes",get:function(){return this._blurEffect.passes},set:function(b){this._blurEffect.passes=b}},{key:"setSize",value:function(b,E){this._blurEffect.setSize(b,E),this._blendBuffer.setSize(b,E)}},{key:"getUniforms",value:function(){var b=this._blendEffect.getUniforms().opacity;return de(de({},this._blurEffect.getUniforms()),{},{opacity:b})}},{key:"updateUniforms",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=this._blendEffect.getUniforms(),P=b.opacity,U=P===void 0?E.opacity:P,y=t(b,ke);this._blurEffect.updateUniforms(y),this._blendEffect.updateUniforms({opacity:U})}},{key:"clearUniforms",value:function(){this._blurEffect.clearUniforms(),this._blendEffect.clearUniforms(),this._blendEffect.updateUniforms({mixRatio:.5})}},{key:"render",value:function(b,E,P){var U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};this._blurEffect.render(b,this._blendBuffer,P,U),this._blendEffect.render(b,E,P,this._blendBuffer)}},{key:"dispose",value:function(){this._blendEffect.dispose(),this._blendBuffer.dispose()}}]),_}(),pe=function(_){H(E,_);var b=te(E);function E(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(this,E),b.call(this,Q.RGBShiftShader,P)}return r(E)}(ce),be=function(_){H(E,_);var b=te(E);function E(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(this,E),b.call(this,ae.VignetteShader,P)}return r(E)}(ce),ze=function(){function _(b,E){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};n(this,_),s(this,"_blurEffect",void 0),s(this,"_blendEffect",void 0),s(this,"_blendBuffer",void 0),this._blurEffect=new X(b,E),this._blendEffect=new D(Ee),this._blendBuffer=new a.WebGLRenderTarget(b,E),this.updateUniforms(P)}return r(_,[{key:"passes",get:function(){return this._blurEffect.passes},set:function(b){this._blurEffect.passes=b}},{key:"setSize",value:function(b,E){this._blurEffect.setSize(b,E),this._blendBuffer.setSize(b,E)}},{key:"getUniforms",value:function(){var b=this._blendEffect.getUniforms().size;return de(de({},this._blurEffect.getUniforms()),{},{size:b})}},{key:"updateUniforms",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=this._blendEffect.getUniforms(),P=b.size,U=P===void 0?E.size:P,y=t(b,J);this._blurEffect.updateUniforms(y),this._blendEffect.updateUniforms({size:U})}},{key:"clearUniforms",value:function(){this._blurEffect.clearUniforms(),this._blendEffect.clearUniforms()}},{key:"render",value:function(b,E,P){var U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};this._blurEffect.render(b,this._blendBuffer,P,U),this._blendEffect.render(b,E,P,this._blendBuffer)}},{key:"dispose",value:function(){this._blurEffect.dispose(),this._blendEffect.dispose(),this._blendBuffer.dispose()}}]),_}(),Pe=function(){function _(b,E){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};n(this,_),s(this,"_resolution",void 0),s(this,"_glitchEffect",void 0),s(this,"_blurEffect",void 0),s(this,"_blurBuffer",void 0),this._resolution=new a.Vector2(b,E),this._glitchEffect=new D(De),this._blurEffect=new X(b,E,{radius:3}),this._blurEffect.passes=2,this._blurBuffer=new a.WebGLRenderTarget(b,E),this.updateUniforms(P)}return r(_,[{key:"setSize",value:function(b,E){this._resolution.set(b,E),this._blurEffect.setSize(b,E),this._blurBuffer.setSize(b,E)}},{key:"getUniforms",value:function(){return this._glitchEffect.getUniforms()}},{key:"updateUniforms",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._glitchEffect.updateUniforms(b)}},{key:"clearUniforms",value:function(){this._glitchEffect.clearUniforms()}},{key:"render",value:function(b,E,P){var U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};this._blurEffect.render(b,this._blurBuffer,P),this._glitchEffect.render(b,E,P,this._blurBuffer,de(de({},U),{},{resolution:this._resolution}))}},{key:"dispose",value:function(){this._glitchEffect.dispose(),this._blurEffect.dispose(),this._blurBuffer.dispose()}}]),_}(),Ue=function(_){H(U,_);var b,E,P=(b=U,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,A=O(b);if(E){var S=O(this).constructor;y=Reflect.construct(A,arguments,S)}else y=A.apply(this,arguments);return W(this,y)});function U(y,A){var S;return n(this,U),s(G(S=P.call(this)),"_width",void 0),s(G(S),"_height",void 0),s(G(S),"_readBuffer",void 0),s(G(S),"_writeBuffer",void 0),s(G(S),"_copyShader",new ce(Se.CopyShader)),s(G(S),"_effects",{}),S._width=y,S._height=A,S._readBuffer=new a.WebGLRenderTarget(y,A),S._writeBuffer=new a.WebGLRenderTarget(y,A),S.enabled=!1,S}return r(U,[{key:"setSize",value:function(y,A){this._width=y,this._height=A,this._readBuffer.setSize(y,A),this._writeBuffer.setSize(y,A);for(var S=0,I=Object.values(this._effects);S<I.length;S++){var k=I[S];k.setSize&&k.setSize(y,A)}}},{key:"getConfigs",value:function(){for(var y={},A=0,S=Object.entries(this._effects);A<S.length;A++){var I=(st=S[A],Xe=2,function($e){if(Array.isArray($e))return $e}(st)||function($e,at){var Qe=$e==null?null:typeof Symbol<"u"&&$e[Symbol.iterator]||$e["@@iterator"];if(Qe!=null){var qt,pt,Gt=[],Ht=!0,Xt=!1;try{for(Qe=Qe.call($e);!(Ht=(qt=Qe.next()).done)&&(Gt.push(qt.value),!at||Gt.length!==at);Ht=!0);}catch(Yt){Xt=!0,pt=Yt}finally{try{Ht||Qe.return==null||Qe.return()}finally{if(Xt)throw pt}}return Gt}}(st,Xe)||function($e,at){if($e){if(typeof $e=="string")return Z($e,at);var Qe=Object.prototype.toString.call($e).slice(8,-1);return Qe==="Object"&&$e.constructor&&(Qe=$e.constructor.name),Qe==="Map"||Qe==="Set"?Array.from($e):Qe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Qe)?Z($e,at):void 0}}(st,Xe)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),k=I[0],ne=I[1];switch(k){case se.Blur:var ie=ne.getUniforms().radius;y[k]={radius:ie,passes:ne.passes};break;case se.Bloom:var re=ne.getUniforms(),he=re.opacity,Le=re.radius;y[k]={opacity:he,radius:Le,passes:ne.passes};break;case se.RgbShift:var we=ne.getUniforms(),Te=we.amount,fe=we.angle;y[k]={amount:Te,angle:a.MathUtils.radToDeg(fe)};break;case se.Vignette:var qe=ne.getUniforms(),Ne=qe.offset,Ye=qe.darkness;y[k]={offset:Ne,darkness:Ye};break;case se.VignetteBlur:var Fe=ne.getUniforms(),je=Fe.size,Ze=Fe.radius;y[k]={size:je,radius:Ze,passes:ne.passes};break;case se.Glitch:var Ge=ne.getUniforms(),Ke=Ge.amount,Je=Ge.seed;y[k]={amount:Ke,seed:Je}}}var st,Xe;return y}},{key:"hasEffect",value:function(y){return this._effects.hasOwnProperty(y)}},{key:"hasEffects",value:function(){return Object.getOwnPropertyNames(this._effects).length!==0}},{key:"_getEffect",value:function(y){if(!(y in this._effects))switch(y){case se.Blur:this._effects[y]=new X(this._width,this._height);break;case se.Bloom:this._effects[y]=new K(this._width,this._height);break;case se.RgbShift:this._effects[y]=new pe;break;case se.Vignette:this._effects[y]=new be;break;case se.VignetteBlur:this._effects[y]=new ze(this._width,this._height);break;case se.Glitch:this._effects[y]=new Pe(this._width,this._height)}return this._effects[y]}},{key:"set",value:function(y){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},S=this._getEffect(y);switch(this.enabled=!0,y){case se.Blur:var I=A,k=I.radius,ne=k===void 0?1:k,ie=I.passes,re=ie===void 0?S.passes:ie;S.passes=re,S.updateUniforms({radius:ne});break;case se.Bloom:var he=A,Le=he.opacity,we=Le===void 0?1:Le,Te=he.radius,fe=Te===void 0?1:Te,qe=he.passes,Ne=qe===void 0?S.passes:qe;S.passes=Ne,S.updateUniforms({opacity:we,radius:fe});break;case se.RgbShift:var Ye=A,Fe=Ye.amount,je=Fe===void 0?.005:Fe,Ze=Ye.angle,Ge=Ze===void 0?0:Ze;S.updateUniforms({amount:je,angle:a.MathUtils.degToRad(Ge)});break;case se.Vignette:var Ke=A,Je=Ke.offset,st=Je===void 0?1:Je,Xe=Ke.darkness,$e=Xe===void 0?1:Xe;S.updateUniforms({offset:st,darkness:$e});break;case se.VignetteBlur:var at=A,Qe=at.size,qt=Qe===void 0?1:Qe,pt=at.radius,Gt=pt===void 0?1:pt,Ht=at.passes,Xt=Ht===void 0?S.passes:Ht;S.passes=Xt,S.updateUniforms({radius:Gt,size:qt});break;case se.Glitch:var Yt=A,_n=Yt.amount,ht=_n===void 0?1:_n,bn=Yt.seed,Vt=bn===void 0?Math.random():bn;S.updateUniforms({amount:ht,seed:Vt})}}},{key:"remove",value:function(y){return y in this._effects&&(this._effects[y].dispose(),delete this._effects[y],this.enabled=this.hasEffects(),!0)}},{key:"removeAll",value:function(){for(var y in this._effects)this._effects[y].dispose(),delete this._effects[y];this.enabled=!1}},{key:"_swapBuffers",value:function(){var y=this._readBuffer;this._readBuffer=this._writeBuffer,this._writeBuffer=y}},{key:"render",value:function(y,A,S){this._copyShader.render(y,this._readBuffer,S);for(var I=0,k=Object.values(this._effects);I<k.length;I++)k[I].render(y,this._writeBuffer,this._readBuffer),this._swapBuffers();this._copyShader.render(y,this.renderToScreen?null:A,this._readBuffer)}},{key:"dispose",value:function(){this._copyShader.dispose(),this._readBuffer.dispose(),this._readBuffer.texture.dispose(),this._writeBuffer.dispose(),this._writeBuffer.texture.dispose(),Object.values(this._effects).forEach(function(y){return y.dispose()})}}]),U}(oe.Pass),Ae=function(_){H(U,_);var b,E,P=(b=U,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,A=O(b);if(E){var S=O(this).constructor;y=Reflect.construct(A,arguments,S)}else y=A.apply(this,arguments);return W(this,y)});function U(y,A,S,I){var k;return n(this,U),s(G(k=P.call(this,y,A)),"_camera",void 0),s(G(k),"_depthTexture",void 0),k._camera=S,k._depthTexture=I,k}return r(U,[{key:"getConfigs",value:function(){var y=$(O(U.prototype),"getConfigs",this).call(this),A=this._effects[se.MotionBlur];if(A){var S=A.getUniforms(),I=S.intensity,k=S.samples;y[se.MotionBlur]={intensity:I,samples:k}}return y}},{key:"_getEffect",value:function(y){return y!==se.MotionBlur||y in this._effects?$(O(U.prototype),"_getEffect",this).call(this,y):(this._effects[se.MotionBlur]=new R(this._camera,this._depthTexture),this._effects[se.MotionBlur])}},{key:"set",value:function(y){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(y===se.MotionBlur){this.enabled=!0;var S=this._getEffect(se.MotionBlur),I=A,k=I.intensity,ne=k===void 0?1:k,ie=I.samples,re=ie===void 0?32:ie;S.updateUniforms({intensity:ne,samples:re})}else $(O(U.prototype),"set",this).call(this,y,A)}}]),U}(Ue),N={uniforms:{},vertexShader:`

    attribute float size;

    // a value from 0 to 1 indicating the size of the blend gradient
    attribute float gradient;
    varying float v_gradient;

    // a value from 0 to 1 indicating the opacity of the particle
    attribute float opacity;
    varying float v_opacity;

    // the color of the particle
    attribute vec3 color;
    varying vec3 v_color;

    void main() {
      v_gradient = gradient;
      v_opacity = opacity;
      v_color = color;
      
      gl_PointSize = size;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }

  `,fragmentShader:`

    varying float v_diameter;
    varying float v_gradient;
    varying float v_opacity;
    varying vec3 v_color;

    void main() {
      float radius = 0.5;
      float distanceFromCenter = distance(gl_PointCoord, vec2(0.5, 0.5));
      if (distanceFromCenter > radius) {
        discard;
      }
      gl_FragColor = vec4(v_color, min((radius - distanceFromCenter) / smoothstep(0.0, 1.0, v_gradient * radius), 1.0) * v_opacity);
    }

  `};function me(_,b){(b==null||b>_.length)&&(b=_.length);for(var E=0,P=new Array(b);E<b;E++)P[E]=_[E];return P}var j=function(){function _(b,E,P){n(this,_),s(this,"_width",void 0),s(this,"_height",void 0),s(this,"_maxDepth",void 0),s(this,"_groups",{}),s(this,"_particles",void 0),s(this,"_positions",[]),this._width=b,this._height=E,this._maxDepth=P;var U=new a.BufferGeometry;U.setAttribute("position",new a.Float32BufferAttribute(0,3)),U.setAttribute("size",new a.Float32BufferAttribute(0,1)),U.setAttribute("gradient",new a.Float32BufferAttribute(0,1)),U.setAttribute("opacity",new a.Float32BufferAttribute(0,1)),U.setAttribute("color",new a.Float32BufferAttribute(0,3)),this._particles=new a.Points(U,_e.createShaderMaterial(N))}return r(_,[{key:"getConfigs",value:function(){for(var b={},E=0,P=Object.values(this._groups);E<P.length;E++){var U=P[E],y=U.name,A=U.amount,S=U.minSize,I=U.maxSize,k=U.minGradient,ne=U.maxGradient,ie=U.minOpacity,re=U.maxOpacity,he=U.color;b[y]={name:y,amount:A,minSize:S,maxSize:I,minGradient:k,maxGradient:ne,minOpacity:ie,maxOpacity:re,color:he}}return b}},{key:"isMoving",value:function(b){var E,P;return(E=(P=this._groups[b])===null||P===void 0?void 0:P.positionTransition.isPlaying())!==null&&E!==void 0&&E}},{key:"isSwaying",value:function(b){var E,P;return(E=(P=this._groups[b])===null||P===void 0?void 0:P.swayTransition.isPlaying())!==null&&E!==void 0&&E}},{key:"generate",value:function(b){this.removeAll();var E,P=0,U=function(Qe,qt){var pt=typeof Symbol<"u"&&Qe[Symbol.iterator]||Qe["@@iterator"];if(!pt){if(Array.isArray(Qe)||(pt=function(ht,bn){if(ht){if(typeof ht=="string")return me(ht,bn);var Vt=Object.prototype.toString.call(ht).slice(8,-1);return Vt==="Object"&&ht.constructor&&(Vt=ht.constructor.name),Vt==="Map"||Vt==="Set"?Array.from(ht):Vt==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt)?me(ht,bn):void 0}}(Qe))||qt){pt&&(Qe=pt);var Gt=0,Ht=function(){};return{s:Ht,n:function(){return Gt>=Qe.length?{done:!0}:{done:!1,value:Qe[Gt++]}},e:function(ht){throw ht},f:Ht}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xt,Yt=!0,_n=!1;return{s:function(){pt=pt.call(Qe)},n:function(){var ht=pt.next();return Yt=ht.done,ht},e:function(ht){_n=!0,Xt=ht},f:function(){try{Yt||pt.return==null||pt.return()}finally{if(_n)throw Xt}}}}(b=Array.isArray(b)?b:[b]);try{for(U.s();!(E=U.n()).done;){for(var y=E.value,A=y.name,S=y.amount,I=S===void 0?0:S,k=y.minSize,ne=k===void 0?0:k,ie=y.maxSize,re=ie===void 0?0:ie,he=y.minGradient,Le=he===void 0?0:he,we=y.maxGradient,Te=we===void 0?1:we,fe=y.minOpacity,qe=fe===void 0?0:fe,Ne=y.maxOpacity,Ye=Ne===void 0?1:Ne,Fe=y.color,je=Fe===void 0?16777215:Fe,Ze=y.smoothing,Ge=Ze===void 0?.5:Ze,Ke=0;Ke<I;++Ke){var Je=-this._width/2+Math.random()*this._width,st=-this._height/2+Math.random()*this._height,Xe=this._maxDepth/4*Math.random();this._positions.push(Je,st,Xe)}this._groups[A]={name:A,index:P,amount:I,minSize:ne,maxSize:re,minGradient:Le,maxGradient:Te,minOpacity:qe,maxOpacity:Ye,color:je,smoothing:Ge,swayOffset:new a.Vector2(0,0),positionTransition:new x({offsetX:0,offsetY:0}),swayTransition:new x({offsetX:0,offsetY:0})},P+=I}}catch(Qe){U.e(Qe)}finally{U.f()}var $e=new a.BufferGeometry;$e.setAttribute("position",new a.Float32BufferAttribute(3*P,3)),$e.setAttribute("color",new a.Float32BufferAttribute(3*P,3)),$e.setAttribute("size",new a.Float32BufferAttribute(P,1)),$e.setAttribute("gradient",new a.Float32BufferAttribute(P,1)),$e.setAttribute("opacity",new a.Float32BufferAttribute(P,1));var at=_e.createShaderMaterial(N);at.transparent=!0,this._particles.geometry=$e,this._particles.material=at}},{key:"removeAll",value:function(){for(var b in this._groups)this.sway(b,!1),this.move(b,!1);this._positions=[],this._groups={},this._particles.geometry.dispose(),this._particles.material.dispose()}},{key:"_getNewPosition",value:function(b,E){var P=E.x,U=E.y;P%=this._width,U%=this._height;var y=b.x+P,A=b.y+U,S=this._width/2,I=this._height/2;return Math.abs(b.x+P)>S&&(y=P>0?-S+(b.x+P-S)%this._width:S-(Math.abs(b.x+P)-S)%this._width),Math.abs(b.y+U)>I&&(A=U>0?-I+(b.y+U-I)%this._height:I-(Math.abs(b.y+U)-I)%this._height),new a.Vector2(y,A)}},{key:"_updatePositions",value:function(b,E,P,U){for(var y=b;y<b+E;++y){var A=this._getNewPosition(new a.Vector2(P[3*y],P[3*y+1]),U),S=A.x,I=A.y;this._positions[3*y]=S,this._positions[3*y+1]=I}}},{key:"move",value:function(b,E){var P=this,U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},y=this._groups[b],A=y.index,S=y.amount;if(typeof E!="boolean"){y.positionTransition.stop();var I=U.loop,k=I!==void 0&&I,ne=U.duration,ie=ne===void 0?0:ne,re=U.easing,he=re===void 0?u.Linear.None:re,Le=U.onStart,we=Le===void 0?function(){return{}}:Le,Te=U.onUpdate,fe=Te===void 0?function(){return{}}:Te,qe=U.onComplete,Ne=qe===void 0?function(){return{}}:qe,Ye=U.onStop,Fe=Ye===void 0?function(){return{}}:Ye,je=E.distance,Ze=E.angle,Ge=je*Math.cos(a.MathUtils.degToRad(Ze)),Ke=je*Math.sin(a.MathUtils.degToRad(Ze));if(ie>0){var Je=this._positions.slice();y.positionTransition=new x({offsetX:0,offsetY:0}).to({offsetX:Ge,offsetY:Ke},1e3*ie).easing(he).onStart(we).onUpdate(function(st){var Xe=st.offsetX,$e=st.offsetY;P._updatePositions(A,S,Je,new a.Vector2(Xe,$e)),fe()}).onComplete(function(){k&&P.move(b,E,U),Ne()}).onStop(Fe).start()}else this._updatePositions(A,S,this._positions,new a.Vector2(Ge,Ke))}else E||y.positionTransition.stop()}},{key:"sway",value:function(b,E){var P=this,U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},y=this._groups[b],A=y.swayOffset;if(typeof E!="boolean"){y.swayTransition.stop();var S=U.loop,I=S!==void 0&&S,k=U.duration,ne=k===void 0?0:k,ie=U.easing,re=ie===void 0?u.Linear.None:ie,he=U.onStart,Le=he===void 0?function(){return{}}:he,we=U.onUpdate,Te=we===void 0?function(){return{}}:we,fe=U.onComplete,qe=fe===void 0?function(){return{}}:fe,Ne=U.onStop,Ye=Ne===void 0?function(){return{}}:Ne,Fe=E.x,je=E.y;y.swayTransition=new x({offsetX:A.x,offsetY:A.y}).to({offsetX:-Fe+Math.random()*Fe*2,offsetY:-je+Math.random()*je*2},1e3*ne).easing(re).onStart(Le).onUpdate(function(Ze){var Ge=Ze.offsetX,Ke=Ze.offsetY;A.set(Ge,Ke),Te()}).onComplete(function(){I&&P.sway(b,E,U),qe()}).onStop(Ye).start()}else E||y.swayTransition.stop()}},{key:"_generateNewRandomAveragedValue",value:function(b,E,P){var U=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.5;U=Math.min(U,.95);var y=(P-E)/2,A=Math.max(Math.min(b+(-y+Math.random()*y*2),P),E),S=b*U+A*(1-U);return Math.max(Math.min(S,P),E)}},{key:"update",value:function(){for(var b=this._particles.geometry.attributes,E=b.position,P=b.size,U=b.gradient,y=b.opacity,A=b.color,S=0,I=Object.values(this._groups);S<I.length;S++)for(var k=I[S],ne=k.index,ie=k.amount,re=k.minSize,he=k.maxSize,Le=k.minGradient,we=k.maxGradient,Te=k.minOpacity,fe=k.maxOpacity,qe=k.color,Ne=k.smoothing,Ye=k.swayOffset,Fe=ne;Fe<ne+ie;++Fe){var je=this._getNewPosition(new a.Vector2(this._positions[3*Fe],this._positions[3*Fe+1]),Ye),Ze=new a.Color(qe);E.setXYZ(Fe,je.x,je.y,this._positions[3*Fe+2]),A.setXYZ(Fe,Ze.r,Ze.g,Ze.b),P.setX(Fe,this._generateNewRandomAveragedValue(P.getX(Fe),re,he,Ne)),U.setX(Fe,this._generateNewRandomAveragedValue(U.getX(Fe),Le,we,Ne)),y.setX(Fe,this._generateNewRandomAveragedValue(y.getX(Fe),Te,fe,Ne))}b.position.needsUpdate=!0,b.size.needsUpdate=!0,b.gradient.needsUpdate=!0,b.opacity.needsUpdate=!0,b.color.needsUpdate=!0}},{key:"object",get:function(){return this._particles}},{key:"dispose",value:function(){this.removeAll(),this._particles.geometry.dispose(),this._particles.material.dispose()}}]),_}(),ye=function(){function _(b,E,P){n(this,_),s(this,"_buffer",void 0),s(this,"_plane",void 0),s(this,"_scene",void 0),s(this,"camera",void 0),s(this,"particles",void 0),s(this,"effects",void 0),this._buffer=new a.WebGLRenderTarget(E,P),this._buffer.depthTexture=new a.DepthTexture(E,P);var U=1/(b&&b.image!==void 0?b.image.width/b.image.height:1);this._plane=new a.Mesh(new a.PlaneGeometry(1,U),new a.MeshBasicMaterial({map:b})),this.camera=new B(this._plane,E,P),this.particles=new j(1.1,1.1*U,F(this._plane,this.camera.camera,0)),this.effects=new Ae(E,P,this.camera.camera,this._buffer.depthTexture),this._scene=new a.Scene,this._scene.add(this.particles.object),this._scene.add(this._plane)}return r(_,[{key:"texture",get:function(){return this._plane.material.map}},{key:"setSize",value:function(b,E){this.camera.setSize(b,E),this._buffer.setSize(b,E),this._buffer.depthTexture.image.width=b,this._buffer.depthTexture.image.height=E}},{key:"render",value:function(b){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.camera.update(),this.particles.update(),b.setRenderTarget(this._buffer),b.render(this._scene,this.camera.camera),this.effects.hasEffects()?this.effects.render(b,E,this._buffer):(b.setRenderTarget(E),b.render(this._scene,this.camera.camera))}},{key:"dispose",value:function(){this._buffer.dispose(),this._buffer.texture.dispose(),this._buffer.depthTexture.dispose(),this._plane.geometry.dispose(),this._plane.material.dispose(),this.camera.dispose(),this.effects.dispose(),this.particles.dispose()}}]),_}(),Me,We=function(_){H(U,_);var b,E,P=(b=U,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,A=O(b);if(E){var S=O(this).constructor;y=Reflect.construct(A,arguments,S)}else y=A.apply(this,arguments);return W(this,y)});function U(y){var A;return n(this,U),s(G(A=P.call(this)),"_background",void 0),A._background=y,A}return r(U,[{key:"setBackground",value:function(y){this._background=y}},{key:"background",get:function(){return this._background}},{key:"setSize",value:function(y,A){this._background.setSize(y,A)}},{key:"render",value:function(y,A){this._background.render(y,this.renderToScreen?null:A)}},{key:"dispose",value:function(){this._background.dispose()}}]),U}(oe.Pass);(function(_){_[_.Left=0]="Left",_[_.Right=1]="Right",_[_.Top=2]="Top",_[_.Bottom=3]="Bottom"})(Me||(Me={}));var ut,St={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},amount:{value:0},gradient:{value:0},direction:{value:Me.Right},angle:{value:0},aspect:{value:1}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }

  `,fragmentShader:`

    uniform sampler2D tDiffuse1;
    uniform sampler2D tDiffuse2;
    uniform float amount;
    uniform float gradient;
    uniform int direction;
    uniform float angle;
    uniform float aspect;
    varying vec2 vUv;

    void main() {
      vec4 texel1 = texture2D(tDiffuse1, vUv);
      vec4 texel2 = texture2D(tDiffuse2, vUv);

      float position;
      if (direction == 0) {
        // WipeDirection.LEFT
        position = 1.0 - vUv.x;
      } else if (direction == 1) {
        // WipeDirection.RIGHT
        position = vUv.x;
      } else if (direction == 2) {
        // WipeDirection.TOP
        position = vUv.y;
      } else if (direction == 3) {
        // WipeDirection.BOTTOM
        position = 1.0 - vUv.y;
      }

      float rotationOffset;
      float rotatedPosition;
      if (direction < 2) {
        // rotation for horizontal wipes
        float slope = 1.0 / tan(angle);
        rotationOffset = (1.0 / slope) / aspect;
        rotatedPosition = (vUv.y / slope) / aspect;
      } else {
        // rotation for vertical wipes
        float slope = tan(angle);
        rotationOffset = slope / aspect;
        rotatedPosition = (vUv.x * slope) / aspect;
      }

      // a tween that starts from one side of the texture and ends at the other side.
      // this tween accounts for offsets due to the size of the blend gradient and angle of the wipe effect.
      float wipeOffset = (-max(0.0, rotationOffset) - gradient) + ((1.0 + abs(rotationOffset) + gradient) * amount) + rotatedPosition;
      if (position <= wipeOffset) {
        gl_FragColor = texel2;
      } else if (position <= wipeOffset + gradient) {
        gl_FragColor = mix(texel2, texel1, (position - wipeOffset) / gradient);
      } else {
        gl_FragColor = texel1;
      }
    }

  `};(function(_){_[_.Left=0]="Left",_[_.Right=1]="Right",_[_.Top=2]="Top",_[_.Bottom=3]="Bottom"})(ut||(ut={}));var bt,lt={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},slides:{value:1},amount:{value:0},prevAmount:{value:0},intensity:{value:1},direction:{value:ut.Right},samples:{value:32}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }

  `,fragmentShader:`

    const int MAX_SAMPLES = 128;

    uniform sampler2D tDiffuse1;
    uniform sampler2D tDiffuse2;
    uniform int slides;
    uniform float amount;
    uniform float prevAmount;
    uniform float intensity;
    uniform int direction;
    uniform int samples;
    varying vec2 vUv;

    float getComponentForDirection(int direction, vec2 uv) {
      return direction < 2 ? uv.x : uv.y;
    }

    vec2 getVectorForDirection(int direction, vec2 uv, float position) {
      return direction < 2 ? vec2(position, uv.y) : vec2(uv.x, position);
    }

    float getOffsetPosition(int direction, float uv, float offset) {
      return direction == 1 || direction == 3
        ? mod(uv + offset, 1.0)
        : mod(uv + (1.0 - offset), 1.0);
    }

    void main() {
      vec4 texel;
      float offset = amount * float(slides);
      float position = getComponentForDirection(direction, vUv);

      bool isFirstSlide = direction == 1 || direction == 3
        ? position + offset <= 1.0
        : position - offset >= 0.0;

      if (isFirstSlide) {
        texel = texture2D(tDiffuse1, getVectorForDirection(direction, vUv, getOffsetPosition(direction, position, offset)));
      } else {
        texel = texture2D(tDiffuse2, getVectorForDirection(direction, vUv, getOffsetPosition(direction, position, offset)));
      }

      float velocity = (amount - prevAmount) * intensity;
      for (int i = 1; i < MAX_SAMPLES; ++i) {
        if (i >= samples) {
          // hack to allow loop comparisons against uniforms
          break;
        }
        float blurOffset = velocity * (float(i) / float(samples - 1) - 0.5);
        bool isFirstSlide = direction == 1 || direction == 3
          ? position + offset + blurOffset <= 1.0
          : position - offset - blurOffset >= 0.0;
        if (isFirstSlide) {
          texel += texture2D(tDiffuse1, getVectorForDirection(direction, vUv, getOffsetPosition(direction, position, offset + blurOffset)));
        } else {
          texel += texture2D(tDiffuse2, getVectorForDirection(direction, vUv, getOffsetPosition(direction, position, offset + blurOffset)));
        }
      }

      gl_FragColor = texel / max(1.0, float(samples));
    }

  `},tn={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},amount:{value:0},prevAmount:{value:0},intensity:{value:1},samples:{value:32}},vertexShader:`

    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }

  `,fragmentShader:`

    const int MAX_SAMPLES = 128;

    uniform sampler2D tDiffuse1;
    uniform sampler2D tDiffuse2;
    uniform float amount;
    uniform float prevAmount;
    uniform float intensity;
    uniform int samples;
    varying vec2 vUv;


    void main() {
      vec4 texel = mix(texture2D(tDiffuse1, vUv), texture2D(tDiffuse2, vUv), amount);
      float velocity = (amount - prevAmount) * intensity;
      for (int i = 1; i < MAX_SAMPLES; ++i) {
        if (i >= samples) {
          // hack to allow loop comparisons against uniforms
          break;
        }
        float offset = velocity * (float(i) / float(samples - 1) - 0.5);
        texel += mix(texture2D(tDiffuse1, vec2(vUv.x + offset, vUv.y)), texture2D(tDiffuse2, vec2(vUv.x + offset, vUv.y)), amount);
      }

      gl_FragColor = texel / max(1.0, float(samples));
    }

  `},nn=["easing","duration","delay","onInit","onStart","onUpdate","onComplete","onStop"];function Bi(_,b){var E=Object.keys(_);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(_);b&&(P=P.filter(function(U){return Object.getOwnPropertyDescriptor(_,U).enumerable})),E.push.apply(E,P)}return E}function kt(_){for(var b=1;b<arguments.length;b++){var E=arguments[b]!=null?arguments[b]:{};b%2?Bi(Object(E),!0).forEach(function(P){s(_,P,E[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(E)):Bi(Object(E)).forEach(function(P){Object.defineProperty(_,P,Object.getOwnPropertyDescriptor(E,P))})}return _}(function(_){_.None="None",_.Blend="Blend",_.Blur="Blur",_.Wipe="Wipe",_.Slide="Slide",_.Glitch="Glitch"})(bt||(bt={}));var ws=function(_){H(U,_);var b,E,P=(b=U,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var y,A=O(b);if(E){var S=O(this).constructor;y=Reflect.construct(A,arguments,S)}else y=A.apply(this,arguments);return W(this,y)});function U(y,A,S){var I;return n(this,U),s(G(I=P.call(this)),"_width",void 0),s(G(I),"_height",void 0),s(G(I),"_prevBackground",void 0),s(G(I),"_buffer",void 0),s(G(I),"_transition",new x({amount:0})),s(G(I),"_transitionEffect",new D(Ce.BlendShader,{mixRatio:1})),I._width=A,I._height=S,I._prevBackground=y??new ye(null,A,S),I._buffer=new a.WebGLRenderTarget(A,S),I.enabled=!1,I}return r(U,[{key:"setSize",value:function(y,A){this._width=y,this._height=A,this._prevBackground.setSize(y,A),this._buffer.setSize(y,A)}},{key:"isTransitioning",value:function(){return this._transition.isPlaying()}},{key:"transition",value:function(y,A){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},I=this._getTweenConfig(y,A,S),k=I.from,ne=I.to,ie=I.duration,re=I.delay,he=I.easing,Le=I.onInit,we=I.onStart,Te=I.onUpdate,fe=I.onComplete,qe=I.onStop;this._transition.stop(),Le(),this._transition=new x(k).to(ne,ie).easing(he).onStart(we).onUpdate(Te).onComplete(fe).onStop(qe).delay(re).start()}},{key:"_setTransitionEffect",value:function(y){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._transitionEffect.dispose(),this._transitionEffect=new D(y,A)}},{key:"_getTweenConfig",value:function(y,A){var S=this,I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},k=function(){S.enabled=!0},ne=function(){S.enabled=!1,S._prevBackground.dispose(),S._prevBackground=y},ie=I.easing,re=ie===void 0?u.Linear.None:ie,he=I.duration,Le=he===void 0?0:he,we=I.delay,Te=we===void 0?0:we,fe=I.onInit,qe=fe===void 0?function(){return{}}:fe,Ne=I.onStart,Ye=Ne===void 0?function(){return{}}:Ne,Fe=I.onUpdate,je=Fe===void 0?function(){return{}}:Fe,Ze=I.onComplete,Ge=Ze===void 0?function(){return{}}:Ze,Ke=I.onStop,Je=Ke===void 0?function(){return{}}:Ke,st=t(I,nn),Xe={from:{amount:0},to:{amount:1},easing:re,duration:1e3*Le,delay:1e3*Te,onInit:function(){return qe(S._prevBackground,y)},onStart:function(){Ye(S._prevBackground,y),k()},onUpdate:function(){return je(S._prevBackground,y)},onComplete:function(){Ge(S._prevBackground,y),ne()},onStop:function(){Je(S._prevBackground,y),ne()}};switch(A){case bt.None:var $e=Xe.onStart;return kt(kt({},Xe),{},{onStart:function(){S._setTransitionEffect(Ce.BlendShader,{mixRatio:1}),$e()}});case bt.Blend:var at=Xe.onStart,Qe=Xe.onUpdate;return kt(kt({},Xe),{},{onStart:function(){S._setTransitionEffect(Ce.BlendShader),at()},onUpdate:function(wn){var Mn=wn.amount;S._transitionEffect.updateUniforms({mixRatio:Mn}),Qe()}});case bt.Wipe:var qt=Xe.onStart,pt=Xe.onUpdate,Gt=st,Ht=Gt.gradient,Xt=Ht===void 0?0:Ht,Yt=Gt.angle,_n=Yt===void 0?0:Yt,ht=Gt.direction,bn=ht===void 0?Me.Right:ht;return kt(kt({},Xe),{},{onStart:function(){S._setTransitionEffect(St,{gradient:Xt,angle:a.MathUtils.degToRad(_n),direction:bn,aspect:S._width/S._height}),qt()},onUpdate:function(wn){var Mn=wn.amount;S._transitionEffect.updateUniforms({amount:Mn,aspect:S._width/S._height}),pt()}});case bt.Slide:var Vt=Xe.onStart,Ts=Xe.onUpdate,Ui=st,Es=Ui.slides,jo=Es===void 0?1:Es,ti=Ui.intensity,$o=ti===void 0?1:ti,As=Ui.samples,Qo=As===void 0?32:As,Ls=Ui.direction,Nd=Ls===void 0?ut.Right:Ls;return kt(kt({},Xe),{},{onStart:function(){S._setTransitionEffect(lt,{slides:jo,intensity:$o,samples:Qo,direction:Nd}),Vt()},onUpdate:function(wn){var Mn=wn.amount,Ko=S._transitionEffect.getUniforms().amount;S._transitionEffect.updateUniforms({prevAmount:Ko,amount:Mn}),Ts()}});case bt.Blur:var kd=Xe.onStart,Gd=Xe.onUpdate,gc=st,vc=gc.intensity,Hd=vc===void 0?1:vc,yc=gc.samples,Vd=yc===void 0?32:yc;return kt(kt({},Xe),{},{onStart:function(){S._setTransitionEffect(tn,{intensity:Hd,samples:Vd}),kd()},onUpdate:function(wn){var Mn=wn.amount,Ko=S._transitionEffect.getUniforms().amount;S._transitionEffect.updateUniforms({prevAmount:Ko,amount:Mn}),Gd()}});case bt.Glitch:var Wd=Xe.onStart,qd=Xe.onUpdate,Xd=st,xc=Xd.seed,Yd=xc===void 0?Math.random():xc;return kt(kt({},Xe),{},{onStart:function(){S._setTransitionEffect(De,{seed:Yd,resolution:new a.Vector2(S._width,S._height)}),Wd()},onUpdate:function(wn){var Mn=wn.amount;S._transitionEffect.getUniforms().resolution.set(S._width,S._height),S._transitionEffect.updateUniforms({amount:Mn}),qd()}});default:return Xe}}},{key:"render",value:function(y,A,S){this.isTransitioning()&&(this._prevBackground.render(y,this._buffer),this._transitionEffect.render(y,this.renderToScreen?null:A,this._buffer,S))}},{key:"dispose",value:function(){this._transition.stop(),this._prevBackground.dispose(),this._buffer.dispose(),this._transitionEffect.dispose()}}]),U}(oe.Pass),Ms=["onStart"];function pn(_,b){var E=Object.keys(_);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(_);b&&(P=P.filter(function(U){return Object.getOwnPropertyDescriptor(_,U).enumerable})),E.push.apply(E,P)}return E}function Dr(_){for(var b=1;b<arguments.length;b++){var E=arguments[b]!=null?arguments[b]:{};b%2?pn(Object(E),!0).forEach(function(P){s(_,P,E[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(E)):pn(Object(E)).forEach(function(P){Object.defineProperty(_,P,Object.getOwnPropertyDescriptor(E,P))})}return _}function Ss(){return c.WEBGL.isWebGLAvailable()}function Zo(_){return new Promise(function(b,E){new a.TextureLoader().load(_,function(P){P.wrapS=a.ClampToEdgeWrapping,P.wrapT=a.ClampToEdgeWrapping,P.minFilter=a.LinearFilter,P.repeat.set(1,1),b(P)},function(){return{}},function(P){var U;return E((U=P.error)!==null&&U!==void 0?U:new Error("Failed to load requested image. Verify CORS policy or check if the image is valid."))})})}var zi=function(){function _(b){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n(this,_),s(this,"_renderer",void 0),s(this,"_composer",void 0),s(this,"_background",void 0),s(this,"_backgroundPass",void 0),s(this,"_transitionPass",void 0),s(this,"_effectPass",void 0),s(this,"_clock",new a.Clock(!1)),s(this,"_renderAnimationFrame",void 0),s(this,"_paused",!0),s(this,"_disposed",!1);var P=b.clientWidth,U=b.clientHeight;this._renderer=new a.WebGLRenderer({canvas:b,powerPreference:"high-performance"}),this._renderer.setSize(P,U,!1),this._composer=new l.EffectComposer(this._renderer),this._background=new ye(null,P,U),this._backgroundPass=new We(this._background),this._transitionPass=new ws(this._background,P,U),this._effectPass=new Ue(P,U),this._composer.addPass(this._backgroundPass),this._composer.addPass(this._transitionPass),this._composer.addPass(this._effectPass),this._render=this._render.bind(this);var y=E.autoRender,A=y===void 0||y;A&&this.render()}return r(_,[{key:"effects",get:function(){return this._effectPass}},{key:"background",get:function(){return this._background}},{key:"isTransitioning",value:function(){return this._transitionPass.isTransitioning()}},{key:"setBackground",value:function(b,E){var P=this,U=this._renderer.domElement,y=U.clientWidth,A=U.clientHeight;if(this._background=new ye(b,y,A),E){var S=E.type,I=E.config,k=I.onStart,ne=k===void 0?function(){return{}}:k,ie=t(I,Ms);this._transitionPass.transition(this._background,S,Dr(Dr({},ie),{},{onStart:function(re,he){P._backgroundPass.setBackground(he),ne(re,he)}}))}else this._backgroundPass.setBackground(this._background),this._transitionPass.transition(this._background,bt.None)}},{key:"_resizeCanvas",value:function(){var b=this._renderer.domElement,E=b.width,P=b.height,U=b.clientWidth,y=b.clientHeight;E===U&&P===y||(this._renderer.setSize(U,y,!1),this._composer.setSize(U,y),this._backgroundPass.setSize(U,y),this._transitionPass.setSize(U,y),this._effectPass.setSize(U,y))}},{key:"render",value:function(){this._renderAnimationFrame!==void 0&&(cancelAnimationFrame(this._renderAnimationFrame),this._renderAnimationFrame=void 0),this._paused=!1,this._clock.start(),this._render()}},{key:"pause",value:function(){this._paused=!0,this._clock.stop(),this._renderAnimationFrame!==void 0&&(cancelAnimationFrame(this._renderAnimationFrame),this._renderAnimationFrame=void 0)}},{key:"isPaused",get:function(){return this._paused}},{key:"_render",value:function(){m(),this._resizeCanvas(),this._disposed||(this._composer.render(this._clock.getDelta()),this._renderAnimationFrame=requestAnimationFrame(this._render))}},{key:"dispose",value:function(){this._disposed=!0,this._renderer.dispose(),this._backgroundPass.dispose(),this._transitionPass.dispose(),this._effectPass.dispose(),this._clock.stop()}}]),_}(),Jo=u;ra.midori=e})()),ra}var j_=J_();const $_=rp(j_),{BackgroundRenderer:Q_,loadImage:K_,isWebGLSupported:db,Background:pb,BackgroundCamera:mb,BackgroundEffects:gb,EffectPass:vb,Particles:yb,TransitionType:eb,EffectType:Yu,SlideDirection:tb,WipeDirection:xb,Easings:Ga}=$_.midori,nb={class:"background-visual"},ib=["width","height"],rb={class:"glow-under features-section q-px-xl q-py-lg"},sb={class:"row q-col-gutter-xl"},ob={class:"font-secondary text-weight-bold font-select-size-12 q-mb-sm"},ab={class:"font-select-size-5 q-mb-xs"},_b={__name:"IndexPage",setup(o){const e=[{icon:"military_tech",title:"Match Analysis",description:"Detailed breakdown of match outcomes with advanced metrics tracking"},{icon:"group_work",title:"Team Comparison",description:"Compare team performance across multiple seasons and tournaments"},{icon:"insights",title:"Draft Information",description:"Visualize and analyze draft trends to build smarter comps"}],t=ea(null),n=ea(0),i=ea(0),r=()=>{if(!t.value)return;const a=t.value.parentElement;if(!a)return;const l=a.getBoundingClientRect();n.value=l.width,i.value=l.height};let s=null;return Zd(()=>{setTimeout(()=>{if(!t.value){console.error("Canvas element not found!");return}r(),s=new Q_(t.value),window.addEventListener("resize",r);const a=[new URL("/assets/dashboard-preview-5-DAKgpCzy.jpg",import.meta.url).href,new URL("/assets/dashboard-preview-BaryT0FT.jpg",import.meta.url).href,new URL("/assets/dashboard-preview-2-BdcfOvqy.jpg",import.meta.url).href,new URL("/assets/dashboard-preview-3-opKsNFJD.jpg",import.meta.url).href,new URL("/assets/dashboard-preview-4-CcfqU7eq.avif",import.meta.url).href,new URL("/assets/dashboard-preview-5-DAKgpCzy.jpg",import.meta.url).href,new URL("/assets/dashboard-preview-6-BR1ta8hB.jpg",import.meta.url).href,new URL("/assets/dashboard-preview-7-e91ZSKuz.jpg",import.meta.url).href];let l=0;const c=async f=>{try{const h=await K_(f);s.setBackground(h,{type:eb.Glitch,config:{slides:1,intensity:1,duration:1.5,easing:Ga.Quadratic.InOut,direction:tb.Random}});const{effects:d,camera:p,particles:v}=s.background;d.set(Yu.Bloom,{amount:.002,angle:135}),d.set(Yu.VignetteBlur,{size:2,radius:1,passes:1}),p.move({x:.5+(Math.random()-.5)*.001,y:.5+(Math.random()-.5)*.001,z:1+(Math.random()-.5)*.002},{duration:15,easing:Ga.Cubic.InOut}),v.generate([{name:"sparks",amount:5,minSize:80,maxSize:120,maxOpacity:.8,minGradient:.8,maxGradient:1,smoothing:.7},{name:"glow",amount:15,minSize:40,maxSize:60,maxOpacity:.45,minGradient:1,maxGradient:1,smoothing:.9}]),v.move("sparks",{distance:.3,angle:15},{duration:6,loop:!0}),v.sway("sparks",{x:.015,y:.015},{duration:2,easing:Ga.Sinusoidal.InOut,loop:!0}),v.move("glow",{distance:.2,angle:10},{duration:8,loop:!0})}catch(h){console.error("Error loading image:",h)}};c(a[l]);const u=setInterval(()=>{l=(l+1)%a.length,c(a[l])},1e4);Jd(()=>{clearInterval(u),window.removeEventListener("resize",r),s&&s.dispose()})},100)}),(a,l)=>(_c(),jd(ip,{class:"bg-dark relative-position overflow-hidden"},{default:ta(()=>[Ut("div",nb,[Ut("canvas",{ref_key:"canvas",ref:t,class:"full-width full-height",width:n.value,height:i.value},null,8,ib)]),l[1]||(l[1]=Ut("section",{class:"hero-section q-px-xl q-pt-lg"},[Ut("div",{class:"row items-center q-col-gutter-xl"},[Ut("div",{class:"col-12 col-md-8"},[Ut("h1",{class:"text-h2 text-weight-bold text-white text-uppercase q-mb-lg"},[Ut("span",{class:"text-deep-orange-4"},"Winning"),na(" Through Data ")]),Ut("p",{class:"highlight-text text-h5 text-white q-mb-xl"},[na(" Advanced analytics platform for League of Legends esports teams."),Ut("br"),na(" Transform match data into competitive advantages. ")])])])],-1)),Ut("section",rb,[l[0]||(l[0]=Ut("div",{class:"glow-under nfont-secondary text-h4 text-weight-bold text-center text-uppercase q-mb-sm"},"Key Features",-1)),Ut("div",sb,[(_c(),$d(Qd,null,Kd(e,(c,u)=>Ut("div",{key:u,class:"col-12 col-md-4"},[ia(ep,{class:"bg-dark-page text-white feature-card"},{default:ta(()=>[ia(tp,null,{default:ta(()=>[ia(np,{name:c.icon,color:"deep-orange-4",size:"lg",class:"q-mb-md"},null,8,["name"]),Ut("div",ob,bc(c.title),1),Ut("p",ab,bc(c.description),1)]),_:2},1024)]),_:2},1024)])),64))])])]),_:1}))}};export{_b as default};
