<template>
    <div class="container">
        <div class="home">
            <h2>Bienvenido a la Tienda</h2>
            <p>Explora nuestra selección de productos</p>
        <ProductList />
        </div>
    </div>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList.vue';
  
  export default {
    name: 'Home',
    components: {
      ProductList
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
  .home {
    text-align: center;
    color: #333;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  </style>
  