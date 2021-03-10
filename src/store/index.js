import Vue from 'vue'
import Vuex from 'vuex'
import { FURNITURE } from './furniture'
import { ARTICLES } from './articles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    furniture: FURNITURE,
    articles: ARTICLES,
  },
})