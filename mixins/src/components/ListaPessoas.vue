<template>
    <div>
        <h3>{{titulo}}</h3>
        <input type="text" placeholder="Nome da pessoa" v-model="item">
        <button type="button" @click="adicionarItem">Adicionar</button>
        <ul>
            <li v-for="(item, index) in itens" :key="index">{{item}}</li>
        </ul>
        <button type="button" @click="removerItem">Remover</button>
    </div>
</template>

<script>
import ListaMixin from '@/mixins/listaMixin'
import RemoverItemListaMixin from '@/mixins/removerItemListaMixin'

export default {
    name: 'ListaPessoas',
    data: () =>({
        titulo: 'Lista Pessoas'
    }),
    mixins: [ListaMixin, RemoverItemListaMixin]
}
</script>