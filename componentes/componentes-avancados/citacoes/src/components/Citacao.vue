<template>
    <div class="citacao">
        <slot></slot>
        <slot name="fonte"></slot>
        <slot name="autor"></slot>
    </div>
</template>

<script>
export default {
    created(){
        console.log('[CITACAO] created')
    },
    destroyed(){
        console.log('[CITACAO] destroyed')
    },
    activated(){
        console.log('[CITACAO] activated') //QUANDO O COMPONENTE DINAMICO ESTÁ RENDERIZADO CONDICIONALMENTE COM KEEP ALIVE SIMULA CREATED
    },
    deactivated(){
        console.log('[CITACAO] deactivated') //QUANDO O COMPONENTE DINAMICO ESTÁ RENDERIZADO CONDICIONALMENTE COM KEEP ALIVE SIMULA DESTROYESD
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
