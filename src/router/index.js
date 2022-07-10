import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      showHd: true, // 1 展示
      showHdBg: false,
      showFt: true, // 1展示
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
