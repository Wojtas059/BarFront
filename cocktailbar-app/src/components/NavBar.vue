<template>
  <nav class="navbar" :class="{ 'dark-mode': isDarkMode }">
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

    
    <ul class="navbar-list" :class="{ active: isOpen || isHovered }" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
      <li v-for="(item, index) in menuItems" :key="index" @mouseover="handleSubmenuMouseOver(index)" @mouseleave="handleSubmenuMouseLeave">
        <router-link :to="item.link" exact-active-class="active">{{ item.name }}</router-link>
        <!-- Submenu -->
        <ul v-if="item.subItems" class="dropdown-menu" :class="{ active: isSubmenuOpen === index || isMobileMenu }">
          <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
            <router-link :to="subItem.link">{{ subItem.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="vertical-line"></div>
    <div class="language-select">
      <ul class="nav-menu">
        <li>
          <router-link to="" exact-active-class="active">PL</router-link>
          <router-link to="" exact-active-class="active">EN</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isHovered: false,
      isSubmenuOpen: null,
      hoverTimeout: null,
      isDarkMode: true,
      isMobile: window.innerWidth <= 1269,
      menuItems: [
        { name: 'Home', link: '/' },
        { name: 'O Nas', link: '/about' },
        { name: 'Oferta \u25BC', link: '/offer/event', subItems: [
          { name: 'Oferta wypożyczalni', link: '/offer/rent' },
          { name: 'Oferta eventowa', link: '/offer/event' }
        ]},
        { name: 'wypożyczalnia', link: '/rent' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Kontakt', link: '/contact' },
      ],
    };
  },
  computed: {
    logoSrc() {
      return require('@/assets/icons/Cocktail-Service-logo-RGB-WHITE.png');
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleMouseOver() {
      clearTimeout(this.hoverTimeout);
      this.isOpen = true;
    },
    handleMouseLeave() {
      this.hoverTimeout = setTimeout(() => {
        this.isOpen = false;
      }, 300);
    },
    handleSubmenuMouseOver(index) {
      this.isSubmenuOpen = index;
    },
    handleSubmenuMouseLeave() {
      this.isSubmenuOpen = null;
    },
    handleClickOutside(event) {
      if (this.isOpen && !this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 1269;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      localStorage.setItem('isDarkMode', this.isDarkMode);
    },
  },
  mounted() {
    window.addEventListener('resize', this.checkIsMobile);
    this.checkIsMobile();
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {  // Zmienione z beforeDestroy
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.navbar {
  letter-spacing: 3px;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: var(--light-color-background);
  transition: background-color 0.3s ease, color 0.3s ease;
  height: 175px;
}

.navbar.dark-mode {
  background-color: var(--dark-color-background);
}

.navbar-logo {
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
  justify-content: flex-end;
  flex-grow: 1;
  margin: 0;
  margin-right: 25px;
  padding: 0;
}


.navbar-list.active {
  max-height: 200px;
  /* Dostosuj w zależności od liczby elementów menu */
  opacity: 1;
  visibility: visible;
}

.navbar-list li {
  position: relative;
}

.navbar-list li a {
  display: block;
  color: var(--light-color-font);
  padding: 20px 20px;
  /* padding: 5px 5px; */
  /* margin: 20px 20px; */
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 2px solid transparent;
}

.dark-mode .navbar-list li a {
  color: var(--dark-color-font);
}

.navbar-list li a:hover {
  border-bottom: 2px solid var(--dark-color-font) 
}

.navbar-list li .active {
  border-bottom: 2px solid var(--dark-color-font);
  /* Widoczne dolne obramowanie */
  color: var(--dark-color-font);
  /* Możesz także zmienić kolor tekstu, jeśli chcesz */
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
  background-color: var(--dark-color-background);
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


.nav-menu {
  display: flex;
  /* Ustawia elementy w poziomej linii */
  list-style: none;
  padding: 0;
  margin: 0;
}

.language-select {
  display: flex;
  /* Ustawia flexbox na kontenerze */
  justify-content: center;
  /* Centruje zawartość poziomo */
  align-items: center;
  /* Centruje zawartość pionowo, jeśli kontener ma większą wysokość */
  height: auto;
  width: auto;
  color: var(--dark-color-font);
  /* border-left: 1px solid var(--dark-color-font); */
  margin-right: 5px;
}

.language-select ul {
  margin: auto;
  margin-left: 25px;
  margin-right: 25px;
}

.language-select li {
  /* margin-top: 48px; */

  display: flex;
  /* Ustawia elementy wewnątrz listy poziomo */
}


.language-select li a {
  display: block;
  color: var(--light-color-font);
  padding: 20px 20px;
  /* Zwiększenie paddingu dla większego obszaru podświetlenia */
  text-decoration: none;
  transition: color 0.3s ease;
  /* border-bottom:  0.3s ease transparent; */
  border-bottom: 2px solid transparent;
}

.language-select a:hover {
  border-bottom: 2px solid var(--dark-color-font);
  /* Widoczne dolne obramowanie */
}

.vertical-line {
  width: 1px;
  height: 160px;
  background-color: var(--dark-color-font);
}


.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%; /* To ensure the dropdown appears below the menu item */
  left: 0; /* Aligns dropdown with the left side of the menu item */
  background-color: var(--light-color-background);
  /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); */
  z-index: 1000;
  min-width: 180px;
  padding: 10px 0;
  list-style: none;
}

.dropdown-menu li {
  padding: 8px 16px;
  width: 300px;
}

.dropdown-menu li a {
  color: var(--dark-color-font);
  text-decoration: none;
  font-size: 10px;
}

.navbar-list li  .dropdown-menu.active {
  display: block;
  border: none;
}

.dark-mode .dropdown-menu {
  background-color: var(--dark-color-background);
}

/* @media (max-width: 700px) {
  .navbar {
    height: 40px;
  }
} */

@media (max-width: 1269px) {
  .navbar {
    height: 80px;
  }

  .navbar-logo img {
    height: 130px;
    width: auto;
    max-width: 100%;
  }

  .navbar-list {
    flex-direction: column;
    position: absolute;
    top: 340px; /* Zmiana na 130px, by menu było pod paskiem nawigacyjnym */
    left: 0;
    width: 100%;
    max-height: none; /* Upewnij się, że max-height nie ogranicza wysokości */
    height: 100%; /* Ustawienie wysokości na auto */
    z-index: 1;
    opacity: 1;
    visibility: hidden;
    padding: 0;
    margin-top: 8px;
  }

  .navbar-list li a {
    color: var(--dark-color-font);
    padding: 16px; /* Upewnienie się, że padding jest wystarczający */
    text-decoration: none;
    margin: 0;
    width: 100%; /* Ustawienie szerokości na 100%, by elementy zajmowały całą szerokość */
  }

  .navbar-list li a:hover {
    background-color: #b1afaf;
    color: #000;
  }

  .navbar-list.active {
    opacity: 1;
    /* background-color: var(--dark-color-background); */
    visibility: visible;
    height: auto; /* Ustawienie wysokości automatycznej, by menu się rozwijało w zależności od liczby elementów */
  }
  .navbar-list li a {
    background-color: var(--dark-color-background);
    /* border-bottom: 1px solid var(--dark-color-font); */
  }
  .navbar-toggle {
    display: flex;
    right: 50px;
  }
  .language-select, .vertical-line{
    visibility: hidden;
  }


  .navbar-list .dropdown-menu {
    display: block;
    position: static;
    background-color: var(--dark-color-background);
    padding: 0;
    border: none;
  }

  .dropdown-menu li {
    width: 100%;
    padding: 8px 0;
  }

  .dropdown-menu li a {
    padding-left: 20px;
    background-color: var(--dark-color-background);
  }

  .navbar-list li .dropdown-menu.active {
    display: block;
  }
}



@media (min-width: 1270px) {
  .navbar-list {
    max-height: none;
    opacity: 1;
    visibility: visible;
  } 
  .navbar-list .dropdown-menu {
    display: none;
  }

  .navbar-list li .dropdown-menu.active {
    display: block;
    position: absolute;
    top: 100%; /* Wyświetla submenu poniżej */
    left: 0;
  }
}
</style>