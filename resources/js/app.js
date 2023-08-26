import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import {createApp} from 'vue/dist/vue.esm-bundler';
import router from './router';

import TaskIndex from './pages/tasks/index.vue';

createApp({
    components:{
        TaskIndex
    }
}).use(router).mount("#app")
