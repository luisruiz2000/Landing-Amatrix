<template>
  <HowWorkStateless :isMobile="isMobile" />
</template>

<script>
import HowWorkStateless from './HowWorkStateless.vue'

export default {
  name: 'HowWork',

  components: {
    HowWorkStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>