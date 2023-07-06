<template>
    <div class="container">
        <div v-if="productsError" class="alert alert-danger">{{ productsError }}</div>
        <div v-else class="admin-products">
            <h2 class="d-flex justify-content-between align-items-center">
            Listado de Productos
            <router-link to="/admin/product/new" class="btn btn-success">Nuevo producto</router-link>
            </h2>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td><img :src="product.picture" height="75" :alt="product.name"></td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>
                <router-link :to="`/admin/product/${product.id}/edit`" class="btn btn-sm btn-primary">Editar</router-link>
                <button class="btn btn-sm btn-danger" @click="deleteProduct(product.id)">Eliminar</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
  </template>

<script>
    import { Products } from '../classes/products.js'

    export default {
       name: 'AdminProducts',
       data() {
            return {
                products: [],
                productsDB : new Products(),
                productsError: "",
            };
        },
        mounted() {

            if (!this.isLogin) 
                this.productsError = "No tiene permitido acceder a este sitio.";
            this.getAllProducts()
          
        },
        methods: {
            async getAllProducts() {
                let {data: products} = await this.productsDB.getProducts()
                this.products = products
            },
            // editProduct(product) {

            // },
            async deleteProduct(id) {
              if (confirm("¿está seguro de querer borrar este producto. Una vez hecho no podrá volver atrás.")) {
                console.log(id)
                let item = await this.productsDB.destroyProduct(id)
                //console.log(comida)
                let index = this.products.findIndex(unit => unit.id == item.id)
                this.products.splice(index, 1)
              }
            }
        }
    }
</script>

</script>

<style scoped>
.container {
  display: block;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 10vh;
}
.admin-products {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  background-color: #f0f0f0;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #e6e6e6;
}

.btn {
  margin-right: 5px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>