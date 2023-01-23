<template>
    <div>
        <h5>Componente Indicadores</h5>
        <p>Poderíamos recuperar os indicadores do serviço id {{id}}</p>
    </div>
</template>

<script>
export default { //eslint-disable-next-line
    name: 'Indicadores',
    props: ['id'],
    created(){}
}
</script>