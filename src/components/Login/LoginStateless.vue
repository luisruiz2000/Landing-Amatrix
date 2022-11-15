<template>
  <div class="login">
    <Navbar />

    <form class="login__form d-flex align-items-center justify-content-center flex-column">
      <h1 class="login__form-title color-light mb-3">{{ $t('login.title') }}</h1>

      <input
        :placeholder="$t('login.email')"
        :class="`login__form-input full-width ${ formController.errorEmail ? 'mb-1' : 'mb-3' }`"
        name="email"
        type="email"
        @input="handleEmail($event)"
      >
      <span v-if="formController.errorEmail" class="login__form-error mb-3">{{ $t('login.error_email') }}</span>

      <input
        :placeholder="$t('login.password')"
        :class="`login__form-input full-width ${ formController.errorPassword ? 'mb-1' : 'mb-3' }`"
        name="password"
        type="password"
        @input="handlePassword($event)"
      >
      <span v-if="formController.errorPassword" class="login__form-error mb-3">{{ $t('login.error_password') }}</span>

      <button
        class="login__form-button"
        @click="handleButton($event)"
      >
        {{ $t('login.button') }}
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
    handleEmail: {
      type: Function,
      required: true
    },
    handlePassword: {
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
.login {
  height: 100vh;
  background: #120a1d;
  background-image: url('../../assets/images/login/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.login__form {
  padding: 10rem 10rem 2rem 10rem;
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
    padding: 10rem 2rem;
    width: 100%;
  }
}
</style>