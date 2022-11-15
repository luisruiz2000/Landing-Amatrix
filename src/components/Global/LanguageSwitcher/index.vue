<template>
  <form>
    <select v-model="locale" :class="`language-switcher ${ isMobile && 'my-2' }`" @change="switchLanguage($event)">
      <option  class="language-switcher-item" value="en">en</option>
      <option  class="language-switcher-item" value="es">es</option>
    </select>
  </form>
</template>

<script>
import { useI18n } from 'vue-i18n'

import { LANGUAGE_SELECTED } from '../../../constants/localStorageConstants'

export default {
  name: 'App',

  setup() {
    const { locale } = useI18n({
      inheritLocale: true
    })

    return { locale }
  },

  data: () => ({
    isMobile: false
  }),

  created() {
    this.isMobile = window.innerWidth <= 767
  },

  methods: {
    switchLanguage (e) {
      e.preventDefault()
      const languageSelected = e.target.value
      this.$i18n.locale = languageSelected
      this.setLanguageSelecteInLocalStorage(languageSelected)
    },

    setLanguageSelecteInLocalStorage(language) {
      localStorage.setItem(LANGUAGE_SELECTED, language)
    }
  }
}
</script>