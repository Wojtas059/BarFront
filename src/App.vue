<template>
  <div>
    <NavBar />
    <router-view  v-slot="{ Component}" >
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      isDarkMode: true
    };
  },
  methods: {

  },

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
