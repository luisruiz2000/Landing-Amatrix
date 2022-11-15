<template>
  <section class="privacy-policy">
    <Navbar />

    <div class="privacy-policy__content">
      <h1 class="privacy-policy__content-title">{{ $t('terms_conditions.title') }}</h1>

      <p class="privacy-policy__content-text">{{ $t('terms_conditions.text_one') }}</p>

      <p class="privacy-policy__content-text">{{ $t('terms_conditions.text_two') }}</p>

      <p class="privacy-policy__content-text">{{ $t('terms_conditions.text_three') }}</p>
    </div>
  </section>
</template>

<script>
import Navbar from '../Home/Navbar/index.vue'

export default {
  name: 'TermsConditionsStateless',

  components: {
    Navbar
  }
}
</script>

<style>
.privacy-policy {
  height: 100vh;
  background-image: url('../../assets/images/termsConditions/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.privacy-policy__content {
  height: 80vh;
  width: 50%;
  padding: 1rem 2rem 1rem 4rem;
  overflow-y: auto;
}

.privacy-policy__content-title {
  font-size: 2.5rem;
  color: white;
  margin: 0 0 2rem 0;
  text-align: center;
}

.privacy-policy__content-text {
  font-size: 1rem;
  color: white;
  text-align: justify;
  margin: 0 0 1rem 0;
}

::-webkit-scrollbar {
  width: .4rem;
}

::-webkit-scrollbar-track {
  border-radius: 1rem;
}

::-webkit-scrollbar-thumb {
  background: #7b7087;
  border-radius: 1rem;
  cursor: pointer !important;
}

@media (max-width: 767px) {
  .privacy-policy__content {
    height: 80vh;
    width: 100%;
    padding: 2rem;
    overflow-y: auto;
  }
}
</style>