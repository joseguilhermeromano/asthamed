import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHome, faCog } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faUser, faHome, faCog, faHeart, faGithub);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
