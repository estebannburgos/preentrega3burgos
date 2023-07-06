import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {},
  //  carrito:[]
  },
  getters: {
  },
  mutations: {
    isLoggedIn(state, status) {
      console.log('mutation -> isLoggedIn', state, status, new Date().toLocaleString())
      state.isLogin = status
    },
    userData(state, user) {
        console.log('mutation -> userData', state, user, new Date().toLocaleString())
        state.user = user
        if (user) 
          localStorage.setItem('user', JSON.stringify(user))
        else 
          localStorage.removeItem('user');
    },
    addCarrito(state, comida) {
        console.log('mutation -> addCarrito', state, comida, new Date().toLocaleString())
        let index = state.carrito.findIndex(item => item.comida.id == comida.id)
        if (index == -1) state.carrito.push({ cantidad: 1, comida: comida })            
    },
    deleteItemCarrito(state, index) {
        console.log('mutation -> deleteItemCarrito', state, index, new Date().toLocaleString())
        state.carrito.splice(index,1)          
    },
    deleteCarrito(state) {
        console.log('mutation -> deleteCarrito', state, new Date().toLocaleString())
        state.carrito = []           
    } 
  },
  actions: {
    isLoggedIn({commit},status) {
      console.log('action -> isLoggedIn', status, new Date().toLocaleString())
      commit('isLoggedIn', status)
    },
    userData({commit},user) {
        console.log('action -> userData', user, new Date().toLocaleString())
        commit('userData', user)
    },
    addCarrito({commit},comida) {
        console.log('action -> addCarrito', comida, new Date().toLocaleString())
        commit('addCarrito', comida)
    },
    deleteItemCarrito({commit},index) {
        console.log('action -> deleteItemCarrito', index, new Date().toLocaleString())
        commit('deleteItemCarrito', index)
    },
    deleteCarrito({commit}) {
        console.log('action -> deleteCarrito', new Date().toLocaleString())
        commit('deleteCarrito')
    },
  },
  modules: {
  }
})
