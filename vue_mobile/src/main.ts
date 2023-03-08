import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(Router)
app.use(pinia)
app.mount('#app')
