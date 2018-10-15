<template>
    <div class="row">
        <div class="col-sm-6">
            <h3>Monster</h3>
            <app-info></app-info>
        </div>
        <div class="col-sm-6">
            <h3>Hero</h3>
            <app-info></app-info>
        </div>
    </div>
    
</template>

<script>
import Info from './Info.vue'

export default {
    components:{
        appInfo: Info
    }

}
</script>

<style>

</style>
