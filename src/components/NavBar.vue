<script setup lang="ts">
import {
  faPhone,
  faShoppingCart,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faInstagram,
  faFacebookF,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import linhaOdontologica from '../assets/imgs/linha-odontologica-white.png';
import linhaEstetica from '../assets/imgs/linha-estetica.png';
import linhaVeterinaria from '../assets/imgs/linha-veterinaria.png';
import medicamentosInjetaveis from '../assets/imgs/medicamentos-injetaveis.png';
import materiaisHospitalares from '../assets/imgs/materiais-hospitalares.png';
</script>

<template>
  <header>
    <div class="navbar-top">
      <div class="logo">
        <img src="../assets/imgs/logo.png" alt="Logo Asthamed" class="logo" />
      </div>
      <nav class="navbar-menu">
        <ul class="list-top">
          <li>
            <span>
              <i class="phone-circle"><FontAwesomeIcon :icon="faPhone" /></i>
              <a href="tel:+556230923817"
                >Telefone <span>(62) 3092-3817</span></a
              >
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
              <a href="/carrinho">+ CARRINHO</a>
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
        <hr />
        <ul class="list-bottom">
          <li>
            <span> <a href="/sobre"> Sobre </a></span>
          </li>
          <li>
            <span> <a href="/produtos"> Produtos </a></span>
          </li>
          <li>
            <span> <a href="/fornecedores"> Fornecedores </a></span>
          </li>
          <li>
            <span> <a href="/depoimentos"> Depoimentos </a></span>
          </li>
          <li>
            <span> <a href="/duvidas"> Dúvidas </a></span>
          </li>
          <li>
            <span> <a href="/blog"> Blog </a></span>
          </li>
          <li>
            <span> <a href="/orcamento"> Orçamento </a></span>
          </li>
          <li>
            <span> <a href="/fale-conosco"> Fale Conosco </a></span>
          </li>
          <li>
            <span> <a href="/asthamedcare"> ASTHAMEDCARE </a></span>
          </li>
        </ul>
      </nav>
    </div>
    <nav class="navbar-bottom">
      <ul>
        <li>
          <span>
            <img :src="linhaOdontologica" alt="Linha Odontológica" />
            <a href="/produtos/linha-odontologica"> Linha Odontológica </a>
          </span>
        </li>
        <li>
          <span>
            <img :src="linhaEstetica" alt="Linha Estética" />
            <a href="/produtos/linha-estetica"> Linha Estética </a>
          </span>
        </li>
        <li>
          <span>
            <img :src="linhaVeterinaria" alt="Linha Veterinária" />
            <a href="/produtos/linha-veterinaria"> Linha Veterinária </a>
          </span>
        </li>
        <li>
          <span>
            <img :src="medicamentosInjetaveis" alt="Medicamentos Injetáveis" />
            <a href="/produtos/medicamentos-injetaveis">
              Medicamentos Injetáveis
            </a>
          </span>
        </li>
        <li>
          <span>
            <img :src="materiaisHospitalares" alt="Materiais Hospitalares" />
            <a href="/produtos/materiais-hospitalares">
              Materiais Hospitalares
            </a>
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap');

.logo {
  width: 9.15625rem;
  height: 5.90625rem;
  margin-left: 20px;
}

.navbar-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px; /* Define uma largura máxima */
  margin: 0 auto; /* Centraliza na tela */
  width: 100%;
  padding: 20px 0px;
}

.list-top {
  display: flex;
  align-items: center;
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

.phone-circle {
  background-color: #599aa8;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
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
  width: 35px;
  height: 35px;
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
  font-size: 15px;
  font-weight: bold;
}

.list-top a span {
  font-weight: normal;
  color: #10404b;
}

.cart-button {
  border: 1px solid #10404b;
  border-radius: 7px;
  padding: 10px 33px;
  font-family: 'Kanit', sans-serif;
  font-size: 15px;
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
}

.budget-button a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Kanit', sans-serif;
}

.budget-button:hover {
  background-color: #8f1313;
  transition: transform 0.6s ease-in-out;
}

.social-icons a {
  margin-right: 10px;
  font-size: 25px;
  color: black;
  transition: transform 0.6s ease-in-out;
}

.social-icons a:hover {
  transition: transform 0.6s ease-in-out;
  transform: translateY(-2px);
  color: #599aa8;
}

.list-bottom {
  list-style: none;
  display: flex;
  justify-content: start;
  gap: 25px;
  margin: 0px;
  padding: 0px;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
}

.list-bottom li {
  display: flex;
  align-items: center;
  position: relative;
}

.list-bottom span {
  display: flex;
  align-items: center;
}

.list-bottom a {
  text-decoration: none;
  color: #000;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px;
}

.list-bottom a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0px;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.list-bottom a:hover::after {
  width: 100%;
  left: 0;
}

.navbar-bottom {
  background-color: #10404b;
  padding: 15px 0px;
  text-align: center;
  font-family: 'PT Sans Caption', sans-serif;
}

.navbar-bottom ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0px;
}

.navbar-bottom li {
  display: flex;
  align-items: center;
  position: relative;
}

.navbar-bottom span {
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar-bottom a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px;
}

.navbar-bottom img {
  width: auto;
  height: 24.89px;
  transition: transform 0.3s ease-in-out;
}

.navbar-bottom span:hover img {
  transition: transform 0.3s ease-in-out;
  transform: scaleX(-1);
}

.navbar-bottom a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -3px;
  width: 0;
  height: 1px;
  background-color: white;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.navbar-bottom a:hover::after {
  width: 100%;
  left: 0;
}
</style>
