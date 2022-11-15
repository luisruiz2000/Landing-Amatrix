<template>
  <RegisterTypeStateless :isMobile="isMobile" :switchLanguage="switchLanguage" :currentType="currentType" />
</template>

<script>
import RegisterTypeStateless from './RegisterTypeStateless.vue'

export default {
  name: 'RegisterType',

  components: {
    RegisterTypeStateless
  },

  data: () => ({
    isMobile: false,
    currentType: 'virtual'
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  },

  methods: {
    switchLanguage (e) {
      this.$store.dispatch('actionsSetType', e.target.value)
    }
  }
}
</script>