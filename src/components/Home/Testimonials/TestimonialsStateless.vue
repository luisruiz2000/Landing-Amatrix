<template>
  <section class="d-flex align-items-center justify-content-center flex-column p-4">
    <h4 class="h4 text-uppercase color-light underline-decoration pb-1 mb-4" id="testimonials">
      {{ $t('testimonials.title') }}
    </h4>

    <h2 :class="`h1 color-light mb-1 mb-4 ${isMobile ? 'text-center fz-3rem' : '' }`">
      {{ $t('testimonials.title-two') }}
    </h2>

    <carousel :items-to-show="isMobile ? 1 : 2" class="custom-carousel">

      <slide index="4" class="custom-slide">
        <div class="testimonials__card_one">
          <p :class="`text-card p-1 color-light font-size1${isMobile ? '' : '' }`">{{ $t('testimonials.text-card') }}</p>
          <p :class="`p-bold  color-light`">{{ $t('testimonials.title-card')}}</p>
          <p :class="`color-light`">{{ $t('testimonials.subtitle-card')}}</p>
        </div>
      </slide>
      <slide index="4" class="custom-slide">
        <div class="testimonials__card_two">
          <p :class="`text-card p-1 color-light font-size1${isMobile ? '' : '' }`">{{ $t('testimonials.text-card') }}</p>
          <p :class="`p-bold color-light`">{{ $t('testimonials.title-card')}}</p>
          <p :class="`color-light`">{{ $t('testimonials.subtitle-card')}}</p>
        </div>
      </slide>
      <slide index="4" class="custom-slide">
        <div class="testimonials__card_one">
          <p :class="`text-card p-1 color-light font-size1${isMobile ? '' : '' }`">{{ $t('testimonials.text-card') }}</p>
          <p :class="`p-bold color-light`">{{ $t('testimonials.title-card')}}</p>
          <p :class="`color-light`">{{ $t('testimonials.subtitle-card')}}</p>
        </div>
      </slide>
      <slide index="4" class="custom-slide">
        <div class="testimonials__card_two">
          <p :class="`text-card p-1 color-light font-size1${isMobile ? '' : '' }`">{{ $t('testimonials.text-card') }}</p>
          <p :class="`p-bold color-light`">{{ $t('testimonials.title-card')}}</p>
          <p :class="`color-light`">{{ $t('testimonials.subtitle-card')}}</p>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'TestimonialsStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }
}
</script>

<style>
.custom-carousel {
  width: 80%;
}

.custom-slide {
  padding: 1rem;
}

.testimonials__card_one {
  background-image: url(../../../assets/images/testimonials/bg-testimonio-1.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0;
  padding: 2.5rem;
  border-radius: 1rem;
  width: 85%;
  height: 15rem;
  position: relative;
}

.testimonials__card_two {
  background-image: url(../../../assets/images/testimonials/bg-testimonio-2.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0;
  padding: 2.5rem;
  border-radius: 1rem;
  width: 85%;
  height: 15rem;
  position: relative;
}

.text-card{
  border-bottom: .15rem solid #fff;
}

.testimonials__star {
  height: 1.8rem;
  width: 1.8rem;
}

@media (max-width: 767px) {
  .custom-carousel {
    width: 100%;
  }

  .testimonials__card_one, .testimonials__card_two {
    width: 100%;
    padding: 3rem 0.5rem;
  }
}
</style>