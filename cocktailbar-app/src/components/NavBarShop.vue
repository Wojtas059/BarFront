<template>
  <div>
    <nav class="navbar" :class="{ 'dark-mode': isDarkMode }">
      <div class="navbar-logo">
        <router-link to="/">
          <img :src="logoSrc" alt="Logo" />
        </router-link>
      </div>

      <!-- <div class="navbar-toggle" @click="toggleMenu" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
      <span></span>
      <span></span>
      <span></span>
    </div> -->

      <ul class="navbar-list" :class="{ active: isOpen || isHovered }">
        <!-- Przycisk z lupą -->
        <button class="search-button" @click="toggleSearch">
          <i class="pi pi-search"></i>
        </button>
        <!-- Pole do wpisywania tekstu wyszukiwania -->
        <li v-if="isSearchOpen" class="search-input">
          <input type="text" placeholder="Szukaj..." />
        </li>
        <li v-for="(item, index) in menuItems" :key="index" @mouseover="handleSubmenuMouseOver(index)"
          @mouseleave="handleSubmenuMouseLeave">
          <router-link :to="item.link" exact-active-class="active">
            <template v-if="item.icon">
              <img :src="item.icon" alt="Logo" />
            </template>
            <template v-else>
            {{item.name}}
            </template>
            <!-- <img :src="item.icon" alt="Logo" /> -->
          </router-link>
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

    <nav class="navbar-drugi" :class="{ 'dark-mode': isDarkMode }">
      <div class="navbar-toggle" @click="toggleMenu" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul class="navbar-list" :class="{ active: isOpen || isHovered }" @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave">
        <li v-for="(item, index) in menuCategory" :key="index" @mouseover="handleSubmenuMouseOver(index)"
          @mouseleave="handleSubmenuMouseLeave">
          <button @click="selectCategory(item)" :class="{ 'active': selectedCategory === item.name  && isActive('/rent') }"
            exact-active-class="active">
            {{ item.name }}
          </button>
          <!-- Dodany przycisk w głównym elemencie listy -->
          <ul v-if="item.subItems" class="dropdown-menu" :class="{ active: isSubmenuOpen === index }">
            <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
              <button @click="selectCategory(subItem)">{{ subItem.name }}</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
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
      selectedCategory: 'Home',
      isSearchOpen: false,  // Zmienna do zarządzania polem wyszukiwania
      menuItems: [
        { name: 'Cennik', link: '/price', icon: null },
        { name: 'Koszyk', link: '/cart', icon: require('@/assets/icons/shopping-cart.png') },
      ],
      menuCategory: [
        { name: 'Home', link: 'home', desc: 'SZKŁO UNIWERSAL - SZKŁO TRANSPORTOWANE JEST W KOSZACH W SYSTEMIE CAMBRO - WYMIARY KOSZA TO 50 × 50 CM. SZKŁO ZAMAWIANE JEST NA PEŁNE KOSZE, DLA KAŻDEGO RODZAJU MAMY PODANĄ ILOŚĆ ZNAJDUJĄCĄ SIĘ W JEDNYM KOSZU. NA ŻYCZENIE MOŻEMY WYPOŻYCZYĆ RÓWNIEŻ WÓZKI ORAZ POKRYWY DO PRZECHOWYWANIA SZKŁA, ZAPEWNIAJĄCE JEGO CZYSTOŚĆ' },
        { name: 'Szkło', link: 'glass', desc: 'SZKŁO UNIWERSAL - SZKŁO TRANSPORTOWANE JEST W KOSZACH W SYSTEMIE CAMBRO - WYMIARY KOSZA TO 50 × 50 CM. SZKŁO ZAMAWIANE JEST NA PEŁNE KOSZE, DLA KAŻDEGO RODZAJU MAMY PODANĄ ILOŚĆ ZNAJDUJĄCĄ SIĘ W JEDNYM KOSZU. NA ŻYCZENIE MOŻEMY WYPOŻYCZYĆ RÓWNIEŻ WÓZKI ORAZ POKRYWY DO PRZECHOWYWANIA SZKŁA, ZAPEWNIAJĄCE JEGO CZYSTOŚĆ' },
        { name: 'Akcesoria Barmańskie', link: 'accesories', desc: 'SZKŁO UNIWERSAL - SZKŁO TRANSPORTOWANE JEST W KOSZACH W SYSTEMIE CAMBRO - WYMIARY KOSZA TO 50 × 50 CM. SZKŁO ZAMAWIANE JEST NA PEŁNE KOSZE, DLA KAŻDEGO RODZAJU MAMY PODANĄ ILOŚĆ ZNAJDUJĄCĄ SIĘ W JEDNYM KOSZU. NA ŻYCZENIE MOŻEMY WYPOŻYCZYĆ RÓWNIEŻ WÓZKI ORAZ POKRYWY DO PRZECHOWYWANIA SZKŁA, ZAPEWNIAJĄCE JEGO CZYSTOŚĆ' },
        { name: 'Sprzęt duży', link: 'large_eq', desc: 'SZKŁO UNIWERSAL - SZKŁO TRANSPORTOWANE JEST W KOSZACH W SYSTEMIE CAMBRO - WYMIARY KOSZA TO 50 × 50 CM. SZKŁO ZAMAWIANE JEST NA PEŁNE KOSZE, DLA KAŻDEGO RODZAJU MAMY PODANĄ ILOŚĆ ZNAJDUJĄCĄ SIĘ W JEDNYM KOSZU. NA ŻYCZENIE MOŻEMY WYPOŻYCZYĆ RÓWNIEŻ WÓZKI ORAZ POKRYWY DO PRZECHOWYWANIA SZKŁA, ZAPEWNIAJĄCE JEGO CZYSTOŚĆ' },
        { name: 'Bary mobilne', link: 'bars', desc: 'SZKŁO UNIWERSAL - SZKŁO TRANSPORTOWANE JEST W KOSZACH W SYSTEMIE CAMBRO - WYMIARY KOSZA TO 50 × 50 CM. SZKŁO ZAMAWIANE JEST NA PEŁNE KOSZE, DLA KAŻDEGO RODZAJU MAMY PODANĄ ILOŚĆ ZNAJDUJĄCĄ SIĘ W JEDNYM KOSZU. NA ŻYCZENIE MOŻEMY WYPOŻYCZYĆ RÓWNIEŻ WÓZKI ORAZ POKRYWY DO PRZECHOWYWANIA SZKŁA, ZAPEWNIAJĄCE JEGO CZYSTOŚĆ' },
      ],
    };
  },
  computed: {
    logoSrc() {
      return require('@/assets/icons/Cocktail-Service-logo-RGB-WHITE.png');
    },
  },
  methods: {
    isActive(link) {
      return this.$route.path === link;
    },
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
    selectCategory(category) {
      // console.log(category);

      this.selectedCategory = category.name;
      this.$emit('categorySelected', category);
      if (this.$route.path != '/rent') {
        this.$router.push('/rent');
      } 
      // this.$emit('update:selectedCategory', category);
    },
  }
};
</script>

<style scoped>
.navbar {
  letter-spacing: 3px;
  font-size: 12px;
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
  height: 100px;
}

.navbar-drugi {
  position: fixed;
  font-size: 11px;
  top: 129px;
  /* ustawia drugi pasek nawigacyjny tuż pod pierwszym */
  left: 0;
  width: 100%;
  z-index: 999;
  /* ustaw niższy z-index, aby był pod pierwszym paskiem */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: var(--dark-color-background);
  transition: background-color 0.3s ease, color 0.3s ease;
  height: 80px;
  border-top: 2px solid var(--dark-color-font);
  /* dostosuj wysokość drugiego paska w zależności od potrzeb */
}

.navbar-drugi button {
  all: unset;
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
  width: 230px;
  /* Dostosuj szerokość pola wyszukiwania */
  height: 40px;
}

.navbar-list.active .search-input {
  opacity: 1;
  max-width: 200px;
  /* Taka sama szerokość jak pole wyszukiwania */
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

.navbar-logo button {
  display: inline-block;
  color: #000;
}

.navbar-logo img {
  height: 120px;
  width: auto;
  max-width: 100%;
}

.navbar-list li a {
  width: auto;
  height: 30px;
  border: 1px solid transparent;
  display: flex !important;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.navbar-list img {
  width: 30px;
  height: 30px;
  border: 1px solid transparent;
  filter: invert(94%) sepia(5%) saturate(402%) hue-rotate(317deg) brightness(105%) contrast(85%);
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

.navbar-drugi .navbar-list {
  justify-content: flex-start;
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
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  left: 20px;
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
  cursor: pointer;
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
  transition: color 0.3s ease;
  border-bottom: 2px solid transparent;
}

.language-select a:hover {
  border-bottom: 2px solid var(--dark-color-font);
}

.vertical-line {
  width: 1px;
  height: 130px;
  background-color: var(--dark-color-font);
}

.dropdown-menu {
  display: none;
  position: absolute;
  cursor: pointer;
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

@media (max-width: 700px) {
  .navbar {
    height: 80px;
  }

  .navbar-drugi {
    top: 111px;
    height: 60px;
  }

  .navbar-logo img {
    height: 70px;
    width: auto;
    max-width: 100%;
  }

  .navbar-drugi .navbar-list {
    flex-direction: column;
    position: absolute;
    top: 83px;
    left: 0;
    width: 100%;
    max-height: none;
    height: 100%;
    z-index: 1;
    opacity: 1;
    visibility: hidden;
    padding: 0;
    margin-top: 8px;
    padding-bottom: 20px;
  }

  /* .navbar-drugi .navbar-list ul {
    margin-bottom: 16px;
  } */

  .navbar-drugi .navbar-list li a {
    color: var(--dark-color-font);
    padding: 16px;
    text-decoration: none;
    margin: 0;
    width: 100%;
  }

  .navbar-drugi .navbar-list li a:hover {
    background-color: #b1afaf;
    color: #000;
  }

  .navbar-drugi .navbar-list.active {
    opacity: 1;
    visibility: visible;
    height: auto;
  }

  .navbar-drugi .navbar-list li a {
    background-color: var(--dark-color-background);
  }

  .navbar-toggle {
    display: flex;
    right: 50px;
  }

  .language-select,
  .vertical-line {
    /* visibility: hidden; */
    height: 111px;
  }
}

@media (min-width: 1111px) {
  .navbar-drugi .navbar-list {
    max-height: none;
    opacity: 1;
    visibility: visible;
  }
}
</style>
