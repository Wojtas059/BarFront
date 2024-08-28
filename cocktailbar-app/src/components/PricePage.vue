<template>
  <div class="shop">
    <div class="header">
      <p class="selected-category">Cennik</p>
      <span>** Cenny podane w netto, naley doliczyć 23% VAT.</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>Lp</th>
          <th>Nazwa</th>
          <th>Ilość w Koszu</th>
          <th>Cena Szt./Doba</th>
          <th>Dodatek</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.pricePerDay }}</td>
          <td>{{ item.addon }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        // Szkło
        { name: 'Short', quantity: 125, pricePerDay: '1.5 PLN', addon: '15 PLN' },
        { name: 'Long', quantity: 230, pricePerDay: '1.5 PLN', addon: '15 PLN' },
        { name: 'Coupette', quantity: 160, pricePerDay: '1.5 PLN', addon: '15 PLN' },
        { name: 'Szampan', quantity: 360, pricePerDay: '1.5 PLN', addon: '15 PLN' },
        { name: 'Wino', quantity: 250, pricePerDay: '1.5 PLN', addon: '15 PLN' },
        { name: 'Copa Gin Tonic', quantity: 160, pricePerDay: '1.5 PLN', addon: '15 PLN' },
        { name: 'Nick & Nora', quantity: 250, pricePerDay: '2 PLN', addon: '20 PLN' },
        { name: 'Wódka', quantity: 490, pricePerDay: '1 PLN', addon: '15 PLN' },
        { name: 'Szklanka Degustacyjna', quantity: 60, pricePerDay: '1.5 PLN', addon: '15 PLN' },
        { name: 'Kieliszek Degustacyjny', quantity: 490, pricePerDay: '1 PLN', addon: '15 PLN' },
        // Akcesoria Barmańskie
        { name: 'Cooler do wina', quantity: '-', pricePerDay: '10 PLN', addon: '100 PLN' },
        { name: 'Misa do szampana', quantity: '-', pricePerDay: '50 PLN', addon: '500 PLN' },
        { name: 'Smoking Gun Hendi', quantity: '-', pricePerDay: '50 PLN', addon: '400 PLN' },
        { name: 'Stłuczki Braki Drewienka', quantity: '100 g', pricePerDay: '2 PLN', addon: '-' },
        { name: 'Gaz', quantity: '-', pricePerDay: '15 PLN', addon: '-' },
        { name: 'Palnik Hendi', quantity: '-', pricePerDay: '20 PLN', addon: '150 PLN' },
        { name: 'Taca Duża', quantity: '-', pricePerDay: '2 PLN', addon: '40 PLN' },
        { name: 'Taca Średnia', quantity: '-', pricePerDay: '2 PLN', addon: '20 PLN' },
        { name: 'Stół Verlo Cateringowy', quantity: '-', pricePerDay: '50 PLN', addon: '50 PLN' },
        { name: 'Pokrowiec na Stół Verlo', quantity: '-', pricePerDay: '50 PLN', addon: '-' },
        { name: 'Granitator Carpigiani', quantity: '-', pricePerDay: '990 PLN', addon: 'Cena Rynkowa' },
        { name: 'Stolik Verlo Koktajlowy', quantity: '-', pricePerDay: '30 PLN', addon: '-' },
        { name: 'Pojemnik na Lód', quantity: '-', pricePerDay: '-', addon: 'Cena Rynkowa' },
        { name: 'Dyspenser do Puree', quantity: '-', pricePerDay: '-', addon: 'Cena Rynkowa' },
        { name: 'Podajnik do Serwetek', quantity: '-', pricePerDay: '-', addon: 'Cena Rynkowa' },
        { name: 'Komplet Sprzętu Barmańskiego', quantity: '-', pricePerDay: '-', addon: 'Cena Rynkowa' },
        { name: 'Sifon Kaiser Inox', quantity: '-', pricePerDay: '25 PLN', addon: 'Cena Rynkowa' },
        { name: 'Nalewak do Butelek', quantity: '-', pricePerDay: '-', addon: 'Cena Rynkowa' },
        // Sprzęt Duży
        { name: 'Stół Verlo Cateringowy', quantity: '-', pricePerDay: '50 PLN', addon: '50 PLN' },
        { name: 'Pokrowiec na Stół Verlo', quantity: '-', pricePerDay: '50 PLN', addon: '3 PLN' },
      ],
    };
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
  overflow-x: hidden;
  /* Wyłączenie przewijania w poziomie */
}



.shop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 290px;
  box-sizing: border-box;
  background-color: var(--dark-color-font);
  color: var(--dark-color-background);
  width: 100%;
  /* Ustawienie szerokości na 100% */
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
}

.shop .header {
  width: 80%;
  /* Ustawienie szerokości na 100% */
  max-width: 1100px;
  text-align: left;
  /* Wyrównanie tekstu do lewej */
  /* Dodanie marginesu poniżej nagłówka, jeśli potrzebne */
  margin: 10px 10px 0 100px;
}

.shop .header .selected-category {
  font-size: 25px;
  color: var(--dark-color-background);
  margin: 0;
  /* Ustawienie marginesu na 0, aby wyrównać tekst do lewej */
  margin-bottom: 10px;
}

.shop .header span {
  font-size: 12px;
  color: var(--dark-color-background);
}

table {
  width: 100%;
  /* Ustawienie szerokości na 100% */
  max-width: 1100px;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {
  padding: 10px;
  border: 1px solid var(--dark-color-background);
  text-align: center;
}

/* th {
  background-color: #f4f4f4;
} */

/* tbody tr:nth-child(even) {
  background-color: #f9f9f9;
} */
/* Dla urządzeń mobilnych wymuś widok listy */
@media (max-width: 598px) {
  .shop {
    padding-top: 200px;
  }
  .shop .header {
    margin: 10px 10px 0 10px;
    width: 100%;
  }
  table {
    font-size: 9px;
  }

  th,
  td {
    padding: 8px;
  }

}
</style>
