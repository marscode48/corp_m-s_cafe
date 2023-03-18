class NewsAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    // 要素取得
    const img = this.DOM.el.querySelector('.news__image');
    const { innerHeight } = window;

    // ニュースタイムライン
    const newsTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top+=100 bottom',
        end: 'bottom top',
        scrub: 1,
        markers: true,
      },
    });

    // アニメーション
    // 背景画像をY座標（Windowの高さ÷4）上に移動
    newsTl.to(
      img,
      {
        backgroundPositionY: `${-innerHeight / 4}px`,
        ease: 'none',
        duration: 1,
      },
    );
  }
}
