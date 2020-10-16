import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main'),
    children: [
      {
        path: 'elementui',
        name: 'elementui',
        component: () => import('@/views/element')
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/project')
      },
      {
        path: 'apps',
        name: 'apps',
        component: () => import('@/views/apps')
      },
      {
        path: 'excel',
        name: 'excel',
        component: () => import('@/views/excel')
      },
      {
        path: 'excel1',
        name: 'excel1',
        component: () => import('@/views/excel1')
      },
      {
        path: 'test',
        name: 'testComponent',
        component: () => import('@/views/testComponent')
      },
      {
        path: '/bfc',
        name: 'bfc',
        component: () => import('@/views/bfc')
      },
      {
        path: '/rem',
        name: 'rem',
        component: () => import('@/views/rem')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
