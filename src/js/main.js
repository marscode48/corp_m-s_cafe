document.addEventListener('DOMContentLoaded', () => {
  window.scroll({ top: 0, behavior: 'smooth' });
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();
  const main = new Main();
});

class Main {
  constructor() {
    this.side = document.querySelector('#side-btn');
    this.bg = document.querySelector('.bg');
    this._init();
  }

  _init() {
    new MenuOpen();
    new MenuFadeIn(520);
    new SmoothScroll(80);
    new GallerySlider('.swiper-gallery-top', '.swiper-gallery-bottom');
    Pace.on('done', this._paceDone.bind(this));
  }

  _paceDone() {
    this._scrollInit();
  }

  _mainVisualAnimation(el, inview) {
    if (inview) {
      new MainVisualAnimation(el);
    }
  }

  _featureAnimation(el, inview) {
    if (inview) {
      new FeatureAnimation(el);
    }
  }

  _aboutAnimation(el, inview) {
    if (inview) {
      new AboutAnimation(el);
    }
  }

  _newsAnimation(el, inview) {
    if (inview) {
      new NewsAnimation(el);
    }
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    }
  }

  _sideAnimation(el, inview) {
    if (inview) {
      this.side.classList.add('inview');
    } else {
      this.side.classList.remove('inview');
    }
  }

  _textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _fadeInAnimation(el, inview) {
    if (inview) {
      this.bg.classList.add('inview');
    } else {
      this.bg.classList.remove('inview');
    }
  }

  _scrollInit() {
    new ScrollObserver('.gsap-top', this._mainVisualAnimation);
    new ScrollObserver('.gsap-feature', this._featureAnimation);
    new ScrollObserver('.gsap-about', this._aboutAnimation);
    new ScrollObserver('.gsap-news', this._newsAnimation);
    new ScrollObserver('.menu__item', this._inviewAnimation);
    new ScrollObserver('.site-title', this._inviewAnimation);
    new ScrollObserver('.cover-slide', this._inviewAnimation);
    new ScrollObserver('.appear', this._inviewAnimation);
    new ScrollObserver('.tween-animate-title', this._textAnimation, { rootMargin: '-100px 0px' });
    new ScrollObserver('#menu', this._sideAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
    // new ScrollObserver('#location', this._fadeInAnimation.bind(this), { once: false, rootMargin: '-300px 0px 0px 0px' });
  }
}
