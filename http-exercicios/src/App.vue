<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o seu nome">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o seu email">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary" >Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-4">Obter usuarios</b-button>
		</b-card>

		<hr>
		 <b-list-group>
			 <b-list-group-item v-for="(usuario,index) in usuarios" :key="index">
				<strong>Nome :</strong> {{ usuario.nome  }} <br>
				<strong>E-mail :</strong> {{ usuario.email }} <br>
				<strong>ID</strong> {{ index }}
			 </b-list-group-item>
		 </b-list-group>
	</div>
</template>

<script>
import axios from 'axios' //AXIOS LOCALMENTE


export default {
	data(){
		return {
			usuarios : [],
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods : {
		salvar() {
			this.$http.post('usuario.json', this.usuario)
				.then(resp => {
					this.usuario = {}
				})
		},
		obterUsuarios() {
			this.$http.get('usuario.json')
				.then(resp => {
					this.usuarios = resp.data
				})
		}
	}
	// created(){
	// 	console.log('exec')
	// 	this.$http.post('usuarios.json',{
	// 		nome : 'Maria',
	// 		email: 'maria@email.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
