<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<!-- <hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

		<transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition enter-active-class="animate__animated animate__backInRight"
			leave-active-class="animate__animated animate__backOutLeft" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="userData">Dados de Usuario</b-alert>
			<b-alert variant="warning" show v-else key="contactData">Dados de Contato</b-alert>
		</transition>

		<hr>

		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition :css="false" 
			@before-enter="beforeEnter" 
			@enter="enter" 
			@before-leave="beforeLeave" 
			@leave="leave" >
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button @click="componenteSelecionado = 'AlertaInfo'" variant="primary" class="mr-2">Info</b-button>
			<b-button @click="componenteSelecionado = 'AlertaAdvertencia'" variant="primary">Advertencia</b-button>
		</div>
		<transition  
			enter-active-class="animate__animated animate__fadeOut"
			leave-active-class="animate__animated animate__backOutLeft"
			mode="out-in">
			<component :is="componenteSelecionado"> </component>
		</transition> -->
		
		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>

		<transition-group 
			enter-active-class="animate__animated animate__backInRight"
			leave-active-class="animate__animated animate__fadeOutDown" 
			move-class="movemove"
		>
			<b-list-group v-for="(aluno,index) in alunos" :key="index">
				<b-list-group-item @click="removerAluno(index)" >{{aluno}}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
	import AlertaAdvertencia from '@/components/AlertaAdvertencia.vue'
	import AlertaInfo from '@/components/AlertaInfo.vue'

	export default {
		components: {AlertaAdvertencia, AlertaInfo},
		data() {
			return {
				alunos : ['Roberto','Julia','Tereza','Paulo'],
				msg: 'Uma mensagem de  informacao para o usuario',
				exibir: false,
				exibir2: true,
				larguraBase: 0,
				componenteSelecionado: 'AlertaInfo'
			}
		},
		methods: {
			adicionarAluno(){
				this.alunos.push('aluno '+this.alunos.length)
			},
			removerAluno(indice){
				this.alunos.splice(indice,1)
			},
			animar(el, done, negativo) {
				let rodada = 1
				const temporizador = setInterval(() => {
					const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : rodada * 10)
					el.style.width = `${novaLargura}px`
					rodada++
					if (rodada > 30) {
						clearInterval(temporizador)
						done()
					}
				}, 20)
			},
			beforeEnter(el) {
				this.larguraBase = 0
				el.style.width = `${this.larguraBase}px`
			},
			enter(el, done) {
				this.animar(el, done, false)
			},
			beforeLeave(el) {
				this.larguraBase = 300
				el.style.width = `${this.larguraBase}px`
			},
			leave(el, done) {
				this.animar(el, done, true)
			},
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		font-size: 1.5rem;
	}

	.caixa {
		height: 100px;
		width: 300px;
		margin: 30px auto;
		background-color: lightgreen;
	}

	@keyframes slide-in {
		from {
			transform: translateY(40px);
		}

		to {
			transform: translateY(0);
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
		}

		to {
			transform: translateY(40px);
		}

	}

	.fade-enter .fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active .fade-leave-active {
		transition: opacity 2s;
	}

	.slide-enter-active {
		animation: slide-in 2s ease;
		transition: opacity 2s;
	}

	.slide-leave-active {
		animation: slide-out 2s ease;
		transition: opacity 2s;
	}

	.slide-enter,
	.slide-leave-to {
		opacity: 0;
	}

	.animate__animated.animate__backInRight {
		--animate-duration: 0.5s;
	}

	.animate__animated.animate__backOutLeft {
		--animate-duration: 1.5s;
	}

</style>