<template>
  <div :class="{ 'dark-mode': isDarkMode }">
  <NavBar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />

  <HomePage />
<!-- reszta twojego kodu -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'

export default {
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  },

  components: {
    NavBar,
    HomePage
  }

};
</script>

<style>
  .dark-mode {
    background-color: rgb(38, 48, 61);
    color: #fff;
  }

  body {
    transition: background-color 0.3s, color 0.3s;
  }
</style>
