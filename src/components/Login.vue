<template>
    <div class="container">
        <div class="login-register">
          <form @submit.prevent="login()">
            <div class="login">
                <h2>Iniciar sesión</h2>
                <div class="form-group">
                <input v-model="loginData.email" name="email" type="email" id="email" class="form-input" placeholder="Email">
                </div>
                <div class="form-group">
                <input v-model="loginData.password" name="password" type="password" id="password" class="form-input" placeholder="Contraseña">
                </div>
                <button >Iniciar sesión</button>
                <p>¿No tienes una cuenta aún? 
                  <router-link to="/register">
                    <button >Regístrate aquí</button>
                  </router-link>
                </p>
                <div v-if="loginError" class="alert alert-danger">{{ loginError }}</div>
            </div>
          </form>
        </div>
    </div>
</template>

<script>

  import { Users } from '../classes/users.js'

    export default {
       name: 'Login',
       data() {
        return {
          loginData: {
            email: "",
            password: "",
            admin: false
          },
          loginError: "",
          usersDB: new Users()
        }
       },
       methods: {
        async login() {
          if (!this.loginData.email || !this.loginData.password) {
            this.loginError = "Por favor, ingresa el usuario y la contraseña.";
            return;
          }
          let {data: users} = await this.usersDB.getUsers()
          // console.log(users)
          const user = users.find(
          (u) =>
              u.email === this.loginData.email &&
              u.password === this.loginData.password
          );

          if (user) {
            console.log(user)
            this.$store.dispatch('isLoggedIn', true)
            this.$store.dispatch('userData', user)
            localStorage.setItem('user', JSON.stringify(user));
            this.$router.push(user.admin ? '/admin/products' : '/home')
            // this.loginData.email = "";
            // this.loginData.password = "";
            // this.loginError = "";
          } else {
            this.$store.dispatch('isLoggedIn', false)
            this.$store.dispatch('userData', {})
            this.loginError = "Credenciales de inicio de sesión incorrectas.";
          }
        }
       }
    }
</script>


<style scoped>
.container {
  background-color: rgb(0, 156, 161);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-register {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 20rem;
}

.login {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.alert {
  color: red;
}
</style>