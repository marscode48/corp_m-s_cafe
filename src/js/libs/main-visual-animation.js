class MainVisualAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;

    // スクロール有効・無効イベント
    const handle = (event) => event.preventDefault();
    this.banScroll = () => {
      document.addEventListener('wheel', handle, { passive: false });
      document.addEventListener('touchmove', handle, { passive: false });
    };
    this.goScroll = () => {
      document.removeEventListener('wheel', handle, { passive: false });
      document.removeEventListener('touchmove', handle, { passive: false });
    };

    this.animate();
  }

  animate() {
    // 要素取得
    const img = document.querySelector('.gsap-top-image');
    const bgLeft = document.querySelector('.gsap-top-bg-left');
    const bgRight = document.querySelector('.gsap-top-bg-right');
    const logo = document.querySelector('.gsap-top-logo');
    const hamburger = document.querySelector('.gsap-top-hamburger');
    const scroll = document.querySelector('.gsap-top-scroll');
    const title = document.querySelector('.gsap-top-title');
    const titleLeft = document.querySelector('.gsap-top-title-left');
    const titleRight = document.querySelector('.gsap-top-title-right');

    // トップタイムライン
    const topTl = gsap.timeline();

    // スクロールタイムライン
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top top',
        end: '+=900',
        scrub: true,
        markers: false,
        pin: true,
      },
    });

    // ここからトップタイムライン
    // スクロール無効
    topTl.call(
      this.banScroll,
    );
    topTl.fromTo(
      img,
      {
        yPercent: 100,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        duration: 1,
        autoAlpha: 1,
        ease: 'power4.Out',
      },
    );
    topTl.fromTo(
      img,
      {
        scale: 1,
      },
      {
        scale: 0,
        duration: 1.5,
        ease: 'power4.in',
      },
      '-=0.5',
    );
    topTl.fromTo(
      bgLeft,
      {
        yPercent: -100,
      },
      {
        yPercent: 0,
        duration: 1.5,
        ease: 'power4.inOut',
      },
      '-=1',
    );
    topTl.fromTo(
      bgRight,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 1.5,
        ease: 'power4.inOut',
      },
      '<',
    );
    topTl.fromTo(
      logo,
      {
        autoAlpha: 0,
        y: -30,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
      },
    );
    topTl.fromTo(
      hamburger,
      {
        autoAlpha: 0,
        y: -30,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
      },
      '<',
    );
    topTl.fromTo(
      scroll,
      {
        autoAlpha: 0,
        y: -30,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
      },
      '-=0.5',
    );
    // ここからスクロール解除
    topTl.call(
      this.goScroll,
    );
    // ここからスクロールタイムライン
    topTl.call(
      () => {
        scrollTl.fromTo(
          title,
          {
            autoAlpha: 0,
            scale: 0.2,
          },
          {
            autoAlpha: 1,
            scale: 1,
            ease: 'Power4.out',
          },
        );
        scrollTl.to(
          titleLeft,
          {
            xPercent: -150,
          },
        );
        scrollTl.to(
          titleRight,
          {
            xPercent: 150,
          },
          '<',
        );
        scrollTl.to(
          img,
          {
            scale: 1.5,
          },
          '<',
        );
      },
    );
  }
}
