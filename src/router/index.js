import Home from '../pages/Home.vue';
import CountryDetail from '../pages/CountryDetail.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/country/:id',
        name: 'CountryDetail',
        component: CountryDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;