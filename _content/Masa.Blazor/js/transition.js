let e=!1;try{if("undefined"!=typeof window){const n=Object.defineProperty({},"passive",{get:()=>{e=!0}});window.addEventListener("testListener",n,n),window.removeEventListener("testListener",n,n)}}catch(e){console.warn(e)}function n(e){if(!e)return null;let n=e.getAttributeNames().find((e=>e.startsWith("_bl_")));return n&&(n=n.substring(4)),n}Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});class t{constructor(e,t){this._onTransitionEnd=e=>{const t=this._getTransitionLeaveEnter(e);t&&this.handle.invokeMethodAsync("OnTransitionEnd",n(e.target),"leave"==t?0:1)},this._onTransitionCancel=e=>{const t=this._getTransitionLeaveEnter(e);t&&this.handle.invokeMethodAsync("OnTransitionCancel",n(e.target),"leave"==t?0:1)},this.handle=t,this.el=e,this.el.addEventListener("transitionend",this._onTransitionEnd),this.el.addEventListener("transitioncancel",this._onTransitionCancel)}_getTransitionLeaveEnter(e){const n=e.target.className.split(" ");return n.some((e=>e.includes("transition-leave")))?"leave":n.some((e=>e.includes("transition-enter")))?"enter":void 0}reset(e){this.el.removeEventListener("transitionend",this._onTransitionEnd),this.el.removeEventListener("transitioncancel",this._onTransitionCancel),this.el=e,this.el.addEventListener("transitionend",this._onTransitionEnd),this.el.addEventListener("transitioncancel",this._onTransitionCancel)}dispose(){this.el.removeEventListener("transitionend",this._onTransitionEnd),this.el.removeEventListener("transitioncancel",this._onTransitionCancel),this.handle.dispose()}}function i(e,n){let i;if(i="string"==typeof e?document.querySelector(e):e,!i)return null;return new t(i,n)}export{i as init};
//# sourceMappingURL=transition.js.map
