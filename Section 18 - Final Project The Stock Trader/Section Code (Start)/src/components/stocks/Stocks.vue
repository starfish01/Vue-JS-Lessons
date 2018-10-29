<template>
    <div class="panel panel-default">
        <div class="panel-body">
        <h4>Stocks</h4>
            <div class="row">
                <div v-for="index in getStocks" :key="index" class="col-sm-6 stock-block col-xs-12">
                    <app-stock :index="index"></app-stock>
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
