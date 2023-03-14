class AboutAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    // 要素取得
    const ul = this.DOM.el.querySelector('.about__ul');
    const { innerHeight } = window;
    const { innerWidth } = window;

    // アバウトタイムライン
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top top',
        pin: true,
        end: `+=${innerHeight}`,
        scrub: 0.5,
      },
    });

    // アニメーション
    // x軸に移動(-カードの横幅 + 画面横幅 - padding+marginの余白調整)
    aboutTl.to(ul, {
      delay: 0.1,
      x: -ul.clientWidth + innerWidth - 200,
      ease: 'none',
    });
  }
}
