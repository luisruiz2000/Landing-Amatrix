<template>
  <PaymentsStateless :isMobile="isMobile" />
</template>

<script>
import PaymentsStateless from './PaymentsStateless.vue'

export default {
  name: 'Payments',

  components: {
    PaymentsStateless
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  }
}
</script>