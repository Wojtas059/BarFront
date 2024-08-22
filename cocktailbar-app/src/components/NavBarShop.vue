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
      <!-- Przycisk z lupą -->
      <button class="search-button" @click="toggleSearch">
        <i class="pi pi-search"></i>
      </button>
      <!-- Pole do wpisywania tekstu wyszukiwania -->
      <li v-if="isSearchOpen" class="search-input">
        <input type="text" placeholder="Szukaj..." />
      </li>
      <li v-for="(item, index) in menuItems" :key="index" @mouseover="handleSubmenuMouseOver(index)" @mouseleave="handleSubmenuMouseLeave">
        <router-link :to="item.link" exact-active-class="active">{{ item.name }}</router-link>
        <!-- Submenu -->
        <ul v-if="item.subItems" class="dropdown-menu" :class="{ active: isSubmenuOpen === index }">
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
import 'primeicons/primeicons.css';

export default {
  data() {
    return {
      isOpen: false,
      isHovered: false,
      isSubmenuOpen: null,
      hoverTimeout: null,
      isDarkMode: true,
      isSearchOpen: false,  // Zmienna do zarządzania polem wyszukiwania
      menuItems: [
        { name: 'Koszyk', link: '/cart' },
      ],
    };
  },
  computed: {
    logoSrc() {
      return require('@/assets/logs/Cocktail-Service-logo-RGB-WHITE.png');
    },
  },
  methods: {
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
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
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
      localStorage.setItem('isDarkMode', this.isDarkMode);
    },
  }
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

.search-button {
  background: none;
  border: none;
  color: var(--dark-color-font);
  font-size: 24px;
  cursor: pointer;
  margin-right: 20px;
}

.search-input {
  margin-top: 3px;
  max-width: 0;
  margin-right: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: max-width 0.5s ease, opacity 0.5s ease;
}

.search-input input {
  text-transform: uppercase;
  padding: 5px 10px;
  border: 2px solid var(--dark-color-font);
  background-color: var(--light-color-background);
  color: var(--dark-color-font);
  width: 230px; /* Dostosuj szerokość pola wyszukiwania */
  height: 40px;
}

.navbar-list.active .search-input {
  opacity: 1;
  max-width: 200px; /* Taka sama szerokość jak pole wyszukiwania */
  margin-right: 20px;
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
  opacity: 1;
  visibility: visible;
}

.navbar-list li {
  position: relative;
}

.navbar-list button,
.navbar-list li a {
  display: block;
  color: var(--light-color-font);
  padding: 20px 20px;
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 2px solid transparent;
}

.navbar-list button,
.dark-mode .navbar-list li a {
  color: var(--dark-color-font);
}

.navbar-list button:hover,
.navbar-list li a:hover {
  border-bottom: 2px solid var(--dark-color-font);
}

.navbar-list button .active,
.navbar-list li .active {
  border-bottom: 2px solid var(--dark-color-font);
  color: var(--dark-color-font);
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
  list-style: none;
  padding: 0;
  margin: 0;
}

.language-select {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  color: var(--dark-color-font);
  margin-right: 5px;
}

.language-select ul {
  margin: auto;
  margin-left: 25px;
  margin-right: 25px;
}

.language-select li {
  display: flex;
}

.language-select li a {
  display: block;
  color: var(--light-color-font);
  padding: 20px 20px;
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease, border-bottom 0.3s ease;
}

.language-select a:hover {
  border-bottom: 2px solid var(--dark-color-font);
}

.vertical-line {
  width: 1px;
  height: 160px;
  background-color: var(--dark-color-font);
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--light-color-background);
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

.navbar-list li .dropdown-menu.active {
  display: block;
  border: none;
}

.dark-mode .dropdown-menu {
  background-color: var(--dark-color-background);
}

@media (max-width: 1110px) {
  .navbar {
    height: 130px;
  }

  .navbar-list {
    flex-direction: column;
    position: absolute;
    top: 260px;
    left: 0;
    width: 100%;
    max-height: none;
    height: 100%;
    z-index: 1;
    opacity: 1;
    visibility: hidden;
    padding: 0;
    margin-top: 8px;
  }

  .navbar-list li a {
    color: var(--dark-color-font);
    padding: 16px;
    text-decoration: none;
    margin: 0;
    width: 100%;
  }

  .navbar-list li a:hover {
    background-color: #b1afaf;
    color: #000;
  }

  .navbar-list.active {
    opacity: 1;
    visibility: visible;
    height: auto;
  }
  .navbar-list li a {
    background-color: var(--dark-color-background);
  }
  .navbar-toggle {
    display: flex;
    right: 50px;
  }
  .language-select, .vertical-line {
    visibility: hidden;
  }
}

@media (min-width: 1111px) {
  .navbar-list {
    max-height: none;
    opacity: 1;
    visibility: visible;
  }
}
</style>
