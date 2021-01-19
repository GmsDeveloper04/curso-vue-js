<template>
  <div class="usuario">
      <h2>Usuários</h2>
      <hr>
      
      <router-view/>
      <button @click="irParaInicio" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
    methods: {
        irParaInicio(){
             //NAVEGAÇÃO IMPERATIVA
            // this.$router.push('/')
            // this.$router.push({path: '/'})
            this.$router.push({name: 'inicio'})
        }
    },
    
}
</script>

<style>

</style>