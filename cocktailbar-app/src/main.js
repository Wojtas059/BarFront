import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import ClickOutside from './v-click-outside';
import router from './router';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import { getTheme, setTheme } from './theme';

const savedTheme = getTheme();
setTheme(savedTheme);
console.log(process.env.VUE_APP_GOOGLE_MAPS_API_KEY);
const app = createApp(App);
app.use(router);
app.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
        libraries: 'places', 
    },
  });

app.directive('click-outside', ClickOutside);
app.mount('#app')

