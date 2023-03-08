import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import i18n_ko from '@/i18n/ko.json'

loadFonts()

const messages = {
    ko: i18n_ko
}

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
    locale: 'ko',
    messages
})
  app.use(i18n)
  app.use(pinia)
  app.use(router)
  app.use(vuetify)
  app.mount('#app')
