<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

library.add(faShoppingCart, faDollarSign, faWhatsapp);
</script>

<template>
  <div class="carousel">
    <div class="carousel-header">
      <h2 class="title">Materiais Hospitalares</h2>
      <a href="#" class="view-all">confira todos ></a>
    </div>
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel-track">
          <div class="carousel-item">
            <div class="card">
              <div class="card-cart">
                <div class="cart-icon">
                  <font-awesome-icon :icon="faShoppingCart" />
                </div>

                <img
                  src="../assets/imgs/mascara-tripla-elastico.png"
                  width="150"
                  height="125"
                />
              </div>
              <h3 class="product-title">MASCARA TRIPLA ELASTICO C/50</h3>
              <a href="#" class="saiba-mais">SAIBA MAIS</a>
              <div class="actions">
                <button class="budget">
                  <i><font-awesome-icon :icon="faDollarSign" /></i> ORÇAMENTO
                </button>
                <button class="whatsapp">
                  <i><font-awesome-icon :icon="faWhatsapp" /></i>
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <div class="card-cart">
                <div class="cart-icon">
                  <font-awesome-icon :icon="faShoppingCart" />
                </div>

                <img
                  src="../assets/imgs/touca-sanfonada.png"
                  width="150"
                  height="125"
                />
              </div>
              <h3 class="product-title">TOUCA SANFONADA DESC. C/100</h3>
              <a href="#" class="saiba-mais">SAIBA MAIS</a>
              <div class="actions">
                <button class="budget">
                  <i><font-awesome-icon :icon="faDollarSign" /></i> ORÇAMENTO
                </button>
                <button class="whatsapp">
                  <i><font-awesome-icon :icon="faWhatsapp" /></i>
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <div class="card-cart">
                <div class="cart-icon">
                  <font-awesome-icon :icon="faShoppingCart" />
                </div>

                <img
                  src="../assets/imgs/agua-autoclave.png"
                  width="150"
                  height="125"
                />
              </div>
              <h3 class="product-title">AGUA P/ AUTOCLAVE 5L</h3>
              <a href="#" class="saiba-mais">SAIBA MAIS</a>
              <div class="actions">
                <button class="budget">
                  <i><font-awesome-icon :icon="faDollarSign" /></i> ORÇAMENTO
                </button>
                <button class="whatsapp">
                  <i><font-awesome-icon :icon="faWhatsapp" /></i>
                </button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <div class="card-cart">
                <div class="cart-icon">
                  <font-awesome-icon :icon="faShoppingCart" />
                </div>

                <img
                  src="../assets/imgs/gel-ultrassom.png"
                  width="150"
                  height="125"
                />
              </div>
              <h3 class="product-title">GEL P/ ULTRASSOM 5KG</h3>
              <a href="#" class="saiba-mais">SAIBA MAIS</a>
              <div class="actions">
                <button class="budget">
                  <i><font-awesome-icon :icon="faDollarSign" /></i> ORÇAMENTO
                </button>
                <button class="whatsapp">
                  <i><font-awesome-icon :icon="faWhatsapp" /></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap');
.carousel {
  text-align: center;
  max-width: 53%;
  margin: auto;
  position: relative;
}

@media (max-width: 1366px) {
  .carousel {
    max-width: 75%;
  }
}

.carousel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 24px;
  font-weight: bold;
  color: #1e2a4a;
  font-family: 'kanit', sans-serif;
}
.view-all {
  color: #1e2a4a;
  font-size: 14px;
}

.carousel-container {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-item {
  flex: 1 0 230px;
  max-width: 230px;
  padding: 10px;
}
.card {
  background-color: #fff;
  border-radius: 25px;
  padding: 10px;
  margin: 0px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  min-height: 100%;
}

.card:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100.1%;
  height: 100%;
  background-image: url(../assets/imgs/bg-card-produto.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  content: '';
  transition: 0.3s all;
  z-index: 0;
}

.card-cart {
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 8rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-cart img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.cart-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #10404b;
  color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.cart-icon:hover {
  cursor: pointer;
  background: #599aa8;
}
.product-image {
  width: 100px;
  height: auto;
}
.product-title {
  flex-grow: 1;
  font-size: 18px;
  font-family: 'kanit', sans-serif;
  font-weight: bold;
  position: relative;
  color: #10404b;
  z-index: 1;
}
.saiba-mais {
  color: #1e2a4a;
  text-decoration: underline;
  font-size: 12px;
  display: block;
  margin-top: -20px;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}
.actions {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
}
.budget {
  background: #d92d2d;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 12px;
  display: flex;
  align-items: center;
  position: relative;
}

.budget:hover {
  cursor: pointer;
  background-color: #8f1313;
}

.budget i {
  margin-right: 5px;
  font-size: 16px;
}
.whatsapp {
  background: #25d366;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  font-size: 16px;
  position: relative;
  margin-left: 24%;
}

.whatsapp:hover {
  cursor: pointer;
  background-color: #2fb54b;
}

.whatsapp i {
  margin: 0 auto;
}
.nav {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #1e2a4a;
}
.prev {
  left: -40px;
}
.next {
  right: -40px;
}
.indicators {
  margin-top: 10px;
}
.dot {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}
.active {
  background-color: #1e2a4a;
}
</style>
