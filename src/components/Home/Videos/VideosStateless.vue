<template>
  <section class="d-flex align-items-center justify-content-center flex-column p-4">
    <h4 class="h4 text-uppercase color-light underline-decoration pb-1 mb-4" id="videos">
      {{ $t('videos.title') }}
    </h4>
    <h2 :class="`h1 color-light mb-1 mb-4 ${isMobile ? 'text-center fz-3rem' : '' }`" id="testimonials">
      {{ $t('videos.subtitle') }}
    </h2>
    <slide index="4" class="custom-slide">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JuJviszm2cU" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </slide>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'VideosStateless',

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

@media (max-width: 767px) {
  .custom-carousel {
    width: 100%;
  }
}
</style>