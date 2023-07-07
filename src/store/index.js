import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {},
    cart: []
  },
  getters: {
  },
  mutations: {
    isLoggedIn(state, status) {
      // console.log('mutation -> isLoggedIn', state, status, new Date().toLocaleString())
      state.isLogin = status
    },
    userData(state, user) {
        // console.log('mutation -> userData', state, user, new Date().toLocaleString())
        state.user = user
        if (user) 
          localStorage.setItem('user', JSON.stringify(user))
        else 
          localStorage.removeItem('user');
    },
    addCart(state, product) {
        // console.log('mutation -> addCart', state, product, new Date().toLocaleString())
        let index = state.cart.findIndex(item => item.product.id == product.id)
        if (index == -1) state.cart.push({ quantity: 1, product: product })            
    },
    deleteItemCart(state, index) {
        // console.log('mutation -> deleteItemCart', state, index, new Date().toLocaleString())
        state.cart.splice(index, 1)          
    },
    deleteCart(state) {
        // console.log('mutation -> deleteCart', state, new Date().toLocaleString())
        state.cart = []           
    } 
  },
  actions: {
    isLoggedIn({commit},status) {
      // console.log('action -> isLoggedIn', status, new Date().toLocaleString())
      commit('isLoggedIn', status)
    },
    userData({commit},user) {
        // console.log('action -> userData', user, new Date().toLocaleString())
        commit('userData', user)
    },
    addCart({commit},product) {
        // console.log('action -> addCart', product, new Date().toLocaleString())
        commit('addCart', product)
    },
    deleteItemCart({commit},index) {
        // console.log('action -> deleteItemCart', index, new Date().toLocaleString())
        commit('deleteItemCart', index)
    },
    deleteCart({commit}) {
        // console.log('action -> deleteCart', new Date().toLocaleString())
        commit('deleteCart')
    },
  },
  modules: {
  }
})
