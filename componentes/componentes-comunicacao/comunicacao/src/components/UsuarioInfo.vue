<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome completo: {{ usuario.nome }}</p>
        <p>Sobrenome: {{ usuario.sobrenome }}</p>
        <p>Idade: {{ usuario.idade }}</p>
    </div>
</template>

<script>
export default {
    props:{
        usuario : {
            type: Object,
            required: true,
            //default: "caso string ou int algum valor simples, objetos usa logica com funcao",
            default : function () { return {nome : 'anonimo', sobrenome: 'sobre anonimo', idade: 99} }
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
