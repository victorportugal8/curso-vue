<template>
    <div>
        <h3>{{titulo}}</h3>
        <input type="text" placeholder="Nome do filme" v-model="item">
        <button type="button" @click="adicionarItem">Adicionar</button>
        <ul>
            <li v-for="(item, index) in itens" :key="index">{{item}}</li>
        </ul>
        <button type="button" @click="removerItem">Remover</button>
    </div>
</template>

<script>
import ListaMixin from '@/mixins/listaMixin'
import RemoverItem from '@/mixins/removerItemListaMixin'

export default {
    name: 'ListaFilmes',
    data: () =>({
        titulo: 'Lista Filmes'
    }),
    mixins: [ListaMixin, RemoverItem],
    created(){
        console.log('ListaFilmes criado')
    }
}
</script>