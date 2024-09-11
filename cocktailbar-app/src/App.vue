<template>
  <div>
    <!-- Główna nawigacja wyświetlana, gdy stopka nie jest wyświetlana -->
    <NavBar v-if="notShouldShowNavBar" />
    
    <!-- Nawigacja sklepu wyświetlana, gdy stopka jest wyświetlana -->
    <NavBarShop @categorySelected="handleCategorySelected" v-if="shouldShowNavBarShop" />

    <div class="content">
      <router-view v-slot="{ Component }" :some-prop="someValue">
        <component v-bind="{ selectedCategory }" :is="Component" />
      </router-view>
    </div>

    <!-- Stopka wyświetlana tylko na wybranych stronach -->
    <AppFooter v-if="shouldShowFooter" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import NavBarShop from './components/NavBarShop.vue';
import AppFooter from './components/FootBar.vue';

export default {
  components: {
    NavBar,
    NavBarShop,
    AppFooter
  },
  data() {
    return {
      selectedCategory: { name: 'Home', link: 'home', desc: 'ZKŁO UNIWERSAL - SZKŁO TRANSPORTOWANE JEST W KOSZACH W SYSTEMIE CAMBRO - WYMIARY KOSZA TO 50 × 50 CM. SZKŁO ZAMAWIANE JEST NA PEŁNE KOSZE, DLA KAŻDEGO RODZAJU MAMY PODANĄ ILOŚĆ ZNAJDUJĄCĄ SIĘ W JEDNYM KOSZU. NA ŻYCZENIE MOŻEMY WYPOŻYCZYĆ RÓWNIEŻ WÓZKI ORAZ POKRYWY DO PRZECHOWYWANIA SZKŁA, ZAPEWNIAJĄCE JEGO CZYSTOŚĆ.' },
    };
  },
  computed: {
    shouldShowFooter() {
      // Stopka wyświetla się, gdy ścieżka zaczyna się od '/rent' lub jest równa '/price'
      return this.$route.path.startsWith('/rent') || this.$route.path === '/price' || this.$route.path === '/contact';
    },
    shouldShowNavBarShop() {
      // Stopka wyświetla się, gdy ścieżka zaczyna się od '/rent' lub jest równa '/price'
      return this.$route.path.startsWith('/rent') || this.$route.path === '/price';
    },
    notShouldShowNavBar() {
      // Główna nawigacja wyświetla się, gdy ścieżka nie zaczyna się od '/rent' i nie jest równa '/price'
      return !this.shouldShowNavBarShop;
    }
  },
  methods: {
    handleCategorySelected(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  transition: background-color 0.3s, color 0.3s;
}

.content {
  flex: 1;
}
</style>