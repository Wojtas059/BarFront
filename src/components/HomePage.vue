<template>
  <div class="hero-section">
    <div class="overlay">
      <div class="hero-content">
        <p>OBSŁUG</p>
        <p>EVENTÓW</p>
        <p>BRAND EXPERIENCE </p>
        <router-link to="/sprawdz" class="hero-button">SPRAWDŹ</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
}

.hero-section {
  background: url('@/assets/@Alexey_Pilipenko 0153.JPG') no-repeat center center/cover; /* Upewnij się, że ścieżka jest poprawna */
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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

.hero-content {
  text-align: left;
  position: absolute;
  right: 10%;
}

.hero-content p {
  font-size: 30px;
  font-weight: bold;
  
}

.hero-button {
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
  width: 130%;
  height: 65px;
  display: inline-block;
  background: var(--dark-color-font);
  color: var(--dark-color-background);
  padding: 10px 20px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  border: 2px solid transparent;
}

.hero-button:hover {
  background: black;
  color: var(--dark-color-font);
  border-color:var(--dark-color-font);
}
</style>