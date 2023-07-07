import Vue from 'vue'

export const mixins = {
    computed : {
        isLogin() {
        return this.$store.state.isLogin
      },
      isAdmin() {
        return this.$store.state.user.admin
      },
      userId() {
        return this.$store.state.user.id
      },
      cartInProgress() {
        return this.$store.state.cart
      }      
    }
}

Vue.mixin(mixins)
