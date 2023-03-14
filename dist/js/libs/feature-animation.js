"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FeatureAnimation = /*#__PURE__*/function () {
  function FeatureAnimation(el) {
    _classCallCheck(this, FeatureAnimation);

    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  _createClass(FeatureAnimation, [{
    key: "animate",
    value: function animate() {
      // 要素取得
      var img = this.DOM.el.querySelector('.feature__figure img');
      var title = this.DOM.el.querySelector('.feature__title');
      var text = this.DOM.el.querySelector('.feature__text'); // フィーチャータイムライン

      var featureTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top+=100 bottom',
          end: 'top-=100 top',
          scrub: 1
        }
      }); // アニメーション

      featureTl.fromTo(title, {
        y: 75
      }, {
        y: 0,
        ease: 'none',
        duration: 1
      });
      featureTl.fromTo(text, {
        y: 75,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: 'none',
        duration: 1
      }, '<');
      featureTl.fromTo(img, {
        y: 50,
        autoAlpha: 0
      }, {
        y: 0,
        scale: 1.2,
        ease: 'none',
        duration: 2,
        autoAlpha: 1
      }, '-=1');
    }
  }]);

  return FeatureAnimation;
}();
//# sourceMappingURL=feature-animation.js.map
