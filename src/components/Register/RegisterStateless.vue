<template>
  <div class="register">
    <Navbar />

    <form class="login__form d-flex align-items-center justify-content-center flex-column">
      <h1 class="login__form-title color-light mb-3">{{ $t('register.title') }}</h1>

      <input
        :placeholder="$t('register.name')"
        :class="`login__form-input full-width ${ formController.errorName ? 'mb-1' : 'mb-2' }`"
        name="name"
        type="text"
        @input="handleName($event)"
      >
      <span v-if="formController.errorName" class="login__form-error mb-2">{{ $t('register.error_name') }}</span>

      <input
        :placeholder="$t('register.email')"
        :class="`login__form-input full-width ${ formController.errorEmail ? 'mb-1' : 'mb-2' }`"
        name="email"
        type="email"
        @input="handleEmail($event)"
      >
      <span v-if="formController.errorEmail" class="login__form-error mb-2">{{ $t('register.error_email') }}</span>

      <input
        :placeholder="$t('register.password')"
        :class="`login__form-input full-width ${ formController.errorPassword ? 'mb-1' : 'mb-2' }`"
        name="password"
        type="password"
        @input="handlePassword($event)"
      >
      <span v-if="formController.errorPassword" class="login__form-error mb-2">{{ $t('register.error_password') }}</span>

      <input
        :placeholder="$t('register.password_confirm')"
        :class="`login__form-input full-width ${ formController.errorPasswordConfirm ? 'mb-1' : 'mb-2' }`"
        name="passwordConfirm"
        type="password"
        @input="handlePasswordConfirm($event)"
      >
      <span v-if="formController.errorPasswordConfirm" class="login__form-error mb-2">{{ $t('register.error_password_confirm') }}</span>

      <input
        :placeholder="$t('register.phone')"
        :class="`login__form-input full-width ${ formController.errorPhone ? 'mb-1' : 'mb-2' }`"
        name="phone"
        type="number"
        @input="handlePhone($event)"
      >
      <span v-if="formController.errorPhone" class="login__form-error mb-2">{{ $t('register.error_phone') }}</span>

      <input
        :placeholder="$t('register.referral_code')"
        :class="`login__form-input full-width ${ formController.errorReferralCode ? 'mb-1' : 'mb-2' }`"
        name="referralCode"
        type="text"
        @input="handleReferralCode($event)"
      >
      <span v-if="formController.errorReferralCode" class="login__form-error mb-2">{{ $t('register.error_referral_code') }}</span>

      <button
        class="login__form-button"
        @click="handleButton($event)"
      >
        {{ $t('register.button') }}
      </button>
    </form>
    
  </div>
</template>

<script>
import Navbar from '../Home/Navbar/index.vue'

export default {
  name: 'LoginStateless',

  components: {
    Navbar
  },

  props: {
    formController: {
      type: Object,
      required: true
    },
    handleName: {
      type: Function,
      required: true
    },
    handleEmail: {
      type: Function,
      required: true
    },
    handlePassword: {
      type: Function,
      required: true
    },
    handlePasswordConfirm: {
      type: Function,
      required: true
    },
    handlePhone: {
      type: Function,
      required: true
    },
    handleReferralCode: {
      type: Function,
      required: true
    },
    handleButton: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
.register {
  height: 100vh;
  background: #120a1d;
  background-image: url('../../assets/images/register/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-y: scroll;
}

.login__form {
  padding: 1rem 10rem;
  width: 50%;
}

.login__form-title {
  font-size: 2.5rem;
}

.login__form-input {
  padding: .5rem 1rem;
  background: none;
  outline: none;
  border: solid 1px white;
  border-radius: .5rem;
  color: white;
}

.login__form-input::placeholder {
  color: white;
}

.login__form-button {
  padding: .5rem 1rem;
  border: none;
  outline: none;
  border-radius: .5rem;
  color: white;
  background: rgb(232,112,203);
  background: linear-gradient(90deg, rgba(232,112,203,1) 35%, rgba(101,90,212,1) 70%);
  width: 100%;
}

.login__form-error {
  color: #e870cb;
}

@media (max-width: 767px) {
  .login__form {
    padding: 2rem;
    width: 100%;
  }
}
</style>