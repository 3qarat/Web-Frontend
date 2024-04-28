import { createWebHistory, createRouter } from 'vue-router'
import UnitView from '../views/UnitView.vue'

const routes = [
//   { path: '/', component: HomeView },
  { 
    path: '/UnitView', 
    component: UnitView 
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

