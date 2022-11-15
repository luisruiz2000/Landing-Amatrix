import { createI18n } from 'vue-i18n'

import { LANGUAGE_SELECTED } from '../../constants/localStorageConstants'
import en from './locales/en.json'
import es from './locales/es.json'

const getBrowserLanguage = () => {
  const browserLanguage = navigator.language
  const language = browserLanguage.split('-')[0]
  if(language !== 'en' && language !== 'es') {
    return 'en'
  }
  return language
}

const getLaguageDefault = () => {
  return localStorage.getItem(LANGUAGE_SELECTED) || getBrowserLanguage()
}

const i18nService = createI18n({
  locale: getLaguageDefault(),
  globalInjection: true,
  messages: {
    en,
    es
  }
})

export default i18nService