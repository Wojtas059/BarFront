<template>
    <div class="carousel">
        <div class="carousel-item">
            <img :src="slides[0].image" :alt="slides[0].alt">
        </div>
        <div class="carousel-indicators">
            <div class="trust">
                <p>Zaufali nam:</p>
                <div class="logos">
                    <div v-for="(slide, index) in logos" :key="index">
                        <img :src="slide.image" :alt="slide.alt" >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfolioPage',
    components: {
    },
    data() {
        return {
            currentSlide: 0,
            slides: [
                { image: require('@/assets/images/portfolio/Alexey_Pilipenko_0395.jpg'), alt: 'Image 1' },
                // Dodaj więcej slajdów według potrzeb
            ],

            logos: [
                {image: require('@/assets/images/portfolio/logo/vogue.png'), alt: "Vogue"},
                {image: require('@/assets/images/portfolio/logo/tous.png'), alt: "Tous"},
                {image: require('@/assets/images/portfolio/logo/sprandi.png'), alt: "Sprandi"},
                {image: require('@/assets/images/portfolio/logo/Opener-logo.png'), alt: "Open'er Festival"},
                {image: require('@/assets/images/portfolio/logo/jaguar.png'), alt: "Jaguar"},
                {image: require('@/assets/images/portfolio/logo/glenfiddich.png'), alt: "glenfiddich"},
                {image: require('@/assets/images/portfolio/logo/douglas.png'), alt: "Douglas"},
                {image: require('@/assets/images/portfolio/logo/balvenie.png'), alt: "The balvenie"},
            ]
        }
    },
    mounted() {
        window.addEventListener('wheel', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('wheel', this.handleScroll);
    },
    methods: {
        next() {
          this.$router.push('/contact');
        },
        prev() {
            if (this.currentSlide > 0) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.slides.length - 1; // wraca do ostatniego slajdu
            }
        },
        handleScroll(event) {
            if (event.deltaY > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  overflow: hidden;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  letter-spacing: 5px;
}

.carousel-item {
  min-width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-indicators {
  width: 100%;
  height: 200px;
  left: 0;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark-color-background);
  padding: 20px 0;
}

.trust {
  text-align: center;
  /* color: var(--dark-color-font); */
  margin-bottom: 10px;
  margin-top: 20px;
}

.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 20px; */
  /* margin-toheight: autop: 20px; */

}

.logos img {
  max-width: 100%;
  max-height: 50%; /* Maksymalna wysokość logotypu */
   /* Maksymalna szerokość logotypu */
  object-fit: contain;  /*Zachowuje proporcje logotypów */
  object-position: center;
  display: block;
  /* filter: brightness(0) invert(1); Zmienia kolory na biały na ciemnym tle */
}

.carousel-indicators p {
  font-size: 14px;
  margin: 0;
}
</style>