<template>
    <div class="row">
        <button class="btn btn-danger" @click="actionFn(0)">Give Up</button>
        <button class="btn btn-warning" @click="actionFn(2)">Special Attack</button>
        <button class="btn btn-success" @click="actionFn(1)">Attack</button>
        <button class="btn btn-primary"@click="actionFn(3)">Heal</button>
    </div>
    
</template>

<script>
export default {
    props:{
        actionFn: Function
    },
}
</script>

<style scoped>

button{
    width: 25%;
}

</style>
