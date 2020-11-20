<template>
	<div id="app">
		<h1 v-quando:click="someFunction"	>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
	</div>
</template>

<script>
export default {
	methods : {
		someFunction(){
			console.log('some function was called')
		}
	},
	directives : {
		'quando' : {
			bind(el,binding){
				let event = binding.arg

				if(event != undefined && binding.value != undefined){

					if(typeof binding.value === 'function'){
						el.addEventListener(event,binding.value)
					}else{
						console.warn(binding.value + ' is not a function')
					}

				}
			}
		}
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
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
