<template>
  <TestimonialsStateless :isMobile="isMobile" />
</template>

<script>
import TestimonialsStateless from './TestimonialsStateless.vue'

export default {
  name: 'Testimonials',

  components: {
    TestimonialsStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>