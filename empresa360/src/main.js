import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const Vue = createApp(App)
Vue.use(router) //adicionando as configurações de rota a instância do Vue
Vue.mount('#app')