<template>
  <section class="d-flex align-items-center justify-content-center flex-column p-4">
    <h4 class="h4 text-uppercase color-light underline-decoration pb-1 mb-4" id="funtioning">
      {{ $t('how_work.title') }}
    </h4>

    <h2 :class="`h1 color-light mb-1 mb-4 ${isMobile ? 'text-center fz-3rem' : '' }`">
      {{ $t('how_work.Subtitle') }}
    </h2>

    <div :class="`d-flex align-items-center justify-content-center ${ isMobile && 'flex-column' } full-width`">

      <div class="how-work__card d-flex align-items-center justify-content-center flex-column m-3">
        <img src="../../../assets/images/howWork/icono-1.png" alt="signup" class="how-work__icon" />
        <h3 class="h3 color-light  mb-1 pl-6">{{ $t('how_work.title_card_one') }}</h3>
        <p class="pt-2 pr-2 pl-3 p-regular color-light">{{ $t('how_work.text_card_two') }}</p>
      </div>

      <div class="how-work__card d-flex align-items-center justify-content-center flex-column m-3">
        <img src="../../../assets/images/howWork/icono-1.png" alt="signup" class="how-work__icon" />
        <h3 class="h3 color-light  mb-1 pl-6">{{ $t('how_work.title_card_two') }}</h3>
        <p class="pt-2 pr-2 pl-3 p-regular color-light">{{ $t('how_work.text_card_two') }}</p>
      </div>

      <div class="how-work__card d-flex align-items-center justify-content-center flex-column m-3">
        <img src="../../../assets/images/howWork/icono-1.png" alt="signup" class="how-work__icon" />
        <h3 class="h3 color-light  mb-1 pl-6">{{ $t('how_work.title_card_three') }}</h3>
        <p class="pt-2 pr-2 pl-3 p-regular color-light">{{ $t('how_work.text_card_three') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowWorkStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.how-work__card {
  background: rgb(40, 27, 42);
  background: linear-gradient(221deg, rgba(40, 27, 42, 1) 35%, rgba(156, 63, 113, 1) 70%);
  height: 15rem;
  width: 30%;
  border-radius: 1rem;
  position: relative;
}

.how-work__icon {
  height: 7rem;
  width: 8rem rem;
  position: absolute;
  top: -1rem;
  left: -1rem;
}

@media (max-width: 767px) {
  .how-work__card {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>