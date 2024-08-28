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
          <th>Stłuczki Braki</th>
          <th>Dodatek</th>
        </tr>
      </thead>
      <tbody>
        <tr class="category-row">
          <td colspan="6">SZKŁO</td>
        </tr>
        <tr v-for="(item, index) in glassItems" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.pricePerDay }}</td>
          <td>{{ item.breakage }}</td>
          <td>{{ item.addon }}</td>
        </tr>
        <tr class="category-row">
          <td colspan="6">Akcesoria Barmańskie</td>
        </tr>
        <tr v-for="(item, index) in barwareItems" :key="index">
          <td>{{ glassItems.length + index + 1 }}</td> <!-- Dodajemy długość poprzedniej kategorii, aby kontynuować numerację -->
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.pricePerDay }}</td>
          <td>{{ item.breakage }}</td>
          <td>{{ item.addon }}</td>
        </tr>
        <tr class="category-row">
          <td colspan="6">Sprzęt duży</td>
        </tr>
        <tr v-for="(item, index) in largeEquipmentItems" :key="index">
          <td>{{ glassItems.length + barwareItems.length + index + 1 }}</td> <!-- Dodajemy długość poprzednich kategorii -->
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.pricePerDay }}</td>
          <td>{{ item.breakage }}</td>
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
      glassItems: [
        { name: 'Short', quantity: 25, pricePerDay: '1.5 PLN', breakage: '15 PLN', addon: '-' },
        { name: 'Long', quantity: 30, pricePerDay: '1.5 PLN', breakage: '15 PLN', addon: '-' },
        { name: 'Coupette', quantity: 16, pricePerDay: '1.5 PLN', breakage: '15 PLN', addon: '-' },
        { name: 'Szampan', quantity: 36, pricePerDay: '1.5 PLN', breakage: '15 PLN', addon: '-' },
        { name: 'Wino', quantity: 25, pricePerDay: '1.5 PLN', breakage: '15 PLN', addon: '-' },
        { name: 'Copa Gin Tonic', quantity: 16, pricePerDay: '1.5 PLN', breakage: '15 PLN', addon: '-' },
        { name: 'Nick & Nora', quantity: 25, pricePerDay: '2 PLN', breakage: '20 PLN', addon: '-' },
        { name: 'Wódka', quantity: 49, pricePerDay: '1 PLN', breakage: '15 PLN', addon: '-' },
        { name: 'Szklanka Degustacyjna', quantity: 6, pricePerDay: '1.5 PLN', breakage: '15 PLN', addon: '-' },
        { name: 'Kieliszek Degustacyjny', quantity: 49, pricePerDay: '1 PLN', breakage: '15 PLN', addon: '-' },
      ],
      barwareItems: [
        { name: 'Cooler do wina', quantity: '-', pricePerDay: '10 PLN', breakage: '-', addon: '100 PLN' },
        { name: 'Misa do szampana', quantity: '-', pricePerDay: '50 PLN', breakage: '-', addon: '500 PLN' },
        { name: 'Smoking Gun Hendi', quantity: '-', pricePerDay: '50 PLN', breakage: '-', addon: '400 PLN' },
        { name: 'Stłuczki Braki Drewienka', quantity: '100 g', pricePerDay: '2 PLN', breakage: '-', addon: '-' },
        { name: 'Gaz', quantity: '-', pricePerDay: '15 PLN', breakage: '-', addon: '-' },
        { name: 'Palnik Hendi', quantity: '-', pricePerDay: '20 PLN', breakage: '-', addon: '150 PLN' },
        { name: 'Taca Duża', quantity: '-', pricePerDay: '2 PLN', breakage: '-', addon: '40 PLN' },
        { name: 'Taca Średnia', quantity: '-', pricePerDay: '2 PLN', breakage: '-', addon: '20 PLN' },
      ],
      largeEquipmentItems: [
        { name: 'Stół Verlo Cateringowy', quantity: '-', pricePerDay: '50 PLN', breakage: '-', addon: '50 PLN' },
        { name: 'Pokrowiec na Stół Verlo', quantity: '-', pricePerDay: '50 PLN', breakage: '-', addon: '-' },
        { name: 'Granitator Carpigiani', quantity: '-', pricePerDay: '990 PLN', breakage: '-', addon: 'Cena Rynkowa' },
        { name: 'Stolik Verlo Koktajlowy', quantity: '-', pricePerDay: '30 PLN', breakage: '-', addon: '-' },
        { name: 'Pojemnik na Lód', quantity: '-', pricePerDay: '-', breakage: '-', addon: 'Cena Rynkowa' },
        { name: 'Dyspenser do Puree', quantity: '-', pricePerDay: '-', breakage: '-', addon: 'Cena Rynkowa' },
        { name: 'Podajnik do Serwetek', quantity: '-', pricePerDay: '-', breakage: '-', addon: 'Cena Rynkowa' },
        { name: 'Komplet Sprzętu Barmańskiego', quantity: '-', pricePerDay: '-', breakage: '-', addon: 'Cena Rynkowa' },
        { name: 'Sifon Kaiser Inox', quantity: '-', pricePerDay: '25 PLN', breakage: '-', addon: 'Cena Rynkowa' },
        { name: 'Nalewak do Butelek', quantity: '-', pricePerDay: '-', breakage: '-', addon: 'Cena Rynkowa' },
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
thead {
  color: #5f2525;
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


@media (min-width: 599px) and (max-width: 721px) {
  .shop {
    padding-top: 200px;
  }
  .shop .header {
    margin: 10px 10px 0 10px;
    width: 100%;
  }
  table {
    font-size: 11px;
  }

  th,
  td {
    padding: 8px;
  }

}

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
