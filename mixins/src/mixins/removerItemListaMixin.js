export default {
    methods: {
        removerItem(){
            this.itens.pop()
        }
    },
    created(){
        console.log('RemoverItemListaMixin criado')
    }
}