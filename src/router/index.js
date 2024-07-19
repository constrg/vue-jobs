import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import JobsView from '../views/JobsView.vue';
import JobView from '../views/JobView.vue';
import AddJobView from '../views/AddJobView.vue'
import EditJobView from '../views/EditJobView.vue'
import NotFound from '../views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView,
        },
        {
            path: '/jobs/add_job',
            name: 'add_job',
            component: AddJobView  
        },
        {
            path: '/jobs/edit_job/:id',
            name: 'edit_job',
            component: EditJobView  
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ]
});


export default router;