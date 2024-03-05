import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppBlog from './pages/AppBlog.vue';
import SingleProject from './pages/SingleProject.vue';
import AppNotFound from './pages/AppNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/blog/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound,
        },
    ]
});

export { router }