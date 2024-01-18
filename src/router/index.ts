import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'layout',
        component:()=>import('@/layout/index.vue'),
        meta:{title:'首页'},
        redirect:'/home',
        children: [
          {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/home/homePage.vue')
          },
          {
            path: '/notUser',
            name: 'NotUser',
            component: () => import('@/pages/notUser/notUser.vue')
          },
        ]
    }
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})