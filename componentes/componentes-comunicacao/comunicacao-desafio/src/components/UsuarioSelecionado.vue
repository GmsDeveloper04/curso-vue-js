<template>
    <div>

    <div v-if="usuario != undefined"  class="usuarioBox">
        <h1>ID: {{usuario.id}}</h1>
        <h1>ID: {{usuario.usuarioNome}}</h1>
    </div>

    <div v-else class="usuarioBox">
        <h1>Não existe usuario selecionado</h1>
    </div>

    </div>
</template>

<script>
import barramento from '@/barramento.js'
export default {
    data(){
        return {
            usuario : undefined
        }
    },
    created(){
        barramento.ouvirEvento('selecionouUsuarioTabela',usuarioSelecionado => {
            this.usuario = usuarioSelecionado;
        })
    }
    
}
</script>


<style>
    .usuarioBox{
        position: fixed;
        margin-left:auto;
        border: solid;
        border-color: black;
        width: 500px;
        height: 200px;
   
    }
</style>