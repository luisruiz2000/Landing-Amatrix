<template>
  <LoginStateless
    :formController="formController"
    :handleEmail="handleEmail"
    :handlePassword="handlePassword"
    :handleButton="handleButton"
  />
</template>

<script>
import validator from 'validator'

import LoginStateless from './LoginStateless.vue'

export default {
  name: 'Home',

  components: {
    LoginStateless
  },

  data: () => ({
    formController: {
      email: '',
      errorEmail: false,
      password: '',
      errorPassword: false
    }
  }),

  methods: {
    handleEmail(e) {
      const value = e.target.value
      if(value === '' || !validator.isEmail(value)) {
        this.formController.errorEmail = true
      } else {
        this.formController.errorEmail = false
        this.formController.email = value
      }
    },

    handlePassword(e) {
      const value = e.target.value
      if(value === '') {
        this.formController.errorPassword = true
      } else {
        this.formController.errorPassword = false
        this.formController.password = value
      }
    },

    handleButton(e) {
      e.preventDefault()
      this.formController.email === '' && (this.formController.errorEmail = true)
      !validator.isEmail(this.formController.email) && (this.formController.errorEmail = true)
      this.formController.password === '' && (this.formController.errorPassword = true)

      if(this.formController.errorEmail || this.formController.errorPassword) {
        return
      }

      console.log('MAKING LOGIN... => ', this.formController)
    }
  }
}
</script>