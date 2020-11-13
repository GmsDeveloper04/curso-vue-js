<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome completo: {{ usuario.nome }}</p>
        <p>Sobrenome: {{ usuario.sobrenome }}</p>
        <p>Idade: {{ usuario.idade }}</p>
        <button @click="atualizaUsuarioPai">Atualizar Pai (event)</button>
        <button @click="reiniciarUserFnc">Reiniciar Usuario (CallBack)</button>
    </div>
</template>

<script>

import barramento from '@/barramento'

export default {

    props:{
        usuario : {
            type: Object,
            default : function () { return {nome : 'anonimo', sobrenome: 'sobre anonimo', idade: 99} }
        },
        reiniciarUserFnc : Function //ATUALIZA PAI VIA CALL BACK
    },
    methods : {
        atualizaUsuarioPai(){
            //PASSA ATUALIZACAO PARA O PAI VIA EVENT, O PAI ATUALIZA A PROPS USUARIO DE VOLTA
            barramento.$emit('alterouUsuario',
                {
                    nome : 'anonimo',
                    sobrenome: 'sobre anonimo',
                    idade: 99
                })
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
