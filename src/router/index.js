import { createWebHistory, createRouter } from 'vue-router'
import UnitPage from '../views/UnitPage.vue'

const routes = [
//   { path: '/', component: HomeView },
  { 
    path: '/UnitPage', 
    component: UnitPage 
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

