import { createStore } from 'vuex'
import msite from './modules/msite'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    msite
  }
})

export default store