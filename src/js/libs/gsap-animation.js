class TopScrollAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.animate();
  }

  animate() {
    const title = this.DOM.el.querySelector('.gsap-top-title');
    const titleLeft = this.DOM.el.querySelector('.gsap-top-title__left');
    const titleRight = this.DOM.el.querySelector('.gsap-top-title__right');
    const img = this.DOM.el.querySelector('.gsap-top-image');

    const topTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.DOM.el,
        start: 'top top',
        end: '+=900',
        scrub: true,
        markers: true,
        pin: true,
      },
    });

    topTl.fromTo(
      title,
      {
        opacity: 0,
        scale: 0.2,
      },
      { opacity: 1, scale: 1, ease: 'Power4.out' },
    );
    topTl.to(titleLeft, {
      xPercent: -150,
    });
    topTl.to(
      titleRight,
      {
        xPercent: 150,
      },
      '<',
    );
    topTl.to(img, {
      scale: 2,
    },
    '<');
  }
}
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});
