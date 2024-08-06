import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
// import AboutPage from '../components/AboutPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
  // { path: '/about', name: 'AboutPage', component: AboutPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
