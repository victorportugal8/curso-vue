<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vagas/>
      </div>
    </div>

    <lista-vagas>
      <!-- <template v-slot:titulo="slotProps">{{slotProps.dadosTitulo.titulo}}</template>
      <template v-slot:default="slotProps">{{slotProps.vagas}}</template>
      <template v-slot:rodape="slotProps">{{slotProps.dadosRodape.titulo}}</template> -->
    </lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <indicador titulo="Vagas abertas" indicador="100" bg="bg-dark" color="text-white"/>
      </div>

      <div class="col-4">
        <indicador titulo="Profissionais cadastrados" indicador="225" bg="bg-dark" color="text-white"/>
      </div>

      <div class="col-4">
        <indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-white" color="text-dark"/>
      </div>
    </div>
  </div>
</template>

<script>
  import PesquisarVagas from '@/components/comuns/PesquisarVagas.vue'
  import ListaVagas from '@/components/comuns/ListaVagas.vue'
  import Indicador from '@/components/comuns/Indicador.vue'

  export default{
    name: 'HomeView',
    components: {
      PesquisarVagas,
      Indicador,
      ListaVagas
    },
    data: () =>({
      usuariosOnline: 0
    }),
    methods: {
      pegaUsuariosOn(){
        this.usuariosOnline = Math.floor(Math.random() * 101)
      }
    },
    created(){
      setInterval(this.pegaUsuariosOn, 3000)
    }
  }
</script>

<style scoped></style>