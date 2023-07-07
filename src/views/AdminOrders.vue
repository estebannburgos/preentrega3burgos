<template>
    <div class="container">
        <div v-if="orderError" class="alert alert-danger">{{ orderError }}</div>
        <div class="admin-orders">
        <h2>Listado de Pedidos</h2>
        <table class="table">
            <thead>
            <tr>
                <th>Usuario</th>
                <th>Productos</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>
                    <ul v-if="!user.orders.length">
                        <li>
                            Aún sin compra.
                        </li>
                        
                    </ul>
                    <ul v-else>
                        <li v-for="(order, i) in user.orders" :key="i">
                            <ul>
                                <li v-for="(product, j) in order" :key="j">
                                {{ product.name }} x {{ order.quantity }} = {{ product.price * order.quantity }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
  </template>
  
  <script>
  import { Users } from '../classes/users.js'
  export default {
    data() {
      return {
        users: [],
        usersDB: new Users(),
        orderError: ''
      };
    },
    mounted() {
        if (!this.isLogin) 
            this.orderError = "No tiene permitido acceder a este sitio.";
        this.getAllUsers()
    },
    methods: {
      formattedPrice(price) {
        return `CLP $${price}`;
      },
      async getAllUsers() {
        let {data: users} = await this.usersDB.getUsers()
        this.users = users
        }
    }
  };
  </script>
  
  <style scoped>
  .container {
  display: block;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 10vh;
}
  .admin-orders {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  
  h2 {
    text-align: center;
    color: #333;
  }
  
  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
    margin-right: 5px;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
  }
  .alert {
  color: red;
}
  </style>
  