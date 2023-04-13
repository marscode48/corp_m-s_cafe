class GallerySlider {
  constructor(el, el2) {
    this.el = el;
    this.el2 = el2;
    this.slideLengthTop = document.querySelectorAll('.swiper-gallery-top .swiper-slide').length;
    this.slideLengthBottom = document.querySelectorAll('.swiper-gallery-bottom .swiper-slide').length;

    this.params = {
      slidesPerView: 'auto',
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
      grabCursor: true,
    };

    this._initSwiperTop();
    this._initSwiperBottom();
  }

  _initSwiperTop() {
    new Swiper(this.el, {
      ...this.params,
      loopedSlides: this.slideLengthTop,
      on: {
        // ドラッグ操作が終わったら次のスライドへ移動
        touchEnd: (swiper) => {
          swiper.slideTo(swiper.activeIndex + 1);
        },
      },
    });
  }

  _initSwiperBottom() {
    new Swiper(this.el2, {
      ...this.params,
      loopedSlides: this.slideLengthBottom,
      autoplay: {
        ...this.params.autoplay,
        reverseDirection: true,
      },
      on: {
        // ドラッグ操作が終わったら前のスライドへ移動
        touchEnd: (swiper) => {
          swiper.slideTo(swiper.activeIndex - 1);
        },
      },
    });
  }
}
