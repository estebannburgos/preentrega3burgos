const state = {
    cart: [],
  };
  
  const getters = {
    cartItems: state => state.cart,
    cartTotalPrice: state => state.cart.reduce((total, item) => total + item.product.price * item.quantity, 0),
  };
  
  const mutations = {
    addToCart: (state, product) => {
      const existingItem = state.cart.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ product, quantity: 1 });
      }
    },
    increaseQuantity: (state, item) => {
      item.quantity++;
    },
    decreaseQuantity: (state, item) => {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem: (state, item) => {
      const index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
    },
    clearCart: state => {
      state.cart = [];
    },
    deleteItemCart: (state, index) => {
      state.cart.splice(index, 1);
    },
    deleteCart: state => {
      state.cart = [];
    },
  };
  
  const actions = {
    addToCart: ({ commit }, product) => {
      commit('addToCart', product);
    },
    increaseQuantity: ({ commit }, item) => {
      commit('increaseQuantity', item);
    },
    decreaseQuantity: ({ commit }, item) => {
      commit('decreaseQuantity', item);
    },
    removeItem: ({ commit }, item) => {
      commit('removeItem', item);
    },
    clearCart: ({ commit }) => {
      commit('clearCart');
    },
    deleteItemCart: ({ commit }, index) => {
      commit('deleteItemCart', index);
    },
    deleteCart: ({ commit }) => {
      commit('deleteCart');
    },
  };
  
  export default {
    state,
    getters,
    mutations,
    actions,
  };
  