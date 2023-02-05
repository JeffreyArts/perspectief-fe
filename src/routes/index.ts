import { createWebHistory, createRouter } from "vue-router"
import Home from "./home.vue"
import "./../services/css-mousemove.ts"
import "./../services/gsap-blur.ts"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

