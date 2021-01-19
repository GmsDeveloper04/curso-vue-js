export default {
    data() {
        return {
            cpfDoAluno: '47283046801',
            fruta: '',
            frutas: ['banana', 'maça', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
    created(){
        console.log('mixing frutasMixins created.')
    }
}