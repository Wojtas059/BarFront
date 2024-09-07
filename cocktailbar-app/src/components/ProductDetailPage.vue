<template>
  <div class="product-page">
    <div class="product-detail">
      <div class="product-image">
        <!-- Obraz produktu -->
        <img :src="productImage" alt="Product Image" />
      </div>
      <div class="block">
        <div class="product-info">
          <div class="header-row">
            <h1>{{ productName }}</h1>
            <p class="price">{{priceP}}</p>
          </div>
          <p class="desc">{{ productDescription }}</p>
        </div>
        <div class="product-options">
          <div class="column left-column">
          </div>
          <div class="vertical-line"></div>
          <div class="column right-column">
            <div class="options">
              <div class="option">
                <label for="addon">Dodatek</label>
                <input id="addon" type="number" v-model="addonQuantity" min="1" />
              </div>
              <div class="option">
                <label for="quantity">Ilość sztuk* <span style="font-size: 0.8em; display: block; color: var(--dark-color-red);">W koszu 25 szt. Maks. 600</span></label>
                <input id="quantity" type="number" v-model="productQuantity" min="1" max="25" />
              </div>
              <div class="option">
                <label for="days">Ilość dni</label>
                <input id="days" type="number" v-model="daysQuantity" min="1" />
              </div>
            </div>
          <button class="product-button">Do koszyka</button>
          </div>
        </div>
      </div>

    </div>

    <div class="related-products">
      <h2>Inne Produkty</h2>
      <div class="products-list">
        <div v-for="product in relatedProducts" :key="product.id" class="product-item">
          <img :src="product.image" alt="Product Image" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }} PLN / doba netto</p>
          <button>Sprawdź</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      productImage: require('@/assets/shop/home_2.png'), // ścieżka do obrazu produktu
      productName: 'Granitor Carpigiani',
      productDescription: '2 komory 12l, Podłączenie 230V, 3 tryby pracy',
      productPrice: 500, // Cena netto
      addonQuantity: 1,
      productQuantity: 1,
      daysQuantity: 1,
      priceP: 'Od 500 PLN / DOBA \n netto',
      relatedProducts: [
        { id: 1, name: 'Short', price: 1.5, image: require('@/assets/shop/home_2.png') },
        { id: 2, name: 'Short', price: 1.5, image: require('@/assets/shop/home_2.png') },
        { id: 2, name: 'Short', price: 1.5, image: require('@/assets/shop/home_2.png') },
        // dodaj kolejne produkty
      ]
    };
  },
  created() {
    console.log('Product ID:', this.id);
  }
}
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
  overflow-x: hidden;
}

.product-page {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 290px;
  box-sizing: border-box;
  background-color: var(--dark-color-font);
  color: var(--dark-color-background);
  width: 100%;
  min-height: calc(100vh - 70px);
  /* Zapewnia, że .shop ma co najmniej pełną wysokość okna minus wysokość stopki */
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 300px;
  /* Upewnij się, że nie zakryje zawartości */
}

.product-detail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  width: 90%;
  max-width: 1700px;
}

.desc {
  margin: 40px 0;
  font-size: 11px;
  font-weight: bold;
}

.product-image {
  margin: 30px;
}


.product-image img {
  width: 400px;
  height: auto;
}

.price {
  white-space: pre-line;
  color: var(--dark-color-red);
  font-weight: bold;
  text-align: right;
}

.option {
  display: flex;
  justify-content: space-between; /* Umieszcza nagłówek po lewej, a cenę po prawej */
  align-items: center; 
}

.option label {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  font-size: 12px;
}

.option input {
  background-color: var(--dark-color-font);
  border: 2px solid var(--dark-color-background);
  text-align: center;
  width: 50%;
  padding: 10px;
  margin-bottom: 5px;
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
  text-transform: none; /* To nadpisuje ustawienie dużych liter */
  text-transform: uppercase;
}

.product-button:hover {
  background-color: #c2c0c0;
  color: var(--dark-color-background);
  border: 1px solid var(--dark-color-background);
}

.related-products {
  margin-top: 50px;
}

.products-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
}

.product-item {
  background-color: transparent;
  padding: 10px;
  text-align: center;
  border: 1px solid transparent;
  min-width: 200px;
}

.product-item img {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
}


.right-column {
  border-left: 2px solid var(--dark-color-background);
  padding-left: 30px;
  width: 50%;
}


.block {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* Elementy będą ustawione na początku pionowej osi */
  flex-direction: column;
  /* Ustawiamy kierunek na poziomy (wiersz) */
  margin: 20px 0px;
  width: 100%;
  border-left: 2px solid var(--dark-color-background);
  padding-left: 80px;
}

.product-info {
  width: 100%;
}

.header-row {
  display: flex;
  justify-content: space-between; /* Umieszcza nagłówek po lewej, a cenę po prawej */
  align-items: center; /* Wyrównuje elementy w pionie */
}

.header-row h1 {
  margin: 0; /* Usuwa margines wokół nagłówka */
  flex: 1; /* Rozciąga nagłówek na dostępną przestrzeń */
}

.product-options {
  /* margin-left: 80px; */
  width: 100%;
  display: flex;
  justify-content: space-between; /* Umieszcza nagłówek po lewej, a cenę po prawej */
  align-items: center; /* Wyrównuje elementy w pionie */
}

.column {
  /* Upewnienie się, że marginesy są wyłączone */
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* Wymuszanie zawartości na początku */
}

.options .option {
  margin-bottom: 10px;
  /* Dodajemy margines pomiędzy opcjami */
}


@media (min-width: 1200px) and (max-width: 1380px) {
  .right-column {
    width: 70%;
  }

  .product-image img {
    width: 300px;
    margin-top: 50px;
    height: auto;
  }
  
}

@media (max-width: 1200px) {
  .block {
    padding-left: 30px;
  }
  
  .right-column {
    width: 100%;
    border-left: none;
    padding-left: 0;
  }

  .product-image img {
    width: 250px;
    height: auto;
    margin-top: 50px;
  }
}

</style>
