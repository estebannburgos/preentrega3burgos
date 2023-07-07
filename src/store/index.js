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
    cartTotalPrice(state) {
      return state.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
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
    addToCart(state, product) {
      const existingItem = state.cart.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ product, quantity: 1 });
      }
    },
    increaseQuantity(state, item) {
      item.quantity++;
    },
    decreaseQuantity(state, item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem(state, item) {
      const index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
    },
    clearCart(state) {
      state.cart = [];
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
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    increaseQuantity({ commit }, item) {
      commit('increaseQuantity', item);
    },
    decreaseQuantity({ commit }, item) {
      commit('decreaseQuantity', item);
    },
    removeItem({ commit }, item) {
      commit('removeItem', item);
    },
    clearCart({ commit }) {
      commit('clearCart');
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
