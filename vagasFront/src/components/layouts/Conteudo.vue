<template>
  <div>
    <keep-alive>
      <component :is="conteudo"/>
    </keep-alive>
  </div>
</template>

<script>
  import Home from '@/components/views/Home.vue'
  import PublicarVaga from '@/components/views/PublicarVaga.vue'

  export default{
    name: 'ConteudoPrincipal',
    components: {
      Home,
      PublicarVaga
    },
    props: {
      conteudo: {
        type: String,
        required: true
      }
    },
  }
</script>

<style module>
  .teste-1{
    background-color: red;
  }
  #teste-2{
    background-color: yellow;
  }
</style>