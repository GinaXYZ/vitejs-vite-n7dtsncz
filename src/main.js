import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css';
import router from './router/router.js'
import { createPinia } from 'pinia';
import { useAuthStore } from './components/auth.js';
import { watch } from 'vue';


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

const authStore = useAuthStore();
authStore.initAuth();
watch(
  () => authStore.isLoggedIn,
  (newValue) => {
  }
);
app.mount('#app');
