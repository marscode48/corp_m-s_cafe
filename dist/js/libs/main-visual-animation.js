"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MainVisualAnimation = /*#__PURE__*/function () {
  function MainVisualAnimation(el) {
    _classCallCheck(this, MainVisualAnimation);

    this.DOM = {};
    this.DOM.el = el; // スクロール有効・無効イベント

    var handle = function handle(event) {
      return event.preventDefault();
    };

    this.banScroll = function () {
      document.addEventListener('wheel', handle, {
        passive: false
      });
      document.addEventListener('touchmove', handle, {
        passive: false
      });
    };

    this.goScroll = function () {
      document.removeEventListener('wheel', handle, {
        passive: false
      });
      document.removeEventListener('touchmove', handle, {
        passive: false
      });
    };

    this.animate();
  }

  _createClass(MainVisualAnimation, [{
    key: "animate",
    value: function animate() {
      // 要素取得
      var img = document.querySelector('.gsap-top-image');
      var bgLeft = document.querySelector('.gsap-top-bg-left');
      var bgRight = document.querySelector('.gsap-top-bg-right');
      var logo = document.querySelector('.gsap-top-logo');
      var hamburger = document.querySelector('.gsap-top-hamburger');
      var scroll = document.querySelector('.gsap-top-scroll');
      var title = document.querySelector('.gsap-top-title');
      var titleLeft = document.querySelector('.gsap-top-title-left');
      var titleRight = document.querySelector('.gsap-top-title-right'); // トップタイムライン

      var topTl = gsap.timeline(); // スクロールタイムライン

      var scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.DOM.el,
          start: 'top top',
          end: '+=900',
          scrub: true,
          markers: false,
          pin: true
        }
      }); // ここからトップタイムライン
      // スクロール無効

      topTl.call(this.banScroll);
      topTl.fromTo(img, {
        yPercent: 100,
        autoAlpha: 0
      }, {
        yPercent: 0,
        duration: 1,
        autoAlpha: 1,
        ease: 'power4.Out'
      });
      topTl.fromTo(img, {
        scale: 1
      }, {
        scale: 0,
        duration: 1.5,
        ease: 'power4.in'
      }, '-=0.5');
      topTl.fromTo(bgLeft, {
        yPercent: -100
      }, {
        yPercent: 0,
        duration: 1.5,
        ease: 'power4.inOut'
      }, '-=1');
      topTl.fromTo(bgRight, {
        yPercent: 100
      }, {
        yPercent: 0,
        duration: 1.5,
        ease: 'power4.inOut'
      }, '<');
      topTl.fromTo(logo, {
        autoAlpha: 0,
        y: -30
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 1
      });
      topTl.fromTo(hamburger, {
        autoAlpha: 0,
        y: -30
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 1
      }, '<');
      topTl.fromTo(scroll, {
        autoAlpha: 0,
        y: -30
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 1
      }, '-=0.5'); // ここからスクロール解除

      topTl.call(this.goScroll); // ここからスクロールタイムライン

      topTl.call(function () {
        scrollTl.fromTo(title, {
          autoAlpha: 0,
          scale: 0.2
        }, {
          autoAlpha: 1,
          scale: 1,
          ease: 'Power4.out'
        });
        scrollTl.to(titleLeft, {
          xPercent: -150
        });
        scrollTl.to(titleRight, {
          xPercent: 150
        }, '<');
        scrollTl.to(img, {
          scale: 1.5
        }, '<');
      });
    }
  }]);

  return MainVisualAnimation;
}();
//# sourceMappingURL=main-visual-animation.js.map
