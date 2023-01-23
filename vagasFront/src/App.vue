<template>
  <div>
    <vagas-favoritas/>
    <topo-padrao @navegar="componente = $event"/>
    <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{alerta.titulo}}</h5>
      </template>
      <p>{{alerta.descricao}}</p>
    </alerta>
    <conteudo v-if="visibilidade" :conteudo="componente"/>
  </div>
</template>

<script>
import Alerta from '@/components/comuns/Alerta.vue'
import Conteudo from '@/components/layouts/Conteudo.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () =>({
    visibilidade: true,
    componente: "Home",
    exibirAlerta: false,
    alerta: {titulo: "", descricao: "", tipo: ""}
  }),
  components: {
    Alerta,
    Conteudo,
    TopoPadrao,
    VagasFavoritas
  },
  mounted(){
    this.emitter.on('alerta', (a) =>{
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta= false, 5000)
    })
  }
}
</script>

<style scoped></style>