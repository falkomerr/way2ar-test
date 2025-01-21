import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/HomePage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/doctors',
            name: 'doctors',
            component: () => import('@/pages/DoctorsPage.vue'),
        },
        {
            path: '/nurses',
            name: 'nurses',
            component: () => import('@/pages/NursesPage.vue'),
        },
    ],
});

export default router;
