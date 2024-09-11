<template>
  <div class="contact-page">
    <div class="main-column">
      <div class="block">
        <div class="column left-column">
          <div class="logos">
            <a href="https://www.facebook.com/profile.php?id=61559974028659" target="_blank">
              <img :src="logofb" alt="Logo facebook" />
            </a>
            <a href="https://www.instagram.com/cocktailservice.pl/" target="_blank">
              <img :src="logoinst" alt="Logo instagram" />
            </a>
          </div>
          <a href="mailto:biuro@cocktailservice.pl" class="p-email">biuro@cocktailservice.pl</a>
        </div>
        <div class="vertical-line"></div>
        <div class="column right-column">
          <p>MANAGEROWIE</p>
          <div class="manager">
            <p>MICHAŁ BARAN</p>
            <a href="tel:+48664994155" class="contact-info">+48 664 994 155</a><br>
            <a href="mailto:michal.baran@cocktailservice.pl" class="p-email">MICHAL.BARAN@COCKTAILSERVICE.PL</a>
          </div>
          <div class="manager">
            <p>KRZYSZTOF BRZOSTOWSKI</p>
            <a href="tel:+48795776733" class="contact-info">+48 795 776 733</a><br>
            <a href="mailto:krzysztof.brzostowski@cocktailservice.pl"
              class="p-email">KRZYSZTOF.BRZOSTOWSKI@COCKTAILSERVICE.PL</a>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="column left-column">
          <div class="logos">
            <p class="title-text" >{{text_from}}</p>
          </div>
        </div>
        <div class="vertical-line"></div>
        <div class="column right-column">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <select id="destination" placeholder="" v-model="destination" required>
                <option value="" disabled>adres docelowy</option>
                <option value="michal.baran@cocktailservice.pl">MICHAL.BARAN@COCKTAILSERVICE.PL</option>
                <option value="krzysztof.brzostowski@cocktailservice.pl">KRZYSZTOF.BRZOSTOWSKI@COCKTAILSERVICE.PL</option>
                <option value="biuro@cocktailservice.pl">BIURO@COCKTAILSERVICE.PL</option>
              </select>
            </div>
            <div class="form-group">
              <input type="email" id="email" v-model="email" placeholder="Twój adres email" required />
            </div>
            <div class="form-group">
              <input type="text" id="subject" v-model="subject" placeholder="Temat wiadomości" required />
            </div>
            <div class="form-group">
              <textarea id="message" rows="5" v-model="message" placeholder="Treść" required></textarea>
            </div>
            <button class="submit-button" type="submit">Wyślij</button>
          </form>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        </div>
      </div>
      <div class="block">
        <div class="column left-column">
          <div class="logos">
            <p class="title-text" >{{text_iframe}}</p>
          </div>
        </div>
        <div class="vertical-line"></div>
        <div class="column right-column">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1220.713211224175!2d21.01808438636169!3d52.27195999396307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdd476ff71c7%3A0x9085d9431460e4d5!2sCocktail%20Service%20sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1717150660342!5m2!1spl!2spl" allowfullscreen="" loading="lazy"></iframe>
        </div>
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
      logofb: require('@/assets/images/contact/fb.png'),
      logoinst: require('@/assets/images/contact/instagram.png'),
      text_from: 'KAŻDE WYDARZENIE TRAKTUJEMY INDYWIDUALNIE.\nCHĘTNIE POMOŻEMY W ORGANIZACJI TWOJEGO EVENTU,\nNAPISZ DO NAS Z ZAPYTANIEM W FORMULARZU:',
      text_iframe: 'NASZE BIURO I MAGAZYN\n\nCOCKTAIL SERVICE SP. Z O.O.\nJAGIELLOŃSKA 82C BUD. 109\n03-301, WARSZAWA'
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
.contact-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 200px;
  box-sizing: border-box;
  background-color: var(--dark-color-font);
  color: var(--dark-color-background);
  margin: 0 auto;
  padding-bottom: 300px;
}

.main-column {
  max-width: 1300px;
  width: 100%;
  box-sizing: border-box;
}

.block {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px 0px;
  margin: 20px 0px;
  border-bottom: 1px solid var(--dark-color-background);
  height: auto;
  /* Sprawdzamy, czy wysokość jest automatyczna */
}


.column {
  padding: 10px;
  /* Upewnienie się, że padding jest wyłączony */
  margin: 10px;
  /* Upewnienie się, że marginesy są wyłączone */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* Wymuszanie zawartości na początku */
}

.left-column {
  margin-top: auto;
  margin-right: 30px;
  /* Ustawia zawartość przy dolnej krawędzi */
}

.left-column a {
  margin-bottom: 20px;
}

.right-column {
  padding: 10px 30px;
}

.logos {
  display: flex;
  gap: 10px; /* Dostosuj odstęp między logami */
}
.logos p {
  margin-bottom: 300px;
  /* margin-right: 30px; */
  font-size: 12px;
}

.text-iframe {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Dostosuj odstęp między logami */
}
.text-iframe p {
  margin-bottom: 300px;
  /* margin-right: 30px; */
  font-size: 12px;
}


.logos img {
  width: 50px; /* Dostosuj rozmiar loga według potrzeb */
  height: 50px;
  margin-bottom: 200px;
  object-fit: contain;
}

.vertical-line {
  width: 1px;
  height: auto;
  /* Dostosowanie wysokości do rodzica */
  background-color: var(--dark-color-background);
  padding: 0;
  margin: 40px 0px 30px 0px;
  /* Upewnienie się, że nie ma marginesów */
}

.p-email {
  font-size: 12px;
}

.contact-info{
  font-size: 11px;
  margin-bottom: 20px;
}

a {
  padding: 10px 0px;
  text-decoration: none;
  color: var(--dark-color-background);
}

.manager {
  margin: 20px 0px;
}

.title-text {
  white-space: pre-line;
  letter-spacing: 2px;
  line-height: 1.3;
}
.submit-button,
.form-group select,
.form-group input,
.form-group textarea {
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 2px solid var(--dark-color-background);
  width: 100%;
  margin: 10px 0px;
  box-sizing: border-box;
  background-color: var(--dark-color-font);
  font-size: 14px;
}

.form-group textarea {
  padding-top: 50px;
  text-align: center;
}

.form-group textarea:focus {
  padding-top: 0px;
  text-align: center;
}

.submit-button {
  background-color: var(--dark-color-background);
  color: var(--dark-color-font);
  font-size: 16px;
}

.submit-button,
.form-group select,
.form-group input {
  text-align: center;
  height: 40px;
}

.submit-button:hover {
  color: var(--dark-color-background);
  background-color: var(--dark-color-font);
}

iframe {
  width: 100%;
  height: 400px;
  border: 1px solid var(--dark-color-background);
}
/*
.column {
  width: 48%;
  padding: 0 10px;
}

.p-email {
  font-size: 1.2em;
  color: #333;
}

.manager h3 {
  margin: 0;
  font-size: 1.1em;
}

.contact-info {
  font-size: 1em;
  color: #333;
  margin-bottom: 5px;
}

.email {
  word-wrap: break-word;
}

form {
  text-transform: uppercase;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  box-sizing: border-box;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
}

.submit-button:hover {
  background-color: #555;
}

.success-message {
  margin-top: 20px;
  color: green;
  text-align: center;
}

.footer {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
}

@media (max-width: 768px) {
  .main-column {
    width: 100%;
  }

  .block {
    flex-direction: column;
  }

  .column {
    width: 100%;
    margin-bottom: 20px;
  }
} */
</style>
