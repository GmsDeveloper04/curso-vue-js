<template>
    <div class="taskCreator">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <input 
                    placeholder="digite a nova task aqui" 
                    type="text" 
                    class="form-control"
                    @keydown.enter="addTask"
                    v-model="novaTask.description"
                    >
                
            </div>
        </div>

        <div class="row">
            <div class="col-md-1 mx-auto">
                
            <button  
                    class="btn btn-secondary"
                    @click="addTask"
                   
                    >Adicionar</button>
            
        </div>
    </div>
    </div>
</template>


<script>
import taskBus from '@/taskBus'

export default {

    data() {
        return {
            novaTask : { description : '', completed: false}
        }
    },
    methods : {
        addTask(){
            taskBus == taskBus
            this.$emit('taskCreated',this.novaTask)
        }
    }
}
</script>


<style scoped>
    .taskCreator .row button {
        margin-top: 5%;
    }
</style>