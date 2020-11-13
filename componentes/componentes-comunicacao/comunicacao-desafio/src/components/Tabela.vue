<template>
    <div >
        <table class="tabela hoverTable">
            <thead>
                <th>ID</th>
                <th>Nome</th>
            </thead>

            <tbody>
                <tr 
                    v-for="(usuario,index) in usuarios" :key="index"
                    @click="selecionarUsuario(index)">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.usuarioNome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import barramento from '@/barramento.js'

export default {

    data() {
        return {
            usuarios : [
                { id : 1, usuarioNome: 'Guilherme' },
                { id : 2, usuarioNome: 'Beatriz' },
                { id : 3, usuarioNome: 'Neia' }
            ]
        }
    },
    methods : {
        selecionarUsuario(index){
            let usuarioSelecionado = this.usuarios[index];

            
            barramento.emitirEvento('selecionouUsuarioTabela',{... usuarioSelecionado})
        }
    }
}
</script>


<style scoped>
    table{
        table-layout: fixed;
        width: 500px;
        border: solid;
        border-color: black;
    }
    th, td {
        text-align: left;
        padding: 8px;
    }

    .hoverTable tr:hover {
        background-color: rgb(221, 221, 205);
    }
</style>