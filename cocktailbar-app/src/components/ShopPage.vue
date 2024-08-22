<template>
  <div class="shop">
    <!-- Przycisk do przełączania widoku -->
    <div class="view-toggle" v-if="!isMobile">
      <button @click="listView"><img src="@/assets/logs/list.png" /> </button>
      <button @click="gridView"><img src="@/assets/logs/grid.png" /> </button>
    </div>
    
    <!-- Lista produktów -->
    <div :class="['product-list', { 'list-view': isListView || isMobile }]">
      <div v-for="(product, index) in products" :key="index" class="product-item">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-details">
          <p class="name-prod">{{ product.name }}</p>
          <p class="price">{{ product.price }}</p>
          <button class="product-button">SPRAWDŹ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopPage',
  data() {
    return {
      isListView: false, // Zmienna do zarządzania widokiem listy lub siatki
      isMobile: false,   // Zmienna do wykrywania urządzenia mobilnego
      products: [
        {
          name: 'TACA',
          price: '1.5 PLN / DOBA \n netto',
          image: require('@/assets/shop/home_2.png'),
        },
        {
          name: 'TACA',
          price: '1.5 PLN / DOBA  \n netto',
          image: require('@/assets/shop/home_2.png'),
        },
        {
          name: 'TACA',
          price: '1.5 PLN / DOBA  \n netto',
          image: require('@/assets/shop/home_2.png'),
        },
        {
          name: 'TACA',
          price: '1.5 PLN / DOBA \n netto',
          image: require('@/assets/shop/home_2.png'),
        },
        {
          name: 'TACA',
          price: '1.5 PLN / DOBA  \n netto',
          image: require('@/assets/shop/home_2.png'),
        },
        {
          name: 'TACA',
          price: '1.5 PLN / DOBA  \n netto',
          image: require('@/assets/shop/home_2.png'),
        },
      ],
    };
  },
  methods: {
    listView() {
      this.isListView = true; // Przełączanie między widokiem listy a siatki
    },
    gridView() {
      this.isListView = false; // Przełączanie między widokiem listy a siatki
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768; // Sprawdzenie, czy szerokość okna wskazuje na urządzenie mobilne
    },
  },
  mounted() {
    this.checkMobile(); // Sprawdź na początku
    window.addEventListener('resize', this.checkMobile); // Sprawdzenie przy każdej zmianie rozmiaru okna
  },
  beforeUnmount() {  // Zamiast beforeDestroy
    window.removeEventListener('resize', this.checkMobile); // Usunięcie listenera przy niszczeniu komponentu
  },
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
  overflow-x: hidden; /* Wyłączenie przewijania w poziomie */
}

.shop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 250px;
  box-sizing: border-box;
  background-color: var(--dark-color-font);
  color: var(--dark-color-background);
  width: 100%; /* Ustawienie szerokości na 100% */
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
}
.shop .view-toggle button {
  border: 1px solid transparent;
}

.shop .view-toggle img {
  width: 30px;
  height: 30px;
  border: 1px solid transparent;
}

.shop .view-toggle button:hover {
  border: 1px solid var(--dark-color-background);
  background-color: var(--dark-color-background);
  color: var(--dark-color-font);
}

.view-toggle {
  margin-bottom: 20px; /* Dodanie marginesu dla przycisku przełączania widoku */
}

.product-list {
  display: flex;
  margin: 50px;
  margin-right: 80px;
  flex-wrap: wrap; /* Umożliwia zawijanie elementów do nowej linii, jeśli brak miejsca */
  justify-content: space-between;
  width: 100%; /* Ustawienie szerokości na 100% */
  max-width: 1400px; /* Maksymalna szerokość dla całego kontenera */
}

.product-item {
  display: flex;
  flex-direction: row; /* Ustawia tekst po prawej stronie zdjęcia */
  align-items: center;
  margin-bottom: 20px;
  margin: 40px;
  padding: 20px;
  /* width: 100%; */
  max-width: 33%;
  text-align: left;
}

.product-list.list-view .product-item {
  flex-direction: row; /* Zawsze obraz po lewej, tekst po prawej */
  max-width: 100%; /* Pełna szerokość dla elementów w widoku listy */
  width: 100%;
}

.product-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.product-details {
  margin: 20px;
  padding: 20px;
  flex-grow: 1;
  border-left: 2px solid var(--dark-color-background);
}

.product-details p {
  margin-bottom: 14px;
}

.name-prod {
  font-size: 18px;
}

.price {
  font-size: 10px;
  white-space: pre-line;
}

.product-button {
  text-align: center;
  background-color: #000;
  color: var(--dark-color-font);
  padding: 10px 20px;
  letter-spacing: 2px;
  border: 1px solid transparent;
  transition: background 0.3s, color 0.3s;
  text-decoration: none;
  margin-top: 10px;
}

.product-button:hover {
  background-color: #c2c0c0;
  color: var(--dark-color-background);
  border: 1px solid var(--dark-color-background);
}

/* Dla urządzeń mobilnych wymuś widok listy */
@media (max-width: 822px) {
  .product-list.list-view .product-item {
    flex-direction: row;
    width: 100%;
  }

  .product-item {
    max-width: 100%;
    flex-direction: row;
  }
}
</style>
