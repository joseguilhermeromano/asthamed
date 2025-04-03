<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import NavBarMobile from './components/NavBarMobile.vue';
import CarouselProducts from './components/CarouselProducts.vue';

import { ref, onMounted } from 'vue';

const windowWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <NavBar v-if="windowWidth >= 955" />
  <NavBarMobile v-else />
  <CarouselProducts />
</template>

<style scoped>
@media (max-width: 955px) {
  .NavBar {
    display: none;
  }
}
</style>
