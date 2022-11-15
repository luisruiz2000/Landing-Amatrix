<template>
  <section class="faqs">
    <Navbar />

    <div class="faqs__content">
      <h1 class="faqs__content-title">{{ $t('faqs.title') }}</h1>

      <div v-for="(faq, i) in faqs" class="faqs__content-faq" :key="i">
        <div class="faqs__content-faq-header">
          <span
            :class="`${ faq.show ? 'faqs__content-faq-header-button-less' : 'faqs__content-faq-header-button' }`"
            @click="handleFaqs(i)"
          >
            {{ faq.show ? '-' : '+' }}
          </span>
          <span class="faqs__content-faq-header-ask">{{ faq.faq }}</span>
        </div>

        <div v-if="faq.show" class="faqs__content-faq-response">
          {{ faq.response }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../Home/Navbar/index.vue'

export default {
  name: 'FaqsStateless',

  components: {
    Navbar
  },

  props: {
    faqs: {
      type: Object,
      required: true
    },
    handleFaqs: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
.faqs {
  height: 100vh;
  background-image: url('../../assets/images/faqs/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.faqs__content {
  height: 80vh;
  width: 50%;
  padding: 1rem 2rem 1rem 4rem;
  overflow-y: auto;
}

.faqs__content-title {
  font-size: 2.5rem;
  color: white;
  margin: 0 0 2rem 0;
  text-align: center;
}

.faqs__content-faq {
  margin: 0 0 2rem 0;
}

.faqs__content-faq-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0 0 1rem 0;
}

.faqs__content-faq-header-button {
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  border: solid 1px white;
  padding: .1rem .7rem;
  border-radius: .3rem;
  margin: 0 1rem 0 0;
}

.faqs__content-faq-header-button-less {
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  border: solid 1px white;
  padding: .1rem .9rem;
  border-radius: .3rem;
  margin: 0 1rem 0 0;
}

.faqs__content-faq-header-ask {
  font-size: 1rem;
  color: white;
  text-align: justify;
}

.faqs__content-faq-response {
  font-size: 1rem;
  color: white;
  text-align: justify;
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
  .faqs__content {
    height: 80vh;
    width: 100%;
    padding: 2rem;
    overflow-y: auto;
  }
}
</style>