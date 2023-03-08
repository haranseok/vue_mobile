import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import("@/pages/Home.vue"),
        children: [
        ]
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})