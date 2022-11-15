import { createStore } from 'vuex'

import registerTypeState from './modules/registerType'

const store = createStore({
  modules: {
    registerTypeState
  }
})

export default store