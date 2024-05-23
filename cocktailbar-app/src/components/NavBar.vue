<template>
  <nav class="navbar" :class="{'dark-mode': isDarkMode }">
    <div class="navbar-logo" v-if="!isMobile">
      <a href="/">
        <img :src="logoSrc" alt="Logo" />
      </a>
    </div>

    <div class="navbar-toggle" @click="toggleMenu" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul class="navbar-list" v-click-outside="closeMenu" :class="{ active: isOpen || isHovered }" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
      <li v-for="(item, index) in menuItems" :key="index">
        <a :href="item.link">{{ item.name }}</a>
      </li>
    </ul>

    <button @click="toggleDarkMode" class="dark-mode-toggle dark-mode-logo">
      <img :src="iconSrc" class="mode-icon" :alt="isDarkMode ? 'Light Mode' : 'Dark Mode'" />
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isHovered: false,
      isDarkMode: false,
      isMobile: false,
      menuItems: [
        { name: 'Home', link: '#' },
        { name: 'Oferta', link: '#' },
        { name: 'Kontakt', link: '#' },
      ],
    };
  },
  computed: {
    logoSrc() {
      return this.isDarkMode
        ? require('@/assets/Cocktail-Service-logo-RGB-POZ-WHITE.png')
        : require('@/assets/Cocktail-Service-logo-RGB-POZ-BLACK.png');
    },
    iconSrc() {
      return this.isDarkMode
        ? require('@/assets/light-mode-logo.png')
        : require('@/assets/dark_mode_logo.png');
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
      console.log('Menu is closing'); // Debugowanie
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: rgb(241, 240, 235);
  transition: background-color 0.3s ease, color 0.3s ease;
  border-bottom: 5px solid rgb(30, 37, 46);
}

.navbar.dark-mode {
  background-color: rgb(30, 37, 46);
  border-bottom: 5px solid rgb(244, 242, 235);
}

.navbar-logo {
  margin-right: auto;
}

/* .navbar-logo a {
  display: inline-block;
} */

.navbar-logo img {
  height: 50px;
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
  flex: 1;
  transition: max-height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  margin: 0;
  padding: 0;
}

.navbar-list.active {
  max-height: 200px; /* Dostosuj w zależności od liczby elementów menu */
  opacity: 1;
  visibility: visible;
}

.navbar-list li a {
  display: block; 
  color: rgb(30, 37, 46);
  padding: 22px 15px; /* Zwiększenie paddingu dla większego obszaru podświetlenia */
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.dark-mode .navbar-list li a {
  color: rgb(244, 242, 235);
}

.navbar-list li a:hover {
  background-color: #b1afaf; /* Zwiększony obszar podświetlenia */
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
}

.navbar-toggle span {
  height: 3px;
  width: 25px;
  background-color: rgb(30, 37, 46);
  margin: 4px 0;
  border-radius: 1px;
}

.dark-mode .navbar-toggle span {
  background-color: rgb(244, 242, 235);
}

.dark-mode-toggle {
  background-color: transparent;
  border: 1px solid rgb(30, 37, 46);
  color: rgb(30, 37, 46);
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.dark-mode .dark-mode-toggle {
  border-color: rgb(244, 242, 235);
  color: rgb(244, 242, 235);
}

.dark-mode-toggle:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .navbar-logo {
    display: none;
  }

  .navbar-list {
    flex-direction: column;
    position: absolute;
    top: 72px;
    left: 0;
    width: 97.5%;
    margin-left: 8px;
    background-color: rgb(241, 240, 235);
    z-index: 1;
    opacity: 0; /* Ukrywanie menu domyślnie */
    visibility: hidden; /* Ukrywanie menu domyślnie */
    padding: 0; /* Resetowanie paddingu */
    margin-top: 8px;
    margin-left: 8px; /* Resetowanie marginesu */
  }

  .dark-mode .navbar-list {
    background-color: rgb(30, 37, 46);
  }

  .navbar-list li a {
    color: rgb(30, 37, 46);
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
