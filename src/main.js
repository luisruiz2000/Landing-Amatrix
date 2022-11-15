import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import i18nService from './services/i18n'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(i18nService)
app.use(store)

app.mount('#app')