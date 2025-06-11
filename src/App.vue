<template>
  <Header />
  <router-view />
</template>

<script setup>
import Header from './components/Header.vue'
import { onMounted } from 'vue';
import { useAuthStore } from './components/auth.js';
import { loadCartFromDB } from './components/cartState.js';

const authStore = useAuthStore();

onMounted(() => {
  authStore.initAuth();
  loadCartFromDB();
});
</script>