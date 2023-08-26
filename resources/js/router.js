import { createRouter, createWebHistory } from 'vue-router';

import TaskIndex from './pages/tasks/index.vue';
import TaskCreate from './pages/tasks/create.vue';
import TaskEdit from './pages/tasks/edit.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'tasks.index',
        component: TaskIndex
    },
    {
        path: '/tasks/create',
        name: 'tasks.create',
        component: TaskCreate
    },
    {
        path: '/tasks/:id/edit',
        name: 'tasks.edit',
        component: TaskEdit,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})
