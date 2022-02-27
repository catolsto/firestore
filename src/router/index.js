import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'
import Crud from '../views/Crud.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/perfil', name: 'Perfil', component: Perfil },
  { path: '/crud', name: 'Crud', component: Crud },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
