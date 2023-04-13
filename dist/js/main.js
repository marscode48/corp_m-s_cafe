"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  var main = new Main();
});

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    this._init();
  }

  _createClass(Main, [{
    key: "_init",
    value: function _init() {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
      new MenuOpen();
      new SmoothScroll(-80);
      new GallerySlider('.swiper-gallery-top', '.swiper-gallery-bottom');

      this._Init();
    }
  }, {
    key: "_mainVisualAnimation",
    value: function _mainVisualAnimation(el, inview) {
      if (inview) {
        window.scrollTo(0, 0);
        new MainVisualAnimation(el);
      }
    }
  }, {
    key: "_featureAnimation",
    value: function _featureAnimation(el, inview) {
      if (inview) {
        new FeatureAnimation(el);
      }
    }
  }, {
    key: "_parallaxAnimation",
    value: function _parallaxAnimation(el, inview) {
      if (inview) {
        new BgParallax(el);
      }
    }
  }, {
    key: "_aboutAnimation",
    value: function _aboutAnimation(el, inview) {
      if (inview) {
        new AboutAnimation(el);
      }
    }
  }, {
    key: "_inviewAnimation",
    value: function _inviewAnimation(el, inview) {
      if (inview) {
        el.classList.add('inview');
      }
    }
  }, {
    key: "_textAnimation",
    value: function _textAnimation(el, inview) {
      if (inview) {
        var ta = new TweenTextAnimation(el);
        ta.animate();
      }
    }
  }, {
    key: "_Init",
    value: function _Init() {
      new ScrollObserver('.gsap-top', this._mainVisualAnimation);
      new ScrollObserver('.gsap-feature', this._featureAnimation);
      new ScrollObserver('.gsap-about', this._aboutAnimation);
      new ScrollObserver('.gsap-menu', this._parallaxAnimation);
      new ScrollObserver('.gsap-news', this._parallaxAnimation);
      new ScrollObserver('.appear', this._inviewAnimation);
      new ScrollObserver('.tween-animate-title', this._textAnimation, {
        rootMargin: '-100px 0px'
      });
    }
  }]);

  return Main;
}();
//# sourceMappingURL=main.js.map
