<template>
    <div class="panel panel-default">
        <div class="panel-body">
        stocks
        {{getStocks}}
            <div class="row">
                <div v-for="index in 10" :key="index" class="col-md-6">
                    <app-stock :getStocks="getStocks"></app-stock>
                </div>
            </div>
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

.stock-block{
    display: inline-block
}

</style>
