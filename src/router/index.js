import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ProtectedPage from '../pages/ProtectedPage.vue'
import ProductListPage from '../pages/ProductListPage.vue'
import ProductDetailPage from '../pages/ProductDetailPage.vue' // <-- Добавлен импорт

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage, meta: { guestOnly: true } },
  { path: '/dashboard', name: 'Dashboard', component: ProtectedPage, meta: { requiresAuth: true } },
  
  { path: '/products', name: 'Products', component: ProductListPage },
  
  // <-- Добавлен маршрут для детальной страницы
  { 
    path: '/products/:id', 
    name: 'ProductDetail', 
    component: ProductDetailPage, 
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token') === 'demo'

  if (to.meta.requiresAuth && !isLoggedIn) {
    next({ name: 'Login' })
    return
  }

  if (to.meta.guestOnly && isLoggedIn) {
    next({ name: 'Dashboard' })
    return
  }

  next()
})

export default router