import { createRouter, createWebHistory } from 'vue-router'
import BuscadorPelis from '@/components/cercadorPelis.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/pelis-1',
            component: BuscadorPelis
        }
    ]
})

export default router