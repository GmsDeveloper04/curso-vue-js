<template>
  <div class="container-fluid">
    <TaskCompletionProgress :taskList="taskList"/>
    <TaskCreator/>
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
  created(){
        taskBus.onTaskCreated(newTask => {
            console.log('new task received',newTask)
            this.taskList.push( {... newTask} )
        }),

        taskBus.onTaskDeleted((task, index) => {
            console.log('Deleting task',this.taskList,index)
            this.taskList.splice(index, 1); 
        })

    }
};
</script>
