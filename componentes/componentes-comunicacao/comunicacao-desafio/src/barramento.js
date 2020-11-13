import Vue from 'vue'

export default new Vue({
    methods : {
        emitirEvento(eventName,data){
            this.$emit(eventName,data)
            console.log('emitido',data)
        },
        ouvirEvento(eventName,callback){
            this.$on(eventName,callback)
        }
    }
})