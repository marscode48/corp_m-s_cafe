"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var AboutAnimation=function(){function t(e){_classCallCheck(this,t),this.DOM={},this.DOM.el=e,this.animate()}return _createClass(t,[{key:"animate",value:function(){var e=this.DOM.el.querySelector(".about__ul"),t=window.innerHeight,n=window.innerWidth;gsap.timeline({scrollTrigger:{trigger:this.DOM.el,start:"top top",pin:!0,end:"+=".concat(t),scrub:.5}}).to(e,{delay:.1,x:-e.clientWidth+n-325,ease:"none"})}}]),t}();