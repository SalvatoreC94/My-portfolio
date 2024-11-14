import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
// import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

const routes = [
    { path: '/', component: Home },
    // { path: '/skills', component: Skills }, 
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
