import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from './router'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import i18n_ko from '@/i18n/ko.json'

const messages = {
    ko: i18n_ko
}

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
    locale: 'ko',
    messages
});

app.use(i18n)
app.use(Router)
app.use(pinia)
app.mount('#app')
