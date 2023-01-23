<template>
    <div>
        <h5>Componente Opções</h5>
        <p>Poderíamos recuperar as opções do serviço id {{id}}</p>
    </div>
</template>

<script>
export default { //eslint-disable-next-line
    name: 'Opcoes',
    props: ['id'],
    created(){},
    beforeRouteUpdate(){
        //podemos usar os mesmos parâmetros das outras guardas - com exceção do next - (to, from)
        console.log('Guarda de componente beforeRouteUpdate')
    }
}
</script>