import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import ClickOutside from './v-click-outside';

import { getTheme, setTheme } from './theme';

const savedTheme = getTheme();
setTheme(savedTheme);

const app = createApp(App);

app.directive('click-outside', ClickOutside);
app.mount('#app')

