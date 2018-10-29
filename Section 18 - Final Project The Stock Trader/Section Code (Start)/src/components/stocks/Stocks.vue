<template>
    <div class="panel panel-default">
        <div class="panel-body">
        stocks
        {{getStocks}}
        <app-stock :getStocks="getStocks"></app-stock>

        </div>
    </div>
</template>

<script>
import Stock from './Stock.vue'

import { mapGetters, mapActions } from 'vuex'


export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapGetters([
            'getStocks'
        ])
    },
    methods:{
        ...mapActions([
            
        ])
    },
    components:{
            appStock:Stock,
    },
}
</script>

<style>

</style>
