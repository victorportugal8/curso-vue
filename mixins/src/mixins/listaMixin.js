export default {
    data: () =>({
        titulo: 'Lista Padrão',
        itens: [],
        item: ''
    }),
    methods: {
        adicionarItem(){
            this.itens.push(this.item)
            this.item = ''
        }
    },
    created(){
        console.log('ListaMixin criado')
    }
}