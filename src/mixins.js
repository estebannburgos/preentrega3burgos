import Vue from 'vue'

export const mixins = {
    computed : {
        isLogin() {
        return this.$store.state.user.isLogin
        // return this.$store.getters['user/isLogin'];
      },
      isAdmin() {
        return this.$store.state.user.user.admin
        // return this.$store.getters['user/isAdmin'];
      },
      userId() {
        return this.$store.state.user.user.id
        // return this.$store.getters['user/userId'];
      },
      cartInProgress() {
        return this.$store.state.cart.cart
      }      
    }
}

Vue.mixin(mixins)
