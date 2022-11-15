<template>
  <VideosStateless :isMobile="isMobile" />
</template>

<script>
import VideosStateless from './VideosStateless.vue'

export default {
  name: 'Videos',

  components: {
    VideosStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>