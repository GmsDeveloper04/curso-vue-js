new Vue({
    el: '#desafio',
    data: {
        nome : 'Guilherme',
        idade : 22,
        pathDaImagem : 'https://a.espncdn.com/i/teamlogos/soccer/500/874.png'
    },
    methods: {
        zeroOuUm : function() {
            return Math.random();
        },

        zeroOuUmDiferente() {
            return Math.random();
        }
    }
})