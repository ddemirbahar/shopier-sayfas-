import { createApp } from "vue";
import { createPinia } from "pinia"; // Pinia'yı içe aktar
import App from "./app.vue";
import router from "./router"; // Router'ı içe aktar

const app = createApp(App);

// Pinia ve Router'ı uygulamaya ekle
const pinia = createPinia(); // Pinia örneğini oluştur
app.use(pinia); // Pinia'yı kullan
app.use(router); // Router'ı kullan

app.mount("#app"); // Uygulamayı başlat
