import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
import AboutPage from '../components/AboutPage.vue';
import OfferEventPage from '../components/OfferEventPage.vue';
import OfferRentPage from '../components/OfferRentPage.vue';
import PortfolioPage from '../components/PortfolioPage.vue';
import ShopPage from '@/components/ShopPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage, props: true },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/offer/event', name: 'EventPage', component: OfferEventPage },
  { path: '/offer/rent', name: 'RentPage', component: OfferRentPage },
  { path: '/portfolio', name: 'PortfolioPage', component: PortfolioPage },
  { path: '/rent', name: 'ShoPage', component: ShopPage}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
