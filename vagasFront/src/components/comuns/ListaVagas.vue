<template>
    <!-- <slot name="titulo" :dadosTitulo="{titulo: 'Título lista', nVagas: 15}">
        <p>Título da lista de vagas</p>
    </slot> -->

    <slot :vagas="vagas">
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <vaga v-bind="vaga"/>
            </div>
        </div>
    </slot>
    
    <!-- <slot name="rodape" :dadosRodape="{titulo: 'Rodapé lista', paginacao: {nPagina: 10, paginaAtual: 5}}">
        <p>Rodapé da lista de vagas</p>
    </slot> -->
</template>

<script>
import Vaga from '@/components/comuns/Vagas.vue'
export default {
    name: "ListaVagas",
    data: () => ({
        vagas: []
    }),
    components: {
        Vaga
    },
    mounted(){
      this.emitter.on("filtrarVagas", vaga =>{
        const _vagas = JSON.parse(localStorage.getItem("vagas"))
        this.vagas = _vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
      })
    },
    activated(){
      this.vagas = JSON.parse(localStorage.getItem("vagas"))
    }
}
</script>