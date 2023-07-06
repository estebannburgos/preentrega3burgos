import Vue from 'vue'

export const mixins = {
    computed : {
        isLogin() {
        return this.$store.state.isLogin
      },
      isAdmin() {
        return this.$store.state.user.admin
      },
      // cartItem() {
      //   return this.$store.state.carItem
      // }      
    }
}

Vue.mixin(mixins)
