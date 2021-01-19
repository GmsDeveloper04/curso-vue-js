<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr>
      <p><strong>Código:</strong>{{id}}</p>
      
      <!-- :to="`/usuario/${id}/editar`" -->
      <!-- :to="{name : 'editarUsuario', params: {id: $route.params.id }}"> -->
      <!-- :to="{name : 'editarUsuario', params: {id: id }}"> -->
      <!--  query: {completo: true, lingua:'pt'} <- inserindo query parameters -->
      <router-link tag="button" primario
        :to="{name : 'editarUsuario', params: {id },
            query: {completo: true, lingua:'pt'}
            , hash:'#rodape'}"> 

          Editar
      </router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next){
      //console.log(this.id); //NAO TEM ACESSO POIS O COMPONENTE AINDA NAO FOI CRIADO, NEM A COMPUTED NE NADA, THIS NAO APONTA PARA O COMPONENTE
      console.log('dentro do componente detalhes')
      next(vm => {
        console.log(this.id) // se quiser buscar o id (nao é tão usual)
      })
    const autenticado = true
    if(autenticado){
      next()
    }else {
      next(autenticado)
    }
    

    }
    // data(){
    //     return {
    //         id : this.$route.params.id
    //     }
    // },
    // watch : {
    //     $$route(to, from){
    //         this.id = to.params.id
    //     }
    // }
}
</script>

<style>

</style>