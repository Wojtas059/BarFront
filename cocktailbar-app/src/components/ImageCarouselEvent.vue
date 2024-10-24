<template>
  <div :class="{'dark-mode': isDarkMode}" class="carousel" @wheel="handleScroll">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-item" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt">
        <div class="overlay"></div>
        <div class="caption">
          <p class="title" v-if="translations.headers[slide.alt]">{{ translations.headers[slide.alt] + "\n\n" }}</p>
          <p>{{ translations.title[slide.alt][0] }}</p>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <div class="carousel-control prev">
        <button class="carousel-control" @click="prevSlide">❮</button>
      </div>
      <div class="carousel-control next">
        <button class="carousel-control" @click="nextSlide">❯</button>
      </div>
    </div>
    <div class="carousel-indicators">
      <span v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentSlide }" @click="goToSlide(index)"></span>
    </div>
  </div>
</template>


<script>

import { useSlideStore } from '../../store/slideStore';
import { computed } from 'vue';
import translationsData from '@/assets/text_lang/translations.json';
import { useLanguageStore } from '@/theme'; 

export default {
  data() {
    return {
      currentSlide: this.initialSlideIndex,
      slides: [
        { image: require('@/assets/images/offer/OFERTA-EVENTOWA-1.png'), alt: 'Image 1', darkMode: false },
        { image: require('@/assets/images/offer/OFERTA-EVENTOWA-2.png'), alt: 'Image 2', darkMode: false },
        { image: require('@/assets/images/offer/OFERTA-EVENTOWA-3.png'), alt: 'Image 3', darkMode: false },
        { image: require('@/assets/images/offer/OFERTA-EVENTOWA-4.png'), alt: 'Image 4', darkMode: false },
        { image: require('@/assets/images/offer/OFERTA-EVENTOWA-5.png'), alt: 'Image 5', darkMode: false },
        { image: require('@/assets/images/offer/OFERTA-EVENTOWA-6.jpg'), alt: 'Image 6', darkMode: false },

        // Dodaj więcej slajdów według potrzeb
      ]
    }
  },
  setup() {
    const slideStore = useSlideStore();
    const languageStore = useLanguageStore();

    const translations = computed(() => {
      return translationsData[languageStore.currentLanguage]["event_page"];
    });
    return {
      currentLanguage: languageStore.currentLanguage,
      translations,
      initialSlideIndex: slideStore.slideIndex, // Uzyskaj aktualny slideIndex ze store
    };
  },
  computed: {
    isDarkMode() {
      return this.slides[this.currentSlide].darkMode || false;
    }
  },
  methods: {
    nextSlide() {
      if  (this.currentSlide == this.slides.length - 1) {
        // Przejście na nową stronę
        const slideStore = useSlideStore();
        slideStore.setSlideIndex(0);
        this.$router.push('/offer/rent'); // Zakładając, że używasz Vue Router
      } else {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }
    },
    prevSlide() {
      if (this.currentSlide == 0) {
        // Przejście na nową stronę
        const slideStore = useSlideStore();
        slideStore.setSlideIndex(3);
        this.$router.push('/about'); // Zakładając, że używasz Vue Router
      } else {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      }
      // this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    handleScroll(event) {
      const currentTime = new Date().getTime();
      if (currentTime - this.lastScroll < 500) {
        return;
      }
      this.lastScroll = currentTime;
      if (event.deltaY > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }
}
</script>

<style scoped>
.title-text {
  white-space: pre-line;
  letter-spacing: 2px;
  line-height: 2;
}

.overlay {
  background: rgba(0, 0, 0, 0.5); /* Przezroczysta warstwa */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}


.carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  letter-spacing: 5px;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  height: 100vh;
  position: relative;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  position: absolute;
  white-space: pre-line;
  margin-top: 20px;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  text-align: left;
  width: 70%;

}

.dark-mode .caption {
  color: var(--dark-color-background);
}

.caption p {
  font-size: 12pt;
  line-height: 20pt; 
  margin: 0;
}

.caption p.title {
  font-size: 20pt;
}

.carousel-controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}

.carousel-control {
  background: none;
  border: none;
  font-size: 3rem;
  /* Adjust font size as needed */
  color: var(--dark-color-font);
  cursor: pointer;
  pointer-events: all;
}
.dark-mode .carousel-control {
  color: var(--dark-color-background);
}

.carousel-control.prev {
  width: 50%;
}

.carousel-control.prev button {
  display: flex;
  justify-content: flex;
  margin-left: 15px;
  width: 40px;
}

.carousel-control.next {
  display: flex;
  justify-content: flex-end;
  width: 50%;

}

.carousel-control.next button {
  margin-right: 15px;
  width: 40px;
}


.carousel-indicators {

  position: absolute;
  bottom: 30px;
  margin-bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}


.carousel-indicators span {
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 3px solid var(--dark-color-font);
  margin: 0 5px;
  cursor: pointer;
}

.dark-mode .carousel-indicators span {
  border: 4px solid var(--dark-color-background);
}

.carousel-indicators span.active {
  background-color: var(--dark-color-font);
}

.dark-mode .carousel-indicators span.active {
  background-color: var(--dark-color-background);
}

.hero-button {
  letter-spacing: 3px;
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
  width: 40%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-color-font);
  color: var(--dark-color-background);
  padding: 10px 20px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  border: 2px solid transparent;
}

.dark-mode .hero-button {
  background: var(--dark-color-background);
  color: var(--dark-color-font);
}

.hero-button:hover {
  background: var(--dark-color-background);
  color: var(--dark-color-font);
  border: 2px solid var(--dark-color-font);
}

.dark-mode .hero-button:hover {
  background: var(--dark-color-font);
  color: var(--dark-color-background);
  border: 2px solid var(--dark-color-background);
}

@media (max-width: 1300px){
  .caption p{
    font-size: 12px;
  }
  .hero-button {
    font-size: 15px;
  }
}

@media (max-width: 822px) {
  .caption p{
    font-size: 11px;
  }
  .hero-button {
    font-size: 14px;
  }
}
</style>