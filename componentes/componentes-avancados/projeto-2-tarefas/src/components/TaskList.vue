<template>
    
    <div class="taskList">

        <h2>Lista de Tarefas</h2>

        <div  class="row">
            <div v-for="(task, index) in taskList" :key="index" class="col-md-3">
                 <Task :task="task" :index="index" />
            </div>
        </div>  
    </div>
</template>


<script>
import Task from '@/components/Task.vue'

export default {
    props: {
        taskList : Array
    },
    components : {
        Task
    },
   
    
}
</script>


<style scoped>
    .taskList .row .col-md-3 {
        padding: 0.4%
    }

    h2 {
        text-align:center;
    }
</style>