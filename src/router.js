import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import bugDetails from './views/bugDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bugs/bugDetails/:id',
      name: 'bugDetails',
      component: bugDetails
    },
  ]
})
