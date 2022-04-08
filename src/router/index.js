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
        component: () => import(/* webpackChunkName: "elementui" */ '@/views/element')
      },
      {
        path: 'project',
        name: 'project',
        component: () => import(/* webpackChunkName: "project" */ '@/views/project')
      },
      {
        path: 'apps',
        name: 'apps',
        component: () => import(/* webpackChunkName: "apps" */ '@/views/apps')
      },
      {
        path: 'excel',
        name: 'excel',
        component: () => import(/* webpackChunkName: "excel" */ '@/views/excel')
      },
      {
        path: 'excel1',
        name: 'excel1',
        component: () => import(/* webpackChunkName: "excel1" */ '@/views/excel1')
      },
      {
        path: 'test',
        name: 'testComponent',
        component: () => import(/* webpackChunkName: "testComponent" */ '@/views/testComponent')
      },
      {
        path: '/bfc',
        name: 'bfc',
        component: () => import(/* webpackChunkName: "bfc" */ '@/views/bfc')
      },
      {
        path: '/rem',
        name: 'rem',
        component: () => import(/* webpackChunkName: "rem" */ '@/views/rem')
      },
      {
        path: 'kownJS',
        name: 'kownJS',
        component: () => import(/* webpackChunkName: "kownJS" */ '@/views/YOUDONTKOWNJS')
      },
      {
        path: 'vueerror',
        name: 'vueerror',
        component: () => import(/* webpackChunkName: "vueerror" */ '@/views/VueError')
      },
      {
        path: 'test1',
        name: 'test1',
        component: () => import(/* webpackChunkName: "test1" */ '@/views/deleteTest')
      },
      {
        path: 'cookie',
        name: 'cookie',
        component: () => import(/* webpackChunkName: "cookie" */ '@/views/cookie')
      },
      {
        path: 'treesOrcheckbox',
        name: 'treesOrcheckbox',
        component: () => import(/* webpackChunkName: "checkbox" */ '@/views/treesOrcheckbox')
      },
      {
        path: 'xterm',
        name: 'xterm',
        component: () => import(/* webpackChunkName: "xterm" */ '@/views/xterm')
      },
      {
        path: 'queryNum',
        name: 'queryNum',
        component: () => import(/* webpackChunkName: "queryNum" */ '@/views/queryNum')
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
