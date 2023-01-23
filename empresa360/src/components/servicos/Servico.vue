<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            {{dados.servico}}
        </div>
        <div class="card-body">
            <p class="card-text">{{dados.descricao}}</p>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'
export default { //eslint-disable-next-line
    name: 'Servico',
    mixins: [ApiMixin],
    props: ['id'],
    created(){
        this.pegaDadosAPI(`http://localhost:3000/servicos/${this.id}`)
    },
    beforeRouteUpdate(to){
        if(to.params.id !== undefined) this.pegaDadosAPI(`http://localhost:3000/servicos/${to.params.id}`)
        //next: faz com que o fluxo de navegação siga em frente
    }

    // watch: {
    //     $route(to){
    //        if(to.params.id !== undefined) this.pegaDadosAPI(`http://localhost:3000/servicos/${to.params.id}`) 
    //     }
    // }
}
</script>