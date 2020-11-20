<template>
    <div class="nomeCompleto">
        <p><strong>Nome Completo: </strong>{{ nomeCompleto }}</p>
    </div>
</template>

<script>
export default {
    props : {
        nome :{
            type: String,
            required: true
        },
        sobrenome : {
            type: String,
            required: true
        }
    },
    computed : {
        nomeCompleto(){
            return this.nome + ' ' + this.sobrenome
        }
    } 
}
</script>


<style scoped>
</style>