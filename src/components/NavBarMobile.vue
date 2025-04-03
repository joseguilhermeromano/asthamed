<script setup lang="ts">
import { ref } from 'vue';
import {
  faBars,
  faTimesCircle,
  faPhone,
  faMapMarkerAlt,
  faDollarSign,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faInstagram,
  faFacebookF,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
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
  <header class="mobile-header">
    <div class="mobile-logo">
      <img src="../assets/imgs/logo.png" alt="Logo Asthamed" class="logo" />
    </div>
    <nav class="header-menu">
      <ul class="list-top">
        <li>
          <span>
            <i class="phone-circle"><FontAwesomeIcon :icon="faPhone" /></i>
            <a href="tel:+556230923817">Telefone <span>(62) 3092-3817</span></a>
          </span>
        </li>
        <li>
          <span>
            <i class="whats-circle"
              ><FontAwesomeIcon :icon="faWhatsapp" class="whatsapp-icon"
            /></i>
            <a href="https://wa.me/62992618842"
              >Whatsapp <span>(62) 99261-8842</span></a
            >
          </span>
        </li>
        <li>
          <span class="cart-button">
            <FontAwesomeIcon :icon="faShoppingCart" />
            <a href="/carrinho"></a>
          </span>
        </li>
        <li>
          <span class="budget-button">
            <FontAwesomeIcon :icon="faDollarSign" />
            <a href="/orcamento">ORÇAMENTO RÁPIDO</a>
          </span>
        </li>
        <li>
          <span class="social-icons">
            <a href="https://www.instagram.com/asthamedhospitalar/"
              ><FontAwesomeIcon :icon="faInstagram"
            /></a>
            <a href="https://www.facebook.com/"
              ><FontAwesomeIcon :icon="faFacebookF"
            /></a>
            <a href="https://www.youtube.com/?gl=BR"
              ><FontAwesomeIcon :icon="faYoutube"
            /></a>
          </span>
        </li>
      </ul>
    </nav>
  </header>
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

    <transition name="fade">
      <div v-if="isMenuOpen" class="menu-overlay" @click="toggleMenu"></div>
    </transition>

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

.mobile-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  margin-top: 3%;
}

.header-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 20px 0px;
}

.list-top {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0 10px;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
}

.list-top span {
  display: flex;
  align-items: center;
  gap: 10px;
}

.list-top li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-top li:nth-child(-n + 2) {
  flex: 0 0 calc(50% - 20px) !important;
}

.list-top li:nth-child(5) {
  flex: 0 0 100% !important;
}

.phone-circle {
  background-color: #599aa8;
  color: white;
  border-radius: 50%;
  width: 41px;
  height: 41px;
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.whats-circle {
  background-color: #70aa7d;
  color: white;
  border-radius: 50%;
  width: 41px;
  height: 41px;
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-top a {
  text-decoration: none;
  color: #10404b;
  font-size: 16px;
  font-weight: bold;
}

.list-top a span {
  font-weight: normal;
  color: #10404b;
}

.cart-button {
  border: 1px solid #10404b;
  border-radius: 7px;
  padding: 15px 10px 15px 15px;
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  width: 3.5vh;
  color: #10404b;
}

.cart-button a {
  color: #10404b;
  font-weight: normal;
}

.cart-button:hover {
  background-color: #10404b;
  color: white;
}

.cart-button:hover a {
  color: white;
}

.budget-button {
  background-color: red;
  padding: 10px 11px;
  color: white;
  font-size: 20px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 22px;
  font-family: 'Kanit', sans-serif;
  transition: transform 0.6s ease-in-out;
  width: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.budget-button a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Kanit', sans-serif;
}

.budget-button:hover {
  background-color: #8f1313;
  transition: transform 0.6s ease-in-out;
}

.social-icons a {
  margin-right: 10px;
  font-size: 25px;
  color: rgba(16, 64, 75, 0.98);
  transition: transform 0.6s ease-in-out;
}

.social-icons a:hover {
  transition: transform 0.6s ease-in-out;
  transform: translateY(-2px);
  color: #599aa8;
}

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

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

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
