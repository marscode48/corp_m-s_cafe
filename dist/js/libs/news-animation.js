"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var NewsAnimation = /*#__PURE__*/function () {
  function NewsAnimation(el) {
    _classCallCheck(this, NewsAnimation);

    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  _createClass(NewsAnimation, [{
    key: "animate",
    value: function animate() {
      // 要素取得
      var img = this.DOM.el.querySelector('.news__image');
      var _window = window,
          innerHeight = _window.innerHeight; // ニュースタイムライン

      var newsTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top+=100 bottom',
          end: 'bottom top',
          scrub: 1,
          markers: true
        }
      }); // アニメーション
      // 背景画像をY座標（Windowの高さ÷4）上に移動

      newsTl.to(img, {
        backgroundPositionY: "".concat(-innerHeight / 4, "px"),
        ease: 'none',
        duration: 1
      });
    }
  }]);

  return NewsAnimation;
}();
//# sourceMappingURL=news-animation.js.map
