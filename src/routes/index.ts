import { createWebHistory, createRouter } from "vue-router"
import Home from "@/routes/home.vue"
import "@/services/css-mousemove.ts"
import "@/services/gsap-blur.ts"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/pagina/:id",
        name: "Pagina",
        component: Home,
    },
    {
        path: "/pagina/",
        redirect: "/",
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

