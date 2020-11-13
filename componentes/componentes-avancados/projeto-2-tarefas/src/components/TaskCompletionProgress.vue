<template>
    <div class="row">

        <div class="col-md-8 mx-auto">
            <h2 class="text-center">CheckList de Tarefas 
               <p v-show="taskList.length > 0"> ({{progress}}) </p>
                </h2>
            <div v-show="taskList.length > 0" class="bar border border-secondary rounded"> 
                <div :style="[{'width':progress}]" class="progress"></div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    props : {
        taskList : Array
    },
    data() {    
        return {
            widthProgress : 50
        }
    },
    computed : {
        progress(){

            //SE NAO POSSUI TASK
            if(this.taskList.length == 0)
                return '0%'
            
            function completed(value){
                return value.completed == true
            }

            let tasksCompleted = this.taskList.filter(completed).length
            
            let percentualConcluido = tasksCompleted * 100 / this.taskList.length

            return `${Math.floor(percentualConcluido * 100) / 100}%`
        }
    }
}
</script>


<style scoped>
    .bar{
        border: solid;
        margin-bottom: 5%;
    }
    .progress {
        width: 20%;
        background-color: rgb(26, 175, 26);
    }
</style>