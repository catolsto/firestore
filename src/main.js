import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS de Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).mount('#app')
