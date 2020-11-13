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
        },

        //CREATED
        createNewTask(task){
            this.$emit('taskCreated',task)
            console.log('taskCreated was emited', task)
        },
        onTaskCreated(callBack){
            this.$on('taskCreated',callBack)
            console.log('taskCreated listener registered')
        }
    }
})