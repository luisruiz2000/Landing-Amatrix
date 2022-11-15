<template>
  <FaqsStateless
    :faqs="hadleFaqsTexts"
    :handleFaqs="handleFaqs"
  />
</template>

<script>
import FaqsStateless from './FaqsStateless.vue'

export default {
  name: 'Faqs',

  components: {
    FaqsStateless
  },

  data: () => ({
    faqs: [
      {
        faq: '',
        response: '',
        show: false
      },
      {
        faq: '',
        response: '',
        show: false
      },
      {
        faq: '',
        response: '',
        show: false
      }
    ]
  }),

  computed: {
    hadleFaqsTexts() {
      this.faqs[0].faq = this.$t('faqs.title_one')
      this.faqs[0].response = this.$t('faqs.response_one')

      this.faqs[1].faq = this.$t('faqs.title_two')
      this.faqs[1].response = this.$t('faqs.response_two')

      this.faqs[2].faq = this.$t('faqs.title_three')
      this.faqs[2].response = this.$t('faqs.response_three')

      return this.faqs
    }
  },

  methods: {
    handleFaqs(i) {
      this.faqs[i].show = !this.faqs[i].show
    }
  },
}
</script>