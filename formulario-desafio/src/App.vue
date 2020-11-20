<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<Rotulo nome="Nome">
					<input type="text" v-model="pessoa.nome">
				</Rotulo>

				<Rotulo nome="Sobrenome">
					<input type="text" v-model="pessoa.sobrenome">
				</Rotulo>

				<Rotulo nome="Senha">
					<input type="password" v-model="pessoa.senha">
				</Rotulo>
				
				<Rotulo nome="Armazenar Dados ?">
					<span>Sim
						<input type="radio" value="Sim" v-model="pessoa.armazenarDados">
					</span>

					<span>Não
						<input type="radio" value="Não" v-model="pessoa.armazenarDados" >
					</span>
				</Rotulo>

				
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
					<CabecalhoField campo="Nome" :valor="pessoa.nome" />
					<CabecalhoField campo="Sobrenome" :valor="pessoa.sobrenome" />
					<CabecalhoField campo="Senha" :valor="pessoa.senha" />
					<CabecalhoField campo="Armazenar Dados ?" :valor="pessoa.armazenarDados" />
					<NomeCompleto :nome="pessoa.nome" :sobrenome="pessoa.sobrenome" />
			</div>
		</div>
	</div>
</template>

<script>
	import Rotulo from './components/Rotulo.vue'
	import NomeCompleto from '@/components/NomeCompleto.vue'
	import CabecalhoField from '@/components/CabecalhoField.vue'

	export default {
		name: 'app',
		components: {
			Rotulo,
			NomeCompleto,
			CabecalhoField
		},
		data() {
			return {

				pessoa: {
					nome: '',
					sobrenome: '',
					senha: ''
				}
			}
		}
	}
</script>

<style>
	body {
		background-color: #ECECEC;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		display: flex;
		flex-direction: column;
	}

	.conteudo {
		display: flex;
	}

	.painel {
		flex: 1;
		background: #FFF;
		margin: 0px 10px;
		padding: 20px;
		border: 1px solid #AAA;
		border-radius: 5px;
	}

	.painel .cabecalho {
		width: 100%;
		background-color: #DDD;
		padding: 10px 0px;
		border-radius: 5px;
		font-size: 1.4rem;
	}

	#app form button {
		float: right;
		margin: 10px 0px;
		padding: 10px 20px;
		font-size: 1.4rem;
		border-radius: 5px;
		color: #FFF;
		background-color: #2196F3;
	}

	#app h1 {
		font-weight: 200;
		margin: 20px;
		padding: 0;
	}

	.mr-4 {
		margin-right: 40px;
	}
</style>