<template>
  <div>
    <NavBar v-if="$route.path !== '/rent' && $route.path !== '/price'" />
    <NavBarShop @categorySelected="handleCategorySelected" v-if="$route.path == '/rent' || $route.path == '/price'" />
    <router-view v-slot="{ Component}" :some-prop="someValue" >
      <component v-bind="{ selectedCategory }" :is="Component" />
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NavBarShop from './components/NavBarShop.vue';
import ShopPage from './components/ShopPage.vue';

export default {
  components: {
    NavBar,
    NavBarShop,
    ShopPage
  },
  data() {
    return {
      isDarkMode: true,
      selectedCategory: { name: 'Home', link: 'home', desc: 'SZKŁO UNIWERSAL - SZKŁO TRANSPORTOWANE JEST W KOSZACH W SYSTEMIE CAMBRO - WYMIARY KOSZA TO 50 × 50 CM. SZKŁO ZAMAWIANE JEST NA PEŁNE KOSZE, DLA KAŻDEGO RODZAJU MAMY PODANĄ ILOŚĆ ZNAJDUJĄCĄ SIĘ W JEDNYM KOSZU. NA ŻYCZENIE MOŻEMY WYPOŻYCZYĆ RÓWNIEŻ WÓZKI ORAZ POKRYWY DO PRZECHOWYWANIA SZKŁA, ZAPEWNIAJĄCE JEGO CZYSTOŚĆ' },
    };
  },
  methods: {
    handleCategorySelected(category) {
      console.log(category);
      this.selectedCategory = category;
    }
  }

};
</script>

<style>
  /* .dark-mode { */
    /* background-color: rgb(25, 37, 53); */
    /* background-image: url('@/assets/kieliszki.png');
    color: var(--dark-color-font)
  } */

  body {
    margin: 0;
    transition: background-color 0.3s, color 0.3s;
  }
</style>