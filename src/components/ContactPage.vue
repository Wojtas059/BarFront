<template>
  <div class="contact-page">
    <div class="main-column">
      <div class="block">
        <div class="column left-column">
          <h3>Pełna wersja naszej strony jest jeszcze w budowie.</h3>
          <p>CHĘTNIE POMOŻEMY W ORGANIZACJI TWOJEGO EVENTU, ZAPOZNAJ SIĘ Z NASZYMI OFERTAMI I NAPISZ DO NAS!</p>
        </div>
        <div class="column right-collumn">
          <h2>MENEDŻEROWIE</h2>
          <div class="manager">
            <h3>MICHAŁ BARAN</h3>
            <p class="contact-info">+48 664 994 155</p>
            <a href="mailto:michal.baran@cocktailservice.pl" class="contact-info email">MICHAL.BARAN@COCKTAILSERVICE.PL</a>
          </div>
          <div class="manager">
            <h3>KRZYSZTOF BRZOSTOWSKI</h3>
            <p class="contact-info">+48 795 776 733</p>
            <a href="mailto:krzysztof.brzostowski@cocktailservice.pl" class="contact-info email" >KRZYSZTOF.BRZOSTOWSKI@COCKTAILSERVICE.PL</a>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="column left-column">
          <p></p>
        </div>
        <div class="column right-collumn">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <select id="destination" placeholder="" v-model="destination" required>
                <option value="" disabled>Wybierz adres docelowy</option>
                <option value="michal.baran@">MICHAL.BARAN@COCKTAILSERVICE.PL</option>
                <option value="email2@example.com">KRZYSZTOF.BRZOSTOWSKI@COCKTAILSERVICE.PL</option>
                <option value="email3@example.com">BIURO@COCKTAILSERVICE.PL</option>
              </select>
            </div>
            <div class="form-group">
              <input type="email" id="email" v-model="email" placeholder="Podaj śwój adres email" required />
            </div>
            <div class="form-group">
              <input type="text" id="name" v-model="subject" placeholder="Podaj temat wiadomości" required />
            </div>
            <div class="form-group">
              <textarea id="message" rows="10" v-model="message" placeholder="Twoja wiadomość" required></textarea>
            </div>
            <button :class="{ 'dark-mode': isDarkMode }" type="submit">Wyślij</button>
          </form>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        </div>
      </div>
      <div class="block">
        <div class="column left-column">
          <h4>Nasze biuro.</h4>
          <p>
          Cocktail Service sp. z o.o.<br>
          Jagiellońska 82C bud. 109<br>
          03-301, Warszawa</p>
        </div>
        <div class="column right-collumn">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1220.713211224175!2d21.01808438636169!3d52.27195999396307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdd476ff71c7%3A0x9085d9431460e4d5!2sCocktail%20Service%20sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1717150660342!5m2!1spl!2spl" style="width: 100%; height: 400px;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      <div class="footer">
        <a href="mailto:BIURO@COCKTAILSERVICE.PL">BIURO@COCKTAILSERVICE.PL</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ContactPage',
  data() {
    return {
      subject: '',
      email: '',
      message: '',
      successMessage: '',
      destination: '',
    };
  },
  methods: {
    async handleSubmit() {
      const payload = {
        toEmail: this.destination,
        fromEmail: this.email,
        subject: this.subject,
        message: this.message,
      };

      try {
        const response = await axios.post('https://l4887ivvna.execute-api.eu-central-1.amazonaws.com/dev/email', payload);
        console.log('Email sent:', response.data);
        this.successMessage = 'Dziękujemy za wiadomość. Skontaktujemy się z Tobą wkrótce.';
        this.subject = '';
        this.email = '';
        this.message = '';
        this.destination = '';
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  }
};
</script>

<style scoped>


</style>