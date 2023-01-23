<template>
  <div style="display: flex; flex-direction: row">
    <div style="flex-basis: 33%">
      <lista-filmes/>
    </div>
    <div style="flex-basis: 33%">
      <lista-pessoas/>
    </div>
    <div style="flex-basis: 33%">
      <lista-video-games/>
    </div>
  </div>
</template>

<script>
import ListaFilmes from '@/components/ListaFilmes.vue'
import ListaPessoas from '@/components/ListaPessoas.vue'
import ListaVideoGames from '@/components/ListaVideoGames.vue'

export default {
  name: 'App',
  components: {
    ListaFilmes,
    ListaPessoas,
    ListaVideoGames
  }
}
</script>

<style>

</style>
