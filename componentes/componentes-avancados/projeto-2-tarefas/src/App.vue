<template>
  <div class="container-fluid">
    <TaskCompletionProgress :taskList="taskList"/>
    <TaskCreator @taskCreated="addTask"/>
    <hr>
    <TaskList :taskList="taskList" />
  </div>

</template>

<script>
import TaskList from '@/components/TaskList.vue';
import TaskCreator from '@/components/TaskCreator.vue';
import TaskCompletionProgress from '@/components/TaskCompletionProgress.vue';
import taskBus from '@/taskBus'

export default {
  name: 'App',

  components: {
    TaskList,
    TaskCreator,
    TaskCompletionProgress
  },

  data() {
    return {
            taskList : []
        }
  },
  methods : {
    addTask(newTask) {
      console.log('new task received',newTask)

            const sameDescription = t => t.description == newTask.description;

            const hasNotDuplicatedValues = this.taskList.filter(sameDescription).length == 0

            if(hasNotDuplicatedValues){
              this.taskList.push( {... newTask} )
            }
    }
  }
  ,
  created(){
        taskBus.onTaskDeleted((task, index) => {
            console.log('Deleting task',this.taskList,index)
            this.taskList.splice(index, 1); 
        })

    }
};
</script>
