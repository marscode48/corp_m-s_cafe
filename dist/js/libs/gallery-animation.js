"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GallerySlider = /*#__PURE__*/function () {
  function GallerySlider(el, el2) {
    _classCallCheck(this, GallerySlider);

    this.el = el;
    this.el2 = el2;
    this.slideLengthTop = document.querySelectorAll('.swiper-gallery-top .swiper-slide').length;
    this.slideLengthBottom = document.querySelectorAll('.swiper-gallery-bottom .swiper-slide').length;
    this.params = {
      slidesPerView: 'auto',
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      freeMode: {
        enabled: true,
        momentum: false
      },
      grabCursor: true
    };

    this._initSwiperTop();

    this._initSwiperBottom();
  }

  _createClass(GallerySlider, [{
    key: "_initSwiperTop",
    value: function _initSwiperTop() {
      new Swiper(this.el, _objectSpread(_objectSpread({}, this.params), {}, {
        loopedSlides: this.slideLengthTop,
        on: {
          // ドラッグ操作が終わったら次のスライドへ移動
          touchEnd: function touchEnd(swiper) {
            swiper.slideTo(swiper.activeIndex + 1);
          }
        }
      }));
    }
  }, {
    key: "_initSwiperBottom",
    value: function _initSwiperBottom() {
      new Swiper(this.el2, _objectSpread(_objectSpread({}, this.params), {}, {
        loopedSlides: this.slideLengthBottom,
        autoplay: _objectSpread(_objectSpread({}, this.params.autoplay), {}, {
          reverseDirection: true
        }),
        on: {
          // ドラッグ操作が終わったら前のスライドへ移動
          touchEnd: function touchEnd(swiper) {
            swiper.slideTo(swiper.activeIndex - 1);
          }
        }
      }));
    }
  }]);

  return GallerySlider;
}();
//# sourceMappingURL=gallery-animation.js.map
