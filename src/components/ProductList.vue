<template>
  <div>
    <div v-if="cartSuccess" class="success alert-success">{{ cartSuccess }}</div>
      <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.picture" alt="Product Image" class="product-image">
          <h3>{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">{{ formattedPrice(product.price) }}</p>
          <button @click="addToCart(product.id)" class="btn btn-primary">Agregar al Carrito</button>
        </div>
      </div>
  </div>
  </template>
  
  <script>

  import { Products } from '../classes/products.js'
  import { Cart } from '../classes/cart.js'

  export default {
    data() {
      return {
        name: 'ProductList',
        products: [],
        cart: [],
        productsDB : new Products(),
        cartDB : new Cart(),
        cartSuccess: '',
      };
    },
    mounted() {
        if (!this.isLogin) 
            this.productsError = "No tiene permitido acceder a este sitio.";
        this.getAllProducts()
        this.getAllCart(this.userId)
    },
    methods: {
        async getAllProducts() {
            let {data: products} = await this.productsDB.getProducts()
            this.products = products
        },
        async getAllCart(idUser) {
            let {data: cart} = await this.productsDB.getProducts(idUser)
            this.cart = cart
        },
      addToCart(productId) {
        let product = this.products.find(product => product.id == productId)
        this.$store.dispatch('addCart', product)
        this.cartSuccess = "Producto agregado al carrito.";
      },
      formattedPrice(price) {
        return `CLP $${price}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .product-card {
    width: 200px;
    margin: 20px;
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  
  .product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .product-description {
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  .product-price {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
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
  