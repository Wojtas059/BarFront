import { defineStore } from 'pinia';

export const useSlideStore = defineStore('slide', {
  state: () => ({
    slideIndex: 0, // Domyślna wartość slajdu
  }),
  actions: {
    setSlideIndex(index) {
      this.slideIndex = index;
    },
  },
});


