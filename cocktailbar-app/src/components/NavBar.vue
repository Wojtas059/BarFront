<template>
  <nav class="navbar" :class="{'dark-mode': isDarkMode }">
    <div class="navbar-logo">
      <router-link to="/">
        <img :src="logoSrc" alt="Logo" />
      </router-link>
    </div>

    <div class="navbar-toggle" @click="toggleMenu" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul class="navbar-list" v-click-outside="closeMenu" :class="{ active: isOpen || isHovered }" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="item.link" exact-active-class="active">{{item.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isHovered: false,
      isDarkMode: true,
      isMobile: false,
      menuItems: [
        { name: 'Home', link: '/' },
        { name: 'O Nas', link: '/about' },
        { name: 'Oferta', link: '/offer' },
        { name: 'Sklep', link: '/shop' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Kontakt', link: '/contact' },
      ],
    };
  },
  computed: {
    logoSrc() {
      return require('@/assets/Cocktail-Service-logo-RGB-WHITE.png');
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      localStorage.setItem('isDarkMode', this.isDarkMode);
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
  mounted() {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    if (savedDarkMode) {
      this.isDarkMode = JSON.parse(savedDarkMode);
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
};
</script>

<style scoped>
.navbar {
  letter-spacing: 3px;
  font-size: 14px;
  background: var(--dark-color-background);
  position: fixed; /* Fix the navbar to the top */
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  padding: 15px;
  background-color: var(--light-color-background);
  transition: background-color 0.3s ease, color 0.3s ease;
  height: 175px;
}

.navbar.dark-mode {
  background-color:  var(--dark-color-background);
}

.navbar-logo {
  /* margin-right: auto; */
  position: absolute;
  left: 10px;
}

.navbar-logo router-link {
  display: inline-block;
}

.navbar-logo img {
  height: 180px;
  width: auto;
  max-width: 100%;
}

.dark-mode-logo img {
  height: 20px;
  width: auto;
  max-width: 100%;
}

.navbar-list {
  display: flex;
  list-style: none;
  justify-content: center;
  flex-grow: 1;
  transition: max-height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  margin: 0;
  margin-left: 25px;
  padding: 0;
}

.navbar-list.active {
  max-height: 200px; /* Dostosuj w zależności od liczby elementów menu */
  opacity: 1;
  visibility: visible;
}


.navbar-list li a {
  display: block; 
  color: var(--light-color-font);
  padding: 20px 15px; /* Zwiększenie paddingu dla większego obszaru podświetlenia */
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 2px solid transparent;
}

.dark-mode .navbar-list li a {
  color: var(--dark-color-font);
}

.navbar-list li a:hover, .navbar-list li .active {
  text-decoration: none;
  border-bottom: 2px solid var(--dark-color-font);
}

.navbar-list li .active {
  border-bottom: 2px solid var(--dark-color-font); /* Widoczne dolne obramowanie */
  color: var(--dark-color-font); /* Możesz także zmienić kolor tekstu, jeśli chcesz */
}


.navbar-toggle {
  position: absolute;
  right: 40px;
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
}

.navbar-toggle span {
  height: 3px;
  width: 25px;
  background-color:  var(--dark-color-background);
  margin: 4px 0;
  border-radius: 1px;
}

.dark-mode .navbar-toggle span {
  background-color: var(--dark-color-font);
}
.navbar button {
  margin-right: 50px;
}

.dark-mode-toggle {
  background-color: transparent;
  border: 1px solid #0C1826;
  color: #0C1826;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}



.dark-mode .dark-mode-toggle {
  border-color: var(--dark-color-font);
  color: var(--dark-color-font);
}

.dark-mode-toggle:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .navbar {
    height: 40px;
  }

  /* .navbar-logo {
    display: none;
  } */

  .navbar-list {
    flex-direction: column;
    position: absolute;
    top: 63px;
    left: 0;
    width: 100%;
    background-color: var(--light-color-background);
    z-index: 1;
    opacity: 0; /* Ukrywanie menu domyślnie */
    visibility: hidden; /* Ukrywanie menu domyślnie */
    padding: 0; /* Resetowanie paddingu */
    margin-top: 8px;
    margin-left: 0px; /* Resetowanie marginesu */
  }

  .dark-mode .navbar-list {
    background-color:  var(--dark-color-background);
  }

  .navbar-list li a {
    color: var(--light-color-font);
    display: block;
    padding: 8px; /* Zwiększenie paddingu dla większego obszaru podświetlenia */
    /* height: 1270px; */
    text-decoration: none;
    margin: 8px;
  }

  .navbar-list li a:hover {
    padding: 8px 8px;
    background-color: #b1afaf; /* Zwiększony obszar podświetlenia */
    color: #000;
    margin: 8px;
  }

  .navbar-list.active {
    /* height: 60px; */
    width: 97.5%;
    opacity: 1;
    visibility: visible;
  }

  .navbar-toggle {
    display: flex;
  }
}

@media (min-width: 769px) {
  .navbar-list {
    max-height: none;
    opacity: 1;
    visibility: visible;
  }
}
</style>