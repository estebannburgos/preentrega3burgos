<template>
    <nav class="navbar">
      <div class="navbar-logo">
        <a href="#" class="navbar-logo-link">
          Logo
        </a>
      </div>
  
      <div class="navbar-items">
        <div v-if="!isLogin">
          <router-link to="/login">
              <a class="navbar-button" href="#">Login</a>
          </router-link>
        </div>
        <div v-else>
          <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://www.drivetest.de/wp-content/uploads/2019/08/drivetest-avatar-m.png" height="40">
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <ul class="navbar-nav">

                <div v-if="isAdmin">
                  <li class="dropdown-item">
                    <router-link to="/admin/products">
                      <button class="dropdown-item">Listado</button>
                    </router-link>
                  </li>
                  <li class="dropdown-item">
                    <router-link to="/admin/orders">
                      <button class="dropdown-item">Envíos</button>
                    </router-link>
                  </li>
                </div>
                <div v-else>
                    <li class="dropdown-item">
                      <router-link to="/Home">
                        <button class="dropdown-item">Productos</button>
                      </router-link>
                    </li>
                    <li class="dropdown-item">
                      <router-link to="/Cart">
                        <button class="dropdown-item">Carrito</button>
                      </router-link>
                    </li>
                </div>
                <div class="dropdown-divider"></div>
                <li class="dropdown-item" @click="logout">Logout</li>
              </ul>
            </ul>
          </div>
          
        </div>

        <!-- <button class="navbar-button" @click="toggleCart">
          Carrito
          <span class="navbar-counter">{{ cartItemCount }}</span>
        </button> -->

      </div>
    </nav>
  </template>
  
  
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;
}

.navbar-logo {
  margin-right: 2rem;
}

.navbar-logo-link {
  text-decoration: none;
}

.navbar-logo-img {
  width: 50px;
  height: 50px;
}

.navbar-items {
  display: flex;
  align-items: center;
}

.navbar-button {
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background-color: rgb(42, 124, 134);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.navbar-counter {
  margin-left: 0.25rem;
  background-color: #dc3545;
  color: #fff;
  border-radius: 50%;
  padding: 0.25rem;
  font-size: 0.75rem;
}
</style>
  
  <script>
  export default {
    name: "navbar",
    props: {
      cartItemCount: {
        type: Number,
        default: 0,
      },
    },
    data() {
        return {

        }
    },
    methods: {
      toggleCart() {
        this.$emit("toggle-cart");
      },
      
      logout() {
      //   this.$emit("logout");
          // this.isLoggedIn(false);
          // this.userData({});
          this.$store.dispatch('isLoggedIn', false)  
          this.$store.dispatch('userData', {})  
          this.$router.push('/login')
      },
    },
  };
  </script>