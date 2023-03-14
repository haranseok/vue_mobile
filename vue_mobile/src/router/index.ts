import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/load'
    },
    {
        path: '/home',
        component: () => import("@/pages/Home.vue"),
    },
    {
        path: '/load',
        component: () => import('@/components/layoutView/LoadLayout.vue')
    },
    {
        path: '/nav',
        component: () => import('@/components/item/Nav.vue')
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})