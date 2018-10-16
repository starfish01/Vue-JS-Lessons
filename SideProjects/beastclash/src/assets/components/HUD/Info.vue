<template>
    <div>
        <div class="progress">
            <div class="progress-bar progress-right" :class="playerHealth < 30 ? 'bg-danger' : ''"   role="progressbar" :style="{width: playerHealth +'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{playerHealth}}</div>
        </div> 
    </div>
</template>

<script>
export default {
    props:['playerHealth']

}
</script>

<style>



</style>
