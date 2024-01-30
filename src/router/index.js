import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index.vue'
import Solution from '../views/solution.vue'
import Product from '../views/product.vue'
import Page4 from  '../views/page4.vue'
import Page6 from '../views/page6.vue'
import Page7 from '../views/page7.vue'
import Page7_2 from '../views/page7_2.vue'
import Page5 from '../views/page5.vue'
import Page8 from '../views/page8.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/dashboard',
      name:'Index',
      component:Index
    },
    {
      path:'/solution',
      name:'solution',
      component:Solution
    },
    {
      path:'/product',
      name:'Product',
      component:Product,
    },
    {
      path:'/case',
      name:'Page4',
      component:Page4,
    },
    {
      path:'/news',
      name:'Page6',
      component:Page6,
    },
    {
      path:'/joinUs',
      name:'Page7',
      component:Page7,
    },
    {
      path:'/joinUsDetail',
      name:'Page702',
      component:Page7_2,
    },
    {
      path:'/service',
      name:'Page5',
      component:Page5,
    },
    {
      path:'/aboutUs',
      name:'Page8',
      component:Page8,
    }
  
  ]
})
