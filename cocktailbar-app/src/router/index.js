import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ContactPage from '../components/ContactPage.vue';
import AboutPage from '../components/AboutPage.vue';
import OfferEventPage from '../components/OfferEventPage.vue';
import OfferRentPage from '../components/OfferRentPage.vue';
import PortfolioPage from '../components/PortfolioPage.vue';
import ShopPage from '@/components/ShopPage.vue';
import PricePage from '@/components/PricePage.vue';
import ProductDetailPage from '@/components/ProductDetailPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
  { path: '/about', name: 'AboutPage', component: AboutPage, props: true  },
  { path: '/offer/event', name: 'EventPage', component: OfferEventPage },
  { path: '/offer/rent', name: 'RentPage', component: OfferRentPage },
  { path: '/portfolio', name: 'PortfolioPage', component: PortfolioPage },
  { path: '/rent', name: 'ShoPage', component: ShopPage, },
  { path: '/price', name: 'PricePage', component: PricePage, },
  { path: '/rent/product/:id', name: 'ProductDetailPage', component: ProductDetailPage, props: true },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
