import { createWebHistory, createRouter } from 'vue-router'

// import main Nav pages
import Home from '../views/Mainpages/Home.vue'
import Units from '../views/Mainpages/Units.vue'
import Favorites from '../views/Mainpages/Favorites.vue'
import About from '../views/Mainpages/About.vue'
import Contact from '../views/Mainpages/Contact.vue'

//import Subpages
import UnitPage from '../views/Subpages/UnitPage.vue'
import Search from '../views/Subpages/Search.vue'


const routes = [
  // Main Nav Pages
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path:'/units',
    name: 'units',
    component: Units
  },
  {
    path: '/Favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/About',
    name: 'About',
    component: About   
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },

// Secondary Pages
  {
    path: '/search',
    name: 'search',
    component: Search
  },

  { 
    path: '/UnitPage', 
    name: 'UnitPage',
    component: UnitPage 
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

