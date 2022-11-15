<template>
  <Banner />
  <Payments />
  <HowWork />
  <Videos />
  <Testimonials /><hr>
  <ContactUs />
</template>

<script>
import Banner from './Banner/index.vue'
import Payments from './Payments/index.vue'
import HowWork from './HowWork/index.vue'
import Videos from './Videos/index.vue'
import Testimonials from './Testimonials/index.vue'
import ContactUs from './ContactUs/index.vue'

export default {
  name: 'Home',

  components: {
    Banner,
    Payments,
    HowWork,
    Videos,
    Testimonials,
    ContactUs
  }
}
</script>