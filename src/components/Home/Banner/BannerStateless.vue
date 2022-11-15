<template>
  <section
    :class="`d-flex alignt-items-center justify-content-center p-4 flex-column ${isMobile ? 'height-1' : 'full-height'}`">
    <div :class="`${isMobile ? 'full-width text-center' : 'width-6 text-left'}`">

      <h1 :class="`h1 color-light mb-3 ${isMobile ? 'text-center fz-3rem' : 'text-left'}`">
        {{ $t('banner.title_one') }} <span :class="`h1 color-secondary ${isMobile ? 'fz-3rem' : 'text-left'}`">{{
        $t('banner.title_two')
        }}</span> {{
          $t('banner.title_three')
          }}
      </h1>

      <p class="h3 color-light mb-4">
        {{ $t('banner.text') }}
      </p>
      <button @click="handleStart()" :class="`button-small mx-1 ${isMobile ? 'mb-2' : 'mx-1'}`">{{
      $t('banner.text_bt')
      }}</button>

    </div>

    <div :class="`align-items-center full-width ${isMobile ? 'mt-4 mb-3 p-1' : 'd-flex mt-4'}`">
      <div :class="`${isMobile ? 'border-button' : 'border-right pr-1 '}`">
        <h1 class="text-center fz-3rem color-light">{{ $t('banner.text_one') }}</h1>
        <p class="h3 text-center color-light pb-2">{{ $t('banner.subtitle_one') }}</p>
      </div>

      <div :class="`px-4 ${isMobile ? 'border-button' : 'border-right'}`">
        <h1 class="text-center fz-3rem color-light">{{ $t('banner.text_two') }}</h1>
        <p class="h3 text-center color-light pb-2">{{ $t('banner.subtitle_two') }}</p>
      </div>

      <div class="px-4">
        <h1 class="text-center fz-3rem color-light">{{ $t('banner.text_three') }}</h1>
        <p class="h3 text-center color-light pb-2">{{ $t('banner.subtitle_three') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  },

  methods: {
    handleStart() {
      this.$router.push('/register')
    },
  }
}
</script>