new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {

        exibitAlerta(){
            alert('Exibindo alerta')
        },
        keyDownFunction(event){
            this.valor = event.target.value
        }
    }
})