<template>
  <div>
    <NavBar v-if="$route.path !== '/shop'" />
    <NavBarShop v-if="$route.path == '/shop'" />
    <router-view v-slot="{ Component}" :some-prop="someValue" >
      <component :is="Component" />
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
      isDarkMode: true
    };
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