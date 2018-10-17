<template>
    <div class="row">
        <div class="col-sm-6">
            <h3>{{playerData[1].name}}</h3>
            <app-info :playerHealth="playerData[1].health"></app-info>
        </div>
        <div class="col-sm-6">
            <h3>{{playerData[0].name}}</h3>
            <app-info :playerHealth="playerData[0].health"></app-info>
        </div>
    </div>
    
</template>

<script>
import Info from './Info.vue'

export default {
    props:{
        playerData:{
            options:Object
        }
    },
    components:{
        appInfo: Info
    }

}
</script>

<style>

</style>
