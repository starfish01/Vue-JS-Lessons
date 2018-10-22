<template>
    <div class="row">
        <div class="col-sm-6">
            <transition appear enter-active-class="animated rollIn">
                <h3>{{playerData[1].name}}</h3>
            </transition>
            <app-info :playerHealth="playerData[1].health"></app-info>
        </div>
        <div class="col-sm-6">
            <transition  enter-active-class="animated rollIn ">
            <h3 style="text-align: right;">{{playerData[0].name}}</h3>
            </transition>
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
    data(){
        return{
            show:false
        }
    },
    components:{
        appInfo: Info
    }

}
</script>

<style>

</style>
