document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    new MenuOpen();
    new SmoothScroll(-80);
    new GallerySlider('.swiper-gallery-top', '.swiper-gallery-bottom');
    this._Init();
  }

  _mainVisualAnimation(el, inview) {
    if (inview) {
      window.scrollTo(0, 0);
      new MainVisualAnimation(el);
    }
  }

  _featureAnimation(el, inview) {
    if (inview) {
      new FeatureAnimation(el);
    }
  }

  _parallaxAnimation(el, inview) {
    if (inview) {
      new BgParallax(el);
    }
  }

  _aboutAnimation(el, inview) {
    if (inview) {
      new AboutAnimation(el);
    }
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    }
  }

  _textAnimation(el, inview) {
    if (inview) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _Init() {
    new ScrollObserver('.gsap-top', this._mainVisualAnimation);
    new ScrollObserver('.gsap-feature', this._featureAnimation);
    new ScrollObserver('.gsap-about', this._aboutAnimation);
    new ScrollObserver('.gsap-menu', this._parallaxAnimation);
    new ScrollObserver('.gsap-news', this._parallaxAnimation);
    new ScrollObserver('.appear', this._inviewAnimation);
    new ScrollObserver('.tween-animate-title', this._textAnimation, { rootMargin: '-100px 0px' });
  }
}
