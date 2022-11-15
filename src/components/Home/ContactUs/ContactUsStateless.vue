<template>
  <section :class="`py-4 d-flex ${isMobile ? 'px-4 justify-content-center flex-column' : 'justify-content-center' } `">

    <div
      :class="`align-items-start flex-column  ${isMobile ? 'mt-1 justify-content-center flex-column text-center' : 'mt-1 d-flex pl-4 width-5' }`">
      <h3 :class="`h3 d-flex text-uppercase color-light mb-3 ${isMobile ? 'justify-content-center text-center' : '' }`"
        id="contact">
        {{ $t('contact.title') }}
      </h3>

      <div class="d-flex align-items-center justify-content-center mb-1">
        <img src="../../../assets/icons/contact/address.svg" alt="address" class="contact__icon-contact mr-1" />
        <p class="color-light">{{ $t('contact.location') }}</p>
      </div>

      <div class="d-flex align-items-center justify-content-center mb-1">
        <img src="../../../assets/icons/contact/email.svg" alt="email" class="contact__icon-contact mr-1" />
        <p class="color-light">{{ $t('contact.mail') }}</p>
      </div>

      <div class="d-flex align-items-center justify-content-center mb-2">
        <img src="../../../assets/icons/contact/phone.svg" alt="phone" class="contact__icon-contact mr-1" />
        <p class="color-light">{{ $t('contact.phone') }}</p>
      </div>
    </div>


    <div
      :class="`d-flex justify-content-center flex-column mb-2 ${isMobile ? 'text-center full-width' : 'pr-1 width-5' }`">
      <h3 class="h3 text-uppercase color-light mb-3" id="contact">
        {{ $t('contact.form_title') }}
      </h3>

      <form @submit="handleSubmit" class="contact__form full-width">
        <input type="email" :placeholder="$t('contact.input_placeholder')" @change="handleEmail"
          class="contact__input full-width p-1" />
        <button type="submit" class="contact__button p-1">{{ $t('contact.button') }}</button>
      </form>

      <div :class="`mt-4 d-flex flex-column ${isMobile ? 'text-center full-width' : 'width-3' }`">
        <RouterLink to="/privacy-policy" class="link mb-2">{{ $t('contact.privacy_policy') }}</RouterLink>
        <RouterLink to="/terms-conditions" class="link mb-2">{{ $t('contact.terms_conditions') }}</RouterLink>
        <RouterLink to="/faqs" class="link">{{ $t('contact.faqs') }}</RouterLink>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ContactUsStateless',

  props: {
    isMobile: {
      type: String,
      required: true
    },
    handleEmail: {
      type: Function,
      required: true
    },
    handleSubmit: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
.contact__icon-contact {
  height: 1.2rem;
  width: 1.2rem;
}

.contact__form {
  position: relative;
  border-radius: 1rem;
}

.contact__input {
  border-radius: 1rem;
  border: solid 1px rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.3);
  color: var(--light-color)
}

.contact__input::placeholder {
  color: var(--light-color)
}

.contact__input:focus {
  outline: solid 1px var(--secondary-color);
}

.contact__button {
  background: linear-gradient(90deg, #ca127e 35%, #7427bdf1 70%);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 1rem;
  border: solid 1px var(--secondary-color);
  color: var(--light-color);
  cursor: pointer;
  text-transform: capitalize;
  font-family: Font-Medium;
}
</style>