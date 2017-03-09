import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import References from '@/components/References'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/references',
      name: 'References',
      component: References
    }
  ]
})
