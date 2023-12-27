<script setup>
import './styles/index.scss';
import Header from './components/Header.vue';
import { ref } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
}

</script>

<template>
  <Header @toggleDarkMode="toggleDarkMode" :isDarkMode="isDarkMode" />
  <main>
    <RouterView />
  </main>
</template>
