class BgParallax {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    // 要素取得
    const img = this.DOM.el.querySelector('.gsap-bg-img');
    const { innerHeight } = window;

    // タイムライン
    const bgTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top+=100 bottom',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
    });

    // アニメーション
    // 背景画像をY座標（Windowの高さ÷4）上に移動
    bgTl.to(
      img,
      {
        backgroundPositionY: `${-innerHeight / 4}px`,
        ease: 'none',
        duration: 1,
      },
    );
  }
}
