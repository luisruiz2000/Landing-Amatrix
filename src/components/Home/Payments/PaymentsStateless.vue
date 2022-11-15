<template>
  <section class="d-flex align-items-center justify-content-between p-4">
    <img v-if="!isMobile" src="../../../assets/images/payments/payments.png" alt="payments" class="width-5" />

    <div :class="`align-items-start justify-content-center flex-column ${isMobile ? 'text-center' : 'd-flex '}`">
      <h4
        :class="`h4 text-center text-uppercase color-light underline-decoration pb-1 mb-4 ${isMobile ? 'mx-5' : 'd-flex '}`"
        id="aboutUs">
        {{ $t('about_us.title') }}
      </h4>

      <h2 :class="`h1 color-light mb-1 mb-4  ${isMobile ? 'fz-3rem' : ''}`">
        {{ $t('about_us.subtitle') }}
      </h2>
      <p class="h3 p-regular color-light mb-3">
        {{ $t('about_us.text') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PaymentsStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  }
}
</script>