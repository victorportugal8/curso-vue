import {createApp} from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const emitter = mitt()
const app = createApp(App)

//configurando a instância do pacote mitt como sendo propriedade global onde estará disponível para todas as instâncias de componentes dentro de app
app.config.globalProperties.emitter = emitter

app.mount('#app')