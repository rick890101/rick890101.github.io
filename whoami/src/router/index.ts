import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/home.vue")
    },
    {
        path: "/name",
        name: "name",
        component: () => import("../views/chuantsu.vue")
    },
    {
        path: "/:catchAll(.*)",
        name: "404",
        component: () => import("../views/404-nofound.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router