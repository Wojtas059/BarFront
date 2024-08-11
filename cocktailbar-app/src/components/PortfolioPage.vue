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
                {image: require('@/assets/images/portfolio/glenfiddich.png'), alt: "glenfiddich"},
                {image: require('@/assets/images/portfolio/Vogue-logo.png'), alt: "Vouge"},
                {image: require('@/assets/images/portfolio/logo-douglas.png'), alt: "Douglas"},
                // {image: require(), alt: "Jaguar"},
                // {image: require(), alt: "The balvenie"},
                // {image: require(), alt: "Tous"},
                // {image: require(), alt: "Sprandi"},
                // {image: require(), alt: "Open'er Festival"},
            ]
        }
    },
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
  /* margin-top: 20px; */
  gap: 30px;
}

.logos img {
  max-height: 100px; /* Maksymalna wysokość logotypu */
  max-width: 150px; /* Maksymalna szerokość logotypu */
  object-fit: contain; /* Zachowuje proporcje logotypów */
  object-position: center;
  display: block;
  filter: brightness(0) invert(1); /* Zmienia kolory na biały na ciemnym tle */
}

.carousel-indicators p {
  font-size: 14px;
  margin: 0;
}
</style>