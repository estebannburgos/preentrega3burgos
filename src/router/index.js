import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Home from '@/views/Home.vue'
import AdminProducts from '@/views/AdminProducts.vue'
import AdminForm from '@/views/AdminForm.vue'
import AdminOrders from '@/views/AdminOrders.vue'
import ProductList from '@/components/ProductList.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import Cart from '@/components/Cart.vue';

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/Login' 
  },
  {
    path: '/Login',
  //  name: 'Login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
  //  name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: ProductList
      },
      {
        path: 'product/:id',
        component: ProductDetail
      }
    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/admin/products',
  //  name: 'AdminProducts',
    component: AdminProducts
  },
  {
    path: '/admin/product/new',
  //  name: 'AdminForm',
    component: AdminForm
  },
  {
    path: '/admin/product/:id/edit',
  //  name: 'AdminFormEdit',
    component: AdminForm
  },
  {
    path: '/admin/orders',
  //  name: 'AdminOrders',
    component: AdminOrders
  },
  { 
    path: '*', 
  //  redirect: '/login' 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
