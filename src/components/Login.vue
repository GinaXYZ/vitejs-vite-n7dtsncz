<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './auth.js';

const username = ref('');
const password = ref('');
const message = ref('');
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  try {
    await authStore.login(username.value, password.value);
    message.value = 'Login erfolgreich!';
    import('./cartState.js').then(module => {
      module.mergeCarts();
    });
    router.push('/profile');
  } catch (error) {
    console.error('Login-Fehler:', error.message);
    message.value = error.message;
  }
};
</script>

<template>
  <div>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Benutzername" required />
        <input v-model="password" type="password" placeholder="Passwort" required />
        <button type="submit">Login</button>
      </form>
      <p>{{ message }}</p>
      <p class="register-link">
        Noch kein Konto? <router-link to="/register">Hier registrieren</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.register-link {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.register-link a {
  color: #0c4b47;
  text-decoration: underline;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 8rem;
  max-width: 400px;
  padding: 2rem 1rem;
  text-align: center;
  font-family: 'Helvetica', sans-serif;
  color: #0c4b47;
}
</style>