"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TopScrollAnimation = /*#__PURE__*/function () {
  function TopScrollAnimation(el) {
    _classCallCheck(this, TopScrollAnimation);

    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  _createClass(TopScrollAnimation, [{
    key: "animate",
    value: function animate() {
      var title = this.DOM.el.querySelector('.gsap-top-title');
      var titleLeft = this.DOM.el.querySelector('.gsap-top-title__left');
      var titleRight = this.DOM.el.querySelector('.gsap-top-title__right');
      var img = this.DOM.el.querySelector('.gsap-top-image');
      var topTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top top',
          end: '+=900',
          scrub: true,
          markers: true,
          pin: true
        }
      });
      topTl.fromTo(title, {
        opacity: 0,
        scale: 0.2
      }, {
        opacity: 1,
        scale: 1,
        ease: 'Power4.out'
      });
      topTl.to(titleLeft, {
        xPercent: -150
      });
      topTl.to(titleRight, {
        xPercent: 150
      }, '<');
      topTl.to(img, {
        scale: 2
      }, '<');
    }
  }]);

  return TopScrollAnimation;
}();

window.addEventListener('load', function () {
  ScrollTrigger.refresh();
});
//# sourceMappingURL=gsap-animation.js.map
