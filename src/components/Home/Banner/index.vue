<template>
  <BannerStateless :isMobile="isMobile" />
</template>

<script>
import BannerStateless from './BannerStateless.vue'

export default {
  name: 'Banner',

  components: {
    BannerStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>