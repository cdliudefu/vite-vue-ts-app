import {createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router';

const routes:Array<RouteRecordRaw> = [
    {
       path: '/',
       name: 'home',
       meta: {
         title: '首页',
         keepAlive: true
       },
       component: ()=>import('../views/home/index.vue')
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'登录',
        keepAlive:true
      },
      component:()=> import('../views/login/index.vue')
    }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router