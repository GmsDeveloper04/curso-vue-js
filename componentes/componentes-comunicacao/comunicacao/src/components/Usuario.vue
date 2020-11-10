<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <input type="text" placeholder="Nome" v-model="usuario.nome">
        <input type="text" placeholder="Sobrenome" v-model="usuario.sobrenome">
        <input type="Number" placeholder="Idade" v-model="usuario.idade">
        <hr>
        <div class="componentes">
            <app-usuario-info :usuario="usuario"/>
            <app-usuario-editar />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            usuario : {
                nome : 'Guilherme',
                sobrenome : 'Maciel',
                idade : 18
            }
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
