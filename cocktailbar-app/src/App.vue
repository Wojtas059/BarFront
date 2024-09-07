<template>
  <div>
    <!-- Główna nawigacja wyświetlana, gdy stopka nie jest wyświetlana -->
    <NavBar v-if="notShouldShowFooter" />
    
    <!-- Nawigacja sklepu wyświetlana, gdy stopka jest wyświetlana -->
    <NavBarShop @categorySelected="handleCategorySelected" v-if="shouldShowFooter" />

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
      selectedCategory: { name: 'Home', link: 'home', desc: 'SZKŁO UNIWERSAL...' },
    };
  },
  computed: {
    shouldShowFooter() {
      // Stopka wyświetla się, gdy ścieżka zaczyna się od '/rent' lub jest równa '/price'
      return this.$route.path.startsWith('/rent') || this.$route.path === '/price';
    },
    notShouldShowFooter() {
      // Główna nawigacja wyświetla się, gdy ścieżka nie zaczyna się od '/rent' i nie jest równa '/price'
      return !this.shouldShowFooter;
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