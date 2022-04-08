document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.side = document.querySelector('#side-btn');
    this.bg = document.querySelector('.bg');
    this._init();
    this._scrollInit();
  }

  _init() {
    new MvScaleChange();
    new MenuOpen();
    new MenuFadeIn(520);
    new SmoothScroll(0);
  }

  _inviewAnimation(el, inview) {
    if(inview) {
      el.classList.add('inview');
    }
  }

  _sideAnimation(el, inview) {
    if(inview) {
      this.side.classList.add('inview');
    } else {
      this.side.classList.remove('inview')
    }
  }

  _textAnimation(el, inview) {
    if(inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _fadeInAnimation(el, inview) {
    if(inview) {
      this.bg.classList.add('inview');
    } else {
      this.bg.classList.remove('inview');
    }
  }

  _scrollInit() {
    new ScrollObserver('.menu__item', this._inviewAnimation);
    new ScrollObserver('.site-title', this._inviewAnimation);
    new ScrollObserver('.tween-animate-title', this._textAnimation, {rootMargin: "-100px 0px"});
    new ScrollObserver('#menu', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px 0px 0px"});
    new ScrollObserver('#location', this._fadeInAnimation.bind(this), {once: false, rootMargin: "-300px 0px 0px 0px"});
  }
}
