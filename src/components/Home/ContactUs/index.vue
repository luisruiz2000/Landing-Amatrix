<template>
  <ContactUsStateless
    :isMobile="isMobile"
    :handleEmail="handleEmail"
    :handleSubmit="handleSubmit"
  />
</template>

<script>
import ContactUsStateless from './ContactUsStateless.vue'
import * as axios from "axios"
export default {
  name: 'ContactUs',

  components: {
    ContactUsStateless
  },

  data: () => ({
    isMobile: false,
    email: ''
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  },

  methods: {
    handleEmail(e) {
      this.email = e.target.value
    },

    handleSubmit(e) {
      e.preventDefault()
      axios.post("https://betsignal.io/api/auth/subscription", {email: this.email}).then((result) => {
        console.log(result);
      });
    }
  },
}
</script>