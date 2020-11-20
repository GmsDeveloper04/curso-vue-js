import Vue from 'vue'

export default new Vue({
    methods : {
        //DELETED
        deleteTask(task,index){
            console.log('taskCreated was deleted', task, index)
            this.$emit('taskDeleted',task, index)
        },
        onTaskDeleted(callBack){
            this.$on('taskDeleted',callBack)
            console.log('taskDeleted listener registered')
        }
    }
})