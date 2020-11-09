new Vue({
    el:'#game',
    data: {
        message : 'success',
        vidaMonstro : 100,
        vidaPlayer : 100,
        jogoIniciado: false,
        perdeuJogo: false,
        venceuJogo: false,
        logJogadas : []
    },
    methods :{
        desistir(){
            this.jogoIniciado = false
            this.resetGame()
        },
        atacarEspecial(){
            let hitPlayer = parseInt(Math.random() * (10 - 5) + 5) + 2
            this.vidaMonstro -= hitPlayer

            this.atacarPlayer()
        },
        atacar(){
            let hitPlayer = parseInt(Math.random() * (8 - 5) + 5)
            this.vidaMonstro -= hitPlayer

            this.atacarPlayer();
        },
        atacarPlayer(){
            let hitMonster = parseInt(Math.random() * (11 - 5) + 5)
            this.vidaPlayer -= hitMonster
        },
        iniciarJogo(){
            this.resetGame()
            this.jogoIniciado = true;
        },
        curar(){
            let pontosDeCura = parseInt(Math.random() * (8 - 5) + 5)
            this.vidaPlayer += pontosDeCura

            this.atacarPlayer();
        },
        resetGame(){
            this.vidaMonstro = 100
            this.vidaPlayer = 100
            this.venceuJogo = false;
            this.perdeuJogo = false;
            this.logJogadas = []
        }

    },
    computed:{
        estiloProgressMonstro(){
            return {
                'width': `${this.vidaMonstro}%`,
                'background-color': this.vidaMonstro < 20 ? 'red': 'green',
                'height': '100%'
            }
        },
        estiloProgressPlayer(){
            return {
                'width': `${this.vidaPlayer}%`,
                'background-color': this.vidaPlayer < 20 ? 'red': 'green',
                'height': '100%'
            }
        },
        resultadoBatalha(){

            if(this.vidaMonstro <= 0){
                this.venceuJogo = true
                this.vidaMonstro = 0
                this.jogoIniciado = false
                return "Você venceu!"
            } else if(this.vidaPlayer <= 0){
                this.perdeuJogo = true
                this.vidaPlayer = 0
                this.jogoIniciado = false
                return "Você perdeu!"
            }
        }
    },
    watch : {
        vidaMonstro(novo,antigo){
            if(novo < antigo){
                //SE NOVO < ANTIGO = JOGADOR ATINGIU MONSTRO COM
                this.logJogadas.push({
                    responsavel : 'jogador',
                    jogada : `JOGADOR ATINGIU MONSTRO COM ${ (antigo - novo) }`
                })
            }

        },

        vidaPlayer(novo,antigo){

            if(novo < antigo){
                //SE NOVO < ANTIGO = MONSTRO ATINGIU JOGADOR COM
                this.logJogadas.push({
                    responsavel : 'monstro',
                    jogada : `MONSTRO ATINGIU JOGADOR COM ${ (antigo - novo) }`
                })
            }
            
            if(novo > antigo){
                //SE NOVO > ANTIGO = 
                this.logJogadas.push({
                    responsavel : 'jogador',
                    jogada : `JOGADOR GANHOU FORÇA DE ${ (novo - antigo) }.`
                })
            }
            
        }
     }
})