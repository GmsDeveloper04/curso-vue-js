export default {
    data() {
        return {
            texto: 'Lorem ipsum dolor sit amet',
            pedroElegal: 'Pedro é legal'
        }
    },
    computed: {
        trocarExpacoPorVirgulaComputed() {
            return this.texto.replaceAll(' ', ',')
        },
        valorComTamanho() {
            return this.pedroElegal + ' (' + this.pedroElegal.length + ')';
        }
    }
}