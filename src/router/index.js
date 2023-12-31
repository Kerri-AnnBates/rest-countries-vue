import Home from '../pages/Home.vue';
import CountryDetail from '../pages/CountryDetail.vue';
import NotFound from '../pages/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/country/:name',
        name: 'CountryDetail',
        component: CountryDetail
    },
    {
        // Add fallback route for a custom 404 page
        path: '/:pathMatch(.*)*',
        name: NotFound,
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;