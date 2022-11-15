<template>
  <div class="legal-terms-layout">
    <NavbarLegalTerms />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

import NavbarLegalTerms from '../components/LegalTerms/NavbarLegalTerms/index.vue'

export default {
  name: 'LegalTermsLayout',
  components: {
    NavbarLegalTerms
  }
}
</script>

<style>
.legal-terms-layout{
  height: 100vh;
  padding: 2rem 4rem 2rem 19rem;
  overflow: auto;
}

@media (max-width: 767px) {
  .legal-terms-layout{
    padding: 8rem 2rem 2rem 2rem;
  }
}
</style>