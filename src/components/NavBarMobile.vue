<script setup lang="ts">
import { ref } from 'vue';
import {
  faBars,
  faTimesCircle,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menuItems = [
  { text: 'SOBRE', link: '/sobre' },
  { text: 'PRODUTOS', link: '/produtos' },
  { text: 'FORNECEDORES', link: '/fornecedores' },
  { text: 'DEPOIMENTOS', link: '/depoimentos' },
  { text: 'DÚVIDAS', link: '/duvidas' },
  { text: 'BLOG', link: '/blog' },
  { text: 'ORÇAMENTO', link: '/orcamento' },
  { text: 'FALE CONOSCO', link: '/contato' },
  { text: 'ASTHAMEDCARE', link: '/asthamedcare' },
  { text: 'POLÍTICA DE PRIVACIDADE', link: '/privacidade' },
  { text: 'TERMOS DE USO', link: '/termos' },
];
</script>

<template>
  <footer class="mobile-footer">
    <div class="mobile-menu-bar">
      <div class="menu-icons">
        <button class="menu-toggle" @click="toggleMenu">
          <FontAwesomeIcon :icon="faBars" />
        </button>
        <a href="tel:+556230923817" class="icon-link">
          <FontAwesomeIcon :icon="faPhone" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5562992618842&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+produto&type=phone_number&app_absent=0"
          class="icon-link"
        >
          <FontAwesomeIcon :icon="faWhatsapp" />
        </a>
        <a href="" class="icon-link">
          <FontAwesomeIcon :icon="faMapMarkerAlt" />
        </a>
      </div>
    </div>

    <!-- Menu Overlay -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="menu-overlay" @click="toggleMenu"></div>
    </transition>

    <!-- Navegação -->
    <transition name="slide">
      <nav v-if="isMenuOpen" class="navbar-menu">
        <div class="menu-footer">
          <button class="close-menu" @click="toggleMenu">
            <FontAwesomeIcon :icon="faTimesCircle" />
          </button>
        </div>

        <ul>
          <li>
            <a class="logo" href="/">
              <img
                src="../assets/imgs/logo-mobile-white.png"
                alt="ASTHAMED"
                class="logo"
              />
            </a>
          </li>
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.link" @click="toggleMenu">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </footer>
</template>

<style scoped>
/* Fontes */
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap');

.mobile-footer {
  position: relative;
  bottom: 0;
  z-index: 1000;
}

.mobile-menu-bar {
  background-color: rgba(16, 64, 75, 0.98);
  border-top: 2px solid white;
  padding: 10px 0;
  z-index: 1002 !important;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.menu-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
}

.icon-link,
.menu-toggle {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 15px;
}

.logo {
  background-color: transparent !important;
  width: 356px !important;
  height: 110px !important;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.close-menu {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: white;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1002;
  cursor: pointer;
}

/* Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* Menu Principal */
.navbar-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 380px;
  height: 100vh;
  background: rgba(16, 64, 75, 0.98);
  z-index: 1001;
  overflow-x: hidden;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.menu-footer {
  padding: 1.5rem;
}

.menu-footer h1 {
  margin: 0;
  font-size: 1.5rem;
  color: white;
  font-family: 'PT Sans Caption', sans-serif;
  font-weight: 700;
}

.navbar-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-menu li a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px;
  padding: 2px 10px;
  color: white;
  text-decoration: none;
  font-family: 'PT Sans Caption', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  max-width: 342px;
  min-width: 290px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.1);
}

/* Animações */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
