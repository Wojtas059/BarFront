<template>
  <div :class="{'dark-mode': isDarkMode}" class="carousel" @wheel="handleScroll">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-item" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt">
        <div class="overlay"></div>
        <div class="caption">
          <p>{{ slide.title[0] }}</p> <br>
          <p>{{ slide.title[1] }}</p> <br>
          <p>{{ slide.title[2] }}</p>
          <router-link v-if="slide.buttonText" :to="slide.buttonText" class="hero-button">{{ slide.buttonText }}</router-link>
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
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        { image: require('@/assets/images/about/_T5A0776.jpg'), alt: 'Image 1', 
        title: [  'WITAJ W ŚWIECIE COCKTAIL SERVICE, GDZIE KAŻDY DRINK TO DZIEŁO SZTUKI, A KAŻDE WYDARZENIE STAJE SIĘ NIEZAPOMNIANYM PRZEŻYCIEM!', 'JESTEŚMY PASJONATAMI DOSKONAŁEJ PREZENTACJI I JAKOŚCI SERWISU, SPECJALIZUJĄC SIĘ W DOSTARCZANIU TYLKO NAJLEPSZEGO SPRZĘTU GASTRONOMICZNEGO. \nOD MOBILNYCH BARÓW, PRZEZ ELEGANCKIE SZKŁO, PO WYDAJNE GRANITORYI ZMYWARKI - MAMY WSZYSTKO, CZEGO POTRZEBUJE NOWOCZESNY BAR, ABY ZROBIĆ WRAŻENIE I ZASPOKOIĆ GOŚCI SPRAGNIONYCH NAJINTENSYWNIEJSZYCH DOZNAŃ.'], buttonText: null, darkMode: false },
        { image: require('@/assets/images/about/Glenfiddich Dinner 114.jpg'), alt: 'Image 3', title: ['OD 15 LAT ZAJMUJEMY SIĘ OBSŁUGĄ BARMAŃSKĄ WYDARZEŃ WSZELKIEGO FORMATU. DZIĘKI DOŚWIADCZENIU ZDOBYTEMU NA SETKACH ZREALIZOWANYCH EVENTÓW, ORGANIZUJEMY WSZYSTKO W TAKI SPOSÓB, ABY CAŁOŚĆ IMPREZY PRZEBIEGAŁA BEZPROBLEMOWO.',' WSPÓŁPRACUJEMY Z BARMANKAMI I BARMANAMI Z NAJLEPSZYCH LOKALI W CAŁEJ POLSCE.',' SKUPIAMY SIĘ NA WPROWADZENIU NAJNOWSZYCH TRENDÓW Z BRANŻY ALKOHOLOWEJ ORAZ SEGMENTU NOLO DO BRANŻY EVENTOWEJ. CHCEMY ZAPEWNIĆ MOŻLIWIE NAJLEPSZĄ JAKOŚĆ KOKTAJLI I OBSŁUGI, CO PRZEKŁADA SIĘ NA POZYTYWNE WRAŻENIA ZWIĄZANE Z WYDARZENIAMI, A W REZULTACIE MARKAMI KLIENTÓW.'], buttonText: null, darkMode: false },
        { image: require('@/assets/images/about/IMG_1309_4x5.jpg'), alt: 'Image 1', title: ['OPRÓCZ USŁUG BARMAŃSKICH WYPOŻYCZAMY BARY MOBILNE ORAZ POZOSTAŁY SPRZĘT I DZIELI MY SIĘ DOŚWIADCZENIEM BUDOWANYM PRZEZ LATA'], buttonText: 'Zobacz całą ofertę', darkMode: false },
        // Dodaj więcej slajdów według potrzeb
      ]
    }
  },
  computed: {
    isDarkMode() {
      return this.slides[this.currentSlide].darkMode || false;
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      if (this.currentSlide == 0) {
        // Przejście na nową stronę
        this.$router.push({ name: 'HomePage', params: { slideIndex: 3 } }); // Zakładając, że używasz Vue Router
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
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  text-align: left;
  width: 60%;

}

.dark-mode .caption {
  color: var(--dark-color-background);
}

.caption p {
  font-size: 18px;
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
  text-align: center;
  font-size: 20px;
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


</style>