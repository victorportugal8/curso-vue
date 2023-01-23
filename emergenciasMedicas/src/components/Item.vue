<template>
    <div class="row">
        <div class="col-1" v-if="dados.id" v-text="dados.id"/>
        <div class="col" v-if="dados.nome" v-text="dados.nome"/>
        <div class="col" v-if="dados.placa" v-text="dados.placa"/>
        <div class="col" v-if="dados.telefone" v-text="dados.telefone"/>
        <div class="col" v-if="dados.kit" v-text="dados.kit"/>
        <div class="col-2" v-if="dados.escala" v-text="dados.escala"/>
        <div class="col-2" v-if="dados.turno" v-text="dados.turno"/>
        <div class="col-1">
            <i class="bi-check2-square" style="cursor: pointer" @click="adicionarItemEquipe"></i>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default { //eslint-disable-next-line
    name: 'Item',
    props: {
        dados: Object,
        tipo: String
    },
    methods: {
        //...mapMutations(['setItemEquipe']), notação de array
        ...mapMutations({ //notação de objetos - podemos adicionar a notação de função também
            setItemEquipe: 'setItemEquipe',
            setItemEquipeVerificacao: (commit, payload) =>{
                //podemos implementar uma camada de lógica antes de realizar o commit
                /*
                RESERVA DO ITEM
                verificar se o item está disponível
                    se sim, marcar no back-end que ele está sendo utilizado em uma equipe;
                    se não, apresentar uma mensagem de controle indicando que o item já está em uso
                após isso, devemos efetivar o commit, e ele precisa de 2 parâmetros: o nome da mutation e o payload
                */
               commit('setItemEquipe', payload)

            }
        }),
        adicionarItemEquipe(){
            //ABORDAGEM CORRETE - UTILIZANDO O VUEX
            let item = {
                tipo: this.tipo,
                dados: this.dados
            }
            //this.setItemEquipe(item)
            this.setItemEquipeVerificacao(item)

            //this.$store.commit('setItemEquipe', item) -> envio com dois parâmetros
            /*
            this.$store.commit({ //envio com notação de objeto, e podemos criar quantos atributos forem necessários
                type: 'setItemEquipe', // o type deve corresponder ao nome da mutations que será comitada
                item
            })
            */

            /* ABORDAGEM INCORRETA - NÂO UTILIZA O VUEX
            let t = this.tipo
            let d = this.dados

            t == 'enfermeiros' ? this.$store.state.equipe.enfermeiro = d.nome : null
            t == 'socorristas' ? this.$store.state.equipe.socorrista = d.nome : null
            t == 'medicos' ? this.$store.state.equipe.medico = d.nome : null
            t == 'carros' ? this.$store.state.equipe.carro = d.placa : null
            t == 'telefones' ? this.$store.state.equipe.telefone = d.telefone : null
            t == 'kits-de-reanimacao' ? this.$store.state.equipe.kitDeReanimacao = d.kit : null
            */
        }
    }
}
</script>