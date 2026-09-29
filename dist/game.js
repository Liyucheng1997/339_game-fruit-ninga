(()=>{var iu=0,uc=1,su=2;var $i=1,ru=2,Us=3,Ti=0,Xe=1,Ke=2,_n=0,Ns=1,An=2,fc=3,dc=4,ou=5;var Ji=100,au=101,lu=102,cu=103,hu=104,uu=200,fu=201,du=202,pu=203,pc=204,mc=205,mu=206,gu=207,_u=208,xu=209,vu=210,yu=211,Mu=212,bu=213,Su=214,Do=0,Uo=1,No=2,ws=3,Fo=4,Oo=5,Bo=6,zo=7,ua=0,wu=1,Tu=2,Cn=0,Pr=1,Ir=2,Lr=3,ri=4,Dr=5,Ur=6,Nr=7;var gc=300,Ei=301,Ki=302,fa=303,da=304,Fr=306,Ts=1e3,On=1001,ko=1002,ke=1003,Eu=1004;var Or=1005;var We=1006,pa=1007;var Ai=1008;var on=1009,_c=1010,xc=1011,Fs=1012,ma=1013,Rn=1014,xn=1015,Fe=1016,ga=1017,_a=1018,Os=1020,vc=35902,yc=35899,Mc=1021,bc=1022,vn=1023,Bn=1026,Ci=1027,xa=1028,va=1029,Ri=1030,ya=1031;var Ma=1033,Br=33776,zr=33777,kr=33778,Vr=33779,ba=35840,Sa=35841,wa=35842,Ta=35843,Ea=36196,Aa=37492,Ca=37496,Ra=37488,Pa=37489,Hr=37490,Ia=37491,La=37808,Da=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,za=37815,ka=37816,Va=37817,Ha=37818,Ga=37819,Wa=37820,Xa=37821,qa=36492,Ya=36494,Za=36495,$a=36283,Ja=36284,Gr=36285,Ka=36286;var or=2300,Vo=2301,Io=2302,nc=2303,ic=2400,sc=2401,rc=2402;var Au=3200;var Wr=0,Cu=1,Pn="",De="srgb",ar="srgb-linear",lr="linear",ae="srgb";var Lo=7680;var Ru=519,Pu=512,Iu=513,Lu=514,ja=515,Du=516,Uu=517,Qa=518,Nu=519,Sc=35044,Pi=35048;var wc="300 es",Tn=2e3,Es=2001;function ad(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fu(){let i=cr("canvas");return i.style.display="block",i}var Ch={},As=null;function hr(...i){let t="THREE."+i.shift();As?As("log",t,...i):console.log(t,...i)}function Ou(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=Ou(i);let t="THREE."+i.shift();if(As)As("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=Ou(i);let t="THREE."+i.shift();if(As)As("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Wi(...i){let t=i.join(" ");t in Ch||(Ch[t]=!0,kt(...i))}function Bu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var zu={[Do]:Uo,[No]:Bo,[Fo]:zo,[ws]:Oo,[Uo]:Do,[Bo]:No,[zo]:Fo,[Oo]:ws},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rl=Math.PI/180,Ho=180/Math.PI;function _i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function cd(i,t){return(i%t+t)%t}function Pl(i,t,e){return(1-e)*i+e*t}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pc=class Pc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pc.prototype.isVector2=!0;var Rt=Pc,sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(f!==_||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*_;g<0&&(u=-u,d=-d,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let S=Math.acos(g),T=Math.sin(S);m=Math.sin(m*S)/T,a=Math.sin(a*S)/T,l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+_*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-a*d,t[e+2]=c*p+h*d+a*u-l*f,t[e+3]=h*p-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ic=class Ic{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ic.prototype.isVector3=!0;var R=Ic,Il=new R,Rh=new sn,Lc=class Lc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=s[0],g=s[3],m=s[6],S=s[1],T=s[4],y=s[7],b=s[2],w=s[5],C=s[8];return r[0]=o*_+a*S+l*b,r[3]=o*g+a*T+l*w,r[6]=o*m+a*y+l*C,r[1]=c*_+h*S+f*b,r[4]=c*g+h*T+f*w,r[7]=c*m+h*y+f*C,r[2]=u*_+d*S+p*b,r[5]=u*g+d*T+p*w,r[8]=u*m+d*y+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=e*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ll.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ll.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lc.prototype.isMatrix3=!0;var Gt=Lc,Ll=new Gt,Ph=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){let i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:Ph,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Ph,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var jt=hd();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,Go=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=cr("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=cr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ud=0,Cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dl(s[o].image)):r.push(Dl(s[o]))}else r=Dl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var fd=0,Ul=new R,rn=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=On,s=On,r=We,o=Ai,a=vn,l=on,c=i.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=_i(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=gc;rn.DEFAULT_ANISOTROPY=1;var Dc=class Dc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(d+1)/2,b=(m+1)/2,w=(h+u)/4,C=(f+_)/4,v=(p+g)/4;return T>y&&T>b?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=C/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dc.prototype.isVector4=!0;var Ee=Dc,Wo=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Re=class extends Wo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ur=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ha=class ha{constructor(t,e,n,s,r,o,a,l,c,h,f,u,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,d,p,_,g)}set(t,e,n,s,r,o,a,l,c,h,f,u,d,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ha().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,p=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,p=a*h,_=a*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=p*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,pd)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),fi.crossVectors(n,cn),fi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),fi.crossVectors(n,cn)),fi.normalize(),ro.crossVectors(cn,fi),s[0]=fi.x,s[4]=ro.x,s[8]=cn.x,s[1]=fi.y,s[5]=ro.y,s[9]=cn.y,s[2]=fi.z,s[6]=ro.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],S=n[3],T=n[7],y=n[11],b=n[15],w=s[0],C=s[4],v=s[8],E=s[12],I=s[1],U=s[5],O=s[9],z=s[13],P=s[2],F=s[6],G=s[10],Y=s[14],et=s[3],q=s[7],W=s[11],Z=s[15];return r[0]=o*w+a*I+l*P+c*et,r[4]=o*C+a*U+l*F+c*q,r[8]=o*v+a*O+l*G+c*W,r[12]=o*E+a*z+l*Y+c*Z,r[1]=h*w+f*I+u*P+d*et,r[5]=h*C+f*U+u*F+d*q,r[9]=h*v+f*O+u*G+d*W,r[13]=h*E+f*z+u*Y+d*Z,r[2]=p*w+_*I+g*P+m*et,r[6]=p*C+_*U+g*F+m*q,r[10]=p*v+_*O+g*G+m*W,r[14]=p*E+_*z+g*Y+m*Z,r[3]=S*w+T*I+y*P+b*et,r[7]=S*C+T*U+y*F+b*q,r[11]=S*v+T*O+y*G+b*W,r[15]=S*E+T*z+y*Y+b*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],S=l*d-c*u,T=a*d-c*f,y=a*u-l*f,b=o*d-c*h,w=o*u-l*h,C=o*f-a*h;return e*(_*S-g*T+m*y)-n*(p*S-g*b+m*w)+s*(p*T-_*b+m*C)-r*(p*y-_*w+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],S=e*a-n*o,T=e*l-s*o,y=e*c-r*o,b=n*l-s*a,w=n*c-r*a,C=s*c-r*l,v=h*_-f*p,E=h*g-u*p,I=h*m-d*p,U=f*g-u*_,O=f*m-d*_,z=u*m-d*g,P=S*z-T*O+y*U+b*I-w*E+C*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return t[0]=(a*z-l*O+c*U)*F,t[1]=(s*O-n*z-r*U)*F,t[2]=(_*C-g*w+m*b)*F,t[3]=(u*w-f*C-d*b)*F,t[4]=(l*I-o*z-c*E)*F,t[5]=(e*z-s*I+r*E)*F,t[6]=(g*y-p*C-m*T)*F,t[7]=(h*C-u*y+d*T)*F,t[8]=(o*O-a*I+c*v)*F,t[9]=(n*I-e*O-r*v)*F,t[10]=(p*w-_*y+m*S)*F,t[11]=(f*y-h*w-d*S)*F,t[12]=(a*E-o*U-l*v)*F,t[13]=(e*U-n*E+s*v)*F,t[14]=(_*T-p*b-g*S)*F,t[15]=(h*b-f*T+u*S)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,_=o*h,g=o*f,m=a*f,S=l*c,T=l*h,y=l*f,b=n.x,w=n.y,C=n.z;return s[0]=(1-(_+m))*b,s[1]=(d+y)*b,s[2]=(p-T)*b,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(u+m))*w,s[6]=(g+S)*w,s[7]=0,s[8]=(p+T)*C,s[9]=(g-S)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=os.set(s[0],s[1],s[2]).length(),a=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mn.copy(this);let c=1/o,h=1/a,f=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Tn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Tn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Es)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Tn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Es)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ha.prototype.isMatrix4=!0;var te=ha,os=new R,Mn=new te,dd=new R(0,0,0),pd=new R(1,1,1),fi=new R,ro=new R,cn=new R,Lh=new te,Dh=new sn,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},md=0,Uh=new R,as=new sn,Zn=new te,oo=new R,Ks=new R,gd=new R,_d=new sn,Nh=new R(1,0,0),Fh=new R(0,1,0),Oh=new R(0,0,1),Bh={type:"added"},xd={type:"removed"},ls={type:"childadded",child:null},Nl={type:"childremoved",child:null},Ae=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new mn,n=new sn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Gt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Fh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Fh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ks,oo,this.up):Zn.lookAt(oo,Ks,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Zn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),ls.child=t,this.dispatchEvent(ls),ls.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ae.DEFAULT_UP=new R(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},vd={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=cd(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fl(o,r,t+1/3),this.g=Fl(o,r,t),this.b=Fl(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return jt.workingToColorSpace(Je.copy(this),t),Math.round(Qt(Je.r*255,0,255))*65536+Math.round(Qt(Je.g*255,0,255))*256+Math.round(Qt(Je.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=De){jt.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(ao);let n=Pl(di.h,ao.h,e),s=Pl(di.s,ao.s,e),r=Pl(di.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Mt;Mt.NAMES=ku;var ei=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bn=new R,$n=new R,Ol=new R,Jn=new R,cs=new R,hs=new R,zh=new R,Bl=new R,zl=new R,kl=new R,Vl=new Ee,Hl=new Ee,Gl=new Ee,Qn=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),$n.subVectors(n,e),Ol.subVectors(t,e);let o=bn.dot(bn),a=bn.dot($n),l=bn.dot(Ol),c=$n.dot($n),h=$n.dot(Ol),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vl.setScalar(0),Hl.setScalar(0),Gl.setScalar(0),Vl.fromBufferAttribute(t,e),Hl.fromBufferAttribute(t,n),Gl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Hl,r.y),o.addScaledVector(Gl,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),$n.subVectors(t,e),bn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,n),hs.subVectors(r,n),Bl.subVectors(t,n);let l=cs.dot(Bl),c=hs.dot(Bl);if(l<=0&&c<=0)return e.copy(n);zl.subVectors(t,s);let h=cs.dot(zl),f=hs.dot(zl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(cs,o);kl.subVectors(t,r);let d=cs.dot(kl),p=hs.dot(kl);if(p>=0&&d<=p)return e.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(hs,a);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return zh.subVectors(r,s),a=(f-h)/(f-h+(d-p)),e.copy(s).addScaledVector(zh,a);let m=1/(g+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),co.subVectors(this.max,js),us.subVectors(t.a,js),fs.subVectors(t.b,js),ds.subVectors(t.c,js),pi.subVectors(fs,us),mi.subVectors(ds,fs),ki.subVectors(us,ds);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-ki.z,ki.y,pi.z,0,-pi.x,mi.z,0,-mi.x,ki.z,0,-ki.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-ki.y,ki.x,0];return!Wl(e,us,fs,ds,co)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,us,fs,ds,co))?!1:(ho.crossVectors(pi,mi),e=[ho.x,ho.y,ho.z],Wl(e,us,fs,ds,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new R,new R,new R,new R,new R,new R,new R,new R],Sn=new R,lo=new kn,us=new R,fs=new R,ds=new R,pi=new R,mi=new R,ki=new R,js=new R,co=new R,ho=new R,Vi=new R;function Wl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vi.fromArray(i,r);let a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Le=new R,uo=new Rt,yd=0,re=class extends zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends re{constructor(t,e,n){super(new Float32Array(t),e,n)}},Md=new kn,Qs=new R,Xl=new R,ni=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Xl)),this.expandByPoint(Qs.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bd=0,pn=new te,ql=new Ae,ps=new R,hn=new kn,tr=new kn,ze=new R,_e=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ad(t)?pr:dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return ql.lookAt(t),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(hn.min,tr.min),hn.expandByPoint(ze),ze.addVectors(hn.max,tr.max),hn.expandByPoint(ze)):(hn.expandByPoint(tr.min),hn.expandByPoint(tr.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),ze.add(ps)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new re(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new R,l[v]=new R;let c=new R,h=new R,f=new R,u=new Rt,d=new Rt,p=new Rt,_=new R,g=new R;function m(v,E,I){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,I),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,I),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(U),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(U),a[v].add(_),a[E].add(_),a[I].add(_),l[v].add(g),l[E].add(g),l[I].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,E=S.length;v<E;++v){let I=S[v],U=I.start,O=I.count;for(let z=U,P=U+O;z<P;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let T=new R,y=new R,b=new R,w=new R;function C(v){b.fromBufferAttribute(s,v),w.copy(b);let E=a[v];T.copy(E),T.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(w,E);let U=y.dot(l[v])<0?-1:1;o.setXYZW(v,T.x,T.y,T.z,U)}for(let v=0,E=S.length;v<E;++v){let I=S[v],U=I.start,O=I.count;for(let z=U,P=U+O;z<P;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new re(u,h,f)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},en=new R,mr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yl=new R,Sd=new R,wd=new Gt,wn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yl.subVectors(n,e).cross(Sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Yl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wd.getNormalMatrix(t),s=this.coplanarPoint(Yl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Td=0,En=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Ns,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ps=class extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ms,er=new R,gs=new R,_s=new R,xs=new Rt,nr=new Rt,Vu=new te,fo=new R,ir=new R,po=new R,kh=new Rt,Zl=new Rt,Vh=new Rt,gr=class extends Ae{constructor(t=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qo(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new mr(n,3,0,!1)),ms.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new Rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Vu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;mo(fo.set(-.5,-.5,0),_s,o,gs,s,r),mo(ir.set(.5,-.5,0),_s,o,gs,s,r),mo(po.set(.5,.5,0),_s,o,gs,s,r),kh.set(0,0),Zl.set(1,0),Vh.set(1,1);let a=t.ray.intersectTriangle(fo,ir,po,!1,er);if(a===null&&(mo(ir.set(-.5,.5,0),_s,o,gs,s,r),Zl.set(0,1),a=t.ray.intersectTriangle(fo,po,ir,!1,er),a===null))return;let l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:Qn.getInterpolation(er,fo,ir,po,kh,Zl,Vh,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mo(i,t,e,n,s,r){xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(nr.x=r*xs.x-s*xs.y,nr.y=s*xs.x+r*xs.y):nr.copy(xs),i.copy(t),i.x+=nr.x,i.y+=nr.y,i.applyMatrix4(Vu)}var jn=new R,$l=new R,go=new R,_o=new R,_r=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$l.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),_o.copy(this.origin).sub($l);let r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=_o.dot(this.direction),l=-_o.dot(go),c=_o.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy($l).addScaledVector(go,u),d}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,p=e.x-o.x,_=e.y-o.y,g=e.z-o.z,m=n.x-o.x,S=n.y-o.y,T=n.z-o.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(h),C,v,E,I,U,O,z,P,F,G,Y,et;if(y>=b&&y>=w?(E=l,O=f,F=p,et=m,l>=0?(C=c,v=h,I=u,U=d,z=_,P=g,G=S,Y=T):(C=h,v=c,I=d,U=u,z=g,P=_,G=T,Y=S)):b>=w?(E=c,O=u,F=_,et=S,c>=0?(C=h,v=l,I=d,U=f,z=g,P=p,G=T,Y=m):(C=l,v=h,I=f,U=d,z=p,P=g,G=m,Y=T)):(E=h,O=d,F=g,et=T,h>=0?(C=l,v=c,I=f,U=u,z=p,P=_,G=m,Y=S):(C=c,v=l,I=u,U=f,z=_,P=p,G=S,Y=m)),E===0)return null;let q=C/E,W=v/E,Z=1/E,ht=I-q*O,lt=U-W*O,Ht=z-q*F,Ft=P-W*F,Wt=G-q*et,J=Y-W*et,H=Wt*Ft-J*Ht,at=ht*J-lt*Wt,wt=Ht*lt-Ft*ht;if(s){if(H<0||at<0||wt<0)return null}else if((H<0||at<0||wt<0)&&(H>0||at>0||wt>0))return null;let ot=H+at+wt;if(ot===0)return null;let Tt=Z*(H*O+at*F+wt*et);return(ot>0?Tt<0:Tt>0)?null:this.at(Tt/ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ii=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hh=new te,Hi=new _r,xo=new ni,Gh=new R,vo=new R,yo=new R,Mo=new R,Jl=new R,bo=new R,Wh=new R,So=new R,Xt=class extends Ae{constructor(t=new _e,e=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Jl.fromBufferAttribute(f,t),o?bo.addScaledVector(Jl,h):bo.addScaledVector(Jl.sub(e),h))}e.add(bo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(xo.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(xo,Gh)===null||Hi.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,b=T;y<b;y+=3){let w=a.getX(y),C=a.getX(y+1),v=a.getX(y+2);s=wo(this,m,t,n,c,h,f,w,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let S=a.getX(g),T=a.getX(g+1),y=a.getX(g+2);s=wo(this,o,t,n,c,h,f,S,T,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],S=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=S,b=T;y<b;y+=3){let w=y,C=y+1,v=y+2;s=wo(this,m,t,n,c,h,f,w,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let S=g,T=g+1,y=g+2;s=wo(this,o,t,n,c,h,f,S,T,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Ed(i,t,e,n,s,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;So.copy(a),So.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(So);return c<e.near||c>e.far?null:{distance:c,point:So.clone(),object:i}}function wo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,vo),i.getVertexPosition(l,yo),i.getVertexPosition(c,Mo);let h=Ed(i,t,e,n,vo,yo,Mo,Wh);if(h){let f=new R;Qn.getBarycoord(Wh,vo,yo,Mo,f),s&&(h.uv=Qn.getInterpolatedAttribute(s,a,l,c,f,new Rt)),r&&(h.uv1=Qn.getInterpolatedAttribute(r,a,l,c,f,new Rt)),o&&(h.normal=Qn.getInterpolatedAttribute(o,a,l,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Qn.getNormal(vo,yo,Mo,u.normal),h.face=u,h.barycoord=f}return h}var xr=class extends rn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ke,h=ke,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new te,Xh=new te,To=[],qh=new kn,Ad=new te,sr=new Xt,rr=new ni,si=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ad)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),qh.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),rr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),t.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),Xh.multiplyMatrices(n,vs),sr.matrixWorld=Xh,sr.raycast(t,To);for(let o=0,a=To.length;o<a;o++){let l=To[o];l.instanceId=r,l.object=this,e.push(l)}To.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(s*this.count),s,this.count,xa,xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new ni,Cd=new Rt(.5,.5),Eo=new R,Is=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],S=r[12],T=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-o,d-h,m-p,b-S).normalize(),s[1].setComponents(c+o,d+h,m+p,b+S).normalize(),s[2].setComponents(c+a,d+f,m+_,b+T).normalize(),s[3].setComponents(c-a,d-f,m-_,b-T).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,m-g,b-y).normalize();else if(s[4].setComponents(c-l,d-u,m-g,b-y).normalize(),e===Tn)s[5].setComponents(c+l,d+u,m+g,b+y).normalize();else if(e===Es)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=Cd.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Eo.x=s.normal.x>0?t.max.x:t.min.x,Eo.y=s.normal.y>0?t.max.y:t.min.y,Eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Yo=class extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yh=new te,oc=new _r,Ao=new ni,Co=new R,yr=class extends Ae{constructor(t=new _e,e=new Yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;Yh.copy(s).invert(),oc.copy(t.ray).applyMatrix4(Yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,_=d;p<_;p++){let g=c.getX(p);Co.fromBufferAttribute(f,g),Zh(Co,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,_=d;p<_;p++)Co.fromBufferAttribute(f,p),Zh(Co,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zh(i,t,e,n,s,r,o){let a=oc.distanceSqToPoint(i);if(a<e){let l=new R;oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Mr=class extends rn{constructor(t=[],e=Ei,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vn=class extends rn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends rn{constructor(t,e,n=Rn,s,r,o,a=ke,l=ke,c,h=Bn,f=1){if(h!==Bn&&h!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Zo=class extends xi{constructor(t,e=Rn,n=Ei,s,r,o=ke,a=ke,l,c=Bn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},br=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vi=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(f,2));function p(_,g,m,S,T,y,b,w,C,v,E){let I=y/C,U=b/v,O=y/2,z=b/2,P=w/2,F=C+1,G=v+1,Y=0,et=0,q=new R;for(let W=0;W<G;W++){let Z=W*U-z;for(let ht=0;ht<F;ht++){let lt=ht*I-O;q[_]=lt*S,q[g]=Z*T,q[m]=P,c.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[m]=w>0?1:-1,h.push(q.x,q.y,q.z),f.push(ht/C),f.push(1-W/v),Y+=1}}for(let W=0;W<v;W++)for(let Z=0;Z<C;Z++){let ht=u+Z+F*W,lt=u+Z+F*(W+1),Ht=u+(Z+1)+F*(W+1),Ft=u+(Z+1)+F*W;l.push(ht,lt,Ft),l.push(lt,Ht,Ft),et+=6}a.addGroup(d,et,E),d+=et,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Hn=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,_=[],g=n/2,m=0;S(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function S(){let y=new R,b=new R,w=0,C=(e-t)/n;for(let v=0;v<=r;v++){let E=[],I=v/r,U=I*(e-t)+t;for(let O=0;O<=s;O++){let z=O/s,P=z*l+a,F=Math.sin(P),G=Math.cos(P);b.x=U*F,b.y=-I*n+g,b.z=U*G,f.push(b.x,b.y,b.z),y.set(F,C,G).normalize(),u.push(y.x,y.y,y.z),d.push(z,1-I),E.push(p++)}_.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){let I=_[E][v],U=_[E+1][v],O=_[E+1][v+1],z=_[E][v+1];(t>0||E!==0)&&(h.push(I,U,z),w+=3),(e>0||E!==r-1)&&(h.push(U,O,z),w+=3)}c.addGroup(m,w,0),m+=w}function T(y){let b=p,w=new Rt,C=new R,v=0,E=y===!0?t:e,I=y===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,g*I,0),u.push(0,I,0),d.push(.5,.5),p++;let U=p;for(let O=0;O<=s;O++){let P=O/s*l+a,F=Math.cos(P),G=Math.sin(P);C.x=E*G,C.y=g*I,C.z=E*F,f.push(C.x,C.y,C.z),u.push(0,I,0),w.x=F*.5+.5,w.y=G*.5*I+.5,d.push(w.x,w.y),p++}for(let O=0;O<s;O++){let z=b+O,P=U+O;y===!0?h.push(P,P+1,z):h.push(P+1,P,z),v+=3}c.addGroup(m,v,y===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xi=class i extends Hn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $o=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Rt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new te;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Tc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var $h=new R,Jh=new R,Kl=new Tc,jl=new Tc,Ql=new Tc,Sr=class extends $o{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jh.subVectors(s[0],s[1]).add(s[0]),c=Jh);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($h.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$h),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Kl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,_,g),jl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,_,g),Ql.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Kl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),jl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ql.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Kl.calc(l),jl.calc(l),Ql.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var gn=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let S=m*u-o;for(let T=0;T<c;T++){let y=T*f-r;p.push(y,-S,0),_.push(0,0,1),g.push(T/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let T=S+c*m,y=S+c*(m+1),b=S+1+c*(m+1),w=S+1+c*m;d.push(T,y,w),d.push(y,b,w)}this.setIndex(d),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var qi=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new R,u=new R,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let S=[],T=m/n,y=o+T*a,b=t*Math.cos(y),w=Math.sqrt(t*t-b*b),C=0;m===0&&o===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){let E=v/e,I=s+E*r;f.x=-w*Math.cos(I),f.y=b,f.z=w*Math.sin(I),p.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(E+C,1-T),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let T=h[m][S+1],y=h[m][S],b=h[m+1][S],w=h[m+1][S+1];(m!==0||o>0)&&d.push(T,y,w),(m!==n-1||l<Math.PI)&&d.push(y,b,w)}this.setIndex(d),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wr=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new R,d=new R,p=new R;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let m=0;m<=s;m++){let S=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(S),d.y=(t+e*Math.cos(g))*Math.sin(S),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,S=(s+1)*(_-1)+g-1,T=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(m,S,y),l.push(S,T,y)}this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Kh(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Kh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=ji(i[e]);for(let s in n)t[s]=n[s]}return t}function Kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ec(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var oi={clone:ji,merge:je},Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Mt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ls=class extends Te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xe=class extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yi=class extends xe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Tr=class extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jo=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ko=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ys(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jo=class extends Mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sc:r=t,a=2*e-n;break;case rc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:o=t,l=2*n-e;break;case rc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,S=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,T=(-1-d)*g+(1.5+d)*_+.5*p,y=d*g-d*_;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+S*o[c+b]+T*o[l+b]+y*o[f+b];return r}},Qo=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},ta=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ea=class extends Mi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(s-e),_=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*p;return r}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=d*u+p*2,S=f[m],T=f[m+1],y=t*u+p*2,b=h[y],w=h[y+1],C=Dd(n,e,S,b,s);r[p]=Hu(C,_,T,w,g)}return r}};function Hu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ld(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Dd(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Hu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Ld(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ys(e,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ys(t.times,Array),values:ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),tc(t.settings)&&(n.settings={inTangents:ys(t.settings.inTangents,Array),outTangents:ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;tc(this.settings)&&(jh(this.settings.inTangents,t),jh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Vt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ld(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let _=e[f+p];if(_!==e[u+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Vo;var bi=class extends un{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=or;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};na.prototype.ValueTypeName="color";var ia=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};ia.prototype.ValueTypeName="number";var sa=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Er=class extends un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new sa(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends un{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=or;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};ra.prototype.ValueTypeName="vector";var oa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gu=new oa,aa=class{constructor(t){this.manager=t!==void 0?t:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Yi=class extends Ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ec=new te,Qh=new R,tu=new R,Ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Es||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ro=new R,Po=new sn,Nn=new R,Cr=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ro,Po,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ro,Po,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new R,eu=new Rt,nu=new Rt,Ne=class extends Cr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,eu,nu),e.subVectors(nu,eu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ac=class extends Ar{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}},Zi=class extends Ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ac}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},wi=class extends Cr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lc=class extends Ar{constructor(){super(new wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gn=class extends Ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new lc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ms=-90,bs=1,la=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Ms,bs,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Ms,bs,t,e);r.layers=this.layers,this.add(r);let o=new Ne(Ms,bs,t,e);o.layers=this.layers,this.add(o);let a=new Ne(Ms,bs,t,e);a.layers=this.layers,this.add(a);let l=new Ne(Ms,bs,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Ms,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ca=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Rr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ud.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ud(){this._document.hidden===!1&&this.reset()}var Ac="\\[\\]\\.:\\/",Nd=new RegExp("["+Ac+"]","g"),Cc="[^"+Ac+"]",Fd="[^"+Ac.replace("\\.","")+"]",Od=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Bd=/(WCOD+)?/.source.replace("WCOD",Fd),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Vd=new RegExp("^"+Od+Bd+zd+kd+"$"),Hd=["material","materials","bones","map"],cc=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nd,"")}static parseTrackName(t){let e=Vd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=cc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yx=new Float32Array(1);var Uc=class Uc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Uc.prototype.isMatrix2=!0;var hc=Uc;function Rc(i,t,e,n){let s=Gd(n);switch(e){case Mc:return i*t;case xa:return i*t/s.components*s.byteLength;case va:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case ya:return i*t*2/s.components*s.byteLength;case bc:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Ma:return i*t*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case ba:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case Aa:case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Hr:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qa:case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $a:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gr:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gd(i){switch(i){case on:case _c:return{byteLength:1,components:1};case Fs:case xc:case Fe:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case Rn:case ma:case xn:return{byteLength:4,components:1};case vc:case yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ff(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,_p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Qm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,e0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,u0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,m0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:Zd,alphamap_pars_fragment:$d,alphatest_fragment:Jd,alphatest_pars_fragment:Kd,aomap_fragment:jd,aomap_pars_fragment:Qd,batching_pars_vertex:tp,batching_vertex:ep,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:op,clipping_planes_fragment:ap,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:fp,color_pars_vertex:dp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:_p,displacementmap_pars_vertex:xp,displacementmap_vertex:vp,emissivemap_fragment:yp,emissivemap_pars_fragment:Mp,colorspace_fragment:bp,colorspace_pars_fragment:Sp,envmap_fragment:wp,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ep,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Bp,envmap_vertex:Cp,fog_vertex:Rp,fog_pars_vertex:Pp,fog_fragment:Ip,fog_pars_fragment:Lp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Fp,lights_pars_begin:Op,lights_toon_fragment:zp,lights_toon_pars_fragment:kp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,lightprobes_pars_fragment:Zp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:jp,map_fragment:Qp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:fm,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:ym,packing:Mm,premultiplied_alpha_fragment:bm,project_vertex:Sm,dithering_fragment:wm,dithering_pars_fragment:Tm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Rm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Fm,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Vm,uv_pars_fragment:Hm,uv_pars_vertex:Gm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:Zm,backgroundCube_frag:$m,cube_vert:Jm,cube_frag:Km,depth_vert:jm,depth_frag:Qm,distance_vert:t0,distance_frag:e0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:l0,meshlambert_frag:c0,meshmatcap_vert:h0,meshmatcap_frag:u0,meshnormal_vert:f0,meshnormal_frag:d0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:x0,meshtoon_frag:v0,points_vert:y0,points_frag:M0,shadow_vert:b0,shadow_frag:S0,sprite_vert:w0,sprite_frag:T0},_t={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Xn={basic:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:je([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:je([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:je([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:je([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:je([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:je([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:je([_t.common,_t.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:je([_t.lights,_t.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Xn.physical={uniforms:je([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var tl={r:0,b:0,g:0},E0=new te,df=new Gt;df.set(-1,0,0,0,1,0,0,0,1);function A0(i,t,e,n,s,r){let o=new Mt(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let y=S.backgroundBlurriness>0;T=t.get(T,y)}return T}function p(S){let T=!1,y=d(S);y===null?g(o,a):y&&y.isColor&&(g(y,1),T=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,T){let y=d(T);y&&(y.isCubeTexture||y.mapping===Fr)?(c===void 0&&(c=new Xt(new vi(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:ji(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(df),c.material.toneMapped=jt.getTransfer(y.colorSpace)!==ae,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Xt(new gn(2,2),new Te({name:"BackgroundMaterial",uniforms:ji(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=jt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,T){S.getRGB(tl,Ec(i)),e.buffers.color.setClear(tl.r,tl.g,tl.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,T=1){o.set(S),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:p,addToRenderList:_,dispose:m}}function C0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(U,O,z,P,F){let G=!1,Y=f(U,P,z,O);r!==Y&&(r=Y,c(r.object)),G=d(U,P,z,F),G&&p(U,P,z,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(U,O,z,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function f(U,O,z,P){let F=P.wireframe===!0,G=n[O.id];G===void 0&&(G={},n[O.id]=G);let Y=U.isInstancedMesh===!0?U.id:0,et=G[Y];et===void 0&&(et={},G[Y]=et);let q=et[z.id];q===void 0&&(q={},et[z.id]=q);let W=q[F];return W===void 0&&(W=u(l()),q[F]=W),W}function u(U){let O=[],z=[],P=[];for(let F=0;F<e;F++)O[F]=0,z[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:P,object:U,attributes:{},index:null}}function d(U,O,z,P){let F=r.attributes,G=O.attributes,Y=0,et=z.getAttributes();for(let q in et)if(et[q].location>=0){let Z=F[q],ht=G[q];if(ht===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ht=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ht=U.instanceColor)),Z===void 0||Z.attribute!==ht||ht&&Z.data!==ht.data)return!0;Y++}return r.attributesNum!==Y||r.index!==P}function p(U,O,z,P){let F={},G=O.attributes,Y=0,et=z.getAttributes();for(let q in et)if(et[q].location>=0){let Z=G[q];Z===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor));let ht={};ht.attribute=Z,Z&&Z.data&&(ht.data=Z.data),F[q]=ht,Y++}r.attributes=F,r.attributesNum=Y,r.index=P}function _(){let U=r.newAttributes;for(let O=0,z=U.length;O<z;O++)U[O]=0}function g(U){m(U,0)}function m(U,O){let z=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;z[U]=1,P[U]===0&&(i.enableVertexAttribArray(U),P[U]=1),F[U]!==O&&(i.vertexAttribDivisor(U,O),F[U]=O)}function S(){let U=r.newAttributes,O=r.enabledAttributes;for(let z=0,P=O.length;z<P;z++)O[z]!==U[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function T(U,O,z,P,F,G,Y){Y===!0?i.vertexAttribIPointer(U,O,z,F,G):i.vertexAttribPointer(U,O,z,P,F,G)}function y(U,O,z,P){_();let F=P.attributes,G=z.getAttributes(),Y=O.defaultAttributeValues;for(let et in G){let q=G[et];if(q.location>=0){let W=F[et];if(W===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&(W=U.instanceColor)),W!==void 0){let Z=W.normalized,ht=W.itemSize,lt=t.get(W);if(lt===void 0)continue;let Ht=lt.buffer,Ft=lt.type,Wt=lt.bytesPerElement,J=Ft===i.INT||Ft===i.UNSIGNED_INT||W.gpuType===ma;if(W.isInterleavedBufferAttribute){let H=W.data,at=H.stride,wt=W.offset;if(H.isInstancedInterleavedBuffer){for(let ot=0;ot<q.locationSize;ot++)m(q.location+ot,H.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ot=0;ot<q.locationSize;ot++)g(q.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let ot=0;ot<q.locationSize;ot++)T(q.location+ot,ht/q.locationSize,Ft,Z,at*Wt,(wt+ht/q.locationSize*ot)*Wt,J)}else{if(W.isInstancedBufferAttribute){for(let H=0;H<q.locationSize;H++)m(q.location+H,W.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let H=0;H<q.locationSize;H++)g(q.location+H);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let H=0;H<q.locationSize;H++)T(q.location+H,ht/q.locationSize,Ft,Z,ht*Wt,ht/q.locationSize*H*Wt,J)}}else if(Y!==void 0){let Z=Y[et];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(q.location,Z);break;case 3:i.vertexAttrib3fv(q.location,Z);break;case 4:i.vertexAttrib4fv(q.location,Z);break;default:i.vertexAttrib1fv(q.location,Z)}}}}S()}function b(){E();for(let U in n){let O=n[U];for(let z in O){let P=O[z];for(let F in P){let G=P[F];for(let Y in G)h(G[Y].object),delete G[Y];delete P[F]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let O=n[U.id];for(let z in O){let P=O[z];for(let F in P){let G=P[F];for(let Y in G)h(G[Y].object),delete G[Y];delete P[F]}}delete n[U.id]}function C(U){for(let O in n){let z=n[O];for(let P in z){let F=z[P];if(F[U.id]===void 0)continue;let G=F[U.id];for(let Y in G)h(G[Y].object),delete G[Y];delete F[U.id]}}}function v(U){for(let O in n){let z=n[O],P=U.isInstancedMesh===!0?U.id:0,F=z[P];if(F!==void 0){for(let G in F){let Y=F[G];for(let et in Y)h(Y[et].object),delete Y[et];delete F[G]}delete z[P],Object.keys(z).length===0&&delete n[O]}}}function E(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function R0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function P0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let v=C===Fe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==on&&C!==xn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:w}}function I0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new wn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,T=S*4,y=m.clippingState||null;l.value=y,y=h(p,u,T,d);for(let b=0;b!==T;++b)y[b]=e[b];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=d+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,y=d;T!==_;++T,y+=4)o.copy(f[T]).applyMatrix4(S,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var zs=4,L0=6,D0=20,U0=256,Xr=new wi,Wu=new Mt,Nc=null,Fc=0,Oc=0,Bc=!1,N0=new R,Qi=new R,Ii=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=N0}=r;Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Fc,Oc),this._renderer.xr.enabled=Bc,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Fe,format:vn,colorSpace:ar,depthBuffer:!1},s=Xu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=F0(r)),this._blurMaterial=B0(r,t,e),this._ggxMaterial=O0(r,t,e)}return s}_compileMaterial(t){let e=new Xt(new _e,t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Wu),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new vi,new ii({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(Wu),m=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;Bs(s,y*b,T>2?b:0,b,b),f.setRenderTarget(s),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-zs?n-p+zs:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Bs(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(a,Xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Bs(t,g,m,3*_,2*_),s.setRenderTarget(t),s.render(a,Xr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-zs?s-this._lodMax+zs:0),u=4*(this._cubeSize-h);Bs(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Xr)}};function F0(i){let t=[],e=[],n=i,s=i-zs+1+L0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let m=0;m<f;m++){let S=m%3*2/3-1,T=m>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];p.set(y,d*u*m);for(let b=0;b<u;b++){let w=h[b*2]*2-1,C=h[b*2+1]*2-1;m===0?Qi.set(1,C,w):m===1?Qi.set(-w,1,-C):m===2?Qi.set(-w,C,1):m===3?Qi.set(-1,C,-w):m===4?Qi.set(-w,-1,C):Qi.set(w,C,-1),Qi.toArray(_,(m*u+b)*d)}}let g=new _e;g.setAttribute("position",new re(p,d)),g.setAttribute("outputDirection",new re(_,d)),e.push(new Xt(g,null)),n>zs&&n--}return{lodMeshes:e,sizeLods:t}}function Xu(i,t,e){let n=new Re(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function O0(i,t,e){return new Te({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function B0(i,t,e){return new Te({name:"SphericalGaussianBlur",defines:{SAMPLES:D0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function qu(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Yu(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var nl=class extends Re{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:_n});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=We),new la(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function z0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===fa||d===da)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new nl(p.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,p=d===fa||d===da,_=d===Ei||d===Ki;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ii(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Ii(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===fa?u.mapping=Ei:d===da&&(u.mapping=Ki),u}function l(u){let d=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function k0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Wi("WebGLRenderer: "+n+" extension not supported."),s}}}function V0(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,_=0;if(p===void 0)return;if(d!==null){let S=d.array;_=d.version;for(let T=0,y=S.length;T<y;T+=3){let b=S[T+0],w=S[T+1],C=S[T+2];u.push(b,w,w,C,C,b)}}else{let S=p.array;_=p.version;for(let T=0,y=S.length/3-1;T<y;T+=3){let b=T+0,w=T+1,C=T+2;u.push(b,w,w,C,C,b)}}let g=new(p.count>=65535?pr:dr)(u,1);g.version=_;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function H0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function G0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function W0(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],T=0;d===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let y=a.attributes.position.count*T,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*b*4*f),C=new ur(w,y,b,f);C.type=xn,C.needsUpdate=!0;let v=T*4;for(let I=0;I<f;I++){let U=g[I],O=m[I],z=S[I],P=y*b*4*I;for(let F=0;F<U.count;F++){let G=F*v;d===!0&&(s.fromBufferAttribute(U,F),w[P+G+0]=s.x,w[P+G+1]=s.y,w[P+G+2]=s.z,w[P+G+3]=0),p===!0&&(s.fromBufferAttribute(O,F),w[P+G+4]=s.x,w[P+G+5]=s.y,w[P+G+6]=s.z,w[P+G+7]=0),_===!0&&(s.fromBufferAttribute(z,F),w[P+G+8]=s.x,w[P+G+9]=s.y,w[P+G+10]=s.z,w[P+G+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new Rt(y,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function X0(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var q0={[Pr]:"LINEAR_TONE_MAPPING",[Ir]:"REINHARD_TONE_MAPPING",[Lr]:"CINEON_TONE_MAPPING",[ri]:"ACES_FILMIC_TONE_MAPPING",[Ur]:"AGX_TONE_MAPPING",[Nr]:"NEUTRAL_TONE_MAPPING",[Dr]:"CUSTOM_TONE_MAPPING"};function Y0(i,t,e,n,s,r){let o=new Re(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new _e;c.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ue([0,2,0,0,2,0],2));let h=new Ls({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Xt(c,h),u=new wi(-1,1,1,-1,0,1),d=null,p=null,_=!1,g,m=null,S=[],T=!1;this.setSize=function(y,b){o.setSize(y,b),a!==null&&a.setSize(y,b),l!==null&&l.setSize(y,b);for(let w=0;w<S.length;w++){let C=S[w];C.setSize&&C.setSize(y,b)}},this.setEffects=function(y){S=y,T=S.length>0&&S[0].isRenderPass===!0;let b=o.width,w=o.height;S.length>0&&a===null&&(a=new Re(b,w,{type:Fe,depthBuffer:!1,stencilBuffer:!1}),l=new Re(b,w,{type:Fe,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let v=S[C];v.setSize&&v.setSize(b,w)}},this.begin=function(y,b){if(_||y.toneMapping===Cn&&S.length===0)return!1;if(m=b,b!==null){let w=b.width,C=b.height;(o.width!==w||o.height!==C)&&this.setSize(w,C)}return T===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=Cn,!0},this.hasRenderPass=function(){return T},this.end=function(y,b){y.toneMapping=g,_=!0;let w=o,C=a;for(let v=0;v<S.length;v++){let E=S[v];E.enabled!==!1&&(E.render(y,C,w,b),E.needsSwap!==!1&&(w=C,C=C===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,h.defines={},jt.getTransfer(d)===ae&&(h.defines.SRGB_TRANSFER="");let v=q0[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(f,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var pf=new rn,Vc=new xi(1,1),mf=new ur,gf=new Xo,_f=new Mr,Zu=[],$u=[],Ju=new Float32Array(16),Ku=new Float32Array(9),ju=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sl(i,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function j0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Be(e,n)}}function Q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Ku.set(n),i.uniformMatrix3fv(this.addr,!1,Ku),Be(e,n)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),Be(e,n)}}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vc.compareFunction=e.isReversedDepthBuffer()?Qa:ja,r=Vc):r=pf,e.setTexture2D(t||r,s)}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gf,s)}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_f,s)}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mf,s)}function dg(i){switch(i){case 5126:return Z0;case 35664:return $0;case 35665:return J0;case 35666:return K0;case 35674:return j0;case 35675:return Q0;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}function pg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function gg(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function xg(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vg(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yg(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mg(i,t){i.uniform1iv(this.addr,t)}function bg(i,t){i.uniform2iv(this.addr,t)}function Sg(i,t){i.uniform3iv(this.addr,t)}function wg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function Ag(i,t){i.uniform3uiv(this.addr,t)}function Cg(i,t){i.uniform4uiv(this.addr,t)}function Rg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Vc:o=pf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Pg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gf,r[o])}function Ig(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_f,r[o])}function Lg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mf,r[o])}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return Mg;case 35667:case 35671:return bg;case 35668:case 35672:return Sg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Eg;case 36295:return Ag;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Lg}}var Hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}},Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}},Wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function Qu(i,t){i.seq.push(t),i.map[t.id]=t}function Ug(i,t,e){let n=i.name,s=n.length;for(zc.lastIndex=0;;){let r=zc.exec(n),o=zc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qu(e,c===void 0?new Hc(a,i,t):new Gc(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Wc(a),Qu(e,f)),e=f}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ug(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function tf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ng=37297,Fg=0;function Og(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ef=new Gt;function Bg(i){jt._getMatrix(ef,jt.workingColorSpace,i);let t=`mat3( ${ef.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(t),a)}else return r}function zg(i,t){let e=Bg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var kg={[Pr]:"Linear",[Ir]:"Reinhard",[Lr]:"Cineon",[ri]:"ACESFilmic",[Ur]:"AgX",[Nr]:"Neutral",[Dr]:"Custom"};function Vg(i,t){let e=kg[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var el=new R;function Hg(){jt.getLuminanceCoefficients(el);let i=el.x.toFixed(4),t=el.y.toFixed(4),e=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Wg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yr(i){return i!==""}function sf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(qg,Zg)}var Yg=new Map;function Zg(i,t){let e=Jt[t];if(e===void 0){let n=Yg.get(t);if(n!==void 0)e=Jt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xc(e)}var $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(i){return i.replace($g,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function af(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Kg={[$i]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function jg(i){return Kg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qg={[Ei]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function t_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var e_={[Ki]:"ENVMAP_MODE_REFRACTION"};function n_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":e_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var i_={[ua]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[Tu]:"ENVMAP_BLENDING_ADD"};function s_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":i_[i.combine]||"ENVMAP_BLENDING_NONE"}function r_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jg(e),c=t_(e),h=n_(e),f=s_(e),u=r_(e),d=Gg(e),p=Wg(r),_=s.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(g=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),Hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Xc(o),o=sf(o,e),o=rf(o,e),a=Xc(a),a=sf(a,e),a=rf(a,e),o=of(o),a=of(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=S+g+o,y=S+m+a,b=tf(s,s.VERTEX_SHADER,T),w=tf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,b),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(U){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(b)||"",P=s.getShaderInfoLog(w)||"",F=O.trim(),G=z.trim(),Y=P.trim(),et=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,w);else{let W=nf(s,b,"vertex"),Z=nf(s,w,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+W+`
`+Z)}else F!==""?kt("WebGLProgram: Program Info Log:",F):(G===""||Y==="")&&(q=!1);q&&(U.diagnostics={runnable:et,programLog:F,vertexShader:{log:G,prefix:g},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(b),s.deleteShader(w),v=new ks(s,_),E=Xg(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Ng)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var a_=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yc(t),e.set(t,n)),n}},Yc=class{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}};function l_(i){return i===Ri||i===Hr||i===Gr}function c_(i,t,e,n,s,r){let o=new fr,a=new qc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,I,U,O,z){let P=U.fog,F=O.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,et=t.get(v.envMap||G,Y),q=et&&et.mapping===Fr?et.image.height:null,W=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&kt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ht=Z!==void 0?Z.length:0,lt=0;F.morphAttributes.position!==void 0&&(lt=1),F.morphAttributes.normal!==void 0&&(lt=2),F.morphAttributes.color!==void 0&&(lt=3);let Ht,Ft,Wt,J;if(W){let Me=Xn[W];Ht=Me.vertexShader,Ft=Me.fragmentShader}else{Ht=v.vertexShader,Ft=v.fragmentShader;let Me=a.getVertexShaderStage(v),ce=a.getFragmentShaderStage(v);a.update(v,Me,ce),Wt=Me.id,J=ce.id}let H=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),wt=O.isInstancedMesh===!0,ot=O.isBatchedMesh===!0,Tt=!!v.map,zt=!!v.matcap,Nt=!!et,Yt=!!v.aoMap,le=!!v.lightMap,Ot=!!v.bumpMap&&v.wireframe===!1,oe=!!v.normalMap,fe=!!v.displacementMap,Ge=!!v.emissiveMap,ye=!!v.metalnessMap,Ce=!!v.roughnessMap,N=v.anisotropy>0,Ye=v.clearcoat>0,de=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,B=v.sheen>0,X=v.transmission>0,K=N&&!!v.anisotropyMap,ct=Ye&&!!v.clearcoatMap,ut=Ye&&!!v.clearcoatNormalMap,j=Ye&&!!v.clearcoatRoughnessMap,nt=x&&!!v.iridescenceMap,ft=x&&!!v.iridescenceThicknessMap,Lt=B&&!!v.sheenColorMap,gt=B&&!!v.sheenRoughnessMap,dt=!!v.specularMap,Dt=!!v.specularColorMap,Bt=!!v.specularIntensityMap,qt=X&&!!v.transmissionMap,D=X&&!!v.thicknessMap,pt=!!v.gradientMap,tt=!!v.alphaMap,mt=v.alphaTest>0,yt=!!v.alphaHash,rt=!!v.extensions,Ut=Cn;v.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ut=i.toneMapping);let Pt={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:Ht,fragmentShader:Ft,defines:v.defines,customVertexShaderID:Wt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ot,batchingColor:ot&&O._colorsTexture!==null,instancing:wt,instancingColor:wt&&O.instanceColor!==null,instancingMorph:wt&&O.morphTexture!==null,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Tt,matcap:zt,envMap:Nt,envMapMode:Nt&&et.mapping,envMapCubeUVHeight:q,aoMap:Yt,lightMap:le,bumpMap:Ot,normalMap:oe,displacementMap:fe,emissiveMap:Ge,normalMapObjectSpace:oe&&v.normalMapType===Cu,normalMapTangentSpace:oe&&v.normalMapType===Wr,packedNormalMap:oe&&v.normalMapType===Wr&&l_(v.normalMap.format),metalnessMap:ye,roughnessMap:Ce,anisotropy:N,anisotropyMap:K,clearcoat:Ye,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:j,dispersion:de,retroreflection:A,iridescence:x,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:B,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:dt,specularColorMap:Dt,specularIntensityMap:Bt,transmission:X,transmissionMap:qt,thicknessMap:D,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:yt,combine:v.combine,mapUv:Tt&&p(v.map.channel),aoMapUv:Yt&&p(v.aoMap.channel),lightMapUv:le&&p(v.lightMap.channel),bumpMapUv:Ot&&p(v.bumpMap.channel),normalMapUv:oe&&p(v.normalMap.channel),displacementMapUv:fe&&p(v.displacementMap.channel),emissiveMapUv:Ge&&p(v.emissiveMap.channel),metalnessMapUv:ye&&p(v.metalnessMap.channel),roughnessMapUv:Ce&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:ct&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:gt&&p(v.sheenRoughnessMap.channel),specularMapUv:dt&&p(v.specularMap.channel),specularColorMapUv:Dt&&p(v.specularColorMap.channel),specularIntensityMapUv:Bt&&p(v.specularIntensityMap.channel),transmissionMapUv:qt&&p(v.transmissionMap.channel),thicknessMapUv:D&&p(v.thicknessMap.channel),alphaMapUv:tt&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(oe||N),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Tt||tt),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&oe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:at,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:lt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Tt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:Ge&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ke,flipSided:v.side===Xe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(E,v),S(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function T(v){let E=d[v.type],I;if(E){let U=Xn[E];I=oi.clone(U.uniforms)}else I=v.uniforms;return I}function y(v,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new o_(i,E,v,s),c.push(I),h.set(E,I)),I}function b(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function h_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,_,g,m){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=p,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=g,S.group=m),t++,S}function l(u,d,p,_,g,m,S){S.reversedDepth===!0&&(g=-g);let T=a(u,d,p,_,g,m);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):e.push(T)}function c(u,d,p,_,g,m){let S=a(u,d,p,_,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||u_),n.length>1&&n.sort(d||lf),s.length>1&&s.sort(d||lf)}function f(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function f_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cf,i.set(n,[o])):s>=r.length?(o=new cf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Mt};break;case"SpotLight":e={position:new R,direction:new R,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function p_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var m_=0;function g_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function __(i){let t=new d_,e=p_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new te,o=new te;function a(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,S=0,T=0,y=0,b=0,w=0,C=0,v=0,E=0,I=0;c.sort(g_);for(let O=0,z=c.length;O<z;O++){let P=c[O],F=P.color,G=P.intensity,Y=P.distance,et=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ri?et=P.shadow.map.texture:et=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*G,f+=F.g*G,u+=F.b*G;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],G);I++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,Z=e.get(P);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=et;let ht=W.getViewportCount();for(let lt=0;lt<ht;lt++)n.sunShadowMatrix[_+lt]=W.getMatrix(lt),n.sunShadowCascade[_+lt]=W._cascadeData[lt];_+=ht,p++}n.sun[d]=q,d++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let W=P.shadow,Z=e.get(P);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=P.shadow.matrix,b++}n.directional[g]=q,g++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(G),q.distance=Y,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[S]=q;let W=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,W.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[S]=W.matrix,P.castShadow){let Z=e.get(P);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=et,C++}S++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(F).multiplyScalar(G),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=q,T++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let W=P.shadow,Z=e.get(P);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=q,m++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(G),q.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[y]=q,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let U=n.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==S||U.rectAreaLength!==T||U.hemiLength!==y||U.numSunShadows!==p||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==C||U.numSpotMaps!==v||U.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=T,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,U.sunLength=d,U.directionalLength=g,U.pointLength=m,U.spotLength=S,U.rectAreaLength=T,U.hemiLength=y,U.numSunShadows=p,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=C,U.numSpotMaps=v,U.numLightProbes=I,n.version=m_++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let y=c[S];if(y.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(y.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function hf(i){let t=new __(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function x_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hf(i),t.set(s,[a])):r>=o.length?(a=new hf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],b_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],uf=new te,qr=new R,kc=new R;function S_(i,t,e){let n=new Is,s=new Rt,r=new Rt,o=new Ee,a=new Jo,l=new Ko,c={},h=e.maxTextureSize,f={[Ti]:Xe,[Xe]:Ti,[Ke]:Ke},u=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:v_,fragmentShader:y_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new _e;p.setAttribute("position",new re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$i;let m=this.type;this.render=function(w,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===ru&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$i);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),O=i.state;O.setBlending(_n),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=m!==this.type;z&&C.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=w.length;P<F;P++){let G=w[P],Y=G.shadow;if(Y===void 0){kt("WebGLShadowMap:",G,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let et=Y.getFrameExtents();s.multiply(et),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,Y.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Us){if(G.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Re(s.x,s.y,{format:Ri,type:Fe,minFilter:We,magFilter:We,generateMipmaps:!1}),Y.map.texture.name=G.name+".shadowMap",Y.map.depthTexture=new xi(s.x,s.y,xn),Y.map.depthTexture.name=G.name+".shadowMapDepth",Y.map.depthTexture.format=Bn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ke,Y.map.depthTexture.magFilter=ke}else G.isPointLight?(Y.map=new nl(s.x),Y.map.depthTexture=new Zo(s.x,Rn)):(Y.map=new Re(s.x,s.y),Y.map.depthTexture=new xi(s.x,s.y,Rn)),Y.map.depthTexture.name=G.name+".shadowMap",Y.map.depthTexture.format=Bn,this.type===$i?(Y.map.depthTexture.compareFunction=q?Qa:ja,Y.map.depthTexture.minFilter=We,Y.map.depthTexture.magFilter=We):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ke,Y.map.depthTexture.magFilter=ke);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let W=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();G.isPointLight!==!0&&Y.updateMatrices(G,v);for(let Z=0;Z<W;Z++){let ht=Y.getCamera(Z);if(G.isPointLight){let lt=Y.camera,Ht=Y.matrix,Ft=G.distance||lt.far;Ft!==lt.far&&(lt.far=Ft,lt.updateProjectionMatrix()),qr.setFromMatrixPosition(G.matrixWorld),lt.position.copy(qr),kc.copy(lt.position),kc.add(M_[Z]),lt.up.copy(b_[Z]),lt.lookAt(kc),lt.updateMatrixWorld(),Ht.makeTranslation(-qr.x,-qr.y,-qr.z),uf.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(uf,lt.coordinateSystem,lt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(Y.map),i.clear());let lt=Y.getViewport(Z);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),O.viewport(o)}n=Y.getFrustum(Z),y(C,v,ht,G,this.type)}Y.isPointLightShadow!==!0&&this.type===Us&&S(Y,v),Y.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,I,U)};function S(w,C){let v=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Re(s.x,s.y,{format:Ri,type:Fe}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,v,d,_,null)}function T(w,C,v,E){let I=null,U=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)I=U;else if(I=v.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=I.uuid,z=C.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let F=P[z];F===void 0&&(F=I.clone(),P[z]=F,C.addEventListener("dispose",b)),I=F}if(I.visible=C.visible,I.wireframe=C.wireframe,E===Us?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:f[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=v}return I}function y(w,C,v,E,I){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Us)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let z=t.update(w),P=w.material;if(Array.isArray(P)){let F=z.groups;for(let G=0,Y=F.length;G<Y;G++){let et=F[G],q=P[et.materialIndex];if(q&&q.visible){let W=T(w,q,E,I);w.onBeforeShadow(i,w,C,v,z,W,et),i.renderBufferDirect(v,null,z,W,w,et),w.onAfterShadow(i,w,C,v,z,W,et)}}}else if(P.visible){let F=T(w,P,E,I);w.onBeforeShadow(i,w,C,v,z,F,null),i.renderBufferDirect(v,null,z,F,w,null),w.onAfterShadow(i,w,C,v,z,F,null)}}let O=w.children;for(let z=0,P=O.length;z<P;z++)y(O[z],C,v,E,I)}function b(w){w.target.removeEventListener("dispose",b);for(let v in c){let E=c[v],I=w.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function w_(i,t){function e(){let D=!1,pt=new Ee,tt=null,mt=new Ee(0,0,0,0);return{setMask:function(yt){tt!==yt&&!D&&(i.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){D=yt},setClear:function(yt,rt,Ut,Pt,Me){Me===!0&&(yt*=Pt,rt*=Pt,Ut*=Pt),pt.set(yt,rt,Ut,Pt),mt.equals(pt)===!1&&(i.clearColor(yt,rt,Ut,Pt),mt.copy(pt))},reset:function(){D=!1,tt=null,mt.set(-1,0,0,0)}}}function n(){let D=!1,pt=!1,tt=null,mt=null,yt=null;return{setReversed:function(rt){if(pt!==rt){let Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),pt=rt;let Pt=yt;yt=null,this.setClear(Pt)}},getReversed:function(){return pt},setTest:function(rt){rt?H(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!D&&(i.depthMask(rt),tt=rt)},setFunc:function(rt){if(pt&&(rt=zu[rt]),mt!==rt){switch(rt){case Do:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=rt}},setLocked:function(rt){D=rt},setClear:function(rt){yt!==rt&&(yt=rt,pt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){D=!1,tt=null,mt=null,yt=null,pt=!1}}}function s(){let D=!1,pt=null,tt=null,mt=null,yt=null,rt=null,Ut=null,Pt=null,Me=null;return{setTest:function(ce){D||(ce?H(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(ce){pt!==ce&&!D&&(i.stencilMask(ce),pt=ce)},setFunc:function(ce,yn,Dn){(tt!==ce||mt!==yn||yt!==Dn)&&(i.stencilFunc(ce,yn,Dn),tt=ce,mt=yn,yt=Dn)},setOp:function(ce,yn,Dn){(rt!==ce||Ut!==yn||Pt!==Dn)&&(i.stencilOp(ce,yn,Dn),rt=ce,Ut=yn,Pt=Dn)},setLocked:function(ce){D=ce},setClear:function(ce){Me!==ce&&(i.clearStencil(ce),Me=ce)},reset:function(){D=!1,pt=null,tt=null,mt=null,yt=null,rt=null,Ut=null,Pt=null,Me=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,S=null,T=null,y=null,b=null,w=null,C=null,v=new Mt(0,0,0),E=0,I=!1,U=null,O=null,z=null,P=null,F=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,et=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=et>=2);let W=null,Z={},ht=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),Ht=new Ee().fromArray(ht),Ft=new Ee().fromArray(lt);function Wt(D,pt,tt,mt){let yt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(D,rt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<tt;Ut++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(pt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return rt}let J={};J[i.TEXTURE_2D]=Wt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(ws),Ot(!1),oe(uc),H(i.CULL_FACE),Yt(_n);function H(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function at(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function wt(D,pt){return u[D]!==pt?(i.bindFramebuffer(D,pt),u[D]=pt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function ot(D,pt){let tt=p,mt=!1;if(D){tt=d.get(pt),tt===void 0&&(tt=[],d.set(pt,tt));let yt=D.textures;if(tt.length!==yt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ut=yt.length;rt<Ut;rt++)tt[rt]=i.COLOR_ATTACHMENT0+rt;tt.length=yt.length,mt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,mt=!0);mt&&i.drawBuffers(tt)}function Tt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let zt={[Ji]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};zt[cu]=i.MIN,zt[hu]=i.MAX;let Nt={[uu]:i.ZERO,[fu]:i.ONE,[du]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[mu]:i.DST_ALPHA,[pu]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[xu]:i.ONE_MINUS_DST_COLOR,[gu]:i.ONE_MINUS_DST_ALPHA,[yu]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[bu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(D,pt,tt,mt,yt,rt,Ut,Pt,Me,ce){if(D===_n){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(H(i.BLEND),g=!0),D!==ou){if(D!==m||ce!==I){if((S!==Ji||b!==Ji)&&(i.blendEquation(i.FUNC_ADD),S=Ji,b=Ji),ce)switch(D){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case An:i.blendFunc(i.ONE,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",D);break}else switch(D){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case An:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fc:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",D);break}T=null,y=null,w=null,C=null,v.set(0,0,0),E=0,m=D,I=ce}return}yt=yt||pt,rt=rt||tt,Ut=Ut||mt,(pt!==S||yt!==b)&&(i.blendEquationSeparate(zt[pt],zt[yt]),S=pt,b=yt),(tt!==T||mt!==y||rt!==w||Ut!==C)&&(i.blendFuncSeparate(Nt[tt],Nt[mt],Nt[rt],Nt[Ut]),T=tt,y=mt,w=rt,C=Ut),(Pt.equals(v)===!1||Me!==E)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Me),v.copy(Pt),E=Me),m=D,I=!1}function le(D,pt){D.side===Ke?at(i.CULL_FACE):H(i.CULL_FACE);let tt=D.side===Xe;pt&&(tt=!tt),Ot(tt),D.blending===Ns&&D.transparent===!1?Yt(_n):Yt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let mt=D.stencilWrite;a.setTest(mt),mt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function oe(D){D!==iu?(H(i.CULL_FACE),D!==O&&(D===uc?i.cullFace(i.BACK):D===su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),O=D}function fe(D){D!==z&&(Y&&i.lineWidth(D),z=D)}function Ge(D,pt,tt){D?(H(i.POLYGON_OFFSET_FILL),(P!==pt||F!==tt)&&(P=pt,F=tt,o.getReversed()&&(pt=-pt),i.polygonOffset(pt,tt))):at(i.POLYGON_OFFSET_FILL)}function ye(D){D?H(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Ce(D){D===void 0&&(D=i.TEXTURE0+G-1),W!==D&&(i.activeTexture(D),W=D)}function N(D,pt,tt){tt===void 0&&(W===null?tt=i.TEXTURE0+G-1:tt=W);let mt=Z[tt];mt===void 0&&(mt={type:void 0,texture:void 0},Z[tt]=mt),(mt.type!==D||mt.texture!==pt)&&(W!==tt&&(i.activeTexture(tt),W=tt),i.bindTexture(D,pt||J[D]),mt.type=D,mt.texture=pt)}function Ye(){let D=Z[W];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function de(){try{i.compressedTexImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function x(){try{i.texSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function B(){try{i.texSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ct(){try{i.texStorage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ut(){try{i.texStorage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function j(){try{i.texImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function nt(){try{i.texImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ft(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function Lt(D,pt){f[D]!==pt&&(i.pixelStorei(D,pt),f[D]=pt)}function gt(D){Ht.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ht.copy(D))}function dt(D){Ft.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ft.copy(D))}function Dt(D,pt){let tt=c.get(pt);tt===void 0&&(tt=new WeakMap,c.set(pt,tt));let mt=tt.get(D);mt===void 0&&(mt=i.getUniformBlockIndex(pt,D.name),tt.set(D,mt))}function Bt(D,pt){let mt=c.get(pt).get(D);l.get(pt)!==mt&&(i.uniformBlockBinding(pt,mt,D.__bindingPointIndex),l.set(pt,mt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,Z={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,S=null,T=null,y=null,b=null,w=null,C=null,v=new Mt(0,0,0),E=0,I=!1,U=null,O=null,z=null,P=null,F=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:at,bindFramebuffer:wt,drawBuffers:ot,useProgram:Tt,setBlending:Yt,setMaterial:le,setFlipSided:Ot,setCullFace:oe,setLineWidth:fe,setPolygonOffset:Ge,setScissorTest:ye,activeTexture:Ce,bindTexture:N,unbindTexture:Ye,compressedTexImage2D:de,compressedTexImage3D:A,texImage2D:j,texImage3D:nt,pixelStorei:Lt,getParameter:ft,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:ct,texStorage3D:ut,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:gt,viewport:dt,reset:qt}}function T_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):cr("canvas")}function g(A,x,B){let X=1,K=de(A);if((K.width>B||K.height>B)&&(X=B/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(X*K.width),ut=Math.floor(X*K.height);u===void 0&&(u=_(ct,ut));let j=x?_(ct,ut):u;return j.width=ct,j.height=ut,j.getContext("2d").drawImage(A,0,0,ct,ut),kt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ct+"x"+ut+")."),j}else return"data"in A&&kt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,x,B,X,K,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;X&&(ut=t.get("EXT_texture_norm16"),ut||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8),B===i.UNSIGNED_SHORT&&ut&&(j=ut.R16_EXT),B===i.SHORT&&ut&&(j=ut.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),x===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8),B===i.UNSIGNED_SHORT&&ut&&(j=ut.RG16_EXT),B===i.SHORT&&ut&&(j=ut.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ut&&(j=ut.RGB16_EXT),B===i.SHORT&&ut&&(j=ut.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let nt=ct?lr:jt.getTransfer(K);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=nt===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ut&&(j=ut.RGBA16_EXT),B===i.SHORT&&ut&&(j=ut.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(A,x){let B;return A?x===null||x===Rn||x===Os?B=i.DEPTH24_STENCIL8:x===xn?B=i.DEPTH32F_STENCIL8:x===Fs&&(B=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rn||x===Os?B=i.DEPTH_COMPONENT24:x===xn?B=i.DEPTH_COMPONENT32F:x===Fs&&(B=i.DEPTH_COMPONENT16),B}function w(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ke&&A.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function v(A){let x=A.target;x.removeEventListener("dispose",v),U(x)}function E(A){let x=n.get(A);if(x.__webglInit===void 0)return;let B=A.source,X=d.get(B);if(X){let K=X[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(A),Object.keys(X).length===0&&d.delete(B)}n.remove(A)}function I(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let B=A.source,X=d.get(B);delete X[x.__cacheKey],o.memory.textures--}function U(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let K=0;K<x.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[X][K]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=A.textures;for(let X=0,K=B.length;X<K;X++){let ct=n.get(B[X]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(B[X])}n.remove(A)}let O=0;function z(){O=0}function P(){return O}function F(A){O=A}function G(){let A=O;return A>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,A}function Y(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function et(A,x){let B=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let X=A.image;if(X===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function q(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){at(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function W(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){at(B,A,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function Z(A,x){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){wt(B,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let ht={[Ts]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},lt={[ke]:i.NEAREST,[Eu]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Ht={[Pu]:i.NEVER,[Nu]:i.ALWAYS,[Iu]:i.LESS,[ja]:i.LEQUAL,[Lu]:i.EQUAL,[Qa]:i.GEQUAL,[Du]:i.GREATER,[Uu]:i.NOTEQUAL};function Ft(A,x){if(x.type===xn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===pa||x.magFilter===Or||x.magFilter===Ai||x.minFilter===We||x.minFilter===pa||x.minFilter===Or||x.minFilter===Ai)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ht[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ht[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ht[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ke||x.minFilter!==Or&&x.minFilter!==Ai||x.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let X=x.source,K=d.get(X);K===void 0&&(K={},d.set(X,K));let ct=Y(x);if(ct!==A.__cacheKey){K[ct]===void 0&&(K[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[ct].usedTimes++;let ut=K[A.__cacheKey];ut!==void 0&&(K[A.__cacheKey].usedTimes--,ut.usedTimes===0&&I(x)),A.__cacheKey=ct,A.__webglTexture=K[ct].texture}return B}function J(A,x,B){return Math.floor(Math.floor(A/B)/x)}function H(A,x,B,X){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,X,x.data);else{ct.sort((Lt,gt)=>Lt.start-gt.start);let ut=0;for(let Lt=1;Lt<ct.length;Lt++){let gt=ct[ut],dt=ct[Lt],Dt=gt.start+gt.count,Bt=J(dt.start,x.width,4),qt=J(gt.start,x.width,4);dt.start<=Dt+1&&Bt===qt&&J(dt.start+dt.count-1,x.width,4)===Bt?gt.count=Math.max(gt.count,dt.start+dt.count-gt.start):(++ut,ct[ut]=dt)}ct.length=ut+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Lt=0,gt=ct.length;Lt<gt;Lt++){let dt=ct[Lt],Dt=Math.floor(dt.start/4),Bt=Math.ceil(dt.count/4),qt=Dt%x.width,D=Math.floor(Dt/x.width),pt=Bt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,qt,D,pt,tt,B,X,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function at(A,x,B){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let K=Wt(A,x),ct=x.source;e.bindTexture(X,A.__webglTexture,i.TEXTURE0+B);let ut=n.get(ct);if(ct.version!==ut.__version||K===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let tt=jt.getPrimaries(jt.workingColorSpace),mt=x.colorSpace===Pn?null:jt.getPrimaries(x.colorSpace),yt=x.colorSpace===Pn||tt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let nt=g(x.image,!1,s.maxTextureSize);nt=Ye(x,nt);let ft=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),gt=y(x.internalFormat,ft,Lt,x.normalized,x.colorSpace,x.isVideoTexture);Ft(X,x);let dt,Dt=x.mipmaps,Bt=x.isVideoTexture!==!0,qt=ut.__version===void 0||K===!0,D=ct.dataReady,pt=w(x,nt);if(x.isDepthTexture)gt=b(x.format===Ci,x.type),qt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,gt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,gt,nt.width,nt.height,0,ft,Lt,null));else if(x.isDataTexture)if(Dt.length>0){Bt&&qt&&e.texStorage2D(i.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let tt=0,mt=Dt.length;tt<mt;tt++)dt=Dt[tt],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ft,Lt,dt.data):e.texImage2D(i.TEXTURE_2D,tt,gt,dt.width,dt.height,0,ft,Lt,dt.data);x.generateMipmaps=!1}else Bt?(qt&&e.texStorage2D(i.TEXTURE_2D,pt,gt,nt.width,nt.height),D&&H(x,nt,ft,Lt)):e.texImage2D(i.TEXTURE_2D,0,gt,nt.width,nt.height,0,ft,Lt,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,gt,Dt[0].width,Dt[0].height,nt.depth);for(let tt=0,mt=Dt.length;tt<mt;tt++)if(dt=Dt[tt],x.format!==vn)if(ft!==null)if(Bt){if(D)if(x.layerUpdates.size>0){let yt=Rc(dt.width,dt.height,x.format,x.type);for(let rt of x.layerUpdates){let Ut=dt.data.subarray(rt*yt/dt.data.BYTES_PER_ELEMENT,(rt+1)*yt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,rt,dt.width,dt.height,1,ft,Ut)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,nt.depth,ft,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,gt,dt.width,dt.height,nt.depth,0,dt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,nt.depth,ft,Lt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,gt,dt.width,dt.height,nt.depth,0,ft,Lt,dt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Bt&&qt&&e.texStorage2D(i.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let tt=0,mt=Dt.length;tt<mt;tt++)dt=Dt[tt],x.format!==vn?ft!==null?Bt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,gt,dt.width,dt.height,0,dt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?D&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ft,Lt,dt.data):e.texImage2D(i.TEXTURE_2D,tt,gt,dt.width,dt.height,0,ft,Lt,dt.data)}else if(x.isDataArrayTexture)if(Bt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,gt,nt.width,nt.height,nt.depth),D)if(x.layerUpdates.size>0){let tt=Rc(nt.width,nt.height,x.format,x.type);for(let mt of x.layerUpdates){let yt=nt.data.subarray(mt*tt/nt.data.BYTES_PER_ELEMENT,(mt+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,nt.width,nt.height,1,ft,Lt,yt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,nt.width,nt.height,nt.depth,0,ft,Lt,nt.data);else if(x.isData3DTexture)Bt?(qt&&e.texStorage3D(i.TEXTURE_3D,pt,gt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,gt,nt.width,nt.height,nt.depth,0,ft,Lt,nt.data);else if(x.isFramebufferTexture){if(qt)if(Bt)e.texStorage2D(i.TEXTURE_2D,pt,gt,nt.width,nt.height);else{let tt=nt.width,mt=nt.height;for(let yt=0;yt<pt;yt++)e.texImage2D(i.TEXTURE_2D,yt,gt,tt,mt,0,ft,Lt,null),tt>>=1,mt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),f.add(x),tt.onpaint=mt=>{let yt=mt.changedElements;for(let rt of f)yt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let yt=i.RGBA,rt=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,rt,Ut,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Bt&&qt){let tt=de(Dt[0]);e.texStorage2D(i.TEXTURE_2D,pt,gt,tt.width,tt.height)}for(let tt=0,mt=Dt.length;tt<mt;tt++)dt=Dt[tt],Bt?D&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ft,Lt,dt):e.texImage2D(i.TEXTURE_2D,tt,gt,ft,Lt,dt);x.generateMipmaps=!1}else if(Bt){if(qt){let tt=de(nt);e.texStorage2D(i.TEXTURE_2D,pt,gt,tt.width,tt.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,gt,ft,Lt,nt);m(x)&&S(X),ut.__version=ct.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function wt(A,x,B){if(x.image.length!==6)return;let X=Wt(A,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let ct=n.get(K);if(K.version!==ct.__version||X===!0){e.activeTexture(i.TEXTURE0+B);let ut=jt.getPrimaries(jt.workingColorSpace),j=x.colorSpace===Pn?null:jt.getPrimaries(x.colorSpace),nt=x.colorSpace===Pn||ut===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ft=x.isCompressedTexture||x.image[0].isCompressedTexture,Lt=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let rt=0;rt<6;rt++)!ft&&!Lt?gt[rt]=g(x.image[rt],!0,s.maxCubemapSize):gt[rt]=Lt?x.image[rt].image:x.image[rt],gt[rt]=Ye(x,gt[rt]);let dt=gt[0],Dt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),qt=y(x.internalFormat,Dt,Bt,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,pt=ct.__version===void 0||X===!0,tt=K.dataReady,mt=w(x,dt);Ft(i.TEXTURE_CUBE_MAP,x);let yt;if(ft){D&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,qt,dt.width,dt.height);for(let rt=0;rt<6;rt++){yt=gt[rt].mipmaps;for(let Ut=0;Ut<yt.length;Ut++){let Pt=yt[Ut];x.format!==vn?Dt!==null?D?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,Pt.width,Pt.height,Dt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,qt,Pt.width,Pt.height,0,Pt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,Pt.width,Pt.height,Dt,Bt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,qt,Pt.width,Pt.height,0,Dt,Bt,Pt.data)}}}else{if(yt=x.mipmaps,D&&pt){yt.length>0&&mt++;let rt=de(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Lt){D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,gt[rt].width,gt[rt].height,Dt,Bt,gt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,qt,gt[rt].width,gt[rt].height,0,Dt,Bt,gt[rt].data);for(let Ut=0;Ut<yt.length;Ut++){let Me=yt[Ut].image[rt].image;D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,Me.width,Me.height,Dt,Bt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,qt,Me.width,Me.height,0,Dt,Bt,Me.data)}}else{D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Dt,Bt,gt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,qt,Dt,Bt,gt[rt]);for(let Ut=0;Ut<yt.length;Ut++){let Pt=yt[Ut];D?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,Dt,Bt,Pt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,qt,Dt,Bt,Pt.image[rt])}}}m(x)&&S(i.TEXTURE_CUBE_MAP),ct.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ot(A,x,B,X,K,ct){let ut=r.convert(B.format,B.colorSpace),j=r.convert(B.type),nt=y(B.internalFormat,ut,j,B.normalized,B.colorSpace),ft=n.get(x),Lt=n.get(B);if(Lt.__renderTarget=x,!ft.__hasExternalTextures){let gt=Math.max(1,x.width>>ct),dt=Math.max(1,x.height>>ct);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ct,nt,gt,dt,x.depth,0,ut,j,null):e.texImage2D(K,ct,nt,gt,dt,0,ut,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Lt.__webglTexture,0,ye(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Lt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let X=x.depthTexture,K=X&&X.isDepthTexture?X.type:null,ct=b(x.stencilBuffer,K),ut=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(x),ct,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(x),ct,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ct,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,A)}else{let X=x.textures;for(let K=0;K<X.length;K++){let ct=X[K],ut=r.convert(ct.format,ct.colorSpace),j=r.convert(ct.type),nt=y(ct.internalFormat,ut,j,ct.normalized,ct.colorSpace);Ce(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(x),nt,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(x),nt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,nt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(A,x,B){let X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,x.depthTexture);let ft=r.convert(x.depthTexture.format),Lt=r.convert(x.depthTexture.type),gt;x.depthTexture.format===Bn?gt=i.DEPTH_COMPONENT24:x.depthTexture.format===Ci&&(gt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,gt,x.width,x.height,0,ft,Lt,null)}}else et(x.depthTexture,0);let ct=K.__webglTexture,ut=ye(x),j=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,nt=x.depthTexture.format===Ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Bn)Ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,j,ct,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,nt,j,ct,0);else if(x.depthTexture.format===Ci)Ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,j,ct,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,nt,j,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(A){let x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)zt(x.__webglFramebuffer[X],A,X);else{let X=A.texture.mipmaps;X&&X.length>0?zt(x.__webglFramebuffer[0],A,0):zt(x.__webglFramebuffer,A,0)}else if(B){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Tt(x.__webglDepthbuffer[X],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ct)}}else{let X=A.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Tt(x.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(A,x,B){let X=n.get(A);x!==void 0&&ot(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Nt(A)}function le(A){let x=A.texture,B=n.get(A),X=n.get(x);A.addEventListener("dispose",v);let K=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ut=K.length>1;if(ut||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,o.memory.textures++),ct){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let nt=0;nt<x.mipmaps.length;nt++)B.__webglFramebuffer[j][nt]=i.createFramebuffer()}else B.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)B.__webglFramebuffer[j]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ut)for(let j=0,nt=K.length;j<nt;j++){let ft=n.get(K[j]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ce(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let nt=K[j];B.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[j]);let ft=r.convert(nt.format,nt.colorSpace),Lt=r.convert(nt.type),gt=y(nt.internalFormat,ft,Lt,nt.normalized,nt.colorSpace,A.isXRRenderTarget===!0),dt=ye(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,B.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)ot(B.__webglFramebuffer[j][nt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else ot(B.__webglFramebuffer[j],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(x)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let j=0,nt=K.length;j<nt;j++){let ft=K[j],Lt=n.get(ft),gt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Lt.__webglTexture),Ft(gt,ft),ot(B.__webglFramebuffer,A,ft,i.COLOR_ATTACHMENT0+j,gt,0),m(ft)&&S(gt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),Ft(j,x),x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)ot(B.__webglFramebuffer[nt],A,x,i.COLOR_ATTACHMENT0,j,nt);else ot(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,j,0);m(x)&&S(j),e.unbindTexture()}A.depthBuffer&&Nt(A)}function Ot(A){let x=A.textures;for(let B=0,X=x.length;B<X;B++){let K=x[B];if(m(K)){let ct=T(A),ut=n.get(K).__webglTexture;e.bindTexture(ct,ut),S(ct),e.unbindTexture()}}}let oe=[],fe=[];function Ge(A){if(A.samples>0){if(Ce(A)===!1){let x=A.textures,B=A.width,X=A.height,K=i.COLOR_BUFFER_BIT,ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(A),j=x.length>1;if(j)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let nt=A.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let Lt=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,K,i.NEAREST),l===!0&&(oe.length=0,fe.length=0,oe.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(oe.push(ct),fe.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let Lt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ye(A){return Math.min(s.maxSamples,A.samples)}function Ce(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ye(A,x){let B=A.colorSpace,X=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ar&&B!==Pn&&(jt.getTransfer(B)===ae?(X!==vn||K!==on)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",B)),x}function de(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=et,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Yt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function E_(i,t){function e(n,s=Pn){let r,o=jt.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_c)return i.BYTE;if(n===xc)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Fe)return i.HALF_FLOAT;if(n===Mc)return i.ALPHA;if(n===bc)return i.RGB;if(n===vn)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===xa)return i.RED;if(n===va)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Vr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Sa||n===wa||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Aa||n===Ca||n===Ra||n===Pa||n===Hr||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Aa)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return r.COMPRESSED_R11_EAC;if(n===Pa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hr)return r.COMPRESSED_RG11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qa||n===Ya||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qa)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$a||n===Ja||n===Gr||n===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Te({vertexShader:A_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,_=typeof XRWebGLBinding<"u",g=new Zc,m={},S=e.getContextAttributes(),T=null,y=null,b=[],w=[],C=new Rt,v=null,E=null,I=new Ne;I.viewport=new Ee;let U=new Ne;U.viewport=new Ee;let O=[I,U],z=new ca,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let H=b[J];return H===void 0&&(H=new Rs,b[J]=H),H.getTargetRaySpace()},this.getControllerGrip=function(J){let H=b[J];return H===void 0&&(H=new Rs,b[J]=H),H.getGripSpace()},this.getHand=function(J){let H=b[J];return H===void 0&&(H=new Rs,b[J]=H),H.getHandSpace()};function G(J){let H=w.indexOf(J.inputSource);if(H===-1)return;let at=b[H];at!==void 0&&(at.update(J.inputSource,J.frame,c||o),at.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",et);for(let J=0;J<b.length;J++){let H=w[J];H!==null&&(w[J]=null,b[J].disconnect(H))}P=null,F=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(T),d=null,u=null,f=null,s=null,y=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,wt=null,ot=null;S.depth&&(ot=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=S.stencil?Ci:Bn,wt=S.stencil?Os:Rn);let Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Tt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Re(u.textureWidth,u.textureHeight,{format:vn,type:on,depthTexture:new xi(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let at={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Re(d.framebufferWidth,d.framebufferHeight,{format:vn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(J){for(let H=0;H<J.removed.length;H++){let at=J.removed[H],wt=w.indexOf(at);wt>=0&&(w[wt]=null,b[wt].disconnect(at))}for(let H=0;H<J.added.length;H++){let at=J.added[H],wt=w.indexOf(at);if(wt===-1){for(let Tt=0;Tt<b.length;Tt++)if(Tt>=w.length){w.push(at),wt=Tt;break}else if(w[Tt]===null){w[Tt]=at,wt=Tt;break}if(wt===-1)break}let ot=b[wt];ot&&ot.connect(at)}}let q=new R,W=new R;function Z(J,H,at){q.setFromMatrixPosition(H.matrixWorld),W.setFromMatrixPosition(at.matrixWorld);let wt=q.distanceTo(W),ot=H.projectionMatrix.elements,Tt=at.projectionMatrix.elements,zt=ot[14]/(ot[10]-1),Nt=ot[14]/(ot[10]+1),Yt=(ot[9]+1)/ot[5],le=(ot[9]-1)/ot[5],Ot=(ot[8]-1)/ot[0],oe=(Tt[8]+1)/Tt[0],fe=zt*Ot,Ge=zt*oe,ye=wt/(-Ot+oe),Ce=ye*-Ot;if(H.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ce),J.translateZ(ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ot[10]===-1)J.projectionMatrix.copy(H.projectionMatrix),J.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let N=zt+ye,Ye=Nt+ye,de=fe-Ce,A=Ge+(wt-Ce),x=Yt*Nt/Ye*N,B=le*Nt/Ye*N;J.projectionMatrix.makePerspective(de,A,x,B,N,Ye),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,H){H===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(H.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let H=J.near,at=J.far;g.texture!==null&&(g.depthNear>0&&(H=g.depthNear),g.depthFar>0&&(at=g.depthFar)),z.near=U.near=I.near=H,z.far=U.far=I.far=at,(P!==z.near||F!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,F=z.far),z.layers.mask=J.layers.mask|6,I.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;let wt=J.parent,ot=z.cameras;ht(z,wt);for(let Tt=0;Tt<ot.length;Tt++)ht(ot[Tt],wt);ot.length===2?Z(z,I,U):z.projectionMatrix.copy(I.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),lt(J,z,wt)};function lt(J,H,at){at===null?J.matrix.copy(H.matrixWorld):(J.matrix.copy(at.matrixWorld),J.matrix.invert(),J.matrix.multiply(H.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(H.projectionMatrix),J.projectionMatrixInverse.copy(H.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ho*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let Ht=null;function Ft(J,H){if(h=H.getViewerPose(c||o),p=H,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let wt=!1;at.length!==z.cameras.length&&(z.cameras.length=0,wt=!0);for(let Nt=0;Nt<at.length;Nt++){let Yt=at[Nt],le=null;if(d!==null)le=d.getViewport(Yt);else{let oe=f.getViewSubImage(u,Yt);le=oe.viewport,Nt===0&&(t.setRenderTargetTextures(y,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(y))}let Ot=O[Nt];Ot===void 0&&(Ot=new Ne,Ot.layers.enable(Nt),Ot.viewport=new Ee,O[Nt]=Ot),Ot.matrix.fromArray(Yt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Yt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(le.x,le.y,le.width,le.height),Nt===0&&(z.matrix.copy(Ot.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),wt===!0&&z.cameras.push(Ot)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Nt=f.getDepthInformation(at[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(Nt,s.renderState)}if(ot&&ot.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Nt=0;Nt<at.length;Nt++){let Yt=at[Nt].camera;if(Yt){let le=m[Yt];le||(le=new br,m[Yt]=le);let Ot=f.getCameraImage(Yt);le.sourceTexture=Ot}}}}for(let at=0;at<b.length;at++){let wt=w[at],ot=b[at];wt!==null&&ot!==void 0&&ot.update(wt,H,c||o)}Ht&&Ht(J,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),p=null}let Wt=new ff;Wt.setAnimationLoop(Ft),this.setAnimationLoop=function(J){Ht=J},this.dispose=function(){}}},R_=new te,xf=new Gt;xf.set(-1,0,0,0,1,0,0,0,1);function P_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ec(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Xe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Xe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),T=S.envMap,y=S.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(xf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let w=b.program;n.uniformBlockBinding(y,w)}function c(y,b){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",S));let C=b.program;n.updateUBOMapping(y,C);let v=t.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let b=f();y.__bindingPointIndex=b;let w=i.createBuffer(),C=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],w=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,E=w.length;v<E;v++){let I=w[v];if(Array.isArray(I))for(let U=0,O=I.length;U<O;U++)d(I[U],v,U,C);else d(I,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,w,C){if(_(y,b,w,C)===!0){let v=y.__offset,E=y.value;if(Array.isArray(E)){let I=0;for(let U=0;U<E.length;U++){let O=E[U],z=m(O);p(O,y.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function p(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function _(y,b,w,C){let v=y.value,E=b+"_"+w;if(C[E]===void 0)return typeof v=="number"||typeof v=="boolean"?C[E]=v:ArrayBuffer.isView(v)?C[E]=v.slice():C[E]=v.clone(),!0;{let I=C[E];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return C[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(y){let b=y.uniforms,w=0,C=16;for(let E=0,I=b.length;E<I;E++){let U=Array.isArray(b[E])?b[E]:[b[E]];for(let O=0,z=U.length;O<z;O++){let P=U[O],F=Array.isArray(P.value)?P.value:[P.value];for(let G=0,Y=F.length;G<Y;G++){let et=F[G],q=m(et),W=w%C,Z=W%q.boundary,ht=W+Z;w+=Z,ht!==0&&C-ht<q.storage&&(w+=C-ht),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=q.storage}}}let v=w%C;return v>0&&(w+=C-v),y.__size=w,y.__cache={},this}function m(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){let b=y.target;b.removeEventListener("dispose",S);let w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:T}}var L_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function D_(){return Wn===null&&(Wn=new xr(L_,16,16,Ri,Fe),Wn.name="DFG_LUT",Wn.minFilter=We,Wn.magFilter=We,Wn.wrapS=On,Wn.wrapT=On,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var Vs=class{constructor(t={}){let{canvas:e=Fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=on}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,g=new Set([Ma,ya,va]),m=new Set([on,Rn,Fs,Os,ga,_a]),S=new Uint32Array(4),T=new Int32Array(4),y=new R,b=null,w=null,C=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,O=null,z=null,P=null,F=null;this._outputColorSpace=De;let G=0,Y=0,et=null,q=-1,W=null,Z=new Ee,ht=new Ee,lt=null,Ht=new Mt(0),Ft=0,Wt=e.width,J=e.height,H=1,at=null,wt=null,ot=new Ee(0,0,Wt,J),Tt=new Ee(0,0,Wt,J),zt=!1,Nt=new Is,Yt=!1,le=!1,Ot=new te,oe=new R,fe=new Ee,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Ce(){return et===null?H:1}let N=n;function Ye(M,L){return e.getContext(M,L)}let de,A,x,B,X,K,ct,ut,j,nt,ft,Lt,gt,dt,Dt,Bt,qt,D,pt,tt,mt,yt,rt;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",yn,!1),N===null){let L="webgl2";if(N=Ye(L,M),N===null)throw Ye(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(M){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Vt("WebGLRenderer: "+M.message),M}function Ut(){de=new k0(N),de.init(),mt=new E_(N,de),A=new P0(N,de,t,mt),x=new w_(N,de),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),z=N.createFramebuffer(),P=N.createFramebuffer(),F=N.createFramebuffer(),B=new G0(N),X=new h_,K=new T_(N,de,x,X,A,mt,B),ct=new z0(I),ut=new Xd(N),yt=new C0(N,ut),j=new V0(N,ut,B,yt),nt=new X0(N,j,ut,yt,B),D=new W0(N,A,K),Dt=new I0(X),ft=new c_(I,ct,de,A,yt,Dt),Lt=new P_(I,X),gt=new f_,dt=new x_(de),qt=new A0(I,ct,x,nt,p,l),Bt=new S_(I,nt,A),rt=new I_(N,B,A,x),pt=new R0(N,de,B),tt=new H0(N,de,B),B.programs=ft.programs,I.capabilities=A,I.extensions=de,I.properties=X,I.renderLists=gt,I.shadowMap=Bt,I.state=x,I.info=B}_!==on&&(E=new Y0(_,e.width,e.height,a,s,r));let Pt=new $c(I,N);this.xr=Pt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=de.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=de.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(Wt,J,!1))},this.getSize=function(M){return M.set(Wt,J)},this.setSize=function(M,L,$=!0){if(Pt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=M,J=L,e.width=Math.floor(M*H),e.height=Math.floor(L*H),$===!0&&(e.style.width=M+"px",e.style.height=L+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Wt*H,J*H).floor()},this.setDrawingBufferSize=function(M,L,$){Wt=M,J=L,H=$,e.width=Math.floor(M*$),e.height=Math.floor(L*$),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(_===on){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(ot)},this.setViewport=function(M,L,$,k){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,L,$,k),x.viewport(Z.copy(ot).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Tt)},this.setScissor=function(M,L,$,k){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,L,$,k),x.scissor(ht.copy(Tt).multiplyScalar(H).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(M){x.setScissorTest(zt=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){wt=M},this.getClearColor=function(M){return M.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,$=!0){let k=0;if(M){let V=!1;if(et!==null){let vt=et.texture.format;V=g.has(vt)}if(V){let vt=et.texture.type,St=m.has(vt),xt=qt.getClearColor(),At=qt.getClearAlpha(),It=xt.r,$t=xt.g,ne=xt.b;St?(S[0]=It,S[1]=$t,S[2]=ne,S[3]=At,N.clearBufferuiv(N.COLOR,0,S)):(T[0]=It,T[1]=$t,T[2]=ne,T[3]=At,N.clearBufferiv(N.COLOR,0,T))}else k|=N.COLOR_BUFFER_BIT}L&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),qt.dispose(),gt.dispose(),dt.dispose(),X.dispose(),ct.dispose(),nt.dispose(),yt.dispose(),rt.dispose(),ft.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",vh),Pt.removeEventListener("sessionend",yh),zi.stop()};function Me(M){M.preventDefault(),hr("WebGLRenderer: Context Lost."),U=!0}function ce(){hr("WebGLRenderer: Context Restored."),U=!1;let M=B.autoReset,L=Bt.enabled,$=Bt.autoUpdate,k=Bt.needsUpdate,V=Bt.type;Ut(),B.autoReset=M,Bt.enabled=L,Bt.autoUpdate=$,Bt.needsUpdate=k,Bt.type=V}function yn(M){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Dn(M){let L=M.target;L.removeEventListener("dispose",Dn),td(L)}function td(M){ed(M),X.remove(M)}function ed(M){let L=X.get(M).programs;L!==void 0&&(L.forEach(function($){ft.releaseProgram($)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,$,k,V,vt){L===null&&(L=Ge);let St=V.isMesh&&V.matrixWorld.determinantAffine()<0,xt=sd(M,L,$,k,V);x.setMaterial(k,St);let At=$.index,It=1;if(k.wireframe===!0){if(At=j.getWireframeAttribute($),At===void 0)return;It=2}let $t=$.drawRange,ne=$.attributes.position,Ct=$t.start*It,he=($t.start+$t.count)*It;vt!==null&&(Ct=Math.max(Ct,vt.start*It),he=Math.min(he,(vt.start+vt.count)*It)),At!==null?(Ct=Math.max(Ct,0),he=Math.min(he,At.count)):ne!=null&&(Ct=Math.max(Ct,0),he=Math.min(he,ne.count));let Ie=he-Ct;if(Ie<0||Ie===1/0)return;yt.setup(V,k,xt,$,At);let Se,ge=pt;if(At!==null&&(Se=ut.get(At),ge=tt,ge.setIndex(Se)),V.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Ce()),ge.setMode(N.LINES)):ge.setMode(N.TRIANGLES);else if(V.isLine){let Ze=k.linewidth;Ze===void 0&&(Ze=1),x.setLineWidth(Ze*Ce()),V.isLineSegments?ge.setMode(N.LINES):V.isLineLoop?ge.setMode(N.LINE_LOOP):ge.setMode(N.LINE_STRIP)}else V.isPoints?ge.setMode(N.POINTS):V.isSprite&&ge.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ge.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ze=V._multiDrawStarts,bt=V._multiDrawCounts,tn=V._multiDrawCount,se=At?ut.get(At).bytesPerElement:1,dn=X.get(k).currentProgram.getUniforms();for(let Un=0;Un<tn;Un++)dn.setValue(N,"_gl_DrawID",Un),ge.render(Ze[Un]/se,bt[Un])}else if(V.isInstancedMesh)ge.renderInstances(Ct,Ie,V.count);else if($.isInstancedBufferGeometry){let Ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,bt=Math.min($.instanceCount,Ze);ge.renderInstances(Ct,Ie,bt)}else ge.render(Ct,Ie)};function xh(M,L,$,k){O!==null&&M.isNodeMaterial&&O.setObject(k,M),Yt===!0&&Dt.setState(M,$,!1),M.transparent===!0&&M.side===Ke&&M.forceSinglePass===!1?(M.side=Xe,M.needsUpdate=!0,so(M,L,k),M.side=Ti,M.needsUpdate=!0,so(M,L,k),M.side=Ke):so(M,L,k)}this.compile=function(M,L,$=null){$===null&&($=M),O!==null&&O.renderStart(M,L,$),w=dt.get($),w.init(L),v.push(w),$.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),M!==$&&M.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),le=this.localClippingEnabled,Yt=Dt.init(this.clippingPlanes,le),Yt===!0&&Dt.setGlobalState(this.clippingPlanes,L),O!==null&&Bt.render(w.state.shadowsArray,$,L);let k=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let vt=V.material;if(vt)if(Array.isArray(vt))for(let St=0;St<vt.length;St++){let xt=vt[St];xh(xt,$,L,V),k.add(xt)}else xh(vt,$,L,V),k.add(vt)}),w=v.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(M,L,$=null){let k=this.compile(M,L,$);return new Promise(V=>{function vt(){if(k.forEach(function(St){let At=X.get(St).currentProgram;(At===void 0||At.isReady())&&k.delete(St)}),k.size===0){V(M);return}setTimeout(vt,10)}de.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Al=null;function nd(M){Al&&Al(M)}function vh(){zi.stop()}function yh(){zi.start()}let zi=new ff;zi.setAnimationLoop(nd),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(M){Al=M,Pt.setAnimationLoop(M),M===null?zi.stop():zi.start()},Pt.addEventListener("sessionstart",vh),Pt.addEventListener("sessionend",yh),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(M,L);let $=Pt.enabled===!0&&Pt.isPresenting===!0,k=E!==null&&(et===null||$)&&E.begin(I,et);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(L),L=Pt.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,L,et),w=dt.get(M,v.length),w.init(L),w.state.textureUnits=K.getTextureUnits(),v.push(w),Ot.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Nt.setFromProjectionMatrix(Ot,Tn,L.reversedDepth),le=this.localClippingEnabled,Yt=Dt.init(this.clippingPlanes,le),b=gt.get(M,C.length),b.init(),C.push(b),Pt.enabled===!0&&Pt.isPresenting===!0){let St=I.xr.getDepthSensingMesh();St!==null&&Cl(St,L,-1/0,I.sortObjects)}Cl(M,L,0,I.sortObjects),b.finish(),O!==null&&O.updateLights(w.state.lightsArray),I.sortObjects===!0&&b.sort(at,wt),ye=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,ye&&qt.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&Dt.beginShadows();let V=w.state.shadowsArray;if(Bt.render(V,M,L),Yt===!0&&Dt.endShadows(),(k&&E.hasRenderPass())===!1){let St=b.opaque,xt=b.transmissive;if(w.setupLights(),L.isArrayCamera){let At=L.cameras;if(xt.length>0)for(let It=0,$t=At.length;It<$t;It++){let ne=At[It];bh(St,xt,M,ne)}ye&&qt.render(M);for(let It=0,$t=At.length;It<$t;It++){let ne=At[It];Mh(b,M,ne,ne.viewport)}}else xt.length>0&&bh(St,xt,M,L),ye&&qt.render(M),Mh(b,M,L)}et!==null&&Y===0&&(K.updateMultisampleRenderTarget(et),K.updateRenderTargetMipmap(et)),k&&E.end(I),M.isScene===!0&&M.onAfterRender(I,M,L),yt.resetDefaultState(),q=-1,W=null,v.pop(),v.length>0?(w=v[v.length-1],K.setTextureUnits(w.state.textureUnits),Yt===!0&&Dt.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function Cl(M,L,$,k){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Nt)){k&&fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ot);let St=nt.update(M),xt=M.material;xt.visible&&b.push(M,St,xt,$,fe.z,null,L)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Nt))){let St=nt.update(M),xt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),fe.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),fe.copy(St.boundingSphere.center)),fe.applyMatrix4(M.matrixWorld).applyMatrix4(Ot)),Array.isArray(xt)){let At=St.groups;for(let It=0,$t=At.length;It<$t;It++){let ne=At[It],Ct=xt[ne.materialIndex];Ct&&Ct.visible&&b.push(M,St,Ct,$,fe.z,ne,L)}}else xt.visible&&b.push(M,St,xt,$,fe.z,null,L)}}let vt=M.children;for(let St=0,xt=vt.length;St<xt;St++)Cl(vt[St],L,$,k)}function Mh(M,L,$,k){let{opaque:V,transmissive:vt,transparent:St}=M;w.setupLightsView($),Yt===!0&&Dt.setGlobalState(I.clippingPlanes,$),k&&x.viewport(Z.copy(k)),V.length>0&&io(V,L,$),vt.length>0&&io(vt,L,$),St.length>0&&io(St,L,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function bh(M,L,$,k){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Ct=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Re(1,1,{generateMipmaps:!0,type:Ct?Fe:on,minFilter:Ai,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let vt=w.state.transmissionRenderTarget[k.id],St=k.viewport||Z;vt.setSize(St.z*I.transmissionResolutionScale,St.w*I.transmissionResolutionScale);let xt=I.getRenderTarget(),At=I.getActiveCubeFace(),It=I.getActiveMipmapLevel();I.setRenderTarget(vt),I.getClearColor(Ht),Ft=I.getClearAlpha(),Ft<1&&I.setClearColor(16777215,.5),I.clear(),ye&&qt.render($);let $t=I.toneMapping;I.toneMapping=Cn;let ne=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Yt===!0&&Dt.setGlobalState(I.clippingPlanes,k),io(M,$,k),K.updateMultisampleRenderTarget(vt),K.updateRenderTargetMipmap(vt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let he=0,Ie=L.length;he<Ie;he++){let Se=L[he],{object:ge,geometry:Ze,material:bt,group:tn}=Se;if(bt.side===Ke&&ge.layers.test(k.layers)){let se=bt.side;bt.side=Xe,bt.needsUpdate=!0,Sh(ge,$,k,Ze,bt,tn),bt.side=se,bt.needsUpdate=!0,Ct=!0}}Ct===!0&&(K.updateMultisampleRenderTarget(vt),K.updateRenderTargetMipmap(vt))}I.setRenderTarget(xt,At,It),I.setClearColor(Ht,Ft),ne!==void 0&&(k.viewport=ne),I.toneMapping=$t}function io(M,L,$){let k=L.isScene===!0?L.overrideMaterial:null;for(let V=0,vt=M.length;V<vt;V++){let St=M[V],{object:xt,geometry:At,group:It}=St,$t=St.material;$t.allowOverride===!0&&k!==null&&($t=k),xt.layers.test($.layers)&&Sh(xt,L,$,At,$t,It)}}function Sh(M,L,$,k,V,vt){O!==null&&V.isNodeMaterial&&O.setObject(M,V),M.onBeforeRender(I,L,$,k,V,vt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(I,L,$,k,M,vt),V.transparent===!0&&V.side===Ke&&V.forceSinglePass===!1?(V.side=Xe,V.needsUpdate=!0,I.renderBufferDirect($,L,k,V,M,vt),V.side=Ti,V.needsUpdate=!0,I.renderBufferDirect($,L,k,V,M,vt),V.side=Ke):I.renderBufferDirect($,L,k,V,M,vt),M.onAfterRender(I,L,$,k,V,vt)}function so(M,L,$){L.isScene!==!0&&(L=Ge);let k=X.get(M),V=w.state.lights,vt=w.state.shadowsArray,St=V.state.version,xt=ft.getParameters(M,V.state,vt,L,$,w.state.lightProbeGridArray),At=ft.getProgramCacheKey(xt),It=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let $t=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=ct.get(M.envMap||k.environment,$t),k.envMapRotation=k.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",Dn),It=new Map,k.programs=It);let ne=It.get(At);if(ne!==void 0){if(k.currentProgram===ne&&k.lightsStateVersion===St)return Th(M,xt),ne}else xt.uniforms=ft.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,$,xt),M.onBeforeCompile(xt,I),ne=ft.acquireProgram(xt,At),It.set(At,ne),k.uniforms=xt.uniforms;let Ct=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=Dt.uniform),Th(M,xt),k.needsLights=od(M),k.lightsStateVersion=St,k.needsLights&&(Ct.ambientLightColor.value=V.state.ambient,Ct.lightProbe.value=V.state.probe,Ct.sunLights.value=V.state.sun,Ct.sunLightShadows.value=V.state.sunShadow,Ct.directionalLights.value=V.state.directional,Ct.directionalLightShadows.value=V.state.directionalShadow,Ct.spotLights.value=V.state.spot,Ct.spotLightShadows.value=V.state.spotShadow,Ct.rectAreaLights.value=V.state.rectArea,Ct.ltc_1.value=V.state.rectAreaLTC1,Ct.ltc_2.value=V.state.rectAreaLTC2,Ct.pointLights.value=V.state.point,Ct.pointLightShadows.value=V.state.pointShadow,Ct.hemisphereLights.value=V.state.hemi,Ct.sunShadowMatrix.value=V.state.sunShadowMatrix,Ct.sunShadowCascade.value=V.state.sunShadowCascade,Ct.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ct.spotLightMatrix.value=V.state.spotLightMatrix,Ct.spotLightMap.value=V.state.spotLightMap,Ct.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=ne,k.uniformsList=null,ne}function wh(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=ks.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Th(M,L){let $=X.get(M);$.outputColorSpace=L.outputColorSpace,$.batching=L.batching,$.batchingColor=L.batchingColor,$.instancing=L.instancing,$.instancingColor=L.instancingColor,$.instancingMorph=L.instancingMorph,$.skinning=L.skinning,$.morphTargets=L.morphTargets,$.morphNormals=L.morphNormals,$.morphColors=L.morphColors,$.morphTargetsCount=L.morphTargetsCount,$.numClippingPlanes=L.numClippingPlanes,$.numIntersection=L.numClipIntersection,$.vertexAlphas=L.vertexAlphas,$.vertexTangents=L.vertexTangents,$.toneMapping=L.toneMapping}function id(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let $=0,k=M.length;$<k;$++){let V=M[$];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function sd(M,L,$,k,V){L.isScene!==!0&&(L=Ge),K.resetTextureUnits();let vt=L.fog,St=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,xt=et===null?I.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:jt.workingColorSpace,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,It=ct.get(k.envMap||St,At),$t=k.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ne=!!$.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ct=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,Ie=!!$.morphAttributes.color,Se=Cn;k.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Se=I.toneMapping);let ge=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ze=ge!==void 0?ge.length:0,bt=X.get(k),tn=w.state.lights;if(Yt===!0&&(le===!0||M!==W)){let be=M===W&&k.id===q;Dt.setState(k,M,be)}let se=!1;k.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==tn.state.version||bt.outputColorSpace!==xt||V.isBatchedMesh&&bt.batching===!1||!V.isBatchedMesh&&bt.batching===!0||V.isBatchedMesh&&bt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&bt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&bt.instancing===!1||!V.isInstancedMesh&&bt.instancing===!0||V.isSkinnedMesh&&bt.skinning===!1||!V.isSkinnedMesh&&bt.skinning===!0||V.isInstancedMesh&&bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&bt.instancingMorph===!1&&V.morphTexture!==null||bt.envMap!==It||k.fog===!0&&bt.fog!==vt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Dt.numPlanes||bt.numIntersection!==Dt.numIntersection)||bt.vertexAlphas!==$t||bt.vertexTangents!==ne||bt.morphTargets!==Ct||bt.morphNormals!==he||bt.morphColors!==Ie||bt.toneMapping!==Se||bt.morphTargetsCount!==Ze||!!bt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,bt.__version=k.version);let dn=bt.currentProgram;se===!0&&(dn=so(k,L,V),O&&k.isNodeMaterial&&O.onUpdateProgram(k,dn,bt));let Un=!1,ci=!1,is=!1,pe=dn.getUniforms(),Pe=bt.uniforms;if(x.useProgram(dn.program)&&(Un=!0,ci=!0,is=!0),k.id!==q&&(q=k.id,ci=!0),bt.needsLights){let be=id(w.state.lightProbeGridArray,V);bt.lightProbeGrid!==be&&(bt.lightProbeGrid=be,ci=!0)}if(Un||W!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(N,"projectionMatrix",M.projectionMatrix),pe.setValue(N,"viewMatrix",M.matrixWorldInverse);let ui=pe.map.cameraPosition;ui!==void 0&&ui.setValue(N,oe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,ci=!0,is=!0)}if(bt.needsLights&&(tn.state.sunShadowMap.length>0&&pe.setValue(N,"sunShadowMap",tn.state.sunShadowMap,K),tn.state.directionalShadowMap.length>0&&pe.setValue(N,"directionalShadowMap",tn.state.directionalShadowMap,K),tn.state.spotShadowMap.length>0&&pe.setValue(N,"spotShadowMap",tn.state.spotShadowMap,K),tn.state.pointShadowMap.length>0&&pe.setValue(N,"pointShadowMap",tn.state.pointShadowMap,K)),V.isSkinnedMesh){pe.setOptional(N,V,"bindMatrix"),pe.setOptional(N,V,"bindMatrixInverse");let be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),pe.setValue(N,"boneTexture",be.boneTexture,K))}V.isBatchedMesh&&(pe.setOptional(N,V,"batchingTexture"),pe.setValue(N,"batchingTexture",V._matricesTexture,K),pe.setOptional(N,V,"batchingIdTexture"),pe.setValue(N,"batchingIdTexture",V._indirectTexture,K),pe.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",V._colorsTexture,K));let hi=$.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&D.update(V,$,dn),(ci||bt.receiveShadow!==V.receiveShadow)&&(bt.receiveShadow=V.receiveShadow,pe.setValue(N,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Pe.envMapIntensity.value=L.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=D_()),ci){if(pe.setValue(N,"toneMappingExposure",I.toneMappingExposure),bt.needsLights&&rd(Pe,is),vt&&k.fog===!0&&Lt.refreshFogUniforms(Pe,vt),Lt.refreshMaterialUniforms(Pe,k,H,J,w.state.transmissionRenderTarget[M.id]),bt.needsLights&&bt.lightProbeGrid){let be=bt.lightProbeGrid;Pe.probesSH.value=be.texture,Pe.probesMin.value.copy(be.boundingBox.min),Pe.probesMax.value.copy(be.boundingBox.max),Pe.probesResolution.value.copy(be.resolution)}ks.upload(N,wh(bt),Pe,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ks.upload(N,wh(bt),Pe,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pe.setValue(N,"center",V.center),pe.setValue(N,"modelViewMatrix",V.modelViewMatrix),pe.setValue(N,"normalMatrix",V.normalMatrix),pe.setValue(N,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let be=k.uniformsGroups;for(let ui=0,ss=be.length;ui<ss;ui++){let Ah=be[ui];rt.update(Ah,dn),rt.bind(Ah,dn)}}return dn}function rd(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function od(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(M,L,$){let k=X.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=L,X.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:$,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let $=X.get(M);$.__webglFramebuffer=L,$.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,$=0){et=M,G=L,Y=$;let k=null,V=!1,vt=!1;if(M){let xt=X.get(M);if(xt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,xt.__webglFramebuffer),Z.copy(M.viewport),ht.copy(M.scissor),lt=M.scissorTest,x.viewport(Z),x.scissor(ht),x.setScissorTest(lt),q=-1;return}else if(xt.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(xt.__hasExternalTextures)K.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let $t=M.depthTexture;if(xt.__boundDepthTexture!==$t){if($t!==null&&X.has($t)&&(M.width!==$t.image.width||M.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}let At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(vt=!0);let It=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(It[L])?k=It[L][$]:k=It[L],V=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?k=X.get(M).__webglMultisampledFramebuffer:Array.isArray(It)?k=It[$]:k=It,Z.copy(M.viewport),ht.copy(M.scissor),lt=M.scissorTest}else Z.copy(ot).multiplyScalar(H).floor(),ht.copy(Tt).multiplyScalar(H).floor(),lt=zt;if($!==0&&(k=z),x.bindFramebuffer(N.FRAMEBUFFER,k)&&x.drawBuffers(M,k),x.viewport(Z),x.scissor(ht),x.setScissorTest(lt),V){let xt=X.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,$)}else if(vt){let xt=L;for(let At=0;At<M.textures.length;At++){let It=X.get(M.textures[At]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+At,It.__webglTexture,$,xt)}}else if(M!==null&&$!==0){let xt=X.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xt.__webglTexture,$)}q=-1};function Eh(M){let L=X.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=A.textureFormatReadable(M.format),L.__typeReadable=A.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,$,k,V,vt,St,xt=0){if(!(M&&M.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){x.bindFramebuffer(N.FRAMEBUFFER,At);try{let It=M.textures[xt],$t=It.format,ne=It.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xt);let Ct=Eh(It);if(Ct.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-k&&$>=0&&$<=M.height-V&&N.readPixels(L,$,k,V,mt.convert($t),mt.convert(ne),vt)}finally{let It=et!==null?X.get(et).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(M,L,$,k,V,vt,St,xt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At)if(L>=0&&L<=M.width-k&&$>=0&&$<=M.height-V){x.bindFramebuffer(N.FRAMEBUFFER,At);let It=M.textures[xt],$t=It.format,ne=It.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xt);let Ct=Eh(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,he),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),N.readPixels(L,$,k,V,mt.convert($t),mt.convert(ne),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ie=et!==null?X.get(et).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Ie);let Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Bu(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,he),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(he),N.deleteSync(Se),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,$=0){let k=Math.pow(2,-$),V=Math.floor(M.image.width*k),vt=Math.floor(M.image.height*k),St=L!==null?L.x:0,xt=L!==null?L.y:0;K.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,St,xt,V,vt),x.unbindTexture()},this.copyTextureToTexture=function(M,L,$=null,k=null,V=0,vt=0){let St,xt,At,It,$t,ne,Ct,he,Ie,Se=M.isCompressedTexture?M.mipmaps[vt]:M.image;if($!==null)St=$.max.x-$.min.x,xt=$.max.y-$.min.y,At=$.isBox3?$.max.z-$.min.z:1,It=$.min.x,$t=$.min.y,ne=$.isBox3?$.min.z:0;else{let Pe=Math.pow(2,-V);St=Math.floor(Se.width*Pe),xt=Math.floor(Se.height*Pe),M.isDataArrayTexture?At=Se.depth:M.isData3DTexture?At=Math.floor(Se.depth*Pe):At=1,It=0,$t=0,ne=0}k!==null?(Ct=k.x,he=k.y,Ie=k.z):(Ct=0,he=0,Ie=0);let ge=mt.convert(L.format),Ze=mt.convert(L.type),bt;L.isData3DTexture?(K.setTexture3D(L,0),bt=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(K.setTexture2DArray(L,0),bt=N.TEXTURE_2D_ARRAY):(K.setTexture2D(L,0),bt=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let tn=x.getParameter(N.UNPACK_ROW_LENGTH),se=x.getParameter(N.UNPACK_IMAGE_HEIGHT),dn=x.getParameter(N.UNPACK_SKIP_PIXELS),Un=x.getParameter(N.UNPACK_SKIP_ROWS),ci=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,Se.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,It),x.pixelStorei(N.UNPACK_SKIP_ROWS,$t),x.pixelStorei(N.UNPACK_SKIP_IMAGES,ne);let is=M.isDataArrayTexture||M.isData3DTexture,pe=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Pe=X.get(M),hi=X.get(L),be=X.get(Pe.__renderTarget),ui=X.get(hi.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,be.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ss=0;ss<At;ss++)is&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(M).__webglTexture,V,ne+ss),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(L).__webglTexture,vt,Ie+ss)),N.blitFramebuffer(It,$t,St,xt,Ct,he,St,xt,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||X.has(M)){let Pe=X.get(M),hi=X.get(L);x.bindFramebuffer(N.READ_FRAMEBUFFER,P),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let be=0;be<At;be++)is?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.__webglTexture,V,ne+be):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pe.__webglTexture,V),pe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,hi.__webglTexture,vt,Ie+be):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,hi.__webglTexture,vt),V!==0?N.blitFramebuffer(It,$t,St,xt,Ct,he,St,xt,N.COLOR_BUFFER_BIT,N.NEAREST):pe?N.copyTexSubImage3D(bt,vt,Ct,he,Ie+be,It,$t,St,xt):N.copyTexSubImage2D(bt,vt,Ct,he,It,$t,St,xt);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pe?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(bt,vt,Ct,he,Ie,St,xt,At,ge,Ze,Se.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,vt,Ct,he,Ie,St,xt,At,ge,Se.data):N.texSubImage3D(bt,vt,Ct,he,Ie,St,xt,At,ge,Ze,Se):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,Ct,he,St,xt,ge,Ze,Se.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,Ct,he,Se.width,Se.height,ge,Se.data):N.texSubImage2D(N.TEXTURE_2D,vt,Ct,he,St,xt,ge,Ze,Se);x.pixelStorei(N.UNPACK_ROW_LENGTH,tn),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se),x.pixelStorei(N.UNPACK_SKIP_PIXELS,dn),x.pixelStorei(N.UNPACK_SKIP_ROWS,Un),x.pixelStorei(N.UNPACK_SKIP_IMAGES,ci),vt===0&&L.generateMipmaps&&N.generateMipmap(bt),x.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){G=0,Y=0,et=null,x.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Gs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},U_=new wi(-1,1,1,-1,0,1),Jc=class extends _e{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}},N_=new Jc,Li=class{constructor(t){this._mesh=new Xt(N_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,U_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ws=class extends fn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=oi.clone(t.uniforms),this.material=new Te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Li(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zr=class extends fn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rl=class extends fn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ol=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Rt);this._width=n.width,this._height=n.height,e=new Re(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ws(Gs),this.copyPass.material.blending=_n,this.timer=new Rr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zr!==void 0&&(o instanceof Zr?n=!0:o instanceof rl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var al=class extends fn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Mt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var vf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Xs=class i extends fn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Rt(t.x,t.y):new Rt(256,256),this.clearColor=new Mt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Re(r,o,{type:Fe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Re(r,o,{type:Fe,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Re(r,o,{type:Fe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=vf;this.highPassUniforms=oi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Rt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=oi.clone(Gs.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:Gs.vertexShader,fragmentShader:Gs.fragmentShader,premultipliedAlpha:!0,blending:An,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Mt,this._oldClearAlpha=1,this._basic=new ii,this._fsQuad=new Li(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Te({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Rt(.5,.5)},direction:{value:new Rt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Te({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Xs.BlurDirectionX=new Rt(1,0);Xs.BlurDirectionY=new Rt(0,1);var $r={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ll=class extends fn{constructor(){super(),this.isOutputPass=!0,this.uniforms=oi.clone($r.uniforms),this.material=new Ls({name:$r.name,uniforms:this.uniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Pr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ri?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Dr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ys=class extends ei{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new vi;t.deleteAttribute("uv");let e=new xe({side:Xe}),n=new xe,s=new Zi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Xt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new si(t,n,6),a=new Ae;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Xt(t,qs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Xt(t,qs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Xt(t,qs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Xt(t,qs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Xt(t,qs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Xt(t,qs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function qs(i){return new Tr({color:0,emissive:16777215,emissiveIntensity:i})}function Di(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ai=new Uint8Array(512);{let i=Di(1337),t=Array.from({length:256},(e,n)=>n);for(let e=255;e>0;e--){let n=i()*(e+1)|0;[t[e],t[n]]=[t[n],t[e]]}for(let e=0;e<512;e++)ai[e]=t[e&255]}var cl=new Float32Array([1,-1,1,-1,1,-1,0,0]),hl=new Float32Array([1,1,-1,-1,0,0,1,-1]),yf=i=>i*i*i*(i*(i*6-15)+10);function ul(i,t,e=0){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=n,l=n+1;e&&(a=(a%e+e)%e,l=(l%e+e)%e),a&=255,l&=255;let c=s&255,h=s+1&255,f=ai[ai[a]+c]&7,u=ai[ai[l]+c]&7,d=ai[ai[a]+h]&7,p=ai[ai[l]+h]&7,_=cl[f]*r+hl[f]*o,g=cl[u]*(r-1)+hl[u]*o,m=cl[d]*r+hl[d]*(o-1),S=cl[p]*(r-1)+hl[p]*(o-1),T=yf(r),y=yf(o);return(_+T*(g-_))*(1-y)+(m+T*(S-m))*y}function ve(i,t,e=4,n=0){let s=1,r=1,o=0,a=0;for(let l=0;l<e;l++)o+=s*ul(i*r,t*r,n?n*r:0),a+=s,s*=.5,r*=2;return o/a}function Ui(i,t){let e=Math.imul(i|0,374761393)+Math.imul(t|0,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967296}var Et=Math.PI*2,Ve=(i,t,e)=>i<t?t:i>e?e:i,st=(i,t,e)=>i+(t-i)*e,Kt=(i,t,e)=>{let n=Ve((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ue=(i,t)=>Math.exp(-(i*i)/(t*t)),Q=(i=1,t)=>t===void 0?Math.random()*i:i+Math.random()*(t-i),Jr=(i,t)=>Math.floor(Q(i,t+1)),Mf=i=>i[Math.random()*i.length|0],Kc=()=>Math.random()<.5?-1:1,qn=(i,t,e,n)=>st(i,t,1-Math.exp(-e*n));function Ni(i){let t=0;for(let n of i)t+=n[1];let e=Math.random()*t;for(let n of i)if(e-=n[1],e<=0)return n[0];return i[i.length-1][0]}function jc(i,t,e,n,s,r,o){let a=e-i,l=n-t,c=a*a+l*l,h=c>1e-12?((s-i)*a+(r-t)*l)/c:0;h=Ve(h,0,1);let f=i+a*h,u=t+l*h;return o.t=h,o.x=f,o.y=u,o.dist=Math.hypot(s-f,r-u),o}function bf(){let e=document.createElement("canvas");e.width=1536,e.height=768;let n=e.getContext("2d"),s=n.createImageData(1536,768),r=s.data,o=76;for(let h=0;h<768;h++)for(let f=0;f<1536;f++){let u=Math.floor(f/o),d=f-u*o,p=Ui(u,3),_=ve(f*.05+p*40,h*.006,3),g=Math.sin((f*.18+_*6+p*30)*.5)*.5+.5,m=.72+.5*p+.32*_+.1*g,S=Math.min(d,o-d);S<2.2?m*=.35+S*.28:S<4&&(m*=1.06);let T=h/768,y=T>.885||T>.055&&T<.075,b=(h*1536+f)*4,w=38*m,C=25*m,v=18*m;y&&(w*=.62,C*=.6,v*=.62),r[b]=w,r[b+1]=C,r[b+2]=v,r[b+3]=255}n.putImageData(s,0,0);let a=n.createRadialGradient(1536/2,768*.46,0,1536/2,768*.46,768*.85);a.addColorStop(0,"rgba(255,170,90,0.13)"),a.addColorStop(.6,"rgba(255,120,60,0.03)"),a.addColorStop(1,"rgba(0,0,0,0.5)"),n.fillStyle=a,n.fillRect(0,0,1536,768);let l=Di(21);n.save(),n.translate(1536/2,768*.47),n.lineCap="round";for(let h=0;h<7;h++){n.strokeStyle=`rgba(255,214,150,${.025+l()*.025})`,n.lineWidth=16+l()*22,n.beginPath();let f=768*(.31+(l()-.5)*.02);n.arc(0,0,f,.35*Math.PI+l()*.1,1.8*Math.PI+l()*.15),n.stroke()}n.restore(),n.save(),n.font=`bold ${Math.floor(768*.42)}px "STKaiti","KaiTi","\u6977\u4F53","Kaiti SC","Noto Serif SC",serif`,n.textAlign="center",n.textBaseline="middle",n.fillStyle="rgba(255,90,60,0.05)",n.fillText("\u65AC",1536/2,768*.48),n.restore();let c=new Vn(e);return c.colorSpace=De,c.anisotropy=4,c}function Qc(){let i=new nn,t=new qi(.62,32,20),e=t.attributes.position;for(let f=0;f<e.count;f++){let u=e.getX(f),d=e.getZ(f),p=Math.atan2(d,u),_=1+.045*Math.cos(p*16);e.setX(f,u*_),e.setZ(f,d*_),e.setY(f,e.getY(f)*1.18)}t.computeVertexNormals();let n=new xe({color:"#b8221f",emissive:new Mt("#ff5a1a"),emissiveIntensity:1.25,roughness:.65}),s=new Xt(t,n);s.position.y=-1.3,i.add(s);let r=new xe({color:"#1c1410",roughness:.6}),o=new Xt(new Hn(.32,.4,.16,20),r);o.position.y=-1.3+.62*1.18;let a=new Xt(new Hn(.34,.26,.14,20),r);a.position.y=-1.3-.62*1.18,i.add(o,a);let l=new Xt(new Hn(.018,.018,1,6),new xe({color:"#2a1a10",roughness:.9}));l.position.y=-.5+.1,i.add(l);let c=new Xt(new Xi(.1,.55,8),new xe({color:"#d9a441",roughness:.5,emissive:new Mt("#ff9a30"),emissiveIntensity:.2}));c.rotation.x=Math.PI,c.position.y=-1.3-.62*1.18-.35,i.add(c);let h=new Zi("#ff8a44",14,14,1.6);return h.position.set(0,-1.3,.6),i.add(h),i.userData={mesh:s,light:h,phase:Math.random()*6},i}var fl=class{constructor(t=42){this.count=t;let e=new gn(.3,.2,2,1),n=e.attributes.position;for(let a=0;a<n.count;a++)n.setZ(a,Math.abs(n.getX(a))*-.4);let s=new ii({color:"#ffffff",side:Ke,transparent:!0,opacity:.85,depthWrite:!1});this.mesh=new si(e,s,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1;let r=new Mt,o=["#ffc1d6","#ffb0c8","#ffd9e6","#ff9dbb"];this.data=[];for(let a=0;a<t;a++)r.set(o[a%o.length]),this.mesh.setColorAt(a,r),this.data.push({x:0,y:0,z:Q(-4,2),s:Q(.6,1.3),vx:Q(-.3,.3),vy:Q(-.7,-.3),rx:Q(0,Et),ry:Q(0,Et),rz:Q(0,Et),wx:Q(-2,2),wy:Q(-2,2),wz:Q(-2,2),ph:Q(0,Et)});this.bounds={left:-10,right:10,top:8,bottom:-8},this.reset(),this.dummy=new Ae}reset(){let t=this.bounds;for(let e of this.data)e.x=Q(t.left,t.right),e.y=Q(t.bottom,t.top)}update(t,e){let n=this.bounds,s=this.dummy;for(let r=0;r<this.count;r++){let o=this.data[r];o.x+=(o.vx+Math.sin(e*.7+o.ph)*.5)*t,o.y+=o.vy*t,o.rx+=o.wx*t,o.ry+=o.wy*t,o.rz+=o.wz*t,o.y<n.bottom-1&&(o.y=n.top+1,o.x=Q(n.left,n.right)),o.x>n.right+1&&(o.x=n.left-1),o.x<n.left-1&&(o.x=n.right+1),s.position.set(o.x,o.y,o.z),s.rotation.set(o.rx,o.ry,o.rz),s.scale.setScalar(o.s),s.updateMatrix(),this.mesh.setMatrixAt(r,s.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}},dl=class{constructor(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.tex=new Vn(this.canvas),this.tex.colorSpace=De,this.mesh=new Xt(new gn(1,1),new xe({map:this.tex,transparent:!0,roughness:.3,depthWrite:!1})),this.mesh.receiveShadow=!0,this.dirty=!1,this.fadeTimer=0,this.resize(1.7)}resize(t){(!(t>0)||!isFinite(t))&&(t=1.7);let e=640,n=Math.max(512,Math.min(1800,Math.round(e*t)));(this.canvas.width!==n||this.canvas.height!==e)&&(this.canvas.width=n,this.canvas.height=e,this.tex.dispose(),this.tex.needsUpdate=!0)}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.dirty=!0}splat(t,e,n,s=.06,r=0){let o=this.ctx,a=this.canvas.height,l=t*this.canvas.width,c=e*a,h=s*a;o.save(),o.translate(l,c),o.rotate(r),o.fillStyle=n,o.globalAlpha=.6;for(let d=0;d<6;d++){let p=(Math.random()-.5)*h*.9,_=(Math.random()-.5)*h*.7;o.beginPath(),o.arc(p,_,h*(.38+Math.random()*.4),0,Et),o.fill()}let f=7+Math.floor(Math.random()*6);for(let d=0;d<f;d++){let p=Math.random()*Et,_=h*(.9+Math.random()*1.5),g=h*(.2+Math.random()*.2),m=Math.cos(p),S=Math.sin(p),T=m*_,y=S*_;o.beginPath(),o.moveTo(-S*g,m*g),o.quadraticCurveTo(T*.55-S*g*.35,y*.55+m*g*.35,T,y),o.quadraticCurveTo(T*.55+S*g*.35,y*.55-m*g*.35,S*g,-m*g),o.closePath(),o.fill(),Math.random()<.8&&(o.beginPath(),o.arc(m*_*1.12,S*_*1.12,h*(.05+Math.random()*.09),0,Et),o.fill())}let u=8+Math.floor(Math.random()*10);for(let d=0;d<u;d++){let p=Math.random()*Et,_=h*(1.4+Math.random()*3.2);o.beginPath(),o.arc(Math.cos(p)*_,Math.sin(p)*_*.8,h*(.03+Math.random()*.08),0,Et),o.fill()}o.globalAlpha=.28,o.fillStyle="#ffffff",o.beginPath(),o.ellipse(-h*.15,-h*.2,h*.32,h*.18,-.4,0,Et),o.fill(),o.restore(),this.dirty=!0}update(t){if(this.fadeTimer+=t,this.fadeTimer>=1&&this.canvas.width>0&&this.canvas.height>0){this.fadeTimer=0;let e=this.canvas.width,n=this.canvas.height,s=this.ctx.getImageData(0,0,e,n),r=s.data,o=!1;for(let a=3;a<r.length;a+=4)r[a]>0&&(r[a]=r[a]>7?r[a]-7:0,o=!0);o&&(this.ctx.putImageData(s,0,0),this.dirty=!0)}this.dirty&&(this.tex.needsUpdate=!0,this.dirty=!1)}};var Sf=30,F_=12.6,wf=-5,Tf=-4.96,O_={uniforms:{tDiffuse:{value:null},uSat:{value:1},uTint:{value:new R(1,1,1)},uVig:{value:.5},uAber:{value:0},uFlash:{value:0},uFlashColor:{value:new R(1,1,1)},uFocus:{value:0},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uSat, uVig, uAber, uFlash, uFocus, uTime;
    uniform vec3 uTint, uFlashColor;
    varying vec2 vUv;
    void main() {
      vec2 d = vUv - 0.5;
      float ab = uAber * (0.4 + length(d));
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + d * ab).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - d * ab).b;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col *= uTint;
      float r = length(d * vec2(1.0, 0.85));
      float v = smoothstep(0.95, 0.22, r);
      col *= mix(1.0, v, uVig + uFocus * 0.5);
      // \u5FC3\u773C\uFF1A\u8FB9\u7F18\u7684\u653E\u5C04\u5149\u7EBF
      float ang = atan(d.y, d.x);
      float rays = smoothstep(0.55, 1.0, sin(ang * 26.0 + uTime * 0.6) * 0.5 + 0.5) * smoothstep(0.25, 0.75, r);
      col += vec3(0.5, 0.75, 1.0) * rays * uFocus * 0.10;
      col += uFlashColor * uFlash;
      gl_FragColor = vec4(col, 1.0);
    }
  `},pl=class{constructor(t){this.canvas=t;let e=new Vs({canvas:t,antialias:!1,powerPreference:"high-performance"});this.renderer=e,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),e.setPixelRatio(this.pixelRatio),e.toneMapping=ri,e.toneMappingExposure=.95,e.shadowMap.enabled=!0,e.shadowMap.type=$i,this.scene=new ei,this.scene.background=new Mt("#1a110c"),this.camera=new Ne(Sf,1,1,200),this.camDist=30,this.camera.position.set(0,0,this.camDist),this.camera.lookAt(0,0,0);let n=new Ii(e);this.scene.environment=n.fromScene(new Ys,.04).texture,this.scene.environmentIntensity=.42,n.dispose(),this.buildLights(),this.buildBackdrop(),this.world=new nn,this.fx=new nn,this.scene.add(this.world,this.fx);let s=e.getSize(new Rt),r=new Re(s.x,s.y,{type:Fe,samples:4});this.composer=new ol(e,r),this.composer.addPass(new al(this.scene,this.camera)),this.bloom=new Xs(new Rt(s.x,s.y),.38,.6,1.1),this.composer.addPass(this.bloom),this.grade=new Ws(O_),this.composer.addPass(this.grade),this.composer.addPass(new ll),this.time=0,this.shakeAmt=0,this.flash=0,this.aber=0,this.bounds={left:-8,right:8,top:4.5,bottom:-4.5,width:16,height:9},this.gradeTarget={sat:1,tint:[1,1,1],vig:.5,focus:0},this.width=window.innerWidth||1280,this.height=window.innerHeight||720,this.resize(),window.addEventListener("resize",()=>this.resize())}buildLights(){let t=this.scene,e=new Gn("#fff0dc",2);e.position.set(-2.6,4.2,14),e.target.position.set(0,0,0),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.normalBias=.03,e.shadow.radius=4,t.add(e,e.target),this.key=e;let n=new Gn("#8fb4ff",.55);n.position.set(9,1,9),t.add(n);let s=new Gn("#ffb070",1.1);s.position.set(2,6,-10),t.add(s),t.add(new Yi("#ffffff","#4a3324",.3))}buildBackdrop(){let t=bf();this.wall=new Xt(new gn(80,40),new xe({map:t,roughness:.88,metalness:0})),this.wall.position.z=wf,this.wall.receiveShadow=!0,this.scene.add(this.wall),this.splats=new dl,this.splats.mesh.position.z=Tf,this.scene.add(this.splats.mesh),this.lanterns=[Qc(),Qc()],this.lanterns.forEach(e=>{e.position.z=-2.4,this.scene.add(e)}),this.petals=new fl(46),this.scene.add(this.petals.mesh)}resize(){let t=window.innerWidth,e=window.innerHeight;if(!(t>0&&e>0))return;this.width=t,this.height=e;let n=t/e,s=Math.tan(Sf*Math.PI/360);this.camDist=Math.max(30,F_/(2*s*n)),this.camera.aspect=n,this.camera.position.z=this.camDist,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(t,e);let r=2*this.camDist*s,o=r*n;this.bounds={left:-o/2,right:o/2,top:r/2,bottom:-r/2,width:o,height:r};let l=(this.camDist-wf)/this.camDist;this.wall.scale.set(Math.max(1,o*l/60),Math.max(1,r*l/30),1);let c=this.camDist-Tf;this.splats.mesh.scale.set(o*(c/this.camDist),r*(c/this.camDist),1),this.splats.resize(n);let h=this.bounds.width/2-4.8;this.lanterns[0].position.set(-h,this.bounds.top+.2,-2.4),this.lanterns[1].position.set(h,this.bounds.top+.2,-2.4),this.lanterns.forEach(u=>u.visible=n>1.3&&t>900),this.petals.bounds={left:this.bounds.left,right:this.bounds.right,top:this.bounds.top,bottom:this.bounds.bottom},this.petals.reset();let f=this.key.shadow.camera;f.left=-o/2-3,f.right=o/2+3,f.top=r/2+3,f.bottom=-r/2-3,f.near=1,f.far=60,f.updateProjectionMatrix()}project(t,e,n=0,s={x:0,y:0}){let r=B_.set(t,e,n).project(this.camera);return s.x=(r.x*.5+.5)*this.width,s.y=(-r.y*.5+.5)*this.height,s}screenToWorld(t,e,n={x:0,y:0}){let s=this.bounds;return n.x=(t/this.width-.5)*s.width,n.y=(.5-e/this.height)*s.height,n}splat(t,e,n,s,r){let o=this.bounds;this.splats.splat(t/o.width+.5,.5-e/o.height,n,s,r)}shake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}setFlash(t,e=[1,1,1]){this.flash=Math.max(this.flash,t),this.grade.uniforms.uFlashColor.value.set(e[0],e[1],e[2])}kick(t){this.aber=Math.max(this.aber,t)}setGrade(t){Object.assign(this.gradeTarget,t)}setQuality(t){t==="low"&&(this.key.castShadow=!1,this.bloom.enabled=!1,this.pixelRatio=1),this.resize()}degrade(){let t=[()=>this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.5),!0),()=>this.key.castShadow&&(this.key.castShadow=!1,!0),()=>this.bloom.enabled&&(this.bloom.enabled=!1,!0),()=>this.pixelRatio>.75&&(this.pixelRatio=Math.max(.75,this.pixelRatio*.85),!0)];for(let e of t)if(e())return this.resize(),!0;return!1}render(t){this.update(t),this.composer.render(t)}update(t){this.time+=t;let e=this.time;for(let o of this.lanterns){let a=o.userData.phase;o.rotation.z=Math.sin(e*.9+a)*.07,o.userData.mesh.material.emissiveIntensity=1.15+.15*Math.sin(e*3.1+a*2)}this.petals.update(t,e),this.splats.update(t),this.shakeAmt=qn(this.shakeAmt,0,9,t);let n=this.shakeAmt;this.camera.position.x=n>.001?(Math.random()-.5)*n:0,this.camera.position.y=n>.001?(Math.random()-.5)*n:0,this.camera.updateMatrixWorld(!0);let s=this.grade.uniforms,r=this.gradeTarget;s.uSat.value=qn(s.uSat.value,r.sat,6,t),s.uVig.value=qn(s.uVig.value,r.vig,6,t),s.uFocus.value=qn(s.uFocus.value,r.focus,8,t);for(let o=0;o<3;o++)s.uTint.value.setComponent(o,qn(s.uTint.value.getComponent(o),r.tint[o],6,t));this.flash=qn(this.flash,0,10,t),this.aber=qn(this.aber,0,8,t),s.uFlash.value=this.flash,s.uAber.value=this.aber,s.uTime.value=e}},B_=new R;var Qe=Math.PI,ie=Math.sin,ee=Math.cos;function ts(i){let t=i.index?i.toNonIndexed():i;for(let e of Object.keys(t.attributes))e!=="position"&&e!=="normal"&&e!=="uv"&&t.deleteAttribute(e);return t.attributes.normal||t.computeVertexNormals(),t.attributes.uv||t.setAttribute("uv",new re(new Float32Array(t.attributes.position.count*2),2)),t.clearGroups(),t}var Ef=new te,Af=new sn,Cf=new mn,z_=new R,k_=new R;function Kr(i,{p:t=[0,0,0],r:e=[0,0,0],s:n=1}={}){Cf.set(e[0],e[1],e[2],"YXZ"),Af.setFromEuler(Cf);let s=typeof n=="number"?[n,n,n]:n;return Ef.compose(z_.set(t[0],t[1],t[2]),Af,k_.set(s[0],s[1],s[2])),i.applyMatrix4(Ef),i}function V_(i,t,e){let n=[],s=[],r=[];for(let a=0;a<=i;a++){let l=a/i;for(let c=0;c<=t;c++){let h=c/t*2-1,f=e(l,h);n.push(f[0],f[1],f[2]),s.push(l,(h+1)/2)}}for(let a=0;a<i;a++)for(let l=0;l<t;l++){let c=a*(t+1)+l,h=c+t+1;r.push(c,h,c+1,h,h+1,c+1)}let o=new _e;return o.setAttribute("position",new ue(n,3)),o.setAttribute("uv",new ue(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function th({wSeg:i=56,hSeg:t=36,shape:e}){let n=i+1,s=t+1,r=new Float32Array(n*s*3),o=new Float32Array(n*s*3),a=new Float32Array(n*s*2),l=new R,c=new R,h=new R,f=new R,u=new R,d=new R,p=.001;for(let T=0;T<s;T++){let y=Qe*T/t,b=Math.min(Math.max(y,.004),Qe-.004);for(let w=0;w<n;w++){let C=Et*(w%i)/i;e(y,T===0||T===s-1?0:C,l),e(b+p,C,c),e(b-p,C,h),e(b,C+p,f),e(b,C-p,u),c.sub(h),f.sub(u),d.crossVectors(f,c).normalize();let v=T*n+w;r[v*3]=l.x,r[v*3+1]=l.y,r[v*3+2]=l.z,o[v*3]=d.x,o[v*3+1]=d.y,o[v*3+2]=d.z,a[v*2]=w/i,a[v*2+1]=1-T/t}}let _=[];for(let T=0;T<t;T++)for(let y=0;y<i;y++){let b=T*n+y,w=b+1,C=b+n,v=C+1;T!==0&&_.push(b,w,C),T!==t-1&&_.push(w,v,C)}let g=0;for(let T=0;T<_.length;T+=3){let y=_[T]*3,b=_[T+1]*3,w=_[T+2]*3;g+=r[y]*(r[b+1]*r[w+2]-r[b+2]*r[w+1])-r[y+1]*(r[b]*r[w+2]-r[b+2]*r[w])+r[y+2]*(r[b]*r[w+1]-r[b+1]*r[w])}if(g<0)for(let T=0;T<_.length;T+=3){let y=_[T+1];_[T+1]=_[T+2],_[T+2]=y}let m=0;for(let T=0;T<n*s;T++)m+=o[T*3]*r[T*3]+o[T*3+1]*r[T*3+1]+o[T*3+2]*r[T*3+2];if(m<0)for(let T=0;T<o.length;T++)o[T]=-o[T];let S=new _e;return S.setAttribute("position",new re(r,3)),S.setAttribute("normal",new re(o,3)),S.setAttribute("uv",new re(a,2)),S.setIndex(_),ts(S)}function Rf(i,t,e){let n=new R,s=new R,r=new R,o=new R,a=new R,l=.001;i(t,e,n),i(t+l,e,s),i(t-l,e,r),i(t,e+l,o),i(t,e-l,a),s.sub(r),o.sub(a);let c=new R().crossVectors(o,s).normalize();return c.dot(n)<0&&c.negate(),{p:n.clone(),n:c}}var eh={apple(i,t,e,n=.92){let s=ie(i),r=ee(i),o=1-.34*Ue(i,.36)-.14*Ue(Qe-i,.38);o*=1+.03*ee(5*t)*Kt(1.6,2.7,i)*s,o*=1+.018*ie(t+1.3)*s;let a=1+.08*r;e.set(s*ee(t)*o*a,r*o*.9,s*ie(t)*o*a).multiplyScalar(n)},orange(i,t,e,n=.92){let s=ie(i),r=ee(i),o=1-.06*Ue(i,.2)-.03*Ue(Qe-i,.2);e.set(s*ee(t)*o,r*o*.95,s*ie(t)*o).multiplyScalar(n)},lemon(i,t,e,n=.66){let s=ie(i),r=ee(i),o=1+.2*Ue(i,.22)+.13*Ue(Qe-i,.22);e.set(s*ee(t)*o*1,r*o*1.38,s*ie(t)*o*.96).multiplyScalar(n)},kiwi(i,t,e,n=.68){let s=ie(i),r=ee(i),o=(1-.035*Ue(i,.2)-.03*Ue(Qe-i,.2))*(1+.05*r);e.set(s*ee(t)*o*.96,r*o*1.2,s*ie(t)*o*.86).multiplyScalar(n)},watermelon(i,t,e,n=.92){let s=ie(i),r=ee(i),o=(1-.05*Ue(i,.14)-.03*Ue(Qe-i,.14))*(1+.012*ee(9*t)*s);e.set(s*ee(t)*o,r*o*1.24,s*ie(t)*o*.97).multiplyScalar(n)},pineapple(i,t,e,n=.76){let s=ie(i),r=ee(i),o=1-.09*Ue(i,.35)-.08*Ue(Qe-i,.5);e.set(s*ee(t)*o,r*o*1.34,s*ie(t)*o).multiplyScalar(n)},peach(i,t,e,n=.86){let s=ie(i),r=ee(i),o=Math.pow(Math.max(0,ee(t)),4)*Math.pow(s,1.5),a=1-.12*Ue(i,.32)+.06*Ue(Qe-i,.22);a*=1-.12*o,e.set(s*ee(t)*a,r*a*.97,s*ie(t)*a*.94).multiplyScalar(n)},strawberry(i,t,e,n=.84){let s=ie(i),r=ee(i),o=s*(1.14-.66*(i/Qe))*(1+.03*ee(6*t)*s),a=r*1.06-.16*Ue(i,.45)-.05;e.set(o*ee(t),a,o*ie(t)).multiplyScalar(n)},coconut(i,t,e,n=.9){let s=ie(i),r=ee(i),o=1+.045*ee(3*t)*s*s-.02*Ue(i,.2);e.set(s*ee(t)*o,r*o*1.06,s*ie(t)*o).multiplyScalar(n)},dragon(i,t,e,n=.82){let s=ie(i),r=ee(i),o=1-.05*Ue(i,.2)-.03*Ue(Qe-i,.2);e.set(s*ee(t)*o*.94,r*o*1.16,s*ie(t)*o*.94).multiplyScalar(n)},pear(i,t,e,n=.86){let s=ie(i),r=ee(i),o=i/Qe,a=.56+.5*Kt(.15,.7,o),l=1-.04*Ue(i,.18);e.set(s*ee(t)*a*l,r*1.22*l,s*ie(t)*a*l).multiplyScalar(n)},star(i,t,e,n=.8){let s=ie(i),r=ee(i),o=.62+.38*(1-Math.pow(Math.abs(ie(2.5*t)),.8));e.set(s*ee(t)*o,r*1.5*(.92+.08*s),s*ie(t)*o).multiplyScalar(n)},sphere(i,t,e,n=.84){e.set(ie(i)*ee(t),ee(i),ie(i)*ie(t)).multiplyScalar(n)},banana(i,t,e){let n=i/Qe,s=1.5,r=2.25,o=(n-.5)*s,a=r*ie(o),l=r*ee(o)-r,c=ie(o),h=ee(o),f=Math.pow(ie(Qe*n),.42),u=.42+.58*Kt(.03,.3,n),d=.72+.28*Kt(1,.86,n),p=.4*f*u*d,_=1+.1*ee(5*t)*Kt(.02,.3,n),g=ee(t)*p*_,m=ie(t)*p*_*.94;e.set(a+c*g,l+h*g,m)}};function li(i,t,e,n=10,s=8){let r=new Sr(i.map(u=>new R(u[0],u[1],u[2]))),o=r.computeFrenetFrames(n,!1),a=[],l=[],c=[],h=[];for(let u=0;u<=n;u++){let d=u/n,p=r.getPointAt(d),_=o.normals[u],g=o.binormals[u],m=t+(e-t)*d;for(let S=0;S<=s;S++){let T=S/s*Et,y=ee(T),b=ie(T),w=_.x*y+g.x*b,C=_.y*y+g.y*b,v=_.z*y+g.z*b;a.push(p.x+w*m,p.y+C*m,p.z+v*m),l.push(w,C,v),c.push(S/s,d)}}for(let u=0;u<n;u++)for(let d=0;d<s;d++){let p=u*(s+1)+d,_=p+s+1;h.push(p,_,p+1,_,_+1,p+1)}let f=new _e;return f.setAttribute("position",new ue(a,3)),f.setAttribute("normal",new ue(l,3)),f.setAttribute("uv",new ue(c,2)),f.setIndex(h),ts(f)}function Zs({len:i=1,width:t=.3,droop:e=.2,fold:n=.3,nu:s=12,nv:r=6}={}){let o=V_(s,r,(a,l)=>{let c=t*Math.pow(ie(Qe*Math.pow(a,.72)),.85),h=a*i,f=l*c,u=n*Math.abs(l)*c-e*a*a*i;return[h,u,f]});return ts(o)}function Pf(i){let t=[];return[{n:14,elev:.8,len:1.55,width:.2,droop:.42,y:0},{n:11,elev:1.08,len:1.4,width:.19,droop:.34,y:.04},{n:8,elev:1.32,len:1.15,width:.17,droop:.24,y:.08},{n:5,elev:1.48,len:.8,width:.15,droop:.12,y:.1}].forEach((n,s)=>{for(let r=0;r<n.n;r++){let o=r/n.n*Et+s*.37,a=Zs({len:n.len,width:n.width,droop:n.droop,fold:.5,nu:10,nv:4});Kr(a,{p:[ee(o)*.06,i+n.y-.05,ie(o)*.06],r:[0,-o,n.elev]}),t.push(a)}}),jr(t)}function nh(i,t=1,e=8,n=!0){let s=[];for(let r=0;r<e;r++){let o=r/e*Et+.2,a=Zs({len:.62*t,width:.2*t,droop:-.05*t,fold:.6,nu:8,nv:4});Kr(a,{p:[ee(o)*.04*t,i.y+.02,ie(o)*.04*t],r:[0,-o,-.28+r%2*.22]}),s.push(a)}return n&&s.push(li([[0,i.y,0],[.02,i.y+.12,0],[.06,i.y+.26,0]],.045,.03,6,6)),jr(s)}function If(i,t=46){let e=[];for(let s=0;s<t;s++){let r=(s+.5)/t,o=Math.acos(1-2*r);if(o<.32||o>Qe-.3)continue;let a=s*2.399963,{p:l,n:c}=Rf(i,o,a),h=new R(0,1,0),f=h.clone().sub(c.clone().multiplyScalar(h.dot(c))).normalize(),u=c.clone().multiplyScalar(.72).add(f.multiplyScalar(.7)).normalize(),d=new R().crossVectors(u,c).normalize(),p=new R().crossVectors(d,u).normalize(),_=.42+.12*Math.sin(s*1.7),g=Zs({len:_,width:.13,droop:.28,fold:.5,nu:7,nv:3}),m=new te().makeBasis(u,p,d);m.setPosition(l.x,l.y,l.z),g.applyMatrix4(m),e.push(g)}return jr(e)}function Lf(i,t){let e=[],n=new R(0,1,0);for(let s of t){let{p:r,n:o}=Rf(i,s.th,s.ph),a=new Xi(s.r,s.h,5,1,!1);a.translate(0,s.h/2-.04,0);let l=new sn().setFromUnitVectors(n,o.clone().add(new R(s.lx||0,s.ly||0,0)).normalize()),c=new te().compose(r,l,new R(1,1,1));a.applyMatrix4(c),e.push(ts(a))}return jr(e)}function jr(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*2),r=0;for(let a of i){let l=a.attributes.position.count;e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.uv.array,r*2),r+=l}let o=new _e;return o.setAttribute("position",new re(e,3)),o.setAttribute("normal",new re(n,3)),o.setAttribute("uv",new re(s,2)),o}function ih(i){let t=jr(i),e=0;return i.forEach((n,s)=>{let r=n.attributes.position.count;t.addGroup(e,r,s),e+=r}),t}function sh(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function rh(i,t,e=!0){let n=new Vn(i);return n.colorSpace=t?De:Pn,e&&(n.wrapS=Ts),n.anisotropy=8,n}function Df(i,t,e,{bump:n=!0}={}){let s=sh(i,t),r=s.getContext("2d"),o=r.createImageData(i,t),a=null,l=null;n&&(a=sh(i,t),l=a.getContext("2d").createImageData(i,t));let c={r:0,g:0,b:0,h:.5},h=o.data;for(let f=0;f<t;f++){let u=(f+.5)/t;for(let d=0;d<i;d++){let p=(d+.5)/i;c.h=.5,e(p,u,c);let _=(f*i+d)*4;if(h[_]=c.r,h[_+1]=c.g,h[_+2]=c.b,h[_+3]=255,l){let g=c.h*255;l.data[_]=g,l.data[_+1]=g,l.data[_+2]=g,l.data[_+3]=255}}}return r.putImageData(o,0,0),a&&a.getContext("2d").putImageData(l,0,0),{color:rh(s,!0),bump:a?rh(a,!1):null}}function es(i,t,e,{srgb:n=!0,wrapS:s=!1}={}){let r=sh(i,t),o=r.getContext("2d");return e(o,i,t),rh(r,n,s)}var ml=()=>new Promise(i=>{let t=!1,e=()=>{t||(t=!0,i())};requestAnimationFrame(e),setTimeout(e,40)});var gl={d1:9,d2:9,id:0};function oh(i,t,e,n){let s=i*e,r=t*n,o=Math.floor(s),a=Math.floor(r),l=9,c=9,h=0;for(let f=-1;f<=1;f++)for(let u=-1;u<=1;u++){let d=o+u,p=a+f,_=(d%e+e)%e,g=Ui(_,p),m=Ui(_+101,p+37),S=d+g-s,T=p+m-r,y=Math.sqrt(S*S+T*T);y<l?(c=l,l=y,h=g*7.13+m*3.7):y<c&&(c=y)}return gl.d1=l,gl.d2=c,gl.id=h,gl}var H_={apple:{w:512,h:256,fn(i,t,e){let n=ve(i*6,t*2.2,4,6),s=ve(i*30,t*3,3,30),r=Ve(.55+.6*n+.3*s,0,1),o=st(150,216,r),a=st(10,30,r),l=st(26,44,r),c=Kt(.42,0,t)*(.5+.45*n)+Kt(.86,1,t)*.22;o=st(o,218,c),a=st(a,192,c),l=st(l,72,c);let h=Math.floor(i*96),f=Math.floor(t*72);if(Ui(h,f)>.9){let u=Math.hypot(i*96-h-.5,t*72-f-.5),d=Kt(.26,.04,u)*.5;o=st(o,240,d),a=st(a,214,d),l=st(l,160,d)}e.r=o,e.g=a,e.b=l,e.h=.5+.08*n}},orange:{w:512,h:256,fn(i,t,e){let n=ve(i*5,t*3,3,5),s=oh(i,t,128,64),r=Kt(.36,.06,s.d1),o=.5+.5*n,a=st(238,255,o),l=st(126,160,o),c=st(8,34,o),h=1-r*.24;a*=h,l*=h*.97,c*=h;let f=Math.max(Kt(.08,0,t),Kt(.92,1,t));a=st(a,226,f*.5),l=st(l,156,f*.5),c=st(c,44,f*.5),e.r=a,e.g=l,e.b=c,e.h=.64-r*.45+.05*n}},kiwi:{w:512,h:256,fn(i,t,e){let n=ve(i*72,t*36,3,72),s=ve(i*160,t*14,2,160),o=.85+.25*ve(i*6,t*3,3,6)+.5*n*.3+.35*s*.3,a=132*o,l=94*o,c=58*o;if(s>.32){let h=(s-.32)*1.4;a=st(a,178,h),l=st(l,138,h),c=st(c,92,h)}e.r=a,e.g=l,e.b=c,e.h=.5+.28*n+.22*s}},pineapple:{w:768,h:384,fn(i,t,e){let r=i*9,o=t*12,a=(r+o)%1,l=((r-o)%1+1)%1,c=Math.abs(a-.5)*2,h=Math.abs(l-.5)*2,f=Math.max(c,h),u=Math.hypot(c,h)*.7071,d=1-f*f,p=Kt(.72,1,f),_=Kt(.34,.1,u),g=ve(i*20,t*10,3,20),m=Ve(.5+.5*g,0,1),S=st(208,246,d*.7+m*.3),T=st(146,196,d*.7+m*.3),y=st(36,74,d*.7+m*.3),b=Kt(.4,0,t)*.45;S=st(S,168,b),T=st(T,168,b),y=st(y,52,b),S=st(S,96,p),T=st(T,84,p),y=st(y,28,p),S=st(S,70,_),T=st(T,42,_),y=st(y,16,_),e.r=S,e.g=T,e.b=y,e.h=.18+.72*d*(1-p)-_*.25}},watermelon:{w:512,h:256,fn(i,t,e){let n=ve(i*5,t*3,3,5)*.55+.1*Math.sin(t*Math.PI*7+i*Et*2),s=Math.sin((i*9+n)*Et),r=Kt(-.08,.38,s),o=ve(i*72,t*36,3,72),a=Kt(.07,0,Math.abs(ul(i*44+n*9,t*22,44)))*(1-r)*.55,l=st(136,26,r)+o*10,c=st(206,92,r)+o*12,h=st(100,42,r)+o*8;l=st(l,54,a),c=st(c,128,a),h=st(h,58,a),e.r=l,e.g=c,e.b=h,e.h=.5+.03*o}},peach:{w:512,h:256,fn(i,t,e){let n=Math.min(Math.abs(i-.62),1-Math.abs(i-.62)),s=Math.exp(-Math.pow(n/.26,2)),r=ve(i*4,t*2.6,3,4),o=Ve(s*(.8+.5*r)+.22*r+.04+Kt(.3,0,t)*.1,0,1),a=ve(i*168,t*84,2,168),l=st(255,234,o)+a*9,c=st(216,84,o)+a*9,h=st(134,92,o)+a*9,f=Kt(.18,0,t)*.5;l=st(l,230,f),c=st(c,200,f),h=st(h,110,f),e.r=l,e.g=c,e.b=h,e.h=.5+a*.18}},strawberry:{w:512,h:384,fn(i,t,e){let s=t*26,r=Math.floor(s),a=i*20+(r&1)*.5,l=Math.floor(a),c=a-l-.5,h=(s-r-.5)*1.25,f=Math.hypot(c,h),u=Kt(.16,.07,f),d=Kt(.44,.1,f),p=ve(i*6,t*4,3,6),_=214+p*24,g=16+p*12,m=32+p*10,S=1-d*.32;_*=S,g*=S,m*=S,_=st(_,236,Kt(.25,0,t)*.2),g=st(g,84,Kt(.25,0,t)*.25),_=st(_,246,u),g=st(g,214,u),m=st(m,108,u),e.r=_,e.g=g,e.b=m,e.h=.62-d*.42+u*.12}},banana:{w:512,h:256,fn(i,t,e){let n=i*5%1,s=Math.min(n,1-n),r=Kt(.07,0,s),o=ve(i*8,t*6,3,8),a=248+o*10,l=214+o*14,c=54+o*16,h=Math.floor(i*80),f=Math.floor(t*70);if(Ui(h+7,f+3)>.955){let _=Math.hypot(i*80-h-.5,t*70-f-.5),g=Kt(.34,.1,_)*.7;a=st(a,120,g),l=st(l,78,g),c=st(c,34,g)}a=st(a,168,r*.6),l=st(l,160,r*.6),c=st(c,40,r*.6);let u=Kt(.2,.04,t);a=st(a,138,u),l=st(l,156,u),c=st(c,58,u);let d=Kt(.05,0,t);a=st(a,96,d),l=st(l,74,d),c=st(c,44,d);let p=Kt(.93,.975,t);a=st(a,52,p),l=st(l,38,p),c=st(c,24,p),e.r=a,e.g=l,e.b=c,e.h=.55+r*.35}},coconut:{w:512,h:256,fn(i,t,e){let n=ve(i*44,t*88,4,44),s=ve(i*8,t*6,3,8),r=ul(i*160,t*22,160),o=.72+.32*s+.25*n,a=118*o,l=78*o,c=46*o;if(r>.25){let f=(r-.25)*1.6;a=st(a,168,f*.6),l=st(l,118,f*.6),c=st(c,74,f*.6)}let h=0;for(let f=0;f<3;f++){let u=i-(f/3+.08);u-=Math.round(u);let d=t-.115;h=Math.max(h,Kt(1,.55,Math.hypot(u/.062,d/.034)))}a=st(a,44,h),l=st(l,30,h),c=st(c,22,h),e.r=a,e.g=l,e.b=c,e.h=.5+.28*n+.2*Math.max(r,0)-h*.3}},lemon:{w:512,h:256,fn(i,t,e){let n=ve(i*5,t*3,3,5),s=oh(i,t,140,70),r=Kt(.3,.05,s.d1),o=255,a=st(214,238,.5+.5*n),l=st(30,62,.5+.5*n),c=1-r*.16;o*=c,a*=c,l*=c;let h=Math.max(Kt(.12,0,t),Kt(.88,1,t));o=st(o,214,h*.5),a=st(a,214,h*.5),l=st(l,60,h*.5),e.r=o,e.g=a,e.b=l,e.h=.62-r*.36+.05*n}},dragon:{w:512,h:256,fn(i,t,e){let n=ve(i*6,t*3,4,6),s=Ve(.5+.6*n,0,1),r=st(226,255,s),o=st(14,70,s),a=st(108,154,s),l=Math.max(Kt(.12,0,t),Kt(.88,1,t))*.4;r=st(r,120,l),o=st(o,190,l),a=st(a,80,l),e.r=r,e.g=o,e.b=a,e.h=.5+.06*n}},pear:{w:512,h:256,fn(i,t,e){let n=oh(i,t,22,11),s=Kt(.16,0,n.d2-n.d1),r=ve(i*6,t*3,4,6),a=Ui(Math.floor(i*200),Math.floor(t*100))>.985?1:0,l=st(170,214,.5+.5*r),c=st(222,244,.5+.5*r),h=255,f=.9+.12*Math.sin(n.id*40);l*=f,c*=f,l=st(l,250,s*.85),c=st(c,254,s*.85),l=st(l,255,a),c=st(c,255,a);let u=Kt(.55,1,t)*.25;l=st(l,110,u),c=st(c,180,u),e.r=l,e.g=c,e.b=h,e.h=.4+.35*s+.2*(1-n.d1)}},star:{w:512,h:256,fn(i,t,e){let n=i*5%1,s=Math.min(n,1-n),r=Kt(.05,0,s),o=ve(i*8,t*4,3,8),a=st(226,250,.5+.5*o),l=st(226,244,.5+.5*o),c=st(66,96,.5+.5*o);a=st(a,214,r),l=st(l,168,r),c=st(c,48,r);let h=Kt(.28,.5,s);a=st(a,170,h*.5),l=st(l,214,h*.35),c=st(c,60,h*.5),e.r=a,e.g=l,e.b=c,e.h=.5+r*.2}},golden:{w:512,h:256,fn(i,t,e){let n=ve(i*8,t*4,4,8),s=ve(i*34,t*3,3,34),r=.85+.2*n+.08*s;e.r=Ve(255*r,0,255),e.g=Ve(196*r,0,255),e.b=Ve(62*r,0,255),e.h=.5+.05*n}}};function Uf(i){let t=H_[i];return Df(t.w,t.h,t.fn)}var ln=512,it=ln/2,Zt=(i,t,e)=>{i.beginPath(),i.arc(it,it,t*it,0,Et),i.fillStyle=e,i.fill()},qe=(i,t,e=0,n=1)=>{let s=i.createRadialGradient(it,it,e*it,it,it,n*it);for(let[r,o]of t)s.addColorStop(r,o);return s};function He(i,t,e,n,s,r,o=2,a=.35){i.strokeStyle=r,i.lineCap="round";for(let l=0;l<e;l++){let c=l/e*Et+(t()-.5)*a,h=n+(s-n)*t()*.25,f=s-(s-n)*t()*.4;i.lineWidth=o*(.5+t()),i.beginPath(),i.moveTo(it+Math.cos(c)*h*it,it+Math.sin(c)*h*it),i.lineTo(it+Math.cos(c)*f*it,it+Math.sin(c)*f*it),i.stroke()}}function Qr(i,t,e,n,s,r,o){i.fillStyle=o;for(let a=0;a<e;a++){let l=t()*Et,c=n+(s-n)*Math.sqrt(t());i.beginPath(),i.arc(it+Math.cos(l)*c*it,it+Math.sin(l)*c*it,r*(.6+t()*.8),0,Et),i.fill()}}function Fi(i,t,e,n,s,r,o,a){i.save(),i.translate(t,e),i.rotate(n),i.beginPath(),i.ellipse(0,0,s,r,0,0,Et),i.fillStyle=o,i.fill(),a&&(i.beginPath(),i.ellipse(-s*.25,-r*.3,s*.4,r*.28,0,0,Et),i.fillStyle=a,i.fill()),i.restore()}function an(i,t=10,e=14){let n=i.getImageData(0,0,ln,ln),s=n.data;for(let r=0;r<ln;r++)for(let o=0;o<ln;o++){let a=ve(o/ln*e,r/ln*e,2)*t+ve(o/ln*e*4,r/ln*e*4,1)*t*.6,l=(r*ln+o)*4;s[l]+=a,s[l+1]+=a,s[l+2]+=a}i.putImageData(n,0,0)}function Nf(i,t,e,n,s,r,o,a,l){for(let h=0;h<e;h++){let f=h/e*Et+.05,u=(h+1)/e*Et-.05;i.beginPath(),i.moveTo(it+Math.cos((f+u)/2)*n*it*.6,it+Math.sin((f+u)/2)*n*it*.6),i.arc(it,it,s*it,f,u),i.closePath(),i.fillStyle=r,i.fill(),i.lineJoin="round",i.lineWidth=7,i.strokeStyle=o,i.stroke();let d=(f+u)/2;for(let p=0;p<46;p++){let _=f+(u-f)*(.1+.8*t()),g=n+(s-n-.06)*t(),m=it+Math.cos(_)*g*it,S=it+Math.sin(_)*g*it;i.beginPath(),i.ellipse(m,S,9+t()*6,2.6+t()*1.6,d,0,Et),i.fillStyle=t()<.5?a:l,i.fill()}}}function ah(i,t,e,n,s,r=3){i.beginPath();for(let o=0;o<=120;o++){let a=o/120*Et,l=(t+e*Math.cos(5*a))*it,c=it+Math.cos(a)*l,h=it+Math.sin(a)*l;o===0?i.moveTo(c,h):i.lineTo(c,h)}i.closePath(),i.fillStyle=n,i.fill(),s&&(i.lineWidth=r,i.strokeStyle=s,i.stroke())}function lh(i,t,e,n,s){i.save(),i.translate(t,e),i.fillStyle=s,i.beginPath();for(let r=0;r<8;r++){let o=r/8*Et,a=r%2===0?n:n*.22;i.lineTo(Math.cos(o)*a,Math.sin(o)*a)}i.closePath(),i.fill(),i.restore()}var G_={watermelon(i,t){Zt(i,1,"#1f6a2c"),Zt(i,.965,qe(i,[[.9,"#dff2c5"],[.97,"#a5d98a"],[1,"#5fb050"]])),Zt(i,.87,qe(i,[[0,"#ff2e4c"],[.4,"#ff2848"],[.78,"#ff4d63"],[.93,"#ff9ba2"],[1,"#ffd6d2"]])),He(i,t,200,.12,.82,"rgba(255,255,255,0.16)",2.2),He(i,t,160,.12,.8,"rgba(190,10,40,0.16)",2.4);let e=(n,s,r)=>{for(let o=0;o<n;o++){let a=o/n*Et+r+(t()-.5)*.25,l=s+(t()-.5)*.05;Fi(i,it+Math.cos(a)*l*it,it+Math.sin(a)*l*it,a,17,8.5,"#1a100f","rgba(120,100,95,0.7)")}};e(9,.56,.1),e(6,.3,.5),Qr(i,t,220,.05,.84,1.6,"rgba(255,255,255,0.28)"),an(i,7)},orange(i,t){Zt(i,1,"#ef8810"),Zt(i,.955,"#fff2d8"),Zt(i,.9,"#fff7e6"),Nf(i,t,10,.1,.9,qe(i,[[.1,"#ffb62e"],[.6,"#ff9c17"],[1,"#ff8a0a"]]),"#fff3d6","rgba(255,214,110,0.6)","rgba(230,118,0,0.32)"),Zt(i,.075,"#fff6df"),an(i,6)},kiwi(i,t){Zt(i,1,"#78563a"),Zt(i,.965,qe(i,[[.2,"#d8ea9c"],[.4,"#a6d84e"],[.78,"#6fbf30"],[1,"#86cf3c"]])),He(i,t,260,.26,.92,"rgba(236,247,176,0.42)",2.6),He(i,t,200,.26,.92,"rgba(60,140,20,0.3)",2.4),i.save(),i.translate(it,it),i.rotate(t()*Et);let e=i.createRadialGradient(0,0,8,0,0,.27*it);e.addColorStop(0,"#fbfde8"),e.addColorStop(.75,"#e6f1b8"),e.addColorStop(1,"rgba(210,232,140,0)"),i.fillStyle=e,i.beginPath(),i.ellipse(0,0,.27*it,.19*it,0,0,Et),i.fill();for(let n=0;n<40;n++){let s=n/40*Et+(t()-.5)*.05,r=.32*it+(t()-.5)*8,o=.245*it+(t()-.5)*6;Fi(i,Math.cos(s)*r,Math.sin(s)*o,s,8,3.6,"#17110c","rgba(150,140,120,0.6)")}i.restore(),an(i,7)},apple(i,t){Zt(i,1,"#b31a2b"),Zt(i,.975,"#ecd06a"),Zt(i,.955,qe(i,[[0,"#fff8d4"],[.5,"#fdf1bd"],[1,"#f6e39e"]])),He(i,t,130,.3,.94,"rgba(255,255,240,0.3)",2),He(i,t,100,.3,.94,"rgba(200,160,70,0.14)",2),i.save(),i.translate(it,it),i.rotate(t()*Et),i.translate(-it,-it),Qr(i,t,30,.44,.5,2,"rgba(160,120,50,0.55)"),ah(i,.27,.06,"#f4ebb6","#c49a4a",3);for(let e=0;e<5;e++){let n=e/5*Et,s=it+Math.cos(n)*.15*it,r=it+Math.sin(n)*.15*it;i.beginPath(),i.ellipse(s,r,.09*it,.06*it,n,0,Et),i.fillStyle="#e8d596",i.fill(),Fi(i,s,r,n+Math.PI/2,10,5.5,"#5d2c15","rgba(170,110,70,0.7)")}i.restore(),an(i,6)},lemon(i,t){Zt(i,1,"#f6d21f"),Zt(i,.95,"#fff6c8"),Zt(i,.88,"#fffbe0"),Nf(i,t,9,.1,.86,qe(i,[[.1,"#fff2a2"],[.6,"#ffe873"],[1,"#ffe15a"]]),"#fffbe2","rgba(255,250,190,0.7)","rgba(240,210,60,0.3)"),Zt(i,.07,"#fffbe6");for(let e=0;e<3;e++){let n=t()*Et;Fi(i,it+Math.cos(n)*.34*it,it+Math.sin(n)*.34*it,n,12,6,"#f4ecc4","rgba(255,255,255,0.7)")}an(i,6)},pineapple(i,t){Zt(i,1,"#7a5220"),Zt(i,.95,"#c9993a"),Zt(i,.915,qe(i,[[0,"#ffe066"],[.6,"#ffd54a"],[1,"#ffcb3a"]])),He(i,t,320,.18,.88,"rgba(255,244,170,0.5)",2.4),He(i,t,220,.18,.88,"rgba(232,160,0,0.28)",2.4),Zt(i,.25,qe(i,[[0,"#fff5bd"],[.8,"#ffe98c"],[1,"rgba(255,220,110,0.4)"]],0,.25)),i.beginPath(),i.arc(it,it,.25*it,0,Et),i.lineWidth=4,i.strokeStyle="rgba(224,170,40,0.6)",i.stroke(),Qr(i,t,40,.8,.9,3,"rgba(120,80,20,0.55)"),an(i,8)},peach(i,t){Zt(i,1,"#df6a5a"),Zt(i,.96,qe(i,[[0,"#e3452d"],[.32,"#f0882f"],[.62,"#ffb54c"],[1,"#ffd77c"]])),He(i,t,150,.3,.72,"rgba(214,52,40,0.34)",3),He(i,t,100,.3,.9,"rgba(255,240,180,0.18)",2),i.save(),i.translate(it,it),i.rotate(t()*Et),i.beginPath();for(let n=0;n<=90;n++){let s=n/90*Et,r=1+.06*Math.sin(s*9)+.04*Math.sin(s*5+1),o=Math.cos(s)*.235*it*r,a=Math.sin(s)*.33*it*r;n===0?i.moveTo(o,a):i.lineTo(o,a)}i.closePath();let e=i.createRadialGradient(-10,-14,6,0,0,.36*it);e.addColorStop(0,"#c48a52"),e.addColorStop(1,"#8a532c"),i.fillStyle=e,i.fill(),i.strokeStyle="rgba(70,38,16,0.55)",i.lineWidth=2;for(let n=0;n<14;n++){let s=(t()-.5)*.5*it;i.beginPath(),i.moveTo(-.18*it,s),i.quadraticCurveTo(0,s+(t()-.5)*30,.18*it,s+(t()-.5)*14),i.stroke()}i.restore(),an(i,7)},strawberry(i,t){Zt(i,1,"#c90d2a"),Zt(i,.95,qe(i,[[0,"#fff1ee"],[.2,"#ffd0cf"],[.42,"#ff7484"],[.75,"#f3364f"],[1,"#d81a36"]])),He(i,t,120,.2,.9,"rgba(255,226,226,0.4)",3),He(i,t,90,.3,.92,"rgba(160,0,30,0.2)",2.6),Zt(i,.05,"rgba(255,255,255,0.7)"),Qr(i,t,26,.86,.93,2.4,"rgba(255,224,130,0.9)"),an(i,7)},banana(i,t){Zt(i,1,"#eec52f"),Zt(i,.93,"#f7efc4"),Zt(i,.86,qe(i,[[0,"#ffefb8"],[.6,"#fff6d6"],[1,"#fffbea"]]));for(let e=0;e<3;e++){let n=e/3*Et+.5;Fi(i,it+Math.cos(n)*.12*it,it+Math.sin(n)*.12*it,n,8,5,"#d9bd86",null)}i.strokeStyle="rgba(214,180,110,0.35)",i.lineWidth=2;for(let e of[.3,.5,.68])i.beginPath(),i.arc(it,it,e*it,0,Et),i.stroke();an(i,5)},coconut(i,t){Zt(i,1,"#5d3d22"),Zt(i,.95,"#3a2513"),Zt(i,.91,qe(i,[[.6,"#ffffff"],[1,"#f2ebd7"]],0,.91)),Zt(i,.62,qe(i,[[0,"#f4fbff"],[.65,"#dff1fb"],[1,"#c4e0f0"]],0,.62)),i.beginPath(),i.arc(it,it,.62*it,0,Et),i.lineWidth=3,i.strokeStyle="rgba(180,200,210,0.6)",i.stroke(),i.strokeStyle="rgba(255,255,255,0.85)",i.lineWidth=8,i.beginPath(),i.arc(it,it,.5*it,Math.PI*1.15,Math.PI*1.55),i.stroke(),an(i,4)},dragon(i,t){Zt(i,1,"#d61a72"),Zt(i,.965,"#f5eef0"),Zt(i,.94,qe(i,[[0,"#c50f56"],[.6,"#dd2470"],[1,"#ef5b93"]])),He(i,t,150,.1,.9,"rgba(255,190,220,0.2)",2.2),Qr(i,t,1100,.02,.92,1.9,"#140a0e"),an(i,6)},pear(i,t){Zt(i,1,"#8fd0f0"),Zt(i,.965,qe(i,[[0,"#ffffff"],[.7,"#eaf8ff"],[1,"#c8ecfb"]])),He(i,t,120,.2,.94,"rgba(110,196,255,0.5)",2.4,.6),He(i,t,90,.1,.9,"rgba(255,255,255,0.9)",2.4,.6),i.save(),i.translate(it,it),i.rotate(t()*Et),i.translate(-it,-it),ah(i,.2,.05,"rgba(180,225,250,0.9)","rgba(90,170,220,0.7)",3);for(let e=0;e<5;e++){let n=e/5*Et;Fi(i,it+Math.cos(n)*.12*it,it+Math.sin(n)*.12*it,n+Math.PI/2,8,4.5,"#2d5670","rgba(150,200,230,0.7)")}i.restore();for(let e=0;e<26;e++){let n=t()*Et,s=t()*.85;lh(i,it+Math.cos(n)*s*it,it+Math.sin(n)*s*it,6+t()*9,"rgba(255,255,255,0.95)")}an(i,4)},star(i,t){Zt(i,1,"#b7bd2f"),Zt(i,.97,qe(i,[[0,"#fff9b8"],[.55,"#ffeb55"],[.95,"#efe040"],[1,"#d7cf33"]])),He(i,t,170,.15,.94,"rgba(255,255,220,0.35)",2.4),He(i,t,120,.15,.94,"rgba(210,190,30,0.25)",2.4);for(let e=0;e<5;e++){let n=e/5*Et+.3;Fi(i,it+Math.cos(n)*.1*it,it+Math.sin(n)*.1*it,n,9,5,"#7a4a1e","rgba(200,150,90,0.7)")}for(let e=0;e<16;e++){let n=t()*Et,s=.15+t()*.7;lh(i,it+Math.cos(n)*s*it,it+Math.sin(n)*s*it,5+t()*7,"rgba(255,255,230,0.9)")}an(i,5)},golden(i,t){Zt(i,1,"#c98a14"),Zt(i,.965,qe(i,[[0,"#fff4b8"],[.45,"#ffe27a"],[.9,"#ffd044"],[1,"#f0b428"]])),He(i,t,140,.25,.94,"rgba(255,250,200,0.5)",2.4),i.save(),i.translate(it,it),i.rotate(t()*Et),i.translate(-it,-it),ah(i,.27,.06,"#ffd257","#e0a020",3);for(let e=0;e<5;e++){let n=e/5*Et;Fi(i,it+Math.cos(n)*.15*it,it+Math.sin(n)*.15*it,n+Math.PI/2,10,5.5,"#8a5a10","rgba(255,220,120,0.8)")}i.restore();for(let e=0;e<34;e++){let n=t()*Et,s=t()*.9;lh(i,it+Math.cos(n)*s*it,it+Math.sin(n)*s*it,5+t()*10,"rgba(255,255,240,0.95)")}an(i,4)}};function Ff(i,t=1){let e=Di(1e3+t*17);return es(ln,ln,n=>{n.fillStyle="#888",n.fillRect(0,0,ln,ln),G_[i](n,e)})}function to(i,t="rgba(230,255,200,0.5)"){return es(256,96,(e,n,s)=>{let r=e.createLinearGradient(0,0,n,0);for(let[o,a]of i)r.addColorStop(o,a);e.fillStyle=r,e.fillRect(0,0,n,s),e.strokeStyle=t,e.lineWidth=4,e.beginPath(),e.moveTo(0,s/2),e.lineTo(n,s/2),e.stroke(),e.lineWidth=1.4,e.globalAlpha=.45;for(let o=1;o<12;o++){let a=o/12*n;e.beginPath(),e.moveTo(a,s/2),e.lineTo(a+n*.1,2),e.moveTo(a,s/2),e.lineTo(a+n*.1,s-2),e.stroke()}e.globalAlpha=1})}function ch(i="#5a3b1f",t="#2f1d0e"){return es(32,64,(e,n,s)=>{e.fillStyle=i,e.fillRect(0,0,n,s);let r=Di(5);e.strokeStyle=t;for(let o=0;o<14;o++){e.globalAlpha=.3+r()*.3,e.lineWidth=1+r()*2;let a=r()*n;e.beginPath(),e.moveTo(a,0),e.lineTo(a+(r()-.5)*4,s),e.stroke()}e.globalAlpha=1})}function Of(i,t,e,n,s,r){i.fillStyle=s,i.beginPath(),i.ellipse(t,e-n*.1,n*.5,n*.44,0,0,Et),i.fill(),i.beginPath(),i.roundRect?i.roundRect(t-n*.27,e+n*.14,n*.54,n*.34,n*.07):i.rect(t-n*.27,e+n*.14,n*.54,n*.34),i.fill(),i.fillStyle=r,i.beginPath(),i.ellipse(t-n*.19,e-n*.06,n*.13,n*.15,0,0,Et),i.ellipse(t+n*.19,e-n*.06,n*.13,n*.15,0,0,Et),i.fill(),i.beginPath(),i.moveTo(t,e+n*.03),i.lineTo(t-n*.06,e+n*.15),i.lineTo(t+n*.06,e+n*.15),i.closePath(),i.fill(),i.strokeStyle=r,i.lineWidth=Math.max(2,n*.03);for(let o=-1;o<=1;o++)i.beginPath(),i.moveTo(t+o*n*.14,e+n*.24),i.lineTo(t+o*n*.14,e+n*.46),i.stroke()}function Bf(){let e=es(512,256,s=>{let r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"#2c2c34"),r.addColorStop(.5,"#1a1a20"),r.addColorStop(1,"#101014"),s.fillStyle=r,s.fillRect(0,0,512,256);let o=Di(9);for(let a=0;a<1800;a++)s.fillStyle=`rgba(${o()<.5?"255,255,255":"0,0,0"},${.02+o()*.05})`,s.fillRect(o()*512,o()*256,1+o()*3,1+o()*3);for(let a of[.25,.75])s.save(),Of(s,a*512,133.12,96,"#d6d0c8","#1a1a1e"),s.restore();s.strokeStyle="#8a1010",s.lineWidth=5,s.beginPath(),s.moveTo(0,61.44),s.lineTo(512,61.44),s.moveTo(0,204.8),s.lineTo(512,204.8),s.stroke()},{wrapS:!0}),n=es(512,256,s=>{s.fillStyle="#000",s.fillRect(0,0,512,256);for(let r of[.25,.75])Of(s,r*512,256*.52,96,"#ff2a1a","#000");s.strokeStyle="#ff2a1a",s.lineWidth=5,s.beginPath(),s.moveTo(0,256*.24),s.lineTo(512,256*.24),s.moveTo(0,256*.8),s.lineTo(512,256*.8),s.stroke()},{wrapS:!0});return{map:e,emissive:n}}var W_=Math.PI,Ln={apple:{name:"\u82F9\u679C",score:10,hit:.9,juice:"#ffd66b",pitch:1},orange:{name:"\u6A59\u5B50",score:10,hit:.92,juice:"#ff9a1a",pitch:1.05},kiwi:{name:"\u7315\u7334\u6843",score:12,hit:.8,juice:"#8be03a",pitch:1.2},watermelon:{name:"\u897F\u74DC",score:20,hit:1.15,juice:"#ff3355",pitch:.6},pineapple:{name:"\u83E0\u841D",score:20,hit:1.05,juice:"#ffe14a",pitch:.75},peach:{name:"\u871C\u6843",score:12,hit:.9,juice:"#ff9a7a",pitch:1.1},strawberry:{name:"\u8349\u8393",score:12,hit:.82,juice:"#ff2d4e",pitch:1.3},banana:{name:"\u9999\u8549",score:15,hit:1,juice:"#fff0a0",pitch:.95,wSeg:36,hSeg:72},coconut:{name:"\u6930\u5B50",score:25,hit:1,juice:"#f4f8ff",pitch:.5},lemon:{name:"\u67E0\u6AAC",score:10,hit:.82,juice:"#fff36b",pitch:1.4},dragon:{name:"\u706B\u9F99\u679C",score:30,hit:1,juice:"#e8156d",pitch:.9,power:"fire"},pear:{name:"\u96EA\u68A8",score:30,hit:1,juice:"#b8e8ff",pitch:1.5,power:"ice"},star:{name:"\u6768\u6843",score:30,hit:.98,juice:"#f4ff5a",pitch:1.35,power:"bolt",wSeg:80},golden:{name:"\u91D1\u82F9\u679C",score:50,hit:.92,juice:"#ffd23a",pitch:1.25,power:"gold",shape:"apple"}},Oi={fire:{fruit:"dragon",name:"\u70C8\u7130\u65A9",desc:"\u7206\u70B8\u6CE2\u53CA\u5468\u56F4\u6C34\u679C\uFF0C\u5200\u5203\u71C3\u70E7\uFF0C\u8FDE\u9501\u5F15\u7206\u5E76\u51C0\u5316\u70B8\u5F39",color:"#ff6a1a",duration:7},ice:{fruit:"pear",name:"\u51B0\u5C01\u65F6\u523B",desc:"\u65F6\u95F4\u51E0\u4E4E\u9759\u6B62\uFF0C\u5F97\u5206\u7FFB\u500D",color:"#7fd8ff",duration:5},bolt:{fruit:"star",name:"\u96F7\u9706\u4E4B\u5203",desc:"\u6BCF\u6B21\u65A9\u51FB\u5F15\u53D1\u95EA\u7535\u8FDE\u9501\u5288\u5411\u9644\u8FD1\u6C34\u679C",color:"#ffee55",duration:7},gold:{fruit:"golden",name:"\u9EC4\u91D1\u65F6\u523B",desc:"\u5F97\u5206 \xD73\uFF0C\u6C34\u679C\u72C2\u6F6E\uFF0C\u70B8\u5F39\u6D88\u5931",color:"#ffc830",duration:8}},ns=[["apple",10],["orange",10],["kiwi",8],["watermelon",7],["pineapple",6],["peach",8],["strawberry",8],["banana",7],["coconut",4],["lemon",7]],X_={apple:{roughness:.3,clearcoat:.9,clearcoatRoughness:.12,bumpScale:.6},orange:{roughness:.55,clearcoat:.2,clearcoatRoughness:.5,bumpScale:2.2},kiwi:{roughness:.95,sheen:1,sheenColor:"#d8b58a",sheenRoughness:.6,bumpScale:2},pineapple:{roughness:.6,clearcoat:.1,bumpScale:5},watermelon:{roughness:.32,clearcoat:.6,clearcoatRoughness:.2,bumpScale:.2},peach:{roughness:.7,sheen:1,sheenColor:"#ffc6b0",sheenRoughness:.4,bumpScale:.5},strawberry:{roughness:.35,clearcoat:.8,clearcoatRoughness:.25,bumpScale:3.5},banana:{roughness:.5,clearcoat:.25,bumpScale:1.2},coconut:{roughness:.95,bumpScale:5},lemon:{roughness:.42,clearcoat:.4,bumpScale:1.5},dragon:{roughness:.35,clearcoat:.7,emissive:"#ff3a00",emissiveIntensity:.2,bumpScale:.4},pear:{roughness:.3,clearcoat:.8,emissive:"#3aa8ff",emissiveIntensity:.14,bumpScale:3},star:{roughness:.38,clearcoat:.6,emissive:"#ffe930",emissiveIntensity:.1,bumpScale:.5},golden:{roughness:.22,metalness:1,clearcoat:1,emissive:"#ffb000",emissiveIntensity:.3,bumpScale:.4}},_l=null;function q_(){if(_l)return _l;let i=Ke;return _l={stem:new xe({map:ch(),roughness:.9,side:i}),stemGreen:new xe({map:ch("#557a2a","#2d4a14"),roughness:.85,side:i}),leaf:new xe({map:to([[0,"#2a6f28"],[.5,"#48a83a"],[1,"#7cd04a"]]),roughness:.55,side:i}),crown:new xe({map:to([[0,"#1d5a22"],[.55,"#3c8f2e"],[1,"#a6c93c"]],"rgba(255,255,190,0.35)"),roughness:.5,side:i}),calyx:new xe({map:to([[0,"#2b8a2e"],[.6,"#3fae3c"],[1,"#6cc94c"]]),roughness:.5,side:i}),flap:new xe({map:to([[0,"#f0308a"],[.4,"#ec3d92"],[.75,"#a8c84a"],[1,"#5cae3a"]],"rgba(255,220,230,0.4)"),roughness:.45,emissive:new Mt("#ff2a00"),emissiveIntensity:.15,side:i}),shard:new yi({color:"#c8f0ff",roughness:.06,clearcoat:1,emissive:new Mt("#5ad0ff"),emissiveIntensity:.55,side:i}),goldMetal:new xe({color:"#ffcf40",metalness:1,roughness:.25,emissive:new Mt("#ffb000"),emissiveIntensity:.3,side:i})},_l}function Y_(i){let t=new R;return i(0,0,t),t}function Z_(i,t){let e=q_(),n=Y_(t);switch(i){case"apple":case"golden":{let s=i==="golden",r=li([[0,n.y-.05,0],[.005,n.y+.16,0],[.05,n.y+.34,0]],.05,.032,8,7),o=Kr(Zs({len:.62,width:.22,droop:.16,fold:.4}),{p:[.03,n.y+.2,0],r:[0,.4,.5]});return[{geo:r,mat:s?e.goldMetal:e.stem},{geo:o,mat:s?e.goldMetal:e.leaf}]}case"orange":return[{geo:li([[0,n.y-.03,0],[0,n.y+.05,0],[.01,n.y+.1,0]],.05,.04,4,8),mat:e.stemGreen},{geo:nh(n,.36,6,!1),mat:e.calyx}];case"kiwi":return[{geo:li([[0,n.y-.03,0],[0,n.y+.07,0]],.05,.035,3,7),mat:e.stem}];case"watermelon":return[{geo:li([[0,n.y-.04,0],[.01,n.y+.12,0],[.05,n.y+.24,0]],.06,.04,6,8),mat:e.stemGreen}];case"peach":return[{geo:li([[0,n.y-.03,0],[.01,n.y+.1,0],[.04,n.y+.2,0]],.04,.03,6,6),mat:e.stem},{geo:Kr(Zs({len:.7,width:.16,droop:.2,fold:.3}),{p:[.02,n.y+.1,0],r:[0,2.3,.35]}),mat:e.leaf}];case"strawberry":return[{geo:nh(n,1,8,!0),mat:e.calyx}];case"pineapple":return[{geo:Pf(n.y),mat:e.crown}];case"dragon":return[{geo:If(t,46),mat:e.flap}];case"pear":{let s=li([[0,n.y-.04,0],[.01,n.y+.16,0],[.07,n.y+.34,0]],.05,.035,8,7),r=Lf(t,[{th:.5,ph:.4,r:.085,h:.42,lx:.3},{th:.8,ph:1.7,r:.07,h:.34,lx:-.2},{th:1.1,ph:3,r:.1,h:.46},{th:1.5,ph:4.4,r:.09,h:.4,lx:.2},{th:1.9,ph:5.5,r:.11,h:.5},{th:2.3,ph:.9,r:.085,h:.36},{th:2,ph:2.6,r:.07,h:.3,ly:-.2},{th:1.3,ph:1,r:.06,h:.28}]);return[{geo:s,mat:e.stem},{geo:r,mat:e.shard}]}default:return[]}}function $_(i,t){let e=X_[i]||{};return new yi({map:t.color,bumpMap:t.bump,bumpScale:e.bumpScale??1,roughness:e.roughness??.5,metalness:e.metalness??0,clearcoat:e.clearcoat??0,clearcoatRoughness:e.clearcoatRoughness??.3,sheen:e.sheen??0,sheenColor:new Mt(e.sheenColor??"#ffffff"),sheenRoughness:e.sheenRoughness??.5,emissive:new Mt(e.emissive??"#000000"),emissiveIntensity:e.emissiveIntensity??0})}function J_(i){let t=Ff(i,i.length*7+i.charCodeAt(0));return new yi({map:t,color:i==="golden"?"#b0b0b0":"#8c8c8c",roughness:.6,clearcoat:0,specularIntensity:.28,envMapIntensity:.35,emissive:new Mt("#ffffff"),emissiveMap:t,emissiveIntensity:i==="golden"?.3:.07})}function K_(i){let t=Ln[i],e=eh[t.shape||i],n=th({shape:e,wSeg:t.wSeg||64,hSeg:t.hSeg||40}),s=Z_(i,e);n.computeBoundingBox();let r=new R;n.boundingBox.getCenter(r);let o=[n,...s.map(u=>u.geo)];if(r.length()>.02)for(let u of o)u.translate(-r.x,-r.y,-r.z);let a=ih(o),l=[$_(i,Uf(i)),...s.map(u=>u.mat),J_(i)],c=["body",...s.map(()=>"part"),"cap"],h=0,f=n.attributes.position.array;for(let u=0;u<f.length;u+=3)h=Math.max(h,f[u]*f[u]+f[u+1]*f[u+1]+f[u+2]*f[u+2]);return{type:i,def:t,geometry:a,materials:l,kinds:c,capIndex:l.length-1,radius:Math.sqrt(h),hit:t.hit,bomb:!1}}function j_(){let i=th({shape:eh.sphere,wSeg:44,hSeg:30}),t=ts(new Hn(.2,.25,.26,20,1,!1).translate(0,.86,0)),e=ts(new wr(.26,.05,10,26).rotateX(W_/2).translate(0,.99,0)),n=li([[0,1,0],[.1,1.26,0],[.28,1.42,0],[.32,1.7,0]],.045,.032,14,6),s=ih([i,t,e,n]),r=Bf(),o=new yi({map:r.map,emissiveMap:r.emissive,emissive:new Mt("#ff3020"),emissiveIntensity:.9,metalness:.75,roughness:.32,clearcoat:.6,clearcoatRoughness:.25}),a=new xe({color:"#3a3a44",metalness:.9,roughness:.35}),l=new xe({color:"#c9a66b",roughness:.9});return{type:"bomb",def:{name:"\u70B8\u5F39",score:0,hit:.9,juice:"#ff8a1a"},geometry:s,materials:[o,a,a,l],kinds:["body","part","part","part"],capIndex:-1,radius:.9,hit:.88,bomb:!0,fuseTip:new R(.32,1.72,0),bodyMat:o}}async function zf(i){let t={},e=Object.keys(Ln),n=e.length+1,s=0;for(let r of e)t[r]=K_(r),i?.(++s/n,Ln[r].name),await ml();return t.bomb=j_(),i?.(1,"\u70B8\u5F39"),t}function kf(i,t=128){let e={},n;try{n=new Vs({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{return e}n.setPixelRatio(1),n.setSize(t,t,!1),n.toneMapping=ri,n.toneMappingExposure=.95,n.setClearColor(0,0);let s=new ei,r=new Ii(n);s.environment=r.fromScene(new Ys,.04).texture,s.environmentIntensity=.5;let o=new Gn("#fff0dc",2);o.position.set(-3,5,8),s.add(o);let a=new Gn("#9bb8ff",.6);a.position.set(6,0,5),s.add(a),s.add(new Yi("#ffffff","#553322",.35));let l=new Ne(28,1,.1,50);l.position.set(0,0,9),l.lookAt(0,0,0);for(let[c,h]of Object.entries(i)){let f=new Xt(h.geometry,h.materials),u={banana:.7,pineapple:1.45,dragon:1.15,pear:1.2,strawberry:1.1}[c]??1,d=(h.radius||1)*u;f.scale.setScalar(1.55/d),f.rotation.set(.25,-.55,c==="banana"?.5:.05),h.bomb&&(f.position.y=-.25),s.add(f),n.render(s,l),e[c]=n.domElement.toDataURL("image/png"),s.remove(f)}return r.dispose(),n.dispose(),n.forceContextLoss?.(),e}var Vf=1e-6,hh=1e-4,uh=3e-5,Hf=Math.PI*2;function $s(i,t,e,n,s,r,o,a=Math.random){let l=i.attributes.position.array,c=i.attributes.normal.array,h=i.attributes.uv.array,f=i.groups.length?i.groups:[{start:0,count:l.length/3,materialIndex:0}],u=new Map,d=W=>{let Z=u.get(W);return Z||(Z={p:[],n:[],u:[]},u.set(W,Z)),Z},p=[],_=[new Float64Array(8),new Float64Array(8),new Float64Array(8)],g=[0,0,0],m=[],S=(W,Z,ht,lt)=>{W.p.push(Z[0],Z[1],Z[2],ht[0],ht[1],ht[2],lt[0],lt[1],lt[2]),W.n.push(Z[3],Z[4],Z[5],ht[3],ht[4],ht[5],lt[3],lt[4],lt[5]),W.u.push(Z[6],Z[7],ht[6],ht[7],lt[6],lt[7])};for(let W of f){let Z=t[W.materialIndex]||"body",ht=d(W.materialIndex),lt=W.start+W.count;for(let Ht=W.start;Ht<lt;Ht+=3){for(let ot=0;ot<3;ot++){let Tt=Ht+ot,zt=_[ot];zt[0]=l[Tt*3],zt[1]=l[Tt*3+1],zt[2]=l[Tt*3+2],zt[3]=c[Tt*3],zt[4]=c[Tt*3+1],zt[5]=c[Tt*3+2],zt[6]=h[Tt*2],zt[7]=h[Tt*2+1];let Nt=n*zt[0]+s*zt[1]+r*zt[2]-o;Math.abs(Nt)<Vf&&(Nt=Vf),g[ot]=Nt}if(Z==="part"){g[0]+g[1]+g[2]>=0&&S(ht,_[0],_[1],_[2]);continue}let Ft=g[0]>=0,Wt=g[1]>=0,J=g[2]>=0,H=(Ft?1:0)+(Wt?1:0)+(J?1:0);if(H===3){S(ht,_[0],_[1],_[2]);continue}if(H===0)continue;m.length=0;let at=null,wt=null;for(let ot=0;ot<3;ot++){let Tt=_[ot],zt=_[(ot+1)%3],Nt=g[ot],Yt=g[(ot+1)%3];if(Nt>=0&&m.push(Tt),Nt>=0!=Yt>=0){let le=Nt/(Nt-Yt),Ot=new Float64Array(8);for(let fe=0;fe<8;fe++)Ot[fe]=Tt[fe]+(zt[fe]-Tt[fe])*le;let oe=Math.hypot(Ot[3],Ot[4],Ot[5])||1;Ot[3]/=oe,Ot[4]/=oe,Ot[5]/=oe,m.push(Ot),Nt>=0?at=Ot:wt=Ot}}S(ht,m[0],m[1],m[2]),m.length===4&&S(ht,m[0],m[2],m[3]),at&&wt&&p.push(at[0],at[1],at[2],wt[0],wt[1],wt[2])}}Q_(p,n,s,r,d(e),a);let T=0;for(let W of u.values())T+=W.p.length/3;if(T<12)return null;let y=1/0,b=1/0,w=1/0,C=-1/0,v=-1/0,E=-1/0;for(let[W,Z]of u)if(t[W]!=="part")for(let ht=0;ht<Z.p.length;ht+=3){let lt=Z.p[ht],Ht=Z.p[ht+1],Ft=Z.p[ht+2];lt<y&&(y=lt),lt>C&&(C=lt),Ht<b&&(b=Ht),Ht>v&&(v=Ht),Ft<w&&(w=Ft),Ft>E&&(E=Ft)}if(y===1/0)return null;let I=(y+C)/2,U=(b+v)/2,O=(w+E)/2,z=new Float32Array(T*3),P=new Float32Array(T*3),F=new Float32Array(T*2),G=new _e,Y=0,et=0,q=[...u.keys()].sort((W,Z)=>W-Z);for(let W of q){let Z=u.get(W),ht=Z.p.length/3;if(ht){for(let lt=0;lt<ht;lt++){let Ht=Z.p[lt*3]-I,Ft=Z.p[lt*3+1]-U,Wt=Z.p[lt*3+2]-O;if(z[(Y+lt)*3]=Ht,z[(Y+lt)*3+1]=Ft,z[(Y+lt)*3+2]=Wt,t[W]!=="part"){let J=Ht*Ht+Ft*Ft+Wt*Wt;J>et&&(et=J)}}P.set(Z.n,Y*3),F.set(Z.u,Y*2),G.addGroup(Y,ht,W),Y+=ht}}return G.setAttribute("position",new re(z,3)),G.setAttribute("normal",new re(P,3)),G.setAttribute("uv",new re(F,2)),{geometry:G,center:new R(I,U,O),radius:Math.sqrt(et)}}function Q_(i,t,e,n,s,r){let o=i.length/6;if(o<3)return;let a=[],l=new Map,c=(P,F,G)=>P*73856093^F*19349663^G*83492791,h=(P,F,G)=>{let Y=Math.floor(P/hh),et=Math.floor(F/hh),q=Math.floor(G/hh);for(let lt=-1;lt<=1;lt++)for(let Ht=-1;Ht<=1;Ht++)for(let Ft=-1;Ft<=1;Ft++){let Wt=l.get(c(Y+lt,et+Ht,q+Ft));if(Wt)for(let J of Wt){let H=a[J];if(Math.abs(H[0]-P)<uh&&Math.abs(H[1]-F)<uh&&Math.abs(H[2]-G)<uh)return J}}let W=a.length;a.push([P,F,G]);let Z=c(Y,et,q),ht=l.get(Z);return ht?ht.push(W):l.set(Z,[W]),W},f=[],u=[],d=new Map;for(let P=0;P<o;P++){let F=h(i[P*6],i[P*6+1],i[P*6+2]),G=h(i[P*6+3],i[P*6+4],i[P*6+5]);if(F===G)continue;let Y=f.length;f.push(F),u.push(G);let et=d.get(F);et?et.push(Y):d.set(F,[Y])}let p=new Uint8Array(f.length),_=[];for(let P=0;P<f.length;P++){if(p[P])continue;p[P]=1;let F=[f[P]],G=u[P],Y=0;for(;G!==f[P]&&Y++<f.length+2;){F.push(G);let et=d.get(G),q=-1;if(et){for(let W of et)if(!p[W]){q=W;break}}if(q<0)break;p[q]=1,G=u[q]}F.length>=3&&_.push(F)}let g=1,m=0,S=0;Math.abs(t)>.9&&(g=0,m=1);let T=g*t+m*e+S*n,y=g-t*T,b=m-e*T,w=S-n*T,C=Math.hypot(y,b,w);y/=C,b/=C,w/=C;let v=e*w-n*b,E=n*y-t*w,I=t*b-e*y,U=-t,O=-e,z=-n;for(let P of _){let F=P.length,G=0,Y=0,et=0;for(let H of P)G+=a[H][0],Y+=a[H][1],et+=a[H][2];G/=F,Y/=F,et/=F;let q=new Float64Array(F),W=new Float64Array(F),Z=P.slice(),ht=()=>{for(let H=0;H<F;H++){let at=a[Z[H]],wt=at[0]-G,ot=at[1]-Y,Tt=at[2]-et;q[H]=wt*y+ot*b+Tt*w,W[H]=wt*v+ot*E+Tt*I}};ht();let lt=0;for(let H=0;H<F;H++){let at=(H+1)%F;lt+=q[H]*W[at]-q[at]*W[H]}lt<0&&(Z.reverse(),ht());let Ht=!0,Ft=0;for(let H=0;H<F;H++){let at=(H+1)%F,wt=q[H]*W[at]-q[at]*W[H];if(wt<=1e-12){Ht=!1;break}Ft+=Math.atan2(wt,q[H]*q[at]+W[H]*W[at])}Ht&&Math.abs(Ft-Hf)>.05&&(Ht=!1);let Wt=r()*Hf,J=(H,at,wt,ot,Tt)=>{s.p.push(H,at,wt),s.n.push(U,O,z),s.u.push(ot,Tt)};if(Ht)for(let H=0;H<F;H++){let at=(H+1)%F,wt=a[Z[H]],ot=a[Z[at]],Tt=Math.atan2(W[H],q[H])+Wt,zt=Math.atan2(W[at],q[at])+Wt;J(G,Y,et,.5,.5),J(ot[0],ot[1],ot[2],.5+.5*Math.cos(zt),.5+.5*Math.sin(zt)),J(wt[0],wt[1],wt[2],.5+.5*Math.cos(Tt),.5+.5*Math.sin(Tt))}else{let H=1e-6;for(let zt=0;zt<F;zt++)H=Math.max(H,Math.hypot(q[zt],W[zt]));let at=Math.cos(Wt),wt=Math.sin(Wt),ot=zt=>{let Nt=q[zt]/H,Yt=W[zt]/H;return[.5+.5*(Nt*at-Yt*wt),.5+.5*(Nt*wt+Yt*at)]},Tt=tx(q,W);for(let zt=0;zt<Tt.length;zt+=3){let Nt=Tt[zt],Yt=Tt[zt+1],le=Tt[zt+2],Ot=a[Z[Nt]],oe=a[Z[Yt]],fe=a[Z[le]],Ge=ot(Nt),ye=ot(Yt),Ce=ot(le);J(Ot[0],Ot[1],Ot[2],Ge[0],Ge[1]),J(fe[0],fe[1],fe[2],Ce[0],Ce[1]),J(oe[0],oe[1],oe[2],ye[0],ye[1])}}}}function tx(i,t){let e=i.length,n=Array.from({length:e},(a,l)=>l),s=[],r=(a,l,c,h,f,u,d,p)=>{let _=(a-f)*(h-u)-(c-f)*(l-u),g=(a-d)*(u-p)-(f-d)*(l-p),m=(a-c)*(p-h)-(d-c)*(l-h),S=_<0||g<0||m<0,T=_>0||g>0||m>0;return!(S&&T)},o=0;for(;n.length>3&&o++<e*e+10;){let a=!1,l=n.length;for(let c=0;c<l;c++){let h=n[(c+l-1)%l],f=n[c],u=n[(c+1)%l];if((i[f]-i[h])*(t[u]-t[h])-(t[f]-t[h])*(i[u]-i[h])<=1e-12)continue;let p=!0;for(let _=0;_<l;_++){let g=n[_];if(!(g===h||g===f||g===u)&&r(i[g],t[g],i[h],t[h],i[f],t[f],i[u],t[u])){p=!1;break}}if(p){s.push(h,f,u),n.splice(c,1),a=!0;break}}a||(s.push(n[0],n[1],n[2]),n.splice(1,1))}return n.length===3&&s.push(n[0],n[1],n[2]),s}function Gf(i,t,e,n){let s=n.get("only"),r=s?s.split(","):Object.keys(Ln),o=parseFloat(n.get("scale")||"1"),a=parseFloat(n.get("tilt")||"0.12"),l=s?Math.min(r.length,Math.max(1,Math.round(5/o))):5,c=4.4*o,h=[],f=Math.ceil(r.length/l);r.forEach((p,_)=>{let g=_%l,m=Math.floor(_/l),S=(g-(l-1)/2)*c,T=((f-1)/2-m)*c*.95+(s?0:1.2),y=t[p];if(e==="cut"){let b=new R(1,a,0).normalize(),w=$s(y.geometry,y.kinds,y.capIndex,b.x,b.y,b.z,0),C=$s(y.geometry,y.kinds,y.capIndex,-b.x,-b.y,-b.z,0);[[w,Math.PI/2,-1],[C,-Math.PI/2,1]].forEach(([v,E,I])=>{if(!v)return;let U=new Xt(v.geometry,y.materials);U.position.set(S+I*.95*o,T,0),U.rotation.y=E,U.scale.setScalar(o),U.castShadow=!0,i.world.add(U),h.push({m:U,spin:!1})})}else{let b=new Xt(y.geometry,y.materials);b.position.set(S,T,0),b.scale.setScalar(o),b.castShadow=!0,b.rotation.set(.3,.5*_,.1),i.world.add(b),h.push({m:b,spin:!0})}});let u=performance.now(),d=p=>{let _=Math.min(.05,(p-u)/1e3);u=p;for(let g of h)g.spin&&(g.m.rotation.y+=_*.6);i.render(_),requestAnimationFrame(d)};requestAnimationFrame(d)}var eo=null;function ex(){if(eo)return eo;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),eo=new Vn(i),eo.colorSpace=De,eo}var Wf=3.2,Xf=1,xl=new te,qf=new te,Yf=new Gt,Zf=new sn,$f=new R(0,0,1),vl=class{constructor(t,e){this.stage=t,this.assets=e,this.entities=[],this.gravity=15,this.onFall=null}spawn(t,e={}){let n=this.assets[t],s=new Xt(n.geometry,n.materials);s.castShadow=!0;let r=e.scale??1;s.scale.setScalar(r),s.position.set(e.x??0,e.y??0,e.z??Q(-.4,.4)),e.quat?s.quaternion.copy(e.quat):n.bomb||s.quaternion.random(),this.stage.world.add(s);let o=new R;e.spin?o.copy(e.spin):n.bomb?o.set(Q(-.4,.4),Q(-.9,.9),Kc()*Q(1.2,2.2)):o.set(Q(-1,1),Q(-1,1),Q(-1,1)).normalize().multiplyScalar(Q(1.2,3.2));let a={id:Xf++,type:t,asset:n,def:n.def,cls:e.cls??(n.bomb?"bomb":"fruit"),mesh:s,vel:new R(e.vx??0,e.vy??0,0),spin:o,open:new R,hit:n.hit*r,gen:0,alive:!0,age:0,blockSwipe:-1,cooldown:0,ownGeom:!1,aura:null,gravity:e.gravity??1,scale:r,sliceable:!0,slicedBy:null};if(e.aura){let l=new gr(new Ps({map:ex(),color:e.aura,blending:An,depthWrite:!1,transparent:!0,opacity:.9})),c=n.hit*r*4.4;l.scale.set(c,c,1),l.renderOrder=-1,this.stage.world.add(l),a.aura=l}return this.entities.push(a),a}remove(t){t.alive&&(t.alive=!1,this.stage.world.remove(t.mesh),t.ownGeom&&t.mesh.geometry.dispose(),t.aura&&(this.stage.world.remove(t.aura),t.aura.material.dispose(),t.aura=null))}clear(){for(let t of this.entities)this.remove(t);this.entities.length=0}update(t){let e=this.stage.bounds,n=this.entities;for(let s=n.length-1;s>=0;s--){let r=n[s];if(!r.alive){n.splice(s,1);continue}r.age+=t,r.cooldown-=t;let o=r.mesh;r.gravity&&(r.vel.y-=this.gravity*r.gravity*t),o.position.addScaledVector(r.vel,t);let a=r.spin.x+r.open.x,l=r.spin.y+r.open.y,c=r.spin.z+r.open.z,h=Math.hypot(a,l,c);if(h>1e-5&&(Zf.setFromAxisAngle(Jf.set(a/h,l/h,c/h),h*t),o.quaternion.premultiply(Zf)),r.open.lengthSq()>1e-8&&r.open.multiplyScalar(Math.exp(-Wf*t)),r.aura&&r.aura.position.set(o.position.x,o.position.y,o.position.z-.6),r.cls==="menu")continue;let f=o.position.y,u=o.position.x;f<e.bottom-3.2-r.hit&&r.vel.y<0||Math.abs(u)>e.width/2+6+r.hit?(r.age>.3&&this.onFall?.(r),this.remove(r),n.splice(s,1)):r.cls==="piece"&&r.age>8&&(this.remove(r),n.splice(s,1))}}slice(t,e,n,s,r,o=0){let a=t.asset,l=t.mesh,c=Math.cos(o),h=Math.sin(o),f=new R(-r*c,s*c,h).normalize();l.updateMatrixWorld(!0),xl.copy(l.matrixWorld),qf.copy(xl).invert();let u=new R(e,n,l.position.z).applyMatrix4(qf);Yf.setFromMatrix4(xl).transpose();let d=f.clone().applyMatrix3(Yf).normalize(),p=d.dot(u),_=$s(t.mesh.geometry,a.kinds,a.capIndex,d.x,d.y,d.z,p),g=$s(t.mesh.geometry,a.kinds,a.capIndex,-d.x,-d.y,-d.z,-p);if(!_||!g)return null;let m=Math.abs(f.dot(Jf.set(l.position.x-e,l.position.y-n,0))),S=m<t.hit*.2,T=[];[[_,-1],[g,1]].forEach(([b,w],C)=>{let v=new Xt(b.geometry,a.materials);v.castShadow=!0,v.scale.copy(l.scale),v.quaternion.copy(l.quaternion);let E=b.center.clone().applyMatrix4(xl);v.position.copy(E),this.stage.world.add(v);let I=C===0?1:-1,U=Q(1.6,2.8),O={id:Xf++,type:t.type,asset:a,def:t.def,cls:"piece",mesh:v,vel:new R(t.vel.x*.85+f.x*I*U,t.vel.y*.85+f.y*I*U+Q(.3,1.2),0),spin:new R(0,0,Kc()*Q(.8,2.6)),open:new R,hit:Math.max(.2,b.radius*t.scale*.85),gen:t.gen+1,alive:!0,age:0,blockSwipe:-1,cooldown:.12,ownGeom:!0,aura:null,gravity:1,scale:t.scale,sliceable:b.radius*t.scale>=.34&&t.gen+1<=3,slicedBy:null},z=nx.copy(f).multiplyScalar(-I),P=Ve(z.dot($f),-1,1),F=Math.acos(P),G=ix.crossVectors(z,$f);G.lengthSq()>1e-6&&F>.05&&O.open.copy(G.normalize()).multiplyScalar(F*Wf),this.entities.push(O),T.push(O)});let y=Math.atan2(r,s);return{pieces:T,perfect:S,offset:m,angle:y,nW:f}}},Jf=new R,nx=new R,ix=new R;var sx=`
  attribute float aAlong;
  attribute float aAcross;
  varying float vAlong;
  varying float vAcross;
  void main() {
    vAlong = aAlong;
    vAcross = aAcross;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,rx=`
  uniform vec3 uCore;
  uniform vec3 uEdge;
  uniform float uIntensity;
  uniform float uAlpha;
  varying float vAlong;
  varying float vAcross;
  void main() {
    float a = 1.0 - abs(vAcross);
    a = pow(max(a, 0.0), 1.5);
    vec3 col = mix(uEdge, uCore, pow(a, 2.2));
    gl_FragColor = vec4(col * uIntensity, a * uAlpha * vAlong);
  }
`,Js=class extends Xt{constructor(t=32){let e=new _e,n=new Float32Array(t*2*3),s=new Float32Array(t*2),r=new Float32Array(t*2);for(let l=0;l<t;l++)r[l*2]=-1,r[l*2+1]=1;let o=[];for(let l=0;l<t-1;l++){let c=l*2;o.push(c,c+1,c+2,c+1,c+3,c+2)}e.setAttribute("position",new re(n,3).setUsage(Pi)),e.setAttribute("aAlong",new re(s,1).setUsage(Pi)),e.setAttribute("aAcross",new re(r,1)),e.setIndex(o);let a=new Te({uniforms:{uCore:{value:new Mt("#ffffff")},uEdge:{value:new Mt("#66ccff")},uIntensity:{value:1.6},uAlpha:{value:1}},vertexShader:sx,fragmentShader:rx,transparent:!0,blending:An,depthTest:!1,depthWrite:!1,side:Ke});super(e,a),this.maxPts=t,this.frustumCulled=!1,this.renderOrder=20,this.visible=!1}setColors(t,e,n=1.6){let s=this.material.uniforms;s.uCore.value.set(t),s.uEdge.value.set(e),s.uIntensity.value=n}setPoints(t,e=1.5,n=!0){let s=Math.min(t.length,this.maxPts);if(s<2){this.visible=!1;return}this.visible=!0;let r=this.geometry.attributes.position.array,o=this.geometry.attributes.aAlong.array;for(let a=0;a<s;a++){let l=t[a],c=t[Math.max(0,a-1)],h=t[Math.min(s-1,a+1)],f=h.x-c.x,u=h.y-c.y,d=Math.hypot(f,u)||1;f/=d,u/=d;let p=-u*l.w,_=f*l.w;r[a*6]=l.x+p,r[a*6+1]=l.y+_,r[a*6+2]=e,r[a*6+3]=l.x-p,r[a*6+4]=l.y-_,r[a*6+5]=e;let g=n?a/(s-1):1;o[a*2]=g,o[a*2+1]=g}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aAlong.needsUpdate=!0,this.geometry.setDrawRange(0,(s-1)*6)}},ox=`
  attribute float aSize;
  attribute vec4 aColor;
  uniform float uScale;
  varying vec4 vColor;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uScale / max(0.1, -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,ax=`
  varying vec4 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float a = 1.0 - d;
    a *= a;
    vec3 c = vColor.rgb * (0.7 + 1.8 * a * a);
    gl_FragColor = vec4(c, vColor.a * a);
  }
`,fh=class{constructor(t=5e3){this.cap=t,this.head=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*4),this.base=new Float32Array(t*4),this.size=new Float32Array(t),this.size0=new Float32Array(t),this.life=new Float32Array(t),this.age=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.mode=new Uint8Array(t);let e=new _e;e.setAttribute("position",new re(this.pos,3).setUsage(Pi)),e.setAttribute("aColor",new re(this.col,4).setUsage(Pi)),e.setAttribute("aSize",new re(this.size,1).setUsage(Pi)),this.material=new Te({uniforms:{uScale:{value:500}},vertexShader:ox,fragmentShader:ax,transparent:!0,blending:An,depthWrite:!1,depthTest:!0}),this.points=new yr(e,this.material),this.points.frustumCulled=!1,this.points.renderOrder=12}emit(t,e,n,s,r,o,a,l,c,h,f,u=1,d=0,p=.5){let _=this.head;this.head=(this.head+1)%this.cap,this.pos[_*3]=t,this.pos[_*3+1]=e,this.pos[_*3+2]=n,this.vel[_*3]=s,this.vel[_*3+1]=r,this.vel[_*3+2]=o,this.life[_]=a,this.age[_]=0,this.size0[_]=l,this.size[_]=l,this.base[_*4]=c,this.base[_*4+1]=h,this.base[_*4+2]=f,this.base[_*4+3]=u,this.grav[_]=d,this.drag[_]=p}burst(t,e,n,s,r,o,a,l,c=6,h=1){for(let f=0;f<s;f++){let u=Math.random()*Et,d=r*(.25+Math.random()*.75),p=(Math.random()-.5)*h;this.emit(t,e,n,Math.cos(u)*d,Math.sin(u)*d+p,(Math.random()-.5)*d*.4,o*(.6+Math.random()*.6),a*(.5+Math.random()*.9),l.r,l.g,l.b,1,c,1.2)}}update(t,e){this.material.uniforms.uScale.value=e.height*e.pixelRatio*.5/Math.tan(e.camera.fov*Math.PI/360);let{pos:n,vel:s,col:r,base:o,size:a,size0:l,life:c,age:h,grav:f,drag:u}=this;for(let p=0;p<this.cap;p++){let _=c[p];if(_<=0)continue;let g=h[p]+=t;if(g>=_){c[p]=0,r[p*4+3]=0,a[p]=0;continue}let m=g/_,S=Math.exp(-u[p]*t);s[p*3]*=S,s[p*3+1]=s[p*3+1]*S-f[p]*t,s[p*3+2]*=S,n[p*3]+=s[p*3]*t,n[p*3+1]+=s[p*3+1]*t,n[p*3+2]+=s[p*3+2]*t;let T=1-m;r[p*4]=o[p*4],r[p*4+1]=o[p*4+1],r[p*4+2]=o[p*4+2],r[p*4+3]=o[p*4+3]*T,a[p]=l[p]*(.35+.65*T)}let d=this.points.geometry.attributes;d.position.needsUpdate=!0,d.aColor.needsUpdate=!0,d.aSize.needsUpdate=!0}},dh=class{constructor(t=900){this.cap=t,this.head=0;let e=new qi(1,10,8),n=new xe({color:"#ffffff",roughness:.12,metalness:0,envMapIntensity:1.4});this.mesh=new si(e,n,t),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.instanceMatrix.setUsage(Pi),this.p=new Float32Array(t*3),this.v=new Float32Array(t*3),this.life=new Float32Array(t),this.age=new Float32Array(t),this.size=new Float32Array(t),this.dummy=new Ae,this.tmpColor=new Mt;let s=new te().makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s),this.mesh.setColorAt(r,this.tmpColor.set("#ffffff"));this.colorDirty=!1}emit(t,e,n,s,r,o,a,l,c=1.1){let h=this.head;this.head=(this.head+1)%this.cap,this.p[h*3]=t,this.p[h*3+1]=e,this.p[h*3+2]=n,this.v[h*3]=s,this.v[h*3+1]=r,this.v[h*3+2]=o,this.life[h]=c,this.age[h]=0,this.size[h]=a,this.mesh.setColorAt(h,this.tmpColor.set(l)),this.colorDirty=!0}update(t,e=13){let{p:n,v:s,life:r,age:o,size:a,dummy:l,mesh:c}=this;for(let h=0;h<this.cap;h++){let f=r[h];if(f<=0)continue;let u=o[h]+=t;if(u>=f){r[h]=0,l.position.set(0,0,0),l.scale.set(0,0,0),l.updateMatrix(),c.setMatrixAt(h,l.matrix);continue}s[h*3+1]-=e*t,s[h*3]*=1-.4*t,n[h*3]+=s[h*3]*t,n[h*3+1]+=s[h*3+1]*t,n[h*3+2]+=s[h*3+2]*t;let d=Math.hypot(s[h*3],s[h*3+1]),p=u/f,_=a[h]*(p>.75?1-(p-.75)*4:1);l.position.set(n[h*3],n[h*3+1],n[h*3+2]),l.rotation.set(0,0,Math.atan2(s[h*3+1],s[h*3])),l.scale.set(_*(1+Math.min(1.1,d*.05)),_,_),l.updateMatrix(),c.setMatrixAt(h,l.matrix)}c.instanceMatrix.needsUpdate=!0,this.colorDirty&&(c.instanceColor.needsUpdate=!0,this.colorDirty=!1)}},lx=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,cx=`
  uniform float uKind;
  uniform float uProg;
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float a = 0.0;
    if (uKind < 0.5) {
      // \u51B2\u51FB\u73AF
      float r = length(p);
      float w = 0.16 * (1.0 - uProg) + 0.03;
      a = smoothstep(w, 0.0, abs(r - uProg)) * (1.0 - uProg);
    } else if (uKind < 1.5) {
      // \u65A9\u75D5\uFF1A\u7EC6\u957F\u7684\u4EAE\u7EBF\uFF0C\u4E2D\u95F4\u7C97\u4E24\u7AEF\u5C16
      float ax = 1.0 - abs(p.x);
      float ay = 1.0 - abs(p.y);
      a = pow(max(ay, 0.0), 6.0) * pow(max(ax, 0.0), 0.8) * (1.0 - uProg);
      a += pow(max(ay, 0.0), 24.0) * (1.0 - uProg) * 1.5;
    } else {
      // \u5149\u6655
      float r = length(p);
      a = pow(max(1.0 - r, 0.0), 2.0) * (1.0 - uProg);
    }
    gl_FragColor = vec4(uColor * uIntensity, a);
  }
`,ph=class{constructor(t=28){this.group=new nn,this.items=[];let e=new gn(1,1);for(let n=0;n<t;n++){let s=new Te({uniforms:{uKind:{value:0},uProg:{value:0},uColor:{value:new Mt("#fff")},uIntensity:{value:2}},vertexShader:lx,fragmentShader:cx,transparent:!0,blending:An,depthTest:!1,depthWrite:!1}),r=new Xt(e,s);r.visible=!1,r.renderOrder=15,r.frustumCulled=!1,this.group.add(r),this.items.push({m:r,t:0,dur:1,active:!1})}}_spawn(t,e,n,s,r,o,a,l,c,h){let f=this.items.find(d=>!d.active);f||(f=this.items[0]),f.active=!0,f.t=0,f.dur=c,f.m.visible=!0,f.m.position.set(e,n,s),f.m.scale.set(r,o,1),f.m.rotation.z=a;let u=f.m.material.uniforms;u.uKind.value=t,u.uProg.value=0,u.uColor.value.set(l),u.uIntensity.value=h}ring(t,e,n,s="#ffffff",r=.5,o=2.2){this._spawn(0,t,e,1.2,n,n,0,s,r,o)}slash(t,e,n,s,r="#ffffff",o=.22,a=.5){this._spawn(1,t,e,1.3,s,a,n,r,o,2.8)}glow(t,e,n,s="#ffffff",r=.35,o=2.5){this._spawn(2,t,e,1.1,n,n,0,s,r,o)}update(t){for(let e of this.items){if(!e.active)continue;e.t+=t;let n=e.t/e.dur;if(n>=1){e.active=!1,e.m.visible=!1;continue}e.m.material.uniforms.uProg.value=n}}},mh=class{constructor(t=14){this.group=new nn,this.items=[];for(let e=0;e<t;e++){let n=new Js(18);n.setColors("#ffffff","#ffe066",2.4),this.group.add(n),this.items.push({r:n,t:0,dur:.2,active:!1,x0:0,y0:0,x1:0,y1:0,w:.09,jitter:.5})}}bolt(t,e,n,s,r="#ffffff",o="#ffe066",a=.22,l=.1){let c=this.items.find(h=>!h.active);c||(c=this.items[0]),Object.assign(c,{active:!0,t:0,dur:a,x0:t,y0:e,x1:n,y1:s,w:l}),c.r.setColors(r,o,2.6),this._shape(c)}_shape(t){let n=t.x1-t.x0,s=t.y1-t.y0,r=Math.hypot(n,s)||1,o=-s/r,a=n/r,l=[];for(let c=0;c<=16;c++){let h=c/16,f=Math.sin(h*Math.PI),u=(Math.random()-.5)*2*Math.min(.9,r*.12)*f;l.push({x:t.x0+n*h+o*u,y:t.y0+s*h+a*u,w:t.w*(.4+f*.9)})}t.r.setPoints(l,1.6,!1)}update(t){for(let e of this.items)if(e.active){if(e.t+=t,e.t>=e.dur){e.active=!1,e.r.visible=!1;continue}this._shape(e),e.r.material.uniforms.uAlpha.value=1-e.t/e.dur}}},yl=class{constructor(t){this.stage=t,this.sparks=new fh(5200),this.drops=new dh(900),this.quads=new ph(30),this.bolts=new mh(16),t.fx.add(this.drops.mesh,this.sparks.points,this.quads.group,this.bolts.group),this._c=new Mt}update(t,e){this.sparks.update(t,this.stage),this.drops.update(t,e),this.quads.update(t),this.bolts.update(t)}color(t){return this._c.set(t)}juice(t,e,n,s,r=1){let o=this._c.set(s),a=o.r,l=o.g,c=o.b,h=Math.floor(18*r);for(let f=0;f<h;f++){let u=Math.random()<.5?1:-1,d=n+Math.PI/2*u+(Math.random()-.5)*1.8,p=(3+Math.random()*7)*(.6+.5*r);this.drops.emit(t+(Math.random()-.5)*.3,e+(Math.random()-.5)*.3,(Math.random()-.5)*.8,Math.cos(d)*p,Math.sin(d)*p+1.5,(Math.random()-.5)*2,.03+Math.random()*.065*Math.sqrt(r),s,.9+Math.random()*.8)}for(let f=0;f<10*r;f++){let u=Math.random()*Et,d=1+Math.random()*4;this.sparks.emit(t,e,.3,Math.cos(u)*d,Math.sin(u)*d,0,.35+Math.random()*.3,.3+Math.random()*.4,a*1.1,l*1.1,c*1.1,.55,2,2)}}};var Kf=.24,hx=3,Ml=class{constructor(t,e){this.stage=t,this.canvas=e,this.swipes=new Map,this.segments=[],this.swipeCounter=0,this.hover=!1,this.enabled=!0,this.style={core:"#ffffff",edge:"#66ccff",glow:1},this.onSwipeStart=null,this.onSwipeEnd=null,this.tmp={x:0,y:0},this.slots=[];for(let s=0;s<hx;s++){let r=new Js(40),o=new Js(40);t.fx.add(r,o),this.slots.push({glow:r,core:o,pts:[],swipe:null})}e.addEventListener("pointerdown",s=>this.down(s)),e.addEventListener("pointermove",s=>this.move(s));let n=s=>this.up(s);e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("pointerleave",s=>{s.pointerType==="mouse"&&this.hover&&this.up(s)}),e.addEventListener("contextmenu",s=>s.preventDefault())}setStyle(t,e,n=1){this.style.core=t,this.style.edge=e,this.style.glow=n}_world(t){return this.stage.screenToWorld(t.clientX,t.clientY,this.tmp)}_begin(t){if(this.swipes.has(t.pointerId))return this.swipes.get(t.pointerId);let e=this._world(t),n=this.slots.find(r=>!r.swipe&&r.pts.length===0)||this.slots.find(r=>!r.swipe)||this.slots[0],s={id:++this.swipeCounter,pointerId:t.pointerId,x:e.x,y:e.y,t:t.timeStamp,slot:n,sliced:0,dist:0,hoverMode:t.pointerType==="mouse"&&t.buttons===0,lastMove:performance.now()};return n.swipe=s,n.pts.length=0,n.pts.push({x:e.x,y:e.y,t:performance.now()}),this.swipes.set(t.pointerId,s),this.onSwipeStart?.(s),s}down(t){if(this.enabled&&!(t.pointerType==="mouse"&&t.button!==0)){try{this.canvas.setPointerCapture(t.pointerId)}catch{}this._begin(t)}}move(t){if(!this.enabled)return;let e=this.swipes.get(t.pointerId);if(!e)if(this.hover&&t.pointerType==="mouse")e=this._begin(t);else return;let n=t.getCoalescedEvents?t.getCoalescedEvents():null,s=n&&n.length?n:[t];for(let r of s){let o=this._world(r),a=o.x-e.x,l=o.y-e.y,c=Math.hypot(a,l);if(c<.02)continue;let h=Math.max(.004,(r.timeStamp-e.t)/1e3),f={x0:e.x,y0:e.y,x1:o.x,y1:o.y,speed:c/h,swipe:e};this.segments.push(f),e.x=o.x,e.y=o.y,e.t=r.timeStamp,e.dist+=c,e.lastMove=performance.now(),e.slot.pts.push({x:o.x,y:o.y,t:performance.now()}),e.slot.pts.length>60&&e.slot.pts.shift()}}up(t){let e=this.swipes.get(t.pointerId);e&&(this.swipes.delete(t.pointerId),e.slot.swipe=null,this.onSwipeEnd?.(e))}take(){let t=this.segments;return this.segments=[],t}get active(){return this.swipes.size>0}update(t){let e=performance.now(),n=this.style;for(let[s,r]of this.swipes)r.hoverMode&&e-r.lastMove>150&&(this.swipes.delete(s),r.slot.swipe=null,this.onSwipeEnd?.(r));for(let s of this.slots){let r=s.pts;for(;r.length&&(e-r[0].t)/1e3>Kf;)r.shift();if(r.length<2){s.glow.visible=!1,s.core.visible=!1;continue}let o=r;if(r.length>2){o=[r[0]];for(let f=0;f<r.length-1;f++){let u=r[f],d=r[f+1];o.push({x:u.x*.75+d.x*.25,y:u.y*.75+d.y*.25,t:u.t*.75+d.t*.25},{x:u.x*.25+d.x*.75,y:u.y*.25+d.y*.75,t:u.t*.25+d.t*.75})}o.push(r[r.length-1])}let a=Math.min(o.length,40),l=o.length-a,c=[],h=[];for(let f=0;f<a;f++){let u=o[l+f],d=(e-u.t)/1e3/Kf,p=Math.max(0,1-d),_=f/(a-1),g=Math.pow(p,.85)*(.35+.65*_);c.push({x:u.x,y:u.y,w:.3*g*n.glow}),h.push({x:u.x,y:u.y,w:.085*g})}s.glow.setColors(n.edge,n.edge,1.15*n.glow),s.core.setColors(n.core,n.core,2.2),s.glow.setPoints(c,1.4),s.core.setPoints(h,1.5)}}clearTrails(){for(let t of this.slots)t.pts.length=0;this.segments.length=0}};var ux=["fire","ice","bolt","gold"],bl=class{constructor(t){this.game=t,this.reset("classic")}reset(t){this.mode=t,this.t=0,this.wait=.9,this.queue=[],this.powerTimer=t==="arcade"?Q(12,17):Q(20,28),this.bossTimer=Q(52,62),this.powerBag=[],this.lastType=""}get level(){let t=this.mode==="arcade"?60:this.mode==="zen"?160:120,e=this.mode==="zen"?.75:1;return Math.min(e,this.t/t)}pickFruit(){let t=Ni(ns);return t===this.lastType&&Math.random()<.6&&(t=Ni(ns)),this.lastType=t,t}update(t){this.t+=t;for(let r=this.queue.length-1;r>=0;r--){let o=this.queue[r];o.delay-=t,o.delay<=0&&(this.queue.splice(r,1),o.run())}let e=this.game,n=e.powers.gold>0,s=e.bossAlive();if(this.wait-=t,this.wait<=0){s||this.wave();let r=this.level,o=st(2.3,.95,r)*Q(.85,1.15);this.mode==="arcade"&&(o*=.85),this.mode==="zen"&&(o*=1.1),n&&(o*=.5),this.wait=s?1.2:o}this.powerTimer-=t,this.powerTimer<=0&&(this.spawnPower(),this.powerTimer=this.mode==="arcade"?Q(16,22):this.mode==="zen"?Q(16,22):Q(26,36)),this.mode!=="zen"&&this.t>30&&(this.bossTimer-=t,this.bossTimer<=0&&!s&&(e.spawnBoss(),this.bossTimer=Q(62,78)))}schedule(t,e){t<=0?e():this.queue.push({delay:t,run:e})}launch(t,e,n,s,r=0,o,a={}){this.schedule(r,()=>{let l=this.game,c=l.stage.bounds,h=l.world.gravity,f=c.bottom-1.6,u=Math.min(c.top-1.1,c.bottom+c.height*s),d=Math.sqrt(2*h*Math.max(2,u-f)),p=d/h,_=(n-e)/(2*p);l.launchEntity(t,{x:e,y:f,vx:_,vy:d,cls:o,...a})})}drop(t,e,n=0){this.schedule(n,()=>{let s=this.game,r=s.stage.bounds;s.launchEntity(t,{x:e,y:r.top+1.6,vx:Q(-.6,.6),vy:-Q(1,3),silent:!0})})}spawnPower(){let t=this.game;this.powerBag.length||(this.powerBag=ux.slice().sort(()=>Math.random()-.5));let e=this.powerBag.pop();e==="gold"&&t.powers.gold>0&&(e=this.powerBag.pop()||"fire");let s=t.stage.bounds.width/2-2.4,r=Q(-s*.6,s*.6);this.launch(t.powerFruit(e),r,r+Q(-2,2),Q(.62,.78),0,"power"),t.announcePower(e)}wave(){let t=this.level,e=this.game,n=e.powers.gold>0,s=Ni([["single",st(3,1,t)],["pair",st(3,1.6,t)],["fountain",st(1.5,3,t)],["cross",st(.6,2.6,t)],["arc",st(.8,1.8,t)],["shower",t>.25?st(.2,1.6,t):0]]),r=e.stage.bounds,o=Ve(r.width/2-2,3.5,12),a=n?2:0,l=this.mode==="zen"||n||this.t<9,c=0,h=t>.55?2:1,f=l?0:st(.07,.22,t),u=()=>c<h&&Math.random()<f?(c++,"bomb"):this.pickFruit();switch(s){case"single":{let d=Q(-o,o);this.launch(u(),d,Ve(d+Q(-3,3),-o,o),Q(.6,.92));break}case"pair":{let d=Q(.3,.9)*o;this.launch(u(),-d,-d*Q(.2,.9),Q(.62,.9)),this.launch(u(),d,d*Q(.2,.9),Q(.62,.9),Q(.05,.25)),n&&this.launch(u(),Q(-o,o),Q(-o,o),Q(.6,.9),.3);break}case"fountain":{let d=Jr(3,3+Math.round(t*3))+a,p=Q(-o*.5,o*.5);for(let _=0;_<d;_++){let g=(_-(d-1)/2)*1.4;this.launch(u(),p+g*.5,p+g*1.6,Q(.62,.95),_*.12)}break}case"cross":{let d=Jr(1,1+Math.round(t*2))+(n?1:0);for(let p=0;p<d;p++)this.launch(u(),-o-.6,Q(0,o*.7),Q(.55,.85),p*.22),this.launch(u(),o+.6,-Q(0,o*.7),Q(.55,.85),p*.22+.11);break}case"arc":{let d=4+Math.round(t*3)+a,p=Math.random()<.5?1:-1;for(let _=0;_<d;_++){let g=st(-o*.9,o*.9,_/(d-1))*p;this.launch(u(),g,g+p*1.6,Q(.66,.9),_*.17)}break}case"shower":{let d=4+Math.round(t*4)+a;for(let p=0;p<d;p++)this.drop(u(),Q(-o,o),p*.2+Q(0,.1));break}}}};var Sl=class{constructor(t){this.game=t,this.reset()}reset(){this.active=null,this.cool=14,this.done=0}update(t){let e=this.game;e.state==="playing"&&(this.active?(this.active.left-=t,e.ui.updateBounty(this.active),this.active.left<=0&&this.fail()):(this.cool-=t,this.cool<=0&&this.spawn()))}spawn(){let t=this.game,e=Math.min(3,Math.floor(t.elapsed/45)),n=Mf(["fruit","fruit","combo","perfect","reslice"]),s={kind:n,tier:e,got:0,need:1,type:null,min:0,icon:null,reward:200+e*100};switch(n){case"fruit":{s.type=Ni(ns),s.need=Jr(3,4)+Math.min(2,e),s.total=28,s.text=`\u65A9 ${s.need} \u4E2A${Ln[s.type].name}`,s.icon=s.type;break}case"combo":s.min=e>=2?4:3,s.total=32,s.text=`\u4E00\u5200\u8FDE\u65A9 ${s.min} \u4E2A\u6C34\u679C`,s.icon="combo";break;case"perfect":s.need=2+(e>=2?1:0),s.total=32,s.text=`\u5B8C\u7F8E\u65A9 ${s.need} \u6B21\uFF08\u8FC7\u679C\u5FC3\uFF09`,s.icon="perfect";break;case"reslice":s.need=3+Math.min(2,e),s.total=30,s.text=`\u4E8C\u6B21\u65A9 ${s.need} \u6B21\uFF08\u5288\u5F00\u98DE\u51FA\u7684\u534A\u5757\uFF09`,s.icon="reslice";break}s.left=s.total,this.active=s,t.ui.setBounty(s),t.sound.bounty()}event(t,e={}){let n=this.active;if(n){if(n.kind==="fruit"&&t==="slice"&&e.type===n.type)n.got++;else if(n.kind==="combo"&&t==="combo"&&e.n>=n.min)n.got=1;else if(n.kind==="perfect"&&t==="perfect")n.got++;else if(n.kind==="reslice"&&t==="reslice")n.got++;else return;this.game.ui.updateBounty(n),n.got>=n.need&&this.complete()}}complete(){let t=this.game,e=this.active;this.active=null,this.done++,t.stats.bounty++,this.cool=Q(8,12),t.addScore(e.reward,null,!1),t.addFocus(40),t.mode==="classic"&&t.lives<t.maxLives&&t.gainLife(),t.mode!=="classic"&&t.timeLeft!=null&&(t.timeLeft+=4),t.ui.bountyDone(e),t.sound.bountyDone(),t.ui.banner("\u60AC\u8D4F\u5B8C\u6210\uFF01",`+${e.reward}`,"#ffd76a")}fail(){this.active=null,this.cool=Q(6,9),this.game.ui.clearBounty(),this.game.ui.toast("\u60AC\u8D4F\u4EE4\u8D85\u65F6")}};var Yn=[{name:"\u767D\u5E26",score:0,color:"#eeeeee"},{name:"\u9EC4\u5E26",score:300,color:"#f7d13a"},{name:"\u6A59\u5E26",score:800,color:"#ff9a2e"},{name:"\u7EFF\u5E26",score:1500,color:"#5cd15c"},{name:"\u84DD\u5E26",score:2500,color:"#4aa3ff"},{name:"\u7D2B\u5E26",score:4e3,color:"#a56bff"},{name:"\u68D5\u5E26",score:6e3,color:"#a8703f"},{name:"\u7EA2\u5E26",score:8500,color:"#ff4a4a"},{name:"\u9ED1\u5E26",score:12e3,color:"#2b2b30"},{name:"\u5B97\u5E08",score:16e3,color:"#ffd76a"}],fx='<svg viewBox="0 0 32 30"><path d="M16 28C4 20 0 14 0 9 0 4 4 1 8 1c3 0 6 2 8 5 2-3 5-5 8-5 4 0 8 3 8 8 0 5-4 11-16 19Z" fill="#ff4a55" stroke="#7a0f18" stroke-width="2"/><path d="M6 6c2-2 5-1 6 2" stroke="#ffb0b0" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',dx={combo:"\u2694\uFE0F",perfect:"\u{1F3AF}",reslice:"\u2702\uFE0F"},wl=class{constructor(t,e){this.stage=t,this.icons=e||{};let n=a=>document.getElementById(a);this.$=n,this.on={},this.el={loading:n("loading"),loadFill:n("loadFill"),loadText:n("loadText"),menu:n("menu"),modes:n("modes"),hud:n("hud"),rankDot:n("rankDot"),rankName:n("rankName"),rankBar:n("rankBar"),rankNext:n("rankNext"),score:n("score"),mult:n("mult"),best:n("best"),streak:n("streak"),lives:n("lives"),timer:n("timer"),bounty:n("bounty"),bIcon:n("bIcon"),bGlyph:n("bGlyph"),bText:n("bText"),bBar:n("bBar"),bProg:n("bProg"),powers:n("powers"),focus:n("focus"),fFill:n("fFill"),fBtn:n("fBtn"),banner:n("banner"),bannerMain:n("bannerMain"),bannerSub:n("bannerSub"),popups:n("popups"),toast:n("toast"),pause:n("pause"),over:n("over"),how:n("how")},this.cache={},this.powerEls=new Map,this.labels=new Map,this.toastTimer=0;let s=(a,l)=>n(a).addEventListener("click",c=>{c.currentTarget.blur(),this.on.click?.(),l()});s("btnPause",()=>this.on.pause?.()),s("btnResume",()=>this.on.resume?.()),s("btnRestart",()=>this.on.restart?.()),s("btnQuit",()=>this.on.quit?.()),s("btnAgain",()=>this.on.again?.()),s("btnMenu",()=>this.on.menu?.()),s("btnHow",()=>this.on.how?.()),s("btnHowClose",()=>this.hideHow()),s("btnSound",()=>this.on.sound?.()),s("btnMute",()=>this.on.sound?.()),s("btnMusic",()=>this.on.music?.()),n("chkHover").addEventListener("change",a=>this.on.hover?.(a.target.checked));let r=this.el.fBtn;r.addEventListener("pointerdown",a=>{a.preventDefault(),this.on.focus?.(!0)});let o=()=>this.on.focus?.(!1);r.addEventListener("pointerup",o),r.addEventListener("pointercancel",o),r.addEventListener("pointerleave",o),this.buildHow()}setLoading(t,e){this.el.loadFill.style.width=`${Math.round(t*100)}%`,e&&(this.el.loadText.textContent=`\u6B63\u5728\u78E8\u5200\u2026 ${e}`)}hideLoading(){let t=this.el.loading;t.style.transition="opacity 0.5s",t.style.opacity="0",setTimeout(()=>t.classList.add("hidden"),520)}showMenu(){this.el.menu.classList.remove("hidden"),this.hideHud()}hideMenu(){this.el.menu.classList.add("hidden")}initMenuLabels(t){this.el.modes.innerHTML="",this.labels.clear();for(let e of t){let n=document.createElement("div");n.className="mode-label",n.innerHTML=`<b>${e.title}</b><span>${e.desc}</span><em></em>`,n.addEventListener("click",()=>{this.on.click?.(),this.on.pick?.(e.mode)}),this.el.modes.appendChild(n),this.labels.set(e.mode,n)}}setMenuBest(t,e){let n=this.labels.get(t);n&&(n.querySelector("em").textContent=e?`\u6700\u9AD8 ${e}`:"")}placeLabel(t,e,n){let s=this.labels.get(t);s&&(s.style.left=`${e}px`,s.style.top=`${n}px`)}setToggles({muted:t,music:e,hover:n}){this.$("btnSound").textContent=t?"\u97F3\u6548 \u5173":"\u97F3\u6548 \u5F00",this.$("btnMusic").textContent=e?"\u97F3\u4E50 \u5F00":"\u97F3\u4E50 \u5173",this.$("btnMute").classList.toggle("off",t),this.$("chkHover").checked=!!n}showHud(t){this.el.hud.classList.remove("hidden"),this.el.lives.classList.toggle("hidden",t!=="classic"),this.el.timer.classList.toggle("hidden",t==="classic"),this.cache={}}hideHud(){this.el.hud.classList.add("hidden"),this.clearBounty(),this.setPowers([]),this.el.banner.classList.add("hidden")}setScore(t,e=!1){if(this.cache.score!==t&&(this.cache.score=t,this.el.score.textContent=t),e){let n=this.el.score;n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")}}setBest(t){this.el.best.textContent=t}setMult(t){this.cache.mult!==t&&(this.cache.mult=t,this.el.mult.classList.toggle("hidden",t<=1),this.el.mult.textContent=`\xD7${t}`)}setStreak(t){this.cache.streak!==t&&(this.cache.streak=t,this.el.streak.textContent=t>=5?`\u8FDE\u51FB ${t}`:"")}setRank(t,e,n){let s=this.cache;if(s.rank!==t.name&&(s.rank=t.name,this.el.rankName.textContent=t.name,this.el.rankDot.style.background=t.color),e){let r=(n-t.score)/(e.score-t.score)*100;this.el.rankBar.style.width=`${Math.max(0,Math.min(100,r))}%`,this.el.rankNext.textContent=`\u8DDD${e.name} ${e.score-n}`}else this.el.rankBar.style.width="100%",this.el.rankNext.textContent="\u5DF2\u81F3\u5DC5\u5CF0"}setLives(t,e){if(this.cache.lives===t&&this.cache.maxLives===e)return;let n=this.cache.lives??e;this.cache.lives=t,this.cache.maxLives=e,this.el.lives.innerHTML=fx.repeat(e);let s=this.el.lives.children;for(let r=0;r<e;r++)r>=t&&s[r].classList.add("lost"),r<t&&t>n&&r===t-1&&(s[r].style.animation="heart-break 0.5s ease-out")}setTimer(t){let e=Math.max(0,Math.ceil(t));this.cache.timer!==e&&(this.cache.timer=e,this.el.timer.textContent=e,this.el.timer.classList.toggle("low",e<=10))}setFocus(t,e){let n=this.el.fFill;n.style.width=`${Math.max(0,Math.min(100,t))}%`,this.el.focus.classList.toggle("ready",t>=100&&!e),this.el.focus.classList.toggle("active",e),this.el.fBtn.classList.toggle("on",e)}setBounty(t){let e=this.el;e.bounty.classList.remove("hidden","done"),e.bounty.style.animation="none",e.bounty.offsetWidth,e.bounty.style.animation="";let n=this.icons[t.icon];e.bIcon.style.display=n?"":"none",n&&(e.bIcon.src=n),e.bGlyph.textContent=n?"":dx[t.icon]||"\u2605",e.bText.textContent=t.text,this.updateBounty(t)}updateBounty(t){this.el.bBar.style.width=`${Math.max(0,t.left/t.total*100)}%`,this.el.bProg.textContent=t.kind==="combo"?`\u2265${t.min}`:`${t.got}/${t.need}`}bountyDone(){let t=this.el.bounty;t.classList.add("done"),setTimeout(()=>t.classList.contains("done")&&t.classList.add("hidden"),700)}clearBounty(){this.el.bounty.classList.add("hidden"),this.el.bounty.classList.remove("done")}setPowers(t){let e=new Set;for(let n of t){e.add(n.kind);let s=this.powerEls.get(n.kind);if(!s){let r=Oi[n.kind];s=document.createElement("div"),s.className="power",s.style.setProperty("--c",r.color),s.innerHTML=`<div class="in"><img src="${this.icons[r.fruit]||""}" alt=""></div><small>${r.name}</small>`,this.el.powers.appendChild(s),this.powerEls.set(n.kind,s)}s.style.setProperty("--p",Math.max(0,n.left/n.total*100).toFixed(1))}for(let[n,s]of this.powerEls)e.has(n)||(s.remove(),this.powerEls.delete(n))}banner(t,e="",n="#ffd36a"){let s=this.el.banner;this.el.bannerMain.textContent=t,this.el.bannerSub.textContent=e,s.style.setProperty("--bc",n),s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this._bt),this._bt=setTimeout(()=>s.classList.add("hidden"),2100)}popup(t,e,n,s="",r=null){let o=this.el.popups;o.children.length>26&&o.firstChild.remove();let a=document.createElement("div");a.className=`pop ${s}`,a.textContent=t;let l=60;a.style.left=`${Math.max(l,Math.min(this.stage.width-l,e))}px`,a.style.top=`${Math.max(l,Math.min(this.stage.height-l,n))}px`,r&&a.style.setProperty("--pc",r),a.addEventListener("animationend",()=>a.remove()),o.appendChild(a)}toast(t){let e=this.el.toast;e.textContent=t,e.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>e.classList.remove("show"),1700)}showPause(){this.el.pause.classList.remove("hidden")}hidePause(){this.el.pause.classList.add("hidden")}showHow(){this.el.how.classList.remove("hidden")}hideHow(){this.el.how.classList.add("hidden")}hideOver(){this.el.over.classList.add("hidden")}showOver(t){let e=this.$;e("overTitle").textContent=t.title,e("overScore").textContent=t.score,e("overBest").textContent=t.best,e("overNew").classList.toggle("hidden",!t.isNew),e("overRank").textContent=t.rank.name,e("overDot").style.background=t.rank.color,e("overStats").innerHTML=t.stats.map(([n,s])=>`<div><b>${s}</b><span>${n}</span></div>`).join(""),this.el.over.classList.remove("hidden")}buildHow(){let t=n=>this.icons[n]?`<img src="${this.icons[n]}" alt="">`:"",e=[["\u{1F52A}","\u771F\xB73D \u5207\u5272","\u5200\u950B\u5212\u8FC7\uFF0C\u6C34\u679C\u7F51\u683C\u88AB\u771F\u5B9E\u5288\u5F00\uFF0C\u9732\u51FA\u679C\u8089\u622A\u9762\u3002\u5200\u7684\u65B9\u5411\u4E0E\u5207\u9762\u5B8C\u5168\u4E00\u81F4\u3002"],["\u{1F3AF}","\u5B8C\u7F8E\u65A9","\u5200\u8FC7\u679C\u5FC3\uFF08\u5207\u53E3\u8FD1\u4E4E\u5BF9\u534A\uFF09\u89E6\u53D1\u5B8C\u7F8E\u65A9\uFF1A\u5F97\u5206\u7FFB\u500D\uFF0C\u5FC3\u773C\u80FD\u91CF\u5927\u589E\u3002"],["\u2702\uFE0F","\u4E8C\u6B21\u65A9","\u65A9\u5F00\u540E\u98DE\u51FA\u7684\u534A\u5757\u8FD8\u80FD\u518D\u5288\u4E00\u5200\uFF0C\u788E\u6210\u56DB\u5757\uFF0C\u989D\u5916\u5F97\u5206\u3002"],["\u2694\uFE0F","\u8FDE\u65A9\u4E0E\u8FDE\u51FB","\u4E00\u5200\u8FDE\u65A9 3 \u4E2A\u4EE5\u4E0A\u89E6\u53D1\u8FDE\u65A9\u52A0\u5206\uFF1B\u8FDE\u7EED\u4E0D\u5931\u8BEF\u7D2F\u79EF\u8FDE\u51FB\uFF0C\u5F97\u5206\u500D\u7387\u6700\u9AD8 \xD75\u3002"],[t("dragon"),"\u706B\u9F99\u679C \xB7 \u70C8\u7130\u65A9","\u7206\u70B8\u6CE2\u53CA\u5468\u56F4\u6C34\u679C\uFF0C\u5200\u5203\u71C3\u70E7\uFF1A\u6BCF\u6B21\u65A9\u51FB\u5F15\u71C3\u90BB\u8FD1\u6C34\u679C\uFF0C\u8FD8\u80FD\u51C0\u5316\u70B8\u5F39\u3002"],[t("pear"),"\u96EA\u68A8 \xB7 \u51B0\u5C01\u65F6\u523B","\u65F6\u95F4\u51E0\u4E4E\u9759\u6B62\uFF0C\u6C34\u679C\u60AC\u505C\u7A7A\u4E2D\uFF0C\u5F97\u5206\u7FFB\u500D\u3002"],[t("star"),"\u6768\u6843 \xB7 \u96F7\u9706\u4E4B\u5203","\u6BCF\u6B21\u65A9\u51FB\u5F15\u53D1\u95EA\u7535\uFF0C\u8FDE\u9501\u5288\u5411\u9644\u8FD1\u6C34\u679C\u3002"],[t("golden"),"\u91D1\u82F9\u679C \xB7 \u9EC4\u91D1\u65F6\u523B","\u5F97\u5206 \xD73\uFF0C\u6C34\u679C\u72C2\u6F6E\u6D8C\u6765\uFF0C\u70B8\u5F39\u6D88\u5931\u3002"],["\u{1F441}\uFE0F","\u5FC3\u773C\uFF08\u7A7A\u683C / \u53F3\u952E\uFF09","\u79EF\u6512\u80FD\u91CF\u540E\u6309\u4F4F\u8FDB\u5165\u5B50\u5F39\u65F6\u95F4\uFF0C\u770B\u6E05 3D \u5207\u9762\uFF0C\u4ECE\u5BB9\u65A9\u51FB\u3002"],["\u{1F4DC}","\u60AC\u8D4F\u4EE4","\u968F\u673A\u4EFB\u52A1\uFF1A\u65A9\u6307\u5B9A\u6C34\u679C\u3001\u4E00\u5200\u8FDE\u65A9\u3001\u5B8C\u7F8E\u65A9\u3001\u4E8C\u6B21\u65A9\u3002\u5B8C\u6210\u5F97\u5956\u52B1\u3002"],[t("watermelon"),"\u897F\u74DC\u5927\u738B","\u5B9A\u65F6\u6765\u88AD\u7684\u5DE8\u578B\u897F\u74DC\uFF0C\u53EF\u5C42\u5C42\u5288\u6210 8 \u5757\uFF0C\u6536\u83B7\u6EE1\u6EE1\u3002"],[t("bomb"),"\u70B8\u5F39","\u522B\u65A9\u70B8\u5F39\uFF01\u7ECF\u5178\u6A21\u5F0F\u6263 1 \u6761\u547D\uFF0C\u9650\u65F6\u6A21\u5F0F\u6263\u65F6\u95F4\u3002\u706B\u9F99\u679C\u53EF\u4EE5\u51C0\u5316\u5B83\u3002"]];this.$("howList").innerHTML=e.map(([n,s,r])=>`<div class="how-item"><div class="ic">${n}</div><div><b>${s}</b><p>${r}</p></div></div>`).join("")}};var no=[293.66,329.63,392,440,493.88,587.33,659.25,783.99,880],Tl=class{constructor(){this.ctx=null,this.muted=jf("fn_mute")==="1",this.musicOn=jf("fn_music")!=="0",this.intensity=0,this.lastWhoosh=0,this.timer=null}init(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=new t;this.ctx=e;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=6,this.master=e.createGain(),this.master.gain.value=this.muted?0:.8,n.connect(this.master),this.master.connect(e.destination),this.out=n,this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(n),this.mus=e.createGain(),this.mus.gain.value=this.musicOn?.5:0,this.mus.connect(n);let s=e.sampleRate*2,r=e.createBuffer(1,s,e.sampleRate),o=r.getChannelData(0);for(let h=0;h<s;h++)o[h]=Math.random()*2-1;this.noiseBuf=r;let a=Math.floor(e.sampleRate*1.6),l=e.createBuffer(2,a,e.sampleRate);for(let h=0;h<2;h++){let f=l.getChannelData(h);for(let u=0;u<a;u++)f[u]=(Math.random()*2-1)*Math.pow(1-u/a,2.6)}this.verb=e.createConvolver(),this.verb.buffer=l;let c=e.createGain();c.gain.value=.32,this.verb.connect(c),c.connect(n)}resume(){this.init(),this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}get t(){return this.ctx.currentTime}tone({type:t="sine",f0:e=440,f1:n=e,dur:s=.2,gain:r=.2,attack:o=.004,delay:a=0,verb:l=0,dest:c=null}){if(!this.ctx)return;let h=this.ctx,f=this.t+a,u=h.createOscillator(),d=h.createGain();if(u.type=t,u.frequency.setValueAtTime(e,f),n!==e&&u.frequency.exponentialRampToValueAtTime(Math.max(1,n),f+s),d.gain.setValueAtTime(1e-4,f),d.gain.exponentialRampToValueAtTime(r,f+o),d.gain.exponentialRampToValueAtTime(1e-4,f+s),u.connect(d),d.connect(c||this.sfx),l){let p=h.createGain();p.gain.value=l,d.connect(p),p.connect(this.verb)}u.start(f),u.stop(f+s+.05)}noise({type:t="bandpass",f0:e=1e3,f1:n=e,q:s=1,dur:r=.2,gain:o=.2,attack:a=.003,delay:l=0,verb:c=0,dest:h=null}){if(!this.ctx)return;let f=this.ctx,u=this.t+l,d=f.createBufferSource();d.buffer=this.noiseBuf,d.loop=!0;let p=f.createBiquadFilter();p.type=t,p.Q.value=s,p.frequency.setValueAtTime(e,u),n!==e&&p.frequency.exponentialRampToValueAtTime(Math.max(20,n),u+r);let _=f.createGain();if(_.gain.setValueAtTime(1e-4,u),_.gain.exponentialRampToValueAtTime(o,u+a),_.gain.exponentialRampToValueAtTime(1e-4,u+r),d.connect(p),p.connect(_),_.connect(h||this.sfx),c){let g=f.createGain();g.gain.value=c,_.connect(g),g.connect(this.verb)}d.start(u,Math.random()*1.5),d.stop(u+r+.05)}whoosh(t=1){if(!this.ctx)return;let e=performance.now();if(e-this.lastWhoosh<110)return;this.lastWhoosh=e;let n=Math.min(1,t);this.noise({f0:500+300*n,f1:2200+1200*n,q:.8,dur:.16,gain:.05+.09*n,attack:.03})}launch(){this.tone({type:"sine",f0:180+Math.random()*60,f1:420+Math.random()*120,dur:.11,gain:.05}),this.noise({type:"lowpass",f0:900,f1:300,dur:.1,gain:.05})}slice(t=1,e=0){this.noise({f0:3500,f1:7500,q:.7,dur:.11,gain:.26}),this.noise({type:"lowpass",f0:1400/(.6+e*.3),f1:280,dur:.2+e*.08,gain:.3,verb:.15}),this.tone({type:"triangle",f0:700*t,f1:190*t,dur:.13,gain:.13}),this.tone({type:"sine",f0:140*t,f1:60,dur:.14,gain:.2})}splash(){this.noise({type:"bandpass",f0:1800,f1:500,q:.5,dur:.3,gain:.12,delay:.02})}perfect(){this.tone({type:"sine",f0:1318,dur:.6,gain:.16,verb:.4}),this.tone({type:"sine",f0:1975,dur:.5,gain:.1,delay:.05,verb:.4}),this.tone({type:"sine",f0:2637,dur:.4,gain:.06,delay:.1,verb:.4})}combo(t){let e=Math.min(t,7);for(let n=0;n<e;n++)this.tone({type:"triangle",f0:no[Math.min(n+2,no.length-1)]*1.5,dur:.14,gain:.12,delay:n*.055,verb:.2})}reslice(){this.tone({type:"triangle",f0:1200,f1:1800,dur:.09,gain:.1}),this.noise({f0:4500,f1:8e3,dur:.07,gain:.14})}bomb(){this.tone({type:"sine",f0:130,f1:28,dur:.9,gain:.85,verb:.3}),this.noise({type:"lowpass",f0:2600,f1:90,dur:1,gain:.7,verb:.35}),this.noise({type:"highpass",f0:4e3,dur:.15,gain:.3})}miss(){this.tone({type:"triangle",f0:210,f1:85,dur:.32,gain:.22})}lifeLost(){this.tone({type:"sawtooth",f0:330,f1:110,dur:.5,gain:.12,verb:.2}),this.tone({type:"triangle",f0:247,f1:82,dur:.6,gain:.14,delay:.1})}fire(){this.noise({f0:250,f1:3200,q:.6,dur:.8,gain:.4,attack:.05,verb:.2}),this.tone({type:"sawtooth",f0:70,f1:220,dur:.6,gain:.16}),this.tone({type:"sine",f0:120,f1:40,dur:.5,gain:.4})}ice(){this.tone({type:"sine",f0:320,f1:70,dur:.9,gain:.3,verb:.3}),[2093,2637,3136,3951].forEach((t,e)=>this.tone({type:"sine",f0:t,dur:.9,gain:.07,delay:e*.05,verb:.5})),this.noise({type:"highpass",f0:5e3,dur:.25,gain:.12})}bolt(){for(let t=0;t<3;t++)this.noise({type:"highpass",f0:3200,dur:.09,gain:.25,delay:t*.05});this.tone({type:"sawtooth",f0:90,f1:900,dur:.18,gain:.14}),this.tone({type:"square",f0:1400,f1:300,dur:.12,gain:.05})}zap(){this.noise({type:"highpass",f0:3500,dur:.1,gain:.2}),this.tone({type:"sawtooth",f0:600,f1:1800,dur:.08,gain:.07})}fever(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.5,gain:.16,delay:e*.07,verb:.35})),this.noise({type:"highpass",f0:6e3,dur:.6,gain:.08,attack:.2})}focusIn(){this.tone({type:"sine",f0:520,f1:90,dur:.45,gain:.25,verb:.3}),this.noise({type:"lowpass",f0:1800,f1:120,dur:.5,gain:.18})}focusOut(){this.tone({type:"sine",f0:100,f1:620,dur:.28,gain:.18})}bounty(){[659.25,987.77].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.4,gain:.14,delay:e*.12,verb:.3}))}bountyDone(){[523.25,659.25,783.99,1046.5].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.45,gain:.16,delay:e*.09,verb:.35}))}rank(){[587.33,783.99,987.77,1174.66,1567.98].forEach((t,e)=>this.tone({type:"sine",f0:t,dur:.7,gain:.12,delay:e*.08,verb:.5}))}boss(){this.tone({type:"sine",f0:73.4,f1:55,dur:1.4,gain:.55,verb:.3}),this.taiko(0,.9),this.taiko(.32,.9),this.taiko(.64,1)}click(){this.tone({type:"triangle",f0:880,f1:660,dur:.07,gain:.12})}gameover(){[392,329.63,261.63,196].forEach((t,e)=>this.tone({type:"triangle",f0:t,dur:.7,gain:.16,delay:e*.18,verb:.4}))}taiko(t=0,e=1){this.tone({type:"sine",f0:150,f1:48,dur:.38,gain:.55*e,delay:t,verb:.15,dest:this.mus}),this.noise({type:"lowpass",f0:900,f1:200,dur:.12,gain:.25*e,delay:t,dest:this.mus})}startMusic(){!this.ctx||this.timer||(this.step=0,this.nextTime=this.t+.1,this.note=3,this.timer=setInterval(()=>this._schedule(),60))}stopMusic(){this.timer&&clearInterval(this.timer),this.timer=null}_schedule(){if(!this.ctx)return;let t=60/(100+this.intensity*26)/2;for(;this.nextTime<this.t+.25;)this._playStep(this.step,this.nextTime),this.nextTime+=t,this.step++}_pluck(t,e,n=.16,s=.7){let r=this.ctx,o=r.createOscillator(),a=r.createOscillator(),l=r.createGain(),c=r.createBiquadFilter();o.type="triangle",a.type="sine",o.frequency.setValueAtTime(t*1.012,e),o.frequency.exponentialRampToValueAtTime(t,e+.05),a.frequency.setValueAtTime(t*2,e),c.type="lowpass",c.frequency.setValueAtTime(4200,e),c.frequency.exponentialRampToValueAtTime(700,e+s),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(n,e+.003),l.gain.exponentialRampToValueAtTime(1e-4,e+s),o.connect(c),a.connect(c),c.connect(l),l.connect(this.mus);let h=r.createGain();h.gain.value=.5,l.connect(h),h.connect(this.verb),o.start(e),a.start(e),o.stop(e+s+.05),a.stop(e+s+.05)}_playStep(t,e){let n=t%16,s=this.ctx,r=this.intensity,o=(a,l,c,h)=>{let f=s.createOscillator(),u=s.createGain();f.frequency.setValueAtTime(a,e),f.frequency.exponentialRampToValueAtTime(l,e+c),u.gain.setValueAtTime(h,e),u.gain.exponentialRampToValueAtTime(1e-4,e+c),f.connect(u),u.connect(this.mus),f.start(e),f.stop(e+c+.02)};if(n===0||n===8?o(140,46,.4,.5):(n===4||n===12)&&o(200,90,.18,.22),r>.35&&(n===6||n===14)&&o(180,70,.16,.2),r>.7&&(n===2||n===10||n===15)&&o(220,100,.12,.14),r>.2&&n%2===1){let a=s.createBufferSource();a.buffer=this.noiseBuf;let l=s.createBiquadFilter();l.type="highpass",l.frequency.value=6500;let c=s.createGain();c.gain.setValueAtTime(.05,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.05),a.connect(l),l.connect(c),c.connect(this.mus),a.start(e,Math.random()),a.stop(e+.06)}if((n%2===0||r>.5&&Math.random()<.5)&&Math.random()<.72){let a=[-2,-1,-1,0,1,1,2][Math.random()*7|0];this.note=Math.max(0,Math.min(no.length-1,this.note+a)),this._pluck(no[this.note],e,.14,.9),n===0&&Math.random()<.6&&this._pluck(no[Math.max(0,this.note-5)]*.5,e,.1,1.2)}n===0&&this._pluck(146.83*(Math.random()<.3?.75:1),e,.16,1.4)}setIntensity(t){this.intensity=Math.max(0,Math.min(1,t))}setMuted(t){this.muted=t,Qf("fn_mute",t?"1":"0"),this.master&&this.master.gain.setTargetAtTime(t?0:.8,this.t,.05)}setMusic(t){this.musicOn=t,Qf("fn_music",t?"1":"0"),this.mus&&this.mus.gain.setTargetAtTime(t?.5:0,this.t,.1)}};function jf(i){try{return localStorage.getItem(i)}catch{return null}}function Qf(i,t){try{localStorage.setItem(i,t)}catch{}}var px=6,mx=.16,gx=.22,_x=.3,Bi={classic:{title:"\u7ECF\u5178",desc:"3 \u6761\u547D \xB7 \u65E0\u5C3D\u6311\u6218",fruit:"watermelon",lives:3},arcade:{title:"\u9650\u65F6",desc:"60 \u79D2 \xB7 \u70B8\u5F39\u6263\u65F6\u95F4",fruit:"orange",time:60},zen:{title:"\u7985\u610F",desc:"90 \u79D2 \xB7 \u65E0\u70B8\u5F39",fruit:"peach",time:90}},gh=i=>{try{return localStorage.getItem(i)}catch{return null}},_h=(i,t)=>{try{localStorage.setItem(i,t)}catch{}},El=class{constructor(t,e,n){this.stage=t,this.assets=e,this.icons=n,this.sound=new Tl,this.fx=new yl(t),this.world=new vl(t,e),this.world.onFall=s=>this.onFall(s),this.blade=new Ml(t,t.canvas),this.ui=new wl(t,n),this.director=new bl(this),this.bounty=new Sl(this),this.state="menu",this.mode="classic",this.timers=[],this.timeScale=1,this.hitstop=0,this.time=0,this.bests={};for(let s of Object.keys(Bi))this.bests[s]=parseInt(gh("fn_best_"+s)||"0",10)||0;this.blade.hover=gh("fn_hover")==="1",this.bot=new URLSearchParams(location.search).get("bot")==="1",this.botTimer=0,this.botFocus=0,this.swipeIdBot=1e5,this.resetRun(),this.bind(),this.ui.initMenuLabels(Object.entries(Bi).map(([s,r])=>({mode:s,title:r.title,desc:r.desc})));for(let s of Object.keys(Bi))this.ui.setMenuBest(s,this.bests[s]);this.refreshToggles()}bind(){let t=this.ui,e=()=>{this.sound.resume(),this.sound.startMusic()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),t.on.click=()=>this.sound.click(),t.on.pick=s=>this.pickMode(s),t.on.pause=()=>this.pause(),t.on.resume=()=>this.resume(),t.on.restart=()=>{t.hidePause(),this.startGame(this.mode)},t.on.quit=()=>{t.hidePause(),this.enterMenu()},t.on.again=()=>{t.hideOver(),this.startGame(this.mode)},t.on.menu=()=>{t.hideOver(),this.enterMenu()},t.on.how=()=>t.showHow(),t.on.sound=()=>{this.sound.setMuted(!this.sound.muted),this.refreshToggles()},t.on.music=()=>{this.sound.setMusic(!this.sound.musicOn),this.refreshToggles()},t.on.hover=s=>{this.blade.hover=s,_h("fn_hover",s?"1":"0")},t.on.focus=s=>this.setFocusHeld(s),window.addEventListener("keydown",s=>{if(!s.repeat){if(s.code==="Space")s.preventDefault(),this.setFocusHeld(!0);else if(s.code==="Escape"||s.code==="KeyP")this.state==="playing"?this.pause():this.state==="paused"&&this.resume();else if(s.code==="KeyM")t.on.sound();else if(this.state==="menu"){let r={Digit1:"classic",Digit2:"arcade",Digit3:"zen"};r[s.code]&&this.pickMode(r[s.code])}}}),window.addEventListener("keyup",s=>{s.code==="Space"&&this.setFocusHeld(!1)}),xx(this.stage.canvas,s=>{s.button===2&&(s.preventDefault(),this.setFocusHeld(s.type==="pointerdown"))});let n=0;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{this.state==="menu"&&!this.pending&&(this.world.clear(),this.layoutMenu())},120)}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()})}refreshToggles(){this.ui.setToggles({muted:this.sound.muted,music:this.sound.musicOn,hover:this.blade.hover})}resetRun(){this.score=0,this.dispScore=0,this.lives=3,this.maxLives=3,this.timeLeft=null,this.elapsed=0,this.streak=0,this.combo={count:0,timer:0,x:0,y:0},this.focus=25,this.focusActive=!1,this.powers={fire:0,ice:0,bolt:0,gold:0},this.rankIdx=0,this.stats={slices:0,perfect:0,reslice:0,bombs:0,maxCombo:0,maxStreak:0,bounty:0},this.timers.length=0}enterMenu(){this.state="menu",this.pending=null,this.world.clear(),this.blade.clearTrails(),this.blade.enabled=!0,this.resetRun(),this.exitFocusSilent(),this.sound.setIntensity(.15),this.ui.showMenu(),this.ui.hidePause(),this.ui.hideOver();for(let t of Object.keys(Bi))this.ui.setMenuBest(t,this.bests[t]);this.menuIdle=1.5,this.layoutMenu(),this.stage.setGrade({sat:1,tint:[1,1,1],vig:.5,focus:0})}layoutMenu(){let t=this.stage.bounds,e=Object.keys(Bi),n=t.width/t.height<.95,s=n?Math.min(t.height*.185,5.2):Math.min(t.width*.27,6.2),r=n?t.height*.045:-t.height*.04;this.menuFruits=[],e.forEach((o,a)=>{let l=n?0:(a-1)*s,c=n?r+(1-a)*s:r,h=this.world.spawn(Bi[o].fruit,{x:l,y:c,z:0,cls:"menu",gravity:0,scale:n?1.2:1.45,spin:new R(.15,.55,.1)});h.menuMode=o,h.baseY=c,h.phase=a*1.7,this.menuFruits.push(h)})}pickMode(t){if(this.state!=="menu"||this.pending)return;let e=this.menuFruits.find(n=>n.alive&&n.menuMode===t);if(e){let n=e.mesh.position;this.sliceEntity(e,n.x,n.y,.8,.6,{menu:!0})}else this.startGame(t)}startGame(t){this.mode=t;let e=Bi[t];this.state="playing",this.pending=null,this.world.clear(),this.resetRun(),this.exitFocusSilent(),this.lives=e.lives||0,this.maxLives=e.lives||0,this.timeLeft=e.time??null,this.director.reset(t),this.bounty.reset(),this.blade.enabled=!0,this.blade.clearTrails(),this.stage.splats.clear(),this.hitstop=0,this.ui.hideMenu(),this.ui.showHud(t),this.ui.setBest(this.bests[t]||0),this.ui.setScore(0),this.ui.setMult(1),this.ui.setStreak(0),e.lives&&this.ui.setLives(e.lives,e.lives),e.time&&this.ui.setTimer(e.time),this.updateRankUI(),this.ui.setFocus(this.focus,!1),this.ui.banner(`${e.title}\u6A21\u5F0F`,"\u6325\u5200\u5427\uFF0C\u5FCD\u8005\uFF01","#ffd36a"),this.sound.startMusic(),gh("fn_seen")||(_h("fn_seen","1"),setTimeout(()=>this.ui.toast("\u65A9\u5F00\u534A\u5757\u53EF\u4E8C\u6B21\u65A9 \xB7 \u6309\u4F4F\u7A7A\u683C\u8FDB\u5165\u5FC3\u773C \xB7 \u907F\u5F00\u70B8\u5F39"),2600))}pause(){this.state==="playing"&&(this.state="paused",this.ui.showPause(),this.exitFocusSilent(),this.sound.ctx?.suspend())}resume(){this.state==="paused"&&(this.state="playing",this.ui.hidePause(),this.sound.ctx?.resume(),this.blade.clearTrails())}gameOver(t="\u6E38\u620F\u7ED3\u675F"){if(this.state!=="playing")return;this.state="over",this.exitFocusSilent(),this.sound.gameover();let e=this.mode,n=this.score>(this.bests[e]||0);n&&(this.bests[e]=this.score,_h("fn_best_"+e,String(this.score))),this.combo.count=0,this.finishCombo();let s=Yn[this.rankIdx],r=this.stats;setTimeout(()=>{this.state==="over"&&(this.ui.hideHud(),this.ui.showOver({title:t,score:this.score,best:this.bests[e],isNew:n,rank:s,stats:[["\u65A9\u5207",r.slices],["\u5B8C\u7F8E\u65A9",r.perfect],["\u4E8C\u6B21\u65A9",r.reslice],["\u6700\u9AD8\u8FDE\u65A9",r.maxCombo],["\u6700\u957F\u8FDE\u51FB",r.maxStreak],["\u60AC\u8D4F\u5B8C\u6210",r.bounty]]}))},1100)}get playing(){return this.state==="playing"}scr(t,e){let n=this.stage.project(t,e,0);return{x:n.x,y:n.y}}after(t,e){this.timers.push({t,fn:e})}multiplier(){let t=this.streak,e=t>=100?5:t>=60?4:t>=30?3:t>=12?2:1;return this.powers.gold>0&&(e*=3),this.powers.ice>0&&(e*=2),Math.min(e,10)}addScore(t){return this.playing?(this.score=Math.max(0,this.score+t),this.checkRank(),this.updateRankUI(),t):0}checkRank(){let t=0;for(let e=0;e<Yn.length;e++)this.score>=Yn[e].score&&(t=e);t>this.rankIdx&&(this.rankIdx=t,this.ui.banner(`\u664B\u5347 \xB7 ${Yn[t].name}`,`${Yn[t].score} \u5206`,Yn[t].color==="#2b2b30"?"#c9c9d0":Yn[t].color),this.sound.rank())}updateRankUI(){let t=Yn[this.rankIdx],e=Yn[this.rankIdx+1];this.ui.setRank(t,e,this.score)}addFocus(t){this.focus=Math.min(100,this.focus+t)}gainLife(){if(this.lives<this.maxLives){this.lives++,this.ui.setLives(this.lives,this.maxLives);let t=this.scr(this.stage.bounds.right-2,this.stage.bounds.top-1.2);this.ui.popup("+1 \u547D",t.x,t.y+30,"good")}}loseLife(){this.mode!=="classic"||!this.playing||(this.lives--,this.ui.setLives(Math.max(0,this.lives),this.maxLives),this.sound.lifeLost(),this.stage.setFlash(.25,[1,.2,.15]),this.lives<=0&&this.gameOver("\u4F60\u88AB\u51FB\u8D25\u4E86"))}bossAlive(){return this.world.entities.some(t=>t.alive&&t.boss)}powerFruit(t){return Oi[t].fruit}announcePower(t){this.ui.toast(`\u5143\u7D20\u679C\u300C${Ln[Oi[t].fruit].name}\u300D\u51FA\u73B0\uFF01`)}launchEntity(t,e){let n=e.cls??(t==="bomb"?"bomb":"fruit"),s=Ln[t],r=n==="power"?Oi[s.power].color:null,o=this.world.spawn(t,{x:e.x,y:e.y,vx:e.vx,vy:e.vy,cls:n,aura:r,scale:e.scale});return e.silent||this.sound.launch(),o}spawnBoss(){let t=this.stage.bounds,e=this.world.gravity*.72,n=t.bottom-3.4,s=t.bottom+t.height*.66,r=Math.sqrt(2*e*(s-n)),o=Q(-3,3),a=this.world.spawn("watermelon",{x:o,y:n,vx:-o*.1,vy:r,cls:"boss",scale:2,gravity:.72,spin:new R(.2,.5,.8)});a.boss=!0,this.sound.boss(),this.ui.banner("\u897F\u74DC\u5927\u738B\u6765\u88AD\uFF01","\u5288\u5F00\u5B83\uFF0C\u5C42\u5C42\u788E\u6210 8 \u5757","#ff5a6a"),this.stage.shake(.35)}processSegment(t){if(t.speed<px)return;t.speed>14&&this.sound.whoosh(Math.min(1,t.speed/70));let e=t.x1-t.x0,n=t.y1-t.y0,s=Math.hypot(e,n)||1,r=e/s,o=n/s,a=[],l={};for(let c of this.world.entities)!c.alive||!c.sliceable||c.blockSwipe===t.swipe.id||c.cooldown>0||(jc(t.x0,t.y0,t.x1,t.y1,c.mesh.position.x,c.mesh.position.y,l),l.dist<c.hit+mx&&a.push({e:c,t:l.t,x:l.x,y:l.y}));a.sort((c,h)=>c.t-h.t);for(let c of a)c.e.alive&&(c.e.cls==="bomb"?this.playing?this.explodeBomb(c.e):this.fizzleBomb(c.e):c.e.cls==="menu"?this.sliceEntity(c.e,c.x,c.y,r,o,{swipe:t.swipe,menu:!0}):this.sliceEntity(c.e,c.x,c.y,r,o,{swipe:t.swipe}))}sliceEntity(t,e,n,s,r,o={}){if(!t.alive||!t.sliceable)return!1;let a=(Math.random()<.5?-1:1)*Q(.05,.5),l=Math.hypot(s,r)||1;s/=l,r/=l;let c=this.world.slice(t,e,n,s,r,a);if(!c)return!1;let h=t.cls==="piece",f=t.def,u=o.swipe,d=!!t.boss,p=t.cls;for(let b of c.pieces)b.blockSwipe=u?u.id:-1,b.boss=d;this.world.remove(t),u&&u.sliced++;let _=this.playing,g=c.perfect&&!h,m=this.scr(e,n),S=d||h&&t.scale>1.5?2:f.hit>1.05?1:0;if(_&&!o.menu){if(h){let b=d?[0,60,40,25][Math.min(3,t.gen)]:5*t.gen,w=Math.round(b*this.multiplier());this.addScore(w),this.ui.popup(`+${w}`,m.x,m.y,d?"gold":"reslice"),this.stats.reslice++,this.stats.slices++,d||this.bounty.event("reslice"),this.sound.reslice(),this.addFocus(1.5)}else{let b=p==="boss"?150:f.score,w=this.multiplier(),C=Math.round(b*(g?2:1)*w);this.addScore(C),this.streak++,this.stats.slices++,this.stats.maxStreak=Math.max(this.stats.maxStreak,this.streak),this.ui.popup(`+${C}`,m.x,m.y+8,g||w>1?"gold":""),g&&(this.stats.perfect++,this.ui.popup("\u5B8C\u7F8E\u65A9",m.x,m.y-34,"perfect"),this.bounty.event("perfect")),p==="fruit"&&this.bounty.event("slice",{type:t.type}),this.addFocus(g?10:3.2),this.bumpCombo(e,n)}this.ui.setScore(this.score,!0),this.updateRankUI()}let T=h?.55:S?2.2:1;this.fx.juice(e,n,c.angle,f.juice,T),this.stage.splat(e,n,f.juice,(h?.05:.07)*(S?1.7:1),c.angle);let y=this.powers.fire>0?"#ff8a3a":this.powers.bolt>0?"#ffee66":"#9fdcff";if(this.fx.quads.slash(e,n,c.angle,(S?6.5:3.6)*(h?.7:1),y,.2,.55),this.sound.slice(f.pitch||1,S),h||this.sound.splash(),g){this.fx.quads.ring(e,n,3.4,"#ffe27a",.5,2.6);let b=this.fx.color("#ffe27a");this.fx.sparks.burst(e,n,.6,26,7,.7,.36,b,6),this.sound.perfect(),this.hitstop=Math.max(this.hitstop,.05),this.stage.kick(.006)}if(d&&(this.stage.shake(.3),this.hitstop=Math.max(this.hitstop,.06)),d&&h&&t.gen>=3&&this.stage.setFlash(.2,[1,.5,.5]),d&&!this.bossAlive()&&(this.ui.banner("\u5927\u738B\u5DF2\u9664\uFF01","\u897F\u74DC\u6C41\u56DB\u6E85","#ff8a8a"),this.stage.setFlash(.35,[1,.6,.6])),!h&&f.power&&!o.menu&&this.activatePower(f.power,e,n),_&&!o.menu&&(this.powers.fire>0&&(o.depth||0)<2&&!(f.power==="fire"&&!h)&&this.igniteAround(e,n,(o.depth||0)+1),this.powers.bolt>0&&!o.auto&&!(f.power==="bolt"&&!h)&&this.chainBolts(e,n)),o.menu&&this.state==="menu"&&!this.pending){this.pending={mode:t.menuMode,t:.85};for(let b of this.menuFruits)b.alive&&b!==t&&(b.cls="fruit",b.gravity=1,b.vel.set(Q(-1,1),Q(1,3),0));this.sound.perfect()}return!0}bumpCombo(t,e){let n=this.combo;if(n.count++,n.timer=.36,n.x=t,n.y=e,n.count>=3){let s=this.scr(t,e);this.ui.popup(`${n.count} \u8FDE\u65A9`,s.x,s.y-74,"combo"),this.sound.combo(n.count),this.bounty.event("combo",{n:n.count})}}finishCombo(){let t=this.combo;if(t.count>=3&&this.playing){let e=Math.round(t.count*(t.count-1)*2*Math.min(3,this.multiplier()));this.addScore(e);let n=this.scr(t.x,t.y);this.ui.popup(`\u8FDE\u65A9 +${e}`,n.x,n.y-18,"gold"),this.ui.setScore(this.score,!0),this.stats.maxCombo=Math.max(this.stats.maxCombo,t.count),this.addFocus(t.count*2),this.updateRankUI(),this.stage.kick(.01)}else t.count>0&&(this.stats.maxCombo=Math.max(this.stats.maxCombo,t.count));t.count=0}explodeBomb(t){if(!t.alive)return;let e=t.mesh.position,n=e.x,s=e.y;this.world.remove(t),this.boom(n,s),this.streak=0,this.combo.count=0,this.stats.bombs++;let r=this.scr(n,s);this.ui.popup("BOOM!",r.x,r.y,"bad"),this.mode==="classic"?this.loseLife():this.playing&&(this.timeLeft=Math.max(0,this.timeLeft-5),this.score=Math.max(0,this.score-10),this.ui.popup("-5 \u79D2",r.x,r.y+44,"bad"));for(let o of this.world.entities){if(!o.alive||o===t||o.cls==="menu")continue;let a=o.mesh.position.x-n,l=o.mesh.position.y-s,c=Math.hypot(a,l)||1;if(c<7){let h=(1-c/7)*9;o.vel.x+=a/c*h,o.vel.y+=l/c*h*.6+h*.3}}}boom(t,e){let n=this.fx;n.quads.glow(t,e,11,"#ffb04a",.5,1.9),n.quads.ring(t,e,10,"#ff8a30",.7,2.4),n.quads.ring(t,e,6,"#ffe0a0",.45,2.4);let s=n.color("#ff8a1a");n.sparks.burst(t,e,.6,90,15,1,.6,s,5);let r=n.color("#ffe27a");n.sparks.burst(t,e,.8,50,9,.8,.45,r,3),this.stage.shake(.9),this.stage.setFlash(.55,[1,.75,.45]),this.stage.kick(.02),this.sound.bomb(),this.hitstop=Math.max(this.hitstop,.11)}fizzleBomb(t){let e=t.mesh.position;this.world.remove(t),this.boom(e.x,e.y)}purifyBomb(t){if(!t.alive)return;let e=t.mesh.position,n=e.x,s=e.y;this.world.remove(t),this.fx.quads.ring(n,s,4.5,"#fff0c0",.5,2.6),this.fx.quads.glow(n,s,5,"#ffd080",.4,2.4);let r=this.fx.color("#fff0c0");if(this.fx.sparks.burst(n,s,.6,40,8,.7,.4,r,-1),this.sound.zap(),this.playing){this.addScore(30);let o=this.scr(n,s);this.ui.popup("\u51C0\u5316 +30",o.x,o.y,"good"),this.ui.setScore(this.score,!0)}}activatePower(t,e,n){if(!this.playing)return;let s=Oi[t];this.powers[t]=s.duration;let r=this.scr(e,n);this.ui.popup(s.name,r.x,r.y-30,"power",s.color),this.ui.banner(s.name,s.desc,s.color);let o=this.fx,a=o.color(s.color);switch(t){case"fire":{this.sound.fire(),o.quads.ring(e,n,11,"#ff7a2a",.7,2.2),o.quads.glow(e,n,9,"#ff9a3a",.45,1.3),o.sparks.burst(e,n,.6,100,13,1,.55,a,-1),this.stage.shake(.55),this.stage.setFlash(.35,[1,.6,.25]),this.blast(e,n,3.9,1);break}case"ice":{this.sound.ice(),o.quads.ring(e,n,12,"#9be8ff",.8,2),o.quads.glow(e,n,9,"#bff0ff",.6,1),o.sparks.burst(e,n,.6,90,6,1.6,.34,a,.5),this.stage.setFlash(.22,[.6,.9,1]),this.stage.kick(.012);break}case"bolt":{this.sound.bolt(),this.stage.setFlash(.4,[1,1,.6]);let l=this.stage.bounds;this.world.entities.filter(h=>h.alive&&h.sliceable&&h.cls!=="bomb"&&h.cls!=="menu"&&!h.pending&&h.mesh.position.y>l.bottom).sort(()=>Math.random()-.5).slice(0,4).forEach((h,f)=>{h.pending=!0,this.after(.07*(f+1),()=>{if(!h.alive)return;let u=h.mesh.position;o.bolts.bolt(u.x+Q(-1,1),l.top+1.5,u.x,u.y),this.sound.zap(),this.sliceEntity(h,u.x,u.y,1,Q(-.5,.5),{auto:!0,depth:2})})});break}case"gold":{this.sound.fever(),o.quads.ring(e,n,12,"#ffd050",.8,2.6),o.quads.glow(e,n,10,"#ffe090",.6,2.4),o.sparks.burst(e,n,.6,110,9,1.4,.4,a,3),this.stage.setFlash(.4,[1,.85,.4]);break}}}blast(t,e,n,s){this.world.entities.filter(o=>o.alive&&o.sliceable&&o.cls!=="menu"&&!o.pending).map(o=>({t:o,d:Math.hypot(o.mesh.position.x-t,o.mesh.position.y-e)})).filter(o=>o.d<n+o.t.hit&&o.t.age>.04).sort((o,a)=>o.d-a.d).slice(0,8).forEach(({t:o},a)=>{o.pending=!0,this.after(.05*(a+1),()=>{if(o.alive)if(o.cls==="bomb")this.purifyBomb(o);else{let l=o.mesh.position,c=Math.atan2(l.y-e,l.x-t)+Math.PI/2+Q(-.6,.6);this.sliceEntity(o,l.x,l.y,Math.cos(c),Math.sin(c),{auto:!0,depth:s})}})})}igniteAround(t,e,n){let s=this.fx,r=s.color("#ff8a2a");s.sparks.burst(t,e,.6,16,5,.6,.4,r,-1.5),s.quads.ring(t,e,3.6,"#ff8a3a",.35,2.2),this.blast(t,e,2.3,n)}chainBolts(t,e){this.world.entities.filter(s=>s.alive&&s.sliceable&&s.cls!=="bomb"&&s.cls!=="menu"&&!s.pending&&s.age>.06).map(s=>({t:s,d:Math.hypot(s.mesh.position.x-t,s.mesh.position.y-e)})).filter(s=>s.d<5.5).sort((s,r)=>s.d-r.d).slice(0,2).forEach(({t:s},r)=>{s.pending=!0,this.fx.bolts.bolt(t,e,s.mesh.position.x,s.mesh.position.y),this.after(.09*(r+1),()=>{if(!s.alive)return;let o=s.mesh.position;this.sound.zap(),this.sliceEntity(s,o.x,o.y,Q(-1,1),Q(-1,1),{auto:!0,depth:2})})})}setFocusHeld(t){this.state==="playing"&&(t&&!this.focusActive&&this.focus>8?(this.focusActive=!0,this.sound.focusIn()):!t&&this.focusActive&&(this.focusActive=!1,this.sound.focusOut()))}exitFocusSilent(){this.focusActive=!1}onFall(t){if(!this.playing||t.cls!=="fruit")return;this.streak=0,this.sound.miss();let e=this.stage.bounds,n=Ve(t.mesh.position.x,e.left+1.2,e.right-1.2),s=this.scr(n,e.bottom+.8);this.ui.popup("\u2715",s.x,s.y,"miss"),this.mode==="classic"&&this.loseLife()}frame(t,e=!0){let n=Math.min(t,.05);if(this.time+=n,this.state==="paused"){this.blade.update(n),this.blade.take(),e?this.stage.render(n):this.stage.update(n);return}let s=1;this.focusActive&&(s=Math.min(s,gx)),this.powers.ice>0&&(s=Math.min(s,_x)),this.hitstop>0?(this.hitstop-=n,this.timeScale=.03):this.timeScale=qn(this.timeScale,s,7,n);let r=n*this.timeScale;this.blade.update(n);let o=this.blade.take();if(this.state==="playing"||this.state==="menu")for(let a of o)this.processSegment(a);this.bot&&this.runBot(n),this.updateBladeStyle(),this.world.update(r);for(let a=this.timers.length-1;a>=0;a--){let l=this.timers[a];l.t-=r,l.t<=0&&(this.timers.splice(a,1),l.fn())}this.emitAuras(r),this.fx.update(n*Math.max(this.timeScale,.14),this.world.gravity),this.updateBladeSparks(),this.state==="menu"?this.updateMenu(n):this.state==="playing"&&this.updatePlaying(n,r),this.updateGrade(),e?this.stage.render(n):this.stage.update(n)}updateMenu(t){let e=this.time;for(let s of this.menuFruits)s.alive&&s.cls==="menu"&&(s.mesh.position.y=s.baseY+Math.sin(e*1.3+s.phase)*.22);if(Object.keys(Bi).forEach(s=>{let r=this.menuFruits.find(a=>a.alive&&a.menuMode===s&&a.cls==="menu"),o=this.ui.labels.get(s);if(o)if(r){o.style.display="";let a=this.scr(r.mesh.position.x,r.baseY-r.hit-.15);this.ui.placeLabel(s,a.x,a.y)}else o.style.display="none"}),this.menuIdle-=t,this.menuIdle<=0&&!this.pending){this.menuIdle=Q(2.2,3.6);let s=this.stage.bounds,r=Ni(ns),o=Math.random()<.5,a=this.world.gravity,l=s.bottom-1.6,c=s.bottom+s.height*Q(.7,.9),h=Math.sqrt(2*a*(c-l)),f=h/a,u=o?s.left+1.5:s.right-1.5,d=u+(o?1:-1)*Q(3,6);this.launchEntity(r,{x:u,y:l,vx:(d-u)/(2*f),vy:h,silent:!0})}if(this.pending&&(this.pending.t-=t,this.pending.t<=0)){let s=this.pending.mode;this.pending=null,this.startGame(s)}}updatePlaying(t,e){this.elapsed+=e,this.director.update(e),this.bounty.update(t),this.combo.count>0&&(this.combo.timer-=t,this.combo.timer<=0&&this.finishCombo()),this.timeLeft!=null&&(this.timeLeft-=t,this.ui.setTimer(this.timeLeft),this.timeLeft<=0&&this.gameOver("\u65F6\u95F4\u5230"));for(let n of Object.keys(this.powers))this.powers[n]>0&&(this.powers[n]-=t,this.powers[n]<=0&&(this.powers[n]=0));this.ui.setPowers(Object.keys(this.powers).filter(n=>this.powers[n]>0).map(n=>({kind:n,left:this.powers[n],total:Oi[n].duration}))),this.focusActive&&(this.focus-=26*t,this.focus<=0&&(this.focus=0,this.focusActive=!1,this.sound.focusOut())),this.ui.setFocus(this.focus,this.focusActive),this.dispScore+=(this.score-this.dispScore)*Math.min(1,12*t),Math.abs(this.score-this.dispScore)<1&&(this.dispScore=this.score),this.ui.setScore(Math.round(this.dispScore)),this.ui.setMult(this.multiplier()),this.ui.setStreak(this.streak),this.sound.setIntensity(Ve(this.director.level*.75+(this.powers.gold>0?.4:0)-(this.focusActive?.3:0),0,1))}updateBladeStyle(){let t=this.powers,e=this.blade;t.fire>0?e.setStyle("#fff2c0","#ff6a1a",1.5):t.bolt>0?e.setStyle("#ffffff","#ffe84a",1.4):t.gold>0?e.setStyle("#fff6d0","#ffc830",1.3):t.ice>0?e.setStyle("#ffffff","#7fd8ff",1.2):this.focusActive?e.setStyle("#ffffff","#8ad0ff",1.2):e.setStyle("#ffffff","#66ccff",1)}updateBladeSparks(){let t=this.powers;if(t.fire>0||t.bolt>0||t.gold>0||t.ice>0)for(let e of this.blade.slots){let n=e.pts;if(!e.swipe||n.length<2)continue;let s=n[n.length-1],r=this.fx.sparks;for(let o=0;o<2;o++)t.fire>0?r.emit(s.x+Q(-.15,.15),s.y,1,Q(-1,1),Q(1,3),0,Q(.3,.6),Q(.25,.45),1,Q(.35,.65),.1,1,-1.5,1):t.bolt>0?r.emit(s.x,s.y,1,Q(-4,4),Q(-4,4),0,Q(.12,.25),Q(.15,.3),1,.95,.4,1,0,2):t.gold>0?r.emit(s.x+Q(-.2,.2),s.y+Q(-.2,.2),1,Q(-1,1),Q(-1,1),0,Q(.4,.8),Q(.2,.35),1,.8,.25,1,.5,1):r.emit(s.x+Q(-.2,.2),s.y+Q(-.2,.2),1,Q(-.5,.5),Q(-.5,.5),0,Q(.5,.9),Q(.12,.22),.7,.95,1,1,.2,1)}}emitAuras(t){let e=this.fx.sparks,n=this.time,s=this.assets.bomb;s&&(s.bodyMat.emissiveIntensity=.65+.4*Math.sin(n*9));for(let r of this.world.entities)if(r.alive){if(r.cls==="power"){let o=r.def.power,a=o==="ice"?45:o==="bolt"?60:70;r._acc=(r._acc||0)+t*a;let l=r.mesh.position;for(;r._acc>=1;){r._acc-=1;let c=Math.random()*Et,h=r.hit*(.3+Math.random()*.7),f=l.x+Math.cos(c)*h,u=l.y+Math.sin(c)*h;o==="fire"?e.emit(f,u,l.z+.3,Q(-.6,.6),Q(1.5,3.5),0,Q(.5,.9),Q(.3,.55),1,Q(.4,.75),.1,1,-1.5,1):o==="ice"?e.emit(f,u,l.z+.3,Q(-.5,.5),Q(-.6,.4),0,Q(.8,1.3),Q(.16,.3),.7,.95,1,1,.3,.5):o==="bolt"?e.emit(f,u,l.z+.3,Q(-5,5),Q(-5,5),0,Q(.15,.3),Q(.18,.32),1,.95,.4,1,0,2):e.emit(f,u,l.z+.3,Q(-.7,.7),Q(-.5,.9),0,Q(.6,1),Q(.2,.42),1,.8,.25,1,0,.8)}if(o==="bolt"&&(r._arc=(r._arc||0)-t,r._arc<=0)){r._arc=Q(.15,.4);let c=Math.random()*Et,h=r.hit*Q(1.4,2.3);this.fx.bolts.bolt(l.x,l.y,l.x+Math.cos(c)*h,l.y+Math.sin(c)*h,"#ffffff","#ffe84a",.16,.05)}}else if(r.cls==="bomb"&&(r._acc=(r._acc||0)+t*55,r._acc>=1)){r.mesh.updateMatrixWorld();let o=this.assets.bomb.fuseTip.clone().applyMatrix4(r.mesh.matrixWorld);for(;r._acc>=1;)r._acc-=1,e.emit(o.x,o.y,o.z+.2,Q(-1.5,1.5),Q(.5,2.8),0,Q(.25,.5),Q(.14,.28),1,Q(.5,.85),.15,1,2,1)}}}updateGrade(){let t={sat:1,tint:[1,1,1],vig:.5,focus:0},e=n=>{for(let s=0;s<3;s++)t.tint[s]*=n[s]};this.focusActive&&(t.sat=.5,t.focus=1,e([.82,.94,1.14])),this.powers.ice>0&&(t.sat=Math.min(t.sat,.85),e([.78,.95,1.2])),this.powers.fire>0&&e([1.1,.97,.9]),this.powers.gold>0&&(t.sat=Math.max(t.sat,1.15),e([1.12,1.03,.82])),this.stage.setGrade(t)}runBot(t){if(this.state==="menu"){if(this.botTimer-=t,this.botTimer<=0&&this.menuFruits.length){this.botTimer=1.2;let h=["classic","arcade","zen"][Math.floor(Math.random()*3)];this.pickMode(this.bot===!0?"classic":h)}return}if(this.state==="over"){this.botTimer-=t,this.botTimer<=0&&(this.botTimer=2.5,this.ui.hideOver(),this.startGame(this.mode));return}if(this.state!=="playing"||(this.botFocus-=t,this.botFocus<-18&&this.focus>60&&(this.botFocus=2,this.setFocusHeld(!0)),this.botFocus<=0&&this.focusActive&&this.botFocus>-18&&this.setFocusHeld(!1),this.botTimer-=t,this.botTimer>0))return;this.botTimer=.09;let e=this.stage.bounds,n=this.world.entities.filter(h=>h.alive&&h.sliceable&&h.cls!=="bomb"&&h.cls!=="menu"&&h.blockSwipe<1e5&&h.mesh.position.y>e.bottom+.6&&Math.abs(h.mesh.position.x)<e.width/2-.4);if(!n.length)return;n.sort((h,f)=>h.mesh.position.y-f.mesh.position.y);let r=n[0].mesh.position,o=Q(-.9,.9),a=Math.cos(o)*2.2,l=Math.sin(o)*2.2;for(let h of this.world.entities){if(!h.alive||h.cls!=="bomb")continue;let f={};if(jc(r.x-a,r.y-l,r.x+a,r.y+l,h.mesh.position.x,h.mesh.position.y,f),f.dist<h.hit+.5)return}let c={id:++this.swipeIdBot,sliced:0};this.processSegment({x0:r.x-a,y0:r.y-l,x1:r.x+a,y1:r.y+l,speed:40,swipe:c})}};function xx(i,t){i.addEventListener("pointerdown",t),i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t)}async function vx(){let i=new URLSearchParams(location.search),t=document.getElementById("loadFill"),e=document.getElementById("loadText"),n=new pl(document.getElementById("gl"));i.get("q")==="low"&&n.setQuality("low");let s=await zf((d,p)=>{t.style.width=`${Math.round(d*92)}%`,e.textContent=`\u6B63\u5728\u78E8\u5200\u2026 ${p}`});if(i.get("view")){document.getElementById("loading").classList.add("hidden"),Gf(n,s,i.get("view"),i);return}e.textContent="\u6B63\u5728\u64E6\u62ED\u56FE\u6807\u2026",await ml();let r=kf(s);t.style.width="100%";let o=new El(n,s,r);o.enterMenu(),o.ui.hideLoading();let a=(d=60,p=1/60)=>{for(let _=0;_<d;_++)o.frame(p,_===d-1);return{state:o.state,score:o.score,lives:o.lives,ents:o.world.entities.length}};window.__ninja={game:o,stage:n,world:o.world,assets:s,step:a};let l=performance.now(),c=0,h=0,f=3,u=d=>{let p=(d-l)/1e3;if(l=d,window.__freeze||o.frame(p),p<.12&&!document.hidden&&(c+=p,h++,h>=90)){let _=c/h;c=0,h=0,f-=1.5,_>.03&&f<=0&&n.degrade()&&(f=3)}requestAnimationFrame(u)};requestAnimationFrame(u)}vx().catch(i=>{console.error(i);let t=document.getElementById("loadText");t&&(t.textContent="\u52A0\u8F7D\u5931\u8D25\uFF1A"+i.message)});})();
