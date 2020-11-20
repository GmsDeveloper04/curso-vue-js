<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-destaque="'blue'">Usando diretiva v-destaque (sem arg)</p>
		<p v-destaque:fundo="'lightblue'">Usando diretiva v-destaque (com arg)</p>
		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva v-destaquen (com arg e modifier atrasar)</p>
		
		
		<p v-destaque-local="'blue'">Usando diretiva v-destaque-local (sem arg)</p>
		<p v-destaque-local:fundo="'lightblue'">Usando diretiva v-destaque-local (com arg)</p>
		<p v-destaque-local.alternar="'lightblue'">Usando diretiva v-destaque-local (com arg e modifier atrasar)</p>
	</div>
</template>

<script>
	export default {
		directives: {
			'destaque-local': {
				bind(el, binding, vnode) {
					
					const aplicarCor = cor => {
						if (binding.arg === 'fundo') {
							el.style.backgroundColor = cor
						} else {
							el.style.color = cor
						}
					}

					let atraso = 0
					if (binding.modifiers['atrasar'])
						atraso = 3000


					const cor1 = binding.value
					const cor2 = 'purple'
					let corAtual = cor1;

					setTimeout(() =>{
						if(binding.modifiers['alternar']){
							setInterval(() => {
								
								corAtual = corAtual === cor1 ? cor2 : cor1
								console.log(corAtual)
								aplicarCor(corAtual)
							},1000)
						}else{
							aplicarCor(binding.value)
						}
						
					},atraso)
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
</style>