import "./assets/css/bootstrap.css"
import 'swiper/css';
import 'swiper/css/pagination';
import "./assets/css/dark.css"
import "./assets/css/animate.css"
import "./assets/css/custom.css"
import "./assets/css/font-icons.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/style.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
