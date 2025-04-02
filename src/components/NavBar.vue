<script setup lang="ts">
import linhaOdontologica from '../assets/linha-odontologica-white.png';
import linhaEstetica from '../assets/linha-estetica.png';
import linhaVeterinaria from '../assets/linha-veterinaria.png';
import medicamentosInjetaveis from '../assets/medicamentos-injetaveis.png';
import materiaisHospitalares from '../assets/materiais-hospitalares.png';
</script>

<template>
  <header>
    <nav class="navbar-inferior">
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

.navbar-inferior {
  background-color: #10404b;
  padding: 15px 0px;
  text-align: center;
  font-family: 'PT Sans Caption', sans-serif;
}

.navbar-inferior ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0px;
}

.navbar-inferior li {
  display: flex;
  align-items: center;
  position: relative;
}

.navbar-inferior span {
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar-inferior a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px;
}

.navbar-inferior img {
  width: auto;
  height: 24.89px;
  transition: transform 0.3s ease-in-out;
}

.navbar-inferior span:hover img {
  transition: transform 0.3s ease-in-out;
  transform: scaleX(-1);
}

.navbar-inferior a::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -3px;
  width: 0;
  height: 1px;
  background-color: white;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.navbar-inferior a:hover::after {
  width: 100%;
  left: 0;
}
</style>
