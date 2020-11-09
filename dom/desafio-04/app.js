new Vue({
	el: '#desafio',
	data: {
		efeitoDoIniciarEfeito: '',
		classeInformadaPeloUsuario: '',
		classeParaAplicar : 'vermelho',
		desejaAplicarClasse : true,
		estiloInformadoPeloUsuario : '',
		width : 20,
	},
	methods: {
		iniciarEfeito() {

			this.efeitoDoIniciarEfeito = 'destaque'

			setInterval(() => {
				this.efeitoDoIniciarEfeito = 'encolher'
			}, 2000)

		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador) 
			},500)
		}
	}
})