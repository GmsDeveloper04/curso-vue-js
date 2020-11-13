<template>
  <div id="app">
    <Tabela/>
    <UsuarioSelecionado/>

  </div>
</template>

<script>
import Tabela from '@/components/Tabela.vue'
import UsuarioSelecionado from '@/components/UsuarioSelecionado.vue'

export default {
  name: 'App',
  components: {
    Tabela,
    UsuarioSelecionado
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
