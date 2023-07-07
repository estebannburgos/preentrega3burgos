<template>
    <div>
        <div class="container">
            <div class="register">
                <form @submit.prevent="register()">
                    <div class="registration">
                        <h2>Registrarse</h2>
                        <div class="form-group">
                            <input v-model="registerData.name" name="name"  type="text" id="name" class="form-input" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                        <input v-model="registerData.email" name="email" type="email" id="email" class="form-input" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input v-model="registerData.password" name="password" type="password" id="password" class="form-input" placeholder="Contraseña">
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="admin" v-model="registerData.admin" name="admin">
                            <label class="custom-control-label" for="admin">¿Es admin?</label>
                        </div>
                            <button>Registrarse</button>
                            <p>¿Ya tienes una cuenta? 
                                <router-link to="/login">
                                    <button >Inicia sesión aquí</button>
                                </router-link>
                            </p>
                        <div v-if="registrationError" class="alert alert-danger">{{ registrationError }}</div>
                        <div v-if="registrationSuccess" class="success alert-success">{{ registrationSuccess }}</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    
    import { Users } from '../classes/users.js'

    export default {
       name: 'Register',
       data() {
            return {
                registerData: {
                    name: "",
                    email: "",
                    password: "",
                    admin: false
            },
            registrationError: "",
            registrationSuccess: "",
            usersDB: new Users()
            }
       },
       methods: {
        async register() {
            if (!this.registerData.name || !this.registerData.email || !this.registerData.password) {
                this.registrationError = "Registro incorrecto. Por favor, inténtelo nuevamente.";
                return;
            }
            else {
                let {data: users} = await this.usersDB.getUsers()
                // // console.log(users)

                let user = users.find(
                    u => u.email == this.registerData.email
                    )
                if(user) {
                    this.registrationError = "Lo sentimos. Este usuario ya existe.";
                    return;
                }
                else {
                    let {data: user} = await this.usersDB.storeUser(this.registerData)
                    this.registrationSuccess = "El usuario ha sido registrado exitosamente.";
                }
            }
        }
        },
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

.register {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 20rem;
}

.registration {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.label {
  margin-bottom: 0.5rem;
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
.success {
  color: green;
}
</style>
