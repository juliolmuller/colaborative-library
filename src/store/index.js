import Vue from 'vue'
import Vuex from 'vuex'
import books from './modules/books'
import auth from './modules/auth'

// Inject Vuex into the framework
Vue.use(Vuex)

// Load modules into Store
export default new Vuex.Store({
  modules: {
    books,
    auth
  }
})
