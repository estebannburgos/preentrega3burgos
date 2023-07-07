<template>
    <div class="container">
        <div class="admin-form">
            <h2>{{ isNewProduct ? 'Nuevo Producto' : 'Editar Producto' }}</h2>
        <form @submit.prevent="saveProduct">
            <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="product.name" name="name" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="price">Precio:</label>
                <input type="number" id="price" v-model="product.price" name="price" class="form-control" min="0" required>
            </div>
            <div class="form-group">
                <label for="description">Descripción:</label>
                <textarea id="description" v-model="product.description" name="description" class="form-control" required></textarea>
            </div>
            <div class="form-group">
                <label for="picture">URL de la imagen:</label>
                <input type="text" id="picture" v-model="product.picture" name="picture" class="form-control" required>
            </div>
            <div v-if="productError" class="alert alert-danger">{{ productError }}</div>
            <div v-if="productSuccess" class="success alert-success">{{ productSuccess }}</div>
            <button type="submit" class="btn btn-primary">{{ isNewProduct ? 'Guardar' : 'Actualizar' }}</button>
            <router-link to="/admin/products">
                <a class="btn btn-secondary" href="#">Volver</a>
            </router-link>
        </form>
        </div>
    </div>
  </template>

<script>
    import { Products } from '../classes/products.js'
    export default {
       name: 'AdminForm',
       data() {
            return {
                product: {
                    name: '',
                    price: 0,
                    description: '',
                    picture: ''
                },
                productError: '',
                productSuccess: '',
                productsDB : new Products(),
                isNewProduct: true
            };
        },
        created() {
            
            if (this.$route.params.id) {
                let productId = this.$route.params.id;
                if (productId < 0) {
                    return;
                }
                let product = this.getOneProduct(productId)

                this.product.name = product.name
                this.product.price = product.price
                this.product.description = product.description
                this.product.picture = product.picture
            
                this.isNewProduct = false; 
            }
        },
        methods: {
            saveProduct() {
                if (this.isNewProduct) {
                    this.createProduct(this.product)
                    this.product = this.setFormatData()
                    this.productSuccess = "Se ha creado un nuevo producto exitosamente.";
                    
                } else {
                    this.editProduct(this.product, this.product.id)
                    this.productSuccess = "Se ha actualizado el producto exitosamente.";
                }
            },
            async getOneProduct(id) {
                let {data: product} = await this.productsDB.getProduct(id)
                // console.log(product)
                this.product = product
            },
            async editProduct(data, id) {
                let product = await this.productsDB.updateProduct(data, id)
                // console.log(product)
            },
            async createProduct(data) {
                let product = await this.productsDB.storeProduct(data)
                // console.log(product)
            },
            setFormatData() {
                return {
                    name: '',
                    price: 0,
                    description: '',
                    picture: ''
                }
            }
        }
    //    computed: {
    //     id() {
    //         return this.$route.params.id
    //     }
    //    }
    }
</script>

<style scoped>

.container {
  display: block;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 10vh;
}

.admin-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  color: #555;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 150px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.alert {
  color: red;
}
.success {
  color: green;
}
</style>