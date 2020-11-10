<template>
  <h1>{{ titulo }} </h1>
  <button @click="titulo += '#'">Alterar</button>
</template>

<script>
export default{
  data : function() {
    return {
      titulo : 'algum dado'
    }
  }
} 
</script>


<style>

</style>
