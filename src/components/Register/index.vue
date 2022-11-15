<template>
  <RegisterStateless
    :formController="formController"
    :handleName="handleName"
    :handleEmail="handleEmail"
    :handlePassword="handlePassword"
    :handlePasswordConfirm="handlePasswordConfirm"
    :handleButton="handleButton"
    :handlePhone="handlePhone"
    :handleReferralCode="handleReferralCode"
  />
</template>

<script>
import validator from 'validator'

import RegisterStateless from './RegisterStateless.vue'

export default {
  name: 'Home',

  components: {
    RegisterStateless
  },

  data: () => ({
    formController: {
      name: '',
      errorName: false,
      email: '',
      errorEmail: false,
      password: '',
      errorPassword: false,
      passwordConfirm: '',
      errorPasswordConfirm: false,
      phone: '',
      errorPhone: false,
      referralCode: '',
      errorReferralCode: false
    }
  }),

  methods: {
    handleName(e) {
      const value = e.target.value
      if(value === '') {
        this.formController.errorName = true
      } else {
        this.formController.errorName = false
        this.formController.name = value
      }
    },

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

    handlePasswordConfirm(e) {
      const value = e.target.value
      
      if(value === '' || this.formController.password !== value) {
        this.formController.errorPasswordConfirm = true
      } else {
        this.formController.errorPasswordConfirm = false
        this.formController.passwordConfirm = value
      }
    },

    handlePhone(e) {
      const value = e.target.value
      if(value === '' || !validator.isMobilePhone(value, 'es-CO')) {
        this.formController.errorPhone = true
      } else {
        this.formController.errorPhone = false
        this.formController.phone = value
      }
    },

    handleReferralCode(e) {
      const value = e.target.value
      if(value === '') {
        this.formController.errorReferralCode = true
      } else {
        this.formController.errorReferralCode = false
        this.formController.referralCode = value
      }
    },

    handleButton(e) {
      e.preventDefault()

      this.formController.name === '' && (this.formController.errorName = true)
      this.formController.email === '' && (this.formController.errorEmail = true)
      !validator.isEmail(this.formController.email) && (this.formController.errorEmail = true)
      this.formController.password === '' && (this.formController.errorPassword = true)
      this.formController.passwordConfirm === '' && (this.formController.errorPasswordConfirm = true)
      this.formController.passwordConfirm !== this.formController.password && (this.formController.errorPasswordConfirm = true)
      this.formController.phone === '' && (this.formController.errorPhone = true)
      !validator.isMobilePhone(this.formController.phone, 'es-CO') && (this.formController.errorPhone = true)
      this.formController.referralCode === '' && (this.formController.errorReferralCode = true)

      if(
        this.formController.errorName ||
        this.formController.errorEmail ||
        this.formController.errorPassword ||
        this.formController.errorPasswordConfirm ||
        this.formController.errorPhone ||
        this.formController.errorReferralCode
      ) {
        return
      }

      console.log('MAKING REGISTER... => ', this.formController)
    }
  }
}
</script>