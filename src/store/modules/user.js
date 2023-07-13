const state = {
  isLogin: false,
  user: {},
};

// const getters = {
//   isLogin: state => state.isLogin,
//   user: state => state.user,
//   isAdmin: state => state.user.admin,
//   userId: state => state.user.id,
// };

const mutations = {
  isLoggedIn: (state, status) => {
    state.isLogin = status;
  },
  userData: (state, user) => {
    state.user = user;
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  },
};

const actions = {
  isLoggedIn: ({ commit }, status) => {
    commit('isLoggedIn', status);
  },
  userData: ({ commit }, user) => {
    commit('userData', user);
  },
};

export default {
  state,
//  getters,
  mutations,
  actions,
};
