<template>
    <div class="task border border-secondary rounded"> 
        <h5    
            @click="task.completed = !task.completed"
            :class="classDescription"
            ><strong>{{task.description}}</strong>
        </h5>
        
        <p  class="float-right border border-secondary"
            @click="deleteTask">
            <i class="fas fa-trash"></i>
        </p>
    </div>
</template>


<script>
import taskBus from '@/taskBus'

export default {
    props :  
        {
            task : Object,
            index : Number
        },
    methods : {
        deleteTask(){
           taskBus.deleteTask(this.task,this.index)
        }
    },
    computed : {
        classDescription(){
            if(this.task.completed){
                return 'taskCompleted'
            }
            return 'taskInconplete';
        }
    }
}
</script>


<style scoped>
    .task{
        width:  100%;
        height: 100%;
    }

    .task h1 {
        text-align: center;
    }
    
    .task h5{
        float: left;
        height: 100%;
        width: 90%;
        text-align: center;
        color:white;
    }
    .task p{
        float: right;
        height: 100%;
        width: 10%;
        text-align: center;
        margin:auto;
        font-family: sans-serif;
    }
    
    .taskCompleted {
        text-decoration: line-through;
        background-color: rgb(74, 190, 74);
    }

    .taskInconplete {
        background-color:rgb(201, 30, 30);
    }

</style>