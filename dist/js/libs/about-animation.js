"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var AboutAnimation = /*#__PURE__*/function () {
  function AboutAnimation(el) {
    _classCallCheck(this, AboutAnimation);

    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  _createClass(AboutAnimation, [{
    key: "animate",
    value: function animate() {
      // 要素取得
      var ul = this.DOM.el.querySelector('.about__ul');
      var _window = window,
          innerHeight = _window.innerHeight;
      var _window2 = window,
          innerWidth = _window2.innerWidth; // アバウトタイムライン

      var aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top top',
          pin: true,
          end: "+=".concat(innerHeight),
          scrub: 0.5
        }
      }); // アニメーション
      // x軸に移動(-カードの横幅 + 画面横幅 - 余白調整)

      aboutTl.to(ul, {
        delay: 0.1,
        x: -ul.clientWidth + innerWidth - 325,
        ease: 'none'
      });
    }
  }]);

  return AboutAnimation;
}();
//# sourceMappingURL=about-animation.js.map
