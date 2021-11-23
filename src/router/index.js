import { createRouter, createWebHistory } from 'vue-router'
import view_flask from '../views/view_flask.vue'
import test_bootstrap from '../views/test_bootstrap.vue'
import cv_origin from '../views/cv_origin.vue'
// import index_el from '../views/index_el.vue'
import index_el from '../views/index_el.vue'
const routes = [
  {
    path: '/',
    name: 'index_el',
    component: index_el
  },
  {
    path: '/view_flask',
    name: 'view_flask',
    component: view_flask
  },
  {
    path: '/test_bootstrap',
    name: 'test_bootstrap',
    component: test_bootstrap
  },
  {
    path: '/cv_origin',
    name: 'cv_origin',
    component: cv_origin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
