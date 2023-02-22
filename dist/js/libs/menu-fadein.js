"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MenuFadeIn = /*#__PURE__*/function () {
  function MenuFadeIn(y) {
    _classCallCheck(this, MenuFadeIn);

    this.y = y;
    this.DOM = {};
    this.DOM.logo = document.querySelector('.header__logo');
    this.DOM.hamburger = document.querySelector('.header__hamburger');

    this._getPageScroll();
  }

  _createClass(MenuFadeIn, [{
    key: "_add",
    value: function _add() {
      this.DOM.logo.classList.add('inview');
      this.DOM.hamburger.classList.add('inview');
    }
  }, {
    key: "_remove",
    value: function _remove() {
      this.DOM.logo.classList.remove('inview');
      this.DOM.hamburger.classList.remove('inview');
    }
  }, {
    key: "_getPageScroll",
    value: function _getPageScroll() {
      var _this = this;

      window.addEventListener('scroll', function () {
        var pageScroll = window.pageYOffset;

        if (pageScroll > _this.y) {
          _this._add();
        } else {
          _this._remove();
        } // pageScroll > this.y ? this._add() : this._remove();
        // エラー修正

      });
    }
  }]);

  return MenuFadeIn;
}();
//# sourceMappingURL=menu-fadein.js.map
