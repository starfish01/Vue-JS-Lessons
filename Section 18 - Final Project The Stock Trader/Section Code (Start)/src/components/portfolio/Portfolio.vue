<template>
    <div class="panel panel-default">
        <div class="panel-body">
        <h4>Portfolio</h4>
            <div class="row">
                <div class="col-sm-6 stock-block col-xs-12" v-for="stock in getStockBought" :key="stock.time">
                    <app-stock :stock="stock" ></app-stock>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Stock from './orderItem.vue'

export default {
    computed:{
        ...mapGetters([
            'getStockBought'
        ])
    },
    components:{
        appStock:Stock
    }

}
</script>

<style>

</style>
