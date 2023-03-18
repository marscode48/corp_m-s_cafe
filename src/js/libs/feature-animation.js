class FeatureAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    // 要素取得
    const img = this.DOM.el.querySelector('.feature__figure img');
    const text = this.DOM.el.querySelector('.feature__text');

    // フィーチャータイムライン
    const featureTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top+=100 bottom',
        end: 'top-=100 top',
        scrub: 1,
      },
    });

    // アニメーション
    featureTl.fromTo(
      text,
      {
        y: 75,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        ease: 'none',
        duration: 1,
      },
      '<',
    );
    featureTl.fromTo(
      img,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        scale: 1.2,
        ease: 'none',
        duration: 2,
        autoAlpha: 1,
      },
      '-=1',
    );
  }
}
