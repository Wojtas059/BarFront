<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="carousel" @wheel="handleScroll">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-item" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt">
        <div class="caption">
          <p>{{ slide.title[0] }}</p>
          <p>{{ slide.title[1] }}</p>
          <p>{{ slide.title[2] }}</p>
          <router-link to="/sprawdz" class="hero-button">{{ slide.buttonText }}</router-link>
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
      <span v-for="(slide, index) in slides" :key="index" :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"></span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    initialSlideIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentSlide: this.initialSlideIndex,
      slides: [
        { image: require('@/assets/images/home/Home-Page-1.png'), alt: 'Image 1', title: ['OBSŁUGA', 'EVENTÓW', 'BRAND EXPERIENCE'], buttonText: 'SPRAWDŹ', darkMode: false },
        { image: require('@/assets/images/home/Home-Page-2.png'), alt: 'Image 3', title: ['Wynajem sprzętu', 'Gastronomicznego', 'i barów mobilnych'], buttonText: 'SPRAWDŹ', darkMode: true },
        { image: require('@/assets/images/home/Home-Page-3.png'), alt: 'Image 1', title: ['OBSŁUGA przyjęć', 'i imprez', 'okolicznościowych'], buttonText: 'SPRAWDŹ', darkMode: false },
        { image: require('@/assets/images/home/IMG_7653.jpg'), alt: 'Image 4', title: ['Wynajem sprzętu', 'Gastronomicznego', 'i barów mobilnych'], buttonText: 'SPRAWDŹ', darkMode: true },
        // Dodaj więcej slajdów według potrzeb
      ]
    }
  },
  mounted() {
    // Pobranie indeksu slajdu z parametrów trasy
    const index = parseInt(this.$route.params.slideIndex, 10);
    if (!isNaN(index)) {
      this.setSlide(index);
    }
  },
  computed: {
    isDarkMode() {
      return this.slides[this.currentSlide].darkMode || false;
    }
  },
  methods: {
    nextSlide() {
      console.log(this.currentSlide);

      if (this.currentSlide == 3) {
        // Przejście na nową stronę
        this.$router.push('/about'); // Zakładając, że używasz Vue Router
      } else {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }

      // if this.currentSlide > 3 
      // this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    handleScroll(event) {
      console.log(event);
      const currentTime = new Date().getTime();
      if (currentTime - this.lastScroll < 500) {
        console.log('Scroll too fast');
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
  margin-top: 120px;
  width: auto;
  height: auto;
  object-fit: cover;
}

.caption {
  position: absolute;
  top: 70%;
  left: 70%;
  transform: translate(-50%, -50%);
  text-align: left;
}

.dark-mode .caption {
  color: var(--dark-color-background);
}

.caption p {
  font-size: 30px;
  margin: 0;
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
  width: 160px;
  height: 60px;
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
  /* background: var(--dark-color-background); */
  background-color: rgba(54, 52, 52, 0.5);
  color: var(--dark-color-font);
  font-weight: bold;
  /* color: var(--dark-color-background); */
  border: 2px solid var(--dark-color-font);
}

.dark-mode .hero-button:hover {
  /* background: var(--dark-color-font); */
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.621);
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