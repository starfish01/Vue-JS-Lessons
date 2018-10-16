<template>
    <div class="row">
        <button class="btn btn-danger">Give Up</button>
        <button class="btn btn-warning">Special Attack</button>
        <button class="btn btn-success" @click="attackFn(1)">Attack</button>
        <button class="btn btn-primary">Heal</button>
    </div>
    
</template>

<script>
export default {
    props: {
        attackFn: Function
    }

}
</script>

<style scoped>

button{
    width: 25%;
}

</style>
