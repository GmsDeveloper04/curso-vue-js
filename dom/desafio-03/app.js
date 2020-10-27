new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed : {
        resultado() {
            return this.valor != 37 ? 'Valor diferente' : 'Valor igual'
        }
    },
    watch: {
        resultado(anterior,atual){
            console.log('zerando valor 37')
            setTimeout(() => {
                this.valor = 0
            },5000)
        }
    }
});